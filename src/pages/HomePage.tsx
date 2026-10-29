import { useEffect, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { AboutMission } from '../components/sections/AboutMission';
import { InitiativeCards } from '../components/sections/InitiativeCards';
import { EventsTimeline } from '../components/sections/EventsTimeline';
import { VolunteerParticipationStrip } from '../components/sections/VolunteerParticipationStrip';
import { ParticipationCTA } from '../components/sections/ParticipationCTA';
import { WingCard } from '../components/WingCard';
import { ClosedRegistrationBanner } from '../components/ClosedRegistrationBanner';
import { OPERATIONAL_WINGS } from '../lib/data';

export function HomePage(): ReactElement {
  useEffect(() => {
    document.title = "NSS VIIT (A) — National Service Scheme | Vignan's Institute of Information Technology (Autonomous)";
  }, []);

  return (
    <main className="bg-ivory-100 min-h-screen">
      {/* 1. Photographic Hero Carousel */}
      <Hero />

      {/* 2. Operational Wings & Pillars (Institutional Framework) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-ivory-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-ivory-300/80 pb-6 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
              Community Engagement Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 leading-tight">
              Proposed Operational Wings
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-700 max-w-2xl leading-relaxed">
              NSS VIIT (A) organizes community service across proposed functional wings, integrating NSS field expertise with MY Bharat digital priorities.
            </p>
          </div>
          <Link
            to="/events"
            className="text-xs font-bold uppercase tracking-wider text-forest-800 hover:text-gold-700 inline-flex items-center gap-1.5 transition-colors shrink-0"
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

      {/* 3. NSS Mission & Introduction */}
      <AboutMission />

      {/* 4. Two Consistent Initiative Cards: NSS Activities & MY Bharat */}
      <InitiativeCards />

      {/* 5. Dedicated Spotlight: Mera Yuva Bharat (MY Bharat) Cell */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-ivory-300">
        <div className="bg-forest-900 text-ivory-50 rounded-2xl p-7 sm:p-10 border border-gold-500/50 shadow-md relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-600 text-forest-950 text-xs font-bold uppercase tracking-wider">
                <span>Dedicated Youth Initiative</span>
                <span aria-hidden="true">&bull;</span>
                <span>VIIT (A) Campus Cell</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 leading-tight">
                Mera Yuva Bharat Youth Cell
              </h2>

              <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed font-normal">
                Operating natively within our NSS digital platform, the MY Bharat cell coordinates digital literacy clinics, national youth dialogues, cyber safety workshops, and civic leadership training for collegiate scholars.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  to="/my-bharat"
                  className="px-5 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider bg-gold-600 text-forest-950 hover:bg-gold-500 transition-colors shadow-xs"
                >
                  Explore Dedicated MY Bharat Section &rarr;
                </Link>
                <Link
                  to="/events"
                  className="px-5 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider bg-transparent text-ivory-100 border border-ivory-200/40 hover:bg-forest-800 transition-colors"
                >
                  View Cell Workshops
                </Link>
              </div>
            </div>

            <div className="bg-white text-charcoal-900 p-6 rounded-xl border border-ivory-300 shadow-xs space-y-3.5">
              <h3 className="font-bold text-sm sm:text-base font-serif text-forest-950 border-b border-ivory-200 pb-2">
                Cell Operational Highlights
              </h3>
              <ul className="space-y-2 text-xs text-charcoal-700">
                <li className="flex items-start gap-2">
                  <span className="text-gold-700 font-bold">&#10003;</span>
                  <span>4 Dedicated Core Team Coordinators on the 28-member Roster</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-700 font-bold">&#10003;</span>
                  <span>Independent Service Hour Ledger (MY Bharat Hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-700 font-bold">&#10003;</span>
                  <span>No Double-Counting on Joint Institutional Events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-700 font-bold">&#10003;</span>
                  <span>Native Platform Management (No External API Dependency)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Upcoming & Past Activities with Filters */}
      <EventsTimeline />

      {/* 7. Concise Volunteer Participation Section */}
      <VolunteerParticipationStrip />

      {/* 8. Mandatory Closed Registration Notice (PRD §6.1) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ClosedRegistrationBanner />
      </section>

      {/* 9. Final Call to Action */}
      <ParticipationCTA />
    </main>
  );
}
