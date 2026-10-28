// Permit Tracker — permits added in the browser (the project page's Add permit).
//
// Saved per PROJECT in localStorage (try/caught, in-memory fallback) as whole Permit
// records built by createPermit(). ensureAddedPermits() registers a project's saved
// permits into the fixture's PERMITS (registerPermit) so every lookup — the list, the
// board, readiness, "waiting on" — sees them; every surface calls it before reading.
// addPermit() saves, registers and fires ADDED_EVENT and PROJECT_EVENT (readiness and the
// schedule re-render on the latter).
//
// In the product this is a server write every user sees.

import { registerPermit, type Permit } from '../data/permit-tracker';
import { applyEdits } from './permit-edits-store';
import { PROJECT_EVENT } from './project-store';

export const ADDED_EVENT = 'permit:added';
/** Tells BcnPermitTypeInfo its data-type-id / data-jurisdiction-id were set (the added permit page). */
export const PERMIT_TYPE_INFO_EVENT = 'permit-type-info:refresh';

const key = (projectId: string) => `permit-tracker:added-permits:${projectId}`;
const memory = new Map<string, Permit[]>();

export function loadAddedPermits(projectId: string): Permit[] {
  const cached = memory.get(projectId);
  if (cached) return cached;
  let list: Permit[] = [];
  try {
    const raw = localStorage.getItem(key(projectId));
    if (raw) list = JSON.parse(raw) as Permit[];
  } catch {
    /* private window — none */
  }
  memory.set(projectId, list);
  return list;
}

/** Register the project's added permits with the fixture (once each). */
export function ensureAddedPermits(projectId: string): Permit[] {
  const list = loadAddedPermits(projectId);
  for (const p of list) {
    registerPermit(p);
    applyEdits(p);
  }
  return list;
}

export function addPermit(p: Permit) {
  const list = [...loadAddedPermits(p.projectId), p];
  memory.set(p.projectId, list);
  try {
    localStorage.setItem(key(p.projectId), JSON.stringify(list));
  } catch {
    /* unsaved session */
  }
  registerPermit(p);
  document.dispatchEvent(new CustomEvent(ADDED_EVENT, { detail: { projectId: p.projectId, permitId: p.id } }));
  document.dispatchEvent(new CustomEvent(PROJECT_EVENT, { detail: { projectId: p.projectId } }));
}
