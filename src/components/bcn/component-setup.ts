// component-setup — behavior for <BcnComponentSetup>.
//
// The dialog edits a DRAFT setup. Every answer re-runs the store's preview (the same
// recommend() the drawer uses), so the rail's tally and step 5 always show what saving
// would do. Save writes the setup through the store, which re-checks every setup
// dismissal, then dismisses the recommendations still checked in step 5.
import {
  CONSTRUCTION_ACTIVITIES,
  PROJECT_SPECIES,
  SETUP_COMMITMENTS,
  SETUP_SOURCES,
  SOURCE_REASON,
  applyReason,
  defaultLocationMethod,
  effectLines,
  fmtDate,
  habitatHits,
  inSourceScope,
  startsChecked,
  recommend,
  type ComponentSetup,
  type HabitatHit,
  type LocationMethod,
  type Ring,
} from '../../data/component-commitments';
import { applicability as store, isSourceDismissal, rationaleText } from './applicability-store';
import { paintSeasonOverlap } from './season-overlap';
import { toast } from '../../lib/snackbar';

type Column = 'na' | 'apply';
type StepKey = 'sources' | 'location' | 'activities' | 'dates' | 'review';
const ORDER: StepKey[] = ['sources', 'location', 'activities', 'dates', 'review'];

interface CheckboxEl extends HTMLElement {
  checked: boolean;
  indeterminate?: boolean;
}
interface ValueEl extends HTMLElement {
  value: string;
}
interface DialogEl extends HTMLElement {
  open: boolean;
}
type MapRoot = HTMLElement & { _bcnHabitatHighlight?: (codes: string[]) => void; _bcnHabitatRefit?: () => void };

const plural = (n: number, one: string, many = `${one}s`) => (n === 1 ? one : many);

export function initComponentSetup(): void {
  const dialog = document.querySelector<DialogEl>('[data-component-setup]');
  if (!dialog) return;
  const q = <T extends HTMLElement = HTMLElement>(sel: string) => dialog.querySelector<T>(sel);
  const qa = <T extends HTMLElement = HTMLElement>(sel: string) => Array.from(dialog.querySelectorAll<T>(sel));

  let step: StepKey = 'sources';
  let draft: ComponentSetup = blank();
  let habitat: HabitatHit[] = [];
  /** Species the person has ticked or unticked themselves; the map no longer overrides them. */
  let speciesTouched = new Set<string>();
  /** Step 5 rows the person moved to the other column; a move overrides the recommendation. */
  let moved = new Map<string, Column>();
  /** Where setup itself places each step 5 row, and what speaks for each apply, as of the last render. */
  let natural = new Map<string, Column>();
  let applyReasons = new Map<string, string | null>();
  /** Activities count only once the person has been to that step; until then nothing is ruled out by them. */
  let activitiesAnswered = false;
  const effective = (): ComponentSetup =>
    activitiesAnswered ? draft : { ...draft, activities: CONSTRUCTION_ACTIVITIES.map((a) => a.id) };

  function blank(): ComponentSetup {
    return {
      sources: [],
      locationMethod: defaultLocationMethod(),
      drawn: null,
      species: [],
      activities: [],
      // The component's own dates, as Edit Component last saved them.
      ...store.getDates(),
    };
  }

  const mapRoot = q<MapRoot>('[data-bcn-hmap]');
  const seasonRoot = q('[data-bcn-so]');

  // ── Location → habitat → species ──
  function intersect(): void {
    habitat = habitatHits(draft.locationMethod, draft.drawn);
    // Pre-fill from the map: a species starts checked unless its layer was queried and
    // the footprint doesn't touch it, or it was seen here. A species the person has set
    // by hand keeps their answer.
    const auto = new Set(habitat.filter(startsChecked).map((h) => h.code));
    const kept = draft.species.filter((s) => speciesTouched.has(s));
    const next = new Set([...kept, ...[...auto].filter((s) => !speciesTouched.has(s))]);
    draft.species = PROJECT_SPECIES.map((s) => s.code).filter((c) => next.has(c));
  }

  function habitatText(h: HabitatHit | undefined): string {
    if (h?.inHabitat) return 'In habitat';
    if (h && h.fieldRecords > 0) return 'Seen on this component';
    if (!h || h.inHabitat === null) return 'No habitat data';
    return 'Not in habitat';
  }

  // ── Render ──
  function render(): void {
    const eff = effective();
    const { scope, out } = store.preview(eff, habitat);
    const decided = (id: string) => store.record(id);

    // Options reflect the draft.
    qa<CheckboxEl>('[data-cs-source]').forEach((b) => (b.checked = draft.sources.includes(b.dataset.csSource!)));
    qa<CheckboxEl>('[data-cs-species]').forEach((b) => (b.checked = draft.species.includes(b.dataset.csSpecies!)));
    qa<CheckboxEl>('[data-cs-activity]').forEach((b) => (b.checked = draft.activities.includes(b.dataset.csActivity!)));
    for (const sp of PROJECT_SPECIES) {
      const el = q(`[data-cs-hab="${sp.code}"]`);
      if (el) el.textContent = habitatText(habitat.find((h) => h.code === sp.code));
    }
    mapRoot?._bcnHabitatHighlight?.(draft.species);

    // Step 5 lists.
    const fresh = out.filter((o) => decided(o.c.id).decision === null);
    // Back: a setup dismissal from a selected document whose reason no longer holds.
    const back = SETUP_COMMITMENTS.filter((c) => {
      const rec = decided(c.id);
      return rec.decision === 'dismissed' && rec.origin === 'setup' && inSourceScope(c, eff) && (isSourceDismissal(rec) || !recommend(c, { setup: eff, habitat }));
    });
    // From unselected documents: everything still undecided, recorded Not Applicable on save.
    const fromUnselected = SETUP_COMMITMENTS.filter((c) => !inSourceScope(c, eff) && decided(c.id).decision === null);
    const srcIds = new Set(fromUnselected.map((c) => c.id));
    // Decisions already made, by hand or by an earlier setup, sit apart: the save
    // leaves them as they are (a setup dismissal coming back is listed under Back).
    const backSet = new Set(back.map((c) => c.id));
    const kept = SETUP_COMMITMENTS.filter((c) => decided(c.id).decision !== null && !backSet.has(c.id));
    const outIds = new Set(fresh.map((o) => o.c.id));
    const backIds = new Set(back.map((c) => c.id));
    // Every undecided commitment in the list lands in one of the two columns: the
    // recommendation places it, a move by hand overrides that.
    const willApply = scope.filter((c) => decided(c.id).decision === null && !outIds.has(c.id) && !backIds.has(c.id));
    const ctx = { setup: eff, habitat };
    applyReasons = new Map(willApply.map((c) => [c.id, applyReason(c, ctx)]));
    const actionsText = (n: number) => `Creates ${n} ${plural(n, 'action')}`;
    const reasonOf = new Map<string, string>([
      ...fresh.map((o) => [o.c.id, o.rec.reasons.join(' · ')] as [string, string]),
      ...fromUnselected.map((c) => [c.id, SOURCE_REASON] as [string, string]),
      ...willApply.map((c) => [c.id, [applyReasons.get(c.id), actionsText(c.actions.length)].filter(Boolean).join(' · ')] as [string, string]),
    ]);
    natural = new Map([...reasonOf.keys()].map((id) => [id, (outIds.has(id) || srcIds.has(id) ? 'na' : 'apply') as Column]));
    const placed = new Map<string, Column>();
    for (const id of reasonOf.keys()) placed.set(id, moved.get(id) ?? natural.get(id)!);
    const inCol = (col: Column) => [...placed].filter(([, c]) => c === col).map(([id]) => id);
    const toDismiss = inCol('na');
    const toApply = inCol('apply');
    // A document's commitments sit in its own collapsed group while they stay Not Applicable.
    const inSrc = new Set(toDismiss.filter((id) => srcIds.has(id)));
    const listIds = {
      na: new Set(toDismiss.filter((id) => !inSrc.has(id))),
      src: inSrc,
      apply: new Set(toApply),
      back: backIds,
      kept: new Set(kept.map((c) => c.id)),
    };
    qa('[data-cs-srcgrp]').forEach((g) => {
      const n = SETUP_COMMITMENTS.filter((c) => c.sourceId === g.dataset.csSrcgrp && inSrc.has(c.id)).length;
      g.hidden = n === 0;
      const title = g.querySelector('.esa-collapsible__title');
      if (title) title.textContent = `${g.dataset.csSrcname} (${n})`;
    });
    q('[data-cs-srcgroups]')!.hidden = inSrc.size === 0;
    for (const list of ['na', 'apply', 'back', 'kept'] as const) {
      const size = list === 'na' ? toDismiss.length : listIds[list].size;
      const group = q(`[data-cs-group="${list}"]`);
      if (group) group.hidden = size === 0;
      const none = q(`[data-cs-col-none="${list}"]`);
      if (none) none.hidden = size > 0;
      const count = q(`[data-cs-count="${list}"]`);
      if (count) count.textContent = `${size} ${plural(size, 'commitment')}`;
    }
    const keptTitle = q('[data-cs-group="kept"] .esa-collapsible__title');
    if (keptTitle) keptTitle.textContent = `Already Decided (${listIds.kept.size})`;
    // The recommendations' own list hides when every Not Applicable row is in a document group.
    q('[data-cs-col="na"] > .bcn-cs__options')!.hidden = listIds.na.size === 0 && inSrc.size > 0;
    qa('[data-cs-row]').forEach((row) => {
      const [list, id] = row.dataset.csRow!.split(':') as ['na' | 'src' | 'apply' | 'back' | 'kept', string];
      row.hidden = !listIds[list].has(id);
      if (row.hidden) return;
      const reason = q(`[data-cs-reason="${list}:${id}"]`)!;
      const rec = decided(id);
      if (list === 'na' || list === 'src' || list === 'apply') {
        reason.textContent = reasonOf.get(id)!;
        reason.title = reasonOf.get(id)!;
        // A row reads as moved by hand only while it sits against its recommendation.
        q(`[data-cs-hand="${list}:${id}"]`)!.hidden = (list === 'apply' ? 'apply' : 'na') === natural.get(id);
      } else if (list === 'back') reason.textContent = `Was dismissed for: ${(rec.reasons ?? []).join(' · ')}`;
      else reason.textContent = `${rec.decision === 'applied' ? 'Applied' : 'Dismissed'} · ${rationaleText(rec) || 'No rationale'}`;
    });
    q('[data-cs-review-none]')!.hidden = placed.size + back.length + kept.length > 0;

    // Rail: each step's answer, and the tally.
    const sum = (key: StepKey, text: string) => {
      const el = q(`[data-cs-sum="${key}"]`);
      if (el) el.textContent = text;
    };
    sum('sources', draft.sources.length ? `${draft.sources.length} of ${SETUP_SOURCES.length} documents` : 'All documents');
    sum('location', draft.species.length ? `${draft.species.length} ${plural(draft.species.length, 'species', 'species')}` : 'No species');
    sum('activities', !activitiesAnswered ? 'Not answered' : draft.activities.length ? `${draft.activities.length} of ${CONSTRUCTION_ACTIVITIES.length} activities` : 'None');
    sum('dates', `${fmtDate(draft.startDate)} – ${fmtDate(draft.endDate)}`);
    sum('review', [`${toDismiss.length} not applicable`, `${toApply.length} will apply`, ...(back.length ? [`${back.length} back`] : [])].join('\n'));
    q('[data-cs-tally="source"]')!.textContent = String(srcIds.size);
    q('[data-cs-tally="out"]')!.textContent = String(fresh.length);

    const counts = {
      sources: draft.sources.length ? `${draft.sources.length} selected` : 'None selected: every document applies',
      species: `${draft.species.length} of ${PROJECT_SPECIES.length} selected`,
      activities: `${draft.activities.length} of ${CONSTRUCTION_ACTIVITIES.length} selected`,
    };
    for (const [k, v] of Object.entries(counts)) {
      const el = q(`[data-cs-count="${k}"]`);
      if (el) el.textContent = v;
    }

    const saveLabel = q('[data-cs-save-label]');
    if (saveLabel)
      saveLabel.textContent =
        toDismiss.length && toApply.length
          ? `Dismiss ${toDismiss.length} and Apply ${toApply.length}`
          : toDismiss.length
            ? `Dismiss ${toDismiss.length}`
            : toApply.length
              ? `Apply ${toApply.length}`
              : 'Save Setup';
    if (seasonRoot) paintSeasonOverlap(seasonRoot, draft.startDate, draft.endDate);
  }

  function go(next: StepKey): void {
    step = next;
    if (step === 'activities') activitiesAnswered = true;
    qa('[data-cs-pane]').forEach((p) => (p.hidden = p.dataset.csPane !== step));
    qa('[data-cs-goto]').forEach((b) => {
      if (b.dataset.csGoto === step) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
    const i = ORDER.indexOf(step);
    q('[data-cs-back]')!.hidden = i === 0;
    q('[data-cs-next]')!.hidden = step === 'review';
    q('[data-cs-save]')!.hidden = step !== 'review';
    q('.bcn-cs__panel')?.scrollTo({ top: 0 });
    if (step === 'location') requestAnimationFrame(() => mapRoot?._bcnHabitatRefit?.());
  }
  const markDone = () =>
    qa('[data-cs-goto]').forEach((b) => b.toggleAttribute('data-done', ORDER.indexOf(b.dataset.csGoto as StepKey) < ORDER.indexOf(step) || !!store.getSetup()));

  // ── Open: load the saved setup, or a blank one ──
  function load(): void {
    const saved = store.getSetup();
    draft = saved ? { ...saved, sources: [...saved.sources], species: [...saved.species], activities: [...saved.activities] } : blank();
    speciesTouched = new Set(saved ? PROJECT_SPECIES.map((s) => s.code) : []);
    moved = new Map();
    activitiesAnswered = !!saved;
    intersect();
    // Edit Component may have moved the dates since the last save.
    Object.assign(draft, store.getDates());
    const dates = qa<ValueEl>('[data-cs-date]');
    dates.forEach((d) => (d.value = d.dataset.csDate === 'start' ? draft.startDate : draft.endDate));
    go('sources');
    markDone();
    render();
  }
  // Capture runs before the page's [data-opens] handler shows the dialog.
  document.addEventListener(
    'click',
    (e) => {
      const opener = (e.target as HTMLElement).closest<HTMLElement>('[data-opens]');
      if (opener?.dataset.opens === dialog.id) load();
    },
    true,
  );

  // ── Answers ──
  dialog.addEventListener('change', (e) => {
    const t = e.target as HTMLElement;
    const box = t.closest<CheckboxEl>('esa-checkbox');
    const date = t.closest<ValueEl>('[data-cs-date]');
    if (date) {
      const v = date.value;
      if (date.dataset.csDate === 'start') draft.startDate = v || draft.startDate;
      else draft.endDate = v || draft.endDate;
      return render();
    }
    if (!box) return;
    const toggle = (list: string[], v: string, on: boolean) => (on ? [...new Set([...list, v])] : list.filter((x) => x !== v));
    if (box.dataset.csSource) draft.sources = toggle(draft.sources, box.dataset.csSource, box.checked);
    else if (box.dataset.csSpecies) {
      speciesTouched.add(box.dataset.csSpecies);
      draft.species = toggle(draft.species, box.dataset.csSpecies, box.checked);
    } else if (box.dataset.csActivity) draft.activities = toggle(draft.activities, box.dataset.csActivity, box.checked);
    render();
  });

  dialog.addEventListener('bcn-habitat-location', (e) => {
    const { method, drawn } = (e as CustomEvent<{ method: LocationMethod; drawn: Ring | null }>).detail;
    draft.locationMethod = method;
    draft.drawn = drawn;
    intersect();
    render();
  });

  dialog.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const goto = t.closest<HTMLElement>('[data-cs-goto]');
    if (goto) {
      go(goto.dataset.csGoto as StepKey);
      markDone();
      return;
    }
    if (t.closest('[data-cs-next]')) {
      go(ORDER[Math.min(ORDER.length - 1, ORDER.indexOf(step) + 1)]);
      markDone();
      return;
    }
    if (t.closest('[data-cs-back]')) {
      go(ORDER[Math.max(0, ORDER.indexOf(step) - 1)]);
      return;
    }
    const move = t.closest<HTMLElement>('[data-cs-move]');
    if (move) {
      const id = move.dataset.csMove!;
      const to = move.dataset.csTo as Column;
      // Moving a row back to where setup placed it clears the override.
      const recommended = natural.get(id);
      if (to === recommended) moved.delete(id);
      else moved.set(id, to);
      render();
      return;
    }
    if (t.closest('[data-cs-cancel]')) {
      dialog.open = false;
      return;
    }
    if (t.closest('[data-cs-save]')) {
      pending = readColumns();
      const changes = [
        ...[...pending.na, ...pending.src].map((id) => ({ id, to: 'dismissed' as const })),
        ...pending.apply.map((id) => ({ id, to: 'applied' as const })),
      ];
      const lines = effectLines(store.effects(changes));
      const nd = pending.na.length + pending.src.length;
      const na = pending.apply.length;
      const head = [nd ? `Dismisses ${nd} ${plural(nd, 'commitment')}` : '', na ? `applies ${na}` : ''].filter(Boolean).join(' and ');
      confirmWhat.textContent = head ? `${head.charAt(0).toUpperCase()}${head.slice(1)} on this component.` : 'Saves the setup. No decision changes.';
      confirmEffects.innerHTML = lines.map((l) => `<li>${l}</li>`).join('');
      confirmEffects.hidden = lines.length === 0;
      const handMoves = pending.na.filter((id) => pending!.byHand.has(id)).length + pending.apply.filter((id) => pending!.byHand.has(id)).length;
      confirmNoteWrap.hidden = handMoves === 0;
      confirmNote.value = '';
      confirmLabel.textContent = q('[data-cs-save-label]')!.textContent ?? 'Save Setup';
      confirm.open = true;
    }
  });

  // ── Save, after the confirm ──
  type Pending = { na: string[]; src: string[]; apply: string[]; byHand: Set<string> };
  let pending: Pending | null = null;
  const confirm = document.querySelector<DialogEl>('[data-cs-confirm]')!;
  const confirmWhat = confirm.querySelector<HTMLElement>('[data-cs-confirm-what]')!;
  const confirmEffects = confirm.querySelector<HTMLElement>('[data-cs-confirm-effects]')!;
  const confirmNoteWrap = confirm.querySelector<HTMLElement>('[data-cs-confirm-notewrap]')!;
  const confirmNote = confirm.querySelector<ValueEl>('[data-cs-confirm-note]')!;
  const confirmLabel = confirm.querySelector<HTMLElement>('[data-cs-confirm-label]')!;

  /** Both columns, read off the rendered rows: exactly what the person reviewed. */
  function readColumns(): Pending {
    const rowsIn = (list: string) =>
      qa('[data-cs-row^="' + list + ':"]').filter((r) => !r.hidden).map((r) => r.dataset.csRow!.slice(list.length + 1));
    const na = rowsIn('na');
    const src = rowsIn('src');
    const apply = rowsIn('apply');
    const byHand = new Set([...na.filter((id) => !q(`[data-cs-hand="na:${id}"]`)!.hidden), ...apply.filter((id) => !q(`[data-cs-hand="apply:${id}"]`)!.hidden)]);
    return { na, src, apply, byHand };
  }

  confirm.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('[data-cs-confirm-cancel]')) {
      confirm.open = false;
      return;
    }
    if (!t.closest('[data-cs-confirm-ok]') || !pending) return;
    const { na, src, apply, byHand } = pending;
    const note = (confirmNote.value ?? '').trim();
    confirm.open = false;
    store.saveSetup({ ...effective() }, habitat);
    // Setup's own placements carry setup's reasons; a row moved against them is Moved by Hand.
    const dismiss = na.filter((id) => !byHand.has(id));
    if (dismiss.length) store.acceptRecommendations(dismiss);
    if (src.length) store.dismissForSource(src);
    const dismissMoved = na.filter((id) => byHand.has(id));
    if (dismissMoved.length) store.decide(dismissMoved, 'dismissed', note, 'moved');
    const applyBySetup = apply.filter((id) => !byHand.has(id));
    if (applyBySetup.length) store.applyFromSetup(applyBySetup.map((id) => ({ id, reason: applyReasons.get(id) ?? null })));
    const applyMoved = apply.filter((id) => byHand.has(id));
    if (applyMoved.length) store.decide(applyMoved, 'applied', note, 'moved');
    pending = null;
    dialog.open = false;
    dialog.dispatchEvent(new CustomEvent('bcn-setup-saved', { bubbles: true, detail: { dismissed: na.length + src.length, applied: apply.length } }));
  });

  // Edit Component writes the same dates. With a setup on record, they re-check it.
  document.addEventListener('bcn-component-dates', (e) => {
    const { startDate, endDate } = (e as CustomEvent<{ startDate: string; endDate: string }>).detail;
    if (!startDate || !endDate) return;
    const { reopened } = store.setComponentDates(startDate, endDate);
    if (reopened.length) toast(`${reopened.length} ${plural(reopened.length, 'commitment')} back to Needs a decision`, 'info', 5000);
  });
  // ...and shows them as setup last saved them.
  const syncComponentDates = () => {
    const d = store.getDates();
    document.querySelectorAll<ValueEl>('[data-cdp-date]').forEach((el) => (el.value = el.dataset.cdpDate === 'start' ? d.startDate : d.endDate));
  };
  store.subscribe(syncComponentDates);

  // Keep the tally honest if a decision is made in the drawer while this is open.
  store.subscribe(() => {
    if (dialog.open) render();
  });
}
