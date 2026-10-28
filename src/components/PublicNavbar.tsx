import { useState, useCallback, type ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { InstitutionalNavigationOverlay } from './InstitutionalNavigationOverlay'

interface NavItem {
  label: string
  to: string
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Team', to: '/team' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'MY Bharat', to: '/my-bharat' },
  { label: 'Contact', to: '/contact' },
]

export function PublicNavbar(): ReactElement {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const location = useLocation()
  const handleClose = useCallback(() => { setOverlayOpen(false); }, [])

  const isCurrent = (to: string) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to || location.pathname.startsWith(`${to}/`)
  }

  return (
    <>
      {/* ── 1. Top Institutional Info Strip ──────────────────────────────── */}
      <div className="bg-[#1A3C29] text-[#F5F1E8] text-[11px] py-1 px-4 sm:px-6 lg:px-8 border-b border-[#C3A66B]/30 tracking-tight">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-[#C3A66B] hidden sm:inline">
              Vignan&apos;s Institute of Information Technology (Autonomous)
            </span>
            <span className="font-semibold text-[#C3A66B] sm:hidden truncate">
              Vignan VIIT (Autonomous)
            </span>
            <span className="hidden sm:inline text-[#F5F1E8]/40" aria-hidden="true">&bull;</span>
            <span className="hidden sm:inline text-[#F5F1E8]/85">
              Affiliated to JNTUGV
            </span>
            <span className="hidden md:inline text-[#F5F1E8]/40" aria-hidden="true">&bull;</span>
            <span className="hidden md:inline text-[#F5F1E8]/70">
              Duvvada, Visakhapatnam
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] shrink-0 font-medium">
            <Link
              to="/volunteer"
              className="hover:text-[#C3A66B] transition-colors hidden sm:inline"
            >
              Induction Notice
            </Link>
            <span className="hidden sm:inline text-[#F5F1E8]/30" aria-hidden="true">|</span>
            <Link
              to="/contact"
              className="hover:text-[#C3A66B] transition-colors"
            >
              NSS Secretariat
            </Link>
          </div>
        </div>
      </div>

      {/* ── 2. Primary Navigation Bar ───────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#292D2A]/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-3">
          {/* Logo & Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#1A3C29] rounded-md p-1 group shrink-0"
            aria-label="NSS VIIT (A) Home"
          >
            <div
              className="w-10 h-10 rounded-full bg-[#1A3C29] border-2 border-[#C3A66B] flex items-center justify-center text-[#F5F1E8] font-serif font-bold text-sm shadow-sm group-hover:scale-105 transition-transform shrink-0"
              aria-hidden="true"
            >
              NSS
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className="text-lg sm:text-xl font-bold tracking-tight text-[#1A3C29] leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                NSS VIIT (A)
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#C3A66B] mt-0.5 hidden sm:inline">
                National Service Scheme &bull; MY Bharat Cell
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#C3A66B] mt-0.5 sm:hidden">
                MY Bharat Youth Cell
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Direct Navigation with Active Highlighting) */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const active = isCurrent(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                    active
                      ? 'bg-[#1A3C29] text-[#F5F1E8] shadow-xs'
                      : 'text-[#292D2A]/75 hover:text-[#1A3C29] hover:bg-[#1A3C29]/10'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions & Two-Panel Directory Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick action for desktop */}
            <Link
              to="/volunteer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#1A3C29] bg-[#C3A66B]/25 hover:bg-[#C3A66B]/40 border border-[#C3A66B]/60 transition-colors"
            >
              <span>Join Unit</span>
            </Link>

            {/* Menu Trigger Button */}
            <button
              type="button"
              onClick={() => { setOverlayOpen(true); }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#1A3C29] text-[#F5F1E8] hover:bg-[#C3A66B] hover:text-[#1A3C29] border border-[#C3A66B] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C29] focus:ring-offset-2 cursor-pointer"
              style={{ color: '#F5F1E8' }}
              aria-haspopup="dialog"
              aria-expanded={overlayOpen}
              aria-controls="institutional-navigation-overlay"
              aria-label="Explore institutional navigation directory"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
              <span>Explore</span>
            </button>
          </div>
        </div>
      </header>

      {/* Institutional Two-Panel Directory Overlay */}
      <InstitutionalNavigationOverlay
        isOpen={overlayOpen}
        onClose={handleClose}
      />
    </>
  )
}
