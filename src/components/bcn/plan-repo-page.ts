// <BcnPlanRepoPage>'s runtime: one plan in the repo model. Three modes, from the URL:
//   live   (no ?draft)          the live plan, read with its latest version; any drag checks out your draft
//   own    (?draft = yours)     your draft: every drop is a revision, Undo / Redo, Review and publish
//   view   (?draft = theirs)    someone else's draft, read-only, Copy to my draft
// The chart is Jamie's PlanGanttChart at the tactile density, the range is her setupPlanGanttRange; the draft
// arithmetic (edits from a drag, overrides, the cascade) is hers too (plan-draft.ts, the mock's previewDraft).

import { PlanGanttChart } from './plan-gantt-chart';
import { setupPlanGanttRange } from './plan-gantt-range';
import { fillIcons, planIcon } from '../../lib/planning/icons';
import { planGanttView } from '../../lib/planning/plan-gantt-rows';
import { planConflicts } from '../../lib/planning/plan-conflicts';
import { planDraftEditsForDrag, planDraftWithEdits } from '../../lib/planning/plan-draft';
import { toLocalIsoDate } from '../../lib/planning/plan-page';
import { planApi } from '../../lib/planning/plan-server';
import type { PlanDetailDto } from '../../lib/planning/model';
import type { GanttDragEvent } from '../../lib/planning/gantt-types';
import {
  addRevision,
  contributorsOf,
  currentUserName,
  discardDraft,
  draftState,
  dropLastRevision,
  ensureSeeded,
  flattenPlan,
  getRepo,
  latestVersion,
  listPlanSummaries,
  myDraft,
  planCompare,
  planSpan,
  restoreRevision,
  revisionMessage,
  shortDate,
  startDraft,
  timeAgo,
  toggleStar,
  toggleWatch,
  versionsBehind,
  type PlanRepo,
  type PlanRepoDraft,
  type PlanRevision,
} from '../../lib/planning/plan-repo';
import { planAvatar, planAvatarStack, setButtonDisabled } from './plan-people';
import { PLAN_HREF, REVISIONS_HREF, fillGlyphs } from './plan-repo-index';

type Mode = 'live' | 'own' | 'view';
const firstName = (name: string) => name.split(' ')[0];

export async function setupPlanRepoPage(root: HTMLElement): Promise<void> {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  await ensureSeeded();
  const params = new URLSearchParams(location.search);
  const planID = params.get('id') ?? (await listPlanSummaries())[0]?.repo.planID;
  if (!planID) return;
  const me = currentUserName();

  let repo: PlanRepo = getRepo(planID);
  let live: PlanDetailDto = await planApi.getPlan(planID);
  let draft: PlanRepoDraft | null = repo.drafts.find((d) => d.id === params.get('draft')) ?? null;
  let mode: Mode = !draft ? 'live' : draft.owner === me ? 'own' : 'view';
  let shown: PlanDetailDto = draft ? (await draftState(draft)).Plan : live;
  const redo: PlanRevision[] = [];
  let busy = false;
  const today = toLocalIsoDate(new Date());

  // ── The chart and its range ─────────────────────────────────────────────────────────────────────────────────────
  const host = q<HTMLElement>('[data-bcn-plan-gantt]');
  const tpl = (name: string) => host.querySelector<HTMLTemplateElement>(`[data-gantt-tpl="${name}"]`)!;
  const chart = new PlanGanttChart(host, { caret: tpl('caret'), apply: tpl('apply'), revert: tpl('revert'), badge: tpl('badge') }, {
    label: live.PlanName ?? 'Plan',
    density: 'tactile',
    onRowSelect: (id) => chart.setSelectedId(id),
    onDragEnd: (drag) => void drop(drag),
  });
  const extent = () => {
    const span = planSpan(shown);
    return span.start && span.end ? { start: span.start, end: span.end } : null;
  };
  const range = setupPlanGanttRange(q<HTMLElement>('[data-bcn-plan-range]'), {
    extent,
    overview: () =>
      planGanttView(shown)
        .rows.filter((row) => row.kind === 'summary')
        .map((row) => ({ start: row.start, end: row.end, tier: row.depth <= 0 ? 0 : row.depth === 1 ? 1 : 2 })),
    today,
    storageKey: `bcn-plan-range-${planID}`,
    onChange: (next) => chart.setRange(next),
  });

  // ── Navigation: mode changes reload the page, so the URL is always the truth ──
  const go = (href: string): void => {
    location.href = href;
  };
  const hint = q<HTMLElement>('[data-prp-hint]');
  const say = (text: string) => (hint.innerHTML = `${planIcon('info', 13)}<span>${text}</span>`);

  // ── Drops: Live checks out your draft; your draft takes a revision per drop ──
  async function drop(drag: GanttDragEvent): Promise<void> {
    if (busy || mode === 'view') return draw();
    if (mode === 'live') {
      const mine = myDraft(planID!);
      if (mine && mine.revisions.length) {
        // One draft per person: you already have one, so it opens instead of a second one starting.
        sessionStorage.setItem('bcn-prp-note', `You already had a draft with ${mine.revisions.length} ${mine.revisions.length === 1 ? 'edit' : 'edits'}, so it opened. Drag again to keep going.`);
        return go(PLAN_HREF(planID!, `&draft=${mine.id}`));
      }
      draft = mine ?? startDraft(planID!);
      mode = 'own';
      history.replaceState(null, '', PLAN_HREF(planID!, `&draft=${draft.id}`));
      say('Started your draft. Live stays as it is until you publish.');
    }
    const edits = planDraftEditsForDrag(shown, drag);
    if (!edits.length) return draw();
    busy = true;
    const before = shown;
    const prior = draft!.revisions.at(-1)?.overrides ?? [];
    const next = planDraftWithEdits(prior, edits, live, true);
    const view = await planApi.previewDraft(planID!, next);
    const changes = planCompare(before, view.Plan);
    const ids = new Set(edits.map((e) => e.PlanElementID));
    const own = changes.filter((c) => ids.has(c.id));
    addRevision(planID!, draft!.id, next, revisionMessage(own, changes.length - own.length));
    redo.length = 0;
    shown = view.Plan;
    busy = false;
    refresh();
  }

  async function undo(): Promise<void> {
    if (mode !== 'own' || !draft?.revisions.length || busy) return;
    const dropped = dropLastRevision(planID!, draft.id);
    if (dropped) redo.push(dropped);
    await reload();
  }

  async function redoStep(): Promise<void> {
    if (mode !== 'own' || !redo.length || busy) return;
    restoreRevision(planID!, draft!.id, redo.pop()!);
    await reload();
  }

  async function reload(): Promise<void> {
    repo = getRepo(planID!);
    draft = draft ? (repo.drafts.find((d) => d.id === draft!.id) ?? null) : null;
    shown = draft ? (await draftState(draft)).Plan : live;
    refresh();
  }

  function refresh(): void {
    repo = getRepo(planID!);
    if (draft) draft = repo.drafts.find((d) => d.id === draft!.id) ?? draft;
    draw();
  }

  // ── Draw ──────────────────────────────────────────────────────────────────────────────────────────────────────────
  function draw(): void {
    document.body.dataset.planSurface = mode === 'live' ? 'live' : mode === 'own' ? 'draft' : 'view';
    const name = live.PlanName ?? 'Plan';
    const h1 = document.querySelector('.page-layout__title h1');
    const text = h1 && [...h1.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim());
    if (text) text.textContent = name;
    const crumb = document.querySelector('.breadcrumbs [aria-current="page"], .breadcrumbs span:last-child');
    if (crumb) crumb.textContent = name;
    document.title = draft ? `${draft.name} · ${name} | Beacon` : `${name} | Beacon`;
    const badge = document.querySelector<HTMLElement>('[data-prp-title-badge]');
    if (badge) {
      badge.hidden = mode === 'live';
      const t = badge.querySelector('.esa-badge__text');
      if (t) t.textContent = mode === 'own' ? 'Your draft' : `${draft ? firstName(draft.owner) : ''}'s draft`;
    }

    drawBar();
    drawStatus();
    drawAside();

    const view = planGanttView(shown);
    chart.setEditable(mode !== 'view');
    chart.setAnnotations({
      draft: null,
      conflicts: planConflicts(shown).map((c) => ({ fromId: c.PredecessorPlanElementID, toId: c.SuccessorPlanElementID })),
      rowNotes: new Map(),
      countsDependents: false,
    });
    range.refresh();
    chart.setData({ rows: view.rows, links: view.links, landmarks: view.landmarks, today, outlineHeading: view.outlineHeading });
    if (!hint.textContent) {
      say(
        mode === 'live'
          ? 'Drag any bar to try new dates. That starts your draft, and Live stays as it is until you publish.'
          : mode === 'own'
            ? 'Drag bars to try dates. Anything that depends on a bar moves with it. Every drop is saved as a revision.'
            : `This is ${firstName(draft!.owner)}'s draft, so it's read-only. Copy it to your draft to change it.`
      );
    }
  }

  function drawBar(): void {
    q<HTMLElement>('[data-prp-branch-label]').textContent = mode === 'live' ? 'Live plan' : mode === 'own' ? 'Your draft' : `${firstName(draft!.owner)}'s draft`;
    q<HTMLElement>('[data-prp-draft-count]').textContent = String(repo.drafts.length);
    q<HTMLElement>('[data-prp-version-count]').textContent = String(repo.versions.length);
    q<HTMLAnchorElement>('[data-prp-history-link]').href = REVISIONS_HREF(planID!);
    q<HTMLElement>('[data-prp-edit]').hidden = mode !== 'live';
    q<HTMLElement>('[data-prp-review]').hidden = mode !== 'own';
    q<HTMLElement>('[data-prp-copy]').hidden = mode !== 'view';
    const reviewBtn = q<HTMLElement>('[data-prp-review] button');
    setButtonDisabled(reviewBtn as HTMLButtonElement | null, !draft?.revisions.length);
    const watching = repo.watchers.includes(me);
    q<HTMLElement>('[data-prp-watch-label]').textContent = watching ? 'Watching' : 'Watch';
    q<HTMLElement>('[data-prp-watch] .esa-badge__text').textContent = String(repo.watchers.length);
    const starred = repo.starredBy.includes(me);
    q<HTMLElement>('[data-prp-star-label]').textContent = starred ? 'Starred' : 'Star';
    q<HTMLElement>('[data-prp-star] .esa-badge__text').textContent = String(repo.starredBy.length);
    drawBranches();
  }

  function drawBranches(): void {
    const list = q<HTMLElement>('[data-prp-branches]');
    const latest = latestVersion(repo);
    const row = (href: string, current: boolean, avatarName: string | null, title: string, sub: string) => {
      const a = document.createElement('a');
      a.className = 'bcn-prp__branch-row';
      a.href = href;
      a.setAttribute('role', 'menuitem');
      if (current) a.setAttribute('aria-current', 'true');
      const check = document.createElement('span');
      check.className = 'bcn-prp__branch-check';
      check.innerHTML = current ? planIcon('check', 16) : '';
      const face = avatarName ? planAvatar(avatarName, 'xs') : Object.assign(document.createElement('span'), { innerHTML: planIcon('git-branch', 16) });
      const label = document.createElement('span');
      label.className = 'bcn-prp__branch-name';
      label.innerHTML = `<span></span><span class="bcn-prp__branch-sub"></span>`;
      label.children[0].textContent = title;
      label.children[1].textContent = sub;
      a.append(check, face, label);
      return a;
    };
    const head = (text: string) => Object.assign(document.createElement('div'), { className: 'bcn-prp__branch-head', textContent: text });
    const mine = repo.drafts.find((d) => d.owner === me) ?? null;
    const others = repo.drafts.filter((d) => d.owner !== me);
    const sub = (d: PlanRepoDraft) => {
      const behind = versionsBehind(repo, d);
      return `${d.revisions.length} ${d.revisions.length === 1 ? 'edit' : 'edits'} · ${timeAgo(d.revisions.at(-1)?.at ?? d.createdAt)}${behind > 0 ? ` · ${behind} behind Live` : ''}`;
    };
    list.replaceChildren(
      row(PLAN_HREF(planID!), mode === 'live', null, 'Live plan', `v${latest.number} · ${firstName(latest.author)} · ${timeAgo(latest.at)}`),
      head('Your draft'),
      mine ? row(PLAN_HREF(planID!, `&draft=${mine.id}`), mode === 'own', me, mine.name, sub(mine)) : row(PLAN_HREF(planID!, '&start=1'), false, null, 'Start your draft', 'A private copy to try dates in'),
      ...(others.length ? [head("Other people's drafts · read-only"), ...others.map((d) => row(PLAN_HREF(planID!, `&draft=${d.id}`), draft?.id === d.id, d.owner, d.name, `${firstName(d.owner)} · ${sub(d)}`))] : [])
    );
  }

  function drawStatus(): void {
    const avatarSlot = q<HTMLElement>('[data-prp-status-avatar]');
    const who = q<HTMLElement>('[data-prp-status-who]');
    const message = q<HTMLElement>('[data-prp-status-message]');
    const meta = q<HTMLElement>('[data-prp-status-meta]');
    const actions = q<HTMLElement>('[data-prp-draft-actions]');
    const latest = latestVersion(repo);
    if (mode === 'live') {
      avatarSlot.replaceChildren(planAvatar(latest.author, 'xs'));
      who.textContent = latest.author;
      message.textContent = latest.message;
      meta.innerHTML = `<span title="${new Date(latest.at).toLocaleString()}">v${latest.number} · ${timeAgo(latest.at)}</span><a href="${REVISIONS_HREF(planID!)}">${planIcon('history', 14)}<b>${repo.versions.length}</b>&nbsp;versions</a>`;
      actions.hidden = true;
      return;
    }
    const d = draft!;
    const last = d.revisions.at(-1);
    avatarSlot.replaceChildren(planAvatar(d.owner, 'xs'));
    who.textContent = mode === 'own' ? 'Your draft' : `${firstName(d.owner)}'s draft`;
    message.textContent = last ? last.message : 'No changes yet. Drag a bar to start.';
    const behind = versionsBehind(repo, d);
    const n = d.revisions.length;
    meta.innerHTML = `<span>${n} ${n === 1 ? 'edit' : 'edits'} · based on v${d.baseVersion}${behind > 0 ? ` · <b>Live has ${behind} newer ${behind === 1 ? 'version' : 'versions'}</b>` : ''}</span>${n ? `<a href="${REVISIONS_HREF(planID!, `&draft=${d.id}`)}">${planIcon('file-diff', 14)}Compare with Live</a>` : ''}`;
    actions.hidden = mode !== 'own';
    const undoBtn = actions.querySelector<HTMLButtonElement>('[data-prp-undo] button');
    const redoBtn = actions.querySelector<HTMLButtonElement>('[data-prp-redo] button');
    setButtonDisabled(undoBtn, n === 0);
    setButtonDisabled(redoBtn, redo.length === 0);
  }

  function drawAside(): void {
    q<HTMLElement>('[data-prp-desc]').textContent = live.Description ?? '';
    const span = planSpan(shown);
    q<HTMLElement>('[data-prp-span]').textContent = span.start && span.end ? `${shortDate(span.start)} – ${shortDate(span.end)}` : '—';
    q<HTMLElement>('[data-prp-items]').textContent = String(flattenPlan(shown.Elements).length);
    q<HTMLElement>('[data-prp-deps]').textContent = String(shown.Dependencies?.length ?? 0);
    q<HTMLElement>('[data-prp-watchers]').textContent = String(repo.watchers.length);
    q<HTMLElement>('[data-prp-aside-versions]').textContent = String(repo.versions.length);
    q<HTMLElement>('[data-prp-aside-drafts]').textContent = String(repo.drafts.length);
    const people = contributorsOf(repo);
    q<HTMLElement>('[data-prp-aside-people]').textContent = String(people.length);
    q<HTMLElement>('[data-prp-people]').replaceChildren(planAvatarStack(people, 8, 'sm'));

    const releases = q<HTMLElement>('[data-prp-releases]');
    const latest = latestVersion(repo);
    const named = [...repo.versions].reverse().find((v) => v.label);
    const items: HTMLElement[] = [];
    const block = (glyph: string, title: string, sub: string) => {
      const el = document.createElement('div');
      el.className = 'bcn-prp__release';
      el.innerHTML = `<span class="bcn-prp__release-name"><span data-glyph="${glyph}"></span><span></span></span><span class="bcn-prp__release-sub"></span>`;
      el.querySelector('.bcn-prp__release-name span:last-child')!.textContent = title;
      el.querySelector('.bcn-prp__release-sub')!.textContent = sub;
      return el;
    };
    items.push(block('git-commit-vertical', `v${latest.number} · Latest`, `${shortDate(latest.at)} · ${latest.author}`));
    if (named) items.push(block('tag', named.label!, `v${named.number} · ${shortDate(named.at)} · ${named.author}`));
    const more = document.createElement('a');
    more.className = 'bcn-prp__more';
    more.href = REVISIONS_HREF(planID!);
    more.textContent = `See all ${repo.versions.length} versions`;
    items.push(more);
    releases.replaceChildren(...items);

    const list = q<HTMLUListElement>('[data-prp-draftlist]');
    list.replaceChildren(
      ...repo.drafts.map((d) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = PLAN_HREF(planID!, `&draft=${d.id}`);
        a.textContent = d.owner === me ? `${d.name} (yours)` : d.name;
        const small = document.createElement('small');
        small.textContent = `${firstName(d.owner)} · ${d.revisions.length} ${d.revisions.length === 1 ? 'edit' : 'edits'} · ${timeAgo(d.revisions.at(-1)?.at ?? d.createdAt)}`;
        const body = document.createElement('div');
        body.append(a, small);
        li.append(planAvatar(d.owner, 'xs'), body);
        return li;
      })
    );
    if (!repo.drafts.length) list.innerHTML = '<li><span></span><small>No open drafts.</small></li>';
    fillGlyphs(root);
  }

  // ── Wiring ──────────────────────────────────────────────────────────────────────────────────────────────────────
  q<HTMLElement>('[data-prp-edit]').addEventListener('click', () => go(PLAN_HREF(planID!, `&draft=${startDraft(planID!).id}`)));
  q<HTMLElement>('[data-prp-review]').addEventListener('click', () => draft && go(REVISIONS_HREF(planID!, `&draft=${draft.id}`)));
  q<HTMLElement>('[data-prp-copy]').addEventListener('click', () => {
    const mine = myDraft(planID!);
    if (mine?.revisions.length && !confirm(`Replace your draft "${mine.name}" (${mine.revisions.length} edits) with a copy of ${firstName(draft!.owner)}'s?`)) return;
    go(PLAN_HREF(planID!, `&draft=${startDraft(planID!, draft!).id}`));
  });
  q<HTMLElement>('[data-prp-discard]').addEventListener('click', () => {
    if (!draft || (draft.revisions.length && !confirm(`Discard your draft and its ${draft.revisions.length} edits? Live is not affected.`))) return;
    discardDraft(planID!, draft.id);
    go(PLAN_HREF(planID!));
  });
  q<HTMLElement>('[data-prp-undo]').addEventListener('click', () => void undo());
  q<HTMLElement>('[data-prp-redo]').addEventListener('click', () => void redoStep());
  q<HTMLElement>('[data-prp-watch]').addEventListener('click', () => {
    toggleWatch(planID!);
    refresh();
  });
  q<HTMLElement>('[data-prp-star]').addEventListener('click', () => {
    toggleStar(planID!);
    refresh();
  });
  document.addEventListener('keydown', (e) => {
    if (!(e.ctrlKey || e.metaKey) || e.key.toLowerCase() !== 'z' || mode !== 'own') return;
    const t = e.target as HTMLElement | null;
    if (t?.closest('input, textarea, [contenteditable]')) return;
    e.preventDefault();
    void (e.shiftKey ? redoStep() : undo());
  });

  if (params.get('start')) {
    go(PLAN_HREF(planID!, `&draft=${startDraft(planID!).id}`));
    return;
  }
  const note = sessionStorage.getItem('bcn-prp-note');
  if (note) {
    sessionStorage.removeItem('bcn-prp-note');
    say(note);
  }
  fillIcons(root);
  draw();
}
