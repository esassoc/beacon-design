// Controller for <BcnPageView>. setupX shape: owns the image, the boxes and the drag;
// the host calls show() with the page and what to draw on it.

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

export function setupPageView(root: HTMLElement, { onBox, onRegion }: Handlers) {
  const sheet = root.querySelector<HTMLElement>('[data-pv-sheet]')!;
  const img = root.querySelector<HTMLImageElement>('[data-pv-img]')!;
  const layer = root.querySelector<HTMLElement>('[data-pv-boxes]')!;
  const drag = root.querySelector<HTMLElement>('[data-pv-drag]')!;
  let page = 0;
  let selecting = false;
  const els = new Map<string, HTMLElement>();

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

  const show = (n: number, src: string, boxes: PageViewBox[], label: string) => {
    if (n !== page) {
      page = n;
      img.src = src;
      img.alt = label;
      layer.replaceChildren();
      els.clear();
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
