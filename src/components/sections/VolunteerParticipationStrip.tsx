import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, UserCheck, HelpCircle } from 'lucide-react';

export const VolunteerParticipationStrip: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-ivory-50 border border-ivory-300 p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-ivory-300 rounded-full text-[11px] font-semibold uppercase tracking-wider text-forest-900 mb-3">
                <UserCheck className="w-3.5 h-3.5 text-gold-700" />
                <span>Student Civic Stewardship</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight leading-tight mb-3">
                Volunteer Pathways & Orientation Guidance
              </h2>

              <p className="text-sm text-charcoal-700 leading-relaxed mb-4">
                Undergraduate students at Vignan's Institute of Information Technology can serve through structured collegiate NSS units, enroll directly on the central MY Bharat portal, or pursue the joint dual-recognition track.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-charcoal-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-forest-800" />
                  <span>Two-Year Collegiate Term</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-forest-800" />
                  <span>120 Service Hours / Year</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-700" />
                  <span>Central Ministry Alignment</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 shrink-0">
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest-800 text-ivory-50 hover:bg-forest-900 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs group"
              >
                <span>Explore Pathways</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-ivory-100 text-forest-900 border border-ivory-300 hover:border-forest-800 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs"
              >
                <HelpCircle className="w-4 h-4 text-gold-700" />
                <span>Inquire at Campus Cell</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
