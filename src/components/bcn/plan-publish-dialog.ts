// Controller for <BcnPlanPublishDialog> — a draft's one approval (new design, "Plan Editing: Proposed Direction").
// Shows the summary the server's replay gives, re-asks the server whenever a stale row's choice changes (so the summary
// is always what Publish would really do), and resolves with the published plan, or null on Cancel / close.

import '@esa/ecology/esa-side-dialog';
import type { PlanDetailDto } from '../../lib/planning/model';
import { planConflictSentence } from '../../lib/planning/plan-conflicts';
import type { PlanDraftOverrideDto, PlanDraftViewDto, PlanPresenceDto } from '../../lib/planning/plan-draft-model';
import { HttpErrorResponse } from '../../lib/planning/ng-shim';
import { alertWriteFailure, forceClose, guardSideDialog, planApi, pushAlert, requestClose, type SideDialogEl } from '../../lib/planning/plan-page';
import { formatPlanDateRange, planScheduleFlagSentence, type PlanScheduleNote } from '../../lib/planning/plan-schedule-preview';
import { esaButtonState } from './plan-schedule-preview';

const LOCALE = 'en-US';
const KEEP_LIVE = 'live';
const USE_DRAFT = 'draft';

export interface OpenPlanPublishDialogArgs {
  planID: string;
  draftName: string;
  overrides: PlanDraftOverrideDto[];
  /** Who else has a drawer open on this plan right now. */
  presence: PlanPresenceDto[];
  /** Dependencies the live plan already breaks: their warnings say so, so the planner can tell what the draft adds. */
  liveConflictIDs: ReadonlySet<string>;
  /**
   * Publishes, keeping the live dates of these elements; returns the whole plan. `versionToken` is the live plan's
   * version the summary was computed on, so a plan changed since the planner read it is refused, not published blind.
   */
  publish: (keepLivePlanElementIDs: string[], snapshotName: string | null, versionToken: string | null) => Promise<PlanDetailDto>;
}

let guarded: Promise<void> | null = null;
/** The open summary's guard: closing mid-publish would drop the plan it returns. */
let activeCanClose: () => boolean = () => true;

export async function openPlanPublishDialog(args: OpenPlanPublishDialogArgs): Promise<PlanDetailDto | null> {
  const root = document.querySelector<HTMLElement>('[data-bcn-plan-publish-dialog]');
  if (!root) throw new Error('<BcnPlanPublishDialog /> is not on this page.');
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const tpl = (name: string) => q<HTMLTemplateElement>(`template[data-pub-tpl="${name}"]`);
  const clone = (name: string) => tpl(name).content.firstElementChild!.cloneNode(true) as HTMLElement;
  const dialog = q<SideDialogEl>('esa-side-dialog');
  const confirm = esaButtonState(q<HTMLButtonElement>('[data-pub-confirm]'), tpl('spinner'));
  const cancel = esaButtonState(q<HTMLButtonElement>('[data-pub-cancel]'), tpl('spinner'));
  const snapshot = q<HTMLElement & { checked: boolean }>('[data-pub-snapshot]');

  let publishing = false;
  const canClose = () => !publishing;
  activeCanClose = canClose;
  guarded ??= guardSideDialog(dialog, () => activeCanClose());
  await guarded;

  const keepLive = new Set<string>();
  let view: PlanDraftViewDto | null = null;
  let seq = 0;

  const sentence = (note: PlanScheduleNote) =>
    note.map((part) => {
      if (!part.strong) return document.createTextNode(part.text);
      const strong = clone('strong');
      strong.textContent = part.text;
      return strong;
    });

  const fill = () => {
    if (!view) return;
    q('[data-pub-subject]').textContent = args.draftName;

    // Stale rows: built once (their toggles hold the planner's choices), then left alone on a re-fetch.
    const staleList = q('[data-pub-stale]');
    if (!staleList.childElementCount && view.Stale.length) {
      staleList.replaceChildren(
        ...view.Stale.map((stale) => {
          const li = clone('stale');
          li.querySelector('[data-pub-name]')!.textContent = stale.PlanElementName;
          const detail = li.querySelector<HTMLElement>('[data-pub-detail]')!;
          const toggle = li.querySelector<HTMLElement & { options: unknown; value: string; label: string; hidden: boolean }>('[data-pub-choice]')!;
          if (stale.Missing) {
            detail.textContent = 'No longer in the plan, so your change to it is skipped.';
            toggle.hidden = true;
            return li;
          }
          const live = formatPlanDateRange(stale.LiveStartDate, stale.LiveEndDate, LOCALE);
          const draft = formatPlanDateRange(stale.DraftStartDate, stale.DraftEndDate, LOCALE);
          detail.textContent = `Live plan now ${live}; your draft has ${draft}.`;
          keepLive.add(stale.PlanElementID);
          toggle.label = `Dates for ${stale.PlanElementName}`;
          toggle.options = [
            { label: 'Keep the live dates', value: KEEP_LIVE },
            { label: "Use the draft's", value: USE_DRAFT },
          ];
          toggle.value = KEEP_LIVE;
          toggle.addEventListener('change', (e) => {
            const value = String((e as CustomEvent<{ value: string }>).detail?.value ?? toggle.value);
            if (value === KEEP_LIVE) keepLive.add(stale.PlanElementID);
            else keepLive.delete(stale.PlanElementID);
            void refresh();
          });
          return li;
        })
      );
    }
    q('[data-pub-stale-section]').hidden = view.Stale.length === 0;

    // Presence: who's editing an affected program in a drawer.
    const affected = new Set(view.Changes.map((c) => programOf(view!.Plan, c.PlanElementID)));
    const editing = args.presence.filter((p) => p.ProgramPlanElementID === null || affected.has(p.ProgramPlanElementID));
    q('[data-pub-presence]').hidden = editing.length === 0;
    if (editing.length) {
      const who = editing.map((p) => `${p.UserName} is editing ${p.Subject}`).join('; ');
      q('[data-pub-presence-text]').textContent = `${who}. Publishing goes ahead; if their next save overlaps these changes, it's refused and their changes are kept for them.`;
    }

    const warnings: PlanScheduleNote[] = [
      ...view.Conflicts.map((c): PlanScheduleNote => [
        { text: c.SuccessorPlanElementName, strong: true },
        { text: ` ${planConflictSentence(c).replace(/^Starts/, 'starts')}.${args.liveConflictIDs.has(c.PlanElementDependencyID) ? ' Already so on the live plan.' : ''}` },
      ]),
      ...(view.Flags ?? []).map(planScheduleFlagSentence),
    ];
    q('[data-pub-warnings]').replaceChildren(
      ...warnings.map((note) => {
        const li = clone('warning');
        li.querySelector('[data-pub-sentence]')!.replaceChildren(...sentence(note));
        return li;
      })
    );
    q('[data-pub-warnings-section]').hidden = warnings.length === 0;

    const changes = view.Changes;
    q('[data-pub-heading]').textContent = changes.length === 0 ? 'Nothing moves' : `${changes.length} ${changes.length === 1 ? 'item moves' : 'items move'}`;
    q('[data-pub-changes]').replaceChildren(
      ...changes.map((change) => {
        const li = clone('change');
        li.querySelector('[data-pub-name]')!.textContent = change.PlanElementName;
        li.querySelector('[data-pub-from]')!.textContent = formatPlanDateRange(change.LiveStartDate, change.LiveEndDate, LOCALE);
        li.querySelector('[data-pub-to]')!.textContent = formatPlanDateRange(change.DraftStartDate, change.DraftEndDate, LOCALE);
        const typeChange = change.LivePlanDateType !== change.DraftPlanDateType ? ` · ${change.LivePlanDateType} → ${change.DraftPlanDateType}` : '';
        li.querySelector('[data-pub-cause]')!.textContent =
          (change.Cause === 'own' ? 'Moved by you' : change.CausedByPlanElementName ? `Moved with ${change.CausedByPlanElementName}` : 'Moved by the cascade') + typeChange;
        return li;
      })
    );
    confirm.setDisabled(changes.length === 0);
  };

  const refresh = async () => {
    const mine = ++seq;
    confirm.setDisabled(true);
    try {
      const next = await planApi.previewDraft(args.planID, args.overrides, [...keepLive]);
      if (mine !== seq) return;
      view = next;
      fill();
    } catch (error) {
      if (mine === seq) alertWriteFailure(error, "The draft's summary couldn't be loaded. Please try again.");
    }
  };

  q('[data-pub-stale]').replaceChildren();
  snapshot.checked = false;
  publishing = false;
  confirm.setBusy(false);
  cancel.setDisabled(false);

  return new Promise<PlanDetailDto | null>((resolve) => {
    let result: PlanDetailDto | null = null;
    const ac = new AbortController();
    q('[data-pub-cancel]').addEventListener('click', () => void requestClose(dialog, canClose), { signal: ac.signal });
    q('[data-pub-confirm]').addEventListener(
      'click',
      async () => {
        if (publishing || !view?.Changes.length) return;
        publishing = true;
        confirm.setBusy(true);
        cancel.setDisabled(true);
        try {
          result = await args.publish([...keepLive], snapshot.checked ? `Before publishing ${args.draftName}` : null, view.Plan.VersionToken ?? null);
          publishing = false;
          forceClose(dialog);
        } catch (error) {
          publishing = false;
          confirm.setBusy(false);
          cancel.setDisabled(false);
          if (error instanceof HttpErrorResponse && error.status === 409) {
            pushAlert(`${error.error?.UpdateUserName ?? 'Someone'} changed the plan while you were reviewing. The summary is updated; check it and publish again.`, 'warning', 8000);
          } else {
            alertWriteFailure(error, "The draft couldn't be published. Please try again.");
          }
          void refresh();
        }
      },
      { signal: ac.signal }
    );
    dialog.addEventListener(
      'close',
      (e) => {
        if (e.target !== dialog) return;
        ac.abort();
        seq += 1;
        resolve(result);
      },
      { signal: ac.signal }
    );
    q('[data-pub-heading]').textContent = 'Checking what moves…';
    q('[data-pub-changes]').replaceChildren();
    for (const key of ['stale-section', 'warnings-section', 'presence']) q(`[data-pub-${key}]`).hidden = true;
    dialog.show();
    void refresh();
  });
}

function programOf(plan: PlanDetailDto, planElementID: string): string | null {
  for (const root of plan.Elements ?? []) {
    const stack = [root];
    while (stack.length) {
      const element = stack.pop()!;
      if (element.PlanElementID === planElementID) return root.PlanElementID ?? null;
      stack.push(...(element.Children ?? []));
    }
  }
  return null;
}
