import { useState, useEffect, type ReactElement } from 'react'
import { ClosedRegistrationBanner } from '@/components/ClosedRegistrationBanner'
import { Breadcrumb } from '@/components/Breadcrumb'
import type { VolunteerTrack } from '@/types'

export function VolunteerInfoPage(): ReactElement {
  const [selectedTrack, setSelectedTrack] = useState<VolunteerTrack>('both')

  useEffect(() => {
    document.title = 'Volunteer Induction & Enrollment Pathways | NSS VIIT (A)'
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentTitle="Volunteer Induction" />

      {/* ── 1. Page Header (IIT Patna Volunteer Induction Style) ────────── */}
      <div className="border-b border-[#292D2A]/10 pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1A3C29]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Student Induction & Enrollment Pathways
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3C29] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Volunteer With Us
        </h1>

        <p className="text-base sm:text-lg text-[#292D2A]/80 max-w-3xl leading-relaxed">
          Discover how to join the official ranks of NSS VIIT (A) and the campus MY Bharat Youth Cell. Understand our multi-track enrollment options, tenure expectations, and service-hour governance.
        </p>
      </div>

      {/* ── 2. Mandatory Closed Registration Banner ──────────────────── */}
      <ClosedRegistrationBanner />

      {/* ── 3. The Three Enrollment Tracks (Interactive Showcase) ──────── */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Unified Registration Framework (PRD §6.1)
          </span>
          <h2
            className="text-3xl font-extrabold text-[#1A3C29] mt-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Choose Your Service Pathway
          </h2>
          <p className="text-xs sm:text-sm text-[#292D2A]/75 mt-1">
            Our upcoming unified portal will provide three distinct pathways upon official launch authorization.
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            type="button"
            onClick={() => { setSelectedTrack('nss_only'); }}
            className={`p-7 rounded-3xl border text-left transition-all duration-200 flex flex-col justify-between space-y-4 ${
              selectedTrack === 'nss_only'
                ? 'bg-white border-2 border-[#1A3C29] shadow-lg ring-2 ring-[#1A3C29]/20'
                : 'bg-white/70 border-[#292D2A]/10 hover:border-[#1A3C29]/40'
            }`}
          >
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A3C29] px-2.5 py-0.5 rounded-full bg-[#1A3C29]/10">
                Track 01
              </span>
              <h3 className="text-xl font-bold text-[#1A3C29] font-serif">
                NSS Only
              </h3>
              <p className="text-xs text-[#292D2A]/75 leading-relaxed">
                Dedicated exclusively to National Service Scheme village immersion camps, literacy drives, and rural sanitation.
              </p>
            </div>
            <span className="text-xs font-bold text-[#1A3C29]">
              {selectedTrack === 'nss_only' ? '✓ Selected Track' : 'View Commitment Details →'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => { setSelectedTrack('my_bharat_only'); }}
            className={`p-7 rounded-3xl border text-left transition-all duration-200 flex flex-col justify-between space-y-4 ${
              selectedTrack === 'my_bharat_only'
                ? 'bg-white border-2 border-[#C3A66B] shadow-lg ring-2 ring-[#C3A66B]/30'
                : 'bg-white/70 border-[#292D2A]/10 hover:border-[#C3A66B]/50'
            }`}
          >
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A3C29] px-2.5 py-0.5 rounded-full bg-[#C3A66B]/20">
                Track 02
              </span>
              <h3 className="text-xl font-bold text-[#1A3C29] font-serif">
                MY Bharat Only
              </h3>
              <p className="text-xs text-[#292D2A]/75 leading-relaxed">
                Focusing on technological literacy clinics, cyber hygiene seminars, national youth dialogues, and e-governance drives.
              </p>
            </div>
            <span className="text-xs font-bold text-[#C3A66B]">
              {selectedTrack === 'my_bharat_only' ? '✓ Selected Track' : 'View Commitment Details →'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => { setSelectedTrack('both'); }}
            className={`p-7 rounded-3xl border text-left transition-all duration-200 flex flex-col justify-between space-y-4 ${
              selectedTrack === 'both'
                ? 'bg-white border-2 border-[#1A3C29] shadow-lg ring-2 ring-[#C3A66B]'
                : 'bg-white/70 border-[#292D2A]/10 hover:border-[#1A3C29]/40'
            }`}
          >
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5F1E8] px-2.5 py-0.5 rounded-full bg-[#1A3C29]">
                Track 03 &bull; Dual Enrollment
              </span>
              <h3 className="text-xl font-bold text-[#1A3C29] font-serif">
                Both Initiatives
              </h3>
              <p className="text-xs text-[#292D2A]/75 leading-relaxed">
                Comprehensive service engagement spanning both NSS field camps and MY Bharat technical empowerment clinics.
              </p>
            </div>
            <span className="text-xs font-bold text-[#1A3C29]">
              {selectedTrack === 'both' ? '✓ Selected Track' : 'View Commitment Details →'}
            </span>
          </button>
        </div>

        {/* Selected Track Deep Dive */}
        <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-10 space-y-6 shadow-sm">
          <div className="border-b border-[#292D2A]/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              Pathway Obligations & Expectations
            </span>
            <h3 className="text-2xl font-bold font-serif text-[#1A3C29] mt-1">
              {selectedTrack === 'nss_only' && 'NSS Wing Volunteer Commitments'}
              {selectedTrack === 'my_bharat_only' && 'MY Bharat Cell Volunteer Commitments'}
              {selectedTrack === 'both' && 'Dual Enrollment (NSS + MY Bharat) Commitments'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#292D2A]/85 leading-relaxed">
            <div className="space-y-3">
              <h4 className="font-bold text-[#1A3C29] text-base">Eligibility & Induction</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Must be a regularly enrolled undergraduate or postgraduate student at VIIT (A).</li>
                <li>Registration requires verification against official college roll registers.</li>
                <li>Email verification alone is not proof of enrollment eligibility.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#1A3C29] text-base">Tenure & Service Hours</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Volunteers serve a continuous two-year service lifecycle.</li>
                <li>Attendance is manually logged by coordinators during each activity.</li>
                <li>Hours are maintained in distinct ledgers to prevent cross-crediting.</li>
                <li>Zero double-counting on joint events (PRD §6.3).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
