// Help dots: pulsing marks a reader switches on from the Help & Guidance drawer, each
// opening a popover about the thing it sits on.
//
// Two lists per page, both keyed by the page's route help key, the same key Help &
// Guidance articles attach by:
//   - SPOTS are ids the page's components emit on their parts (`data-help-spot`, see
//     src/lib/help-spot.ts), so almost anything is pickable and a dot never holds a CSS
//     path. The list below only records the spots that carry dots, with how the dot sits
//     there and the name an admin reads when the part is gone. A spot whose id is gone
//     from the page hides its dot, and the dot shows under Needs a New Spot for admins.
//   - DOTS are help content: a title, a sentence or two and an optional screenshot, on
//     one spot, Draft or Published. Drafts show to ESA admins only.
//
// Seed copy is the look book's Lists callouts (2026-10-20); the banner dot's copy is new.

/**
 * Where the dot sits on its target's box: on its top-right corner, inside its right
 * edge, just past its right edge, or just before its left edge (the last three centred
 * on the box's height).
 */
export type HelpDotAt = 'top-end' | 'inside-end' | 'after' | 'before';

/** Which side of the dot the popover opens on (esa-popover's `position`). */
export type HelpDotSide = 'top' | 'bottom' | 'left' | 'right';

/** Dismissed is a status, not a delete: a dismissed Claude draft stays on record. */
export type HelpDotStatus = 'published' | 'draft' | 'dismissed';

export interface HelpDotShot {
  /** Path under public/, resolved with withBase. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HelpSpot {
  /** The `data-help-spot` id the part carries; the first one on the page is the anchor. */
  spot: string;
  /** What the spot is, as an admin reads it. The part's own `data-help-spot-label` wins
   *  when it is on the page; this one names it when it is gone. */
  label: string;
  /** Where the dot sits. Left out, it is worked out from the part's size and place. */
  at?: HelpDotAt;
  side?: HelpDotSide;
  /**
   * A spot that only exists in one state of the page (the `?empty=1` empty state). Out of
   * that state its dot is not orphaned, just not shown, and the admin list says where it
   * lives instead of offering Pick Again.
   */
  onlyIn?: { param: string; value: string; label: string };
}

export interface HelpDot {
  id: string;
  spot: string;
  status: HelpDotStatus;
  title: string;
  text: string;
  shot?: HelpDotShot;
  /** Set on a Claude draft: the change it was drafted from. */
  draftedFrom?: string;
}

export interface HelpDotPage {
  /** The route help key (BCN-1518), not a URL. */
  routeKey: string;
  spots: HelpSpot[];
  dots: HelpDot[];
}

/** What Capture This Spot returns in the prototype: a crop around the part, made from
 *  this page ahead of time, one per spot id (public/help-dots/spots/). */
export const spotCapture = (spot: string, label: string): HelpDotShot => ({
  src: `/help-dots/spots/${spot}.png`,
  alt: `The ${label} on the Lists page`,
  width: 640,
  height: 240,
});

export const LISTS_HELP_DOTS: HelpDotPage = {
  routeKey: 'project.lists',
  spots: [
    {
      spot: 'lists.intro',
      label: 'Page Banner',
      at: 'top-end',
      side: 'left',
      onlyIn: { param: 'banner', value: 'on', label: 'Banner On Only' },
    },
    { spot: 'lists.search', label: 'Search', at: 'inside-end', side: 'left' },
    { spot: 'lists.group.commitment', label: 'Commitment Lists Heading', at: 'after', side: 'bottom' },
    { spot: 'lists.add.commitment', label: 'Add Commitment List Button', at: 'before', side: 'left' },
    { spot: 'list-row.scope.global', label: 'Global Badge', at: 'after', side: 'bottom' },
    { spot: 'list-row.scope.personal', label: 'Personal Badge', at: 'after', side: 'bottom' },
    {
      spot: 'lists.empty.create',
      label: 'Create List Button',
      at: 'before',
      side: 'left',
      onlyIn: { param: 'empty', value: '1', label: 'Empty State Only' },
    },
    // Export moved off the Lists index onto each list's page (BCN-1909 put Excel on the
    // list's Export card), so nothing emits this id and its dot needs a new spot.
    { spot: 'lists.export', label: 'Export Button', at: 'before', side: 'left' },
  ],
  dots: [
    {
      id: 'lists-banner',
      spot: 'lists.intro',
      status: 'published',
      title: 'What a List Is For',
      text: 'A list gathers the commitments, actions or obligations one group of people needs, like a contractor at a kickoff meeting, so nobody has to sort the full set.',
    },
    {
      id: 'lists-search',
      spot: 'lists.search',
      status: 'published',
      title: 'Search',
      text: 'One search box narrows every group of lists on the page.',
    },
    {
      id: 'lists-groups',
      spot: 'lists.group.commitment',
      status: 'published',
      title: 'Lists Grouped by Type',
      text: 'Commitment, action and obligation lists each get a group, with a count of the lists in it.',
    },
    {
      id: 'lists-add',
      spot: 'lists.add.commitment',
      status: 'published',
      title: 'Add a List',
      text: 'Each group has its own Add button. You name the list, give it a description and, for a commitment list, choose who sees it.',
      shot: {
        src: '/help-dots/add-commitment-list.png',
        alt: 'The Add Commitment List dialog, with Name and Description fields',
        width: 640,
        height: 667,
      },
    },
    {
      id: 'lists-first',
      spot: 'lists.empty.create',
      status: 'published',
      title: 'Your First List',
      text: 'Name the list and give it a description. Keep it Personal or share it as Global.',
    },
    {
      id: 'lists-scope',
      spot: 'list-row.scope.global',
      status: 'published',
      title: 'Global or Personal',
      text: 'Global lists are shared with everyone in your organization. Personal lists are visible only to you.',
    },
    {
      id: 'lists-personal',
      spot: 'list-row.scope.personal',
      status: 'draft',
      title: 'Personal Lists',
      text: 'Only you see a Personal list. Make it Global from its Details panel to share it with your team.',
      draftedFrom: 'Beacon PR #2231, Personal commitment lists',
    },
    {
      id: 'lists-export',
      spot: 'lists.export',
      status: 'published',
      title: 'Export Every List',
      text: 'Download all of this project’s lists as one CSV.',
    },
  ],
};
