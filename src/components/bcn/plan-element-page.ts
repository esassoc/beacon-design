// <BcnPlanElementPage>'s runtime: one element, its head and its modules. From the URL: `plan` and `el`; `draft` opens
// it as a draft has it (yours to edit, anyone else's read-only); `preview=1` draws it with the Configure screen's
// unsaved configuration (PREVIEW_CONFIG_KEY), read-only and without the page's actions.
//
// Every change redraws the whole page from storage: a draft edit made here, a record saved by a module, the same plan
// changed in another tab. Modules are idempotent draws (./element-module.ts).

import { ensureSeeded, getRepo, draftState, startDraft, startEditDraft, discardDraft, addRevision, mergeAttributes, flattenPlan, type PlanRepoDraft } from '../../lib/planning/plan-repo';
import { planDraftWithEdits } from '../../lib/planning/plan-draft';
import { setupElementEditDialog, type EditMode, type ElementEdit } from './element-edit-dialog';
import { setupPlanRevisionsDialog } from './plan-revisions-dialog';
import { planApi } from '../../lib/planning/plan-server';
import type { PlanDetailDto, PlanElementDto } from '../../lib/planning/model';
import { elementContext, moduleShows, PREVIEW_CONFIG_KEY, PLAN_VIEW_HREF, ELEMENT_HREF, type ElementContext } from '../../lib/planning/element-context';
import type { ModuleKey, PlanConfig } from '../../lib/planning/plan-config';
import { confirm, pushAlert } from '../../lib/planning/plan-page';
import { fillIcons } from '../../lib/planning/icons';
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


function readPreview(planID: string): PlanConfig | null {
  try {
    const raw = sessionStorage.getItem(PREVIEW_CONFIG_KEY(planID)) ?? localStorage.getItem(PREVIEW_CONFIG_KEY(planID));
    return raw ? (JSON.parse(raw) as PlanConfig) : null;
  } catch {
    return null;
  }
}

export async function setupPlanElementPage(root: HTMLElement): Promise<void> {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  await ensureSeeded();
  const params = new URLSearchParams(location.search);
  const planID = params.get('plan') ?? '';
  const elementId = params.get('el') ?? '';
  const previewing = params.get('preview') === '1';
  if (previewing) document.documentElement.dataset.elementPreview = '';

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
    // Edit: on Live for anyone who keeps the plan (reviewed, then published, or saved to a scenario), in your own draft.
    set('edit', (c.mode === 'live' && c.myRole !== 'Guest') || c.mode === 'own');
    set('back', c.mode === 'own' || c.mode === 'view');
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

  /** Each module into its column, in the level's order; shown when it's on and applies here. */
  function place(c: ElementContext): void {
    const main = q('[data-pep-col="main"]');
    const side = q('[data-pep-col="side"]');
    const bank = q('[data-pep-bank]');
    for (const p of c.placements) {
      const m = modules.get(p.key);
      if (!m) continue;
      const shows = moduleShows(c, p);
      m.root.hidden = !shows;
      (shows ? (p.column === 'side' ? side : main) : bank).append(m.root);
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
  async function load(): Promise<void> {
    const repo = getRepo(planID);
    const live: PlanDetailDto = await planApi.getPlan(planID);
    draft = repo.drafts.find((d) => d.id === params.get('draft')) ?? null;
    const shown = draft ? (await draftState(draft)).Plan : live;
    ctx = elementContext({ planID, elementId, live, shown, draft, preview: previewing ? (readPreview(planID) ?? undefined) : null });
    if (!ctx) {
      q('[data-pep-missing]').hidden = false;
      q('[data-pep-cols]').hidden = true;
      const back = q<HTMLAnchorElement>('[data-pep-missing-back]');
      back.href = PLAN_VIEW_HREF(planID, undefined, draft?.id);
      if (titleText) titleText.textContent = 'Not in This Plan';
      return;
    }
    q('[data-pep-missing]').hidden = true;
    // A guest (an agency reviewer, decision 2) sees only the transmittals sent to them, not the plan's pages.
    if (ctx.myRole === 'Guest' && ctx.mode !== 'preview') {
      q('[data-pep-guest]').hidden = false;
      q('[data-pep-cols]').hidden = true;
      if (titleText) titleText.textContent = ctx.element.PlanElementName ?? '';
      document.querySelectorAll<HTMLElement>('[data-pep-action]').forEach((a) => (a.hidden = true));
      return;
    }
    drawHead(ctx);
    place(ctx);
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

  // ── Edit (2026-10-28, Andy: "Shouldn't this just open a form modal (x-large)... and then a republish review?") ──
  // On Live, for someone who can publish: the form, then the plan's Review and Publish on a short-lived draft holding
  // just this edit. Publishing lands it as Live's next revision; closing the review throws that draft away and goes
  // back to the form as it was left. In your own draft, the form saves as its next edit. Someone who can't publish
  // saves it to their scenario.
  const editDialog = setupElementEditDialog(document.querySelector<HTMLElement>('[data-bcn-element-edit]')!);
  const review = setupPlanRevisionsDialog({ planID, canPublish: true, concept: null, onLanded: () => undefined });
  const reviewEl = document.querySelector<HTMLElement>('[data-bcn-plan-revisions-dialog]')!;
  /** The edit as a draft's next revision: dates as overrides (and what follows them), fields, attributes. */
  function applyEdit(draftID: string, edit: ElementEdit): void {
    const d = getRepo(planID).drafts.find((x) => x.id === draftID);
    if (!d || !ctx) return;
    const prior = d.revisions.at(-1);
    const overrides = edit.dates ? planDraftWithEdits(prior?.overrides ?? [], [edit.dates], ctx.live, true) : (prior?.overrides ?? []);
    const fields = edit.fields ? { ...(prior?.fields ?? {}), [elementId]: { ...(prior?.fields?.[elementId] ?? {}), ...edit.fields } } : undefined;
    const attributes = edit.attributes ? mergeAttributes(prior?.attributes ?? {}, { [elementId]: edit.attributes }) : undefined;
    addRevision(planID, d.id, overrides, { action: 'Edited', subject: ctx.element.PlanElementName ?? '', shift: edit.changed.join(', ') }, { fields, attributes });
  }
  /** Resolves when a dialog shuts, however it's shut (esa-dialog sends no event when its code sets open to false). */
  const closed = (el: HTMLElement) =>
    new Promise<void>((resolve) => {
      const watch = new MutationObserver(() => {
        if (el.hasAttribute('open')) return;
        watch.disconnect();
        resolve();
      });
      watch.observe(el, { attributes: true, attributeFilter: ['open'] });
    });
  async function edit(): Promise<void> {
    if (!ctx) return;
    const canPublish = ctx.myRole === 'Owner' || ctx.myRole === 'Editor';
    const mode: EditMode = ctx.mode === 'own' ? 'save' : canPublish ? 'review' : 'scenario';
    let keep = false;
    for (;;) {
      const result = await editDialog.open(ctx, mode, keep);
      if (!result) return;
      if (mode === 'save' && draft) {
        applyEdit(draft.id, result);
        pushAlert('Saved to your draft.', 'success');
        await refresh();
        return;
      }
      if (mode === 'scenario') {
        const mine = startDraft(planID, undefined, 'Scenario');
        applyEdit(mine.id, result);
        pushAlert('Saved to your scenario. Ask to Publish from the plan when it’s ready.', 'success', 7000);
        return;
      }
      const temp = startEditDraft(planID, ctx.element.PlanElementName ?? 'Item');
      applyEdit(temp.id, result);
      const shut = closed(reviewEl);
      await review.open(temp.id);
      await shut;
      // Published: the review removed the draft and said so. Otherwise back to the form, nothing saved.
      if (!getRepo(planID).drafts.some((d) => d.id === temp.id)) {
        await refresh();
        return;
      }
      discardDraft(planID, temp.id);
      keep = true;
    }
  }
  util('edit')?.addEventListener('click', () => void edit());
  root.addEventListener('bcn-element-edit', () => void edit());
  util('back')?.addEventListener('click', () => location.assign(ELEMENT_HREF(planID, elementId)));
  for (const name of ['prev', 'next']) {
    util(name)?.addEventListener('click', () => {
      const to = util(name)?.dataset.to;
      if (to) location.assign(ctx!.hrefOf(to));
    });
  }

  await refresh();
}
