// Handoff spec for the /prototypes/permit-tracking prototype — the authored
// counterpart to the auto-derived capture. It declares which regions are
// inspectable sections (by selector), plus the design intent, decisions, gotchas,
// and acceptance a dev/Claude needs to re-implement each one faithfully in the
// Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by
// the browser. Capture runs against the production preview build.
//
// Context: Permit Tracking (BCN-1266 + BCN-1267 merged, + BCN-1364 collaboration/
// reporting) — Tracking → Permit Tracking, ONE feature behind a 3-tab spine
// (esa-tab-layout, underline):
//   - Map   (panel-0, default) — the four real Phase-1 paths from the client KMZ,
//            colored by DERIVED permitting status, scoped by Paths/Status, with a
//            mileage strip, a clear-to-build timeline, and two insight cards below.
//   - Data  (panel-1) — Permits × Segments as beacon AG Grids behind the
//            requirement-tracker filter bar; permit rows open the editable drawer.
//   - Exec  (panel-2) — leadership rollup, miles-weighted, read-only.
// Two esa-side-dialogs cross both tabs: a READ-ONLY segment dossier and the
// WRITE permit editor (status/timing/segments + a Comments thread). Saving the
// editor re-derives status EVERYWHERE from one client store (map lines, chips,
// grids, mileage strip, timeline, insights, exec rollup).
//
// THE ONE INVARIANT to carry into Angular: segment status is NEVER stored — it is
// always DERIVED from the gating (least-advanced covering) permit, at build time
// here and re-derived in the browser after every edit. Everything visual is a
// projection of the permit set.
//
// Capture notes (how the apply recipes reach each state):
//   - Map/Exec JS content renders at BOOT (renderInsights/renderTimeline/renderExec),
//     so those sections capture on the default tab with no recipe.
//   - The AG GRIDS are LAZY — ensureGrids runs only on Data-tab activation — so the
//     Data sections switch tabs first: { click: 'role=tab[name="Data"]' }.
//   - The drawers open from boot-rendered triggers: a clear-to-build row (.ctb-row)
//     opens the segment dossier; a blocker row ([data-ins-permit]) opens the editor.
// See the typedef in requirement-tracker.mjs for the field shapes.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    // ─────────────────────────────  MAP TAB (panel-0)  ─────────────────────────────
    {
      label: 'Map tab — filter bar & scope',
      selector: '.map-filterbar',
      intent:
        'The Map tab is the hero (default of the 3-tab esa-tab-layout: Map · Data · Executive Summary, deep-linked #map/#data/#summary). Its filter bar carries two scope toggles — Paths (which of the four Phase-1 paths) and Status (which derived statuses) — plus a "Download KMZ" action. The scopes are GLOBAL to the tab: they filter the map AND every figure below it (mileage strip, clear-to-build timeline, insight cards), not just the map layers.',
      decisions: [
        'Two esa-button-toggle legos (Paths, Status), segmented, default "all". They are SCOPES, not layer switches — changing them re-derives the mileage strip percentages, the timeline rows, and the insight counts together, so every figure always agrees with the map.',
        'Download KMZ (esa-button, ghost/outline, download icon) writes a real .kmz (a store-only ZIP of doc.kml) in-browser, paths/segments colored by the committed map palette (scheme 0) so the Google-Earth overlay matches the app — shareable without a Beacon login (BCN-1364).',
        'There is deliberately NO "New Permit" action anywhere on the page: permits ARE source documents; this page is a projection of that data through the permitting lens, not their home.',
      ],
      gotchas: [
        'The toggles scope downstream figures, so re-implementing them in Angular means recomputing the derived mileage/timeline/insights from the filtered segment set — not just toggling Leaflet layer visibility.',
        'KMZ color is KML aabbggr (byte-reversed hex, opaque ff), not #RRGGBB — keep the kmlColor() conversion.',
      ],
      acceptance: [
        'Paths/Status default to "all"; narrowing either re-scopes the map and every figure below it; "Download KMZ" saves a real .kmz whose colors match the map palette.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro'],
    },
    {
      label: 'Status map & legend',
      selector: '.map-legend',
      intent:
        'The Leaflet map of the four real Phase-1 paths (geometry from src/data/aws-routes.json via the client KMZ), each segment colored by its DERIVED permitting status on a readiness ramp — red far from buildable through green "Cleared to Construct". The legend (captured here) is the key; the map answers the one field question: which reaches are ready to build? Clicking a segment opens the read-only segment dossier.',
      decisions: [
        'Segment color = derived status, never a stored field. Status is the LEAST-ADVANCED covering ("gating") permit\'s status; a segment with no gating permit is "cleared". The map, legend, and every figure read the same derived value.',
        'Colors come from a cartographic palette (COLOR_SCHEMES scheme 0) exposed as CSS --st-* vars, so the legend swatches, the map lines, the timeline bars, and the KMZ overlay are one source of truth.',
        'The legend lists STATUS_ORDER (the readiness ramp order), so it reads as a progression, not an arbitrary set.',
        'The map div is third-party Leaflet (zoomSnap 0.25, real attribution); only the legend is design-system DOM, which is why this section captures the legend and documents the map in prose.',
      ],
      gotchas: [
        'Do NOT persist segment status. Re-deriving it from gating permits is the whole architecture — a stored status would drift the moment a permit changes.',
        'Leaflet needs invalidateSize() when its tab/container first becomes visible (the map builds at boot only because Map is the default tab); on a tab framework that hides panels, call invalidateSize on reveal or the map renders at 0×0.',
        'Shared Leaflet chrome lives in src/styles/beacon-map.css (the .leaflet-tooltip restyle) — reuse it, don\'t re-skin per page.',
      ],
      acceptance: [
        'Each path segment is colored by derived status on the red→green readiness ramp; the legend matches those colors in ramp order; clicking a segment opens its dossier.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro', 'src/data/map-fixture.ts'],
    },
    {
      label: 'Mileage by status (burndown)',
      selector: '.burndown',
      intent:
        'A SECONDARY supporting figure under the map: a single full-width stacked bar of route-miles by derived status, headlined "Cleared to Construct {miles} of {total} total · {pct}%", with a per-status legend (miles + percent each). It quantifies what the map shows in color — how much of the route is actually buildable.',
      decisions: [
        'Miles-weighted, never permit counts — route-miles cleared is what lets crews roll. The headline foregrounds the cleared figure; the rest of the ramp is context.',
        'The bar is build-time SSR for a clean first paint, then re-derived in the browser after every permit edit (footageByStatus) so it always agrees with the map and the exec rollup.',
        'Zero-mileage statuses are dropped from the bar but kept in the legend (data-empty) so the ramp stays legible without empty slivers.',
      ],
      gotchas: [
        'It is deliberately secondary — supporting the map, not competing with it. Keep it visually quieter than the map and the timeline headline.',
        'Percentages are of TOTAL route feet, not of the filtered subset, unless the Paths/Status scope is applied — keep the denominator consistent with whatever scope is active.',
      ],
      acceptance: [
        'A stacked miles-by-status bar with a "Cleared to Construct X of Y · Z%" headline and a miles+percent legend; it moves when a permit edit changes derived status.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro', 'src/data/map-fixture.ts'],
    },
    {
      label: 'Clear-to-build timeline',
      selector: '.ctb',
      intent:
        'A horizontal timeline of segments ordered by projected clear-to-build date against a Today tick — the planning companion to the mileage strip (the two headline figures read together). Each row is a segment; its bar runs from Today to the projected clear date, colored by derived status. Clicking a row opens the segment dossier.',
      decisions: [
        'Projected clear date = the latest actual/estimated approval among the segment\'s gating permits (the segment is buildable only once its slowest permit lands).',
        'Rows are sorted by that date so leadership reads "what frees up next" top-to-bottom; a Today tick anchors the axis.',
        'JS-rendered from the same store as the map (renderTimeline at boot), so it re-derives after every permit edit.',
      ],
      gotchas: [
        'Segments with no dated gating permit have no bar (clear date "—"); render the row without a bar rather than dropping it, so the backlog stays visible.',
        'The whole row is the click target → segment dossier (.ctb-row click → openSegment); preserve that affordance.',
      ],
      acceptance: [
        'Segments listed by projected clear date with bars from Today to that date, colored by status; clicking a row opens the segment dossier.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro', 'src/data/map-fixture.ts'],
    },
    {
      label: 'Insight — permits by status (census)',
      selector: '[aria-label="Permits by status"]',
      intent:
        'The left insight card: a census of permits grouped by permitting-ladder status (a count per status). The "where does the whole permit portfolio stand?" snapshot, JS-rendered from the store so it re-derives after every edit.',
      decisions: [
        'Counts PERMITS (not miles) — this card is portfolio health by the permitting ladder, the counterpart to the miles-weighted mileage strip.',
        'Ordered by the permitting-status ladder (PERMIT_STATUS_ORDER) so it reads as a pipeline, not an arbitrary tally.',
      ],
      gotchas: [
        'Permit status (the ladder: not-started → in-preparation → submitted → under-review → issued, plus not-required) is a DIFFERENT vocabulary from the derived SEGMENT status (the readiness ramp). Do not conflate them — this card uses permit status; the map/mileage use derived segment status.',
      ],
      acceptance: [
        'One row per permitting status with a live count, in ladder order; the counts move when a permit\'s status is edited.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro'],
    },
    {
      label: 'Insight — blocking the most mileage',
      selector: '[aria-label="Blocking the most mileage"]',
      intent:
        'The right insight card: the actionable one — pending permits ranked by the route-miles they gate, so leadership sees exactly which approvals would unlock the most construction. Each row is clickable and jumps straight to that permit\'s editor.',
      decisions: [
        'Ranks by route-miles gated, not by permit age or count — it answers "what is the single highest-leverage approval to chase?"',
        'Only pending (not-yet-cleared) permits appear; an issued permit blocks nothing.',
        'Each row carries data-ins-permit and opens the permit editor on click (delegated on .insights) — the insight is a launch point for action, not a dead readout.',
      ],
      gotchas: [
        'The mileage a permit gates counts only segments where it is the GATING (least-advanced) permit — a permit behind an even-less-advanced one on the same segment is not what is blocking that segment.',
        'Keep the row → editor jump (openPermit); without it the card is just a chart and loses its point.',
      ],
      acceptance: [
        'Pending permits ranked by gated route-miles; clicking a row opens that permit\'s editor drawer.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro'],
    },

    // ─────────────────────────────  DATA TAB (panel-1)  ─────────────────────────────
    {
      label: 'Data tab — filter bar',
      selector: '.bcn-filterbar',
      apply: [{ click: 'role=tab[name="Data"]' }],
      intent:
        'The Data tab\'s filter bar, ported from the requirement-tracker idiom: a View toggle that PIVOTS the grid between Permits and Segments, a keyword search, and Status + Level filter dropdowns in an esa-filter-container, with a clear-all. It drives whichever grid is active.',
      decisions: [
        'View is an esa-button-toggle pivot (Permits | Segments) that swaps the visible grid pane, not two separate screens — same filter bar serves both.',
        'Filters are esa-filter-dropdown (multiple) inside esa-filter-container with an esa-filter-clear-button — the shared Beacon filter-bar composition, not bespoke selects.',
        'Search has its own inline clear (esa-icon-button x), shown only when there is a query.',
        'The Level dropdown is wrapped (#flt-level-wrap) so it can be hidden in the Segments pivot where agency level is not a column.',
      ],
      gotchas: [
        'This whole tab is LAZY: the AG Grids are created only when the Data tab is first activated (ensureGrids). The filter bar is light-DOM markup so it exists earlier, but the grids it controls do not — capture/recipes must activate the tab first.',
        'The pivot must re-point the filter bar at the active grid (status/level options differ between permits and segments); do not keep two stale filter states.',
      ],
      acceptance: [
        'View toggles the grid between Permits and Segments; Status/Level dropdowns and search filter the active grid; clear resets all; search-clear shows only with a query.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro'],
    },
    {
      label: 'Data tab — bulk status bar',
      selector: '#bulk-bar',
      apply: [{ click: 'role=tab[name="Data"]' }],
      intent:
        'A contextual action bar that appears above the Permits grid when one or more rows are checkbox-selected: a live "{n} selected" count, a "Set status…" esa-select, an "Apply status" primary action, and "Clear selection". It is the multi-permit write path (one status across many permits at once).',
      decisions: [
        'Hidden until selection (#bulk-bar[hidden]); it is a selection-scoped surface, not a permanent toolbar.',
        'Applying a status writes to every selected permit and then RE-DERIVES segment status everywhere (map, mileage, timeline, insights, exec) — the same re-derivation a single edit triggers, batched.',
        'Permits-grid only — segments have no editable status (theirs is derived), so the pivot to Segments hides this path.',
      ],
      gotchas: [
        'This section captures the bar in its HIDDEN structure (revealing it requires selecting grid rows). In the app, drive its visibility off the grid selection model and keep the count in sync with deselectAll/Clear selection.',
        'After a bulk apply, re-derive and repaint all dependent figures — a bulk edit that updates only the grid would desync the map and rollup.',
      ],
      acceptance: [
        'Selecting permit rows reveals the bar with a live count; "Apply status" sets the chosen status on all selected and re-derives every dependent figure; "Clear selection" hides it.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro'],
    },
    {
      label: 'Data tab — Permits / Segments grids',
      selector: '#pane-permits',
      apply: [{ click: 'role=tab[name="Data"]' }],
      intent:
        'The data workspace: Permits × Segments as AG Grids built on the shared beacon-grid kit (the same theme + status-cell renderer as requirement-tracker), so the prototype reads as the real Beacon app. Permit rows open the EDITABLE drawer; segment rows open the read-only dossier.',
      decisions: [
        'beaconTheme + makeStatusRenderer from src/lib/beacon-grid — the single grid kit shared across Tracking pages; columns mirror the live Beacon views.',
        'Two grids behind one pivot (panes #pane-permits / #pane-segments); the inactive pane is hidden, not destroyed.',
        'Row click is the open affordance: onRowClicked → openPermit (permits) / openSegment (segments). Permits are the write surface; segments are read-only (status derived).',
        'Permits grid rows are checkbox-selectable to feed the bulk status bar.',
      ],
      gotchas: [
        'Grids are LAZY (ensureGrids on first Data activation) — the recipe switches tabs before the grid exists; in Angular, instantiate on tab init and call sizeColumnsToFit on reveal.',
        'Editing here re-derives the whole store — a permit status change in the grid must repaint the map, mileage, timeline, insights, and exec rollup, not just the cell.',
        'Keep the two grids on the shared beacon-grid kit; do not hand-roll a second table style.',
      ],
      acceptance: [
        'Permits and Segments render as themed AG Grids matching the Beacon grid kit; clicking a permit row opens the editor, a segment row opens the dossier; the pivot swaps panes.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro', 'src/lib/beacon-grid.ts'],
    },
    {
      label: 'Data tab — table footer',
      selector: '.table-footer',
      apply: [{ click: 'role=tab[name="Data"]' }],
      intent:
        'The grid footer (Beacon\'s standard pattern): "Download as CSV" on the left, a live "Total Records: {n}" on the right with a separate filtered-count when a filter is narrowing the set.',
      decisions: [
        'Download CSV (esa-button ghost/outline, download icon) exports the ACTIVE grid (permits or segments) honoring the current filter — what you see is what you export.',
        'Total vs filtered are two distinct counts: total is the full set, the filtered count appears only when filters are active (the Beacon convention).',
      ],
      gotchas: [
        'The filtered count must hide when no filter is active (#pt-filtered[hidden]) — showing "N of N" always reads as a bug.',
        'CSV export follows the active pivot + filters; do not always export permits.',
      ],
      acceptance: [
        'Footer shows total records, adds a filtered count only when filtering, and "Download as CSV" exports the active, filtered grid.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro'],
    },

    // ───────────────────────  EXECUTIVE SUMMARY TAB (panel-2)  ───────────────────────
    {
      label: 'Exec — hero band (% + KPIs + donut)',
      selector: '.exec__hero',
      apply: [{ click: 'role=tab[name="Executive Summary"]' }],
      intent:
        'The leadership rollup hero: a headline "% of the route cleared to construct" with two KPI stats (route-miles cleared in the past 14 days, and the forecast full-route clear date), beside a status donut of route-miles with a centered % and a legend. Read-only; every figure re-derives from the same store as the Map/Data tabs.',
      decisions: [
        'The headline number and KPIs are esa-stat inside esa-card — the KPI numbers are legos; only the donut is bespoke micro-viz (the same value-colored class canonicalized in BcnMonitoringStats).',
        'Miles-weighted throughout — route-miles cleared, never permit counts, because miles cleared is what lets crews roll.',
        'The 14-day trend is computed against the frozen reportHistory (the "since last review" delta); the forecast date is the projected full-route clear if current agency estimates hold (sub-labeled as such — it is a forecast, not a commitment).',
        'An "As of {timestamp}" stamp marks when the rollup was opened.',
      ],
      gotchas: [
        'Exec content renders at BOOT (renderExec), but the burn-up sibling redraws at real width only when the tab is revealed (0→real); the recipe activates the tab so the captured state is the revealed one.',
        'The trend sign/icon flips with the delta (trending-up vs down) — drive the icon from the value, do not hard-code up.',
        'Forecast is conditional ("if agency estimates hold") — keep that caveat; presenting it as a fixed date overstates certainty.',
      ],
      acceptance: [
        'Hero shows the cleared % headline, a 14-day miles trend KPI (signed, correct icon), a forecast full-route clear date with its caveat, and a status donut whose center % matches the headline.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro', 'src/data/map-fixture.ts'],
    },
    {
      label: 'Exec — clearance by path',
      selector: '#exec-paths',
      apply: [{ click: 'role=tab[name="Executive Summary"]' }],
      intent:
        'One stacked status bar per path (route-miles by derived status), stacked top-to-bottom so the four paths are directly comparable — each path is a separately-scoped build crew, so leadership reads which crew is most/least unblocked.',
      decisions: [
        'Per-path, miles-weighted stacked bars sharing the map\'s status palette so a path here reads the same as its lines on the map.',
        'Comparable scale across paths (same axis), so the bars answer "which path is furthest along?" at a glance.',
      ],
      gotchas: [
        'Each bar is scoped to ONE path\'s segments; keep the per-path denominators independent (a path that is short in miles can still be 100% cleared).',
      ],
      acceptance: [
        'Four stacked miles-by-status bars, one per path, sharing the map palette and a common scale; they re-derive when a permit edit changes status.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro', 'src/data/map-fixture.ts'],
    },
    {
      label: 'Exec — route cleared over time (burn-up)',
      selector: '.exec__burnup',
      apply: [{ click: 'role=tab[name="Executive Summary"]' }],
      intent:
        'A burn-up chart: cumulative route-miles cleared to date (the actual trail from frozen reporting history) plus the projected path to full clearance from current agency estimates, against the full-route target line. Momentum — are we on pace?',
      decisions: [
        'Three series, keyed in the legend: actual miles cleared, projected clearance, and the full-route target ({total} miles). Actual is history; projected is the forecast continuation.',
        'Drawn as an SVG sized to the container\'s real pixel width (a ResizeObserver redraws on resize and when the tab first reveals it) so the axis text stays at true size, never CSS-scaled.',
      ],
      gotchas: [
        'On boot the Summary panel is not the active slot, so clientWidth is 0 and the chart first draws at a 760px fallback; it MUST redraw at real width when revealed — wire the ResizeObserver (or an Angular afterViewInit/resize equivalent) or the labels render mis-sized.',
        'Projected ≠ committed — it is "if agency estimates hold"; keep it visually distinct (dashed/lighter) from the actual trail.',
      ],
      acceptance: [
        'A burn-up with an actual-cleared trail, a projected continuation, and a full-route target line, correctly sized to the container on reveal and resize.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro', 'src/data/map-fixture.ts'],
    },

    // ─────────────────────  CROSS-TAB DIALOGS (reachable from both)  ─────────────────────
    {
      label: 'Segment drawer (read-only dossier)',
      selector: '#segment-dialog',
      apply: [{ click: '.ctb-row' }],
      intent:
        'The read-only segment dossier (esa-side-dialog, 640px), reachable from BOTH tabs (map click, clear-to-build row, or segments grid). It shows the segment\'s identity + derived status, its meta (path, build phase, projected clear-to-build, length, jurisdiction, contractor), and the list of covering permits — with the GATING permit flagged. Each covering permit jumps to its editor.',
      decisions: [
        'Read-only by design: a segment has no editable fields — its status is DERIVED. To change anything you go to a covering permit (the rows link to the editor).',
        'The covering-permits list marks the gating permit with a tooltip-explained "Gating" tag ("least-advanced covering permit — its status sets this segment\'s status"), making the derivation legible.',
        'Rows are cloned from an SSR <template> (not innerHTML strings) so the BcnStatusChip markup and Astro scoped styles stay the single source.',
        'Header pairs the segment title with a BcnStatusChip of the derived status; a count esa-badge labels the covering-permits list.',
      ],
      gotchas: [
        'Do not add edit controls here — routing edits through the covering permit is what keeps status derivation honest.',
        'The gating flag must track the CURRENT least-advanced permit after edits, not a stored flag.',
        'z-stack: the segment drawer sits at --z-modal 1300 (above the topbar 1100); the permit editor opened from it stacks higher (1340).',
      ],
      acceptance: [
        'Opening a segment shows its derived-status header, meta, and covering permits with the gating one tagged; clicking a covering permit opens that permit\'s editor; nothing in the dossier is editable.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro', 'src/components/bcn/BcnStatusChip.astro'],
    },
    {
      label: 'Permit editor (write surface)',
      selector: '#permit-dialog',
      apply: [{ click: '[data-ins-permit]' }],
      intent:
        'The write surface (esa-side-dialog, 640px): edit a permit\'s Status, Timing (submitted / estimated / actual approval), and Segment applicability; read its Details (agency / level / type — source-document data); collaborate in a Comments thread (@-mention); and read the Activity log. Saving re-derives status across the entire feature.',
      decisions: [
        'Sectioned with icon-led heads: Status (esa-select), Timing (esa-date-picker ×3), Segments (esa-input-tag, strict + tags-below — segments are a fixed vocabulary), then read-only Details (BcnKeyValue), Comments, and Activity.',
        'Details are READ-ONLY: agency/level/type are source-document facts; this drawer edits status, timing, and applicability — not the permit\'s identity.',
        'Comments (BCN-1364) is a real collaboration thread DISTINCT from the read-only Activity log: an esa-textarea compose with an @-mention typeahead that feeds notifications; it is rendered live per-permit (so it cannot be the static BcnDiscussion SSR component).',
        'Activity is seeded from the permit\'s own dates so it reads with history on day one, and grows as edits land. Save re-derives everywhere; Cancel discards.',
      ],
      gotchas: [
        'Saving MUST re-derive and repaint every dependent surface (map lines, chips, grids, mileage strip, timeline, insights, exec rollup) from the updated store — the editor is the origin of the whole re-derivation cascade.',
        'Segment applicability is strict (fixed vocabulary) — do not allow free-text segment tags.',
        'The @-mention menu is a live typeahead over project users; mentions drive the notification rules (see the settings dialog), so keep the user list and the notify path connected.',
        'z-stack: editor at --z-modal 1340 so it stacks above the segment drawer (1300) it can be opened from.',
      ],
      acceptance: [
        'Opening a permit shows editable Status/Timing/Segments, read-only Details, a live Comments thread with @-mention, and a seeded Activity log; Save re-derives status across the map, grids, and rollup; Cancel discards.',
      ],
      js: [
        'src/pages/prototypes/permit-tracking.astro',
        'src/components/bcn/BcnKeyValue.astro',
        'src/components/bcn/BcnStatusChip.astro',
      ],
    },
    {
      label: 'Notification settings (global prefs)',
      selector: '#notif-dialog',
      apply: [{ click: '#notif-open' }],
      intent:
        'A GLOBAL, per-user preferences dialog (esa-dialog) opened from the page utilities "Notifications" button — email-me-when rules for the whole Permit Tracking feature, across every path and permit (BCN-1364). Four esa-switch-toggle rows, each with a title + sub explaining the trigger.',
      decisions: [
        'Per-user, feature-global (not per-permit): the lede makes clear these are personal preferences that do not change what teammates receive.',
        'Sensible defaults: status-change, segment-cleared, and @-mention ON; "any comment posted" OFF (high volume) — defaults encode the signal/noise judgment.',
        'esa-dialog (centered) not a side-dialog — it is a settings modal, not an inspector; esa-switch-toggle rows are the lego for on/off prefs.',
      ],
      gotchas: [
        'Keep it global/per-user — do not let it drift into per-permit settings; per-permit subscription is a different feature.',
        'The @-mention rule ties back to the editor\'s mention typeahead — the two must reference the same user/notify model.',
        'z-stack: notifications at --z-modal 1400, above both drawers, since it is opened from the always-visible page utilities.',
      ],
      acceptance: [
        'The Notifications utility opens a centered dialog of four toggle rows with the documented defaults (comment-posted off); Save/Cancel close it; preferences are framed as personal and feature-global.',
      ],
      js: ['src/pages/prototypes/permit-tracking.astro'],
    },
  ],
};
