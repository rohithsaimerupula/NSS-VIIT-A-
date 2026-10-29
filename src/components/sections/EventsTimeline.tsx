import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { eventTimeline } from '../../config/contentConfig';
import { Calendar, Clock, MapPin, Sparkles, Tag, ArrowRight, CheckCircle2, Filter } from 'lucide-react';

interface EventsTimelineProps {
  onViewEventsPage?: () => void;
}

export const EventsTimeline: React.FC<EventsTimelineProps> = ({ onViewEventsPage }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'NSS' | 'MY Bharat' | 'Joint'>('All');

  const filteredEvents = eventTimeline.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.initiative === selectedFilter;
  });

  const featuredEvent = filteredEvents.find((e) => e.isFeatured) ?? filteredEvents[0];
  const upcomingEvents = filteredEvents.filter((e) => e.id !== featuredEvent.id);

  return (
    <section id="events" className="py-16 sm:py-24 bg-ivory-100 text-charcoal-900 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeading
            eyebrow="Annual Operational Framework"
            title="Events & Activity Timeline"
            subtitle="Verified National Service Scheme statutory observances and collaborative MY Bharat initiatives."
            className="mb-0"
          />

          {onViewEventsPage ? (
            <button
              type="button"
              onClick={onViewEventsPage}
              className="text-xs uppercase tracking-wider font-semibold text-forest-800 hover:text-gold-700 inline-flex items-center gap-1.5 focus:outline-none shrink-0 cursor-pointer"
            >
              <span>Full Observances Calendar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              to="/events"
              className="text-xs uppercase tracking-wider font-semibold text-forest-800 hover:text-gold-700 inline-flex items-center gap-1.5 focus:outline-none shrink-0"
            >
              <span>Full Observances Calendar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Initiative Filter Pills (All / NSS / MY Bharat / Joint) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-ivory-300">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal-500 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-gold-700" />
            <span>Filter By Initiative:</span>
          </span>

          {(['All', 'NSS', 'MY Bharat', 'Joint'] as const).map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => { setSelectedFilter(filter); }}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs cursor-pointer ${
                  isActive
                    ? 'bg-forest-800 text-ivory-50'
                    : 'bg-white text-charcoal-700 hover:text-forest-900 hover:bg-ivory-200/80 border border-ivory-300'
                }`}
              >
                {filter === 'All' ? 'All Activities' : filter}
              </button>
            );
          })}
        </div>

        {filteredEvents.length === 0 ? (
          <div className="bg-white border border-ivory-300 p-8 sm:p-12 text-center shadow-xs max-w-xl mx-auto space-y-3">
            <Calendar className="w-8 h-8 text-forest-800 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-forest-950">
              No Activities for Selected Filter
            </h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Confirmed upcoming collegiate activities and national observances matching "{selectedFilter}" will be published upon notification.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Featured Event Callout (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-ivory-300 hover:border-gold-500/70 p-6 sm:p-8 relative shadow-xs transition-colors">
                  
                  {/* Highlight Ribbon */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-forest-800 text-ivory-50 text-xs font-bold tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>{featuredEvent.initiative ? `${featuredEvent.initiative} Key Activity` : 'National Key Observance'}</span>
                    </div>
                    {featuredEvent.isOfficialNationalObservance && (
                      <span className="text-[10px] text-forest-900 bg-ivory-200/90 px-2 py-0.5 border border-ivory-300 inline-flex items-center gap-1 font-mono uppercase font-semibold">
                        <CheckCircle2 className="w-3 h-3 text-forest-700" />
                        <span>Statutory Date</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3 leading-tight">
                    {featuredEvent.title}
                  </h3>

                  <p className="text-sm text-charcoal-700 leading-relaxed mb-6 font-normal">
                    {featuredEvent.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-ivory-200 text-xs text-charcoal-700 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-forest-800 shrink-0" />
                      <span className="font-semibold text-forest-900">{featuredEvent.date}</span>
                    </div>
                    {featuredEvent.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-forest-800 shrink-0" />
                        <span>{featuredEvent.time}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-forest-800 shrink-0" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/events"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-800 hover:text-gold-700 transition-colors"
                    >
                      <span>Observances Framework</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

            {/* Right Column: Other Timeline Cards (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border border-ivory-300 p-5 sm:p-6 hover:border-gold-500/60 shadow-xs transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-ivory-200 text-forest-900 border border-ivory-300">
                        {event.initiative || 'Collegiate'}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-charcoal-500 flex items-center gap-1">
                        <Tag className="w-3 h-3 text-gold-700" />
                        <span>{event.category}</span>
                      </span>
                      {event.isOfficialNationalObservance && (
                        <span className="text-[10px] font-mono text-forest-800 bg-forest-50 px-2 py-0.5 border border-forest-100">
                          Official Observance
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-lg font-bold text-forest-950 leading-snug">
                      {event.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-charcoal-500 pt-1">
                      <span className="flex items-center gap-1 font-semibold text-forest-900">
                        <Calendar className="w-3.5 h-3.5 text-forest-800 shrink-0" />
                        <span>{event.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-charcoal-400 shrink-0" />
                        <span>{event.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 pt-2 sm:pt-0 sm:text-right">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-forest-900 bg-ivory-100 border border-ivory-300">
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
