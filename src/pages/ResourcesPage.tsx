import { useEffect, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BackButton } from '../components/ui/BackButton';
import { heritagePublications } from '../config/contentConfig';
import { Landmark, FileCheck, BookOpen, Quote, Shield } from 'lucide-react';
import { ClosedRegistrationBanner } from '../components/ClosedRegistrationBanner';

export function ResourcesPage(): ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Heritage & Official Resources | NSS VIIT (A)';
  }, []);

  return (
    <div className="py-16 bg-ivory-100 text-charcoal-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <BackButton onBack={() => { void navigate('/'); }} label="Back to Home" />
        </div>

        <SectionHeading
          eyebrow="Historical Doctrine & Compendiums"
          title="NSS Heritage & Archival Records"
          subtitle="Explore the founding origins of the National Service Scheme from 1969 alongside official statutory publications and policy handbooks."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Historical Genesis Card */}
          <div className="md:col-span-5 bg-white border border-ivory-300 p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-3 border-b border-ivory-200 pb-4">
              <div className="p-2.5 bg-forest-50 text-forest-800 border border-ivory-200">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-gold-700 font-mono uppercase tracking-wider block font-semibold">
                  Genesis: 1969 Centenary
                </span>
                <h3 className="font-serif text-xl font-bold text-forest-950">
                  Mahatma Gandhi Centenary
                </h3>
              </div>
            </div>

            <p className="text-sm text-charcoal-700 leading-relaxed font-normal">
              Formally initiated on <strong className="text-forest-950 font-semibold">September 24, 1969</strong> during Mahatma Gandhi's birth centenary year under Union Education Minister Dr. V.K.R.V. Rao, the National Service Scheme was founded on a democratic premise: higher education must never remain detached from community welfare and rural realities.
            </p>

            <div className="p-4 bg-ivory-50 border-l-4 border-gold-600 text-xs text-charcoal-700 space-y-1.5">
              <div className="flex items-center gap-1.5 text-forest-900 font-semibold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-gold-700" />
                <span>The Democratic Core</span>
              </div>
              <p className="leading-relaxed">
                "Not Me, But You" reinforces that personal welfare is inseparable from collective community upliftment.
              </p>
            </div>

            <p className="text-xs text-charcoal-600 italic leading-relaxed">
              At Vignan's Institute of Information Technology (Autonomous), the NSS unit carries forward this national mandate through student civic responsibility, environmental care, and community partnership in Duvvada.
            </p>

            {/* National NSS Pledge */}
            <div className="pt-4 border-t border-ivory-200 space-y-2">
              <h4 className="font-serif font-bold text-forest-950 text-base">
                The National NSS Pledge
              </h4>
              <div className="bg-ivory-50 p-4 border border-ivory-200 text-xs text-charcoal-700 italic space-y-2 leading-relaxed">
                <p>
                  &ldquo;We, the volunteers of the National Service Scheme, solemnly pledge that we will be ever ready for the service of the nation.&rdquo;
                </p>
                <p>
                  &ldquo;We will perform community service selflessly without distinction of caste, creed, religion, or language. We shall strive for democratic equality.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Archival Publications & Guidelines */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-ivory-300 pb-2">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-forest-950 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-forest-800" />
                <span>Archival Compendiums & Guidelines</span>
              </h4>
              <span className="text-[11px] text-charcoal-500 font-mono">Official Reference Registry</span>
            </div>

            {heritagePublications.map((pub) => (
              <div
                key={pub.id}
                className="p-6 bg-white border border-ivory-300 shadow-xs hover:border-gold-500/70 hover:shadow-subtle transition-all space-y-3"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gold-700 font-mono font-semibold">{pub.publicationYear}</span>
                  <span className="px-2.5 py-0.5 bg-ivory-200/80 text-forest-900 text-[10px] uppercase font-semibold tracking-wider border border-ivory-300">
                    {pub.status}
                  </span>
                </div>

                <h5 className="font-serif text-lg font-bold text-forest-950">
                  {pub.title}
                </h5>

                <p className="text-xs text-charcoal-600 leading-relaxed font-normal">
                  {pub.description}
                </p>

                <div className="pt-3 border-t border-ivory-200/70 text-[11px] text-charcoal-500 flex items-center gap-2">
                  <FileCheck className="w-3.5 h-3.5 text-forest-800 shrink-0" />
                  <span>Category: {pub.type} • Official Repository Reference</span>
                </div>
              </div>
            ))}

            {/* Statutory Compliance Callout */}
            <div className="p-6 bg-forest-900 text-ivory-100 border-l-4 border-gold-500 shadow-xs space-y-2 mt-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold-400" />
                <h5 className="font-serif font-bold text-base text-gold-400">
                  Statutory Reference Manuals
                </h5>
              </div>
              <p className="text-xs text-ivory-200 leading-relaxed">
                The National Service Scheme Manual issued by the Ministry of Youth Affairs and Sports serves as the primary governing text for volunteer hour accounting, advisory committee meetings, and university integration with JNTUGV Vizianagaram.
              </p>
            </div>
          </div>

        </div>

        {/* Closed Registration Banner */}
        <div className="mb-8">
          <ClosedRegistrationBanner />
        </div>

      </div>
    </div>
  );
}
