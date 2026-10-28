import xml.etree.ElementTree as ET
import sys
from docx_updater_base import make_p, make_table, update_docx_archive, NS_W

def build_web_flow():
    doc = ET.Element(f"{{{NS_W}}}document")
    body = ET.Element(f"{{{NS_W}}}body")
    doc.append(body)

    # Document Header
    body.append(make_p("NSS VIIT (A)"))
    body.append(make_p("Application & Web Flow", style="Title"))
    body.append(make_p("Navigation map, user journeys, state transitions and access boundaries (Integrated with MY Bharat)"))
    body.append(make_p("DESIGN PRINCIPLE  Extraordinary visual craft, purposeful motion, institutional trust and accessible interaction."))

    # Doc Control Table
    control_data = [
        ["Document control", "Value"],
        ["ID", "DOC-03"],
        ["Version", "2.0 — integrated baseline (with MY Bharat expansion)"],
        ["Project", "NSS VIIT (A) — complete website and digital platform"],
        ["Status", "Requirements baseline; not an implementation or testing claim"],
        ["Approval", "Review by both primary NSS administrators and college-authorized authority where applicable"]
    ]
    body.append(make_table(control_data, [3000, 6500]))

    # 1. Global application map
    body.append(make_p("1. Global application map", style="Heading1"))
    map_data = [
        ["Surface", "Routes/features", "Access"],
        ["Public", "Home, About NSS, MY Bharat (/my-bharat dedicated page), Events/detail, Calendar, Gallery/album, Our Team (28 Core Team), Volunteer info, Heritage/resources, Announcements, Contact, Impact Reports, Search.", "Everyone; published content only."],
        ["Website Admin", "Overview, pages, homepage editor, MY Bharat section content, preview, media, announcements, team profiles, resources, versions.", "Main Website Admin and explicitly authorized roles."],
        ["NSS Operations Admin", "Applications (NSS & Both), NSS events, registrations, manual attendance, NSS hour auditing, NSS programmes, certificates, reports.", "NSS Operations Admin and delegated roles."],
        ["MY Bharat Coordinator (Proposed)", "Applications (MY Bharat & Both review queue), MY Bharat events, cell registrations, attendance, youth cell reports.", "Authorized MY Bharat Coordinators."],
        ["Faculty / PO Reviewer (Proposed)", "Joint event proposal review, dual-track application audit, certificate eligibility sign-off, annual institutional reports.", "Programme Officer and authorized faculty reviewers."],
        ["Core Team (28 Members)", "Assigned tasks, event proposals (NSS/Bharat/Joint), report/media submissions, announcement drafts, meetings.", "Approved Core Team with scoped permissions (24 NSS wing, 4 MY Bharat cell)."],
        ["Volunteer", "Events, registrations, attendance, separate hour breakdown (NSS vs Bharat), notifications, profile, certificates, support.", "Approved active volunteers across all tracks; alumni read-only subset."]
    ]
    body.append(make_table(map_data, [2400, 4800, 2300]))

    # 2. Public visitor flow
    body.append(make_p("2. Public visitor flow", style="Heading1"))
    body.append(make_p("Visitor lands on Home and views the accessible hero carousel with pause/navigation controls.", style="ListNumber"))
    body.append(make_p("Visitor explores About NSS or navigates to the dedicated MY Bharat section to review national mission alignment and campus cell activities.", style="ListNumber"))
    body.append(make_p("Events directory and interactive calendar display published initiatives with clear badges (NSS, MY Bharat, Joint); filters allow refined browsing.", style="ListNumber"))
    body.append(make_p("Team directory presents the unified 28-member NSS Core Team, filterable by designation (24 NSS, 4 MY Bharat).", style="ListNumber"))
    body.append(make_p("Volunteer With Us displays clear multi-track information, but registration remains closed with an explanatory notice during development.", style="ListNumber"))
    body.append(make_p("Contact form validates and spam-protects submissions; confirmation displays only after server success.", style="ListNumber"))

    # 3. Volunteer registration flow
    body.append(make_p("3. Volunteer registration flow (Multi-track)", style="Heading1"))
    body.append(make_p("Authorized administrators open registration only after formal launch approval.", style="ListNumber"))
    body.append(make_p("Student submits personal details, college registration number, official or personal email, department, and selects track: NSS only, MY Bharat only, or Both.", style="ListNumber"))
    body.append(make_p("Email ownership is verified; this is not proof of student eligibility.", style="ListNumber"))
    body.append(make_p("Application enters Pending Manual Review and routes to appropriate queue (NSS Ops Admin, MY Bharat Coordinator, or dual review queue for Both).", style="ListNumber"))
    body.append(make_p("Admin/Coordinator checks authorized college enrollment information and resolves discrepancies.", style="ListNumber"))
    body.append(make_p("Decision recorded with actor and timestamp; approved student receives credentials and role-appropriate portal access.", style="ListNumber"))
    body.append(make_p("Account status lifecycle: submitted -> pending_review -> approved/rejected -> active -> suspended/inactive/withdrawn/completed_alumni.", style="ListNumber"))

    # 4. Event flow
    body.append(make_p("4. Event flow (NSS, MY Bharat, Joint)", style="Heading1"))
    body.append(make_p("Authorized Core Team member submits event proposal, selecting initiative type: NSS, MY Bharat, or Joint.", style="ListNumber"))
    body.append(make_p("Proposal routes to responsible approver: NSS Ops Admin for NSS; MY Bharat Coordinator for MY Bharat; dual review + PO sign-off for Joint.", style="ListNumber"))
    body.append(make_p("Authorized administrator publishes approved event, setting registration window, capacity and target volunteer audience.", style="ListNumber"))
    body.append(make_p("Registration enforces eligibility, time window and capacity transactionally to prevent overbooking; no default waitlist.", style="ListNumber"))
    body.append(make_p("Cancellation or rescheduling updates the public event/calendar immediately and sends transactional notifications.", style="ListNumber"))
    body.append(make_p("Past events move to archive/history but retain complete operational records.", style="ListNumber"))

    # 5. Attendance and service hours
    body.append(make_p("5. Attendance and service hours", style="Heading1"))
    body.append(make_p("Authorized coordinator records manual attendance during or immediately after activity session.", style="ListNumber"))
    body.append(make_p("Approved attendance triggers service-hour calculations into distinct ledgers (NSS hours vs MY Bharat hours).", style="ListNumber"))
    body.append(make_p("CRITICAL: Joint events credit hours according to confirmed formula without double-counting across ledgers.", style="ListNumber"))
    body.append(make_p("Volunteer views disaggregated breakdown: NSS Approved Hours, MY Bharat Approved Hours, and Combined Verified Hours.", style="ListNumber"))
    body.append(make_p("Discrepancies reported through support; only authorized admins/coordinators make audited corrections in attendance_change_log.", style="ListNumber"))

    # 6. Reports/media
    body.append(make_p("6. Reports and media workflow", style="Heading1"))
    body.append(make_p("Authorized team member submits activity report and high-resolution photographs with consent references.", style="ListNumber"))
    body.append(make_p("Assets remain strictly private in Pending Review state.", style="ListNumber"))
    body.append(make_p("Administrator reviews content for accuracy, photo consent and institutional appropriateness.", style="ListNumber"))
    body.append(make_p("Only approved media can be tagged to public gallery albums or published in event summaries.", style="ListNumber"))

    # 7. Certificate flow
    body.append(make_p("7. Certificate flow", style="Heading1"))
    body.append(make_p("System calculates potential eligibility from verified attendance records against configured benchmarks.", style="ListNumber"))
    body.append(make_p("Faculty / Programme Officer conducts manual review against official institutional criteria.", style="ListNumber"))
    body.append(make_p("Issuance approved and digitally signed/generated; certificate linked to volunteer account.", style="ListNumber"))
    body.append(make_p("Volunteer views and downloads personal certificate; no public certificate verification portal or QR workflow at launch.", style="ListNumber"))

    # 8. Tasks and meetings
    body.append(make_p("8. Tasks and meetings", style="Heading1"))
    body.append(make_p("Authorized leads assign tasks to Core Team members across NSS and MY Bharat sub-wings.", style="ListBullet"))
    body.append(make_p("Assignees update progress, post comments and attach files within access-controlled boundaries.", style="ListBullet"))
    body.append(make_p("Meeting schedule, agenda and confidential minutes recorded; meeting attendance does not automatically credit service hours.", style="ListBullet"))

    # 9. Content publishing
    body.append(make_p("9. Content publishing", style="Heading1"))
    body.append(make_p("Website Admin creates or edits draft content for public pages (including MY Bharat page).", style="ListNumber"))
    body.append(make_p("Private desktop/mobile preview allows verification before release.", style="ListNumber"))
    body.append(make_p("Institutional approval recorded; publisher publishes with automated version history and rollback capability.", style="ListNumber"))

    # 10. States and edge cases
    body.append(make_p("10. State models and edge cases", style="Heading1"))
    state_data = [
        ["Object", "States / Behavior"],
        ["Application", "Submitted -> Pending Review -> Approved / Rejected; later: Suspended, Inactive, Withdrawn, Completed/Alumni."],
        ["Event", "Draft -> Submitted for Review -> Approved -> Published -> Completed or Cancelled."],
        ["Registration", "Registered or Cancelled; capacity and deadline enforced atomically."],
        ["Attendance", "Recorded -> Approved; corrections strictly by authorized admin with audit log."],
        ["Media / Report", "Private Pending Review -> Approved/Published or Rejected/Needs Revision -> Archived."],
        ["Certificate", "Potentially Eligible -> Pending Review -> Approved / Rejected -> Issued."],
        ["Task", "To Do -> In Progress -> Submitted for Review -> Completed / Needs Revision; overdue derived."],
        ["Support Ticket", "Open -> In Progress -> Waiting for Response -> Resolved."],
        ["Edge: Full Event", "Reject registration transactionally; display closed status banner."],
        ["Edge: Email Fail", "Track delivery status separately; never claim email delivery succeeded if unconfirmed."],
        ["Edge: Joint Hours", "Prevent double allocation; hold joint calculations if crediting rule is pending confirmation."]
    ]
    body.append(make_table(state_data, [2800, 6700]))

    return ET.tostring(doc, encoding='utf-8', xml_declaration=True)

if __name__ == '__main__':
    xml_bytes = build_web_flow()
    update_docx_archive("docs/03_Application_Web_Flow_NSS_VIIT_A.docx", xml_bytes)
