// list-impls — the page-side behavior of <BcnListImplementations>, shared by both list
// trees: stamping rows for a member added on the page, the Status (action rows) and
// Evidence (both) filters, and the evidence count, kept live as the bottom drawer
// attaches evidence.

import { componentById } from '../../data/evidence-drawer';

export interface Impl { id: string; component: string; status: string; label: string; comments: number; evidence: number }

const evidenceText = (n: number) => (n ? `${n} evidence` : 'No evidence');
const setStatus = (row: HTMLElement, status: string, label: string) => {
  const chip = row.querySelector<HTMLElement>('.bcn-status-chip');
  if (!chip) return;
  row.dataset.status = status;
  chip.dataset.status = status;
  chip.style.setProperty('--_chip', `var(--st-${status}, var(--bcn-status-${status}))`);
  const text = chip.querySelector('.bcn-status-chip__label');
  if (text) text.textContent = label;
};
const setEvidence = (row: HTMLElement, n: number) => {
  row.dataset.evidence = String(n);
  const el = row.querySelector<HTMLElement>('[data-list-evidence]');
  if (!el) return;
  el.textContent = evidenceText(n);
  el.toggleAttribute('data-none', !n);
};

/** Rebuild a card's implementation rows, using the stamp's first row as the prototype. */
export const fillImpls = (ul: HTMLElement, impls: Impl[]): void => {
  const proto = ul.querySelector<HTMLElement>('[data-list-impl]');
  if (!proto) return;
  ul.replaceChildren(
    ...impls.map((i) => {
      const row = proto.cloneNode(true) as HTMLElement;
      row.dataset.listImpl = i.id;
      setEvidence(row, i.evidence);
      setStatus(row, i.status, i.label);
      const name = row.querySelector<HTMLElement>('.bcn-loc__req-name');
      if (name) { name.textContent = i.component; name.dataset.listText = i.component; }
      const c = row.querySelector<HTMLElement>('.bcn-loc__comments');
      if (c) { c.hidden = !i.comments; c.textContent = `${i.comments} ${i.comments === 1 ? 'comment' : 'comments'}`; }
      return row;
    }),
  );
};

/**
 * The row filters on one card: Component (an evidence-drawer component id), Status
 * (action rows only) and Evidence ('has', 'none'). Hide the implementations that fail
 * any, and say whether any are left; a card
 * with none left drops out of the list like a search miss. Empty values clear them.
 */
export interface ImplFilters { component?: string; status?: string; evidence?: string }
export const passImpls = (card: HTMLElement, { component = '', status = '', evidence = '' }: ImplFilters): boolean => {
  const rows = [...card.querySelectorAll<HTMLElement>('[data-list-impl]')];
  if (!rows.length) return !component && !status && !evidence;
  let any = false;
  for (const r of rows) {
    const has = Number(r.dataset.evidence || 0) > 0;
    // An implementation id is "<record id>|<component id>".
    const okComponent = !component || (r.dataset.listImpl ?? '').split('|').pop() === component;
    const okStatus = !status || r.dataset.status === status;
    const okEvidence = !evidence || (evidence === 'has' ? has : !has);
    r.hidden = !(okComponent && okStatus && okEvidence);
    any = any || !r.hidden;
  }
  return any;
};

/**
 * Evidence saved from the bottom drawer (`list:evidence-added`) lands on each chosen
 * member's implementation on that component. A member not yet implemented there gains
 * the row, since attaching evidence is what makes it implemented. Mirror clones are
 * rebuilt by the tree afterwards, so only the master's cards are touched here.
 */
export const addEvidence = (card: HTMLElement, componentId: string, n: number): void => {
  const ul = card.querySelector<HTMLElement>('[data-list-impls]');
  if (!ul || !n) return;
  const id = `${card.dataset.id}|${componentId}`;
  let row = [...ul.querySelectorAll<HTMLElement>('[data-list-impl]')].find((r) => r.dataset.listImpl === id);
  if (!row) {
    const proto = ul.querySelector<HTMLElement>('[data-list-impl]');
    if (!proto) return;
    row = proto.cloneNode(true) as HTMLElement;
    row.dataset.listImpl = id;
    row.hidden = false;
    const name = row.querySelector<HTMLElement>('.bcn-loc__req-name');
    const component = componentById(componentId).name;
    if (name) { name.textContent = component; name.dataset.listText = component; }
    const c = row.querySelector<HTMLElement>('.bcn-loc__comments');
    if (c) c.hidden = true;
    // A new implementation starts where every implementation does.
    setStatus(row, 'not-started', 'Not Started');
    setEvidence(row, 0);
    ul.append(row);
  }
  setEvidence(row, Number(row.dataset.evidence || 0) + n);
  row.classList.add('is-new');
  setTimeout(() => row!.classList.remove('is-new'), 1000);
};

/**
 * The obligation tree's Evidence filter ('has', 'none', or '' for either) on one card, shaped like passStatus: hide the implementations on
 * the wrong side of it, and say whether any are left.
 */
export const passEvidence = (card: HTMLElement, want: string): boolean => {
  const rows = [...card.querySelectorAll<HTMLElement>('[data-list-impl]')];
  if (!rows.length) return !want;
  let any = false;
  for (const r of rows) {
    const has = Number(r.dataset.evidence || 0) > 0;
    r.hidden = want === 'has' ? !has : want === 'none' ? has : false;
    any = any || !r.hidden;
  }
  return any;
};

/** Clicking a row is the way into its upsert dialog, which the prototype does not build. */
export const announceImpl = (row: HTMLElement): void => {
  document.dispatchEvent(new CustomEvent('list:edit-implementation', { detail: row.dataset.listImpl, bubbles: true }));
};
