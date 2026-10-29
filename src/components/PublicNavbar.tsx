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
      {/* ── 1. Slim Institutional Top Strip ──────────────────────────────── */}
      <div className="bg-[#EBE5D8] text-[#292D2A] text-[11px] py-1 px-4 sm:px-6 lg:px-8 border-b border-[#292D2A]/10 leading-tight">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-x-3 gap-y-0.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 truncate">
            <span className="font-semibold text-[#1A3C29]">
              Vignan&apos;s Institute of Information Technology (Autonomous)
            </span>
            <span className="hidden sm:inline text-[#292D2A]/35" aria-hidden="true">&bull;</span>
            <span className="hidden sm:inline text-[#292D2A]/80 font-medium">
              Affiliated to JNTUGV, Vizianagaram
            </span>
            <span className="hidden md:inline text-[#292D2A]/35" aria-hidden="true">&bull;</span>
            <span className="hidden md:inline text-[#292D2A]/70">
              Duvvada, Visakhapatnam
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] ml-auto shrink-0 font-medium">
            <Link
              to="/volunteer"
              className="text-[#1A3C29] hover:text-[#C3A66B] transition-colors hidden sm:inline"
            >
              Induction Notice
            </Link>
            <span className="hidden sm:inline text-[#292D2A]/25" aria-hidden="true">|</span>
            <Link
              to="/contact"
              className="text-[#1A3C29] hover:text-[#C3A66B] transition-colors"
            >
              Campus NSS Cell Office
            </Link>
          </div>
        </div>
      </div>

      {/* ── 2. Compact Primary Navigation Bar ────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#292D2A]/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
          {/* Logo & Identity */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#1A3C29] rounded-md p-0.5 group shrink-0"
            aria-label="NSS VIIT (A) Home"
          >
            <div className="p-0.5 bg-white rounded-full border border-ivory-300 shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <img
                src="/assets/logos/nss-logo.webp"
                alt="National Service Scheme Seal"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                width="40"
                height="40"
              />
            </div>
            <div className="border-l border-[#C3A66B]/50 pl-2.5 sm:pl-3 flex flex-col justify-center">
              <span
                className="text-base sm:text-lg font-bold tracking-tight text-[#1A3C29] leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                NSS VIIT (A)
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#C3A66B] mt-0.5 hidden sm:inline">
                National Service Scheme &bull; MY Bharat
              </span>
            </div>
          </Link>

          {/* Actions & Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1">
              {PRIMARY_NAV_ITEMS.map((item) => {
                const active = isCurrent(item.to)
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={`px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${
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

            <div className="h-4 w-px bg-[#292D2A]/20 mx-1 hidden lg:block" aria-hidden="true" />

            {/* Dark-Green Menu Trigger Button (Used for both Desktop & Mobile) */}
            <button
              type="button"
              onClick={() => { setOverlayOpen(true); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1A3C29] hover:bg-[#1A3C29]/90 text-[#F5F1E8] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1A3C29] cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded={overlayOpen}
              aria-controls="institutional-navigation-overlay"
              aria-label="Explore institutional navigation menu"
            >
              <svg
                className="w-3.5 h-3.5 shrink-0"
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
