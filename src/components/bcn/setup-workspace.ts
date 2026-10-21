// setup-workspace — behavior for <BcnSetupWorkspace>, the Applicable Commitments drawer.
//
// Every row is server-rendered and hidden; this file reveals, hides and re-labels
// them. All state lives in the shared applicability store: a decision made here is
// written there on click (prod's immediate write), and the store's change event
// re-renders this drawer, the dashboard card and the setup dialog together.
//
// THE COUNT DISCIPLINE (unchanged from what shipped): the view toggle's counts and
// the lead figures are counted off the same scoped list the rows render, and the
// selection is pruned to visible rows on every change. A number here cannot claim
// a set the list doesn't show.
import {
  SETUP_COMMITMENTS,
  facetsFor,
  fmtDate,
  speciesOf,
  typesOf,
  type ApplicableCommitment,
  type Decision,
} from '../../data/component-commitments';
import { applicability as store, rationaleText } from './applicability-store';

type View = 'needs' | 'applied' | 'dismissed';
type FacetKey = 'source' | 'type' | 'species';
type DialogMode = 'apply' | 'dismiss' | 'undo' | 'accept';

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
  indeterminate?: boolean;
}
interface TooltipEl extends HTMLElement {
  text: string;
}

const VIEW_LABEL: Record<View, string> = { needs: 'Needs a decision', applied: 'Applied', dismissed: 'Dismissed' };
const VIEW_ORDER: View[] = ['needs', 'applied', 'dismissed'];
const plural = (n: number, one: string, many = `${one}s`) => (n === 1 ? one : many);
const escapeHtml = (s: string) => s.replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]!);

export function initSetupWorkspace(): void {
  const root = document.querySelector<OpenableEl>('[data-setup-workspace]');
  const dialog = document.querySelector<OpenableEl>('[data-sw-dialog]');
  if (!root || !dialog) return;

  const rows = Array.from(root.querySelectorAll<HTMLLIElement>('[data-sw-row]'));
  const rowById = new Map(rows.map((r) => [r.dataset.swRow!, r]));
  const byId = new Map(SETUP_COMMITMENTS.map((c) => [c.id, c]));

  const selected = new Set<string>();
  const facets: Record<FacetKey, Set<string>> = { source: new Set(), type: new Set(), species: new Set() };
  let view: View = 'needs';
  let query = '';
  let preview: string | null = null;
  let mode: DialogMode = 'apply';
  let pendingIds: string[] = [];

  const toggle = root.querySelector<ToggleEl>('[data-sw-view]')!;
  const dropdowns: Record<FacetKey, FilterDropdownEl> = {
    source: root.querySelector<FilterDropdownEl>('[data-sw-facet="source"]')!,
    type: root.querySelector<FilterDropdownEl>('[data-sw-facet="type"]')!,
    species: root.querySelector<FilterDropdownEl>('[data-sw-facet="species"]')!,
  };
  const clearEl = root.querySelector<HTMLElement>('[data-sw-clear]')!;
  const noneEl = root.querySelector<HTMLElement>('[data-sw-none]')!;
  const noPreviewEl = root.querySelector<HTMLElement>('[data-sw-nopreview]')!;
  const bulkEl = root.querySelector<HTMLElement>('[data-sw-bulk]')!;
  const acceptEl = root.querySelector<HTMLElement>('[data-sw-accept]')!;
  const acceptLabel = root.querySelector<HTMLElement>('[data-sw-accept-label]')!;
  const checkAllEl = root.querySelector<CheckboxEl>('[data-sw-check-all]');
  const listCountEl = root.querySelector<HTMLElement>('[data-sw-listcount]');
  const scrollEl = root.querySelector<HTMLElement>('[data-sw-scroll]')!;

  const dialogWhat = dialog.querySelector<HTMLElement>('[data-sw-dialog-what]')!;
  const dialogWarn = dialog.querySelector<HTMLElement>('[data-sw-dialog-warn]')!;
  const dialogWarnText = dialog.querySelector<HTMLElement>('[data-sw-dialog-warn-text]')!;
  const dialogRatWrap = dialog.querySelector<HTMLElement>('[data-sw-dialog-ratwrap]')!;
  const dialogRationale = dialog.querySelector<ValueEl>('[data-sw-dialog-rationale]')!;
  const dialogConfirm = dialog.querySelector<HTMLElement>('[data-sw-dialog-confirm]')!;
  const dialogConfirmLabel = dialogConfirm.querySelector<HTMLElement>('.esa-button__label') ?? dialogConfirm;

  // ── Scope ──
  const decisionOf = (c: ApplicableCommitment): Decision | null => store.record(c.id).decision;
  const inView = (c: ApplicableCommitment, v: View): boolean => {
    if (!store.inScope(c)) return false;
    const d = decisionOf(c);
    return v === 'needs' ? d === null : d === v;
  };
  const scopeFor = (v: View) => SETUP_COMMITMENTS.filter((c) => inView(c, v));
  const matchesFacets = (c: ApplicableCommitment) =>
    (facets.source.size === 0 || facets.source.has(c.sourceId)) &&
    (facets.type.size === 0 || typesOf(c).some((t) => facets.type.has(t))) &&
    (facets.species.size === 0 || speciesOf(c).some((s) => facets.species.has(s)));
  const matchesQuery = (c: ApplicableCommitment) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q);
  };
  const visibleRows = () => rows.filter((r) => !r.hidden);

  // ── Renderers ──
  function renderToggle(): void {
    toggle.options = VIEW_ORDER.map((v) => ({ value: v, label: `${VIEW_LABEL[v]} (${scopeFor(v).length})` }));
    toggle.value = view;
  }

  function renderFacets(): void {
    for (const facet of facetsFor(scopeFor(view))) {
      const key = facet.key as FacetKey;
      const live = new Set(facet.options.map((o) => o.value));
      for (const v of [...facets[key]]) if (!live.has(v)) facets[key].delete(v);
      dropdowns[key].options = facet.options.map((o) => ({ value: o.value, label: `${o.label} (${o.count})` }));
      dropdowns[key]._selected = [...facets[key]];
    }
    clearEl.hidden = !query && Object.values(facets).every((s) => s.size === 0);
  }

  function renderFigures(): void {
    const f = store.figures();
    const set = (name: string, value: string) => {
      const el = root!.querySelector<HTMLElement>(`[data-sw-fig="${name}"]`);
      if (el) el.textContent = value;
    };
    set('undecided', String(f.undecided));
    set('decided', `${f.decided} of ${f.total}`);
    const bar = root!.querySelector<HTMLElement>('[data-sw-progress] .esa-progress-bar');
    const fill = bar?.querySelector<HTMLElement>('.esa-progress-bar__fill');
    const valueEl = bar?.querySelector<HTMLElement>('.esa-progress-bar__value');
    if (fill) fill.style.width = `${f.percent}%`;
    if (valueEl) valueEl.textContent = `${f.percent}%`;
    bar?.setAttribute('aria-valuenow', String(f.percent));
  }

  /** The row's own state: decision chip, its tooltip, the setup note, the search highlight. */
  function paintRow(row: HTMLElement, c: ApplicableCommitment): void {
    const rec = store.record(c.id);
    row.dataset.decision = rec.decision ?? '';
    const tip = row.querySelector<TooltipEl>(`[data-sw-tip="${rec.decision}"]`);
    if (tip && rec.decision) {
      const verb = rec.decision === 'applied' ? 'Applied' : 'Dismissed';
      tip.text = verb + (rec.date ? ` ${fmtDate(rec.date)}` : '');
    }
    const note = row.querySelector<HTMLElement>('[data-sw-note]')!;
    const r = store.recommendationFor(c);
    let text = '';
    if (r) text = `Recommended not applicable: ${r.reasons.join(' · ')}`;
    else if (rec.decision === null && rec.reopened) text = `Back from setup: was ${rec.reopened.was.join(' · ').replace(/^./, (m) => m.toLowerCase())}`;
    else if (rec.decision) text = rationaleText(rec);
    note.textContent = text;
    note.hidden = !text;
    const flagged = store.nowSaysOut(c);
    const flag = row.querySelector<HTMLElement>('[data-sw-flag]')!;
    flag.hidden = !flagged;
    if (flagged) flag.querySelector<HTMLElement>('[data-sw-flag-text]')!.textContent = `Setup now says not applicable: ${flagged.reasons.join(' · ')}`;
    const name = row.querySelector<HTMLElement>('[data-sw-name]')!;
    if (query) {
      const i = c.title.toLowerCase().indexOf(query.toLowerCase());
      name.innerHTML =
        i < 0
          ? escapeHtml(c.title)
          : `${escapeHtml(c.title.slice(0, i))}<mark>${escapeHtml(c.title.slice(i, i + query.length))}</mark>${escapeHtml(c.title.slice(i + query.length))}`;
    } else name.textContent = c.title;
  }

  function renderRows(): void {
    let visible = 0;
    for (const row of rows) {
      const c = byId.get(row.dataset.swRow ?? '');
      if (!c) continue;
      paintRow(row, c);
      const show = inView(c, view) && matchesFacets(c) && matchesQuery(c);
      row.hidden = !show;
      if (show) visible++;
      else if (selected.delete(c.id)) uncheck(row);
    }
    noneEl.hidden = visible > 0;
  }

  function uncheck(row: HTMLElement): void {
    const box = row.querySelector<CheckboxEl>('esa-checkbox');
    if (box) box.checked = false;
  }

  function renderListHead(): void {
    const shown = visibleRows();
    const chosen = shown.filter((r) => selected.has(r.dataset.swRow ?? ''));
    if (listCountEl)
      listCountEl.textContent = chosen.length
        ? `${chosen.length} of ${shown.length} selected`
        : `${shown.length} ${plural(shown.length, 'commitment')}`;
    if (checkAllEl) {
      checkAllEl.checked = shown.length > 0 && chosen.length === shown.length;
      checkAllEl.indeterminate = chosen.length > 0 && chosen.length < shown.length;
    }
    bulkEl.hidden = selected.size === 0;
    const recIds = recommendedInView();
    acceptEl.hidden = selected.size > 0 || view !== 'needs' || recIds.length === 0;
    acceptLabel.textContent = `Dismiss ${recIds.length} recommended`;
  }

  const recommendedInView = () =>
    visibleRows()
      .map((r) => byId.get(r.dataset.swRow!)!)
      .filter((c) => store.recommendationFor(c))
      .map((c) => c.id);

  function renderPreview(): void {
    noPreviewEl.hidden = preview !== null;
    root!.querySelectorAll<HTMLElement>('[data-sw-preview]').forEach((el) => {
      el.hidden = el.dataset.swPreview !== preview;
    });
    for (const row of rows) row.toggleAttribute('data-active', row.dataset.swRow === preview);
    if (!preview) return;
    const c = byId.get(preview)!;
    const panel = root!.querySelector<HTMLElement>(`[data-sw-preview="${preview}"]`)!;
    const rec = store.record(preview);

    const recBlock = panel.querySelector<HTMLElement>('[data-sw-prev-rec]')!;
    // An open recommendation, or a setup apply the current setup now says is out.
    const flagged = store.nowSaysOut(c);
    const r = store.recommendationFor(c) ?? flagged;
    recBlock.hidden = !r;
    recBlock.querySelector<HTMLElement>('[data-sw-prev-rectitle]')!.textContent = flagged ? 'Setup now says not applicable' : 'Recommended not applicable';
    if (r) panel.querySelector<HTMLElement>('[data-sw-prev-reasons]')!.innerHTML = r.reasons.map((x) => `<li>${escapeHtml(x)}</li>`).join('');

    // The consequence, only while applying is still on the table (prod).
    const effect = panel.querySelector<HTMLElement>('[data-sw-prev-effect]')!;
    effect.hidden = c.actions.length === 0 || rec.decision === 'applied';

    const block = panel.querySelector<HTMLElement>('[data-sw-prev-decision]')!;
    const decEl = block.querySelector<HTMLElement>('[data-sw-prev-decval]')!;
    const ratWrap = block.querySelector<HTMLElement>('[data-sw-prev-ratwrap]')!;
    const ratEl = block.querySelector<HTMLElement>('[data-sw-prev-rationale]')!;
    const ratLabel = ratWrap.querySelector<HTMLElement>('.bcn-key-value__key');
    if (rec.decision) {
      block.hidden = false;
      decEl.textContent = `${rec.decision === 'applied' ? 'Applied' : 'Dismissed'}${rec.date ? ` · ${fmtDate(rec.date)}` : ''}`;
      ratWrap.hidden = false;
      ratEl.textContent = rationaleText(rec);
      if (ratLabel) ratLabel.textContent = 'Rationale';
    } else if (rec.reopened) {
      block.hidden = false;
      decEl.textContent = `Needs a decision · setup changed ${fmtDate(rec.reopened.date)}`;
      ratWrap.hidden = false;
      ratEl.textContent = rec.reopened.was.join(' · ');
      if (ratLabel) ratLabel.textContent = 'Was dismissed for';
    } else block.hidden = true;
  }

  function render(): void {
    renderToggle();
    renderFacets();
    renderRows();
    renderListHead();
    renderFigures();
    renderPreview();
  }

  // ── The confirm prompt ──
  function openDialog(next: DialogMode, ids: string[]): void {
    if (!ids.length) return;
    mode = next;
    pendingIds = ids;
    const n = ids.length;
    const bulk = n > 1;
    const verb = { apply: 'Apply', dismiss: 'Dismiss', undo: 'Undo', accept: 'Dismiss' }[mode];
    const heading =
      mode === 'undo' ? 'Undo decisions' : mode === 'accept' ? 'Dismiss recommended commitments' : `${verb} ${bulk ? 'commitments' : 'commitment'}`;
    dialog!.setAttribute('heading', heading);
    if (mode === 'undo') dialogWhat.textContent = `Undo ${n} ${plural(n, 'decision')}? This returns ${n === 1 ? 'the commitment' : 'them'} to Needs a decision.`;
    else if (mode === 'accept') dialogWhat.textContent = `Dismiss ${n} ${plural(n, 'commitment')} recommended not applicable. Each keeps its reason, and comes back to Needs a decision if setup changes and the reason no longer holds.`;
    else {
      const actions = ids.reduce((sum, id) => sum + (byId.get(id)?.actions.length ?? 0), 0);
      const effect =
        mode === 'apply'
          ? `Applying creates ${actions} ${plural(actions, 'action')} on this component.`
          : `Dismissing removes ${actions} ${plural(actions, 'action')} from this component.`;
      dialogWhat.textContent = bulk ? `${verb} ${n} commitments. ${effect}` : effect;
    }
    const overwrite = mode === 'apply' || mode === 'dismiss' ? ids.filter((id) => store.record(id).rationale).length : 0;
    dialogWarn.hidden = overwrite === 0;
    dialogWarnText.textContent = `This overwrites ${overwrite} existing ${plural(overwrite, 'rationale')}.`;
    dialogRatWrap.hidden = mode === 'undo' || mode === 'accept';
    dialogRationale.value = '';
    dialogConfirmLabel.textContent = verb;
    dialog!.open = true;
  }

  function clearSelection(): void {
    selected.forEach((id) => {
      const row = rowById.get(id);
      if (row) uncheck(row);
    });
    selected.clear();
  }

  dialog.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-sw-dialog-cancel]')) {
      dialog.open = false;
      return;
    }
    if (!target.closest('[data-sw-dialog-confirm]')) return;
    dialog.open = false;
    const note = (dialogRationale.value ?? '').trim();
    if (mode === 'undo') store.undo(pendingIds);
    else if (mode === 'accept') store.acceptRecommendations(pendingIds);
    else store.decide(pendingIds, mode === 'apply' ? 'applied' : 'dismissed', note);
    clearSelection();
  });

  // ── Wiring ──
  const searchEl = root.querySelector<ValueEl>('[data-sw-search]');
  searchEl?.addEventListener('input', () => {
    query = (searchEl.value ?? '').trim();
    render();
  });
  toggle.addEventListener('change', (e) => {
    view = ((e as CustomEvent).detail?.value as View) ?? 'needs';
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
  clearEl.addEventListener('click', () => {
    (Object.keys(facets) as FacetKey[]).forEach((k) => facets[k].clear());
    query = '';
    if (searchEl) searchEl.value = '';
    render();
  });

  root.addEventListener('change', (e) => {
    const target = e.target as HTMLElement;
    if (target?.closest('[data-sw-check-all]')) {
      const on = !!checkAllEl?.checked;
      for (const row of visibleRows()) {
        const id = row.dataset.swRow!;
        if (on) selected.add(id);
        else selected.delete(id);
        const box = row.querySelector<CheckboxEl>('[data-sw-check]');
        if (box) box.checked = on;
      }
      renderListHead();
      return;
    }
    const box = target?.closest<HTMLElement>('[data-sw-check]');
    if (!box) return;
    const id = box.dataset.swCheck!;
    if ((box as CheckboxEl).checked) selected.add(id);
    else selected.delete(id);
    renderListHead();
  });

  root.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const apply = target.closest<HTMLElement>('[data-sw-apply]');
    if (apply) return openDialog('apply', [apply.dataset.swApply!]);
    const dismiss = target.closest<HTMLElement>('[data-sw-dismiss]');
    if (dismiss) return openDialog('dismiss', [dismiss.dataset.swDismiss!]);
    const undoBtn = target.closest<HTMLElement>('[data-sw-undo]');
    if (undoBtn) return store.undo([undoBtn.dataset.swUndo!]);
    const acceptOne = target.closest<HTMLElement>('[data-sw-prev-accept]');
    if (acceptOne) {
      const id = acceptOne.dataset.swPrevAccept!;
      if (store.nowSaysOut(byId.get(id)!)) return void store.dismissFlagged(id);
      return void store.acceptRecommendations([id]);
    }

    const rowEl = target.closest<HTMLElement>('[data-sw-row]');
    if (rowEl && !target.closest('.bcn-sw-row__check') && !target.closest('.bcn-sw-row__acts')) {
      preview = rowEl.dataset.swRow!;
      renderPreview();
      return;
    }

    if (target.closest('[data-sw-bulk-apply]')) return openDialog('apply', [...selected]);
    if (target.closest('[data-sw-bulk-dismiss]')) return openDialog('dismiss', [...selected]);
    if (target.closest('[data-sw-bulk-undo]'))
      return openDialog('undo', [...selected].filter((id) => store.record(id).decision !== null));
    if (target.closest('[data-sw-accept-all]')) return openDialog('accept', recommendedInView());
    if (target.closest('[data-sw-bulk-clear]')) {
      clearSelection();
      renderListHead();
      return;
    }
    if (target.closest('[data-sw-close]')) root.close?.();
  });

  // Any [data-setup-workspace-open] in the page opens the drawer.
  document.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('[data-setup-workspace-open]')) return;
    e.preventDefault();
    root.show?.();
    requestAnimationFrame(() => (scrollEl.scrollTop = 0));
  });

  // Each opening starts where prod's does: Needs a decision, nothing previewed.
  root.addEventListener('close', () => {
    dialog.open = false;
    clearSelection();
    view = 'needs';
    preview = null;
    render();
  });

  store.subscribe(render);
  render();
}
