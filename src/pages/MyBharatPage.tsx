import { useEffect, type ReactElement } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BackButton } from '../components/ui/BackButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteConfig } from '../config/siteConfig';
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Compass,
  ArrowRight,
  Globe2,
  Users2
} from 'lucide-react';
import { ClosedRegistrationBanner } from '../components/ClosedRegistrationBanner';

export function MyBharatPage(): ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Mera Yuva Bharat (MY Bharat) — Dedicated Youth Cell | NSS VIIT (A)';
  }, []);

  const pillars = [
    {
      title: 'Youth Leadership & Nation Building',
      desc: 'National framework integrating youth across education, social outreach, and civic development.',
      icon: Compass,
    },
    {
      title: 'Digital Volunteer Ecosystem',
      desc: 'Centralized government portal tracking community hours, experiential learning, and verified volunteer certificates.',
      icon: Globe2,
    },
    {
      title: 'Collegiate Unit Coordination',
      desc: 'NSS VIIT (A) operates designated youth engagement modules under central ministry directions.',
      icon: Users2,
    },
  ];

  const pathways = [
    {
      title: 'NSS Collegiate Unit Pathway',
      points: [
        'Campus-centric community service (blood donation, coastal ecology, rural immersion)',
        'Structured two-year term governed by JNTUGV & institutional advisory',
        'Coordinated by NSS VIIT Programme Officer and Student Executive Body',
      ],
      badge: 'Traditional NSS Cell',
    },
    {
      title: 'MY Bharat National Portal Pathway',
      points: [
        'National youth registry by Ministry of Youth Affairs and Sports (GoI)',
        'Direct enrollment in nationwide hackathons, national camps, and policy initiatives',
        'Digital repository for national credentials and experiential internships',
      ],
      badge: 'Government Digital Portal',
    },
    {
      title: 'Integrated Dual Pathway (Recommended)',
      points: [
        'Active ground involvement via VIIT NSS on-campus activities',
        'Parallel national registry alignment on mybharat.gov.in',
        'Synergistic verification honoring both collegiate hours and national recognition',
      ],
      badge: 'Comprehensive Synergy',
      highlighted: true,
    },
  ];

  return (
    <div className="py-12 bg-ivory-100 text-charcoal-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-6">
          <BackButton onBack={() => { void navigate('/'); }} label="Back to Home" />
        </div>

        {/* Header Hero Banner */}
        <div className="bg-white border border-ivory-300 p-8 sm:p-12 mb-10 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ivory-100 border border-gold-500/30 rounded-full text-[11px] font-semibold uppercase tracking-wider text-forest-900 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Ministry of Youth Affairs & Sports • Government of India</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight leading-tight mb-4">
              Mera Yuva Bharat (MY Bharat)
            </h1>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed mb-6 font-normal">
              An autonomous nation-building initiative connecting Indian youth with transformative experiential learning, community volunteering, and government outreach programmes. Operating natively within VIIT as an integrated cell with 4 dedicated coordinators.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.socialLinks.myBharatPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-forest-800 text-ivory-50 hover:bg-forest-900 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs"
              >
                <span>Visit Official MY Bharat Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-ivory-50 text-forest-900 border border-ivory-300 hover:border-forest-800 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs"
              >
                <span>Volunteer Information</span>
                <ArrowRight className="w-4 h-4 text-gold-700" />
              </Link>
            </div>
          </div>

          {/* Decorative Corner Badge */}
          <div className="hidden lg:flex absolute right-12 bottom-8 top-8 items-center opacity-90">
            <img
              src={siteConfig.logos.myBharat}
              alt="MY Bharat Emblem"
              className="h-32 w-auto object-contain"
            />
          </div>
        </div>

        {/* Three Core Pillars */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="National Mission Integration"
            title="Pillars of Youth Empowerment"
            subtitle="Bridging collegiate engineering education with national youth service priorities."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-white border border-ivory-300 p-6 shadow-xs">
                  <div className="w-10 h-10 rounded-sm bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-forest-950 text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Volunteer Pathways Section */}
        <div className="bg-white border border-ivory-300 p-8 sm:p-10 mb-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-gold-700 font-semibold block mb-2">
              Pathways of Engagement
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-3">
              Understanding the NSS & MY Bharat Relationship
            </h2>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              Vignan's Institute of Information Technology (A) supports multi-tier engagement, empowering volunteers through traditional collegiate units while enabling national digital recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathways.map((pw, i) => (
              <div
                key={i}
                className={`p-6 border flex flex-col justify-between ${
                  pw.highlighted
                    ? 'bg-ivory-50 border-gold-500/60 shadow-xs'
                    : 'bg-white border-ivory-300'
                }`}
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-forest-100 text-forest-900 mb-3">
                    {pw.badge}
                  </div>
                  <h3 className="font-serif font-bold text-forest-950 text-base mb-4">
                    {pw.title}
                  </h3>
                  <ul className="space-y-2.5 mb-6">
                    {pw.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-charcoal-700 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-800 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-ivory-200 text-[11px] text-charcoal-500 font-mono">
                  {pw.highlighted ? 'Dual Recognition' : 'Standard Alignment'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closed Registration Notice */}
        <div className="mb-12">
          <ClosedRegistrationBanner />
        </div>

        {/* Institutional Safeguards Notice */}
        <div className="p-6 bg-ivory-200/60 border border-ivory-300 text-xs text-charcoal-700 flex items-start sm:items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-forest-800 shrink-0 mt-0.5 sm:mt-0" />
          <div className="space-y-1">
            <p className="font-semibold text-forest-950">
              Institutional Advisory & Compliance
            </p>
            <p className="leading-relaxed">
              NSS VIIT (A) operates under statutory guidelines of JNTUGV Vizianagaram and the Ministry of Youth Affairs & Sports (GoI). All official certificates and hours are subject to manual institutional verification.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
