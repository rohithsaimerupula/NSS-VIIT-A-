import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { InitiativeBadge } from './InitiativeBadge'
import type { OperationalWing } from '@/lib/data'

interface WingCardProps {
  wing: OperationalWing
}

export function WingCard({ wing }: WingCardProps): ReactElement {
  return (
    <article className="bg-white rounded-2xl border border-[#292D2A]/10 p-7 shadow-sm hover:border-[#C3A66B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <InitiativeBadge initiative={wing.initiative} size="sm" />
          <span className="text-[11px] font-bold text-[#C3A66B] uppercase tracking-wider">
            {wing.leadFocus}
          </span>
        </div>

        <h3
          className="text-2xl font-bold text-[#1A3C29] group-hover:text-[#C3A66B] transition-colors leading-snug"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {wing.name}
        </h3>

        <p className="text-xs font-serif italic font-bold text-[#C3A66B]">
          &ldquo;{wing.tagline}&rdquo;
        </p>

        <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
          {wing.description}
        </p>

        <div className="pt-3 border-t border-[#292D2A]/10 space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1A3C29]">
            Core Operational Initiatives
          </h4>
          <ul className="space-y-1.5 text-xs text-[#292D2A]/75">
            {wing.keyActivities.map((act) => (
              <li key={act} className="flex items-start gap-2">
                <span className="text-[#C3A66B] font-bold leading-none mt-1">&#9656;</span>
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[#292D2A]/10 flex items-center justify-between">
        <Link
          to="/events"
          className="text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] inline-flex items-center gap-1.5 transition-colors focus:outline-none focus:underline"
        >
          View Wing Activities <span aria-hidden="true">&rarr;</span>
        </Link>
        <span className="text-[11px] font-medium text-[#292D2A]/50">
          NSS VIIT (A)
        </span>
      </div>
    </article>
  )
}
