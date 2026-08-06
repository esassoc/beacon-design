// Controller for <BcnEvidenceDrawer> — the global bottom-anchored evidence workspace.
//
// The drawer's markup is pre-rendered by Astro (compile-time): every evidence card and
// every action row for every component exists in the DOM, hidden. This module reveals the
// right subset and keeps the two halves, the footer and the scope in agreement. Nothing
// here talks to a server — it is a picture of the feature, and the state it manages is
// only what a reviewer needs to see change.
//
// The one genuinely real behavior is the ACTIVE COMPONENT: it persists to localStorage and
// has no null state, because that was a named next-step out of the meeting and a fake
// version of it would not answer the question it was raised to answer.

import {
  COMPONENTS,
  DEFAULT_COMPONENT_ID,
  componentById,
  actionsFor,
  actionById,
  STAGED_ITEMS,
  EXISTING_ITEMS,
  SUGGESTIONS,
  presetById,
} from '../../data/evidence-drawer';
import { registerBottomDrawer, type BcnBottomDrawer } from './bottom-drawer';

const ACTIVE_COMPONENT_KEY = 'bcn-active-component';

/** Options-array legos take their options as a PROPERTY, never an attribute. */
type OptionsEl = HTMLElement & { options: unknown[]; value: string | string[] | null };

// ── Active component: read/write, never null ─────────────────────────────────
// localStorage can throw in private mode; the drawer must still open, so every access is
// guarded and falls back to the seed default (BcnHelpBar guards the same way).

const readActiveComponent = (): string => {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem(ACTIVE_COMPONENT_KEY);
  } catch {
    /* localStorage unavailable — fall through to the default */
  }
  return COMPONENTS.some((c) => c.id === stored) ? (stored as string) : DEFAULT_COMPONENT_ID;
};

const writeActiveComponent = (id: string): void => {
  try {
    localStorage.setItem(ACTIVE_COMPONENT_KEY, id);
  } catch {
    /* not persisted this session — the in-memory value still governs */
  }
};

// ── Copy helpers ─────────────────────────────────────────────────────────────

const plural = (n: number, one: string, many: string): string => `${n} ${n === 1 ? one : many}`;

/**
 * LEGO GAP — esa-file-upload hardcodes a second line ("Drag & drop or browse") inside its
 * shadow DOM, directly under whatever `label` you pass. With a label that already says
 * "Drop files here, or browse" it is pure repetition, and the lego offers no way to change
 * or suppress it: no `hint` property, no ::part, no custom property.
 *
 * So the drawer appends its own stylesheet to the element's shadow root. Appending
 * survives Lit re-renders (Lit only patches its own template parts), and it touches
 * nothing but visibility. Filed alongside the position="bottom" request: esa-file-upload
 * should take a `hint` property, with empty meaning "no second line".
 */
const suppressDropzoneHint = (zone: HTMLElement): void => {
  void customElements.whenDefined('esa-file-upload').then(() => {
    const root = zone.shadowRoot;
    if (!root || root.querySelector('[data-bcn-hint-patch]')) return;
    const style = document.createElement('style');
    style.setAttribute('data-bcn-hint-patch', '');
    style.textContent = '.zone__hint { display: none; }';
    root.appendChild(style);
  });
};

export function initEvidenceDrawer(): void {
  registerBottomDrawer();

  const drawer = document.getElementById('bcn-evidence-drawer') as BcnBottomDrawer | null;
  if (!drawer) return;

  // ── Element handles ──
  const scopeSelect = drawer.querySelector<OptionsEl>('[data-evidence-component]');
  const attachWrap = drawer.querySelector<HTMLElement>('[data-evidence-attach]');

  const existingPicker = drawer.querySelector<OptionsEl>('[data-staging-existing]');
  const stagingEmpty = drawer.querySelector<HTMLElement>('[data-staging-empty]');
  // esa-collapsible is a native <details>, so "expand it" is one assignment — no API to
  // reach for and no animation state to coordinate.
  const uploader = drawer.querySelector<HTMLDetailsElement>('[data-staging-upload] details');

  const targetSearch = drawer.querySelector<OptionsEl>('[data-targets-search]');
  const targetScope = drawer.querySelector<HTMLElement>('[data-targets-scope]');
  const targetsEmpty = drawer.querySelector<HTMLElement>('[data-targets-empty]');
  const targetsWorking = drawer.querySelector<HTMLElement>('[data-targets-working]');
  const maybeGroup = drawer.querySelector<HTMLElement>('[data-targets-maybe]');
  const maybeCount = drawer.querySelector<HTMLElement>('[data-targets-maybecount]');
  const notice = drawer.querySelector<HTMLElement>('[data-targets-notice]');
  const findWrap = drawer.querySelector<HTMLElement>('[data-targets-find]');

  // ── State ──
  let componentId = readActiveComponent();
  const stagedIds = new Set<string>();
  /** actionId → true when the row arrived as a suggestion the user has not yet kept. */
  const selectedActions = new Map<string, boolean>();

  // ── Populate the legos (options are properties, not attributes) ──
  if (scopeSelect) {
    scopeSelect.options = COMPONENTS.map((c) => ({ label: c.name, value: c.id }));
    scopeSelect.value = componentId;
  }
  // ── Rendering ────────────────────────────────────────────────────────────

  // BOTH searches behave identically, and this is where that is enforced: each one offers
  // only what is NOT already in its list, and each is reset to null after every render so
  // the field falls back to its placeholder. The field is a way in to the list; it never
  // holds a selection of its own.

  /** The action search only ever offers actions in the active component. */
  const refreshSearchOptions = (): void => {
    if (!targetSearch) return;
    targetSearch.options = actionsFor(componentId)
      .filter((a) => !selectedActions.has(a.id))
      .map((a) => ({ label: `${a.code} · ${a.name}`, value: a.id }));
    targetSearch.value = null;
  };

  /** The evidence search only ever offers records not already staged. */
  const refreshExistingOptions = (): void => {
    if (!existingPicker) return;
    existingPicker.options = EXISTING_ITEMS.filter((i) => !stagedIds.has(i.id)).map((i) => ({
      label: i.title,
      value: i.id,
    }));
    existingPicker.value = null;
  };

  const renderStaging = (): void => {
    for (const li of drawer.querySelectorAll<HTMLElement>('[data-staging-item]')) {
      li.hidden = !stagedIds.has(li.dataset.stagingItem ?? '');
    }
    if (stagingEmpty) stagingEmpty.hidden = stagedIds.size > 0;
  };

  const renderTargets = (): void => {
    let shown = 0;
    for (const li of drawer.querySelectorAll<HTMLElement>('[data-target-row]')) {
      const id = li.dataset.targetRow ?? '';
      const selected = selectedActions.has(id);
      const inScope = li.dataset.component === componentId;
      li.hidden = !(selected && inScope);
      if (!li.hidden) shown += 1;

      const isSuggestion = selectedActions.get(id) === true;
      const mark = li.querySelector<HTMLElement>('[data-target-mark]');
      const why = li.querySelector<HTMLElement>('[data-target-why]');
      if (mark) mark.hidden = !isSuggestion;
      if (why) why.hidden = !isSuggestion;
    }
    if (targetsEmpty) targetsEmpty.hidden = shown > 0;
  };

  /** Attach is live once BOTH sides have something — the join needs two ends. */
  const renderCommit = (): void => {
    const actions = [...selectedActions.keys()].filter(
      (id) => actionById(id)?.componentId === componentId
    ).length;
    // esa-button carries its disabled LOOK on the wrapper (.esa-button--disabled kills
    // opacity and pointer events) and the disabled STATE on the native control — both have
    // to move together or the button reads dead while being clickable, or vice versa.
    const ready = Boolean(stagedIds.size && actions);
    const btn = attachWrap?.querySelector<HTMLButtonElement>('button');
    if (btn) btn.disabled = !ready;
    attachWrap?.querySelector('.esa-button')?.classList.toggle('esa-button--disabled', !ready);
  };

  const renderScope = (): void => {
    if (targetScope) targetScope.textContent = componentById(componentId).name;
  };

  const renderAll = (): void => {
    renderScope();
    renderStaging();
    renderTargets();
    renderCommit();
    refreshSearchOptions();
    refreshExistingOptions();
  };

  /** Drop every suggestion the utility added, re-hide the second tier, retire the notice. */
  const clearSuggestions = (): void => {
    setNotice(null);
    for (const [id, wasSuggested] of [...selectedActions]) {
      if (wasSuggested) selectedActions.delete(id);
    }
    if (maybeGroup) maybeGroup.hidden = true;
    for (const li of drawer.querySelectorAll<HTMLElement>('[data-maybe-row]')) li.hidden = true;
  };

  // ── Find matches — the utility, run on demand ────────────────────────────
  // Deliberately an explicit action rather than something that fires on upload: it reads
  // as a tool you reach for, and it keeps the empty state legible. It never applies
  // anything on its own — every row it adds is marked and dismissible.

  const setNotice = (message: string | null): void => {
    if (!notice) return;
    notice.textContent = message ?? '';
    notice.hidden = !message;
  };

  const findMatches = (): void => {
    // Nothing to read — say so rather than running a spinner over an empty question.
    if (!stagedIds.size) {
      setNotice('Add evidence first — matches are found by reading what you have staged.');
      return;
    }
    setNotice(null);
    if (targetsWorking) targetsWorking.hidden = false;

    // A short, fixed beat so the working state is visible — not a simulated latency curve.
    window.setTimeout(() => {
      if (targetsWorking) targetsWorking.hidden = true;
      const staged = [...stagedIds];

      // Tier one lands directly in the list, marked.
      const confident = SUGGESTIONS.filter(
        (s) =>
          staged.includes(s.itemId) &&
          s.tier === 'suggested' &&
          actionById(s.actionId)?.componentId === componentId
      );
      let added = 0;
      for (const s of confident) {
        if (selectedActions.has(s.actionId)) continue;
        added += 1;
        selectedActions.set(s.actionId, true);
        const why = drawer.querySelector<HTMLElement>(
          `[data-target-row="${s.actionId}"] [data-target-why]`
        );
        if (why) why.textContent = s.rationale;
      }

      // Tier two waits in the collapsed group.
      const unsure = SUGGESTIONS.filter(
        (s) =>
          staged.includes(s.itemId) &&
          s.tier === 'less-certain' &&
          !selectedActions.has(s.actionId) &&
          actionById(s.actionId)?.componentId === componentId
      );
      for (const li of drawer.querySelectorAll<HTMLElement>('[data-maybe-row]')) li.hidden = true;
      for (const s of unsure) {
        const li = drawer.querySelector<HTMLElement>(`[data-maybe-row="${s.actionId}"]`);
        if (!li) continue;
        li.hidden = false;
        const why = li.querySelector<HTMLElement>('[data-maybe-why]');
        if (why) why.textContent = s.rationale;
      }
      if (maybeGroup) maybeGroup.hidden = unsure.length === 0;
      if (maybeCount) {
        maybeCount.textContent = `${plural(unsure.length, 'action', 'actions')} the match came close on. Add any that belong.`;
      }

      // Ran, found nothing NEW — which is a real answer (often because the actions it
      // would suggest are already on the list) and has to be said out loud.
      setNotice(
        added === 0 && unsure.length === 0
          ? `No new matches in ${componentById(componentId).name}.`
          : null
      );

      renderAll();
    }, 700);
  };

  // ── Events ───────────────────────────────────────────────────────────────

  scopeSelect?.addEventListener('change', (e) => {
    const next = (e as CustomEvent<{ value: string }>).detail?.value;
    if (!next || next === componentId) return;
    componentId = next;
    writeActiveComponent(componentId);
    // Scope is absolute: nothing selected in the old component survives the switch.
    selectedActions.clear();
    clearSuggestions();
    renderAll();
  });

  // Picking an existing record stages it as a card, exactly like a dropped file.
  // Picking a record stages it as a card, exactly like a dropped file — then renderAll
  // clears the field and drops the row from the options, mirroring the action search.
  existingPicker?.addEventListener('change', (e) => {
    const value = (e as CustomEvent<{ value: string | string[] }>).detail?.value;
    const id = Array.isArray(value) ? value[0] : value;
    if (!id) return;
    stagedIds.add(id);
    setNotice(null); // the "add evidence first" prompt is answered
    renderAll();
  });

  // A real drop cannot be staged (the fixture's cards are pre-rendered), so a drop stages
  // the fixture's own multi-file item — which is the case worth showing anyway: several
  // files arriving together as ONE piece of evidence.
  const dropzone = drawer.querySelector<HTMLElement>('[data-staging-dropzone]');
  dropzone?.addEventListener('change', () => {
    for (const item of STAGED_ITEMS) stagedIds.add(item.id);
    setNotice(null); // the "add evidence first" prompt is answered
    renderAll();
  });
  if (dropzone) suppressDropzoneHint(dropzone);

  // ── The uploader always gets out of the way of a drop ────────────────────
  // A collapsed uploader is a trap: the dropzone is the drag target, so if it is hidden
  // when the user arrives holding a file, there is nowhere to let go. Any file drag
  // entering the drawer — anywhere in it, not just over the panel — expands it first.
  // `dragenter` bubbles, so one listener on the drawer covers every child, and the
  // dataTransfer type check keeps text and link drags from triggering it.
  const expandUploader = (): void => {
    if (uploader && !uploader.open) uploader.open = true;
  };
  const isFileDrag = (event: DragEvent): boolean =>
    Array.from(event.dataTransfer?.types ?? []).includes('Files');

  drawer.addEventListener('dragenter', (e) => {
    if (isFileDrag(e as DragEvent)) expandUploader();
  });
  // Safety net: some browsers only report the Files type once dragover starts.
  drawer.addEventListener('dragover', (e) => {
    if (isFileDrag(e as DragEvent)) expandUploader();
  });

  targetSearch?.addEventListener('change', (e) => {
    const value = (e as CustomEvent<{ value: string | string[] }>).detail?.value;
    const id = Array.isArray(value) ? value[0] : value;
    if (!id) return;
    selectedActions.set(id, false); // added by hand — no suggestion marker
    renderAll();
  });

  // Delegated row actions: dismiss a target, promote a less-certain one, drop an item.
  drawer.addEventListener('click', (event) => {
    const el = event.target as HTMLElement;

    const dismiss = el.closest<HTMLElement>('[data-target-dismiss]');
    if (dismiss) {
      selectedActions.delete(dismiss.dataset.targetDismiss ?? '');
      renderAll();
      return;
    }

    const add = el.closest<HTMLElement>('[data-maybe-add]');
    if (add) {
      const id = add.dataset.maybeAdd ?? '';
      // Promoted from tier two: it keeps its reason, and it keeps the Suggested marker
      // until the user leaves it in place — this is still the utility's idea, not theirs.
      selectedActions.set(id, true);
      const why = drawer.querySelector<HTMLElement>(`[data-maybe-row="${id}"] [data-maybe-why]`);
      const target = drawer.querySelector<HTMLElement>(`[data-target-row="${id}"] [data-target-why]`);
      if (why && target) target.textContent = why.textContent;
      const row = drawer.querySelector<HTMLElement>(`[data-maybe-row="${id}"]`);
      if (row) row.hidden = true;
      if (maybeGroup && !drawer.querySelector('[data-maybe-row]:not([hidden])')) maybeGroup.hidden = true;
      renderAll();
      return;
    }

    const remove = el.closest<HTMLElement>('[data-staging-remove]');
    if (remove) {
      stagedIds.delete(remove.dataset.stagingRemove ?? '');
      renderAll();
      return;
    }

    if (el.closest('[data-targets-find]')) {
      findMatches();
    }
  });

  // ── Opening ──────────────────────────────────────────────────────────────

  const applyPreset = (id: string): void => {
    const preset = presetById(id);
    componentId = preset.componentId || readActiveComponent();
    writeActiveComponent(componentId);
    if (scopeSelect) scopeSelect.value = componentId;

    stagedIds.clear();
    for (const itemId of preset.itemIds) stagedIds.add(itemId);

    selectedActions.clear();
    clearSuggestions();
    for (const actionId of preset.actionIds) selectedActions.set(actionId, false);

    renderAll();
  };

  // The uploader starts expanded on EVERY open, not just the first paint. The drawer is
  // mounted once in the app shell and never unmounts, so a collapse would otherwise
  // persist for the rest of the session and greet the next open closed.
  drawer.addEventListener('drawer-open', expandUploader);

  // Blind hooks — the bottom bar and any page's entry points open this drawer without
  // knowing anything about it.
  document.addEventListener('click', (event) => {
    const el = event.target as HTMLElement;

    const entry = el.closest<HTMLElement>('[data-evidence-open]');
    if (entry) {
      applyPreset(entry.dataset.evidenceOpen ?? 'cold');
      drawer.show();
      return;
    }

    if (el.closest('[data-evidence-trigger]')) {
      // The bottom-bar button is the cold open, but it keeps whatever you were last doing
      // in this session rather than wiping it.
      if (!stagedIds.size && !selectedActions.size) applyPreset('cold');
      drawer.show();
    }
  });

  // Seed the closed drawer so its first paint is already correct.
  renderAll();
}
