// <BcnPlanRevisionsDialog>'s runtime: a plan's revisions in a modal (2026-10-28), after TalentBridge's
// section-revisions (WordPress's revisions screen). open(null) shows the plan's history and restores a revision;
// open(draftID) reviews a draft against Live and publishes the edit under the handle. States are snapshots
// (revisions) or a draft's overrides replayed on Live (Jamie's previewDraft), as on the revisions page.

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
import type { UiVizGanttRow } from '../../lib/planning/gantt-geometry';
import {
  currentUserName,
  draftState,
  getRepo,
  latestVersion,
  planCompare,
  planSpan,
  publishDraft,
  restoreVersion,
  shiftText,
  shortDate,
  signedShift,
  timeAgo,
  versionsBehind,
  type PlanChange,
  type PlanRepoDraft,
} from '../../lib/planning/plan-repo';
import { planAvatar, setButtonDisabled } from './plan-people';
import { changeNote } from './plan-change-note';
import { pushAlert } from '../../lib/planning/plan-page';

type DialogEl = HTMLElement & { open: boolean; heading: string };
type CheckEl = HTMLElement & { checked: boolean };

interface Stop extends RevisionStop {
  state: () => Promise<PlanDetailDto>;
  /** The overrides this stop carries (a draft's edits), to tell what the planner moved from what followed. */
  ownIDs: ReadonlySet<string>;
}

export interface PlanRevisionsDialog {
  /** null: the plan's history (at a revision's number, or the latest). A draft's id: that draft against Live. */
  open(draftID: string | null, at?: number): Promise<void>;
}

const firstName = (name: string) => name.split(' ')[0];
/** "Priya", "Priya and Alex", "Priya, Alex and Sam". */
const names = (list: readonly string[]) => (list.length <= 1 ? list.join('') : `${list.slice(0, -1).join(', ')} and ${list.at(-1)}`);
/** "edit 3", "edits 3 to 5". */
const editsFrom = (first: number, last: number) => (first === last ? `edit ${first}` : `edits ${first} to ${last}`);
/** "4 days ago, Oct 24, 8:07 AM". */
function whenText(iso: string): string {
  const d = new Date(iso);
  return `${timeAgo(iso)}, ${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
}
const day = (iso: string | null) =>
  iso ? new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : 'Unscheduled';

export function setupPlanRevisionsDialog(opts: {
  planID: string;
  canPublish: boolean;
  /** The draft-mode concept: issued adds the chart's title block. */
  concept: string | null;
  /** After a publish or a restore: the page shows Live again, with the new revision. */
  onLanded: () => Promise<void> | void;
}): PlanRevisionsDialog {
  const dialog = document.querySelector<DialogEl>('[data-bcn-plan-revisions-dialog]')!;
  const q = <T extends Element>(sel: string) => dialog.querySelector<T>(sel)!;
  const me = currentUserName();
  const today = toLocalIsoDate(new Date());

  const host = q<HTMLElement>('[data-bcn-plan-gantt]');
  host.dataset.bars = 'solid';
  host.dataset.levels = 'rules';
  host.dataset.budget = 'off';
  host.dataset.sched = 'pin';
  const tpl = (name: string) => host.querySelector<HTMLTemplateElement>(`[data-gantt-tpl="${name}"]`)!;
  const chart = new PlanGanttChart(host, { caret: tpl('caret'), apply: tpl('apply'), revert: tpl('revert'), badge: tpl('badge') }, {
    label: 'Plan compared',
    density: 'compact',
    outlineWidth: 300,
    onRowSelect: (id) => chart.setSelectedId(id),
  });

  let draft: PlanRepoDraft | null = null;
  let stops: Stop[] = [];
  let sel: RevisionSelection = { from: 0, to: 0, compareTwo: false };
  let latestNumber = 0;
  let cache = new Map<number, Promise<PlanDetailDto>>();
  let current: { from: PlanDetailDto; to: PlanDetailDto; changes: PlanChange[]; own: ReadonlySet<string> } | null = null;
  let only: CheckEl | null = null;
  let token = 0;

  const stateAt = (i: number) => {
    if (!cache.has(i)) cache.set(i, stops[i].state());
    return cache.get(i)!;
  };

  async function compute(): Promise<void> {
    const mine = ++token;
    const [from, to] = await Promise.all([stateAt(sel.from), stateAt(sel.to)]);
    if (mine !== token) return;
    // Moved by hand between the two stops: an override the "to" side has that the "from" side doesn't, or changed.
    const own = new Set([...stops[sel.to].ownIDs].filter((id) => !stops[sel.from].ownIDs.has(id)));
    if (draft && sel.from > 0) {
      const a = draft.revisions[sel.from - 1].overrides;
      for (const o of draft.revisions[sel.to - 1]?.overrides ?? []) {
        const was = a.find((x) => x.PlanElementID === o.PlanElementID);
        if (!was || was.StartDate !== o.StartDate || was.EndDate !== o.EndDate) own.add(o.PlanElementID);
      }
    }
    current = { from, to, changes: planCompare(from, to), own };
    draw();
  }

  function draw(): void {
    if (!current) return;
    const { from, to, changes, own } = current;
    drawHeads();
    drawCounts(changes, own);
    drawRows(from, to, changes, own);
    drawFooter(changes);

    const changed = new Set(changes.map((c) => c.id));
    const shift = (c: PlanChange) => (c.endOnly ? `End ${shiftText(c.shiftDays)}` : shiftText(c.shiftDays));
    chart.setAnnotations({
      draft: planDraftOverlay(from, to, null, new Set(), changed, true),
      titleBlock: null,
      rowDeltas: new Map<string, GanttRowDelta>(changes.filter((c) => c.status === 'moved').map((c) => [c.id, { text: shift(c), own: !draft || own.has(c.id) }])),
      conflicts: planConflicts(to).map((c) => ({ fromId: c.PredecessorPlanElementID, toId: c.SuccessorPlanElementID })),
      rowNotes: new Map(changes.map((c) => [c.id, [{ label: 'Was', value: formatPlanDateRange(c.fromStart, c.fromEnd, 'en-US') }]])),
      countsDependents: false,
    });
    chart.setRange(focusRange(from, to, changes));
    const view = planGanttView(to);
    chart.setData({ rows: view.rows, links: view.links, landmarks: view.landmarks, today, outlineHeading: view.outlineHeading });
    chart.setRowFilter(only?.checked ? changed : null);
  }



  /** The chart zooms to what changed, with two months either side; nothing changed shows the whole plan. */
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

  function drawHeads(): void {
    for (const side of ['from', 'to'] as const) {
      const head = q<HTMLElement>(`[data-prvd-head="${side}"]`);
      const stop = stops[side === 'from' ? sel.from : sel.to];
      head.querySelector('[data-prvd-avatar]')!.replaceChildren(planAvatar(stop.author, 'sm'));
      head.querySelector('[data-prvd-title]')!.textContent = stop.title;
      head.querySelector('[data-prvd-when]')!.textContent = stop.when;
      head.querySelector('[data-prvd-msg]')!.replaceChildren(stop.render ? stop.render() : stop.message);
    }
    // TalentBridge's Current: the To side is the plan as it stands (the history's last revision).
    q<HTMLElement>('[data-prvd-current]').hidden = !!draft || sel.to !== stops.length - 1;
  }

  function drawCounts(changes: PlanChange[], own: ReadonlySet<string>): void {
    const counts = q<HTMLElement>('[data-prvd-counts]');
    const b = (n: number, label: string) => `<span><b>${n}</b> ${label}</span>`;
    if (!draft) counts.innerHTML = b(changes.length, changes.length === 1 ? 'Item Moved' : 'Items Moved');
    else {
      const mine = changes.filter((c) => own.has(c.id)).length;
      counts.innerHTML = b(mine, 'Moved') + b(changes.length - mine, 'Followed');
    }
  }

  /**
   * TalentBridge's side by side, item by item: the item as it was on the left and as it became on the right, in plan
   * order. A changed date is struck on the left and marked on the right; the right ends with the shift (an item that
   * moved only because what it waits on did reads Followed). Changes Only leaves out the items that didn't change.
   */
  function drawRows(from: PlanDetailDto, to: PlanDetailDto, changes: PlanChange[], own: ReadonlySet<string>): void {
    const fromRows = new Map(planGanttView(from).rows.map((r) => [r.id, r]));
    const toRows = planGanttView(to).rows;
    const toById = new Map(toRows.map((r) => [r.id, r]));
    const byId = new Map(changes.map((c) => [c.id, c]));
    const order = [...toRows.map((r) => r.id), ...[...fromRows.keys()].filter((id) => !toById.has(id))];
    const list = q<HTMLElement>('[data-prvd-rows]');
    const ids = order.filter((id) => !only?.checked || byId.has(id));
    if (!ids.length) {
      list.innerHTML = `<p class="bcn-prvd__none">No differences between these revisions.</p>`;
      return;
    }
    const cell = (side: 'from' | 'to', row: UiVizGanttRow | undefined, other: UiVizGanttRow | undefined, change: PlanChange | undefined) => {
      const el = document.createElement('div');
      el.className = `bcn-prvd__cell bcn-prvd__cell--${side}`;
      if (!row) return el;
      el.style.setProperty('--depth', String(row.depth));
      const name = Object.assign(document.createElement('span'), { className: 'bcn-prvd__name', textContent: row.label });
      if (row.hasChildren) name.dataset.parent = '';
      const dates = Object.assign(document.createElement('span'), { className: 'bcn-prvd__dates' });
      const part = (key: 'start' | 'end') => {
        const text = day(row[key]);
        if (!other || other[key] === row[key]) return document.createTextNode(text);
        return Object.assign(document.createElement(side === 'from' ? 'del' : 'ins'), { textContent: text });
      };
      dates.append(part('start'));
      if (row.end && row.end !== row.start) dates.append(document.createTextNode(' – '), part('end'));
      el.append(name, dates);
      if (side === 'to' && change?.status === 'moved') {
        const followed = !!draft && !own.has(change.id);
        // The shift and why, as two parts (2026-10-28): "+3 months" over "Followed" when it moved with something else.
        const shift = Object.assign(document.createElement('span'), { className: 'bcn-prvd__shift' });
        shift.append(Object.assign(document.createElement('span'), { textContent: change.endOnly ? `End ${signedShift(change.shiftDays)}` : signedShift(change.shiftDays) }));
        if (followed) {
          shift.dataset.followed = '';
          shift.append(Object.assign(document.createElement('span'), { className: 'bcn-prvd__followed', textContent: 'Followed' }));
        }
        el.append(shift);
      }
      return el;
    };
    list.replaceChildren(
      ...ids.map((id) => {
        const change = byId.get(id);
        const row = document.createElement('div');
        row.className = 'bcn-prvd__row';
        row.dataset.kind = change?.status ?? 'same';
        row.append(cell('from', fromRows.get(id), toById.get(id), change), cell('to', toById.get(id), fromRows.get(id), change));
        return row;
      })
    );
  }

  function drawFooter(changes: PlanChange[]): void {
    const restore = q<HTMLElement>('[data-prvd-restore]');
    const publish = q<HTMLElement>('[data-prvd-publish]');
    const note = q<HTMLElement>('[data-prvd-note]');
    const name = q<HTMLElement>('[data-prvd-name]');
    const partial = q<HTMLElement>('[data-prvd-partial]');
    note.hidden = true;
    name.hidden = true;
    partial.hidden = true;
    if (!draft) {
      publish.hidden = true;
      const isCurrent = sel.to === stops.length - 1;
      restore.hidden = isCurrent;
      restore.querySelector('[data-prvd-act-label]')!.textContent = `Restore Revision ${getRepo(opts.planID).versions[sel.to].number}`;
      return;
    }
    restore.hidden = true;
    const may = opts.canPublish && (draft.owner === me || !!draft.publishRequestedAt);
    publish.hidden = !may;
    if (!may) {
      note.hidden = false;
      note.textContent = !opts.canPublish ? "You can't publish. Ask to Publish sends it to someone who can." : `${firstName(draft.owner)} hasn't asked to publish this draft.`;
      return;
    }
    const last = sel.to === stops.length - 1;
    name.hidden = false;
    publish.querySelector('[data-prvd-act-label]')!.textContent = last ? `Publish as Revision ${latestNumber + 1}` : `Publish Up to Edit ${sel.to}`;
    setButtonDisabled(publish.querySelector('button'), sel.to === 0 || !changes.length);
    // Part of the draft (2026-10-28): what isn't published stays where it was, on top of the new Live.
    const n = stops.length - 1;
    if (sel.to > 0 && !last) {
      partial.hidden = false;
      q<HTMLElement>('[data-prvd-partial-text]').textContent = `Publishing up to edit ${sel.to} keeps ${editsFrom(sel.to + 1, n)} in ${draft.owner === me ? 'your draft' : `${firstName(draft.owner)}'s draft`}, on top of the new Live.`;
    }
  }

  // ── Footer actions ──
  q<HTMLElement>('[data-prvd-close]').addEventListener('click', () => (dialog.open = false));
  q<HTMLElement>('[data-prvd-restore]').addEventListener('click', async () => {
    const btn = q<HTMLElement>('[data-prvd-restore] button') as HTMLButtonElement;
    if (btn.disabled || draft) return;
    setButtonDisabled(btn, true);
    await restoreVersion(opts.planID, getRepo(opts.planID).versions[sel.to].number);
    setButtonDisabled(btn, false);
    dialog.open = false;
    await opts.onLanded();
  });
  q<HTMLElement>('[data-prvd-publish]').addEventListener('click', async () => {
    const btn = q<HTMLElement>('[data-prvd-publish] button') as HTMLButtonElement;
    if (btn.disabled || !draft) return;
    setButtonDisabled(btn, true);
    const d = draft;
    const n = stops.length - 1;
    const name = (q<HTMLElement & { value: string }>('[data-prvd-name]').value ?? '').trim();
    const version = await publishDraft(opts.planID, d.id, sel.to, name || undefined);
    setButtonDisabled(btn, false);
    dialog.open = false;
    await opts.onLanded();
    // Said once, where the person is looking: what it became, what stayed, and who hears about it.
    const rest = editsFrom(sel.to + 1, n);
    const kept = sel.to < n ? ` ${rest[0].toUpperCase()}${rest.slice(1)} ${sel.to + 1 === n ? 'stays' : 'stay'} in the draft.` : '';
    const told = d.owner !== me ? ` ${firstName(d.owner)} sees it the next time they open the plan.` : '';
    pushAlert(`Published as Revision ${version.number}${name ? `, ${name}` : ''}.${kept}${told}`, 'success', 7000);
  });
  fillIcons(dialog);

  return {
    async open(draftID, at) {
      const repo = getRepo(opts.planID);
      const live = await planApi.getPlan(opts.planID);
      const latest = latestVersion(repo);
      latestNumber = latest.number;
      draft = draftID ? (repo.drafts.find((d) => d.id === draftID) ?? null) : null;
      cache = new Map();
      current = null;
      const d = draft;
      stops = d
        ? [
            { author: latest.author, title: `Live Plan, Revision ${latest.number}`, when: whenText(latest.at), message: latest.message, render: () => changeNote(latest.note, latest.message), mark: 'live', state: async () => live, ownIDs: new Set() },
            ...d.revisions.map((rev, i) => ({
              author: rev.author,
              title: `Edit ${i + 1} by ${rev.author}`,
              when: whenText(rev.at),
              message: rev.message,
              render: () => changeNote(rev.note, rev.message),
              state: async () => (await draftState(d, i + 1)).Plan,
              ownIDs: new Set(rev.overrides.map((o) => o.PlanElementID)),
            })),
          ]
        : repo.versions.map((v) => ({
            author: v.author,
            title: `Revision ${v.number}${v.label ? ` (${v.label})` : ''} by ${v.author}`,
            when: whenText(v.at),
            message: v.message,
            render: () => changeNote(v.note, v.message),
            mark: v.label ? ('labelled' as const) : undefined,
            state: async () => v.plan,
            ownIDs: new Set<string>(),
          }));
      // A draft opens comparing Live with its last edit; the history, the last revision with the one before it.
      const atIndex = at ? repo.versions.findIndex((v) => v.number === at) : -1;
      const to = !d && atIndex >= 0 ? atIndex : stops.length - 1;
      sel = d ? { from: 0, to, compareTwo: true } : { from: Math.max(0, to - 1), to, compareTwo: false };
      // Live moved since the draft started: said before anything is published (2026-10-28).
      const behind = d ? versionsBehind(repo, d) : 0;
      q<HTMLElement>('[data-prvd-behind]').hidden = behind <= 0;
      if (d && behind > 0) {
        const by = [...new Set(repo.versions.filter((v) => v.number > d.baseVersion).map((v) => firstName(v.author)))];
        q<HTMLElement>('[data-prvd-behind-text]').textContent = `${behind} ${behind === 1 ? 'revision was' : 'revisions were'} published since this draft started, by ${names(by)}. The comparison is against Live as it is now; publishing puts these edits on top.`;
      }
      const nameField = q<HTMLElement & { value: string }>('[data-prvd-name]');
      nameField.value = '';
      const name = live.PlanName ?? 'Plan';
      dialog.heading = d ? `Review ${d.owner === me ? 'Your Draft' : `${firstName(d.owner)}'s Draft`}: ${name}` : `Revisions: ${name}`;

      // A fresh slider for these stops (its listeners belong to this open).
      const slot = q<HTMLElement>('[data-prvd-slider-slot]');
      slot.replaceChildren(document.querySelector<HTMLTemplateElement>('[data-prvd-slider-tpl]')!.content.cloneNode(true));
      fillIcons(slot);
      only = slot.querySelector<CheckEl>('[data-prvd-only]');
      only?.addEventListener('change', () => draw());
      setupRevisionSlider(slot.querySelector<HTMLElement>('[data-bcn-revision-slider]')!, stops, sel, (next) => {
        sel = next;
        void compute();
      });
      dialog.open = true;
      await compute();
    },
  };
}
