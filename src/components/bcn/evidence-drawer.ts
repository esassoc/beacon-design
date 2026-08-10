// Controller for <BcnEvidenceDrawer> — the global bottom-anchored evidence workspace.
//
// The drawer's markup is pre-rendered by Astro (compile-time): every evidence card and
// every action card for every component exists in the DOM, hidden. This module reveals the
// right subset and keeps the two columns in agreement. Nothing here talks to a server — it
// is a picture of the feature, and the state it manages is only what a reviewer needs to
// see change.
//
// THE STATE IS THE JOIN. `associations` maps an action id to the evidence attached to it in
// this session, and that map is the whole model: the sub-lists render from it, the drag
// rules read it, the unsaved-changes guard asks whether it is empty, and Attach commits it.
//
// TWO behaviours are genuinely real rather than mocked, because faking them would not
// answer the questions they were raised to answer:
//   · the ACTIVE COMPONENT persists to localStorage and has no null state;
//   · the UNSAVED-CHANGES GUARD actually blocks a filter change and can be cancelled.
//
// NO HAND-BUILT PRIMITIVES. Attached rows are cloned from a <template> that BcnEvidenceTargets
// pre-renders out of esa-badge / esa-icon-button, so runtime-built markup still comes from
// the legos. Astro legos are compile-time and cannot be constructed from JS — a template is
// the bridge, and it is the same trick BcnGuidanceDrawer uses for its avatar.

import {
  INCOMING_FILES,
  NEW_SLOTS,
  draftSuggestion,
  COMPONENTS,
  DEFAULT_COMPONENT_ID,
  PHASES,
  ACTION_TYPES,
  TYPE_LABEL,
  componentById,
  actionsIn,
  itemById,
  STAGED_ITEMS,
  EXISTING_ITEMS,
  SUGGESTIONS,
  presetById,
  type PhaseId,
} from '../../data/evidence-drawer';
import type { ActionType } from '../../data/project-actions';
import { registerBottomDrawer, type BcnBottomDrawer } from './bottom-drawer';

const ACTIVE_COMPONENT_KEY = 'bcn-active-component';

/** Options-array legos take their options as a PROPERTY, never an attribute. */
type OptionsEl = HTMLElement & { options: unknown[]; value: string | string[] | null };
type TabsEl = HTMLElement & {
  tabs: { label: string; badge?: string | number }[];
  activeIndex: number;
};

/** The drag payload — one evidence id, carried as plain text. */
const DRAG_TYPE = 'text/plain';

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
/**
 * Hide two pieces of esa-file-upload's own chrome that this drawer supplies itself:
 *   · .zone__limit — the "Max 50 MB per file" line, cut as redundant.
 *   · .zone__hint  — its alternate caption, cut for the same reason.
 *   · .files       — its list of what was uploaded. The DRAFT CARD is that list here, and
 *                    showing both puts the same filenames on screen twice, only one set of
 *                    which is the record being built.
 *
 * Delivered as a CONSTRUCTED SHEET pushed onto adoptedStyleSheets, not as a <style> appended
 * to the shadow root. That distinction is the whole bug this replaces: a shadow root's own
 * <style> elements are ordered BEFORE its adoptedStyleSheets, and Lit puts the component's
 * styles in the adopted list — so an injected <style> loses every tie on specificity and
 * silently does nothing. Appending to the adopted list puts these rules last instead.
 */
const trimDropzoneChrome = (zone: HTMLElement): void => {
  void customElements.whenDefined('esa-file-upload').then(() => {
    const root = zone.shadowRoot;
    if (!root) return;
    try {
      // Guard on the ELEMENT, not on sheet identity: a freshly constructed sheet is never
      // equal to one already adopted, so comparing them would re-add it on every call.
      if (zone.dataset.bcnChromeTrimmed) return;
      const sheet = new CSSStyleSheet();
      sheet.replaceSync('.zone__hint, .zone__limit { display: none; } .files { display: none; }');
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
      zone.dataset.bcnChromeTrimmed = 'true';
    } catch {
      // No constructable stylesheets: fall back to a <style>, which needs !important to
      // out-rank the adopted sheet it is ordered behind.
      if (root.querySelector('[data-bcn-chrome-patch]')) return;
      const style = document.createElement('style');
      style.setAttribute('data-bcn-chrome-patch', '');
      style.textContent =
        '.zone__hint, .zone__limit { display: none !important; } .files { display: none !important; }';
      root.appendChild(style);
    }
  });
};
export function initEvidenceDrawer(): void {
  registerBottomDrawer();

  const drawer = document.getElementById('bcn-evidence-drawer') as BcnBottomDrawer | null;
  if (!drawer) return;

  // ── Element handles ──
  const scopeSelect = drawer.querySelector<OptionsEl>('[data-evidence-component]');
  const phaseSelect = drawer.querySelector<OptionsEl>('[data-targets-phase]');
  const typeSelect = drawer.querySelector<OptionsEl>('[data-targets-type]');
  const saveWrap = drawer.querySelector<HTMLElement>('[data-evidence-save]');
  const pendingCard = drawer.querySelector<HTMLElement>('[data-targets-pending]');
  const pendingText = drawer.querySelector<HTMLElement>('[data-targets-pending-text]');
  const confirmDialog = drawer.querySelector<HTMLElement & { open: boolean }>('[data-evidence-confirm]');
  const rowTemplate = drawer.querySelector<HTMLTemplateElement>('[data-attached-row]');

  const tabs = drawer.querySelector<TabsEl>('[data-staging-tabs]');
  const existingPicker = drawer.querySelector<OptionsEl>('[data-staging-existing]');
  const stagingEmpty = drawer.querySelector<HTMLElement>('[data-staging-empty]');
  const draftCard = drawer.querySelector<HTMLElement>('[data-draft]');
  const draftTitle = drawer.querySelector<HTMLElement>('[data-draft-title]');
  const draftNotes = drawer.querySelector<HTMLElement>('[data-draft-notes]');
  const draftFileList = drawer.querySelector<HTMLElement>('[data-draft-files]');
  const draftRowTpl = drawer.querySelector<HTMLTemplateElement>('[data-draft-file-row]');
  const pillTpl = drawer.querySelector<HTMLTemplateElement>('[data-file-pill]');

  const targetSearch = drawer.querySelector<OptionsEl>('[data-targets-search]');
  const targetsEmpty = drawer.querySelector<HTMLElement>('[data-targets-empty]');
  const targetsWorking = drawer.querySelector<HTMLElement>('[data-targets-working]');
  const targetsCount = drawer.querySelector<HTMLElement>('[data-targets-count]');
  const notice = drawer.querySelector<HTMLElement>('[data-targets-notice]');

  // ── State ──
  let componentId = readActiveComponent();
  let phase: PhaseId | '' = '';
  let type: ActionType | '' = '';
  const stagedIds = new Set<string>();
  /** Action ids currently on the list. */
  const selectedActions = new Set<string>();
  /** actionId → (evidenceId → true when the utility attached it, false when a human did). */
  const associations = new Map<string, Map<string, boolean>>();
  /** Pairs already committed, as `actionId::evidenceId`. Everything in `associations` that
      is NOT in here is unsaved, and carries the pink treatment until Save. A flat key set
      rather than a parallel Map: the only question ever asked of it is membership. */
  const saved = new Set<string>();
  /** Pairs that WERE saved and have since been detached — a deletion waiting to be
      committed. Tracked separately because a removal leaves nothing on screen to carry the
      unsaved treatment: the row is gone, so without this the drawer would look settled
      while still holding a pending change. */
  const removed = new Set<string>();

  /** Files sitting in the draft card on the Add New tab — ONE piece of evidence in the
      making, however many files it holds. */
  let draftFiles: { name: string; size: string }[] = [];
  /** Records the user has created this session, by slot id. These are real records as far
      as the rest of the drawer is concerned: searchable, draggable, attachable. */
  const created = new Map<string, { title: string; notes: string; files: { name: string; size: string }[] }>();

  /* PERSISTENCE. There is no server behind this prototype, so localStorage IS the database:
     it is the only store available that survives a reload, which is what makes Save a real
     round-trip rather than a mock. Wrapped in try/catch throughout because private-mode
     browsers throw on access — the same guard BcnHelpBar uses. */
  const DB_KEY = 'bcn-evidence-db';
  const persist = (): void => {
    try {
      localStorage.setItem(
        DB_KEY,
        JSON.stringify({
          created: [...created.entries()].map(([id, rec]) => ({ id, ...rec })),
          saved: [...saved],
        }),
      );
    } catch {
      /* private mode — the session still works, it just will not survive a reload */
    }
  };
  const restore = (): void => {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (!raw) return;
      const data = JSON.parse(raw) as {
        created?: { id: string; title: string; notes: string; files: { name: string; size: string }[] }[];
        saved?: string[];
      };
      for (const rec of data.created ?? []) {
        created.set(rec.id, { title: rec.title, notes: rec.notes, files: rec.files ?? [] });
      }
      for (const key of data.saved ?? []) saved.add(key);
    } catch {
      /* unreadable or from an older shape — start clean rather than half-restored */
    }
  };
  const pairKey = (actionId: string, evidenceId: string): string => `${actionId}::${evidenceId}`;
  /** Cards the user has SHUT. Empty by default — a card opens showing its drop zone,
      because an invisible drop zone is not an invitation. */
  const collapsed = new Set<string>();
  /* Which EVIDENCE cards are OPEN. Deliberately the inverse of `collapsed` (which holds the
     shut action cards): evidence cards load shut, so tracking the exceptions means a card
     staged later — by an upload, or picked from the search — starts shut like the rest
     without anything having to remember to add it. A collapsed-set would have defaulted
     every new arrival to open. Kept separate from `collapsed` either way: one id space
     bleeding into the other would shut a card on the far side of the drawer. */
  const expandedEvidence = new Set<string>();

  const attachedFor = (actionId: string): Map<string, boolean> =>
    associations.get(actionId) ?? new Map<string, boolean>();

  /** Unsaved work is any join that has not been through Save — NOT merely any join at all.
      After a save the drawer stays open with everything still listed, so "is there anything
      here" and "is there anything outstanding" stopped being the same question. */
  const hasUnsaved = (): boolean =>
    removed.size > 0 ||
    [...associations.entries()].some(([actionId, m]) =>
      [...m.keys()].some((evidenceId) => !saved.has(pairKey(actionId, evidenceId))),
    );


  /** Does THIS action hold anything outstanding — an attachment not yet saved, or a
      detachment not yet committed? Drives the card's pink dot. */
  const actionHasUnsaved = (actionId: string): boolean => {
    for (const evidenceId of attachedFor(actionId).keys()) {
      if (!saved.has(pairKey(actionId, evidenceId))) return true;
    }
    for (const key of removed) {
      if (key.startsWith(`${actionId}::`)) return true;
    }
    return false;
  };

  /** Set a <BcnCountChip>'s number and accessible name, hiding it at zero. One helper for
      both sides of the drawer: the evidence cards count actions, the action cards count
      evidence, and they are the same control. */
  const setCountChip = (chip: HTMLElement | null, count: number, label: string): void => {
    if (!chip) return;
    chip.hidden = count === 0;
    const num = chip.querySelector('.bcn-countchip__num .esa-badge');
    if (num) num.textContent = String(count);
    const sr = chip.querySelector('.bcn-countchip__sr');
    if (sr) sr.textContent = label;
    // esa-tooltip reads `text` — this is the hover sentence, and the chip IS the tooltip
    // element, so there is no separate trigger to keep in sync.
    chip.setAttribute('text', label);
  };

  /** How many actions currently hold this evidence — across the whole list, not just what
      the filters have in view, since the badge is a property of the evidence itself. */
  const actionsHolding = (evidenceId: string): number =>
    [...associations.values()].filter((m) => m.has(evidenceId)).length;

  /** Actions currently VISIBLE — the filtered, selected set the drag rules operate over. */
  const visibleActionIds = (): string[] =>
    actionsIn(componentId, phase, type)
      .filter((a) => selectedActions.has(a.id))
      .map((a) => a.id);

  // ── Populate the legos (options are properties, not attributes) ──
  if (scopeSelect) {
    scopeSelect.options = COMPONENTS.map((c) => ({ label: c.name, value: c.id }));
    scopeSelect.value = componentId;
  }
  if (phaseSelect) {
    phaseSelect.options = [
      { label: 'All phases', value: '' },
      ...PHASES.map((p) => ({ label: p.name, value: p.id })),
    ];
    phaseSelect.value = '';
  }
  if (typeSelect) {
    typeSelect.options = [
      { label: 'All types', value: '' },
      ...ACTION_TYPES.map((t) => ({ label: TYPE_LABEL[t], value: t })),
    ];
    typeSelect.value = '';
  }

  const setTabs = (): void => {
    if (!tabs) return;
    // esa-tab-layout takes inline SVG on `tab.icon`. Lucide `upload` and `list`.
    const UPLOAD_ICON =
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>';
    const LIST_ICON =
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/></svg>';
    tabs.tabs = [
      { label: 'Add New', icon: UPLOAD_ICON },
      {
        label: 'Add Existing',
        icon: LIST_ICON,
        ...(stagedIds.size ? { badge: stagedIds.size } : {}),
      },
    ];
  };
  setTabs();
  if (tabs) tabs.activeIndex = 0;

  const showPanel = (name: 'upload' | 'list'): void => {
    for (const panel of drawer.querySelectorAll<HTMLElement>('[data-staging-panel]')) {
      panel.hidden = panel.dataset.stagingPanel !== name;
    }
  };

  // ── Rendering ────────────────────────────────────────────────────────────

  const setNotice = (message: string | null): void => {
    if (!notice) return;
    notice.textContent = message ?? '';
    notice.hidden = !message;
  };

  // BOTH searches offer only what is NOT already in their list, and reset to null after
  // every render so the field falls back to its placeholder.
  const refreshSearchOptions = (): void => {
    if (!targetSearch) return;
    targetSearch.options = actionsIn(componentId, phase, type)
      .filter((a) => !selectedActions.has(a.id))
      .map((a) => ({ label: `${a.code} · ${a.name}`, value: a.id }));
    targetSearch.value = null;
  };

  /** A record's title, whichever corpus it came from. itemById only knows the fixture, so
      anything the user created would have resolved to a bare id — this is the single place
      the two sources are reconciled. */
  const titleOf = (id: string): string => created.get(id)?.title ?? itemById(id)?.title ?? id;

  const refreshExistingOptions = (): void => {
    if (!existingPicker) return;
    // Records the user created ARE existing records — that is what Add means — so they join
    // the corpus this field searches, alongside the fixture's.
    const corpus = [
      ...EXISTING_ITEMS.map((i) => ({ id: i.id, title: i.title })),
      ...[...created.entries()].map(([id, rec]) => ({ id, title: rec.title })),
    ];
    existingPicker.options = corpus
      .filter((i) => !stagedIds.has(i.id))
      .map((i) => ({ label: i.title, value: i.id }));
    existingPicker.value = null;
  };

  /** One attached-evidence row, cloned from the pre-rendered lego template. */
  const attachmentRow = (actionId: string, evidenceId: string, suggested: boolean): Element | null => {
    const frag = rowTemplate?.content.cloneNode(true) as DocumentFragment | undefined;
    const row = frag?.firstElementChild;
    if (!row) return null;

    row.setAttribute('data-attached-evidence', evidenceId);
    // Unsaved is the DEFAULT for a fresh pairing; the flag comes off at Save. Marking the
    // row itself (rather than restyling from a parent) keeps the treatment correct when a
    // card holds a mix of saved and unsaved evidence, which is the normal case after you
    // save once and then drag something else on.
    row.toggleAttribute('data-unsaved', !saved.has(pairKey(actionId, evidenceId)));
    const name = row.querySelector('.bcn-ev-attached__name');
    if (name) name.textContent = titleOf(evidenceId);

    // The marker rides the ATTACHMENT, not the action: this pairing was suggested.
    const mark = row.querySelector('.bcn-ev-attached__mark');
    if (mark) (mark as HTMLElement).hidden = !suggested;

    const remove = row.querySelector('.bcn-ev-attached__remove');
    if (remove) remove.setAttribute('data-detach', `${actionId}::${evidenceId}`);

    return row;
  };

  /** The draft card. Hidden with no files, which is also what gives the dropzone the whole
      tab back — the zone is flex:1 and the draft is flex:none, so the layout follows from
      this one visibility flip rather than from any height being set. */
  const renderDraft = (): void => {
    if (!draftCard) return;
    draftCard.hidden = draftFiles.length === 0;
    if (draftFiles.length === 0) return;

    const suggestion = draftSuggestion(draftFiles);
    if (draftTitle) draftTitle.textContent = suggestion.title;
    const countPill = draftCard.querySelector('[data-draft-count] .esa-pill');
    if (countPill) {
      countPill.textContent = plural(draftFiles.length, 'file', 'files');
    }
    if (draftNotes) draftNotes.textContent = suggestion.notes;

    if (draftFileList && draftRowTpl) {
      const rows = draftFiles.map((file, i) => {
        const frag = draftRowTpl.content.cloneNode(true) as DocumentFragment;
        const row = frag.firstElementChild as HTMLElement | null;
        if (!row) return null;
        const name = row.querySelector('.bcn-ev-draft__filename');
        if (name) name.textContent = file.name;
        const size = row.querySelector('.bcn-ev-draft__filesize');
        if (size) size.textContent = file.size;
        row.querySelector('.bcn-ev-draft__fileremove')?.setAttribute('data-draft-remove', String(i));
        return row;
      });
      draftFileList.replaceChildren(...rows.filter((r): r is HTMLElement => r !== null));
    }
  };

  /** Write a created record into its pre-rendered shell. Everything the card shows comes
      from here, because the shell was built empty. */
  const fillCreatedCard = (li: HTMLElement, id: string): void => {
    const rec = created.get(id);
    if (!rec) return;
    const title = li.querySelector('.bcn-ev-card__titlelink') ?? li.querySelector('.bcn-ev-card__title');
    if (title) title.textContent = rec.title;
    const notes = li.querySelector('.bcn-ev-card__desc');
    if (notes) notes.textContent = rec.notes;

    // .esa-PILL, not .esa-badge: the staged cards' file count is an esa-pill. Against a
    // badge selector this silently matched nothing, so a created card kept the "0 files" its
    // empty shell was built with while its pills below showed the real ones.
    const countPill = li.querySelector('.bcn-ev-card__count .esa-pill');
    if (countPill) countPill.textContent = plural(rec.files.length, 'file', 'files');

    const files = li.querySelector('.bcn-ev-card__files');
    if (files && pillTpl) {
      const pills = rec.files.map((f) => {
        const frag = pillTpl.content.cloneNode(true) as DocumentFragment;
        const el = frag.firstElementChild as HTMLElement | null;
        const label = el?.querySelector('.esa-pill__label') ?? el?.querySelector('.esa-pill');
        if (label) label.textContent = f.name;
        return el;
      });
      files.replaceChildren(...pills.filter((p): p is HTMLElement => p !== null));
    }
  };

  const renderStaging = (): void => {
    const visible = visibleActionIds();
    for (const li of drawer.querySelectorAll<HTMLElement>('[data-staging-item]')) {
      const id = li.dataset.stagingItem ?? '';
      li.hidden = !stagedIds.has(id);

      // How many visible actions already hold this evidence, and whether any remain.
      const onCount = visible.filter((actionId) => attachedFor(actionId).has(id)).length;
      const exhausted = visible.length > 0 && onCount === visible.length;

      li.toggleAttribute('data-exhausted', exhausted);
      const grip = li.querySelector<HTMLElement>('[data-staging-grip]');
      if (grip) grip.setAttribute('draggable', String(!exhausted));

      if (id.startsWith('ev-new-')) fillCreatedCard(li, id);

      const isShut = !expandedEvidence.has(id);
      li.toggleAttribute('data-collapsed', isShut);
      const toggle = li.querySelector<HTMLElement>('[data-evidence-toggle]');
      if (toggle) {
        toggle.setAttribute('aria-expanded', String(!isShut));
        const label = li.querySelector('.bcn-ev-card__title')?.textContent?.trim() ?? 'evidence';
        toggle.setAttribute('aria-label', `${isShut ? 'Expand' : 'Collapse'} ${label}`);
      }

      // The chip counts EVERY action holding this evidence, not just the ones in view —
      // it describes the evidence, and filtering the action list does not change how many
      // actions it is on.
      const total = actionsHolding(id);
      setCountChip(
        li.querySelector<HTMLElement>('[data-staging-attached]'),
        total,
        `On ${plural(total, 'action', 'actions')}`,
      );
    }
    if (stagingEmpty) stagingEmpty.hidden = stagedIds.size > 0;
    setTabs();
  };

  const renderTargets = (): void => {
    const inScope = new Set(actionsIn(componentId, phase, type).map((a) => a.id));
    let shown = 0;

    for (const li of drawer.querySelectorAll<HTMLElement>('[data-target-row]')) {
      const id = li.dataset.targetRow ?? '';
      li.hidden = !(selectedActions.has(id) && inScope.has(id));
      if (li.hidden) continue;
      shown += 1;

      const isShut = collapsed.has(id);
      li.toggleAttribute('data-collapsed', isShut);
      const toggle = li.querySelector<HTMLElement>('[data-card-toggle]');
      if (toggle) {
        toggle.setAttribute('aria-expanded', String(!isShut));
        const label = li.querySelector('.bcn-ev-row__name')?.textContent ?? 'action';
        toggle.setAttribute('aria-label', `${isShut ? 'Expand' : 'Collapse'} ${label}`);
      }

      const dot = li.querySelector<HTMLElement>('[data-action-unsaved]');
      if (dot) dot.hidden = !actionHasUnsaved(id);

      setCountChip(
        li.querySelector<HTMLElement>('[data-action-evcount]'),
        attachedFor(id).size,
        `${plural(attachedFor(id).size, 'piece', 'pieces')} of evidence attached`,
      );

      // Rebuild this card's attached sub-list from the association map.
      const list = li.querySelector<HTMLElement>('[data-attached-list]');
      const hint = li.querySelector<HTMLElement>('[data-attached-hint]');
      const attached = attachedFor(id);
      if (list) {
        const rows = [...attached.entries()]
          .map(([evidenceId, suggested]) => attachmentRow(id, evidenceId, suggested))
          .filter((r): r is Element => r !== null);
        list.replaceChildren(...rows);
      }
      if (hint) hint.hidden = attached.size > 0;
    }

    if (targetsEmpty) targetsEmpty.hidden = shown > 0;
    if (targetsCount) targetsCount.textContent = shown ? String(shown) : '';
  };

  /** Save is live only while something is OUTSTANDING — it goes back to disabled after a
      save, with the drawer still open and everything still on screen. The badge follows the
      same predicate, so the two can never disagree. */
  const renderCommit = (): void => {
    const ready = hasUnsaved();
    const btn = saveWrap?.querySelector<HTMLButtonElement>('button');
    if (btn) btn.disabled = !ready;
    // The look lives on the wrapper class, the state on the native button — both or neither.
    saveWrap?.querySelector('.esa-button')?.classList.toggle('esa-button--disabled', !ready);
    renderPending();
  };

  /** The outstanding-changes card under the Actions column. Counts the JOINS, not the
      cards: "3 pieces of evidence to 2 actions" is what a save would write, and the same
      evidence landing on two actions is two joins but one piece of evidence — so the two
      numbers are counted over different sets rather than one being derived from the other.
      Removals get their own clause instead of being folded into the additions, because
      "adding 2" is a different promise from "removing 2" and a net figure would state
      neither. Driven off hasUnsaved(), so a draft on the Add New tab — which has its own
      marker and is committed by its own Save — never appears here. */
  const renderPending = (): void => {
    if (!pendingCard) return;
    pendingCard.hidden = !hasUnsaved();
    if (!hasUnsaved() || !pendingText) return;

    const addedEvidence = new Set<string>();
    const touchedActions = new Set<string>();
    for (const [actionId, m] of associations.entries()) {
      for (const evidenceId of m.keys()) {
        if (saved.has(pairKey(actionId, evidenceId))) continue;
        addedEvidence.add(evidenceId);
        touchedActions.add(actionId);
      }
    }

    const parts: string[] = [];
    if (addedEvidence.size > 0) {
      parts.push(
        `Adding ${plural(addedEvidence.size, 'piece', 'pieces')} of evidence to ${plural(
          touchedActions.size,
          'action',
          'actions',
        )}.`,
      );
    }
    if (removed.size > 0) {
      parts.push(`Removing ${plural(removed.size, 'attachment', 'attachments')}.`);
    }
    pendingText.textContent = parts.join(' ');
  };

  /** Commit everything on screen. The drawer deliberately STAYS OPEN: this surface is for
      working through a pile of evidence, and closing on save would throw away the list the
      user is part-way through. Saving just settles what is there. */
  const save = (): void => {
    for (const [actionId, m] of associations.entries()) {
      for (const evidenceId of m.keys()) saved.add(pairKey(actionId, evidenceId));
    }
    removed.clear(); // the deletions are committed too
    persist(); // Save is a real round-trip: this is what survives a reload
    renderAll();
  };

  const renderAll = (): void => {
    renderDraft();
    renderTargets();
    renderStaging(); // after targets: the grip rules read what is visible
    renderCommit();
    refreshSearchOptions();
    refreshExistingOptions();
  };

  // ── The join ─────────────────────────────────────────────────────────────

  const attach = (actionId: string, evidenceId: string, suggested: boolean): void => {
    const map = associations.get(actionId) ?? new Map<string, boolean>();
    if (map.has(evidenceId)) return; // never twice
    map.set(evidenceId, suggested);
    associations.set(actionId, map);
    collapsed.delete(actionId); // never land evidence somewhere the user cannot see it
    setNotice(null);
    renderAll();
  };

  const detach = (actionId: string, evidenceId: string): void => {
    const key = pairKey(actionId, evidenceId);
    associations.get(actionId)?.delete(evidenceId);
    // Taking off something that was SAVED is itself an unsaved change. Taking off something
    // that was never saved just undoes the addition, and leaves nothing outstanding.
    if (saved.delete(key)) removed.add(key);
    renderAll();
  };

  // ── Dragging ─────────────────────────────────────────────────────────────
  // HTML5 drag API rather than Angular CDK, but the VISUAL contract is the wizard's: grip
  // handle, source card dimmed while it travels, a compact chip as the drag image, and the
  // receiving card tinted with --color-secondary.

  let draggingId: string | null = null;

  const markBlockedTargets = (evidenceId: string | null): void => {
    for (const li of drawer.querySelectorAll<HTMLElement>('[data-target-row]')) {
      const id = li.dataset.targetRow ?? '';
      li.toggleAttribute('data-blocked', !!evidenceId && attachedFor(id).has(evidenceId));
      if (!evidenceId) li.removeAttribute('data-receiving');
    }
  };

  drawer.addEventListener('dragstart', (event) => {
    const grip = (event.target as HTMLElement).closest<HTMLElement>('[data-staging-grip]');
    if (!grip) return;
    const card = grip.closest<HTMLElement>('[data-staging-item]');
    const id = grip.dataset.stagingGrip ?? '';
    if (!card || !id || card.hasAttribute('data-exhausted')) {
      event.preventDefault();
      return;
    }
    draggingId = id;
    event.dataTransfer?.setData(DRAG_TYPE, id);
    if (event.dataTransfer) event.dataTransfer.effectAllowed = 'copy';

    // A compact chip as the drag image — the wizard's .requirement-row__drag-preview.
    const chip = document.createElement('div');
    chip.className = 'bcn-ev-dragimage';
    chip.textContent = titleOf(id);
    document.body.append(chip);
    event.dataTransfer?.setDragImage(chip, 12, 12);
    window.setTimeout(() => chip.remove(), 0);

    card.setAttribute('data-dragging', '');
    markBlockedTargets(id);
  });

  drawer.addEventListener('dragend', () => {
    draggingId = null;
    for (const el of drawer.querySelectorAll('[data-dragging]')) el.removeAttribute('data-dragging');
    markBlockedTargets(null);
  });

  drawer.addEventListener('dragover', (event) => {
    if (!draggingId) return;
    const card = (event.target as HTMLElement).closest<HTMLElement>('[data-target-row]');
    if (!card || card.hidden || card.hasAttribute('data-blocked')) return;
    event.preventDefault(); // the only way to say "this is a valid drop target"
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    card.setAttribute('data-receiving', '');
  });

  drawer.addEventListener('dragleave', (event) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>('[data-target-row]');
    if (card && !card.contains((event as DragEvent).relatedTarget as Node)) {
      card.removeAttribute('data-receiving');
    }
  });

  drawer.addEventListener('drop', (event) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>('[data-target-row]');
    if (!card || card.hasAttribute('data-blocked')) return;
    event.preventDefault();
    const evidenceId = (event as DragEvent).dataTransfer?.getData(DRAG_TYPE) || draggingId;
    const actionId = card.dataset.targetRow ?? '';
    card.removeAttribute('data-receiving');
    if (evidenceId && actionId) attach(actionId, evidenceId, false);
  });

  // ── Find matches ─────────────────────────────────────────────────────────
  // ATTACHES rather than proposes: it may pull new action cards into the list, and hangs
  // the relevant evidence on them, each attachment marked as its idea.

  const findMatches = (): void => {
    if (!stagedIds.size) {
      setNotice('Add evidence first — matches are found by reading what you have staged.');
      return;
    }
    setNotice(null);
    if (targetsWorking) targetsWorking.hidden = false;

    window.setTimeout(() => {
      if (targetsWorking) targetsWorking.hidden = true;
      const staged = [...stagedIds];
      const inScope = new Set(actionsIn(componentId, phase, type).map((a) => a.id));

      const hits = SUGGESTIONS.filter(
        (s) => staged.includes(s.itemId) && s.tier === 'suggested' && inScope.has(s.actionId)
      );

      let joined = 0;
      for (const s of hits) {
        const map = associations.get(s.actionId) ?? new Map<string, boolean>();
        if (map.has(s.itemId)) continue;
        selectedActions.add(s.actionId); // pull the card in if it is not on the list yet
        map.set(s.itemId, true);
        associations.set(s.actionId, map);
        joined += 1;
      }

      setNotice(joined === 0 ? `No new matches in ${componentById(componentId).name}.` : null);
      renderAll();
    }, 700);
  };

  // ── The unsaved-changes guard ────────────────────────────────────────────
  // Changing either filter re-scopes the action list, which strands whatever has been
  // joined but not attached. Ask first, and mean it — cancelling restores the control.

  let pendingApply: (() => void) | null = null;
  let pendingRevert: (() => void) | null = null;

  const guard = (apply: () => void, revert: () => void): void => {
    if (!hasUnsaved() || !confirmDialog) {
      apply();
      return;
    }
    pendingApply = apply;
    pendingRevert = revert;
    confirmDialog.open = true;
  };

  confirmDialog?.addEventListener('confirm', () => {
    // The dialog promised the UNSAVED work goes — and only that. Anything already saved has
    // been committed, so re-scoping the list must not take it with it. Discard here, once,
    // rather than in every filter's apply: a filter change with nothing unsaved then stays a
    // pure view change and does not silently drop the cards you have chosen.
    for (const [actionId, m] of associations.entries()) {
      for (const evidenceId of [...m.keys()]) {
        if (!saved.has(pairKey(actionId, evidenceId))) m.delete(evidenceId);
      }
      if (m.size === 0) associations.delete(actionId);
    }
    // Pending deletions are unsaved work by the same definition, so the guard discards them
    // as well — the saved pairings they would have removed simply stay.
    for (const key of removed) {
      const [actionId, evidenceId] = key.split('::');
      const map = associations.get(actionId) ?? new Map<string, boolean>();
      map.set(evidenceId, false);
      associations.set(actionId, map);
      saved.add(key);
    }
    removed.clear();
    pendingApply?.();
    pendingApply = null;
    pendingRevert = null;
  });
  /** Commit the draft as a record: it takes a shell, joins the corpus the Add Existing tab
      searches, lands staged and ready to drag, and is written to the store. The draft
      empties, which hands the tab back to the dropzone. */
  const addDraft = (): void => {
    if (draftFiles.length === 0) return;
    const slot = NEW_SLOTS.find((sl) => !created.has(sl.id));
    if (!slot) {
      setNotice('This prototype can hold four uploaded records at a time.');
      return;
    }
    const suggestion = draftSuggestion(draftFiles);
    created.set(slot.id, { title: suggestion.title, notes: suggestion.notes, files: [...draftFiles] });
    stagedIds.add(slot.id);
    draftFiles = [];
    persist();
    renderAll();
    // Land the user on the list, where the record they just made now is.
    if (tabs) tabs.activeIndex = 1;
    showPanel('list');
  };

  saveWrap?.addEventListener('click', () => {
    if (!hasUnsaved()) return;
    save();
  });

  confirmDialog?.addEventListener('cancel', () => {
    pendingRevert?.();
    pendingApply = null;
    pendingRevert = null;
  });

  // ── Events ───────────────────────────────────────────────────────────────

  scopeSelect?.addEventListener('change', (e) => {
    const next = (e as CustomEvent<{ value: string }>).detail?.value;
    if (!next || next === componentId) return;
    const previous = componentId;
    guard(
      () => {
        componentId = next;
        writeActiveComponent(componentId);
        // Scope is absolute: nothing joined in the old component survives the switch.
        selectedActions.clear();
        associations.clear();
        setNotice(null);
        renderAll();
      },
      () => {
        if (scopeSelect) scopeSelect.value = previous;
      }
    );
  });

  // PHASE and TYPE are VIEW filters: narrowing hides cards, widening brings them back.
  // They do NOT clear the selection — only the guard does, and only when the user has
  // agreed to abandon unsaved associations (which would otherwise survive invisibly and
  // still be committed by Attach).
  phaseSelect?.addEventListener('change', (e) => {
    const next = ((e as CustomEvent<{ value: string }>).detail?.value ?? '') as PhaseId | '';
    if (next === phase) return;
    const previous = phase;
    guard(
      () => {
        phase = next;
        setNotice(null);
        renderAll();
      },
      () => {
        if (phaseSelect) phaseSelect.value = previous;
      }
    );
  });

  typeSelect?.addEventListener('change', (e) => {
    const next = ((e as CustomEvent<{ value: string }>).detail?.value ?? '') as ActionType | '';
    if (next === type) return;
    const previous = type;
    guard(
      () => {
        type = next;
        setNotice(null);
        renderAll();
      },
      () => {
        if (typeSelect) typeSelect.value = previous;
      }
    );
  });

  tabs?.addEventListener('tabchange', (e) => {
    const index = (e as CustomEvent<{ index: number }>).detail?.index ?? 0;
    showPanel(index === 0 ? 'upload' : 'list');
  });

  // Picking a record stages it, then renderAll clears the field and drops it from options.
  existingPicker?.addEventListener('change', (e) => {
    const value = (e as CustomEvent<{ value: string | string[] }>).detail?.value;
    const id = Array.isArray(value) ? value[0] : value;
    if (!id) return;
    stagedIds.add(id);
    setNotice(null);
    renderAll();
  });

  // A drop pulls the NEXT file off the fixture queue rather than reading the real event —
  // a browser cannot be handed a deterministic OS drop, and the demo has to render the same
  // way every run. Each drop adds ONE file to the SAME draft, which is the whole point: the
  // "several files, one piece of evidence" model is made by dropping, not explained.
  const dropzone = drawer.querySelector<HTMLElement>('[data-staging-dropzone]');
  dropzone?.addEventListener('change', () => {
    const next = INCOMING_FILES[draftFiles.length % INCOMING_FILES.length];
    if (next && !draftFiles.some((f) => f.name === next.name)) draftFiles.push(next);
    setNotice(null);
    renderAll();
  });
  if (dropzone) trimDropzoneChrome(dropzone);

  targetSearch?.addEventListener('change', (e) => {
    const value = (e as CustomEvent<{ value: string | string[] }>).detail?.value;
    const id = Array.isArray(value) ? value[0] : value;
    if (!id) return;
    selectedActions.add(id);
    renderAll();
  });

  // Delegated clicks: remove an action card, detach one attachment, drop staged evidence,
  // run the utility.
  drawer.addEventListener('click', (event) => {
    const el = event.target as HTMLElement;

    const toggle = el.closest<HTMLElement>('[data-card-toggle]');
    if (toggle) {
      const id = toggle.dataset.cardToggle ?? '';
      if (collapsed.has(id)) collapsed.delete(id);
      else collapsed.add(id);
      renderTargets();
      return;
    }

    const draftRemove = el.closest<HTMLElement>('[data-draft-remove]');
    if (draftRemove) {
      const i = Number(draftRemove.dataset.draftRemove);
      if (Number.isInteger(i)) draftFiles.splice(i, 1);
      renderAll();
      return;
    }

    if (el.closest('[data-draft-add]')) {
      addDraft();
      return;
    }

    if (el.closest('[data-draft-cancel]')) {
      // Throw the draft away wholesale. Nothing was committed, so there is nothing to undo
      // and no guard to raise — and emptying it hands the tab back to the dropzone.
      draftFiles = [];
      renderAll();
      return;
    }

    const evidenceToggle = el.closest<HTMLElement>('[data-evidence-toggle]');
    if (evidenceToggle) {
      const id = evidenceToggle.dataset.evidenceToggle ?? '';
      if (expandedEvidence.has(id)) expandedEvidence.delete(id);
      else expandedEvidence.add(id);
      renderStaging();
      return;
    }

    const detachBtn = el.closest<HTMLElement>('[data-detach]');
    if (detachBtn) {
      const [actionId, evidenceId] = (detachBtn.dataset.detach ?? '').split('::');
      if (actionId && evidenceId) detach(actionId, evidenceId);
      return;
    }

    const dismiss = el.closest<HTMLElement>('[data-target-dismiss]');
    if (dismiss) {
      const id = dismiss.dataset.targetDismiss ?? '';
      selectedActions.delete(id);
      associations.delete(id); // its attachments go with it
      renderAll();
      return;
    }

    const remove = el.closest<HTMLElement>('[data-staging-remove]');
    if (remove) {
      const id = remove.dataset.stagingRemove ?? '';
      stagedIds.delete(id);
      for (const map of associations.values()) map.delete(id); // it cannot stay attached
      renderAll();
      return;
    }

    if (el.closest('[data-targets-find]')) findMatches();
  });

  // A file drag arriving anywhere in the drawer switches to the Add New tab, so the dropzone
  // is in front of the user before they let go.
  const isFileDrag = (event: DragEvent): boolean =>
    Array.from(event.dataTransfer?.types ?? []).includes('Files');

  drawer.addEventListener('dragenter', (e) => {
    if (isFileDrag(e as DragEvent) && tabs && tabs.activeIndex !== 0) {
      tabs.activeIndex = 0;
      showPanel('upload');
    }
  });

  // ── Opening ──────────────────────────────────────────────────────────────

  const applyPreset = (id: string): void => {
    const preset = presetById(id);
    componentId = preset.componentId || readActiveComponent();
    writeActiveComponent(componentId);
    if (scopeSelect) scopeSelect.value = componentId;
    phase = '';
    if (phaseSelect) phaseSelect.value = '';
    type = '';
    if (typeSelect) typeSelect.value = '';

    stagedIds.clear();
    for (const itemId of preset.itemIds) stagedIds.add(itemId);

    selectedActions.clear();
    associations.clear();
    for (const actionId of preset.actionIds) selectedActions.add(actionId);

    setNotice(null);
    // Open on the list tab when evidence is already staged — the drag source is what
    // matters then; otherwise start at the uploader.
    const index = stagedIds.size > 0 ? 1 : 0;
    if (tabs) tabs.activeIndex = index;
    showPanel(index === 0 ? 'upload' : 'list');
    renderAll();
  };

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
      if (!stagedIds.size && !selectedActions.size) applyPreset('cold');
      drawer.show();
    }
  });

  showPanel('upload');
  // Load whatever a previous session committed BEFORE the first paint, so a reload comes up
  // showing saved work rather than flashing an empty drawer and filling in after.
  restore();
  renderAll();
}