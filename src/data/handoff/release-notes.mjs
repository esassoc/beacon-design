// Handoff spec for the /prototypes/release-notes route — the authored counterpart to
// the auto-derived capture. It declares which regions are inspectable sections (by
// selector), plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; interactive states are
// reached with an `apply` recipe (the fixes disclosure is expanded, the What's-new
// popover and the guidance drawer are opened).
//
// Context: the in-app release-notes surface, coupled to Help & Guidance. Every Beacon
// release in one reverse-chronological stream — the Linear/Notion changelog pattern in
// Beacon's own chrome — fed by the real 1.31–1.33 notes transcribed into
// src/data/release-notes.ts (the client-facing subset). This page is the DESTINATION of
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
        'The slim sticky rail that makes a long changelog navigable: one row per release — the version number as an anchor link, a short human date beneath it, and a quiet "Latest" marker on the newest entry. A scroll-spy mirrors whichever release is in view into an active highlight.',
      decisions: [
        'PROGRESSIVE BY CONSTRUCTION: the rows are plain in-page anchor links that jump to each release with no JS. The IntersectionObserver only mirrors the in-view release into an active class — nothing about navigation depends on it.',
        'Active = the topmost release currently inside a thin band just under the topbar (rootMargin -68px top / -55% bottom). When the scroll sits between bands the last active row stays lit, so the rail never blanks out mid-scroll.',
        'The active state is an INK SHIFT, never a color fill: the version darkens to primary and gains weight; the row keeps its neutral background. Hover adds at most a sunken wash.',
        'Version numbers are set in the serif display face (--font-decorative) to echo the version headings in the stream — the rail and the stream speak the same voice.',
        '"Latest" is a quiet gray marker on the sunken surface, not a colored chip, so it never competes with the active-row ink.',
        'Dates shorten to "Jul 22" and only append the year when it differs from the newest release\'s year, keeping the rail slim. They are read in UTC to avoid an ISO-midnight off-by-one.',
        'The initial highlight comes from the URL hash when it names a known release, else the newest — so arriving from the What\'s-new popover lights the right row immediately.',
      ],
      gotchas: [
        'The rail sticks INSIDE the .modern-layout__content scroll container, which already begins below the fixed 52px topbar (AppShell\'s body carries the padding-top). Its sticky `top` is therefore a small breathing gap, NOT the topbar height — adding the header offset again double-counts it.',
        'align-self:start is required: without it the flex item stretches to full height and the sticky element has no slack to move in.',
        'esa-sidebar-nav is the wrong lego here — it is a route/section nav behind a shadow-DOM, property-driven boundary, its group headings are the banned ornamental micro-label (11px uppercase letter-spaced), and its per-item hint can only be a filled badge pill, not the quiet 14px date meta this rail needs.',
        'The PAGE owns the .sidebar layout primitive and sets --sidebar-width (~14rem); the rail is designed to be its first-child aside and does not create its own layout.',
        'On narrow viewports the .sidebar primitive folds the rail above the stream — drop sticky and the height cap there, or it reads as a stuck fragment.',
      ],
      acceptance: [
        'Every release has a row with version, date, and — on the newest only — a "Latest" marker; clicking a row jumps to that release with landing room below the topbar; scrolling moves the active ink down the rail; arriving with #v1-33-0 lights that row on load.',
      ],
    },
    {
      label: 'Release (one anchored entry)',
      selector: '.bcn-release',
      intent:
        'One release in the stream: a quiet meta line ("Latest" + the long date) above the serif version number, then the headline stories, then area-grouped entries, then a collapsed fixes list. This is the repeating unit of the whole page.',
      decisions: [
        'Meta ABOVE the version (the Sketch changelog pattern): the small quiet date line sits first, then the large serif version number — so a scan down the page reads as dates first, versions second.',
        'THREE TIERS OF NEWS, in descending prominence: headline stories (serif titles, the richest tier), area-grouped entries (sans, grouped under an area heading), and fixes (a collapsed list). A reader who stops after the headlines still knows what shipped.',
        'Typography carries the hierarchy, not color: a serif display layer (Besley, --font-decorative) for the version number and headline titles, sans for everything else, with size and weight doing the rest. The ink is MONOCHROME — no status color anywhere on the page.',
        '"Latest" is a quiet gray text label, not a chip. The only color that surfaces on the page is the house link color on actual links.',
        'Every release and every entry is a hash target (#<anchor> and #<anchor>-<entryId>), with scroll-margin for landing room — so the rail, the What\'s-new popover, and cross-release headline links all resolve to an exact place.',
        'Prose is held to a ~42rem measure so text never runs the full width of the content column.',
        'Fully presentational: the entire stream renders from RELEASES with no props and no client JS — the fixes disclosure is a native <details>.',
      ],
      gotchas: [
        'Inline **bold** and `code` in the copy are formatted at BUILD time (escape HTML → swap patterns → set:html), because Astro will not process markup inside interpolated strings. Escape first, and swap code before bold so a ** inside a code span stays literal.',
        'Dates are formatted from `${iso}T00:00:00` to pin local midnight — parsing the bare ISO string shifts the displayed date a day in negative-offset timezones.',
        'No esa-* lego renders a changelog: esa-card is a bare container. The callout icon is esa-icon composed inside; the code and bold spans are token-driven content typography.',
        'The scroll-margin is tuned for a scroll container that already starts below the fixed topbar. In a layout where the page itself scrolls, that offset has to grow by the topbar height.',
      ],
      acceptance: [
        'The newest release shows "Latest" + its long date above a serif version number; headlines read as the most prominent tier; the page carries no status color; every release and entry has a working hash anchor that lands with breathing room.',
      ],
    },
    {
      label: 'Area entry (with feature-flag note)',
      selector: '.bcn-release__entry:has(.bcn-release__flag)',
      intent:
        'One change inside an area group: the entry title, optional deployment notes (a feature-flag name, or an "applies to all tenants" note), and a body of blocks — paragraphs, bullet lists, and callouts. This is where the operational detail lives, below the headline tier.',
      decisions: [
        'The flag note renders the label "flag" followed by the flag name in a code span — it is a real deployment fact (the change is gated behind that feature flag), not decoration, so it reads as data next to the title.',
        '"applies to all tenants" is the complementary note for ungated changes. Both are optional per entry and both derive from fields on the entry record.',
        'Entry bodies are a BLOCK UNION — { kind: p } | { kind: bullets } | { kind: callout } — pattern-matched by the renderer. This is deliberately the same block model BcnHelpArticle uses, so help articles and release notes share one content shape.',
        'The callout is an aside with a leading esa-icon "info" glyph and its text; it stays monochrome like everything else on the page.',
        'Each entry carries id="<release-anchor>-<entryId>" so a headline story can link down to the full detail of the change it is announcing.',
      ],
      gotchas: [
        'The block renderer must return null for an unknown kind rather than falling through — the union is open to new block types.',
        'The flag name is content, not markup: it goes through the same escape-then-format path as the rest of the copy.',
        'Do not add color to the flag or applies notes to make them stand out. The page\'s monochrome rule is deliberate — these read as quiet meta beside the title.',
      ],
      acceptance: [
        'A gated entry shows "flag" + the flag name beside its title; an ungated one shows the applies note or neither; paragraphs, bullets, and callouts all render from the same entry\'s block list; the entry id resolves as a hash target from its headline link.',
      ],
    },
    {
      label: 'Fixes disclosure (expanded)',
      selector: '.bcn-release__fixes',
      apply: [{ click: '.bcn-release__fixes-summary' }],
      intent:
        'The long tail of each release — small fixes and improvements — collapsed behind a native disclosure that shows the count in its summary. It keeps the release honest about everything that shipped without letting the tail dominate the scan.',
      decisions: [
        'A native <details> / <summary>, not a JS accordion: it needs no client code, is keyboard- and screen-reader-correct by default, and survives with JS off.',
        'The summary carries the COUNT ("Fixes & small improvements (12)"), so the volume is visible without expanding.',
        'Collapsed by default on every release, including the latest — the headline and area tiers are the story; this is the appendix.',
        'Fix lines are plain list items running through the same inline **bold** / `code` formatter as the rest of the stream.',
      ],
      gotchas: [
        'Style the summary marker deliberately; browsers disagree on the default triangle, and an unstyled one reads as a bug next to the rest of the page.',
        'Do not replace this with a component that animates height — the value here is that it costs zero client JS.',
        'If a release has no fixes the whole disclosure is omitted, not rendered empty with a zero count.',
      ],
      acceptance: [
        'Each release with fixes shows a collapsed summary carrying the count; clicking or pressing Enter expands the full list; the page still works with JS disabled.',
      ],
    },
    {
      label: "What's-new popover (the doorway in)",
      selector: '.bcn-help-bar__panel',
      apply: [{ click: '[data-whatsnew]' }],
      intent:
        "The app-wide entry point to this page: a popover anchored above the floating help bar listing the newest release's headline stories, each deep-linking to that release on this page, with an \"All release notes →\" footer. It is how a user finds out something shipped without going looking.",
      decisions: [
        'Framed by RELEASE, not by date alone: the panel header pairs the "What\'s new" title with the latest version and its long date, mirroring the quiet meta line the release itself carries. The popover and the page state the same fact the same way.',
        'Entries are text-only — a serif title over a sans blurb, matching the stream\'s typographic voice. Per-entry icons were tried and dropped: they added chrome without adding information.',
        'Every entry links to `<release-notes>#<anchor>` — the anchor is a field on the entry record, so an entry always lands on the release it belongs to.',
        'The panel is the esa-popover lego (position="top", trigger="click"), which owns open/close, Esc, and outside-click. The bar\'s own script only persists the seen state.',
        'The bar is dark glass but this panel stays a white content surface — chrome and content are visibly different materials.',
        'WHATS_NEW is a curated authored record (the top three headline stories of the newest release), not a derivation over every entry — the point is editorial selection.',
      ],
      gotchas: [
        'The unread dot is retired by writing the NEWEST ENTRY DATE to localStorage, not a boolean — that is what makes the dot come back when the next release ships.',
        'Trigger the popover from a real button; the dot is an aria-hidden decoration and must not be the click target on its own.',
        'The panel must layer above the floating bar and above page content, and it opens upward — verify it does not clip at the viewport bottom on short windows.',
      ],
      acceptance: [
        "Clicking What's new opens a white panel above the bar headed by the latest version and date; each entry is a serif title over a blurb with no icon; clicking one lands on that release on this page; \"All release notes →\" opens the page itself; the unread dot is gone afterward and stays gone on reload.",
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
