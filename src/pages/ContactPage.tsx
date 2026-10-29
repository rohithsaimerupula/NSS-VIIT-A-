import { useState, useEffect, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BackButton } from '../components/ui/BackButton';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Mail, Phone, Globe, AlertCircle, Send, CheckCircle2 } from 'lucide-react';
import { ClosedRegistrationBanner } from '../components/ClosedRegistrationBanner';

export function ContactPage(): ReactElement {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact NSS Secretariat & Campus Desk | NSS VIIT (A)';
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-16 bg-ivory-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <BackButton onBack={() => { void navigate('/'); }} label="Back to Home" />
        </div>

        <SectionHeading
          eyebrow="Institutional Liaison"
          title="Contact VIIT NSS Cell"
          subtitle="Official institutional desk, campus location, and communication channels for youth community initiatives."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Institutional Contact Information Card (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-ivory-300 p-8 shadow-card space-y-6">
            <h3 className="font-serif text-2xl font-bold text-forest-950 border-b border-ivory-200 pb-3">
              Official Institutional Address
            </h3>

            <div className="space-y-4 text-sm text-charcoal-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-forest-800 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-forest-900">{siteConfig.institution.fullName}</p>
                  <p className="text-charcoal-700">{siteConfig.institution.addressLine1}</p>
                  <p className="text-charcoal-700">{siteConfig.institution.addressLine2}</p>
                  <p className="text-charcoal-700">
                    {siteConfig.institution.city}, {siteConfig.institution.state} – {siteConfig.institution.pincode}
                  </p>
                  {siteConfig.institution.nssCellLocation && (
                    <p className="text-xs font-semibold text-gold-700 mt-2 bg-ivory-200 p-2 border border-ivory-300">
                      Physical Desk: {siteConfig.institution.nssCellLocation}
                    </p>
                  )}
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3 pt-2">
                <Globe className="w-5 h-5 text-forest-800 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 block">Official Institution Portal:</span>
                  <a
                    href={siteConfig.institution.officialWebsiteUrl || 'https://vignaniit.edu.in'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-forest-800 hover:text-gold-700 underline"
                  >
                    https://vignaniit.edu.in
                  </a>
                </div>
              </div>

              {/* Email Notice */}
              <div className="flex items-start gap-3 pt-2">
                <Mail className="w-5 h-5 text-forest-800 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-charcoal-500 block">Official Email Address:</span>
                  <p className="font-medium text-forest-800">
                    nss@vignaniit.edu.in
                  </p>
                </div>
              </div>

              {/* Phone Notice */}
              <div className="flex items-start gap-3 pt-2">
                <Phone className="w-5 h-5 text-forest-800 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-charcoal-500 block">Institutional Telephone / Desk:</span>
                  <p className="text-xs text-charcoal-600">
                    VIIT EPABX: Desk Extension via College Reception
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-forest-900 text-ivory-100 text-xs space-y-1">
              <span className="font-bold text-gold-400 uppercase tracking-wider block">Student Cell Hours</span>
              <p>Monday – Friday: 03:30 PM – 05:00 PM</p>
              <p className="text-ivory-300">VIIT Campus NSS Cell Office, Duvvada</p>
            </div>
          </div>

          {/* Inquiry / Engagement Interface (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-ivory-300 p-8 shadow-card">
            <div className="flex items-center justify-between border-b border-ivory-200 pb-3 mb-6">
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                Community Inquiry & Collaboration
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-ivory-200 text-forest-900">
                Public Desk
              </span>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-forest-50 border border-forest-700/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-forest-800 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-forest-950">
                  Inquiry Recorded (Frontend Preview)
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-700 max-w-md mx-auto">
                  Thank you for reaching out. Per the project scope boundary, this frontend interface simulates submission. Real form transmission will be enabled during the upcoming backend integration phase.
                </p>
                <button
                  type="button"
                  onClick={() => { setFormSubmitted(false); }}
                  className="px-4 py-2 bg-forest-800 text-ivory-50 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. / Sri / Student Name"
                      className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-ivory-300 focus:border-forest-800 focus:ring-1 focus:ring-forest-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                      Organization / Department *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. VIIT Dept / NGO / Hospital"
                      className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-ivory-300 focus:border-forest-800 focus:ring-1 focus:ring-forest-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-ivory-300 focus:border-forest-800 focus:ring-1 focus:ring-forest-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                      Nature of Inquiry *
                    </label>
                    <select
                      className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-ivory-300 focus:border-forest-800 focus:ring-1 focus:ring-forest-800"
                    >
                      <option>Community Health & Blood Drive Collaboration</option>
                      <option>Adopted Village Initiative Support</option>
                      <option>Environmental Sapling Plantation</option>
                      <option>General Institutional Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Message / Collaboration Brief *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your proposed community initiative or query..."
                    className="w-full px-3.5 py-2.5 text-sm bg-ivory-50 border border-ivory-300 focus:border-forest-800 focus:ring-1 focus:ring-forest-800"
                  />
                </div>

                <div className="p-3 bg-ivory-100 border border-ivory-200 text-xs text-charcoal-600 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-forest-800 shrink-0" />
                  <span>
                    Frontend Phase: Backend API and persistent email dispatch are intentionally deferred per the strict scope boundary.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 bg-forest-800 text-ivory-50 hover:bg-forest-900 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>Record Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Closed Registration Notice */}
        <div className="mb-8">
          <ClosedRegistrationBanner />
        </div>

      </div>
    </div>
  );
}
