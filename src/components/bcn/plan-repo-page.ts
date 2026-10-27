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
  recordLiveEdit,
  listPlanSummaries,
  myDraft,
  planCompare,
  planSpan,
  restoreRevision,
  revisionMessage,
  shortDate,
  startDraft,
  timeAgo,
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

  // The design studies (2026-10-27) switch variants from the URL; navigation keeps them.
  const STUDY_KEYS = ['density', 'levels', 'sched', 'cascade', 'edit', 'about', 'outline', 'budget'] as const;
  const study = Object.fromEntries(STUDY_KEYS.map((k) => [k, params.get(k)])) as Record<(typeof STUDY_KEYS)[number], string | null>;
  const keep = (href: string) => href + STUDY_KEYS.filter((k) => study[k]).map((k) => `&${k}=${encodeURIComponent(study[k]!)}`).join('');
  const editStyle = study.edit ?? 'quiet';

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
  // Levels (adopted 2026-10-27, the levels study): the full rules by default, Sections once a plan has more than one
  // Program; Budget lives in the readout and About, not the outline.
  const programs = (live.Elements ?? []).filter((e) => !e.ParentPlanElementID).length;
  host.dataset.levels = study.levels ?? (programs > 1 ? 'sections' : 'rules');
  host.dataset.budget = study.budget ?? 'off';
  if (study.sched) host.dataset.sched = study.sched;
  if (study.cascade) host.dataset.cascade = study.cascade;
  const tpl = (name: string) => host.querySelector<HTMLTemplateElement>(`[data-gantt-tpl="${name}"]`)!;
  const chart = new PlanGanttChart(host, { caret: tpl('caret'), apply: tpl('apply'), revert: tpl('revert'), badge: tpl('badge') }, {
    label: live.PlanName ?? 'Plan',
    density: (study.density as 'compact' | 'medium' | 'tactile' | null) ?? 'medium',
    cascadePreview: !!study.cascade && study.cascade !== 'none',
    // Adopted 2026-10-27 from the density and levels studies: medium rows, a 360px outline (every name fits once the
    // level words and Budget leave the outline).
    outlineWidth: study.outline ? Number(study.outline) : 360,
    onRowSelect: (id) => chart.setSelectedId(id),
    onDragEnd: (drag) => void drop(drag),
    onLinkSelect: (link, at) => openLink(link, at),
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
    location.href = keep(href);
  };

  // ── Drops: Live checks out your draft; your draft takes a revision per drop ──
  async function drop(drag: GanttDragEvent): Promise<void> {
    if (busy || mode === 'view') return draw();
    if (mode === 'live') {
      const mine = myDraft(planID!);
      if (mine && mine.revisions.length) {
        // One draft per person: you already have one, so it opens instead of a second one starting.
        return go(PLAN_HREF(planID!, `&draft=${mine.id}`));
      }
      draft = mine ?? startDraft(planID!);
      mode = 'own';
      history.replaceState(null, '', keep(PLAN_HREF(planID!, `&draft=${draft.id}`)));
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

  // ── A dependency as an object, on Live: change its lag or unlink it; either is the next revision ──
  const linkPop = q<HTMLElement & { open: boolean }>('[data-prp-link-pop]');
  const lagField = q<HTMLElement & { value: string }>('[data-prp-link-lag]');
  let openDep: { id: string; from: string; to: string; lag: number } | null = null;
  const nameOf = (id: string) => flattenPlan(live.Elements).find((x) => x.element.PlanElementID === id)?.element.PlanElementName ?? '';
  function openLink(link: { fromId: string; toId: string }, at: { x: number; y: number }): void {
    if (mode !== 'live') return;
    const dep = (live.Dependencies ?? []).find((d) => d.PredecessorPlanElementID === link.fromId && d.SuccessorPlanElementID === link.toId);
    if (!dep?.PlanElementDependencyID) return;
    openDep = { id: dep.PlanElementDependencyID, from: nameOf(link.fromId), to: nameOf(link.toId), lag: dep.LagDays ?? 0 };
    q<HTMLElement>('[data-prp-link-from]').textContent = openDep.from;
    q<HTMLElement>('[data-prp-link-to]').textContent = openDep.to;
    lagField.value = String(openDep.lag);
    const box = q<HTMLElement>('.bcn-prp__main').getBoundingClientRect();
    linkPop.style.left = `${at.x - box.left}px`;
    linkPop.style.top = `${at.y - box.top}px`;
    // Opened on the next frame, so the click that opened it isn't read as a click outside.
    requestAnimationFrame(() => (linkPop.open = true));
  }
  async function afterLinkEdit(message: string): Promise<void> {
    linkPop.open = false;
    live = await planApi.getPlan(planID!);
    await recordLiveEdit(planID!, message);
    shown = live;
    refresh();
  }
  q<HTMLElement>('[data-prp-link-unlink]').addEventListener('click', async () => {
    if (!openDep) return;
    await planApi.deleteDependency(planID!, openDep.id, live.VersionToken);
    await afterLinkEdit(`Unlinked ${openDep.to} from ${openDep.from}`);
  });
  q<HTMLElement>('[data-prp-link-save]').addEventListener('click', async () => {
    if (!openDep) return;
    const lag = Math.round(Number(lagField.value));
    if (!Number.isFinite(lag) || lag === openDep.lag) return void (linkPop.open = false);
    await planApi.updateDependency(planID!, openDep.id, lag, live.VersionToken);
    await afterLinkEdit(`Set ${openDep.to} to start ${lag === 0 ? 'right after' : `${Math.abs(lag)} ${Math.abs(lag) === 1 ? 'day' : 'days'} ${lag > 0 ? 'after' : 'before the end of'}`} ${openDep.from}`);
  });

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

  /** Back to edit `count`: the later edits go onto the redo stack, newest last, so Redo brings them back in order. */
  async function backTo(count: number): Promise<void> {
    if (mode !== 'own' || !draft || busy) return;
    const dropped: PlanRevision[] = [];
    while ((getRepo(planID!).drafts.find((d) => d.id === draft!.id)?.revisions.length ?? 0) > count) {
      const rev = dropLastRevision(planID!, draft.id);
      if (!rev) break;
      dropped.push(rev);
    }
    redo.push(...dropped);
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
  }

  /** The edit-mode study's band and tabs (quiet, the default, is the branch menu and the status line alone). */
  function drawEditStyle(): void {
    const band = q<HTMLElement>('[data-prp-band]');
    band.hidden = !(editStyle === 'band' && mode !== 'live');
    if (!band.hidden && draft) {
      const behind = versionsBehind(repo, draft);
      q<HTMLElement>('[data-prp-band-text]').innerHTML = `<b>${mode === 'own' ? 'Your draft' : `${firstName(draft.owner)}'s draft`}</b> · based on Rev ${draft.baseVersion}${behind > 0 ? ` · Live has ${behind} newer` : ''}`;
      const actions = q<HTMLElement>('[data-prp-band-actions]');
      actions.append(q<HTMLElement>('[data-prp-draft-actions]'), q<HTMLElement>('[data-prp-review]'), q<HTMLElement>('[data-prp-copy]'));
    }
    const tabs = q<HTMLElement & { options: { label: string; value: string }[]; value: string }>('[data-prp-tabs]');
    const tabbed = editStyle === 'tabs' && mode !== 'view';
    tabs.hidden = !tabbed;
    q<HTMLElement>('[data-prp-branch-popover]').style.display = tabbed ? 'none' : '';
    if (tabbed) {
      void customElements.whenDefined('esa-button-toggle').then(() => {
        tabs.options = [
          { label: 'Live plan', value: 'live' },
          { label: 'Your draft', value: 'draft' },
        ];
        tabs.value = mode === 'own' ? 'draft' : 'live';
      });
    }
  }

  function drawBar(): void {
    drawEditStyle();
    q<HTMLElement>('[data-prp-branch-label]').textContent = mode === 'live' ? 'Live plan' : mode === 'own' ? 'Your draft' : `${firstName(draft!.owner)}'s draft`;
    q<HTMLElement>('[data-prp-draft-count]').textContent = String(repo.drafts.length);
    q<HTMLElement>('[data-prp-version-count]').textContent = String(repo.versions.length);
    q<HTMLAnchorElement>('[data-prp-history-link]').href = REVISIONS_HREF(planID!);
    q<HTMLElement>('[data-prp-edit]').hidden = mode !== 'live';
    q<HTMLElement>('[data-prp-review]').hidden = mode !== 'own';
    q<HTMLElement>('[data-prp-copy]').hidden = mode !== 'view';
    const reviewBtn = q<HTMLElement>('[data-prp-review] button');
    setButtonDisabled(reviewBtn as HTMLButtonElement | null, !draft?.revisions.length);
    drawBranches();
    if (editStyle === 'tabs') q<HTMLElement>('[data-prp-edit]').hidden = true;
  }

  /**
   * esa-popover centres its panel under its anchor (an inline-block around the slotted trigger) and has no start
   * alignment: a lego gap, noted for /request-lego. Workaround: the trigger's wrapper is as wide as the panel with the
   * button at its left, a negative end margin gives the bar its space back, and pointer events pass through the
   * empty part (the button and the panel's rows take them back).
   */
  function alignBranchMenu(): void {
    const pop = q<HTMLElement>('[data-prp-branch-popover]');
    const trigger = q<HTMLElement>('[data-prp-branch-trigger]');
    const button = trigger.querySelector<HTMLElement>('button');
    if (!button) return;
    const PANEL_REM = 24;
    Object.assign(trigger.style, { display: 'inline-block', inlineSize: `${PANEL_REM}rem`, pointerEvents: 'none' });
    button.style.pointerEvents = 'auto';
    Object.assign(pop.style, { pointerEvents: 'none', marginInlineEnd: `calc(${button.getBoundingClientRect().width}px - ${PANEL_REM}rem)` });
    q<HTMLElement>('[data-prp-branches]').style.pointerEvents = 'auto';
  }

  function drawBranches(): void {
    requestAnimationFrame(alignBranchMenu);
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
      row(PLAN_HREF(planID!), mode === 'live', null, 'Live plan', `Rev ${latest.number} · ${firstName(latest.author)} · ${timeAgo(latest.at)}`),
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
      meta.innerHTML = `<span title="${new Date(latest.at).toLocaleString()}">Rev ${latest.number} · ${timeAgo(latest.at)}</span>`;
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
    meta.innerHTML = `<span>${n} ${n === 1 ? 'edit' : 'edits'} · based on Rev ${d.baseVersion}${behind > 0 ? ` · <b>Live has ${behind} newer ${behind === 1 ? 'revision' : 'revisions'}</b>` : ''}</span>`;
    actions.hidden = mode !== 'own';
    const undoBtn = actions.querySelector<HTMLButtonElement>('[data-prp-undo] button');
    const redoBtn = actions.querySelector<HTMLButtonElement>('[data-prp-redo] button');
    setButtonDisabled(undoBtn, n === 0);
    setButtonDisabled(redoBtn, redo.length === 0);
  }

  function drawAside(): void {
    // In a draft the pane leads with the draft itself: its edits, newest first, each one a place to go back to.
    q<HTMLElement>('[data-prp-pane-title]').textContent = mode === 'live' ? 'About' : mode === 'own' ? 'Your draft' : `${firstName(draft!.owner)}'s draft`;
    const editsSection = q<HTMLElement>('[data-prp-edits]');
    editsSection.hidden = mode === 'live';
    if (draft && mode !== 'live') {
      const ol = q<HTMLOListElement>('[data-prp-edit-list]');
      const n = draft.revisions.length;
      const rows = draft.revisions.map((rev, i) => {
        const li = document.createElement('li');
        const text = document.createElement('div');
        text.textContent = rev.message;
        const small = document.createElement('small');
        small.textContent = `Edit ${i + 1} · ${timeAgo(rev.at)}`;
        text.append(small);
        li.append(text);
        if (i === n - 1) li.dataset.current = '';
        else if (mode === 'own') {
          const back = (q<HTMLTemplateElement>('[data-prp-tpl="back"]').content.firstElementChild!.cloneNode(true) as HTMLElement);
          back.querySelector('button')?.setAttribute('aria-label', `Go back to edit ${i + 1}`);
          back.addEventListener('click', () => void backTo(i + 1));
          li.append(back);
        }
        return li;
      });
      ol.replaceChildren(...rows.reverse());
      if (!n) ol.innerHTML = '<li><small>No edits yet</small></li>';
    }
    q<HTMLElement>('[data-prp-desc]').textContent = live.Description ?? '';
    const span = planSpan(shown);
    q<HTMLElement>('[data-prp-span]').textContent = span.start && span.end ? `${new Date(span.start).getUTCFullYear()}–${new Date(span.end).getUTCFullYear()}` : '—';
    q<HTMLElement>('[data-prp-items]').textContent = String(flattenPlan(shown.Elements).length);
    q<HTMLElement>('[data-prp-deps]').textContent = String(shown.Dependencies?.length ?? 0);
    q<HTMLElement>('[data-prp-people]').replaceChildren(planAvatarStack(contributorsOf(repo), 8, 'sm'));

    const item = (avatarName: string | null, glyph: string | null, title: string, sub: string, href?: string) => {
      const el = document.createElement('div');
      el.className = 'bcn-prp__item';
      const lead = avatarName ? planAvatar(avatarName, 'xs') : Object.assign(document.createElement('span'), { innerHTML: '' });
      if (glyph) lead.dataset.glyph = glyph;
      const body = document.createElement('div');
      const name = document.createElement(href ? 'a' : 'b');
      name.textContent = title;
      if (href) (name as HTMLAnchorElement).href = href;
      const small = document.createElement('small');
      small.textContent = sub;
      body.append(name, small);
      el.append(lead, body);
      return el;
    };
    const latest = latestVersion(repo);
    const named = [...repo.versions].reverse().find((v) => v.label);
    const more = Object.assign(document.createElement('a'), { className: 'bcn-prp__more', href: REVISIONS_HREF(planID!), textContent: `All ${repo.versions.length} revisions` });
    q<HTMLElement>('[data-prp-releases]').replaceChildren(
      item(latest.author, null, `Revision ${latest.number}`, `${shortDate(latest.at)} · ${firstName(latest.author)}`),
      ...(named ? [item(null, 'tag', named.label!, `Rev ${named.number} · ${shortDate(named.at)}`)] : []),
      more
    );

    const list = q<HTMLUListElement>('[data-prp-draftlist]');
    list.replaceChildren(
      ...repo.drafts.map((d) => {
        const li = document.createElement('li');
        li.append(item(d.owner, null, d.owner === me ? `${d.name} (yours)` : d.name, `${d.revisions.length} ${d.revisions.length === 1 ? 'edit' : 'edits'} · ${timeAgo(d.revisions.at(-1)?.at ?? d.createdAt)}`, PLAN_HREF(planID!, `&draft=${d.id}`)));
        return li;
      })
    );
    if (!repo.drafts.length) list.innerHTML = '<li><small>None open</small></li>';
    fillGlyphs(root);
  }

  // ── Wiring ──────────────────────────────────────────────────────────────────────────────────────────────────────
  q<HTMLElement>('[data-prp-tabs]').addEventListener('change', (e) => {
    const value = (e.currentTarget as HTMLElement & { value: string }).value;
    if (value === 'live' && mode !== 'live') go(PLAN_HREF(planID!));
    if (value === 'draft' && mode !== 'own') go(PLAN_HREF(planID!, `&draft=${startDraft(planID!).id}`));
  });
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
  // About folds into a rail from its own header (the setup wizard's Library), remembered in this browser.
  const ABOUT_KEY = 'bcn-prp-about';
  const setAbout = (open: boolean) => {
    root.dataset.about = open ? 'open' : 'closed';
    try {
      localStorage.setItem(ABOUT_KEY, root.dataset.about);
    } catch {
      /* a blocked store keeps this page's state only */
    }
  };
  try {
    // About is folded by default below 1600px wide (the density study); a choice made in this browser wins.
    const remembered = localStorage.getItem(ABOUT_KEY);
    if (study.about) root.dataset.about = study.about;
    else if (remembered) root.dataset.about = remembered;
    else if (window.innerWidth < 1600) root.dataset.about = 'closed';
  } catch {
    /* as above */
  }
  q<HTMLElement>('[data-prp-about-close]').addEventListener('click', () => setAbout(false));
  q<HTMLElement>('[data-prp-about-open]').addEventListener('click', () => setAbout(true));
  fillIcons(root);
  draw();
}
