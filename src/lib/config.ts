/**
 * NSS VIIT (A) — Environment Configuration
 *
 * Centralizes access to environment variables and feature flags.
 * Components must import from here, not from import.meta.env directly,
 * so that all env access is visible, typed and validated in one place.
 *
 * SECURITY: Only VITE_ prefixed values are available in the browser.
 * The service-role key and other secrets must never be accessed here.
 */
import type { FeatureFlags } from '@/types'

/** Supabase public configuration (anon key only). */
export const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
} as const

/** Application metadata. */
export const appConfig = {
  name: import.meta.env.VITE_APP_NAME ?? 'NSS VIIT (A)',
  institution:
    import.meta.env.VITE_APP_INSTITUTION ??
    "Vignan's Institute of Information Technology (Autonomous)",
  env: import.meta.env.VITE_APP_ENV ?? 'development',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const

/**
 * Feature flags.
 *
 * registrationEnabled — PRD §6.1:
 *   "Registration stays disabled during development; opens only by
 *    separate authorized decision."
 * Default is explicitly false; must be opt-in via env variable.
 */
export const featureFlags: FeatureFlags = {
  registrationEnabled:
    import.meta.env.VITE_REGISTRATION_ENABLED === 'true',
}
