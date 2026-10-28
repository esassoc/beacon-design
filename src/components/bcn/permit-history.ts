// A permit's status log as <BcnChangeLog> days, newest first. Shared by the build
// (fixture history) and the browser (store history) so <BcnPermitHistory> renders the
// same markup either way.

import { fmtDate, type HistoryEntry, type StatusColumn } from '../../data/permit-tracker';
import type { ChangeLogDay } from './change-log';

export function historyDays(history: HistoryEntry[], columnOf: (statusId: string) => StatusColumn): ChangeLogDay[] {
  const days: ChangeLogDay[] = [];
  for (const e of [...history].reverse()) {
    const context = [e.note, e.expires ? `expires ${fmtDate(e.expires)}` : ''].filter(Boolean).join(', ');
    const event = { text: 'Status set to', emphasis: columnOf(e.statusId).name, by: e.by, ...(context ? { context } : {}) };
    const day = days.at(-1);
    if (day?.datetime === e.at) day.events.push(event);
    else days.push({ date: fmtDate(e.at), datetime: e.at, events: [event] });
  }
  return days;
}
