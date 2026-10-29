import { useState, useEffect, useCallback, useRef, type ReactElement, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Link } from 'react-router-dom'

export interface CarouselSlide {
  id: string
  themeTitle: string
  headline: string
  subheading: string
  description: string
  imageUrl: string
  imageAlt: string
  accentBadge: string
}

const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 'slide-1',
    themeTitle: 'Community Service & Rural Immersion',
    headline: 'Not Me, But You.',
    subheading: 'Connecting engineering education with grassroots social responsibility.',
    description: "Volunteers at Vignan's Institute of Information Technology engage directly with local communities to understand real-world challenges and foster collective progress.",
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'NSS student volunteers collaborating outdoors during community service',
    accentBadge: 'National Service Scheme • VIIT Duvvada',
  },
  {
    id: 'slide-2',
    themeTitle: 'Healthcare & Life Preservation',
    headline: 'Not Me, But You.',
    subheading: 'Student civic stewardship in support of emergency healthcare needs.',
    description: 'Promoting compassionate donor mobilization and health awareness through regular student volunteer coordination in Visakhapatnam.',
    imageUrl: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Youth volunteers organizing health awareness initiatives',
    accentBadge: 'Community Stewardship • Single Official Unit',
  },
  {
    id: 'slide-3',
    themeTitle: 'Environmental Care & Green Campus',
    headline: 'Not Me, But You.',
    subheading: 'Nurturing biodiversity and sustainable environmental stewardship.',
    description: 'Dedicated student teams planting native coastal flora and caring for green corridors across the Duvvada educational belt.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Volunteers planting saplings during campus greening initiative',
    accentBadge: 'Environmental Action • VIIT NSS Cell',
  },
  {
    id: 'slide-4',
    themeTitle: 'Foundational Mentorship & Youth Literacy',
    headline: 'Not Me, But You.',
    subheading: 'Sharing knowledge and foundational skills with young learners.',
    description: 'Empowering future generations through interactive learning sessions, digital primer modules, and creative school workshops.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Volunteers engaging with young students in educational mentorship',
    accentBadge: 'Youth Mentorship • Community Development',
  },
]

export function HeroCarousel(): ReactElement {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalSlides = HERO_SLIDES.length

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Automatic timer transition (6.5s interval)
  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false
    if (isPaused || isHovered || prefersReducedMotion) {
      return
    }

    const timer = setInterval(() => {
      goToNextSlide()
    }, 6500)

    return () => { clearInterval(timer); }
  }, [isPaused, isHovered, goToNextSlide])

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goToNextSlide()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goToPrevSlide()
    }
  }

  const currentSlide = HERO_SLIDES[currentSlideIndex]

  return (
    <section
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => { setIsHovered(true); }}
      onMouseLeave={() => { setIsHovered(false); }}
      className="relative w-full bg-[#F5F1E8] overflow-hidden border-b border-[#292D2A]/10 min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center"
      aria-roledescription="carousel"
      aria-label="NSS VIIT (A) Highlighted Initiatives Carousel"
      tabIndex={0}
    >
      {/* Full-width Background Photo Slides with Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.imageUrl}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center lg:object-[center_right] transform scale-105 motion-safe:transition-transform motion-safe:duration-7000 ease-out"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          )
        })}

        {/* Responsive Natural Ivory Gradient Overlay:
            Solid ivory under the left text column, transitioning cleanly to transparent over the photo on the right.
            Eliminates white haze over the photography while guaranteeing WCAG text legibility. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F5F1E8] from-30% via-[#F5F1E8]/90 via-45% sm:via-[#F5F1E8]/60 sm:via-60% to-transparent"
          aria-hidden="true"
        />
        {/* Vertical scrim for mobile viewports where text stacks above imagery */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#F5F1E8] via-[#F5F1E8]/75 to-transparent sm:hidden"
          aria-hidden="true"
        />
      </div>

      {/* Main Foreground Storytelling Content (Constrained to Left ~50%) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-[#C3A66B]/35 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#1A3C29] shadow-xs mb-4 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#C3A66B] animate-pulse" aria-hidden="true" />
            <span className="font-bold">VIIT &bull; NSS</span>
            <span className="text-[#292D2A]/40" aria-hidden="true">&bull;</span>
            <span>{currentSlide.themeTitle}</span>
          </div>

          {/* Main Headline in Editorial Playfair Display */}
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A3C29] leading-[1.08] mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {currentSlide.headline}
          </h1>

          {/* Editorial Subheading in Playfair Serif */}
          <p
            className="font-serif text-lg sm:text-xl text-[#1A3C29]/90 font-medium leading-snug mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {currentSlide.subheading}
          </p>

          {/* Descriptive Narrative Copy */}
          <p className="text-sm sm:text-base text-[#292D2A]/80 leading-relaxed max-w-xl mb-7 font-normal">
            {currentSlide.description}
          </p>

          {/* Two Clearly Differentiated CTAs Matching Reference */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] bg-[#1A3C29] text-[#F5F1E8] hover:bg-[#1A3C29]/90 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs group"
            >
              <span>Explore Public Activities</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              to="/my-bharat"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] bg-white/90 hover:bg-white text-[#1A3C29] border border-[#292D2A]/20 hover:border-[#1A3C29] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs"
            >
              <svg
                className="w-4 h-4 text-[#C3A66B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>Mera Yuva Bharat Youth Cell</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Carousel Controls Matching Reference Proportions */}
      <div className="absolute z-20 bottom-4 sm:bottom-6 left-4 right-4 sm:left-8 sm:right-8 flex items-center justify-between pointer-events-none">
        {/* Slide Counter & Indicators */}
        <div className="pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#292D2A]/10 shadow-sm text-xs text-[#292D2A]">
          <span className="font-mono font-semibold text-[#1A3C29]" aria-live="polite">
            0{currentSlideIndex + 1}
          </span>
          <span className="text-[#292D2A]/40" aria-hidden="true">/</span>
          <span className="font-mono text-[#292D2A]/60">
            0{totalSlides}
          </span>

          <div className="flex items-center gap-1.5 ml-1" role="tablist" aria-label="Slide Selection">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${String(idx + 1)}: ${slide.themeTitle}`}
                  onClick={() => { setCurrentSlideIndex(idx); }}
                  className={`h-1.5 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-[#1A3C29] cursor-pointer ${
                    isActive ? 'w-6 bg-[#1A3C29]' : 'w-1.5 bg-[#292D2A]/25 hover:bg-[#292D2A]/50'
                  }`}
                />
              )
            })}
          </div>
        </div>

        {/* Previous, Next & Pause Buttons */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => { setIsPaused(!isPaused); }}
            className="p-2 rounded-full bg-white/95 hover:bg-white text-[#1A3C29] border border-[#292D2A]/15 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C29] transition-colors cursor-pointer"
            aria-label={isPaused ? 'Resume automatic slide rotation' : 'Pause automatic slide rotation'}
            title={isPaused ? 'Resume Carousel' : 'Pause Carousel'}
          >
            {isPaused ? (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={goToPrevSlide}
            className="p-2 rounded-full bg-white/95 hover:bg-white text-[#1A3C29] border border-[#292D2A]/15 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C29] transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToNextSlide}
            className="p-2 rounded-full bg-white/95 hover:bg-white text-[#1A3C29] border border-[#292D2A]/15 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C29] transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
