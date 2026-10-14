// Controller for <BcnSw3Scan>. setupX shape: owns the workspace's view state (the page in
// view, whether it follows the scan head, the selected find, select mode) and renders the
// bar, the scrubber, the page and the document cards from sw3-store on every change. The
// Aldo column renders itself (sw3-aldo.ts); its "show page" answers arrive as sw3:page.

import {
  initSw3,
  started,
  finished,
  state,
  scanned,
  headPage,
  finds,
  gaps,
  inScope,
  commitmentOf,
  markRegion,
  paused,
  pausing,
  rereading,
  act,
  cycleSpeed,
  skipToEnd,
  resetAll,
} from './sw3-store';
import { setupPageScrubber, type ScrubberPip } from './page-scrubber';
import { setupPageView, type PageViewBox } from './page-view';
import { setupSw3Docs, type DocCard } from './sw3-docs';
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
const range = (a: number, b: number) => (a === b ? `p. ${a}` : `pp. ${a}–${b}`);

export function setupSw3Scan(root: HTMLElement): void {
  const D = initSw3();
  const pdf = root.dataset.pdf!;
  const docId = root.dataset.docId!;

  const status = root.querySelector<HTMLElement>('[data-scan-status]')!;
  const toggle = root.querySelector<HTMLElement>('[data-scan-toggle]')!;
  const speed = root.querySelector<HTMLElement>('[data-scan-speed]')!;
  const skip = root.querySelector<HTMLElement>('[data-scan-skip]')!;
  const restart = root.querySelector<HTMLElement>('[data-scan-restart]')!;
  const follow = root.querySelector<HTMLElement>('[data-scan-follow]')!;
  const mark = root.querySelector<HTMLElement>('[data-scan-mark]')!;
  const pageno = root.querySelector<HTMLElement>('[data-scan-pageno]')!;

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
    docs.reveal(id);
  };
  const dismiss = (id: string) => {
    const f = finds().find((x) => x.id === id);
    if (!f) return;
    const name = f.code || 'the marked passage';
    act(`Dismiss ${name}`, { kind: 'dismiss', findId: id, code: f.code }, `Removed ${name}.`);
    if (selected === id) selected = null;
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
  const docs = setupSw3Docs(root.querySelector<HTMLElement>('[data-sw3-docs]')!, { onFind: select, onDismiss: dismiss });

  // ── Bar ─────────────────────────────────────────────────────────────────────
  // Pause and resume are steers like any other: recorded, with the page they came on.
  toggle.addEventListener('click', () => {
    if (paused() || pausing()) act('Resume', { kind: 'resume' }, `Resuming at p. ${headPage()}.`);
    else act('Pause', { kind: 'pause' }, `Pausing after p. ${headPage()}: that page is already being read.`);
  });
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
  document.addEventListener('sw3:page', (e) => pick((e as CustomEvent<{ page: number }>).detail.page));

  // ── Render ──────────────────────────────────────────────────────────────────
  const render = () => {
    const on = started();
    const list = on ? finds() : [];
    const head = on ? headPage() : null;
    const done = on && (finished() || head === null);
    const again = rereading();
    if (following && on) view = done ? (selected ? view : again.size ? Math.min(...again) : firstPage()) : (head ?? lastPage());
    if (done && following && !again.size) following = false;

    // Bar
    const nFound = list.filter((f) => f.code).length;
    const isPaused = paused();
    status.textContent = !on
      ? 'Not started'
      : again.size
        ? `Re-reading p. ${Math.min(...again)}.`
        : done
          ? `Read ${range(firstPage(), lastPage())}. ${nFound} commitments.`
          : isPaused
            ? `Paused after p. ${(head ?? 1) - 1}. ${nFound} commitments so far.`
            : pausing()
              ? `Pausing after p. ${head}.`
              : `Reading p. ${head}. ${nFound} commitments so far.`;
    setLabel(toggle, isPaused || pausing() ? 'Resume' : 'Pause');
    setLabel(speed, `Speed ${state().clock?.speed ?? 1}×`);
    show(toggle, on && !done);
    show(speed, on && !done);
    show(skip, on && !done);
    show(restart, on);
    show(follow, on && !following && !done);
    show(mark, on);
    setLabel(mark, selecting ? 'Cancel marking' : 'Mark missed commitment');

    // Documents
    const docLine = !on ? 'Not started' : done ? `${nFound} commitments` : isPaused ? `Paused after p. ${(head ?? 1) - 1}` : `Reading p. ${head}`;
    const cards: DocCard[] = list
      .filter((f) => f.kind !== 'split')
      .map((f) => ({ id: f.id, code: f.code, title: f.title, parsed: f.parsed }));
    docs.update(docId, docLine, cards, selected);
    if (following && cards.length) docs.reveal(cards.at(-1)!.id);

    // Scrubber: a page being re-read is unread again until the re-read reaches it.
    const read = new Set([...scanned()].filter((p) => !again.has(p)));
    const pips = new Map<number, ScrubberPip[]>();
    for (const f of list) {
      const arr = pips.get(f.page) ?? [];
      arr.push({ id: f.id, label: `${f.code || f.title}, p. ${f.page}`, parsed: f.parsed });
      pips.set(f.page, arr);
    }
    const scrubHead = again.size ? Math.min(...again) : done ? null : head;
    scrubber.update({ scanned: read, gaps: gaps(), inScope, head: scrubHead, view, pips, selectedFind: selected });

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
    pageView.show(pdf, view, boxes, `Page ${view} of the ITP`);
    pageno.textContent = `Page ${view}`;
  };

  document.addEventListener('sw3:change', render);
  render();
}
