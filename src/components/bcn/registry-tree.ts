/**
 * Controller for <BcnRegistryTree> in `review` mode.
 *
 * IT REVEALS, RE-LABELS AND RECORDS. It never builds markup. Every area, heading, duty
 * and decision badge is rendered at build time, because a panel assembled from a template
 * literal bypasses the design system entirely and no gate can see it. This file toggles
 * attributes and rewrites text inside legos that already exist — the same rule inbox.ts,
 * triage.ts and setup-workspace.ts follow.
 *
 * In `browse` mode there is nothing to drive: no selectors, no verbs. init() returns
 * early, so the same component on a read-only page costs one no-op call.
 *
 * THREE INVARIANTS:
 *
 *  1. SELECTION IS NOT A DECISION. A checkbox marks a duty for a bulk act; Approve and
 *     Not applicable are the acts. That is prod's model and BcnSetupWorkspace's.
 *  2. THE DECISION BELONGS TO THE DUTY, NOT THE PLACEMENT. 188 of the 402 duties sit
 *     under two or three subject areas, so every write fans out to every row carrying
 *     that id. Anything else lets one duty disagree with itself.
 *  3. COUNTS ARE COUNTED OFF THE DOM. Never a parallel total — the figure and the list it
 *     describes are then the same act of counting and cannot drift.
 */
import '@esa/ecology/esa-checkbox';

type Decision = 'pending' | 'approved' | 'excluded';

/** esa-badge is relabelled through its inner text span. Writing to the badge root
 *  replaces that span with a bare text node: the label still READS correctly, so the
 *  breakage is invisible, but the lego's structure is gone. */
const setBadge = (host: Element | null | undefined, text: string) => {
  const span = host?.querySelector('.esa-badge__text');
  if (span) span.textContent = text;
};

const setStat = (host: Element | null, value: string) => {
  const el = host?.querySelector('.esa-stat__value');
  if (el) el.textContent = value;
};

/** esa-progress-bar renders a static snapshot, so a live update writes the attribute,
 *  the fill and the printed percentage together or they disagree. */
const setProgress = (host: Element | null, percent: number) => {
  const bar = host?.querySelector('.esa-progress-bar');
  if (!bar) return;
  const pct = Math.max(0, Math.min(100, Math.round(percent)));
  bar.setAttribute('aria-valuenow', String(pct));
  const fill = bar.querySelector<HTMLElement>('.esa-progress-bar__fill');
  if (fill) fill.style.width = `${pct}%`;
  const value = bar.querySelector('.esa-progress-bar__value');
  if (value) value.textContent = `${pct}%`;
};

const plural = (n: number, one: string, many = `${one}s`) => (n === 1 ? one : many);

export function initRegistryTree(root: ParentNode = document) {
  const tree = root.querySelector<HTMLElement>('[data-registry-tree]');
  if (!tree || tree.getAttribute('data-mode') !== 'review') return;

  const areas = [...tree.querySelectorAll<HTMLElement>('[data-area]')];
  const rows = [...tree.querySelectorAll<HTMLElement>('[data-row-id]')];
  const checks = [...tree.querySelectorAll<HTMLElement & { checked: boolean }>('[data-row-check]')];
  if (!rows.length) return;

  const checkAll = tree.querySelector<HTMLElement & { checked: boolean; indeterminate: boolean }>(
    '[data-rt-check-all]',
  );
  const countEl = tree.querySelector('[data-rt-count]');
  const bulk = tree.querySelector<HTMLElement>('[data-rt-bulk]');
  const approveAllWrap = tree.querySelector<HTMLElement>('[data-rt-approve-all-wrap]');
  const approveAllBtn = tree.querySelector('[data-rt-approve-all]');

  const progress = root.querySelector<HTMLElement>('#bcn-registry-progress');

  /** One decision per DUTY id — the single source of truth the DOM is rendered from. */
  const decisions = new Map<string, Decision>();
  for (const row of rows) decisions.set(row.getAttribute('data-row-id') as string, 'pending');

  const idOf = (el: Element) => el.getAttribute('data-row-id') ?? el.getAttribute('data-row-check');
  const rowsFor = (id: string) => rows.filter((r) => r.getAttribute('data-row-id') === id);
  const checksFor = (id: string) => checks.filter((c) => c.getAttribute('data-row-check') === id);

  /** A row is VISIBLE when every <details> above it is open. Select-all takes what is
   *  visible and says so — a control that silently reaches into a collapsed branch is a
   *  trap (the rule BcnSetupWorkspace set). */
  const isVisible = (el: HTMLElement) => {
    let node: HTMLElement | null = el;
    while (node && node !== tree) {
      if (node instanceof HTMLDetailsElement && !node.open) return false;
      node = node.parentElement;
    }
    return true;
  };

  const visibleChecks = () => checks.filter((c) => isVisible(c));
  const selectedIds = () =>
    new Set(checks.filter((c) => c.checked).map((c) => c.getAttribute('data-row-check') as string));

  // ── Rendering a decision. Both badges exist in the markup; this reveals one. ──
  const paint = (id: string) => {
    const d = decisions.get(id) ?? 'pending';
    for (const row of rowsFor(id)) {
      row.setAttribute('data-state', d);
      const ok = row.querySelector('[data-row-approved]');
      const no = row.querySelector('[data-row-excluded]');
      if (ok) ok.toggleAttribute('hidden', d !== 'approved');
      if (no) no.toggleAttribute('hidden', d !== 'excluded');
    }
  };

  const decide = (ids: Iterable<string>, d: Decision) => {
    for (const id of ids) {
      decisions.set(id, d);
      paint(id);
      // A decided duty leaves the selection: leaving it ticked invites the same act twice.
      for (const c of checksFor(id)) c.checked = false;
    }
    refresh();
  };

  const idsUnder = (area: HTMLElement) =>
    (area.getAttribute('data-area-ids') ?? '').split(' ').filter(Boolean);

  // ── The toolbar and every branch, recomputed off the DOM. ──
  const refresh = () => {
    const selected = selectedIds();
    const total = decisions.size;
    let approved = 0;
    let excluded = 0;
    for (const d of decisions.values()) {
      if (d === 'approved') approved += 1;
      else if (d === 'excluded') excluded += 1;
    }
    const pending = total - approved - excluded;

    // The count line states the selection when there is one, and the shape of the work
    // when there is not.
    if (countEl) {
      countEl.textContent = selected.size
        ? `${selected.size} selected`
        : `${total} duties · ${approved} approved · ${excluded} not applicable · ${pending} pending`;
    }

    // The bulk verbs and Approve-all are mutually exclusive, so the toolbar never offers
    // two competing approvals at once.
    bulk?.toggleAttribute('hidden', selected.size === 0);
    approveAllWrap?.toggleAttribute('hidden', selected.size > 0 || pending === 0);
    if (approveAllBtn) approveAllBtn.textContent = `Approve all ${pending}`;

    if (checkAll) {
      const vis = visibleChecks();
      const on = vis.filter((c) => c.checked).length;
      checkAll.checked = vis.length > 0 && on === vis.length;
      checkAll.indeterminate = on > 0 && on < vis.length;
    }

    for (const area of areas) {
      const ids = idsUnder(area);
      const undecided = ids.filter((id) => decisions.get(id) === 'pending').length;
      const state = area.querySelector('[data-area-state]');
      const wrap = area.querySelector('[data-area-approve-wrap]');
      const btn = area.querySelector('[data-area-approve]');

      if (undecided === 0) {
        const ok = ids.filter((id) => decisions.get(id) === 'approved').length;
        setBadge(state, `${ok} ${plural(ok, 'duty', 'duties')} approved`);
        state?.removeAttribute('hidden');
        wrap?.setAttribute('hidden', '');
      } else {
        state?.setAttribute('hidden', '');
        wrap?.removeAttribute('hidden');
        if (btn) btn.textContent = `Approve all ${undecided} in this area`;
      }
    }

    // The page's lead band, when there is one.
    if (progress) {
      setStat(progress.querySelector('[data-rp-approved]'), String(approved));
      setStat(progress.querySelector('[data-rp-excluded]'), String(excluded));
      setStat(progress.querySelector('[data-rp-decided]'), `${approved + excluded} of ${total}`);
      setProgress(progress.querySelector('[data-rp-bar]'), ((approved + excluded) / total) * 100);
    }
  };

  // ── Selection. Fans out so a duty filed twice is ticked in both places. ──
  tree.addEventListener('change', (event) => {
    const target = event.target as (HTMLElement & { checked?: boolean }) | null;
    if (!target?.getAttribute) return;

    if (target.hasAttribute('data-rt-check-all')) {
      const on = !!target.checked;
      for (const c of visibleChecks()) c.checked = on;
      refresh();
      return;
    }

    const id = target.getAttribute('data-row-check');
    if (!id) return;
    const on = !!target.checked;
    for (const twin of checksFor(id)) if (twin !== target) twin.checked = on;
    refresh();
  });

  tree.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    // .closest() on a keyboard-dispatched target can be the document, which has no
    // closest() — guard before calling it or the handler throws and dies silently.
    if (!target || !('closest' in target)) return;

    const expand = target.closest<HTMLElement>('[data-rt-expand]');
    if (expand) {
      const open = expand.getAttribute('data-rt-expand') === 'open';
      // Duty Details stay shut on expand-all: opening 402 records is not "expand", it is
      // a wall. Only the two GROUPING levels move.
      for (const d of tree.querySelectorAll<HTMLDetailsElement>('[data-area] > details, [data-minor] > details'))
        d.open = open;
      refresh();
      return;
    }

    if (target.closest('[data-rt-bulk-approve]')) return decide(selectedIds(), 'approved');
    if (target.closest('[data-rt-bulk-exclude]')) return decide(selectedIds(), 'excluded');
    if (target.closest('[data-rt-bulk-clear]')) {
      for (const c of checks) c.checked = false;
      refresh();
      return;
    }

    if (target.closest('[data-rt-approve-all]')) {
      return decide(
        [...decisions.keys()].filter((id) => decisions.get(id) === 'pending'),
        'approved',
      );
    }

    const areaBtn = target.closest<HTMLElement>('[data-area-approve]');
    if (areaBtn) {
      const area = areaBtn.closest<HTMLElement>('[data-area]');
      if (!area) return;
      return decide(
        idsUnder(area).filter((id) => decisions.get(id) === 'pending'),
        'approved',
      );
    }
  });

  // Collapsing a branch changes what "select all in view" means, so the toolbar has to
  // recompute. `toggle` does not bubble, hence the capture phase.
  tree.addEventListener('toggle', () => refresh(), true);

  for (const id of decisions.keys()) paint(id);
  refresh();
}
