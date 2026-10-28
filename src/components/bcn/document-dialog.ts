// <BcnDocumentDialog>'s runtime (2026-10-28): Add New, Add Existing, Add Link, Edit Details and Upload New Version in
// one modal. open() resolves to a sentence for the page's toast when it saved, or null when it was cancelled. Writes
// go through plan-records.ts (addFile, linkDocument, updateDocLink, addFileVersion); the page redraws on the records
// event they raise.
//
// Save stays disabled until the form is valid; a field says what's wrong once it has been left (or Save was tried).
// Closing with changes asks first, as the plan's other dialogs do.

import '@esa/ecology/esa-dialog';
import '@esa/ecology/esa-file-upload';
import '@esa/ecology/esa-select';
import '@esa/ecology/esa-combobox';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-date-picker';
import '@esa/ecology/esa-button-toggle';
import { addFile, addFileVersion, fileById, linkDocument, todayIso, updateDocLink, type Correspondence, type DocLink, type PlanRecords } from '../../lib/planning/plan-records';
import { setButtonDisabled } from './plan-people';
import { day, esc } from './element-module';

export type DocumentDialogMode = 'new' | 'existing' | 'link' | 'edit' | 'version';

export interface DocumentDialogRequest {
  mode: DocumentDialogMode;
  planID: string;
  elementId: string;
  /** The element's name, for the dialog's lede. */
  elementName: string;
  records: PlanRecords;
  /** The document types this element offers (the plan's, narrowed by the level's module settings). */
  types: string[];
  /** The plan's agencies, for Correspondence. */
  agencies: string[];
  /** Any element's name, for Add Existing's help. */
  nameOf: (elementId: string) => string;
  /** Edit Details and Upload New Version: the link on this element. */
  link?: DocLink;
  /** The page's confirm, for "Discard your changes?". */
  confirm: (opts: { heading: string; message: string; confirmLabel?: string; danger?: boolean }) => Promise<boolean>;
}

export interface DocumentDialog {
  open(req: DocumentDialogRequest): Promise<string | null>;
}

type Field = HTMLElement & { value: string; errorText: string; helpText: string; label: string; options?: { value: string; label: string }[] };
type Toggle = HTMLElement & { value: string; options: { label: string; value: string }[] };
type DialogEl = HTMLElement & { open: boolean; heading: string };
type Direction = Correspondence['direction'];

const CORRESPONDENCE = 'Correspondence';
const DIRECTIONS: { label: string; value: Direction }[] = [
  { label: 'Received', value: 'Received' },
  { label: 'Sent', value: 'Sent' },
];

/** "1.1 MB", as esa-file-upload's list says it. */
export const fileSize = (bytes: number | undefined) => (bytes === undefined ? '' : bytes < 1024 ? `${bytes} B` : bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`);
/** A local calendar day, YYYY-MM-DD. */
const isoDay = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const validDay = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));
const validUrl = (s: string) => {
  try {
    const u = new URL(s);
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
};
const listNames = (names: string[]) => (names.length <= 2 ? names.join(' and ') : `${names.slice(0, 2).join(', ')} and ${names.length - 2} more`);

// ── One document's details ─────────────────────────────────────────────────────────────────────────────────────

interface DetailsValue {
  type: string;
  date: string;
  note: string;
  revision: string;
  agency: string;
  direction: Direction;
  letterDate: string;
  agreement: string;
}

interface DetailsBlock {
  el: HTMLElement;
  read(): DetailsValue;
  valid(): boolean;
  /** Say what's wrong on every field, as Save does. */
  reveal(): void;
  /** Prefill from the file's link elsewhere (Add Existing, once a file is picked): its type, date and, for a letter,
   *  the letter. The note stays this element's own. */
  suggest(from: DocLink, typeOffered: boolean): void;
}

function detailsBlock(tpl: HTMLTemplateElement, opts: { value: DetailsValue; types: string[]; agencies: string[]; revision: boolean; file?: { name: string; size?: number }; onChange: () => void }): DetailsBlock {
  // importNode, not cloneNode: a template's clone stays un-upgraded until inserted, and a value set on it then would
  // shadow esa-select's own value accessor for good.
  const el = document.importNode(tpl.content.firstElementChild!, true) as HTMLElement;
  const f = (name: string) => el.querySelector<Field>(`[data-d="${name}"]`)!;
  const type = f('type');
  const date = f('date');
  const revision = f('revision');
  const note = f('note');
  const agency = f('agency');
  const direction = el.querySelector<Toggle>('[data-d="direction"]')!;
  const letterDate = f('letterDate');
  const agreement = f('agreement');
  const corr = el.querySelector<HTMLElement>('[data-d-corr]')!;
  const v = { ...opts.value };
  // The letter's date follows the document date until someone sets it apart.
  let letterApart = !!v.letterDate && v.letterDate !== v.date;
  const touched = new Set<string>();

  if (opts.file) {
    el.querySelector<HTMLElement>('[data-d-file]')!.hidden = false;
    el.querySelector('[data-d-file-name]')!.textContent = opts.file.name;
    el.querySelector('[data-d-file-size]')!.textContent = fileSize(opts.file.size);
  }
  el.setAttribute('aria-label', opts.file ? `Details for ${opts.file.name}` : 'Details');
  revision.hidden = !opts.revision;
  const typeOptions = [...opts.types];
  if (v.type && !typeOptions.includes(v.type)) typeOptions.push(v.type);
  const agencyOptions = [...opts.agencies];
  if (v.agency && !agencyOptions.includes(v.agency)) agencyOptions.push(v.agency);
  type.options = typeOptions.map((t) => ({ value: t, label: t }));
  agency.options = agencyOptions.map((a) => ({ value: a, label: a }));
  direction.options = DIRECTIONS;
  type.value = v.type;
  date.value = v.date;
  revision.value = v.revision;
  note.value = v.note;
  agency.value = v.agency;
  direction.value = v.direction;
  letterDate.value = v.letterDate;
  agreement.value = v.agreement;

  const isCorr = () => v.type === CORRESPONDENCE;
  const errors = (): Record<string, string> => ({
    type: v.type ? '' : 'Choose a type.',
    date: validDay(v.date) ? '' : 'Enter the date it was written or received.',
    agency: !isCorr() || v.agency ? '' : 'Choose the agency.',
    letterDate: !isCorr() || validDay(v.letterDate) ? '' : `Enter the date it was ${v.direction === 'Sent' ? 'sent' : 'received'}.`,
  });
  const paint = () => {
    corr.hidden = !isCorr();
    letterDate.label = v.direction === 'Sent' ? 'Sent On' : 'Received On';
    const e = errors();
    const fields: Record<string, Field> = { type, date, agency, letterDate };
    for (const [k, field] of Object.entries(fields)) field.errorText = touched.has(k) ? e[k] : '';
  };
  const changed = () => {
    paint();
    opts.onChange();
  };

  const bind = (field: HTMLElement, key: string, set: (value: string) => void) => {
    field.addEventListener('change', (e) => {
      if (e.target !== field) return;
      set(String((e as CustomEvent<{ value?: unknown }>).detail?.value ?? (field as Field).value ?? ''));
      changed();
    });
    field.addEventListener('focusout', () => {
      touched.add(key);
      paint();
    });
  };
  bind(type, 'type', (x) => {
    v.type = x;
    touched.add('type');
    if (isCorr() && !v.letterDate) v.letterDate = v.date;
    letterDate.value = v.letterDate;
  });
  bind(date, 'date', (x) => {
    v.date = x;
    if (!letterApart) {
      v.letterDate = x;
      letterDate.value = x;
    }
  });
  bind(revision, 'revision', (x) => (v.revision = x));
  bind(note, 'note', (x) => (v.note = x));
  bind(agency, 'agency', (x) => {
    v.agency = x;
    touched.add('agency');
  });
  bind(direction, 'direction', (x) => (v.direction = x === 'Sent' ? 'Sent' : 'Received'));
  bind(letterDate, 'letterDate', (x) => {
    v.letterDate = x;
    letterApart = x !== v.date;
  });
  bind(agreement, 'agreement', (x) => (v.agreement = x));
  paint();

  return {
    el,
    read: () => ({ ...v, note: v.note.trim(), revision: v.revision.trim(), agreement: v.agreement.trim() }),
    valid: () => Object.values(errors()).every((x) => !x),
    reveal() {
      for (const k of ['type', 'date', 'agency', 'letterDate']) touched.add(k);
      paint();
    },
    suggest(from, typeOffered) {
      if (typeOffered) v.type = from.type;
      v.date = from.date;
      const c = from.correspondence;
      if (c) Object.assign(v, { agency: c.agency, direction: c.direction, letterDate: c.letterDate, agreement: c.agreement ?? '' });
      else v.letterDate = from.date;
      letterApart = v.letterDate !== v.date;
      type.value = v.type;
      date.value = v.date;
      agency.value = v.agency;
      direction.value = v.direction;
      letterDate.value = v.letterDate;
      agreement.value = v.agreement;
      changed();
    },
  };
}

const blankDetails = (date: string): DetailsValue => ({ type: '', date, note: '', revision: '', agency: '', direction: 'Received', letterDate: date, agreement: '' });
const detailsOf = (link: DocLink): DetailsValue => ({
  type: link.type,
  date: link.date,
  note: link.note,
  revision: '',
  agency: link.correspondence?.agency ?? '',
  direction: link.correspondence?.direction ?? 'Received',
  letterDate: link.correspondence?.letterDate ?? link.date,
  agreement: link.correspondence?.agreement ?? '',
});
/** A link's type, date, note and (for Correspondence) the letter, as plan-records stores them. */
const linkFields = (d: DetailsValue): Pick<DocLink, 'type' | 'date' | 'note' | 'correspondence'> => ({
  type: d.type,
  date: d.date,
  note: d.note,
  correspondence: d.type === CORRESPONDENCE ? { agency: d.agency, direction: d.direction, letterDate: d.letterDate, ...(d.agreement ? { agreement: d.agreement } : {}) } : undefined,
});

// ── The dialog ─────────────────────────────────────────────────────────────────────────────────────────────────

export function setupDocumentDialog(root: HTMLElement): DocumentDialog {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-docd-dialog]');
  const lede = q<HTMLElement>('[data-docd-lede]');
  const sections = [...root.querySelectorAll<HTMLElement>('[data-docd-section]')];
  const blocksEl = q<HTMLElement>('[data-docd-blocks]');
  const detailsEl = q<HTMLElement>('[data-docd-details]');
  const existing = q<Field & { value: string | string[] }>('[data-docd-existing]');
  const url = q<Field>('[data-docd-url]');
  const title = q<Field>('[data-docd-title]');
  const revision = q<Field>('[data-docd-revision]');
  const saveWrap = q<HTMLElement>('[data-docd-save]');
  const saveLabel = q<HTMLElement>('[data-docd-save-label]');
  const detailsTpl = q<HTMLTemplateElement>('template[data-docd-tpl="details"]');
  const saveButton = () => saveWrap.querySelector<HTMLButtonElement>('button');

  // The open session.
  let req: DocumentDialogRequest | null = null;
  let files: File[] = [];
  /** Add New: a block per chosen file, kept by the file's identity while the choice changes. */
  let fileBlocks = new Map<File, DetailsBlock>();
  let details: DetailsBlock | null = null;
  let picked = '';
  let versionFile: File | null = null;
  const touched = new Set<string>();
  let initial = '';
  let settled = true;
  let busy = false;
  let settle: (result: string | null) => void = () => undefined;

  const snapshot = () =>
    JSON.stringify({
      files: files.map((f) => [f.name, f.size, fileBlocks.get(f)?.read()]),
      details: details?.read(),
      picked,
      url: url.value ?? '',
      title: title.value ?? '',
      revision: revision.value ?? '',
      version: versionFile?.name ?? '',
    });
  const dirty = () => snapshot() !== initial;

  function errors(): Record<string, string> {
    const mode = req?.mode;
    return {
      url: mode !== 'link' ? '' : validUrl((url.value ?? '').trim()) ? '' : 'Enter a web address, starting https://',
      title: mode !== 'link' || (title.value ?? '').trim() ? '' : 'Name the link.',
      existing: mode !== 'existing' || picked ? '' : 'Choose a document.',
    };
  }
  function valid(): boolean {
    if (!req) return false;
    if (Object.values(errors()).some(Boolean)) return false;
    if (req.mode === 'new') return files.length > 0 && files.every((f) => fileBlocks.get(f)?.valid());
    if (req.mode === 'version') return !!versionFile;
    return !!details?.valid();
  }
  function paint(): void {
    const e = errors();
    url.errorText = touched.has('url') ? e.url : '';
    title.errorText = touched.has('title') ? e.title : '';
    existing.errorText = touched.has('existing') ? e.existing : '';
    setButtonDisabled(saveButton(), !valid() || busy);
  }

  // ── Add New: the files chosen, and a block for each ──
  function drawBlocks(): void {
    if (!req) return;
    const next = new Map<File, DetailsBlock>();
    for (const file of files) {
      const kept = fileBlocks.get(file);
      if (kept) {
        next.set(file, kept);
        continue;
      }
      // The document date starts at the file's own last save, nearer the truth than today; the person corrects it.
      const date = file.lastModified ? isoDay(new Date(file.lastModified)) : todayIso();
      next.set(file, detailsBlock(detailsTpl, { value: blankDetails(date), types: req.types, agencies: req.agencies, revision: true, file: files.length > 1 ? { name: file.name, size: file.size } : undefined, onChange: paint }));
    }
    fileBlocks = next;
    // One file needs no legend (the upload's list names it); several do.
    for (const [file, block] of fileBlocks) {
      const legend = block.el.querySelector<HTMLElement>('[data-d-file]')!;
      legend.hidden = files.length < 2;
      block.el.querySelector('[data-d-file-name]')!.textContent = file.name;
      block.el.querySelector('[data-d-file-size]')!.textContent = fileSize(file.size);
      block.el.setAttribute('aria-label', `Details for ${file.name}`);
    }
    blocksEl.replaceChildren(...files.map((f) => fileBlocks.get(f)!.el));
    saveLabel.textContent = files.length > 1 ? `Add ${files.length} Documents` : 'Add Document';
    paint();
  }
  function freshUpload(kind: 'new' | 'version'): void {
    const slot = q<HTMLElement>(`[data-docd-upload="${kind}"]`);
    const upload = document.importNode(q<HTMLTemplateElement>(`template[data-docd-tpl="upload-${kind}"]`).content.firstElementChild!, true) as HTMLElement;
    upload.addEventListener('change', (e) => {
      if (e.target !== upload) return;
      const chosen = (e as CustomEvent<{ files?: File[] }>).detail?.files ?? [];
      if (kind === 'new') {
        files = chosen;
        drawBlocks();
      } else {
        versionFile = chosen[0] ?? null;
        paint();
      }
    });
    slot.replaceChildren(upload);
  }

  // ── Add Existing: the plan's files not on this element ──
  function existingHelp(fileId: string): string {
    if (!req) return '';
    const others = req.records.links.filter((l) => l.fileId === fileId).sort((a, b) => b.date.localeCompare(a.date));
    if (!others.length) return 'In the plan’s files, not on any item yet.';
    const names = [...new Set(others.map((l) => req!.nameOf(l.elementId)))];
    const latest = others[0];
    return `On ${listNames(names)}, as ${latest.type}, dated ${day(latest.date)}.`;
  }
  existing.addEventListener('change', (e) => {
    if (e.target !== existing || !req) return;
    const value = (e as CustomEvent<{ value?: unknown }>).detail?.value ?? existing.value;
    picked = String(Array.isArray(value) ? (value[0] ?? '') : (value ?? ''));
    touched.add('existing');
    existing.helpText = picked ? existingHelp(picked) : '';
    // Its other links suggest what it is and when it's dated; the note is this element's own.
    const latest = req.records.links.filter((l) => l.fileId === picked).sort((a, b) => b.date.localeCompare(a.date))[0];
    if (latest && details) details.suggest(latest, req.types.includes(latest.type));
    paint();
  });

  // ── Add Link and the version's revision ──
  for (const [field, key] of [
    [url, 'url'],
    [title, 'title'],
    [revision, 'revision'],
  ] as const) {
    field.addEventListener('change', (e) => e.target === field && paint());
    field.addEventListener('input', () => paint());
    field.addEventListener('focusout', () => {
      touched.add(key);
      paint();
    });
  }

  // ── Closing ──
  function close(result: string | null): void {
    busy = false;
    settled = true;
    dialog.open = false;
    settle(result);
  }
  const askDiscard = () => req!.confirm({ heading: 'Discard Your Changes?', message: 'Nothing you entered here is saved.', confirmLabel: 'Discard', danger: true });
  async function cancel(): Promise<void> {
    if (busy || !req) return;
    if (dirty() && !(await askDiscard())) return;
    close(null);
  }
  q<HTMLElement>('[data-docd-cancel]').addEventListener('click', () => void cancel());
  // The dialog's own exits (its X, Escape, the backdrop) close it before anyone can ask: with changes, it comes back and
  // asks; without, it's a cancel.
  dialog.addEventListener('close', async (e) => {
    if (e.target !== dialog || settled || busy) return;
    if (!dirty()) return close(null);
    dialog.open = true;
    if (await askDiscard()) close(null);
  });

  // ── Saving ──
  function save(): string | null {
    const r = req!;
    const base = { elementId: r.elementId };
    switch (r.mode) {
      case 'new': {
        for (const file of files) {
          const d = fileBlocks.get(file)!.read();
          const stored = addFile(r.planID, { name: file.name, size: file.size, revision: d.revision || undefined });
          linkDocument(r.planID, { ...base, fileId: stored.id, ...linkFields(d) });
        }
        return files.length > 1 ? `${files.length} documents added.` : 'Document added.';
      }
      case 'existing': {
        linkDocument(r.planID, { ...base, fileId: picked, ...linkFields(details!.read()) });
        return 'Document added.';
      }
      case 'link': {
        const stored = addFile(r.planID, { name: (title.value ?? '').trim(), kind: 'link', url: (url.value ?? '').trim() });
        linkDocument(r.planID, { ...base, fileId: stored.id, ...linkFields(details!.read()) });
        return 'Link added.';
      }
      case 'edit': {
        updateDocLink(r.planID, r.link!.id, linkFields(details!.read()));
        return 'Details saved.';
      }
      case 'version': {
        const file = fileById(r.records, r.link!.fileId);
        const next = (revision.value ?? '').trim();
        addFileVersion(r.planID, r.link!.fileId, versionFile!.size, next !== (file?.revision ?? '') ? next : undefined);
        return `Version ${(file?.versions.at(-1)?.number ?? 0) + 1} uploaded.`;
      }
    }
  }
  saveWrap.addEventListener('click', () => {
    if (busy || !req) return;
    if (!valid()) {
      for (const k of ['url', 'title', 'existing']) touched.add(k);
      details?.reveal();
      fileBlocks.forEach((b) => b.reveal());
      paint();
      return;
    }
    busy = true;
    close(save());
  });

  return {
    open(r) {
      req = r;
      files = [];
      fileBlocks = new Map();
      picked = '';
      versionFile = null;
      touched.clear();
      busy = false;
      for (const s of sections) s.hidden = s.dataset.docdSection !== r.mode;
      const file = r.link ? fileById(r.records, r.link.fileId) : undefined;
      const on = `<b>${esc(r.elementName)}</b>`;

      // What the dialog says it's doing, and to what.
      const HEADINGS: Record<DocumentDialogMode, string> = { new: 'Add New Documents', existing: 'Add an Existing Document', link: 'Add a Link', edit: 'Edit Details', version: 'Upload New Version' };
      const SAVE: Record<DocumentDialogMode, string> = { new: 'Add Document', existing: 'Add Document', link: 'Add Link', edit: 'Save Changes', version: 'Upload Version' };
      dialog.heading = HEADINGS[r.mode];
      saveLabel.textContent = SAVE[r.mode];
      const latest = file?.versions.at(-1);
      lede.innerHTML =
        r.mode === 'edit'
          ? `<b>${esc(file?.name ?? '')}</b>, as it is on ${esc(r.elementName)}. Its type, date and note here are this item’s own.`
          : r.mode === 'version'
            ? `<b>${esc(file?.name ?? '')}</b> is at Version ${latest?.number ?? 1}${file?.revision ? `, ${esc(file.revision)}` : ''}. The new save becomes Version ${(latest?.number ?? 0) + 1} on every item it’s on.`
            : r.mode === 'existing'
              ? `A file already in the plan, onto ${on}, with its own type, date and note here.`
              : r.mode === 'link'
                ? `A link onto ${on}, with its type, date and note.`
                : `Each file goes onto ${on} with its own type, date and note.`;

      // The mode's own fields.
      blocksEl.replaceChildren();
      detailsEl.replaceChildren();
      details = null;
      if (r.mode === 'new') freshUpload('new');
      if (r.mode === 'version') {
        freshUpload('version');
        revision.value = file?.revision ?? '';
      }
      if (r.mode === 'link') {
        url.value = '';
        title.value = '';
      }
      if (r.mode === 'existing') {
        const here = new Set(r.records.links.filter((l) => l.elementId === r.elementId).map((l) => l.fileId));
        existing.options = r.records.files
          .filter((f) => !here.has(f.id))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((f) => ({ value: f.id, label: f.revision ? `${f.name} (${f.revision})` : f.name }));
        existing.value = '';
        existing.helpText = '';
      }
      if (r.mode === 'existing' || r.mode === 'link' || r.mode === 'edit') {
        details = detailsBlock(detailsTpl, { value: r.link && r.mode === 'edit' ? detailsOf(r.link) : blankDetails(todayIso()), types: r.types, agencies: r.agencies, revision: false, onChange: paint });
        detailsEl.replaceChildren(details.el);
      }
      for (const f of [url, title, existing]) f.errorText = '';
      initial = snapshot();
      settled = false;
      dialog.open = true;
      requestAnimationFrame(() => {
        paint();
        const first = r.mode === 'link' ? url : r.mode === 'existing' ? existing : r.mode === 'edit' ? detailsEl.querySelector<HTMLElement>('[data-d="type"]') : null;
        first?.focus();
      });
      return new Promise<string | null>((resolve) => (settle = resolve));
    },
  };
}
