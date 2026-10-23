// Client-side store for the Permits app. The pages are static, so a saved edit, a
// ticked submittal requirement, a new comment or a permit added from the catalog is
// kept as a small patch in localStorage and layered over the fixture wherever a
// permit is read. Every write dispatches `bcn-permit-updated` (detail: { permit })
// on document, so the register, the timeline, readiness and the open detail all
// repaint from the same record.
//
// Opening a permit is an event too: anything that shows a permit (a register row, a
// timeline bar, a readiness card, a search result's #permit=<id>) calls
// openPermit(id); the detail dialog listens for `bcn-permit-open`.
//
// bcn-lego-checked: a data/state module, not UI. permitting-store.ts is the precedent
// for localStorage overrides as this spoke's demo persistence.
import type { Dependency, Permit, PermitComment } from '../data/internal-permits';

const STORAGE_KEY = 'beacon-permits-app-v1';

interface Saved {
  /** Field patches on fixture permits, keyed by permit id. */
  patches: Record<string, Partial<Permit>>;
  /** Permits added in the browser (from the catalog). */
  added: Permit[];
}

function read(): Saved {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Saved;
  } catch {
    /* storage unavailable */
  }
  return { patches: {}, added: [] };
}

function write(saved: Saved): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch {
    /* storage unavailable — the change still applies in this session */
  }
}

// A cleared field is `undefined` in a patch, which JSON drops — so it is saved as null
// and read back as undefined, or the fixture value would return after a reload.
const toSaved = (patch: Partial<Permit>): Record<string, unknown> =>
  Object.fromEntries(Object.entries(patch).map(([k, v]) => [k, v === undefined ? null : v]));
const fromSaved = (patch: Record<string, unknown>): Partial<Permit> =>
  Object.fromEntries(Object.entries(patch).map(([k, v]) => [k, v === null ? undefined : v])) as Partial<Permit>;

let baseline: Permit[] = [];
let current: Permit[] = [];

/** Seed the store with the server-rendered permits (call once per page, before reading). */
export function initPermits(seed: Permit[]): Permit[] {
  baseline = seed;
  const saved = read();
  const seedIds = new Set(seed.map((p) => p.id));
  current = [
    ...seed.map((p) => (saved.patches[p.id] ? { ...p, ...fromSaved(saved.patches[p.id] as Record<string, unknown>) } : p)),
    ...saved.added.filter((p) => !seedIds.has(p.id) && seed.some((s) => s.projectId === p.projectId)),
  ];
  return current;
}

/** Read the seed island a page renders with `<script type="application/json" id="permits-data">`. */
export function initFromIsland(id = 'permits-data'): Permit[] {
  if (current.length) return current;
  const el = document.getElementById(id);
  return initPermits(el ? (JSON.parse(el.textContent || '[]') as Permit[]) : []);
}

export const allPermits = (): Permit[] => current;
export const getPermit = (id: string): Permit | undefined => current.find((p) => p.id === id);

function emit(permit: Permit, kind: 'updated' | 'added'): void {
  document.dispatchEvent(new CustomEvent(`bcn-permit-${kind}`, { detail: { permit } }));
}

/** Merge a patch into a permit, persist it, and tell every view. */
export function updatePermit(id: string, patch: Partial<Permit>): Permit | undefined {
  const i = current.findIndex((p) => p.id === id);
  if (i < 0) return undefined;
  const next = { ...current[i], ...patch };
  current[i] = next;
  const saved = read();
  const addedIdx = saved.added.findIndex((p) => p.id === id);
  if (addedIdx >= 0) saved.added[addedIdx] = next;
  else saved.patches[id] = { ...saved.patches[id], ...toSaved(patch) } as Partial<Permit>;
  write(saved);
  emit(next, 'updated');
  return next;
}

export function addPermit(permit: Permit): void {
  current.push(permit);
  const saved = read();
  saved.added.push(permit);
  write(saved);
  emit(permit, 'added');
}

export function toggleRequirement(permitId: string, requirementId: string, done: boolean, today: string): Permit | undefined {
  const p = getPermit(permitId);
  if (!p) return undefined;
  return updatePermit(permitId, {
    requirements: p.requirements.map((r) => (r.id === requirementId ? { ...r, done, doneDate: done ? today : undefined } : r)),
  });
}

export function addComment(permitId: string, comment: PermitComment): Permit | undefined {
  const p = getPermit(permitId);
  if (!p) return undefined;
  return updatePermit(permitId, { comments: [...p.comments, comment] });
}

/** Ask the detail dialog to show a permit. */
export function openPermit(id: string): void {
  document.dispatchEvent(new CustomEvent('bcn-permit-open', { detail: { permitId: id } }));
}

/** Forget every browser edit (the demo reset). */
export function resetPermits(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* nothing to clear */
  }
  current = [...baseline];
}

// ── Live derivations (read the store, not the fixture) ─────────────────────────
// The data module's dependencyMet / openDependencies / blockedBy read the fixture, so
// a prerequisite submitted or issued in the browser would still read as unmet. Views
// rendering on the client use these.

const SUBMITTED_OR_LATER = new Set(['submitted', 'under-review', 'issued']);

export function dependencyMetLive(dep: Dependency): boolean {
  const target = getPermit(dep.permitId);
  if (!target || target.status === 'not-required') return true;
  return dep.needs === 'issued' ? target.status === 'issued' : SUBMITTED_OR_LATER.has(target.status);
}

export const openDependenciesLive = (p: Permit): Dependency[] =>
  p.status === 'issued' ? [] : p.dependsOn.filter((d) => !dependencyMetLive(d));

export const blockedByLive = (p: Permit): Permit[] => current.filter((o) => o.dependsOn.some((d) => d.permitId === p.id));
