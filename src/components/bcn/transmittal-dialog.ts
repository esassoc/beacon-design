// <BcnTransmittalDialog>'s runtime (2026-10-28): New Transmittal and Edit Draft. open() resolves what came of it: a
// draft saved, a transmittal sent (both with its id), or nothing (cancelled). Writes go through plan-records.ts
// (newTransmittal, updateTransmittal, sendTransmittal); an uploaded memo is filed on the deliverable as Correspondence
// first (addFile, linkDocument), as the proposal has it. The caller decides where to go next (the transmittal page,
// after a send).
//
// Also the pieces the transmittal page shares: the document picker ("one of its documents, or a new upload"), filing an
// upload as Correspondence, the checks a send needs, and the confirm's words.

import { currentUserName } from '../../lib/planning/plan-server';
import { addGuests, attributesAt, configOf, flattenPlan, getRepo, latestVersion, orgOf, PLAN_DIRECTORY } from '../../lib/planning/plan-repo';
import {
  addFile,
  documentsFor,
  fileById,
  linkDocument,
  newTransmittal,
  recordsFor,
  sendTransmittal,
  todayIso,
  transmittalNumber,
  updateTransmittal,
  type PlanFile,
  type Transmittal,
} from '../../lib/planning/plan-records';
import { fillIcons } from '../../lib/planning/icons';
import { day } from './element-module';

export type TransmittalDialogResult = { kind: 'saved'; id: string } | { kind: 'sent'; id: string } | null;

type FieldEl = HTMLElement & { value: string; errorText: string; helpText: string };
type SelectEl = HTMLElement & { value: string | string[]; options: { value: string; label: string }[]; errorText: string };
type ComboEl = HTMLElement & { value: string | string[]; options: { value: string; label: string }[]; errorText: string };
type CheckEl = HTMLElement & { checked: boolean; label: string; disabled: boolean };
type DialogEl = HTMLElement & { open: boolean; heading: string };
type ConfirmEl = HTMLElement & { open: boolean; heading: string; message: string; confirmLabel: string; cancelLabel: string; variant: string; updateComplete?: Promise<unknown> };

const UPLOAD = '__upload';
const DAY_MS = 86_400_000;

// ── Shared: words ─────────────────────────────────────────────────────────────────────────────────────────────────

/** "Rowan Hale", "Jordan Reyes and Casey Lin", "Jordan Reyes, Casey Lin and Rowan Hale". */
export function names(list: readonly string[]): string {
  if (list.length <= 1) return list[0] ?? '';
  return `${list.slice(0, -1).join(', ')} and ${list.at(-1)}`;
}
/** "Rowan Hale (NMFS)". */
export const withOrg = (name: string) => (orgOf(name) ? `${name} (${orgOf(name)})` : name);
/** "for comment", "for review", "as final": a purpose inside a sentence. */
export const purposePhrase = (purpose: string) => (!purpose ? '' : /^for /i.test(purpose) ? purpose.toLowerCase() : `as ${purpose.toLowerCase()}`);
/** "Draft 2, Version 3"; a link has neither. */
export const revisionText = (revision: string | undefined, version: number | undefined) => [revision, version ? `Version ${version}` : ''].filter(Boolean).join(', ');
/** An ISO day this many days from today. */
export const daysFromToday = (days: number) => new Date(Date.parse(todayIso()) + days * DAY_MS).toISOString().slice(0, 10);

/** What a send still needs: at least one To, a purpose, and something to send (an enclosure or a memo). */
export function sendProblems(t: Pick<Transmittal, 'subject' | 'purpose' | 'to' | 'enclosures' | 'memoFileId'>): string[] {
  const out: string[] = [];
  if (!t.subject.trim()) out.push('a subject');
  if (!t.to.length) out.push('a To recipient');
  if (!t.purpose) out.push('a purpose');
  if (!t.enclosures.length && !t.memoFileId) out.push('an enclosure or a memo');
  return out;
}

/** The send confirm's message: final, locked, and who owes what by when. */
export function sendMessage(t: Pick<Transmittal, 'to' | 'responseDue'>, ackDays: number): string {
  const ackDue = day(daysFromToday(ackDays));
  const owe = t.to.length ? ` ${names(t.to)} ${t.to.length > 1 ? 'are' : 'is'} asked to confirm receipt by ${ackDue}${t.responseDue ? ` and to respond by ${day(t.responseDue)}` : ''}.` : '';
  return `Sent is final: it can't be edited or recalled, and its enclosures lock at the versions sent. A correction is a new transmittal.${owe}`;
}

// ── Shared: filing an upload, and the agency it came from or went to ─────────────────────────────────────────────

/** The agency on the other side of a send: the first recipient's, when it's one of the plan's agencies, else the
 *  element's Lead Agency. */
export function agencyFor(planID: string, elementId: string, people: readonly string[]): string {
  const repo = getRepo(planID);
  const agencies = configOf(repo).agencies;
  const theirs = people.map(orgOf).find((o) => o && agencies.includes(o));
  if (theirs) return theirs;
  const lead = attributesAt(repo)[elementId]?.values?.['lead-agency'];
  return typeof lead === 'string' ? lead : '';
}

/** A new file, filed on the element as Correspondence: a cover letter sent, or a reply received. Returns its id. */
export function fileUpload(planID: string, elementId: string, file: File, opts: { note: string; direction: 'Sent' | 'Received'; agency: string }): string {
  const f = addFile(planID, { name: file.name, size: file.size, revision: 'Final' });
  linkDocument(planID, { fileId: f.id, elementId, type: 'Correspondence', date: todayIso(), note: opts.note, correspondence: { agency: opts.agency, direction: opts.direction, letterDate: todayIso() } });
  return f.id;
}

// ── Shared: one of its documents, or a new upload ────────────────────────────────────────────────────────────────

export interface DocPick {
  fileId?: string;
  upload?: File;
}
export interface DocPicker {
  /** The element's files to offer; `value` preselects one. */
  fill(files: PlanFile[], value?: string): void;
  value(): DocPick;
  /** A short string for a dirty check. */
  key(): string;
}

/** An esa-select of the element's files (with None first and Upload a New File last) over an esa-file-upload that the
 *  last choice reveals. The upload is replaced fresh on every fill, so nothing from a cancelled session lingers. Fill it
 *  once esa-select is defined. */
export function docPicker(select: SelectEl, initialUpload: HTMLElement, noneLabel: string, onChange?: () => void): DocPicker {
  let upload = initialUpload;
  let picked: File | null = null;
  const bind = (el: HTMLElement) =>
    el.addEventListener('change', (e) => {
      picked = (e as CustomEvent<{ files: File[] }>).detail?.files?.[0] ?? null;
      onChange?.();
    });
  bind(upload);
  const sync = () => {
    upload.hidden = select.value !== UPLOAD;
    onChange?.();
  };
  select.addEventListener('change', sync);
  return {
    fill(files, value) {
      const fresh = upload.cloneNode(false) as HTMLElement;
      upload.replaceWith(fresh);
      upload = fresh;
      bind(upload);
      picked = null;
      select.options = [{ value: '', label: noneLabel }, ...files.map((f) => ({ value: f.id, label: f.name })), { value: UPLOAD, label: 'Upload a New File' }];
      select.value = value ?? '';
      upload.hidden = true;
    },
    value() {
      const v = String(select.value ?? '');
      if (v === UPLOAD) return picked ? { upload: picked } : {};
      return v ? { fileId: v } : {};
    },
    key() {
      const v = String(select.value ?? '');
      return v === UPLOAD ? `upload:${picked?.name ?? ''}` : v;
    },
  };
}

// ── The dialog ───────────────────────────────────────────────────────────────────────────────────────────────────

export interface TransmittalDialog {
  /** New (no transmittalId) or a draft's edit. `check` shows what a send still needs as it opens (a row's Send on an
   *  incomplete draft lands here). */
  open(opts: { planID: string; elementId: string; transmittalId?: string; check?: boolean; resubmitOf?: string }): Promise<TransmittalDialogResult>;
}

export function setupTransmittalDialog(root: HTMLElement): TransmittalDialog {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-tmd-dialog]');
  const lede = q<HTMLElement>('[data-tmd-lede]');
  const subject = q<FieldEl>('[data-tmd="subject"]');
  const purpose = q<SelectEl>('[data-tmd="purpose"]');
  const due = q<FieldEl>('[data-tmd="due"]');
  const to = q<ComboEl>('[data-tmd="to"]');
  const cc = q<ComboEl>('[data-tmd="cc"]');
  const notes = q<FieldEl>('[data-tmd="notes"]');
  const fileList = q<HTMLElement>('[data-tmd-enclosures]');
  const noFiles = q<HTMLElement>('[data-tmd-no-files]');
  const enclosureError = q<HTMLElement>('[data-tmd-enclosure-error]');
  const errorEl = q<HTMLElement>('[data-tmd-error]');
  const resubmitBox = q<HTMLElement>('[data-tmd-resubmit]');
  const resubmitText = q<HTMLElement>('[data-tmd-resubmit-text]');
  const confirmEl = q<ConfirmEl>('[data-tmd-confirm]');
  const fileTpl = q<HTMLTemplateElement>('template[data-tmd-tpl="enclosure"]');
  fillIcons(root);

  // The open session.
  let planID = '';
  let elementId = '';
  let editing: Transmittal | null = null;
  /** The send a resubmittal replaces (Revise and Resubmit), new or a draft of one. */
  let replaces: Transmittal | null = null;
  let number = '';
  let files: PlanFile[] = [];
  let selected = new Set<string>();
  let initial = '';
  let busy = false;
  let settled = true;
  let checking = false;
  let settle: (r: TransmittalDialogResult) => void = () => undefined;

  const memo = docPicker(q<SelectEl>('[data-tmd="memo"]'), q<HTMLElement>('[data-tmd-upload="memo"]'), 'No Memo', () => {
    drawFiles();
    if (checking) validate(true);
  });

  const list = (el: ComboEl) => (Array.isArray(el.value) ? el.value : el.value ? [el.value] : []).map(String);

  // ── Recipients: To and Cc never share a person ──
  const PEOPLE = [...PLAN_DIRECTORY].sort((a, b) => a.localeCompare(b));
  const option = (n: string) => ({ value: n, label: withOrg(n) });
  function syncPeople(): void {
    const toNames = list(to);
    const ccNames = list(cc);
    to.options = PEOPLE.filter((n) => !ccNames.includes(n)).map(option);
    cc.options = PEOPLE.filter((n) => !toNames.includes(n)).map(option);
  }
  to.addEventListener('change', () => {
    syncPeople();
    if (checking) validate(true);
  });
  cc.addEventListener('change', syncPeople);
  purpose.addEventListener('change', () => checking && validate(true));
  subject.addEventListener('input', () => checking && validate(true));

  // ── Enclosures ──
  function drawFiles(): void {
    const memoId = memo.value().fileId;
    if (memoId) selected.delete(memoId);
    noFiles.hidden = files.length > 0;
    fileList.hidden = files.length === 0;
    fileList.replaceChildren(
      ...files.map((f) => {
        const row = fileTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
        const check = row.querySelector<CheckEl>('[data-file-check]')!;
        const isMemo = f.id === memoId;
        check.label = f.name;
        check.checked = selected.has(f.id);
        check.disabled = isMemo;
        row.toggleAttribute('data-memo', isMemo);
        const latest = f.versions.at(-1);
        // A resubmittal says which of these went last time, at what version: the revised one should be newer.
        const before = replaces?.enclosures.find((e) => e.fileId === f.id);
        const was = before ? (before.version === latest?.number ? `. Unchanged since ${transmittalNumber(replaces!)}` : `. ${transmittalNumber(replaces!)} sent Version ${before.version}`) : '';
        row.querySelector('[data-file-meta]')!.textContent = isMemo ? 'The Memo' : `${revisionText(f.revision, latest?.number)}${was}`;
        row.querySelector('[data-file-date]')!.textContent = day(latest?.at ?? f.addedAt);
        const toggle = (on: boolean) => {
          if (on) selected.add(f.id);
          else selected.delete(f.id);
          if (checking) validate(true);
        };
        check.addEventListener('change', () => toggle(check.checked));
        // The whole row ticks; the box ticks itself.
        row.addEventListener('click', (e) => {
          if (isMemo || e.composedPath().includes(check)) return;
          check.checked = !check.checked;
          toggle(check.checked);
        });
        return row;
      })
    );
  }

  // ── The form as data ──
  function form() {
    return {
      subject: (subject.value ?? '').trim(),
      purpose: String(purpose.value ?? ''),
      to: list(to),
      cc: list(cc),
      memo: memo.value(),
      enclosures: files.filter((f) => selected.has(f.id)).map((f) => f.id),
      responseDue: due.value || '',
      notes: (notes.value ?? '').trim(),
    };
  }
  const snapshot = () => JSON.stringify({ ...form(), memo: memo.key() });
  const dirty = () => snapshot() !== initial;

  /** For a send, everything; for a draft, a subject. Marks the fields; true when it may go ahead. */
  function validate(forSend: boolean): boolean {
    const f = form();
    subject.errorText = f.subject ? '' : 'Give it a subject.';
    if (!forSend) {
      to.errorText = purpose.errorText = '';
      enclosureError.hidden = true;
      return !!f.subject;
    }
    to.errorText = f.to.length ? '' : 'Add at least one To recipient.';
    purpose.errorText = f.purpose ? '' : 'Choose a purpose.';
    const hasMemo = !!(f.memo.fileId || f.memo.upload);
    enclosureError.hidden = f.enclosures.length > 0 || hasMemo;
    // The footer says what's still missing, and goes once nothing is.
    const missing = sendProblems({ ...f, enclosures: f.enclosures.map((fileId) => ({ fileId, version: 0 })), memoFileId: f.memo.fileId ?? (f.memo.upload ? UPLOAD : undefined) });
    errorEl.textContent = missing.length ? `Before it goes, it needs ${names(missing)}.` : '';
    errorEl.hidden = !missing.length;
    return !missing.length;
  }

  /** Writes the form: a new draft or the draft's changes, with an uploaded memo filed first. Returns its id. */
  function persist(): string {
    const f = form();
    const rec = recordsFor(planID);
    const body = {
      subject: f.subject,
      purpose: f.purpose,
      // A resubmittal goes to the same people as the send it replaces (2026-10-30, Andy: "same recipients").
      to: replaces ? [...replaces.to] : f.to,
      cc: replaces ? [...replaces.cc] : f.cc,
      memoFileId: f.memo.fileId,
      enclosures: f.enclosures.map((fileId) => {
        const file = fileById(rec, fileId);
        return { fileId, version: file?.versions.at(-1)?.number ?? 1, revision: file?.revision };
      }),
      responseDue: f.responseDue || undefined,
      notes: f.notes || undefined,
    };
    let id: string;
    let num: string;
    if (editing) {
      updateTransmittal(planID, editing.id, body);
      id = editing.id;
      num = transmittalNumber(editing);
    } else {
      const t = newTransmittal(planID, { ...body, elementId, from: currentUserName(), ...(replaces ? { supersedes: replaces.id } : {}) });
      id = t.id;
      num = transmittalNumber(t);
    }
    if (f.memo.upload) {
      const memoFileId = fileUpload(planID, elementId, f.memo.upload, { note: `Cover letter for ${num}`, direction: 'Sent', agency: agencyFor(planID, elementId, f.to) });
      updateTransmittal(planID, id, { memoFileId });
    }
    return id;
  }

  // ── Asking (esa-confirm-dialog as a promise; its buttons centered, as the plan page's guard) ──
  void customElements.whenDefined('esa-confirm-dialog').then(async () => {
    await confirmEl.updateComplete;
    const sheet = new CSSStyleSheet();
    sheet.replaceSync('.esa-confirm-dialog__footer { justify-content: center; }');
    if (confirmEl.shadowRoot) confirmEl.shadowRoot.adoptedStyleSheets = [...confirmEl.shadowRoot.adoptedStyleSheets, sheet];
  });
  const ask = (heading: string, message: string, confirmLabel: string, cancelLabel: string, variant = 'default'): Promise<boolean> =>
    new Promise((resolve) => {
      Object.assign(confirmEl, { heading, message, confirmLabel, cancelLabel, variant });
      confirmEl.addEventListener('resolved', (e) => resolve(!!(e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed), { once: true });
      confirmEl.open = true;
    });

  function close(result: TransmittalDialogResult): void {
    busy = false;
    settled = true;
    dialog.open = false;
    settle(result);
  }
  const askDiscard = () => ask(editing ? 'Discard Your Changes?' : 'Discard This Transmittal?', editing ? `Nothing you changed in ${number} is saved.` : 'Nothing is saved or sent.', 'Discard', 'Keep Editing', 'danger');
  async function cancel(): Promise<void> {
    if (busy) return;
    if (dirty() && !(await askDiscard())) return;
    close(null);
  }
  q<HTMLElement>('[data-tmd-cancel]').addEventListener('click', () => void cancel());
  // The dialog's own exits (its X, Escape, the backdrop) close it before anyone can ask: with changes, it comes back and
  // asks; without, it's a cancel.
  dialog.addEventListener('close', async (e) => {
    if (e.target !== dialog || settled || busy) return;
    if (!dirty()) return close(null);
    dialog.open = true;
    if (await askDiscard()) close(null);
  });

  const fail = (err: unknown) => {
    busy = false;
    errorEl.textContent = (err as Error)?.message || 'Not saved. Try again.';
    errorEl.hidden = false;
  };

  q<HTMLElement>('[data-tmd-save]').addEventListener('click', () => {
    if (busy) return;
    errorEl.hidden = true;
    if (!validate(false)) return;
    busy = true;
    try {
      close({ kind: 'saved', id: persist() });
    } catch (err) {
      fail(err);
    }
  });

  q<HTMLElement>('[data-tmd-send]').addEventListener('click', async () => {
    if (busy) return;
    errorEl.hidden = true;
    checking = true;
    if (!validate(true)) return;
    const f = form();
    const ackDays = configOf(getRepo(planID)).ackDays;
    busy = true;
    const ok = await ask(`Send ${number}?`, sendMessage({ to: f.to, responseDue: f.responseDue || undefined }, ackDays), 'Send', 'Keep Editing');
    if (!ok) {
      busy = false;
      return;
    }
    try {
      const id = persist();
      sendTransmittal(planID, id, ackDays);
      addGuests(planID, [...f.to, ...f.cc]);
      close({ kind: 'sent', id });
    } catch (err) {
      fail(err);
    }
  });

  return {
    async open(opts) {
      await Promise.all(['esa-select', 'esa-combobox', 'esa-text-field', 'esa-date-picker', 'esa-checkbox', 'esa-textarea'].map((t) => customElements.whenDefined(t)));
      planID = opts.planID;
      elementId = opts.elementId;
      const repo = getRepo(planID);
      const config = configOf(repo);
      const rec = recordsFor(planID);
      editing = opts.transmittalId ? (rec.transmittals.find((t) => t.id === opts.transmittalId && !t.sentAt) ?? null) : null;
      const replacesId = editing?.supersedes ?? (editing ? undefined : opts.resubmitOf);
      replaces = replacesId ? (rec.transmittals.find((t) => t.id === replacesId && !!t.sentAt) ?? null) : null;
      const element = flattenPlan(latestVersion(repo).plan.Elements).find(({ element: e }) => e.PlanElementID === elementId)?.element;
      const values = attributesAt(repo)[elementId]?.values ?? {};
      const docs = documentsFor(rec, elementId).filter((d) => d.file.kind === 'file');
      files = docs.map((d) => d.file);
      number = editing ? transmittalNumber(editing) : transmittalNumber({ number: Math.max(0, ...rec.transmittals.map((t) => t.number)) + 1 });
      const me = currentUserName();

      purpose.options = (editing?.purpose && !config.purposes.includes(editing.purpose) ? [editing.purpose, ...config.purposes] : config.purposes).map((p) => ({ value: p, label: p }));
      const period = Number(values['review-period']);
      due.helpText = period > 0 ? `Defaults to its Review Period, ${period} days` : '';
      if (editing) {
        dialog.heading = `Edit ${number}`;
        lede.textContent = `A draft by ${withOrg(editing.createdBy)} for ${element?.PlanElementName ?? 'this deliverable'}. Nothing goes out until it's sent.`;
        subject.value = editing.subject;
        purpose.value = editing.purpose;
        to.value = [...editing.to];
        cc.value = [...editing.cc];
        due.value = editing.responseDue ?? '';
        notes.value = editing.notes ?? '';
        selected = new Set(editing.enclosures.map((e) => e.fileId).filter((id) => files.some((f) => f.id === id)));
        memo.fill(files, editing.memoFileId && files.some((f) => f.id === editing!.memoFileId) ? editing.memoFileId : '');
      } else if (replaces) {
        // Revise and Resubmit: the same people, purpose and notes' place, a fresh due date, the revised document.
        const prior = replaces;
        dialog.heading = 'Revise and Resubmit';
        lede.textContent = `${number} from ${withOrg(me)}, resubmitting ${element?.PlanElementName ?? 'this deliverable'}. Nothing goes out until it's sent.`;
        subject.value = prior.subject.replace(/,\s*(revised|resubmittal|revision \d+)$/i, '') + ', revised';
        purpose.value = prior.purpose;
        to.value = [...prior.to];
        cc.value = [...prior.cc];
        due.value = period > 0 ? daysFromToday(period) : '';
        notes.value = '';
        // The revised work: what went last time (at its newest version), else the newest work on the deliverable.
        const again = prior.enclosures.map((e) => e.fileId).filter((id) => files.some((f) => f.id === id));
        const newest = docs.find((d) => d.link.type !== 'Correspondence');
        selected = new Set(again.length ? again : newest ? [newest.file.id] : []);
        memo.fill(files, '');
      } else {
        dialog.heading = 'New Transmittal';
        lede.textContent = `${number} from ${withOrg(me)}, sending ${element?.PlanElementName ?? 'this deliverable'}. Nothing goes out until it's sent.`;
        subject.value = element?.PlanElementName ?? '';
        purpose.value = '';
        const reviewer = values['agency-reviewer'];
        to.value = typeof reviewer === 'string' && reviewer ? [reviewer] : [];
        cc.value = [];
        due.value = period > 0 ? daysFromToday(period) : '';
        notes.value = '';
        // The deliverable's newest work, not its newest letter: cover letters and replies aren't what goes out.
        const newest = docs.find((d) => d.link.type !== 'Correspondence') ?? docs[0];
        selected = new Set(newest ? [newest.file.id] : []);
        memo.fill(files, '');
      }
      // What it replaces, said once above the form. Its recipients are the replaced send's, fixed (Andy, 2026-10-30):
      // the reviewers who asked for the revision are the ones who see it.
      if (replaces) {
        to.value = [...replaces.to];
        cc.value = [...replaces.cc];
      }
      for (const field of [to, cc]) {
        (field as ComboEl & { disabled?: boolean }).disabled = !!replaces;
        field.toggleAttribute('disabled', !!replaces);
      }
      to.setAttribute('help-text', replaces ? `The same as ${transmittalNumber(replaces)}: a resubmittal goes to whoever reviewed it` : 'Each confirms receipt in Beacon');
      resubmitBox.hidden = !replaces;
      if (replaces) {
        const outcome = replaces.response?.outcome;
        resubmitText.textContent = `Supersedes ${transmittalNumber(replaces)}, which came back ${outcome && outcome !== 'Comments Only' ? outcome : 'with comments'}${replaces.response ? ` on ${day(replaces.response.receivedOn ?? replaces.response.at)}` : ''}. Once this is sent, ${transmittalNumber(replaces)} reads Superseded and its recipients are pointed here. Enclose the revised version.`;
      }
      syncPeople();
      // Fields keep a previous session's errors otherwise.
      for (const el of [subject, purpose, to] as { errorText: string }[]) el.errorText = '';
      enclosureError.hidden = true;
      errorEl.hidden = true;
      checking = false;
      drawFiles();
      initial = snapshot();
      busy = false;
      settled = false;
      dialog.open = true;
      if (opts.check) {
        checking = true;
        validate(true);
      }
      requestAnimationFrame(() => subject.focus());
      return new Promise<TransmittalDialogResult>((resolve) => (settle = resolve));
    },
  };
}
