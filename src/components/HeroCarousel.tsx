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
      className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] bg-[#1A3C29] text-[#F5F1E8] flex flex-col justify-between overflow-hidden border-b-4 border-[#C3A66B]"
      aria-roledescription="carousel"
      aria-label="NSS VIIT (A) Highlighted Initiatives Carousel"
      tabIndex={0}
    >
      {/* Background Photographic Image with Responsive Fade & Dark Institutional Overlay */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlideIndex
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            <img
              src={slide.imageUrl}
              alt={slide.imageAlt}
              className="w-full h-full object-cover object-center transform scale-105 motion-safe:transition-transform motion-safe:duration-7000"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Multi-layered dark forest-green & vignette gradient for WCAG AAA contrast */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#1A3C29]/95 via-[#1A3C29]/85 to-[#1A3C29]/75"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#1A3C29] via-transparent to-[#1A3C29]/60"
              aria-hidden="true"
            />
          </div>
        )
      })}

      {/* Subtle geometric pattern layer */}
      <div
        className="absolute inset-0 opacity-15 bg-[radial-gradient(#C3A66B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Alignment Banner inside Hero */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F5F1E8]/15 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C3A66B] animate-pulse" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C3A66B]">
              {currentSlide.accentBadge}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F1E8]/10 border border-[#C3A66B]/40 text-xs font-semibold tracking-wider text-[#F5F1E8]/90">
            <span>Ministry of Youth Affairs &amp; Sports &bull; Govt of India</span>
          </div>
        </div>
      </div>

      {/* Central Storytelling Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 my-auto">
        <div className="max-w-3xl space-y-6 text-left">
          {/* Slide Theme Tag */}
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#C3A66B]/20 text-[#C3A66B] text-xs font-bold uppercase tracking-widest border border-[#C3A66B]/50 backdrop-blur-xs">
            {currentSlide.themeTitle}
          </div>

          {/* Headline in Playfair Display */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#F5F1E8] !text-[#F5F1E8]"
            style={{ fontFamily: 'var(--font-heading)', color: '#F5F1E8' }}
          >
            {currentSlide.headline}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-semibold text-[#C3A66B] leading-snug">
            {currentSlide.subheading}
          </p>

          {/* Detailed Narrative */}
          <p className="text-sm sm:text-base text-[#F5F1E8]/90 font-normal leading-relaxed max-w-2xl">
            {currentSlide.description}
          </p>

          {/* Two Functional High-Contrast Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/events"
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#C3A66B] !text-[#1A3C29] hover:bg-white hover:!text-[#1A3C29] transition-all duration-200 shadow-lg text-center focus:outline-none focus:ring-2 focus:ring-white"
              style={{ color: '#1A3C29' }}
            >
              Explore Public Activities &rarr;
            </Link>
            <Link
              to="/my-bharat"
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-transparent !text-[#F5F1E8] border-2 border-[#C3A66B] hover:bg-[#C3A66B] hover:!text-[#1A3C29] transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-[#C3A66B]"
              style={{ color: '#F5F1E8' }}
            >
              Mera Yuva Bharat Youth Cell
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Carousel Controls, Slide Indicators & Pause Toggle */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4 border-t border-[#F5F1E8]/15">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Slide Index & Indicators */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#C3A66B]" aria-live="polite">
              0{currentSlideIndex + 1} / 0{totalSlides}
            </span>

            <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide Selection">
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
                    className={`h-2 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C3A66B] cursor-pointer ${
                      isActive ? 'w-8 bg-[#C3A66B]' : 'w-2 bg-[#F5F1E8]/40 hover:bg-[#F5F1E8]/70'
                    }`}
                  />
                )
              })}
            </div>
          </div>

          {/* Right: Previous / Next Controls and Pause/Play Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#F5F1E8]/60 hidden md:inline">
              Demonstration archival photography &bull; Authentic VIIT NSS archives
            </span>

            <button
              type="button"
              onClick={() => { setIsPaused(!isPaused); }}
              className="p-2 rounded-full bg-[#F5F1E8]/10 hover:bg-[#F5F1E8]/20 border border-[#F5F1E8]/20 text-[#F5F1E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A66B] cursor-pointer"
              aria-label={isPaused ? 'Resume automatic slide rotation' : 'Pause automatic slide rotation'}
              title={isPaused ? 'Resume Carousel' : 'Pause Carousel'}
            >
              {isPaused ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={goToPrevSlide}
              className="p-2 rounded-full bg-[#F5F1E8]/10 hover:bg-[#F5F1E8]/20 border border-[#F5F1E8]/20 text-[#F5F1E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A66B] cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={goToNextSlide}
              className="p-2 rounded-full bg-[#F5F1E8]/10 hover:bg-[#F5F1E8]/20 border border-[#F5F1E8]/20 text-[#F5F1E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A66B] cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
