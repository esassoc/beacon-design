// Help dots: pulsing marks a reader switches on from the Help & Guidance drawer, each opening a
// popover about the thing it sits on. Spots are named in code next to the page's route
// help key, the same key Help & Guidance articles attach by. A spot whose target is gone
// from the page hides its dot.
//
// Seed copy is the look book's Lists callouts (2026-10-20); the banner spot's copy is new.

/**
 * Where the dot sits on its target's box: on its top-right corner, inside its right
 * edge, just past its right edge, or just before its left edge (the last three centred
 * on the box's height).
 */
export type HelpDotAt = 'top-end' | 'inside-end' | 'after' | 'before';

/** Which side of the dot the popover opens on (esa-popover's `position`). */
export type HelpDotSide = 'top' | 'bottom' | 'left' | 'right';

export interface HelpDotShot {
  /** Path under public/, resolved with withBase. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HelpDot {
  /** Stable spot name, unique within its route key. */
  spot: string;
  /** CSS selector for the element the dot marks; the first match wins. */
  target: string;
  at: HelpDotAt;
  side: HelpDotSide;
  title: string;
  text: string;
  shot?: HelpDotShot;
}

export interface HelpDotPage {
  /** The route help key (BCN-1518), not a URL. */
  routeKey: string;
  dots: HelpDot[];
}

export const LISTS_HELP_DOTS: HelpDotPage = {
  routeKey: 'project.lists',
  dots: [
    {
      spot: 'banner',
      target: '.esa-alert-box',
      at: 'top-end',
      side: 'left',
      title: 'What a List Is For',
      text: 'A list gathers the commitments, actions or obligations one group of people needs, like a contractor at a kickoff meeting, so nobody has to sort the full set.',
    },
    {
      spot: 'search',
      target: '[data-list-index] .bcn-swfr',
      at: 'inside-end',
      side: 'left',
      title: 'Search',
      text: 'One search box narrows every group of lists on the page.',
    },
    {
      spot: 'groups',
      target: '[data-list-group="commitment"] .bcn-lib__head > .cluster',
      at: 'after',
      side: 'bottom',
      title: 'Lists Grouped by Type',
      text: 'Commitment, action and obligation lists each get a group with a count. This project only has commitment lists, so only that group shows.',
    },
    {
      spot: 'add',
      target: '[data-list-create="commitment"]',
      at: 'before',
      side: 'left',
      title: 'Add a List',
      text: 'Each group has its own Add button. You name the list and give it a description.',
      shot: {
        src: '/help-dots/add-commitment-list.png',
        alt: 'The Add Commitment List dialog, with Name and Description fields',
        width: 430,
        height: 240,
      },
    },
    {
      spot: 'scope',
      target: '[data-list-scope="global"]',
      at: 'after',
      side: 'bottom',
      title: 'Global or Personal',
      text: 'Global lists are shared with everyone on the tenant. Personal lists are yours alone.',
    },
  ],
};
