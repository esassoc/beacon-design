// Controller for <BcnPageView>. setupX shape: owns the rendered page, the boxes and the
// drag; the host calls show() with the document, the page and what to draw on it.
//
// The page is the source PDF itself, rendered in the browser by pdf.js (prod's
// source-pdf-viewer does the same through ng2-pdfjs-viewer). Boxes are page fractions,
// the shape of prod's PdfBoundingBoxDto, so they sit over any render size. A document
// loads once and pages render on demand at the sheet's width and the screen's density.

import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy, type RenderTask } from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

GlobalWorkerOptions.workerSrc = workerUrl;

export interface PageViewBox {
  /** Unique per drawn box; the same key across shows keeps the element (no re-draw). */
  key: string;
  /** The find a click selects. */
  id: string;
  kind: 'find' | 'span' | 'mark';
  x: number;
  y: number;
  w: number;
  h: number;
  parsed?: boolean;
  selected?: boolean;
  shade?: number;
  label?: string;
}

interface Handlers {
  onBox: (id: string) => void;
  onRegion: (page: number, box: { page: number; x: number; y: number; w: number; h: number }) => void;
}

const pct = (n: number) => `${(n * 100).toFixed(3)}%`;

/** One load per document URL, shared by every page view on the page. */
const docs = new Map<string, Promise<PDFDocumentProxy>>();
const loadDoc = (src: string) => {
  let p = docs.get(src);
  if (!p) {
    p = getDocument({ url: src }).promise;
    docs.set(src, p);
  }
  return p;
};

/** Paint one page into a canvas at a CSS width (for crops and thumbnails beside a page view). */
export async function paintPage(canvas: HTMLCanvasElement, src: string, n: number, cssWidth: number) {
  const doc = await loadDoc(src);
  const pg = await doc.getPage(n);
  const base = pg.getViewport({ scale: 1 });
  const vp = pg.getViewport({ scale: (cssWidth / base.width) * (window.devicePixelRatio || 1) });
  canvas.width = Math.floor(vp.width);
  canvas.height = Math.floor(vp.height);
  await pg.render({ canvas, viewport: vp }).promise;
}

export function setupPageView(root: HTMLElement, { onBox, onRegion }: Handlers) {
  const sheet = root.querySelector<HTMLElement>('[data-pv-sheet]')!;
  const canvas = root.querySelector<HTMLCanvasElement>('[data-pv-canvas]')!;
  const layer = root.querySelector<HTMLElement>('[data-pv-boxes]')!;
  const drag = root.querySelector<HTMLElement>('[data-pv-drag]')!;
  let src = '';
  let page = 0;
  let selecting = false;
  let task: RenderTask | null = null;
  let renderedAt = '';
  const els = new Map<string, HTMLElement>();

  const render = async () => {
    const want = `${src}#${page}`;
    const width = sheet.clientWidth;
    if (!src || !page || !width) return;
    const at = `${want}@${width}`;
    if (at === renderedAt) return;
    renderedAt = at;
    task?.cancel();
    sheet.setAttribute('aria-busy', 'true');
    try {
      const doc = await loadDoc(src);
      const pg = await doc.getPage(page);
      if (`${src}#${page}` !== want) return;
      const base = pg.getViewport({ scale: 1 });
      sheet.style.aspectRatio = `${base.width} / ${base.height}`;
      const dpr = window.devicePixelRatio || 1;
      const vp = pg.getViewport({ scale: (width / base.width) * dpr });
      // Draw off-screen and swap, so the old page holds until the new one is ready.
      const next = document.createElement('canvas');
      next.width = Math.floor(vp.width);
      next.height = Math.floor(vp.height);
      task = pg.render({ canvas: next, viewport: vp });
      await task.promise;
      if (`${src}#${page}` !== want) return;
      canvas.width = next.width;
      canvas.height = next.height;
      canvas.getContext('2d')!.drawImage(next, 0, 0);
      sheet.removeAttribute('aria-busy');
    } catch (e) {
      if ((e as Error)?.name !== 'RenderingCancelledException') renderedAt = '';
    }
  };

  new ResizeObserver(() => render()).observe(sheet);

  layer.addEventListener('click', (e) => {
    if (selecting) return;
    const box = (e.target as HTMLElement).closest<HTMLElement>('[data-box-id]');
    if (box) onBox(box.dataset.boxId!);
  });

  // Select mode: drag a rectangle; release reports it as page fractions.
  let start: { x: number; y: number } | null = null;
  const frac = (e: PointerEvent) => {
    const r = sheet.getBoundingClientRect();
    return { x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)) };
  };
  const rect = (a: { x: number; y: number }, b: { x: number; y: number }) => ({
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    w: Math.abs(a.x - b.x),
    h: Math.abs(a.y - b.y),
  });
  sheet.addEventListener('pointerdown', (e) => {
    if (!selecting) return;
    e.preventDefault();
    sheet.setPointerCapture(e.pointerId);
    start = frac(e);
    drag.hidden = false;
    Object.assign(drag.style, { left: pct(start.x), top: pct(start.y), width: '0', height: '0' });
  });
  sheet.addEventListener('pointermove', (e) => {
    if (!start) return;
    const r = rect(start, frac(e));
    Object.assign(drag.style, { left: pct(r.x), top: pct(r.y), width: pct(r.w), height: pct(r.h) });
  });
  sheet.addEventListener('pointerup', (e) => {
    if (!start) return;
    const r = rect(start, frac(e));
    start = null;
    drag.hidden = true;
    if (r.w > 0.02 && r.h > 0.01) onRegion(page, { page, ...r });
  });

  /** Show page `n` of the PDF at `pdf`, with these boxes over it. */
  const show = (pdf: string, n: number, boxes: PageViewBox[], label: string) => {
    if (n !== page || pdf !== src) {
      src = pdf;
      page = n;
      canvas.setAttribute('aria-label', label);
      layer.replaceChildren();
      els.clear();
      render();
    }
    const keep = new Set(boxes.map((b) => b.key));
    for (const [k, el] of els) {
      if (!keep.has(k)) {
        el.remove();
        els.delete(k);
      }
    }
    for (const b of boxes) {
      let el = els.get(b.key);
      if (!el) {
        el = document.createElement('div');
        el.className = 'bcn-pv__box';
        layer.append(el);
        els.set(b.key, el);
      }
      el.dataset.kind = b.kind;
      el.dataset.boxId = b.id;
      if (b.shade) el.dataset.shade = String(b.shade);
      el.toggleAttribute('data-parsed', !!b.parsed);
      el.toggleAttribute('data-selected', !!b.selected);
      if (b.label) el.title = b.label;
      Object.assign(el.style, { left: pct(b.x), top: pct(b.y), width: pct(b.w), height: pct(b.h) });
    }
  };

  const setSelecting = (on: boolean) => {
    selecting = on;
    sheet.toggleAttribute('data-selecting', on);
  };

  return { show, setSelecting };
}
