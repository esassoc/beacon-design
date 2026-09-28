// Review state for the Compliance Index prototype, held in the browser: which bins are
// reviewed, which items were dismissed, merged, edited, created or deleted. Decisions
// are held on the ITEM, not on its row, so an obligation filed into three bins reads
// the same in all three.

import type { CiDetail } from '../../data/setup-wizard-ci';

const KEY = 'bcn-ci-review-v2';

export interface CiReviewState {
  approved: string[];
  dismissed: string[];
  /** Merged-away obligation id → the obligation it was merged into. */
  merged: Record<string, string>;
  /** Saved field changes, over the fixture's record. */
  edits: Record<string, Partial<CiDetail>>;
  /** Items added by hand. */
  created: CiDetail[];
  deleted: string[];
}

const blank = (): CiReviewState => ({ approved: [], dismissed: [], merged: {}, edits: {}, created: [], deleted: [] });

export function readState(): CiReviewState {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...blank(), ...JSON.parse(raw) } : blank();
  } catch {
    return blank();
  }
}

export function writeState(s: CiReviewState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* private mode: state lives for the page only */
  }
  document.dispatchEvent(new CustomEvent('ci:review-change'));
}

export const approvedBins = () => new Set(readState().approved);

/** The item as it stands: the fixture record (or a created one) with saved edits over it. */
export function effective(base: Record<string, CiDetail>, s: CiReviewState, id: string): CiDetail | undefined {
  const rec = base[id] ?? s.created.find((c) => c.id === id);
  return rec ? { ...rec, ...(s.edits[id] ?? {}) } : undefined;
}
