// The Completion module's runtime (2026-10-28, the proposal's "Completion on a deliverable"). Completion documentation
// is the result and where it lives. Complete: the Result as a badge, Completed On, Where It Lives (a document by name
// and revision, or a link that opens in a new tab), Accepted By with their organization, the note, and quietly who
// recorded it. Not yet: one calm line on what it needs, the level's Required to Complete fields still empty, and Record
// Completion. Saving sets the element Complete; Clear takes it back to In Progress.
//
// Completion is a record, kept on Live (decision 5): in a draft it reads as Live has it, without actions, and says so
// once. See ./element-module.ts for the contract; the dialog is ./completion-dialog.ts.

import type { ElementContext } from '../../lib/planning/element-context';
import { orgOf } from '../../lib/planning/plan-repo';
import { clearCompletion, fileById, sentBack, statusOf, transmittalNumber, type Completion } from '../../lib/planning/plan-records';
import { planIcon } from '../../lib/planning/icons';
import { badge, type BadgeVariant } from './badge-bank';
import { planAvatar } from './plan-people';
import { day, setModuleCount, setModuleNote, type ElementModuleSetup } from './element-module';
import { listPhrase, missingToComplete, openCompletionDialog } from './completion-dialog';

/** A result's color: accepted reads as done, accepted with comments as done with something to carry, the rest as
 *  closed without acceptance. A plan's own results take the nearest. */
export function resultVariant(result: string): BadgeVariant {
  if (/^accepted with/i.test(result)) return 'info';
  if (/^accepted|^approved/i.test(result)) return 'success';
  return 'neutral';
}

export const setupCompletionModule: ElementModuleSetup = (root, host) => {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const actions = q('[data-elc-actions]');
  const done = q('[data-elc-done]');
  const open = q('[data-elc-open]');
  const why = q('[data-elc-why]');
  const v = (k: string) => q(`[data-elc-v="${k}"]`);
  const row = (k: string) => v(k).closest<HTMLElement>('[data-elc-row]')!;

  // Arrived from an accepted response's Record Completion (the transmittal page links here with &complete=1): open the
  // dialog once, on the first draw that can record it.
  let askedToComplete = new URLSearchParams(location.search).get('complete') === '1';
  const record = async () => {
    const ctx = host.ctx();
    const editing = !!ctx.records.completions[ctx.element.PlanElementID ?? ''];
    if (await openCompletionDialog(ctx)) {
      host.toast(editing ? 'Completion saved.' : `Recorded. ${ctx.element.PlanElementName ?? 'It'} is Complete.`);
      await host.refresh();
    }
  };
  q('[data-elc-record]').addEventListener('click', () => void record());
  q('[data-elc-edit]').addEventListener('click', () => void record());
  q('[data-elc-clear]').addEventListener('click', async () => {
    const ctx = host.ctx();
    const name = ctx.element.PlanElementName ?? 'This item';
    const ok = await host.confirm({
      heading: 'Clear Completion?',
      message: `${name} goes back to In Progress. Its documents and transmittals stay as they are.`,
      confirmLabel: 'Clear Completion',
      danger: true,
    });
    if (!ok) return;
    clearCompletion(ctx.planID, ctx.element.PlanElementID ?? '');
    host.toast(`Completion cleared. ${name} is In Progress.`, 'info');
    await host.refresh();
  });

  function drawWhere(ctx: ElementContext, c: Completion): void {
    const slot = v('where');
    slot.replaceChildren();
    const f = fileById(ctx.records, c.where.fileId);
    if (c.where.url || f?.kind === 'link') {
      const a = document.createElement('a');
      a.className = 'bcn-elc__link';
      a.href = c.where.url ?? f?.url ?? '#';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.title = a.href;
      a.innerHTML = `<span class="bcn-elc__link-text"></span>${planIcon('external-link', 12)}`;
      a.querySelector('.bcn-elc__link-text')!.textContent = c.where.label || f?.name || a.host;
      slot.append(a);
      return;
    }
    const name = document.createElement('span');
    name.className = 'bcn-elc__file';
    name.innerHTML = planIcon('file-text', 14);
    name.append(document.createTextNode(f?.name ?? 'A file no longer in the plan’s store'));
    slot.append(name);
    if (f?.revision) {
      const rev = document.createElement('span');
      rev.className = 'bcn-elc__quiet';
      rev.textContent = f.revision;
      slot.append(rev);
    }
  }

  function drawDone(ctx: ElementContext, c: Completion): void {
    v('result').replaceChildren(badge(c.result, resultVariant(c.result), 'sm'));
    v('date').textContent = day(c.completedOn);
    drawWhere(ctx, c);
    const by = v('by');
    by.replaceChildren();
    row('by').hidden = !c.acceptedBy;
    if (c.acceptedBy) {
      by.append(planAvatar(c.acceptedBy, 'xs'), document.createTextNode(c.acceptedBy));
      const org = orgOf(c.acceptedBy);
      if (org) {
        const o = document.createElement('span');
        o.className = 'bcn-elc__quiet';
        o.textContent = org;
        by.append(o);
      }
    }
    v('note').textContent = c.note;
    row('note').hidden = !c.note;
    v('recorded').textContent = `Recorded by ${c.recordedBy} on ${day(c.recordedAt)}`;
  }

  return {
    draw(ctx) {
      const id = ctx.element.PlanElementID ?? '';
      const c = ctx.inLive ? ctx.records.completions[id] : undefined;
      // Records are kept on Live, by those who keep them; a draft reads them.
      const keeps = ctx.canRecord && !ctx.draft;
      setModuleCount(root, null);
      setModuleNote(root, null);

      done.hidden = !c;
      open.hidden = !!c;
      actions.hidden = !(c && keeps);
      if (c) drawDone(ctx, c);
      else {
        const missing = missingToComplete(ctx);
        const markedDone = ctx.inLive && statusOf(ctx.records, ctx.live, id) === 'Completed';
        // What it needs is said to whoever can record it; anyone else reads where it stands.
        // Sent back by the agency: the next step is a resubmittal, not a completion (2026-10-29).
        const back = ctx.inLive ? sentBack(ctx.records, id) : undefined;
        q('[data-elc-needs]').textContent = back
          ? `${transmittalNumber(back)} came back ${back.response?.outcome}. Revise and Resubmit from Transmittals; record completion once a resubmittal is accepted.`
          : !ctx.inLive || !keeps
          ? 'Not complete yet.'
          : markedDone
            ? 'Marked Complete, but nothing says where it lives. Record the result, the date and where it lives.'
            : 'Needs a result, the date and where it lives.';
        const also = q('[data-elc-also]');
        also.textContent = missing.length ? `Also needs ${listPhrase(missing.map((f) => f.label))}, from Details.` : '';
        also.hidden = !missing.length || !ctx.inLive;
        q('[data-elc-record]').hidden = !keeps;
        if (askedToComplete && keeps) {
          askedToComplete = false;
          const params = new URLSearchParams(location.search);
          params.delete('complete');
          history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
          queueMicrotask(() => void record());
        }
      }

      why.textContent = !ctx.inLive
        ? 'New in this draft. It can be completed once the draft is published.'
        : ctx.draft
          ? 'Completion is a record on Live, so it reads the same in every draft.'
          : '';
      why.hidden = !why.textContent;
    },
  };
};
