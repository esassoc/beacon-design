// <BcnFieldDefDialog>'s runtime (2026-10-28): open() a definition (or none, for a new one) and get back the definition
// as saved, or null when it was cancelled. The caller puts it in the plan's working configuration; nothing is stored
// here. A new definition's id comes from its label, made unique among the plan's.

import { FIELD_TYPES, type FieldDef, type FieldType } from '../../lib/planning/plan-config';
import { listEditor } from './plan-list-editor';

type FieldEl = HTMLElement & { value: string; errorText: string };
type SelectEl = HTMLElement & { value: string; options: { value: string; label: string }[]; errorText: string };
type DialogEl = HTMLElement & { open: boolean; heading: string };
type ConfirmEl = HTMLElement & { open: boolean; heading: string; message: string; confirmLabel: string; cancelLabel: string; variant: string };

const CHOICE_TYPES: FieldType[] = ['select', 'multiselect'];
const typeLabel = (t: FieldType) => FIELD_TYPES.find((x) => x.value === t)?.label ?? t;

/** "Study and Task", "Study, Sub-study and Task". */
export function andList(names: string[]): string {
  if (names.length <= 1) return names.join('');
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

export interface FieldDefOpenOptions {
  /** The definition to edit; none for a new one. */
  def?: FieldDef | null;
  /** Every definition the plan has (labels must differ; ids must be unique). */
  existing: FieldDef[];
  /** Where it's used, by name ("All Levels", "Study"): changing a used field's type asks first. */
  usedOn?: string[];
  /** A label to start a new one with. */
  label?: string;
}

export function setupFieldDefDialog(root: HTMLElement): { open(opts: FieldDefOpenOptions): Promise<FieldDef | null> } {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-fdd-dialog]');
  const label = q<FieldEl>('[data-fdd="label"]');
  const type = q<SelectEl>('[data-fdd="type"]');
  const unit = q<FieldEl>('[data-fdd="unit"]');
  const help = q<FieldEl>('[data-fdd="help"]');
  const confirm = q<ConfirmEl>('[data-fdd-confirm]');
  const optionsWrap = q('[data-fdd-options-wrap]');
  const optionsError = q('[data-fdd-options-error]');
  const usage = q('[data-fdd-usage]');

  let options: string[] = [];
  const editor = listEditor(q('[data-ple-id="field-options"]'), {
    values: [],
    onChange: (values) => {
      options = values;
      optionsError.hidden = true;
    },
    // The drag's ghost and line live inside the dialog: a modal's top layer covers the body.
    layer: () => q('[data-fdd-form]'),
  });

  void customElements.whenDefined('esa-select').then(() => (type.options = FIELD_TYPES.map((t) => ({ value: t.value, label: t.label }))));

  let current: FieldOpen | null = null;
  interface FieldOpen {
    opts: FieldDefOpenOptions;
    settle: (def: FieldDef | null) => void;
    initial: string;
    busy: boolean;
  }

  const kind = () => ((type.value as FieldType) || 'text');
  function drawType(): void {
    const t = kind();
    optionsWrap.hidden = !CHOICE_TYPES.includes(t);
    q('[data-fdd-unit-wrap]').hidden = t !== 'number';
  }
  type.addEventListener('change', () => {
    drawType();
    type.errorText = '';
  });
  label.addEventListener('input', () => (label.errorText = ''));

  const snapshot = () => JSON.stringify({ l: (label.value ?? '').trim(), t: kind(), o: options, u: (unit.value ?? '').trim(), h: (help.value ?? '').trim() });

  const ask = (heading: string, message: string, confirmLabel: string, cancelLabel: string, danger = false): Promise<boolean> =>
    new Promise((resolve) => {
      Object.assign(confirm, { heading, message, confirmLabel, cancelLabel, variant: danger ? 'danger' : 'default' });
      confirm.addEventListener('resolved', (e) => resolve(!!(e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed), { once: true });
      confirm.open = true;
    });

  function close(def: FieldDef | null): void {
    const open = current;
    current = null;
    dialog.open = false;
    open?.settle(def);
  }

  function uniqueId(text: string, existing: FieldDef[]): string {
    const base =
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || 'field';
    let id = base;
    for (let n = 2; existing.some((f) => f.id === id); n++) id = `${base}-${n}`;
    return id;
  }

  async function save(): Promise<void> {
    if (!current || current.busy) return;
    const { opts } = current;
    const text = (label.value ?? '').trim();
    const t = kind();
    let ok = true;
    if (!text) {
      label.errorText = 'Name the field.';
      ok = false;
    } else if (opts.existing.some((f) => f.id !== opts.def?.id && f.label.toLowerCase() === text.toLowerCase())) {
      label.errorText = `The plan already has a field called ${text}.`;
      ok = false;
    }
    if (CHOICE_TYPES.includes(t) && !options.length) {
      optionsError.hidden = false;
      ok = false;
    }
    if (!ok) return;
    const was = opts.def;
    if (was && was.type !== t && opts.usedOn?.length) {
      current.busy = true;
      const yes = await ask(
        `Change ${was.label} to ${typeLabel(t)}?`,
        `It's on ${andList(opts.usedOn)}. Values items already have stay as they are, but ones that don't fit a ${typeLabel(t)} field won't show until it's changed back.`,
        'Change Type',
        `Keep ${typeLabel(was.type)}`
      );
      if (current) current.busy = false;
      if (!yes) return;
    }
    const def: FieldDef = { id: was?.id ?? uniqueId(text, opts.existing), label: text, type: t };
    if (CHOICE_TYPES.includes(t)) def.options = [...options];
    const u = (unit.value ?? '').trim();
    if (t === 'number' && u) def.unit = u;
    const h = (help.value ?? '').trim();
    if (h) def.help = h;
    close(def);
  }
  q('[data-fdd-save]').addEventListener('click', () => void save());
  q('[data-fdd-form]').addEventListener('submit', (e) => {
    e.preventDefault();
    void save();
  });
  // Enter in the label saves, as a one-field form would.
  label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      void save();
    }
  });

  const dirty = () => !!current && snapshot() !== current.initial;
  const askDiscard = () => ask(current?.opts.def ? 'Discard Your Changes?' : 'Discard This Field?', current?.opts.def ? 'Nothing you changed in this field is kept.' : 'The field is not added.', 'Discard', 'Keep Editing');
  async function cancel(): Promise<void> {
    if (!current || current.busy) return;
    if (dirty() && !(await askDiscard())) return;
    close(null);
  }
  q('[data-fdd-cancel]').addEventListener('click', () => void cancel());
  // The dialog's own exits (its X, Escape, the backdrop) close it first: with changes, it comes back and asks.
  dialog.addEventListener('close', async (e) => {
    if (e.target !== dialog || !current || current.busy) return;
    if (!dirty()) return close(null);
    dialog.open = true;
    if (await askDiscard()) close(null);
  });

  return {
    open(opts) {
      if (current) close(null);
      const def = opts.def ?? null;
      dialog.heading = def ? `Edit Field: ${def.label}` : 'New Field';
      q('[data-fdd-save-label]').textContent = def ? 'Save Field' : 'Add Field';
      label.value = def?.label ?? opts.label ?? '';
      label.errorText = '';
      options = [...(def?.options ?? [])];
      editor.set(options);
      unit.value = def?.unit ?? '';
      help.value = def?.help ?? '';
      optionsError.hidden = true;
      usage.textContent = def ? (opts.usedOn?.length ? `On ${andList(opts.usedOn)}. Changes here show everywhere it's used.` : 'Not on any level yet.') : '';
      usage.hidden = !usage.textContent;
      return new Promise<FieldDef | null>((settle) => {
        void customElements.whenDefined('esa-select').then(() => {
          type.value = def?.type ?? 'text';
          drawType();
          current = { opts, settle, initial: snapshot(), busy: false };
          dialog.open = true;
          requestAnimationFrame(() => label.focus());
        });
      });
    },
  };
}
