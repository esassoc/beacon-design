// <BcnPlanRevisions>'s runtime. Two jobs on one screen (the check-in: publish and restore share a diff):
//   ?draft=   review a draft: stop 0 is Live, then each revision; publish the one under the "to" handle
//   (none)    the plan's history: one stop per version; restore the one under the "to" handle
// States are snapshots (versions) or replays of a revision's overrides on Live (Jamie's previewDraft).

import { PlanGanttChart, type GanttRowDelta } from './plan-gantt-chart';
import { setupRevisionSlider, type RevisionSelection, type RevisionStop } from './revision-slider';
import { fillIcons } from '../../lib/planning/icons';
import { planGanttView } from '../../lib/planning/plan-gantt-rows';
import { planConflicts } from '../../lib/planning/plan-conflicts';
import { planDraftOverlay } from '../../lib/planning/plan-draft';
import { toLocalIsoDate } from '../../lib/planning/plan-page';
import { formatPlanDateRange } from '../../lib/planning/plan-schedule-preview';
import { planApi } from '../../lib/planning/plan-server';
import type { PlanDetailDto } from '../../lib/planning/model';
import {
  currentUserName,
  draftState,
  ensureSeeded,
  getRepo,
  latestVersion,
  listPlanSummaries,
  planCompare,
  planSpan,
  publishDraft,
  restoreVersion,
  shiftText,
  shiftWords,
  shortDate,
  timeAgo,
  versionsBehind,
  type PlanChange,
} from '../../lib/planning/plan-repo';
import { planAvatar, setButtonDisabled } from './plan-people';
import { PLAN_HREF, fillGlyphs, keepStudy } from './plan-repo-index';

type SwitchEl = HTMLElement & { checked: boolean };
const firstName = (name: string) => name.split(' ')[0];
const when = (iso: string) => `${timeAgo(iso)} (${shortDate(iso)})`;

interface Stop extends RevisionStop {
  state: () => Promise<PlanDetailDto>;
  /** The overrides this stop carries (a draft's revisions), to tell what the planner moved from what followed. */
  ownIDs: ReadonlySet<string>;
}

export async function setupPlanRevisions(root: HTMLElement): Promise<void> {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  await ensureSeeded();
  const params = new URLSearchParams(location.search);
  const planID = params.get('id') ?? (await listPlanSummaries())[0]?.repo.planID;
  if (!planID) return;
  const repo = getRepo(planID);
  const me = currentUserName();
  const draft = repo.drafts.find((d) => d.id === params.get('draft')) ?? null;
  const live = await planApi.getPlan(planID);
  const latest = latestVersion(repo);
  const today = toLocalIsoDate(new Date());

  // ── Stops ──
  const cache = new Map<number, Promise<PlanDetailDto>>();
  const stops: Stop[] = draft
    ? [
        { author: latest.author, title: `Live · Rev ${latest.number}`, when: when(latest.at), message: latest.message, mark: 'live', state: async () => live, ownIDs: new Set() },
        ...draft.revisions.map((rev, i) => ({
          author: rev.author,
          title: `Edit ${i + 1} by ${rev.author}`,
          when: when(rev.at),
          message: rev.message,
          state: async () => (await draftState(draft, i + 1)).Plan,
          ownIDs: new Set(rev.overrides.map((o) => o.PlanElementID)),
        })),
      ]
    : repo.versions.map((v) => ({
        author: v.author,
        title: `Revision ${v.number}${v.label ? ` · ${v.label}` : ''} by ${v.author}`,
        when: when(v.at),
        message: v.message,
        mark: v.label ? ('labelled' as const) : undefined,
        state: async () => v.plan,
        ownIDs: new Set<string>(),
      }));
  const stateAt = (i: number) => {
    if (!cache.has(i)) cache.set(i, stops[i].state());
    return cache.get(i)!;
  };

  // ── Head ──
  const title = draft ? `Review ${draft.owner === me ? 'your draft' : `${firstName(draft.owner)}'s draft`}` : 'Revisions';
  const h1 = document.querySelector('.page-layout__title h1');
  const text = h1 && [...h1.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim());
  if (text) text.textContent = `${title} · ${live.PlanName}`;
  document.title = `${title} · ${live.PlanName} | Beacon`;
  const crumbs = document.querySelectorAll<HTMLAnchorElement | HTMLElement>('.breadcrumbs .breadcrumb-item, .breadcrumbs [aria-current]');
  const planCrumb = [...crumbs].find((c) => c.textContent?.trim() === 'Plan');
  if (planCrumb) {
    planCrumb.textContent = live.PlanName ?? 'Plan';
    if (planCrumb instanceof HTMLAnchorElement) planCrumb.href = keepStudy(PLAN_HREF(planID, draft ? `&draft=${draft.id}` : ''));
  }
  q<HTMLAnchorElement>('[data-prv-exit]').href = keepStudy(PLAN_HREF(planID, draft ? `&draft=${draft.id}` : ''));
  // The draft-mode concepts (2026-10-27): reviewing a draft keeps the draft's look until it is published.
  const concept = draft ? params.get('concept') : null;
  const behind = draft ? versionsBehind(repo, draft) : 0;
  q<HTMLElement>('[data-prv-behind]').hidden = behind <= 0;
  q<HTMLElement>('[data-prv-behind-text]').textContent = `Live has ${behind} newer ${behind === 1 ? 'revision' : 'revisions'} than Rev ${draft?.baseVersion}`;

  // ── Chart ──
  const host = q<HTMLElement>('[data-bcn-plan-gantt]');
  if (concept) {
    root.dataset.concept = concept;
    host.dataset.draftLook = concept === 'pencil-paper' ? 'pencil' : concept;
    host.toggleAttribute('data-paper', concept === 'drafting' || concept === 'pencil-paper');
    host.toggleAttribute('data-in-draft', true);
    if (concept === 'night') host.dataset.scheme = 'night';
    if (concept === 'bench') {
      document.documentElement.toggleAttribute('data-bench', true);
      document.getElementById('sidebar-toggle')?.click();
    }
  }
  const tpl = (name: string) => host.querySelector<HTMLTemplateElement>(`[data-gantt-tpl="${name}"]`)!;
  const chart = new PlanGanttChart(host, { caret: tpl('caret'), apply: tpl('apply'), revert: tpl('revert'), badge: tpl('badge') }, {
    label: `${live.PlanName} compared`,
    density: 'compact',
    outlineWidth: 300,
    onRowSelect: (id) => select(id),
  });

  const show = q<SwitchEl>('[data-prv-show]');
  let sel: RevisionSelection = draft ? { from: 0, to: stops.length - 1, compareTwo: true } : { from: Math.max(0, stops.length - 2), to: stops.length - 1, compareTwo: false };
  let current: { from: PlanDetailDto; to: PlanDetailDto; changes: PlanChange[]; own: ReadonlySet<string> } | null = null;
  let selected: string | null = null;
  let token = 0;
  /** What each of the draft's edits moved, by edit number (the drafting concept's delta tags). */
  const editMoves = new Map<number, string[]>();

  async function compute(): Promise<void> {
    const mine = ++token;
    const [from, to] = await Promise.all([stateAt(sel.from), stateAt(sel.to)]);
    if (mine !== token) return;
    const fromOwn = stops[sel.from].ownIDs;
    const toOwn = stops[sel.to].ownIDs;
    // Moved by hand between these two stops: an override the "to" side has and the "from" side doesn't, or changed.
    const own = new Set([...toOwn].filter((id) => !fromOwn.has(id)));
    if (draft && sel.from > 0) {
      const a = draft.revisions[sel.from - 1].overrides;
      const b = draft.revisions[sel.to - 1]?.overrides ?? [];
      for (const o of b) {
        const was = a.find((x) => x.PlanElementID === o.PlanElementID);
        if (!was || was.StartDate !== o.StartDate || was.EndDate !== o.EndDate) own.add(o.PlanElementID);
      }
    }
    if (concept === 'drafting' && draft && !editMoves.size) {
      for (let i = 1; i < stops.length; i++) editMoves.set(i, planCompare(await stateAt(i - 1), await stateAt(i)).map((c) => c.id));
      if (mine !== token) return;
    }
    current = { from, to, changes: planCompare(from, to), own };
    draw();
  }

  function draw(): void {
    if (!current) return;
    const { from, to, changes, own } = current;
    drawCards();
    drawList(changes, own);
    const on = show.checked;
    const changed = new Set(changes.map((c) => c.id));
    const deltas = new Map<string, GanttRowDelta>(changes.filter((c) => c.status === 'moved').map((c) => [c.id, { text: c.endOnly ? `end ${shiftText(c.shiftDays)}` : shiftText(c.shiftDays), own: own.has(c.id) }]));
    const overlay = on ? planDraftOverlay(from, to, null, new Set(), changed, true) : null;
    chart.setAnnotations({
      // Drafting measures each change in its lane instead of drawing where it was, and tags it with its edit.
      draft: overlay && concept === 'drafting' ? { ...overlay, ghosts: false, measure: true, edits: editAt(changes) } : overlay,
      paper: concept === 'drafting' || concept === 'pencil-paper',
      rowDeltas: on ? deltas : null,
      conflicts: planConflicts(to).map((c) => ({ fromId: c.PredecessorPlanElementID, toId: c.SuccessorPlanElementID })),
      rowNotes: new Map(
        on
          ? changes.map((c) => [
              c.id,
              [
                { label: 'Was', value: formatPlanDateRange(c.fromStart, c.fromEnd, 'en-US') },
                { label: 'Moved by', value: own.has(c.id) ? 'hand' : 'its dependency' },
              ],
            ])
          : []
      ),
      countsDependents: false,
    });
    chart.setRange(focusRange(from, to, changes));
    const view = planGanttView(to);
    chart.setData({ rows: view.rows, links: view.links, landmarks: view.landmarks, today, outlineHeading: view.outlineHeading });
    chart.setSelectedId(selected);
    drawRail(view.rows.map((r) => r.id), changes, own);
  }

  /**
   * The chart zooms to the changes (new): the earliest and latest date any changed item had on either side, with two
   * months of room. A seven-year plan fitted beside the change list left every bar a sliver; the reviewer needs the
   * part that moved. No changes: the whole plan.
   */
  function focusRange(from: PlanDetailDto, to: PlanDetailDto, changes: PlanChange[]): { start: string; end: string } | null {
    const dates = changes.flatMap((c) => [c.fromStart, c.fromEnd, c.toStart, c.toEnd]).filter((d): d is string => !!d).sort();
    if (!dates.length) {
      const a = planSpan(from);
      const b = planSpan(to);
      const start = [a.start, b.start].filter(Boolean).sort()[0];
      const end = [a.end, b.end].filter(Boolean).sort().at(-1);
      return start && end ? { start, end } : null;
    }
    const pad = (iso: string, days: number) => new Date(Date.parse(iso) + days * 86_400_000).toISOString().slice(0, 10);
    return { start: pad(dates[0], -60), end: pad(dates[dates.length - 1], 60) };
  }

  /** Which edit last moved each changed row, from the stops between the handles (a draft's review only). */
  function editAt(changes: PlanChange[]): Map<string, number> {
    const out = new Map<string, number>();
    if (!draft) return out;
    const ids = new Set(changes.map((c) => c.id));
    for (let i = Math.max(1, sel.from + 1); i <= sel.to; i++) for (const id of editMoves.get(i) ?? []) if (ids.has(id)) out.set(id, i);
    return out;
  }

  function drawCards(): void {
    for (const side of ['from', 'to'] as const) {
      const card = q<HTMLElement>(`[data-prv-card="${side}"]`);
      const stop = stops[side === 'from' ? sel.from : sel.to];
      card.querySelector('[data-prv-avatar]')!.replaceChildren(planAvatar(stop.author, 'xs'));
      card.querySelector('[data-prv-title]')!.textContent = stop.title;
      card.querySelector('[data-prv-msg]')!.textContent = stop.message;
      const when = card.querySelector<HTMLElement>('[data-prv-when]')!;
      when.textContent = stop.when.replace(/ \(.*\)$/, '');
      when.title = stop.when;
    }
    const act = q<HTMLElement>('[data-prv-act]');
    const btn = act.querySelector<HTMLButtonElement>('button');
    const label = q<HTMLElement>('[data-prv-act-label]');
    if (draft) {
      act.hidden = draft.owner !== me;
      const isLast = sel.to === stops.length - 1;
      label.textContent = sel.to === 0 || isLast ? `Publish as Revision ${latest.number + 1}` : `Publish up to edit ${sel.to}`;
      setButtonDisabled(btn, sel.to === 0 || !current?.changes.length);
    } else {
      const isLatest = sel.to === stops.length - 1;
      act.hidden = false;
      label.textContent = isLatest ? 'Restore' : `Restore Revision ${repo.versions[sel.to].number}`;
      setButtonDisabled(btn, isLatest);
    }
  }

  function drawList(changes: PlanChange[], own: ReadonlySet<string>): void {
    q<HTMLElement>('[data-prv-summary]').textContent = String(changes.length);
    const list = q<HTMLUListElement>('[data-prv-list]');
    if (!changes.length) {
      list.innerHTML = '<li class="bcn-prv__empty typography-body-sm">No differences</li>';
      return;
    }
    // The planner's own moves first, then what followed, each in plan order.
    const ordered = [...changes.filter((c) => own.has(c.id)), ...changes.filter((c) => !own.has(c.id))];
    list.replaceChildren(
      ...ordered.map((c) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'bcn-prv__change typography-body-sm';
        a.href = `#row-${c.id}`;
        if (c.id === selected) a.setAttribute('aria-current', 'true');
        a.innerHTML = `<span class="bcn-prv__change-top"><span class="bcn-prv__change-name"></span><span class="bcn-prv__shift"></span></span><span class="bcn-prv__change-dates typography-meta"><del></del><ins></ins></span><span class="bcn-prv__cause typography-meta"></span>`;
        a.querySelector('.bcn-prv__change-name')!.textContent = c.name;
        a.querySelector('.bcn-prv__shift')!.textContent = c.status === 'moved' ? (c.endOnly ? `end ${shiftText(c.shiftDays)}` : shiftText(c.shiftDays)) : c.status;
        a.querySelector('del')!.textContent = formatPlanDateRange(c.fromStart, c.fromEnd, 'en-US');
        a.querySelector('ins')!.textContent = formatPlanDateRange(c.toStart, c.toEnd, 'en-US');
        const cause = a.querySelector<HTMLElement>('.bcn-prv__cause')!;
        if (draft) cause.textContent = own.has(c.id) ? 'Moved' : 'Followed its dependency';
        else cause.remove();
        a.addEventListener('click', (e) => {
          e.preventDefault();
          select(c.id);
        });
        li.append(a);
        return li;
      })
    );
  }

  function drawRail(rowIDs: string[], changes: PlanChange[], own: ReadonlySet<string>): void {
    const rail = q<HTMLElement>('[data-prv-rail]');
    const n = Math.max(1, rowIDs.length);
    rail.replaceChildren(
      ...changes
        .filter((c) => rowIDs.includes(c.id))
        .map((c) => {
          const a = document.createElement('a');
          a.href = `#row-${c.id}`;
          a.title = `${c.name}: ${c.status === 'moved' ? shiftWords(c.shiftDays) : c.status}`;
          a.setAttribute('aria-label', `Go to ${a.title}`);
          if (own.has(c.id)) a.dataset.own = '';
          // Below the axis: the rail covers the rows, top to bottom.
          a.style.top = `calc(56px + (100% - 56px) * ${rowIDs.indexOf(c.id) / n})`;
          a.style.height = `max(6px, calc((100% - 56px) / ${n}))`;
          a.addEventListener('click', (e) => {
            e.preventDefault();
            select(c.id);
          });
          return a;
        })
    );
  }

  function select(id: string): void {
    selected = id;
    chart.setSelectedId(id);
    root.querySelectorAll('a.bcn-prv__change').forEach((a) => a.toggleAttribute('aria-current', a.getAttribute('href') === `#row-${id}`));
    host.querySelector(`[data-row-id="${CSS.escape(id)}"]`)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  // ── Actions ──
  q<HTMLElement>('[data-prv-act]').addEventListener('click', async () => {
    const btn = q<HTMLElement>('[data-prv-act]').querySelector<HTMLButtonElement>('button');
    if (btn?.disabled) return;
    setButtonDisabled(btn, true);
    if (draft) {
      // The pencil concept: what this publish changes inks in once on Live.
      if ((concept === 'pencil' || concept === 'pencil-paper') && current) {
        try {
          sessionStorage.setItem(`bcn-prp-inked-${planID}`, JSON.stringify(current.changes.map((c) => c.id)));
        } catch {
          /* a blocked store just skips the moment */
        }
      }
      await publishDraft(planID, draft.id, sel.to);
    } else {
      const target = repo.versions[sel.to].number;
      await restoreVersion(planID, target);
    }
    location.href = keepStudy(PLAN_HREF(planID));
  });
  show.addEventListener('change', () => draw());

  setupRevisionSlider(q<HTMLElement>('[data-bcn-revision-slider]'), stops, sel, (next) => {
    sel = next;
    void compute();
  });
  fillIcons(root);
  fillGlyphs(root);
  await compute();
}
