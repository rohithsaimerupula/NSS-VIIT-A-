import zipfile
import xml.etree.ElementTree as ET
import sys
import codecs

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def dump_file(path):
    print("=" * 60)
    print("DUMP:", path)
    print("=" * 60)
    with zipfile.ZipFile(path) as z:
        xml_content = z.read('word/document.xml')
        root = ET.fromstring(xml_content)
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        body = root.find('w:body', ns)
        for i, child in enumerate(body):
            tag = child.tag.split('}')[-1]
            texts = [t.text for t in child.findall('.//w:t', ns) if t.text]
            txt = ''.join(texts).strip()
            if tag == 'tbl':
                rows = child.findall('.//w:tr', ns)
                print(f"[{i:02d}] <TABLE ({len(rows)} rows)>")
                for r_idx, r in enumerate(rows):
                    cells = r.findall('.//w:tc', ns)
                    cell_texts = [''.join([t.text for t in c.findall('.//w:t', ns) if t.text]).strip() for c in cells]
                    print(f"     row {r_idx}: {' | '.join(cell_texts)}")
            elif tag == 'p':
                if txt:
                    pStyle = child.find('.//w:pStyle', ns)
                    s_name = pStyle.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val', '') if pStyle is not None else ''
                    print(f"[{i:02d}] <P style='{s_name}'>: {txt}")

if __name__ == '__main__':
    for p in sys.argv[1:]:
        dump_file(p)
