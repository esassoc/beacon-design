// <BcnCompletionDialog>'s runtime (2026-10-28, the proposal's "Completion on a deliverable"): Record Completion, and
// editing one. It asks for what the plan requires: the Result (from the plan's list), Completed On, Where It Lives (a
// document already on the element, or a link such as the SharePoint location of the final), Accepted By and a note.
// Saving writes the completion record, which sets the element Complete (plan-records.ts, recordCompletion).
//
// The level's Required to Complete fields are checked at the same moment: while any lacks a value the dialog says
// which and won't save. Field values are planned, so they're set in a draft and published; the record is Live's
// (decision 5: plans are drafted, records are not).

import type { ElementContext } from '../../lib/planning/element-context';
import type { FieldDef } from '../../lib/planning/plan-config';
import { PLAN_DIRECTORY, orgOf, type FieldValue } from '../../lib/planning/plan-repo';
import { documentsFor, recordCompletion, todayIso, type Completion, type ElementDocument } from '../../lib/planning/plan-records';
import { confirm } from '../../lib/planning/plan-page';
import { setButtonDisabled } from './plan-people';
import { day } from './element-module';

type FieldEl = HTMLElement & { value: string; errorText: string; helpText: string; max?: string; disabled: boolean };
type ListEl = HTMLElement & { value: string | string[]; options: { value: string; label: string }[]; errorText: string; helpText: string };
type DialogEl = HTMLElement & { open: boolean; heading: string };

/** Types that hold the deliverable itself, not what was said about it: the first guess for Where It Lives. */
const NOT_THE_DELIVERABLE = new Set(['Correspondence', 'Data', 'Permit']);

const empty = (v: FieldValue | undefined) => v === undefined || v === null || v === '' || (Array.isArray(v) && v.length === 0);

/** The level's Required to Complete fields that have no value on this element (as the page shows it). */
export function missingToComplete(ctx: ElementContext): FieldDef[] {
  return ctx.fields.filter(({ assign }) => assign.requiredToComplete).filter(({ def }) => empty(ctx.attrs.values?.[def.id])).map(({ def }) => def);
}

/** "A", "A and B", "A, B and C". */
export const listPhrase = (items: string[]) => (items.length < 2 ? (items[0] ?? '') : `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`);

/** A document as the picker lists it: its name, then its revision and date. */
export const documentLabel = (d: ElementDocument) => `${d.file.name} (${[d.file.revision ?? (d.file.kind === 'link' ? 'Link' : ''), day(d.link.date)].filter(Boolean).join(', ')})`;

/** The person field a level calls its agency reviewer, when it has one: the first guess for Accepted By. */
function reviewerOf(ctx: ElementContext): string {
  const field = ctx.fields.find(({ def }) => def.type === 'person' && (def.id === 'agency-reviewer' || /reviewer/i.test(def.label)));
  const v = field ? ctx.attrs.values?.[field.def.id] : undefined;
  return typeof v === 'string' ? v : '';
}

const validUrl = (s: string) => {
  try {
    const u = new URL(s);
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
};
/** A link with no label is named for where it goes: "esassoc.sharepoint.com". */
const hostOf = (s: string) => {
  try {
    return new URL(s).host;
  } catch {
    return s;
  }
};

let api: { open(ctx: ElementContext): Promise<boolean> } | null = null;

/** Opens Record Completion for the element in `ctx` (or Edit Completion, when it has one). Resolves true when a
 *  completion was saved. The page's markup must hold <BcnCompletionDialog>. */
export function openCompletionDialog(ctx: ElementContext): Promise<boolean> {
  if (!api) {
    const root = document.querySelector<HTMLElement>('[data-bcn-completion-dialog]');
    if (!root) return Promise.resolve(false);
    api = setupCompletionDialog(root);
  }
  return api.open(ctx);
}

function setupCompletionDialog(root: HTMLElement): { open(ctx: ElementContext): Promise<boolean> } {
  // The dialog lives at the body's end: the element page moves its module cards on every redraw, and a modal moved
  // while open drops out of the top layer.
  document.body.append(root);
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-cmd-dialog]');
  const lede = q<HTMLElement>('[data-cmd-lede]');
  const missingBox = q<HTMLElement>('[data-cmd-missing]');
  const missingText = q<HTMLElement>('[data-cmd-missing-text]');
  const result = q<ListEl>('[data-cmd="result"]');
  const completed = q<FieldEl>('[data-cmd="completed"]');
  const whereKind = q<ListEl>('[data-cmd="where-kind"]');
  const file = q<ListEl>('[data-cmd="file"]');
  const url = q<FieldEl>('[data-cmd="url"]');
  const label = q<FieldEl>('[data-cmd="label"]');
  const accepted = q<ListEl>('[data-cmd="accepted"]');
  const note = q<FieldEl>('[data-cmd="note"]');
  const errorEl = q<HTMLElement>('[data-cmd-error]');
  const saveWrap = q<HTMLElement>('[data-cmd-save]');
  const saveLabel = q<HTMLElement>('[data-cmd-save-label]');
  const ready = Promise.all(['esa-dialog', 'esa-select', 'esa-date-picker', 'esa-button-toggle', 'esa-text-field', 'esa-combobox', 'esa-textarea'].map((n) => customElements.whenDefined(n)));

  let ctx: ElementContext | null = null;
  let missing: FieldDef[] = [];
  let initial = '';
  let busy = false;
  let settled = true;
  let settle: (saved: boolean) => void = () => undefined;

  const str = (v: string | string[] | undefined | null) => String(Array.isArray(v) ? (v[0] ?? '') : (v ?? '')).trim();
  const snapshot = () => JSON.stringify([str(result.value), completed.value ?? '', str(whereKind.value), str(file.value), (url.value ?? '').trim(), (label.value ?? '').trim(), str(accepted.value), (note.value ?? '').trim()]);

  // ── Where it lives: a document or a link ──
  function drawWhere(): void {
    const kind = str(whereKind.value) || 'doc';
    q<HTMLElement>('[data-cmd-where="doc"]').hidden = kind !== 'doc';
    q<HTMLElement>('[data-cmd-where="link"]').hidden = kind !== 'link';
  }
  whereKind.addEventListener('change', drawWhere);

  // ── Accepted By: the person's organization says which side accepted it ──
  const drawAccepted = () => {
    const who = str(accepted.value);
    const org = who ? orgOf(who) : '';
    accepted.helpText = who ? (org ? `With ${org}.` : '') : 'Who accepted it, at the agency or here.';
  };
  accepted.addEventListener('change', drawAccepted);
  // Clearing the typed name clears the choice (the lego keeps a single pick otherwise).
  accepted.addEventListener('search', (e) => {
    if (!(e as CustomEvent<{ term: string }>).detail?.term) {
      accepted.value = '';
      drawAccepted();
    }
  });

  // Errors clear as their field is answered.
  for (const el of [result, completed, file, url]) el.addEventListener('change', () => (el.errorText = ''));
  url.addEventListener('input', () => (url.errorText = ''));

  function validate(): boolean {
    let ok = true;
    const need = (el: { errorText: string }, bad: boolean, text: string) => {
      el.errorText = bad ? text : '';
      if (bad) ok = false;
    };
    need(result, !str(result.value), 'Choose a result.');
    const date = completed.value ?? '';
    need(completed, !date || date > todayIso(), !date ? 'Give the date it was completed.' : 'It can’t be completed after today.');
    if (str(whereKind.value) === 'link') {
      const u = (url.value ?? '').trim();
      need(url, !validUrl(u), u ? 'Give a full link, starting with https://.' : 'Give the link.');
      file.errorText = '';
    } else {
      need(file, !str(file.value), 'Choose a document, or give a link instead.');
      url.errorText = '';
    }
    return ok;
  }

  function close(saved: boolean): void {
    busy = false;
    settled = true;
    dialog.open = false;
    settle(saved);
  }
  const dirty = () => snapshot() !== initial;
  let editing = false;
  const askDiscard = () =>
    confirm(
      editing
        ? { header: 'Discard Your Changes?', text: 'The completion stays as it was.', confirmButtonLabel: 'Discard', cancelButtonLabel: 'Keep Editing', color: 'warn' }
        : { header: 'Discard This Completion?', text: 'Nothing here is recorded.', confirmButtonLabel: 'Discard', cancelButtonLabel: 'Keep Editing', color: 'warn' }
    );
  async function cancel(): Promise<void> {
    if (busy) return;
    if (dirty() && !(await askDiscard())) return;
    close(false);
  }
  q<HTMLElement>('[data-cmd-cancel]').addEventListener('click', () => void cancel());
  // The dialog's own exits (its X, Escape, the backdrop) close it before anyone can ask: with changes, it comes back
  // and asks; without, it's a cancel.
  dialog.addEventListener('close', async (e) => {
    if (e.target !== dialog || settled || busy) return;
    if (!dirty()) return close(false);
    dialog.open = true;
    if (await askDiscard()) close(false);
  });

  saveWrap.addEventListener('click', () => {
    if (busy || !ctx || missing.length) return;
    errorEl.hidden = true;
    if (!validate()) return;
    busy = true;
    const kind = str(whereKind.value);
    const link = (url.value ?? '').trim();
    const c: Omit<Completion, 'recordedBy' | 'recordedAt'> = {
      elementId: ctx.element.PlanElementID ?? '',
      result: str(result.value),
      completedOn: completed.value,
      where: kind === 'link' ? { url: link, label: (label.value ?? '').trim() || hostOf(link) } : { fileId: str(file.value) },
      acceptedBy: str(accepted.value),
      note: (note.value ?? '').trim(),
    };
    try {
      recordCompletion(ctx.planID, c);
      close(true);
    } catch (err) {
      busy = false;
      errorEl.textContent = (err as Error)?.message || 'Not recorded. Try again.';
      errorEl.hidden = false;
    }
  });

  return {
    async open(c: ElementContext) {
      await ready;
      ctx = c;
      const name = c.element.PlanElementName ?? 'This item';
      const id = c.element.PlanElementID ?? '';
      const existing = c.records.completions[id];
      missing = missingToComplete(c);
      editing = !!existing;

      dialog.heading = existing ? 'Edit Completion' : 'Record Completion';
      lede.textContent = existing ? `${name} is Complete. Changing this keeps it Complete.` : `${name} becomes Complete when this is saved.`;
      saveLabel.textContent = existing ? 'Save Changes' : 'Record Completion';

      // Required to complete, from the level's fields.
      missingBox.hidden = !missing.length;
      const names = listPhrase(missing.map((f) => f.label));
      missingText.textContent = missing.length
        ? `${names} ${missing.length === 1 ? 'needs a value' : 'need values'} before this can be complete. ${missing.length === 1 ? 'It’s' : 'They’re'} planned fields, so set ${missing.length === 1 ? 'it' : 'them'} in a draft and publish it, then record completion here.`
        : '';
      setButtonDisabled(saveWrap.querySelector('button'), missing.length > 0);

      // Result, from the plan's list (and the recorded one, if the list has since dropped it).
      const results = [...c.config.results];
      if (existing?.result && !results.includes(existing.result)) results.push(existing.result);
      result.options = results.map((r) => ({ value: r, label: r }));
      result.value = existing?.result ?? '';

      completed.max = todayIso();
      completed.value = existing?.completedOn ?? todayIso();

      // Where it lives: the element's documents, newest first, one row a file.
      const seen = new Set<string>();
      const docs = documentsFor(c.records, id).filter((d) => !seen.has(d.file.id) && seen.add(d.file.id));
      file.options = docs.map((d) => ({ value: d.file.id, label: documentLabel(d) }));
      file.helpText = docs.length ? '' : 'None on this item yet. Add one in Documents, or give a link.';
      const guess = docs.find((d) => !NOT_THE_DELIVERABLE.has(d.link.type) && d.file.kind === 'file') ?? docs[0];
      whereKind.options = [
        { value: 'doc', label: 'A Document' },
        { value: 'link', label: 'A Link' },
      ];
      whereKind.value = existing ? (existing.where.url ? 'link' : 'doc') : docs.length ? 'doc' : 'link';
      file.value = existing?.where.fileId ?? guess?.file.id ?? '';
      url.value = existing?.where.url ?? '';
      label.value = existing?.where.label ?? '';
      drawWhere();

      // Accepted by: the directory, the element's agency reviewer first guess.
      const who = existing ? existing.acceptedBy : reviewerOf(c);
      const people: string[] = [...PLAN_DIRECTORY];
      if (who && !people.includes(who)) people.push(who);
      accepted.options = people.map((n) => ({ value: n, label: n }));
      accepted.value = who;
      drawAccepted();
      note.value = existing?.note ?? '';

      for (const el of [result, completed, file, url]) el.errorText = '';
      errorEl.hidden = true;
      initial = snapshot();
      busy = false;
      settled = false;
      dialog.open = true;
      return new Promise<boolean>((resolve) => (settle = resolve));
    },
  };
}
