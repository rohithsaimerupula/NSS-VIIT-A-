import xml.etree.ElementTree as ET
import sys
from docx_updater_base import make_p, make_table, update_docx_archive, NS_W

def build_prd():
    # Root document element
    doc = ET.Element(f"{{{NS_W}}}document")
    body = ET.Element(f"{{{NS_W}}}body")
    doc.append(body)

    # Document Header
    body.append(make_p("NSS VIIT (A)"))
    body.append(make_p("Product Requirements Document (PRD)", style="Title"))
    body.append(make_p("Product scope, user groups, capabilities, workflows and acceptance criteria (Integrated with MY Bharat)"))
    body.append(make_p("DESIGN PRINCIPLE  Extraordinary visual craft, purposeful motion, institutional trust and accessible interaction."))

    # Doc Control Table
    control_data = [
        ["Document control", "Value"],
        ["ID", "DOC-01"],
        ["Version", "2.0 — integrated baseline (with MY Bharat expansion)"],
        ["Project", "NSS VIIT (A) — complete website and digital platform"],
        ["Status", "Requirements baseline; not an implementation or testing claim"],
        ["Approval", "Review by both primary NSS administrators and college-authorized authority where applicable"]
    ]
    body.append(make_table(control_data, [3000, 6500]))

    # 1. Product vision
    body.append(make_p("1. Product vision", style="Heading1"))
    body.append(make_p("Create one connected, premium and trustworthy digital platform for NSS VIIT (A): a public institutional website plus protected workspaces for the two primary administrators, authorized coordinators, the 28-member Core Team, and approved student volunteers across NSS and MY Bharat initiatives."))

    # 2. Product principles
    body.append(make_p("2. Product principles", style="Heading1"))
    body.append(make_p("Authentic-first: never invent events, statistics, awards, testimonials, contacts or institutional facts.", style="ListBullet"))
    body.append(make_p("Privacy by default: ordinary volunteer profiles, participation, internal files and confidential reports remain private.", style="ListBullet"))
    body.append(make_p("Permission by responsibility: designation does not automatically grant system access; affiliation, team designation and administrative privileges remain strictly distinct.", style="ListBullet"))
    body.append(make_p("Approval before publication for events, reports, photographs, resources and announcements.", style="ListBullet"))
    body.append(make_p("Failure-safe behavior: clear errors, preserve data and never claim success without confirmation.", style="ListBullet"))
    body.append(make_p("Mobile-first, accessible quality with extraordinary but purposeful animation.", style="ListBullet"))

    # 3. Scope and context
    body.append(make_p("3. Scope and context", style="Heading1"))
    scope_data = [
        ["Item", "Requirement"],
        ["Brand", "Exact name NSS VIIT (A); one official NSS unit; MY Bharat integrated as dedicated initiative; no SAC content."],
        ["Institution", "Vignan's Institute of Information Technology (Autonomous), Duvvada, Visakhapatnam."],
        ["Access areas", "Website Admin; NSS Operations Admin; MY Bharat Coordinator workspace; Core Team workspace; Volunteer portal."],
        ["Scale & Structure", "28 Core Team members total (24 NSS-designated, 4 MY Bharat-designated); initial target up to 100 approved volunteers."],
        ["Lifecycle", "Volunteers serve two years; preserve annual and combined history; read-only alumni access after completion."],
        ["Registration state", "Registration stays strictly disabled/closed throughout development; opens only by separate authorized decision."],
        ["Language", "English at launch; prepare architecture for possible Telugu support later."],
        ["Launch approval", "Joint approval by both primary NSS administrators and college-authorized authority."]
    ]
    body.append(make_table(scope_data, [3000, 6500]))

    # 4. User groups
    body.append(make_p("4. User groups and role boundaries", style="Heading1"))
    user_groups_data = [
        ["Group", "Capabilities", "Boundaries"],
        ["Website Admin", "Public pages, homepage layout/content, gallery, public resources, announcements, team profiles, preview/publish, versions.", "No automatic operational-data or volunteer record access."],
        ["NSS Operations Admin", "Manual NSS volunteer approval, NSS event operations, attendance corrections, service-hour records, reports and certificate eligibility review.", "No automatic unrestricted website-design access."],
        ["MY Bharat Coordinator (Proposed)", "MY Bharat volunteer application review, MY Bharat event coordination, cell attendance recording and announcements drafting.", "Scoped strictly to MY Bharat domain; no administrative control over NSS unit records."],
        ["Faculty / PO Reviewer (Proposed)", "Programme Officer / Faculty oversight: review of Joint events, certificate eligibility sign-offs, annual institutional report approvals.", "Strategic approval and audit authority; no routine daily website content editing."],
        ["Core Team (28 Members)", "Assigned tasks, event proposals, report/photo submissions, meetings, announcement drafts (24 NSS, 4 MY Bharat).", "Role title or core-team membership alone confers zero administrative privileges."],
        ["Volunteer", "Register for eligible events, view own attendance/hours, notifications, resources, support and own issued certificates.", "Cannot edit official attendance or see other volunteers' private data."],
        ["Alumni", "Read-only own history, verified hours and issued certificates.", "No active volunteering or administrative actions."]
    ]
    body.append(make_table(user_groups_data, [2400, 4100, 3000]))

    # 5. Public website requirements
    body.append(make_p("5. Public website requirements", style="Heading1"))
    pages_data = [
        ["Page", "Requirements"],
        ["Home", "Hero carousel; mission; featured events (NSS & MY Bharat); verified impact; gallery; approved Core Team highlight; announcements; volunteer CTA (closed state); contact."],
        ["About NSS", "Approved NSS VIIT (A) mission, institutional context and governance."],
        ["MY Bharat", "Dedicated section: national linkage (Ministry of Youth Affairs and Sports), VIIT (A) youth cell objectives, active cell initiatives and student engagement pathways."],
        ["Events & Activities", "Upcoming/past published events, filters (NSS, MY Bharat, Joint), search and event details."],
        ["Calendar", "Calendar/list views, published events tagged by initiative, .ics personal calendar export."],
        ["Gallery", "Approved albums by initiative, event, year and category, captions and event links."],
        ["Our Team", "Official NSS Core Team roster (all 28 members: 24 NSS, 4 MY Bharat) with approved profiles, designations and consented photos."],
        ["Volunteer With Us", "Registration information across NSS, MY Bharat or Both; portal remains closed with clear notice until authorized launch."],
        ["Heritage & Resources", "Verified NSS history, motto/emblem information and approved public documents."],
        ["Announcements", "Latest approved notices and full listing with initiative categorization."],
        ["Contact", "General enquiry form, spam protection and private admin inbox."],
        ["Search", "Public pages, notices, events, approved team profiles and public resources."],
        ["Impact reports", "Approved aggregate annual reports and PDF downloads when available."]
    ]
    body.append(make_table(pages_data, [2800, 6700]))

    # 6. Operational requirements
    body.append(make_p("6. Operational requirements", style="Heading1"))

    # 6.1
    body.append(make_p("6.1 Volunteer registration", style="Heading2"))
    body.append(make_p("One unified registration workflow allows applicants to select their track: NSS only, MY Bharat only, or Both.", style="ListBullet"))
    body.append(make_p("Students register with official college or personal email and provide their college registration number, department and year.", style="ListBullet"))
    body.append(make_p("Operations Admin and MY Bharat Coordinator manually verify eligibility against authorized college information. Email verification alone is not eligibility proof.", style="ListBullet"))
    body.append(make_p("Dual-track approval workflow: applications selecting Both require coordinated review (pending institutional confirmation on single vs dual sign-off).", style="ListBullet"))
    body.append(make_p("Registration remains disabled throughout development; opens only by separate authorized decision.", style="ListBullet"))

    # 6.2
    body.append(make_p("6.2 Events and attendance", style="Heading2"))
    body.append(make_p("Events are classified into three types: NSS, MY Bharat, and Joint initiatives.", style="ListBullet"))
    body.append(make_p("Core Team members submit event proposals; approval by the respective administrator/coordinator is required before publication. Joint events require dual review and PO sign-off.", style="ListBullet"))
    body.append(make_p("Registration opens/closes on configured dates and closes on deadline or capacity. No default waitlist.", style="ListBullet"))
    body.append(make_p("Cancellation/rescheduling updates the public event/calendar and notifies registrants.", style="ListBullet"))
    body.append(make_p("Attendance is manual only. Only authorized admins/coordinators correct official attendance; actor, reason and timestamp are audited.", style="ListBullet"))

    # 6.3
    body.append(make_p("6.3 Service hours and certificates", style="Heading2"))
    body.append(make_p("Hours calculate strictly from approved attendance; maintained in distinct ledgers (NSS hours vs MY Bharat hours).", style="ListBullet"))
    body.append(make_p("CRITICAL INTEGRITY RULE: Service hours for Joint events must never be double-counted across ledgers. Crediting rules for joint events remain pending Programme Officer confirmation.", style="ListBullet"))
    body.append(make_p("The discussed 120-hour annual benchmark remains unconfirmed pending official institutional rules.", style="ListBullet"))
    body.append(make_p("Annual Service and Completion certificates are planned; certificate eligibility criteria and formats remain pending institutional confirmation.", style="ListBullet"))
    body.append(make_p("Launch exclusions: no public certificate verification page, QR code or public verification-ID workflow.", style="ListBullet"))

    # 6.4
    body.append(make_p("6.4 Core Team work", style="Heading2"))
    body.append(make_p("Tasks include assignees, priority, deadline, comments, restricted attachments, progress and review history.", style="ListBullet"))
    body.append(make_p("Deadline reminders and overdue labels; no automatic penalty.", style="ListBullet"))
    body.append(make_p("Meetings include schedule, agenda, attendance and minutes; meeting attendance is not automatically service hours.", style="ListBullet"))
    body.append(make_p("Authorized Core Team members can draft announcements; publication requires administrator approval.", style="ListBullet"))
    body.append(make_p("Event reports and photos remain private until administrator approval.", style="ListBullet"))

    # 7. UI/UX and motion requirements
    body.append(make_p("7. UI/UX and motion requirements", style="Heading1"))
    body.append(make_p("Palette: ivory #F5F1E8, forest #1A3C29, champagne gold #C3A66B, charcoal #292D2A and white cards.", style="ListBullet"))
    body.append(make_p("Editorial serif headings, readable sans-serif body, generous whitespace and authentic approved imagery.", style="ListBullet"))
    body.append(make_p("Contextual badge styling clearly identifies MY Bharat and Joint activities without clashing with the primary brand palette.", style="ListBullet"))
    body.append(make_p("Premium cinematic hero transitions, subtle reveal animations, refined drawer transitions, polished hover/focus states and accurate progress animation.", style="ListBullet"))
    body.append(make_p("Animations must not block input, cause layout shifts or obscure content; respect reduced-motion preference.", style="ListBullet"))
    body.append(make_p("Target WCAG 2.2 AA; verify before launch, do not claim compliance before testing.", style="ListBullet"))

    # 8. Non-functional requirements
    body.append(make_p("8. Non-functional requirements", style="Heading1"))
    nfr_data = [
        ["Area", "Requirement"],
        ["Security", "Server-side authorization, least privilege, mandatory MFA for administrators, secure sessions, upload validation and audit logs."],
        ["Privacy", "Minimum necessary data; private-by-default records; college-approved retention/deletion; volunteer data protected."],
        ["External Systems", "No direct external MY Bharat API integration at launch; no SAC integration; all workflows managed internally."],
        ["Performance", "Set measurable response-time/Core Web Vitals thresholds and test on representative mobile devices."],
        ["Recovery", "Daily database backups and 90-day retention preference subject to provider limits/policy; include restore tests."],
        ["Accessibility", "WCAG 2.2 AA target, keyboard support, focus, contrast, labels and reduced motion."],
        ["Continuity", "At least two authorized technical maintainers and documented handover."],
        ["Cost", "Prefer free services where practical, after verifying security, ownership and limits."]
    ]
    body.append(make_table(nfr_data, [2800, 6700]))

    # 9. Acceptance criteria
    body.append(make_p("9. Acceptance criteria", style="Heading1"))
    body.append(make_p("Private dashboards and records cannot be accessed by unauthorized users.", style="ListBullet"))
    body.append(make_p("Role permissions are server-enforced and tested for allowed and denied actions across all administrative workspaces.", style="ListBullet"))
    body.append(make_p("Registration stays closed until authorized; track selection (NSS/Bharat/Both) captures cleanly.", style="ListBullet"))
    body.append(make_p("Attendance corrections are restricted and audited; hour totals recalculate without double-counting joint events.", style="ListBullet"))
    body.append(make_p("Unapproved media/content remain private.", style="ListBullet"))
    body.append(make_p("Certificate issuance requires administrator approval; rules confirmed by institution.", style="ListBullet"))
    body.append(make_p("Backup restoration, mobile, accessibility, performance and joint approval checks pass.", style="ListBullet"))

    # 10. Open decisions
    body.append(make_p("10. Pending institutional confirmation", style="Heading1"))
    body.append(make_p("Pending Institutional Confirmation: Joint event service-hour crediting formula for students enrolled in both tracks.", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Official confirmation of 120-hour annual benchmark and camp hour rules.", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Certificate eligibility criteria, certificate format and separate vs combined certificates.", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Dual-track application review workflow (independent dual sign-off vs single PO approval).", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Eligibility criteria and departmental intake quotas for the 4 MY Bharat Core Team positions.", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Official domain ownership, retention policy, official contacts and confidential-report reviewers.", style="ListBullet"))

    return ET.tostring(doc, encoding='utf-8', xml_declaration=True)

if __name__ == '__main__':
    xml_bytes = build_prd()
    update_docx_archive("docs/01_PRD_NSS_VIIT_A.docx", xml_bytes)
