import { useState, useEffect, type ReactElement, type ReactNode } from 'react'
import { PublicNavbar } from '@/components/PublicNavbar'
import { PublicFooter } from '@/components/PublicFooter'

interface PublicLayoutProps {
  children: ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps): ReactElement {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { window.removeEventListener('scroll', handleScroll); }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#292D2A] flex flex-col font-sans selection:bg-[#C3A66B]/30 selection:text-[#1A3C29]">
      {/* Accessible keyboard navigation skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <PublicNavbar />

      <main id="main-content" className="flex-1 animate-fade-in focus:outline-none" tabIndex={-1}>
        {children}
      </main>

      <PublicFooter />

      {/* Floating Smooth Back-to-Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#1A3C29] text-[#F5F1E8] hover:bg-[#C3A66B] hover:text-[#1A3C29] transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1A3C29] focus:ring-offset-2 cursor-pointer btn-press"
          aria-label="Scroll back to top of page"
          title="Back to Top"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  )
}
