// Evidence Triage — the client controller.
//
// Owns everything the Astro components deliberately do not: which record is being reviewed,
// what has been filed or dismissed this session, and which rows the filters allow through.
// The markup is all rendered at build time; this file only ever TOGGLES what is already on
// the page. Nothing here builds UI from a string — every control it touches is a lego that
// Astro already placed.
//
// There is no bulk selection. Records are decided one at a time, so nothing here tracks a
// checked set — see BcnTriageQueue.astro for why that was pulled.
//
// SESSION-ONLY, WITH ONE EXCEPTION. Approvals and dismissals do not persist: a prototype that
// remembers an empty queue from yesterday's demo cannot be demoed twice, so a reload always
// restores the full sixteen. MANUALLY ADDED suggestions are the exception — they are authored
// content rather than a decision, and they are expected to survive a reload, so they live in
// localStorage under MANUAL_KEY. Clear them from the console with
//   localStorage.removeItem('bcn-triage-manual')
// which is worth knowing before a demo, since they do accumulate.

interface FilterState {
  source: string[];
  component: string[];
  search: string;
  /** 'all' | 'has' — the has-suggestions pivot. */
  scope: string;
}

/** What has happened to one record this session. */
interface ItemState {
  /** Actions this record has been attached to. */
  filed: Set<string>;
  /** Proposals explicitly rejected. */
  dismissed: Set<string>;
}

const qsa = <T extends Element>(sel: string, root: ParentNode = document): T[] =>
  Array.from(root.querySelectorAll<T>(sel));

/** Action metadata for the cards a manual addition clones, keyed by action id. */
interface ActionMeta {
  code: string;
  name: string;
  type: string;
  phase: string;
}

let actionIndex: Record<string, ActionMeta> = {};
const actionMeta = (id: string): ActionMeta | undefined => actionIndex[id];

/** Where manual suggestions live between sessions: { [itemId]: actionId[] }. */
const MANUAL_KEY = 'bcn-triage-manual';

const readManual = (): Record<string, string[]> => {
  try {
    return JSON.parse(localStorage.getItem(MANUAL_KEY) ?? '{}') as Record<string, string[]>;
  } catch {
    return {};
  }
};

const writeManual = (all: Record<string, string[]>): void => {
  try {
    localStorage.setItem(MANUAL_KEY, JSON.stringify(all));
  } catch {
    /* A private-mode browser refusing storage should not break the surface. */
  }
};

/** Assign a Lit ARRAY property from a JSON data attribute (attributes can't carry arrays). */
const applyArrayProp = (el: Element, attr: string, prop: string): void => {
  const raw = el.getAttribute(attr);
  if (!raw) return;
  try {
    (el as unknown as Record<string, unknown>)[prop] = JSON.parse(raw);
  } catch {
    /* A malformed fixture should not take the whole page down. */
  }
};

export function setupTriage(): void {
  const root = document.querySelector<HTMLElement>('.bcn-triage-workspace');
  if (!root) return;

  const rows = qsa<HTMLLIElement>('[data-triage-row]');
  if (rows.length === 0) return;

  const panels = qsa<HTMLElement>('[data-triage-panel]');
  const prompt = document.querySelector<HTMLElement>('[data-triage-prompt]');
  const groups = qsa<HTMLElement>('[data-triage-group]');
  const emptyFiltered = document.querySelector<HTMLElement>('[data-triage-empty="filtered"]');
  const emptyCleared = document.querySelector<HTMLElement>('[data-triage-empty="cleared"]');

  // ── State ────────────────────────────────────────────────────────────────

  const state = new Map<string, ItemState>();
  const filters: FilterState = { source: [], component: [], search: '', scope: 'all' };
  let activeId = '';

  const stateFor = (id: string): ItemState => {
    let s = state.get(id);
    if (!s) {
      s = { filed: new Set(), dismissed: new Set() };
      state.set(id, s);
    }
    return s;
  };

  /** Every proposal rendered for a record, as `itemId|actionId` keys. */
  const proposalsFor = (id: string): string[] =>
    qsa<HTMLElement>(`[data-triage-panel="${id}"] [data-triage-sug]`)
      .map((el) => el.getAttribute('data-triage-sug') ?? '')
      .filter(Boolean);

  /**
   * A record leaves the queue once it has been attached somewhere, or had every proposal
   * rejected. Rejecting only SOME proposals leaves it here — the remaining ones still need an
   * answer. A record with no proposals at all can only leave by being attached by hand.
   */
  const isResolved = (id: string): boolean => {
    const s = stateFor(id);
    if (s.filed.size > 0) return true;
    const all = proposalsFor(id);
    return all.length > 0 && all.every((k) => s.dismissed.has(k.split('|')[1]));
  };

  // The card clone needs each action's code/name/type/phase; the combobox only carries a
  // label, so the full record ships alongside it.
  const metaEl = document.querySelector('[data-triage-action-meta]');
  if (metaEl) {
    try {
      actionIndex = JSON.parse(metaEl.getAttribute('data-triage-action-meta') ?? '{}');
    } catch {
      actionIndex = {};
    }
  }

  // ── Wire the Lit array properties Astro could only pass as JSON ──────────

  qsa('[data-triage-files]').forEach((el) => applyArrayProp(el, 'data-triage-files', 'files'));
  qsa('[data-triage-picker]').forEach((el) => applyArrayProp(el, 'data-options', 'options'));

  // ── Filtering ────────────────────────────────────────────────────────────

  const rowPasses = (row: HTMLLIElement): boolean => {
    if (isResolved(row.dataset.triageRow ?? '')) return false;

    const { source = '', component = '', search = '' } = row.dataset;
    if (filters.source.length && !filters.source.includes(source)) return false;
    if (filters.component.length && !filters.component.includes(component)) return false;
    if (filters.search && !search.includes(filters.search)) return false;

    // Counted LIVE from the panel, not from the build-time facet: a manual addition can give
    // a record its first suggestion, and this pivot has to reflect what the record carries
    // now rather than what the utility proposed when the page was built.
    if (filters.scope === 'has') {
      const id = row.dataset.triageRow ?? '';
      if (document.querySelectorAll(`[data-triage-panel="${id}"] [data-triage-sug]`).length === 0) {
        return false;
      }
    }
    return true;
  };

  const render = (): void => {
    let visible = 0;
    let remaining = 0;

    for (const row of rows) {
      if (!isResolved(row.dataset.triageRow ?? '')) remaining++;

      const show = rowPasses(row);
      row.hidden = !show;
      if (show) visible++;
    }

    // A day heading with nothing under it is noise.
    for (const group of groups) {
      group.hidden = qsa<HTMLLIElement>('[data-triage-row]', group).every((r) => r.hidden);
    }

    // "You finished" and "your filters hide everything" are different news.
    if (emptyCleared) emptyCleared.hidden = remaining !== 0;
    if (emptyFiltered) emptyFiltered.hidden = visible !== 0 || remaining === 0;

    updateInboxCount(remaining, visible);
  };

  // ── Inbox header ─────────────────────────────────────────────────────────

  /**
   * The badge counts what is IN the inbox; a filter changes the view, not the backlog. But two
   * numbers that appear to disagree are worse than one, so whenever a filter is narrowing the
   * list the header says how many of the total are on screen.
   */
  const updateInboxCount = (remaining: number, visible: number): void => {
    const badge = document.querySelector('[data-triage-count] .esa-badge__text');
    if (badge) badge.textContent = `${remaining} suggestions`;


    const showing = document.querySelector<HTMLElement>('[data-triage-showing]');
    if (!showing) return;
    const narrowed = visible !== remaining;
    showing.hidden = !narrowed;
    if (narrowed) showing.textContent = `Showing ${visible}`;
  };

  // ── Review panel ─────────────────────────────────────────────────────────

  const showPanel = (id: string): void => {
    activeId = id;

    for (const panel of panels) panel.hidden = panel.dataset.triagePanel !== id;
    if (prompt) prompt.hidden = Boolean(id);
    for (const row of rows) {
      if (row.dataset.triageRow === id) row.setAttribute('data-active', '');
      else row.removeAttribute('data-active');
    }
  };

  /** After a record leaves, land on the next one still waiting rather than on nothing. */
  const advanceFrom = (id: string): void => {
    const order = rows.map((r) => r.dataset.triageRow ?? '');
    const start = order.indexOf(id);
    for (let i = start + 1; i < order.length; i++) {
      if (!isResolved(order[i])) return showPanel(order[i]);
    }
    for (let i = start - 1; i >= 0; i--) {
      if (!isResolved(order[i])) return showPanel(order[i]);
    }
    showPanel('');
  };

  // ── Marking a proposal ───────────────────────────────────────────────────

  const paintProposal = (key: string): void => {
    const card = document.querySelector<HTMLElement>(`[data-triage-sug="${key}"]`);
    if (!card) return;

    const [itemId, actionId] = key.split('|');
    const s = stateFor(itemId);
    const act = card.querySelector<HTMLElement>('[data-triage-sug-act]');
    const done = card.querySelector<HTMLElement>('[data-triage-sug-done]');
    const badge = card.querySelector<HTMLElement>('[data-triage-sug-verdict] .esa-badge');

    const filed = s.filed.has(actionId);
    const dismissed = s.dismissed.has(actionId);
    const settled = filed || dismissed;

    if (act) act.hidden = settled;
    if (done) done.hidden = !settled;
    card.dataset.state = filed ? 'approved' : dismissed ? 'dismissed' : '';

    // The verdict badge is one esa-badge re-labelled, not two badges toggled: variant lives
    // in a class on the host, the words in .esa-badge__text.
    if (badge && settled) {
      const text = badge.querySelector('.esa-badge__text');
      if (text) text.textContent = filed ? 'Attached' : 'Dismissed';
      badge.classList.toggle('esa-badge--success', filed);
      badge.classList.toggle('esa-badge--secondary', dismissed);
    }
  };

  const fileProposal = (itemId: string, actionId: string): void => {
    const s = stateFor(itemId);
    s.filed.add(actionId);
    s.dismissed.delete(actionId);
    paintProposal(`${itemId}|${actionId}`);
    if (activeId === itemId) advanceFrom(itemId);
    render();
  };

  const dismissProposal = (itemId: string, actionId: string): void => {
    const s = stateFor(itemId);
    s.dismissed.add(actionId);
    s.filed.delete(actionId);
    paintProposal(`${itemId}|${actionId}`);
    if (isResolved(itemId) && activeId === itemId) advanceFrom(itemId);
    render();
  };

  const undoProposal = (itemId: string, actionId: string): void => {
    const s = stateFor(itemId);
    s.filed.delete(actionId);
    s.dismissed.delete(actionId);
    paintProposal(`${itemId}|${actionId}`);
    render();
  };

  /** Wire one proposal card's three buttons. Used by both the built-in cards and the clones. */
  const wireCard = (card: HTMLElement): void => {
    const [itemId, actionId] = (card.dataset.triageSug ?? '').split('|');
    card.querySelector('[data-triage-sug-approve]')?.addEventListener('click', () => fileProposal(itemId, actionId));
    card.querySelector('[data-triage-sug-dismiss]')?.addEventListener('click', () => dismissProposal(itemId, actionId));
    card.querySelector('[data-triage-sug-undo]')?.addEventListener('click', () => undoProposal(itemId, actionId));
  };

  // ── Events ───────────────────────────────────────────────────────────────

  // Row click → review it.
  for (const btn of qsa<HTMLButtonElement>('[data-triage-open]')) {
    btn.addEventListener('click', () => showPanel(btn.dataset.triageOpen ?? ''));
  }

  // Panel proposal buttons. Manual cards are wired by wireCard() as they are created.
  for (const card of qsa<HTMLElement>('[data-triage-sug]')) wireCard(card);

  // ── Manual suggestions ──────────────────────────────────────────────────
  // A manual addition is a SUGGESTION, not an attachment: it lands in the list still needing
  // approval, so the rule "nothing is attached until a person approves it" holds whether the
  // proposal came from the utility or from the person.

  const dialog = document.querySelector<HTMLElement & { open: boolean }>('[data-triage-adddialog]');
  const template = document.querySelector<HTMLTemplateElement>('[data-triage-manual-template]');
  const combo = document.querySelector<HTMLElement & { value: string | string[]; options: unknown }>(
    '[data-triage-add-combo]'
  );
  const addScope = document.querySelector<HTMLElement>('[data-triage-add-scope]');
  const commitBtn = document.querySelector<HTMLButtonElement>('[data-triage-add-commit]');
  const cancelBtn = document.querySelector<HTMLElement>('[data-triage-add-cancel]');
  let addingFor = '';

  if (combo) applyArrayProp(combo, 'data-options', 'options');

  /** The combobox holds the selection; normalise its value to a plain array. */
  const staged = (): string[] => {
    const v = combo?.value;
    if (!v) return [];
    return Array.isArray(v) ? v : [v];
  };

  /** Build a manual card from the template and put it at the end of the record's list. */
  const addManualCard = (itemId: string, actionId: string): boolean => {
    if (!template) return false;
    const panel = document.querySelector<HTMLElement>(`[data-triage-panel="${itemId}"]`);
    const list = panel?.querySelector<HTMLElement>('.bcn-triage-review__sugs');
    const action = actionMeta(actionId);
    if (!panel || !list || !action) return false;
    if (panel.querySelector(`[data-triage-sug="${itemId}|${actionId}"]`)) return false;

    const card = template.content.firstElementChild!.cloneNode(true) as HTMLElement;
    card.setAttribute('data-triage-sug', `${itemId}|${actionId}`);
    card.querySelector('[data-tpl-name]')!.textContent = action.name;

    const codeText = card.querySelector('[data-tpl-code] .bcn-cbadge');
    if (codeText) codeText.textContent = action.code;

    const tagBadges = card.querySelectorAll('[data-tpl-tags] .esa-badge__text');
    if (tagBadges[0]) tagBadges[0].textContent = action.type;
    if (tagBadges[1]) tagBadges[1].textContent = action.phase;

    list.appendChild(card);
    wireCard(card);

    // The "No matches found" line belongs to an empty list, not to an empty utility.
    const nomatch = panel.querySelector<HTMLElement>('[data-triage-nomatch]');
    if (nomatch) nomatch.hidden = list.children.length > 0;

    syncRowBadge(itemId);
    return true;
  };

  /**
   * Keep the queue row's badge equal to the number of cards its panel actually shows. The
   * badge is rendered at build time from the utility's output, so a manual addition would
   * otherwise leave the row promising fewer proposals than opening it reveals.
   */
  function syncRowBadge(itemId: string): void {
    const n = document.querySelectorAll(`[data-triage-panel="${itemId}"] [data-triage-sug]`).length;
    const foot = document.querySelector<HTMLElement>(
      `[data-triage-row="${itemId}"] [data-triage-rowfoot]`
    );
    if (!foot) return;
    foot.hidden = n === 0;
    const text = foot.querySelector('.esa-badge__text');
    if (text) text.textContent = `${n} suggested action${n === 1 ? '' : 's'}`;
  }

  /** Re-hydrate everything a previous session added, before the first render. */
  const hydrateManual = (): void => {
    const stored = readManual();
    for (const [itemId, actionIds] of Object.entries(stored)) {
      for (const actionId of actionIds) addManualCard(itemId, actionId);
    }
  };

  const rememberManual = (itemId: string, actionId: string): void => {
    const all = readManual();
    const forItem = all[itemId] ?? [];
    if (!forItem.includes(actionId)) all[itemId] = [...forItem, actionId];
    writeManual(all);
  };

  const refreshCommit = (): void => {
    if (!commitBtn) return;
    const n = staged().length;
    commitBtn.disabled = n === 0;
    const label = commitBtn.querySelector('.esa-button__label') ?? commitBtn;
    label.textContent = n > 1 ? `Add ${n}` : 'Add';
  };

  const closeAddDialog = (): void => {
    if (combo) combo.value = [];
    refreshCommit();
    if (dialog) dialog.open = false;
  };

  for (const btn of qsa<HTMLElement>('[data-triage-add]')) {
    btn.addEventListener('click', () => {
      addingFor = btn.dataset.triageAdd ?? '';
      const row = document.querySelector<HTMLElement>(`[data-triage-row="${addingFor}"]`);
      const title = row?.querySelector('.bcn-triage-row__title')?.textContent ?? '';
      if (addScope) addScope.textContent = title ? `Adding to: ${title}` : '';
      if (combo) combo.value = [];
      refreshCommit();
      if (dialog) dialog.open = true;
    });
  }

  // Picking STAGES rather than commits: the record is not touched until Add.
  combo?.addEventListener('change', refreshCommit);

  commitBtn?.addEventListener('click', () => {
    for (const id of staged()) {
      if (addManualCard(addingFor, id)) rememberManual(addingFor, id);
    }
    closeAddDialog();
    render();
  });

  cancelBtn?.addEventListener('click', closeAddDialog);

  // Esc and the lego's own close button both fire `close`; drop anything staged with them.
  dialog?.addEventListener('close', () => {
    if (combo) combo.value = [];
    refreshCommit();
  });

  // Closing a record returns the pane to its unselected state.
  for (const btn of qsa<HTMLElement>('[data-triage-close]')) {
    btn.addEventListener('click', () => showPanel(''));
  }

  // Filter dropdowns + search, supplied by the page.
  for (const el of qsa<HTMLElement>('[data-triage-filter]')) {
    applyArrayProp(el, 'data-options', 'options');
    el.addEventListener('selection-change', (e) => {
      const key = el.dataset.triageFilter as 'source' | 'component';
      const value = (e as CustomEvent<{ value: string[] | string }>).detail?.value ?? [];
      filters[key] = Array.isArray(value) ? value : [value].filter(Boolean);
      render();
    });
  }

  // The scope pivot. Its options are a Lit ARRAY property, same as the filter dropdowns.
  const scopeToggle = document.querySelector<HTMLElement>('[data-triage-scope]');
  if (scopeToggle) {
    applyArrayProp(scopeToggle, 'data-options', 'options');
    scopeToggle.addEventListener('change', (e) => {
      filters.scope = (e as CustomEvent<{ value: string }>).detail?.value ?? 'all';
      render();
    });
  }

  const search = document.querySelector<HTMLElement>('[data-triage-search]');
  search?.addEventListener('input', (e) => {
    const value = (e.target as unknown as { value?: string })?.value ?? '';
    filters.search = value.trim().toLowerCase();
    render();
  });

  const resetFilters = (): void => {
    filters.source = [];
    filters.component = [];
    filters.search = '';
    filters.scope = 'all';
    const scope = document.querySelector<HTMLElement & { value: string }>('[data-triage-scope]');
    if (scope) scope.value = 'all';
    for (const el of qsa<HTMLElement>('[data-triage-filter]')) clearDropdown(el);
    setFieldValue(search, '');
    render();
  };

  // esa-filter-clear-button announces itself with an event rather than exposing a handler,
  // so listen for it as well as for a plain click on the host span.
  document.querySelector('[data-triage-clear]')?.addEventListener('click', resetFilters);
  document.addEventListener('esa-filter-clear', resetFilters);

  hydrateManual();
  render();
}

/** Write a value into an esa-text-field, including the input inside its shadow root. */
function setFieldValue(field: HTMLElement | null, value: string): void {
  if (!field) return;
  (field as unknown as { value: string }).value = value;
  const inner = field.shadowRoot?.querySelector('input');
  if (inner) inner.value = value;
}

/**
 * Reset one esa-filter-dropdown's selection.
 *
 * HUB GAP (already logged by ./prototype-index.ts, which needs the same seam): the lego keeps
 * its selection in `_selected`, a private Lit state property, and exposes no public `clear()`
 * or settable `value`. Assigning the reactive property works and re-renders, but it reaches
 * past the component's public surface. Two spoke components needing this is the argument for
 * promoting a public clear() to @esa/ecology.
 */
function clearDropdown(el: HTMLElement): void {
  (el as unknown as { _selected: string[] })._selected = [];
}

setupTriage();
