// The Lineage module's runtime (2026-10-28): the rail of parents, this item, its children and the items beside it.
// See ./BcnElementLineage.astro for why; ./element-module.ts for the contract.

import type { ElementContext } from '../../lib/planning/element-context';
import type { PlanElementDto } from '../../lib/planning/model';
import { planSpan } from '../../lib/planning/plan-repo';
import { statusOf } from '../../lib/planning/plan-records';
import { planIcon } from '../../lib/planning/icons';
import { setModuleCount, type ElementModuleSetup } from './element-module';

/** A glyph per level, top down (the fish detail pages' tiers): program, study, sub-study, task. */
const TIER_GLYPH = ['folder', 'flask-conical', 'git-branch', 'square-check'];
const SHOWN_CHILDREN = 8;

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = '') => Object.assign(document.createElement(tag), { className, textContent: text });
const startOf = (e: PlanElementDto) => e.SpanStartDate ?? e.StartDate ?? null;
const endOf = (e: PlanElementDto) => e.SpanEndDate ?? e.EndDate ?? e.StartDate ?? null;
const month = (iso: string | null) => (iso ? new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }) : '');

export const setupLineageModule: ElementModuleSetup = (root) => {
  const rail = root.querySelector<HTMLOListElement>('[data-elin-rail]')!;
  const siblings = root.querySelector<HTMLElement>('[data-elin-siblings]')!;
  /** Which element's children were opened past the first few (kept across redraws of the same page). */
  let expanded = false;

  function draw(ctx: ElementContext): void {
    const span = planSpan(ctx.plan);
    const from = span.start ? Date.parse(span.start) : 0;
    const to = span.end ? Date.parse(span.end) : 1;
    const hairline = (e: PlanElementDto) => {
      const track = el('span', 'bcn-elin__span');
      const s = startOf(e);
      const f = endOf(e);
      if (!s || !f || to <= from) return track;
      const mark = el('i');
      mark.style.left = `${Math.max(0, ((Date.parse(s) - from) / (to - from)) * 100)}%`;
      mark.style.width = `${Math.max(0, ((Date.parse(f) - Date.parse(s)) / (to - from)) * 100)}%`;
      track.append(mark);
      track.title = `${month(s)} to ${month(f)}`;
      return track;
    };
    const node = (e: PlanElementDto, depth: number, current: boolean) => {
      const li = el('li', `bcn-elin__node${current ? ' bcn-elin__node--current' : ''}`);
      const glyph = el('span', 'bcn-elin__glyph');
      glyph.innerHTML = planIcon(TIER_GLYPH[Math.min(depth, TIER_GLYPH.length) - 1] ?? 'square-check', 14);
      const body = el('span', 'bcn-elin__body');
      body.append(el('span', 'bcn-elin__kind', `${e.LevelSingularName ?? 'Item'}${ctx.isDeliverable(e.PlanElementID ?? '') ? ', Deliverable' : ''}`));
      if (current) {
        const name = el('span', 'bcn-elin__name', e.PlanElementName ?? '');
        name.setAttribute('aria-current', 'page');
        body.append(name);
      } else {
        const a = el('a', 'bcn-elin__name', e.PlanElementName ?? '');
        a.href = ctx.hrefOf(e.PlanElementID ?? '');
        body.append(a);
      }
      body.append(hairline(e));
      li.append(glyph, body);
      return { li, body };
    };

    // Up: the parents, top first.
    const rows = ctx.ancestors.map((a, i) => node(a, (a.LevelDepth ?? i + 1), false).li);
    // This item, and under it, its children.
    const here = node(ctx.element, ctx.depth, true);
    const kids = ctx.children;
    if (kids.length) {
      const ul = el('ul', 'bcn-elin__children');
      const shown = expanded ? kids : kids.slice(0, SHOWN_CHILDREN);
      for (const k of shown) {
        const id = k.PlanElementID ?? '';
        const li = el('li', 'bcn-elin__child');
        const dot = el('span', 'bcn-elin__dot');
        const status = ctx.inLive && ctx.elementById(id) && ctx.live ? statusOf(ctx.records, ctx.live, id) : 'Not Started';
        dot.dataset.status = status;
        dot.title = status;
        if (k.IsMilestone) dot.dataset.milestone = '';
        const text = el('span', 'bcn-elin__body');
        const a = el('a', 'bcn-elin__name', k.PlanElementName ?? '');
        a.href = ctx.hrefOf(id);
        const s = startOf(k);
        const f = endOf(k);
        const when = k.IsMilestone ? month(f) : s && f ? (month(s) === month(f) ? month(s) : `${month(s)} to ${month(f)}`) : 'Not scheduled';
        text.append(a, el('span', 'bcn-elin__child-meta', `${status}, ${when}`));
        li.append(dot, text);
        ul.append(li);
      }
      if (kids.length > SHOWN_CHILDREN) {
        const more = el('button', 'bcn-elin__more', expanded ? 'Show Fewer' : `Show All ${kids.length}`);
        more.type = 'button';
        more.addEventListener('click', () => {
          expanded = !expanded;
          draw(ctx);
        });
        ul.append(more);
      }
      here.body.append(ul);
    }
    rows.push(here.li);
    rail.replaceChildren(...rows);
    setModuleCount(root, null);

    // Beside it: previous and next under the same parent.
    const parent = ctx.ancestors.at(-1);
    const peers = parent ? [...(parent.Children ?? [])] : [...(ctx.plan.Elements ?? [])];
    const at = peers.findIndex((p) => p.PlanElementID === ctx.element.PlanElementID);
    const set = (which: 'prev' | 'next', e: PlanElementDto | undefined) => {
      const a = root.querySelector<HTMLAnchorElement>(`[data-elin-sib="${which}"]`)!;
      a.hidden = !e;
      if (!e) return;
      a.href = ctx.hrefOf(e.PlanElementID ?? '');
      a.querySelector('[data-elin-sib-name]')!.textContent = e.PlanElementName ?? '';
    };
    const prev = at > 0 ? peers[at - 1] : undefined;
    const next = at >= 0 && at < peers.length - 1 ? peers[at + 1] : undefined;
    set('prev', prev);
    set('next', next);
    siblings.hidden = !prev && !next;
  }

  return { draw };
};
