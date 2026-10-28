import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function ClosedRegistrationBanner(): ReactElement {
  return (
    <div
      role="alert"
      className="bg-[#1A3C29] text-[#F5F1E8] rounded-xl p-6 border-l-4 border-[#C3A66B] shadow-md space-y-2"
    >
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#C3A66B] animate-pulse" aria-hidden="true" />
        <h4 className="text-base font-bold text-[#F5F1E8] tracking-wide uppercase">
          Volunteer Registration Notice
        </h4>
      </div>
      <p className="text-sm leading-relaxed text-[#F5F1E8]/90">
        Student volunteer registration for the <strong>NSS Unit</strong> and <strong>MY Bharat Youth Cell</strong> is
        currently <span className="underline decoration-[#C3A66B] underline-offset-2 font-bold">closed during development</span>.
        Enrollment will officially open once authorized by college leadership and the Programme Officer.
      </p>
      <div className="pt-2 flex items-center gap-4 text-xs text-[#C3A66B] font-medium">
        <span>Gated Policy: PRD §6.1</span>
        <span>•</span>
        <Link to="/contact" className="underline hover:text-white transition-colors">
          Inquire with NSS Administration &rarr;
        </Link>
      </div>
    </div>
  )
}
