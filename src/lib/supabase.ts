/**
 * NSS VIIT (A) — Supabase Client
 *
 * SECURITY RULES (from TRD §3, PRD §8):
 * ─────────────────────────────────────
 * 1. Only the anon/public key is used here. It is safe to bundle.
 * 2. The service-role key MUST NEVER appear in this file or any
 *    VITE_-prefixed environment variable.
 * 3. All protected operations rely on Row Level Security (RLS)
 *    policies and server-side validation — NOT on client-side guards.
 * 4. Authorization is server-enforced. Client code must never be
 *    the sole check for role-based access. (TRD §3)
 *
 * Phase 1 status: Client is created but NO production project
 * is connected. Configure .env with real values before Phase 3.
 */
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Fail loudly in development so misconfiguration is caught immediately.
  // In production the build should fail if env vars are missing.
  throw new Error(
    '[NSS VIIT(A)] Missing Supabase environment variables.\n' +
    'Copy .env.example to .env and fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.\n' +
    'Never use the service-role key as VITE_ prefixed variable.',
  )
}

/**
 * Singleton Supabase client for browser-side usage.
 * Typed against the generated Database type (generated from the
 * Supabase CLI once the schema is migrated in Phase 3+).
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Persist sessions in localStorage for single-page app usage.
    persistSession: true,
    // Auto-refresh tokens before they expire.
    autoRefreshToken: true,
    // Detect OAuth redirect callbacks.
    detectSessionInUrl: true,
  },
})
