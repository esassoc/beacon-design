// Controller for <BcnPageScrubber>. setupX shape: it owns the strip's window, pointer and
// key handling, and repaints from a model the host passes to update(). The cells are built
// here for the window in view, so one strip serves documents of any length.

export interface ScrubberPip {
  id: string;
  label: string;
  parsed: boolean;
}

export interface ScrubberModel {
  /** Pages in the document. */
  total: number;
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
  const size = Number(root.dataset.size) || 50;
  const track = root.querySelector<HTMLElement>('[data-scrub-track]')!;
  const head = root.querySelector<HTMLElement>('[data-scrub-head]')!;
  const ticksEl = root.querySelector<HTMLElement>('[data-scrub-ticks]')!;
  const rangeEl = root.querySelector<HTMLElement>('[data-scrub-range]');
  const tip = root.querySelector<HTMLElement>('[data-scrub-tip]');
  const prevBtn = root.querySelector<HTMLElement>('[data-scrub-prev]')!;
  const nextBtn = root.querySelector<HTMLElement>('[data-scrub-next]')!;
  const cells: HTMLElement[] = [];
  let model: ScrubberModel | null = null;
  let total = 1;
  let view = 1;
  /** First page of the window; null while the window follows the page in view. */
  let pinned: number | null = null;
  let lastView = 0;

  const windowStart = () => pinned ?? Math.floor((view - 1) / size) * size + 1;

  const pageAt = (clientX: number) => {
    const r = track.getBoundingClientRect();
    const f = Math.min(0.9999, Math.max(0, (clientX - r.left) / r.width));
    return windowStart() + Math.floor(f * size);
  };
  const go = (p: number) => {
    const page = Math.min(total, Math.max(1, p));
    pinned = null;
    if (page !== view) onPage(page);
  };

  const shift = (dir: number) => {
    const start = windowStart() + dir * size;
    if (start < 1 || start > total) return;
    pinned = start;
    if (model) paint(model);
  };
  prevBtn.addEventListener('click', () => shift(-1));
  nextBtn.addEventListener('click', () => shift(1));

  // The popover over the page under the pointer: its number, what the scan has done with
  // it, and what was found on it. Fixed to the viewport, so no pane clips it.
  const tipPage = tip?.querySelector<HTMLElement>('[data-tip-page]');
  const tipState = tip?.querySelector<HTMLElement>('[data-tip-state]');
  const tipFinds = tip?.querySelector<HTMLElement>('[data-tip-finds]');
  const showTip = (p: number) => {
    if (!tip || !model || p > total) {
      if (tip) tip.hidden = true;
      return;
    }
    const m = model;
    const state = !m.inScope(p) ? 'Outside the scope' : m.scanned.has(p) || m.gaps.has(p) ? 'Read' : m.head === p ? 'Reading' : 'Not read yet';
    const pips = m.pips.get(p) ?? [];
    tipPage!.textContent = `p. ${p}`;
    tipState!.textContent = state;
    tipFinds!.textContent = pips.map((x) => x.label.replace(/, p\. \d+$/, '')).join('\n');
    tipFinds!.hidden = !pips.length;
    tip.hidden = false;
    const cell = cells[p - windowStart()];
    if (!cell) return;
    const r = cell.getBoundingClientRect();
    tip.style.left = `${r.left + r.width / 2}px`;
    tip.style.top = `${r.top - 8}px`;
  };

  let dragging = false;
  track.addEventListener('pointerdown', (e) => {
    const pip = (e.target as HTMLElement).closest<HTMLElement>('[data-find]');
    if (pip) {
      pinned = null;
      onFind(pip.dataset.find!);
      return;
    }
    dragging = true;
    track.setPointerCapture(e.pointerId);
    go(pageAt(e.clientX));
  });
  track.addEventListener('pointermove', (e) => {
    const p = pageAt(e.clientX);
    if (tip) showTip(p);
    if (dragging) go(p);
  });
  track.addEventListener('pointerleave', () => {
    if (tip && !dragging) tip.hidden = true;
  });
  const stop = () => {
    dragging = false;
    if (tip) tip.hidden = true;
  };
  track.addEventListener('pointerup', stop);
  track.addEventListener('pointercancel', stop);

  track.addEventListener('keydown', (e) => {
    const step: Record<string, number> = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 5, PageDown: -5 };
    if (e.key in step) go(view + step[e.key]);
    else if (e.key === 'Home') go(1);
    else if (e.key === 'End') go(total);
    else return;
    e.preventDefault();
  });

  // One cell per window slot, built once and re-pointed at pages as the window moves.
  for (let i = 0; i < size; i++) {
    const el = document.createElement('span');
    el.className = 'bcn-scrub__page';
    const pips = document.createElement('span');
    pips.className = 'bcn-scrub__pips';
    el.append(pips);
    track.insertBefore(el, head);
    cells.push(el);
  }

  const paint = (m: ScrubberModel) => {
    const start = windowStart();
    const end = Math.min(total, start + size - 1);
    cells.forEach((el, i) => {
      const n = start + i;
      el.dataset.page = String(n);
      const state = n > total ? 'none' : !m.inScope(n) ? 'out' : m.gaps.has(n) ? 'gap' : m.scanned.has(n) ? 'scanned' : 'pending';
      if (el.dataset.state !== state) el.dataset.state = state;
      const pipsEl = el.firstElementChild as HTMLElement;
      const pips = n > total ? [] : (m.pips.get(n) ?? []);
      const sig = `${n}:${pips.map((p) => `${p.id}${p.parsed ? '+' : ''}${p.id === m.selectedFind ? '*' : ''}`).join('|')}`;
      if (pipsEl.dataset.sig !== sig) {
        const samePage = pipsEl.dataset.sig?.startsWith(`${n}:`);
        pipsEl.dataset.sig = sig;
        // On the same page, existing pips keep their element (no re-pop).
        const keep = samePage ? new Map([...pipsEl.querySelectorAll<HTMLElement>('[data-find]')].map((x) => [x.dataset.find!, x])) : new Map();
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
    });

    // Ticks: the window's ends and every tenth page between.
    const ticks: number[] = [];
    for (let n = start; n <= end; n++) if (n === start || n === end || (n % 10 === 0 && n - start >= 4 && end - n >= 4)) ticks.push(n);
    const tsig = ticks.join(',');
    if (ticksEl.dataset.sig !== tsig) {
      ticksEl.dataset.sig = tsig;
      ticksEl.replaceChildren(
        ...ticks.map((n) => {
          const t = document.createElement('span');
          t.className = 'bcn-scrub__tick';
          t.style.setProperty('--_i', String(n - start));
          t.textContent = String(n);
          return t;
        }),
      );
    }
    if (rangeEl) rangeEl.textContent = `pp. ${start}–${end} of ${total}`;
    prevBtn.style.visibility = start > 1 ? '' : 'hidden';
    nextBtn.style.visibility = end < total ? '' : 'hidden';

    const inWin = (n: number | null) => n !== null && n >= start && n <= end;
    head.hidden = !inWin(m.head);
    if (inWin(m.head)) root.style.setProperty('--_head', String(m.head! - start));
    const thumb = root.querySelector<HTMLElement>('[data-scrub-thumb]')!;
    thumb.hidden = !inWin(m.view);
    root.style.setProperty('--_view', String(m.view - start));
    track.setAttribute('aria-valuemax', String(total));
    track.setAttribute('aria-valuenow', String(m.view));
    track.setAttribute('aria-valuetext', m.gaps.has(m.view) ? `Page ${m.view}, nothing found` : `Page ${m.view}`);
  };

  const update = (m: ScrubberModel) => {
    model = m;
    total = m.total;
    view = m.view;
    // A new page in view brings the window back to following it.
    if (m.view !== lastView) pinned = null;
    lastView = m.view;
    paint(m);
  };

  return { update };
}
