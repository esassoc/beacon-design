// <BcnPlanElementPage>'s runtime: one element, its head and its modules. From the URL: `plan` and `el`; `draft` opens
// it as a draft has it (yours to edit, anyone else's read-only); `preview=1` draws it with the Configure screen's
// unsaved configuration (PREVIEW_CONFIG_KEY), read-only and without the page's actions.
//
// Every change redraws the whole page from storage: a draft edit made here, a record saved by a module, the same plan
// changed in another tab. Modules are idempotent draws (./element-module.ts).

import { ensureSeeded, getRepo, draftState, startDraft, addRevision, mergeAttributes, flattenPlan, membersOf, type PlanRepoDraft, type ElementAttributes } from '../../lib/planning/plan-repo';
import { planApi } from '../../lib/planning/plan-server';
import type { PlanDetailDto, PlanElementDto } from '../../lib/planning/model';
import { elementContext, moduleShows, PREVIEW_CONFIG_KEY, PLAN_VIEW_HREF, ELEMENT_HREF, type ElementContext } from '../../lib/planning/element-context';
import { healthOf, statusOf } from '../../lib/planning/plan-records';
import type { ModuleKey, PlanConfig } from '../../lib/planning/plan-config';
import { confirm, pushAlert } from '../../lib/planning/plan-page';
import { fillIcons } from '../../lib/planning/icons';
import { planAvatar } from './plan-people';
import { badge, HEALTH_VARIANT, STATUS_VARIANT } from './badge-bank';
import { day, type ElementModule, type ElementModuleHost, type ElementModuleSetup } from './element-module';
import { setupDetailsModule } from './element-details';
import { setupScheduleModule } from './element-schedule';
import { setupProgressModule } from './element-progress';
import { setupBudgetModule } from './element-budget';
import { setupDocumentsModule } from './element-documents';
import { setupTransmittalsModule } from './element-transmittals';
import { setupCompletionModule } from './element-completion';
import { setupObligationsModule } from './element-obligations';
import { setupCommentsModule } from './element-comments';
import { setupActivityModule } from './element-activity';
import { orgOf } from '../../lib/planning/plan-repo';

const SETUPS: Record<ModuleKey, ElementModuleSetup> = {
  details: setupDetailsModule,
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

const firstName = (name: string) => name.split(' ')[0];

function readPreview(planID: string): PlanConfig | null {
  try {
    const raw = sessionStorage.getItem(PREVIEW_CONFIG_KEY(planID)) ?? localStorage.getItem(PREVIEW_CONFIG_KEY(planID));
    return raw ? (JSON.parse(raw) as PlanConfig) : null;
  } catch {
    return null;
  }
}

/** The element's dates as a phrase: a milestone's one date, a span's two. */
export function datesText(el: PlanElementDto): string {
  const start = el.SpanStartDate ?? el.StartDate;
  const end = el.SpanEndDate ?? el.EndDate;
  if (el.IsMilestone || !start) return end || start ? `Due ${day(end ?? start)}` : 'Not Scheduled';
  return `${day(start)} to ${day(end ?? start)}`;
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
    async editAttributes(patch, note) {
      if (!ctx || ctx.mode !== 'own' || !draft) return;
      const repo = getRepo(planID);
      const mine = repo.drafts.find((d) => d.id === draft!.id);
      if (!mine) return;
      const prior = mine.revisions.at(-1);
      const next = mergeAttributes(prior?.attributes ?? {}, { [elementId]: patch as ElementAttributes });
      addRevision(planID, mine.id, prior?.overrides ?? [], { action: 'Edited', subject: ctx.element.PlanElementName ?? '', shift: note }, { attributes: next });
      await refresh();
    },
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
    for (const a of c.ancestors) {
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

    // Facts.
    const fact = (k: string) => q(`[data-pep-fact="${k}"]`);
    const records = c.records;
    const status = c.inLive ? statusOf(records, c.live, elementId) : 'Not Started';
    fact('status').replaceChildren(badge(status, STATUS_VARIANT[status], 'sm'));
    const health = c.inLive ? healthOf(records, c.live, elementId, c.isDeliverable) : null;
    const healthFact = fact('health');
    healthFact.replaceChildren();
    if (health) {
      healthFact.append(badge(health.stale ? `${health.health}, Update Missing` : health.health, health.stale ? 'warning' : HEALTH_VARIANT[health.health], 'sm'));
      const why = document.createElement('span');
      why.className = 'bcn-pep__why';
      why.textContent = health.override ? `Set by ${firstName(health.override.by)}: ${health.why}` : health.why;
      why.title = why.textContent;
      healthFact.append(why);
    } else healthFact.append(badge('New in This Draft', 'neutral', 'sm'));
    fact('dates').textContent = datesText(c.element);
    const owners = fact('owners');
    owners.replaceChildren();
    const names = c.attrs.owners ?? [];
    if (!names.length) {
      const none = document.createElement('span');
      none.className = 'bcn-pep__why';
      none.textContent = 'None Yet';
      owners.append(none);
    }
    for (const n of names) {
      const span = document.createElement('span');
      span.className = 'bcn-pep__owner';
      const org = orgOf(n);
      span.append(planAvatar(n, 'xs'), document.createTextNode(n));
      if (org) {
        const o = document.createElement('span');
        o.className = 'bcn-pep__org';
        o.textContent = `(${org})`;
        span.append(' ', o);
      }
      owners.append(span);
    }
    const dot = q('[data-pep-dot]');
    dot.dataset.pepDot = c.mode === 'live' || c.mode === 'preview' ? 'live' : c.mode === 'own' ? 'mine' : 'other';
    const label = q<HTMLAnchorElement>('[data-pep-plan-label]');
    label.textContent = c.mode === 'own' ? 'Your Draft' : c.draft ? c.draft.name : 'Live Plan';
    label.href = PLAN_VIEW_HREF(planID, undefined, c.draft?.id);
    q('[data-pep-facts]').hidden = false;

    // Why it won't edit (the plan page's note, in the same small italic).
    const note = q('[data-pep-note]');
    const canPublish = c.myRole !== 'Contributor' && c.myRole !== 'Guest';
    note.textContent =
      c.mode === 'live'
        ? `Live is read-only. ${canPublish ? 'Edit in a Draft' : 'Make a Scenario'} to change its owners and fields. Documents, sends, status and comments are kept here, on Live.`
        : c.mode === 'view'
          ? `${firstName(c.draft!.owner)}'s draft is read-only. Documents, sends, status and comments are Live's.`
          : c.mode === 'own'
            ? `Your draft changes its owners and fields. Documents, sends, status and comments stay Live's${c.inLive ? '' : ', and this item is new in your draft, so it has none yet'}.`
            : '';
    note.hidden = !note.textContent;

    // The page's actions.
    const set = (name: string, show: boolean) => {
      const el = util(name);
      if (el) el.hidden = !show;
    };
    set('edit', c.mode === 'live' && c.myRole !== 'Guest');
    set('back', c.mode === 'own' || c.mode === 'view');
    const editLabel = util('edit')?.querySelector('.esa-button__label, button');
    if (editLabel && !canPublish && editLabel.textContent?.includes('Draft')) editLabel.lastChild && (editLabel.lastChild.textContent = 'Make a Scenario');
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
      q('[data-pep-facts]').hidden = true;
      q('[data-pep-cols]').hidden = true;
      const back = q<HTMLAnchorElement>('[data-pep-missing-back]');
      back.href = PLAN_VIEW_HREF(planID, undefined, draft?.id);
      if (titleText) titleText.textContent = 'Not in This Plan';
      return;
    }
    q('[data-pep-missing]').hidden = true;
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
  window.addEventListener('storage', soon);

  // ── Actions ──
  util('edit')?.addEventListener('click', () => {
    if (!ctx) return;
    const canPublish = ctx.myRole !== 'Contributor' && ctx.myRole !== 'Guest';
    const mine = startDraft(planID, undefined, canPublish ? 'Draft' : 'Scenario');
    location.assign(ELEMENT_HREF(planID, elementId, mine.id));
  });
  util('back')?.addEventListener('click', () => location.assign(ELEMENT_HREF(planID, elementId)));
  for (const name of ['prev', 'next']) {
    util(name)?.addEventListener('click', () => {
      const to = util(name)?.dataset.to;
      if (to) location.assign(ctx!.hrefOf(to));
    });
  }

  // The people on the plan, for a guest's view: a Guest sees only what's sent to them (decision 2).
  if (!previewing && membersOf(getRepo(planID)).find((m) => m.name === host && false)) void 0;

  await refresh();
}
