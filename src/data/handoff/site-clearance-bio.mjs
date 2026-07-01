// Handoff spec for the /prototypes/site-clearance-bio prototype — the authored
// counterpart to the auto-derived capture. It declares which regions are
// inspectable sections (by selector), plus the design intent, decisions, gotchas,
// and acceptance a dev/Claude needs to re-implement each one faithfully in the
// Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by
// the browser. Capture runs against the production preview build.
//
// Context: Site Clearance — Biological. The rich cross-discipline clearance
// prototype (site-clearance.astro) narrowed to the ONE gate Leah's DWR bio team
// owns, because the broader DCA team isn't ready to converge on Beacon as the
// Bio/Cultural/Noise/Geology clearance surface. Same 231 real KMZ work areas,
// same 4-tab spine behind an esa-tab-layout (underline):
//   - Map      (panel-0, default) — Leaflet map of the work areas colored by
//              DERIVED biological-clearance status, view presets + Status/Planned-
//              start scopes, a status legend, and a readiness census strip.
//   - Data     (panel-1) — Work Areas × Observations as beacon AG Grids behind
//              the requirement-tracker filter bar; a row opens the work-area drawer.
//   - Timeline (panel-2) — "when does work become available, and in what status?"
//              one auto-ranged time axis + a fixture-TODAY marker, three swimlanes
//              of one-dot-per-site milestones (work starts / clearance visits /
//              blocks expected to lift), colored by derived status.
//   - Activity (panel-3) — the week feed (date-grouped entries + an Upcoming rail);
//              entries jump to the relevant drawer.
// Two esa-side-dialogs cross every tab: the WRITE work-area drawer (dates band +
// the biological review history with its inline Add/Edit-review form + a Comments
// thread + Buffer-conflict/Notes/Activity folds) and a READ-ONLY observation
// drawer. Saving a review re-derives status EVERYWHERE from one client store (map
// markers, chips, grids, timeline lanes, readiness strip, feed).
//
// THE ONE INVARIANT to carry into Angular: work-area clearance status is NEVER
// stored — it is always DERIVED from (a) the biological review history (the latest
// COMPLETED review's outcome sets the status; an outcome-less review is "scheduled")
// and (b) live observation buffers. An observation whose buffer overlaps a work
// area escalates it to "provisional-block" ("system detects, humans decide") until
// a manager confirms it to "blocked". Everything visual is a projection of that.
//
// Bio-scoping note: this page imports src/data/geotech-fixture-bio.ts, a THIN wrap
// over the rich geotech-fixture — it re-exports the full data + per-dimension
// helpers (always passing the single BIO dimension) and reimplements ONLY the
// three cross-gate aggregates (deriveStatus / blockedUntil / statusCounts) for one
// gate. Non-bio reviews still present in wa.reviews are simply never read.
//
// Capture notes (how the apply recipes reach each state):
//   - Map/Timeline/Activity JS renders at BOOT (renderTimeline/renderFeed run in
//     the init + refreshAll), so Map sections capture on the default tab with no
//     recipe; Timeline/Activity just switch tabs so their panel is visible.
//   - The AG GRIDS are LAZY — ensureGrids runs only on Data-tab activation — so the
//     Data sections switch tabs first: { click: 'role=tab[name="Data"]' }.
//   - The drawers are viewport-fixed side dialogs opened from feed rows: switch to
//     Activity, then click a feed entry. DCTR2-DH-010 (blocked, with a completed
//     review + a buffer conflict + seeded comments) emits a [data-wa] feed entry,
//     so it captures the RICH work-area drawer; the first [data-obs] feed entry
//     opens the observation drawer. :nth-match(…, 1) guarantees a single match
//     (the same id can appear on several feed dates) so Playwright's strict-mode
//     click never throws.
// See the typedef in requirement-tracker.mjs for the field shapes.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    // ─────────────────────────────  MAP TAB (panel-0)  ─────────────────────────────
    {
      label: 'Map tab — view presets & filter bar',
      selector: '.map-panel .map-filterbar',
      intent:
        'The Map tab is the hero (default of the 4-tab esa-tab-layout: Map · Data · Timeline · Activity). Its filter bar carries two rows: a View row (opinionated preset toggle + two "Go to work area / Go to observation" autocomplete comboboxes) and a Filters row (Status + Planned-start facet dropdowns). The scopes are GLOBAL to the tab — they filter the map markers AND the readiness strip below it together, so the census figure always agrees with what is drawn.',
      decisions: [
        'View presets (esa-button-toggle, size md) are a shortcut over the SAME facet state the Status dropdown edits — one source of truth. Pressing a preset sets the facets; a preset reads as selected only while the facets exactly equal its set, so hand-editing the dropdown drops back to no-preset. Counts ride the labels as plain text (an esa-badge inside a segment would fight the lego).',
        'The two "Go to…" comboboxes (esa-combobox, autocomplete) are JUMPS, not filters: type-ahead or pick any of the 231 work-area IDs / any observation → pan/zoom + pulse the marker (no drawer), then reset to the placeholder. They never change the facet set.',
        'Filter legos are esa-filter-dropdown inside an FilterContainer, with an esa FilterClearButton — the same bar grammar reused on the Data and Activity tabs so the three surfaces read as one system.',
      ],
      gotchas: [
        'The facets scope the readiness strip too, so re-implementing them in Angular means recomputing the derived status census from the filtered work-area set — not just toggling Leaflet marker visibility.',
        'Preset "selected" is a derived equality check against the live facets, not a stored mode — do not persist the active preset or it will lie the moment the dropdown is hand-edited.',
      ],
      acceptance: [
        'A preset sets the Status/Planned-start facets and reads selected only while they match; hand-editing a facet clears the preset; "Go to…" pans/pulses without opening a drawer; narrowing a facet re-scopes both the map and the readiness strip.',
      ],
    },
    {
      label: 'Status map & legend',
      selector: '.map-legend',
      intent:
        'The Leaflet map of the 231 real work areas (geometry from the client KMZ), each marker colored by its DERIVED biological-clearance status, plus observation buffer rings. The legend (captured here) is the key; the map answers the field question: which sites are cleared to work, and which are blocked by a nesting buffer? Clicking a marker opens the work-area drawer; clicking an observation ring/dot opens the observation drawer.',
      decisions: [
        'Marker color = derived status, never a stored field. Status is the latest COMPLETED biological review\'s outcome, escalated to "provisional-block" when a live observation buffer overlaps the site. The map, legend, timeline, and readiness strip all read the same derived value.',
        'Provisional-block is the HOLLOW swatch — white fill, colored (red) stroke: "blocked, but not solidified" — the exact grammar the map markers use, so a hollow marker and a hollow legend dot tell the same story. A solid segment would read as a confirmed Blocked.',
        'The legend also documents the two observation glyphs: a buffer RING (an active nesting buffer that can block) and a HOLLOW sighting (tracking-only, buffer 0 — informational, never blocks).',
        'The map div is third-party Leaflet; only the legend is design-system DOM, which is why this section captures the legend and documents the map in prose.',
      ],
      gotchas: [
        'Do NOT persist work-area status. Re-deriving it from the review history + live buffers is the whole architecture — a stored status would drift the moment a review is added or an observation is logged.',
        'Leaflet needs invalidateSize() when its tab/container first becomes visible (the map builds at boot only because Map is the default tab); on a framework that hides panels, call invalidateSize on reveal or the map renders at 0×0.',
        '"Tracking-only" sightings (bufferFt 0) must render as the hollow glyph and must NEVER escalate a work area — only a positive buffer that overlaps a site produces a provisional-block.',
      ],
      acceptance: [
        'Each work-area marker is colored by derived status; provisional-block renders hollow (white fill, colored stroke) on both marker and legend; observation buffers render as rings, tracking-only sightings as hollow dots; clicking a marker opens its drawer.',
      ],
    },
    {
      label: 'Readiness strip',
      selector: '.readiness',
      intent:
        'The census figure below the map: a single stacked bar of all work areas by derived status with a "Ready to drill N of M" summary and a per-status legend with live counts. It answers "how close is the program to clear?" at a glance and is scoped by the same Map filter bar as the markers.',
      decisions: [
        'One horizontal stacked bar, segments in STATUS_ORDER (the readiness ramp), each sized by its share of the total — the bar reads as a progression toward "ready", not an arbitrary pie.',
        'Provisional-block gets a red/white DIAGONAL STRIPE (repeating-linear-gradient), not a solid fill — same "not solidified" story as the hollow markers; a solid segment would read as confirmed Blocked and overstate the risk.',
        'Counts (bar segments, summary, legend) all derive from statusCounts() over the filtered set — one computation feeds every number so they can never disagree.',
      ],
      gotchas: [
        'The strip is scoped by the Map facets, so its numbers are of the FILTERED set, not the whole program — label/tooltip must make the denominator honest when a filter is active.',
        'Zero-count statuses are dropped from the bar (flex 0) but kept in the legend marked empty, so the ramp stays legible without empty slivers.',
      ],
      acceptance: [
        'The bar sums to the (filtered) total; provisional-block renders as a diagonal stripe; the "Ready to drill N of M" summary and every legend count agree with the bar and update when a Map facet changes.',
      ],
    },

    // ─────────────────────────────  DATA TAB (panel-1)  ─────────────────────────────
    {
      label: 'Data tab — filter bar, grid toggle & search',
      selector: '.bcn-filterbar',
      apply: [{ click: 'role=tab[name="Data"]' }],
      intent:
        'The Data tab is the tabular workspace: the requirement-tracker filter bar over two beacon AG Grids — Work Areas and Observations — pivoted by a single toggle. The bar carries the pivot toggle (which grid), a full-text search, and a Status facet. A work-area row opens the write drawer; an observation row opens the read-only observation drawer.',
      decisions: [
        'ONE esa-button-toggle pivots between "Work Areas" and "Observations" — two panes (#pane-was / #pane-obs), one shown at a time — rather than two always-on tables, so the tab stays a single focused surface.',
        'Search is an esa-text-field with a clear affordance; the Status facet is the same esa-filter-dropdown lego as the Map/Activity bars — the filter grammar is deliberately identical across the three tabs.',
        'The grids use the shared beaconTheme + makeStatusRenderer (src/lib/beacon-grid) so the status cell renders the SAME chip/derived color as the map and drawer — the grid is another projection of the one store, not its own styling.',
      ],
      gotchas: [
        'The AG Grids are LAZY — ensureGrids runs only on Data-tab activation (requestAnimationFrame(ensureGrids)). Any capture/automation of this tab must switch to it first; a boot-time read finds empty grid containers.',
        'The pivot toggle swaps which pane is hidden — the search and Status facet apply to whichever grid is active, so re-implementing must re-run the filter against the active pane\'s row set.',
        'Status is the derived value in the grid too; do not add a stored status column — the renderer must compute it the same way the map does.',
      ],
      acceptance: [
        'The pivot toggle swaps Work Areas ↔ Observations; search + Status filter the active grid; a work-area row opens the write drawer and an observation row opens the read-only observation drawer; grid status chips match the map colors.',
      ],
    },
    {
      label: 'Data tab — table footer & CSV',
      selector: '.table-footer',
      apply: [{ click: 'role=tab[name="Data"]' }],
      intent:
        'The footer under the grids: a "Download as CSV" action on the left and a live "Total Records / filtered" count on the right — the standard beacon table chrome, so the tabular view feels like the production data grids.',
      decisions: [
        'Total shows the full count; a separate filtered count appears only while a filter/search narrows the set — the two numbers make the active filter honest without a banner.',
        'Download as CSV (esa-button, ghost/outline, download icon) exports the ACTIVE grid\'s current (filtered) rows — the pivot + filters define what you get, so the export always matches what is on screen.',
      ],
      gotchas: [
        'The count is of the active pivot pane; switching Work Areas ↔ Observations changes both the total and what CSV would export.',
      ],
      acceptance: [
        'Total reflects the active grid; a filtered count appears only when narrowed; CSV exports exactly the rows currently shown.',
      ],
    },

    // ─────────────────────────────  TIMELINE TAB (panel-2)  ─────────────────────────
    {
      label: 'Timeline — work-availability swimlanes',
      selector: '.tl',
      apply: [{ click: 'role=tab[name="Timeline"]' }],
      intent:
        'The Timeline answers "when does work become available, and in what status?" — one shared auto-ranged time axis with a fixture-TODAY marker line and three swimlanes of one-dot-per-site milestones: Work starts (cleared sites @ planned start), Clearance visits (sites with a scheduled review @ the earliest upcoming visit), and Blocks expected to lift (blocked / provisional-block sites @ blockedUntil). Dots are colored by derived status; a row opens the work-area drawer.',
      decisions: [
        'Adapted from permit-tracking\'s clear-to-build timeline: ONE row per site per lane (the stagger) is the collision strategy — 18 provisional blocks lifting on the same date read as one aligned column of hollow dots instead of an unreadable pile.',
        'Provisional-block dots are HOLLOW (same grammar as the map/legend/readiness); confirmed statuses are solid, colored by var(--st-<status>) — the dot color IS the derived status.',
        'Everything is JS-derived from the store and re-derives after every save / block confirmation; indefinite blocks with no lift date are counted in the side note (#tl-excluded), not plotted, so the axis stays honest.',
      ],
      gotchas: [
        'The axis auto-ranges to the data — an out-of-range milestone would silently fall off; keep the excluded-count note so nothing is hidden.',
        'Timeline rows carry the work-area id in their title and wire an openWorkArea click listener directly (NO data-wa attribute) — automation must click by row text/title, not [data-wa].',
      ],
      acceptance: [
        'Three lanes on one axis with a TODAY marker; one dot per site per lane colored by derived status; provisional-block dots hollow; indefinite blocks noted, not plotted; clicking a row opens its work-area drawer.',
      ],
    },

    // ─────────────────────────────  ACTIVITY TAB (panel-3)  ──────────────────────────
    {
      label: 'Activity — feed & upcoming rail',
      selector: '.feed',
      apply: [{ click: 'role=tab[name="Activity"]' }],
      intent:
        'The week-at-a-glance: a date-grouped feed of what changed (completed reviews, new observations/log updates, notifications, edits) on the left, and a sticky Upcoming rail (soonest first) on the right. It is scoped by a Type/Component filter row; every entry jumps to the relevant drawer. One drawer save lands in BOTH the drawer\'s Activity fold and this feed.',
      decisions: [
        'Feed entries are the ch3 entry card: an ID badge + an ENUMERATED event-type label + the structured fact as the primary line (never a prose sentence) — deterministic, scannable rows, not free text.',
        'The Type filter has NO color dots on purpose — color belongs to STATUS, not event type; only status surfaces (map, chips, timeline) are colored.',
        'The Upcoming rail is NOT scoped by the feed filters (it is a forward-looking to-do, not a log slice); the feed filters scope only the dated groups. An empty filtered feed shows an esa-empty-state.',
      ],
      gotchas: [
        'Feed + Upcoming render at BOOT (init + refreshAll) but are only visible once the Activity tab is active — capture/automation must switch tabs first.',
        'Entry jump target: a review/notification/edit entry carries data-wa (opens the work-area drawer); an observation entry carries data-obs (opens the observation drawer). jump.wa wins if both are present.',
        'This feed is the live change log, so a new review posted in the drawer must append here in the fixture-TODAY group — the feed is derived from the store + session edits, not a static list.',
      ],
      acceptance: [
        'Entries group by date (newest first) with the TODAY group labeled; the Type/Component filters scope only the feed (not Upcoming); a review entry opens the work-area drawer and an observation entry opens the observation drawer; a drawer save appears in the TODAY group.',
      ],
    },

    // ─────────────  WORK-AREA DRAWER (write) — opened over the Activity tab  ─────────────
    // Each sub-section reloads and re-opens the drawer at DCTR2-DH-010 (blocked, with a
    // completed review + a buffer conflict + seeded comments) via its feed entry.
    {
      label: 'Work-area drawer — header & dates band',
      selector: '#wa-band',
      apply: [
        { click: 'role=tab[name="Activity"]' },
        { click: ':nth-match(#feed-groups [data-wa="DCTR2-DH-010"], 1)' },
      ],
      intent:
        'The top of the write drawer (esa-side-dialog, 640px): a header with the work-area id, its derived status chip, and subtitle, then an always-visible Dates band of the three decision dates — Notification, Clearance visit, Planned start — with a red "Blocked until" cell that appears ONLY while a block horizon exists. These are the inputs a manager reads first to decide "can we work here yet?".',
      decisions: [
        'The dates band sits full-bleed directly under the header (above everything else) because the three dates + the block horizon are the decision context for the whole drawer — they frame the review history below, not the other way round.',
        'The status chip in the header is the BcnStatusChip reading the derived status (never a stored field) — it changes the instant a review is saved or a buffer clears.',
        'The "Blocked until" cell is conditional (#wa-d-until-wrap hidden by default) and rendered in the alert color — a block horizon is exceptional, so it only appears when there is one, rather than showing an empty "—" row.',
      ],
      gotchas: [
        'Blocked-until is derived (blockedUntil() over the current review); an indefinite block shows no date cell, not "TBD" — do not fabricate a horizon.',
        'The three dates are SITE-LEVEL and are edited in the drawer\'s Edit mode (#wa-edit), not here; this band is read-only display of the current values.',
      ],
      acceptance: [
        'Header shows id + derived status chip; the three dates render; the red "Blocked until" cell appears only when a block horizon exists and is hidden otherwise.',
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
        'The heart of the drawer: the full biological review history (reverse-chron node rail; the latest COMPLETED review sets the site\'s status) with an inline Add/Edit-review form. With biology the ONLY gate, this lives directly in the work-area drawer — no 2×2 discipline board, no stacked child drawer (both removed from the cross-discipline parent; one gate makes the extra click redundant).',
      decisions: [
        'The history is the source of truth for status: the newest review WITH an outcome determines the derived status; an outcome-less review is a SCHEDULED visit ("Scheduled — no outcome yet") that shows in the history + the timeline\'s Clearance-visits lane but does not yet set a status.',
        'Add/Edit is ONE inline form (#dd-form) — it renders above the history when adding and is swapped into a node when editing (the pencil affordance) — so a review is created and corrected in place, never in a separate modal.',
        'A blocking outcome reveals a "Blocked until" date-picker (#dd-until-wrap) — the horizon is captured ON the review that caused it, which is what blockedUntil() reads back for the dates band and the timeline.',
        'Stipulations are an esa-input-tag (chips), reviewer + note are plain fields — the review record mirrors what a biologist writes on a clearance form.',
      ],
      gotchas: [
        'This is the bio-scoping seam: the underlying fixture is cross-discipline, so the history/form are bound to the single BIO dimension (currentReview/disciplineReviews always passed BIO). Non-bio reviews still in wa.reviews must be filtered out, never shown here.',
        'Status is derived from the LATEST completed review, so editing an OLDER review must not silently change status unless it becomes the latest completed one — recompute after every save.',
        '"0 reviews" is a real empty state (Add review button + empty rail), not an error — a work area with no biological review yet is "not-surveyed".',
      ],
      acceptance: [
        'History lists reviews newest-first; the latest completed review sets the header status; an outcome-less review reads "Scheduled"; Add renders the inline form above the rail and Edit swaps it into the node; a blocking outcome captures a Blocked-until date that feeds the dates band + timeline.',
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
        'A per-work-area collaboration thread (ported from permit tracking, BCN-1364), DISTINCT from the read-only Activity fold below: initials-avatar comments, an @-mention typeahead of project users (rendered highlighted, would feed notifications), and a compose box posting as the current user. It is where the team coordinates a specific site, not a system change log.',
      decisions: [
        'Comments are a separate concern from the Activity fold: Activity is the immutable derived change log (reviews/edits); Comments is human discussion. Keeping them apart avoids conflating "what the system recorded" with "what people said".',
        '@-mention is a typeahead over PROJECT_USERS; a mention renders as a highlighted chip in the posted comment (wc-mention) and would drive an email notification in production — the affordance is modeled, the delivery is stubbed.',
        'Rendered live per-work-area (postable), which is why it is hand-rendered here rather than the static BcnDiscussion SSR component — the thread must accept a new comment in-session and re-render.',
      ],
      gotchas: [
        'Clear the compose box via the esa-textarea HOST .value after posting — the lego re-syncs its value property onto the inner <textarea>, so clearing only the inner node does not stick.',
        'The @-mention menu positioning + keyboard nav is bespoke over the textarea; re-implement against the production textarea component\'s events, not the DOM node directly.',
        'Comments are per-work-area (commentsByWa keyed by id) — opening a different work area must show that site\'s thread, not carry state over.',
      ],
      acceptance: [
        'Existing comments render with initials avatars and highlighted @-mentions; typing @ opens a project-user typeahead; posting appends the comment and clears the compose box; switching work areas swaps the thread.',
      ],
    },
    {
      label: 'Work-area drawer — collapsible folds (conflicts / notes / activity)',
      selector: '#wa-dialog .wa__more',
      apply: [
        { click: 'role=tab[name="Activity"]' },
        { click: ':nth-match(#feed-groups [data-wa="DCTR2-DH-010"], 1)' },
      ],
      intent:
        'The v2 demotions: ambient detail folded until asked for. Three EsaCollapsible rows carry live counts in their titles — Buffer conflicts (the observations overlapping this site, each opening the observation drawer), Notes (the verbatim field-biologist seed note + dated added notes), and Activity (the read-only derived change log for this site). Conflicts and Notes are shown only when they have content.',
      decisions: [
        'These are demoted BELOW the review history + comments because they are reference, not decision inputs — the drawer leads with "what is the status and why" and folds the supporting detail.',
        'Buffer conflicts is the "system detects, humans decide" evidence: it lists the observations whose buffers overlap this site (each row carries data-obs and opens the observation drawer). A non-empty conflicts list is exactly what escalates the site to provisional-block.',
        'Notes preserves the verbatim field note as a read-only SEED blockquote (never editable — it is the record) with dated added notes below; the "paste-the-biologist-email" flow adds to it in Edit mode.',
        'EsaCollapsible is used flush with an icon + count in the title (the lego\'s title span is updated live) — reusing the hub lego rather than a bespoke accordion.',
      ],
      gotchas: [
        'Conflicts/Notes folds (#wa-conflicts-col / #wa-notes-col) are hidden when empty, so their presence is data-dependent — do not assume all three folds are always in the DOM.',
        'The Activity fold here and the Activity TAB feed are the same events for this site — one save must update both; keep them derived from one source.',
        'Conflict rows open the observation drawer via a delegated [data-obs] handler on #wa-dialog — the rows are inside a collapsible, so a click must expand-then-select in automation.',
      ],
      acceptance: [
        'Three folds with live counts in their titles; Buffer conflicts and Notes appear only with content; a conflict row opens the observation drawer; the Activity fold matches this site\'s entries in the Activity tab; the seed note is read-only.',
      ],
    },

    // ─────────────  OBSERVATION DRAWER (read-only) — opened over the Activity tab  ────────
    {
      label: 'Observation drawer (read-only)',
      selector: '#obs-dialog',
      apply: [
        { click: 'role=tab[name="Activity"]' },
        { click: ':nth-match(#feed-groups [data-obs], 1)' },
      ],
      intent:
        'The compact read-only counterpart to the write drawer (esa-side-dialog, 520px): an observation\'s facts (species code, kind, buffer, first-observed, est. end), its latest field log, and — the reason it matters — the list of "Work areas within buffer" (each opening that site\'s write drawer). It is the other half of the buffer story: from a site you see its conflicts; from an observation you see everything it blocks.',
      decisions: [
        'Read-only by design: an observation is a field FACT (a sighting), not a decision — you clear the work area, you do not "edit" the bird. So this drawer has no form, only facts + the impact list.',
        'The "Work areas within buffer" list (with a count badge) is the inverse of the work-area drawer\'s Buffer-conflicts fold — same relationship, opposite direction — so a reviewer can pivot between the observation and every site it affects.',
        'Latest log is shown as a quoted blockquote (the verbatim field note), only when present (#obs-log-wrap hidden otherwise) — the record, not a paraphrase.',
      ],
      gotchas: [
        'A tracking-only sighting (buffer 0) still opens this drawer but its impact list is empty and it must never appear as a conflict on any work area — buffer 0 = informational.',
        'Est. end is a projection (nesting window), used to reason about when a block will lift — it is derived context, not a committed date.',
      ],
      acceptance: [
        'Shows the observation facts + latest log (when present) + a counted "Work areas within buffer" list; each impacted-site row opens that work area\'s write drawer; a tracking-only sighting shows an empty impact list.',
      ],
    },
  ],
};
