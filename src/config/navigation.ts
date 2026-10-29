export interface NavItem {
  label: string;
  href: string;
  to: string;
  pageId?: 'home' | 'about' | 'mybharat' | 'activities' | 'events' | 'team' | 'gallery' | 'resources' | 'contact' | 'volunteer';
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/', to: '/', pageId: 'home' },
  { label: 'About', href: '/about', to: '/about', pageId: 'about' },
  { label: 'MY Bharat', href: '/my-bharat', to: '/my-bharat', pageId: 'mybharat' },
  { label: 'Events & Activities', href: '/events', to: '/events', pageId: 'events' },
  { label: 'Our Team', href: '/team', to: '/team', pageId: 'team' },
  { label: 'Gallery', href: '/gallery', to: '/gallery', pageId: 'gallery' },
  { label: 'Resources & Heritage', href: '/resources', to: '/resources', pageId: 'resources' },
  { label: 'Contact', href: '/contact', to: '/contact', pageId: 'contact' },
];

export const footerLinks = {
  navigation: [
    { label: 'About VIIT NSS', href: '/about', to: '/about', pageId: 'about' },
    { label: 'MY Bharat Portal', href: '/my-bharat', to: '/my-bharat', pageId: 'mybharat' },
    { label: 'Featured Activities', href: '/events', to: '/events', pageId: 'events' },
    { label: 'Our Team Directory', href: '/team', to: '/team', pageId: 'team' },
    { label: 'Documentary Gallery', href: '/gallery', to: '/gallery', pageId: 'gallery' },
    { label: 'Volunteer Information', href: '/volunteer', to: '/volunteer', pageId: 'volunteer' },
  ],
  governance: [
    { label: 'NSS Programme Advisory', href: '/team', to: '/team', pageId: 'team' },
    { label: 'Motto & Ideology', href: '/about', to: '/about', pageId: 'about' },
    { label: 'Publications & Archives', href: '/resources', to: '/resources', pageId: 'resources' },
    { label: 'Campus NSS Cell', href: '/contact', to: '/contact', pageId: 'contact' },
  ],
  externalPortals: [
    { label: 'National Portal of India', href: 'https://india.gov.in', external: true },
    { label: 'National Service Scheme (GoI)', href: 'https://nss.gov.in', external: true },
    { label: 'Mera Yuva Bharat (MY Bharat)', href: 'https://mybharat.gov.in', external: true },
    { label: 'VIIT Official Portal', href: 'https://vignaniit.edu.in', external: true },
  ],
};
