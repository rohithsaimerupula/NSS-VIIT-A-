import { useState, useEffect, type ReactElement } from 'react'
import { useSearchParams } from 'react-router-dom'
import { EventTimelineCard } from '@/components/EventTimelineCard'
import { Breadcrumb } from '@/components/Breadcrumb'
import { PUBLIC_EVENTS } from '@/lib/data'
import type { EventInitiative } from '@/types'

export function EventsPage(): ReactElement {
  const [searchParams] = useSearchParams()
  const [initiativeFilter, setInitiativeFilter] = useState<'all' | EventInitiative>('all')
  const [timelineTab, setTimelineTab] = useState<'all' | 'upcoming' | 'completed'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    document.title = 'Events & Activities Timeline | NSS VIIT (A)'
  }, [])

  useEffect(() => {
    const statusParam = searchParams.get('status')
    if (statusParam === 'upcoming' || statusParam === 'completed' || statusParam === 'all') {
      setTimelineTab(statusParam)
    }
    const initParam = searchParams.get('initiative')
    if (initParam === 'nss' || initParam === 'my_bharat' || initParam === 'joint' || initParam === 'all') {
      setInitiativeFilter(initParam)
    }
  }, [searchParams])

  const upcomingEvents = PUBLIC_EVENTS.filter((e) => e.status === 'upcoming')
  const completedEvents = PUBLIC_EVENTS.filter((e) => e.status === 'completed')

  const filteredEvents = PUBLIC_EVENTS.filter((event) => {
    const matchesInitiative = initiativeFilter === 'all' || event.initiative === initiativeFilter
    const matchesTimeline = timelineTab === 'all' || event.status === timelineTab
    const matchesSearch =
      searchQuery.trim() === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesInitiative && matchesTimeline && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentTitle="Events & Activities" />

      {/* Editorial Header (IIT Patna Archive Style) */}
      <div className="border-b border-[#292D2A]/10 pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1A3C29]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Official Activity Archive & Schedule
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-extrabold text-[#1A3C29] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Events & Activities
        </h1>

        <p className="text-sm sm:text-base text-[#292D2A]/80 max-w-3xl leading-relaxed">
          Comprehensive chronological documentation of community drives, environmental camps, health missions, and youth skill workshops across NSS VIIT (A), the campus MY Bharat Cell, and Joint Institutional Initiatives.
        </p>

        {/* Timeline Summary Counter Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
          <button
            type="button"
            onClick={() => { setTimelineTab('all'); }}
            className={`px-3 py-1 rounded-full font-bold transition-colors ${
              timelineTab === 'all'
                ? 'bg-[#1A3C29] text-[#F5F1E8]'
                : 'bg-white border border-[#292D2A]/15 text-[#292D2A]/70 hover:border-[#1A3C29]'
            }`}
          >
            All Documented Drives ({PUBLIC_EVENTS.length})
          </button>
          <button
            type="button"
            onClick={() => { setTimelineTab('upcoming'); }}
            className={`px-3 py-1 rounded-full font-bold transition-colors ${
              timelineTab === 'upcoming'
                ? 'bg-amber-600 text-white'
                : 'bg-white border border-[#292D2A]/15 text-[#292D2A]/70 hover:border-amber-600'
            }`}
          >
            Upcoming Schedule ({upcomingEvents.length})
          </button>
          <button
            type="button"
            onClick={() => { setTimelineTab('completed'); }}
            className={`px-3 py-1 rounded-full font-bold transition-colors ${
              timelineTab === 'completed'
                ? 'bg-[#1A3C29] text-[#F5F1E8]'
                : 'bg-white border border-[#292D2A]/15 text-[#292D2A]/70 hover:border-[#1A3C29]'
            }`}
          >
            Archived Activities ({completedEvents.length})
          </button>
        </div>

        {/* Staging Disclaimer Notice */}
        <div className="p-4 rounded-2xl bg-[#C3A66B]/15 border border-[#C3A66B]/40 text-xs text-[#1A3C29] flex items-start gap-3">
          <span className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C3A66B]/30 shrink-0 mt-0.5">
            Demonstration Schedule
          </span>
          <p className="leading-relaxed">
            The event entries, venues, timings, and partner references below represent illustrative demonstration records prepared for platform review. Formal event scheduling and official campus drives will be published once sanctioned by the NSS Programme Officer.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-[#292D2A]/10 shadow-sm">
        {/* Initiative Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-[#292D2A]/60 uppercase tracking-wider mr-1">
            Initiative:
          </span>
          <button
            type="button"
            onClick={() => { setInitiativeFilter('all'); }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              initiativeFilter === 'all'
                ? 'bg-[#1A3C29] text-[#F5F1E8]'
                : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
            }`}
          >
            All Tracks
          </button>
          <button
            type="button"
            onClick={() => { setInitiativeFilter('nss'); }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              initiativeFilter === 'nss'
                ? 'bg-[#1A3C29] text-[#F5F1E8]'
                : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
            }`}
          >
            NSS Activities
          </button>
          <button
            type="button"
            onClick={() => { setInitiativeFilter('my_bharat'); }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              initiativeFilter === 'my_bharat'
                ? 'bg-[#C3A66B] text-[#1A3C29]'
                : 'text-[#292D2A]/70 hover:bg-[#C3A66B]/20 hover:text-[#1A3C29]'
            }`}
          >
            MY Bharat Initiatives
          </button>
          <button
            type="button"
            onClick={() => { setInitiativeFilter('joint'); }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              initiativeFilter === 'joint'
                ? 'bg-[#1A3C29] text-[#C3A66B] border border-[#C3A66B]'
                : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
            }`}
          >
            Joint Drives
          </button>
        </div>

        {/* Search Input with Reset */}
        <div className="relative min-w-[280px]">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); }}
            placeholder="Search by title, topic, venue or description..."
            className="w-full pl-3 pr-8 py-2 rounded-xl border border-[#292D2A]/15 text-xs text-[#292D2A] bg-[#F5F1E8]/50 focus:outline-none focus:ring-2 focus:ring-[#1A3C29] focus:bg-white transition-all"
            aria-label="Search event records"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => { setSearchQuery(''); }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#292D2A]/50 hover:text-[#292D2A]"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>

        {/* Staging Disclaimer Notice */}
        <div className="p-4 rounded-2xl bg-[#C3A66B]/15 border border-[#C3A66B]/40 text-xs text-[#1A3C29] flex items-start gap-3">
          <span className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C3A66B]/30 shrink-0 mt-0.5">
            Demonstration Schedule
          </span>
          <p className="leading-relaxed">
            The event entries, venues, timings, and partner references below represent illustrative demonstration records prepared for platform review. Formal event scheduling and official campus drives will be published once sanctioned by the NSS Programme Officer.
          </p>
        </div>
      </div>

      {/* Events Timeline Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, idx) => (
            <EventTimelineCard key={event.id} event={event} index={idx} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-[#292D2A]/20 p-16 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#1A3C29]/10 text-[#1A3C29] flex items-center justify-center font-bold text-lg mx-auto">
            !
          </div>
          <h2 className="font-serif text-xl font-bold text-[#1A3C29]">
            No activity records match your criteria
          </h2>
          <p className="text-xs text-[#292D2A]/70 max-w-sm mx-auto leading-relaxed">
            There are currently no events matching the selected initiative category, timeline filter, or search keywords.
          </p>
          <button
            type="button"
            onClick={() => {
              setInitiativeFilter('all');
              setTimelineTab('all');
              setSearchQuery('');
            }}
            className="mt-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#1A3C29] text-[#F5F1E8] hover:bg-[#1A3C29]/90 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Institutional Integrity Footer Note */}
      <div className="p-6 rounded-2xl bg-white border border-[#292D2A]/10 text-xs text-[#292D2A]/75 space-y-2">
        <h3 className="font-bold text-sm text-[#1A3C29]">Event Records & Hour Crediting Notice</h3>
        <p className="leading-relaxed">
          Event activities are archived following administrative review and attendance sign-off. Service hours derived from these records are maintained in strictly separate ledgers for NSS and MY Bharat participants. Double-counting on joint institutional initiatives is strictly barred under PRD §6.3.
        </p>
      </div>
    </div>
  )
}
