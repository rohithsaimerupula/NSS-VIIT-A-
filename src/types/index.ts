/**
 * NSS VIIT (A) — Application-Wide Types
 *
 * Role and permission definitions sourced from:
 * - 01_PRD_NSS_VIIT_A.docx §4 (User groups)
 * - 02_TRD_NSS_VIIT_A.docx §5 (Access model)
 * - 05_Backend_Schema_NSS_VIIT_A.docx §3 (Core entities)
 *
 * IMPORTANT:
 * These types define the shape of application data.
 * Authorization MUST be enforced server-side and via RLS policies.
 * Client-side role checks are for UI rendering only — never for security.
 * (TRD §3: "Do not trust client-side role flags, hidden buttons or route guards as authorization.")
 */

/** ─── User Roles ───────────────────────────────────────────────────
 * Documented in PRD §4, TRD §5, and Addendum §5.
 * Strictly separated; holding one does not imply another.
 */
export type UserRole =
  | 'main_website_admin'    // Public pages, content, homepage, gallery, announcements.
  | 'nss_operations_admin' // Volunteer approval, events, attendance, hours, certificates.
  | 'my_bharat_coordinator'// (Proposed) MY Bharat youth cell operations, events, attendance.
  | 'faculty_po_reviewer'  // (Proposed) Programme Officer / Faculty review & strategic audit.
  | 'core_team'            // Tasks, proposals, submissions, meetings. Scoped individually.
  | 'volunteer'            // Own events, attendance, hours, resources, certificates.
  | 'alumni'               // Read-only own history and issued certificates.

/** ─── Volunteer Enrollment Tracks ─────────────────────────────────
 * Single registration workflow track options (PRD §6.1, Addendum §3.1).
 */
export type VolunteerTrack =
  | 'nss_only'
  | 'my_bharat_only'
  | 'both'

/** ─── Event Initiative Types ──────────────────────────────────────
 * Event classifications (PRD §6.2, Addendum §4.1).
 */
export type EventInitiative =
  | 'nss'
  | 'my_bharat'
  | 'joint'

/** ─── Core Team Designation Types ─────────────────────────────────
 * 28 Core Team members: 24 NSS Wing, 4 MY Bharat Cell (PRD §3, Addendum §1.2).
 */
export type CoreTeamDesignation =
  | 'nss_wing'
  | 'my_bharat_cell'

/** ─── Service Hour Categories ─────────────────────────────────────
 * Strictly distinct ledgers; joint events never double-counted (PRD §6.3, Addendum §4.3).
 */
export type ServiceHourCategory =
  | 'nss_hours'
  | 'my_bharat_hours'

/** ─── Volunteer Application Status ────────────────────────────────
 * State model from Web Flow §10 and Backend Schema §5.
 */
export type ApplicationStatus =
  | 'submitted'
  | 'pending_review'
  | 'approved'
  | 'rejected'
  | 'suspended'
  | 'inactive'
  | 'withdrawn'
  | 'completed'   // Volunteer lifecycle complete; becomes alumni.
  | 'alumni'

/** ─── Event Status ─────────────────────────────────────────────────
 * State model from Web Flow §10 and Backend Schema §5.
 */
export type EventStatus =
  | 'draft'
  | 'submitted_for_review'
  | 'approved'
  | 'published'
  | 'completed'
  | 'cancelled'

/** ─── Media/Report Status ──────────────────────────────────────────
 * State model from Web Flow §10 and Backend Schema §5.
 */
export type MediaStatus =
  | 'private_pending_review'
  | 'approved'
  | 'rejected'
  | 'needs_revision'
  | 'archived'

/** ─── Certificate Status ───────────────────────────────────────────
 * State model from Web Flow §10 and Backend Schema §5.
 */
export type CertificateStatus =
  | 'potentially_eligible'
  | 'pending_review'
  | 'approved'
  | 'rejected'
  | 'issued'

/** ─── Task Status ──────────────────────────────────────────────────
 * State model from Web Flow §10 and Backend Schema §5.
 */
export type TaskStatus =
  | 'to_do'
  | 'in_progress'
  | 'submitted_for_review'
  | 'completed'
  | 'needs_revision'
  // 'overdue' is derived from deadline comparison, not stored.

/** ─── Support Ticket Status ────────────────────────────────────────
 * State model from Web Flow §10 and Backend Schema §5.
 */
export type SupportStatus =
  | 'open'
  | 'in_progress'
  | 'waiting_for_response'
  | 'resolved'

/** ─── Attendance Status ────────────────────────────────────────────
 * Corrections are strictly restricted to Operations Admin.
 * State model from Web Flow §10 and Backend Schema §5.
 */
export type AttendanceStatus =
  | 'recorded'             // Awaiting approval if configured.
  | 'approved'
  // Corrections are represented in attendance_change_log, not as a status.

/** ─── Feature Flags ────────────────────────────────────────────────
 * Controlled by environment variables.
 * Registration must be false until separately authorized (PRD §6.1).
 */
export interface FeatureFlags {
  registrationEnabled: boolean
}

/** ─── API Response Wrapper ─────────────────────────────────────────
 * Consistent wrapper for async operations.
 * Failure states must be represented truthfully (PRD §2.5).
 */
export type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string; code?: string }

/** ─── Content and Portal Configuration Types ─────────────────────── */
export interface SiteConfig {
  institution: {
    fullName: string;
    shortName: string;
    affiliation: string;
    campusLocation: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    isVerifiedAddress: boolean;
    officialWebsiteUrl: string | null;
    officialEmail: string | null;
    officialPhone: string | null;
    nssCellLocation: string | null;
  };
  socialLinks: {
    instagramUrl: string | null;
    isInstagramProvided: boolean;
    myBharatPortalUrl: string;
    nationalNssPortalUrl: string;
  };
  logos: {
    nss: string;
    viit: string;
    myBharat: string;
  };
}

export interface HeroSlide {
  id: string;
  themeTitle: string;
  headline: string;
  subheading: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  accentBadge: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  descriptor: string;
  isPlaceholder: boolean;
  statusLabel?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: 'Community Health' | 'Environmental Action' | 'Literacy & Youth' | 'Disaster Relief' | 'Civic Awareness';
  tagline: string;
  description: string;
  dateRange: string;
  location: string;
  isDemoSample?: boolean;
  imagePlaceholder: {
    url: string;
    alt: string;
    note: string;
  };
  featured: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  category: string;
  description: string;
  status: 'Upcoming' | 'In Progress' | 'Recently Concluded';
  initiative?: 'NSS' | 'MY Bharat' | 'Joint';
  isOfficialNationalObservance?: boolean;
  isDemoSample?: boolean;
  isFeatured?: boolean;
}

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  designation: string;
  department?: string;
  message: string;
  isPlaceholderImage: boolean;
  isDemoSample?: boolean;
  imagePlaceholder: {
    url: string;
    alt: string;
    note: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  spanClass: string;
  imagePlaceholder: {
    url: string;
    alt: string;
    note: string;
  };
}

export interface VolunteerStory {
  id: string;
  author: string;
  roleOrBatch: string;
  title: string;
  quote: string;
  fullStory: string;
  year: string;
  isDemoSample?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  awardingBody: string;
  year: string;
  verifiedDetails: string;
  verificationBadge: string;
  isDemoSample?: boolean;
}

export interface HeritagePublication {
  id: string;
  title: string;
  type: 'Annual Report' | 'Handbook' | 'Newsletter' | 'Policy Guide';
  publicationYear: string;
  description: string;
  status: 'Archived' | 'Available in NSS Cell' | 'Pending Digital Upload';
  isOfficialNationalDocument?: boolean;
}

export interface CommunityPartner {
  id: string;
  name: string;
  type: 'Government Body' | 'Affiliating University' | 'Youth Body' | 'Civic Administration' | 'Government Healthcare' | 'Gram Panchayat';
  engagementScope: string;
  location: string;
  isOfficialStatutoryAlliance?: boolean;
  isDemoSample?: boolean;
}
