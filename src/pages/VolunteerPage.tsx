import { useEffect, type ReactElement } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BackButton } from '../components/ui/BackButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  Lock,
  Compass,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

export function VolunteerPage(): ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Volunteer Induction & Registration Status | NSS VIIT (A)';
  }, []);

  const pathways = [
    {
      title: 'Pathway A: NSS VIIT Collegiate Unit',
      target: 'Students seeking on-ground campus & local community service hours',
      scope: 'Blood donation camps, Swachh Bharat, rural school mentoring, environmental plantation drives at Duvvada.',
      duration: 'Two consecutive academic years (120 service hours/year + special camp).',
      registrationStatus: 'In-Person / Physical Orientation Only',
    },
    {
      title: 'Pathway B: MY Bharat National Portal',
      target: 'Students seeking nationwide youth engagement and digital certification',
      scope: 'National challenges, virtual workshops, government youth delegation programs and central experiential projects.',
      duration: 'Self-paced national milestones via the central portal.',
      registrationStatus: 'Online via mybharat.gov.in',
    },
    {
      title: 'Pathway C: Joint Dual Enrollment',
      target: 'Dedicated student leaders pursuing maximum impact and recognition',
      scope: 'Full participation in NSS VIIT campus chapters alongside synchronized registration on the national MY Bharat portal.',
      duration: 'Comprehensive two-year collegiate commitment with national credit alignment.',
      registrationStatus: 'Collegiate Induction + Portal Synchronization',
      highlighted: true,
    },
  ];

  const eligibility = [
    "Enrolled as a full-time undergraduate student at Vignan's Institute of Information Technology (Autonomous).",
    'Open to first-year (1st B.Tech) and second-year (2nd B.Tech) students during the annual induction window.',
    'Commitment to uphold the NSS motto "Not Me, But You" with discipline and civic responsibility.',
    'Willingness to participate in community immersion activities, special camps, and weekend outreach drives.',
  ];

  return (
    <div className="py-12 bg-ivory-100 text-charcoal-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-6">
          <BackButton onBack={() => { void navigate('/'); }} label="Back to Home" />
        </div>

        {/* Closed Registration Banner Notice */}
        <div className="bg-white border-l-4 border-l-gold-600 border-y border-r border-ivory-300 p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-ivory-100 rounded-full text-gold-700 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-forest-100 text-forest-900 rounded font-bold">
                  Status: Closed
                </span>
                <span className="text-xs text-charcoal-500 font-medium">
                  Academic Year 2024–2025
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                Online Volunteer Registration is Currently Closed
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-3xl">
                The official portal registration system remains inactive during development. Volunteer inductions occur through scheduled departmental orientations approved by the Programme Officer.
              </p>
            </div>
          </div>
        </div>

        {/* Pathways of Service Section */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="Volunteering Architecture"
            title="Service Pathways & Enrollment Framework"
            subtitle="Understand how you can serve our institution, region, and nation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathways.map((p, idx) => (
              <div
                key={idx}
                className={`p-6 border flex flex-col justify-between ${
                  p.highlighted
                    ? 'bg-white border-gold-500 shadow-card'
                    : 'bg-white border-ivory-300 shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-ivory-200 text-forest-950">
                    {p.registrationStatus}
                  </div>
                  <h3 className="font-serif font-bold text-forest-950 text-lg">
                    {p.title}
                  </h3>
                  <div className="space-y-2 text-xs">
                    <p className="text-charcoal-700 font-medium">
                      <strong className="text-forest-900">Target Group:</strong> {p.target}
                    </p>
                    <p className="text-charcoal-600 leading-relaxed">
                      <strong className="text-forest-900">Scope:</strong> {p.scope}
                    </p>
                    <p className="text-charcoal-600 leading-relaxed">
                      <strong className="text-forest-900">Tenure:</strong> {p.duration}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-ivory-200 flex items-center justify-between text-xs">
                  <span className="font-mono text-charcoal-500 text-[11px]">
                    Verified Unit Pathway
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-forest-800" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria & Induction Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-ivory-300 p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-4 text-forest-900 font-serif font-bold text-xl">
              <GraduationCap className="w-5 h-5 text-gold-700" />
              <h3>Eligibility Guidelines</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-charcoal-700">
              {eligibility.map((el, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-ivory-300 p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-forest-900 font-serif font-bold text-xl">
                <Compass className="w-5 h-5 text-gold-700" />
                <h3>How to Enquire or Connect</h3>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-4">
                Students wishing to express interest in upcoming camps, blood donation rosters, or the next academic cycle should contact their Departmental NSS Faculty Coordinator or visit the campus NSS office.
              </p>
              <div className="p-4 bg-ivory-50 border border-ivory-200 text-xs text-charcoal-600 space-y-1">
                <p><strong>Campus Office:</strong> Physical NSS Cell Room, VIIT Duvvada</p>
                <p><strong>Office Hours:</strong> Monday – Friday, 4:00 PM – 5:30 PM</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-6 w-full py-3 bg-forest-800 text-ivory-50 hover:bg-forest-900 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs text-center inline-block"
            >
              Contact Campus NSS Cell
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
