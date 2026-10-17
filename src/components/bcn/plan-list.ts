// The Plans page body's controller — Jamie's PlanListComponent (Beacon.Web pages/plan-list/plan-list.component.ts).
// Loads the project's plans (Retry refetches), renders the rows, and opens New plan / Load sample plan; either drops
// the user straight onto the new plan's Gantt. Markup is BcnPlanList.astro's; rows are cloned from its <template>.

import type { PlanDetailDto, PlanSimpleDto } from '../../lib/planning/model';
import { alertWriteFailure, planApi, planHref, PLAN_RIGHTS, PROJECT_ID } from '../../lib/planning/plan-page';
import { openPlanCreateDialog } from './plan-create-dialog';

type ListState = 'loading' | 'failed' | 'plans' | 'empty';

/** A settled load: the plans, or an empty list flagged `failed` so it never reads as "no plans yet". */
interface PlanListResult {
  plans: PlanSimpleDto[];
  failed: boolean;
}

export function setupPlanList(root: HTMLElement): void {
  const host = root.matches('[data-plan-list]') ? root : root.querySelector<HTMLElement>('[data-plan-list]');
  if (!host || host.dataset.planListReady) return;
  host.dataset.planListReady = 'true';

  const states = host.querySelectorAll<HTMLElement>('[data-plan-list-state]');
  const rows = host.querySelector<HTMLUListElement>('[data-plan-list-state="plans"]')!;
  const rowTpl = host.querySelector<HTMLTemplateElement>('template[data-plan-list-tpl="row"]')!;
  const sample = host.querySelector<HTMLElement>('[data-plan-list-sample]')!;
  const createActions = host.querySelector<HTMLElement>('.bcn-plan-list__empty-actions');
  // The page's utilities "New plan": only when there are plans (an empty project offers it in its empty state).
  const utilityNew = document.querySelector<HTMLElement>('[data-plan-list-new]');

  // Mirrors the create and sample endpoints' PlanRights.Create gate.
  const canCreate = PLAN_RIGHTS.canCreate;
  if (!canCreate) createActions?.remove();

  let plans: PlanSimpleDto[] = [];
  let loadId = 0;

  const show = (state: ListState): void => {
    states.forEach((el) => (el.hidden = el.dataset.planListState !== state));
    if (utilityNew) utilityNew.hidden = !(canCreate && plans.length);
  };

  const renderRows = (): void => {
    rows.replaceChildren(
      ...plans.map((plan) => {
        const li = (rowTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
        const name = li.querySelector<HTMLAnchorElement>('[data-plan-list-name]')!;
        name.href = planHref(plan.PlanID ?? '');
        name.textContent = plan.PlanName ?? '';
        // The count reads "3 elements" to assistive tech; sighted users get the noun from context.
        const count = plan.ElementCount ?? 0;
        const text = li.querySelector<HTMLElement>('[data-plan-list-count] .esa-badge__text')!;
        text.textContent = String(count);
        const noun = document.createElement('span');
        noun.className = 'visually-hidden';
        noun.textContent = count === 1 ? ' element' : ' elements';
        text.after(noun);
        const description = li.querySelector<HTMLElement>('[data-plan-list-description]')!;
        if (plan.Description) description.textContent = plan.Description;
        else description.remove();
        return li;
      })
    );
    // Beacon's `truncate` directive: the full name as a tooltip only when the ellipsis cuts it.
    requestAnimationFrame(() =>
      rows.querySelectorAll<HTMLAnchorElement>('[data-plan-list-name]').forEach((a) => {
        if (a.scrollWidth > a.clientWidth) a.title = a.textContent ?? '';
      })
    );
  };

  const load = (): void => {
    const id = ++loadId;
    plans = [];
    show('loading');
    planApi
      .listPlans(PROJECT_ID)
      .then((result): PlanListResult => ({ plans: result, failed: false }))
      .catch((error: unknown): PlanListResult => {
        console.error('Plans failed to load.', { projectID: PROJECT_ID, error });
        return { plans: [], failed: true };
      })
      .then((result) => {
        if (id !== loadId) return;
        plans = result.plans;
        if (result.failed) return show('failed');
        if (plans.length) {
          renderRows();
          show('plans');
        } else show('empty');
      });
  };

  const openPlan = (plan: PlanDetailDto): void => {
    location.href = planHref(plan.PlanID ?? '');
  };

  const openCreatePlan = (): void => {
    void openPlanCreateDialog().then((plan) => plan && openPlan(plan));
  };

  let isLoadingSample = false;
  const setLoadingSample = (on: boolean): void => {
    isLoadingSample = on;
    sample.querySelector<HTMLElement>('[data-busy="idle"]')!.hidden = on;
    sample.querySelector<HTMLElement>('[data-busy="busy"]')!.hidden = !on;
  };

  const loadSamplePlan = (): void => {
    if (isLoadingSample) return;
    setLoadingSample(true);
    planApi
      .createSample(PROJECT_ID)
      .then(openPlan)
      // A 400 is form-level, so Beacon's HTTP interceptor has already alerted the server's message.
      .catch((error: unknown) => alertWriteFailure(error, 'Failed to load the sample plan. Please try again.'))
      .finally(() => setLoadingSample(false));
  };

  host.querySelector('[data-plan-list-retry]')?.addEventListener('click', load);
  host.querySelector('[data-plan-list-create]')?.addEventListener('click', openCreatePlan);
  host.querySelector('[data-plan-list-sample-button]')?.addEventListener('click', loadSamplePlan);
  utilityNew?.querySelector('button, a')?.addEventListener('click', openCreatePlan);

  load();
}
