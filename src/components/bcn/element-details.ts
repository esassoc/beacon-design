// The Details module's runtime (2026-10-28): the side column's lead card. See ./BcnElementDetails.astro for what it
// holds and why; ./element-module.ts for the contract.

import '@esa/ecology/esa-select';
import '@esa/ecology/esa-tooltip';
import type { ElementContext } from '../../lib/planning/element-context';
import { PLAN_VIEW_HREF, datesText } from '../../lib/planning/element-context';
import type { FieldDef } from '../../lib/planning/plan-config';
import { attributesAt, ownerAside, orgOf, type FieldValue } from '../../lib/planning/plan-repo';
import { healthOf, setStatus, statusOf, STATUSES, type ElementStatus } from '../../lib/planning/plan-records';
import { fillIcons } from '../../lib/planning/icons';
import { DRAFT_FIRST_ASK, quoted } from '../../lib/planning/plan-copy';
import { DEFAULT_REMINDERS, reminderOwners, reminderState } from '../../lib/planning/plan-reminders';
import { planAvatar } from './plan-people';
import { badge, HEALTH_VARIANT, STATUS_VARIANT } from './badge-bank';
import { setupStatusSelect, type StatusSelectController } from './status-select';
import { day, money, type ElementModuleSetup } from './element-module';

type Lit = HTMLElement & { value: unknown; options?: { value: string; label: string }[]; checked?: boolean; errorText?: string };

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
  fillIcons(root);

  const row = (label: string, ...content: (Node | string)[]) => {
    const dd = document.createElement('dd');
    dd.append(...content);
    list.append(el('dt', '', label), dd);
    return dd;
  };

  let statusCtl: StatusSelectController | null = null;
  let statusOnChange: (value: string) => void = () => {};
  function makeStatusSelect(): StatusSelectController {
    const node = root.querySelector<HTMLTemplateElement>('[data-det-tpl="status"]')!.content.firstElementChild!.cloneNode(true) as HTMLElement;
    node.addEventListener('change', (e) => statusOnChange((e as CustomEvent<{ value: string }>).detail.value));
    return setupStatusSelect(node);
  }

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
      // The tracker's status select (2026-10-29, the consistency audit), made once and kept across draws.
      const ctl = (statusCtl ??= makeStatusSelect());
      const wire = (v: string) => v.toLowerCase().replace(/ /g, '-');
      ctl.setValue(wire(status));
      // A deliverable completes through Record Completion, not here.
      ctl.element.querySelector<HTMLElement>('[data-value="completed"]')!.hidden = !!ctx.attrs.deliverable;
      ctl.element.querySelector('button')?.setAttribute('aria-label', `Status: ${status}`);
      statusOnChange = (v) => {
        const next = STATUSES.find((s) => wire(s) === v);
        if (next && next !== status) {
          const cleared = setStatus(ctx.planID, id, next);
          host.toast(`Status set to ${next} on Live.${cleared ? ` Health now reads ${next} too; the earlier health note is cleared.` : ''}`);
        }
      };
      statusDd.append(ctl.element);
      // Records are Live's: said where the page's banner talks about drafts.
      statusDd.append(el('span', 'bcn-det__muted', 'Saves to Live, not to a draft.'));
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
      // Change sits beside the badge on every kind of item, the reason under them (design QA, 2026-10-29: it sat inline on
      // a program and wrapped under the date on a task).
      if (ctx.canRecord && h.health !== 'Completed') {
        const change = tpl('change');
        change.addEventListener('click', () => root.dispatchEvent(new CustomEvent('bcn-element-health', { bubbles: true, detail: { elementId: id, reading: h } })));
        healthDd.append(change);
      }
      if (why) healthDd.append(el('span', 'bcn-det__muted bcn-det__why', why));
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
        const aside = ownerAside(name);
        if (aside) p.append(el('span', 'bcn-det__muted', `(${aside})`));
        people.append(p);
      }
      ownersDd.append(people);
    }

    // Reminders (2026-10-28, prod's action notifications): the owners' last email about this item and the next one,
    // on a task or milestone that isn't complete. Plan Settings, Reminders sets when they go.
    const due = ctx.element.EndDate ?? ctx.element.StartDate;
    // An item no one on the plan owns still reminds someone (2026-10-29, Andy: "fall back"): its parent's owners, or
    // the plan's Owners; the row says who.
    if (!ctx.children.length && due && statusOf(ctx.records, ctx.live, ctx.element.PlanElementID ?? '') !== 'Completed') {
      const { last, next } = reminderState(due, ctx.config.reminders ?? DEFAULT_REMINDERS);
      const parts = [last ? `Sent ${day(last.date)} (${last.kind})` : '', next ? `Next ${day(next.date)} (${next.kind})` : ''].filter(Boolean);
      const to = reminderOwners(ctx.repo, ctx.live, attributesAt(ctx.repo), ctx.element.PlanElementID ?? '');
      const who = (names: string[]) => (names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names.at(-1)}` : names[0] ?? 'no one');
      if (to.via === 'parent') parts.push(`No owner here, so they go to ${who(to.owners)}, who ${to.owners.length === 1 ? 'owns' : 'own'} ${to.from}`);
      if (to.via === 'plan') parts.push(`No owner here or above, so they go to the plan's Owners, ${who(to.owners)}`);
      row('Reminders', parts.length ? parts.join('. ') : 'Off for this plan');
    }

    // Which plan you're reading: the plan page's dot (orange Live, green yours, gray someone else's).
    const planDd = row('Plan');
    const dot = el('span', 'bcn-det__dot');
    dot.dataset.dot = ctx.mode === 'own' ? 'mine' : ctx.mode === 'view' ? 'other' : 'live';
    const link = el('a', '', ctx.mode === 'own' && ctx.draft ? `Your Draft ${quoted(ctx.draft.name)}` : ctx.draft ? ctx.draft.name : 'Live Plan');
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
      ctx.mode === 'live' && !canPublish && ctx.myRole !== 'Guest'
        ? DRAFT_FIRST_ASK
        : ctx.mode === 'view'
          ? `${firstName(ctx.draft!.owner)}'s draft is read-only.`
          : '';
    note.hidden = !note.textContent;
  }

  // Edit is the page header's alone (2026-10-28, the review: two Edits on one page).

  return { draw };
};
