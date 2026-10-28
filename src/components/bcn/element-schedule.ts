// The Schedule module's runtime (2026-10-28): dates, waits on, blocks, and a parent's children on a small timeline.
// See ./BcnElementSchedule.astro; ./element-module.ts for the contract.

import { type ElementContext } from '../../lib/planning/element-context';
import { PLAN_DATE_TYPE_HINTS } from '../../lib/planning/plan-element';
import type { PlanElementDto } from '../../lib/planning/model';
import { flattenPlan, signedShift } from '../../lib/planning/plan-repo';
import { fillIcons } from '../../lib/planning/icons';
import { type ElementModuleSetup } from './element-module';

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = '') => Object.assign(document.createElement(tag), { className, textContent: text });
const day = (iso: string | null | undefined) => (iso ? new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '');
const monthYear = (iso: string | null | undefined) => (iso ? new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }) : '');
const startOf = (e: PlanElementDto) => e.SpanStartDate ?? e.StartDate ?? null;
const endOf = (e: PlanElementDto) => e.SpanEndDate ?? e.EndDate ?? e.StartDate ?? null;
const daysBetween = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);

/** "9 months", "3 weeks", "12 days". */
function duration(days: number): string {
  if (days >= 60) {
    const m = Math.round(days / 30.44);
    return `${m} months`;
  }
  if (days >= 14) return `${Math.round(days / 7)} weeks`;
  return `${days} ${days === 1 ? 'day' : 'days'}`;
}

export const setupScheduleModule: ElementModuleSetup = (root) => {
  const q = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  fillIcons(root);

  function draw(ctx: ElementContext, settings: { childTimeline?: boolean } | undefined): void {
    const e = ctx.element;
    const id = e.PlanElementID ?? '';

    // Dates.
    const dl = q<HTMLDListElement>('[data-esch-dates]');
    dl.replaceChildren();
    const row = (label: string, ...content: (Node | string)[]) => {
      const dd = document.createElement('dd');
      dd.append(...content);
      dl.append(el('dt', '', label), dd);
      return dd;
    };
    const start = startOf(e);
    const end = endOf(e);
    const parent = ctx.children.length > 0;
    if (e.IsMilestone) row('Date', end ? day(end) : 'Not scheduled');
    else {
      row(parent ? 'Starts' : 'Start', start ? day(start) : 'Not scheduled');
      row(parent ? 'Ends' : 'End', end ? day(end) : 'Not scheduled');
      if (start && end) row('Duration', duration(daysBetween(start, end) + 1));
    }
    if (parent) row('Dates From', el('span', 'bcn-esch__muted', `Its ${ctx.children.length} ${ctx.children.length === 1 ? 'item' : 'items'}`));
    else if (e.PlanDateType) {
      const dd = row('Date Type', e.PlanDateType);
      dd.title = PLAN_DATE_TYPE_HINTS[e.PlanDateType];
      dd.append(el('span', 'bcn-esch__muted', e.PlanDateType === 'Scheduled' ? 'Fixed; shifts never move it' : 'Moves when the plan is rescheduled'));
    }
    // In a draft, where Live has it, when that differs.
    if (ctx.draft && ctx.inLive) {
      const was = flattenPlan(ctx.live.Elements).find((x) => x.element.PlanElementID === id)?.element;
      const ws = was ? startOf(was) : null;
      const we = was ? endOf(was) : null;
      if (was && (ws !== start || we !== end)) {
        const shift = end && we ? daysBetween(we, end) : start && ws ? daysBetween(ws, start) : 0;
        const dd = row('On Live', `${day(ws)} to ${day(we)}`);
        if (shift) dd.append(el('span', 'bcn-esch__was', `This draft: ${signedShift(shift)}`));
      }
    }

    // Waits on, blocks.
    const deps = q('[data-esch-deps]');
    deps.replaceChildren();
    const section = (title: string, list: { id: string; lag?: number }[], none: string) => {
      const s = el('section');
      s.append(el('h3', '', title));
      if (!list.length) {
        s.append(el('span', 'bcn-esch__none', none));
        return s;
      }
      const ul = el('ul');
      for (const d of list) {
        const other = ctx.elementById(d.id);
        if (!other) continue;
        const li = el('li');
        const a = el('a', '', other.PlanElementName ?? '');
        a.href = ctx.hrefOf(d.id);
        const lag = d.lag ? `, ${d.lag > 0 ? '+' : ''}${d.lag} days lag` : '';
        li.append(a, el('span', 'bcn-esch__dep-meta', `${other.IsMilestone ? 'Due' : 'Ends'} ${day(endOf(other))}${lag}`));
        ul.append(li);
      }
      s.append(ul);
      return s;
    };
    const waits = ctx.dependencies.waitsOn.map((d) => ({ id: d.PredecessorPlanElementID ?? '', lag: d.LagDays }));
    const blocks = ctx.dependencies.blocks.map((d) => ({ id: d.SuccessorPlanElementID ?? '', lag: d.LagDays }));
    if (waits.length || blocks.length || !parent) deps.append(section('Waits On', waits, 'Nothing'), section('Blocks', blocks, 'Nothing'));

    // A parent's children on a small timeline (a level setting, on by default for parents).
    const tl = q('[data-esch-timeline]');
    const kids = ctx.children;
    tl.hidden = !(parent && settings?.childTimeline !== false && start && end);
    if (tl.hidden) return;
    const from = Date.parse(start!);
    const span = Math.max(1, Date.parse(end!) - from);
    const pct = (iso: string) => `${Math.min(100, Math.max(0, ((Date.parse(iso) - from) / span) * 100))}%`;
    q('[data-esch-tl-start]').textContent = monthYear(start);
    q('[data-esch-tl-end]').textContent = monthYear(end);
    const today = new Date().toISOString().slice(0, 10);
    const showToday = today >= start! && today <= end!;
    q('[data-esch-tl-rows]').replaceChildren(
      ...kids.map((k) => {
        const li = el('li');
        const a = el('a', '', k.PlanElementName ?? '');
        a.href = ctx.hrefOf(k.PlanElementID ?? '');
        a.title = `${k.PlanElementName}: ${k.IsMilestone ? day(endOf(k)) : `${day(startOf(k))} to ${day(endOf(k))}`}`;
        const track = el('span', 'bcn-esch__track');
        const ks = startOf(k);
        const ke = endOf(k);
        if (ks && ke) {
          const bar = el('span', 'bcn-esch__bar');
          if (k.IsMilestone) {
            bar.dataset.milestone = '';
            bar.style.left = pct(ke);
          } else {
            bar.style.left = pct(ks);
            bar.style.width = `calc(${pct(ke)} - ${pct(ks)})`;
          }
          if (k.Children?.length) bar.dataset.parent = '';
          track.append(bar);
        }
        if (showToday) {
          const t = el('span', 'bcn-esch__today');
          t.style.left = pct(today);
          t.title = 'Today';
          track.append(t);
        }
        li.append(a, track);
        return li;
      })
    );
  }

  return { draw };
};
