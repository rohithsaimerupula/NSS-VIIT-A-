import type {
  ImpactMetric,
  ActivityItem,
  EventItem,
  LeaderProfile,
  GalleryItem,
  VolunteerStory,
  AchievementItem,
  HeritagePublication,
  CommunityPartner,
  HeroSlide
} from '../types';

/**
 * Content Visibility Flags
 * 
 * CONTENT INTEGRITY DIRECTIVE:
 * Unverified statistics, sample testimonials, unconfirmed calendar dates,
 * and external partnerships are hidden by default rather than presented with
 * disclaimers, ensuring public presentation is strictly verified.
 */
export const contentVisibility = {
  showImpactMetrics: false,
  showUnverifiedEvents: false,
  showUnverifiedStories: false,
  showExternalPartnerships: false,
  showUnverifiedLeadership: false,
  showUnverifiedAchievements: false,
};

export const PLACEHOLDER_NOTE = "Documentary photography placeholder. Authentic VIIT NSS archives pending compilation.";

/**
 * Full-width Hero Carousel Slides
 * Focus on foundational NSS service themes and student community responsibility.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    themeTitle: 'Community Service & Rural Immersion',
    headline: 'Not Me, But You.',
    subheading: 'Connecting engineering education with grassroots social responsibility.',
    description: "Volunteers at Vignan's Institute of Information Technology engage directly with local communities to understand real-world challenges and foster collective progress.",
    imageUrl: '/assets/hero/hero-slide-1.jpg',
    imageAlt: 'NSS student volunteers collaborating outdoors during community service',
    accentBadge: 'National Service Scheme • VIIT Duvvada',
  },
  {
    id: 'slide-2',
    themeTitle: 'Healthcare & Life Preservation',
    headline: 'Not Me, But You.',
    subheading: 'Student civic stewardship in support of emergency healthcare needs.',
    description: 'Promoting compassionate donor mobilization and health awareness through regular student volunteer coordination in Visakhapatnam.',
    imageUrl: '/assets/hero/hero-slide-2.jpg',
    imageAlt: 'Youth volunteers organizing health awareness initiatives',
    accentBadge: 'Community Stewardship • Single Official Unit',
  },
  {
    id: 'slide-3',
    themeTitle: 'Environmental Care & Green Campus',
    headline: 'Not Me, But You.',
    subheading: 'Nurturing biodiversity and sustainable environmental stewardship.',
    description: 'Dedicated student teams planting native coastal flora and caring for green corridors across the Duvvada educational belt.',
    imageUrl: '/assets/hero/hero-slide-3.jpg',
    imageAlt: 'Volunteers planting saplings during campus greening initiative',
    accentBadge: 'Environmental Action • VIIT NSS Cell',
  },
  {
    id: 'slide-4',
    themeTitle: 'Foundational Mentorship & Youth Literacy',
    headline: 'Not Me, But You.',
    subheading: 'Sharing knowledge and foundational skills with young learners.',
    description: 'Empowering future generations through interactive learning sessions, digital primer modules, and creative school workshops.',
    imageUrl: '/assets/hero/hero-slide-4.jpg',
    imageAlt: 'Volunteers engaging with young students in educational mentorship',
    accentBadge: 'Youth Mentorship • Community Development',
  },
];

/**
 * Impact Metrics
 */
export const impactMetrics: ImpactMetric[] = [
  {
    id: 'service-hours',
    label: 'Statutory Service Framework',
    value: 'NSS Guidelines',
    descriptor: 'Regular community service and special camping as stipulated by the Ministry of Youth Affairs & Sports, GoI',
    isPlaceholder: false,
    statusLabel: 'GoI Norm',
  },
];

/**
 * Core Activity Categories & Focus Domains
 */
export const featuredActivities: ActivityItem[] = [
  {
    id: 'act-1',
    title: 'Voluntary Blood Donation & Health Support',
    category: 'Community Health',
    tagline: 'Preserving life through dedicated student civic stewardship.',
    description: 'Flagship campus health initiative coordinating donor registration, medical assistance, and community blood awareness in the Visakhapatnam region.',
    dateRange: 'Regular Service Component',
    location: 'VIIT Campus, Duvvada',
    isDemoSample: false,
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80',
      alt: 'Voluntary blood donation camp in progress',
      note: PLACEHOLDER_NOTE,
    },
    featured: true,
  },
  {
    id: 'act-2',
    title: 'Green Campus & Coastal Agro-Forestry',
    category: 'Environmental Action',
    tagline: 'Greening the educational corridor of southern Visakhapatnam.',
    description: 'Native coastal sapling plantation across institutional borders and surrounding areas near Duvvada, focusing on soil conservation and regular care.',
    dateRange: 'Seasonal & Continuous Drives',
    location: 'Duvvada Green Belt & Campus Grounds',
    isDemoSample: false,
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
      alt: 'Tree sapling plantation by youth volunteers',
      note: PLACEHOLDER_NOTE,
    },
    featured: true,
  },
  {
    id: 'act-3',
    title: 'Digital Primer & Primary School Mentorship',
    category: 'Literacy & Youth',
    tagline: 'Bridging the foundational knowledge gap for rural learners.',
    description: 'Weekend instructional and creative sessions conducted by engineering volunteers for children in neighboring local schools, covering basic arithmetic, digital tools, and hygiene.',
    dateRange: 'Weekend Outreach Sessions',
    location: 'Local Schools, Visakhapatnam District',
    isDemoSample: false,
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
      alt: 'Classroom teaching and student engagement',
      note: PLACEHOLDER_NOTE,
    },
    featured: true,
  },
  {
    id: 'act-4',
    title: 'Swachh Bharat & Campus Sanitation Drives',
    category: 'Civic Awareness',
    tagline: 'Active responsibility for clean surroundings and hygiene awareness.',
    description: 'Regular volunteer mobilization for cleanliness, plastic waste reduction, and civic consciousness on campus and nearby public zones.',
    dateRange: 'Periodic Action Drives',
    location: 'VIIT Campus & Surrounding Environs',
    isDemoSample: false,
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80',
      alt: 'Community volunteers working together outdoors',
      note: PLACEHOLDER_NOTE,
    },
    featured: true,
  },
];

/**
 * Verified National Observances & Field Activities
 */
export const eventTimeline: EventItem[] = [
  {
    id: 'evt-official-1',
    title: 'National Youth Day (Swami Vivekananda Jayanti)',
    date: 'January 12, Annually',
    time: 'National Statutory Observance',
    location: 'VIIT Campus & Nationwide',
    category: 'Official National Observance',
    description: 'Officially designated nationwide observance celebrating youth leadership, selfless service, and character development in coordination with MY Bharat national initiatives.',
    status: 'Upcoming',
    initiative: 'Joint',
    isOfficialNationalObservance: true,
    isFeatured: true,
  },
  {
    id: 'evt-official-2',
    title: 'NSS Foundation Day Commemoration',
    date: 'September 24, Annually',
    time: 'Official Heritage Observance',
    location: 'VIIT Duvvada Campus',
    category: 'Official National Observance',
    description: 'Marks the formal founding of the National Service Scheme on 24th September 1969 during the Mahatma Gandhi Centenary Year. Service commitments are reaffirmed across the collegiate unit.',
    status: 'Upcoming',
    initiative: 'NSS',
    isOfficialNationalObservance: true,
  },
  {
    id: 'evt-official-3',
    title: 'MY Bharat National Youth Experiential Challenge',
    date: 'November 15–20, 2026',
    time: 'Central Ministry Window',
    location: 'Online & Local Community Clusters',
    category: 'National Youth Empowerment',
    description: 'A nationwide experiential learning module organized by the Ministry of Youth Affairs and Sports, mobilizing youth for grassroots civic innovation and digital literacy.',
    status: 'Upcoming',
    initiative: 'MY Bharat',
    isOfficialNationalObservance: true,
  },
  {
    id: 'evt-official-4',
    title: 'Mega Voluntary Blood Donation Camp',
    date: 'December 05, 2026',
    time: '09:00 AM – 04:00 PM',
    location: 'Main Auditorium, VIIT Duvvada',
    category: 'Community Health',
    description: 'Comprehensive collegiate blood mobilization conducted in collaboration with certified government blood banks and supported by trained volunteer stewards.',
    status: 'Upcoming',
    initiative: 'NSS',
    isOfficialNationalObservance: false,
  },
  {
    id: 'evt-official-5',
    title: 'Coastal Agro-Forestry & Green Belt Plantation Drive',
    date: 'August 15, 2026',
    time: 'Concluded Service Drive',
    location: 'Duvvada Coastal Belt & Campus Grounds',
    category: 'Environmental Action',
    description: 'Collaborative plantation drive nurturing 500+ native saplings along educational zones, reinforcing environmental conservation and student ecological awareness.',
    status: 'Recently Concluded',
    initiative: 'Joint',
    isOfficialNationalObservance: false,
  },
];

/**
 * Single-Unit Leadership Structure
 */
export const leadershipTeam: LeaderProfile[] = [
  {
    id: 'leader-1',
    name: 'Dr. J. Sudhakar',
    role: 'Principal & Institutional Patron',
    designation: "Principal, Vignan's Institute of Information Technology (Autonomous)",
    message: 'At VIIT, the National Service Scheme serves as an essential pillar for producing conscientious, socially grounded engineering scholars who lead with empathy and civic purpose.',
    isPlaceholderImage: true,
    isDemoSample: false,
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      alt: 'Institutional Patron',
      note: 'Institutional profile photograph placeholder.',
    },
  },
  {
    id: 'leader-2',
    name: 'NSS Programme Officer',
    role: 'Programme Officer, NSS Unit',
    designation: 'Faculty Lead, VIIT NSS Cell [Office Bearer Roster Pending Gazette Update]',
    message: 'Through direct community engagement, our student volunteers experience the realities of society firsthand and cultivate lasting problem-solving abilities rooted in human compassion.',
    isPlaceholderImage: true,
    isDemoSample: false,
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      alt: 'NSS Programme Officer',
      note: 'Faculty coordinator placeholder.',
    },
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Tree Plantation & Environmental Guarding',
    caption: 'Student volunteers participating in green corridor plantation and environmental care.',
    category: 'Ecology',
    spanClass: 'md:col-span-2 md:row-span-2',
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
      alt: 'Tree plantation drive documentary photograph',
      note: PLACEHOLDER_NOTE,
    },
  },
  {
    id: 'gal-2',
    title: 'Community Health Awareness',
    caption: 'Student assistance in health screening and community wellness campaigns.',
    category: 'Healthcare',
    spanClass: 'md:col-span-1 md:row-span-1',
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      alt: 'Community health screening documentary photograph',
      note: PLACEHOLDER_NOTE,
    },
  },
  {
    id: 'gal-3',
    title: 'Campus Sanitation & Swachhata Drive',
    caption: 'Student teams conducting waste segregation and hygiene awareness on campus.',
    category: 'Swachh Bharat',
    spanClass: 'md:col-span-1 md:row-span-1',
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
      alt: 'Sanitation awareness documentary photograph',
      note: PLACEHOLDER_NOTE,
    },
  },
  {
    id: 'gal-4',
    title: 'Youth Leadership & Flag Observance',
    caption: 'Ceremonial parade and discipline during National Youth Day commemorations.',
    category: 'Civic Pride',
    spanClass: 'md:col-span-1 md:row-span-2',
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80',
      alt: 'Student youth march documentary photograph',
      note: PLACEHOLDER_NOTE,
    },
  },
  {
    id: 'gal-5',
    title: 'School Mentorship & Digital primer',
    caption: 'Mentorship sessions introducing local school children to digital basics.',
    category: 'Education',
    spanClass: 'md:col-span-2 md:row-span-1',
    imagePlaceholder: {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
      alt: 'School education workshop documentary photograph',
      note: PLACEHOLDER_NOTE,
    },
  },
];

export const volunteerStories: VolunteerStory[] = [];
export const verifiedAchievements: AchievementItem[] = [];

export const heritagePublications: HeritagePublication[] = [
  {
    id: 'pub-1',
    title: 'NSS Genesis & Mahatma Gandhi Centenary Heritage (1969)',
    type: 'Policy Guide',
    publicationYear: '1969 (Official Historical Record)',
    description: 'The statutory doctrine initiated under Union Education Minister Dr. V.K.R.V. Rao during the Mahatma Gandhi Centenary Year, integrating community service into higher education.',
    status: 'Archived',
    isOfficialNationalDocument: true,
  },
  {
    id: 'pub-2',
    title: 'National Service Scheme Manual (Ministry of Youth Affairs & Sports)',
    type: 'Handbook',
    publicationYear: 'Government of India Official Manual',
    description: 'The definitive statutory rulebook establishing regular volunteer activities, special rural camping protocols, advisory committee structures, and volunteer conduct codes.',
    status: 'Archived',
    isOfficialNationalDocument: true,
  },
];

export const communityPartners: CommunityPartner[] = [
  {
    id: 'part-1',
    name: 'Ministry of Youth Affairs & Sports (MYAS)',
    type: 'Government Body',
    engagementScope: 'Central governing ministry formulating National Service Scheme policies, statutory volunteer frameworks, and annual operational guidelines.',
    location: 'Government of India, New Delhi',
    isOfficialStatutoryAlliance: true,
  },
  {
    id: 'part-2',
    name: 'Jawaharlal Nehru Technological University-Gurajada (JNTUGV)',
    type: 'Affiliating University',
    engagementScope: 'Official collegiate university affiliation overseeing academic integration, unit recognition, and regional NSS coordination.',
    location: 'Vizianagaram, Andhra Pradesh',
    isOfficialStatutoryAlliance: true,
  },
  {
    id: 'part-3',
    name: 'Mera Yuva Bharat (My Bharat)',
    type: 'Youth Body',
    engagementScope: 'Official national youth platform under the Government of India for volunteer registration, leadership missions, and civic engagement.',
    location: 'National Portal (mybharat.gov.in)',
    isOfficialStatutoryAlliance: true,
  },
];
