// Drag to reorder, for the plan settings page's lists (2026-10-28): module rows within and between a level's Main and
// Side columns, a level's fields, and the editable name lists. Pointer events on a row's grip, so it works with a mouse,
// a pen or a finger: the row lifts (a ghost follows the pointer, the row stays put, dimmed), a line shows where it will
// land, and letting go hands the caller the row, the list and the index. The caller owns the data and redraws; flip()
// animates the redraw so the rows slide into place instead of jumping.
//
// The monitoring portal's section bars move rows live on pointermove (dashboard.astro); a drop line is calmer when a
// row can also cross into another list, and nothing reflows until the drop. Keyboard users have each row's Move Up,
// Move Down and Move to Other Column buttons, so the grip itself takes no focus.

export interface SortableOptions {
  /** The lists a row can land in, in order (for two columns, both). */
  lists: () => HTMLElement[];
  /** Selects a row inside a list. */
  row: string;
  /** Selects the grip inside a row. */
  grip: string;
  /** Whether a row may land in a list; default any. */
  accepts?: (row: HTMLElement, list: HTMLElement) => boolean;
  /** A dragged row was let go over a list: `index` counts the list's rows without the dragged one. */
  onDrop: (row: HTMLElement, list: HTMLElement, index: number) => void;
  /** Read-only pages don't drag. */
  disabled?: () => boolean;
  /** What follows the pointer; default a copy of the row. */
  ghost?: (row: HTMLElement) => HTMLElement;
  /** Where the ghost and the drop line live; default the body. Inside a modal dialog, an element in it (the top layer
   *  covers the body). */
  layer?: () => HTMLElement;
}

const THRESHOLD = 4;
const EDGE = 56;

/** The nearest ancestor that scrolls vertically (the app shell's content column), or the page. */
function scroller(el: Element): HTMLElement {
  for (let n = el.parentElement; n; n = n.parentElement) {
    const oy = getComputedStyle(n).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && n.scrollHeight > n.clientHeight) return n;
  }
  return document.scrollingElement as HTMLElement;
}

export function sortable(root: HTMLElement, opts: SortableOptions): void {
  let drag: {
    row: HTMLElement;
    grip: HTMLElement;
    pointerId: number;
    startX: number;
    startY: number;
    dx: number;
    dy: number;
    started: boolean;
    ghost: HTMLElement | null;
    line: HTMLElement | null;
    target: { list: HTMLElement; index: number } | null;
    scroll: HTMLElement;
    x: number;
    y: number;
    raf: number;
  } | null = null;

  const rowsOf = (list: HTMLElement, without: HTMLElement) => [...list.querySelectorAll<HTMLElement>(`:scope > ${opts.row}`)].filter((r) => r !== without && !r.hidden);

  function start(): void {
    if (!drag) return;
    const rect = drag.row.getBoundingClientRect();
    const ghost = opts.ghost ? opts.ghost(drag.row) : (drag.row.cloneNode(true) as HTMLElement);
    ghost.classList.add('bcn-sortable-ghost');
    ghost.removeAttribute('id');
    ghost.setAttribute('aria-hidden', 'true');
    Object.assign(ghost.style, { position: 'fixed', left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, zIndex: '2000', pointerEvents: 'none', margin: '0' });
    (opts.layer?.() ?? document.body).append(ghost);
    const line = document.createElement('div');
    line.className = 'bcn-sortable-line';
    line.setAttribute('aria-hidden', 'true');
    (opts.layer?.() ?? document.body).append(line);
    drag.ghost = ghost;
    drag.line = line;
    drag.started = true;
    drag.row.classList.add('is-dragging');
    document.documentElement.classList.add('bcn-sorting');
    tick();
  }

  /** Where a drop at the pointer lands: the list under it (or the nearest), and the gap nearest the pointer. */
  function locate(x: number, y: number): { list: HTMLElement; index: number; lineY: number; left: number; width: number } | null {
    if (!drag) return null;
    const lists = opts.lists().filter((l) => l.offsetParent !== null && (!opts.accepts || opts.accepts(drag!.row, l)));
    if (!lists.length) return null;
    let best = lists[0];
    let bestDist = Infinity;
    for (const list of lists) {
      const r = list.getBoundingClientRect();
      const dx = x < r.left ? r.left - x : x > r.right ? x - r.right : 0;
      const dy = y < r.top ? r.top - y : y > r.bottom ? y - r.bottom : 0;
      const dist = dx * 3 + dy;
      if (dist < bestDist) {
        bestDist = dist;
        best = list;
      }
    }
    const lr = best.getBoundingClientRect();
    const rows = rowsOf(best, drag.row);
    let index = rows.length;
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i].getBoundingClientRect();
      if (y < r.top + r.height / 2) {
        index = i;
        break;
      }
    }
    let lineY: number;
    if (!rows.length) lineY = lr.top + Math.min(lr.height, 40) / 2;
    else if (index === 0) lineY = rows[0].getBoundingClientRect().top;
    else if (index === rows.length) lineY = rows[rows.length - 1].getBoundingClientRect().bottom;
    else lineY = (rows[index - 1].getBoundingClientRect().bottom + rows[index].getBoundingClientRect().top) / 2;
    return { list: best, index, lineY, left: lr.left, width: lr.width };
  }

  function place(): void {
    if (!drag?.started || !drag.ghost || !drag.line) return;
    drag.ghost.style.transform = `translate(${drag.x - drag.startX}px, ${drag.y - drag.startY}px)`;
    const at = locate(drag.x, drag.y);
    drag.target = at ? { list: at.list, index: at.index } : null;
    drag.line.hidden = !at;
    if (at) Object.assign(drag.line.style, { top: `${at.lineY - 1}px`, left: `${at.left}px`, width: `${at.width}px` });
  }

  // Near the scroller's top or bottom edge, it scrolls, and the drop line follows.
  function tick(): void {
    if (!drag?.started) return;
    const s = drag.scroll;
    const r = s === document.scrollingElement ? { top: 0, bottom: innerHeight } : s.getBoundingClientRect();
    const speed = drag.y < r.top + EDGE ? -Math.ceil((r.top + EDGE - drag.y) / 6) : drag.y > r.bottom - EDGE ? Math.ceil((drag.y - (r.bottom - EDGE)) / 6) : 0;
    if (speed) {
      s.scrollTop += speed;
      place();
    }
    drag.raf = requestAnimationFrame(tick);
  }

  function finish(commit: boolean): void {
    if (!drag) return;
    const d = drag;
    drag = null;
    cancelAnimationFrame(d.raf);
    d.ghost?.remove();
    d.line?.remove();
    d.row.classList.remove('is-dragging');
    document.documentElement.classList.remove('bcn-sorting');
    try {
      d.grip.releasePointerCapture(d.pointerId);
    } catch {
      /* already released */
    }
    if (!commit || !d.started || !d.target) return;
    const { list, index } = d.target;
    // Let go where it started: nothing moved.
    const from = d.row.parentElement === list ? [...list.querySelectorAll<HTMLElement>(`:scope > ${opts.row}`)].filter((r) => !r.hidden).indexOf(d.row) : -1;
    if (from === index) return;
    opts.onDrop(d.row, list, index);
  }

  root.addEventListener('pointerdown', (e) => {
    const grip = (e.target as Element | null)?.closest<HTMLElement>(opts.grip);
    if (!grip || !root.contains(grip) || e.button !== 0 || opts.disabled?.()) return;
    const row = grip.closest<HTMLElement>(opts.row);
    if (!row) return;
    e.preventDefault();
    grip.setPointerCapture?.(e.pointerId);
    drag = { row, grip, pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, dx: 0, dy: 0, started: false, ghost: null, line: null, target: null, scroll: scroller(row), x: e.clientX, y: e.clientY, raf: 0 };
  });
  root.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    drag.x = e.clientX;
    drag.y = e.clientY;
    if (!drag.started && Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) < THRESHOLD) return;
    if (!drag.started) start();
    place();
  });
  root.addEventListener('pointerup', (e) => {
    if (drag && e.pointerId === drag.pointerId) finish(true);
  });
  root.addEventListener('pointercancel', () => finish(false));
  document.addEventListener('keydown', (e) => {
    if (drag?.started && e.key === 'Escape') {
      e.preventDefault();
      finish(false);
    }
  });
}

/** Runs `mutate` (which moves rows around) and slides every row from where it was to where it is now. */
export function flip(rows: HTMLElement[], mutate: () => void): void {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const before = new Map(rows.map((r) => [r, r.getBoundingClientRect()]));
  mutate();
  if (reduce) return;
  for (const [row, was] of before) {
    if (!row.isConnected || row.hidden) continue;
    const now = row.getBoundingClientRect();
    const dx = was.left - now.left;
    const dy = was.top - now.top;
    if (!dx && !dy) continue;
    row.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0, 0)' }], { duration: 180, easing: 'cubic-bezier(0.2, 0, 0, 1)' });
  }
}
