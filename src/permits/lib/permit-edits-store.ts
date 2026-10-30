// Permit Tracker — edits to a permit's own facts, made on its page: name, agency,
// reference no., applies to, assigned to, trigger, has conditions, waits on, permit file.
// (Status changes have their own log, src/lib/permit-status-store.ts; the application
// checklist has src/lib/permit-requirements-store.ts.)
//
// Saved per PERMIT in localStorage (try/caught, in-memory fallback); in the product a
// server write every user sees. applyPermitEdits() writes the saved edits onto the
// fixture's Permit objects (and added permits', once registered), so every lookup —
// getPermit, permitsOfProject, blockers, readiness, the permit type section — reads the
// edited permit. saveEdits() saves, applies and fires PERMIT_EDIT_EVENT on document; the
// page's sections re-draw from it.

import { PERMITS, getPermit, type Permit, type PermitFile } from '../data/permit-tracker';

export const PERMIT_EDIT_EVENT = 'permit:edit';

export interface PermitEdits {
  name?: string;
  jurisdictionId?: string;
  agencyRef?: string;
  /** '' = project-wide. */
  siteId?: string;
  trigger?: string;
  assignee?: string;
  /** null = not yet known. */
  hasConditions?: boolean | null;
  dependsOn?: string[];
  /** null = no file. */
  file?: PermitFile | null;
}

const PREFIX = 'esa-permits:permit-edits:';
const memory = new Map<string, PermitEdits>();

export function loadEdits(permitId: string): PermitEdits {
  const cached = memory.get(permitId);
  if (cached) return cached;
  let edits: PermitEdits = {};
  try {
    const raw = localStorage.getItem(PREFIX + permitId);
    if (raw) edits = JSON.parse(raw) as PermitEdits;
  } catch {
    /* private window — none */
  }
  memory.set(permitId, edits);
  return edits;
}

/** Write a permit's saved edits onto its Permit object (idempotent). */
export function applyEdits(p: Permit) {
  const e = loadEdits(p.id);
  if (e.name !== undefined) p.name = e.name;
  if (e.jurisdictionId !== undefined) p.jurisdictionId = e.jurisdictionId;
  if (e.agencyRef !== undefined) p.agencyRef = e.agencyRef || undefined;
  if (e.siteId !== undefined) p.siteId = e.siteId || undefined;
  if (e.trigger !== undefined) p.trigger = e.trigger;
  if (e.assignee !== undefined) p.assignee = e.assignee;
  if (e.hasConditions !== undefined) p.hasConditions = e.hasConditions ?? undefined;
  if (e.dependsOn !== undefined) p.dependsOn = [...e.dependsOn];
  if (e.file !== undefined) p.file = e.file ?? undefined;
}

let applied = false;
/** Apply every saved edit to the fixture permits, once per page. */
export function applyPermitEdits() {
  if (applied) return;
  applied = true;
  PERMITS.forEach(applyEdits);
}

export function saveEdits(permitId: string, patch: PermitEdits) {
  const edits = { ...loadEdits(permitId), ...patch };
  memory.set(permitId, edits);
  try {
    localStorage.setItem(PREFIX + permitId, JSON.stringify(edits));
  } catch {
    /* unsaved session */
  }
  const p = getPermit(permitId);
  if (p) applyEdits(p);
  document.dispatchEvent(new CustomEvent(PERMIT_EDIT_EVENT, { detail: { permitId, projectId: p?.projectId } }));
}
