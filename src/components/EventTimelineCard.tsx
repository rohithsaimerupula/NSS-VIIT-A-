import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { InitiativeBadge } from './InitiativeBadge'
import type { EventItem } from '@/lib/data'

interface EventTimelineCardProps {
  event: EventItem
  index?: number
}

export function EventTimelineCard({ event, index = 0 }: EventTimelineCardProps): ReactElement {
  const isUpcoming = event.status === 'upcoming'

  return (
    <article className="relative bg-white rounded-2xl border border-[#292D2A]/10 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#C3A66B] transition-all duration-300 flex flex-col justify-between group">
      {/* Top Banner Stripe */}
      <div
        className={`h-2 w-full ${
          event.initiative === 'joint'
            ? 'bg-gradient-to-r from-[#1A3C29] via-[#C3A66B] to-[#1A3C29]'
            : event.initiative === 'my_bharat'
            ? 'bg-[#C3A66B]'
            : 'bg-[#1A3C29]'
        }`}
      />

      <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Header Row: Badges & Timeline Tag */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <InitiativeBadge initiative={event.initiative} size="sm" />
            <span
              className={`inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                isUpcoming
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-[#F5F1E8] text-[#292D2A]/70 border border-[#292D2A]/10'
              }`}
            >
              {isUpcoming ? 'Upcoming Drive' : 'Archived Record'}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl font-bold text-[#1A3C29] group-hover:text-[#C3A66B] transition-colors leading-snug"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <Link to={`/events/${event.id}`} className="focus:outline-none focus:underline">
              {event.title}
            </Link>
          </h3>

          {/* Structured Logistics Box (IIT Patna pattern) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-[#F5F1E8]/70 p-3.5 rounded-xl border border-[#292D2A]/5 text-xs">
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#1A3C29] shrink-0">Date:</span>
              <span className="text-[#292D2A]/80">{event.date}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#1A3C29] shrink-0">Time:</span>
              <span className="text-[#292D2A]/80">{event.time}</span>
            </div>
            <div className="sm:col-span-2 flex items-start gap-2 pt-1 border-t border-[#292D2A]/5">
              <span className="font-bold text-[#1A3C29] shrink-0">Venue:</span>
              <span className="text-[#292D2A]/80">{event.venue}</span>
            </div>
          </div>

          {/* Narrative Summary */}
          <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed line-clamp-3">
            {event.description}
          </p>

          {/* Impact Metrics Snippet */}
          {event.impactMetrics && event.impactMetrics.length > 0 && (
            <div className="pt-2 border-t border-dashed border-[#292D2A]/10 flex items-center gap-4 text-xs">
              {event.impactMetrics.slice(0, 2).map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#292D2A]/60">{m.label}</span>
                  <span className="font-extrabold text-[#1A3C29] text-xs">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Link Footer */}
        <div className="pt-4 border-t border-[#292D2A]/10 flex items-center justify-between">
          <Link
            to={`/events/${event.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] transition-colors focus:outline-none focus:underline"
          >
            Read Activity Narrative <span aria-hidden="true">&rarr;</span>
          </Link>
          <span className="text-[11px] text-[#292D2A]/50 font-mono">
            REF #{String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </article>
  )
}
