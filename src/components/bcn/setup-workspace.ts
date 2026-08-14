// setup-workspace — behavior for <BcnSetupWorkspace>, Model A of the Component setup
// redesign (the sibling model is <BcnSetupQueue>).
//
// EVERY ROW IS SERVER-RENDERED and hidden; this file only ever reveals, hides, and
// re-labels. Nothing here builds markup — the same pre-render-and-toggle strategy
// BcnEvidenceTargets and BcnSearchResults use, because Astro's legos are compile-time and
// a runtime-built row would be a hand-written copy of one.
//
// THE COUNT DISCIPLINE. Prod's "pending" badge counts a LEFT-JOIN cross product while the
// list beneath it is filtered, so the two are never talking about the same set. Here the
// view toggle's segment counts are produced by COUNTING THE ROWS THEMSELVES (countScope
// walks the DOM), and the selection is pruned to visible rows on every view or filter
// change. A number on this screen cannot claim a set the list does not render.
import {
  SETUP_COMMITMENTS,
  SETUP_TOTALS,
  LAST_REVIEWED,
  facetsFor,
  fmtDate,
  type ApplicableCommitment,
  type Decision,
} from '../../data/component-commitments';

type View = 'undecided' | 'new' | 'applied' | 'dismissed';
type FacetKey = 'source' | 'type' | 'species';

interface ToggleEl extends HTMLElement {
  options: { label: string; value: string }[];
  value: string;
}
interface FilterDropdownEl extends HTMLElement {
  options: { label: string; value: string }[];
  _selected: string[];
}
interface OpenableEl extends HTMLElement {
  open: boolean;
  show?: () => void;
  close?: () => void;
}
interface ValueEl extends HTMLElement {
  value: string;
}
interface CheckboxEl extends HTMLElement {
  checked: boolean;
}

const VIEW_LABEL: Record<View, string> = {
  undecided: 'Needs a decision',
  new: 'New since review',
  applied: 'Applied',
  dismissed: 'Dismissed',
};
const VIEW_ORDER: View[] = ['undecided', 'new', 'applied', 'dismissed'];

const plural = (n: number, one: string, many = `${one}s`) => (n === 1 ? one : many);

export function initSetupWorkspace(): void {
  const root = document.querySelector<OpenableEl>('[data-setup-workspace]');
  if (!root) return;
  const dialog = document.querySelector<OpenableEl>('[data-sw-dialog]');
  if (!dialog) return;

  const rows = Array.from(root.querySelectorAll<HTMLLIElement>('[data-sw-row]'));
  const byId = new Map(SETUP_COMMITMENTS.map((c) => [c.id, c]));

  // ── Session state. `decisions` and `rationales` are the in-memory overlay on the
  //    fixture; the fixture itself is never mutated, so a reload is a clean slate. ──
  const decisions = new Map<string, Decision | null>(
    SETUP_COMMITMENTS.map((c) => [c.id, c.decision]),
  );
  const rationales = new Map<string, string>(
    SETUP_COMMITMENTS.flatMap((c) => (c.rationale ? [[c.id, c.rationale] as [string, string]] : [])),
  );
  const touched = new Set<string>();
  const selected = new Set<string>();
  const facets: Record<FacetKey, Set<string>> = {
    source: new Set(),
    type: new Set(),
    species: new Set(),
  };
  let view: View = 'undecided';
  let preview: string | null = null;
  /** Which decision the open rationale dialog is about to write. */
  let pendingBulk: Decision = 'applied';

  // ── Elements ──
  const toggle = root.querySelector<ToggleEl>('[data-sw-view]')!;
  const dropdowns: Record<FacetKey, FilterDropdownEl> = {
    source: root.querySelector<FilterDropdownEl>('[data-sw-facet="source"]')!,
    type: root.querySelector<FilterDropdownEl>('[data-sw-facet="type"]')!,
    species: root.querySelector<FilterDropdownEl>('[data-sw-facet="species"]')!,
  };
  const pillWrap = root.querySelector<HTMLElement>('[data-sw-pills]')!;
  const noneEl = root.querySelector<HTMLElement>('[data-sw-none]')!;
  const noPreviewEl = root.querySelector<HTMLElement>('[data-sw-nopreview]')!;
  const bulkEl = root.querySelector<HTMLElement>('[data-sw-bulk]')!;
  const bulkCountEl = root.querySelector<HTMLElement>('[data-sw-bulk-count]')!;
  const pendingEl = root.querySelector<HTMLElement>('[data-sw-pending]')!;
  const scrollEl = root.querySelector<HTMLElement>('[data-sw-scroll]')!;

  const dialogWhat = dialog.querySelector<HTMLElement>('[data-sw-dialog-what]')!;
  const dialogWarn = dialog.querySelector<HTMLElement>('[data-sw-dialog-warn]')!;
  const dialogWarnText = dialog.querySelector<HTMLElement>('[data-sw-dialog-warn-text]')!;
  const dialogRationale = dialog.querySelector<ValueEl>('[data-sw-dialog-rationale]')!;
  // esa-button forwards data-* to its NATIVE button, so this is the <button> itself; its
  // text lives in the lego's .esa-button__label span, which is what must be re-labelled.
  const dialogConfirm = dialog.querySelector<HTMLElement>('[data-sw-dialog-confirm]')!;
  const dialogConfirmLabel =
    dialogConfirm.querySelector<HTMLElement>('.esa-button__label') ?? dialogConfirm;

  // ── Scope predicates. `undecided` means NO DECISION ROW EXISTS FOR THIS COMPONENT —
  //    not "no row in a cross product of the project's components and commitments". ──
  const inView = (c: ApplicableCommitment, v: View): boolean => {
    const d = decisions.get(c.id) ?? null;
    switch (v) {
      case 'undecided':
        return d === null;
      case 'new':
        return d === null && c.addedOn > LAST_REVIEWED;
      case 'applied':
        return d === 'applied';
      case 'dismissed':
        return d === 'dismissed';
    }
  };

  const scopeFor = (v: View): ApplicableCommitment[] =>
    SETUP_COMMITMENTS.filter((c) => inView(c, v));

  const matchesFacets = (c: ApplicableCommitment): boolean =>
    (facets.source.size === 0 || facets.source.has(c.sourceId)) &&
    (facets.type.size === 0 || facets.type.has(c.requirementType)) &&
    (facets.species.size === 0 || c.species.some((s) => facets.species.has(s)));

  // ── Renderers ──────────────────────────────────────────────────────────────────

  /** Segment counts, counted off the rows the segment would actually render. */
  function renderToggle(): void {
    toggle.options = VIEW_ORDER.map((v) => ({
      value: v,
      label: `${VIEW_LABEL[v]} (${scopeFor(v).length})`,
    }));
    toggle.value = view;
  }

  /** Facets recompute with the view, and every option carries its own count. */
  function renderFacets(): void {
    const scope = scopeFor(view);
    for (const facet of facetsFor(scope)) {
      const key = facet.key as FacetKey;
      const el = dropdowns[key];
      if (!el) continue;
      const live = new Set(facet.options.map((o) => o.value));
      // Drop any active value the new scope cannot produce — an active filter matching
      // nothing is the same lie as a count matching nothing.
      for (const v of [...facets[key]]) if (!live.has(v)) facets[key].delete(v);
      el.options = facet.options.map((o) => ({ value: o.value, label: `${o.label} (${o.count})` }));
      el._selected = [...facets[key]];
    }
  }

  function renderPills(): void {
    let active = 0;
    pillWrap.querySelectorAll<HTMLElement>('[data-esa-filter-remove]').forEach((btn) => {
      const key = btn.dataset.name as FacetKey | undefined;
      const value = btn.dataset.value ?? '';
      const chip = btn.closest<HTMLElement>('.esa-filter-pills__chip');
      if (!chip || !key) return;
      const on = !!facets[key]?.has(value);
      chip.hidden = !on;
      if (on) active++;
    });
    pillWrap.hidden = active === 0;
  }

  /** The lead band, kept honest as decisions are made in-session. */
  function renderFigures(): void {
    const undecided = scopeFor('undecided');
    const newSince = scopeFor('new');
    const decided = SETUP_TOTALS.total - undecided.length;
    const percent = Math.round((decided / SETUP_TOTALS.total) * 100);
    const actionsAtStake = undecided.reduce((n, c) => n + c.actions.length, 0);

    setFigure('undecided', String(undecided.length), `${actionsAtStake} actions they would create`);
    setFigure('new', String(newSince.length), `Last reviewed ${fmtDate(LAST_REVIEWED)}`);
    setFigure('decided', `${decided} of ${SETUP_TOTALS.total}`, undefined);

    const bar = root!.querySelector<HTMLElement>('[data-sw-progress] .esa-progress-bar');
    const fill = bar?.querySelector<HTMLElement>('.esa-progress-bar__fill');
    const valueEl = bar?.querySelector<HTMLElement>('.esa-progress-bar__value');
    if (fill) fill.style.width = `${percent}%`;
    if (valueEl) valueEl.textContent = `${percent}%`;
    bar?.setAttribute('aria-valuenow', String(percent));
  }

  function setFigure(name: string, value: string, sub?: string): void {
    const host = root!.querySelector<HTMLElement>(`[data-sw-figure="${name}"]`);
    if (!host) return;
    const v = host.querySelector<HTMLElement>('.esa-stat__value');
    if (v) v.textContent = value;
    const s = host.querySelector<HTMLElement>('.esa-stat__sub');
    if (s && sub !== undefined) s.textContent = sub;
  }

  /** Reveal the rows in scope AND past the facets; prune the selection to what shows. */
  function renderRows(): void {
    let visible = 0;
    for (const row of rows) {
      const c = byId.get(row.dataset.swRow ?? '');
      const show = !!c && inView(c, view) && matchesFacets(c);
      row.hidden = !show;
      if (show) visible++;
      else if (c && selected.delete(c.id)) uncheck(row);
    }
    noneEl.hidden = visible > 0;
  }

  function uncheck(row: HTMLElement): void {
    const box = row.querySelector<CheckboxEl>('esa-checkbox');
    if (box) box.checked = false;
  }

  function renderBulk(): void {
    bulkEl.hidden = selected.size === 0;
    bulkCountEl.textContent = `${selected.size} selected`;
  }

  function renderPending(): void {
    pendingEl.hidden = touched.size === 0;
    pendingEl.textContent = `${touched.size} ${plural(touched.size, 'decision')} not yet saved`;
  }

  /** Show one commitment in the preview; the row it belongs to takes the active tint. */
  function renderPreview(): void {
    noPreviewEl.hidden = preview !== null;
    root!.querySelectorAll<HTMLElement>('[data-sw-preview]').forEach((el) => {
      el.hidden = el.dataset.swPreview !== preview;
    });
    for (const row of rows) {
      if (row.dataset.swRow === preview) row.setAttribute('data-active', '');
      else row.removeAttribute('data-active');
    }
    if (!preview) return;

    const panel = root!.querySelector<HTMLElement>(`[data-sw-preview="${preview}"]`);
    const block = panel?.querySelector<HTMLElement>('[data-sw-prev-decision]');
    const decision = decisions.get(preview) ?? null;
    if (!panel || !block) return;
    block.hidden = decision === null;
    if (decision === null) return;
    const decEl = block.querySelector<HTMLElement>('[data-sw-prev-decval]');
    const ratEl = block.querySelector<HTMLElement>('[data-sw-prev-rationale]');
    if (decEl) decEl.textContent = decision === 'applied' ? 'Applied' : 'Dismissed';
    if (ratEl) ratEl.textContent = rationales.get(preview) || 'None recorded';
  }

  /** One pass. Order matters: rows first (it prunes the selection), then the summaries. */
  function render(): void {
    renderToggle();
    renderFacets();
    renderPills();
    renderRows();
    renderBulk();
    renderPending();
    renderFigures();
    renderPreview();
  }

  // ── Writing a decision ─────────────────────────────────────────────────────────

  function decide(ids: string[], decision: Decision, rationale?: string): void {
    for (const id of ids) {
      const row = rows.find((r) => r.dataset.swRow === id);
      decisions.set(id, decision);
      touched.add(id);
      if (rationale !== undefined && rationale !== '') rationales.set(id, rationale);
      if (row) {
        row.dataset.decision = decision;
        row.dataset.rationale = rationales.has(id) ? 'true' : 'false';
      }
    }
    root!.dispatchEvent(
      new CustomEvent('bcn-setup-decision', {
        detail: { ids, decision, rationale: rationale ?? null },
        bubbles: true,
        composed: true,
      }),
    );
    render();
  }

  /**
   * The bulk write goes through a rationale dialog, and the dialog NAMES how many of the
   * selected commitments already carry a rationale it would replace. Prod overwrites
   * silently; that is a real defect, not a rough edge.
   */
  function openBulkDialog(decision: Decision): void {
    pendingBulk = decision;
    const ids = [...selected];
    const verb = decision === 'applied' ? 'Apply' : 'Dismiss';
    dialog!.setAttribute('heading', `${verb} ${ids.length} ${plural(ids.length, 'commitment')}`);

    const actions = ids.reduce((n, id) => n + (byId.get(id)?.actions.length ?? 0), 0);
    dialogWhat.textContent =
      decision === 'applied'
        ? `Applying creates ${actions} ${plural(actions, 'action')} on this component.`
        : `Dismissing removes ${actions} ${plural(actions, 'action')} from this component.`;

    const overwrite = ids.filter((id) => rationales.has(id)).length;
    dialogWarn.hidden = overwrite === 0;
    dialogWarnText.textContent = `${overwrite} of the ${ids.length} selected ${plural(overwrite, 'carries', 'carry')} a rationale. Saving replaces ${overwrite === 1 ? 'it' : 'them'}.`;

    dialogRationale.value = '';
    dialogConfirmLabel.textContent = verb;
    dialog!.open = true;
  }

  // ── Wiring ─────────────────────────────────────────────────────────────────────

  toggle.addEventListener('change', (e) => {
    view = ((e as CustomEvent).detail?.value as View) ?? 'undecided';
    render();
    scrollEl.scrollTop = 0;
  });

  (Object.keys(dropdowns) as FacetKey[]).forEach((key) => {
    dropdowns[key].addEventListener('selection-change', (e) => {
      const value = (e as CustomEvent).detail?.value;
      facets[key] = new Set(Array.isArray(value) ? value : value ? [value] : []);
      render();
    });
  });

  // esa-filter-pills' own remove button and esa-filter-clear-button both bubble their
  // event, so the container listens once for each rather than per control.
  root.addEventListener('esa-filter-remove', (e) => {
    const { name, value } = (e as CustomEvent).detail ?? {};
    if (!name || !(name in facets)) return;
    facets[name as FacetKey].delete(value);
    render();
  });
  root.addEventListener('esa-filter-clear', () => {
    (Object.keys(facets) as FacetKey[]).forEach((k) => facets[k].clear());
    render();
  });

  // Row-level: select for bulk, open in the preview, or decide inline.
  root.addEventListener('change', (e) => {
    const box = (e.target as HTMLElement)?.closest<HTMLElement>('[data-sw-check]');
    if (!box) return;
    const id = box.dataset.swCheck!;
    if ((box as CheckboxEl).checked) selected.add(id);
    else selected.delete(id);
    renderBulk();
  });

  root.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    const open = target.closest<HTMLElement>('[data-sw-open]');
    if (open) {
      preview = open.dataset.swOpen!;
      renderPreview();
      return;
    }

    const apply = target.closest<HTMLElement>('[data-sw-apply]');
    if (apply) return decide([apply.dataset.swApply!], 'applied');

    const dismiss = target.closest<HTMLElement>('[data-sw-dismiss]');
    if (dismiss) return decide([dismiss.dataset.swDismiss!], 'dismissed');

    if (target.closest('[data-sw-bulk-apply]')) return openBulkDialog('applied');
    if (target.closest('[data-sw-bulk-dismiss]')) return openBulkDialog('dismissed');
    if (target.closest('[data-sw-bulk-clear]')) {
      selected.forEach((id) => {
        const row = rows.find((r) => r.dataset.swRow === id);
        if (row) uncheck(row);
      });
      selected.clear();
      renderBulk();
      return;
    }

    if (target.closest('[data-sw-cancel]')) return root!.close?.();
    if (target.closest('[data-sw-save]')) {
      const applied = [...touched].filter((id) => decisions.get(id) === 'applied');
      const dismissed = [...touched].filter((id) => decisions.get(id) === 'dismissed');
      root!.dispatchEvent(
        new CustomEvent('bcn-setup-save', {
          detail: { applied, dismissed, count: touched.size },
          bubbles: true,
          composed: true,
        }),
      );
      touched.clear();
      renderPending();
      root!.close?.();
    }
  });

  dialog.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-sw-dialog-cancel]')) {
      dialog.open = false;
      return;
    }
    if (!target.closest('[data-sw-dialog-confirm]')) return;
    const ids = [...selected];
    dialog.open = false;
    decide(ids, pendingBulk, dialogRationale.value.trim());
    ids.forEach((id) => {
      const row = rows.find((r) => r.dataset.swRow === id);
      if (row) uncheck(row);
    });
    selected.clear();
    // The decided rows leave the "needs a decision" view; land the user on the result.
    preview = ids[0] ?? preview;
    render();
  });

  // ── Open / close. Any [data-setup-workspace-open] in the page is a trigger, the same
  //    delegate BcnGuidanceDrawer uses for its help affordance. ──
  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest('[data-setup-workspace-open]');
    if (!trigger) return;
    e.preventDefault();
    root.show?.();
    requestAnimationFrame(() => {
      scrollEl.scrollTop = 0;
    });
  });

  // Closing dismisses the rationale dialog and drops the (unsaved) selection; decisions
  // already made stay on the session overlay so reopening shows the same state.
  root.addEventListener('close', () => {
    dialog.open = false;
    selected.forEach((id) => {
      const row = rows.find((r) => r.dataset.swRow === id);
      if (row) uncheck(row);
    });
    selected.clear();
    renderBulk();
  });

  render();
}
