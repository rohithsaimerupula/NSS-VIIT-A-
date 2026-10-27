/**
 * NSS VIIT (A) — Application Entry Point
 *
 * Responsibilities:
 * - Mount the React application onto #root.
 * - Import the global CSS tokens and reset.
 * - Wrap the application in StrictMode for development-time warnings.
 *
 * NOTE: No router, auth providers or Supabase client are initialized here
 * yet. Those are added in subsequent phases.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/globals.css'
import App from '@/app/App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    '[NSS VIIT(A)] Root element #root not found. Check index.html.',
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
