import xml.etree.ElementTree as ET
import sys
from docx_updater_base import make_p, make_table, update_docx_archive, NS_W

def build_plan():
    doc = ET.Element(f"{{{NS_W}}}document")
    body = ET.Element(f"{{{NS_W}}}body")
    doc.append(body)

    # Document Header
    body.append(make_p("NSS VIIT (A)"))
    body.append(make_p("Implementation Plan", style="Title"))
    body.append(make_p("Phases, workstreams, testing, risk management and launch readiness (Integrated with MY Bharat)"))
    body.append(make_p("DESIGN PRINCIPLE  Extraordinary visual craft, purposeful motion, institutional trust and accessible interaction."))

    # Doc Control Table
    control_data = [
        ["Document control", "Value"],
        ["ID", "DOC-06"],
        ["Version", "2.0 — integrated baseline (with MY Bharat expansion)"],
        ["Project", "NSS VIIT (A) — complete website and digital platform"],
        ["Status", "Requirements baseline; not an implementation or testing claim"],
        ["Approval", "Review by both primary NSS administrators and college-authorized authority where applicable"]
    ]
    body.append(make_table(control_data, [3000, 6500]))

    # 1. Delivery approach
    body.append(make_p("1. Delivery approach", style="Heading1"))
    body.append(make_p("Implement in controlled phases from a clean project. Confirm institutional and policy questions before locking providers or enabling registration. Incorporate MY Bharat natively into public pages, multi-track registration, event management and attendance auditing. Launch only after critical workflows, security, accessibility, recovery and joint approvals pass."))

    # 2. Delivery phases
    body.append(make_p("2. Delivery phases", style="Heading1"))
    phases_data = [
        ["Phase", "Work Description", "Exit Criteria"],
        ["0. Governance", "Confirm domain, eligibility fields, joint-event hour formula, certificate rules, MY Bharat cell intake rules, privacy.", "Open questions and responsible authorities documented."],
        ["1. Architecture & Design", "Confirm React + TS + Tailwind tokens; define RBAC, environments, routes (/my-bharat), and incorporate Stitch UI.", "TRD, Stitch design system and token baseline reviewed."],
        ["2. Public Website", "Build Home, About NSS, MY Bharat (dedicated page), Events, Calendar, Gallery, Team (28 members), Volunteer Info, Resources, Contact.", "Responsive public pages; only approved content; registration closed banner visible."],
        ["3. Identity & Permissions", "Authentication, role model (including MY Bharat Coordinator & PO Reviewer), admin MFA, session revocation.", "Positive and negative authorization tests pass."],
        ["4. Multi-Track Registration", "Unified registration flow (NSS/Bharat/Both), admin review queues, account statuses, alumni history.", "Registration remains disabled by default; lifecycle tests pass."],
        ["5. Events, Attendance & Hours", "Event proposals (NSS/Bharat/Joint), capacity rules, manual attendance, audit log, distinct hour ledgers (no double-counting).", "No overbooking; audited corrections; zero double-counting verified."],
        ["6. Collaboration Workspaces", "Core Team tasks, restricted attachments, meeting minutes, notices, support tickets, confidential reports.", "Permissions and notification delivery tests pass."],
        ["7. Media, Reports & Certs", "Media review workflow, album curation, PDF exports, annual reports, certificate approval workflows.", "No private leakage; exports and issuance tested."],
        ["8. Hardening & Quality", "Security audit, WCAG 2.2 AA accessibility, performance profiling, backup restore test.", "Critical findings resolved; restore drill evidence recorded."],
        ["9. Private Preview", "Load approved content; test with primary NSS admins, MY Bharat coordinators, and college authority on mobile/desktop.", "Both admins and college reviewer approve or record blockers."],
        ["10. Launch & Handover", "Joint approval, production deployment, monitoring and runbook transfer.", "Two maintainers trained; rollback available; registration opens only by separate authorized decision."]
    ]
    body.append(make_table(phases_data, [2000, 4800, 2700]))

    # 3. Workstreams
    body.append(make_p("3. Workstreams", style="Heading1"))
    body.append(make_p("Product & Content: approved copy, official resources, event data, bios (24 NSS, 4 Bharat), media consent and reports.", style="ListBullet"))
    body.append(make_p("Design: tokens, responsive layouts, motion system, Stitch UI incorporation, accessibility and dashboard IA.", style="ListBullet"))
    body.append(make_p("Frontend: pages, dedicated MY Bharat landing, dashboards, forms, filters, calendar, animations and UI states.", style="ListBullet"))
    body.append(make_p("Backend & Data: schema, RLS policies, multi-track authorization, workflow rules, audit and reporting.", style="ListBullet"))
    body.append(make_p("Operations: domain, environments, secrets, monitoring, backups, restore and incident runbooks.", style="ListBullet"))
    body.append(make_p("QA: unit, integration, e2e, permissions, accessibility, device and performance testing.", style="ListBullet"))

    # 4. Testing strategy
    body.append(make_p("4. Testing strategy", style="Heading1"))
    body.append(make_p("Unit tests: service-hour calculation (verifying zero double-counting for joint events), multi-track filtering, state transitions and permissions.", style="ListBullet"))
    body.append(make_p("Integration tests: multi-track registration, dual approval queues, attendance corrections, notifications, media review and certificates.", style="ListBullet"))
    body.append(make_p("End-to-end tests: user journeys across public site (including /my-bharat) and all private workspaces.", style="ListBullet"))
    body.append(make_p("Negative authorization tests: MY Bharat coordinator attempting to edit NSS unit records; volunteer attempting peer record access; revoked sessions.", style="ListBullet"))
    body.append(make_p("Concurrency tests: event registration capacity limits under load.", style="ListBullet"))
    body.append(make_p("Accessibility & Performance: WCAG 2.2 AA automated/manual checks; mobile responsiveness on mid-range devices; reduced motion tests.", style="ListBullet"))
    body.append(make_p("Email failure & recovery: transactional retry tests; never assume delivery without confirmation.", style="ListBullet"))

    # 5. UI animation checklist
    body.append(make_p("5. UI animation checklist", style="Heading1"))
    body.append(make_p("Use reusable motion tokens/variants; avoid one-off effects everywhere.", style="ListBullet"))
    body.append(make_p("Hero carousel: pause/play, previous/next, indicators, keyboard control and reduced-motion fallback.", style="ListBullet"))
    body.append(make_p("Navigation drawer: focus management, Escape key listener, backdrop close and body scroll lock.", style="ListBullet"))
    body.append(make_p("Prefer transform and opacity; avoid layout recalculations and heavy scroll listeners.", style="ListBullet"))
    body.append(make_p("Test on mid-range mobile devices; critical actions must remain immediate without animation delays.", style="ListBullet"))

    # 6. Launch checklist
    body.append(make_p("6. Launch checklist", style="Heading1"))
    body.append(make_p("Official domain approved; ownership and handover documented.", style="ListBullet"))
    body.append(make_p("Primary administrators use MFA; recovery procedures verified.", style="ListBullet"))
    body.append(make_p("Role matrix and revoked-session behavior tested across all roles.", style="ListBullet"))
    body.append(make_p("All published content, photos, contacts and resources approved; zero fabricated content.", style="ListBullet"))
    body.append(make_p("Volunteer registration stays closed until separately authorized.", style="ListBullet"))
    body.append(make_p("Roster verification: 28 Core Team members confirmed (24 NSS, 4 MY Bharat) prior to team page release.", style="ListBullet"))
    body.append(make_p("Service-hour calculation rules and joint-event crediting formula confirmed by Programme Officer.", style="ListBullet"))
    body.append(make_p("Backup and restore test succeeds; actual provider limits verified.", style="ListBullet"))
    body.append(make_p("Both primary admins and college authority grant explicit written launch approval.", style="ListBullet"))
    body.append(make_p("Two technical maintainers trained and runbooks handed over.", style="ListBullet"))

    # 7. Risks and mitigations
    body.append(make_p("7. Risks and mitigations", style="Heading1"))
    risk_data = [
        ["Risk", "Mitigation Strategy"],
        ["Double-counting joint event hours", "Strictly separate hour ledgers (nss_hours vs my_bharat_hours); enforce calculation rules in server-side workflows."],
        ["Brittle team count constraint", "Use administrative pre-publish validation checks instead of hard database constraints to prevent editing deadlocks."],
        ["Unverified institutional policy", "Preserve open questions as 'Pending Institutional Confirmation'; obtain written sign-off before configuring thresholds."],
        ["Accidental registration opening", "Enforce feature flag defaulting to false; show persistent closed banner in UI."],
        ["Excessive admin privilege", "Strict least-privilege RBAC; separate Website Admin, Operations Admin, and MY Bharat Coordinator roles."]
    ]
    body.append(make_table(risk_data, [3500, 6000]))

    # 8. Handover package
    body.append(make_p("8. Handover package", style="Heading1"))
    body.append(make_p("Source repository and release workflow.", style="ListBullet"))
    body.append(make_p("Provider/account inventory, environment setup and secret rotation instructions.", style="ListBullet"))
    body.append(make_p("Database restore runbooks and incident response procedures.", style="ListBullet"))
    body.append(make_p("Data dictionary, permission matrix, test evidence and signed launch approvals.", style="ListBullet"))

    # 9. Completion definition
    body.append(make_p("9. Completion definition", style="Heading1"))
    body.append(make_p("Launch readiness requires complete implementation of approved NSS and MY Bharat features, passing critical security and accessibility tests, verified private-data boundaries, demonstrated backup restoration, approved authentic content, and recorded joint launch approval. Volunteer registration opens exclusively by separate authorized decision."))

    return ET.tostring(doc, encoding='utf-8', xml_declaration=True)

if __name__ == '__main__':
    xml_bytes = build_plan()
    update_docx_archive("docs/06_Implementation_Plan_NSS_VIIT_A.docx", xml_bytes)
