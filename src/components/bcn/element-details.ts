// The Details module's runtime (2026-10-28): the side column's lead card. See ./BcnElementDetails.astro for what it
// holds and why; ./element-module.ts for the contract.

import '@esa/ecology/esa-side-dialog';
import '@esa/ecology/esa-select';
import '@esa/ecology/esa-combobox';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-textarea';
import '@esa/ecology/esa-date-picker';
import '@esa/ecology/esa-switch-toggle';
import '@esa/ecology/esa-tooltip';
import type { ElementContext } from '../../lib/planning/element-context';
import { PLAN_VIEW_HREF, datesText } from '../../lib/planning/element-context';
import type { FieldDef } from '../../lib/planning/plan-config';
import { PLAN_DIRECTORY, orgOf, type FieldValue } from '../../lib/planning/plan-repo';
import { healthOf, setStatus, statusOf, STATUSES, type ElementStatus } from '../../lib/planning/plan-records';
import { fillIcons } from '../../lib/planning/icons';
import { planAvatar } from './plan-people';
import { badge, HEALTH_VARIANT, STATUS_VARIANT } from './badge-bank';
import { day, money, type ElementModuleSetup } from './element-module';

type Lit = HTMLElement & { value: unknown; options?: { value: string; label: string }[]; checked?: boolean; errorText?: string };
type SideDialog = HTMLElement & { open: boolean; heading: string };

const firstName = (name: string) => name.split(' ')[0];
const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = '') => Object.assign(document.createElement(tag), { className, textContent: text });

/** A field's value as the card reads it; null when it has none. */
export function fieldText(def: FieldDef, value: FieldValue | undefined): string | null {
  if (value === null || value === undefined || value === '' || (Array.isArray(value) && !value.length)) return null;
  switch (def.type) {
    case 'money':
      return money(Number(value));
    case 'date':
      return day(String(value));
    case 'yesno':
      return value ? 'Yes' : 'No';
    case 'multiselect':
      return (value as string[]).join(', ');
    case 'person': {
      const org = orgOf(String(value));
      return org ? `${value} (${org})` : String(value);
    }
    case 'number':
      return def.unit ? `${value} ${def.unit}` : String(value);
    default:
      return String(value);
  }
}

export const setupDetailsModule: ElementModuleSetup = (root, host) => {
  const q = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const list = q<HTMLDListElement>('[data-det-list]');
  const tpl = (name: string) => (q<HTMLTemplateElement>(`[data-det-tpl="${name}"]`).content.firstElementChild!.cloneNode(true) as HTMLElement);
  const dialog = q<SideDialog>('[data-det-dialog]');
  fillIcons(root);

  const row = (label: string, ...content: (Node | string)[]) => {
    const dd = document.createElement('dd');
    dd.append(...content);
    list.append(el('dt', '', label), dd);
    return dd;
  };

  // ── The card ──
  function draw(ctx: ElementContext): void {
    list.replaceChildren();
    const id = ctx.element.PlanElementID ?? '';
    const leaf = ctx.children.length === 0;

    // Status: a leaf's is its owner's to set (a deliverable completes through Record Completion); a parent's is derived.
    const status: ElementStatus = ctx.inLive ? statusOf(ctx.records, ctx.live, id) : 'Not Started';
    const statusDd = row('Status');
    const completed = !!ctx.records.completions[id];
    if (leaf && ctx.canRecord && !completed) {
      const select = document.createElement('esa-select') as Lit;
      select.setAttribute('size', 'sm');
      select.setAttribute('aria-label', 'Status');
      const choices = STATUSES.filter((s) => !(ctx.attrs.deliverable && s === 'Complete'));
      void customElements.whenDefined('esa-select').then(() => {
        select.options = choices.map((s) => ({ value: s, label: s }));
        select.value = status;
      });
      select.addEventListener('change', () => {
        const next = String(select.value) as ElementStatus;
        if (next && next !== status) {
          setStatus(ctx.planID, id, next);
          host.toast(`Status set to ${next}.`);
        }
      });
      statusDd.append(select);
      if (ctx.attrs.deliverable) statusDd.append(el('span', 'bcn-det__muted', 'Record Completion to complete it.'));
    } else {
      statusDd.append(badge(status, STATUS_VARIANT[status], 'sm'));
      if (!leaf) statusDd.append(el('span', 'bcn-det__muted', `From its ${ctx.children.length} ${ctx.children.length === 1 ? 'item' : 'items'}`));
      else if (completed) statusDd.append(el('span', 'bcn-det__muted', 'Completion recorded'));
    }

    // Health: derived, or an owner's override with its note; stale after 30 days.
    const healthDd = row('Health');
    if (ctx.inLive) {
      const h = healthOf(ctx.records, ctx.live, id, ctx.isDeliverable);
      healthDd.append(badge(h.stale ? `${h.health}, Update Missing` : h.health, h.stale ? 'warning' : HEALTH_VARIANT[h.health], 'sm'));
      const why = h.override ? `${firstName(h.override.by)}: ${h.why}` : h.why === 'On plan' || h.why === h.health ? '' : h.why;
      if (why) healthDd.append(el('span', 'bcn-det__muted', why));
      if (ctx.canRecord && h.health !== 'Complete') {
        const change = tpl('change');
        change.addEventListener('click', () => root.dispatchEvent(new CustomEvent('bcn-element-health', { bubbles: true, detail: { elementId: id, reading: h } })));
        healthDd.append(change);
      }
    } else healthDd.append(el('span', 'bcn-det__unset', 'New in this draft'));

    row('Dates', datesText(ctx.element));

    const owners = ctx.attrs.owners ?? [];
    const ownersDd = row(owners.length === 1 ? 'Owner' : 'Owners');
    if (!owners.length) ownersDd.append(el('span', 'bcn-det__unset', 'None Yet'));
    else {
      const people = el('span', 'bcn-det__people');
      for (const name of owners) {
        const p = el('span', 'bcn-det__owner');
        p.append(planAvatar(name, 'xs'), name);
        const org = orgOf(name);
        if (org) p.append(el('span', 'bcn-det__muted', `(${org})`));
        people.append(p);
      }
      ownersDd.append(people);
    }

    // Which plan you're reading: the plan page's dot (orange Live, green yours, gray someone else's).
    const planDd = row('Plan');
    const dot = el('span', 'bcn-det__dot');
    dot.dataset.dot = ctx.mode === 'own' ? 'mine' : ctx.mode === 'view' ? 'other' : 'live';
    const link = el('a', '', ctx.mode === 'own' ? 'Your Draft' : ctx.draft ? ctx.draft.name : 'Live Plan');
    link.href = PLAN_VIEW_HREF(ctx.planID, undefined, ctx.draft?.id);
    planDd.append(dot, link);

    if (ctx.level.canBeDeliverable || ctx.attrs.deliverable) row('Deliverable', ctx.attrs.deliverable ? 'Yes' : 'No');

    // The level's fields, in the plan's order; the page shows the ones set to show on it.
    const fields = ctx.fields.filter((f) => f.assign.shownIn.includes('page'));
    if (fields.length) {
      list.append(el('div', 'bcn-det__rule'));
      for (const { def, assign } of fields) {
        const text = fieldText(def, ctx.attrs.values?.[def.id]);
        const dd = row(def.label);
        if (def.help) dd.title = def.help;
        if (text === null) {
          dd.append(el('span', 'bcn-det__unset', 'Not Set'));
          if (assign.requiredToComplete) dd.append(el('span', 'bcn-det__needed', 'Needed to Complete'));
        } else if (def.type === 'link') {
          const a = el('a', '', text);
          a.href = text;
          a.target = '_blank';
          a.rel = 'noopener';
          dd.append(a);
        } else if (def.type === 'person') {
          const name = String(ctx.attrs.values?.[def.id]);
          const p = el('span', 'bcn-det__owner');
          p.append(planAvatar(name, 'xs'), name);
          if (orgOf(name)) p.append(el('span', 'bcn-det__muted', `(${orgOf(name)})`));
          dd.append(p);
        } else dd.append(text);
      }
    }
    if (ctx.element.Notes) {
      list.append(el('div', 'bcn-det__rule'));
      row('Notes', el('span', 'bcn-det__notes', ctx.element.Notes));
    }

    // Why it won't edit here, in the plan page's small italic; your draft gets the Edit button instead.
    const canPublish = ctx.myRole !== 'Contributor' && ctx.myRole !== 'Guest';
    const note = q('[data-det-note]');
    note.textContent =
      ctx.mode === 'live'
        ? `Live is read-only. ${canPublish ? 'Edit in a Draft' : 'Make a Scenario'} to change owners and fields.`
        : ctx.mode === 'view'
          ? `${firstName(ctx.draft!.owner)}'s draft is read-only.`
          : '';
    note.hidden = !note.textContent;
    q('[data-det-edit]').hidden = !ctx.canEditPlan;
  }

  // ── The editor (your draft) ──
  let editing: { owners: string[]; deliverable: boolean; values: Record<string, FieldValue> } | null = null;
  const controls = new Map<string, Lit>();
  const ownersList = q<HTMLUListElement>('[data-det-owners]');
  const addOwner = q<Lit>('[data-det-add-owner]');

  function drawOwners(): void {
    if (!editing) return;
    ownersList.replaceChildren(
      ...editing.owners.map((name) => {
        const li = document.createElement('li');
        const label = el('span', '', name);
        if (orgOf(name)) label.append(' ', el('span', 'bcn-det__org', `(${orgOf(name)})`));
        const remove = tpl('remove');
        remove.querySelector('button')?.setAttribute('aria-label', `Remove ${name}`);
        remove.addEventListener('click', () => {
          editing!.owners = editing!.owners.filter((n) => n !== name);
          drawOwners();
        });
        li.append(planAvatar(name, 'xs'), label, remove);
        return li;
      })
    );
    void customElements.whenDefined('esa-combobox').then(() => {
      addOwner.options = PLAN_DIRECTORY.filter((n) => !editing!.owners.includes(n)).map((n) => ({ value: n, label: orgOf(n) ? `${n} (${orgOf(n)})` : n }));
    });
  }
  addOwner.addEventListener('change', () => {
    const picked = String(addOwner.value ?? '');
    if (!picked || !editing || editing.owners.includes(picked)) return;
    editing.owners = [...editing.owners, picked];
    drawOwners();
    requestAnimationFrame(() => (addOwner.value = ''));
  });

  /** One control per field, by type; its value read back on save. */
  function control(def: FieldDef, value: FieldValue | undefined): Lit {
    let c: Lit;
    const opts = (list: readonly string[]) => list.map((o) => ({ value: o, label: o }));
    switch (def.type) {
      case 'longtext':
        c = document.createElement('esa-textarea') as Lit;
        c.setAttribute('rows', '3');
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
        c.setAttribute('label-position', 'end');
        break;
      default:
        c = document.createElement('esa-text-field') as Lit;
        if (def.type === 'number' || def.type === 'money') c.setAttribute('inputmode', 'decimal');
        if (def.type === 'money') c.setAttribute('prefix', '$');
        if (def.type === 'link') c.setAttribute('placeholder', 'https://');
    }
    c.setAttribute('size', 'sm');
    c.setAttribute('label', def.label);
    if (def.help) c.setAttribute('help-text', def.help);
    const tag = c.tagName.toLowerCase();
    void customElements.whenDefined(tag).then(() => {
      if (def.type === 'select' || def.type === 'multiselect') c.options = opts(def.options ?? []);
      if (def.type === 'person') c.options = PLAN_DIRECTORY.map((n) => ({ value: n, label: orgOf(n) ? `${n} (${orgOf(n)})` : n }));
      if (def.type === 'yesno') c.checked = !!value;
      else if (def.type === 'multiselect') c.value = Array.isArray(value) ? value : [];
      else c.value = value === null || value === undefined ? '' : String(value);
    });
    return c;
  }
  function readControl(def: FieldDef, c: Lit): FieldValue {
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

  function openEditor(): void {
    const ctx = host.ctx();
    if (!ctx.canEditPlan) return;
    editing = { owners: [...(ctx.attrs.owners ?? [])], deliverable: !!ctx.attrs.deliverable, values: { ...(ctx.attrs.values ?? {}) } };
    dialog.heading = `Edit ${ctx.element.PlanElementName ?? 'Details'}`;
    drawOwners();
    const deliverableSection = q('[data-det-deliverable-section]');
    deliverableSection.hidden = !(ctx.level.canBeDeliverable || ctx.attrs.deliverable);
    const toggle = q<Lit>('[data-det-deliverable]');
    void customElements.whenDefined('esa-switch-toggle').then(() => (toggle.checked = editing!.deliverable));
    const box = q('[data-det-fields]');
    controls.clear();
    box.replaceChildren(
      ...ctx.fields.map(({ def }) => {
        const c = control(def, editing!.values[def.id]);
        controls.set(def.id, c);
        return c;
      })
    );
    q('[data-det-fields-head]').hidden = !ctx.fields.length;
    dialog.open = true;
  }
  q('[data-det-edit]').addEventListener('click', openEditor);
  q('[data-det-cancel]').addEventListener('click', () => (dialog.open = false));
  q('[data-det-save]').addEventListener('click', async () => {
    const ctx = host.ctx();
    if (!editing) return;
    const toggle = q<Lit>('[data-det-deliverable]');
    const values: Record<string, FieldValue> = {};
    const changed: string[] = [];
    for (const { def } of ctx.fields) {
      const c = controls.get(def.id);
      if (!c) continue;
      const v = readControl(def, c);
      values[def.id] = v;
      if (JSON.stringify(v ?? null) !== JSON.stringify(ctx.attrs.values?.[def.id] ?? null)) changed.push(def.label);
    }
    const owners = editing.owners;
    if (JSON.stringify(owners) !== JSON.stringify(ctx.attrs.owners ?? [])) changed.unshift(owners.length === 1 ? 'Owner' : 'Owners');
    const deliverable = !q('[data-det-deliverable-section]').hidden ? !!toggle.checked : !!ctx.attrs.deliverable;
    if (deliverable !== !!ctx.attrs.deliverable) changed.push('Deliverable');
    dialog.open = false;
    if (!changed.length) return;
    await host.editAttributes({ owners, deliverable, values }, changed.join(', '));
    host.toast('Saved to your draft.');
  });

  return { draw };
};
