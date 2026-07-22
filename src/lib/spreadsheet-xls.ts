// SpreadsheetML (Excel 2003 XML) workbook builder — the dependency-free path to a
// real multi-sheet .xls download. Excel, Numbers, and LibreOffice all open the
// format natively (Excel shows a mild "format doesn't match extension" notice).
// Chosen over SheetJS (.xlsx needs a zip dependency) and CSV (no sheets, no types)
// for the prototype export affordance.
//
// Usage (client script):
//   downloadXls('study-planning-schedule_2029-06.xls', [
//     { name: 'Schedule', columns: [90, 220], rows: [[h('ID'), h('Name')], ['TSK-001', 'Install array']] },
//   ]);

export type XlsCell = string | number | { v: string | number; head?: boolean };

export interface XlsSheet {
  /** Excel sheet-name rules: ≤31 chars, no []:*?/\ — sanitized on build. */
  name: string;
  /** Optional column widths in points, applied left to right. */
  columns?: number[];
  rows: XlsCell[][];
}

/** Convenience: a bold header cell. */
export const h = (v: string | number): XlsCell => ({ v, head: true });

const esc = (s: string): string =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const sheetName = (s: string): string => s.replace(/[[\]:*?/\\]/g, ' ').trim().slice(0, 31) || 'Sheet';

function cellXml(cell: XlsCell): string {
  const { v, head } = typeof cell === 'object' ? cell : { v: cell, head: false };
  const isNum = typeof v === 'number' && Number.isFinite(v);
  const type = isNum ? 'Number' : 'String';
  const style = head ? ' ss:StyleID="head"' : '';
  return `<Cell${style}><Data ss:Type="${type}">${isNum ? v : esc(String(v))}</Data></Cell>`;
}

export function workbookXml(sheets: XlsSheet[]): string {
  const body = sheets
    .map((sheet) => {
      const cols = (sheet.columns ?? [])
        .map((w) => `<Column ss:AutoFitWidth="0" ss:Width="${w}"/>`)
        .join('');
      const rows = sheet.rows
        .map((row) => `<Row>${row.map(cellXml).join('')}</Row>`)
        .join('\n');
      return `<Worksheet ss:Name="${esc(sheetName(sheet.name))}"><Table>${cols}\n${rows}\n</Table></Worksheet>`;
    })
    .join('\n');

  return `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
<Styles>
 <Style ss:ID="head"><Font ss:Bold="1"/><Interior ss:Color="#F1F0EC" ss:Pattern="Solid"/></Style>
</Styles>
${body}
</Workbook>`;
}

/** Build the workbook and trigger a browser download. */
export function downloadXls(filename: string, sheets: XlsSheet[]): void {
  const blob = new Blob([workbookXml(sheets)], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.xls') ? filename : `${filename}.xls`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
