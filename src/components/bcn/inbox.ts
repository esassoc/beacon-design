// Controller for the obligations inbox (bcn-inbox-workspace).
//
// It only ever REVEALS, HIDES and RE-LABELS. Every thread is server-rendered by
// BcnInboxThread; nothing here builds markup, because a panel assembled from a template
// literal would bypass the design system and no gate could see it. Same rule as triage.ts.
//
// Three behaviours, and no more:
//   select   — clicking a queue row shows that trigger's thread and marks the row current
//   dismiss  — "Mark as seen" removes the trigger from the queue and selects the next one
//   empty    — when everything is dismissed, the panes say so rather than going blank

const root = document.querySelector<HTMLElement>('.bcn-inbox-workspace');

if (root) {
  const rows = () => [...root.querySelectorAll<HTMLElement>('[data-inbox-row]')];
  const threads = () => [...root.querySelectorAll<HTMLElement>('[data-inbox-thread]')];

  /** Show one thread, hide the rest, and mark the matching row. */
  function select(id: string) {
    for (const t of threads()) t.hidden = t.dataset.inboxThread !== id;
    for (const r of rows()) {
      const on = r.dataset.inboxRow === id;
      // aria-current rather than a class: the row IS the current item in a list, and the
      // stylesheet keys its fill off the same attribute a screen reader announces.
      if (on) r.setAttribute('aria-current', 'true');
      else r.removeAttribute('aria-current');
    }
  }

  /** The first row still in the queue, or null when the inbox is clear. */
  const firstLive = () => rows().find((r) => !r.hidden) ?? null;

  function dismiss(id: string) {
    const row = rows().find((r) => r.dataset.inboxRow === id);
    const thread = threads().find((t) => t.dataset.inboxThread === id);
    if (row) row.hidden = true;
    if (thread) thread.hidden = true;

    // A bucket whose every row is gone would leave its sticky heading floating over
    // nothing, so the heading goes with its last row.
    const group = row?.closest<HTMLElement>('.bcn-inbox-queue__group');
    if (group && [...group.querySelectorAll<HTMLElement>('[data-inbox-row]')].every((r) => r.hidden)) {
      group.hidden = true;
    }

    const next = firstLive();
    if (next?.dataset.inboxRow) select(next.dataset.inboxRow);
    else showEmpty();
  }

  /** Reveal the cleared-inbox state. Both nodes are server-rendered and start hidden. */
  function showEmpty() {
    for (const t of threads()) t.hidden = true;
    root.querySelector<HTMLElement>('[data-inbox-empty="queue"]')?.removeAttribute('hidden');
    root.querySelector<HTMLElement>('[data-inbox-empty="thread"]')?.removeAttribute('hidden');
  }

  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    const open = target.closest<HTMLElement>('[data-inbox-open]');
    if (open?.dataset.inboxOpen) {
      select(open.dataset.inboxOpen);
      return;
    }

    // esa-button renders its own inner <button>, so the attribute sits on an ancestor.
    const seen = target.closest<HTMLElement>('[data-inbox-dismiss]');
    if (seen?.dataset.inboxDismiss) dismiss(seen.dataset.inboxDismiss);
  });

  // Seed the selection from the thread the page rendered open, so the row and the pane
  // agree before anyone clicks.
  const open = threads().find((t) => !t.hidden)?.dataset.inboxThread;
  if (open) select(open);
}
