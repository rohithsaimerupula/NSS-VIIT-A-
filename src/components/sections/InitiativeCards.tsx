import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { ArrowRight, Sparkles, HeartHandshake, Shield, Globe2 } from 'lucide-react';

export const InitiativeCards: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-ivory-50 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-ivory-100 border border-gold-500/30 rounded-full text-[11px] font-semibold uppercase tracking-wider text-forest-900 mb-3 shadow-xs">
            <Shield className="w-3.5 h-3.5 text-gold-700" />
            <span>Collegiate & National Initiatives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 tracking-tight leading-tight mb-3">
            Integrated Pathways of Youth Action
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
            NSS VIIT (A) operates as a unified platform bridging traditional ground-level collegiate service with the nationwide digital empowerment mission of Mera Yuva Bharat.
          </p>
        </div>

        {/* Two Consistent Initiative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: NSS Activities & Collegiate Outreach */}
          <div className="bg-white border border-ivory-300 p-8 sm:p-10 shadow-xs flex flex-col justify-between hover:border-gold-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-2 bg-white rounded-full border border-ivory-300 shadow-xs">
                  <img
                    src={siteConfig.logos.nss}
                    alt="National Service Scheme Seal"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest-100 text-forest-950 border border-forest-200">
                  Collegiate Service Core
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                NSS Activities & Community Outreach
              </h3>

              <p className="text-sm text-charcoal-700 leading-relaxed mb-6">
                Direct on-ground engagement driven by students of Vignan's Institute of Information Technology. Delivering sustainable community value through regular blood mobilization, coastal agro-forestry, and weekend school mentorship across Visakhapatnam.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-ivory-200 mb-6 text-xs text-charcoal-700">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-forest-800 shrink-0" />
                  <span><strong>Primary Focus:</strong> Community health, environmental stewardship, literacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-forest-800 shrink-0" />
                  <span><strong>Governance:</strong> Single official unit under JNTUGV & collegiate advisory</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest-800 text-ivory-50 hover:bg-forest-900 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs group"
              >
                <span>Explore NSS Activities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: MY Bharat Integration */}
          <div className="bg-white border border-ivory-300 p-8 sm:p-10 shadow-xs flex flex-col justify-between hover:border-gold-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-2 bg-white rounded-full border border-ivory-300 shadow-xs">
                  <img
                    src={siteConfig.logos.myBharat}
                    alt="MY Bharat National Emblem"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-100 text-forest-950 border border-gold-300">
                  Government of India
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                Mera Yuva Bharat (MY Bharat)
              </h3>

              <p className="text-sm text-charcoal-700 leading-relaxed mb-6">
                An autonomous national digital platform under the Ministry of Youth Affairs and Sports. Connecting collegiate volunteers with transformative experiential learning modules, national camps, hackathons, and certified digital service credits.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-ivory-200 mb-6 text-xs text-charcoal-700">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span><strong>Primary Focus:</strong> Experiential learning, national registry, youth leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-700 shrink-0" />
                  <span><strong>National Synergy:</strong> Dual-enrollment pathways with verified digital credentials</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/my-bharat"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-ivory-50 text-forest-950 border border-ivory-300 hover:border-forest-800 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs group"
              >
                <span>Discover MY Bharat</span>
                <ArrowRight className="w-4 h-4 text-gold-700 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
