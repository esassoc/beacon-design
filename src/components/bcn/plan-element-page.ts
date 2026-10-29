// <BcnPlanElementPage>'s runtime: one element, its head and its modules. From the URL: `plan` and `el`; `draft` opens
// it as a draft has it (yours to edit, anyone else's read-only); `customize=1` opens it with its level's page being
// customized (Owners, on Live: ./element-customize.ts), drawn with the working layout.
//
// Every change redraws the whole page from storage: a draft edit made here, a record saved by a module, the same plan
// changed in another tab. Modules are idempotent draws (./element-module.ts).

import { ensureSeeded, getRepo, draftState, draftsTouching, myDraft, startDraft, startEditDraft, discardDraft, dropStaleEditDrafts, addRevision, mergeAttributes, flattenPlan, membersOf, stamp, type PlanRepo, type PlanRepoDraft } from '../../lib/planning/plan-repo';
import { planDraftWithEdits, withItemsCarried } from '../../lib/planning/plan-draft';
import { setupElementEditDialog, type ElementEdit } from './element-edit-dialog';
import { setupPlanRevisionsDialog, type PlanRevisionsDialog } from './plan-revisions-dialog';
import { currentUserName, planApi } from '../../lib/planning/plan-server';
import type { PlanDetailDto, PlanElementDto } from '../../lib/planning/model';
import { elementContext, moduleShows, PLAN_VIEW_HREF, ELEMENT_HREF, type ElementContext } from '../../lib/planning/element-context';
import type { ModuleKey } from '../../lib/planning/plan-config';
import { setupElementCustomize } from './element-customize';
import { confirm, pushAlert } from '../../lib/planning/plan-page';
import { fillIcons } from '../../lib/planning/icons';
import { withBase } from '../../lib/base';
import { badge } from './badge-bank';
import { type ElementModule, type ElementModuleHost, type ElementModuleSetup } from './element-module';
import { setupDetailsModule } from './element-details';
import { setupLineageModule } from './element-lineage';
import { setupScheduleModule } from './element-schedule';
import { setupProgressModule } from './element-progress';
import { setupBudgetModule } from './element-budget';
import { setupDocumentsModule } from './element-documents';
import { setupTransmittalsModule } from './element-transmittals';
import { setupCompletionModule } from './element-completion';
import { setupObligationsModule } from './element-obligations';
import { setupCommentsModule } from './element-comments';
import { setupActivityModule } from './element-activity';
import { openHealthDialog } from './health-dialog';
import type { HealthReading } from '../../lib/planning/plan-records';

const SETUPS: Record<ModuleKey, ElementModuleSetup> = {
  details: setupDetailsModule,
  lineage: setupLineageModule,
  schedule: setupScheduleModule,
  progress: setupProgressModule,
  budget: setupBudgetModule,
  documents: setupDocumentsModule,
  transmittals: setupTransmittalsModule,
  completion: setupCompletionModule,
  obligations: setupObligationsModule,
  comments: setupCommentsModule,
  activity: setupActivityModule,
};


export async function setupPlanElementPage(root: HTMLElement): Promise<void> {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  await ensureSeeded();
  dropStaleEditDrafts();
  const params = new URLSearchParams(location.search);
  const planID = params.get('plan') ?? '';
  const elementId = params.get('el') ?? '';

  // ── Modules ──
  const modules = new Map<ModuleKey, { root: HTMLElement; module: ElementModule }>();
  let ctx: ElementContext | null = null;
  let draft: PlanRepoDraft | null = null;

  const host: ElementModuleHost = {
    ctx: () => ctx!,
    refresh: () => refresh(),
    confirm: (opts) => confirm({ header: opts.heading, text: opts.message, confirmButtonLabel: opts.confirmLabel, color: opts.danger ? 'warn' : undefined }),
    toast: (message, status = 'success') => pushAlert(message, status),
  };
  for (const [key, setup] of Object.entries(SETUPS) as [ModuleKey, ElementModuleSetup][]) {
    const el = root.querySelector<HTMLElement>(`[data-element-module="${key}"]`);
    if (el) modules.set(key, { root: el, module: setup(el, host) });
  }

  // ── Customize Page (2026-10-28): the level's page edited in place, by an Owner, on Live ──
  const custom = setupElementCustomize(document.querySelector<HTMLElement>('[data-bcn-element-customize]')!, {
    planID,
    ctx: () => ctx,
    draw: () => refresh(),
    cols: () => ({ main: q('[data-pep-col="main"]'), side: q('[data-pep-col="side"]') }),
    page: root,
  });

  // ── Header pieces outside the component (PageLayout's title row and crumbs, the utilities slot) ──
  const h1 = document.querySelector('.page-layout__title h1');
  const titleText = h1 && [...h1.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim());
  const titleBadges = document.querySelector<HTMLElement>('[data-pep-title-badges]');
  const util = (name: string) => document.querySelector<HTMLElement>(`[data-pep-action="${name}"]`);
  fillIcons(document);

  function drawCrumbs(c: ElementContext): void {
    const items = document.querySelector<HTMLElement>('.breadcrumbs__items');
    if (!items) return;
    const links = [...items.querySelectorAll<HTMLAnchorElement>('a.breadcrumb-item')];
    const planLink = links[1];
    if (!planLink) return;
    // The trail: Plans, the plan, then the element's parents, then the element. Parents are clones of the plan's
    // link and the chevron after it, so they keep the layout's look.
    items.querySelectorAll('[data-pep-crumb]').forEach((n) => n.remove());
    planLink.textContent = c.live.PlanName ?? 'Plan';
    planLink.href = PLAN_VIEW_HREF(planID, undefined, c.draft?.id);
    const chevron = planLink.nextElementSibling;
    let after: Element = chevron ?? planLink;
    // The top item often carries the plan's own name (the sample's program does); it isn't said twice.
    for (const a of c.ancestors.filter((x, i) => !(i === 0 && x.PlanElementName === c.live.PlanName))) {
      const link = planLink.cloneNode(true) as HTMLAnchorElement;
      link.textContent = a.PlanElementName ?? '';
      link.href = c.hrefOf(a.PlanElementID ?? '');
      link.dataset.pepCrumb = '';
      after.after(link);
      after = link;
      if (chevron) {
        const sep = chevron.cloneNode(true) as HTMLElement;
        sep.dataset.pepCrumb = '';
        after.after(sep);
        after = sep;
      }
    }
    const current = items.querySelector('[aria-current="page"]');
    if (current) current.textContent = c.element.PlanElementName ?? '';
  }

  function drawHead(c: ElementContext): void {
    const name = c.element.PlanElementName ?? 'Item';
    if (titleText) titleText.textContent = name;
    document.title = `${name} | ${c.live.PlanName ?? 'Plan'} | Beacon`;
    drawCrumbs(c);
    if (titleBadges) {
      titleBadges.replaceChildren(badge(c.levelName, 'neutral', 'sm'));
      if (c.attrs.deliverable) titleBadges.append(badge('Deliverable', 'primary', 'sm'));
      if (c.element.IsMilestone) titleBadges.append(badge('Milestone', 'neutral', 'sm'));
    }

    // The page's actions.
    const set = (name: string, show: boolean) => {
      const el = util(name);
      if (el) el.hidden = !show;
    };
    // Customizing, the bar's Save and Cancel are the only ways on.
    if (c.mode === 'customize') {
      document.querySelectorAll<HTMLElement>('[data-pep-action]').forEach((a) => (a.hidden = true));
      return;
    }
    for (const name of ['prev', 'next', 'open-plan']) set(name, true);
    // Edit: on Live for anyone who keeps the plan (it goes to their draft), in your own draft. Review and Publish: in your
    // own draft, for someone who can publish (draft first: the way an item's edit reaches Live).
    set('edit', (c.mode === 'live' && c.myRole !== 'Guest') || c.mode === 'own');
    // A Contributor's own draft: the same review, ending in Ask to Publish, as the plan page's.
    set('review', c.mode === 'own');
    const asks = c.myRole !== 'Owner' && c.myRole !== 'Editor';
    const reviewLabel = util('review')?.querySelector('.esa-button__label');
    if (reviewLabel) reviewLabel.textContent = asks ? 'Ask to Publish' : 'Review and Publish';
    util('review')?.querySelector('esa-tooltip')?.setAttribute('text', asks ? 'Compare your draft with Live, then ask to publish' : 'Compare your draft with Live, then publish');
    set('back', c.mode === 'own' || c.mode === 'view');
    // Customize Page: the level's page, for its Owners, from Live.
    set('customize', c.mode === 'live' && c.myRole === 'Owner');
    const open = util('open-plan')?.querySelector<HTMLAnchorElement>('a');
    if (open) open.href = PLAN_VIEW_HREF(planID, undefined, c.draft?.id) + `&el=${encodeURIComponent(elementId)}`;
    // Previous and next, in outline order.
    const order = flattenPlan(c.plan.Elements).map(({ element }) => element.PlanElementID ?? '');
    const at = order.indexOf(elementId);
    const step = (name: 'prev' | 'next', id: string | undefined) => {
      const el = util(name);
      const btn = el?.querySelector('button');
      if (!el || !btn) return;
      btn.disabled = !id;
      el.dataset.to = id ?? '';
      const tip = el.querySelector('esa-tooltip');
      const target = id ? c.elementById(id) : undefined;
      if (tip) tip.setAttribute('text', target ? `${name === 'prev' ? 'Previous' : 'Next'}: ${target.PlanElementName}` : name === 'prev' ? 'First Item' : 'Last Item');
    };
    step('prev', at > 0 ? order[at - 1] : undefined);
    step('next', at >= 0 && at < order.length - 1 ? order[at + 1] : undefined);
  }

  /** Each module into its column, in the level's order; shown when it's on and applies here. Customizing, every card
   *  takes its place: the ones that don't show here as ghosts. */
  function place(c: ElementContext): void {
    const main = q('[data-pep-col="main"]');
    const side = q('[data-pep-col="side"]');
    const bank = q('[data-pep-bank]');
    const customizing = c.mode === 'customize';
    for (const p of c.placements) {
      const m = modules.get(p.key);
      if (!m) continue;
      const shows = moduleShows(c, p);
      m.root.hidden = !shows && !customizing;
      (shows || customizing ? (p.column === 'side' ? side : main) : bank).append(m.root);
      if (customizing) custom.decorate(m.root, p, c, shows);
      else custom.undecorate(m.root);
      if (shows) {
        try {
          m.module.draw(c, p.settings);
        } catch (err) {
          console.error(`The ${p.key} module failed to draw`, err);
        }
      }
    }
    q('[data-pep-cols]').hidden = false;
  }

  // ── Load and draw ──
  let drawing: Promise<void> | null = null;
  let again = false;
  /** A link that points nowhere (2026-10-28, the review: it opened a blank "Item"): the plan's gone, or the item. */
  function missing(planKnown: boolean, repo?: PlanRepo): void {
    q('[data-pep-missing]').hidden = false;
    q('[data-pep-cols]').hidden = true;
    document.querySelectorAll<HTMLElement>('[data-pep-action]').forEach((a) => (a.hidden = true));
    const back = q<HTMLAnchorElement>('[data-pep-missing-back]');
    back.href = planKnown ? PLAN_VIEW_HREF(planID, undefined, draft?.id) : withBase('/prototypes/plans-repo/');
    const label = back.querySelector('.esa-button__label');
    if (label) label.textContent = planKnown ? 'Back to the Plan' : 'Back to Plans';
    const title = planKnown ? 'Not in This Plan' : 'Plan Not Found';
    if (titleText) titleText.textContent = title;
    q('[data-pep-missing] .esa-empty-state__title').textContent = title;
    if (!planKnown) q('[data-pep-missing] .esa-empty-state__description').textContent = 'This link points to a plan that isn’t here. It may have been deleted, or the sample was started over.';
    // Removed by a publish (2026-10-29, the orthogonal pass: a page left open in another tab turned into "isn't in the
    // plan, or it was removed"): for someone on the plan, name the item, the revision that took it out, who and when.
    const me = currentUserName();
    const member = repo ? membersOf(repo).find((m) => m.name === me) : undefined;
    const gone = planKnown && !draft && repo && member && member.role !== 'Guest' ? removedIn(repo) : null;
    if (gone) {
      q('[data-pep-missing] .esa-empty-state__title').textContent = 'Removed From the Plan';
      q('[data-pep-missing] .esa-empty-state__description').textContent = `${gone.name} was removed in Revision ${gone.number} by ${gone.author}, ${stamp(gone.at)}.`;
      if (titleText) titleText.textContent = gone.name;
    }
    document.title = `${gone ? gone.name : title} | Beacon`;
  }
  /** The revision whose publish took this item out of Live: the one after the last revision that held it. */
  function removedIn(repo: PlanRepo): { name: string; number: number; author: string; at: string } | null {
    const holds = (i: number) => flattenPlan(repo.versions[i].plan.Elements).find((x) => x.element.PlanElementID === elementId)?.element;
    for (let i = repo.versions.length - 1; i > 0; i--) {
      if (holds(i)) return null;
      const was = holds(i - 1);
      if (was) return { name: was.PlanElementName ?? 'This item', number: repo.versions[i].number, author: repo.versions[i].author, at: repo.versions[i].at };
    }
    return null;
  }

  async function load(): Promise<void> {
    let repo;
    let live: PlanDetailDto;
    try {
      repo = getRepo(planID);
      live = await planApi.getPlan(planID);
    } catch {
      return missing(false);
    }
    draft = repo.drafts.find((d) => d.id === new URLSearchParams(location.search).get('draft')) ?? null;
    const shown = draft ? (await draftState(draft)).Plan : live;
    ctx = elementContext({ planID, elementId, live, shown, draft, customize: draft ? null : custom.working() });
    if (!ctx) return missing(true, repo);
    q('[data-pep-missing]').hidden = true;
    // A guest (an agency reviewer, decision 2) sees only the transmittals sent to them, not the plan's pages.
    if (ctx.myRole === 'Guest') {
      q('[data-pep-guest]').hidden = false;
      if (!ctx.onPlan) {
        q('[data-pep-guest] .esa-empty-state__title').textContent = 'Not Shared With You';
        q('[data-pep-guest] .esa-empty-state__description').textContent = 'You aren’t on this plan’s People. Ask one of its Owners to add you.';
      }
      q('[data-pep-cols]').hidden = true;
      // Someone not on the plan learns nothing of it, the item's name included (2026-10-29, the second traps audit).
      if (titleText) titleText.textContent = ctx.onPlan ? (ctx.element.PlanElementName ?? '') : 'Not Shared With You';
      if (!ctx.onPlan) {
        document.title = 'Not Shared With You | Beacon';
        const crumbs = [...document.querySelectorAll<HTMLElement>('.breadcrumbs__items a.breadcrumb-item')].slice(1);
        crumbs.forEach((c) => (c.nextElementSibling?.remove(), c.remove()));
        const current = document.querySelector('.breadcrumbs__items [aria-current="page"]');
        if (current) current.textContent = 'Not Shared With You';
      }
      document.querySelectorAll<HTMLElement>('[data-pep-action]').forEach((a) => (a.hidden = true));
      return;
    }
    drawHead(ctx);
    place(ctx);
    custom.drawn(ctx);
  }
  /** One redraw at a time; a change during one queues one more. */
  function refresh(): Promise<void> {
    if (drawing) {
      again = true;
      return drawing;
    }
    drawing = load().finally(() => {
      drawing = null;
      if (again) {
        again = false;
        void refresh();
      }
    });
    return drawing;
  }

  // Records saved anywhere (this page's modules, or another tab) redraw the page.
  let queued = false;
  const soon = () => {
    if (queued) return;
    queued = true;
    queueMicrotask(() => {
      queued = false;
      void refresh();
    });
  };
  window.addEventListener('bcn-plan-records', soon);
  // Health's Change (the Details card): the health dialog, on Live (the Completion build's).
  root.addEventListener('bcn-element-health', (e) => {
    const detail = (e as CustomEvent<{ elementId: string; reading: HealthReading }>).detail;
    if (!ctx?.canRecord) return;
    void openHealthDialog({ planID, elementId: detail.elementId, elementName: ctx.element.PlanElementName ?? '', current: detail.reading });
  });
  window.addEventListener('storage', soon);

  // ── Edit (2026-10-28, draft first: Andy's call on the review's edit model) ──
  // Every edit goes to a draft: from Live, Save to My Draft adds it to yours (started if you have none) and the page
  // follows it there, where Review and Publish takes it to Live with the rest of the draft. If your draft already
  // changes the item, the form opens on the draft's version of it. Publish Now, the one shortcut, is offered only to
  // someone who can publish, when no open draft changes the item, and goes through only when nothing else moves;
  // otherwise publishing that draft later would quietly put Live's edit back.
  const editDialog = setupElementEditDialog(document.querySelector<HTMLElement>('[data-bcn-element-edit]')!);
  // Set up on first use, once the viewer's role is known: someone who can publish gets Publish, a Contributor Ask to
  // Publish (2026-10-29, the entry points audit: the item page told Contributors to ask "from the plan").
  let reviewDialog: PlanRevisionsDialog | null = null;
  const review = (): PlanRevisionsDialog =>
    (reviewDialog ??= setupPlanRevisionsDialog({
      planID,
      canPublish: ctx?.myRole === 'Owner' || ctx?.myRole === 'Editor',
      concept: null,
      // Published: back on Live, unless part of the draft stayed.
      onLanded: async () => {
        if (draft && !getRepo(planID).drafts.some((d) => d.id === draft!.id)) history.replaceState(null, '', ELEMENT_HREF(planID, elementId));
        await refresh();
      },
      onAsked: () => {
        pushAlert('Asked the plan’s Owners and Editors to publish your draft. A new edit withdraws the request.', 'success', 7000);
        void refresh();
      },
    }));
  /** The edit as a draft's next revision: dates as overrides (and what follows them), fields, attributes. */
  function applyEdit(draftID: string, edit: ElementEdit): void {
    const d = getRepo(planID).drafts.find((x) => x.id === draftID);
    if (!d || !ctx) return;
    const prior = d.revisions.at(-1);
    // A parent's dates moved whole carry its items, as the plan's drag and drawer do.
    const overrides = edit.dates ? planDraftWithEdits(prior?.overrides ?? [], withItemsCarried(ctx.plan, edit.dates), ctx.live, true) : (prior?.overrides ?? []);
    const fields = edit.fields ? { ...(prior?.fields ?? {}), [elementId]: { ...(prior?.fields?.[elementId] ?? {}), ...edit.fields } } : undefined;
    const attributes = edit.attributes ? mergeAttributes(prior?.attributes ?? {}, { [elementId]: edit.attributes }) : undefined;
    addRevision(planID, d.id, overrides, { action: 'Edited', subject: ctx.element.PlanElementName ?? '', shift: edit.changed.join(', ') }, { fields, attributes });
  }
  /** The page shows a draft (or Live, with null) without reloading: the URL, then a redraw. */
  async function show(draftID: string | null): Promise<void> {
    history.pushState(null, '', ELEMENT_HREF(planID, elementId, draftID));
    await refresh();
  }
  const firstName = (n: string) => n.split(' ')[0];
  async function edit(): Promise<void> {
    if (!ctx) return;
    const canPublish = ctx.myRole === 'Owner' || ctx.myRole === 'Editor';
    if (ctx.mode === 'live') {
      const touching = await draftsTouching(planID, elementId, ctx.live);
      const mine = myDraft(planID);
      // Your draft already changes it: edit it there, on the draft's version.
      if (mine && touching.some((d) => d.id === mine.id)) {
        await show(mine.id);
        pushAlert('Your draft already changes this item, so it opens there.', 'info');
        return edit();
      }
      const others = touching.map((d) => firstName(d.owner));
      // Which draft it lands in, said (2026-10-29, the traps audit: a weekly edit vanished into a what-if draft).
      const into = mine
        ? `Goes into ${mine.name} (${mine.revisions.length} other ${mine.revisions.length === 1 ? 'edit' : 'edits'}${mine.publishRequestedAt ? ', publish requested: this withdraws the request' : ''}).`
        : 'Starts your draft.';
      let where = !canPublish
        ? 'Saved to your draft; someone who can publish takes it to Live.'
        : others.length
          ? `${others.length === 1 ? `${others[0]}’s draft also changes` : `${others.length} open drafts also change`} this item, so this edit goes to your draft.`
          : `${into} Or Review and Publish this edit now, with whatever it moves.`;
      if (!canPublish) where = `${into} Ask to Publish when it’s ready.`;
      let publishNow = canPublish && !others.length;
      let keep = false;
      for (;;) {
        const result = await editDialog.open(ctx, { label: 'Save to My Draft', where, publishNow }, keep);
        if (!result) return;
        if (result.publishNow) {
          const now = (await draftsTouching(planID, elementId, ctx.live)).map((d) => firstName(d.owner));
          if (now.length) {
            where = `${now.length === 1 ? `${now[0]}’s draft` : `${now.length} drafts`} started changing this item while you edited, so it goes to your draft.`;
            publishNow = false;
            keep = true;
            continue;
          }
          // Reviewed before it lands (2026-10-29, Andy: "users should always get that guard"): the edit waits in a
          // short-lived draft while the review shows it beside Live. Its Publish lands it (and says so); Back to Edit
          // throws that draft away and returns to the form as it was left.
          const temp = startEditDraft(planID, ctx.element.PlanElementName ?? 'Item');
          applyEdit(temp.id, result.edit);
          if (await review().review(temp.id)) return;
          discardDraft(planID, temp.id);
          keep = true;
          continue;
        }
        const target = startDraft(planID, undefined, 'Draft');
        applyEdit(target.id, result.edit);
        await show(target.id);
        pushAlert(canPublish ? 'Saved to your draft. Review and Publish when it’s ready.' : 'Saved to your draft. Ask to Publish when it’s ready.', 'success', 7000);
        return;
      }
    }
    if (ctx.mode !== 'own' || !draft) return;
    const result = await editDialog.open(ctx, { label: 'Save to Draft', where: 'Saved as your draft’s next edit. Live changes when it’s published.', publishNow: false });
    if (!result) return;
    applyEdit(draft.id, result.edit);
    pushAlert('Saved to your draft.', 'success');
    await refresh();
  }
  window.addEventListener('popstate', () => void refresh());
  util('review')?.addEventListener('click', () => {
    if (draft) void review().open(draft.id);
  });
  util('edit')?.addEventListener('click', () => void edit());
  util('back')?.addEventListener('click', () => location.assign(ELEMENT_HREF(planID, elementId)));
  util('customize')?.addEventListener('click', () => custom.start());
  for (const name of ['prev', 'next']) {
    util(name)?.addEventListener('click', () => {
      const to = util(name)?.dataset.to;
      if (to) location.assign(ctx!.hrefOf(to));
    });
  }

  await refresh();
  // Opened to customize (a level's Customize Page in the plan's settings): an Owner on Live starts right away.
  const opened = ctx as ElementContext | null;
  if (params.get('customize') === '1' && opened?.mode === 'live' && opened.myRole === 'Owner') custom.start();
}
