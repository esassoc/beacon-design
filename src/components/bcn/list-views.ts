// list-views — the second and third VIEW of a list detail page's tree.
//
// Andy, 2026-09-23: "we need tabs for different views of the lists". A list's tree is
// server rendered in ONE filing (obligations by category, actions by type), and that
// tree stays the master: every verb, every count, search and the category filter run
// on it exactly as before. The other views are MIRRORS, rebuilt from the master's
// visible cards whenever it changes:
//
//   az          every visible card, A-Z by title, no branches.
//   commitment  permit section > commitment > card, by the codes of the requirements
//               behind the card (its data-codes). A card whose requirements come from
//               three commitments appears three times, once under each.
//   index       compliance index: category > subcategory > card, by where those
//               requirements file (the card's data-index). Same repeat rule as
//               commitment. Action lists only; it is their first view.
//
// A card's children are its implementations (Andy, 2026-09-23), which belong to the
// record, not to one commitment, so a mirror card is the whole card under every group.
//
// A mirror card is a clone marked data-list-mirror, so a tree's own card query skips it
// and a verb on it resolves to the master by member id. The master body is hidden by
// the root's data-list-view, never removed, so the panels (which find a card with
// document.querySelector) always reach the master first — it precedes the mirror body.
//
// The group rows are stamped from <template>s the tree renders server side, so they
// carry the tree's scoped-style attributes and the shared bcn-tree.css row anatomy.
//
// Contract, on `document`:
//   in   list:view   detail: 'index' | 'category' | 'commitment' | 'az' (from <BcnListViewTabs>)

export type ListView = 'index' | 'category' | 'commitment' | 'az';

/** The view the page opened on: ?view= when it names one, else the list's first. */
export const initialView = (views: ListView[]): ListView => {
  const v = new URLSearchParams(location.search).get('view') as ListView | null;
  return v && views.includes(v) ? v : views[0];
};

export interface MirrorOptions {
  /** The container the mirror renders into, after the master body. */
  body: HTMLElement;
  /** The master's cards that are on the list and pass the current filters. */
  source: HTMLElement[];
  view: Exclude<ListView, 'category'>;
  /** Stamps: the section row (a details holding [data-list-subs]) and the commitment row;
   *  for the index, the category row (holding [data-list-subs]) and the subcategory row. */
  stamp: (name: 'section' | 'commitment' | 'index-cat' | 'index-sub') => HTMLElement;
  /** Commitment code → title, for every code the fixture knows. */
  titles: Record<string, string>;
  /** "obligations" / "actions", for the counts' labels. */
  noun: string;
}

/** A "a|b|c" data attribute as its values. */
const listOf = (attr: string | undefined) => (attr ?? '').split('|').filter(Boolean);

const titleOf = (card: HTMLElement) =>
  card.querySelector<HTMLElement>('[data-list-title]')?.dataset.listText ?? '';

/** "COA 4" before "COA 10.18": compare the numeric runs, not the strings. */
const byCode = (a: string, b: string) => {
  const ka = (a.match(/\d+/g) ?? []).map(Number);
  const kb = (b.match(/\d+/g) ?? []).map(Number);
  for (let i = 0; i < Math.max(ka.length, kb.length); i++) {
    const d = (ka[i] ?? -1) - (kb[i] ?? -1);
    if (d) return d;
  }
  return a.localeCompare(b);
};

const setCount = (host: Element | null, n: number, noun: string) => {
  const b = host?.querySelector<HTMLElement>('.bcn-swcb');
  if (b) { b.textContent = String(n); b.setAttribute('aria-label', `${n} ${noun}`); }
};

/** Clone a master card as a mirror, keeping its folded state from the last build. */
const mirrorOf = (card: HTMLElement, key: string, openCards: Set<string>) => {
  const copy = card.cloneNode(true) as HTMLElement;
  copy.setAttribute('data-list-mirror', key);
  copy.classList.remove('is-new');
  copy.hidden = false;
  const d = copy.querySelector('details');
  if (d && openCards.has(key)) d.open = true;
  return copy;
};

const cardList = () => {
  const ul = document.createElement('ul');
  ul.className = 'bcn-lot__cards';
  ul.setAttribute('data-list-cards', '');
  return ul;
};

export const buildMirror = ({ body, source, view, stamp, titles, noun }: MirrorOptions) => {
  // What the reader had open survives a rebuild: a remove or a search keystroke must
  // not fold the tree back up under them.
  const openGroups = new Set(
    [...body.querySelectorAll<HTMLDetailsElement>('details[data-list-group]')].filter((d) => d.open).map((d) => d.dataset.listGroup!),
  );
  const openCards = new Set(
    [...body.querySelectorAll<HTMLElement>('[data-list-mirror]')]
      .filter((c) => c.querySelector('details')?.open)
      .map((c) => c.getAttribute('data-list-mirror')!),
  );
  const first = !body.hasAttribute('data-built');
  body.setAttribute('data-built', '');
  body.replaceChildren();

  if (view === 'az') {
    body.setAttribute('data-list-flat', '');
    const ul = cardList();
    [...source]
      .sort((a, b) => titleOf(a).localeCompare(titleOf(b)))
      .forEach((c) => ul.append(mirrorOf(c, c.dataset.memberId ?? '', openCards)));
    body.append(ul);
    return;
  }
  body.removeAttribute('data-list-flat');

  const byTitle = (a: HTMLElement, b: HTMLElement) => titleOf(a).localeCompare(titleOf(b));
  const label = (row: HTMLElement, text: string) => {
    const el = row.querySelector<HTMLElement>(':scope > summary [data-list-name]');
    if (el) { el.textContent = text; el.dataset.listText = text; }
  };

  if (view === 'index') {
    // "Category::Subcategory" → the cards holding a requirement filed there
    const bySub = new Map<string, HTMLElement[]>();
    for (const card of source) {
      const places = new Set(listOf(card.dataset.index));
      if (!places.size) places.add('Unfiled::Unfiled');
      for (const place of places) {
        const copy = mirrorOf(card, `${card.dataset.memberId}|${place}`, openCards);
        bySub.set(place, [...(bySub.get(place) ?? []), copy]);
      }
    }
    const cats = new Map<string, string[]>();
    // Category, then subcategory: sorting the joined keys would put "Water operations"
    // ahead of "Water" (a space sorts before the colon).
    const [catOf, subOf] = [(p: string) => p.split('::')[0], (p: string) => p.split('::')[1] ?? ''];
    const byPlace = (a: string, b: string) => catOf(a).localeCompare(catOf(b)) || subOf(a).localeCompare(subOf(b));
    for (const place of [...bySub.keys()].sort(byPlace)) {
      const cat = catOf(place);
      cats.set(cat, [...(cats.get(cat) ?? []), place]);
    }
    for (const [cat, places] of cats) {
      const row = stamp('index-cat') as HTMLDetailsElement;
      row.dataset.listGroup = cat;
      row.open = first || openGroups.has(cat);
      label(row, cat);
      const subs = row.querySelector<HTMLElement>('[data-list-subs]')!;
      // A card filed twice in one category counts once in its total.
      const members = new Set<string>();
      for (const place of places) {
        const cards = bySub.get(place)!.sort(byTitle);
        cards.forEach((c) => members.add(c.dataset.memberId ?? ''));
        const sub = stamp('index-sub') as HTMLDetailsElement;
        sub.dataset.listGroup = place;
        sub.open = openGroups.has(place);
        label(sub, subOf(place));
        setCount(sub.querySelector(':scope > summary [data-list-count]'), cards.length, noun);
        sub.querySelector<HTMLElement>('[data-list-cards]')!.append(...cards);
        subs.append(sub);
      }
      setCount(row.querySelector(':scope > summary [data-list-count]'), members.size, noun);
      body.append(row);
    }
    return;
  }

  // commitment → the cards that hold a requirement carved from it
  const byCommitment = new Map<string, HTMLElement[]>();
  for (const card of source) {
    for (const code of new Set(listOf(card.dataset.codes))) {
      const copy = mirrorOf(card, `${card.dataset.memberId}|${code}`, openCards);
      byCommitment.set(code, [...(byCommitment.get(code) ?? []), copy]);
    }
  }

  const sections = new Map<string, string[]>();
  for (const code of [...byCommitment.keys()].sort(byCode)) {
    const s = code.split('.')[0];
    sections.set(s, [...(sections.get(s) ?? []), code]);
  }

  const name = (row: HTMLElement, code: string, title: string) => {
    const chip = row.querySelector<HTMLElement>(':scope > summary .bcn-cbadge');
    if (chip) chip.textContent = code;
    const el = row.querySelector<HTMLElement>(':scope > summary [data-list-name]');
    if (el) { el.textContent = title; el.hidden = !title; }
  };

  for (const [section, codes] of sections) {
    const row = stamp('section') as HTMLDetailsElement;
    row.dataset.listGroup = section;
    // Sections open on first paint so the page lands on its commitments, not on nine
    // closed rows; after that the reader's own folding wins.
    row.open = first || openGroups.has(section);
    // The fixture titles most sections; COA 9, 10 and 11 it does not, and a
    // made-up title would be the one fabricated string on the page.
    name(row, section, titles[section] ?? '');
    const subs = row.querySelector<HTMLElement>('[data-list-subs]')!;
    let n = 0;
    for (const code of codes) {
      const cards = byCommitment.get(code)!.sort(byTitle);
      n += cards.length;
      // A requirement carved from the section itself (COA 12, not COA 12.4) files
      // straight under the section, ahead of its commitments.
      if (code === section) {
        const ul = cardList();
        ul.append(...cards);
        subs.prepend(ul);
        continue;
      }
      const sub = stamp('commitment') as HTMLDetailsElement;
      sub.dataset.listGroup = code;
      sub.open = openGroups.has(code);
      name(sub, code, titles[code] ?? '');
      setCount(sub.querySelector(':scope > summary [data-list-count]'), cards.length, noun);
      sub.querySelector<HTMLElement>('[data-list-cards]')!.append(...cards);
      subs.append(sub);
    }
    setCount(row.querySelector(':scope > summary [data-list-count]'), n, noun);
    body.append(row);
  }
};

/**
 * Expand / collapse all on a mirror. Grouped, it works the group rows the way the
 * category view's pair works the branch rows; flat, there are no groups, so it works
 * the cards' own child lists.
 */
export const foldMirror = (body: HTMLElement, open: boolean) => {
  if (body.hasAttribute('data-list-flat')) {
    body.querySelectorAll<HTMLDetailsElement>('[data-list-mirror] details').forEach((d) => (d.open = open));
    return;
  }
  body.querySelectorAll<HTMLDetailsElement>('details[data-list-group]').forEach((d) => (d.open = open));
  if (!open) body.querySelectorAll<HTMLDetailsElement>('[data-list-mirror] details').forEach((d) => (d.open = false));
};
