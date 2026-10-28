import { useState, useEffect, type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { EventTimelineCard } from '@/components/EventTimelineCard'
import { ClosedRegistrationBanner } from '@/components/ClosedRegistrationBanner'
import { Breadcrumb } from '@/components/Breadcrumb'
import { PUBLIC_EVENTS, OPERATIONAL_WINGS } from '@/lib/data'

export function MyBharatPage(): ReactElement {
  const [activeTab, setActiveTab] = useState<'overview' | 'pillars' | 'activities'>('overview')

  useEffect(() => {
    document.title = 'Mera Yuva Bharat (MY Bharat) Youth Cell | NSS VIIT (A)'
  }, [])

  const myBharatEvents = PUBLIC_EVENTS.filter((e) => e.initiative === 'my_bharat' || e.initiative === 'joint')
  const digitalWing = OPERATIONAL_WINGS.find((w) => w.id === 'mybharat-digital')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentTitle="MY Bharat Youth Cell" />

      {/* ── 1. Page Hero Banner ────────────────────────────────────────── */}
      <div className="bg-[#1A3C29] text-[#F5F1E8] rounded-3xl p-8 sm:p-14 border-2 border-[#C3A66B] shadow-xl space-y-8 relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C3A66B]/20 text-[#C3A66B] text-xs font-bold uppercase tracking-wider border border-[#C3A66B]/40">
            <span>Official Youth Cell</span>
            <span>&bull;</span>
            <span>NSS VIIT (A) Embedded Initiative</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-[#F5F1E8] leading-[1.1]"
          >
            Mera Yuva Bharat (MY Bharat)
          </h1>

          <p className="text-base sm:text-lg text-[#F5F1E8]/90 font-normal leading-relaxed max-w-3xl">
            Empowering collegiate youth through national mission alignments, digital skill-building clinics, and grassroots civic engagement at Vignan's Institute of Information Technology (Autonomous), Visakhapatnam.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#C3A66B] font-semibold border-t border-[#F5F1E8]/15">
            <span>Primary Identity: NSS VIIT (A)</span>
            <span>&bull;</span>
            <span>4 Dedicated Core Coordinators</span>
            <span>&bull;</span>
            <span>Separate Service Hour Ledger</span>
            <span>&bull;</span>
            <span>Zero Double-Counting on Joint Initiatives</span>
          </div>
        </div>
      </div>

      {/* ── 2. Navigation Tabs (IIT Patna Multi-View Style) ──────────────── */}
      <div className="flex items-center gap-3 border-b border-[#292D2A]/10 pb-4">
        <button
          type="button"
          onClick={() => { setActiveTab('overview'); }}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
            activeTab === 'overview'
              ? 'bg-[#1A3C29] text-[#F5F1E8]'
              : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10'
          }`}
        >
          Cell Overview & Mandate
        </button>
        <button
          type="button"
          onClick={() => { setActiveTab('pillars'); }}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
            activeTab === 'pillars'
              ? 'bg-[#1A3C29] text-[#F5F1E8]'
              : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10'
          }`}
        >
          Strategic Action Pillars
        </button>
        <button
          type="button"
          onClick={() => { setActiveTab('activities'); }}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
            activeTab === 'activities'
              ? 'bg-[#1A3C29] text-[#F5F1E8]'
              : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10'
          }`}
        >
          Drives & Workshops ({myBharatEvents.length})
        </button>
      </div>

      {/* ── 3. Tab Content ─────────────────────────────────────────────── */}
      {activeTab === 'overview' && (
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-10 space-y-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
                Institutional Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1A3C29]">
                Why MY Bharat at VIIT (A)?
              </h2>
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                Mera Yuva Bharat (MY Bharat) serves as a transformative technology-driven platform established by the Government of India to connect youth with community leadership opportunities.
              </p>
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                At VIIT (A), the MY Bharat cell functions natively under the umbrella of the NSS Unit, mobilizing student expertise in computer science, electronics, and engineering to address digital divides in regional school and village environments.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-10 space-y-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
                Leadership & Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1A3C29]">
                4 Dedicated Coordinators
              </h2>
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                The MY Bharat youth cell is represented by 4 dedicated student coordinators who form an integral part of the <strong>28-member NSS Core Team</strong>:
              </p>
              <ul className="space-y-2 text-xs text-[#292D2A]/80">
                <li className="flex items-center gap-2">
                  <span className="text-[#C3A66B] font-bold">&#8226;</span>
                  <span><strong>MY Bharat Lead Coordinator:</strong> Overall youth cell planning & liaison.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C3A66B] font-bold">&#8226;</span>
                  <span><strong>National Mission Lead:</strong> Central youth campaign coordination.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C3A66B] font-bold">&#8226;</span>
                  <span><strong>Skill Building Lead:</strong> Practical technical workshops & clinics.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C3A66B] font-bold">&#8226;</span>
                  <span><strong>Field Outreach Lead:</strong> Student volunteer mobilization.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/team"
                  className="text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] inline-flex items-center gap-1"
                >
                  View Core Team Directory &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Operational Highlight from Wing */}
          {digitalWing && (
            <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-12 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#292D2A]/10 pb-4">
                <h3 className="text-2xl font-bold font-serif text-[#1A3C29]">
                  {digitalWing.name}
                </h3>
                <span className="text-xs font-bold text-[#C3A66B] uppercase tracking-wider">
                  {digitalWing.leadFocus}
                </span>
              </div>
              <p className="text-sm text-[#292D2A]/80 leading-relaxed">
                {digitalWing.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {digitalWing.keyActivities.map((act) => (
                  <div key={act} className="p-4 rounded-xl bg-[#F5F1E8]/70 border border-[#292D2A]/5 text-xs">
                    <span className="font-bold text-[#1A3C29]">&#10003; {act}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'pillars' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 space-y-4 shadow-sm hover:border-[#C3A66B] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C3A66B]/20 text-[#1A3C29] font-serif font-bold text-xl flex items-center justify-center">
              01
            </div>
            <h3 className="text-xl font-bold font-serif text-[#1A3C29]">
              Cyber Safety & Digital Hygiene
            </h3>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              Conducting hands-on educational clinics teaching high-school students and rural citizens how to identify phishing scams, secure mobile banking apps, and safeguard digital identities.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 space-y-4 shadow-sm hover:border-[#C3A66B] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C3A66B]/20 text-[#1A3C29] font-serif font-bold text-xl flex items-center justify-center">
              02
            </div>
            <h3 className="text-xl font-bold font-serif text-[#1A3C29]">
              National Youth Dialogues
            </h3>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              Hosting campus roundtables and commemorative sessions on national priorities, Viksit Bharat development agendas, and youth civic engagement.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 space-y-4 shadow-sm hover:border-[#C3A66B] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C3A66B]/20 text-[#1A3C29] font-serif font-bold text-xl flex items-center justify-center">
              03
            </div>
            <h3 className="text-xl font-bold font-serif text-[#1A3C29]">
              E-Governance Literacy
            </h3>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              Assisting local community members in utilizing public government portals, Digilocker citizen services, scholarship directories, and healthcare welfare platforms.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'activities' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myBharatEvents.map((event, idx) => (
              <EventTimelineCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </div>
      )}

      {/* Closed Registration Banner */}
      <ClosedRegistrationBanner />
    </div>
  )
}
