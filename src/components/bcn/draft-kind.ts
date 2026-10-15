// A draft's kind, as develop marks it in compliance-index-step's subcategory review: an
// action is the Action entity's icon (radar) in --color-action; an obligation is its class
// as obligation-class-chip draws it, a tint of the class's hue. Styles: BcnDraftKind.astro.

import { glyph } from './comment-glyphs';
import type { IndexEntry } from '../../data/sw3-index-types';

/** The mark for one draft: built at run time, because review rows are. */
export function draftKind(e: Pick<IndexEntry, 'kind'> & { class?: string }): HTMLElement {
  const el = document.createElement('span');
  if (e.kind === 'action') {
    el.className = 'bcn-draft-kind bcn-draft-kind--action';
    el.innerHTML = glyph('radar', 14);
    el.title = 'Action';
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', 'Action');
  } else {
    el.className = 'bcn-draft-kind bcn-draft-kind--class';
    el.dataset.class = (e.class ?? 'Adhere').toLowerCase();
    el.textContent = e.class ?? 'Adhere';
  }
  return el;
}
