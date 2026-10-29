import type { SiteConfig } from '../types';

/**
 * Site Configuration for VIIT NSS Portal
 * 
 * CONTENT-INTEGRITY AUDIT STATUS:
 * - Official Logos: Preserved originals in /assets/logos/ (NSS, VIIT, My Bharat).
 * - Official Website: https://vignaniit.edu.in (Verified institutional domain).
 * - Institutional Address: Verified campus location at Duvvada, Visakhapatnam.
 * - Instagram: Explicitly NULL / Unavailable. No speculative URL is linked.
 * - Email & Telephone: Kept NULL until verified by the VIIT NSS Cell administration.
 */

export const siteConfig: SiteConfig = {
  institution: {
    fullName: "Vignan's Institute of Information Technology (Autonomous)",
    shortName: "VIIT",
    affiliation: "Affiliated to Jawaharlal Nehru Technological University-Gurajada, Vizianagaram (JNTUGV)",
    campusLocation: "Duvvada, Visakhapatnam, Andhra Pradesh",
    addressLine1: "Beside VSEZ, Vadlapudi Post, Duvvada",
    addressLine2: "Gajuwaka Mandal",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "530049",
    isVerifiedAddress: true,
    officialWebsiteUrl: "https://vignaniit.edu.in",
    officialEmail: null,
    officialPhone: null,
    nssCellLocation: "VIIT Campus NSS Cell Office, Duvvada",
  },
  socialLinks: {
    instagramUrl: null,
    isInstagramProvided: false,
    myBharatPortalUrl: "https://mybharat.gov.in/",
    nationalNssPortalUrl: "https://nss.gov.in/",
  },
  logos: {
    nss: "/assets/logos/nss-logo.webp",
    viit: "/assets/logos/viit-vignan-logo.png",
    myBharat: "/assets/logos/my-bharat-logo.png",
  },
};
