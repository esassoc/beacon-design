// Controller for <BcnPageScrubber>. setupX shape: it owns the strip's pointer and key
// handling and repaints from a model the host passes to update().

export interface ScrubberPip {
  id: string;
  label: string;
  parsed: boolean;
}

export interface ScrubberModel {
  scanned: Set<number>;
  gaps: Set<number>;
  inScope: (page: number) => boolean;
  /** The page being read, or null when reading is done. */
  head: number | null;
  /** The page in view. */
  view: number;
  pips: Map<number, ScrubberPip[]>;
  selectedFind?: string | null;
}

interface Handlers {
  onPage: (page: number) => void;
  onFind: (id: string) => void;
}

export function setupPageScrubber(root: HTMLElement, { onPage, onFind }: Handlers) {
  const first = Number(root.dataset.first);
  const last = Number(root.dataset.last);
  const track = root.querySelector<HTMLElement>('[data-scrub-track]')!;
  const head = root.querySelector<HTMLElement>('[data-scrub-head]')!;
  const cells = new Map<number, HTMLElement>();
  track.querySelectorAll<HTMLElement>('[data-page]').forEach((el) => cells.set(Number(el.dataset.page), el));
  let view = first;

  const pageAt = (clientX: number) => {
    const r = track.getBoundingClientRect();
    const f = Math.min(0.9999, Math.max(0, (clientX - r.left) / r.width));
    return first + Math.floor(f * (last - first + 1));
  };

  const go = (p: number) => {
    const page = Math.min(last, Math.max(first, p));
    if (page !== view) onPage(page);
  };

  let dragging = false;
  track.addEventListener('pointerdown', (e) => {
    const pip = (e.target as HTMLElement).closest<HTMLElement>('[data-find]');
    if (pip) {
      onFind(pip.dataset.find!);
      return;
    }
    dragging = true;
    track.setPointerCapture(e.pointerId);
    go(pageAt(e.clientX));
  });
  track.addEventListener('pointermove', (e) => {
    if (dragging) go(pageAt(e.clientX));
  });
  const stop = () => (dragging = false);
  track.addEventListener('pointerup', stop);
  track.addEventListener('pointercancel', stop);

  track.addEventListener('keydown', (e) => {
    const step: Record<string, number> = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 5, PageDown: -5 };
    if (e.key in step) go(view + step[e.key]);
    else if (e.key === 'Home') go(first);
    else if (e.key === 'End') go(last);
    else return;
    e.preventDefault();
  });

  const update = (m: ScrubberModel) => {
    view = m.view;
    for (const [n, el] of cells) {
      const state = !m.inScope(n) ? 'out' : m.gaps.has(n) ? 'gap' : m.scanned.has(n) ? 'scanned' : 'pending';
      if (el.dataset.state !== state) el.dataset.state = state;
      const pipsEl = el.querySelector<HTMLElement>('[data-scrub-pips]')!;
      const pips = m.pips.get(n) ?? [];
      const sig = pips.map((p) => `${p.id}${p.parsed ? '+' : ''}${p.id === m.selectedFind ? '*' : ''}`).join('|');
      if (pipsEl.dataset.sig !== sig) {
        pipsEl.dataset.sig = sig;
        // Existing pips keep their element (no re-pop); new ones are appended.
        const keep = new Map([...pipsEl.querySelectorAll<HTMLElement>('[data-find]')].map((x) => [x.dataset.find!, x]));
        pipsEl.replaceChildren(
          ...pips.slice(0, 3).map((p) => {
            const pip = keep.get(p.id) ?? document.createElement('span');
            pip.className = 'bcn-scrub__pip';
            pip.dataset.find = p.id;
            pip.title = p.label;
            pip.toggleAttribute('data-parsed', p.parsed);
            pip.toggleAttribute('data-selected', p.id === m.selectedFind);
            return pip;
          }),
        );
      }
    }
    head.hidden = m.head === null;
    if (m.head !== null) root.style.setProperty('--_head', String(m.head - first));
    root.style.setProperty('--_view', String(m.view - first));
    track.setAttribute('aria-valuenow', String(m.view));
    const label = m.gaps.has(m.view) ? `Page ${m.view}, nothing found` : `Page ${m.view}`;
    track.setAttribute('aria-valuetext', label);
  };

  return { update };
}
