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
  /** A person drew or adjusted it: solid, theirs. */
  edited?: boolean;
  /** A person's (marked or edited), not Aldo's: stays when Aldo's boxes are hidden. */
  mine?: boolean;
  /** The ID and name shown in a chip over the box while it is selected. */
  chip?: string;
  /** Selected and editable: handles to move and resize it. */
  editable?: boolean;
  shade?: number;
  label?: string;
}

type Rect = { x: number; y: number; w: number; h: number };
interface Handlers {
  /** A box was clicked; `add` with Shift, to add it to the selection. */
  onBox: (id: string, add?: boolean) => void;
  /** Split mode: the person clicked inside the box at this height (a page fraction). */
  onSplit?: (id: string, page: number, y: number) => void;
  onRegion: (page: number, box: { page: number; x: number; y: number; w: number; h: number }) => void;
  /** A selected box moved or resized (on release, or per arrow key). */
  onEdit?: (id: string, page: number, box: Rect) => void;
  /** Delete or Backspace on a selected box. */
  onRemove?: (id: string, page: number) => void;
  /** Escape on a selected box. */
  onDeselect?: () => void;
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

const HANDLES = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'] as const;
type Handle = (typeof HANDLES)[number] | 'move';
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export function setupPageView(root: HTMLElement, { onBox, onRegion, onEdit, onRemove, onDeselect, onSplit }: Handlers) {
  const sheet = root.querySelector<HTMLElement>('[data-pv-sheet]')!;
  const canvas = root.querySelector<HTMLCanvasElement>('[data-pv-canvas]')!;
  const layer = root.querySelector<HTMLElement>('[data-pv-boxes]')!;
  const drag = root.querySelector<HTMLElement>('[data-pv-drag]')!;
  const guide = root.querySelector<HTMLElement>('[data-pv-guide]')!;
  let src = '';
  let page = 0;
  let selecting = false;
  /** Split mode: the find whose box a click cuts. */
  let splitting: string | null = null;
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
    if (selecting || moved) return;
    const box = (e.target as HTMLElement).closest<HTMLElement>('[data-box-id]');
    if (splitting) {
      if (box?.dataset.boxId === splitting) onSplit?.(splitting, page, frac(e as PointerEvent).y);
      return;
    }
    if (box) onBox(box.dataset.boxId!, (e as MouseEvent).shiftKey);
  });
  // Split: a guide across the box follows the pointer; a click cuts there.
  layer.addEventListener('pointermove', (e) => {
    if (!splitting) return;
    const box = (e.target as HTMLElement).closest<HTMLElement>('[data-box-id]');
    if (box?.dataset.boxId !== splitting) return void (guide.hidden = true);
    const r = rectOf(box);
    guide.hidden = false;
    Object.assign(guide.style, { left: pct(r.x), width: pct(r.w), top: pct(frac(e).y) });
  });
  layer.addEventListener('pointerleave', () => (guide.hidden = true));

  // ── Editing a selected box: drag its body to move, a handle to resize ─────────
  // Live while dragging (the element moves), reported once on release.
  let edit: { el: HTMLElement; id: string; h: Handle; from: { x: number; y: number }; r0: Rect; r: Rect } | null = null;
  let moved = false;
  const rectOf = (el: HTMLElement): Rect => ({
    x: parseFloat(el.style.left) / 100,
    y: parseFloat(el.style.top) / 100,
    w: parseFloat(el.style.width) / 100,
    h: parseFloat(el.style.height) / 100,
  });
  const place = (el: HTMLElement, r: Rect) => Object.assign(el.style, { left: pct(r.x), top: pct(r.y), width: pct(r.w), height: pct(r.h) });
  const MIN = 0.01;
  const resize = (r0: Rect, h: Handle, dx: number, dy: number): Rect => {
    if (h === 'move') return { ...r0, x: clamp01(Math.min(r0.x + dx, 1 - r0.w)), y: clamp01(Math.min(r0.y + dy, 1 - r0.h)) };
    let { x, y, w, h: hh } = r0;
    if (h.includes('w')) (x = clamp01(Math.min(r0.x + dx, r0.x + r0.w - MIN))), (w = r0.x + r0.w - x);
    if (h.includes('e')) w = Math.max(MIN, Math.min(1 - r0.x, r0.w + dx));
    if (h.includes('n')) (y = clamp01(Math.min(r0.y + dy, r0.y + r0.h - MIN))), (hh = r0.y + r0.h - y);
    if (h.includes('s')) hh = Math.max(MIN, Math.min(1 - r0.y, r0.h + dy));
    return { x, y, w, h: hh };
  };
  layer.addEventListener('pointerdown', (e) => {
    // Shift+click adds to the selection; it must not select the page's text.
    if (e.shiftKey) e.preventDefault();
    if (selecting || splitting || e.shiftKey) return;
    const t = e.target as HTMLElement;
    const el = t.closest<HTMLElement>('[data-box-id][data-editable]');
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    layer.setPointerCapture(e.pointerId);
    const r0 = rectOf(el);
    edit = { el, id: el.dataset.boxId!, h: (t.dataset.handle as Handle) ?? 'move', from: frac(e), r0, r: r0 };
    moved = false;
    el.setAttribute('data-dragging', '');
  });
  layer.addEventListener('pointermove', (e) => {
    if (!edit) return;
    const p = frac(e);
    const dx = p.x - edit.from.x;
    const dy = p.y - edit.from.y;
    if (!moved && Math.abs(dx) + Math.abs(dy) < 0.004) return;
    moved = true;
    edit.r = resize(edit.r0, edit.h, dx, dy);
    place(edit.el, edit.r);
  });
  layer.addEventListener('pointerup', () => {
    if (!edit) return;
    const { el, id, r } = edit;
    el.removeAttribute('data-dragging');
    edit = null;
    if (moved) onEdit?.(id, page, r);
    // The click that follows a drag is not a selection.
    setTimeout(() => (moved = false), 0);
  });
  // Keyboard: arrows move (Shift for a bigger step, Alt to resize from the bottom right),
  // Delete removes, Escape lets go.
  layer.addEventListener('keydown', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-box-id]');
    if (!el) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      return onBox(el.dataset.boxId!);
    }
    if (!el.hasAttribute('data-editable')) return;
    const step = e.shiftKey ? 0.02 : 0.004;
    const d: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (d[e.key]) {
      e.preventDefault();
      const r = resize(rectOf(el), e.altKey ? 'se' : 'move', d[e.key][0], d[e.key][1]);
      place(el, r);
      onEdit?.(el.dataset.boxId!, page, r);
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      onRemove?.(el.dataset.boxId!, page);
    } else if (e.key === 'Escape') {
      onDeselect?.();
    }
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
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.toggleAttribute('data-edited', !!b.edited);
      el.toggleAttribute('data-mine', !!b.mine);
      el.toggleAttribute('data-splitting', b.id === splitting);
      // The selected box wears its ID and name (the only thing over the page).
      let chip = el.querySelector<HTMLElement>(':scope > .bcn-pv__chip');
      if (b.chip && b.selected) {
        if (!chip) {
          chip = document.createElement('span');
          chip.className = 'bcn-pv__chip';
          el.prepend(chip);
        }
        if (chip.textContent !== b.chip) chip.textContent = b.chip;
      } else chip?.remove();
      const wasEditable = el.hasAttribute('data-editable');
      el.toggleAttribute('data-editable', !!b.editable);
      if (b.editable && !wasEditable) {
        for (const h of HANDLES) {
          const k = document.createElement('span');
          k.className = 'bcn-pv__handle';
          k.dataset.handle = h;
          el.append(k);
        }
      } else if (!b.editable && wasEditable) el.querySelectorAll('.bcn-pv__handle').forEach((k) => k.remove());
      if (b.label) el.setAttribute('aria-label', b.label);
      if (b.shade) el.dataset.shade = String(b.shade);
      el.toggleAttribute('data-parsed', !!b.parsed);
      el.toggleAttribute('data-selected', !!b.selected);
      if (b.label) el.title = b.label;
      // A box being dragged holds where the person has it until the store catches up.
      if (el.hasAttribute('data-dragging')) continue;
      Object.assign(el.style, { left: pct(b.x), top: pct(b.y), width: pct(b.w), height: pct(b.h) });
    }
  };

  const setSelecting = (on: boolean) => {
    selecting = on;
    sheet.toggleAttribute('data-selecting', on);
  };
  /** Split mode on the find `id` (null: off). */
  const setSplitting = (id: string | null) => {
    splitting = id;
    sheet.toggleAttribute('data-splitting', !!id);
    if (!id) guide.hidden = true;
    for (const [, el] of els) el.toggleAttribute('data-splitting', el.dataset.boxId === id);
  };
  /** Hide Aldo's boxes (dashed, not a person's) to read the text under them. */
  const setHideAldo = (on: boolean) => root.toggleAttribute('data-hide-aldo', on);

  return { show, setSelecting, setSplitting, setHideAldo };
}

/** How many pages a PDF has (an upload's page count, as prod's SourceFile.PageCount). */
export const countPages = async (src: string) => (await loadDoc(src)).numPages;
