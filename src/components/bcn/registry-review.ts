/**
 * Controller for setup step 5 — the registry review.
 *
 * IT REVEALS, RE-LABELS AND RECORDS. It never builds markup. Every subject area, heading
 * and duty is rendered by BcnRegistryArea at build time, because a panel assembled from a
 * template literal bypasses the design system entirely and no gate can see it. This file
 * toggles attributes and rewrites text nodes inside legos that already exist — the same
 * rule inbox.ts and triage.ts follow.
 *
 * THE ONE INVARIANT: the decision belongs to the DUTY, not to where it is filed. 188 of
 * the 402 duties appear under two or three subject areas, so every write fans out to
 * every checkbox carrying that id. Anything else lets a duty read "excluded" in one area
 * and "included" in another, which is the same duty disagreeing with itself.
 *
 * COUNTS ARE COUNTED OFF THE DOM, never tracked in a parallel total — the figure and the
 * list it describes are then the same act of counting and cannot drift apart.
 */
import '@esa/ecology/esa-checkbox';

/** esa-badge must be relabelled through its inner text span. Writing to the badge root
 *  replaces that span with a bare text node: the label still READS correctly, so the
 *  breakage is invisible, but the lego's structure is gone. */
const setBadge = (host: Element | null, text: string) => {
  const span = host?.querySelector('.esa-badge__text');
  if (span) span.textContent = text;
};

const plural = (n: number, one: string, many = `${one}s`) => (n === 1 ? one : many);

export function initRegistryReview(root: ParentNode = document) {
  const frame = root.querySelector<HTMLElement>('[data-registry-tree]');
  if (!frame) return;

  const panes = [...frame.querySelectorAll<HTMLElement>('[data-area]')];
  const rows = [...frame.querySelectorAll<HTMLElement>('[data-area-row]')];
  const checks = [...frame.querySelectorAll<HTMLElement>('[data-row-check]')];
  if (!panes.length) return;

  const areasCount = frame.querySelector('[data-areas-count]');

  const rowFor = (key: string) => rows.find((r) => r.getAttribute('data-area-row') === key);
  const idsOf = (pane: HTMLElement) =>
    (pane.getAttribute('data-area-ids') ?? '').split(' ').filter(Boolean);

  /** Every checkbox for one duty, wherever it is filed. */
  const checksFor = (id: string) => checks.filter((c) => c.getAttribute('data-row-check') === id);

  /** Distinct duty ids currently excluded — counted off the DOM, deduped by id. */
  const excludedIds = () =>
    new Set(
      checks
        .filter((c) => !(c as HTMLElement & { checked: boolean }).checked)
        .map((c) => c.getAttribute('data-row-check') as string),
    );

  // ── Selecting an area. Reveals one pane; never builds one. ──
  const select = (key: string) => {
    for (const pane of panes) pane.hidden = pane.getAttribute('data-area') !== key;
    for (const row of rows) {
      const btn = row.querySelector<HTMLElement>('[data-area-open]');
      if (!btn) continue;
      if (row.getAttribute('data-area-row') === key) btn.setAttribute('aria-current', 'true');
      else btn.removeAttribute('aria-current');
    }
  };

  const confirm = (pane: HTMLElement) => {
    pane.setAttribute('data-confirmed', '');
    const gone = excludedIds();
    const kept = idsOf(pane).filter((id) => !gone.has(id)).length;

    const state = pane.querySelector('[data-area-state]');
    setBadge(state, `${kept} ${plural(kept, 'duty', 'duties')} confirmed`);
    state?.removeAttribute('hidden');
    // esa-button declares its own display and cannot be hidden directly — the wrapper is
    // the element we own.
    pane.querySelector('[data-area-confirm-wrap]')?.setAttribute('hidden', '');

    rowFor(pane.getAttribute('data-area') ?? '')
      ?.querySelector('[data-area-row-state]')
      ?.removeAttribute('hidden');
  };

  const unconfirm = (pane: HTMLElement) => {
    pane.removeAttribute('data-confirmed');
    pane.querySelector('[data-area-state]')?.setAttribute('hidden', '');
    pane.querySelector('[data-area-confirm-wrap]')?.removeAttribute('hidden');

    rowFor(pane.getAttribute('data-area') ?? '')
      ?.querySelector('[data-area-row-state]')
      ?.setAttribute('hidden', '');
  };

  /** One area's numbers, in BOTH panes, recomputed so neither can claim a figure its own
   *  rows disprove. */
  const refreshArea = (pane: HTMLElement) => {
    const ids = idsOf(pane);
    const gone = excludedIds();
    const kept = ids.filter((id) => !gone.has(id)).length;
    const dropped = ids.length - kept;

    const keptEl = pane.querySelector('[data-area-kept]');
    if (keptEl) keptEl.textContent = String(kept);

    const btn = pane.querySelector('[data-area-confirm]');
    if (btn && !pane.hasAttribute('data-confirmed')) btn.textContent = `Confirm all ${kept}`;

    const row = rowFor(pane.getAttribute('data-area') ?? '');
    const rowCount = row?.querySelector('[data-area-row-count]');
    if (rowCount) rowCount.textContent = String(kept);

    const rowExcluded = row?.querySelector('[data-area-row-excluded]');
    if (rowExcluded) {
      if (dropped > 0) {
        rowExcluded.textContent = `${dropped} not applicable`;
        rowExcluded.removeAttribute('hidden');
      } else {
        rowExcluded.setAttribute('hidden', '');
      }
    }
  };

  /** The sidebar's own count line is this variant's only headline, so it is the only
   *  thing to keep in step. Counted off the panes, never from a parallel total. */
  const refreshTotals = () => {
    const confirmed = panes.filter((p) => p.hasAttribute('data-confirmed')).length;
    if (areasCount) areasCount.textContent = String(confirmed);
  };

  // ── Row applicability. The change fans out to the duty's other placements. ──
  frame.addEventListener('change', (event) => {
    const target = event.target as (HTMLElement & { checked?: boolean }) | null;
    const id = target?.getAttribute?.('data-row-check');
    if (!id) return;

    const on = !!target!.checked;
    for (const twin of checksFor(id)) {
      if (twin !== target) (twin as HTMLElement & { checked: boolean }).checked = on;
      const row = twin.closest<HTMLElement>('[data-row-id]');
      if (row) row.toggleAttribute('data-excluded', !on);

      // Changing what an area contains un-confirms it: the person confirmed a set, and
      // this is no longer that set.
      const pane = twin.closest<HTMLElement>('[data-area]');
      if (pane?.hasAttribute('data-confirmed')) unconfirm(pane);
    }

    panes.forEach(refreshArea);
    refreshTotals();
  });

  frame.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    // .closest() on a keyboard-dispatched target can be the document, which has no
    // closest() — guard before calling it or the handler throws and dies silently.
    if (!target || !('closest' in target)) return;

    const open = target.closest<HTMLElement>('[data-area-open]');
    if (open) {
      select(open.getAttribute('data-area-open') ?? '');
      return;
    }

    const btn = target.closest<HTMLElement>('[data-area-confirm]');
    if (!btn) return;
    const pane = btn.closest<HTMLElement>('[data-area]');
    if (!pane) return;
    confirm(pane);
    refreshTotals();
  });

  panes.forEach(refreshArea);
  refreshTotals();
}
