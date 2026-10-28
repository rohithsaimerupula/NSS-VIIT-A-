import os
import zipfile
import shutil
import xml.etree.ElementTree as ET

NS_W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
ET.register_namespace('w', NS_W)

def create_element(name):
    return ET.Element(f"{{{NS_W}}}{name}")

def make_p(text, style=None):
    p = create_element('p')
    if style:
        pPr = create_element('pPr')
        pStyle = create_element('pStyle')
        pStyle.attrib[f"{{{NS_W}}}val"] = style
        pPr.append(pStyle)
        p.append(pPr)
    r = create_element('r')
    t = create_element('t')
    t.text = text
    # Preserve whitespace if needed
    if text.startswith(' ') or text.endswith(' '):
        t.attrib['{http://www.w3.org/XML/1998/namespace}space'] = 'preserve'
    r.append(t)
    p.append(r)
    return p

def make_table(rows_data, col_widths=None):
    tbl = create_element('tbl')
    tblPr = create_element('tblPr')
    tblStyle = create_element('tblStyle')
    tblStyle.attrib[f"{{{NS_W}}}val"] = "TableGrid"
    tblPr.append(tblStyle)
    tblW = create_element('tblW')
    tblW.attrib[f"{{{NS_W}}}type"] = "auto"
    tblW.attrib[f"{{{NS_W}}}w"] = "0"
    tblPr.append(tblW)
    jc = create_element('jc')
    jc.attrib[f"{{{NS_W}}}val"] = "center"
    tblPr.append(jc)
    tblLook = create_element('tblLook')
    tblLook.attrib[f"{{{NS_W}}}firstRow"] = "1"
    tblLook.attrib[f"{{{NS_W}}}lastRow"] = "0"
    tblLook.attrib[f"{{{NS_W}}}firstColumn"] = "1"
    tblLook.attrib[f"{{{NS_W}}}lastColumn"] = "0"
    tblLook.attrib[f"{{{NS_W}}}noHBand"] = "0"
    tblLook.attrib[f"{{{NS_W}}}noVBand"] = "1"
    tblLook.attrib[f"{{{NS_W}}}val"] = "04A0"
    tblPr.append(tblLook)
    tbl.append(tblPr)

    # tblGrid
    tblGrid = create_element('tblGrid')
    num_cols = len(rows_data[0]) if rows_data else 0
    if not col_widths or len(col_widths) != num_cols:
        col_widths = [4500] * num_cols
    for w in col_widths:
        gridCol = create_element('gridCol')
        gridCol.attrib[f"{{{NS_W}}}w"] = str(w)
        tblGrid.append(gridCol)
    tbl.append(tblGrid)

    for r_idx, row in enumerate(rows_data):
        tr = create_element('tr')
        trPr = create_element('trPr')
        tr.append(trPr)
        for c_idx, cell_text in enumerate(row):
            tc = create_element('tc')
            tcPr = create_element('tcPr')
            tcW = create_element('tcW')
            tcW.attrib[f"{{{NS_W}}}type"] = "dxa"
            tcW.attrib[f"{{{NS_W}}}w"] = str(col_widths[c_idx])
            tcPr.append(tcW)
            tc.append(tcPr)

            # Split lines in cell text if any
            lines = cell_text.split('\n')
            for line in lines:
                p = create_element('p')
                r = create_element('r')
                if r_idx == 0:
                    rPr = create_element('rPr')
                    b = create_element('b')
                    rPr.append(b)
                    r.append(rPr)
                t = create_element('t')
                t.text = line
                if line.startswith(' ') or line.endswith(' '):
                    t.attrib['{http://www.w3.org/XML/1998/namespace}space'] = 'preserve'
                r.append(t)
                p.append(r)
                tc.append(p)
            tr.append(tc)
        tbl.append(tr)
    return tbl

def update_docx_archive(docx_path, new_xml_bytes):
    temp_zip = docx_path + ".tmp.zip"
    with zipfile.ZipFile(docx_path, 'r') as zin:
        with zipfile.ZipFile(temp_zip, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                if item.filename == 'word/document.xml':
                    zout.writestr(item, new_xml_bytes)
                else:
                    zout.writestr(item, zin.read(item.filename))
    os.replace(temp_zip, docx_path)
    print(f"Updated {docx_path} successfully.")
