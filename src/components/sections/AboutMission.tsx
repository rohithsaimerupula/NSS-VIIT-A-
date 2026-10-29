import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Compass, Users, HeartHandshake, BookOpen } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const AboutMission: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory-100 text-charcoal-900 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Institutional Heritage & Doctrine"
          title="Fostering Empathy, Leadership, and Grassroots Transformation"
          subtitle="The National Service Scheme unit at Vignan's Institute of Information Technology brings higher education directly into constructive dialogue with rural and civic reality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-800 leading-relaxed font-normal text-base sm:text-lg">
            <p>
              Established under the auspices of the Ministry of Youth Affairs & Sports, Government of India, the NSS Cell at <strong className="font-semibold text-forest-900">VIIT Duvvada</strong> serves as an educational laboratory without walls. We believe that true technical education must be grounded in an intimate understanding of the socio-economic challenges faced by our surrounding communities.
            </p>

            <p className="text-charcoal-700">
              Guided by the democratic principle of selfless service, the single official NSS unit at VIIT fosters social consciousness, civic responsibility, and community partnership. Through regular constructive dialogue and direct grassroots engagement, students cultivate practical problem-solving skills that enrich their academic and personal growth.
            </p>

            {/* Emblem Meaning Callout Box */}
            <div className="bg-forest-900 text-ivory-100 p-6 sm:p-7 border-l-4 border-gold-500 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={siteConfig.logos.nss}
                  alt="NSS Symbol"
                  className="w-10 h-10 object-contain bg-white rounded-full p-1"
                />
                <div>
                  <h3 className="font-serif font-bold text-base text-gold-400">
                    The Konark Wheel: Symbol of Continuous Motion & Service
                  </h3>
                  <p className="text-xs text-ivory-300">Origin: The Sun Temple of Konark, Odisha</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
                The NSS crest portrays the giant Rath Wheel of the World Heritage Sun Temple. Its 24 spokes signify the 24 hours of the day, reminding student volunteers that service to society never halts. The navy blue circle represents the boundless cosmos and human capacity, while the crimson red reflects youthful passion, sacrifice, and vigor.
              </p>
            </div>

            {/* Core Motto statement */}
            <div className="pt-2">
              <blockquote className="border-l-2 border-forest-800 pl-4 italic text-forest-900 font-serif text-xl">
                "Not Me, But You — affirming the democratic principle that the welfare of the individual is intimately bound to the welfare of the community."
              </blockquote>
            </div>

          </div>

          {/* Core Strategic Pillars Column */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-serif text-xl font-bold text-forest-950 uppercase tracking-wide border-b border-ivory-300 pb-2">
              The Three Pillars of VIIT NSS
            </h3>

            {/* Pillar 1 */}
            <div className="p-5 bg-white border border-ivory-300 hover:border-gold-500/60 transition-shadow hover:shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-forest-800 text-gold-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-forest-900 text-base mb-1">
                    Grassroots Immersion
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    Direct residential contact with adopted rural communities, enabling engineering students to understand village water tables, agricultural logistics, and public hygiene.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 bg-white border border-ivory-300 hover:border-gold-500/60 transition-shadow hover:shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-forest-800 text-gold-400 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-forest-900 text-base mb-1">
                    Civic Health & Life Defense
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    Collaborating with King George Hospital (KGH) and government blood banks to maintain emergency blood registries, thalassemia patient support, and preventive health screenings.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 bg-white border border-ivory-300 hover:border-gold-500/60 transition-shadow hover:shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-forest-800 text-gold-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-forest-900 text-base mb-1">
                    Youth Character & National Duty
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    Instilling constitutional discipline, secular solidarity, and social responsibility across future technocrats, preparing them for lifelong leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Fact Box */}
            <div className="p-4 bg-ivory-200/70 border border-ivory-300 text-xs text-charcoal-700 flex items-center gap-3">
              <BookOpen className="w-4 h-4 text-forest-800 shrink-0" />
              <span>
                Accredited under the National Youth Policy and integrated into the academic enrichment framework of VIIT Autonomous Regulations.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
