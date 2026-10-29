// The Transmittals module's runtime (2026-10-28): every send of a deliverable, newest first, each row opening its
// transmittal's page; drafts edit, send and delete from the row; New Transmittal opens BcnTransmittalDialog. A send
// lands on the transmittal's page, where receipt is tracked. Records attach to Live (decision 5): `ctx.canRecord` is
// false in a draft, the preview and for Guests, and then the list only reads. See ./element-module.ts.

import { receiptBadge } from './badge-bank';
import { addGuests } from '../../lib/planning/plan-repo';
import { TRANSMITTAL_HREF } from '../../lib/planning/element-context';
import {
  receiptCount,
  receiptOverdue,
  recordsFor,
  respondedOn,
  responseDaysLate,
  responseOverdue,
  sendTransmittal,
  deleteDraftTransmittal,
  transmittalNumber,
  transmittalsFor,
  transmittalStatus,
  type Transmittal,
  type TransmittalStatus,
} from '../../lib/planning/plan-records';
import { fillIcons } from '../../lib/planning/icons';
import { badge, type BadgeVariant } from './badge-bank';
import { day, setModuleCount, setModuleNote, type ElementModuleSetup } from './element-module';
import { names, sendMessage, sendProblems, setupTransmittalDialog, type TransmittalDialogResult } from './transmittal-dialog';

/** A transmittal's status, in the colors the transmittal page and the inbox use too. */
export const TRANSMITTAL_STATUS_VARIANT: Record<TransmittalStatus, BadgeVariant> = {
  Draft: 'neutral',
  Sent: 'info',
  Received: 'primary',
  Responded: 'success',
  Closed: 'neutral',
};

/** The transmittal's page; `sent` says it just went, for the page's toast. */
export const transmittalPage = (planID: string, id: string, sent = false) => TRANSMITTAL_HREF(planID, id) + (sent ? '&sent=1' : '');

/** A fact for a row's second line, with a tone the row colors. */
function fact(text: string, tone?: 'warning' | 'danger' | 'success'): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  if (tone) span.dataset.tone = tone;
  return span;
}

/** A sent transmittal's facts: when it went, receipt, response. A draft's: not sent, and to whom. */
export function transmittalFacts(t: Transmittal): HTMLElement[] {
  const status = transmittalStatus(t);
  if (status === 'Draft') return [fact('Not Sent'), fact(t.to.length ? `To ${names(t.to)}` : 'No recipients yet')];
  const out = [fact(`Sent ${day(t.sentAt)}`)];
  const { confirmed, of } = receiptCount(t);
  const late = t.to.some((n) => receiptOverdue(t, n));
  if (of) {
    const receipt = receiptBadge(confirmed, of, late);
    // Who it's waiting on, on hover: "Waiting on Rowan Hale (overdue, reminded Oct 27, 2026)".
    const waiting = t.to.filter((n) => !t.receipts[n]?.confirmedAt);
    if (waiting.length)
      receipt.title = `Waiting on ${names(waiting.map((n) => [n, [receiptOverdue(t, n) ? 'overdue' : '', t.receipts[n]?.remindedAt ? `reminded ${day(t.receipts[n]!.remindedAt)}` : ''].filter(Boolean).join(', ')]).map(([n, why]) => (why ? `${n} (${why})` : n)))}`;
    out.push(receipt);
  }
  if (t.closedAt) out.push(fact(`Closed ${day(t.closedAt)}`));
  else if (t.response) {
    const late = responseDaysLate(t);
    out.push(fact(`Responded ${day(respondedOn(t))}${late ? `, ${late} ${late === 1 ? 'day' : 'days'} late` : ''}`, late ? 'warning' : undefined));
  }
  else if (t.responseDue) out.push(fact(`Response due ${day(t.responseDue)}`, responseOverdue(t) ? 'danger' : undefined));
  return out;
}

export const setupTransmittalsModule: ElementModuleSetup = (root, host) => {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const list = q('[data-tm-list]');
  const empty = q('[data-tm-empty]');
  const newBtn = q('[data-tm-new]');
  const emptyNew = q('[data-tm-empty-new]');
  const rowTpl = q<HTMLTemplateElement>('template[data-tm-tpl="row"]');
  // The dialog lives on the body: the module's card moves between columns and the page's bank.
  const dialogRoot = q('[data-bcn-transmittal-dialog]');
  document.body.append(dialogRoot);
  const dialog = setupTransmittalDialog(dialogRoot);

  /** After the dialog: a send goes to its page; a saved draft says so. */
  function after(result: TransmittalDialogResult): void {
    if (!result) return;
    const ctx = host.ctx();
    const t = recordsFor(ctx.planID).transmittals.find((x) => x.id === result.id);
    if (result.kind === 'sent') location.assign(transmittalPage(ctx.planID, result.id, true));
    else host.toast(`${t ? transmittalNumber(t) : 'The transmittal'} saved as a draft.`);
  }

  const startNew = async () => {
    const ctx = host.ctx();
    if (!ctx.canRecord) return;
    after(await dialog.open({ planID: ctx.planID, elementId: ctx.element.PlanElementID ?? '' }));
  };
  newBtn.addEventListener('click', startNew);
  emptyNew.addEventListener('click', startNew);

  async function edit(t: Transmittal, check = false): Promise<void> {
    const ctx = host.ctx();
    after(await dialog.open({ planID: ctx.planID, elementId: t.elementId, transmittalId: t.id, check }));
  }
  /** A draft complete enough goes after one confirm; one that isn't opens in the dialog, showing what it needs. */
  async function send(t: Transmittal): Promise<void> {
    const ctx = host.ctx();
    if (sendProblems(t).length) return edit(t, true);
    const ok = await host.confirm({ heading: `Send ${transmittalNumber(t)}?`, message: sendMessage(t, ctx.config.ackDays), confirmLabel: 'Send' });
    if (!ok) return;
    sendTransmittal(ctx.planID, t.id, ctx.config.ackDays);
    addGuests(ctx.planID, [...t.to, ...t.cc]);
    location.assign(transmittalPage(ctx.planID, t.id, true));
  }
  async function remove(t: Transmittal): Promise<void> {
    const ctx = host.ctx();
    const ok = await host.confirm({ heading: `Delete ${transmittalNumber(t)}?`, message: 'It goes. Nothing was sent, so no one is told.', confirmLabel: 'Delete Transmittal', danger: true });
    if (!ok) return;
    deleteDraftTransmittal(ctx.planID, t.id);
    host.toast(`${transmittalNumber(t)} deleted.`);
  }

  function row(t: Transmittal, canRecord: boolean, planID: string): HTMLElement {
    const el = rowTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const status = transmittalStatus(t);
    const href = transmittalPage(planID, t.id);
    el.querySelector('[data-tm-num]')!.textContent = transmittalNumber(t);
    const subject = el.querySelector<HTMLAnchorElement>('[data-tm-subject]')!;
    subject.textContent = t.subject || 'Untitled';
    subject.href = href;
    const purpose = el.querySelector<HTMLElement>('[data-tm-purpose]')!;
    if (t.purpose) purpose.replaceWith(badge(t.purpose, 'neutral', 'xs'));
    else purpose.remove();
    el.querySelector('[data-tm-status]')!.replaceChildren(badge(status, TRANSMITTAL_STATUS_VARIANT[status], 'sm'));
    el.querySelector('[data-tm-facts]')!.replaceChildren(...transmittalFacts(t));
    const acts = el.querySelector<HTMLElement>('[data-tm-acts]')!;
    acts.hidden = !(status === 'Draft' && canRecord);
    const on = (name: string, run: () => void) => el.querySelector(`[data-tm-act="${name}"]`)!.addEventListener('click', (e) => (e.stopPropagation(), run()));
    on('edit', () => void edit(t));
    on('send', () => void send(t));
    on('delete', () => void remove(t));
    // The whole row opens it; its link and buttons do their own thing.
    el.addEventListener('click', (e) => {
      if ((e.target as Element).closest('a, button')) return;
      location.assign(href);
    });
    fillIcons(el);
    return el;
  }

  return {
    draw(ctx) {
      const id = ctx.element.PlanElementID ?? '';
      const all = ctx.inLive ? transmittalsFor(ctx.records, id) : [];
      newBtn.hidden = !ctx.canRecord || all.length === 0;
      emptyNew.hidden = !ctx.canRecord;
      setModuleCount(root, all.length || null);
      // Why it won't send, said once and quietly (the page's own note says the rest).
      setModuleNote(root, ctx.mode === 'customize' || ctx.myRole === 'Guest' ? null : !ctx.inLive ? 'New in this draft. It can be sent once it is on Live.' : ctx.mode !== 'live' ? 'Read-only in a draft. Sends are made on Live.' : null);
      list.replaceChildren(...all.map((t) => row(t, ctx.canRecord, ctx.planID)));
      list.hidden = all.length === 0;
      empty.hidden = all.length > 0;
      const description = empty.querySelector('.esa-empty-state__description');
      if (description) description.textContent = ctx.canRecord ? 'Send it to its reviewers with New Transmittal.' : ctx.mode === 'live' || ctx.mode === 'customize' ? 'Its sends will be listed here.' : 'Open the Live plan to send it.';
    },
  };
};
