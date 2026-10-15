// Controller for <BcnCommitmentScrubber>. setupX shape: it owns pointer and key handling and
// repaints from the model the host passes to update().

export type CellState = 'parsing' | 'ready' | 'flagged' | 'confirmed';

export interface ScrubCell {
  id: string;
  /** As the tick and tip read it: "11.1". */
  label: string;
  title: string;
  state: CellState;
  /** The tip's second line: "2 to settle", "Confirmed". */
  note: string;
}

/** A source file's run of cells: commitments come from several files, end to end. */
export interface ScrubGroup {
  /** The file's short name: "ITP". */
  label: string;
  /** Index of its first cell. */
  start: number;
  /** The run's hue, a CSS color: a band under its cells and its name's marker. */
  hue?: string;
}

export interface CommitmentScrubberModel {
  cells: ScrubCell[];
  at: number;
  groups?: ScrubGroup[];
}

export function setupCommitmentScrubber(root: HTMLElement, { onPick }: { onPick: (id: string) => void }) {
  const size = Number(root.dataset.size) || 40;
  const track = root.querySelector<HTMLElement>('[data-cs-track]')!;
  const thumb = root.querySelector<HTMLElement>('[data-cs-thumb]')!;
  const ticks = root.querySelector<HTMLElement>('[data-cs-ticks]')!;
  const tip = root.querySelector<HTMLElement>('[data-cs-tip]')!;
  const prevBtn = root.querySelector<HTMLElement>('[data-cs-prev]')!;
  const nextBtn = root.querySelector<HTMLElement>('[data-cs-next]')!;
  let model: CommitmentScrubberModel = { cells: [], at: 0 };
  /** First cell of the window; null while the window follows the commitment in view. */
  let pinned: number | null = null;
  let lastAt = -1;

  const windowStart = () => pinned ?? Math.floor(Math.max(0, model.at) / size) * size;
  const groupOf = (i: number) => [...(model.groups ?? [])].reverse().find((g) => g.start <= i);

  const indexAt = (x: number) => {
    const r = track.getBoundingClientRect();
    const f = Math.min(0.9999, Math.max(0, (x - r.left - 5) / (r.width - 10)));
    return windowStart() + Math.floor(f * size);
  };
  const pick = (i: number) => {
    const c = model.cells[Math.min(model.cells.length - 1, Math.max(0, i))];
    pinned = null;
    if (c && i !== model.at) onPick(c.id);
    else paint();
  };
  const shift = (dir: number) => {
    const start = windowStart() + dir * size;
    if (start < 0 || start >= model.cells.length) return;
    pinned = start;
    paint();
  };
  prevBtn.addEventListener('click', () => shift(-1));
  nextBtn.addEventListener('click', () => shift(1));

  let dragging = false;
  track.addEventListener('pointerdown', (e) => {
    dragging = true;
    track.setPointerCapture(e.pointerId);
    track.focus({ preventScroll: true });
    const i = indexAt(e.clientX);
    if (i < model.cells.length) pick(i);
  });
  track.addEventListener('pointermove', (e) => {
    const i = indexAt(e.clientX);
    const c = model.cells[i];
    tip.hidden = !c;
    if (c) {
      const r = track.getBoundingClientRect();
      tip.style.left = `${r.left + 5 + ((i - windowStart() + 0.5) / size) * (r.width - 10)}px`;
      tip.style.top = `${r.top - 6}px`;
      const g = groupOf(i);
      tip.querySelector('[data-cs-tip-code]')!.textContent = g && (model.groups?.length ?? 0) > 1 ? `${g.label} ${c.label}` : c.label;
      tip.querySelector('[data-cs-tip-title]')!.textContent = c.title;
      tip.querySelector('[data-cs-tip-state]')!.textContent = c.note;
    }
    if (dragging && c) pick(i);
  });
  const end = () => (dragging = false);
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  track.addEventListener('pointerleave', () => (tip.hidden = true));
  track.addEventListener('keydown', (e) => {
    const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: 1, ArrowDown: -1, PageUp: -10, PageDown: 10 }[e.key];
    if (step) return e.preventDefault(), pick(model.at + step);
    if (e.key === 'Home') return e.preventDefault(), pick(0);
    if (e.key === 'End') return e.preventDefault(), pick(model.cells.length - 1);
  });

  // One cell per window slot, built once and re-pointed as the window moves.
  const cells: HTMLElement[] = [];
  for (let i = 0; i < size; i++) {
    const el = document.createElement('span');
    el.className = 'bcn-cscrub__cell';
    track.insertBefore(el, thumb);
    cells.push(el);
  }
  root.style.setProperty('--_n', String(size));

  const paint = () => {
    const n = model.cells.length;
    const start = windowStart();
    const last = Math.min(n, start + size) - 1;
    cells.forEach((el, i) => {
      const state = model.cells[start + i]?.state ?? 'none';
      if (el.dataset.state !== state) el.dataset.state = state;
      const hue = (model.cells[start + i] && groupOf(start + i)?.hue) || '';
      if (el.style.getPropertyValue('--_hue') !== hue) hue ? el.style.setProperty('--_hue', hue) : el.style.removeProperty('--_hue');
    });

    // Where one file ends and the next begins, inside the window.
    const groups = model.groups ?? [];
    const inside = groups.filter((g) => g.start > start && g.start <= last);
    track.querySelectorAll('.bcn-cscrub__sep').forEach((x) => x.remove());
    for (const g of inside) {
      const el = document.createElement('span');
      el.className = 'bcn-cscrub__sep';
      el.style.setProperty('--_i', String(g.start - start));
      track.insertBefore(el, thumb);
    }

    // Under the strip: the file at the window's start and at each boundary in it, then the
    // window's last commitment and every tenth between, clear of the file names.
    const out: HTMLElement[] = [];
    const slot = Math.max(1, ticks.clientWidth) / size;
    const taken: [number, number][] = [];
    const place = (el: HTMLElement, from: number, width: number) => {
      if (taken.some(([a, b]) => from < b + 8 && from + width > a - 8)) return;
      taken.push([from, from + width]);
      out.push(el);
    };
    const files = groups.length > 1 ? [{ label: groupOf(start)?.label ?? '', start }, ...inside] : [];
    for (const f of files) {
      const el = document.createElement('span');
      el.className = 'bcn-cscrub__file';
      el.style.setProperty('--_i', String(f.start - start));
      const hue = groups.find((g) => g.start <= f.start && g.label === f.label)?.hue;
      if (hue) el.style.setProperty('--_hue', hue);
      el.textContent = f.label;
      place(el, (f.start - start) * slot, f.label.length * 8 + 8);
    }
    const tickAt = [...new Set([start, ...Array.from({ length: size }, (_, i) => start + i).filter((i) => i % 10 === 0), last])].filter((i) => i <= last);
    for (const i of tickAt) {
      const label = model.cells[i]?.label ?? '';
      const w = label.length * 7;
      const el = document.createElement('span');
      el.className = 'bcn-cscrub__tick';
      el.style.setProperty('--_i', String(i - start));
      el.toggleAttribute('data-end', i === last && i !== start);
      el.textContent = label;
      place(el, i === last ? (i - start + 1) * slot - w : (i - start + 0.5) * slot - w / 2, w);
    }
    ticks.replaceChildren(...out);

    prevBtn.style.visibility = start > 0 ? '' : 'hidden';
    nextBtn.style.visibility = start + size < n ? '' : 'hidden';
    const inWin = model.at >= start && model.at <= last;
    thumb.hidden = !inWin;
    root.style.setProperty('--_at', String(model.at - start));
    const c = model.cells[model.at];
    const g = groupOf(model.at);
    track.setAttribute('aria-valuemax', String(n));
    track.setAttribute('aria-valuenow', String(model.at + 1));
    track.setAttribute('aria-valuetext', c ? `${g?.label ? `${g.label} ` : ''}${c.label} ${c.title}, ${c.note}` : '');
  };

  new ResizeObserver(() => model.cells.length && paint()).observe(ticks);

  return {
    update(next: CommitmentScrubberModel) {
      model = next;
      // A new commitment in view brings the window back to following it.
      if (next.at !== lastAt) pinned = null;
      lastAt = next.at;
      paint();
    },
  };
}
