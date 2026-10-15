// A draft's kind, as a chip: an action is its requirement type (Plan, Reporting, Approval &
// Consultation…) on a tint of --color-action, the action step's color; an obligation is its
// class as develop's obligation-class-chip draws it, a tint of the class's hue. Both share
// the chip's metrics. Styles: BcnDraftKind.astro.

import type { IndexEntry } from '../../data/sw3-index-types';

/** The mark for one draft: built at run time, because review rows are. */
export function draftKind(e: Pick<IndexEntry, 'kind'> & { class?: string; type?: string }): HTMLElement {
  const el = document.createElement('span');
  el.className = 'bcn-draft-kind bcn-draft-kind--class';
  if (e.kind === 'action') {
    const type = e.type || 'Action';
    el.dataset.class = 'action';
    el.textContent = type;
    el.title = type;
  } else {
    el.dataset.class = (e.class ?? 'Adhere').toLowerCase();
    el.textContent = e.class ?? 'Adhere';
  }
  return el;
}
