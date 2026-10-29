import { useEffect, type ReactElement } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BackButton } from '../components/ui/BackButton';
import { siteConfig } from '../config/siteConfig';
import { BookOpen, ArrowRight } from 'lucide-react';
import { ClosedRegistrationBanner } from '../components/ClosedRegistrationBanner';

export function AboutPage(): ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'About NSS VIIT (A) — History, Mandate & Governance | NSS VIIT (A)';
  }, []);

  return (
    <div className="py-16 bg-ivory-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accessible Back Button */}
        <div className="mb-8">
          <BackButton onBack={() => { void navigate('/'); }} label="Back to Home" />
        </div>

        <SectionHeading
          eyebrow="Institutional Monograph"
          title="About VIIT NSS Cell & Mission"
          subtitle="How Vignan's Institute of Information Technology integrates social consciousness, public health, and rural development into engineering education."
        />

        <div className="space-y-10">
          {/* Main Editorial Body */}
          <div className="bg-white border border-ivory-300 p-8 sm:p-10 shadow-xs space-y-6 text-charcoal-800 leading-relaxed text-base sm:text-lg">
            <h3 className="font-serif text-2xl font-bold text-forest-950">
              The Genesis at Duvvada Campus
            </h3>
            <p>
              Vignan's Institute of Information Technology (Autonomous), situated adjacent to the Visakhapatnam Special Economic Zone (VSEZ) in Duvvada, was founded with a deep commitment to combining technical rigor with community empathy. Recognizing that engineering solutions cannot exist in isolation from societal realities, the VIIT NSS Cell was instituted to provide students with a living platform for civic engagement.
            </p>
            <p className="text-charcoal-700">
              Our volunteers undergo orientation on rural sociology, disaster management protocols, first-aid response, and public health awareness before participating in field actions, adhering to the statutory guidelines and community development objectives set forth by the National Service Scheme.
            </p>

            <div className="p-6 bg-forest-900 text-ivory-100 border-l-4 border-gold-500 my-8">
              <h4 className="font-serif text-xl font-bold text-gold-400 mb-2">
                The Philosophical Mandate: "Not Me, But You"
              </h4>
              <p className="text-sm leading-relaxed text-ivory-200">
                This motto, adopted at the inception of the National Service Scheme in 1969 during the Mahatma Gandhi Centenary Year, reflects the ethos of democratic living and selfless service. It emphasizes that the welfare of an individual is ultimately dependent on the welfare of society as a whole.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-bold text-forest-950 pt-2">
              National Service Scheme Statutory Framework (GoI)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-ivory-50 border border-ivory-200">
                <h5 className="font-bold text-forest-900 text-sm uppercase tracking-wider mb-2">
                  Regular Camping Activities (120-Hour GoI Guideline)
                </h5>
                <p className="text-xs sm:text-sm text-charcoal-600">
                  National service framework outlining regular campus environmental maintenance, health awareness drives, voluntary blood donation mobilization, and non-formal literacy engagement.
                </p>
              </div>

              <div className="p-5 bg-ivory-50 border border-ivory-200">
                <h5 className="font-bold text-forest-900 text-sm uppercase tracking-wider mb-2">
                  Special Residential Village Camp (7-Day GoI Guideline)
                </h5>
                <p className="text-xs sm:text-sm text-charcoal-600">
                  Statutory model for residential community immersion where volunteers undertake participatory surveys, sanitation campaigns, and school mentoring modules in coordination with local village bodies.
                </p>
              </div>
            </div>
          </div>

          {/* Heritage and Resources Link Card */}
          <div className="p-6 bg-white border border-ivory-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-ivory-200 text-forest-900 shrink-0">
                <BookOpen className="w-5 h-5 text-gold-700" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-forest-950 text-base">
                  NSS Heritage & Archival Resources
                </h4>
                <p className="text-xs text-charcoal-600">
                  Read about the 1969 Gandhi Centenary foundation, the Konark Wheel symbolism, and national statutory manuals.
                </p>
              </div>
            </div>

            <Link
              to="/resources"
              className="text-xs uppercase tracking-wider font-semibold text-forest-800 hover:text-gold-700 inline-flex items-center gap-1.5 focus:outline-none shrink-0"
            >
              <span>Explore Archives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Gated Registration Banner */}
          <div className="pt-2">
            <ClosedRegistrationBanner />
          </div>

          {/* Institutional Affiliation Bar */}
          <div className="p-6 bg-forest-950 text-ivory-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={siteConfig.logos.nss}
                alt="NSS Emblem"
                className="w-11 h-11 object-contain bg-white rounded-full p-1 shrink-0"
              />
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-ivory-50">
                  Autonomous Governance & Advisory
                </h4>
                <p className="text-xs text-ivory-300">
                  Affiliated to Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV)
                </p>
              </div>
            </div>

            <Link
              to="/"
              className="px-5 py-2.5 bg-gold-500 text-forest-950 text-xs font-semibold uppercase tracking-wider hover:bg-gold-400 shrink-0"
            >
              Back to Portal Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
