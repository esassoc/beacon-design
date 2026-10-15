// Daily Monitoring Report → PDF (the regulator copy).
//
// Builds the PDF from the SAME ReportModel the on-screen preview renders, so what the
// reviewer saw is what ships. Vector text + jspdf-autotable tables; the invented SVG
// artwork (agency seal, firm mark, field photos) is rasterized through an offscreen
// canvas because jsPDF's addImage takes raster data, not SVG.
//
// Never includes the preview's "edited in Beacon" highlight — the regulator copy is clean.
//
// jspdf + jspdf-autotable are loaded with dynamic import() so they only download when
// the user actually generates a report. Framework-free; browser-only (needs canvas).
//
// Colors below are print ink for the PDF page (jsPDF takes RGB, not CSS custom
// properties) — they never style UI chrome.

import type { ReportModel } from './dmr-review-store';
import { AGENCY_SEAL_SVG, FIRM_MARK_SVG, photoSvg, svgDataUri } from './dmr-report-art';

// Letter portrait, in points.
const PAGE_W = 612;
const PAGE_H = 792;
const MARGIN_X = 54;
const CONTENT_W = PAGE_W - MARGIN_X * 2;
/** Content starts below the letterhead on every page. */
const CONTENT_TOP = 138;
const CONTENT_BOTTOM = PAGE_H - 54;

const INK: [number, number, number] = [32, 32, 32];
const INK_MUTED: [number, number, number] = [90, 90, 90];
const RULE: [number, number, number] = [170, 170, 170];
const LABEL_FILL: [number, number, number] = [240, 240, 240];

// jsPDF's standard serif. The preview uses the theme's document voice (Besley); the
// PDF uses Times rather than embedding a webfont binary into the bundle.
const SERIF = 'times';

/** Rasterize an SVG string to a PNG/JPEG data URL at the given pixel size. */
async function rasterize(svg: string, width: number, height: number, type: 'image/png' | 'image/jpeg'): Promise<string> {
  const img = new Image();
  img.decoding = 'async';
  img.src = svgDataUri(svg);
  await img.decode();
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  if (type === 'image/jpeg') {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
  }
  ctx.drawImage(img, 0, 0, width, height);
  return canvas.toDataURL(type, 0.88);
}

export async function generateReportPdf(model: ReportModel): Promise<Blob> {
  const [{ jsPDF }, { autoTable }] = await Promise.all([import('jspdf'), import('jspdf-autotable')]);

  const [seal, firmMark, photos] = await Promise.all([
    rasterize(AGENCY_SEAL_SVG, 240, 240, 'image/png'),
    rasterize(FIRM_MARK_SVG, 240, 240, 'image/png'),
    Promise.all(model.photos.map((p) => rasterize(photoSvg(p.scene), 800, 600, 'image/jpeg'))),
  ]);

  const doc = new jsPDF({ unit: 'pt', format: 'letter', orientation: 'portrait' });
  doc.setProperties({
    title: `Daily Monitoring Report — ${model.project}`,
    subject: model.heading,
    author: model.firm,
  });

  let y = CONTENT_TOP;
  const lastY = (): number => (doc as unknown as { lastAutoTable?: { finalY?: number } }).lastAutoTable?.finalY ?? y;

  /** Start a new page when `h` points won't fit below the cursor. */
  const ensure = (h: number) => {
    if (y + h > CONTENT_BOTTOM) {
      doc.addPage();
      y = CONTENT_TOP;
    }
  };

  const sectionHeading = (text: string, size = 13) => {
    ensure(size + 40); // keep the heading with at least a line of what follows
    doc.setFont(SERIF, 'bold');
    doc.setFontSize(size);
    doc.setTextColor(...INK);
    doc.text(text, MARGIN_X, y + size);
    y += size + 10;
  };

  const tableBase = {
    theme: 'grid' as const,
    margin: { top: CONTENT_TOP, bottom: PAGE_H - CONTENT_BOTTOM, left: MARGIN_X, right: MARGIN_X },
    tableWidth: CONTENT_W,
    styles: {
      font: SERIF,
      fontSize: 10.5,
      textColor: INK,
      lineColor: RULE,
      lineWidth: 0.5,
      cellPadding: 6,
      valign: 'top' as const,
      overflow: 'linebreak' as const,
    },
    columnStyles: {
      0: { cellWidth: 168, fontStyle: 'bold' as const, fillColor: LABEL_FILL },
    },
  };

  const labelTable = (rows: [string, string][]) => {
    autoTable(doc, { ...tableBase, startY: y, body: rows });
    y = lastY() + 18;
  };

  // 1. Heading
  sectionHeading(model.heading, 15);
  y += 4;

  // 2. General Information
  sectionHeading('General Information');
  labelTable(model.general.map((r) => [r.label, r.value || '—']));

  // 3. Compliance Monitoring Details
  sectionHeading('Compliance Monitoring Details');
  for (const loc of model.locations) {
    ensure(80);
    labelTable([
      ['Monitoring Location', loc.name],
      ['Time', loc.time],
      ['Compliance Level', loc.level],
      ['Site/Construction Activities Observed', loc.activities.map((a) => `${a.time}: ${a.title}. ${a.text}`).join('\n\n') || '—'],
      ['Notes', loc.notes || '—'],
      ['Wildlife Observed', loc.species.length ? loc.species.join(', ') : 'None observed'],
    ]);
  }

  // 4. Photos — 2-up grid, captioned.
  if (model.photos.length) {
    sectionHeading(`Photos of ${model.project}`);
    const gap = 18;
    const cellW = (CONTENT_W - gap) / 2;
    const imgH = cellW * 0.75;
    const rowH = imgH + 42;
    for (let i = 0; i < model.photos.length; i += 2) {
      ensure(rowH);
      for (let c = 0; c < 2; c++) {
        const p = model.photos[i + c];
        if (!p) break;
        const x = MARGIN_X + c * (cellW + gap);
        doc.addImage(photos[i + c], 'JPEG', x, y, cellW, imgH, undefined, 'FAST');
        doc.setDrawColor(...RULE);
        doc.setLineWidth(0.5);
        doc.rect(x, y, cellW, imgH);
        doc.setFont(SERIF, 'normal');
        doc.setFontSize(10);
        doc.setTextColor(...INK);
        doc.text(p.caption, x, y + imgH + 14);
        doc.setTextColor(...INK_MUTED);
        doc.text(doc.splitTextToSize(p.location, cellW)[0] ?? '', x, y + imgH + 27);
      }
      y += rowH;
    }
    y += 6;
  }

  // 5. End of Report
  sectionHeading('End of Report');
  labelTable([['End Time', model.endTime]]);

  // Letterhead + "Page X of Y" on every page, drawn last so the total is known.
  const total = doc.getNumberOfPages();
  for (let page = 1; page <= total; page++) {
    doc.setPage(page);
    drawLetterhead(doc, model, seal, firmMark);
    doc.setFont(SERIF, 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...INK_MUTED);
    doc.text(`Page ${page} of ${total}`, PAGE_W / 2, PAGE_H - 28, { align: 'center' });
  }

  return doc.output('blob');
}

type Doc = InstanceType<typeof import('jspdf').jsPDF>;

function drawLetterhead(doc: Doc, model: ReportModel, seal: string, firmMark: string): void {
  const top = 30;
  const logo = 46;
  doc.addImage(seal, 'PNG', MARGIN_X, top, logo, logo);
  doc.addImage(firmMark, 'PNG', PAGE_W - MARGIN_X - logo, top, logo, logo);

  doc.setFont(SERIF, 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...INK);
  const agencyLines = doc.splitTextToSize(model.agency, 170);
  doc.text(agencyLines, MARGIN_X + logo + 10, top + 20);
  doc.setFont(SERIF, 'normal');
  const firmLines = doc.splitTextToSize(model.firm, 170);
  doc.text(firmLines, PAGE_W - MARGIN_X - logo - 10, top + 20, { align: 'right' });

  doc.setFont(SERIF, 'bold');
  doc.setFontSize(15);
  doc.text('Daily Monitoring Report', PAGE_W / 2, top + 72, { align: 'center' });
  doc.setFont(SERIF, 'normal');
  doc.setFontSize(11);
  doc.text(model.project, PAGE_W / 2, top + 88, { align: 'center' });

  doc.setDrawColor(...RULE);
  doc.setLineWidth(0.75);
  doc.line(MARGIN_X, top + 98, PAGE_W - MARGIN_X, top + 98);
}

/** Trigger a browser download of `blob` as `fileName`. */
export function downloadBlob(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.rel = 'noopener';
  a.style.display = 'none';
  document.body.append(a);
  a.click();
  a.remove();
  // Revoke after the click has been handed to the download manager.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
