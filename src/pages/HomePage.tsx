import { useEffect, type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { HeroCarousel } from '@/components/HeroCarousel'
import { WingCard } from '@/components/WingCard'
import { EventTimelineCard } from '@/components/EventTimelineCard'
import { ClosedRegistrationBanner } from '@/components/ClosedRegistrationBanner'
import { OPERATIONAL_WINGS, PUBLIC_EVENTS, PUBLIC_RESOURCES } from '@/lib/data'

export function HomePage(): ReactElement {
  useEffect(() => {
    document.title = "NSS VIIT (A) — National Service Scheme | Vignan's Institute of Information Technology (Autonomous)"
  }, [])

  const featuredEvents = PUBLIC_EVENTS.slice(0, 3)
  const featuredResources = PUBLIC_RESOURCES.slice(0, 3)

  return (
    <div className="space-y-24 pb-24">
      {/* ── 1. Reference Large Photographic Hero Carousel ─────────────────── */}
      <HeroCarousel />

      {/* ── 2. Operational Wings & Pillars (IIT Patna Style Domain Cards) ────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#292D2A]/10 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              Community Engagement Framework
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#1A3C29] leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Proposed Operational Wings
            </h2>
            <p className="text-xs sm:text-sm text-[#292D2A]/75 max-w-2xl">
              NSS VIIT (A) organizes community service across proposed functional wings (subject to college administrative confirmation), integrating NSS field expertise with MY Bharat digital priorities.
            </p>
          </div>
          <Link
            to="/events"
            className="text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            All Activity Records &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPERATIONAL_WINGS.map((wing) => (
            <WingCard key={wing.id} wing={wing} />
          ))}
        </div>
      </section>

      {/* ── 3. Dedicated Spotlight: Mera Yuva Bharat (MY Bharat) Cell ────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A3C29] text-[#F5F1E8] rounded-3xl p-8 sm:p-14 border-2 border-[#C3A66B] shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C3A66B] text-[#1A3C29] text-xs font-bold uppercase tracking-wider">
                <span>Dedicated Youth Initiative</span>
                <span>&bull;</span>
                <span>VIIT (A) Campus Cell</span>
              </div>

              <h2
                className="text-3xl sm:text-5xl font-bold font-serif text-[#F5F1E8] leading-tight"
              >
                Mera Yuva Bharat Youth Cell
              </h2>

              <p className="text-sm sm:text-base text-[#F5F1E8]/85 leading-relaxed">
                Operating natively within our NSS digital platform, the MY Bharat cell coordinates digital literacy clinics, national youth dialogues, cyber safety workshops, and civic leadership training for collegiate scholars.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/my-bharat"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C3A66B] text-[#1A3C29] hover:bg-white transition-colors shadow-md"
                >
                  Explore Dedicated MY Bharat Section &rarr;
                </Link>
                <Link
                  to="/events"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-transparent text-[#F5F1E8] border border-[#F5F1E8]/40 hover:bg-[#F5F1E8]/10 transition-colors"
                >
                  View Cell Workshops
                </Link>
              </div>
            </div>

            <div className="bg-[#F5F1E8] text-[#292D2A] p-6 rounded-2xl border border-[#C3A66B] shadow-inner space-y-4">
              <h3 className="font-bold text-base font-serif text-[#1A3C29] border-b border-[#292D2A]/10 pb-2">
                Cell Operational Highlights
              </h3>
              <ul className="space-y-2.5 text-xs text-[#292D2A]/85">
                <li className="flex items-start gap-2">
                  <span className="text-[#C3A66B] font-bold">&#10003;</span>
                  <span>4 Dedicated Core Team Coordinators on the 28-member Roster</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C3A66B] font-bold">&#10003;</span>
                  <span>Independent Service Hour Ledger (MY Bharat Hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C3A66B] font-bold">&#10003;</span>
                  <span>No Double-Counting on Joint Institutional Events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C3A66B] font-bold">&#10003;</span>
                  <span>Native Platform Management (No External API Dependency)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Chronological Event Activity Timeline (IIT Patna Pattern) ────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#292D2A]/10 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              Field Activity Records
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#1A3C29] mt-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Current & Recent Drives
            </h2>
            <p className="text-xs sm:text-sm text-[#292D2A]/70 mt-1">
              Sample demonstration drives, health campaigns, and community workshops with scheduled logistics (Staging Catalog).
            </p>
          </div>
          <Link
            to="/events"
            className="text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] flex items-center gap-1.5 transition-colors shrink-0"
          >
            Complete Event Archive &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, idx) => (
            <EventTimelineCard key={event.id} event={event} index={idx} />
          ))}
        </div>
      </section>

      {/* ── 5. Heritage, Anthem & Downloadable Guidelines (IIT Patna Pattern) ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-12 shadow-sm space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              Official Publications & Philosophy
            </span>
            <h2
              className="text-3xl font-extrabold text-[#1A3C29]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              NSS Heritage & Resource Center
            </h2>
            <p className="text-xs sm:text-sm text-[#292D2A]/75 leading-relaxed">
              Access official Ministry of Youth Affairs and Sports manuals, the Konark Wheel symbolism, and approved circulars governing student volunteer commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((res) => (
              <div
                key={res.id}
                className="bg-[#F5F1E8]/70 rounded-2xl p-6 border border-[#292D2A]/10 flex flex-col justify-between space-y-4 hover:border-[#C3A66B] transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#1A3C29]">
                    <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#292D2A]/10">
                      {res.category}
                    </span>
                    <span className="text-[#292D2A]/50">{res.fileSize}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1A3C29] leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-xs text-[#292D2A]/75 line-clamp-3">
                    {res.description}
                  </p>
                </div>
                <Link
                  to="/resources"
                  className="text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] inline-flex items-center gap-1 transition-colors"
                >
                  Access Document &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#292D2A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#292D2A]/70">
            <span>Looking for annual circulars, emblem symbolism, or pledge text?</span>
            <Link
              to="/resources"
              className="font-bold text-[#1A3C29] hover:text-[#C3A66B] inline-flex items-center gap-1 underline underline-offset-2"
            >
              Visit Full Heritage & Resources Directory &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Volunteer Intake Notice (Gated / Closed State) ────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClosedRegistrationBanner />
      </section>
    </div>
  )
}
