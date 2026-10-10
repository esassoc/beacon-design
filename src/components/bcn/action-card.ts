// Fills a <BcnActionCard> clone for one implementation. The board calls this per card;
// the template, the avatar bank and the styles live in BcnActionCard.astro.

import { CATEGORY_META, fmtDate } from '../../data/action-status';
import type { CardField, ResolvedImpl } from '../../lib/action-board';

export interface CardOptions {
  fields: Record<CardField, boolean>;
  /** Merged board: the column is the backbone, so the card names its workflow column. */
  showStatus: boolean;
  typeLabel: Record<string, string>;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const short = (iso: string) => {
  const [, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}`;
};
const sameYear = (iso: string, today: string) => iso.slice(0, 4) === today.slice(0, 4);

let tpl: HTMLTemplateElement | null = null;
const avatars = new Map<string, HTMLTemplateElement>();

export function renderCard(impl: ResolvedImpl, opts: CardOptions, today: string): HTMLElement {
  tpl ??= document.querySelector<HTMLTemplateElement>('template[data-acard-tpl]');
  if (!avatars.size) {
    document.querySelectorAll<HTMLTemplateElement>('template[data-acard-avatar]').forEach((t) => avatars.set(t.dataset.acardAvatar!, t));
  }
  const card = (tpl!.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
  card.dataset.implId = impl.id;
  if (impl.notApplicable) card.dataset.na = '';
  const $ = <T extends HTMLElement = HTMLElement>(sel: string) => card.querySelector<T>(sel)!;

  // Commitment ids: the first, then "+N".
  const codes = $('[data-acard-codes]');
  const [first, moreWrap] = [codes.querySelector<HTMLElement>(':scope > .bcn-cbadge')!, $('[data-acard-more]')];
  if (impl.codes.length) {
    first.textContent = impl.codes[0];
    if (impl.codes.length > 1) {
      moreWrap.querySelector('.bcn-cbadge')!.textContent = `+${impl.codes.length - 1}`;
      moreWrap.title = impl.codes.slice(1).join(', ');
    } else moreWrap.remove();
  } else {
    first.remove();
    moreWrap.remove();
  }
  if (!impl.flagged) $('[data-acard-flag]').remove();
  const top = $('[data-acard-field="codes"]');
  if ((!opts.fields.codes || !impl.codes.length) && !impl.flagged) top.remove();
  else if (!opts.fields.codes) codes.remove();

  const name = $('[data-acard-open]');
  name.textContent = impl.name;
  name.title = impl.name;

  // Type · phase · occurrence
  const meta: string[] = [opts.typeLabel[impl.type] ?? impl.type];
  if (opts.fields.phase && impl.phases.length) meta.push(impl.phases.length > 1 ? `${impl.phases[0]} +${impl.phases.length - 1}` : impl.phases[0]);
  if (impl.frequency === 'Recurring' || impl.frequency === 'AsNeeded') meta.push(`#${impl.sequence}`);
  $('[data-acard-meta]').textContent = meta.join(' · ');

  // On the merged board the column already says the category; the chip earns its
  // place only when the workflow column says something more.
  if (opts.showStatus && impl.column.name !== CATEGORY_META[impl.column.category].label) {
    const wrap = $('[data-acard-status]');
    wrap.hidden = false;
    const chip = wrap.querySelector<HTMLElement>('.bcn-status-chip')!;
    chip.style.setProperty('--_chip', CATEGORY_META[impl.column.category].tone);
    chip.querySelector('.bcn-status-chip__label')!.textContent = impl.column.name;
  } else $('[data-acard-status]').remove();

  // Due: completed work shows when it finished; open work shows when it is due.
  const due = $('[data-acard-due]');
  const dueText = $('[data-acard-due-text]');
  if (!opts.fields.due) due.replaceChildren();
  else if (impl.category === 'Completed' && impl.completedDate) {
    dueText.textContent = `Completed ${sameYear(impl.completedDate, today) ? short(impl.completedDate) : fmtDate(impl.completedDate)}`;
  } else if (impl.dueDate) {
    dueText.textContent = sameYear(impl.dueDate, today) ? short(impl.dueDate) : fmtDate(impl.dueDate);
    due.title = impl.urgency === 'overdue' ? `Overdue · due ${fmtDate(impl.dueDate)}` : `Due ${fmtDate(impl.dueDate)}`;
    due.dataset.urgency = impl.urgency;
  } else {
    dueText.textContent = 'No due date';
    due.dataset.empty = '';
  }

  const count = (sel: string, on: boolean, n: number, noun: string, hideZero = false) => {
    const el = $(sel);
    if (!on || (hideZero && !n)) return el.remove();
    el.querySelector('[data-acard-n]')!.textContent = String(n);
    el.title = `${n} ${noun}${n === 1 ? '' : 's'}`;
    if (!n) el.dataset.zero = '';
  };
  count('[data-acard-evidence]', opts.fields.evidence, impl.evidence, 'evidence item');
  count('[data-acard-comments]', opts.fields.comments, impl.comments, 'comment', true);

  const who = $('[data-acard-assignee]');
  const av = impl.assignee ? avatars.get(impl.assignee) : null;
  if (opts.fields.assignee && av) who.append(av.content.cloneNode(true));
  else who.remove();

  return card;
}
