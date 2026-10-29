import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { heroSlides } from '../../config/contentConfig';

interface HeroProps {
  onExploreActivities?: () => void;
  onOurMission?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const totalSlides = heroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay management
  useEffect(() => {
    if (!isPaused && totalSlides > 1) {
      timerRef.current = window.setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, nextSlide, totalSlides]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const currentSlide = heroSlides[currentSlideIndex] || heroSlides[0];

  return (
    <section
      id="hero"
      role="region"
      aria-roledescription="carousel"
      aria-label="Highlighted initiatives carousel"
      className="relative w-full bg-ivory-100 overflow-hidden border-b border-ivory-300 min-h-[560px] sm:min-h-[640px] lg:min-h-[680px] flex items-center"
      onMouseEnter={() => { setIsPaused(true); }}
      onMouseLeave={() => { setIsPaused(false); }}
      onFocus={() => { setIsPaused(true); }}
      onBlur={() => { setIsPaused(false); }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Full-width Background Photo Slides with Cross-Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={idx !== currentSlideIndex}
          >
            <img
              src={slide.imageUrl}
              alt={slide.imageAlt}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-7000 ease-out"
            />
          </div>
        ))}

        {/* Warm Ivory Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory-100 via-ivory-100/90 sm:via-ivory-100/80 to-ivory-100/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory-100 via-transparent to-transparent sm:hidden" />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 w-full">
        <div className="max-w-2xl">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ivory-50/90 border border-gold-500/30 rounded-full text-[11px] font-semibold uppercase tracking-wider text-forest-900 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-gold-600 animate-pulse" />
            <span className="font-bold">VIIT · NATIONAL SERVICE SCHEME</span>
            <span className="text-charcoal-400">•</span>
            <span>{currentSlide.themeTitle}</span>
          </div>

          {/* Exact Required Motto / Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-forest-950 leading-[1.08] mb-4">
            {currentSlide.headline}
          </h1>

          {/* Subheading */}
          <p className="font-serif text-lg sm:text-xl text-forest-900/90 font-medium leading-snug mb-3">
            {currentSlide.subheading}
          </p>

          {/* Descriptive Copy */}
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed max-w-xl mb-8 font-normal">
            Students coming together to serve communities, take collective action, and create meaningful change across Visakhapatnam district.
          </p>

          {/* Dual Action Links */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-forest-800 text-ivory-50 hover:bg-forest-900 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-sm group"
            >
              <span>Explore Activities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-white/90 hover:bg-white text-forest-900 border border-ivory-300 hover:border-forest-800 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs"
            >
              <Compass className="w-4 h-4 text-gold-700" />
              <span>Discover Our Mission</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Carousel Controls (Previous / Next / Pause / Indicators) */}
      <div className="absolute z-20 bottom-5 left-4 right-4 sm:left-8 sm:right-8 flex items-center justify-between pointer-events-none">
        
        {/* Slide Counter & Indicators */}
        <div className="pointer-events-auto flex items-center gap-3 bg-white/90 backdrop-blur-xs px-3.5 py-2 rounded-full border border-ivory-300 shadow-sm text-xs text-charcoal-700">
          <span className="font-mono font-semibold text-forest-900">
            0{currentSlideIndex + 1}
          </span>
          <span className="text-charcoal-400">/</span>
          <span className="font-mono text-charcoal-500">
            0{totalSlides}
          </span>

          <div className="flex items-center gap-1.5 ml-1">
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => { setCurrentSlideIndex(dotIdx); }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  dotIdx === currentSlideIndex
                    ? 'w-6 bg-forest-800'
                    : 'w-1.5 bg-ivory-300 hover:bg-charcoal-400'
                }`}
                aria-label={`Jump to slide ${String(dotIdx + 1)}`}
                aria-current={dotIdx === currentSlideIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>

        {/* Previous, Next & Pause Buttons */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => { setIsPaused((prev) => !prev); }}
            className="p-2.5 rounded-full bg-white/90 hover:bg-white text-forest-900 border border-ivory-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors cursor-pointer"
            aria-label={isPaused ? 'Resume automatic slide rotation' : 'Pause automatic slide rotation'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-white/90 hover:bg-white text-forest-900 border border-ivory-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-white/90 hover:bg-white text-forest-900 border border-ivory-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
