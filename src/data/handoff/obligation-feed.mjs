// Handoff spec for the obligation feed (/prototypes/obligation-feed), the authored
// counterpart to the auto-derived capture. It declares which regions are inspectable
// sections (by selector), plus the design intent, decisions, gotchas, and acceptance a
// dev/Claude needs to re-implement each one in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; interactive states are
// reached with an `apply` recipe (the drawer and the remove guard are opened).
//
// Context: the Feed half of Kim's Obligation Tracking (/prototypes/obligation-tracking),
// copied onto its own route and polished with the Lists work (Andy, 2026-09-23). The unit
// is a RECORD: anything that arrived from any source and relates to an obligation, as
// Triggered (it made the duty owed) or Evidence (it shows the duty being met). Fixture:
// src/data/obligation-feed.ts, which wraps Kim's events and adds the other sources.

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

const PANE = '.bcn-fw__pane:not([hidden])';

/** @type {{ sections: HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Title + component switcher',
      selector: '.page-layout__title',
      intent:
        'The H1 "Obligations" with the standard project-component switcher inline beside it, the same bcn-component-picker the Monitoring Portal uses.',
      decisions: [
        'The switcher is the page\'s ONLY component scope. The filter row\'s Component picker and the component/implementation rows under each obligation card were both cut as duplicates of it (Andy, 2026-09-23).',
        'The choice is one session-wide value (localStorage beacon.activeComponent), shared with Monitoring and Reporting, not per page.',
      ],
      gotchas: [
        'In the prototype the switcher does not yet filter the records: it offers the geotech register while the feed\'s records carry the 7 DCP construction components. In prod the records must be keyed to the same component register the switcher offers.',
      ],
      acceptance: ['Changing the component re-scopes every view to records on that component.'],
    },
    {
      label: 'View tabs',
      selector: 'esa-tab-layout.bcn-feed',
      intent:
        'Four cuts of one record set as icon tabs: All (inbox), Important (star: records touching the reader\'s saved categories), To-do (checklist: records that owe a notice), Pinned (pin: records touching a pinned obligation). The view rides ?view=.',
      decisions: [
        'Kim\'s outer Feed / Registry segmented row is gone: this page is the feed alone.',
        'Icons ride esa-tab-layout\'s own tab.icon (a full inline SVG string), so the tabs need no custom CSS.',
        'Every view reads by record. Kim\'s By record / By obligation pivot on Important and Pinned was cut (Andy, 2026-09-23).',
      ],
      acceptance: ['Each tab shows its own rail and pane; reloading with ?view=pinned opens Pinned.'],
    },
    {
      label: 'Filter row',
      selector: '.bcn-fw .bcn-swfr',
      intent:
        'Search records, Source (which stream a record arrived from), and a 30 days / 90 days / All range. The filters narrow the RECORDS in the rail, never the obligations inside the open record.',
      decisions: [
        'No Component picker: the switcher beside the H1 owns component scope.',
        'If the open record is filtered out, the first surviving record opens; if none survive, the pane shows an empty state.',
      ],
      acceptance: ['Search, Source and range AND together; empty date groups hide; clearing restores the rail.'],
    },
    {
      label: 'Records rail',
      selector: '.bcn-fw__rail',
      intent:
        'A mail list: a pale grey panel of two-line cards (source + time, then the title on one line), grouped Today / Yesterday / This week / This month / Older under sticky date heads.',
      decisions: [
        'The selected record is the brand fill with on-brand text, like a highlighted message.',
        'No per-source coloured icons and no rail header band (Andy, 2026-09-23).',
        'The rail is a listbox: Up/Down move the selection and open the record.',
        'The rail sticks under the topbar and scrolls on its own; overflow-anchor: none, so growing the open record never shifts the rail.',
      ],
      gotchas: [
        'The page scroller starts below a 52px fixed topbar: size the rail to 100vh minus the topbar and its insets, or its bottom slides out of reach.',
        'Put the sticky date head\'s top padding ON the head (plus a thin same-colour shadow above it), not on the scroller, or text shows above the stuck head.',
      ],
      acceptance: ['Scrolling the rail keeps each date head clean; opening a long record leaves the rail where it was.'],
    },
    {
      label: 'Record report',
      selector: `${PANE} .bcn-frec`,
      intent:
        'The open record as one contained report: a pale grey header band with the source, the title, the way out to the full record ("Open in <stream>"), and five label/value pairs (Received, Component, Location, Submitted by, Channel); then the summary, the files, and the obligations it relates to.',
      decisions: [
        'esa-card with a light shadow AND its border and radius (the elevated variant drops the border, so the shadow sits on a wrapper).',
        'Source-specific detail (buffer distance, weather, species) is not repeated here. It lives on the record\'s own page.',
        'The Obligations heading carries a live count and one verb, Add obligations. Expand all / Collapse all were cut with the nested rows.',
      ],
      acceptance: ['Every source renders the same five facts; the count follows adds and removes.'],
    },
    {
      label: 'Obligation card',
      selector: `${PANE} .bcn-foc`,
      intent:
        'One obligation linked to the record: a flat Lists slim card with the class chip, the title and the relation mark (Triggered in the notify hue, Evidence in grey), and two hover verbs hard right: pin, and x to remove from this record.',
      decisions: [
        'Flat: no component/implementation children. The switcher already scopes the page (Andy, 2026-09-23).',
        'Pin is per reader and follows every copy of the same obligation on the page. A pinned card keeps its pin showing; an unpinned one shows it on hover.',
      ],
      acceptance: ['Pin and x sit at the right edge of every card; pinning one card pins its twins in the other views.'],
    },
    {
      label: 'Add obligations drawer',
      selector: '#bcn-fwl',
      apply: [{ click: `${PANE} [data-fw-link]` }],
      intent:
        'A right-hand side panel for linking more obligations to the open record: the record named at the top, a search, facet filters, and the obligation registry as a category / subcategory checkbox tree. "Link to record" adds the checked ones as Evidence.',
      decisions: [
        'A link added by hand is always Evidence. The Link-as (Evidence / Triggered) choice was cut: only a source can make a duty owed (Andy, 2026-09-23).',
        'Obligations the record already holds are hidden from the tree.',
        'Same tree, facets and search as the Lists add-obligations drawer.',
      ],
      acceptance: ['Linking adds the cards to the record in every view and updates the count; relinking the same obligation is impossible.'],
    },
    {
      label: 'Remove guard',
      selector: 'esa-confirm-dialog[data-fwl-confirm]',
      apply: [{ click: `${PANE} [data-fw-unlink]` }],
      intent:
        'The confirm behind the x: "Remove from this record?" with the line "<obligation> comes off this record. The record and the obligation both stay."',
      decisions: ['Unlinking removes the link only; it deletes neither the record nor the obligation.'],
      acceptance: ['Confirming removes the card from every view of the record and updates the count; cancelling changes nothing.'],
    },
  ],
};
