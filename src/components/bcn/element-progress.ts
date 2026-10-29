// The Progress module's runtime (2026-10-28): percent complete by weighted deliverables against planned, the split
// by status, overdue and due next. See ./BcnElementProgress.astro; ./element-module.ts for the contract.

import type { ElementContext } from '../../lib/planning/element-context';
import type { PlanElementDto } from '../../lib/planning/model';
import { flattenPlan } from '../../lib/planning/plan-repo';
import { healthOf, progressOf, statusOf, todayIso, STATUSES } from '../../lib/planning/plan-records';
import { badge, HEALTH_VARIANT } from './badge-bank';
import { setModuleNote, type ElementModuleSetup } from './element-module';

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = '') => Object.assign(document.createElement(tag), { className, textContent: text });
const day = (iso: string | null | undefined) => (iso ? new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '');
const endOf = (e: PlanElementDto) => e.SpanEndDate ?? e.EndDate ?? e.StartDate ?? null;
const SHOWN = 4;

export const setupProgressModule: ElementModuleSetup = (root) => {
  const q = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;

  function draw(ctx: ElementContext): void {
    const id = ctx.element.PlanElementID ?? '';
    // Records are Live's: progress reads Live's tree, whatever the page shows.
    if (!ctx.inLive) {
      q('[data-eprog-pct]').textContent = '0%';
      q('[data-eprog-basis]').textContent = 'New in this draft: progress starts once it is on Live.';
      return;
    }
    const today = todayIso();
    const p = progressOf(ctx.records, ctx.live, id, ctx.isDeliverable, today);
    const earned = Math.round(p.earned * 100);
    const planned = Math.round(p.planned * 100);
    q('[data-eprog-pct]').textContent = `${earned}%`;
    const gap = q('[data-eprog-gap]');
    const behind = planned - earned;
    gap.textContent = behind > 0 ? `${behind} points behind plan` : behind < 0 ? `${-behind} points ahead of plan` : 'On Track';
    gap.dataset.tone = behind > 10 ? 'behind' : '';
    q('[data-eprog-earned]').style.width = `${earned}%`;
    const tick = q('[data-eprog-planned]');
    tick.style.left = `calc(${planned}% - 1px)`;
    tick.title = `${planned}% planned by today`;
    q('[data-eprog-meter]').setAttribute('aria-label', `${earned}% complete; ${planned}% planned by today`);
    const weighted = p.basis === 'deliverables' && Object.keys(ctx.records.weights).length > 0;
    q('[data-eprog-basis]').textContent =
      p.basis === 'deliverables'
        ? `By its ${p.counted} deliverables and milestones${weighted ? ', weighted' : ''}: ${p.done} complete. The mark is where it should be by today.`
        : `By its ${p.counted} tasks (it has no deliverables): ${p.done} complete. The mark is where it should be by today.`;
    setModuleNote(root, null);

    // What's under it, by status.
    q('[data-eprog-split]').replaceChildren(
      ...STATUSES.filter((s) => p.byStatus[s] > 0).map((s) => {
        const span = el('span');
        const dot = el('i');
        dot.dataset.status = s;
        span.append(dot, el('b', '', String(p.byStatus[s])), s);
        return span;
      })
    );

    // Overdue, and due next: the leaves under it, not complete.
    const leaves = flattenPlan(ctx.element.Children ?? [])
      .map((x) => x.element)
      .filter((e) => !(e.Children ?? []).length && statusOf(ctx.records, ctx.live, e.PlanElementID ?? '') !== 'Completed');
    const late = leaves.filter((e) => (endOf(e) ?? '9999') < today).sort((a, b) => (endOf(a) ?? '').localeCompare(endOf(b) ?? ''));
    const next = leaves
      .filter((e) => (endOf(e) ?? '') >= today && (ctx.isDeliverable(e.PlanElementID ?? '') || e.IsMilestone))
      .sort((a, b) => (endOf(a) ?? '').localeCompare(endOf(b) ?? ''));
    const list = (section: string, items: PlanElementDto[]) => {
      const s = q(`[data-eprog-${section}]`);
      s.hidden = !items.length;
      q(`[data-eprog-${section}-list]`).replaceChildren(
        ...items.slice(0, SHOWN).map((e) => {
          const li = el('li');
          const a = el('a', '', e.PlanElementName ?? '');
          a.href = ctx.hrefOf(e.PlanElementID ?? '');
          const when = el('span', 'bcn-eprog__when');
          const h = healthOf(ctx.records, ctx.live, e.PlanElementID ?? '', ctx.isDeliverable, today);
          when.append(badge(h.health, HEALTH_VARIANT[h.health], 'xs'), day(endOf(e)));
          li.append(a, when);
          return li;
        }),
        ...(items.length > SHOWN ? [el('li', 'bcn-eprog__when', `And ${items.length - SHOWN} more`)] : [])
      );
    };
    list('overdue', late);
    list('next', next);
  }

  return { draw };
};
