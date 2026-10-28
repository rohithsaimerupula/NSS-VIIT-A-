# NSS VIIT (A) — MY Bharat Expansion Addendum
**Document Identifier:** `DOC-07-MY-BHARAT-ADDENDUM`  
**Version:** 1.0 (Approved Planning Baseline)  
**Status:** Approved for Documentation & Architecture Planning Only (No source implementation)  
**Governing Context:** Addendum to `01_PRD_NSS_VIIT_A.docx` through `06_Implementation_Plan_NSS_VIIT_A.docx`  
**Primary Brand Identity:** NSS VIIT (A) — National Service Scheme, Vignan's Institute of Information Technology (Autonomous), Visakhapatnam  

---

## 1. Executive Summary & Brand Hierarchy

### 1.1 Brand & Product Identity
- **Primary Website Identity:** **NSS VIIT (A)**. The platform is the official digital surface of the NSS Unit of Vignan's Institute of Information Technology (Autonomous).
- **Embedded Initiative:** **MY Bharat** is incorporated as a dedicated youth initiative and cell operating within the NSS-focused institutional platform. It is not a detached subdomain or a co-equal rebrand.
- **Visual Identity:** Retains the approved institutional palette:
  - **Warm Ivory:** `#F5F1E8` (Primary background & editorial surface)
  - **Forest Green:** `#1A3C29` (Brand color, primary navigation & actions)
  - **Champagne Gold:** `#C3A66B` (Restrained accent, rules & badges)
  - **Charcoal:** `#292D2A` (Primary typography & high-contrast elements)
  - **White:** `#FFFFFF` (Surface cards, forms, dashboards)
  - *Contextual badging:* Discrete, restrained visual tags distinguish MY Bharat and Joint initiatives without introducing conflicting saturated color schemes.

### 1.2 Approved Core Team Structure
- **Total Team Count:** Exactly 28 members.
- **Collective Name:** All 28 members are collectively designated as the **NSS Core Team**.
- **Designation Breakdown:**
  - **24 members:** NSS-designated members.
  - **4 members:** MY Bharat-designated members.
- **Separation of Concerns Principle:**
  1. *Team Designation:* Editorial/roster label (NSS vs. MY Bharat).
  2. *Initiative Affiliation:* The sphere of activity to which an individual contributes.
  3. *Volunteer Membership:* Student status in the unit lifecycle.
  4. *Administrative Permissions:* Technical capabilities granted strictly by assigned role—never by designation or title alone.
- **Integrity Rule:** The 24/4 ratio is governed by **administrative roster-validation checks** and manual institutional review before publication, **not** by brittle database constraints that impede drafting or mid-term roster adjustments.

---

## 2. Updated Public Surfaces & Page Architecture

The public navigation and information architecture is expanded to incorporate the dedicated MY Bharat cell:

| Page / Route | Scope & Requirements |
|---|---|
| **Home (`/`)** | Hero carousel with controls; mission overview; featured events across NSS and MY Bharat; verified impact counters; approved gallery previews; approved Core Team highlight; announcements; volunteer CTA (closed state); contact. |
| **About NSS (`/about`)** | Approved NSS VIIT (A) mission, institutional context, governance, history at VIIT (A). |
| **MY Bharat (`/my-bharat`)** | **New dedicated section:** National vision & linkage (Ministry of Youth Affairs & Sports), objectives of the VIIT (A) MY Bharat cell, leadership/coordinator structure, active youth initiatives, callout to join MY Bharat initiatives. |
| **Events & Activities (`/events`)** | Unified directory with filter pills: *All*, *NSS*, *MY Bharat*, *Joint Initiatives*. Event detail view displays clear initiative attribution, venue, coordinator contacts, and registration window. |
| **Calendar (`/calendar`)** | Interactive calendar and chronological list views showing published events with initiative-specific tags; `.ics` personal calendar export for all published events. |
| **Gallery (`/gallery`)** | Curated albums tagged by initiative (`nss`, `my_bharat`, `joint`), year, and event name. Strict adherence to approved media and photo consent. |
| **Our Team (`/team`)** | Official roster of the **NSS Core Team** (all 28 members). Filterable/grouped by designation (24 NSS, 4 MY Bharat) under the unified team header. Consented photos, official designations, and academic departments. |
| **Volunteer With Us (`/volunteer`)** | Information on student volunteering pathways; clear notice that **registration remains closed throughout development**. Explains registration pathways for NSS, MY Bharat, and Both. |
| **NSS Heritage & Resources (`/resources`)** | Historical NSS context, motto, emblem, approved downloadable forms, annual circulars, and approved public resources. |
| **Contact (`/contact`)** | Public enquiry form with server-side validation and anti-spam protection; official institutional contact details (phone, email, campus location). |
| **Search (`/search`)** | Server-side indexed search querying published public pages, notices, events, approved team members, and public resources across all initiatives. |
| **Impact Reports (`/impact`)** | Approved aggregate annual activity and impact reports; downloadable verified PDFs. |

---

## 3. Registration, Affiliation & Volunteer Lifecycles

### 3.1 Unified Multi-Track Registration Flow
There is **one registration workflow** serving all student applicants, supporting three distinct tracks:
1. `nss_only`: Student applies exclusively for National Service Scheme activities.
2. `my_bharat_only`: Student applies exclusively for MY Bharat cell youth initiatives.
3. `both`: Student applies for dual enrollment in both NSS and MY Bharat.

```
       [ Prospective Student ]
                  │
                  ▼
   ┌───────────────────────────────┐
   │    Unified Registration Form  │
   │  (College Reg No, Email, Dept,│
   │   Track: NSS / Bharat / Both) │
   └──────────────┬────────────────┘
                  │
                  ▼
   ┌───────────────────────────────┐
   │     Pending Manual Review     │
   │   (Eligibility Verification)  │
   └──────────────┬────────────────┘
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
 [ NSS Ops Admin ]    [ MY Bharat Coord ]
 (NSS Track / Both)  (Bharat Track / Both)
        │                   │
        └─────────┬─────────┘
                  ▼
       [ Faculty / PO Sign-off ]
       (Proposed for 'Both' track)
                  │
                  ▼
       ┌─────────────────────┐
       │   Account Created   │
       │ (Volunteer Portal)  │
       └─────────────────────┘
```

### 3.2 Registration Rules & Safeguards
- **Development Gating:** Volunteer registration **remains strictly disabled/closed** throughout all development phases. The public UI will explicitly display a "Registration Closed / Opening Soon" informational banner until college authority gives explicit written launch approval.
- **Eligibility Validation:** Registration submission requires a valid college registration number, student name, department, year of study, and official or personal email.
- **Manual Verification Requirement:** Email verification alone does **not** grant automatic volunteer status. All applications enter `pending_review` and must be verified against authorized college student records.
- **Application Status Lifecycle:**
  `submitted` ➔ `pending_review` ➔ `approved` / `rejected` ➔ `active` (later: `suspended` / `inactive` / `withdrawn` / `completed_alumni`).

---

## 4. Event Taxonomy, Attendance & Service-Hour Model

### 4.1 Event Initiative Classification
Every event created in the system belongs to one of three strictly defined initiative categories:

| Event Type | Definition | Primary Audience | Creation / Review Workflow |
|---|---|---|---|
| **`nss`** | Regular NSS activities, special annual camps, community service, social awareness rallies. | Approved NSS & Dual Volunteers. | Proposed by Core Team; reviewed & approved by NSS Operations Admin. |
| **`my_bharat`** | Youth empowerment, national initiatives, skill-building workshops, ministry-aligned campaigns. | Approved MY Bharat & Dual Volunteers. | Proposed by Core Team; reviewed & approved by MY Bharat Coordinator. |
| **`joint`** | Large-scale institutional drives, major national day celebrations, mega blood donation camps. | All Approved Volunteers (NSS, MY Bharat, and Dual). | Proposed by Core Team; requires dual review (NSS Operations Admin + MY Bharat Coordinator) and Programme Officer sign-off. |

### 4.2 Attendance Recording & Audit
- Attendance recording is **manual**.
- Only authorized coordinators and administrators can take session attendance.
- Official attendance corrections are restricted to the **NSS Operations Admin** (for NSS events) and **MY Bharat Coordinator** (for MY Bharat events), with all modifications logged in `attendance_change_log` recording: `attendance_id`, `actor_id`, `prior_state`, `new_state`, `reason`, and `timestamp`.

### 4.3 Service Hours Integrity & Joint Event Crediting Rules
- **No Unapproved Hours:** Service hours are derived strictly from approved attendance records. Unverified or self-reported hours are prohibited.
- **Strict Distinction:** Service hours are categorized into distinct ledgers:
  - `nss_hours`: Hours earned through approved NSS activities.
  - `my_bharat_hours`: Hours earned through approved MY Bharat activities.
- **Joint Event Rule (No Double-Counting):**
  - **CRITICAL:** Service hours for `joint` events **must never be double-counted**. A volunteer participating in a 4-hour joint event cannot receive 4 NSS hours *plus* 4 MY Bharat hours (which would falsely report 8 hours of service).
  - *Current Status:* The specific crediting formula for `joint` events (e.g., whether hours credit to the volunteer's primary registered track, split 50/50, or credit based on specific sub-tasks) is **pending official Programme Officer confirmation**.
  - In the data model, joint service hours are explicitly attributed to the event with an audit flag, awaiting the confirmed calculation rule before finalizing volunteer ledger totals.

---

## 5. Role Definitions & Permission Matrix

Permissions are governed by **least privilege** and explicit server-side authorization. Holding a title or membership in the 28-member Core Team confers **no** default administrative capabilities.

| Role Key | Scope & Responsibilities | Boundary & Restrictions |
|---|---|---|
| **`main_website_admin`** | Manages all public content, homepage sections, public notices, team profile publishing, gallery albums, and static resources across both NSS and MY Bharat surfaces. | Cannot alter volunteer eligibility, approve applications, modify official attendance, or edit service records. |
| **`nss_operations_admin`** | Manages NSS volunteer applications, NSS event approvals, manual attendance records, attendance corrections, and NSS service-hour auditing. | Cannot modify website layout/design; cannot unilaterally alter MY Bharat internal records without coordinator collaboration. |
| **`my_bharat_coordinator`** | Reviews MY Bharat applications, manages MY Bharat event workflows, records MY Bharat attendance, drafts MY Bharat public announcements. | Restricted to MY Bharat domain; cannot grant official NSS completion certifications or modify core NSS unit administrative data. |
| **`faculty_po_reviewer`** | High-level faculty/Programme Officer oversight: review of Joint events, resolution of cross-initiative discrepancies, final sign-off on certificate eligibility and annual institutional reports. | Strategic approval and audit authority; no routine daily website text editing. |
| **`core_team` (28 members)** | Submits event proposals, manages assigned operational tasks, submits draft event reports and photographs for review, logs meeting minutes. | Zero administrative privileges by default; actions are strictly task-scoped and draft-only until approved. |
| **`volunteer`** | Registers for eligible events, views private attendance and service hours, submits support enquiries, views personal issued certificates. | Private own-record access only; strictly prohibited from viewing peers' private data or editing official logs. |
| **`alumni`** | Completed volunteers: read-only access to their verified historical service records and issued certificates. | No active event registration or proposal rights. |

---

## 6. Proposed Database Schema Extensions & RLS Specifications

The following logical extensions augment the baseline defined in `05_Backend_Schema_NSS_VIIT_A.docx`:

### 6.1 Custom Types & Enums
```sql
-- Volunteer enrollment track
CREATE TYPE volunteer_track_type AS ENUM (
  'nss_only',
  'my_bharat_only',
  'both'
);

-- Event initiative category
CREATE TYPE event_initiative_type AS ENUM (
  'nss',
  'my_bharat',
  'joint'
);

-- Core team sub-designation (Total 28: 24 NSS + 4 MY Bharat)
CREATE TYPE core_team_designation_type AS ENUM (
  'nss_wing',
  'my_bharat_cell'
);

-- Service hour attribution category
CREATE TYPE service_hour_category AS ENUM (
  'nss',
  'my_bharat'
);

-- Role types
CREATE TYPE app_role_type AS ENUM (
  'main_website_admin',
  'nss_operations_admin',
  'my_bharat_coordinator',
  'faculty_po_reviewer',
  'core_team',
  'volunteer',
  'alumni'
);
```

### 6.2 Entity Modifications (Logical)

1. **`user_profile` & `volunteer_application`**:
   - `applied_track: volunteer_track_type` (Required)
   - `approved_track: volunteer_track_type` (Nullable until approval)
   - `my_bharat_id: text` (Optional: optional student-provided government MY Bharat ID; no external API sync)

2. **`core_team_roster`**:
   - `academic_year_id: uuid` (FK)
   - `user_id: uuid` (FK)
   - `designation_type: core_team_designation_type` (Required: `nss_wing` or `my_bharat_cell`)
   - `role_title: text` (e.g., "President", "Lead Coordinator", "Event Head")
   - `display_order: integer`
   - `is_published: boolean` (Default `false`)
   - *Validation Assertion:* An administrative check function verifies that active roster count totals 28 (24 `nss_wing` and 4 `my_bharat_cell`) prior to toggling `is_published = true`.

3. **`event`**:
   - `initiative_type: event_initiative_type` (Required: `nss`, `my_bharat`, `joint`)
   - `nss_admin_approved: boolean`
   - `bharat_coordinator_approved: boolean`
   - `po_approved: boolean` (Mandatory for `joint` events)

4. **`service_hour_entry`**:
   - `user_id: uuid` (FK)
   - `event_id: uuid` (FK)
   - `attendance_id: uuid` (FK)
   - `hours: numeric(5,2)`
   - `hour_category: service_hour_category` (Required: `nss` or `my_bharat`)
   - `is_joint_event: boolean` (Default `false`)
   - `rule_version: text`

### 6.3 Row Level Security (RLS) Policy Specifications
- **`user_profile`**:
  - `SELECT`: Users read own profile; `main_website_admin`, `nss_operations_admin`, and `my_bharat_coordinator` read profiles within their purview; public reads only published Core Team bios.
  - `UPDATE`: Users update limited personal contact fields; status and role changes restricted to authorized admins.
- **`event`**:
  - `SELECT`: Public reads only if `status = 'published'`; authenticated volunteers read published events matching their track or joint events; admins read all.
  - `INSERT / UPDATE`: Core Team can insert `draft`; publication requires appropriate admin/coordinator approval flag.
- **`attendance_record` & `attendance_change_log`**:
  - `SELECT`: Volunteer reads own records; admins read records for their initiatives.
  - `INSERT`: Authorized coordinators during event recording window.
  - `UPDATE`: Restricted exclusively to `nss_operations_admin` and `my_bharat_coordinator` with mandatory audit row insertion.
- **`service_hour_entry`**:
  - `SELECT`: Volunteers read own ledger; admins read all for certification reviews.
  - `INSERT / UPDATE`: System/service-role triggered via verified attendance approvals only. Direct client manipulation strictly prohibited.

---

## 7. Security, Privacy & Launch Exclusions

### 7.1 Security & Authentication Safeguards
1. **Mandatory MFA:** Multi-Factor Authentication is required for production access for `main_website_admin`, `nss_operations_admin`, and `faculty_po_reviewer`.
2. **Server-Side Enforcement:** Never rely on UI button hiding or client-side route guards for data protection. Supabase RLS and server API validation are the primary security enforcement layers.
3. **Session Revocation:** Immediate session invalidation upon role change or account suspension.
4. **Credential Isolation:** Service-role keys and database passwords must never be exposed to the client bundle. Only `VITE_SUPABASE_ANON_KEY` is client-visible.

### 7.2 Approved Launch Exclusions (Retained strictly)
- **No SAC Integration:** Student Activity Council modules or links are completely excluded.
- **No Direct MY Bharat API Integration:** No real-time API syncing, web scraping, or OAuth integration with `mybharat.gov.in`. All cell activities are tracked natively within the NSS VIIT (A) platform.
- **No Public Certificate Verification:** No public QR codes, public verification portals, or verification-ID search tools at launch.
- **No Expense Management:** Financial ledgers and expense tracking are excluded from the initial release.
- **No Fabricated Data:** Authentic-first policy: zero mock institutional events, false leadership profiles, or fabricated statistics will be published.

---

## 8. Missing Screens & UI/UX Acceptance Criteria (Stitch Alignment)

When reviewing the Google Stitch design outputs and preparing UI layouts, the following screens, widgets, and acceptance criteria must be satisfied:

### 8.1 Required Public Screens & Elements
- [ ] **MY Bharat Landing Screen (`/my-bharat`)**:
  - Hero header introducing the VIIT (A) MY Bharat youth cell with national youth mission alignment.
  - Visual pillar cards (Leadership, Youth Engagement, National Missions, Skill Building).
  - Feed of upcoming MY Bharat and Joint activities with initiative badges.
  - Information card detailing how college students can enroll in the cell.
- [ ] **Unified Registration Form (`/volunteer/register`)**:
  - Clear track selection control (`nss_only`, `my_bharat_only`, `both`) with distinct descriptive copy explaining expectations for each.
  - Persistent, accessible alert banner stating: *"Volunteer registration is currently closed during development."*
  - Inline validation for college registration number, email, and department.
- [ ] **Our Team Roster (`/team`)**:
  - Unified page title: **NSS Core Team (28 Members)**.
  - Filter tabs or designated sections: *NSS Wing (24 Members)* and *MY Bharat Cell (4 Members)*.
  - Individual profile cards showing consented photo, name, role title, department, and academic year.
- [ ] **Events Directory & Cards (`/events`)**:
  - Filter pills for *All Initiatives*, *NSS*, *MY Bharat*, and *Joint*.
  - Consistent visual badge tags: Forest Green for NSS, Champagne Gold/Navy accent for MY Bharat, Dual Badge for Joint.
  - Clear capacity, venue, date/time, and registration deadline indicators.

### 8.2 Operational & Dashboard Screens
- [ ] **Dual-Wing Applicant Review Queue**:
  - Operations Admin view to filter applications by track.
  - MY Bharat Coordinator view with scoped access to MY Bharat and Dual-track applicants.
  - Clear recorded decision modal (Approve / Reject / Request Correction) with mandatory reason log.
- [ ] **Multi-Initiative Event Creation & Attendance**:
  - Event builder requiring selection of `initiative_type`.
  - Joint event toggle indicating dual-approval requirement.
  - Attendance capture sheet with quick mark-present and discrepancy-correction modal.
- [ ] **Volunteer Personal Portal**:
  - Personal dashboard displaying registered track, upcoming events, and dual-ledger service hour counters (*Approved NSS Hours*, *Approved MY Bharat Hours*).
  - Explicit disclaimer stating that service hour totals and certificates are subject to institutional review.

---

## 9. Phased Testing & Quality Assurance Plan

| Test Phase | Scope of Verification | Acceptance Target |
|---|---|---|
| **Unit Testing** | Service hour calculations (ensuring zero double-counting on joint events); track-filtering logic; state-machine transitions. | 100% passing tests; no calculation drift. |
| **RBAC / Authorization** | Negative testing: MY Bharat coordinator attempting to edit NSS administrative logs; Volunteer attempting to view peer records; Core Team attempting unauthorized publishing. | 100% server-side rejections (`403 Forbidden` / RLS deny). |
| **Concurrency Testing** | Simultaneous event registrations up to strict capacity limit. | No overbooking; zero race condition anomalies. |
| **Accessibility (a11y)** | Keyboard navigation through hero carousel, navigation drawer, track selector, and event filters; color contrast ratios against `#F5F1E8` and `#1A3C29`. | Target WCAG 2.2 AA; zero blocking focus traps. |
| **Mobile Responsiveness** | Touch targets (≥ 44px), drawer responsiveness, multi-track registration form layout on 360px–414px viewports. | No horizontal overflow; smooth 60fps animations with `prefers-reduced-motion` compliance. |

---

## 10. Outstanding Institutional & Policy Decisions (Unresolved)

> [!IMPORTANT]
> The following items are documented as **unresolved questions** requiring formal written confirmation from the NSS Programme Officer or college authority. They will **not** be fabricated or hardcoded into application rules:

1. **Joint Event Crediting Formula:** Confirmation of how joint NSS + MY Bharat volunteer hours are allocated for students enrolled in `both` tracks (e.g., primary track attribution vs. proportional split).
2. **120-Hour Annual Target:** Official confirmation of whether the discussed 120-hour service benchmark is a formal institutional prerequisite for NSS certification, and whether an equivalent benchmark applies to MY Bharat.
3. **Certificate Issuance Policy:** Whether volunteers in the MY Bharat cell receive a separate Ministry/Institutional MY Bharat certificate or a combined NSS VIIT (A) Certificate with initiative endorsements.
4. **Dual-Track Review Authority:** Whether applications selecting `both` require independent sign-offs from both the NSS Operations Admin and MY Bharat Coordinator, or if the Programme Officer conducts single-point approval.
5. **MY Bharat Cell Student Intake Criteria:** Confirmation of specific eligibility criteria or quotas for the 4 MY Bharat Core Team positions and general cell volunteers.
