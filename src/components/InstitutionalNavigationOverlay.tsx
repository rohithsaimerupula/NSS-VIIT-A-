import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  X,
  Compass,
  BookOpen,
  MapPin,
  ChevronRight,
  ExternalLink,
  Info,
  Users,
  Sparkles,
  Home,
  Calendar,
  Image,
  UserCheck,
} from 'lucide-react'

export interface NavigationSublink {
  label: string
  description: string
  to: string
  isExternal?: boolean
  externalUrl?: string
}

export interface NavigationCategory {
  id: string
  label: string
  icon: React.ElementType
  tagline: string
  to: string
  sublinks: NavigationSublink[]
}

const NAVIGATION_CATEGORIES: NavigationCategory[] = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    tagline: 'Collegiate service portal and overview of NSS VIIT (A).',
    to: '/',
    sublinks: [
      {
        label: 'Central Portal Overview',
        description: 'The official institutional homepage, motto, and leadership framework.',
        to: '/',
      },
      {
        label: 'Hero & Mission Motto',
        description: 'Explore the founding doctrine "Not Me, But You."',
        to: '/#hero',
      },
      {
        label: 'Proposed Operational Wings',
        description: 'Health, Sustainability, Cyber Literacy, and Rural Literacy frameworks.',
        to: '/#wings',
      },
      {
        label: 'What We Do',
        description: 'Summary of ongoing collegiate outreach and volunteer action.',
        to: '/#activities',
      },
    ],
  },
  {
    id: 'about',
    label: 'About NSS',
    icon: Compass,
    tagline: 'Foundations, democratic ethos, and institutional heritage.',
    to: '/about',
    sublinks: [
      {
        label: 'Our Mission & Motto',
        description: 'Explore the founding doctrine "Not Me, But You."',
        to: '/about',
      },
      {
        label: 'Autonomous Governance',
        description: 'Single official NSS unit under JNTU-Gurajada.',
        to: '/about',
      },
      {
        label: 'The Konark Wheel Heritage',
        description: 'Symbol of perpetual motion, youth energy, and national service.',
        to: '/about',
      },
      {
        label: '28-Member Core Team Structure',
        description: '24 NSS Wing members and 4 MY Bharat Cell coordinators.',
        to: '/team',
      },
    ],
  },
  {
    id: 'mybharat',
    label: 'MY Bharat',
    icon: Sparkles,
    tagline: 'Mera Yuva Bharat nation-building platform & dual enrollment.',
    to: '/my-bharat',
    sublinks: [
      {
        label: 'National Youth Initiative',
        description: 'Connecting youth with experiential learning and community volunteering.',
        to: '/my-bharat',
      },
      {
        label: 'Dual Volunteer Pathways',
        description: 'Understanding the synergy between collegiate NSS and MY Bharat.',
        to: '/my-bharat',
      },
      {
        label: 'Cyber Hygiene & Tech Skills',
        description: 'Workshops on citizen portals, online security, and practical skills.',
        to: '/events?initiative=my_bharat',
      },
      {
        label: 'Official MY Bharat Portal',
        description: 'Visit the Government of India youth portal.',
        to: '/my-bharat',
        isExternal: true,
        externalUrl: 'https://mybharat.gov.in/',
      },
    ],
  },
  {
    id: 'activities',
    label: 'Events & Activities',
    icon: Calendar,
    tagline: 'Field events, service timeline, and community drives.',
    to: '/events',
    sublinks: [
      {
        label: 'All Activities',
        description: 'Complete chronological archive of all unit drives and activity records.',
        to: '/events',
      },
      {
        label: 'Upcoming Events',
        description: 'Scheduled medical drives, training camps, and future deployments.',
        to: '/events?status=upcoming',
      },
      {
        label: 'Past Activities',
        description: 'Archived records with field logistics and impact outlines.',
        to: '/events?status=completed',
      },
      {
        label: 'NSS Initiatives',
        description: 'Village immersion, Haritha Vanam plantations, and rural education.',
        to: '/events?initiative=nss',
      },
      {
        label: 'MY Bharat Initiatives',
        description: 'National youth missions, digital literacy clinics, and cyber workshops.',
        to: '/events?initiative=my_bharat',
      },
      {
        label: 'Joint Drives',
        description: 'Collaborative mega drives like institutional blood donation camps.',
        to: '/events?initiative=joint',
      },
    ],
  },
  {
    id: 'team',
    label: 'Our Team',
    icon: Users,
    tagline: 'Leadership, Programme Officer advisory, and 28-seat directory.',
    to: '/team',
    sublinks: [
      {
        label: '28-Position Team Directory',
        description: 'Designation structure (24 NSS + 4 MY Bharat leads).',
        to: '/team',
      },
      {
        label: '24 NSS Wing Coordinators',
        description: 'Operations, village outreach, health, logistics, and field leads.',
        to: '/team?filter=nss_wing',
      },
      {
        label: '4 MY Bharat Coordinators',
        description: 'Dedicated coordinators for national missions and digital skills.',
        to: '/team?filter=my_bharat_cell',
      },
      {
        label: 'Programme Advisory & Officer',
        description: 'Governing faculty coordination guiding the collegiate unit.',
        to: '/team',
      },
    ],
  },
  {
    id: 'gallery',
    label: 'Gallery',
    icon: Image,
    tagline: 'Documentary photo archives from camps and campus activities.',
    to: '/gallery',
    sublinks: [
      {
        label: 'Community Service Mosaic',
        description: 'Field photography from student community immersion.',
        to: '/gallery',
      },
      {
        label: 'Healthcare & Donation Camps',
        description: 'Documented voluntary blood donation drives.',
        to: '/gallery',
      },
      {
        label: 'Campus Greening Initiatives',
        description: 'Plantation drives and environmental stewardship.',
        to: '/gallery',
      },
      {
        label: 'Annual Blood Donation Camp',
        description: 'Auditorium medical operations and donor care photo records.',
        to: '/gallery',
      },
    ],
  },
  {
    id: 'resources',
    label: 'NSS Heritage & Resources',
    icon: BookOpen,
    tagline: 'Statutory guidelines, national song, pledge, and archives.',
    to: '/resources',
    sublinks: [
      {
        label: 'NSS Anthem & National Pledge',
        description: 'Foundational service lyrics and democratic commitments.',
        to: '/resources',
      },
      {
        label: 'Publications & Handbooks',
        description: 'Collegiate annual documentation and guidance material.',
        to: '/resources',
      },
      {
        label: 'Official Manuals & Circulars',
        description: 'Official Ministry manuals, guidelines, and circular records.',
        to: '/resources',
      },
      {
        label: 'National NSS Portal (GoI)',
        description: 'Statutory guidelines and central scheme documentation.',
        to: '/resources',
        isExternal: true,
        externalUrl: 'https://nss.gov.in/',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: MapPin,
    tagline: 'Campus office location and institutional communication channels.',
    to: '/contact',
    sublinks: [
      {
        label: 'Campus NSS Cell Office',
        description: 'Physical campus location at Duvvada, Visakhapatnam.',
        to: '/contact',
      },
      {
        label: 'Institutional Portal',
        description: 'Official VIIT website and academic notices.',
        to: '/contact',
        isExternal: true,
        externalUrl: 'https://vignaniit.edu.in',
      },
      {
        label: 'Inquiry Desk',
        description: 'Submit an inquiry or community collaboration request.',
        to: '/contact',
      },
    ],
  },
  {
    id: 'volunteer',
    label: 'Volunteer Information',
    icon: UserCheck,
    tagline: 'Service pathways, orientation guidance, and induction criteria.',
    to: '/volunteer',
    sublinks: [
      {
        label: 'Service Pathways (NSS / MY Bharat)',
        description: 'Compare campus unit and national digital registration pathways.',
        to: '/volunteer',
      },
      {
        label: 'Eligibility & Requirements',
        description: 'Undergraduate student qualifications and tenure commitment.',
        to: '/volunteer',
      },
      {
        label: 'Registration Status',
        description: 'Current academic cycle status and in-person desk guidance.',
        to: '/volunteer',
      },
    ],
  },
]

export interface InstitutionalNavigationOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function InstitutionalNavigationOverlay({
  isOpen,
  onClose,
}: InstitutionalNavigationOverlayProps): React.ReactElement | null {
  const navigate = useNavigate()
  const [activeCategoryId, setActiveCategoryId] = useState<string>('about')
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>('about')
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus close button on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 50)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const activeCategory =
    NAVIGATION_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    NAVIGATION_CATEGORIES[0]

  const handleLinkClick = (to: string, isExternal?: boolean, externalUrl?: string) => {
    if (isExternal && externalUrl) {
      window.open(externalUrl, '_blank', 'noopener,noreferrer')
      onClose()
      return
    }

    if (to.includes('#')) {
      const [path, hash] = to.split('#')
      if (path && window.location.pathname !== path) {
        void navigate(to)
      } else {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      void navigate(to)
    }
    onClose()
  }

  const handleCategoryKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIndex = (index + 1) % NAVIGATION_CATEGORIES.length
      setActiveCategoryId(NAVIGATION_CATEGORIES[nextIndex].id)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prevIndex =
        (index - 1 + NAVIGATION_CATEGORIES.length) % NAVIGATION_CATEGORIES.length
      setActiveCategoryId(NAVIGATION_CATEGORIES[prevIndex].id)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Institutional Navigation Menu"
    >
      {/* Subtle backdrop dim and blur */}
      <div
        className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Drawer Container */}
      <div
        ref={drawerRef}
        className="relative z-10 w-full max-w-2xl bg-white shadow-2xl flex flex-col h-full border-l border-ivory-300 transform transition-transform duration-300 ease-out animate-slide-in-right"
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-ivory-300 bg-ivory-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logos/nss-logo.webp"
              alt="National Service Scheme Seal"
              className="w-8 h-8 object-contain"
              width="32"
              height="32"
            />
            <div>
              <p className="text-xs font-serif font-bold text-forest-950 uppercase tracking-wider">
                NSS VIIT (A) Navigation
              </p>
              <p className="text-[11px] text-charcoal-600">
                Single Official Unit &bull; JNTUGV Affiliated
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-md text-charcoal-600 hover:text-forest-900 hover:bg-ivory-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Two-Panel Layout (hidden on mobile, visible on md/lg) */}
        <div className="hidden md:flex flex-1 overflow-hidden">
          {/* Left Category Sidebar (40% width) */}
          <div
            className="w-2/5 bg-ivory-50/70 border-r border-ivory-200 p-4 space-y-1.5 overflow-y-auto"
            role="tablist"
            aria-orientation="vertical"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal-500 px-3 block mb-2">
              Browse Sections
            </span>
            {NAVIGATION_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon
              const isActive = cat.id === activeCategoryId
              return (
                <button
                  key={cat.id}
                  role="tab"
                  id={`tab-${cat.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => {
                    setActiveCategoryId(cat.id)
                  }}
                  onMouseEnter={() => {
                    setActiveCategoryId(cat.id)
                  }}
                  onKeyDown={(e) => {
                    handleCategoryKeyDown(e, idx)
                  }}
                  className={`w-full text-left px-3.5 py-3 rounded-md transition-all flex items-center justify-between text-xs group cursor-pointer ${
                    isActive
                      ? 'bg-white text-forest-950 font-semibold shadow-xs border-l-4 border-gold-600'
                      : 'text-charcoal-700 hover:bg-white/80 hover:text-forest-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-forest-800' : 'text-charcoal-500'
                      }`}
                    />
                    <span className="truncate">{cat.label}</span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      isActive
                        ? 'text-gold-700 translate-x-0.5'
                        : 'text-charcoal-400 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              )
            })}

            {/* Quick Campus Note */}
            <div className="mt-8 p-3 rounded bg-ivory-200/80 border border-ivory-300 text-[11px] text-charcoal-600 space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-forest-900">
                <Info className="w-3.5 h-3.5 text-forest-800 shrink-0" />
                <span>Single Official Unit</span>
              </div>
              <p className="text-[10px] leading-relaxed">
                VIIT operates one unified collegiate NSS unit dedicated to rural and community stewardship.
              </p>
            </div>
          </div>

          {/* Right Sublinks & Context Panel (60% width) */}
          <div
            className="w-3/5 p-6 bg-white overflow-y-auto flex flex-col justify-between"
            role="tabpanel"
            id={`panel-${activeCategory.id}`}
            aria-labelledby={`tab-${activeCategory.id}`}
          >
            <div>
              <div className="mb-6 pb-4 border-b border-ivory-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-gold-700 uppercase tracking-wider mb-1">
                  <span>{activeCategory.label}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-forest-950">
                  {activeCategory.tagline}
                </h3>
              </div>

              <div className="space-y-3">
                {activeCategory.sublinks.map((link, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      handleLinkClick(link.to, link.isExternal, link.externalUrl)
                    }}
                    className="w-full text-left p-3 rounded-lg border border-ivory-200 hover:border-forest-700/40 hover:bg-ivory-50/70 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-forest-950 group-hover:text-forest-800">
                        {link.label}
                      </span>
                      {link.isExternal ? (
                        <ExternalLink className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-gold-700" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-charcoal-400 group-hover:translate-x-1 group-hover:text-forest-800 transition-transform" />
                      )}
                    </div>
                    <p className="text-[11px] text-charcoal-600 mt-1 leading-normal">
                      {link.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Panel Bottom Action */}
            <div className="pt-6 border-t border-ivory-200 mt-6">
              <button
                type="button"
                onClick={() => {
                  handleLinkClick(activeCategory.to)
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                <span>Go to {activeCategory.label}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Single-Column Accordion Layout (< md) */}
        <div className="md:hidden flex-1 overflow-y-auto p-4 space-y-2">
          {NAVIGATION_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isExpanded = mobileExpandedId === cat.id
            return (
              <div
                key={cat.id}
                className="border border-ivory-200 rounded-lg overflow-hidden bg-ivory-50/40"
              >
                <button
                  type="button"
                  onClick={() => {
                    setMobileExpandedId(isExpanded ? null : cat.id)
                  }}
                  className="w-full flex items-center justify-between p-3.5 text-left bg-white text-xs font-semibold text-forest-950 cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-forest-800" />
                    <span>{cat.label}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-charcoal-500 transition-transform ${
                      isExpanded ? 'rotate-90 text-gold-700' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="p-3 bg-ivory-100/60 border-t border-ivory-200 space-y-2">
                    <p className="text-[11px] text-charcoal-600 italic px-1 mb-2">
                      {cat.tagline}
                    </p>
                    {cat.sublinks.map((link, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          handleLinkClick(link.to, link.isExternal, link.externalUrl)
                        }}
                        className="w-full text-left p-2.5 rounded bg-white border border-ivory-200 text-xs text-charcoal-800 hover:text-forest-900 hover:border-forest-700 flex items-center justify-between cursor-pointer"
                      >
                        <div>
                          <span className="font-medium block">{link.label}</span>
                          <span className="text-[10px] text-charcoal-500 block">
                            {link.description}
                          </span>
                        </div>
                        {link.isExternal ? (
                          <ExternalLink className="w-3.5 h-3.5 text-charcoal-400 shrink-0 ml-2" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-charcoal-400 shrink-0 ml-2" />
                        )}
                      </button>
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        handleLinkClick(cat.to)
                      }}
                      className="w-full mt-2 py-2 px-3 bg-forest-800 text-ivory-50 text-xs font-semibold uppercase tracking-wider rounded text-center block cursor-pointer"
                    >
                      Visit {cat.label} Section
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-3 border-t border-ivory-300 bg-ivory-100 text-[11px] text-charcoal-600 flex flex-wrap items-center justify-between gap-2">
          <span>Vignan&apos;s Institute of Information Technology (Autonomous)</span>
          <span className="text-forest-900 font-semibold">Duvvada, Visakhapatnam</span>
        </div>
      </div>
    </div>
  )
}

export const NavigationDrawer = InstitutionalNavigationOverlay
