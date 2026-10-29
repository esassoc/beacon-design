// <BcnTransmittalPage>'s runtime (2026-10-28): one transmittal, read from `?plan=` and `&id=`. Who's looking decides
// the view: a plan member (not a Guest) gets the sender's record; a recipient outside the plan (a Guest, or anyone not a
// member) gets their own page with Confirm Receipt; anyone else, "Not Sent to You". Opening a sent transmittal as one
// of its recipients logs Opened (decision 3: opening is not receipt).
//
// Every change redraws from storage: a receipt confirmed in another tab shows here as it lands. Sent is final, so the
// only writes are records about the send: receipts, reminders, the response, closing; a draft's edits go through
// BcnTransmittalDialog.

import { withBase } from '../../lib/base';
import { addGuests, ensureSeeded, getRepo, latestVersion, flattenPlan, membersOf, configOf, orgOf, type PlanRepo } from '../../lib/planning/plan-repo';
import { currentUserName } from '../../lib/planning/plan-server';
import { ELEMENT_HREF, PLAN_VIEW_HREF, TRANSMITTAL_HREF } from '../../lib/planning/element-context';
import {
  ACCEPTS,
  canResubmit,
  closeTransmittal,
  RESPONSE_OUTCOMES,
  resubmittalDraftOf,
  reviewChain,
  reviewRound,
  supersededByOf,
  supersedesOf,
  type ResponseOutcome,
  confirmCcReceipt,
  confirmReceipt,
  deleteDraftTransmittal,
  documentsFor,
  fileById,
  openTransmittal,
  receiptCount,
  receiptOverdue,
  recordReceiptFor,
  recordResponse,
  recordsFor,
  remindRecipient,
  respondedOn,
  responseDaysLate,
  responseOverdue,
  todayIso,
  sendTransmittal,
  transmittalNumber,
  transmittalStatus,
  type PlanFile,
  type PlanRecords,
  type Transmittal,
} from '../../lib/planning/plan-records';
import { confirm, pushAlert } from '../../lib/planning/plan-page';
import { fillIcons } from '../../lib/planning/icons';
import { planAvatar } from './plan-people';
import { badge, type BadgeVariant } from './badge-bank';
import { day, dayTime, esc } from './element-module';
import { OUTCOME_VARIANT, TRANSMITTAL_STATUS_VARIANT } from './element-transmittals';
import { agencyFor, docPicker, fileUpload, names, purposePhrase, revisionText, sendMessage, sendProblems, setupTransmittalDialog, withOrg } from './transmittal-dialog';

type DialogEl = HTMLElement & { open: boolean; heading: string };
type SelectEl = HTMLElement & { value: string | string[]; options: { value: string; label: string }[]; errorText: string };
type FieldEl = HTMLElement & { value: string; errorText: string };

const firstName = (name: string) => name.split(' ')[0];
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

// ── Where a recipient stands ─────────────────────────────────────────────────────────────────────────────────────

export interface ReceiptState {
  /** The badge: Confirmed, Recorded by Alex Rivera, Overdue, Opened, Not Yet, Not Opened. */
  label: string;
  variant: BadgeVariant;
  /** The line beside it: when, reminded, opened. */
  detail: string;
  /** Someone confirmed (themselves, or recorded for them). */
  confirmed: boolean;
}

/** A person's work address, as the prototype's directory would give it: ESA's and DWR's domains. */
const DOMAIN: Record<string, string> = { ESA: 'esassoc.com', DWR: 'water.ca.gov', CDFW: 'wildlife.ca.gov', NMFS: 'noaa.gov', USFWS: 'fws.gov' };
const emailOf = (name: string) => `${name.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/\s+/g, '.')}@${DOMAIN[orgOf(name)] ?? 'example.com'}`;

/** One recipient's receipt of a sent transmittal, as the sender's list says it. */
export function receiptState(t: Transmittal, name: string): ReceiptState {
  const r = t.receipts[name] ?? {};
  const isTo = t.to.includes(name);
  // Whose reminder, said once each: Beacon's automatic one, then the sender's own.
  const reminded = r.remindedAt ? `${t.from.split(' ')[0]} reminded them ${day(r.remindedAt)}` : '';
  if (!t.sentAt) return { label: 'Not Sent', variant: 'neutral', detail: '', confirmed: false };
  if (r.confirmedAt && r.recordedBy) return { label: `Recorded by ${r.recordedBy}`, variant: 'info', detail: dayTime(r.confirmedAt), confirmed: true };
  if (r.confirmedAt) return { label: 'Confirmed', variant: 'success', detail: dayTime(r.confirmedAt), confirmed: true };
  if (!isTo) return r.openedAt ? { label: 'Opened', variant: 'neutral', detail: dayTime(r.openedAt), confirmed: false } : { label: 'Not Opened', variant: 'neutral', detail: '', confirmed: false };
  const opened = r.openedAt ? `Opened ${dayTime(r.openedAt)}` : '';
  // Days to Confirm Receipt's promise (2026-10-28, the SOW review): the night after it passes, Beacon emails the
  // recipient and the sender on its own; Send Reminder is the sender's extra nudge.
  const auto = t.ackDue ? `Beacon reminded them ${day(new Date(Date.parse(`${t.ackDue.slice(0, 10)}T12:00:00Z`) + 86_400_000).toISOString())}` : '';
  if (receiptOverdue(t, name)) return { label: 'Overdue', variant: 'warning', detail: sentences([`Was due ${day(t.ackDue)}`, auto, reminded, opened]), confirmed: false };
  if (r.openedAt) return { label: 'Opened', variant: 'neutral', detail: sentences([`${dayTime(r.openedAt)}, not confirmed`, reminded]), confirmed: false };
  return { label: 'Not Yet', variant: 'neutral', detail: sentences([t.ackDue ? `Due ${day(t.ackDue)}` : '', reminded]), confirmed: false };
}

/** Facts as one line: a lone fact bare ("Due Oct 25, 2026"); two or more as sentences, the last one closed too. */
const sentences = (parts: string[]) => {
  const p = parts.filter(Boolean);
  return p.length > 1 ? `${p.join('. ')}.` : (p[0] ?? '');
};

/** The version a file stood at when it went (a memo isn't pinned in the record; its last save before the send is). */
const versionAt = (f: PlanFile, iso?: string) => (iso ? ([...f.versions].reverse().find((v) => v.at <= iso) ?? f.versions.at(-1)) : f.versions.at(-1));
const sizeText = (bytes?: number) => (!bytes ? '' : bytes < 1_000_000 ? `${Math.max(1, Math.round(bytes / 1000))} KB` : `${(bytes / 1_000_000).toFixed(1)} MB`);

export async function setupTransmittalPage(root: HTMLElement): Promise<void> {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  await ensureSeeded();
  const params = new URLSearchParams(location.search);
  const planID = params.get('plan') ?? '';
  const id = params.get('id') ?? '';
  const me = currentUserName();
  const fileTpl = q<HTMLTemplateElement>('template[data-trp-tpl="file"]');
  const personTpl = q<HTMLTemplateElement>('template[data-trp-tpl="person"]');
  const roundTpl = q<HTMLTemplateElement>('template[data-trp-tpl="round"]');
  const pageAct = (name: string) => document.querySelector<HTMLElement>(`[data-trp-page-act="${name}"]`);
  const h1 = document.querySelector('.page-layout__title h1');
  const titleText = h1 && [...h1.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim());
  const titleBadges = document.querySelector<HTMLElement>('[data-trp-title-badges]');
  const editDialog = setupTransmittalDialog(q('[data-bcn-transmittal-dialog]'));
  fillIcons(document);

  // What the page last drew from (the actions read it).
  let t: Transmittal | null = null;
  let rec: PlanRecords | null = null;
  let repo: PlanRepo | null = null;
  let canRecord = false;
  const num = () => (t ? transmittalNumber(t) : '');
  const download = (name: string) => pushAlert(`Downloading ${name}`, 'info', 3000);
  const elementFiles = () => (t && rec ? documentsFor(recordsFor(planID), t.elementId).filter((d) => d.file.kind === 'file').map((d) => d.file) : []);

  // ── Rows ──
  function fileRow(f: PlanFile | undefined, sub: string, version: string): HTMLElement {
    const row = fileTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const name = f?.name ?? 'A file no longer in the store';
    row.querySelector('[data-file-name]')!.textContent = name;
    row.querySelector('[data-file-sub]')!.textContent = sub;
    row.querySelector('[data-file-version]')!.textContent = version;
    const dl = row.querySelector<HTMLElement>('[data-file-download]')!;
    dl.querySelector('button')?.setAttribute('aria-label', `Download ${name}`);
    dl.querySelector('button')?.setAttribute('title', `Download ${name}`);
    dl.addEventListener('click', () => download(name));
    dl.hidden = !f;
    return row;
  }
  /** The memo, then the enclosures: each at the version and revision it went at (a draft's, as they stand). */
  function fileRows(x: Transmittal, r: PlanRecords): HTMLElement[] {
    const rows: HTMLElement[] = [];
    const memo = fileById(r, x.memoFileId);
    if (x.memoFileId) {
      const v = memo ? versionAt(memo, x.sentAt) : undefined;
      rows.push(fileRow(memo, ['Transmittal Memo', sizeText(v?.size)].filter(Boolean).join(', '), revisionText(memo?.revision, v?.number)));
    }
    for (const e of x.enclosures) {
      const f = fileById(r, e.fileId);
      const latest = f?.versions.at(-1);
      const sent = !!x.sentAt;
      const version = sent ? e.version : latest?.number;
      const size = f?.versions.find((v) => v.number === version)?.size;
      const newer = sent && latest && latest.number > e.version ? `Version ${latest.number} saved since; not part of this send` : '';
      rows.push(fileRow(f, [['Enclosure', sizeText(size)].filter(Boolean).join(', '), newer].filter(Boolean).join('. '), revisionText(sent ? e.revision : f?.revision, version)));
    }
    return rows;
  }

  function personRow(x: Transmittal, name: string): HTMLElement {
    const row = personTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const isTo = x.to.includes(name);
    row.querySelector('[data-person-avatar]')!.replaceWith(planAvatar(name, 'sm'));
    row.querySelector('[data-person-name]')!.textContent = name === me ? `${name} (You)` : name;
    row.querySelector('[data-person-org]')!.textContent = orgOf(name);
    const role = row.querySelector<HTMLElement>('[data-person-role]')!;
    role.textContent = isTo ? 'To' : 'Cc';
    role.title = isTo ? 'Confirms receipt' : 'Copied; confirming is optional';
    const state = receiptState(x, name);
    if (x.sentAt) row.querySelector('[data-person-badge]')!.replaceWith(badge(state.label, state.variant, 'sm'));
    const detail = row.querySelector<HTMLElement>('[data-person-detail]')!;
    detail.textContent = x.sentAt ? state.detail : isTo ? 'Confirms once it is sent' : 'Copied';
    // Evidence a receipt was recorded with: the reply email, say.
    const evidence = rec ? fileById(rec, x.receipts[name]?.evidenceFileId) : undefined;
    if (evidence && x.receipts[name]?.recordedBy) {
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = evidence.name;
      a.addEventListener('click', (e) => (e.preventDefault(), download(evidence.name)));
      detail.append('. Evidence: ', a);
    }
    const open = !!x.sentAt && !x.closedAt && !state.confirmed;
    const act = (n: string) => row.querySelector<HTMLElement>(`[data-person-act="${n}"]`)!;
    // A member who's also a recipient confirms here; a sender reminds or records for a To still outstanding.
    act('confirm').hidden = !(open && name === me);
    act('remind').hidden = !(open && isTo && canRecord && name !== me);
    act('record').hidden = !(open && isTo && canRecord && name !== me);
    act('confirm').addEventListener('click', () => confirmMine());
    act('remind').addEventListener('click', () => {
      remindRecipient(planID, x.id, name);
      pushAlert(`Reminder sent to ${name}.`, 'success');
    });
    act('record').addEventListener('click', () => void openRecordReceipt(name));
    return row;
  }

  // ── The two views ──
  /** ", 2 days late" after a response's date, when it came back past its due date. */
  const lateWords = (x: Transmittal) => {
    const n = responseDaysLate(x);
    return n ? `, ${n} ${n === 1 ? 'day' : 'days'} late` : '';
  };
  function drawSender(x: Transmittal, r: PlanRecords, elementName: string): void {
    const status = transmittalStatus(x);
    const draft = status === 'Draft';
    // The line under the title: from whom, when, and what's due.
    const line = q('[data-trp-line]');
    const from = `<b>${esc(x.from)}</b>${orgOf(x.from) ? ` (${esc(orgOf(x.from))})` : ''}`;
    const response = x.closedAt
      ? ` Closed ${day(x.closedAt)}.`
      : x.response
        ? ` Responded ${day(respondedOn(x))}${lateWords(x)}.`
        : x.responseDue
          ? responseOverdue(x)
            ? ` <span data-tone="danger">Response was due ${day(x.responseDue)}.</span>`
            : ` Response due ${day(x.responseDue)}.`
          : '';
    // Its place in the review chain, linked both ways.
    const link = (y: Transmittal) => `<a href="${esc(TRANSMITTAL_HREF(planID, y.id))}">${esc(transmittalNumber(y))}</a>`;
    const prev = supersedesOf(r, x);
    const next = supersededByOf(r, x);
    const started = resubmittalDraftOf(r, x);
    const chain = [
      prev ? ` Supersedes ${link(prev)}; round ${reviewRound(r, x)} of review.` : '',
      next ? ` Superseded by ${link(next)}, sent ${day(next.sentAt)}.` : started ? ` Its resubmittal, ${link(started)}, is not sent yet.` : '',
    ].join('');
    line.innerHTML = draft
      ? `Draft by ${from}, started ${day(x.createdAt)}, for ${esc(elementName)}. Nothing has gone out yet.${chain}`
      : `From ${from}, sent ${dayTime(x.sentAt)}.${next ? '' : response}${chain}`;
    line.hidden = false;

    // What was sent.
    q('[data-trp-sent-title]').textContent = draft ? 'What Will Be Sent' : 'What Was Sent';
    q('[data-trp-sent-note]').textContent = draft ? 'Each enclosure locks at its current version when it is sent.' : `Locked at the versions sent ${day(x.sentAt)}.`;
    const files = fileRows(x, r);
    q('[data-trp-files]').replaceChildren(...(files.length ? files : [Object.assign(document.createElement('li'), { className: 'bcn-trp__none typography-body-sm', textContent: 'Nothing enclosed yet.' })]));

    // Receipt.
    const { confirmed, of } = receiptCount(x);
    const late = x.to.some((n) => receiptOverdue(x, n));
    const note = q('[data-trp-receipt-note]');
    note.innerHTML = draft
      ? 'To recipients confirm once it is sent; Cc recipients don’t have to.'
      : confirmed === of
        ? `${confirmed} of ${of} received.`
        : `${confirmed} of ${of} received. ${late ? `<span data-tone="warning">Receipt was due ${day(x.ackDue)}.</span>` : `Receipt due ${day(x.ackDue)}.`}`;
    q('[data-trp-receipts]').replaceChildren(...[...x.to, ...x.cc].map((n) => personRow(x, n)));

    // Response.
    q('[data-trp-response-card]').hidden = draft;
    const said = q('[data-trp-response-said]');
    const by = q('[data-trp-response-by]');
    const respFiles = q('[data-trp-response-files]');
    const respNote = q('[data-trp-response-note]');
    const outcomeSlot = q('[data-trp-response-outcome]');
    outcomeSlot.replaceChildren(...(x.response?.outcome ? [badge(x.response.outcome, OUTCOME_VARIANT[x.response.outcome] ?? 'neutral', 'sm')] : []));
    if (x.response) {
      said.textContent = x.response.note;
      const f = fileById(r, x.response.fileId);
      respFiles.replaceChildren(...(f ? [fileRow(f, 'Response', revisionText(f.revision, f.versions.at(-1)?.number))] : []));
      by.textContent = x.response.receivedOn
        ? `Received ${day(x.response.receivedOn)}. Recorded by ${x.response.by}, ${dayTime(x.response.at)}.`
        : `Recorded by ${x.response.by}, ${dayTime(x.response.at)}.`;
      const late = responseDaysLate(x);
      const dueWords = x.responseDue ? (late ? `<span data-tone="warning">Was due ${day(x.responseDue)}; it came back ${late} ${late === 1 ? 'day' : 'days'} late.</span>` : `Due ${day(x.responseDue)}.`) : '';
      respNote.innerHTML = x.supersededBy ? `Superseded ${day(x.closedAt)}.` : x.closedAt ? `Closed ${day(x.closedAt)}.${dueWords && late ? ` ${dueWords}` : ''}` : dueWords;
    } else {
      said.textContent = '';
      respFiles.replaceChildren();
      by.textContent = x.closedAt ? 'Closed without a response.' : 'No response yet.';
      respNote.innerHTML = x.closedAt ? `Closed ${day(x.closedAt)}.` : x.responseDue ? (responseOverdue(x) ? `<span data-tone="danger">Was due ${day(x.responseDue)}.</span>` : `Due ${day(x.responseDue)}.`) : 'No response date was set.';
    }
    const live = !draft && !x.closedAt && canRecord;
    q('[data-trp-act="respond"]').hidden = !(live && !x.response);
    // Short of acceptance: Revise and Resubmit (or back to the resubmittal already started). Accepted: complete it.
    const resubmitAct = q('[data-trp-act="resubmit"]');
    resubmitAct.hidden = !(canRecord && canResubmit(x));
    const resubLabel = resubmitAct.querySelector('.esa-button__label');
    if (resubLabel) resubLabel.textContent = started ? `Open ${transmittalNumber(started)} Draft` : 'Revise and Resubmit';
    const completeAct = q('[data-trp-act="complete"]');
    completeAct.hidden = !(canRecord && !draft && ACCEPTS.has(x.response?.outcome ?? '') && !r.completions[x.elementId] && !x.supersededBy);
    completeAct.querySelector('a')!.href = `${ELEMENT_HREF(planID, x.elementId)}&complete=1`;
    // Closing ends it: once it's answered, or when nothing is owed back and everyone has it.
    q('[data-trp-act="close"]').hidden = !(live && (!!x.response || (!x.responseDue && status === 'Received')));

    // What the recipient got: the email, to the first To still outstanding (or the first To).
    const shown = x.to.find((n) => !x.receipts[n]?.confirmedAt) ?? x.to[0] ?? x.cc[0];
    const org = orgOf(x.from) || x.from;
    q('[data-trp-mail-to]').textContent = shown ? `To ${withOrg(shown)}` : 'No recipients yet';
    q('[data-trp-mail-subject]').textContent = `${num()}: ${x.subject}`;
    q('[data-trp-mail-body]').textContent = `${org} sent you “${x.subject}” ${purposePhrase(x.purpose) || 'for review'} (${num()}).${x.responseDue ? ` Response due ${day(x.responseDue)}.` : ''}`;
    const openLink = q<HTMLElement>('[data-trp-mail-open]');
    openLink.hidden = draft || !shown;
    const a = openLink.querySelector('a');
    if (a && shown) {
      a.href = `${TRANSMITTAL_HREF(planID, x.id)}&user=${encodeURIComponent(shown)}`;
      a.title = `Opens in a new tab, signed in as ${shown}`;
    }
    q('[data-trp-mail-title]').textContent = draft ? 'What the Recipient Will Get' : 'What the Recipient Got';
    q('[data-trp-mail-hint]').textContent = draft
      ? 'Each recipient gets this email when it is sent.'
      : 'Each recipient got this email. Receipt counts only when a To recipient signs in and presses Confirm Receipt; opening it doesn’t.';
    drawRounds(x, r);
    const notesCard = q('[data-trp-notes-card]');
    notesCard.hidden = !x.notes;
    q('[data-trp-notes]').textContent = x.notes ?? '';

    q('[data-trp-sender]').hidden = false;
  }

  /** Review Rounds: every send in the chain, once there is more than one (or a resubmittal is started). */
  function drawRounds(x: Transmittal, r: PlanRecords): void {
    const chain = reviewChain(r, x);
    const started = resubmittalDraftOf(r, chain.at(-1)!);
    const all = started ? [...chain, started] : chain;
    q('[data-trp-rounds-card]').hidden = all.length < 2;
    if (all.length < 2) return;
    const settled = chain.at(-1)!.response?.outcome;
    q('[data-trp-rounds-note]').textContent = `${chain.length} ${chain.length === 1 ? 'Round' : 'Rounds'} So Far${ACCEPTS.has(settled ?? '') ? `, ${settled}` : ''}`;
    q('[data-trp-rounds]').replaceChildren(
      ...all.map((y, i) => {
        const li = roundTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
        li.querySelector('[data-round-n]')!.textContent = y.sentAt ? `Round ${i + 1}` : 'Next';
        const a = li.querySelector<HTMLAnchorElement>('[data-round-link]')!;
        a.textContent = `${transmittalNumber(y)} ${y.subject}`;
        if (y.id === x.id) {
          li.setAttribute('aria-current', 'true');
          a.removeAttribute('href');
        } else a.href = TRANSMITTAL_HREF(planID, y.id);
        const o = y.response?.outcome;
        li.querySelector('[data-round-detail]')!.textContent = !y.sentAt
          ? 'Not sent yet'
          : y.response
            ? `Sent ${day(y.sentAt)}. ${o && o !== 'Comments Only' ? o : 'Responded'} ${day(respondedOn(y))}`
            : `Sent ${day(y.sentAt)}. ${y.responseDue ? `Response due ${day(y.responseDue)}` : 'No response date'}`;
        const status = transmittalStatus(y);
        li.querySelector('[data-round-badge]')!.replaceWith(
          o ? badge(o, OUTCOME_VARIANT[o] ?? 'neutral', 'sm') : badge(status === 'Draft' ? 'Not Sent' : status === 'Sent' || status === 'Received' ? 'Under Review' : status, status === 'Draft' ? 'neutral' : TRANSMITTAL_STATUS_VARIANT[status], 'sm')
        );
        return li;
      })
    );
  }

  function drawRecipient(x: Transmittal, r: PlanRecords, planName: string): void {
    const isTo = x.to.includes(me);
    const mine = x.receipts[me] ?? {};
    q('[data-trp-from-avatar]').replaceChildren(planAvatar(x.from, 'md'));
    q('[data-trp-from-name]').textContent = x.from;
    q('[data-trp-from-org]').textContent = [orgOf(x.from), planName].filter(Boolean).join(', ');
    q('[data-trp-lede]').textContent = `${x.from} sent you “${x.subject}” ${purposePhrase(x.purpose) || 'for review'} on ${day(x.sentAt)}.`;
    // Replaced by a resubmittal: say so first, and point to the one to review (when it was sent to them too).
    const next = supersededByOf(r, x);
    const nextMine = !!next && (next.to.includes(me) || next.cc.includes(me));
    q('[data-trp-mine-superseded]').hidden = !next;
    if (next) {
      const text = q('[data-trp-mine-superseded-text]');
      text.textContent = `${x.from} sent a revised version on ${day(next.sentAt)}, ${transmittalNumber(next)}, which replaces this one. `;
      if (nextMine) {
        const a = document.createElement('a');
        a.href = TRANSMITTAL_HREF(planID, next.id);
        a.textContent = `Open ${transmittalNumber(next)}`;
        text.append(a);
      } else text.append('Nothing more is owed on this one.');
    }
    const prev = supersedesOf(r, x);
    q('[data-trp-mine-replaces]').hidden = !prev;
    if (prev) {
      const prevMine = prev.to.includes(me) || prev.cc.includes(me);
      const text = q('[data-trp-mine-replaces-text]');
      const outcome = prev.response?.outcome;
      text.textContent = `This revised version replaces ${transmittalNumber(prev)}${outcome && outcome !== 'Comments Only' ? `, which came back ${outcome}` : ''}${prev.response ? ` on ${day(respondedOn(prev))}` : ''}. Round ${reviewRound(r, x)} of review. `;
      if (prevMine) {
        const a = document.createElement('a');
        a.href = TRANSMITTAL_HREF(planID, prev.id);
        a.textContent = `Open ${transmittalNumber(prev)}`;
        text.append(a);
      }
    }
    const files = fileRows(x, r);
    const encl = x.enclosures.length;
    q('[data-trp-mine-files-title]').textContent = [x.memoFileId ? 'Memo' : '', encl ? plural(encl, 'Enclosure') : ''].filter(Boolean).join(' and ') || 'What Was Sent';
    q('[data-trp-mine-files]').replaceChildren(...files);
    q('[data-trp-mine-notes-wrap]').hidden = !x.notes;
    q('[data-trp-mine-notes]').textContent = x.notes ?? '';

    // The dates: receipt (To only) and response.
    const dates: HTMLElement[] = [];
    const li = (text: string, tone?: string) => {
      const el = document.createElement('li');
      el.textContent = text;
      if (tone) el.dataset.tone = tone;
      dates.push(el);
    };
    // Receipt, until they've confirmed (or someone recorded it for them); then only what's still ahead.
    if (isTo && x.ackDue && !mine.confirmedAt) li(receiptOverdue(x, me) ? `Receipt was due ${day(x.ackDue)}; please confirm now` : `Confirm receipt by ${day(x.ackDue)}`, receiptOverdue(x, me) ? 'warning' : undefined);
    if (isTo && !next) li(x.responseDue ? `Response due ${day(x.responseDue)}` : 'No response date was set');
    // How to answer it (a reviewer asked): to the sender, who records it here.
    // With the sender's address as text, to copy (2026-10-29, the second traps audit: no way to reach them was given).
    if (isTo && !x.response && !x.closedAt) li(`To respond, reply to the transmittal email or write to ${x.from}${orgOf(x.from) ? ` (${orgOf(x.from)})` : ''} at ${emailOf(x.from)}; they record it on this transmittal`);
    else if (isTo && x.response) li('Your response is recorded on this transmittal');
    else if (!isTo) li('You’re copied: no receipt or response is owed');
    if (next) li(`Superseded by ${transmittalNumber(next)} ${day(next.sentAt)}`);
    else if (x.closedAt) li(`Closed by the sender ${day(x.closedAt)}`);
    q('[data-trp-dates]').replaceChildren(...dates);

    // One button. Recorded on their behalf still offers it: their own confirmation replaces the sender's note.
    const self = !!mine.confirmedAt && !mine.recordedBy;
    q('[data-trp-confirm-wrap]').hidden = self || !!x.closedAt;
    q('[data-trp-confirm]').hidden = !isTo;
    q('[data-trp-confirm-cc]').hidden = isTo;
    q('[data-trp-confirm-hint]').textContent = mine.recordedBy
      ? `${mine.recordedBy} recorded your receipt ${dayTime(mine.confirmedAt)}. Confirm it yourself if you like.`
      : isTo
        ? 'Recorded as you, with the time.'
        : 'Optional for Cc recipients. Recorded as you, with the time.';
    q('[data-trp-confirmed]').hidden = !self;
    q('[data-trp-confirmed-text]').textContent = self ? `Confirmed ${dayTime(mine.confirmedAt)}. Recorded as you.` : '';
    q('[data-trp-recipient]').hidden = false;
  }

  function confirmMine(): void {
    if (!t) return;
    if (t.to.includes(me)) confirmReceipt(planID, t.id);
    else confirmCcReceipt(planID, t.id);
    pushAlert(`Receipt of ${num()} confirmed.`, 'success');
  }
  q('[data-trp-confirm]').addEventListener('click', confirmMine);
  q('[data-trp-confirm-cc]').addEventListener('click', confirmMine);

  function drawCrumbs(x: Transmittal | null, recipient: boolean, planName: string, elementName: string): void {
    const items = document.querySelector<HTMLElement>('.breadcrumbs__items');
    if (!items) return;
    const links = [...items.querySelectorAll<HTMLAnchorElement>('a.breadcrumb-item')];
    const [rootLink, planLink, elLink] = links;
    if (rootLink && recipient) {
      rootLink.textContent = 'Sent to You';
      rootLink.href = withBase('/prototypes/plans-repo/inbox/');
    }
    if (planLink && elLink) {
      if (recipient || !x) {
        // A recipient outside the plan sees only what was sent to them.
        for (const link of [planLink, elLink]) {
          link.nextElementSibling?.remove();
          link.remove();
        }
      } else {
        planLink.textContent = planName;
        planLink.href = PLAN_VIEW_HREF(planID);
        elLink.textContent = elementName;
        elLink.href = ELEMENT_HREF(planID, x.elementId);
      }
    }
    const current = items.querySelector('[aria-current="page"]');
    if (current) current.textContent = x ? num() : 'Transmittal';
  }

  // ── Draw ──
  let opened = false;
  let crumbsDone = false;
  function draw(): void {
    try {
      repo = getRepo(planID);
    } catch {
      repo = null;
    }
    rec = repo ? recordsFor(planID) : null;
    t = rec?.transmittals.find((x) => x.id === id) ?? null;
    const member = repo ? membersOf(repo).find((m) => m.name === me) : undefined;
    const isMember = !!member && member.role !== 'Guest';
    const isRecipient = !!t?.sentAt && (t.to.includes(me) || t.cc.includes(me));
    canRecord = isMember;
    const view: 'sender' | 'recipient' | 'none' = t && isMember ? 'sender' : t && isRecipient ? 'recipient' : 'none';
    const plan = repo ? latestVersion(repo).plan : null;
    const planName = plan?.PlanName ?? 'Plan';
    const elementName = (t && plan ? flattenPlan(plan.Elements).find(({ element }) => element.PlanElementID === t!.elementId)?.element.PlanElementName : '') ?? 'Deliverable';

    if (!crumbsDone) {
      drawCrumbs(view === 'none' ? null : t, view === 'recipient', planName, elementName ?? '');
      crumbsDone = true;
    }
    q('[data-trp-sender]').hidden = true;
    q('[data-trp-recipient]').hidden = true;
    q('[data-trp-line]').hidden = true;
    q('[data-trp-missing]').hidden = view !== 'none';
    for (const n of ['edit', 'delete', 'send', 'deliverable']) pageAct(n)!.hidden = true;

    if (view === 'none' || !t || !rec) {
      // A member looking for one that isn't there (a deleted draft) is told so; anyone else, only that it isn't theirs.
      const gone = !t && isMember;
      const empty = q('[data-trp-missing]');
      const emptyTitle = empty.querySelector('.esa-empty-state__title');
      const emptyText = empty.querySelector('.esa-empty-state__description');
      if (emptyTitle) emptyTitle.textContent = gone ? 'Transmittal Not Found' : 'Not Sent to You';
      if (emptyText) emptyText.textContent = gone ? 'Open the deliverable to see its sends.' : 'Open it from the email it came in.';
      if (titleText) titleText.textContent = gone ? 'Transmittal Not Found' : 'Not Sent to You';
      document.title = 'Transmittal | Beacon';
      titleBadges?.replaceChildren();
      return;
    }
    const status = transmittalStatus(t);
    if (titleText) titleText.textContent = `${num()} ${t.subject}`;
    document.title = `${num()} ${t.subject} | ${planName} | Beacon`;
    titleBadges?.replaceChildren(...(t.purpose ? [badge(t.purpose, 'neutral', 'sm')] : []));

    if (view === 'sender') {
      titleBadges?.append(badge(status === 'Draft' ? 'Not Sent' : status, TRANSMITTAL_STATUS_VARIANT[status], 'sm'));
      drawSender(t, rec, elementName ?? '');
      const draft = status === 'Draft';
      pageAct('edit')!.hidden = !(draft && canRecord);
      pageAct('delete')!.hidden = !(draft && canRecord);
      pageAct('send')!.hidden = !(draft && canRecord);
      const deliverable = pageAct('deliverable')!;
      deliverable.hidden = false;
      deliverable.querySelector('a')!.href = ELEMENT_HREF(planID, t.elementId);
    } else {
      const state = receiptState(t, me);
      if (state.confirmed) titleBadges?.append(badge(t.receipts[me]?.recordedBy ? 'Recorded' : 'Confirmed', t.receipts[me]?.recordedBy ? 'info' : 'success', 'sm'));
      drawRecipient(t, rec, planName);
    }
    // Opened while signed in: logged once, never receipt.
    if (!opened && isRecipient) {
      opened = true;
      if (!t.receipts[me]?.openedAt) openTransmittal(planID, t.id);
    }
  }

  // ── Record Receipt ──
  const receiptDialog = q<DialogEl>('[data-trp-receipt-dialog]');
  const receiptPick = docPicker(q<SelectEl>('[data-trp-receipt-pick]'), q('[data-trp-receipt-upload]'), 'None');
  let receiptFor = '';
  async function openRecordReceipt(name: string): Promise<void> {
    if (!t) return;
    await customElements.whenDefined('esa-select');
    receiptFor = name;
    receiptDialog.heading = `Record Receipt for ${name}`;
    q('[data-trp-receipt-lede]').textContent = `For a recipient without a Beacon account, or one who confirmed by email or phone. It reads “Recorded by ${me}”, never as ${firstName(name)}’s own confirmation.`;
    receiptPick.fill(elementFiles());
    receiptDialog.open = true;
  }
  q('[data-trp-receipt-cancel]').addEventListener('click', () => (receiptDialog.open = false));
  q('[data-trp-receipt-save]').addEventListener('click', () => {
    if (!t || !receiptFor) return;
    const pick = receiptPick.value();
    const evidence = pick.upload ? fileUpload(planID, t.elementId, pick.upload, { note: `${receiptFor} confirmed receipt of ${num()}`, direction: 'Received', agency: agencyFor(planID, t.elementId, [receiptFor]) }) : pick.fileId;
    recordReceiptFor(planID, t.id, receiptFor, evidence);
    receiptDialog.open = false;
    pushAlert(`Receipt recorded for ${receiptFor}.`, 'success');
  });

  // ── Record Response ──
  const responseDialog = q<DialogEl>('[data-trp-response-dialog]');
  const responseText = q<FieldEl>('[data-trp-response-text]');
  const responseOutcome = q<SelectEl>('[data-trp-outcome-select]');
  responseOutcome.addEventListener('change', () => (responseOutcome.errorText = ''));
  const responsePick = docPicker(q<SelectEl>('[data-trp-response-pick]'), q('[data-trp-response-upload]'), 'None');
  // The day it came back (2026-10-29, the agency-side pass): a letter or an email recorded days later keeps its own
  // date, so a response that arrived on time doesn't read late, and one that arrived late says so.
  const responseOn = q<FieldEl & { min: string; max: string }>('[data-trp-response-on]');
  q('[data-trp-act="respond"]').addEventListener('click', async () => {
    if (!t) return;
    await Promise.all(['esa-select', 'esa-textarea', 'esa-date-picker'].map((n) => customElements.whenDefined(n)));
    responseOn.min = t.sentAt ? todayIso(new Date(t.sentAt)) : '';
    responseOn.max = todayIso();
    responseOn.value = todayIso();
    responseOn.errorText = '';
    responseDialog.heading = `Record Response to ${num()}`;
    q('[data-trp-response-lede]').textContent = `What came back from ${names([...new Set(t.to.map((n) => orgOf(n) || n))])}: comments, a letter, an acceptance. Receipt is separate and stays as it is.`;
    responseText.value = '';
    responseText.errorText = '';
    responseOutcome.options = RESPONSE_OUTCOMES.map((o) => ({ value: o, label: o }));
    // A draft out for comment usually comes back with comments; anything else asks.
    responseOutcome.value = /comment|information/i.test(t.purpose) ? 'Comments Only' : '';
    responseOutcome.errorText = '';
    responsePick.fill(elementFiles());
    responseDialog.open = true;
    requestAnimationFrame(() => responseText.focus());
  });
  q('[data-trp-response-cancel]').addEventListener('click', () => (responseDialog.open = false));
  q('[data-trp-response-save]').addEventListener('click', () => {
    if (!t) return;
    const text = (responseText.value ?? '').trim();
    responseText.errorText = text ? '' : 'Say what came back, in a line.';
    const outcome = String(responseOutcome.value ?? '') as ResponseOutcome | '';
    responseOutcome.errorText = outcome ? '' : 'Choose what they decided.';
    const on = responseOn.value ?? '';
    responseOn.errorText = !on ? 'Give the day it came back.' : on > todayIso() ? 'It can’t come back after today.' : responseOn.min && on < responseOn.min ? `It went out ${day(responseOn.min)}; it can’t come back before that.` : '';
    if (!text || !outcome || responseOn.errorText) return;
    const pick = responsePick.value();
    const fileId = pick.upload ? fileUpload(planID, t.elementId, pick.upload, { note: `Response to ${num()}`, direction: 'Received', agency: agencyFor(planID, t.elementId, t.to) }) : pick.fileId;
    recordResponse(planID, t.id, text, fileId, on, outcome);
    responseDialog.open = false;
    const next = outcome === 'Revisions Requested' || outcome === 'Rejected' ? ' The deliverable stays open; Revise and Resubmit sends the revised version.' : ACCEPTS.has(outcome) ? ' Record Completion closes out the deliverable.' : '';
    pushAlert(`Response to ${num()} recorded: ${outcome}.${next}`, 'success', 6000);
  });

  // ── Revise and Resubmit: a new transmittal superseding this one (or the one already started) ──
  q('[data-trp-act="resubmit"]').addEventListener('click', async () => {
    if (!t) return;
    const started = resubmittalDraftOf(recordsFor(planID), t);
    const result = await editDialog.open(started ? { planID, elementId: t.elementId, transmittalId: started.id } : { planID, elementId: t.elementId, resubmitOf: t.id });
    if (!result) return;
    const made = recordsFor(planID).transmittals.find((y) => y.id === result.id);
    if (result.kind === 'sent') location.assign(`${TRANSMITTAL_HREF(planID, result.id)}&sent=1`);
    else pushAlert(`${made ? transmittalNumber(made) : 'The resubmittal'} saved as a draft.`, 'success');
  });

  // ── Close ──
  q('[data-trp-act="close"]').addEventListener('click', async () => {
    if (!t) return;
    const ok = await confirm({ header: `Close ${num()}?`, text: 'It reads as Closed and no more reminders go out. The record, its receipts and its response stay as they are.', confirmButtonLabel: 'Close Transmittal', cancelButtonLabel: 'Keep Open' });
    if (!ok) return;
    closeTransmittal(planID, t.id);
    pushAlert(`${num()} closed.`, 'success');
  });

  // ── A draft's actions ──
  const afterDialog = (result: Awaited<ReturnType<typeof editDialog.open>>) => {
    if (!result) return;
    if (result.kind === 'sent') announceSent();
    else pushAlert(`${num()} saved.`, 'success');
  };
  function announceSent(): void {
    const x = recordsFor(planID).transmittals.find((y) => y.id === id);
    if (!x) return;
    pushAlert(`${transmittalNumber(x)} sent.${x.to.length && x.ackDue ? ` ${names(x.to)} ${x.to.length > 1 ? 'are' : 'is'} asked to confirm receipt by ${day(x.ackDue)}.` : ''}`, 'success', 6000);
  }
  pageAct('edit')?.addEventListener('click', async () => {
    if (t) afterDialog(await editDialog.open({ planID, elementId: t.elementId, transmittalId: t.id }));
  });
  pageAct('send')?.addEventListener('click', async () => {
    if (!t || !repo) return;
    if (sendProblems(t).length) return afterDialog(await editDialog.open({ planID, elementId: t.elementId, transmittalId: t.id, check: true }));
    const ackDays = configOf(repo).ackDays;
    if (!(await confirm({ header: `Send ${num()}?`, text: sendMessage(t, ackDays), confirmButtonLabel: 'Send', cancelButtonLabel: 'Keep Editing' }))) return;
    sendTransmittal(planID, t.id, ackDays);
    addGuests(planID, [...t.to, ...t.cc]);
    announceSent();
  });
  pageAct('delete')?.addEventListener('click', async () => {
    if (!t) return;
    if (!(await confirm({ header: `Delete ${num()}?`, text: 'It goes. Nothing was sent, so no one is told.', confirmButtonLabel: 'Delete Transmittal', cancelButtonLabel: 'Keep Draft', color: 'warn' }))) return;
    const elementId = t.elementId;
    deleteDraftTransmittal(planID, t.id);
    location.assign(ELEMENT_HREF(planID, elementId));
  });

  // Records saved anywhere (here, or a recipient confirming in another tab) redraw the page.
  let queued = false;
  const soon = () => {
    if (queued) return;
    queued = true;
    queueMicrotask(() => {
      queued = false;
      draw();
    });
  };
  window.addEventListener('bcn-plan-records', soon);
  window.addEventListener('storage', soon);

  draw();
  // Just sent (from the dialog or a row): say so once, and drop the flag so a reload doesn't repeat it.
  if (params.get('sent') === '1') {
    announceSent();
    params.delete('sent');
    history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
  }
}
