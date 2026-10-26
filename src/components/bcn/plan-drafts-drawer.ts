// Controller for <BcnPlanDraftsDrawer> — the Drafts list (new design, "Plan Editing: Proposed Direction"). Fetches the
// list each time it opens; a row resolves with that draft's id and closes the drawer. Rows are cloned from the shell's
// <template>; nothing is built from markup strings.

import '@esa/ecology/esa-side-dialog';
import type { PlanDraftSimpleDto } from '../../lib/planning/plan-draft-model';
import { planDraftUpdatedLabel } from '../../lib/planning/plan-draft';
import { planApi, type SideDialogEl } from '../../lib/planning/plan-page';
import { currentUserName } from '../../lib/planning/plan-server';

/** What the planner chose in the list: a draft to open, or a new one. */
export type PlanDraftsChoice = { kind: 'open'; planDraftID: string } | { kind: 'new' };

let opening: Promise<PlanDraftsChoice | null> | null = null;

/** Opens the Drafts list. Resolves what the planner chose, or null when they closed it. */
export function openPlanDraftsDrawer(planID: string): Promise<PlanDraftsChoice | null> {
  if (opening) return opening;
  const root = document.querySelector<HTMLElement>('[data-bcn-plan-drafts-drawer]');
  if (!root) throw new Error('<BcnPlanDraftsDrawer /> is not on this page.');
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<SideDialogEl>('esa-side-dialog');
  const row = q<HTMLTemplateElement>('template[data-pd-tpl="row"]');
  const me = currentUserName();

  const show = (key: string, on: boolean) => (q(`[data-pd-${key}]`).hidden = !on);
  const sections = ['yours', 'yours-none', 'others-section'];
  const setState = (state: 'loading' | 'failed' | 'loaded') => {
    show('loading', state === 'loading');
    show('failed', state === 'failed');
    for (const key of sections) show(key, false);
  };

  opening = new Promise<PlanDraftsChoice | null>((resolve) => {
    let picked: PlanDraftsChoice | null = null;
    const newButton = q('[data-pd-new]');
    const startNew = () => {
      picked = { kind: 'new' };
      dialog.close();
    };
    newButton.addEventListener('click', startNew);
    const fill = (drafts: PlanDraftSimpleDto[]) => {
      const rowFor = (draft: PlanDraftSimpleDto, own: boolean) => {
        const li = row.content.firstElementChild!.cloneNode(true) as HTMLElement;
        const name = draft.Name ?? 'Untitled draft';
        li.querySelector('[data-pd-name]')!.textContent = own ? name : `${draft.OwnerUserName} · ${name}`;
        const changes = `${draft.ChangeCount} ${draft.ChangeCount === 1 ? 'change' : 'changes'}`;
        li.querySelector('[data-pd-meta]')!.textContent = `${changes} · Updated ${planDraftUpdatedLabel(draft.UpdateDate)}${own ? '' : ' · View only'}`;
        li.querySelector('[data-pd-open]')!.addEventListener('click', () => {
          picked = { kind: 'open', planDraftID: draft.PlanDraftID };
          dialog.close();
        });
        return li;
      };
      const yours = drafts.filter((d) => d.OwnerUserName === me);
      const others = drafts.filter((d) => d.OwnerUserName !== me);
      q('[data-pd-yours]').replaceChildren(...yours.map((d) => rowFor(d, true)));
      q('[data-pd-others]').replaceChildren(...others.map((d) => rowFor(d, false)));
      setState('loaded');
      show('yours', yours.length > 0);
      show('yours-none', yours.length === 0);
      show('others-section', others.length > 0);
    };

    dialog.addEventListener(
      'close',
      function onClose(e) {
        if (e.target !== dialog) return;
        dialog.removeEventListener('close', onClose);
        newButton.removeEventListener('click', startNew);
        opening = null;
        resolve(picked);
      }
    );
    setState('loading');
    dialog.show();
    planApi.listDrafts(planID).then(fill, () => setState('failed'));
  });
  return opening;
}
