import { useEffect, type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ClosedRegistrationBanner } from '@/components/ClosedRegistrationBanner'
import { Breadcrumb } from '@/components/Breadcrumb'

export function AboutPage(): ReactElement {
  useEffect(() => {
    document.title = 'About NSS VIIT (A) — History, Mandate & Governance | NSS VIIT (A)'
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentTitle="About NSS VIIT (A)" />

      {/* ── 1. Page Header (IIT Patna Style Institutional Head) ────────── */}
      <div className="border-b border-[#292D2A]/10 pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1A3C29]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Autonomous Unit History & Governance
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3C29] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          About NSS VIIT (A)
        </h1>

        <p className="text-base sm:text-lg text-[#292D2A]/80 max-w-4xl leading-relaxed">
          The National Service Scheme Unit at Vignan's Institute of Information Technology (Autonomous), Duvvada, Visakhapatnam, operating under the aegis of the Ministry of Youth Affairs and Sports, Government of India.
        </p>
      </div>

      {/* ── 2. Ideology & Emblem Grid (IIT Patna Heritage Pattern) ─────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-10 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              Ideological Motto
            </span>
            <h2 className="text-3xl font-extrabold text-[#1A3C29] font-serif">
              &ldquo;NOT ME, BUT YOU&rdquo;
            </h2>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              This timeless motto expresses the core essence of democratic living and upholds the need for selfless service. An individual's genuine growth cannot be isolated from the well-being of the wider community.
            </p>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              Volunteers internalize that community service is not charity, but an educational discipline shaping character, empathy, and lifelong national responsibility.
            </p>
          </div>
          <div className="pt-4 border-t border-[#292D2A]/10 text-xs font-semibold text-[#1A3C29]">
            Principle of Shared Democratic Upliftment
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-10 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              The National NSS Emblem
            </span>
            <h2 className="text-2xl font-bold text-[#1A3C29] font-serif">
              The Konark Sun Temple Chariot Wheel
            </h2>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              The NSS emblem is based on the giant rath wheel of the world-famous Konark Sun Temple in Odisha. The wheel symbolizes creation, preservation, and release—depicting the dynamism of life and constant social transformation.
            </p>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              The 8 bars in the wheel represent the 24 hours of the day, serving as a reminder that volunteers must remain in constant readiness to serve the nation.
            </p>
          </div>
          <div className="pt-4 border-t border-[#292D2A]/10 text-xs font-semibold text-[#C3A66B]">
            Symbol of Continuous Energy & Service
          </div>
        </div>
      </div>

      {/* ── 3. Structural Framework & Institutional Leadership ────────── */}
      <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-12 space-y-8 shadow-sm">
        <div className="border-b border-[#292D2A]/10 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Organizational Structure
          </span>
          <h2 className="text-3xl font-bold font-serif text-[#1A3C29] mt-1">
            Unit Governance & Hierarchy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 p-5 rounded-2xl bg-[#F5F1E8]/70 border border-[#292D2A]/5">
            <div className="w-9 h-9 rounded-full bg-[#1A3C29] text-[#F5F1E8] flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-base text-[#1A3C29]">
              Programme Officer & Advisory
            </h3>
            <p className="text-xs text-[#292D2A]/75 leading-relaxed">
              Authorized faculty leadership liaising directly with college administration, regional directorates, and affiliating universities. Oversees compliance, budget authorizations, and official certificate reviews.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-[#F5F1E8]/70 border border-[#292D2A]/5">
            <div className="w-9 h-9 rounded-full bg-[#1A3C29] text-[#F5F1E8] flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-base text-[#1A3C29]">
              28-Member NSS Core Team
            </h3>
            <p className="text-xs text-[#292D2A]/75 leading-relaxed">
              Executive student coordination committee partitioned into <strong>24 NSS Wing members</strong> and <strong>4 MY Bharat Cell coordinators</strong>, managing day-to-day operations and field logistics.
            </p>
            <Link
              to="/team"
              className="text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] inline-block pt-1"
            >
              View 28-Member Team Directory &rarr;
            </Link>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-[#F5F1E8]/70 border border-[#292D2A]/5">
            <div className="w-9 h-9 rounded-full bg-[#1A3C29] text-[#F5F1E8] flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-base text-[#1A3C29]">
              Student Volunteer Body
            </h3>
            <p className="text-xs text-[#292D2A]/75 leading-relaxed">
              Approved student volunteers enrolled across three pathways: NSS Only, MY Bharat Only, or Both. Each serves a two-year tenure with audited session attendance and distinct service-hour ledgers.
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. Unit Exclusions & Safeguards ────────────────────────────── */}
      <div className="p-6 rounded-2xl bg-[#1A3C29]/5 border border-[#1A3C29]/15 text-xs text-[#292D2A]/80 space-y-2">
        <h3 className="font-bold text-[#1A3C29] text-sm">
          Autonomous Unit Boundaries & SAC Exclusions
        </h3>
        <p className="leading-relaxed">
          NSS VIIT (A) operates strictly as an autonomous public service unit under central National Service Scheme directives. Student Activity Council (SAC) links, modules, and governance are completely excluded from this website.
        </p>
      </div>

      <ClosedRegistrationBanner />
    </div>
  )
}
