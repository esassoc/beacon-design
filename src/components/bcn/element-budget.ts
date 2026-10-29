// The Budget module's runtime (2026-10-28): money by fiscal year, a parent's summed from its items, Live's beside a
// draft's. See ./BcnElementBudget.astro; ./element-module.ts for the contract.

import { PLAN_VIEW_HREF, type ElementContext } from '../../lib/planning/element-context';
import { todayIso } from '../../lib/planning/plan-records';
import { budgetAt, fiscalYearLabel, fiscalYearOf, flattenPlan, type PlanBudget } from '../../lib/planning/plan-repo';
import { fillIcons } from '../../lib/planning/icons';
import { money, setModuleNote, type ElementModuleSetup } from './element-module';

const signed = (n: number) => `${n < 0 ? '−' : '+'}${money(Math.abs(n))}`;

/** An element's money by fiscal year: its own cells, or the sum of the items under it. */
function byYear(budget: PlanBudget, ids: string[]): Map<number, number> {
  const out = new Map<number, number>();
  for (const id of ids) for (const [fy, n] of Object.entries(budget[id] ?? {})) out.set(Number(fy), (out.get(Number(fy)) ?? 0) + n);
  return out;
}

export const setupBudgetModule: ElementModuleSetup = (root) => {
  const list = root.querySelector<HTMLDListElement>('[data-ebud-list]')!;
  fillIcons(root);

  function draw(ctx: ElementContext): void {
    const id = ctx.element.PlanElementID ?? '';
    root.querySelector<HTMLAnchorElement>('[data-ebud-open]')!.href = `${PLAN_VIEW_HREF(ctx.planID, 'budget', ctx.draft?.id)}&el=${encodeURIComponent(id)}`;
    const leaves = flattenPlan([ctx.element]).map((x) => x.element.PlanElementID ?? '');
    const now = byYear(ctx.budget, leaves);
    const was = ctx.draft ? byYear(budgetAt(ctx.repo), leaves) : null;
    const years = [...new Set([...now.keys(), ...(was?.keys() ?? [])])].sort((a, b) => a - b).filter((fy) => (now.get(fy) ?? 0) || (was?.get(fy) ?? 0));
    const thisYear = fiscalYearOf(todayIso());
    list.replaceChildren();
    let total = 0;
    let totalWas = 0;
    for (const fy of years) {
      const n = now.get(fy) ?? 0;
      const w = was?.get(fy) ?? n;
      total += n;
      totalWas += w;
      const dt = Object.assign(document.createElement('dt'), { textContent: fiscalYearLabel(fy) });
      if (fy === thisYear) dt.dataset.current = '';
      const dd = Object.assign(document.createElement('dd'), { textContent: money(n) });
      if (was && w !== n) dd.append(Object.assign(document.createElement('small'), { textContent: `${signed(n - w)} from Live` }));
      list.append(dt, dd);
    }
    root.querySelector<HTMLElement>('[data-ebud-empty]')!.hidden = years.length > 0;
    if (years.length) {
      const dt = Object.assign(document.createElement('dt'), { className: 'bcn-ebud__total', textContent: ctx.children.length ? `Total, ${leaves.length - 1} Items` : 'Total' });
      const dd = Object.assign(document.createElement('dd'), { className: 'bcn-ebud__total', textContent: money(total) });
      if (was && totalWas !== total) dd.append(Object.assign(document.createElement('small'), { textContent: `${signed(total - totalWas)} from Live` }));
      list.append(dt, dd);
    }
    setModuleNote(root, ctx.children.length ? 'The sum of its items, from the sheet' : null);
  }

  return { draw };
};
