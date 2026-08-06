// Handoff spec for /prototypes/monitoring/compliance-observations — the authored
// counterpart to the auto-derived capture. Declares which regions are inspectable
// sections (by selector) plus the design intent, decisions, gotchas, and acceptance
// a dev/Claude needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// SCOPE: the four surfaces of the list page — the filter bar, the grid view, the
// map view, and the read-only detail panel. This page is the DRILL-DOWN TARGET for
// the Compliance Dashboard: every donut segment, legend row, and outstanding-item
// row on that dashboard routes here, most of them carrying a ?severity= filter.
//
// The role it models: ESA holds a third-party compliance-inspection position over a
// separate first-party field inspector. That is why the detail panel is READ-ONLY —
// the observation belongs to whoever logged it, and this surface reviews rather than
// edits. Preserve that; an edit affordance here would misstate the relationship.
//
// Fixture data and the Cottonwood Solar + Storage scenario are invented — see the
// header of src/data/monitoring-oversight-fixture.ts. No real project data.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Filter bar (facets + view toggle)',
      selector: '.bcn-filterbar',
      intent:
        'The carded toolbar over the results: a List/Map view toggle, three multi-select facets (Severity, Category, Status), a clear-filters control, and a free-text search across ID, category, area, and inspector. It is the same filter-bar shell the Requirement Tracker, Surveys, and Permits & Studies pages use, so the whole spoke reads as one product.',
      decisions: [
        'The carded shell and the "View" / "Filters" labels are page-composition glue reusing the shared .bcn-filterbar class. Every CONTROL inside is a lego — esa-button-toggle, esa-filter-dropdown x3 inside esa-filter-container, esa-filter-clear-button, esa-text-field. Nothing here is a new primitive.',
        'View is a segmented esa-button-toggle (List | Map), not tabs and not navigation — the two views are peer lenses over the same filtered set, switched in place.',
        'All three facets are multi-select, because a compliance lead filters "needs attention OR non-compliance" far more often than a single severity.',
        'Arriving with ?severity= from the dashboard pre-selects that facet, so the drill-down lands on a filtered list whose controls visibly reflect why it is filtered.',
      ],
      gotchas: [
        'Filters apply to BOTH views. Switching List to Map must carry the active filter set, and the map must re-pin to the filtered rows — a map showing every observation under an active filter is the failure mode to watch for.',
        'The search-clear affordance is hidden until there is a query; keep it hidden rather than disabled, or the toolbar gains a permanently dead control.',
      ],
      acceptance: [
        'Selecting facet values narrows the grid and updates the footer count; clearing restores the full set.',
        'Landing with ?severity= shows that facet already applied, with the value visible in the dropdown.',
        'Switching to Map preserves every active filter and re-pins the map to exactly the rows the grid was showing.',
      ],
    },
    {
      label: 'List view (grid + footer)',
      selector: '#ov-list-pane',
      intent:
        'The default view: the observation set in the shared AG Grid kit already used by Surveys and Permits & Studies, over a footer carrying a CSV download and the record count. Clicking any row opens that observation in the read-only detail panel.',
      decisions: [
        'AG Grid, not a bespoke table — the kit is already the house grid on two other trackers, and the column/sort/resize behaviour comes free and consistent.',
        'Row click opens the detail panel rather than navigating. The list is the workspace; the detail is a peek, so you can review several observations without losing your filter and scroll position.',
        'The footer shows a total AND, when filtering is active, a separate filtered count — so a narrow result set never reads as a small dataset.',
      ],
      gotchas: [
        'The CSV download must export the FILTERED rows, not the whole dataset — exporting everything from a filtered view is a quiet data-accuracy bug that looks like it worked.',
        'Row click is wired through the grid API (onRowClicked), not per-row DOM listeners; rows are virtualised, so DOM-level handlers will silently stop working as you scroll.',
      ],
      acceptance: [
        'The grid lists observations with the filter bar applied; the footer total matches the visible row count.',
        'Clicking any row opens the detail panel for that observation without leaving the list.',
        'Download as CSV produces a file containing exactly the currently filtered rows.',
      ],
    },
    {
      label: 'Map view (interactive)',
      selector: '#ov-map-pane',
      // Third element is the ARIA role: esa-button-toggle renders role="radio",
      // not button. A raw CSS click would not work here — the controls are in the
      // lego's shadow root, and Playwright-only selector extensions would break
      // the inspector's client-side replay of this same recipe.
      apply: [{ clickText: ['#ov-view', 'Map', 'radio'] }],
      intent:
        'The same filtered observation set plotted geographically — BcnObservationMap at full size with interactive={true}, the working counterpart to the dashboard panel\'s static inset. It answers "is this clustered in one area", which the grid cannot show.',
      decisions: [
        'One component serves both surfaces. The dashboard inset passes interactive={false}; this passes true. Two maps that drift apart is exactly the duplication this avoided.',
        'The map is deliberately DUMB: it owns the basemap, pins, tooltips, and fit-to-bounds, and nothing else. A pin click dispatches `bcn-observation-pin-click` on the container and stops there — the HOST decides whether that opens the detail panel, selects a row, or navigates.',
        'Pins are coloured by severity from the same SEVERITY_META source the dashboard donut reads, so a severity is one colour across the whole product.',
      ],
      gotchas: [
        'MULTI-INSTANCE CONTRACT: an Astro <script> is hoisted and bundled ONCE per page, not re-run per instance, so props are NOT visible to it as a closure. Every prop is threaded through the DOM — data-* attributes plus a sibling <script type="application/json"> payload — and the module iterates every [data-bcn-obsmap] on the page, building an independent map per container. Break that and a second map on one page silently takes the first one\'s data.',
        'The map pane starts hidden. Leaflet cannot measure a display:none container, so the map must be sized or invalidated when the pane is first revealed, or it renders as a grey box.',
        'Re-filtering while the map is visible must re-pin and re-fit; a stale fit leaves you zoomed to observations that are no longer in the set.',
      ],
      acceptance: [
        'Switching View to Map replaces the grid with a full-size interactive map pinned to the filtered rows.',
        'Pin colours match the severity colours used by the dashboard donut and the grid status chips.',
        'Changing a filter while the map is open re-pins and re-fits to the new set.',
      ],
    },
    {
      label: 'Detail panel (read-only)',
      selector: '#ov-detail',
      apply: [{ click: '.ag-row' }],
      intent:
        'An esa-side-dialog showing one observation in full — header chips for severity and status over a key-value record of the logged detail. Read-only by design: ESA reviews this log, it does not own it.',
      decisions: [
        'esa-side-dialog (520px) rather than a route or a modal — it keeps the filtered list and scroll position intact behind it, so you can work through several observations in sequence.',
        'Composed from reused bcn-* pieces (BcnKeyValue, BcnStatusChip) with page-composition glue around them, the same pattern as the Permits & Studies detail dialog.',
        'NO edit, resolve, or comment affordance. The first-party inspector owns the observation; adding a write control here would misrepresent who is accountable for it.',
        'The z-stack lifts the panel and backdrop above the fixed topbar (--z-modal 1200 / backdrop 1150, over the topbar\'s 1100).',
      ],
      gotchas: [
        'esa-side-dialog is a CUSTOM (non-native) overlay — clearing the topbar requires raising --z-modal / --z-modal-backdrop on the element, not DOM order.',
        '--_width must carry a unit. A unitless value is a <number> inside the lego\'s length calc, which is invalid at computed-value time and silently collapses the panel to width:auto — it grows to fit its content with no console error.',
        'ONE shared dialog instance serves every row; openDetail() overwrites its contents. The SSR markup is seeded from the first row purely so the panel has structure before any JS runs — do not mistake that seed for the selected record.',
      ],
      acceptance: [
        'Clicking a grid row opens a 520px right side-dialog above the topbar showing that observation\'s severity, status, and full logged detail.',
        'The panel exposes no control that would modify the observation.',
        'Closing returns to the list with filters and scroll position unchanged.',
      ],
    },
  ],
};
