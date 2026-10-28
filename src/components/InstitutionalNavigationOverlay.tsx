import { useState, useEffect, useRef, type ReactElement, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'

export interface SubmenuLink {
  title: string
  to: string
  description: string
  badge?: string
}

export interface NavigationCategory {
  id: string
  title: string
  to: string
  tagline: string
  description: string
  icon: (className?: string) => ReactElement
  submenus: SubmenuLink[]
}

const NAVIGATION_CATEGORIES: NavigationCategory[] = [
  {
    id: 'home',
    title: 'Home',
    to: '/',
    tagline: 'Central Unit Portal & Ideology',
    description: 'The primary digital gateway of the NSS Unit and integrated MY Bharat Youth Cell at Vignan\'s Institute of Information Technology (Autonomous), Visakhapatnam.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75M4.5 10.5V20.25A1.5 1.5 0 006 21.75h3.75V15h4.5v6.75H18a1.5 1.5 0 001.5-1.5V10.5" />
      </svg>
    ),
    submenus: [
      {
        title: 'Central Portal Overview',
        to: '/',
        description: 'The official institutional homepage, motto, and leadership framework.',
      },
      {
        title: 'Proposed Operational Wings',
        to: '/#wings',
        description: 'Health, Sustainability, Cyber Literacy, and Rural Literacy frameworks.',
      },
      {
        title: 'Mera Yuva Bharat Youth Cell',
        to: '/my-bharat',
        description: 'Dedicated youth initiative spotlight embedded natively in the platform.',
      },
      {
        title: 'Recent Activity Timeline',
        to: '/events',
        description: 'Chronological activity stream of community drives and camps.',
      },
    ],
  },
  {
    id: 'about',
    title: 'About NSS',
    to: '/about',
    tagline: 'Unit History, Mandate & Governance',
    description: 'Learn about the National Service Scheme Unit at VIIT (Autonomous), its founding philosophy, Konark wheel symbolism, and strict autonomous unit boundaries.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
    submenus: [
      {
        title: 'Unit Overview & Governance',
        to: '/about',
        description: 'Autonomous unit history, objectives, and institutional leadership.',
      },
      {
        title: 'Motto: "Not Me, But You"',
        to: '/about',
        description: 'Democratic spirit and selfless community upliftment philosophy.',
      },
      {
        title: 'Konark Sun Wheel Emblem',
        to: '/about',
        description: 'Symbolism of the 8-spoke chariot wheel representing perpetual service.',
      },
      {
        title: '28-Member Core Team Structure',
        to: '/team',
        description: '24 NSS Wing members and 4 MY Bharat Cell coordinators.',
      },
      {
        title: 'SAC Exclusion & Safeguards',
        to: '/about',
        description: 'Strict separation from Student Activity Council governance.',
      },
    ],
  },
  {
    id: 'my-bharat',
    title: 'MY Bharat',
    to: '/my-bharat',
    tagline: 'Dedicated Campus Youth Initiative',
    description: 'Empowering collegiate youth through national mission alignments, digital skill-building clinics, cyber safety, and grassroots civic engagement.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    submenus: [
      {
        title: 'Youth Cell Overview & Mandate',
        to: '/my-bharat',
        description: 'Autonomous youth cell embedded natively in the NSS VIIT (A) portal.',
      },
      {
        title: 'Cyber Hygiene & Tech Skills',
        to: '/events?initiative=my_bharat',
        description: 'Workshops on citizen portals, online security, and practical skills.',
      },
      {
        title: '4 Dedicated Cell Coordinators',
        to: '/team?filter=my_bharat_cell',
        description: 'Dedicated student coordinators leading central youth initiatives.',
      },
      {
        title: 'Independent Service Hours',
        to: '/my-bharat',
        description: 'Dedicated MY Bharat service ledger with zero double-counting on joint events.',
      },
    ],
  },
  {
    id: 'events',
    title: 'Events & Activities',
    to: '/events',
    tagline: 'Activity Archive & Schedule',
    description: 'Chronological documentation of community drives, environmental camps, health missions, and youth skill workshops across all tracks.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    submenus: [
      {
        title: 'All Activities',
        to: '/events',
        description: 'Complete chronological archive of all unit drives and activity records.',
      },
      {
        title: 'Upcoming Events',
        to: '/events?status=upcoming',
        description: 'Scheduled medical drives, training camps, and future deployments.',
        badge: 'Upcoming',
      },
      {
        title: 'Past Activities',
        to: '/events?status=completed',
        description: 'Archived records with field logistics and impact outlines.',
      },
      {
        title: 'NSS Initiatives',
        to: '/events?initiative=nss',
        description: 'Village immersion, Haritha Vanam plantations, and rural education.',
      },
      {
        title: 'MY Bharat Initiatives',
        to: '/events?initiative=my_bharat',
        description: 'National youth missions, digital literacy clinics, and cyber workshops.',
      },
      {
        title: 'Joint Drives',
        to: '/events?initiative=joint',
        description: 'Collaborative mega drives like institutional blood donation camps.',
      },
    ],
  },
  {
    id: 'team',
    title: 'Our Team',
    to: '/team',
    tagline: '28-Member Executive Council',
    description: 'The complete student coordination body. All 28 members are collectively designated as the NSS Core Team, partitioned into NSS and MY Bharat roles.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    submenus: [
      {
        title: 'Complete 28-Member Directory',
        to: '/team',
        description: 'Complete roster across all executive student leadership positions.',
      },
      {
        title: '24 NSS Wing Coordinators',
        to: '/team?filter=nss_wing',
        description: 'Operations, village outreach, health, logistics, and field leads.',
      },
      {
        title: '4 MY Bharat Coordinators',
        to: '/team?filter=my_bharat_cell',
        description: 'Dedicated coordinators for national missions and digital skills.',
      },
      {
        title: 'Appointment Verification Notice',
        to: '/team',
        description: 'Official designation structure for academic year 2025–26.',
      },
    ],
  },
  {
    id: 'gallery',
    title: 'Gallery',
    to: '/gallery',
    tagline: 'Photo Documentation & Media',
    description: 'High-resolution curated photo documentation of rural immersion, blood donation camps, environmental drives, and youth workshops.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    submenus: [
      {
        title: 'Photo Documentation Archive',
        to: '/gallery',
        description: 'Curated photo albums with category and year filters.',
      },
      {
        title: 'Annual Blood Donation Camp',
        to: '/gallery',
        description: 'Auditorium medical operations and donor care photo records.',
      },
      {
        title: 'Clean & Green Haritha Vanam',
        to: '/gallery',
        description: 'Perimeter tree plantations and village awareness photos.',
      },
      {
        title: 'MY Bharat Cyber Workshop',
        to: '/gallery',
        description: 'Interactive computing lab sessions and peer mentoring photos.',
      },
    ],
  },
  {
    id: 'resources',
    title: 'NSS Heritage & Resources',
    to: '/resources',
    tagline: 'Official Manuals & Circulars',
    description: 'Official Ministry manuals, guidelines, emblem symbolism, circulars, and annual service summary records.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    submenus: [
      {
        title: 'Resource Center Directory',
        to: '/resources',
        description: 'Central repository of official publications and documents.',
      },
      {
        title: 'NSS Manual & Guidelines',
        to: '/resources',
        description: 'Central Ministry guidelines, volunteer obligations, and code of conduct.',
      },
      {
        title: 'Motto, Emblem & Song',
        to: '/resources',
        description: 'Symbolism of the Konark wheel and official pledge transcripts.',
      },
      {
        title: 'MY Bharat Cell Guidelines',
        to: '/resources',
        description: 'Central circulars governing collegiate youth cell alignment.',
      },
      {
        title: 'Annual Activity Summaries',
        to: '/resources',
        description: 'College-approved aggregate reports and service records.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    to: '/contact',
    tagline: 'Campus Coordinates & Inquiries',
    description: 'Get in touch with the NSS VIIT (A) Programme Officer, student coordinators, or submit community service inquiries.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    submenus: [
      {
        title: 'Campus Location & Address',
        to: '/contact',
        description: 'Beside VSEZ, Vadlapudi Post, Duvvada, Visakhapatnam — 530049.',
      },
      {
        title: 'Programme Officer Desk',
        to: '/contact',
        description: 'Official faculty leadership desk for academic and administrative inquiries.',
      },
      {
        title: 'Unit Official Email',
        to: '/contact',
        description: 'Direct official inquiries via nss@vignaniit.edu.in.',
      },
      {
        title: 'Inquiry & Feedback Desk',
        to: '/contact',
        description: 'Submit community service inquiries and collaboration requests.',
      },
    ],
  },
  {
    id: 'volunteer',
    title: 'Volunteer Information',
    to: '/volunteer',
    tagline: 'Induction Pathways & Guidelines',
    description: 'Learn about the three volunteer induction pathways, tenure expectations, and the required closed intake status.',
    icon: (cls = 'w-5 h-5') => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.765z" />
      </svg>
    ),
    submenus: [
      {
        title: 'Volunteer Induction Overview',
        to: '/volunteer',
        description: 'Guide to joining NSS VIIT (A) and the campus MY Bharat Youth Cell.',
      },
      {
        title: 'Track 01: NSS Only',
        to: '/volunteer',
        description: 'Rural village immersion, literacy drives, and community health.',
      },
      {
        title: 'Track 02: MY Bharat Only',
        to: '/volunteer',
        description: 'Civic tech, cyber hygiene, and central youth mission leadership.',
      },
      {
        title: 'Track 03: Joint Track',
        to: '/volunteer',
        description: 'Dual service pathway with independent service-hour accounting.',
      },
      {
        title: 'Closed Intake Notice',
        to: '/volunteer',
        description: 'Mandatory development status: registration remains strictly closed.',
        badge: 'Status',
      },
    ],
  },
]

interface InstitutionalNavigationOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const getCategoryIdFromPath = (pathname: string): string => {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/about')) return 'about'
  if (pathname.startsWith('/my-bharat')) return 'my-bharat'
  if (pathname.startsWith('/events')) return 'events'
  if (pathname.startsWith('/team')) return 'team'
  if (pathname.startsWith('/gallery')) return 'gallery'
  if (pathname.startsWith('/resources')) return 'resources'
  if (pathname.startsWith('/contact')) return 'contact'
  if (pathname.startsWith('/volunteer')) return 'volunteer'
  return 'events'
}

export function InstitutionalNavigationOverlay({ isOpen, onClose }: InstitutionalNavigationOverlayProps): ReactElement | null {
  const location = useLocation()
  const activeRouteCategory = getCategoryIdFromPath(location.pathname)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(activeRouteCategory)
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(activeRouteCategory)
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Sync category with current route whenever overlay is opened
  useEffect(() => {
    if (isOpen) {
      const cat = getCategoryIdFromPath(location.pathname)
      setSelectedCategoryId(cat)
      setMobileExpandedId(cat)
    }
  }, [isOpen, location.pathname])

  const prevPathRef = useRef(location.pathname + location.search)

  // Close overlay only when route path actually changes
  useEffect(() => {
    const current = location.pathname + location.search
    if (prevPathRef.current !== current) {
      prevPathRef.current = current
      onClose()
    }
  }, [location.pathname, location.search, onClose])

  // Prevent background scroll when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus the close button when opened
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 50)
      return () => {
        clearTimeout(timer)
        document.body.style.overflow = 'auto'
      }
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Handle ESC key to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => { window.removeEventListener('keydown', handleKeyDown); }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const selectedCategory = NAVIGATION_CATEGORIES.find((c) => c.id === selectedCategoryId) || NAVIGATION_CATEGORIES[0]

  const handleCategoryKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIndex = (index + 1) % NAVIGATION_CATEGORIES.length
      setSelectedCategoryId(NAVIGATION_CATEGORIES[nextIndex].id)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prevIndex = (index - 1 + NAVIGATION_CATEGORIES.length) % NAVIGATION_CATEGORIES.length
      setSelectedCategoryId(NAVIGATION_CATEGORIES[prevIndex].id)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Institutional Navigation Menu"
      ref={overlayRef}
    >
      {/* Dimmed backdrop with soft blur */}
      <div
        className="fixed inset-0 bg-[#292D2A]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Two-Panel Modal Container */}
      <div className="relative w-full max-w-6xl h-full max-h-[92vh] bg-[#F5F1E8] rounded-3xl border-2 border-[#C3A66B] shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Modal Top Bar */}
        <div className="h-16 px-5 sm:px-8 border-b border-[#292D2A]/10 bg-[#F5F1E8] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1A3C29] border border-[#C3A66B] flex items-center justify-center text-[#F5F1E8] font-bold text-xs" aria-hidden="true">
              NSS
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold text-[#1A3C29] tracking-tight block font-serif">
                Institutional Directory &bull; NSS VIIT (A)
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C3A66B] block">
                Select a section to explore destinations
              </span>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#292D2A]/15 text-[#1A3C29] hover:bg-[#1A3C29] hover:text-[#F5F1E8] hover:border-[#1A3C29] transition-colors text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#1A3C29] shadow-sm cursor-pointer"
            aria-label="Close navigation menu"
          >
            <span>Close</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Desktop & Tablet: Large Two-Panel Overlay (hidden on small mobile) */}
        <div className="hidden md:grid md:grid-cols-12 flex-1 overflow-hidden">
          {/* Left Panel: 9 Navigation Categories */}
          <div className="md:col-span-5 lg:col-span-4 bg-[#EFE8DA]/50 border-r border-[#292D2A]/10 p-4 lg:p-6 overflow-y-auto space-y-1.5">
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-[#C3A66B]">
              Navigation Categories
            </div>

            <div className="space-y-1" role="tablist" aria-orientation="vertical">
              {NAVIGATION_CATEGORIES.map((cat, idx) => {
                const isSelected = cat.id === selectedCategoryId
                const isCurrentRoute = cat.id === activeRouteCategory
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    id={`tab-${cat.id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${cat.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    onMouseEnter={() => { setSelectedCategoryId(cat.id); }}
                    onClick={() => { setSelectedCategoryId(cat.id); }}
                    onKeyDown={(e) => { handleCategoryKeyDown(e, idx); }}
                    className={`w-full text-left px-3.5 py-3 rounded-2xl flex items-center justify-between transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1A3C29] text-[#F5F1E8] shadow-md ring-1 ring-[#C3A66B]/50'
                        : isCurrentRoute
                        ? 'bg-[#1A3C29]/15 text-[#1A3C29] font-bold border-l-4 border-[#C3A66B]'
                        : 'text-[#292D2A] hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`shrink-0 ${isSelected ? 'text-[#C3A66B]' : isCurrentRoute ? 'text-[#1A3C29]' : 'text-[#1A3C29]/70'}`}>
                        {cat.icon('w-5 h-5')}
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className="block text-sm font-bold truncate">
                            {cat.title}
                          </span>
                          {isCurrentRoute && (
                            <span className={`text-[9px] font-extrabold uppercase tracking-widest px-1.5 py-0.2 rounded ${
                              isSelected ? 'bg-[#C3A66B] text-[#1A3C29]' : 'bg-[#1A3C29] text-[#F5F1E8]'
                            }`}>
                              Active
                            </span>
                          )}
                        </div>
                        <span className={`block text-[10px] truncate ${isSelected ? 'text-[#F5F1E8]/75' : 'text-[#292D2A]/60'}`}>
                          {cat.tagline}
                        </span>
                      </div>
                    </div>

                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#C3A66B] translate-x-0.5' : 'text-[#292D2A]/40'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Panel: Selected Category's Submenu & Useful Destinations */}
          <div
            className="md:col-span-7 lg:col-span-8 bg-white p-6 lg:p-8 overflow-y-auto flex flex-col justify-between"
            role="tabpanel"
            id={`panel-${selectedCategory.id}`}
            aria-labelledby={`tab-${selectedCategory.id}`}
          >
            <div className="space-y-6">
              {/* Category Header & Direct Page Link */}
              <div className="border-b border-[#292D2A]/10 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C3A66B]">
                    <span>Category Directory</span>
                    <span>&bull;</span>
                    <span>NSS VIIT (A)</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1A3C29] font-serif">
                    {selectedCategory.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#292D2A]/75 max-w-xl">
                    {selectedCategory.description}
                  </p>
                </div>

                <Link
                  to={selectedCategory.to}
                  onClick={onClose}
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-[#1A3C29] !text-[#F5F1E8] hover:bg-[#C3A66B] hover:!text-[#1A3C29] border border-[#C3A66B] text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5"
                  style={{ color: '#F5F1E8' }}
                >
                  <span>Visit Section</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Submenu Destinations Grid */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A3C29] block">
                  Available Destinations &amp; Filters ({selectedCategory.submenus.length})
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {selectedCategory.submenus.map((sub) => (
                    <Link
                      key={sub.to + sub.title}
                      to={sub.to}
                      onClick={onClose}
                      className="p-4 rounded-2xl border border-[#292D2A]/10 bg-[#F5F1E8]/40 hover:bg-[#F5F1E8] hover:border-[#C3A66B] hover:shadow-md transition-all group flex flex-col justify-between space-y-2 text-left"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold text-[#1A3C29] group-hover:text-[#C3A66B] transition-colors leading-snug">
                            {sub.title}
                          </span>
                          {sub.badge && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C3A66B]/20 text-[#C3A66B] border border-[#C3A66B]/40 shrink-0">
                              {sub.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#292D2A]/70 line-clamp-2 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center text-[11px] font-bold text-[#1A3C29] group-hover:text-[#C3A66B] transition-colors">
                        <span>Open destination</span>
                        <span className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Institutional Disclaimer */}
            <div className="pt-6 mt-6 border-t border-[#292D2A]/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#292D2A]/60">
              <span>National Service Scheme &bull; Vignan VIIT (A) Autonomous Unit</span>
              <Link
                to="/volunteer"
                onClick={onClose}
                className="font-bold text-[#1A3C29] hover:text-[#C3A66B] underline underline-offset-2"
              >
                Volunteer Intake Guidelines &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile View: Clean Stacked Accordion (no horizontal overflow) */}
        <div className="md:hidden flex-1 overflow-y-auto p-4 space-y-3 bg-[#F5F1E8]">
          <p className="text-xs text-[#292D2A]/70 px-1">
            Tap any section below to reveal its destinations and deep links:
          </p>

          <div className="space-y-2">
            {NAVIGATION_CATEGORIES.map((cat) => {
              const isExpanded = mobileExpandedId === cat.id
              const isCurrentRoute = cat.id === activeRouteCategory
              return (
                <div
                  key={cat.id}
                  className={`rounded-2xl border bg-white overflow-hidden shadow-sm ${
                    isCurrentRoute ? 'border-[#C3A66B] ring-1 ring-[#C3A66B]/50' : 'border-[#292D2A]/10'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => { setMobileExpandedId(isExpanded ? null : cat.id); }}
                    className={`w-full px-4 py-3.5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                      isExpanded ? 'bg-[#1A3C29] text-[#F5F1E8]' : 'text-[#292D2A] hover:bg-[#1A3C29]/5'
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3">
                      <div className={isExpanded ? 'text-[#C3A66B]' : isCurrentRoute ? 'text-[#1A3C29]' : 'text-[#1A3C29]'}>
                        {cat.icon('w-5 h-5')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold block">{cat.title}</span>
                          {isCurrentRoute && (
                            <span className={`text-[9px] font-extrabold uppercase tracking-widest px-1.5 py-0.2 rounded ${
                              isExpanded ? 'bg-[#C3A66B] text-[#1A3C29]' : 'bg-[#1A3C29] text-[#F5F1E8]'
                            }`}>
                              Active
                            </span>
                          )}
                        </div>
                        <span className={`text-[10px] block ${isExpanded ? 'text-[#F5F1E8]/75' : 'text-[#292D2A]/60'}`}>
                          {cat.tagline}
                        </span>
                      </div>
                    </div>

                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#C3A66B]' : 'text-[#292D2A]/50'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="p-4 space-y-3 bg-[#F5F1E8]/30 border-t border-[#292D2A]/10">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#1A3C29] uppercase tracking-wider">
                          Destinations ({cat.submenus.length})
                        </span>
                        <Link
                          to={cat.to}
                          onClick={onClose}
                          className="text-xs font-bold text-[#1A3C29] underline hover:text-[#C3A66B]"
                        >
                          Visit Page &rarr;
                        </Link>
                      </div>

                      <div className="space-y-2">
                        {cat.submenus.map((sub) => (
                          <Link
                            key={sub.to + sub.title}
                            to={sub.to}
                            onClick={onClose}
                            className="block p-3 rounded-xl bg-white border border-[#292D2A]/10 hover:border-[#C3A66B] text-left transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#1A3C29]">{sub.title}</span>
                              {sub.badge && (
                                <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#C3A66B]/20 text-[#C3A66B]">
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#292D2A]/70 mt-0.5 line-clamp-1">{sub.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
