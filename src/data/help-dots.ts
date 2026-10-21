// Help dots: pulsing marks a reader switches on from the Help & Guidance drawer, each
// opening a popover about the thing it sits on.
//
// Two lists per page, both keyed by the page's route help key, the same key Help &
// Guidance articles attach by:
//   - SPOTS are named in code, next to the route key: the places on the page a dot may
//     sit. A spot whose target is gone from the page hides its dot, and the dot shows
//     under Needs a New Spot for admins.
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
  /** Stable name, unique within its route key. */
  spot: string;
  /** What the spot is, as an admin picking it reads it. */
  label: string;
  /** CSS selector for the element the spot marks; the first match wins. */
  target: string;
  at: HelpDotAt;
  side: HelpDotSide;
  /** What Capture This Spot returns in the prototype: the area around the spot. */
  capture: HelpDotShot;
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

const capture = (spot: string, alt: string): HelpDotShot => ({
  src: `/help-dots/spots/${spot}.png`,
  alt,
  width: 640,
  height: 240,
});

export const LISTS_HELP_DOTS: HelpDotPage = {
  routeKey: 'project.lists',
  spots: [
    {
      spot: 'banner',
      label: 'Page Banner',
      target: '.esa-alert-box',
      at: 'top-end',
      side: 'left',
      capture: capture('banner', 'The info banner at the top of the Lists page'),
    },
    {
      spot: 'search',
      label: 'Search',
      target: '[data-list-index] .bcn-swfr',
      at: 'inside-end',
      side: 'left',
      capture: capture('search', 'The Search lists field'),
    },
    {
      spot: 'groups',
      label: 'Group Heading',
      target: '[data-list-group="commitment"] .bcn-lib__head > .cluster',
      at: 'after',
      side: 'bottom',
      capture: capture('groups', 'The Commitment Lists heading with its count'),
    },
    {
      spot: 'add',
      label: 'Add List Button',
      target: '[data-list-create="commitment"]',
      at: 'before',
      side: 'left',
      capture: capture('add', 'The Add Commitment List button'),
    },
    {
      spot: 'scope',
      label: 'Global Badge',
      target: '[data-list-scope="global"]',
      at: 'after',
      side: 'bottom',
      capture: capture('scope', 'A list row with its Global badge'),
    },
    {
      spot: 'personal',
      label: 'Personal Badge',
      target: '[data-list-scope="personal"]',
      at: 'after',
      side: 'bottom',
      capture: capture('personal', 'A list row with its Personal badge'),
    },
    {
      spot: 'updated',
      label: 'Updated Date',
      target: '[data-list-row] .bcn-lc__updated',
      at: 'before',
      side: 'left',
      capture: capture('updated', 'A list row with its Updated date'),
    },
    {
      spot: 'count',
      label: 'Member Count',
      target: '[data-list-row] .bcn-swcb',
      // On the badge's corner: 'after' puts the dot on the scope badge that follows it.
      at: 'top-end',
      side: 'bottom',
      capture: capture('count', 'A list row with its member count'),
    },
    {
      spot: 'name',
      label: 'List Name',
      target: '[data-list-row] .bcn-lc__name',
      at: 'before',
      side: 'left',
      capture: capture('name', 'A list row with its name'),
    },
    {
      spot: 'obligations',
      label: 'Obligation Lists Heading',
      target: '[data-list-group="obligation"] .bcn-lib__head > .cluster',
      at: 'after',
      side: 'bottom',
      capture: capture('obligations', 'The Obligation Lists heading with its count'),
    },
    {
      // The Create List button on the empty state (round 11, `?empty=1`).
      spot: 'first',
      label: 'Create List Button',
      target: '[data-list-empty] [data-list-create]',
      onlyIn: { param: 'empty', value: '1', label: 'Empty State Only' },
      at: 'before',
      side: 'left',
      capture: capture('add', 'The Create List button on a project with no lists'),
    },
    {
      // Export moved off the Lists index onto each list's page (BCN-1909 put Excel on the
      // list's Export card), so this spot no longer resolves and its dot sits under Needs
      // a New Spot (round 14, restored as that example).
      spot: 'export',
      label: 'Export Button',
      target: '[data-list-export]',
      at: 'before',
      side: 'left',
      capture: capture('add', 'The Export button'),
    },
  ],
  dots: [
    {
      id: 'lists-banner',
      spot: 'banner',
      status: 'published',
      title: 'What a List Is For',
      text: 'A list gathers the commitments, actions or obligations one group of people needs, like a contractor at a kickoff meeting, so nobody has to sort the full set.',
    },
    {
      id: 'lists-search',
      spot: 'search',
      status: 'published',
      title: 'Search',
      text: 'One search box narrows every group of lists on the page.',
    },
    {
      id: 'lists-groups',
      spot: 'groups',
      status: 'published',
      title: 'Lists Grouped by Type',
      text: 'Commitment, action and obligation lists each get a group, with a count of the lists in it.',
    },
    {
      id: 'lists-add',
      spot: 'add',
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
      spot: 'first',
      status: 'published',
      title: 'Your First List',
      text: 'Name the list and give it a description. Keep it Personal or share it as Global.',
    },
    {
      id: 'lists-scope',
      spot: 'scope',
      status: 'published',
      title: 'Global or Personal',
      text: 'Global lists are shared with everyone in your organization. Personal lists are visible only to you.',
    },
    {
      id: 'lists-personal',
      spot: 'personal',
      status: 'draft',
      title: 'Personal Lists',
      text: 'Only you see a Personal list. Make it Global from its Details panel to share it with your team.',
      draftedFrom: 'Beacon PR #2231, Personal commitment lists',
    },
    {
      id: 'lists-export',
      spot: 'export',
      status: 'published',
      title: 'Export Every List',
      text: 'Download all of this project’s lists as one CSV.',
    },
  ],
};
