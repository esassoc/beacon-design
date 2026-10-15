// tracked-field — the client controller (and the shared marker copy) for <BcnTrackedField>.
//
// `markerCopy()` is PURE and also runs at build time, so the server-rendered marker
// tooltip and the hydrated one say exactly the same thing. `setupTrackedFields()` is
// client-only: it wires every [data-bcn-tracked-field] on the page (an Astro <script> is
// bundled once per page, so one call covers every instance) and re-renders them all from
// `dmrStore` on 'change'.
//
// The editor is built at runtime from the Lit legos (esa-text-field / esa-textarea /
// esa-select); those, plus esa-switch-toggle and esa-tooltip, are registered by the
// component's <script>, NOT here — importing them would define custom elements during
// SSR, where `customElements` does not exist.

import {
  concernOtherReports,
  dmrStore,
  fieldDef,
  formatValue,
  fmtClock,
  fmtDateShort,
  statusLabel,
  type FieldView,
} from '../../lib/dmr-review-store';

export type MarkerKey = 'pending' | 'synced' | 'beacon';

/** Badge text per marker — the visible word; the tooltip carries the detail. */
export const MARKER_LABEL: Record<MarkerKey, string> = {
  pending: 'Pending sync',
  synced: 'Synced',
  beacon: 'Edited in Beacon',
};

/** Where an edit goes — the one helper line under the inline editor. */
export const DESTINATION_HELP = {
  fulcrum: 'Syncs to Fulcrum when you push changes.',
  beacon: "Changes the report only. Fulcrum keeps the inspector's text.",
} as const;

const DETAIL_MAX = 140;

function clip(text: string): string {
  return text.length > DETAIL_MAX ? `${text.slice(0, DETAIL_MAX - 1).trimEnd()}…` : text;
}

/** "2026-09-12T08:54:00" → "Sep 12, 8:54 AM" */
function when(iso: string): string {
  return `${fmtDateShort(iso).replace(/, \d{4}$/, '')}, ${fmtClock(iso)}`;
}

/**
 * The marker's detail sentence, e.g. "Fulcrum value: 60 mph · Changed by Priya Raman,
 * Sep 12, 8:54 AM". `fulcrumNow` is what Fulcrum CURRENTLY holds for the field (it moves
 * when a push lands), which is what a pending marker compares against.
 */
export function markerCopy(view: FieldView, fulcrumNow: string): string {
  if (!view.marker) return '';
  const head =
    view.marker === 'pending'
      ? `Fulcrum value: ${formatValue(view.def, fulcrumNow)}`
      : `Inspector's original: ${clip(view.originalDisplay)}`;
  const e = view.lastEdit;
  return e ? `${head} · Changed by ${e.by}, ${when(e.at)}` : head;
}

// ── Client wiring ──────────────────────────────────────────────────────────

type LegoControl = HTMLElement & { value: unknown; updateComplete?: Promise<unknown> };
type SwitchEl = HTMLElement & { checked: boolean };
type TooltipEl = HTMLElement & { text: string };

const q = <T extends Element = HTMLElement>(root: Element, sel: string) => root.querySelector<T>(sel);

let wired = false;
let openField: HTMLElement | null = null;

function render(el: HTMLElement): void {
  const id = el.dataset.fieldId!;
  const view = dmrStore.field(id);

  const valueEl = q(el, '[data-tf-value]');
  if (valueEl) valueEl.textContent = view.display;

  const sw = q<SwitchEl>(el, '[data-tf-switch]');
  if (sw) sw.checked = view.value === 'yes';

  const detail = markerCopy(view, dmrStore.state.fulcrum[id]);
  el.querySelectorAll<TooltipEl>('[data-tf-marker]').forEach((tip) => {
    const on = tip.dataset.tfMarker === view.marker;
    tip.hidden = !on;
    if (!on) return;
    tip.text = detail;
    const sr = q(tip, '[data-tf-detail]');
    if (sr) sr.textContent = detail;
  });
  el.dataset.marker = view.marker ?? '';
}

function buildControl(el: HTMLElement, view: FieldView): LegoControl {
  const { def } = view;
  const label = el.dataset.label ?? def.label;
  const help = def.scope === 'record' ? recordHelp(def.recordId!) : DESTINATION_HELP[def.kind];
  let ctl: LegoControl;

  if (def.input === 'textarea') {
    ctl = document.createElement('esa-textarea') as LegoControl;
    Object.assign(ctl, { rows: 4, autoResize: true, maxRows: 12 });
  } else if (def.input === 'select') {
    ctl = document.createElement('esa-select') as LegoControl;
    Object.assign(ctl, { options: (def.options ?? []).map((o) => ({ label: o, value: o })) });
  } else {
    ctl = document.createElement('esa-text-field') as LegoControl;
    // 'time' is not in esa-text-field's TS union, but the lego binds `type` straight
    // through to its inner control, so the browser's time picker renders.
    Object.assign(ctl, {
      type: def.input === 'number' ? 'number' : def.input === 'time' ? 'time' : 'text',
      suffix: def.unit?.trim() ?? '',
      inputmode: def.input === 'number' ? 'decimal' : '',
    });
  }
  // Real label (visible, wires the lego's own label-for) + the destination line as
  // help-text, which each lego renders under the control and points aria-describedby at.
  Object.assign(ctl, { label, helpText: help, size: 'md', value: view.value });
  ctl.dataset.tfControl = '';
  return ctl;
}

/** Helper line for a field of a SHARED record — says so before anything is typed. */
export function recordHelp(recordId: string): string {
  const n = concernOtherReports(recordId).length;
  return n
    ? `Updates the shared ${recordId} record, which ${n} other daily ${n === 1 ? 'report also includes' : 'reports also include'}. Syncs to Fulcrum when you push changes.`
    : `Updates the ${recordId} record. No other daily report includes it yet. Syncs to Fulcrum when you push changes.`;
}

/** The confirm sentence for a shared-record edit: which reports change, and what
 *  happens to the ones already generated. */
export function recordConfirmMessage(recordId: string): string {
  const others = concernOtherReports(recordId);
  const list = others
    .map((r) => `${fmtDateShort(r.date)} (${r.fieldPerson}, ${statusLabel(r.status).toLowerCase()})`)
    .join('; ');
  const generated = others.filter((r) => r.status === 'report-generated').length;
  const tail = generated
    ? ` ${generated === 1 ? 'The report already generated' : `The ${generated} reports already generated`} will be flagged out of date so ${generated === 1 ? 'it' : 'they'} can be regenerated.`
    : '';
  return `This changes ${recordId} in ${others.length} other daily ${others.length === 1 ? 'report' : 'reports'}: ${list}.${tail}`;
}

let confirmEl: (HTMLElement & { open: boolean; heading: string; message: string; variant: string; confirmLabel: string; cancelLabel: string }) | null = null;

/** Ask before a shared-record edit lands. Resolves true to proceed. */
function confirmRecordEdit(recordId: string): Promise<boolean> {
  if (!concernOtherReports(recordId).length) return Promise.resolve(true);
  if (!confirmEl) {
    confirmEl = document.createElement('esa-confirm-dialog') as NonNullable<typeof confirmEl>;
    document.body.append(confirmEl);
  }
  const dlg = confirmEl;
  Object.assign(dlg, {
    heading: 'Update the shared concern record?',
    message: recordConfirmMessage(recordId),
    variant: 'warning',
    confirmLabel: 'Update record',
    cancelLabel: 'Keep editing',
  });
  return new Promise((resolve) => {
    dlg.addEventListener('resolved', (e) => resolve(!!(e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed), {
      once: true,
    });
    dlg.open = true;
  });
}

function readValue(ctl: LegoControl): string {
  const v = ctl.value;
  if (Array.isArray(v)) return String(v[0] ?? '');
  return String(v ?? '').trim();
}

function close(el: HTMLElement, refocus: boolean): void {
  const editor = q(el, '[data-tf-editor]');
  const slot = q(el, '[data-tf-slot]');
  if (!editor || editor.hidden) return;
  editor.hidden = true;
  slot?.replaceChildren();
  el.querySelectorAll<HTMLElement>('[data-tf-read]').forEach((n) => (n.hidden = false));
  delete el.dataset.editing;
  if (openField === el) openField = null;
  if (refocus) q(el, '[data-tf-edit]')?.focus();
}

function open(el: HTMLElement): void {
  // One editor per page: opening another quietly cancels the first.
  if (openField && openField !== el) close(openField, false);
  const id = el.dataset.fieldId!;
  const view = dmrStore.field(id);
  const editor = q(el, '[data-tf-editor]');
  const slot = q(el, '[data-tf-slot]');
  if (!editor || !slot) return;

  const ctl = buildControl(el, view);
  slot.replaceChildren(ctl);

  const restore = q(el, '[data-tf-restore-wrap]');
  if (restore) restore.hidden = !(view.def.kind === 'beacon' && view.value !== view.original);

  el.querySelectorAll<HTMLElement>('[data-tf-read]').forEach((n) => (n.hidden = true));
  editor.hidden = false;
  el.dataset.editing = '';
  openField = el;

  // Enter saves a single-line field (a textarea keeps Enter for newlines; a select uses
  // it to open/choose).
  if (ctl.tagName === 'ESA-TEXT-FIELD') {
    ctl.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter') {
        e.preventDefault();
        save(el);
      }
    });
  }

  (ctl.updateComplete ?? Promise.resolve()).then(() => ctl.focus());
}

async function save(el: HTMLElement): Promise<void> {
  const ctl = q<LegoControl>(el, '[data-tf-control]');
  if (!ctl) return close(el, true);
  const id = el.dataset.fieldId!;
  const value = readValue(ctl);
  const def = fieldDef(id);
  // A shared record changes in every daily report that includes it: confirm first,
  // naming them. Declining leaves the editor open with the typed value intact.
  if (def.scope === 'record' && value !== dmrStore.state.values[id]) {
    const ok = await confirmRecordEdit(def.recordId!);
    if (!ok) {
      ctl.focus();
      return;
    }
  }
  dmrStore.edit(id, value);
  close(el, true);
}

function init(el: HTMLElement): void {
  el.dataset.tfReady = '';
  const id = el.dataset.fieldId!;

  q(el, '[data-tf-edit]')?.addEventListener('click', () => open(el));
  q(el, '[data-tf-save]')?.addEventListener('click', () => save(el));
  q(el, '[data-tf-cancel]')?.addEventListener('click', () => close(el, true));
  q(el, '[data-tf-restore]')?.addEventListener('click', () => {
    dmrStore.revertToFulcrum(id);
    close(el, true);
  });

  // Esc cancels — captured on the editor, but NOT while an esa-select listbox is open
  // (its combobox reports aria-expanded="true"); that Esc belongs to the select.
  q(el, '[data-tf-editor]')?.addEventListener(
    'keydown',
    (e) => {
      if (e.key !== 'Escape') return;
      const inPopup = e
        .composedPath()
        .some((n) => n instanceof Element && n.getAttribute('aria-expanded') === 'true');
      if (inPopup) return;
      e.preventDefault();
      close(el, true);
    },
    true,
  );

  // Toggle layout: the switch IS the editor.
  q(el, '[data-tf-switch]')?.addEventListener('change', (e) => {
    const checked = (e as CustomEvent<{ checked: boolean }>).detail?.checked;
    dmrStore.edit(id, checked ? 'yes' : 'no');
  });

  render(el);
}

/** Wire every tracked field on the page (idempotent) and keep them in sync with the store. */
export function setupTrackedFields(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-bcn-tracked-field]:not([data-tf-ready])').forEach(init);
  if (wired) return;
  wired = true;
  dmrStore.addEventListener('change', () => {
    document.querySelectorAll<HTMLElement>('[data-bcn-tracked-field][data-tf-ready]').forEach(render);
  });
}
