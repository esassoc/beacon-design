// Permit Tracker — the browser-side store for a permit's application checklist.
//
// Each permit starts from the fixture's prerequisites (the permit type's standard
// items, with owner / due / done-by). Once anyone checks an item off, edits one or adds
// a custom one, the permit's whole list is saved here and read back instead. Saved per
// PERMIT in localStorage, every read and write try/caught, so a private window still
// gets a working (unsaved) session. Every write fires REQUIREMENTS_EVENT on document.

import { CURRENT_USER, TODAY, getPermit, type Prerequisite } from '../data/permit-tracker';

export const REQUIREMENTS_EVENT = 'permit-requirements:change';

const key = (permitId: string) => `esa-permits:requirements:${permitId}`;
const memory = new Map<string, Prerequisite[]>();

export function loadRequirements(permitId: string): Prerequisite[] {
  const cached = memory.get(permitId);
  if (cached) return structuredClone(cached);
  let items = structuredClone(getPermit(permitId)?.prerequisites ?? []);
  try {
    const raw = localStorage.getItem(key(permitId));
    if (raw) items = JSON.parse(raw) as Prerequisite[];
  } catch {
    /* private window / blocked storage — the fixture */
  }
  memory.set(permitId, items);
  return structuredClone(items);
}

function save(permitId: string, items: Prerequisite[]) {
  memory.set(permitId, items);
  try {
    localStorage.setItem(key(permitId), JSON.stringify(items));
  } catch {
    /* unsaved session */
  }
  document.dispatchEvent(new CustomEvent(REQUIREMENTS_EVENT, { detail: { permitId } }));
}

/** Check an item off (stamping today and the current user) or reopen it. */
export function setRequirementDone(permitId: string, id: string, done: boolean) {
  save(
    permitId,
    loadRequirements(permitId).map((r) =>
      r.id !== id ? r : done ? { ...r, done, doneAt: TODAY, doneBy: CURRENT_USER } : { ...r, done, doneAt: undefined, doneBy: undefined },
    ),
  );
}

/** Add (no id yet) or replace an item. Checking it off here stamps it like setRequirementDone. */
export function upsertRequirement(permitId: string, item: Omit<Prerequisite, 'id'> & { id?: string }) {
  const items = loadRequirements(permitId);
  const prev = item.id ? items.find((r) => r.id === item.id) : undefined;
  const stamped: Prerequisite = {
    ...item,
    id: item.id ?? `${permitId}-c${Date.now().toString(36)}`,
    ...(item.done && !prev?.done ? { doneAt: TODAY, doneBy: CURRENT_USER } : {}),
    ...(!item.done ? { doneAt: undefined, doneBy: undefined } : {}),
  };
  save(permitId, prev ? items.map((r) => (r.id === prev.id ? stamped : r)) : [...items, stamped]);
  return stamped;
}

/** Remove a custom item; the permit type's standard items stay. */
export function removeRequirement(permitId: string, id: string) {
  save(
    permitId,
    loadRequirements(permitId).filter((r) => r.id !== id || !r.custom),
  );
}
