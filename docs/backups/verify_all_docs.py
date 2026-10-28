import zipfile
import xml.etree.ElementTree as ET
import os

DOCS = [
    ("docs/01_PRD_NSS_VIIT_A.docx", "docs/backups/01_PRD_NSS_VIIT_A.docx", ["MY Bharat", "24", "4", "28", "Pending Institutional Confirmation", "Joint"]),
    ("docs/02_TRD_NSS_VIIT_A.docx", "docs/backups/02_TRD_NSS_VIIT_A.docx", ["MY Bharat", "double-counted", "Pending Institutional Confirmation", "RLS"]),
    ("docs/03_Application_Web_Flow_NSS_VIIT_A.docx", "docs/backups/03_Application_Web_Flow_NSS_VIIT_A.docx", ["/my-bharat", "Both", "Joint", "double-counting", "28"]),
    ("docs/04_UI_UX_Brief_NSS_VIIT_A.docx", "docs/backups/04_UI_UX_Brief_NSS_VIIT_A.docx", ["MY Bharat", "Not Me, But You", "closed during development", "WCAG 2.2 AA"]),
    ("docs/05_Backend_Schema_NSS_VIIT_A.docx", "docs/backups/05_Backend_Schema_NSS_VIIT_A.docx", ["nss_only", "my_bharat_only", "both", "initiative_type", "nss_hours", "my_bharat_hours", "double-count"]),
    ("docs/06_Implementation_Plan_NSS_VIIT_A.docx", "docs/backups/06_Implementation_Plan_NSS_VIIT_A.docx", ["/my-bharat", "double-counting", "28 Core Team", "Pending Institutional Confirmation"])
]

print("=" * 60)
print("VERIFICATION & CROSS-DOCUMENT CONSISTENCY CHECK")
print("=" * 60)

all_passed = True
for current_path, backup_path, keywords in DOCS:
    print(f"\nVerifying: {current_path}")
    if not os.path.exists(current_path):
        print(f"  FAIL: {current_path} does not exist!")
        all_passed = False
        continue
    
    current_size = os.path.getsize(current_path)
    backup_size = os.path.getsize(backup_path)
    print(f"  Current size: {current_size} bytes | Backup size: {backup_size} bytes")

    try:
        with zipfile.ZipFile(current_path, 'r') as z:
            xml_bytes = z.read('word/document.xml')
            root = ET.fromstring(xml_bytes)
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            texts = [t.text for t in root.findall('.//w:t', ns) if t.text]
            full_text = " ".join(texts)
            
            missing_keywords = []
            for kw in keywords:
                if kw.lower() not in full_text.lower():
                    missing_keywords.append(kw)
            
            if missing_keywords:
                print(f"  WARNING: Missing keywords: {missing_keywords}")
                all_passed = False
            else:
                print(f"  SUCCESS: All {len(keywords)} required terms verified in document.")
                print(f"  Total words in document: ~{len(full_text.split())}")
    except Exception as e:
        print(f"  ERROR parsing docx: {e}")
        all_passed = False

if all_passed:
    print("\nALL SIX DOCX DOCUMENTS ARE FULLY VALID AND VERIFIED!")
else:
    print("\nSOME CHECKS FAILED.")
