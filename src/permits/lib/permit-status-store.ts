// Permit Tracker — the browser-side status store. The Actions board's model
// (src/lib/action-board.ts) applied to permits, cut to what the tracker needs:
//
//   workflows  — per PROJECT: the user's columns over the Not Started / In Progress /
//                Completed backbone (defaults: DEFAULT_WORKFLOWS in the fixture).
//   overrides  — per PROJECT: permit id → column id, written when someone moves a card
//                on the board or picks a status in the editor.
//   moves      — per PROJECT: deleted column id → the column its permits went to, so a
//                permit whose fixture status was deleted lands where the user said.
//   history    — per PROJECT: permit id → the status changes made in the browser. Every
//                setPermitStatus() appends one (board drag, Move menu, Change status),
//                on top of the fixture's seedHistory(); the permit timeline is read
//                from the combined log (historyOf + datesFromHistory).
//
// Every surface that shows a status (list, board, chain, permit header) renders the SSR
// default and marks it with data attributes; applyStatusChips() re-labels and re-colors
// them from this store on load and on every change. Persistence is localStorage, every
// read and write try/caught — a private window still gets a working (unsaved) session.

import {
  CATEGORY_META,
  CURRENT_USER,
  TODAY,
  getPermit,
  seedHistory,
  type HistoryEntry,
  DEFAULT_WORKFLOWS,
  statusColumn,
  workflowOf,
  type PermitTypeId,
  type PermitWorkflow,
  type StatusColumn,
} from '../data/permit-tracker';

export const CHANGE_EVENT = 'permit-status:change';

interface ProjectState {
  workflows: PermitWorkflow[];
  overrides: Record<string, string>;
  moves: Record<string, string>;
  history: Record<string, HistoryEntry[]>;
}

const key = (projectId: string) => `esa-permits:status:${projectId}`;
const memory = new Map<string, ProjectState>();

function read(projectId: string): ProjectState {
  const cached = memory.get(projectId);
  if (cached) return cached;
  let state: ProjectState = { workflows: structuredClone(DEFAULT_WORKFLOWS), overrides: {}, moves: {}, history: {} };
  try {
    const raw = localStorage.getItem(key(projectId));
    if (raw) state = { ...state, ...JSON.parse(raw) };
  } catch {
    /* private window / blocked storage — defaults */
  }
  memory.set(projectId, state);
  return state;
}

function write(projectId: string, state: ProjectState) {
  memory.set(projectId, state);
  try {
    localStorage.setItem(key(projectId), JSON.stringify(state));
  } catch {
    /* unsaved session */
  }
  document.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: { projectId } }));
}

export const loadWorkflows = (projectId: string): PermitWorkflow[] => structuredClone(read(projectId).workflows);
export const defaultWorkflows = (): PermitWorkflow[] => structuredClone(DEFAULT_WORKFLOWS);

/** Replace the project's workflows. `moves` maps each deleted column id to its replacement. */
export function saveWorkflows(projectId: string, workflows: PermitWorkflow[], moves: Record<string, string> = {}) {
  const s = read(projectId);
  const overrides = { ...s.overrides };
  for (const [pid, col] of Object.entries(overrides)) if (moves[col]) overrides[pid] = moves[col];
  write(projectId, { ...s, workflows: structuredClone(workflows), overrides, moves: { ...s.moves, ...moves } });
}

export function resetWorkflows(projectId: string) {
  write(projectId, { ...read(projectId), workflows: structuredClone(DEFAULT_WORKFLOWS), moves: {} });
}

/** Change a permit's status and log it. `entry` carries the change's date (default
 *  TODAY), note and, into an issued status, the expiry. */
export function setPermitStatus(
  projectId: string,
  permitId: string,
  columnId: string,
  entry: Partial<Omit<HistoryEntry, 'statusId'>> = {},
) {
  const s = read(projectId);
  const logged: HistoryEntry = { at: TODAY, by: CURRENT_USER, ...entry, statusId: columnId };
  write(projectId, {
    ...s,
    overrides: { ...s.overrides, [permitId]: columnId },
    history: { ...s.history, [permitId]: [...(s.history[permitId] ?? []), logged] },
  });
}

/** A permit's full status log, oldest first: the fixture's seed, then the browser's changes. */
export function historyOf(projectId: string, permitId: string): HistoryEntry[] {
  const p = getPermit(permitId);
  const seed = p ? seedHistory(p) : [];
  const added = read(projectId).history[permitId] ?? [];
  // Stable on ties: a browser change on the same day as a seed entry comes after it.
  return [...seed.map((e, i) => ({ e, k: i })), ...added.map((e, i) => ({ e, k: seed.length + i }))]
    .sort((a, b) => a.e.at.localeCompare(b.e.at) || a.k - b.k)
    .map(({ e }) => e);
}

/** A permit's current column: override → fixture status (following deletions) → workflow's first column. */
export function resolveStatus(projectId: string, permit: { id: string; statusId: string; typeId: PermitTypeId }): StatusColumn {
  const s = read(projectId);
  let id = s.overrides[permit.id] ?? permit.statusId;
  const seen = new Set<string>();
  while (s.moves[id] && !seen.has(id)) {
    seen.add(id);
    id = s.moves[id];
  }
  const col = statusColumn(id, permit.typeId, s.workflows);
  // A permit whose type moved to another workflow lands in the first column of the same
  // category on its new workflow — the board's placeIn() rule, so every view agrees.
  const wf = workflowOf(permit.typeId, s.workflows);
  if (wf.columns.some((c) => c.id === col.id)) return col;
  return wf.columns.find((c) => c.category === col.category) ?? wf.columns[0];
}

export const categoryTone = (col: StatusColumn) => CATEGORY_META[col.category].tone;

/**
 * Re-label every server-rendered status on the page from the store. A host marks the
 * element wrapping a <BcnStatusChip> with:
 *   data-permit-status  data-project-id  data-permit-id  data-type-id  data-status-id
 */
export function applyStatusChips(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-permit-status]').forEach((el) => {
    const { projectId, permitId, typeId, statusId } = el.dataset;
    if (!projectId || !permitId || !typeId || !statusId) return;
    const col = resolveStatus(projectId, { id: permitId, statusId, typeId: typeId as PermitTypeId });
    const chip = el.querySelector<HTMLElement>('.bcn-status-chip');
    const label = el.querySelector<HTMLElement>('.bcn-status-chip__label');
    if (chip) chip.style.setProperty('--_chip', categoryTone(col));
    if (label) label.textContent = col.name;
    el.dataset.category = col.category;
  });
}

/** Run applyStatusChips now and after every store change. */
export function watchStatusChips(root: ParentNode = document) {
  applyStatusChips(root);
  document.addEventListener(CHANGE_EVENT, () => applyStatusChips(root));
}
