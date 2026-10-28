import xml.etree.ElementTree as ET
import sys
from docx_updater_base import make_p, make_table, update_docx_archive, NS_W

def build_trd():
    doc = ET.Element(f"{{{NS_W}}}document")
    body = ET.Element(f"{{{NS_W}}}body")
    doc.append(body)

    # Document Header
    body.append(make_p("NSS VIIT (A)"))
    body.append(make_p("Technical Requirements Document (TRD)", style="Title"))
    body.append(make_p("Proposed architecture, security, integrations, deployment and quality requirements (Integrated with MY Bharat)"))
    body.append(make_p("DESIGN PRINCIPLE  Extraordinary visual craft, purposeful motion, institutional trust and accessible interaction."))

    # Doc Control Table
    control_data = [
        ["Document control", "Value"],
        ["ID", "DOC-02"],
        ["Version", "2.0 — integrated baseline (with MY Bharat expansion)"],
        ["Project", "NSS VIIT (A) — complete website and digital platform"],
        ["Status", "Requirements baseline; not an implementation or testing claim"],
        ["Approval", "Review by both primary NSS administrators and college-authorized authority where applicable"]
    ]
    body.append(make_table(control_data, [3000, 6500]))

    # 1. Technical goals
    body.append(make_p("1. Technical goals", style="Heading1"))
    body.append(make_p("Build a secure, maintainable responsive platform with a public content surface and private role-based application areas. Technology choices are provisional until provider pricing, free-tier limits, data ownership and institutional requirements are reviewed. Integrates MY Bharat natively without assuming direct external government API connectivity."))

    # 2. Proposed architecture
    body.append(make_p("2. Proposed architecture", style="Heading1"))
    arch_data = [
        ["Layer", "Candidate direction", "Responsibilities"],
        ["Frontend", "React + TypeScript + Vite candidate.", "Public pages, MY Bharat section, dashboards, forms, animations, accessibility."],
        ["API/business layer", "Server-side API.", "Authorization, validation, multi-track registration, hour calculations, notifications and audit."],
        ["Database", "Managed PostgreSQL preferred (Supabase candidate).", "Users, roles, multi-track registration, events (NSS/Bharat/Joint), attendance, separate hour ledgers, tasks, content history."],
        ["Authentication", "Managed authentication candidate.", "Email verification, password reset, MFA for admins, sessions and recovery."],
        ["Object storage", "Managed private storage.", "Media, reports, task files and resources; publish only approved assets."],
        ["Email", "Transactional provider.", "Verification, notifications, support updates and alerts."],
        ["Hosting/monitoring", "Choose after review.", "HTTPS, deploys, secrets, availability, errors, backups and email status."]
    ]
    body.append(make_table(arch_data, [2000, 3200, 4300]))

    # 3. Security architecture
    body.append(make_p("3. Security architecture", style="Heading1"))
    body.append(make_p("Deny by default: each protected API validates identity, role, module permission and object-level access.", style="ListBullet"))
    body.append(make_p("Do not trust client-side role flags, hidden buttons or route guards as authorization; enforce strictly on the server and database (RLS).", style="ListBullet"))
    body.append(make_p("Separate account status, volunteer lifecycle, initiative track, role assignment and active sessions.", style="ListBullet"))
    body.append(make_p("MFA mandatory for primary administrators (Main Website Admin, NSS Operations Admin, and Faculty/PO Reviewer).", style="ListBullet"))
    body.append(make_p("Admin revocation invalidates sessions/tokens and immediately blocks later privileged requests.", style="ListBullet"))
    body.append(make_p("Audit critical actions with actor, action, time, target, prior/new state and reason; avoid unnecessary personal data in logs.", style="ListBullet"))
    body.append(make_p("Keep secrets in deployment secret management, never in source control or client bundles.", style="ListBullet"))

    # 4. Integrity rules
    body.append(make_p("4. Integrity rules", style="Heading1"))
    body.append(make_p("Attendance corrections only by authorized administrators/coordinators; preserve previous/new values, actor, timestamp and reason in attendance_change_log.", style="ListBullet"))
    body.append(make_p("Service hours derive strictly from approved attendance; maintained in distinct ledgers (nss_hours vs my_bharat_hours).", style="ListBullet"))
    body.append(make_p("CRITICAL: Joint-event hours must NEVER be double-counted. Calculation formulas remain pending Programme Officer confirmation.", style="ListBullet"))
    body.append(make_p("Registration checks track eligibility, time window and capacity transactionally to prevent overbooking.", style="ListBullet"))
    body.append(make_p("Roster integrity check: administrative validation verifies 28 Core Team members (24 NSS, 4 MY Bharat) prior to public roster publishing; no brittle database constraints.", style="ListBullet"))
    body.append(make_p("Academic-year changes never reset historical service or role records.", style="ListBullet"))

    # 5. Access model
    body.append(make_p("5. Access model and technical controls", style="Heading1"))
    access_data = [
        ["Area / Role", "Technical control"],
        ["Main Website Admin", "Scoped content, homepage, MY Bharat public page, preview/publish and version permissions."],
        ["NSS Operations Admin", "NSS volunteer approval, NSS events, attendance correction, NSS hours and operational reports."],
        ["MY Bharat Coordinator (Proposed)", "MY Bharat volunteer approval, MY Bharat events, attendance logging and cell announcements."],
        ["Faculty / PO Reviewer (Proposed)", "High-level review: Joint event approvals, certificate eligibility sign-offs, annual report audits."],
        ["Core Team (28 Members)", "Individual accounts with role-specific task permissions; title or wing designation does not imply admin rights."],
        ["Volunteer", "Own-record access only (registered track, attendance, separate hour breakdown, certificates)."],
        ["Alumni", "Read-only own history and issued certificates."]
    ]
    body.append(make_table(access_data, [3000, 6500]))

    # 6. Integrations
    body.append(make_p("6. Integrations", style="Heading1"))
    integ_data = [
        ["Integration", "Behavior", "Status"],
        ["MY Bharat External API", "No direct external government API integration at launch; all cell data tracked natively.", "Explicit Exclusion"],
        ["SAC Integration", "No Student Activity Council integration or links.", "Explicit Exclusion"],
        ["Public Cert Verification", "No public verification portal, QR codes or public verification IDs.", "Explicit Exclusion"],
        ["Email", "Template-based messages, delivery state and failure handling.", "Provider pending."],
        ["Storage", "Private uploads, approved public assets, access control and backups.", "Provider pending."],
        ["Authentication", "Email verification, reset, MFA, session revocation.", "Provider pending."],
        ["Calendar", "Generate .ics files for published events across all initiatives.", "No paid integration required."]
    ]
    body.append(make_table(integ_data, [2500, 4800, 2200]))

    # 7. Backup and recovery
    body.append(make_p("7. Backup and recovery", style="Heading1"))
    body.append(make_p("Daily database backup target; 90-day retention preference subject to provider limits and institutional policy.", style="ListBullet"))
    body.append(make_p("Include media and essential configuration; encrypt backups and restrict restore permissions.", style="ListBullet"))
    body.append(make_p("Periodically restore in an isolated environment and record results.", style="ListBullet"))
    body.append(make_p("At least two technical maintainers must be able to deploy and recover.", style="ListBullet"))

    # 8. Performance and accessibility
    body.append(make_p("8. Performance and accessibility", style="Heading1"))
    body.append(make_p("Set numerical Core Web Vitals and response-time thresholds before implementation completion.", style="ListBullet"))
    body.append(make_p("Optimize images, use responsive formats, lazy-load below-the-fold assets, code split and cache sensibly.", style="ListBullet"))
    body.append(make_p("Target WCAG 2.2 AA with automated and manual review; verify visible focus, contrast and screen-reader support.", style="ListBullet"))
    body.append(make_p("Animations must respect prefers-reduced-motion; no blocking spinners or faked progress.", style="ListBullet"))

    # 9. Environments
    body.append(make_p("9. Environments", style="Heading1"))
    body.append(make_p("Development: implementation and local testing with test data; registration stays closed.", style="ListBullet"))
    body.append(make_p("Preview/staging: review multi-track registration, dual queues and responsive UI; restricted access.", style="ListBullet"))
    body.append(make_p("Production: approved live website/portals; HTTPS, secret management, monitoring and backups.", style="ListBullet"))

    # 10. Decisions pending
    body.append(make_p("10. Pending institutional confirmation", style="Heading1"))
    body.append(make_p("Pending Institutional Confirmation: Joint event service-hour crediting rules (no double-counting).", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Official service-hour targets (120-hour benchmark) and certificate policies.", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Approval authority workflow for dual-track volunteer applicants (Both).", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Database and hosting vendor selection (Supabase pricing/limits review).", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Domain and DNS ownership handover.", style="ListBullet"))

    return ET.tostring(doc, encoding='utf-8', xml_declaration=True)

if __name__ == '__main__':
    xml_bytes = build_trd()
    update_docx_archive("docs/02_TRD_NSS_VIIT_A.docx", xml_bytes)
