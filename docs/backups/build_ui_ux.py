import xml.etree.ElementTree as ET
import sys
from docx_updater_base import make_p, make_table, update_docx_archive, NS_W

def build_ui_ux():
    doc = ET.Element(f"{{{NS_W}}}document")
    body = ET.Element(f"{{{NS_W}}}body")
    doc.append(body)

    # Document Header
    body.append(make_p("NSS VIIT (A)"))
    body.append(make_p("UI/UX Design Brief", style="Title"))
    body.append(make_p("Visual identity, extraordinary animation system, dashboards and accessibility standards (Integrated with MY Bharat)"))
    body.append(make_p("DESIGN PRINCIPLE  Extraordinary visual craft, purposeful motion, institutional trust and accessible interaction."))

    # Doc Control Table
    control_data = [
        ["Document control", "Value"],
        ["ID", "DOC-04"],
        ["Version", "2.0 — integrated baseline (with MY Bharat expansion)"],
        ["Project", "NSS VIIT (A) — complete website and digital platform"],
        ["Status", "Requirements baseline; not an implementation or testing claim"],
        ["Approval", "Review by both primary NSS administrators and college-authorized authority where applicable"]
    ]
    body.append(make_table(control_data, [3000, 6500]))

    # 1. Experience vision
    body.append(make_p("1. Experience vision", style="Heading1"))
    body.append(make_p("Create a premium editorial experience that feels warm, human, cinematic and institutionally credible. The platform celebrates NSS VIIT (A) as the primary identity while seamlessly featuring MY Bharat youth initiatives with dignity and distinction. Memorability flows from exquisite typography, authentic approved imagery, layout rhythm and art-directed purposeful motion."))

    # 2. Design tokens
    body.append(make_p("2. Design tokens", style="Heading1"))
    tokens_data = [
        ["Token", "Value", "Guidance"],
        ["Warm ivory", "#F5F1E8", "Primary page background and editorial surfaces."],
        ["Forest green", "#1A3C29", "Brand color, navigation emphasis and primary actions."],
        ["Champagne gold", "#C3A66B", "Restrained accent for highlights, rules, borders and badges."],
        ["Charcoal", "#292D2A", "Primary text and strong contrast."],
        ["White cards", "#FFFFFF", "Forms, dashboards and content surfaces."],
        ["Typography", "Editorial serif headings (Playfair/Georgia) + sans-serif body (Inter/system-ui).", "Clear editorial rhythm with robust legibility."],
        ["Badges & Affiliation", "Contextual pill badges", "NSS (Forest/Ivory), MY Bharat (Gold/Navy accent), Joint (Dual accent)."]
    ]
    body.append(make_table(tokens_data, [2400, 2600, 4500]))

    # 3. Public interface
    body.append(make_p("3. Public interface", style="Heading1"))

    # 3.1
    body.append(make_p("3.1 Header and navigation", style="Heading2"))
    body.append(make_p("Compact sticky header (76-84 px) with official NSS and college logos aligned proportionally with 'NSS VIIT (A)'.", style="ListBullet"))
    body.append(make_p("Never redraw, recolor, stretch or crop official emblems.", style="ListBullet"))
    body.append(make_p("Desktop navigation: Home, About NSS, MY Bharat (dedicated page), Events, Gallery, Our Team, and Menu drawer toggle.", style="ListBullet"))
    body.append(make_p("Drawer supports Escape key, backdrop dismiss, focus management and body scroll lock without layout shift.", style="ListBullet"))

    # 3.2
    body.append(make_p("3.2 Hero and homepage order", style="Heading2"))
    body.append(make_p("Hero headline: 'Not Me, But You.'", style="ListBullet"))
    body.append(make_p("Supporting copy: 'Students coming together to serve communities, take collective action, and create meaningful change.'", style="ListBullet"))
    body.append(make_p("Primary CTAs: 'Explore Activities' and 'Discover Our Mission'.", style="ListBullet"))
    body.append(make_p("Homepage exact section sequence:", style="ListBullet"))
    body.append(make_p("1. Hero Carousel -> 2. About NSS -> 3. Featured Events (NSS & MY Bharat) -> 4. Activities & Impact -> 5. Gallery -> 6. Core Team Highlight -> 7. Announcements -> 8. Volunteer CTA (closed state) -> 9. Contact & Footer.", style="ListBullet"))

    # 3.3
    body.append(make_p("3.3 Dedicated MY Bharat section (/my-bharat)", style="Heading2"))
    body.append(make_p("Dedicated visual landing within the primary NSS VIIT (A) brand framework.", style="ListBullet"))
    body.append(make_p("Features: national vision linkage, cell leadership, pillar cards (Youth Engagement, Skill Building, Community Missions), and active cell initiatives feed.", style="ListBullet"))

    # 4. Animation direction
    body.append(make_p("4. Extraordinary animation direction", style="Heading1"))
    anim_data = [
        ["Pattern", "Visual behavior", "Rules"],
        ["Hero transition", "Cinematic crossfade with restrained directional reveal; short text stagger.", "Pause/manual controls; no rapid auto-advance; reduced-motion alternative."],
        ["Editorial reveal", "Opacity + small vertical shift as sections enter view.", "Restrained, one-time; content never depends on motion completion."],
        ["Subtle parallax", "Very slight depth movement in hero layers.", "Optional; disable on low-power devices and reduced-motion."],
        ["Card interaction", "Small elevation or gold accent-border shift on hover/focus.", "No hover-only information; full keyboard focus parity."],
        ["Navigation drawer", "Smooth opacity/translate with backdrop blur.", "Short duration (<280ms); focus trap and Escape listener."],
        ["Metric / Progress", "Count-up animation only after verified data loads.", "Never animate unverified/mock statistics; keep text accessible."],
        ["Task / Status", "Subtle state transitions.", "No flashing; never rely on color alone for status."]
    ]
    body.append(make_table(anim_data, [2200, 3600, 3700]))

    # 5. Motion system rules
    body.append(make_p("5. Motion system rules", style="Heading1"))
    body.append(make_p("Duration vocabulary: micro 120-200ms; drawer/modal 180-280ms; editorial reveals 350-650ms.", style="ListBullet"))
    body.append(make_p("Hardware acceleration: prefer opacity and transform properties; avoid layout recalculations.", style="ListBullet"))
    body.append(make_p("Respect prefers-reduced-motion: replace transitions with simple fades or instant cuts.", style="ListBullet"))
    body.append(make_p("Prohibitions: no scroll-jacking, forced video intros, cursor-following effects or autoplaying audio.", style="ListBullet"))

    # 6. Dashboard systems
    body.append(make_p("6. Dashboard visual systems", style="Heading1"))
    dash_data = [
        ["Dashboard", "Layout & Content Focus"],
        ["Website Admin", "Overview of page drafts, preview, publishing queue, MY Bharat section content, team profile manager and version history."],
        ["Operations Admin", "Multi-track application review (NSS & Both), event capacity monitors, manual attendance log, NSS hour audit."],
        ["MY Bharat Coordinator (Proposed)", "MY Bharat application queue, cell event management, attendance sheets and cell youth reports."],
        ["Faculty / PO Reviewer (Proposed)", "High-level audit: Joint event review, dual-track application validation, certificate eligibility sign-offs."],
        ["Core Team (28 Members)", "Assigned operational tasks, event proposals, draft reports and photo upload forms."],
        ["Volunteer Portal", "Mobile-first view: track affiliation, upcoming events, separate hour breakdown (NSS vs Bharat), support and personal certificates."]
    ]
    body.append(make_table(dash_data, [3000, 6500]))

    # 7. Forms and feedback
    body.append(make_p("7. Forms and feedback standards", style="Heading1"))
    body.append(make_p("Registration form: clear track selector (NSS only, MY Bharat only, Both) with descriptive expectation copy.", style="ListBullet"))
    body.append(make_p("Explicit banner: 'Volunteer registration is closed during development.'", style="ListBullet"))
    body.append(make_p("Every form includes visible labels, inline validation, and server error messages.", style="ListBullet"))
    body.append(make_p("Destructive actions require explicit confirmation modals.", style="ListBullet"))
    body.append(make_p("Never expose database error stacks or internal identifiers.", style="ListBullet"))

    # 8. Accessibility and responsiveness
    body.append(make_p("8. Accessibility and responsive standards", style="Heading1"))
    body.append(make_p("Target: WCAG 2.2 AA compliance across all public pages and private portals.", style="ListBullet"))
    body.append(make_p("Contrast: strict contrast ratios for Charcoal text (#292D2A) and Forest Green (#1A3C29) on Warm Ivory (#F5F1E8).", style="ListBullet"))
    body.append(make_p("Keyboard navigation: visible 2px focus ring; logical tab ordering; no mouse-only actions.", style="ListBullet"))
    body.append(make_p("Mobile touch targets: minimum 44x44 px for all buttons and interactive elements.", style="ListBullet"))

    # 9. Photography policy
    body.append(make_p("9. Photography policy and authenticity", style="Heading1"))
    body.append(make_p("Only authentic, approved photographs of NSS VIIT (A) and campus youth activities are permitted.", style="ListBullet"))
    body.append(make_p("Identifiable individuals require recorded photo consent references.", style="ListBullet"))
    body.append(make_p("Never use AI-generated images or stock photos depicting fabricated events or team members.", style="ListBullet"))

    return ET.tostring(doc, encoding='utf-8', xml_declaration=True)

if __name__ == '__main__':
    xml_bytes = build_ui_ux()
    update_docx_archive("docs/04_UI_UX_Brief_NSS_VIIT_A.docx", xml_bytes)
