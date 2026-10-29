import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, HeartHandshake } from 'lucide-react';

export const ParticipationCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-forest-900 text-ivory-50 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest-950/80 border border-gold-500/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gold-600/10 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-900/90 border border-gold-500/30 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-400">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Join VIIT NSS Movement</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory-50 leading-tight">
              Ready to Make a Direct Difference in Our Communities?
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed font-normal">
              Become part of Vignan's Institute of Information Technology's single unified collegiate NSS unit. Connect your engineering education with meaningful grassroots community stewardship, health awareness, and environmental action.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-gold-600 hover:bg-gold-500 text-forest-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xs transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Campus NSS Cell Office</span>
              </Link>

              <Link
                to="/events"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-transparent hover:bg-forest-900 text-ivory-100 border border-ivory-300/40 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>Explore Activity Domains</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-[11px] text-ivory-400/80 pt-2 flex items-center gap-1.5">
              <span>* In-person student volunteer orientation is held at the VIIT NSS Cell Office, Duvvada Campus.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
