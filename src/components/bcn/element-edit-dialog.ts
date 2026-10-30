// <BcnElementEditDialog>'s runtime (2026-10-28): the element's planned side in one form, read back as an edit. The page
// decides what the edit becomes: your draft's next revision (draft first, Andy's call), or, when the page offers it and
// it's safe, Publish Now straight to Live. See ./BcnElementEditDialog.astro.

import { confirm } from '../../lib/planning/plan-page';
import '@esa/ecology/esa-dialog';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-textarea';
import '@esa/ecology/esa-date-picker';
import '@esa/ecology/esa-select';
import '@esa/ecology/esa-combobox';
import '@esa/ecology/esa-switch-toggle';
import '@esa/ecology/esa-button-toggle';
import type { ElementContext } from '../../lib/planning/element-context';
import type { FieldDef } from '../../lib/planning/plan-config';
import { PLAN_DIRECTORY, PLAN_ORGANIZATIONS, orgOf, ownerAside, ownerLabel, type ElementAttributes, type FieldValue, type PlanFieldEdit } from '../../lib/planning/plan-repo';
import { PLAN_DATE_TYPE_HINTS, planElementDateErrors } from '../../lib/planning/plan-element';
import type { PlanDraftEdit } from '../../lib/planning/plan-draft';
import type { PlanDateTypeEnum } from '../../lib/planning/model';
import { fillIcons } from '../../lib/planning/icons';
import { planAvatar } from './plan-people';
import { badge } from './badge-bank';
import { pickedValue, saveSplitOf, setSaveChoices } from './save-split';
import { NEW_DRAFT } from './draft-chooser';

type Lit = HTMLElement & { value: unknown; options?: unknown[]; checked?: boolean; errorText?: string; heading?: string; open?: boolean };

/** What the form changed, in the shapes a draft revision carries; each part null when untouched. */
export interface ElementEdit {
  dates: PlanDraftEdit | null;
  fields: PlanFieldEdit | null;
  /** The element's whole attributes after the edit, when any of them changed. */
  attributes: ElementAttributes | null;
  /** What changed, in the order the form shows it: "Dates", "Owners", "Lead Agency". */
  changed: string[];
}
/** What the form's footer offers (2026-10-28, the draft-first edit model). Every edit saves to a draft; Publish Now is
 *  there only when the page says it's safe (nothing else moves, no open draft changes the item). */
export interface EditOffer {
  /** The primary action: "Save to My Draft" from Live, "Save to Draft" in your draft. */
  label: string;
  /** The info box over the form (2026-10-30, out of the footer): where the edit goes, or why Publish Now isn't offered. */
  where: string;
  publishNow: boolean;
  /** From Live (2026-10-29, several drafts per person): which of your drafts it saves to, picked from Save's chevron menu
   *  (2026-10-30, Andy: in place of a Saves To select); `describe` leads the info box for a choice, with `where` after it,
   *  and `saveLabel` names the button. */
  target?: { options: { label: string; value: string }[]; value: string; describe: (value: string) => string; saveLabel?: (value: string) => string };
}
/** The form's answer: the edit, and whether it's to go to Live now. */
export interface EditResult {
  edit: ElementEdit;
  publishNow: boolean;
  /** The draft picked in Save's menu (a draft's id, or "new"), when the form offered one. */
  target?: string;
}

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = '') => Object.assign(document.createElement(tag), { className, textContent: text });
const opts = (list: readonly string[]) => list.map((o) => ({ value: o, label: o }));
const people = () => PLAN_DIRECTORY.map((n) => ({ value: n, label: orgOf(n) ? `${n} (${orgOf(n)})` : n }));
/** Owners: the project's people, then the organizations (an agency or firm can own an item in its own right). */
const ownerOptions = () => [...people(), ...Object.keys(PLAN_ORGANIZATIONS).map((o) => ({ value: o, label: ownerLabel(o) }))];

/** One control per field type; set once it has upgraded. */
function control(def: FieldDef, value: FieldValue | undefined, required: boolean): Lit {
  let c: Lit;
  switch (def.type) {
    case 'longtext':
      c = document.createElement('esa-textarea') as Lit;
      c.setAttribute('rows', '2');
      c.setAttribute('auto-resize', '');
      break;
    case 'date':
      c = document.createElement('esa-date-picker') as Lit;
      break;
    case 'select':
    case 'multiselect':
    case 'person':
      c = document.createElement('esa-select') as Lit;
      if (def.type === 'multiselect') c.setAttribute('multiple', '');
      break;
    case 'yesno':
      c = document.createElement('esa-switch-toggle') as Lit;
      c.setAttribute('label-position', 'after');
      break;
    default:
      c = document.createElement('esa-text-field') as Lit;
      if (def.type === 'number' || def.type === 'money') c.setAttribute('inputmode', 'decimal');
      if (def.type === 'money') c.setAttribute('prefix', '$');
      if (def.type === 'number' && def.unit) c.setAttribute('suffix', def.unit);
      if (def.type === 'link') c.setAttribute('placeholder', 'https://');
  }
  c.setAttribute('size', 'sm');
  c.setAttribute('label', def.label);
  const empty = value === null || value === undefined || value === '' || (Array.isArray(value) && !value.length);
  const help = [def.help, required && empty ? 'Needed to complete it.' : ''].filter(Boolean).join(' ');
  if (help) c.setAttribute('help-text', help);
  void customElements.whenDefined(c.tagName.toLowerCase()).then(() => {
    if (def.type === 'select' || def.type === 'multiselect') c.options = opts(def.options ?? []);
    if (def.type === 'person') c.options = people();
    if (def.type === 'yesno') c.checked = !!value;
    else if (def.type === 'multiselect') c.value = Array.isArray(value) ? value : [];
    else c.value = value === null || value === undefined ? '' : String(value);
  });
  return c;
}
function read(def: FieldDef, c: Lit): FieldValue {
  if (def.type === 'yesno') return !!c.checked;
  if (def.type === 'multiselect') return Array.isArray(c.value) ? (c.value as string[]) : [];
  const raw = String(c.value ?? '').trim();
  if (!raw) return null;
  if (def.type === 'number' || def.type === 'money') {
    const n = Number(raw.replace(/[$,\s]/g, ''));
    return Number.isFinite(n) ? n : raw;
  }
  return raw;
}
const same = (a: unknown, b: unknown) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

export function setupElementEditDialog(root: HTMLElement): { open(ctx: ElementContext, offer: EditOffer, keep?: boolean): Promise<EditResult | null> } {
  const q = <T extends HTMLElement = Lit>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<Lit>('[data-eed-dialog]');
  // Out of the page's flow, so a redraw that moves cards around never takes the open dialog with it.
  document.body.append(root);
  fillIcons(root);
  const name = q('[data-eed="name"]');
  const start = q('[data-eed="start"]');
  const end = q('[data-eed="end"]');
  const type = q('[data-eed="type"]');
  const milestone = q('[data-eed="milestone"]');
  const deliverable = q('[data-eed="deliverable"]');
  const notes = q('[data-eed="notes"]');
  const addOwner = q('[data-eed-add-owner]');
  const ownersList = q<HTMLUListElement>('[data-eed-owners]');
  const controls = new Map<string, { def: FieldDef; c: Lit }>();
  let ctx: ElementContext | null = null;
  let owners: string[] = [];
  let settle: (result: EditResult | null) => void = () => undefined;
  let done = true;

  void customElements.whenDefined('esa-button-toggle').then(() => {
    type.options = [
      { label: 'Estimated', value: 'Estimated' },
      { label: 'Scheduled', value: 'Scheduled' },
    ];
  });
  const drawTypeHelp = () => (q<HTMLElement>('[data-eed-type-help]').textContent = PLAN_DATE_TYPE_HINTS[(String(type.value || 'Estimated')) as PlanDateTypeEnum] ?? '');
  type.addEventListener('change', drawTypeHelp);
  /** A milestone has one date: End steps aside and Start reads Date. */
  const drawMilestone = () => {
    const one = !!milestone.checked;
    end.hidden = one;
    start.setAttribute('label', one ? 'Date' : 'Start Date');
  };
  milestone.addEventListener('change', drawMilestone);

  function drawOwners(): void {
    ownersList.replaceChildren(
      ...owners.map((n) => {
        const li = el('li');
        const label = el('span', '', n);
        if (ownerAside(n)) label.append(' ', el('span', 'bcn-eed__org', `(${ownerAside(n)})`));
        const remove = q<HTMLTemplateElement>('template[data-eed-tpl="remove"]').content.firstElementChild!.cloneNode(true) as HTMLElement;
        remove.querySelector('button')?.setAttribute('aria-label', `Remove ${n}`);
        remove.addEventListener('click', () => {
          owners = owners.filter((x) => x !== n);
          drawOwners();
        });
        li.append(planAvatar(n, 'xs'), label, remove);
        return li;
      })
    );
    void customElements.whenDefined('esa-combobox').then(() => (addOwner.options = ownerOptions().filter((p) => !owners.includes(p.value))));
  }
  addOwner.addEventListener('change', () => {
    const picked = String(addOwner.value ?? '');
    if (!picked || owners.includes(picked)) return;
    owners = [...owners, picked];
    drawOwners();
    requestAnimationFrame(() => (addOwner.value = ''));
  });

  /** The form read back against the element as it stands. */
  function collect(): ElementEdit | null {
    const c = ctx!;
    const e = c.element;
    const parent = c.children.length > 0;
    const changed: string[] = [];
    const nm = String(name.value ?? '').trim();
    name.errorText = nm ? '' : 'Enter a name.';
    let dates: PlanDraftEdit | null = null;
    const isMilestone = !!milestone.checked;
    if (!parent) {
      const s = String(start.value ?? '') || null;
      const f = isMilestone ? s : String(end.value ?? '') || null;
      const errors = planElementDateErrors({ StartDate: s ?? '', EndDate: f ?? '', IsMilestone: isMilestone });
      start.errorText = errors.StartDate ?? '';
      end.errorText = errors.EndDate ?? '';
      if (!nm || errors.StartDate || errors.EndDate) return null;
      const t = (String(type.value || e.PlanDateType || 'Estimated')) as PlanDateTypeEnum;
      if (s !== (e.StartDate ?? null) || f !== (e.EndDate ?? null) || t !== e.PlanDateType) {
        dates = { PlanElementID: e.PlanElementID ?? '', StartDate: s, EndDate: f, PlanDateType: t };
        changed.push(t !== e.PlanDateType && s === (e.StartDate ?? null) && f === (e.EndDate ?? null) ? 'Date Type' : 'Dates');
      }
    } else if (!nm) return null;
    const fields: PlanFieldEdit = {};
    if (nm !== (e.PlanElementName ?? '')) (fields.PlanElementName = nm), changed.unshift('Name');
    if (!parent && isMilestone !== !!e.IsMilestone) (fields.IsMilestone = isMilestone), changed.push('Milestone');
    const nt = String(notes.value ?? '').trim() || null;
    if (nt !== (e.Notes ?? null)) (fields.Notes = nt), changed.push('Notes');

    const values: Record<string, FieldValue> = { ...(c.attrs.values ?? {}) };
    const valueLabels: string[] = [];
    for (const { def, c: ctl } of controls.values()) {
      const v = read(def, ctl);
      if (!same(v, c.attrs.values?.[def.id])) valueLabels.push(def.label);
      values[def.id] = v;
    }
    const deliverableNow = q<HTMLElement>('[data-eed-deliverable-section]').hidden ? !!c.attrs.deliverable : !!deliverable.checked;
    const attrChanged: string[] = [];
    if (!same(owners, c.attrs.owners ?? [])) attrChanged.push(owners.length === 1 ? 'Owner' : 'Owners');
    if (deliverableNow !== !!c.attrs.deliverable) attrChanged.push('Deliverable');
    attrChanged.push(...valueLabels);
    changed.push(...attrChanged);
    return {
      dates,
      fields: Object.keys(fields).length ? fields : null,
      attributes: attrChanged.length ? { ...c.attrs, owners, deliverable: deliverableNow, values } : null,
      changed,
    };
  }

  function fill(c: ElementContext): void {
    const e = c.element;
    const parent = c.children.length > 0;
    // The title and its level as a badge, as the item page's header has it (2026-10-30, Andy).
    q<HTMLElement>('[data-eed-title]').textContent = `Edit ${e.PlanElementName ?? 'Item'}`;
    q<HTMLElement>('[data-eed-level]').replaceChildren(badge(c.levelName, 'neutral', 'sm'));
    // esa-dialog names itself from a slotted header when it renders: render it again for the new title.
    (dialog as unknown as { requestUpdate?: () => void }).requestUpdate?.();
    name.value = e.PlanElementName ?? '';
    name.errorText = '';
    q<HTMLElement>('[data-eed-dates]').hidden = parent;
    milestone.hidden = parent;
    const pd = q<HTMLElement>('[data-eed-parent-dates]');
    pd.hidden = !parent;
    pd.textContent = parent ? `Its dates come from its ${c.children.length} ${c.children.length === 1 ? 'item' : 'items'}; edit theirs to move it.` : '';
    void Promise.all(['esa-date-picker', 'esa-button-toggle', 'esa-switch-toggle'].map((t) => customElements.whenDefined(t))).then(() => {
      start.value = e.StartDate ?? '';
      end.value = e.EndDate ?? '';
      start.errorText = '';
      end.errorText = '';
      type.value = e.PlanDateType ?? 'Estimated';
      milestone.checked = !!e.IsMilestone;
      deliverable.checked = !!c.attrs.deliverable;
      drawTypeHelp();
      drawMilestone();
    });
    notes.value = e.Notes ?? '';
    owners = [...(c.attrs.owners ?? [])];
    drawOwners();
    q<HTMLElement>('[data-eed-deliverable-section]').hidden = !(c.level.canBeDeliverable || c.attrs.deliverable);
    controls.clear();
    const box = q<HTMLElement>('[data-eed-fields]');
    box.replaceChildren(
      ...c.fields.map(({ def, assign }) => {
        const ctl = control(def, c.attrs.values?.[def.id], assign.requiredToComplete);
        controls.set(def.id, { def, c: ctl });
        return ctl;
      })
    );
    q<HTMLElement>('[data-eed-fields-section]').hidden = !c.fields.length;
    q<HTMLElement>('[data-eed-fields-title]').textContent = `${c.levelName} Fields`;
  }

  // Which draft it saves to (2026-10-30, Andy: Save's chevron menu, in place of the Saves To select): the info box at
  // the top and Save's label follow the pick.
  const split = saveSplitOf(q('[data-eed-submit]'))!;
  let offered: EditOffer | null = null;
  let choice = '';
  const drawWhere = () => {
    const t = offered?.target;
    const where = (t ? `${t.describe(choice)} ${offered!.where}` : (offered?.where ?? '')).trim();
    q<HTMLElement>('[data-eed-where]').textContent = where;
    q<HTMLElement>('[data-eed-where-box]').hidden = !where;
    // The Save button names the draft picked (2026-10-30).
    q<HTMLElement>('[data-eed-submit-label]').textContent = t?.saveLabel ? t.saveLabel(choice) : (offered?.label ?? '');
  };
  split.addEventListener('menu-action', (e) => {
    const value = pickedValue(e);
    if (!offered?.target?.options.some((o) => o.value === value)) return;
    choice = value;
    drawWhere();
  });
  const submit = (publishNow: boolean) => {
    const edit = collect();
    if (!edit) return;
    finish(edit.changed.length ? { edit, publishNow, target: offered?.target ? choice : undefined } : null);
  };
  q<HTMLElement>('[data-eed-submit]').addEventListener('click', () => submit(false));
  q<HTMLElement>('[data-eed-publish]').addEventListener('click', () => submit(true));
  /** Typed changes the form holds (a form that won't read yet counts as changed). */
  const dirty = () => {
    if (!ctx) return false;
    const was = [name.errorText, start.errorText, end.errorText];
    const edit = collect();
    [name.errorText, start.errorText, end.errorText] = was;
    return !edit || edit.changed.length > 0;
  };
  /** Cancel, Esc or the close button: straight away when nothing changed; otherwise asked first. */
  async function leave(): Promise<void> {
    if (done) return;
    if (dirty()) {
      dialog.open = true;
      const ok = await confirm({ header: 'Discard Your Changes?', text: 'What you typed in this form isn’t saved anywhere yet.', confirmButtonLabel: 'Discard', cancelButtonLabel: 'Keep Editing', color: 'warn' });
      if (!ok) return;
    }
    finish(null);
  }
  q<HTMLElement>('[data-eed-cancel]').addEventListener('click', () => void leave());
  dialog.addEventListener('close', () => void leave());
  // Leaving the page with typed changes asks too.
  window.addEventListener('beforeunload', (e) => {
    if (!done && dirty()) e.preventDefault();
  });
  function finish(result: EditResult | null): void {
    if (done) return;
    done = true;
    dialog.open = false;
    settle(result);
  }

  return {
    open(c, offer, keep = false) {
      ctx = c;
      if (!keep) fill(c);
      q<HTMLElement>('[data-eed-submit-label]').textContent = offer.label;
      // A form kept on a second pass (Back to Edit) keeps the draft picked in it.
      const picked = keep && offered?.target ? choice : '';
      offered = offer;
      choice = offer.target ? (offer.target.options.some((o) => o.value === picked) ? picked : offer.target.value) : '';
      setSaveChoices(split, offer.target?.options ?? null, { newValue: NEW_DRAFT });
      drawWhere();
      q<HTMLElement>('[data-eed-publish]').hidden = !offer.publishNow;
      done = false;
      dialog.open = true;
      return new Promise<EditResult | null>((resolve) => (settle = resolve));
    },
  };
}
