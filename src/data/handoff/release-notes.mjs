// Handoff spec for the /prototypes/release-notes route — the authored counterpart to
// the auto-derived capture. It declares which regions are inspectable sections (by
// selector), plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; interactive states are
// reached with an `apply` recipe (the What's-new popover and the guidance drawer are
// opened).
//
// Context: the in-app release-notes surface, coupled to Help & Guidance. Every Beacon
// release as one post, newest first: two or three features with
// screenshots, then the Added / Changed / Fixed changelog — fed by the customer-facing
// 1.39–1.41 notes in src/data/release-notes.ts. This page is the DESTINATION of
// the help bar's What's-new popover, so the last two sections below capture the two
// Help & Guidance components in the states only this route produces. The knowledge-base
// half of the feature is captured in src/data/handoff/help.mjs.

/**
 * @typedef {Object} HandoffSection
 * @property {string} label     Chip label in the inspector.
 * @property {string} selector  What to slice out as this section (first match).
 * @property {object[]} [apply]  Op recipe (click / fill / clear / clickText / key) to drive a live state.
 * @property {string} [intent]  What this is and why it exists.
 * @property {string[]} [decisions] Key design/implementation decisions.
 * @property {string[]} [gotchas]   Traps to avoid when re-implementing.
 * @property {string[]} [acceptance] "Done when…" checks.
 */

/** @type {{ sections: HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Version rail',
      selector: '.bcn-release-nav',
      intent:
        'A slim sticky list of release versions on the end side of the page, each an anchor link to its post. A scroll-spy mirrors whichever release is in view into an active highlight. Wide screens only.',
      decisions: [
        'PROGRESSIVE BY CONSTRUCTION: the rows are plain in-page anchor links that jump to each release with no JS. The IntersectionObserver only mirrors the in-view release into an active class.',
        'Versions only. Each post carries its own version badge and date in its meta column, so the rail repeats neither the date nor a "Latest" marker.',
        'The active state is an ink shift, never a color fill: the version darkens and gains weight.',
        'Below 64rem the rail is not rendered; the posts\' own meta columns carry the version.',
      ],
      gotchas: [
        'The rail sticks INSIDE the .modern-layout__content scroll container, which already begins below the fixed topbar. Its sticky `top` is a small breathing gap, not the topbar height.',
        'The PAGE owns the .sidebar primitive (data-side="end", --sidebar-width 12rem); the rail is its first-child aside.',
      ],
      acceptance: [
        'Every release has a row; clicking one jumps to that post with landing room below the topbar; scrolling moves the active ink down the rail; the rail is absent on a phone.',
      ],
    },
    {
      label: 'Release post',
      selector: '.bcn-release',
      intent:
        'One release, as one post: the version badge and date in a narrow meta column, then two or three features (title, paragraph, optional note on what moved (info icon + text), screenshot in an inset frame with a caption), then the release\'s full Added / Changed / Fixed list. Every release uses the same shape.',
      decisions: [
        'Features first, changelog second: a reader who stops after the features knows what matters; the changelog is the complete record beneath.',
        'The meta column is the Claude Code changelog layout (160px column, 24px gap). It sticks while its post scrolls once the two sit side by side; on a phone it drops above the body as one row (badge, date).',
        'Version is an esa-badge (neutral, lg), not a brand-tinted pill: badges stay quiet per the design principles.',
        'A serif display layer (--font-decorative) carries the feature titles; everything else is the sans body face. No status color anywhere.',
        'Headlines are plain and factual: they name the feature, not a pitch. There is no per-release summary line; the features lead.',
        'Screenshots sit in an inset frame: a sunken panel with padding and a large radius around an image with its own smaller radius and a hairline, and a short factual caption under it. The caption is the alt text too.',
        'A feature note is the info icon and the fact itself ("The Action Lists entry in the navigation is gone on every tenant."), with no "Read this first" label: the label addressed the reader instead of stating the change.',
        'Every post is a hash target (#v1-41-0) and every feature is too (#v1-41-0-lists), with scroll-margin for landing room.',
      ],
      gotchas: [
        'Each post is the .sidebar layout primitive. Sticky needs the meta column to stretch (align-self: stretch) and the inner wrapper to stick; sticking the wrapped phone layout would float the badge over the body, so sticky is media-gated.',
        'Feature screenshots come from one prop (feature.image). Where production captures come from is still open; swap the source, not the layout.',
      ],
      acceptance: [
        'Each release shows badge and date, two or three features each with a captioned, inset screenshot, then Added / Changed / Fixed; a feature note renders only where the data has one; the meta column sticks on desktop and sits above the body on a phone.',
      ],
    },
    {
      label: 'Changelog (Added / Changed / Fixed)',
      selector: '.bcn-release-changelog',
      intent:
        'The release\'s complete list of changes, grouped Added, Changed, Fixed, in a dense 14px bulleted list below a hairline.',
      decisions: [
        'Lines that belong to one product area lead with that area as a quiet esa-badge (sm). App-wide lines carry no badge.',
        'A value as it appears in Beacon (a status or outcome name, written in backticks in the data) renders bold, not monospace: monospace is reserved for code.',
        'Group heads are 14px semibold labels in normal case, never ornamental micro-labels.',
      ],
      gotchas: [
        'Every line starts with its group\'s verb (Added, Changed, Fixed) so a line read alone still says what happened.',
        'Customer Announcements only: ESA Internal, Dev-only, TBD items and Jira keys stay out of the data.',
      ],
      acceptance: [
        'Each release shows its three groups in order; area badges align with the first line of text; backticked values read bold.',
      ],
    },
    {
      label: "What's-new popover (the doorway in)",
      selector: '.bcn-help-bar__panel',
      apply: [{ click: '[data-whatsnew] button' }],
      intent:
        "The app-wide entry point to this page: a popover above the floating help bar listing the latest post's features, each deep-linking to that feature on this page, with an \"All Release Notes\" footer.",
      decisions: [
        'Derived, not curated separately: the entries are LATEST_RELEASE.features, so the popover and the post always agree.',
        'Each entry is the feature title over its paragraph, clamped to two lines; the page has the rest.',
        'Each entry links to `<release-notes>#<release anchor>-<feature id>`, landing on the feature itself.',
        'The panel is the esa-popover lego (position="top", trigger="click"), which owns open/close, Esc and outside-click. The bar\'s own script only persists the seen state.',
      ],
      gotchas: [
        'The unread dot is retired by writing the latest RELEASE DATE to localStorage, not a boolean, so the dot comes back when the next release ships.',
        'Trigger the popover from the real button; the dot is an aria-hidden decoration.',
      ],
      acceptance: [
        "Clicking What's new opens a white panel above the bar headed by the latest version and date; it lists that release's features; clicking one lands on that feature on this page; the unread dot is gone afterward and stays gone on reload.",
      ],
    },
    {
      label: 'Guidance drawer — curated route context',
      selector: '[data-gd-intro]',
      apply: [{ click: '[data-help-trigger]' }],
      intent:
        "Aldo's opening message on THIS route — the route-aware half of the guidance drawer. \"You are here\" names the page and states its purpose in plain words; \"On this page\" lists the how-to articles curated for it; \"Terms\" lists the glossary terms it uses. Every page gets this; the Release Notes route has a curated entry rather than the generic fallback.",
      decisions: [
        'Route context is a DATA RECORD, not logic: HELP_ROUTE_CONTEXTS is an ordered list of { pattern, page, purpose, howtos, terms }, matched by pathname substring with FIRST MATCH WINNING. Adding guidance for a route is a data edit.',
        'HELP_GENERAL_CONTEXT is the fallback for any route without a curated entry, so the drawer is never empty — an uncurated page still gets an orienting answer.',
        'The pattern is a base-agnostic pathname substring, so the same record works under the prototype base path and in the real app.',
        'howtos and terms are ARRAYS OF ARTICLE IDS into the one shared dataset — the drawer never holds its own copy of an article. Curating a route means choosing which existing articles surface, not writing new text.',
        'The Release Notes entry curates to what this page actually raises: the how-to for tenant settings and the "feature flag" glossary term — matching the flag notes on the entries above.',
        'Section labels are readable words with a leading esa-icon glyph (map-pin / list / book), not ornamental micro-labels.',
        'Rendering is a MOVE, not a build: every article is pre-rendered once as a row into a hidden pool, and the client moves the matched route\'s rows into these two sections. Astro is compile-time and the drawer is route-agnostic at build, so the move is what makes it route-aware.',
      ],
      gotchas: [
        'Order matters in HELP_ROUTE_CONTEXTS — first match wins, so a broad pattern placed above a specific one will shadow it. Keep specific routes before general ones.',
        'A curated entry whose howtos or terms name an id that no longer exists silently renders one fewer row. Validate the ids against the dataset at build time.',
        'The "On this page" and "Terms" sections hide themselves when their list is empty — a curated entry with no terms should not leave a labeled empty section.',
        'This intro is a message in the chat stream, not a fixed header: it scrolls away as the conversation grows. Do not pin it.',
      ],
      acceptance: [
        'Opening the drawer on this route shows "Release Notes" with its purpose sentence, the curated how-to row, and the "feature flag" term; opening it on an uncurated route shows the general fallback instead of an empty drawer; every listed row opens that article in the stacked reader.',
      ],
    },
  ],
};
