// An item's slip history, inferred from the plan's published revisions (2026-10-29, Andy: "slip summary should be
// inferred by context clues of the log"). Each revision that moved the item's end (or a milestone's date) is one move;
// its note says why: the revision named this item (moved directly, by its author), named one of its parents (moved
// with its parent), or named something else (it followed that item, through what it waits on). The Schedule card
// says it in one sentence; the Activity card lists each move.

import { flattenPlan, signedShift, type PlanRepo } from './plan-repo';
import type { PlanElementDto } from './model';

export interface SlipMove {
  version: number;
  author: string;
  at: string;
  /** Days the end (a milestone's date) moved: positive is later. */
  days: number;
  cause: 'direct' | 'parent' | 'followed';
  /** The parent it moved with, or the item it followed. */
  with?: string;
}
export interface SlipHistory {
  moves: SlipMove[];
  /** The end as first published, and now. */
  firstEnd: string | null;
  nowEnd: string | null;
  /** Net days from first to now. */
  net: number;
}

const endOf = (e: PlanElementDto | undefined) => (e ? (e.IsMilestone ? (e.StartDate ?? e.EndDate) : (e.EndDate ?? e.StartDate)) ?? null : null);
const daysBetween = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);

export function slipHistory(repo: PlanRepo, id: string): SlipHistory {
  const moves: SlipMove[] = [];
  let firstEnd: string | null = null;
  let prev: string | null = null;
  for (const v of repo.versions) {
    const flat = flattenPlan(v.plan.Elements);
    const found = flat.find((x) => x.element.PlanElementID === id);
    const end = endOf(found?.element);
    if (!found || !end) continue;
    if (firstEnd === null) {
      firstEnd = end;
      prev = end;
      continue;
    }
    if (prev && end !== prev) {
      const subject = v.note?.subject ?? '';
      const name = found.element.PlanElementName ?? '';
      const cause: SlipMove['cause'] = !subject || subject === name ? 'direct' : found.path.includes(subject) ? 'parent' : 'followed';
      moves.push({ version: v.number, author: v.author, at: v.at, days: daysBetween(prev, end), cause, with: cause === 'direct' ? undefined : subject });
    }
    prev = end;
  }
  const nowEnd = prev;
  return { moves, firstEnd, nowEnd, net: firstEnd && nowEnd ? daysBetween(firstEnd, nowEnd) : 0 };
}

const day = (iso: string) => new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const times = (n: number) => (n === 1 ? 'once' : n === 2 ? 'twice' : `${n} times`);

/** One sentence, or null when it has never moved: how often, how far in all, and why. */
export function slipSentence(h: SlipHistory): string | null {
  if (!h.moves.length || !h.firstEnd || !h.nowEnd) return null;
  // One move: what, and why, with its revision.
  if (h.moves.length === 1) {
    const m = h.moves[0];
    const why = m.cause === 'direct' ? `${m.author} moved it directly` : m.cause === 'parent' ? `It moved with ${m.with}` : `It followed ${m.with}`;
    return `${m.days > 0 ? 'Slipped' : 'Pulled in'} once, ${signedShift(m.days)}: first planned for ${day(h.firstEnd)}, now ${day(h.nowEnd)}. ${why} in Revision ${m.version}.`;
  }
  const later = h.moves.filter((m) => m.days > 0).length;
  const earlier = h.moves.length - later;
  const head =
    earlier === 0
      ? `Slipped ${times(later)}`
      : later === 0
        ? `Pulled in ${times(earlier)}`
        : `Moved ${times(h.moves.length)} (${later} later, ${earlier} earlier)`;
  const net = h.net ? `, ${signedShift(h.net)} in all` : ', back where it started';
  const first = `${head} since first planned for ${day(h.firstEnd)}${h.net ? `; now ${day(h.nowEnd)}` : ''}${net}.`;
  // Why, most common cause first: what it followed, its parent, or someone moving it.
  const why: string[] = [];
  const followed = new Map<string, number>();
  for (const m of h.moves.filter((x) => x.cause === 'followed')) followed.set(m.with ?? '', (followed.get(m.with ?? '') ?? 0) + 1);
  for (const [what, n] of [...followed].sort((a, b) => b[1] - a[1])) why.push(`${times(n)} it followed ${what}`);
  const withParent = h.moves.filter((x) => x.cause === 'parent').length;
  if (withParent) why.push(`${times(withParent)} it moved with ${h.moves.find((x) => x.cause === 'parent')!.with}`);
  const direct = h.moves.filter((x) => x.cause === 'direct');
  if (direct.length) {
    const by = [...new Set(direct.map((m) => m.author))];
    why.push(`${times(direct.length)} ${by.length === 1 ? by[0] : 'someone'} moved it directly`);
  }
  const reason = why.length ? ` ${why.join('; ').replace(/^./, (c) => c.toUpperCase())}.` : '';
  return first + reason;
}
