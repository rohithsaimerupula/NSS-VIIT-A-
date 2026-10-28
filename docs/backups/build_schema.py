import xml.etree.ElementTree as ET
import sys
from docx_updater_base import make_p, make_table, update_docx_archive, NS_W

def build_schema():
    doc = ET.Element(f"{{{NS_W}}}document")
    body = ET.Element(f"{{{NS_W}}}body")
    doc.append(body)

    # Document Header
    body.append(make_p("NSS VIIT (A)"))
    body.append(make_p("Backend Schema & Data Model", style="Title"))
    body.append(make_p("Logical entities, relationships, state transitions and integrity rules (Integrated with MY Bharat)"))
    body.append(make_p("DESIGN PRINCIPLE  Extraordinary visual craft, purposeful motion, institutional trust and accessible interaction."))

    # Doc Control Table
    control_data = [
        ["Document control", "Value"],
        ["ID", "DOC-05"],
        ["Version", "2.0 — integrated baseline (with MY Bharat expansion)"],
        ["Project", "NSS VIIT (A) — complete website and digital platform"],
        ["Status", "Requirements baseline; not an implementation or testing claim"],
        ["Approval", "Review by both primary NSS administrators and college-authorized authority where applicable"]
    ]
    body.append(make_table(control_data, [3000, 6500]))

    # 1. Purpose
    body.append(make_p("1. Purpose", style="Heading1"))
    body.append(make_p("This is a logical schema proposal, not executable SQL. Final column types, indexes, auth references, retention rules and migrations will be established in technical planning. Managed PostgreSQL is preferred. Incorporates MY Bharat extensions while maintaining distinct ledgers and non-brittle roster checks."))

    # 2. Modeling principles
    body.append(make_p("2. Modeling principles", style="Heading1"))
    body.append(make_p("Separate authentication identity from application profile, track affiliation and role assignments.", style="ListBullet"))
    body.append(make_p("Distinct separation of concerns: volunteer membership, initiative affiliation, team designation (NSS vs Bharat) and administrative permissions are separate attributes.", style="ListBullet"))
    body.append(make_p("Preserve historical service and role records across academic years; never wipe audit logs upon year rollover.", style="ListBullet"))
    body.append(make_p("Derive service hours strictly from approved attendance into separate ledgers (nss_hours vs my_bharat_hours). Never double-count joint event hours.", style="ListBullet"))
    body.append(make_p("Roster validation: administrative check verifies 28 Core Team members (24 NSS, 4 MY Bharat) prior to publication; no brittle database constraints.", style="ListBullet"))
    body.append(make_p("Store physical files in private object storage; database stores metadata and signed access keys.", style="ListBullet"))

    # 3. Core entities
    body.append(make_p("3. Core entities (Expanded for MY Bharat)", style="Heading1"))
    entities_data = [
        ["Entity", "Key Fields & Purpose"],
        ["auth_identity", "Provider user ID and verified-email state; credentials remain strictly with auth provider."],
        ["user_profile", "user_id, name, registration_number, college/contact email, department, year, track (nss_only, my_bharat_only, both), status."],
        ["role / permission", "Role key (main_website_admin, nss_operations_admin, my_bharat_coordinator, faculty_po_reviewer, core_team, volunteer, alumni); permission key/module/action."],
        ["user_role_assignment", "user_id, role_id, academic_year_id, valid dates, grantor, reason, status."],
        ["core_team_roster", "academic_year_id, user_id, designation_type (nss_wing, my_bharat_cell), role_title, display_order, is_published."],
        ["volunteer_application", "user_id/email, registration_number, applied_track (nss_only, my_bharat_only, both), status, reviewer_id, decision_notes, timestamps."],
        ["event", "title, description, initiative_type (nss, my_bharat, joint), category, times, venue, audience, capacity, registration_window, status, approver_ids."],
        ["event_change_history", "event_id, actor_id, action, before_after_diff, reason, timestamp."],
        ["event_registration", "event_id, user_id, status, registered_at, cancelled_at; unique constraint on (event_id, user_id)."],
        ["programme / activity", "programme_id, dates, initiative_type, year, and linked dated activities."],
        ["attendance_record", "activity_id/event_id, user_id, status, recorded_by, approved_by, recorded_at, correction_reason."],
        ["attendance_change_log", "attendance_id, actor_id, prior_state, new_state, reason, timestamp."],
        ["service_hour_entry", "user_id, attendance_id, event_id, hours, hour_category (nss, my_bharat), is_joint_event, rule_version, calculated_at."],
        ["certificate_type / record", "type, policy, template_version; recipient_id, period, eligibility_snapshot, reviewer_id, issue_timestamp, file_key."],
        ["task / task_assignee", "task_id, initiative_tag, assignees, priority, deadline, status, reviewer_id."],
        ["meeting / attendance", "schedule, agenda, minutes, initiative_scope, participant attendance logs."],
        ["announcement", "title, body, initiative_scope (nss, my_bharat, all), drafter_id, approver_id, published_at, expires_at."],
        ["media_asset", "storage_key, mime_type, size, uploader_id, initiative_tag, review_state, approver_id, photo_consent_ref."],
        ["gallery_album / item", "album_id, initiative_tag, year, title, ordered approved media references."],
        ["resource", "title, description, category, initiative_tag, media_key, visibility, version."],
        ["content_page / version", "page_key (includes /my-bharat), draft/published content, editor_id, version, published_at."],
        ["audit_log", "actor_id, action, entity_name, entity_id, timestamp, reason, metadata."]
    ]
    body.append(make_table(entities_data, [2800, 6700]))

    # 4. Key relationships
    body.append(make_p("4. Key relationships", style="Heading1"))
    body.append(make_p("Users have time-bounded role assignments and an approved track preference (NSS, MY Bharat, or Both).", style="ListBullet"))
    body.append(make_p("Core Team roster entries map to academic years and define designation (24 NSS wing, 4 MY Bharat cell).", style="ListBullet"))
    body.append(make_p("Events are linked to an initiative type (NSS, MY Bharat, Joint); registrations and attendance cascade from events.", style="ListBullet"))
    body.append(make_p("Service-hour entries are generated exclusively from approved attendance records and separated by category to prevent double-counting.", style="ListBullet"))
    body.append(make_p("Tasks, announcements and media assets carry initiative tags to support scoped administrative routing.", style="ListBullet"))

    # 5. State models
    body.append(make_p("5. State models", style="Heading1"))
    body.append(make_p("Application: Submitted -> Pending Review -> Approved / Rejected -> Active -> Suspended / Inactive / Withdrawn / Completed_Alumni.", style="ListBullet"))
    body.append(make_p("Event: Draft -> Submitted for Review -> Approved -> Published -> Completed or Cancelled.", style="ListBullet"))
    body.append(make_p("Attendance: Recorded -> Approved; audited corrections only by Operations Admin or MY Bharat Coordinator.", style="ListBullet"))
    body.append(make_p("Media: Private Pending Review -> Approved / Published or Rejected / Needs Revision -> Archived.", style="ListBullet"))
    body.append(make_p("Certificate: Potentially Eligible -> Pending Review -> Approved / Rejected -> Issued.", style="ListBullet"))

    # 6. Integrity and security
    body.append(make_p("6. Integrity, security and RLS specifications", style="Heading1"))
    body.append(make_p("Row Level Security (RLS) is enabled on all tables: deny by default.", style="ListBullet"))
    body.append(make_p("user_profile: users can select own record; admins can read users matching their purview; public reads only published Core Team bios.", style="ListBullet"))
    body.append(make_p("event: public queries require status = 'published'; authenticated volunteers view published events matching their track or joint events.", style="ListBullet"))
    body.append(make_p("attendance_record: write access strictly restricted to authorized coordinators during recording windows; updates require audit row insertion.", style="ListBullet"))
    body.append(make_p("service_hour_entry: read-only for volunteers; inserted only via trusted server-side workflow upon attendance approval. Direct client manipulation blocked.", style="ListBullet"))
    body.append(make_p("Roster integrity check: administrative validation function verifies 28 total members (24 NSS, 4 Bharat) before setting is_published = true.", style="ListBullet"))

    # 7. Open decisions
    body.append(make_p("7. Pending institutional confirmation", style="Heading1"))
    body.append(make_p("Pending Institutional Confirmation: Exact joint-event crediting formula for dual-track volunteers.", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Official annual hour targets and camp credit rules.", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Certificate templates and criteria for MY Bharat cell participants.", style="ListBullet"))
    body.append(make_p("Pending Institutional Confirmation: Data retention policies for confidential reports and student records.", style="ListBullet"))

    return ET.tostring(doc, encoding='utf-8', xml_declaration=True)

if __name__ == '__main__':
    xml_bytes = build_schema()
    update_docx_archive("docs/05_Backend_Schema_NSS_VIIT_A.docx", xml_bytes)
