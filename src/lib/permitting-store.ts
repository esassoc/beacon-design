// Client-side persistence for Permitting demo edits. The spoke's pages are static —
// there is no backend to save a Permit Details edit to — so a saved edit is kept as
// a small OVERRIDE patch in the browser's localStorage and re-applied on top of the
// fixture's baseline data wherever permits are rendered (Permit Details' grid +
// drawer, Permit Dashboard's KPIs/lists). That overlay is how Save on one page shows
// up on the other without a page-to-page message or a real server of record.
//
// bcn-lego-checked: this is a data/state module, not UI — nothing to check against
// the component catalog. site-clearance-bio.astro's COMPONENT_KEY is the precedent
// for localStorage as this spoke's demo-persistence idiom (a single preference
// there; a per-record override map here).
import type { TrackedPermit } from '../data/permitting-fixture';

const STORAGE_KEY = 'beacon-almond-permitting-overrides';

export type PermitOverride = Partial<Pick<TrackedPermit, 'name' | 'level' | 'agency' | 'targetDate' | 'refNumber' | 'notes' | 'status'>>;

/** Reads the saved overrides, keyed by permit id. Empty (never `undefined`) when
 *  nothing has been saved yet, or storage is unavailable (private browsing). */
export function loadOverrides(): Record<string, PermitOverride> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, PermitOverride>) : {};
  } catch {
    return {};
  }
}

/** Merges `patch` onto whatever was already saved for `id` and persists the result.
 *  Silently no-ops if storage is unavailable — the edit still applies in-session via
 *  the caller's own row mutation, it just won't survive a reload or another page. */
export function saveOverride(id: string, patch: PermitOverride): void {
  try {
    const all = loadOverrides();
    all[id] = { ...all[id], ...patch };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* storage unavailable — edit still applies in-session, just won't persist */
  }
}

/** Baseline rows with any saved overrides layered on top, id-matched. Rows with no
 *  override pass through unchanged (same reference, so callers can cheaply diff). */
export function applyOverrides<T extends { id: string }>(rows: T[], overrides: Record<string, Partial<T>>): T[] {
  return rows.map((r) => (overrides[r.id] ? { ...r, ...overrides[r.id] } : r));
}
