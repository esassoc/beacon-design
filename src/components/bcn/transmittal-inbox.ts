// <BcnTransmittalInbox>'s runtime (2026-10-28): Sent to You, for whoever is signed in (currentUserName(): Andy, or
// `?user=`). Reads every plan's records (recordsFor + transmittalsTo), so a Guest who sees no plan still finds what was
// sent to them. The ones waiting on them come first (a To recipient who hasn't confirmed), then the rest, newest first.
// Hidden when there are none. The page includes BcnBadgeBank and BcnPlanPeople, which the rows clone from. Records saved
// anywhere (Confirm Receipt in another tab) redraw it. Each draw ends with a `bcn-transmittal-inbox` event on the root
// ({ count, waiting }), for a host that shows something else when it hides.

import { listPlanSummaries, orgOf } from '../../lib/planning/plan-repo';
import { currentUserName } from '../../lib/planning/plan-server';
import { TRANSMITTAL_HREF } from '../../lib/planning/element-context';
import { receiptOverdue, recordsFor, transmittalNumber, transmittalsTo, type Transmittal } from '../../lib/planning/plan-records';
import { planAvatar } from './plan-people';
import { badge } from './badge-bank';
import { day } from './element-module';

interface InboxRow {
  planID: string;
  planName: string;
  t: Transmittal;
  /** A To recipient who hasn't confirmed: it waits on them. */
  waiting: boolean;
}

export function setupTransmittalInbox(root: HTMLElement): { draw(): void } {
  const rowsEl = root.querySelector<HTMLElement>('[data-tib-rows]')!;
  const tpl = root.querySelector<HTMLTemplateElement>('template[data-tib-tpl="row"]')!;
  const note = root.querySelector<HTMLElement>('[data-tib-note]')!;

  function row({ planID, planName, t, waiting }: InboxRow, me: string): HTMLElement {
    const el = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const href = TRANSMITTAL_HREF(planID, t.id);
    const mine = t.receipts[me] ?? {};
    const isTo = t.to.includes(me);
    el.querySelector('[data-tib-num]')!.textContent = transmittalNumber(t);
    const subject = el.querySelector<HTMLAnchorElement>('[data-tib-subject]')!;
    subject.textContent = t.subject;
    subject.href = href;
    el.querySelector('[data-tib-plan]')!.textContent = planName;
    const from = el.querySelector<HTMLElement>('[data-tib-from]')!;
    const name = document.createElement('span');
    name.textContent = t.from;
    if (orgOf(t.from)) name.append(' ', Object.assign(document.createElement('small'), { textContent: orgOf(t.from) }));
    from.replaceChildren(planAvatar(t.from, 'xs'), name);
    el.querySelector('[data-tib-sent]')!.textContent = day(t.sentAt);

    // Their own receipt: what they still owe, or that it's done.
    const state = el.querySelector<HTMLElement>('[data-tib-state]')!;
    if (waiting) state.replaceChildren(badge('Confirm Receipt', receiptOverdue(t, me) ? 'danger' : 'warning', 'sm'));
    else if (mine.confirmedAt && mine.recordedBy) state.replaceChildren(badge(`Recorded by ${mine.recordedBy}`, 'info', 'sm'));
    else if (mine.confirmedAt) state.replaceChildren(badge('Confirmed', 'success', 'sm'));
    else state.replaceChildren(badge('Copied', 'neutral', 'sm'));

    const due = el.querySelector<HTMLElement>('[data-tib-due]')!;
    if (t.closedAt) Object.assign(due, { textContent: 'Closed' }).dataset.tone = 'quiet';
    else if (t.response) Object.assign(due, { textContent: 'Responded' }).dataset.tone = 'quiet';
    else if (t.responseDue && isTo) {
      due.textContent = day(t.responseDue);
      if (t.responseDue < new Date().toISOString().slice(0, 10)) due.dataset.tone = 'danger';
    } else Object.assign(due, { textContent: isTo ? 'None Set' : 'None Owed' }).dataset.tone = 'quiet';

    el.addEventListener('click', (e) => {
      if ((e.target as Element).closest('a, button')) return;
      location.assign(href);
    });
    return el;
  }

  let drawing = 0;
  async function draw(): Promise<void> {
    const ticket = ++drawing;
    const me = currentUserName();
    const plans = await listPlanSummaries();
    if (ticket !== drawing) return;
    const rows: InboxRow[] = plans.flatMap((p) =>
      transmittalsTo(recordsFor(p.repo.planID), me).map((t) => ({ planID: p.repo.planID, planName: p.name, t, waiting: t.to.includes(me) && !t.receipts[me]?.confirmedAt && !t.closedAt }))
    );
    rows.sort((a, b) => Number(b.waiting) - Number(a.waiting) || (b.t.sentAt ?? '').localeCompare(a.t.sentAt ?? ''));
    root.hidden = rows.length === 0;
    rowsEl.replaceChildren(...rows.map((r) => row(r, me)));
    const count = root.querySelector<HTMLElement>('[data-tib-count] .esa-badge__text');
    if (count) count.textContent = String(rows.length);
    const waiting = rows.filter((r) => r.waiting).length;
    note.textContent = waiting
      ? `${waiting === 1 ? 'One is' : `${waiting} are`} waiting on you to confirm receipt.`
      : 'Every receipt asked of you is confirmed.';
    // For a host that says something in its place when it hides.
    root.dispatchEvent(new CustomEvent('bcn-transmittal-inbox', { detail: { count: rows.length, waiting } }));
  }

  // Records saved anywhere: a receipt confirmed in another tab, a new send.
  let queued = false;
  const soon = () => {
    if (queued) return;
    queued = true;
    queueMicrotask(() => {
      queued = false;
      void draw();
    });
  };
  window.addEventListener('bcn-plan-records', soon);
  window.addEventListener('storage', soon);

  return {
    draw() {
      void draw();
    },
  };
}
