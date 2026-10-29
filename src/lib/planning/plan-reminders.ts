// Reminders to owners as due dates approach (2026-10-28, the SOW review: "Reminders to task owners as due dates
// approach" was Not Shown). Beacon prod's action notifications, carried over (shared/components/
// action-notification-config): three kinds per plan, each switched on or off. Coming Up sends a lead number of days
// before the due date and can repeat; Due sends on the date; Past Due sends a number of days after it and repeats up to
// a maximum. Prod sends nightly; the prototype has no scheduler, so these are the sends that nightly run would have made
// by today, worked out from the plan as it stands: what an owner's inbox shows, and each item's last and next reminder.
//
// Who hears: an item's owners (a person; an organization's members on the plan's People), and the plan's Additional
// Recipients. Not a complete item, not one without an end date. Receipt reminders stay the transmittal's own
// (Plan Settings, Days to Confirm Receipt).

import { attributesAt, flattenPlan, latestVersion, listPlanSummaries, membersOf, configOf, isOrganization, orgOf, type PlanRepo } from './plan-repo';
import { recordsFor, statusOf } from './plan-records';

export interface ReminderConfig {
  comingUp: { on: boolean; leadDays: number; repeatDays: number | null };
  due: { on: boolean };
  pastDue: { on: boolean; afterDays: number; repeatDays: number | null; max: number };
  /** People who hear about every item, beside its owners (prod's Additional Recipients). */
  extra: string[];
}

/** Prod's defaults: Coming Up 7 days ahead, on the day, then Past Due a day late and weekly, at most 4 times. */
export const DEFAULT_REMINDERS: ReminderConfig = {
  comingUp: { on: true, leadDays: 7, repeatDays: null },
  due: { on: true },
  pastDue: { on: true, afterDays: 1, repeatDays: 7, max: 4 },
  extra: [],
};

export const remindersOf = (repo: PlanRepo): ReminderConfig => configOf(repo).reminders ?? DEFAULT_REMINDERS;

export type ReminderKind = 'Coming Up' | 'Due' | 'Past Due';
export interface ReminderSend {
  date: string;
  kind: ReminderKind;
}

const DAY = 86_400_000;
const addDays = (iso: string, n: number) => new Date(Date.parse(`${iso.slice(0, 10)}T00:00:00Z`) + n * DAY).toISOString().slice(0, 10);
export const todayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/** Every send the reminders make for one due date, in order. */
export function reminderSends(due: string, cfg: ReminderConfig): ReminderSend[] {
  const out: ReminderSend[] = [];
  if (cfg.comingUp.on && cfg.comingUp.leadDays > 0) {
    out.push({ date: addDays(due, -cfg.comingUp.leadDays), kind: 'Coming Up' });
    const every = cfg.comingUp.repeatDays;
    if (every && every > 0) for (let d = -cfg.comingUp.leadDays + every; d < 0; d += every) out.push({ date: addDays(due, d), kind: 'Coming Up' });
  }
  if (cfg.due.on) out.push({ date: due.slice(0, 10), kind: 'Due' });
  if (cfg.pastDue.on && cfg.pastDue.max > 0) {
    for (let i = 0; i < cfg.pastDue.max; i++) {
      out.push({ date: addDays(due, cfg.pastDue.afterDays + i * (cfg.pastDue.repeatDays ?? 0)), kind: 'Past Due' });
      if (!cfg.pastDue.repeatDays) break;
    }
  }
  return out.sort((a, b) => a.date.localeCompare(b.date));
}

/** The last send on or before today, and the next one after it. */
export function reminderState(due: string, cfg: ReminderConfig, today = todayIso()): { last: ReminderSend | null; next: ReminderSend | null } {
  const sends = reminderSends(due, cfg);
  const last = [...sends].reverse().find((s) => s.date <= today) ?? null;
  const next = sends.find((s) => s.date > today) ?? null;
  return { last, next };
}

/** Who an item's reminders reach: its owners (an organization's members on the plan), and Additional Recipients. */
export function reminderRecipients(repo: PlanRepo, owners: readonly string[], cfg: ReminderConfig): string[] {
  const members = membersOf(repo).map((m) => m.name);
  // An owner taken off the plan's People gets no more reminders for it (2026-10-29, the handoff pass: someone who left
  // kept getting Due for You rows that opened Not Shared With You). Plan Settings says so when they're removed.
  const people = owners.flatMap((o) => (isOrganization(o) ? members.filter((m) => orgOf(m) === o) : members.includes(o) ? [o] : []));
  return [...new Set([...people, ...cfg.extra])];
}

export interface ReminderEntry {
  planID: string;
  planName: string;
  itemId: string;
  itemName: string;
  due: string;
  /** The latest send to this person. */
  last: ReminderSend;
  /** Why it reaches them. */
  as: 'Owner' | 'Organization' | 'Copied';
}

/** The reminders a person has had in the last two weeks, or that still stand (an item past due), across every plan:
 *  the inbox's Reminders. Newest send first. */
export async function remindersFor(user: string, today = todayIso()): Promise<ReminderEntry[]> {
  const out: ReminderEntry[] = [];
  const recent = addDays(today, -14);
  for (const s of await listPlanSummaries()) {
    const repo = s.repo;
    const cfg = remindersOf(repo);
    const plan = latestVersion(repo).plan;
    const rec = recordsFor(repo.planID);
    const attrs = attributesAt(repo);
    for (const { element } of flattenPlan(plan.Elements)) {
      if (element.Children?.length) continue;
      const id = element.PlanElementID ?? '';
      const due = element.EndDate ?? element.StartDate;
      if (!due || statusOf(rec, plan, id) === 'Completed') continue;
      const owners = attrs[id]?.owners ?? [];
      if (!reminderRecipients(repo, owners, cfg).includes(user)) continue;
      const { last } = reminderState(due, cfg, today);
      if (!last || (last.date < recent && last.kind !== 'Past Due')) continue;
      const as = owners.includes(user) ? 'Owner' : owners.some((o) => isOrganization(o) && orgOf(user) === o) ? 'Organization' : 'Copied';
      out.push({ planID: repo.planID, planName: s.name, itemId: id, itemName: element.PlanElementName ?? '', due, last, as });
    }
  }
  return out.sort((a, b) => b.last.date.localeCompare(a.last.date));
}
