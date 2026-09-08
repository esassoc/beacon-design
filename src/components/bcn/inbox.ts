// Controller for the obligations inbox (bcn-inbox-workspace).
//
// It only ever REVEALS, HIDES and RE-LABELS. Every thread, every marker and every verb is
// server-rendered; nothing here builds markup, because a panel assembled from a template
// literal would bypass the design system and no gate could see it. Same rule as triage.ts.
//
// Five behaviours:
//   select   — a queue row shows its thread and marks the row current
//   file     — one notice inside a thread is marked filed; counts fall
//   seen     — the whole trigger moves to the Seen view and the next one opens
//   restore  — a seen trigger comes back to Open
//   view     — the Open / Seen pivot
//
// Plus keyboard navigation, because an inbox that cannot be moved through with the keyboard
// does not feel like an inbox: ArrowUp/ArrowDown (and j/k) move between rows, e files the
// open thread, and the arrows never steal a keystroke from a text field.
import '@esa/ecology/esa-button-toggle';

const root = document.querySelector<HTMLElement>('.bcn-inbox-workspace');

if (root) {
  type View = 'open' | 'seen';
  let view: View = 'open';

  const rows = () => [...root.querySelectorAll<HTMLElement>('[data-inbox-row]')];
  const threads = () => [...root.querySelectorAll<HTMLElement>('[data-inbox-thread]')];
  const rowFor = (id: string) => rows().find((r) => r.dataset.inboxRow === id) ?? null;
  const threadFor = (id: string) => threads().find((t) => t.dataset.inboxThread === id) ?? null;
  const isSeen = (r: HTMLElement) => r.dataset.seen === '1';
  /** Rows belonging to the view on screen. */
  const inView = () => rows().filter((r) => (view === 'seen') === isSeen(r));

  const setText = (el: Element | null, value: string) => {
    if (el) el.textContent = value;
  };

  /**
   * esa-badge renders its content into an inner `.esa-badge__text`. Writing to the badge
   * ROOT instead replaces that span with a bare text node — the label still reads correctly,
   * so the bug is invisible, but the lego's internal structure is gone and any future style
   * or behaviour hanging off the inner element silently stops applying. Always relabel
   * through this.
   */
  const setBadge = (wrap: Element | null | undefined, value: string) => {
    const text = wrap?.querySelector('.esa-badge__text');
    if (text) text.textContent = value;
  };

  // ── the pivot ─────────────────────────────────────────────────────────────────
  const toggle = root.querySelector<
    HTMLElement & { options: { label: string; value: string }[]; value: string }
  >('[data-inbox-view]');

  function paintView() {
    for (const r of rows()) {
      const mine = (view === 'seen') === isSeen(r);
      r.hidden = !mine;
      // The seen marker and the restore verb belong to the Seen view only.
      const mark = r.querySelector<HTMLElement>('[data-inbox-seenmark]');
      const restore = r.querySelector<HTMLElement>('[data-inbox-restorewrap]');
      if (mark) mark.hidden = !(mine && view === 'seen');
      if (restore) restore.hidden = !(mine && view === 'seen');
    }
    // A bucket whose every row is out of view would leave its sticky heading floating over
    // nothing, so the heading goes with its rows.
    for (const group of root.querySelectorAll<HTMLElement>('.bcn-inbox-queue__group')) {
      const any = [...group.querySelectorAll<HTMLElement>('[data-inbox-row]')].some((r) => !r.hidden);
      group.hidden = !any;
    }
    recount();
    // Keep a thread on screen that belongs to the view being looked at.
    const first = inView()[0]?.dataset.inboxRow;
    if (first) select(first);
    else showEmpty();
  }

  if (toggle) {
    toggle.options = [
      { label: 'Open', value: 'open' },
      { label: 'Seen', value: 'seen' },
    ];
    toggle.addEventListener('change', (event) => {
      const next = (event as CustomEvent<{ value?: string }>).detail?.value ?? toggle.value;
      view = next === 'seen' ? 'seen' : 'open';
      paintView();
    });
  }

  // ── counts ────────────────────────────────────────────────────────────────────
  //
  // Recomputed from the DOM rather than tracked in a parallel object: the markup is already
  // the state, and a second copy of it is how the two drift apart. Obligations "in play" are
  // DISTINCT across open threads — one obligation can be raised by several triggers, so
  // summing the per-row counts would over-report it.
  function recount() {
    const open = rows().filter((r) => !isSeen(r));
    const owed = open.reduce((n, r) => n + unfiledIn(r.dataset.inboxRow ?? ''), 0);

    const distinct = new Set<string>();
    for (const r of open) {
      const thread = threadFor(r.dataset.inboxRow ?? '');
      if (!thread) continue;
      for (const link of thread.querySelectorAll<HTMLAnchorElement>('.bcn-inbox-ob__link')) {
        distinct.add(link.getAttribute('href') ?? '');
      }
    }

    setText(root.querySelector('[data-inbox-count="triggers"]'), String(open.length));
    setText(root.querySelector('[data-inbox-count="obligations"]'), String(distinct.size));

    // The page badge counts what is OWED, which is the number a person acts on.
    setBadge(
      document.querySelector('[data-inbox-total] .esa-badge'),
      `${owed} notice${owed === 1 ? '' : 's'} owed`,
    );

    // Per-row badge: relabelled, and hidden once a row owes nothing.
    for (const r of rows()) {
      const n = unfiledIn(r.dataset.inboxRow ?? '');
      const wrap = r.querySelector<HTMLElement>('.bcn-inbox-row__foot .esa-badge');
      if (!wrap) continue;
      wrap.hidden = n === 0;
      setBadge(wrap, `${n} notice${n === 1 ? '' : 's'} owed`);
    }
  }

  /** Notices in a thread that have not been filed yet. */
  function unfiledIn(id: string): number {
    const thread = threadFor(id);
    if (!thread) return 0;
    return [...thread.querySelectorAll<HTMLElement>('.bcn-inbox-ob[data-urgency="now"]')].filter(
      (ob) => ob.dataset.filed !== '1',
    ).length;
  }

  // ── select ────────────────────────────────────────────────────────────────────
  function select(id: string) {
    for (const t of threads()) t.hidden = t.dataset.inboxThread !== id;
    for (const r of rows()) {
      // aria-current rather than a class: the row IS the current item in a list, and the
      // stylesheet keys its fill off the same attribute a screen reader announces.
      if (r.dataset.inboxRow === id) r.setAttribute('aria-current', 'true');
      else r.removeAttribute('aria-current');
    }
    for (const node of root.querySelectorAll<HTMLElement>('[data-inbox-empty]')) node.hidden = true;
  }

  /**
   * The empty state is VIEW-AWARE. An empty Open list means the work is done; an empty Seen
   * list means nothing has been filed yet. Sharing one message told people "every trigger
   * has been seen" while the inbox was still full.
   */
  function showEmpty() {
    for (const t of threads()) t.hidden = true;
    root.querySelector<HTMLElement>(`[data-inbox-empty="queue-${view}"]`)?.removeAttribute('hidden');
    root.querySelector<HTMLElement>(`[data-inbox-empty="thread-${view}"]`)?.removeAttribute('hidden');
  }

  // ── file one notice ───────────────────────────────────────────────────────────
  function file(obligationId: string, target: HTMLElement) {
    const ob = target.closest<HTMLElement>('.bcn-inbox-ob');
    if (!ob) return;
    const filed = ob.dataset.filed === '1';
    ob.dataset.filed = filed ? '0' : '1';

    // The verb and the marker swap. Both were rendered; neither is built. The WRAPPER is
    // toggled, not esa-button — the lego declares its own display, which outranks [hidden].
    const wrap = ob.querySelector<HTMLElement>('[data-inbox-filewrap]');
    const mark = ob.querySelector<HTMLElement>('[data-inbox-filedmark]');
    if (wrap) wrap.hidden = !filed;
    if (mark) mark.hidden = filed;

    const thread = ob.closest<HTMLElement>('[data-inbox-thread]');
    const id = thread?.dataset.inboxThread ?? '';
    const n = unfiledIn(id);
    setBadge(thread?.querySelector('[data-inbox-owedbadge] .esa-badge'), String(n));
    recount();
  }

  // ── seen / restore ────────────────────────────────────────────────────────────
  function markSeen(id: string) {
    const row = rowFor(id);
    if (row) row.dataset.seen = '1';
    paintView();
  }

  function restore(id: string) {
    const row = rowFor(id);
    if (row) row.dataset.seen = '0';
    paintView();
  }

  // ── events ────────────────────────────────────────────────────────────────────
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    // Restore sits inside the row but outside its button, so it is checked first.
    const back = target.closest<HTMLElement>('[data-inbox-restore]');
    if (back?.dataset.inboxRestore) {
      restore(back.dataset.inboxRestore);
      return;
    }

    const fileBtn = target.closest<HTMLElement>('[data-inbox-file]');
    if (fileBtn?.dataset.inboxFile) {
      file(fileBtn.dataset.inboxFile, fileBtn);
      return;
    }

    const seen = target.closest<HTMLElement>('[data-inbox-dismiss]');
    if (seen?.dataset.inboxDismiss) {
      markSeen(seen.dataset.inboxDismiss);
      return;
    }

    const open = target.closest<HTMLElement>('[data-inbox-open]');
    if (open?.dataset.inboxOpen) select(open.dataset.inboxOpen);
  });

  // ── keyboard ──────────────────────────────────────────────────────────────────
  //
  // Two things this got wrong first time round, both worth naming:
  //
  //   The target is not always an Element. Pressing a key with nothing focused makes
  //   event.target the DOCUMENT, and calling .closest() on it throws — which killed the
  //   whole handler silently, so no shortcut worked at all.
  //
  //   Excluding the view toggle killed navigation for good. Clicking Open/Seen leaves focus
  //   inside that control, so a guard against it meant the arrows stopped working until you
  //   happened to click somewhere else. Segmented controls navigate with Left/Right, not
  //   Up/Down, so there is nothing to collide with — only TEXT ENTRY is excluded.
  document.addEventListener('keydown', (event) => {
    const el = event.target instanceof Element ? event.target : null;
    if (el?.closest('input, textarea, select, [contenteditable]')) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    const list = inView();
    if (!list.length) return;
    const currentId = rows().find((r) => r.getAttribute('aria-current') === 'true')?.dataset.inboxRow;
    const at = list.findIndex((r) => r.dataset.inboxRow === currentId);

    const move = (delta: number) => {
      event.preventDefault();
      const next = list[Math.min(list.length - 1, Math.max(0, (at === -1 ? 0 : at) + delta))];
      const id = next?.dataset.inboxRow;
      if (!id) return;
      select(id);
      // Follow the selection with the scrollport so keyboard paging never leaves the
      // current row off screen.
      next.scrollIntoView({ block: 'nearest' });
    };

    if (event.key === 'ArrowDown' || event.key === 'j') move(1);
    else if (event.key === 'ArrowUp' || event.key === 'k') move(-1);
    else if (event.key === 'e' && currentId) {
      event.preventDefault();
      markSeen(currentId);
    }
  });

  // Seed from the thread the page rendered open, so the row and the pane agree before
  // anyone clicks, then paint the counts once.
  const open = threads().find((t) => !t.hidden)?.dataset.inboxThread;
  if (open) select(open);
  recount();
}
