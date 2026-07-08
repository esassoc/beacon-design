// Handoff spec for the /prototypes/site-clearance-bio prototype — the authored
// counterpart to the auto-derived capture. It declares which regions are
// inspectable sections (by selector), plus the design intent, decisions, gotchas,
// and acceptance a dev/Claude needs to re-implement each one faithfully in the
// Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by
// the browser. Capture runs against the production preview build.
//
// Context: Site Clearance — Biological (the BCN-1337 build spec). A go/no-go
// biological clearance surface for a component's work areas, scoped to a single
// COMPONENT by an inline picker beside the page title (persisted in browser
// storage; the 231 real KMZ sites live under 2024-2029 Geotechnical Activities).
// Three tabs behind an esa-tab-layout (underline):
//   - Map      (panel-0, default) — Leaflet map of the component's work areas
//              colored by DERIVED biological status, the View segmented bar
//              (All + one pill per display status, live counts), a Status
//              dropdown, the Component Buffer overlay control, a status legend,
//              and a readiness census strip.
//   - Data     (panel-1) — Work Areas × Observations as beacon AG Grids behind
//              the requirement-tracker filter bar; a row opens the drawers.
//   - Activity (panel-2) — the clearance history feed (reviews, notes, live
//              edits), date-grouped. History only — NO Timeline tab, NO
//              Upcoming rail, NO forecasting anywhere.
// Two esa-side-dialogs cross every tab: the WRITE work-area drawer (site-details
// band + the review history with its inline Add/Edit form + a Comments thread +
// Notes/Activity folds) and a READ-ONLY observation drawer. Saving a review
// re-derives status EVERYWHERE from one client store (map markers, chips,
// grids, readiness strip, feed).
//
// THE ONE INVARIANT to carry into Angular: work-area clearance status is NEVER
// stored — it is always DERIVED. The LATEST review's outcome (every review
// carries a required outcome: Cleared / Inaccessible / Blocked) sets the
// status; no reviews = "Not Surveyed". PROVISIONAL BLOCK renders ONLY on a
// work area with NO recorded review that an active observation buffer covers —
// ANY recorded review status overrules the provisional display ("the system
// detects, humans decide"). No blocked-until date, no estimated end date, no
// planned-start date exists anywhere in the model.
//
// Fixture note: this page imports src/data/geotech-fixture-bio.ts — now a
// SELF-CONTAINED bio fixture shaped exactly like the epic's data model
// (ClearanceReview with required outcome + configurable kind, append-only
// ClearanceNote records, the fixed 3-status set + 2 derived display states).
// The old cross-discipline model lives on in geotech-fixture.ts for the
// deferred site-clearance.astro prototype only.
//
// Capture notes (how the apply recipes reach each state):
//   - Map/Activity JS renders at BOOT, so Map sections capture on the default
//     tab with no recipe; Activity just switches tabs so its panel is visible.
//   - The AG GRIDS are LAZY — ensureGrids runs only on Data-tab activation — so
//     the Data sections switch tabs first: { click: 'role=tab[name="Data"]' }.
//   - The WORK-AREA drawer opens from Activity feed rows: switch to Activity,
//     then click a [data-wa] feed entry. DCTR2-DH-010 (recorded block + note +
//     seeded comments) captures the RICH drawer. :nth-match(…, 1) guarantees a
//     single match (the same id can appear on several feed dates).
//   - The OBSERVATION drawer no longer has feed entries (the feed is clearance
//     history only) — open it from the Data tab's Observations grid: switch to
//     Data, flip the pivot toggle, click the first row.
// See the typedef in requirement-tracker.mjs for the field shapes.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    // ─────────────────────────────  PAGE CHROME  ─────────────────────────────
    {
      label: 'Component picker (inline beside the H1)',
      selector: '.comp-picker',
      intent:
        'The single-select Component picker that scopes the whole page — map, grids, and activity all read the selected component. It renders as a quiet text+chevron trigger beside the page title (NOT a form-field dropdown) and opens an esa-dropdown-menu over the real component register. The selection persists in browser storage, so returning to the page reopens the last-selected component.',
      decisions: [
        'Placement is title-adjacent (the PageLayout title-badge slot), because the component IS the page subject — "Site Clearance · <component>" reads as one heading, not a filter.',
        'The trigger is a borderless text button with a chevron-down, deliberately quieter than the Besley H1 beside it; the esa-dropdown-menu lego supplies the panel, outside-click, and Esc behavior.',
        'The active component carries the menu item\'s leading dot as the selected marker; picking one re-scopes every surface, clears the status facets, closes any open drawer (it belonged to the old scope), and refits the map to the component\'s sites.',
        'A component with no geo-located work areas (every one but the geotech program in this fixture) renders the map\'s esa-empty-state, an empty grid, and an empty feed — the page never pretends.',
      ],
      gotchas: [
        'Persist the selection (localStorage here; user profile/state in prod) and validate it against the live component list on boot — a stale saved value must fall back to the default, not crash the scope.',
        'The SSR-rendered counts assume the default component; the boot path re-derives the View-bar counts for the persisted selection before first paint of the bar.',
      ],
      acceptance: [
        'The picker lists the tenant\'s components with the active one marked; selecting re-scopes map/grid/activity and refits the map; the choice survives a reload; an empty component shows the empty state instead of stale markers.',
      ],
    },

    // ─────────────────────────────  MAP TAB (panel-0)  ─────────────────────────────
    {
      label: 'Map tab — View segmented bar & filter row',
      selector: '.map-panel .map-filterbar',
      intent:
        'The Map tab is the hero (default of the 3-tab esa-tab-layout: Map · Data · Activity). Its bar carries two rows: a View row (the segmented status bar — All + one pill per display status, each with its live count — plus two "Go to work area / Go to observation" autocomplete comboboxes) and a Filters row (a Status facet dropdown, the clear button, and the Component Buffer layer control). The scopes are GLOBAL to the tab — they filter the map markers AND the readiness strip below it together, so the census figure always agrees with what is drawn.',
      decisions: [
        'The View segmented bar (esa-button-toggle, size md) is the PRIMARY status scoping per the epic: All (N) · Cleared (N) · Blocked (N) · Inaccessible (N) · Not Surveyed (N). It is a shortcut over the SAME facet state the Status dropdown edits — one source of truth. Pressing a pill sets the facets; a pill reads as selected only while the facets exactly equal its set, so hand-editing the dropdown drops back to no-pill. Counts ride the labels as plain text.',
        'Provisional blocks count under the Blocked pill — on a go/no-go surface "Blocked" means everything red, solid or hollow. The finer split stays visible in the legend and readiness strip.',
        'The two "Go to…" comboboxes (esa-combobox, autocomplete) are JUMPS, not filters: type-ahead or pick any of the component\'s work-area IDs / any observation → pan/zoom + pulse the marker (no drawer opens), then reset to the placeholder.',
        'There is NO Planned-start filter — no forecasting dates exist in the model. The Status dropdown is the only facet, kept alongside the View bar for multi-status combinations the pills cannot express.',
        'The Work Area Buffer control (BCN-1454\'s Component Buffer) rides the Filters row\'s right edge: an esa-switch-toggle for the layer and a pencil (esa-icon-button) opening the minimal edit dialog — the buffer\'s label and distance live in the dialog, not the bar.',
      ],
      gotchas: [
        'The facets scope the readiness strip too, so re-implementing them in Angular means recomputing the derived status census from the filtered work-area set — not just toggling Leaflet marker visibility.',
        'Pill "selected" is a derived equality check against the live facets, not a stored mode — do not persist the active pill or it will lie the moment the dropdown is hand-edited.',
        'The View-bar counts re-derive after every review save (a save can move a work area between pills).',
      ],
      acceptance: [
        'The View bar shows All + the four display statuses with live counts; a pill sets the Status facet and reads selected only while they match; hand-editing the facet clears the pill; "Go to…" pans/pulses without opening a drawer; narrowing a facet re-scopes both the map and the readiness strip.',
      ],
    },
    {
      label: 'Status map & legend',
      selector: '.map-legend',
      intent:
        'The Leaflet map of the component\'s work areas (geometry from the client KMZ shapefile import), each marker colored by its DERIVED biological status, plus observation buffer rings and a Map/Satellite base-layer control. The legend (captured here) is the key; the map answers the field question: which sites are cleared to work, and which sit inside an active nesting buffer? Clicking a marker opens the work-area drawer; clicking an observation ring/dot opens the observation drawer.',
      decisions: [
        'Marker color = derived status, never a stored field. The LATEST review\'s outcome is the status; no reviews = Not Surveyed (grey). A work area with NO recorded review that an active observation buffer covers renders PROVISIONAL BLOCK — hollow red. Any recorded review status overrules the provisional display: a reviewed-Cleared site inside a buffer stays green.',
        'Provisional-block is the HOLLOW swatch — white fill, red stroke: "blocked, but not solidified" — the exact grammar the map markers use, so a hollow marker and a hollow legend dot tell the same story.',
        'The legend also documents the two observation glyphs: a buffer RING (an active observation\'s own BufferDistanceFt) and a HOLLOW sighting (tracking-only, buffer 0 — informational, never blocks).',
        'A Leaflet layers control offers Map / Satellite base tiles — the Component Buffer overlay is a satellite-mode analysis tool, so the imagery base ships with it.',
      ],
      gotchas: [
        'Do NOT persist work-area status. Re-deriving it from the review history + live buffers is the whole architecture — a stored status would drift the moment a review is added or an observation is logged.',
        'The provisional check is review-PRESENCE, not review-outcome: one recorded review of ANY outcome removes the site from provisional-block eligibility forever after (until reviews are deleted).',
        'Leaflet needs invalidateSize() when its container first becomes visible; "tracking-only" sightings (bufferFt 0) must never escalate a work area.',
      ],
      acceptance: [
        'Each work-area marker is colored by derived status; a no-review site inside an active buffer renders hollow red and the legend counts it; a reviewed site inside the same buffer keeps its review color; observation buffers render as rings; the base-layer control swaps Map/Satellite.',
      ],
    },
    {
      label: 'Readiness strip',
      selector: '.readiness',
      intent:
        'The census figure below the map (Map tab ONLY — never repeated on Data or Activity): the "Ready to work N of M work areas" headline over a single stacked "Work areas by clearance status" bar, with a per-status legend carrying live counts. It answers "how close is the program to clear?" at a glance and is scoped by the same Map filters as the markers.',
      decisions: [
        'One horizontal stacked bar, segments in STATUS_ORDER (worst → best), each sized by its share of the total — the bar reads as a progression toward "ready".',
        '"Ready to work" counts Cleared only — Inaccessible and every flavor of red are not workable.',
        'Provisional-block gets a red/white DIAGONAL STRIPE (repeating-linear-gradient), not a solid fill — same "not solidified" story as the hollow markers.',
        'Counts (bar segments, headline, legend) all derive from statusCounts() over the filtered set — one computation feeds every number so they can never disagree.',
      ],
      gotchas: [
        'The strip is scoped by the Map facets, so its numbers are of the FILTERED set, not the whole component — the denominator must stay honest when a filter is active.',
        'The strip hides entirely for an empty component (a census of nothing reads wrong); the map\'s empty state carries that story instead.',
      ],
      acceptance: [
        'The bar sums to the (filtered) total; provisional-block renders as a diagonal stripe; the "Ready to work N of M" headline counts Cleared only; every legend count agrees with the bar and updates when a Map facet changes.',
      ],
    },

    // ─────────────────────────────  DATA TAB (panel-1)  ─────────────────────────────
    {
      label: 'Data tab — filter bar, grid toggle & search',
      selector: '.bcn-filterbar',
      apply: [{ click: 'role=tab[name="Data"]' }],
      intent:
        'The Data tab is the tabular workspace: the requirement-tracker filter bar over two beacon AG Grids — Work Areas and Observations — pivoted by a single toggle. The bar carries the pivot toggle, a global search (AG Grid quick filter), and a Status facet; Clear all resets the search, the facet, and every AG Grid column filter at once. A work-area row opens the write drawer; an observation row opens the read-only observation drawer.',
      decisions: [
        'Work Areas columns are the epic\'s exact set: ID, derived Status chip, Visit Date (the clearance-visit date), and the Work Area CUSTOM FIELDS as columns — Method, Depth (ft), Parcel/DCPN, County, Entry Agreement (the custom-fields-as-columns pattern). NO notification / planned-start / blocked-until columns: forecasting is out of scope.',
        'Observations columns: ID, Species, Kind, Status, Buffer (ft), First Observed, and Work Areas Affected — the count of work areas the observation\'s active buffer covers, reusing the provisional-block intersection. NO Est. End column: the observation carries no estimated-end date.',
        'The search box drives AG Grid\'s global (quick) search on the active grid; the Status facet is the same esa-filter-dropdown lego as the Map bar.',
        'The grids use the shared beaconTheme + makeStatusRenderer so the status cell renders the SAME chip/derived color as the map and drawer.',
      ],
      gotchas: [
        'The AG Grids are LAZY — ensureGrids runs only on Data-tab activation. Any capture/automation must switch to the tab first.',
        'Clear all must reset three things at once: the quick search, the Status facet, and the per-column AG Grid filter models on BOTH grids.',
        'Status is the derived value in the grid too; do not add a stored status column.',
      ],
      acceptance: [
        'The pivot toggle swaps Work Areas ↔ Observations; the Work Areas grid shows ID/Status/Visit Date + the five custom-field columns and nothing date-forecasted; the Observations grid has no Est. End; search + Status + Clear all behave as one reset; rows open the correct drawers.',
      ],
    },
    {
      label: 'Data tab — table footer & CSV',
      selector: '.table-footer',
      apply: [{ click: 'role=tab[name="Data"]' }],
      intent:
        'The footer under the grids: a "Download as CSV" action on the left and a live "Total Records / filtered" count on the right — the standard beacon table chrome.',
      decisions: [
        'Total shows the active component\'s full count; a separate filtered count appears only while a filter/search narrows the set.',
        'Download as CSV exports the ACTIVE grid\'s current (filtered) rows — the pivot + filters define what you get.',
      ],
      gotchas: [
        'The count is of the active pivot pane AND the active component; switching either changes both the total and what CSV would export.',
      ],
      acceptance: [
        'Total reflects the active grid; a filtered count appears only when narrowed; CSV exports exactly the rows currently shown.',
      ],
    },

    // ─────────────────────────────  ACTIVITY TAB (panel-2)  ──────────────────────────
    {
      label: 'Activity — clearance history feed',
      selector: '.feed',
      apply: [{ click: 'role=tab[name="Activity"]' }],
      intent:
        'The component-level clearance history: a single-column, date-grouped feed of recorded reviews, monitor notes, and live in-session edits. History ONLY — there is no Upcoming rail and no forward-looking entry of any kind; Beacon records what happened, it never forecasts. A Type filter scopes the feed; every entry jumps to its work-area drawer. One drawer save lands in BOTH the drawer\'s Activity fold and this feed.',
      decisions: [
        'Feed entries are the deterministic entry card: a work-area ID badge + an ENUMERATED event-type label (Review / Note / Edit) + the structured fact as the primary line (never a prose sentence). A review entry carries its kind as the primary, its outcome as the status chip, and its reviewer as the meta; a note entry quotes the verbatim text.',
        'The Type filter has NO color dots on purpose — color belongs to STATUS, not event type.',
        'There is no Component filter here — the page\'s Component picker already scopes the feed (a second component control would fight it).',
        'Live edits land in the fixture-TODAY group ("… · Today"), sorted above the dated fixture events.',
      ],
      gotchas: [
        'The feed renders at BOOT but is only visible once the Activity tab is active — capture/automation must switch tabs first.',
        'Every feed entry carries data-wa (the observation feed entries are gone with the forecasting cut) — the observation drawer is reached from the map or the Data tab, not from here.',
        'A new review posted in the drawer must append here in the TODAY group — the feed derives from the store + session edits, not a static list.',
      ],
      acceptance: [
        'Entries group by date (newest first) with the TODAY group labeled; the Type filter scopes Reviews/Notes/Edits; an entry opens its work-area drawer; a drawer save appears in the TODAY group; nothing future-dated ever renders.',
      ],
    },

    // ─────────────  WORK-AREA DRAWER (write) — opened over the Activity tab  ─────────────
    // Each sub-section reloads and re-opens the drawer at DCTR2-DH-010 (a RECORDED
    // block — the one solid-red site inside the SWHA buffer — with a note + seeded
    // comments) via its feed entry.
    {
      label: 'Work-area drawer — header & clearance-visit band',
      selector: '#wa-band',
      apply: [
        { click: 'role=tab[name="Activity"]' },
        { click: ':nth-match(#feed-groups [data-wa="DCTR2-DH-010"], 1)' },
      ],
      intent:
        'The top of the write drawer (esa-side-dialog, 640px): a header with the work-area id, its derived status chip, and the parent Component as the subtitle, then a single-cell band carrying the editable CLEARANCE-VISIT date. Deliberately spare — the drawer is a decision surface (status, reviews, discussion), not a record dump.',
      decisions: [
        'Clearance visit is the ONLY date on the work area: the date the clearance survey happened. It auto-updates when a review is added and is directly editable in Edit mode ("—" when unset). There is no notification date, no planned start, and no blocked-until — all cut with forecasting.',
        'The Work Area custom fields (Method, Depth, Parcel/DCPN, County, Entry agreement) do NOT render in the drawer — a design pass cut them as information overload. They live as columns on the Data tab\'s Work Areas grid, where comparing across sites is the actual job.',
        'The subtitle is the parent Component alone (e.g. "2024-2029 Geotechnical Activities") — the project name is already the app context and repeating it was noise.',
        'The status chip is the BcnStatusChip reading the derived status — it changes the instant a review is saved.',
      ],
      gotchas: [
        'Adding a review writes the review\'s date into the clearance-visit date (the epic\'s rule) — the band must repaint on review save, not just on Edit-mode save.',
        'The epic text (BCN-1446) says the drawer opens "with its Work Area custom fields" — the prototype supersedes that with the fields on the grid only; follow the prototype.',
      ],
      acceptance: [
        'Header shows id + derived status chip + the Component subtitle (no project name); the band shows only the visit date ("—" when unset); adding a review updates it; the custom fields appear on the Data grid, not in the drawer.',
      ],
    },
    {
      label: 'Work-area drawer — biological clearance review history',
      selector: '#wa-dialog .bioclear',
      apply: [
        { click: 'role=tab[name="Activity"]' },
        { click: ':nth-match(#feed-groups [data-wa="DCTR2-DH-010"], 1)' },
      ],
      intent:
        'The heart of the drawer: the full review history (reverse-chron node rail; the LATEST review sets the site\'s status) with an inline Add/Edit-review form. A review is a dated determination — Kind (from the tenant\'s configurable clearance-review-kind list), Date, a REQUIRED Outcome (Cleared / Inaccessible / Blocked), Reviewer (free text), and Note.',
      decisions: [
        'Every review carries an outcome — there is no "scheduled" review and no outcome-less state. The scheduled-visit concept was cut with forecasting; a review exists only once the determination is made.',
        'Kind reads the per-tenant configurable list (DCP seed: "14-day clearance", "72-hour clearance", "Management determination") — the kinds are the configurable axis; the outcome set is fixed. The form defaults the first review to 14-day and later ones to 72-hour.',
        'STIPULATIONS ARE CUT (epic decision): no stipulations field, no "Cleared w/ Stipulation" status. Any stipulation language belongs in the review\'s Note — see DCRDS-DH-294\'s fixture review for the pattern.',
        'Add/Edit is ONE inline form (#dd-form) — above the history when adding, swapped into a node when editing (the pencil affordance).',
        'Adding a review updates the work area\'s clearance-visit date; the "Sets current status" tag rides the latest review\'s node.',
      ],
      gotchas: [
        'Status is derived from the LATEST review by date, so editing an older review must not change status unless it becomes the latest — recompute after every save.',
        '"0 reviews" is a real empty state (Add review + empty rail), not an error — a work area with no review is "Not Surveyed" (or Provisional Block if a buffer covers it).',
        'Do not add a stipulations control or a blocked-until picker from older mockups — both are explicitly out of scope (BCN-1447).',
      ],
      acceptance: [
        'History lists reviews newest-first; every review shows kind, date, outcome chip, reviewer, note; the latest sets the header status and marker color; Add defaults kind sensibly and requires an outcome; saving updates the clearance-visit date and repaints every surface.',
      ],
    },
    {
      label: 'Work-area drawer — comments thread',
      selector: '#wa-dialog .wa-comments',
      apply: [
        { click: 'role=tab[name="Activity"]' },
        { click: ':nth-match(#feed-groups [data-wa="DCTR2-DH-010"], 1)' },
      ],
      intent:
        'A per-work-area collaboration thread (the unified comment system; ported from permit tracking, BCN-1364), DISTINCT from both the append-only Notes and the read-only Activity fold: initials-avatar comments, an @-mention typeahead of project users, and a compose box posting as the current user. It is the coordination layer that replaces the email chain.',
      decisions: [
        'Comments ≠ Notes ≠ Activity: Comments is human discussion (editable social thread), Notes is the append-only field record (verbatim biologist emails), Activity is the immutable derived change log. Three sections, three write disciplines.',
        '@-mention is a typeahead over project users; a mention renders highlighted and would drive a notification in production.',
        'Humans CAN discuss future dates here (fledge windows, re-survey plans) — the forecasting cut removed system-computed dates, not conversation. The seeded DCTR2-DH-010 thread deliberately shows exactly that.',
      ],
      gotchas: [
        'Clear the compose box via the esa-textarea HOST .value after posting — the lego re-syncs its value onto the inner <textarea>.',
        'Comments are per-work-area — opening a different work area must swap the thread.',
      ],
      acceptance: [
        'Existing comments render with initials avatars and highlighted @-mentions; typing @ opens a project-user typeahead; posting appends and clears the compose box; switching work areas swaps the thread.',
      ],
    },
    {
      label: 'Work-area drawer — folds (notes / activity) & edit mode',
      selector: '#wa-dialog .wa__more',
      apply: [
        { click: 'role=tab[name="Activity"]' },
        { click: ':nth-match(#feed-groups [data-wa="DCTR2-DH-010"], 1)' },
      ],
      intent:
        'The demoted reference detail: two EsaCollapsible rows with live counts — Notes (the append-only monitor notes: date · author · verbatim text, each with a delete affordance) and Activity (the read-only derived change log for this site). Below them, the footer\'s "Edit site details" swaps the drawer body to the site-level edit form: the clearance-visit date picker + the Add-note block (Date, Author, Note — Leah\'s paste-the-biologist-email flow).',
      decisions: [
        'Notes are first-class append-only records (date, author, text — author is the biologist who SENT it, distinct from the create-user audit). A note can be DELETED but never edited — the delete affordance rides each read-mode note row; the edit form only ADDS.',
        'The old verbatim "seed note" special case is gone: every biologist email is just a note in the same list, so the model matches the epic\'s single WorkAreaClearanceNote table.',
        'The Buffer-conflicts fold was cut with the spec: the observation drawer\'s "Work areas within buffer" list covers the relationship from the fact\'s side, and the provisional-block marker/chip already tells the site\'s side.',
        'The Activity fold here and the Activity TAB feed are the same events for this site — one save updates both.',
      ],
      gotchas: [
        'Notes render newest-first; deleting logs an Activity entry and re-renders every surface.',
        'Edit mode is site-level only (visit date + add-note) — reviews are edited inline in read mode, never here.',
        'The Notes fold hides when empty; do not assume both folds are always present.',
      ],
      acceptance: [
        'Notes list date · author · verbatim text with working delete (no edit); Add note captures Date/Author/Note and appends; the Activity fold matches this site\'s feed entries; Edit mode offers exactly one date field.',
      ],
    },

    // ─────────────  OBSERVATION DRAWER (read-only) — opened from the Data tab  ────────
    {
      label: 'Observation drawer (read-only)',
      selector: '#obs-dialog',
      apply: [
        { click: 'role=tab[name="Data"]' },
        // The pivot lego is a WAI-ARIA radiogroup — its segments are radios, not buttons.
        { click: 'role=radio[name="Observations"]' },
        { click: ':nth-match(#grid-obs .ag-row, 1)' },
      ],
      intent:
        'The compact read-only counterpart to the write drawer (esa-side-dialog, 520px): an observation\'s facts (species code, kind, buffer distance, first observed), its latest field log, and — the reason it matters — the counted list of "Work areas within buffer" (each opening that site\'s write drawer). From a site you see its status; from an observation you see everything its buffer covers.',
      decisions: [
        'Read-only by design: an observation is a field FACT (a sighting), not a decision — you review the work area, you do not "edit" the bird.',
        'There is NO estimated-end date and no countdown — the observation carries no projection of when it stops mattering; it is active until the Monitoring Portal says otherwise. First observed is the only date, because it happened.',
        'The "Work areas within buffer" list reuses the same intersection that powers provisional-block detection and the grid\'s Work Areas Affected column — one computation, three surfaces.',
      ],
      gotchas: [
        'A tracking-only sighting (buffer 0) still opens this drawer but its impact list is empty and it must never appear as affecting any work area.',
        'Impact rows show each covered site\'s DERIVED status chip — a reviewed site inside the buffer keeps its review color here too (the precedence rule is visible in this list).',
      ],
      acceptance: [
        'Shows species/kind/buffer/first-observed + latest log (when present) + a counted "Work areas within buffer" list with derived-status chips; each row opens that work area\'s write drawer; no estimated-end or countdown renders anywhere.',
      ],
    },
  ],
};
