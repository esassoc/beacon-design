// The Permits app's client store for one project's register: which site is in
// scope, how the register groups, the search, which permit record is open, and the
// edits made in the record (status, assignee, finished submittal items), kept in
// localStorage so a demo survives a reload. Every view reads the same state and
// listens for one event; nothing else holds permit state on the page.
import type { AgencyLevel, Permit, PermitStatus } from '../data/internal-permits';

export type GroupBy = 'level' | 'agency' | 'status';
export const GROUP_BYS: GroupBy[] = ['level', 'agency', 'status'];

export interface PermitEdit {
  status?: PermitStatus;
  assigneeId?: string;
  /** Every requirement id that is done, as last saved in the record. */
  done?: string[];
}

export interface RegisterState {
  projectId: string;
  /** 'all' or one of the project's site names. */
  site: string;
  groupBy: GroupBy;
  query: string;
  openId: string | null;
  edits: Record<string, PermitEdit>;
}

export type ChangeReason = 'init' | 'site' | 'group' | 'query' | 'open' | 'edit';

export const CHANGE_EVENT = 'bcn:permits-change';

/** The project's permits, as the page serialized them. */
let base: Permit[] = [];

export const state: RegisterState = {
  projectId: '',
  site: 'all',
  groupBy: 'level',
  query: '',
  openId: null,
  edits: {},
};

const storageKey = () => `bcn.permits.${state.projectId}`;

/** The site picker (BcnComponentPicker) persists its own choice under this key. */
export const siteStorageKey = (projectId: string) => `bcn.permits.${projectId}.site`;
export const ALL_SITES = 'All Sites';
const toSite = (choice: string | null | undefined) => (!choice || choice === ALL_SITES ? 'all' : choice);

function load(): void {
  try {
    const raw = localStorage.getItem(storageKey());
    if (!raw) return;
    const saved = JSON.parse(raw) as Partial<Pick<RegisterState, 'groupBy' | 'edits'>>;
    if (saved.groupBy && GROUP_BYS.includes(saved.groupBy)) state.groupBy = saved.groupBy;
    if (saved.edits) state.edits = saved.edits;
  } catch {
    /* private mode: work without persistence */
  }
}

function save(): void {
  try {
    localStorage.setItem(storageKey(), JSON.stringify({ groupBy: state.groupBy, edits: state.edits }));
  } catch {
    /* private mode */
  }
}

function emit(reason: ChangeReason): void {
  document.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: { reason } }));
}

let ready = false;

/** Read the page's island once; later callers get the same store. */
export function initRegister(): void {
  if (ready) return;
  const island = document.getElementById('permits-data');
  if (!island) return;
  const data = JSON.parse(island.textContent || '{}') as { projectId: string; permits: Permit[] };
  base = data.permits;
  state.projectId = data.projectId;
  load();
  try {
    state.site = toSite(localStorage.getItem(siteStorageKey(state.projectId)));
  } catch {
    /* private mode */
  }
  document.addEventListener('bcn:component-change', (e) => setSite(toSite((e as CustomEvent).detail?.component)));
  ready = true;
  // A #permit=<id> link (the omnibox, a shared URL) opens that record.
  const m = location.hash.match(/permit=([\w-]+)/);
  if (m && base.some((p) => p.id === m[1])) state.openId = m[1];
}

export function subscribe(fn: (s: RegisterState, reason: ChangeReason) => void): void {
  document.addEventListener(CHANGE_EVENT, (e) => fn(state, (e as CustomEvent).detail.reason));
}

/** A permit with the record's edits applied. */
export function resolve(p: Permit): Permit {
  const e = state.edits[p.id];
  if (!e) return p;
  return {
    ...p,
    status: e.status ?? p.status,
    assigneeId: e.assigneeId ?? p.assigneeId,
    requirements: e.done ? p.requirements.map((r) => ({ ...r, done: e.done!.includes(r.id) })) : p.requirements,
  };
}

export const allPermits = (): Permit[] => base.map(resolve);

/** The site scope alone: what the register's total counts. */
export const sitePermits = (): Permit[] => allPermits().filter((p) => state.site === 'all' || !p.site || p.site === state.site);

/** Site scope plus search: what the register shows. */
export function visiblePermits(lookup: (p: Permit) => string): Permit[] {
  const q = state.query;
  return sitePermits().filter((p) => !q || lookup(p).toLowerCase().includes(q));
}

export function setSite(site: string): void {
  state.site = site;
  emit('site');
}
export function setGroupBy(g: GroupBy): void {
  state.groupBy = g;
  save();
  emit('group');
}
export function setQuery(q: string): void {
  state.query = q.trim().toLowerCase();
  emit('query');
}
export function openPermit(id: string | null): void {
  state.openId = id;
  history.replaceState(null, '', id ? `#permit=${id}` : location.pathname + location.search);
  emit('open');
}
export function savePermit(id: string, edit: PermitEdit): void {
  state.edits[id] = { ...state.edits[id], ...edit };
  save();
  emit('edit');
}

/** The register's row order as the grid last drew it, for the record's prev/next. */
let order: string[] = [];
export const setOrder = (ids: string[]): void => {
  order = ids;
};
/** The permit `step` rows away from `id` in the register's order, wrapping. */
export function neighbor(id: string, step: 1 | -1): string | null {
  const ids = order.length ? order : base.map((p) => p.id);
  const i = ids.indexOf(id);
  if (i < 0 || ids.length < 2) return null;
  return ids[(i + step + ids.length) % ids.length];
}

export type { AgencyLevel };
