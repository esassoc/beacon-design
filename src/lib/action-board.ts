// The Actions page's one client store. Every view (board, table, timeline), the filter
// bar, the board-configuration dialog and the implementation dialog import THIS module;
// Vite bundles it once per page, so they share one instance and one truth.
//
// What it holds:
//   · the implementations (seeded from the page's JSON island, then patched by edits)
//   · the project's WORKFLOWS — per-action-type board columns over the status backbone
//   · the active component (the H1 switcher), the filter state, the view, the board's
//     selected workflow, and which fields a card shows
//
// Persistence is localStorage, every read and write try/caught; a private window still
// works, it just forgets. Nothing here touches the DOM.

import {
  ACTIONS_TODAY,
  CATEGORIES,
  urgencyOf,

  type BoardColumn,

  type StatusCategory,
  type Urgency,
  type Workflow,
} from '../data/action-status';
import type { ActionImpl, FacetKey } from '../data/action-tracking';

/* ── Types ─────────────────────────────────────────────────────────────── */

export type ActionView = 'board' | 'table' | 'timeline';
export const ACTION_VIEWS: ActionView[] = ['board', 'table', 'timeline'];

export type SortKey = 'due' | 'name' | 'code';

export interface FilterState {
  query: string;
  facets: Record<FacetKey, string[]>;
  /** Prod's N/A toggle: not-applicable implementations are hidden unless this is on. */
  showNotApplicable: boolean;
  sort: SortKey;
}

/** The fields a board card can show; the user turns them on and off. */
export type CardField = 'codes' | 'phase' | 'due' | 'assignee' | 'evidence' | 'comments';
export const CARD_FIELDS: { id: CardField; label: string }[] = [
  { id: 'codes', label: 'Commitment IDs' },
  { id: 'phase', label: 'Phase' },
  { id: 'due', label: 'Due date' },
  { id: 'assignee', label: 'Assignee' },
  { id: 'evidence', label: 'Evidence count' },
  { id: 'comments', label: 'Comment count' },
];

/** What an edit may change on an implementation. */
export type ImplPatch = Partial<Pick<ActionImpl, 'columnId' | 'category' | 'assignee' | 'dueDate' | 'notApplicable' | 'text' | 'evidence' | 'comments' | 'completedDate'>>;

/** An implementation with its overrides applied and its column resolved. */
export interface ResolvedImpl extends ActionImpl {
  workflow: Workflow;
  column: BoardColumn;
  urgency: Urgency;
}

/** `all` = the merged board: one column per backbone category. */
export type BoardScope = 'all' | string;

export interface ActionState {
  componentId: string;
  view: ActionView;
  boardScope: BoardScope;
  filters: FilterState;
  cardFields: Record<CardField, boolean>;
  workflows: Workflow[];
}

/* ── Storage ───────────────────────────────────────────────────────────── */

const KEYS = {
  workflows: 'bcn-actions-workflows-v1',
  overrides: 'bcn-actions-overrides-v1',
  cardFields: 'bcn-actions-card-fields-v1',
  boardScope: 'bcn-actions-board-scope-v1',
  component: 'beacon.activeComponent',
};

const read = <T,>(key: string): T | null => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
};
const write = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode — keep going without persistence */
  }
};
const readRaw = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

/* ── Store ─────────────────────────────────────────────────────────────── */

type Listener = (state: ActionState, reason: ChangeReason) => void;
export type ChangeReason = 'init' | 'component' | 'view' | 'scope' | 'filters' | 'cards' | 'workflows' | 'impl';

let seed: ActionImpl[] = [];
let defaults: Workflow[] = [];
let components: { id: string; name: string }[] = [];
let overrides: Record<string, ImplPatch> = {};
let ready = false;
const listeners = new Set<Listener>();

const emptyFacets = (): Record<FacetKey, string[]> => ({ type: [], phase: [], assignee: [], frequency: [], due: [], list: [] });

export const state: ActionState = {
  componentId: '',
  view: 'board',
  boardScope: 'all',
  filters: { query: '', facets: emptyFacets(), showNotApplicable: false, sort: 'due' },
  cardFields: { codes: true, phase: true, due: true, assignee: true, evidence: true, comments: true },
  workflows: [],
};

const emit = (reason: ChangeReason) => listeners.forEach((fn) => fn(state, reason));

/**
 * Seed the store from the page's JSON island. Idempotent: the first caller wins, so
 * every component may call it without coordinating who goes first.
 */
export function initActionStore(): ActionState {
  if (ready) return state;
  const island = document.getElementById('actions-data');
  const payload = island ? JSON.parse(island.textContent || '{}') : {};
  seed = payload.implementations ?? [];
  defaults = payload.workflows ?? [];
  components = payload.components ?? [];
  overrides = read<Record<string, ImplPatch>>(KEYS.overrides) ?? {};
  state.workflows = read<Workflow[]>(KEYS.workflows) ?? structuredClone(defaults);
  state.cardFields = { ...state.cardFields, ...(read<Record<CardField, boolean>>(KEYS.cardFields) ?? {}) };
  const scope = read<string>(KEYS.boardScope);
  state.boardScope = scope && (scope === 'all' || state.workflows.some((w) => w.id === scope)) ? scope : 'all';
  const storedName = readRaw(KEYS.component);
  state.componentId = components.find((c) => c.name === storedName)?.id ?? components[0]?.id ?? '';
  const v = new URLSearchParams(location.search).get('view') as ActionView | null;
  if (v && ACTION_VIEWS.includes(v)) state.view = v;
  ready = true;

  // The H1 switcher owns the choice; the store follows it.
  document.addEventListener('bcn:component-change', (e) => {
    const name = (e as CustomEvent).detail?.component as string;
    const hit = components.find((c) => c.name === name);
    if (hit && hit.id !== state.componentId) {
      state.componentId = hit.id;
      emit('component');
    }
  });
  queueMicrotask(() => emit('init'));
  return state;
}

export const subscribe = (fn: Listener): (() => void) => {
  listeners.add(fn);
  if (ready) fn(state, 'init');
  return () => listeners.delete(fn);
};

export const componentName = (id = state.componentId) => components.find((c) => c.id === id)?.name ?? '';

/* ── Resolution ────────────────────────────────────────────────────────── */

export const workflowFor = (type: string, workflows = state.workflows): Workflow =>
  workflows.find((w) => w.types.includes(type as never)) ?? workflows[workflows.length - 1];

/**
 * An implementation's column: the one it points at if its workflow still has it,
 * otherwise the first column of the same backbone category. A column deleted, or a
 * type moved to another workflow, therefore never strands a card.
 */
export const resolveColumn = (wf: Workflow, columnId: string, category: StatusCategory): BoardColumn =>
  wf.columns.find((c) => c.id === columnId) ??
  wf.columns.find((c) => c.category === category) ??
  wf.columns[0];

const resolve = (impl: ActionImpl): ResolvedImpl => {
  const merged = { ...impl, ...overrides[impl.id] };
  const workflow = workflowFor(merged.type);
  const column = resolveColumn(workflow, merged.columnId, merged.category);
  return { ...merged, category: column.category, workflow, column, urgency: urgencyOf(merged.dueDate, column.category) };
};

/** Every implementation on the active component, overrides applied. */
export const componentImpls = (): ResolvedImpl[] => seed.filter((i) => i.componentId === state.componentId).map(resolve);

export const implById = (id: string): ResolvedImpl | undefined => {
  const hit = seed.find((i) => i.id === id);
  return hit ? resolve(hit) : undefined;
};

const passes = (i: ResolvedImpl, f: FilterState): boolean => {
  if (i.notApplicable && !f.showNotApplicable) return false;
  const { type, phase, assignee, frequency, due, list } = f.facets;
  if (type.length && !type.includes(i.type)) return false;
  if (phase.length && !i.phases.some((p) => phase.includes(p))) return false;
  if (assignee.length && !assignee.includes(i.assignee ?? '__none')) return false;
  if (frequency.length && !frequency.includes(i.frequency)) return false;
  if (due.length && !due.includes(i.urgency)) return false;
  if (list.length && !i.lists.some((l) => list.includes(l.id))) return false;
  if (f.query) {
    const hay = `${i.name} ${i.codes.join(' ')} ${i.assignee ?? ''}`.toLowerCase();
    if (!hay.includes(f.query)) return false;
  }
  return true;
};

const sorters: Record<SortKey, (a: ResolvedImpl, b: ResolvedImpl) => number> = {
  // Undated work sinks to the bottom of a column rather than leading it.
  due: (a, b) => (a.dueDate ?? '9999').localeCompare(b.dueDate ?? '9999') || a.name.localeCompare(b.name),
  name: (a, b) => a.name.localeCompare(b.name),
  code: (a, b) => (a.codes[0] ?? '~').localeCompare(b.codes[0] ?? '~', undefined, { numeric: true }) || a.name.localeCompare(b.name),
};

/** The action types the type tabs leave in view; null is "All actions". */
const scopedTypes = (): string[] | null =>
  state.boardScope === 'all' ? null : state.workflows.find((w) => w.id === state.boardScope)?.types ?? null;

/** What every view renders: the active component's implementations, inside the type
 *  tab, filtered and sorted. The tabs live on the filter bar, so they scope the table
 *  and timeline as well as the board. */
export const visibleImpls = (): ResolvedImpl[] => {
  const types = scopedTypes();
  return componentImpls()
    .filter((i) => (!types || types.includes(i.type)) && passes(i, state.filters))
    .sort(sorters[state.filters.sort]);
};

/** The columns the board draws for the current scope. */
export const boardColumns = (): BoardColumn[] => {
  if (state.boardScope === 'all') {
    return CATEGORIES.map((c) => ({ id: `cat-${c}`, name: '', category: c }));
  }
  return state.workflows.find((w) => w.id === state.boardScope)?.columns ?? [];
};

/* ── Mutations ─────────────────────────────────────────────────────────── */

export function setView(view: ActionView) {
  if (view === state.view) return;
  state.view = view;
  const params = new URLSearchParams(location.search);
  if (view === 'board') params.delete('view');
  else params.set('view', view);
  const qs = params.toString();
  history.replaceState(history.state, '', qs ? `?${qs}` : location.pathname);
  emit('view');
}

export function setFilters(patch: Partial<FilterState>) {
  state.filters = { ...state.filters, ...patch };
  emit('filters');
}

export function setBoardScope(scope: BoardScope) {
  if (scope === state.boardScope) return;
  state.boardScope = scope;
  write(KEYS.boardScope, scope);
  emit('scope');
}

export function setCardFields(fields: Record<CardField, boolean>) {
  state.cardFields = { ...fields };
  write(KEYS.cardFields, state.cardFields);
  emit('cards');
}

export function updateImpl(id: string, patch: ImplPatch) {
  overrides[id] = { ...overrides[id], ...patch };
  write(KEYS.overrides, overrides);
  emit('impl');
}

/** Move a card to a column. The backbone category follows the column. */
export function moveImpl(id: string, column: BoardColumn) {
  const impl = implById(id);
  if (!impl) return;
  const patch: ImplPatch = { columnId: column.id, category: column.category };
  if (column.category === 'Completed' && impl.category !== 'Completed') patch.completedDate = TODAY_ISO();
  if (column.category !== 'Completed') patch.completedDate = null;
  updateImpl(id, patch);
}
const TODAY_ISO = () => ACTIONS_TODAY;

/**
 * Save one workflow. `moves` re-homes the cards of deleted columns: old column id →
 * surviving column id. Applied to the seed AND to stored overrides, across every
 * component, so a deleted column empties everywhere, not just on the board in view.
 */
export function saveWorkflow(next: Workflow, moves: Record<string, string> = {}) {
  const prev = state.workflows.find((w) => w.id === next.id);
  state.workflows = state.workflows.map((w) => (w.id === next.id ? structuredClone(next) : w));
  // A type now claimed by this workflow leaves whichever workflow held it before.
  state.workflows = state.workflows.map((w) =>
    w.id === next.id ? w : { ...w, types: w.types.filter((t) => !next.types.includes(t)) },
  );
  if (prev && Object.keys(moves).length) {
    for (const impl of seed) {
      const cur = overrides[impl.id]?.columnId ?? impl.columnId;
      const to = moves[cur];
      if (!to) continue;
      const column = next.columns.find((c) => c.id === to);
      if (column) overrides[impl.id] = { ...overrides[impl.id], columnId: column.id, category: column.category };
    }
    write(KEYS.overrides, overrides);
  }
  write(KEYS.workflows, state.workflows);
  emit('workflows');
}

/**
 * Replace the whole workflow set at once — what the Configure dialog saves, since it
 * drafts several workflows together (added, renamed, deleted). `moves` maps a deleted
 * column id to its survivor; chains (a → b, b deleted → c) are followed to the end.
 */
export function replaceWorkflows(next: Workflow[], moves: Record<string, string> = {}) {
  const follow = (id: string) => {
    const seen = new Set<string>();
    while (moves[id] && !seen.has(id)) {
      seen.add(id);
      id = moves[id];
    }
    return id;
  };
  if (Object.keys(moves).length) {
    const all = next.flatMap((w) => w.columns);
    for (const impl of seed) {
      const cur = overrides[impl.id]?.columnId ?? impl.columnId;
      if (!moves[cur]) continue;
      const column = all.find((c) => c.id === follow(cur));
      if (column) overrides[impl.id] = { ...overrides[impl.id], columnId: column.id, category: column.category };
    }
    write(KEYS.overrides, overrides);
  }
  state.workflows = structuredClone(next);
  if (state.boardScope !== 'all' && !state.workflows.some((w) => w.id === state.boardScope)) {
    state.boardScope = 'all';
    write(KEYS.boardScope, 'all');
  }
  write(KEYS.workflows, state.workflows);
  emit('workflows');
}

export const defaultWorkflows = (): Workflow[] => structuredClone(defaults);

export function resetWorkflows() {
  state.workflows = structuredClone(defaults);
  write(KEYS.workflows, state.workflows);
  emit('workflows');
}

/** How many implementations (all components) sit in each column of a workflow. */
export const columnCounts = (wf: Workflow): Record<string, number> => {
  const counts: Record<string, number> = Object.fromEntries(wf.columns.map((c) => [c.id, 0]));
  for (const impl of seed) {
    if (!wf.types.includes(impl.type)) continue;
    const merged = { ...impl, ...overrides[impl.id] };
    const c = resolveColumn(wf, merged.columnId, merged.category);
    counts[c.id] = (counts[c.id] ?? 0) + 1;
  }
  return counts;
};

/** Open an implementation's dialog. The dialog listens; the views only ask. */
export const OPEN_EVENT = 'actions:open';
export const openImpl = (id: string) => document.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { id } }));
