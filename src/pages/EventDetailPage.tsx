import { useEffect, type ReactElement } from 'react'
import { useParams, Link } from 'react-router-dom'
import { InitiativeBadge } from '@/components/InitiativeBadge'
import { ClosedRegistrationBanner } from '@/components/ClosedRegistrationBanner'
import { Breadcrumb } from '@/components/Breadcrumb'
import { PUBLIC_EVENTS } from '@/lib/data'

export function EventDetailPage(): ReactElement {
  const { id } = useParams<{ id: string }>()
  const event = PUBLIC_EVENTS.find((e) => e.id === id)

  useEffect(() => {
    if (event) {
      document.title = `${event.title} — Event Details | NSS VIIT (A)`
    } else {
      document.title = 'Activity Record Not Found | NSS VIIT (A)'
    }
  }, [event])

  if (!event) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#1A3C29]/10 text-[#1A3C29] flex items-center justify-center font-bold text-2xl mx-auto font-serif">
          ?
        </div>
        <h1 className="text-3xl font-bold font-serif text-[#1A3C29]">Activity Record Not Found</h1>
        <p className="text-sm text-[#292D2A]/70 max-w-md mx-auto">
          The requested activity record does not exist in the public directory or has not yet been cleared for institutional publication.
        </p>
        <Link
          to="/events"
          className="inline-block px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1A3C29] text-[#F5F1E8]"
        >
          Return to Events Directory &rarr;
        </Link>
      </div>
    )
  }

  const isUpcoming = event.status === 'upcoming'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        currentTitle={event.title}
        parentTitle="Events & Activities"
        parentTo="/events"
        backTo="/events"
        backLabel="Back to Events Directory"
      />

      {/* Main Narrative Article (IIT Patna Editorial Style) */}
      <article className="bg-white rounded-3xl border border-[#292D2A]/10 overflow-hidden shadow-sm space-y-8">
        {/* Top Header Banner */}
        <div
          className={`h-3 w-full ${
            event.initiative === 'joint'
              ? 'bg-gradient-to-r from-[#1A3C29] via-[#C3A66B] to-[#1A3C29]'
              : event.initiative === 'my_bharat'
              ? 'bg-[#C3A66B]'
              : 'bg-[#1A3C29]'
          }`}
        />

        <div className="p-8 sm:p-14 space-y-8">
          {/* Staging Disclaimer Notice */}
          <div className="p-4 rounded-2xl bg-[#C3A66B]/15 border border-[#C3A66B]/40 text-xs text-[#1A3C29] flex items-start gap-3">
            <span className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C3A66B]/30 shrink-0 mt-0.5">
              Staging Demonstration Record
            </span>
            <p className="leading-relaxed">
              This event record, operational schedule, venue logistics, and impact metrics are illustrative demonstration data prepared for pre-launch staging. Formal calendar scheduling, hospital affiliations, and participation metrics await authorized sign-off from the NSS Programme Officer.
            </p>
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#292D2A]/10 pb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <InitiativeBadge initiative={event.initiative} />
              <span className="text-xs font-bold uppercase tracking-wider text-[#C3A66B]">
                {event.category}
              </span>
            </div>

            <span
              className={`inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                isUpcoming
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-[#F5F1E8] text-[#292D2A]/80 border border-[#292D2A]/10'
              }`}
            >
              {isUpcoming ? 'Scheduled Upcoming Drive' : 'Archived Field Activity'}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-5xl font-extrabold text-[#1A3C29] leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {event.title}
          </h1>

          {/* Structured Field Logistics Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#F5F1E8] p-6 rounded-2xl border border-[#292D2A]/10 text-xs">
            <div className="space-y-1">
              <span className="text-[#292D2A]/60 uppercase font-bold text-[10px] block tracking-wider">
                Event Date
              </span>
              <span className="font-extrabold text-sm sm:text-base text-[#1A3C29] block">
                {event.date}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[#292D2A]/60 uppercase font-bold text-[10px] block tracking-wider">
                Operational Hours
              </span>
              <span className="font-extrabold text-sm sm:text-base text-[#1A3C29] block">
                {event.time}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[#292D2A]/60 uppercase font-bold text-[10px] block tracking-wider">
                Campus / Field Venue
              </span>
              <span className="font-extrabold text-sm sm:text-base text-[#1A3C29] block">
                {event.venue}
              </span>
            </div>
          </div>

          {/* Detailed Full Story Narrative */}
          <div className="space-y-4 pt-2">
            <h2 className="text-2xl font-bold font-serif text-[#1A3C29] border-b border-[#292D2A]/10 pb-2">
              Activity Overview & Objectives
            </h2>
            <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
              {event.description}
            </p>
            {event.fullStory && (
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed pt-2">
                {event.fullStory}
              </p>
            )}
          </div>

          {/* Verified Impact Metrics (IIT Patna Style Metric Grid) */}
          {event.impactMetrics && event.impactMetrics.length > 0 && (
            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-bold font-serif text-[#1A3C29]">
                Demonstration Field Outcomes (Illustrative Data)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {event.impactMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-5 rounded-2xl bg-white border border-[#C3A66B]/50 shadow-sm space-y-1"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C3A66B] block">
                      {metric.label}
                    </span>
                    <span className="text-2xl font-extrabold text-[#1A3C29] font-serif block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights List */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="space-y-3 pt-4">
              <h2 className="text-xl font-bold text-[#1A3C29] font-serif">
                Operational Highlights & Protocols
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#292D2A]/80 list-none">
                {event.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <span className="text-[#1A3C29] font-bold leading-none mt-1">&#10003;</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Governance & Anti-Double-Counting Notice */}
          <div className="p-6 rounded-2xl bg-[#1A3C29]/5 border-l-4 border-[#1A3C29] text-xs text-[#292D2A]/75 space-y-2">
            <h3 className="font-bold text-sm text-[#1A3C29]">
              Institutional Attendance & Hour Governance
            </h3>
            <p className="leading-relaxed">
              Official attendance for this activity is recorded by designated faculty coordinators and student leads. Service hours are accredited strictly according to verified field records. Double-counting on joint events is prohibited by PRD §6.3.
            </p>
          </div>
        </div>
      </article>

      {/* Closed Registration Banner */}
      <ClosedRegistrationBanner />
    </div>
  )
}
