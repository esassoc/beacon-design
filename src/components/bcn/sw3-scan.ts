// Controller for <BcnSw3Scan>. setupX shape: owns the run's view state (the page in
// view, whether it follows the scan head, the selected find, select mode) and renders
// the bar, the scrubber, the page and the queue from sw3-store on every change.

import {
  initSw3,
  started,
  finished,
  now,
  state,
  scanned,
  headPage,
  finds,
  gaps,
  inScope,
  commitmentOf,
  markRegion,
  dismissFind,
  mergeSplit,
  togglePause,
  cycleSpeed,
  skipToEnd,
  resetAll,
  payload,
  type LiveFind,
} from './sw3-store';
import { setupPageScrubber, type ScrubberPip } from './page-scrubber';
import { setupPageView, type PageViewBox } from './page-view';
import { boxesFor } from '../../lib/anchored-text';

/** esa-button wraps its text in a label span; write there so the button keeps its shape. */
const setLabel = (btn: HTMLElement, text: string) => {
  (btn.querySelector('.esa-button__label') ?? btn).textContent = text;
};
/** Hide or show an esa-button by its wrapper (its own display rule outranks [hidden]). */
const show = (btn: HTMLElement | null, on: boolean) => {
  if (!btn) return;
  const host = (btn.closest('.esa-button') as HTMLElement | null) ?? btn;
  host.style.display = on ? '' : 'none';
};

export function setupSw3Scan(root: HTMLElement): void {
  const D = initSw3();
  const base = root.dataset.base!.replace(/\/$/, '');
  const img = (n: number) => `${base}/source-docs/itp-pages/p${String(n).padStart(3, '0')}.webp`;

  const status = root.querySelector<HTMLElement>('[data-scan-status]')!;
  const toggle = root.querySelector<HTMLElement>('[data-scan-toggle]')!;
  const speed = root.querySelector<HTMLElement>('[data-scan-speed]')!;
  const skip = root.querySelector<HTMLElement>('[data-scan-skip]')!;
  const restart = root.querySelector<HTMLElement>('[data-scan-restart]')!;
  const follow = root.querySelector<HTMLElement>('[data-scan-follow]')!;
  const mark = root.querySelector<HTMLElement>('[data-scan-mark]')!;
  const pageno = root.querySelector<HTMLElement>('[data-scan-pageno]')!;
  const queue = root.querySelector<HTMLElement>('[data-scan-queue]')!;
  const qcount = root.querySelector<HTMLElement>('[data-scan-qcount]')!;
  const tpl = root.querySelector<HTMLTemplateElement>('[data-scan-row]')!;

  let view = D.scope.first;
  let following = true;
  let selected: string | null = null;
  let selecting = false;

  const lastPage = () => Math.min(state().scope.last, D.scope.last);
  const firstPage = () => Math.max(state().scope.first, D.scope.first);

  const pick = (page: number) => {
    view = Math.min(D.scope.last, Math.max(D.scope.first, page));
    following = false;
    render();
  };
  const select = (id: string) => {
    const f = finds().find((x) => x.id === id);
    if (!f) return;
    selected = id;
    view = f.boxes.find((b) => b.page === view)?.page ?? f.page;
    following = false;
    render();
    queue.querySelector(`[data-row="${CSS.escape(id)}"]`)?.scrollIntoView({ block: 'nearest' });
  };

  const scrubber = setupPageScrubber(root.querySelector<HTMLElement>('[data-page-scrubber]')!, {
    onPage: pick,
    onFind: select,
  });
  const pageView = setupPageView(root.querySelector<HTMLElement>('[data-page-view]')!, {
    onBox: select,
    onRegion: (page, box) => {
      markRegion(page, box);
      selecting = false;
      pageView.setSelecting(false);
      const m = state().marks.at(-1);
      if (m) selected = m.id;
      render();
    },
  });

  // ── Bar ─────────────────────────────────────────────────────────────────────
  toggle.addEventListener('click', togglePause);
  speed.addEventListener('click', cycleSpeed);
  skip.addEventListener('click', skipToEnd);
  restart.addEventListener('click', () => {
    resetAll();
    view = D.scope.first;
    following = true;
    selected = null;
  });
  follow.addEventListener('click', () => {
    following = true;
    render();
  });
  mark.addEventListener('click', () => {
    selecting = !selecting;
    pageView.setSelecting(selecting);
    render();
  });
  root.querySelector('[data-scan-prev]')?.addEventListener('click', () => pick(view - 1));
  root.querySelector('[data-scan-next]')?.addEventListener('click', () => pick(view + 1));

  // ── Queue ───────────────────────────────────────────────────────────────────
  queue.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const row = t.closest<HTMLElement>('[data-row]');
    if (!row) return;
    const id = row.dataset.row!;
    if (t.closest('[data-row-dismiss]')) {
      dismissFind(id);
      if (selected === id) selected = null;
    } else if (t.closest('[data-row-merge]')) {
      mergeSplit(id);
      const part = payload().finds.find((f) => f.id === id)?.partOf;
      if (part) selected = part;
    } else if (t.closest('[data-row-open]')) select(id);
  });

  const rowMeta = (f: LiveFind) => {
    const pages = [...new Set(f.boxes.map((b) => b.page))];
    const where = pages.length > 1 ? `pp. ${pages[0]}–${pages.at(-1)}` : `p. ${f.page}`;
    if (f.kind === 'split') return [where, 'Continues a commitment'];
    if (!f.code) return [where, 'Marked'];
    if (f.kind === 'false') return [where, f.parsed ? 'No requirements found' : 'Parsing'];
    if (!f.parsed) return [where, f.marked ? 'Marked, parsing' : 'Parsing'];
    const n = commitmentOf(f.code)?.requirementIds.length ?? 0;
    return [where, `${n} requirement${n === 1 ? '' : 's'}`];
  };

  const rowEls = new Map<string, HTMLElement>();
  const renderQueue = (list: LiveFind[]) => {
    const keep = new Set(list.map((f) => f.id));
    for (const [id, el] of rowEls) if (!keep.has(id)) (el.remove(), rowEls.delete(id));
    let prev: Element | null = null;
    for (const f of list) {
      let el = rowEls.get(f.id);
      if (!el) {
        el = (tpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
        el.dataset.row = f.id;
        rowEls.set(f.id, el);
      }
      const state = f.kind === 'false' && f.parsed ? 'empty' : f.parsed ? 'parsed' : 'found';
      el.dataset.state = state;
      el.dataset.kind = f.kind;
      el.toggleAttribute('data-selected', f.id === selected);
      const badge = el.querySelector<HTMLElement>('[data-row-badge]')!;
      badge.hidden = !f.code;
      const chip = badge.querySelector('.bcn-cbadge');
      if (chip && chip.textContent !== f.code) chip.textContent = f.code.replace(/^COA\s+/, '');
      el.querySelector('[data-row-title]')!.textContent = f.title;
      const [pages, st] = rowMeta(f);
      el.querySelector('[data-row-pages]')!.textContent = pages;
      el.querySelector('[data-row-state]')!.textContent = st;
      (el.querySelector('[data-row-merge]') as HTMLElement).hidden = f.kind !== 'split';
      // Place in page order without re-inserting rows that are already in place.
      const want: Element | null = prev ? prev.nextElementSibling : queue.firstElementChild;
      if (want !== el) queue.insertBefore(el, want);
      prev = el;
    }
    qcount.textContent = String(list.filter((f) => f.code).length);
    // Following the scan, the newest find stays in view.
    if (following && prev) queue.scrollTop = queue.scrollHeight;
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  const render = () => {
    root.hidden = !started();
    if (!started()) return;
    const list = finds();
    const head = headPage();
    const done = finished() || head === null;
    if (following) view = done ? (selected ? view : firstPage()) : (head ?? lastPage());
    if (done && following) following = false;

    // Bar
    const nFound = list.filter((f) => f.code).length;
    const nParsed = list.filter((f) => f.code && f.parsed).length;
    const nGaps = gaps().size;
    const paused = state().clock?.paused;
    status.textContent = done
      ? `Read pages ${firstPage()}–${lastPage()}. ${nFound} commitments found, ${nGaps} page${nGaps === 1 ? '' : 's'} with nothing found.`
      : `${paused ? 'Paused on' : 'Reading'} page ${head}. ${nFound} commitments found, ${nParsed} parsed.`;
    setLabel(toggle, paused ? 'Resume' : 'Pause');
    setLabel(speed, `Speed ${state().clock?.speed ?? 1}×`);
    show(toggle, !done);
    show(speed, !done);
    show(skip, !done);
    show(follow, !following && !done);
    setLabel(mark, selecting ? 'Cancel marking' : 'Mark missed commitment');

    // Scrubber
    const pips = new Map<number, ScrubberPip[]>();
    for (const f of list) {
      const arr = pips.get(f.page) ?? [];
      arr.push({ id: f.id, label: `${f.code || f.title}, p. ${f.page}`, parsed: f.parsed });
      pips.set(f.page, arr);
    }
    scrubber.update({ scanned: scanned(), gaps: gaps(), inScope, head: done ? null : head, view, pips, selectedFind: selected });

    // Page
    const boxes: PageViewBox[] = [];
    for (const f of list) {
      const onPage = f.boxes.filter((b) => b.page === view);
      if (!onPage.length) continue;
      const kind = !f.code && f.marked ? 'mark' : 'find';
      onPage.forEach((b, i) =>
        boxes.push({ key: `${f.id}:${i}`, id: f.id, kind, ...b, parsed: f.parsed, selected: f.id === selected, label: f.code || f.title }),
      );
      if (!f.parsed || !f.code) continue;
      const c = commitmentOf(f.code);
      if (!c) continue;
      const reqs = D.requirements.filter((r) => r.code === f.code && r.anchor).sort((a, b) => a.anchor!.charStart - b.anchor!.charStart);
      reqs.forEach((r, ri) =>
        boxesFor(c.lines, r.anchor!.charStart, r.anchor!.charEnd)
          .filter((b) => b.page === view)
          .forEach((b, i) => boxes.push({ key: `${r.id}:${i}`, id: f.id, kind: 'span', ...b, shade: (ri % 2) + 1 })),
      );
    }
    pageView.show(view, img(view), boxes, `Page ${view} of the ITP`);
    pageno.textContent = `Page ${view}`;

    renderQueue(list);
  };

  document.addEventListener('sw3:change', render);
  // Following the head moves the page each time a page is read: that is a change event.
  render();
}
