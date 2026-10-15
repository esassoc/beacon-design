// aldo-card — renders one Card: a record Aldo read, for a person to check or edit. The head
// (badge and title) opens the record; the quote is clamped to four lines until Show all;
// field pairs follow; the foot holds where it is on the left and the actions on the right.
// Suggested is dashed, confirmed solid, the grammar of the boxes on the page. With `edit`,
// the card is a form: its fields, then Save and the extras.

import type { AldoAction, Card } from '../../../data/aldo';
import type { FieldEl, Parts, Press } from './aldo-parts';

const CLAMP_PAST = 320;

export function renderCard<A extends AldoAction>(card: Card<A>, parts: Parts, press: Press<A>): HTMLElement {
  const { el, button } = parts;
  const root = el('div', 'bcn-aldo-card');
  root.dataset.card = card.id;
  if (card.edit) root.dataset.state = 'editing';
  else if (card.proposal) root.dataset.state = card.proposal.state;

  const head = el('button', 'bcn-aldo-card__head');
  head.type = 'button';
  head.title = `Show ${card.badge ?? card.title}`;
  if (card.badge) head.append(parts.badge(card.badge));
  head.append(el('span', 'bcn-aldo-card__title', card.title));
  head.addEventListener('click', () => press({ label: card.title, does: { go: { kind: 'entity', entity: card.subject.entity, id: card.subject.id } } }));
  root.append(head);

  if (card.edit) {
    const { edit } = card;
    const fields = edit.fields.map((f) => parts.field(f));
    const acts = el('div', 'bcn-aldo-card__acts');
    acts.append(
      button<A>(
        {
          label: edit.save.label,
          tone: 'primary',
          does: { run: () => edit.save.run(Object.fromEntries(fields.map((f: FieldEl) => [f.dataset.key!, f.value]))) },
        },
        press,
      ),
      ...(edit.extra ?? []).map((b) => button(b, press)),
    );
    const form = el('div', 'bcn-aldo-card__form');
    form.append(...fields, acts);
    root.append(form);
    return root;
  }

  let quote: HTMLElement | null = null;
  if (card.quote !== undefined) {
    quote = el('blockquote', 'bcn-aldo-card__quote');
    quote.append(el('span', 'bcn-aldo-card__quotetext', card.quote || 'No text identified.'));
    root.append(quote);
  }
  if (card.fields?.length) {
    const dl = el('dl', 'bcn-aldo-card__fields');
    for (const f of card.fields) dl.append(el('dt', '', f.label), el('dd', '', f.value));
    root.append(dl);
  }

  const meta = el('div', 'bcn-aldo-card__meta');
  if (card.where) meta.append(button<A>({ label: card.where.label, does: { go: card.where.go } }, press));
  if (quote && (card.quote?.length ?? 0) > CLAMP_PAST) {
    const q = quote;
    const more: HTMLElement = button<A>(
      {
        label: 'Show all',
        does: { run: () => parts.relabel(more, q.toggleAttribute('data-all') ? 'Show less' : 'Show all') },
      },
      press,
    );
    meta.append(more);
  }
  const acts = el('div', 'bcn-aldo-card__acts');
  if (card.proposal?.state === 'confirmed' && card.settled) acts.append(el('span', 'bcn-aldo-card__settled', card.settled));
  else acts.append(...card.actions.map((b) => button(b, press)));
  const foot = el('div', 'bcn-aldo-card__foot');
  foot.append(meta, acts);
  root.append(foot);
  return root;
}
