import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls window to top automatically on every route change.
 * Prevents scroll position carryover between pages in React Router.
 */
export function ScrollToTop(): null {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
