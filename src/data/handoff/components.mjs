// Handoff spec for the /prototypes/components prototype — the COMPONENT INDEX,
// level two of the tree (project → components → component detail). The authored
// counterpart to the auto-derived capture: it declares which regions are
// inspectable sections (by selector), plus the design intent, decisions, gotchas
// and acceptance a dev/Claude needs to re-implement each one in the Angular app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// ROUTE NOTE, read this first. This page USED to live at
// /prototypes/component-dashboard. That URL now belongs to the per-component
// dashboard (BCN-1412's main surface), and this page moved to /prototypes/components.
// Any handoff bundle under prototypes-component-dashboard/ dated before 2026-08-14
// describes THIS page, not the dashboard.
//
// WHAT THIS PAGE IS FOR, and it is deliberately small. From the 2026-08-13 design
// call: "this page itself is only useful in getting to a particular component… it
// doesn't need to do anything besides routing people. Beyond that it's very low
// utility beyond setup. Once we get into cross-component comparison, maybe there'll
// be interesting stuff to do here, but not at the moment."
//
// So no new utility was added. The whole investment went into making sixteen rows
// SCANNABLE — the identity mark, a real colored status taxonomy, and a map — because
// sixteen is where "which one did I want" actually gets hard. Do not grow this page
// into a cross-component analysis surface as part of this epic.
//
// PROD SURFACE REPLACED: the all-components list reached from the project page, and
// the Data Catalog's duplicate Components entry (retired — see
// src/data/component-nav.ts; Components moves INTO the Project section).
//
// Field shapes: src/data/component-dashboard.ts (ProjectComponent, STATUS_META,
// summarize, the identity marks), src/data/component-index-map.ts (the footprint
// derivation), src/data/entity-marks.ts (the glyph × color vocabulary).

/**
 * @typedef {object} HandoffSection
 * @property {string} label
 * @property {string} selector
 * @property {string} [intent]
 * @property {string[]} [decisions]
 * @property {string[]} [gotchas]
 * @property {string[]} [acceptance]
 */

/** @type {{ sections: HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Component status summary',
      selector: '.bcn-summary',
      intent:
        'A project-wide roll-up above the list: how many components exist, how they distribute across the lifecycle, and which ones have overdue actions. It answers "is anything wrong" before the user has to read any rows, which is the only question this page can usefully answer beyond routing.',
      decisions: [
        'The status breakdown is a single proportional bar plus a legend with counts, not four stat cards. The distribution IS the information; four cards would spend a quarter of the page saying what one bar says.',
        'The "Needs attention" lane lists components by overdue action count, most-overdue first, and links straight to each. It is the one place this page earns its keep as more than a router.',
        'Lifecycle colors come from STATUS_META in src/data/component-dashboard.ts, which re-points onto the Beacon status-color standard in theme-beacon.css. Nothing here carries a literal hex.',
      ],
      gotchas: [
        'on-hold is deliberately DARKER than not-started. A paused component is a decision; not-started is an absence, and the palette should say which is which. --bcn-status-on-hold was added for exactly this surface — the first one to render all four lifecycle states side by side.',
        'The count rule this page follows: a bare number means "the contents of this list". Anything narrower must say "N of M". A bare number over a filtered set is the bug this whole epic exists to stop repeating.',
      ],
      acceptance: [
        'The bar segments and legend counts sum to the total; the attention lane lists only components with overdue actions and each row navigates to that component; every color resolves through a token, and the four lifecycle states are visually distinguishable from one another.',
      ],
    },

    {
      label: 'Component grid',
      selector: '.bcn-cg',
      intent:
        "The default view and the page's real job: sixteen rows a person can scan to find the one they want. Each row leads with the component's identity MARK, so you find yours by shape and color rather than by reading sixteen long names, and carries the operational figures that tell you whether it needs you — open actions, overdue, work areas, requirements met, last monitoring.",
      decisions: [
        'The identity mark is the scanning device, and it is the same mark the component dashboard header wears — the "parking-garage floor" idea: a visual landmark that says which one you are on. marksForProject() guarantees the marks within one project are distinct.',
        'Status is a real colored taxonomy (Not started / In progress / On hold / Complete), not the word "Active". Prod showed one undifferentiated state.',
        'Status renders as the QUIET CHIP — a dot plus a label on a light ground, the shared makeQuietChipRenderer from src/lib/beacon-grid.ts, identical to the work-area board. It is NOT a saturated pill. Changed at review 2026-08-14: the first pass cloned a tinted pill and drifted from the house pattern.',
        'AG Grid with the full standard chrome: search field, clear-filters, per-column filters, CSV download, record count.',
      ],
      gotchas: [
        'A Board/card view was built and CUT (2026-08-13). Grid already answers "which one do I want" now that the mark and colored status do the scanning, and Map answers "where", which Grid cannot. The board was a second answer to a question Grid already answers, and a toggle whose options overlap makes someone choose before they know what they are choosing between. Do not reintroduce it.',
        'The component name column must stay wide enough for the real names — "Southern Tunnel Reach — King Island to Bethany Complex Launch Shaft Transition Zone" is a real DCP component, not a stress test. Truncate with an ellipsis, never wrap the row.',
        'Row-level component access does not complicate this list: IAmComponentScoped + ComponentScopeMiddleware already filter any obtainable component list (see-all-unless-scoped), so the grid needs no scope logic of its own.',
      ],
      acceptance: [
        'Sixteen rows render with distinct marks; status is a quiet dot-and-label chip matching the work-area board exactly; clicking a component name navigates to its dashboard; a click on any cell that is not the name link does not navigate; the grid carries search, clear-filters, download and a record count.',
      ],
    },

    {
      label: 'Component footprint map',
      selector: '.bcn-fmap',
      intent:
        'The second view, asked for explicitly on the design call: where the components ARE. Components overlap on it, and that is correct — they are areas over areas over time in the same place, and color separates them the way species habitat layers do ("if we color code them, that\'s what the species habitat layers look like, it\'s fine").',
      decisions: [
        'Each shape is a FOOTPRINT derived from the component\'s WORK AREAS — the convex hull of its work-area points, buffered outward. It is labelled as a derivation on the surface, not presented as a boundary.',
        'Fills are translucent (18%) with a solid edge, and hovering brings one shape forward at 36%. Sixteen overlapping footprints have to stay legible where they stack, and the outline is what keeps each shape readable through the pile.',
        'Footprints are colored by lifecycle status from the same STATUS_META the grid and summary read, with a legend keyed to it.',
        'Basemap is grayscale. House rule: containers stay neutral, color lives in the data.',
      ],
      gotchas: [
        'COMPONENT HAS NO STORED GEOMETRY. There is no geography column on dbo.Component, and BCN-1584 (which adds one, with shapefile upload) is Ready-for-Dev with zero commits. Work areas are the only real geometry a component owns today. When BCN-1584 lands, an uploaded boundary REPLACES the hull and this derivation is deleted rather than extended.',
        'An earlier pass drew one DOT per component at an invented coordinate. That was worse than nothing — a point implies a location the data does not have, and nobody could tell what the dots meant (cut at review 2026-08-14). Do not ship a component location the data model cannot produce.',
        'Do not hull the work areas without buffering first. Geotech borings sit in a LINE along the alignment, so their bare convex hull collapses to a sliver a few pixels wide that reads as a rendering artefact. Buffer each point into a disc, then hull the cloud: a line of sites becomes a lozenge and a single site becomes a circle.',
        'A Leaflet map built inside a hidden container measures 0x0, so fitBounds resolves against nothing and the map opens zoomed to the middle of the ocean. This map is built inside a hidden view panel. The component watches its own box with a ResizeObserver and re-measures + re-fits the first time it has real size — do not make the caller remember to poke it on reveal.',
      ],
      acceptance: [
        'Every component draws one filled footprint colored by its status; overlapping shapes remain individually distinguishable and hover isolates one; the legend matches the grid\'s status colors; switching to the map from the grid shows a correctly fitted view with no grey box and no ocean; the surface states that footprints are derived from work areas.',
      ],
    },

    {
      label: 'View toggle and page actions',
      selector: '.page-layout__utilities',
      intent:
        'Two views of one dataset — Grid and Map — plus the primary action that creates a component.',
      decisions: [
        'Grid is the default. Map is the alternative for "where", not a peer answer to "which one".',
        'esa-button-toggle at size sm, matching the utilities row of the sibling dashboards.',
      ],
      gotchas: [
        'A Populated/Empty dataset toggle sat here and was CUT (2026-08-14). It previewed the first-run empty state, but a control that swaps the page\'s DATA is a prototype\'s stage direction wearing the same clothes as a real view control, and putting the two side by side made neither legible. The empty state still needs designing for the build — it just is not a toggle on the real page.',
        'Both views measure themselves on layout. Reveal the panel before anything asks it for a size; each component re-measures on its own signal.',
      ],
      acceptance: [
        'Grid renders on load; switching to Map and back leaves both views correctly sized; the toggle has exactly two options; New component is the only primary-weight button on the page.',
      ],
    },
  ],
};
