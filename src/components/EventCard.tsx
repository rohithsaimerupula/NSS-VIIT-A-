import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { InitiativeBadge } from './InitiativeBadge'
import type { EventItem } from '@/lib/data'

interface EventCardProps {
  event: EventItem
}

export function EventCard({ event }: EventCardProps): ReactElement {
  return (
    <article className="bg-white rounded-xl border border-[#292D2A]/10 p-6 flex flex-col justify-between hover:border-[#C3A66B] hover:shadow-md transition-all duration-200">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <InitiativeBadge initiative={event.initiative} />
          <span className="text-xs text-[#292D2A]/60 font-medium tracking-wide uppercase">
            {event.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#1A3C29] leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
          {event.title}
        </h3>

        <div className="space-y-1.5 text-xs text-[#292D2A]/80 border-l-2 border-[#C3A66B]/50 pl-3">
          <p className="flex items-center gap-1.5">
            <span className="font-semibold text-[#1A3C29]">Date:</span> {event.date}
          </p>
          <p className="flex items-center gap-1.5">
            <span className="font-semibold text-[#1A3C29]">Time:</span> {event.time}
          </p>
          <p className="flex items-center gap-1.5">
            <span className="font-semibold text-[#1A3C29]">Venue:</span> {event.venue}
          </p>
        </div>

        <p className="text-sm text-[#292D2A]/80 line-clamp-3 leading-relaxed">
          {event.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#292D2A]/10 flex items-center justify-between">
        <Link
          to={`/events/${event.id}`}
          className="text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] flex items-center gap-1 transition-colors"
        >
          View Full Details <span aria-hidden="true">&rarr;</span>
        </Link>
        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium bg-[#F5F1E8] text-[#292D2A]/70 border border-[#292D2A]/10">
          Illustrative Drive
        </span>
      </div>
    </article>
  )
}
