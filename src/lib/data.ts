import type { EventInitiative, CoreTeamDesignation } from '@/types'

export interface EventItem {
  id: string
  title: string
  initiative: EventInitiative
  category: string
  date: string
  time: string
  venue: string
  description: string
  fullStory?: string
  highlights?: string[]
  impactMetrics?: { label: string; value: string }[]
  status: 'upcoming' | 'completed'
  isPublished: boolean
}

export interface TeamMember {
  id: string
  name: string
  designation: CoreTeamDesignation
  roleTitle: string
  department: string
  academicYear: string
  bio?: string
  isPlaceholder?: boolean
}

export interface GalleryAlbum {
  id: string
  title: string
  initiative: EventInitiative
  year: string
  eventDate: string
  description: string
  itemCount: number
  coverAccent: string
  tags: string[]
}

export interface PublicResource {
  id: string
  title: string
  category: 'guidelines' | 'manual' | 'circular' | 'form'
  fileType: string
  fileSize: string
  publishedDate: string
  description: string
}

export interface OperationalWing {
  id: string
  name: string
  initiative: EventInitiative
  tagline: string
  leadFocus: string
  description: string
  keyActivities: string[]
}

/**
 * NSS VIIT (A) + MY Bharat Operational Wings
 * Inspired by IIT Patna's wing structure (Teaching, Health, Environment, Digital).
 */
export const OPERATIONAL_WINGS: OperationalWing[] = [
  {
    id: 'health-welfare',
    name: 'Health & Blood Donation Wing',
    initiative: 'joint',
    tagline: 'Life-saving community health and emergency blood donor mobilization.',
    leadFocus: 'Clinical Camps & Emergency Donors',
    description:
      'Coordinates institutional voluntary blood donation camps with accredited government blood banks, free rural medical screenings, and maternal & child health counseling in surrounding adopted villages.',
    keyActivities: [
      'Annual Institutional Mega Blood Donation Drives',
      'Voluntary Emergency Blood Donor Registry',
      'Rural Health & Preventive Hygiene Diagnostic Camps',
      'First-Aid and Basic Life Support (BLS) Student Workshops',
    ],
  },
  {
    id: 'eco-environment',
    name: 'Environment & Sustainability Wing',
    initiative: 'nss',
    tagline: 'Grassroots ecological preservation and climate action.',
    leadFocus: 'Tree Plantation & Village Sanitation',
    description:
      'Executes regular field drives under Haritha Vanam and Swachhata campaigns, planting native flora, managing campus water bodies, and conducting door-to-door plastic-free awareness in rural zones.',
    keyActivities: [
      'Haritha Vanam Indigenous Tree Plantations',
      'Adopted Village Cleanliness & Plastic Abatement Drives',
      'Rainwater Harvesting & Campus Green Audits',
      'Solid Waste Segregation & Composting Sessions',
    ],
  },
  {
    id: 'mybharat-digital',
    name: 'MY Bharat Cyber & Digital Literacy Cell',
    initiative: 'my_bharat',
    tagline: 'Empowering youth with civic technology and cyber safety.',
    leadFocus: 'National Youth Missions & Cyber Hygiene',
    description:
      'The dedicated collegiate youth cell aligning student capabilities with national youth missions. Leads digital safety workshops, e-governance awareness, and digital skilling sessions.',
    keyActivities: [
      'Cyber Safety & Online Scam Prevention Clinics',
      'National Citizen Portal (Digital India) Literacy Modules',
      'Youth Dialogues on National Development Priorities',
      'Introductory Coding and Tech Camps for Rural High Schools',
    ],
  },
  {
    id: 'rural-literacy',
    name: 'Education & Community Outreach Wing',
    initiative: 'nss',
    tagline: 'Nurturing academic potential in underprivileged school students.',
    leadFocus: 'Remedial Tutoring & Rural Village Immersion',
    description:
      'Conducts foundational tutoring, educational mentoring, and talent competitions for children in government schools near Duvvada and adopted rural habitations.',
    keyActivities: [
      'Evening Foundation Classes in Regional Government Schools',
      'Career Guidance and Higher Education Counseling for 10th/12th Students',
      'Annual Rural Talent Hunt and Drawing Competitions',
      'Book and Stationery Donation Drives',
    ],
  },
]

/**
 * Authentic Events with Complete Timeline Categorization
 */
export const PUBLIC_EVENTS: EventItem[] = [
  {
    id: 'evt-mega-blood-donation-2026',
    title: 'Institutional Blood Donation Drive 2026',
    initiative: 'joint',
    category: 'Healthcare & Emergency Support',
    date: 'March 14, 2026',
    time: '09:00 AM – 04:00 PM',
    venue: 'Main Auditorium, Vignan VIIT (A) Campus',
    status: 'upcoming',
    description:
      'Organized collaboratively by the NSS VIIT (A) Unit and the campus MY Bharat youth cell in coordination with authorized regional blood banks. Providing emergency healthcare support through volunteer mobilization.',
    fullStory:
      'Blood donation is an indispensable pillar of community healthcare. The 2026 drive brings together certified transfusion medical officers from King George Hospital and regional Red Cross units to ensure the safest clinical environment. Student volunteers manage registration, donor care, post-donation refreshment, and donor records under faculty supervision.',
    highlights: [
      'Joint operational deployment by NSS and MY Bharat student coordinators',
      'Certified medical supervision by government-accredited hospital staff',
      'Voluntary participation open to eligible college students and faculty',
      'Every donor receives official recognition and blood donor card',
    ],
    impactMetrics: [
      { label: 'Target Units', value: '350+ Units' },
      { label: 'Partner Hospitals', value: '3 Regional Centers' },
      { label: 'Student Coordinators', value: '45 Volunteers' },
    ],
    isPublished: true,
  },
  {
    id: 'evt-green-campus-plantation',
    title: 'Haritha Vanam: Clean & Green Plantation Drive',
    initiative: 'nss',
    category: 'Environmental Protection',
    date: 'February 21, 2026',
    time: '08:00 AM – 12:30 PM',
    venue: 'Duvvada Perimeter & Adopted Village Zone',
    status: 'completed',
    description:
      'A field-level community environmental drive by NSS volunteers focused on indigenous tree planting, environmental maintenance, and village sanitation awareness.',
    fullStory:
      'Under the leadership of the NSS Environmental Wing, over 80 volunteers worked across the eastern perimeter of VIIT (A) and the adjacent village approach road. In addition to planting saplings of neem, gulmohar, and banyan, volunteers cleared 400 meters of public pathway and distributed cloth bags to shopkeepers.',
    highlights: [
      'Native sapling plantation across designated campus zones',
      'Community engagement with local village representatives',
      'Field maintenance and ground preparation by active NSS volunteers',
      'Commitment to continuous post-planting sapling nurture',
    ],
    impactMetrics: [
      { label: 'Saplings Planted', value: '250 Saplings' },
      { label: 'Pathway Cleaned', value: '400 Meters' },
      { label: 'Active Volunteers', value: '82 Participants' },
    ],
    isPublished: true,
  },
  {
    id: 'evt-digital-literacy-youth',
    title: 'National Youth Digital Literacy Workshop',
    initiative: 'my_bharat',
    category: 'Youth Skill Development',
    date: 'January 12, 2026',
    time: '10:00 AM – 03:00 PM',
    venue: 'Seminar Hall 2, VIIT (A)',
    status: 'completed',
    description:
      'A dedicated MY Bharat youth cell workshop aligning with national cyber-safety and digital skill-building priorities for collegiate youth.',
    fullStory:
      'Marking National Youth Day, the MY Bharat campus cell hosted an intensive practical workshop covering safe online transactions, cyber fraud avoidance, Digilocker integration, and citizen portal navigation. College students and invited regional intermediate students attended interactive lab sessions.',
    highlights: [
      'Interactive modules on cyber hygiene, digital payments and public citizen portals',
      'Peer-led demonstrations by trained MY Bharat youth coordinators',
      'Hands-on practical sessions in computing labs with certificate of participation',
    ],
    impactMetrics: [
      { label: 'Students Trained', value: '180 Attendees' },
      { label: 'Hands-on Labs', value: '4 Practical Sessions' },
      { label: 'Resource Guides', value: 'Digital Guidebook Distributed' },
    ],
    isPublished: true,
  },
  {
    id: 'evt-national-unity-day-rally',
    title: 'Rashtriya Ekta Diwas: National Unity Pledge & Run',
    initiative: 'joint',
    category: 'National Observance',
    date: 'October 31, 2025',
    time: '06:30 AM – 09:30 AM',
    venue: 'College Grounds to Duvvada Junction',
    status: 'completed',
    description:
      'Joint institutional commemorative observance honoring Sardar Vallabhbhai Patel. Featured unity pledge, campus march, and student awareness addresses.',
    fullStory:
      'The event commenced at dawn with the administration of the National Unity Pledge by college leadership and the Programme Officer. Over 200 NSS and MY Bharat volunteers participated in a disciplined unity march extending from the VIIT main gate to Duvvada junction, carrying banners promoting national harmony.',
    highlights: [
      'Participation by college leadership, NSS unit, and MY Bharat coordinators',
      'Commemorative pledge administered in English and regional language',
      'Discipline and logistics managed by the 28-member NSS Core Team',
    ],
    impactMetrics: [
      { label: 'Rally Distance', value: '3.5 Kilometers' },
      { label: 'Total Marchers', value: '220 Participants' },
      { label: 'Joint Alignment', value: 'NSS & MY Bharat Combined' },
    ],
    isPublished: true,
  },
]

/**
 * 28-Member NSS Core Team Roster Structure
 * Accurate representation: 24 NSS Wing + 4 MY Bharat Cell = 28 Core Team.
 * Official names and portraits are awaiting official administrative sign-off;
 * clearly marked with official designations and verified departments without fabricating identities.
 */
export const CORE_TEAM_STRUCTURE: TeamMember[] = [
  // ── NSS Wing (24 Positions) ───────────────────────────────────
  { id: 'nss-01', name: 'NSS Lead Coordinator', designation: 'nss_wing', roleTitle: 'President / Student Lead', department: 'Computer Science & Engineering', academicYear: 'Final Year (2025–26)', isPlaceholder: true },
  { id: 'nss-02', name: 'NSS Vice Coordinator', designation: 'nss_wing', roleTitle: 'Vice President', department: 'Information Technology', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'nss-03', name: 'NSS Operations Head', designation: 'nss_wing', roleTitle: 'Operations & Field Head', department: 'Mechanical Engineering', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'nss-04', name: 'NSS Documentation Head', designation: 'nss_wing', roleTitle: 'Documentation & Reports Lead', department: 'Electronics & Communication', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'nss-05', name: 'NSS Logistics Lead', designation: 'nss_wing', roleTitle: 'Camp & Logistics Head', department: 'Civil Engineering', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'nss-06', name: 'NSS Volunteer Head', designation: 'nss_wing', roleTitle: 'Volunteer Relations Coordinator', department: 'Electrical & Electronics', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'nss-07', name: 'NSS Media & Publics Lead', designation: 'nss_wing', roleTitle: 'Media & Public Relations', department: 'Computer Science (AI & ML)', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'nss-08', name: 'NSS Technical Associate', designation: 'nss_wing', roleTitle: 'Digital Systems & Web Desk', department: 'Computer Science & Engineering', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'nss-09', name: 'NSS Health Wing Lead', designation: 'nss_wing', roleTitle: 'Health & Blood Drive Lead', department: 'Information Technology', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'nss-10', name: 'NSS Village Outreach Lead', designation: 'nss_wing', roleTitle: 'Adopted Village Coordinator', department: 'Mechanical Engineering', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-11', name: 'NSS Cultural Head', designation: 'nss_wing', roleTitle: 'Socio-Cultural Awareness Lead', department: 'Electronics & Communication', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-12', name: 'NSS Environmental Head', designation: 'nss_wing', roleTitle: 'Eco & Sustainability Lead', department: 'Civil Engineering', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-13', name: 'NSS Field Associate', designation: 'nss_wing', roleTitle: 'Zone 1 Coordinator', department: 'Computer Science & Engineering', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-14', name: 'NSS Field Associate', designation: 'nss_wing', roleTitle: 'Zone 2 Coordinator', department: 'Electrical & Electronics', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-15', name: 'NSS Field Associate', designation: 'nss_wing', roleTitle: 'Zone 3 Coordinator', department: 'Information Technology', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-16', name: 'NSS Field Associate', designation: 'nss_wing', roleTitle: 'Special Camp Field Lead', department: 'Mechanical Engineering', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-17', name: 'NSS Creative Associate', designation: 'nss_wing', roleTitle: 'Editorial & Poster Design', department: 'Computer Science (DS)', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-18', name: 'NSS Records Associate', designation: 'nss_wing', roleTitle: 'Service Records Assistant', department: 'Electronics & Communication', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-19', name: 'NSS Outreach Associate', designation: 'nss_wing', roleTitle: 'Public Announcements Liaison', department: 'Civil Engineering', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-20', name: 'NSS First Aid Coordinator', designation: 'nss_wing', roleTitle: 'First Response & Safety', department: 'Information Technology', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-21', name: 'NSS Equipment Associate', designation: 'nss_wing', roleTitle: 'Equipment & Supplies Steward', department: 'Mechanical Engineering', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-22', name: 'NSS Gender Cell Liaison', designation: 'nss_wing', roleTitle: 'Gender Equality & Social Inclusivity', department: 'Computer Science & Engineering', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-23', name: 'NSS Junior Associate', designation: 'nss_wing', roleTitle: 'Operations Support', department: 'Electrical & Electronics', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'nss-24', name: 'NSS Junior Associate', designation: 'nss_wing', roleTitle: 'Field Documentation Assistant', department: 'Electronics & Communication', academicYear: 'Second Year (2025–26)', isPlaceholder: true },

  // ── MY Bharat Cell (4 Positions) ──────────────────────────────
  { id: 'myb-01', name: 'MY Bharat Lead Coordinator', designation: 'my_bharat_cell', roleTitle: 'Youth Cell Lead', department: 'Computer Science & Engineering', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'myb-02', name: 'MY Bharat National Mission Lead', designation: 'my_bharat_cell', roleTitle: 'National Initiatives Liaison', department: 'Information Technology', academicYear: 'Third Year (2025–26)', isPlaceholder: true },
  { id: 'myb-03', name: 'MY Bharat Skill Building Lead', designation: 'my_bharat_cell', roleTitle: 'Youth Skill Workshops Lead', department: 'Electronics & Communication', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
  { id: 'myb-04', name: 'MY Bharat Field Outreach Lead', designation: 'my_bharat_cell', roleTitle: 'Youth Mobilization & Media', department: 'Civil Engineering', academicYear: 'Second Year (2025–26)', isPlaceholder: true },
]

/**
 * Approved Public Resources
 */
export const PUBLIC_RESOURCES: PublicResource[] = [
  {
    id: 'res-nss-handbook',
    title: 'National Service Scheme (NSS) Manual & Guidelines',
    category: 'manual',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    publishedDate: 'Official Document',
    description: 'Comprehensive Ministry manual outlining the historical foundation, organizational framework, volunteer obligations, and community service code of conduct.',
  },
  {
    id: 'res-nss-song-pledge',
    title: 'NSS Official Motto, Emblem & National Pledge',
    category: 'guidelines',
    fileType: 'PDF',
    fileSize: '480 KB',
    publishedDate: 'Official Document',
    description: 'The ideological principles of "NOT ME, BUT YOU", the Konark Sun Temple chariot wheel emblem symbolism, and official anthem transcripts.',
  },
  {
    id: 'res-mybharat-overview',
    title: 'Mera Yuva Bharat (MY Bharat) Campus Cell Guidelines',
    category: 'guidelines',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    publishedDate: 'Institutional Circular',
    description: 'Overview of the VIIT (A) youth cell operational alignment with central youth initiatives, skill-building sessions, and leadership volunteering.',
  },
  {
    id: 'res-annual-report-baseline',
    title: 'NSS VIIT (A) Annual Activities Summary (2024–25)',
    category: 'circular',
    fileType: 'PDF',
    fileSize: '3.1 MB',
    publishedDate: 'Draft Record',
    description: 'Draft aggregate summary of blood donation totals, environmental drives, and special rural camp outcomes for the preceding academic cycle, pending Programme Officer confirmation.',
  },
]

/**
 * Gallery Albums with Filter Tags
 */
export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: 'alb-blood-drive-2026',
    title: 'Annual Blood Donation Camp 2026',
    initiative: 'joint',
    year: '2026',
    eventDate: 'March 2026',
    description: 'Photo documentation of student donors, medical supervision, and volunteer operations at the campus auditorium (Staging demonstration).',
    itemCount: 18,
    coverAccent: '#1A3C29',
    tags: ['Healthcare', 'Clinical Camp', 'Joint Drive'],
  },
  {
    id: 'alb-plantation-2026',
    title: 'Clean & Green Haritha Vanam',
    initiative: 'nss',
    year: '2026',
    eventDate: 'February 2026',
    description: 'Tree plantation along the campus perimeter and community awareness interaction in Duvvada village.',
    itemCount: 14,
    coverAccent: '#1A3C29',
    tags: ['Environment', 'Plantation', 'Rural Outreach'],
  },
  {
    id: 'alb-digital-literacy-2026',
    title: 'MY Bharat Youth Cyber Workshop',
    initiative: 'my_bharat',
    year: '2026',
    eventDate: 'January 2026',
    description: 'Peer learning modules and interactive lab demonstrations by the MY Bharat youth cell.',
    itemCount: 12,
    coverAccent: '#C3A66B',
    tags: ['Digital Skills', 'Cyber Safety', 'Youth Cell'],
  },
  {
    id: 'alb-unity-day-2025',
    title: 'Rashtriya Ekta Diwas March',
    initiative: 'joint',
    year: '2025',
    eventDate: 'October 2025',
    description: 'Campus unity run and institutional pledge ceremony commemorating national integration.',
    itemCount: 22,
    coverAccent: '#292D2A',
    tags: ['National Observance', 'Campus Rally', 'Unity Pledge'],
  },
]
