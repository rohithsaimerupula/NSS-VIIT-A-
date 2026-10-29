import { useEffect, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BackButton } from '../components/ui/BackButton';
import { leadershipTeam } from '../config/contentConfig';
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice';
import { Shield, AlertCircle, Users, Sparkles, UserCheck } from 'lucide-react';
import { ClosedRegistrationBanner } from '../components/ClosedRegistrationBanner';

export function TeamPage(): ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Our Team — 28 Member Institutional Roster | NSS VIIT (A)';
  }, []);

  const serviceDomains = [
    { domain: 'Healthcare & Voluntary Blood Mobilization', leads: 'Student Service Leads [Pending Notification]', advisory: 'Faculty Advisory Member' },
    { domain: 'Environmental Action & Coastal Greenery', leads: 'Student Service Leads [Pending Notification]', advisory: 'Faculty Advisory Member' },
    { domain: 'Digital Primer & Literacy Mentorship', leads: 'Student Service Leads [Pending Notification]', advisory: 'Faculty Advisory Member' },
    { domain: 'Swachh Bharat & Sanitation Awareness', leads: 'Student Service Leads [Pending Notification]', advisory: 'Faculty Advisory Member' },
  ];

  // 28-position directory framework (24 NSS + 4 MY Bharat designation split)
  const nssPositions = [
    { id: 'nss-1', role: 'Student President / General Secretary', wing: 'Executive Core' },
    { id: 'nss-2', role: 'Student Vice President (Outreach)', wing: 'Executive Core' },
    { id: 'nss-3', role: 'Student Vice President (Operations)', wing: 'Executive Core' },
    { id: 'nss-4', role: 'Joint Secretary (Administration)', wing: 'Executive Core' },
    { id: 'nss-5', role: 'Joint Secretary (Logistics)', wing: 'Executive Core' },
    { id: 'nss-6', role: 'Lead Coordinator (Blood Donation)', wing: 'Healthcare Wing' },
    { id: 'nss-7', role: 'Assistant Coordinator (Blood Camps)', wing: 'Healthcare Wing' },
    { id: 'nss-8', role: 'Health & Hygiene Awareness Lead', wing: 'Healthcare Wing' },
    { id: 'nss-9', role: 'Lead Coordinator (Plantation Drives)', wing: 'Environment Wing' },
    { id: 'nss-10', role: 'Coastal Greenery & Agro-Forestry Lead', wing: 'Environment Wing' },
    { id: 'nss-11', role: 'Swachh Campus Stewardship Lead', wing: 'Environment Wing' },
    { id: 'nss-12', role: 'Lead Coordinator (Primary Mentorship)', wing: 'Literacy & Mentorship' },
    { id: 'nss-13', role: 'Digital Primer Module Coordinator', wing: 'Literacy & Mentorship' },
    { id: 'nss-14', role: 'Rural Immersion Camp Coordinator', wing: 'Special Camps' },
    { id: 'nss-15', role: 'Village Survey & Outreach Lead', wing: 'Special Camps' },
    { id: 'nss-16', role: 'Special Camp Quartermaster', wing: 'Special Camps' },
    { id: 'nss-17', role: 'Documentation & Editorial Lead', wing: 'Media & Documentation' },
    { id: 'nss-18', role: 'Field Photography & Visual Archivist', wing: 'Media & Documentation' },
    { id: 'nss-19', role: 'Annual Report & Newsletter Editor', wing: 'Media & Documentation' },
    { id: 'nss-20', role: 'Volunteer Roster & Hours Registrar', wing: 'Records & Registry' },
    { id: 'nss-21', role: 'First-Year Orientation Lead', wing: 'Student Relations' },
    { id: 'nss-22', role: 'Second-Year Transition Coordinator', wing: 'Student Relations' },
    { id: 'nss-23', role: 'Girls Volunteer Representative', wing: 'Advisory Council' },
    { id: 'nss-24', role: 'Boys Volunteer Representative', wing: 'Advisory Council' },
  ];

  const myBharatPositions = [
    { id: 'myb-1', role: 'MY Bharat Campus Youth Ambassador', wing: 'MY Bharat Wing' },
    { id: 'myb-2', role: 'National Portal Integration Lead', wing: 'MY Bharat Wing' },
    { id: 'myb-3', role: 'Central Scheme & Delegations Coordinator', wing: 'MY Bharat Wing' },
    { id: 'myb-4', role: 'Experiential Project & Hackathon Liaison', wing: 'MY Bharat Wing' },
  ];

  return (
    <div className="py-16 bg-ivory-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <BackButton onBack={() => { void navigate('/'); }} label="Back to Home" />
        </div>

        <SectionHeading
          eyebrow="Governance & Advisory Body"
          title="NSS Leadership & Faculty Coordination"
          subtitle="The governing structure driving the mission of National Service Scheme at Vignan's Institute of Information Technology."
        />

        {/* Primary Leadership Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.id}
              className="bg-white border border-ivory-300 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 w-full bg-forest-900">
                  <img
                    src={leader.imagePlaceholder.url}
                    alt={leader.imagePlaceholder.alt}
                    className="w-full h-full object-cover filter grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <PlaceholderNotice label={leader.imagePlaceholder.note} />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700">
                      {leader.role}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-950">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-charcoal-500 pb-2 border-b border-ivory-200">
                    {leader.designation}
                  </p>
                  <p className="text-xs text-charcoal-700 italic pt-1 leading-relaxed">
                    "{leader.message}"
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="text-[10px] uppercase font-mono text-charcoal-400">
                  VIIT Single NSS Unit Advisory
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 28-Position Team Directory (24 NSS + 4 MY Bharat Split) */}
        <div id="directory" className="bg-white border border-ivory-300 p-8 shadow-card mb-12 space-y-8">
          <div className="border-b border-ivory-200 pb-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-700 uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>Designation Structure (28 Positions)</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-forest-950">
              Student Executive Body & Coordinators Directory
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
              Comprising 24 National Service Scheme collegiate positions and 4 dedicated Mera Yuva Bharat youth positions.
            </p>
          </div>

          {/* NSS Positions: 24 Seats */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest-800 text-ivory-50">
                NSS Collegiate Wing — 24 Positions
              </span>
              <span className="text-xs text-charcoal-500">
                Collegiate Unit Service Leadership
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {nssPositions.map((pos, idx) => (
                <div
                  key={pos.id}
                  className="p-3 bg-ivory-50/60 border border-ivory-200 rounded-xs flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-charcoal-500">
                      <span>Seat #{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-forest-800 font-semibold">{pos.wing}</span>
                    </div>
                    <p className="font-serif font-bold text-forest-950 text-xs">
                      {pos.role}
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-ivory-200/80 flex items-center justify-between text-[10px] text-charcoal-500">
                    <span className="italic">Candidate Pending Gazette</span>
                    <UserCheck className="w-3 h-3 text-charcoal-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MY Bharat Positions: 4 Seats */}
          <div className="pt-6 border-t border-ivory-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-600 text-forest-950">
                MY Bharat Wing — 4 Positions
              </span>
              <span className="text-xs text-charcoal-500">
                National Portal & Youth Scheme Representation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {myBharatPositions.map((pos, idx) => (
                <div
                  key={pos.id}
                  className="p-3 bg-ivory-100/70 border border-gold-500/40 rounded-xs flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-charcoal-500">
                      <span>Seat #{String(idx + 25).padStart(2, '0')}</span>
                      <span className="text-gold-700 font-semibold">MY Bharat</span>
                    </div>
                    <p className="font-serif font-bold text-forest-950 text-xs">
                      {pos.role}
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gold-500/30 flex items-center justify-between text-[10px] text-charcoal-500">
                    <span className="italic">Nomination Pending</span>
                    <Sparkles className="w-3 h-3 text-gold-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & Safeguard Notice */}
          <div className="p-4 bg-ivory-200/60 border border-ivory-300 text-xs text-charcoal-700 flex items-center gap-2 rounded-xs">
            <AlertCircle className="w-4 h-4 text-forest-800 shrink-0" />
            <span>
              In accordance with institutional privacy safeguards, student names and photographs are published exclusively following authorized gazette notifications and signed student consent.
            </span>
          </div>
        </div>

        {/* Functional Domains Directory */}
        <div id="domains" className="bg-white border border-ivory-300 p-8 shadow-card space-y-6 mb-12">
          <div className="flex items-center gap-2 border-b border-ivory-200 pb-4">
            <Shield className="w-5 h-5 text-forest-800" />
            <h3 className="font-serif text-xl font-bold text-forest-950">
              Single Collegiate Unit — Functional Focus Domains
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDomains.map((u, idx) => (
              <div key={idx} className="p-4 bg-ivory-50 border border-ivory-200 space-y-2">
                <h4 className="font-serif font-bold text-forest-900 text-sm">
                  {u.domain}
                </h4>
                <p className="text-xs text-charcoal-600">
                  <strong className="text-charcoal-800">Coordination:</strong> {u.leads}
                </p>
                <p className="text-xs text-charcoal-600">
                  <strong className="text-charcoal-800">Faculty Advisory:</strong> {u.advisory}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-ivory-200/60 border border-ivory-300 text-xs text-charcoal-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-forest-800 shrink-0" />
            <span>
              Official faculty appointments and annual student executive rosters are published following administrative approval. Direct contact details will be added upon verification.
            </span>
          </div>
        </div>

        {/* Closed Registration Banner */}
        <div className="pt-2">
          <ClosedRegistrationBanner />
        </div>

      </div>
    </div>
  );
}
