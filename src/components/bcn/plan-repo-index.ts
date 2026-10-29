// <BcnPlanRepoIndex>'s runtime: seeds the sample history on a first visit, then draws one row per plan from
// plan-repo.ts: what it tracks, its counts (drafts among them), and a miniature.
// It owns the page's BcnPlanSetupDialog: New Plan, and each row's settings for the plan's Owners.
import { withBase } from '../../lib/base';

import { planIcon } from '../../lib/planning/icons';
import { recordsFor, healthOf, receiptOverdue, todayIso, type Transmittal } from '../../lib/planning/plan-records';
import { budgetAt, seesBudget, latestVersion, flattenPlan, attributesAt, orgOf, currentUserName, ensureSeeded, fiscalYearOf, listPlanSummaries, membersOf, shortDate, viewsOf, type PlanBudget, type PlanSummary, type PlanView } from '../../lib/planning/plan-repo';
import { dayNumber } from '../../lib/planning/gantt-geometry';
import { planAvatarStack } from './plan-people';
import { setupPlanSetupDialog } from './plan-setup-dialog';
import { CUSTOMIZE_HREF, ELEMENT_HREF, TRANSMITTAL_HREF } from '../../lib/planning/element-context';

type ToggleEl = HTMLElement & { options: { label: string; value: string }[]; value: string };
type FieldEl = HTMLElement & { value: string };

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Has Drafts', value: 'drafts' },
  { label: 'Needs You', value: 'you' },
  { label: 'Has Late Items', value: 'late' },
];

/** Late tasks and milestones on Live (2026-10-29, the traps audit: a PM checking every plan had to open each one). */
/** The plan's late items (leaves), in outline order: their ids and names. */
function lateItems(repo: PlanSummary['repo']): { id: string; name: string }[] {
  const plan = latestVersion(repo).plan;
  const rec = recordsFor(repo.planID);
  const attrs = attributesAt(repo);
  return flattenPlan(plan.Elements)
    .filter(({ element }) => !element.Children?.length && healthOf(rec, plan, element.PlanElementID ?? '', (x) => !!attrs[x]?.deliverable).health === 'Late')
    .map(({ element }) => ({ id: element.PlanElementID ?? '', name: element.PlanElementName ?? '' }));
}

/** What a plan waits on you for (2026-10-29, the traps audit: Ask to Publish had no loop): drafts asked to publish,
 *  if you can publish; your own draft, sent back. Each opens that draft. */
function waitingOn(repo: PlanSummary['repo'], me: string): { asked: PlanSummary['repo']['drafts']; back: PlanSummary['repo']['drafts']; receipts: Transmittal[] } {
  const role = membersOf(repo).find((m) => m.name === me)?.role;
  const publishes = role === 'Owner' || role === 'Editor';
  return {
    asked: publishes ? repo.drafts.filter((d) => d.publishRequestedAt && d.owner !== me && !d.transient) : [],
    back: repo.drafts.filter((d) => d.owner === me && d.sentBack),
    // Sends of yours a recipient hasn't confirmed past the due date (2026-10-29, the second traps audit).
    receipts: recordsFor(repo.planID).transmittals.filter((t) => t.from === me && !t.closedAt && t.to.some((n) => receiptOverdue(t, n))),
  };
}

export const PLAN_HREF = (planID: string, extra = '') => withBase(`/prototypes/plans-repo/plan/?id=${encodeURIComponent(planID)}${extra}`);
/** A plan's revisions: its page with the Revisions modal open (2026-10-29: the old /revisions/ page is retired). */
export const REVISIONS_HREF = (planID: string, extra = '') => withBase(`/prototypes/plans-repo/plan/?id=${encodeURIComponent(planID)}&revisions=1${extra}`);

/** The design studies' URL keys (2026-10-27): the plan and revisions pages carry them through their links. */
export const STUDY_KEYS = ['density', 'levels', 'sched', 'cascade', 'edit', 'about', 'outline', 'budget', 'concept', 'marks', 'role', 'stamp', 'view', 'drafthead'] as const;
export type StudyKey = (typeof STUDY_KEYS)[number];
export const keepStudy = (href: string, params: URLSearchParams = new URLSearchParams(location.search)) =>
  href + STUDY_KEYS.filter((k) => params.get(k)).map((k) => `&${k}=${encodeURIComponent(params.get(k)!)}`).join('');

export function fillGlyphs(root: ParentNode): void {
  root.querySelectorAll<HTMLElement>('[data-glyph]').forEach((el) => {
    if (!el.firstChild) el.innerHTML = planIcon(el.dataset.glyph!, 14);
  });
}

/** A miniature of the plan: each parent's span as a thin bar, the years ticked, today in amber. */
function miniature(summary: PlanSummary): string {
  const W = 288;
  const ROW = 7;
  const TOP = 14;
  const rows = summary.overview.slice(0, 9);
  const H = TOP + rows.length * ROW + 6;
  const s = dayNumber(summary.start);
  const e = dayNumber(summary.end);
  if (s === null || e === null || e <= s) return '';
  const x = (iso: string) => ((dayNumber(iso)! - s) / (e - s)) * W;
  const parts: string[] = [];
  const y0 = new Date(summary.start!).getUTCFullYear() + 1;
  const y1 = new Date(summary.end!).getUTCFullYear();
  for (let y = y0; y <= y1; y++) {
    const gx = x(`${y}-01-01`);
    parts.push(`<line class="mini-grid" x1="${gx}" x2="${gx}" y1="${TOP - 3}" y2="${H}"/>`);
    if (gx < W - 18) parts.push(`<text class="mini-axis" x="${gx + 2}" y="9">'${String(y).slice(2)}</text>`);
  }
  rows.forEach((row, i) => {
    const bx = x(row.start);
    parts.push(`<rect class="mini-bar mini-bar--${Math.min(row.depth, 2)}" x="${bx}" y="${TOP + i * ROW}" width="${Math.max(2, x(row.end) - bx)}" height="${ROW - 3}" rx="1.5"/>`);
  });
  const today = todayIso();
  if (today > summary.start! && today < summary.end!) parts.push(`<line class="mini-today" x1="${x(today)}" x2="${x(today)}" y1="${TOP - 4}" y2="${H}"/>`);
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Schedule, ${shortDate(summary.start!)} to ${shortDate(summary.end!)}">${parts.join('')}</svg>`;
}

/** A miniature of the plan's money: one bar per fiscal year, the current year solid. For a plan that tracks only a budget. */
function moneyMiniature(budget: PlanBudget): string {
  const byYear = new Map<number, number>();
  for (const row of Object.values(budget)) for (const [fy, amount] of Object.entries(row)) byYear.set(Number(fy), (byYear.get(Number(fy)) ?? 0) + amount);
  const years = [...byYear.keys()].sort((a, b) => a - b);
  if (!years.length) return '';
  const W = 288;
  const H = 70;
  const TOP = 14;
  const max = Math.max(...byYear.values()) || 1;
  const step = W / years.length;
  const now = fiscalYearOf(todayIso());
  const parts = years.map((fy, i) => {
    const h = Math.max(1, ((byYear.get(fy) ?? 0) / max) * (H - TOP - 2));
    const x = i * step + step * 0.18;
    return `<rect class="mini-money${fy === now ? ' mini-money--now' : ''}" x="${x}" y="${H - h}" width="${step * 0.64}" height="${h}" rx="1.5"/>` + (i % 2 === 0 ? `<text class="mini-axis" x="${x}" y="9">FY'${String(fy).slice(2)}</text>` : '');
  });
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Budget by fiscal year">${parts.join('')}</svg>`;
}

const year = (iso: string | null) => (iso ? new Date(iso).getUTCFullYear() : '');
const compactDollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 1 });
const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
const TRACKS: Record<PlanView, { label: string; glyph: string }> = { schedule: { label: 'Schedule', glyph: 'calendar' }, budget: { label: 'Budget', glyph: 'sheet' } };

export async function setupPlanRepoIndex(root: HTMLElement): Promise<{ newPlan(): Promise<void> }> {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const rowsEl = q<HTMLUListElement>('[data-pri-rows]');
  const loading = q<HTMLElement>('[data-pri-loading]');
  const find = q<FieldEl>('[data-pri-find]');
  const filter = q<ToggleEl>('[data-pri-filter]');
  const countEl = q<HTMLElement>('[data-pri-count]');
  const none = q<HTMLElement>('[data-pri-none]');
  const rowTpl = q<HTMLTemplateElement>('[data-pri-row]');
  const setupRoot = document.querySelector<HTMLElement>('[data-bcn-plan-setup]');
  const setup = setupRoot ? setupPlanSetupDialog(setupRoot) : null;

  void customElements.whenDefined('esa-button-toggle').then(() => {
    filter.options = FILTERS;
    filter.value = 'all';
  });

  await ensureSeeded((text) => (q<HTMLElement>('[data-pri-progress]').textContent = text));
  const me = currentUserName();
  // A Guest (an agency reviewer, decision 2) is on a plan for the transmittals sent to them, not its schedule or money
  // (2026-10-28, the review: Rowan saw every plan and budget here). Their plans leave the list; someone who is a Guest
  // and on no plan otherwise is outside the project, and sees only Sent to You above, without New Plan.
  const roleOn = (s: PlanSummary) => membersOf(s.repo).find((m) => m.name === me)?.role;
  // Only the plans you're on, as more than a Guest (2026-10-29, the traps audit: everyone else saw every plan).
  const visible = (all: PlanSummary[]) => all.filter((s) => roleOn(s) && roleOn(s) !== 'Guest');
  const everything = await listPlanSummaries();
  let summaries = visible(everything);
  let lateBy = new Map(summaries.map((s) => [s.repo.planID, lateItems(s.repo)]));
  // New Plan and Start Sample Over are the project's staff's (ESA and DWR), or anyone already working on a plan.
  const staff = ['ESA', 'DWR'].includes(orgOf(me)) || summaries.length > 0;
  if (!staff) document.querySelectorAll<HTMLElement>('[data-pri-new], [data-pri-reset]').forEach((b) => (b.hidden = true));
  // On no plan (an agency reviewer, an outsider): no finder over nothing, but a word on where plans come from
  // (2026-10-29, the second traps audit: the page was blank).
  const onNone = !summaries.length && everything.length > 0;
  if (onNone) {
    q<HTMLElement>('.bcn-pri__bar').hidden = true;
    none.querySelector('.esa-empty-state__title')!.textContent = 'No Plans Shared With You';
    none.querySelector('.esa-empty-state__description')!.textContent = 'A plan shows here once one of its Owners adds you. Transmittals sent to you are in Sent to You.';
  }
  loading.hidden = true;
  rowsEl.hidden = false;

  function draw(): void {
    const text = (find.value ?? '').trim().toLowerCase();
    const mode = filter.value || 'all';
    const shown = summaries.filter((s) => {
      if (text && !`${s.name} ${s.description}`.toLowerCase().includes(text)) return false;
      if (mode === 'drafts' && !s.repo.drafts.length) return false;
      if (mode === 'late' && !lateBy.get(s.repo.planID)?.length) return false;
      if (mode === 'you') {
        const w = waitingOn(s.repo, me);
        if (!w.asked.length && !w.back.length && !w.receipts.length) return false;
      }
      return true;
    });
    countEl.textContent = count(shown.length, 'Plan', 'Plans');
    none.hidden = shown.length > 0;
    rowsEl.hidden = !shown.length;
    rowsEl.replaceChildren(...shown.map(row));
  }

  const el = (tag: string, text: string, className = '') => Object.assign(document.createElement(tag), { textContent: text, className });

  function row(s: PlanSummary): HTMLElement {
    const li = rowTpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
    const r = <T extends Element>(sel: string) => li.querySelector<T>(sel)!;
    const href = PLAN_HREF(s.repo.planID);
    const name = r<HTMLAnchorElement>('[data-pri-name]');
    name.textContent = s.name;
    name.href = href;
    r<HTMLAnchorElement>('[data-pri-mini]').href = href;
    r<HTMLElement>('[data-pri-desc]').textContent = s.description;
    r<HTMLElement>('[data-pri-private]').hidden = s.repo.visibility !== 'Private';
    // The plan's settings, for its Owners.
    const members = membersOf(s.repo);
    const settings = r<HTMLElement>('[data-pri-settings]');
    settings.hidden = members.find((m) => m.name === me)?.role !== 'Owner';
    settings.addEventListener('click', () => void openSettings(s.repo.planID));

    // Facts: what it tracks, its span and items, its budget, its revisions, its people.
    const tracks = viewsOf(s.repo);
    const myRole = membersOf(s.repo).find((m) => m.name === currentUserName())?.role;
    // The chips name the tabs this person gets (2026-10-29): Budget only where Who Sees It shows them money, as the
    // plan page's tabs do, so a Contributor isn't promised a Budget tab that isn't there.
    r<HTMLElement>('[data-pri-tracks]').replaceChildren(
      ...tracks.filter((t) => t !== 'budget' || seesBudget(s.repo, myRole)).map((t) => {
        const chip = el('span', '', 'bcn-pri__track');
        const glyph = document.createElement('span');
        glyph.dataset.glyph = TRACKS[t].glyph;
        chip.append(glyph, TRACKS[t].label);
        return chip;
      })
    );
    r<HTMLElement>('[data-pri-span]').textContent = s.start && s.end ? `${year(s.start)}–${year(s.end)}` : 'No Dates Yet';
    r<HTMLElement>('[data-pri-items]').textContent = count(s.elementCount, 'Item', 'Items');
    const budget = budgetAt(s.repo);
    const total = Object.values(budget).reduce((sum, row) => sum + Object.values(row).reduce((a, b) => a + b, 0), 0);
    if (tracks.includes('budget') && total && seesBudget(s.repo, myRole)) {
      const b = r<HTMLElement>('[data-pri-budget]');
      b.hidden = false;
      b.textContent = `${compactDollars.format(total)} Budget`;
    }
    // Open drafts, counted (the plan page lists them), so Has Drafts has something to show.
    if (s.repo.drafts.length) {
      const drafts = r<HTMLAnchorElement>('[data-pri-drafts]');
      drafts.hidden = false;
      drafts.href = href;
      r<HTMLElement>('[data-pri-drafts-text]').textContent = count(s.repo.drafts.length, 'Draft', 'Drafts');
    }
    const late = lateBy.get(s.repo.planID) ?? [];
    if (late.length) {
      const link = r<HTMLAnchorElement>('[data-pri-late]');
      link.hidden = false;
      // The Schedule's Health filter finds them; a plan that tracks only money has no Schedule (2026-10-29: the link
      // opened the budget sheet, which marks nothing late), so there it opens the first late item and names them all.
      link.href = tracks.includes('schedule') ? PLAN_HREF(s.repo.planID, '&health=Late') : ELEMENT_HREF(s.repo.planID, late[0].id);
      link.title = `Late: ${late.map((x) => x.name).join(', ')}`;
      r<HTMLElement>('[data-pri-late-text]').textContent = `${late.length} Late`;
    }
    const wait = waitingOn(s.repo, me);
    const first = wait.asked[0] ?? wait.back[0];
    if (first || wait.receipts.length) {
      const link = r<HTMLAnchorElement>('[data-pri-waiting]');
      link.hidden = false;
      link.href = first ? PLAN_HREF(s.repo.planID, `&draft=${first.id}`) : TRANSMITTAL_HREF(s.repo.planID, wait.receipts[0].id);
      const parts = [wait.asked.length ? count(wait.asked.length, 'Publish Request', 'Publish Requests') : '', wait.back.length ? 'Your Draft Sent Back' : '', wait.receipts.length ? count(wait.receipts.length, 'Receipt Overdue', 'Receipts Overdue') : ''].filter(Boolean);
      r<HTMLElement>('[data-pri-waiting-text]').textContent = parts.join(', ');
    }
    const history = r<HTMLAnchorElement>('[data-pri-history]');
    history.href = REVISIONS_HREF(s.repo.planID);
    r<HTMLElement>('[data-pri-versions]').textContent = count(s.repo.versions.length, 'Revision', 'Revisions');
    r<HTMLElement>('[data-pri-people]').replaceWith(planAvatarStack(members.map((m) => m.name), 5));

    // The miniature: the schedule, or the money when that's all it tracks.
    r<HTMLElement>('[data-pri-mini]').innerHTML = tracks.includes('schedule') ? miniature(s) : seesBudget(s.repo, myRole) ? moneyMiniature(budget) : '';
    fillGlyphs(li);
    return li;
  }

  async function reload(): Promise<void> {
    summaries = visible(await listPlanSummaries());
    lateBy = new Map(summaries.map((s) => [s.repo.planID, lateItems(s.repo)]));
    draw();
  }
  /** A plan's settings, the modal (2026-10-28, Andy: "the basics of the plan config should be in a modal"). A level's
   *  page is customized on one of its items' pages. */
  async function openSettings(planID: string): Promise<void> {
    const result = await setup?.open(planID);
    if (result?.kind === 'customize') return void location.assign(CUSTOMIZE_HREF(planID, result.elementId));
    if (result) await reload();
  }

  find.addEventListener('input', draw);
  filter.addEventListener('change', draw);
  draw();
  return {
    async newPlan() {
      const result = await setup?.open();
      if (result?.kind === 'created') location.assign(PLAN_HREF(result.planID));
    },
  };
}
