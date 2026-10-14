// Controller for <BcnSw3Scan>. setupX shape: owns the workspace's view state (the page in
// view per document, whether it follows the scan head, the selected find, select mode, the
// Aldo panel) and renders the toolbar, the scrubber, the page and the document cards from
// sw3-store on every change. The Aldo column renders itself (sw3-aldo.ts); its answers
// that move the page arrive as sw3:page / sw3:find, and it opens itself with sw3:aldo.

import {
  initSw3,
  activeDoc,
  setActiveDoc,
  docIds,
  peek,
  payload,
  started,
  finished,
  state,
  scanned,
  headPage,
  finds,
  gaps,
  inScope,
  markRegion,
  paused,
  pausing,
  rereading,
  checking,
  pace,
  skipped,
  narration,
  act,
  resetEverything,
  type Pace,
} from './sw3-store';
import { setupPageScrubber, type ScrubberPip } from './page-scrubber';
import { setupPageView, type PageViewBox } from './page-view';
import { setupSw3Docs, type DocCard } from './sw3-docs';

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
const PACE_LABEL: Record<Pace, string> = { step: 'One at a time', watch: 'Watch', run: 'Full speed' };

export function setupSw3Scan(root: HTMLElement): void {
  initSw3();
  const base = root.dataset.base!.replace(/\/$/, '');
  const $ = <T extends HTMLElement = HTMLElement>(s: string) => root.querySelector<T>(s)!;

  const status = $('[data-bar-status]');
  const toggle = $('[data-bar-toggle]');
  const follow = $('[data-bar-follow]');
  const mark = $('[data-bar-mark]');
  const aldoBtn = $('[data-bar-aldo]');
  const restart = $('[data-bar-restart]');
  const pageno = $('[data-bar-pageno]');
  const paceEl = $<HTMLElement & { value: string; options: unknown }>('[data-bar-pace]');

  // Per-document view: where each document was left.
  const views = new Map<string, number>();
  const following = new Map<string, boolean>();
  let selected: string | null = null;
  let selecting = false;

  const D = () => payload();
  const view = () => views.get(activeDoc()) ?? D().scope.first;
  const setView = (n: number) => views.set(activeDoc(), Math.min(D().total ?? n, Math.max(1, n)));
  const isFollowing = () => following.get(activeDoc()) ?? true;
  const setFollowing = (on: boolean) => following.set(activeDoc(), on);
  const firstPage = () => Math.max(state().scope.first, D().scope.first);
  const lastPage = () => Math.min(state().scope.last, D().scope.last);

  const pick = (page: number) => {
    setView(page);
    setFollowing(false);
    render();
  };
  const select = (id: string) => {
    const f = finds().find((x) => x.id === id);
    if (!f) return;
    selected = id;
    setView(f.boxes.find((b) => b.page === view())?.page ?? f.page);
    setFollowing(false);
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

  const scrubber = setupPageScrubber($('[data-page-scrubber]'), { onPage: pick, onFind: select });
  const pageView = setupPageView($('[data-page-view]'), {
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
  const docs = setupSw3Docs($('[data-sw3-docs]'), {
    onDoc: (id) => {
      selected = null;
      selecting = false;
      pageView.setSelecting(false);
      setActiveDoc(id);
    },
    onFind: select,
    onDismiss: dismiss,
  });

  // ── Toolbar ─────────────────────────────────────────────────────────────────
  // Pause, resume and pace are steers like any other: recorded, with the page they came on.
  toggle.addEventListener('click', () => {
    if (!started()) return;
    const head = headPage();
    if (checking()) act('Let it run', { kind: 'go', pace: pace() }, `Going on at ${PACE_LABEL[pace()].toLowerCase()} pace.`);
    else if (paused() || pausing()) act('Resume', { kind: 'resume' }, `Resuming at p. ${head}.`);
    else act('Pause', { kind: 'pause' }, `Pausing after p. ${head}: that page is already being read.`);
  });
  customElements.whenDefined('esa-button-toggle').then(() => {
    paceEl.options = JSON.parse(paceEl.dataset.options!);
    paceEl.value = pace();
  });
  paceEl.addEventListener('change', (e) => {
    const p = (e as CustomEvent<{ value: Pace }>).detail.value;
    if (p === pace()) return;
    const reply = p === 'run' ? 'Going at full speed.' : p === 'step' ? 'One commitment at a time: I will stop after each.' : 'Going slowly, so you can follow along.';
    act(`Pace: ${PACE_LABEL[p]}`, checking() ? { kind: 'go', pace: p } : { kind: 'pace', pace: p }, reply);
  });
  follow.addEventListener('click', () => {
    setFollowing(true);
    render();
  });
  mark.addEventListener('click', () => {
    selecting = !selecting;
    pageView.setSelecting(selecting);
    render();
  });
  const setAldo = (open: boolean) => {
    root.dataset.aldo = open ? 'open' : 'closed';
    aldoBtn.querySelector('button')?.setAttribute('aria-pressed', String(open));
    setLabel(aldoBtn, open ? 'Hide Aldo' : 'Aldo');
  };
  aldoBtn.addEventListener('click', () => setAldo(root.dataset.aldo !== 'open'));
  restart.addEventListener('click', () => {
    resetEverything();
    views.clear();
    following.clear();
    selected = null;
  });
  root.querySelector('[data-bar-prev]')?.addEventListener('click', () => pick(view() - 1));
  root.querySelector('[data-bar-next]')?.addEventListener('click', () => pick(view() + 1));
  document.addEventListener('sw3:page', (e) => pick((e as CustomEvent<{ page: number }>).detail.page));
  document.addEventListener('sw3:find', (e) => select((e as CustomEvent<{ id: string }>).detail.id));
  document.addEventListener('sw3:aldo', () => setAldo(true));

  // ── A document's one-line state, for its card ───────────────────────────────
  const docLine = () => {
    if (skipped()) return 'No commitments';
    if (!started()) return 'Not started';
    const n = finds().filter((f) => f.code).length;
    if (finished() || headPage() === null) return `${n} commitments`;
    if (checking()) return 'Waiting on your check';
    if (paused()) return `Paused after p. ${(headPage() ?? 1) - 1}`;
    return `Reading p. ${headPage()}`;
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  let lastDoc = '';
  let wasChecking = false;
  const render = () => {
    const doc = activeDoc();
    if (doc !== lastDoc) {
      lastDoc = doc;
      if (paceEl.options) paceEl.value = pace();
    }
    const on = started();
    const list = on ? finds() : [];
    const head = on ? headPage() : null;
    const done = on && (finished() || head === null);
    const again = rereading();
    const isChecking = checking();
    // The check opens Aldo: that is where the first commitments are walked through.
    if (isChecking && !wasChecking) setAldo(true);
    wasChecking = isChecking;

    if (isFollowing() && on) {
      if (isChecking) {
        // Hold on the first commitment to check, unless the person picked one.
      } else if (again.size) setView(Math.min(...again));
      else if (!done) setView(head ?? lastPage());
      else if (!selected) setView(firstPage());
    }
    if (done && isFollowing() && !again.size) setFollowing(false);

    // Toolbar
    const nFound = list.filter((f) => f.code).length;
    const isPaused = paused();
    const line = narration();
    status.textContent = skipped()
      ? 'Nothing to scan in this document.'
      : !on
        ? 'Not started. Tell Aldo where to start.'
        : isChecking
          ? `Check the first ${D().calibrate?.length ?? 3} commitments with Aldo.`
          : again.size
            ? `Re-reading p. ${Math.min(...again)}.`
            : done
              ? `Read ${range(firstPage(), lastPage())}. ${nFound} commitments.`
              : isPaused
                ? `Paused after p. ${(head ?? 1) - 1}. ${nFound} commitments so far.`
                : pausing()
                  ? `Pausing after p. ${head}.`
                  : pace() === 'run'
                    ? `Reading p. ${head}. ${nFound} commitments so far.`
                    : line || `Reading p. ${head}.`;
    setLabel(toggle, isChecking ? 'Let it run' : isPaused || pausing() ? 'Resume' : 'Pause');
    show(toggle, on && !done);
    show(follow, on && !isFollowing() && !done);
    show(mark, on);
    setLabel(mark, selecting ? 'Cancel marking' : 'Mark missed');

    // Documents: every document's line; the open one's cards.
    for (const id of docIds()) if (id !== doc) docs.line(id, peek(id, docLine), false);
    const cards: DocCard[] = list.filter((f) => f.kind !== 'split').map((f) => ({ id: f.id, code: f.code, title: f.title, parsed: f.parsed }));
    docs.update(doc, docLine(), cards, selected);
    if (isFollowing() && cards.length && !isChecking) docs.reveal(cards.at(-1)!.id);

    // Scrubber: every page of the document; a page being re-read is unread again.
    const read = new Set([...scanned()].filter((p) => !again.has(p)));
    const pips = new Map<number, ScrubberPip[]>();
    for (const f of list) {
      const arr = pips.get(f.page) ?? [];
      arr.push({ id: f.id, label: `${f.code || f.title}, p. ${f.page}`, parsed: f.parsed });
      pips.set(f.page, arr);
    }
    const scrubHead = again.size ? Math.min(...again) : done || !on ? null : head;
    scrubber.update({ total: D().total ?? D().scope.last, scanned: read, gaps: gaps(), inScope: (n) => on && inScope(n), head: scrubHead, view: view(), pips, selectedFind: selected });

    // Page: the boxes of every find on it, and the requirement spans of parsed ones.
    const v = view();
    const boxes: PageViewBox[] = [];
    const spans = D().spans ?? [];
    for (const f of list) {
      const onPage = f.boxes.filter((b) => b.page === v);
      if (!onPage.length) continue;
      const kind = !f.code && f.marked ? 'mark' : 'find';
      onPage.forEach((b, i) => boxes.push({ key: `${f.id}:${i}`, id: f.id, kind, ...b, parsed: f.parsed, selected: f.id === selected, label: f.code || f.title }));
      if (!f.parsed || !f.code) continue;
      spans
        .filter((s) => s.code === f.code)
        .forEach((s, si) =>
          s.boxes.filter((b) => b.page === v).forEach((b, i) => boxes.push({ key: `${s.id}:${i}`, id: f.id, kind: 'span', ...b, shade: (si % 2) + 1 })),
        );
    }
    pageView.show(`${base}${D().pdf}`, v, boxes, `Page ${v} of the ${D().short}`);
    pageno.textContent = `p. ${v} of ${D().total ?? ''}`;
    status.title = status.textContent ?? '';
  };

  document.addEventListener('sw3:change', render);
  render();
}
