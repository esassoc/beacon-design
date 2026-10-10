// The light half of the action-tracking fixture: the status backbone, the workflow
// shape, and the date math. No fixture imports, so client scripts (the board store,
// the card renderer) can import it without bundling the ITP.

import type { RequirementType } from './setup-wizard';

/** The fixed "today" every derived urgency reads. */
export const ACTIONS_TODAY = '2026-10-06';

/* ── Status backbone ─────────────────────────────────────────────────────── */

/** Prod's ActionImplementationStatusDtoEnum. Every user column maps to one. */
export type StatusCategory = 'NotStarted' | 'InProgress' | 'Completed';
export const CATEGORIES: StatusCategory[] = ['NotStarted', 'InProgress', 'Completed'];

export const CATEGORY_META: Record<StatusCategory, { label: string; tone: string }> = {
  NotStarted: { label: 'Not Started', tone: 'var(--bcn-status-not-started)' },
  InProgress: { label: 'In Progress', tone: 'var(--bcn-status-in-progress)' },
  Completed: { label: 'Completed', tone: 'var(--bcn-status-completed)' },
};

export interface BoardColumn {
  /** Stable across renames; what an implementation's status points at. */
  id: string;
  name: string;
  category: StatusCategory;
}

export interface Workflow {
  id: string;
  name: string;
  /** The action types whose implementations move through these columns. */
  types: RequirementType[];
  /** Board order. Always grouped NotStarted → InProgress → Completed. */
  columns: BoardColumn[];
}

export const epochDay = (iso: string): number => {
  const [y, m, d] = iso.split('-').map(Number);
  return Math.floor(Date.UTC(y, m - 1, d) / 86_400_000);
};
export const isoOf = (day: number): string => new Date(day * 86_400_000).toISOString().slice(0, 10);
/** Signed days from ACTIONS_TODAY — negative is past due. */
export const daysOut = (iso: string): number => epochDay(iso) - epochDay(ACTIONS_TODAY);

/* ── Derived ─────────────────────────────────────────────────────────────── */

export type Urgency = 'overdue' | 'due-soon' | 'upcoming' | 'none';

/** Derived from dueDate vs ACTIONS_TODAY; completed work is never overdue. */
export const urgencyOf = (dueDate: string | null, category: StatusCategory): Urgency => {
  if (!dueDate || category === 'Completed') return 'none';
  const d = daysOut(dueDate);
  return d < 0 ? 'overdue' : d <= 30 ? 'due-soon' : 'upcoming';
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** ISO → "Mar 4, 2027" (timezone-proof). */
export const fmtDate = (iso: string): string => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

