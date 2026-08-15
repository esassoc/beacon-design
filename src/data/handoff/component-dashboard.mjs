// Handoff spec for the /component-dashboard prototype — the authored counterpart
// to the auto-derived capture. It declares which regions are inspectable
// sections (by selector), plus the intent, decisions, gotchas, and acceptance a
// dev needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by
// the browser. Capture runs against the production preview build.
//
// CONTEXT: the per-component homepage — the follow-up to the Project Dashboard
// epic (BCN-1039), shaped on the 2026-08-13 design call and owned by BCN-1412,
// which until now was a two-sentence pre-Claude stub. Three things govern the
// whole page:
//
//   1. IT IS THE PROJECT DASHBOARD, SCOPED. Same spine, same derivations, same
//      vocabulary — actions carry urgency by due date, urgency is derived and
//      never stored, modules sit above everything else. A component page that
//      invented its own information architecture would make the two surfaces
//      disagree for no reason. `rollupOver()` is deliberately the SAME function
//      the project dashboard uses, bound to a narrower action set.
//   2. A COMPONENT OWNS ALMOST NOTHING. Its record fields, its milestone date
//      overrides, its work areas, and its commitment-applicability decisions.
//      That is the entire list. The rail is four rows against the project's six
//      because species, seasons, and construction activities are project-level;
//      a component copy would imply an override the data model does not have.
//   3. THE MARK REPLACES THE COVER. No hero photo. The identity is a glyph and a
//      color from closed sets — a landmark that separates two dozen components
//      at a glance, and a question every user can answer.
//
// PRECONDITIONS worth confirming before slicing:
//   · Per-user starring (BCN-1576, PR #1279) is the parent surface's model and
//     is NOT yet merged. This page's star must use it, not a second mechanism.
//   · Component boundary geometry (BCN-1582/1583/1584) has not started. The map
//     here draws WORK AREAS, whose geometry the work-areas endpoint already
//     returns and every current surface discards.
//
// Field shapes: src/data/component-detail.ts (the component, its work areas,
// milestones, layers, modules), src/data/component-commitments.ts (applicability
// + the honest counts), src/data/entity-marks.ts (the mark's closed sets),
// src/data/project-actions.ts (the shared action model and derivations).

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
      label: 'Component header',
      selector: '.bcn-chd',
      intent:
        'The component\'s identity band: a full-width white bar carrying its mark, its name as the page\'s sole H1, the parent project as a link back up the tree, its status and dates, and the Tracking / Monitoring / Reporting pulse strip that makes the box you clicked on the project dashboard and the page you landed on tell the same story.',
      decisions: [
        'NO COVER PHOTO — a deliberate divergence from the project header, not an omission. A component gets a mark (glyph x color) vertically centred beside its name. The reasoning is the parking-garage floor: a visual landmark that says which one you are on. Asking a user to choose a photo for a launch shaft is a question with no good answer, so the field stays empty and every component looks identical.',
        'The mark persists three small columns — glyph key, color key, style (fill/outline) — from CLOSED sets of 20 and 20. It never stores a hex, so the ramp stays themeable and dark-mode safe. An uploaded image supersedes the pair without clearing it, so removing the image restores the old mark.',
        'A NEW COMPONENT IS BORN WITH A MARK, and with one no sibling in the project already wears. Differentiation is the whole point of the mark, so a blank default defeats it (nobody fills the field) and a colliding default defeats it on the first collision. Assign at creation from the pairs still free in that project, PERSIST the assignment, and let the user change it afterwards. The prototype models this with `nextUnusedMark(used)` in src/data/entity-marks.ts: a diagonal (Latin-square) walk over the two axes, so consecutive components differ in BOTH glyph and colour — walking one axis at a time would give a project twenty red components before it used a second colour. 20 x 20 = 400 pairs before anything must repeat.',
        'PERSIST it, do not derive it. The prototype recomputes marks from the component name because its fixtures predate the field; that is fine for a fixture and wrong for the product. A mark that changes when a sibling is renamed, or when a component is added ahead of it in the list, is not a landmark.',
        'The component name is the page H1 and PageLayout\'s own title row is suppressed, exactly as on the project header. The H1 reads as the entity, not the page.',
        'Sibling wayfinding (prev / next / all components) lives on the header, because landing three levels down with no way sideways is a dead end.',
        'The star uses the per-user starring model from BCN-1576 — the same model, not a second one. The two epics were explicitly required to agree.',
      ],
      gotchas: [
        'esa-icon-button has a CLOSED prop set (icon, label, href, size, type) and silently drops unknown attributes — unlike esa-button, which forwards the rest. data-* and aria-pressed must ride a wrapper span, and the click listener with them. That is why the star and logo-edit hooks sit on wrappers.',
        'Component status deliberately does NOT reuse the pulse palette. The T-M-R dots sit inches away where amber means "attention", so mapping Active to the amber in-progress token would read as a warning. Active maps to the primary token instead.',
        'Hover-revealed controls need a keyboard path: the logo edit affordance is a real button and also appears on :focus-visible. Do not implement it as hover-only CSS. Same gotcha the project header carries.',
        'The band renders into PageLayout\'s `bleed` slot — a sanctioned per-page anomaly, not a layout primitive to generalize.',
      ],
      acceptance: [
        'The mark, name, parent-project link, status, dates and three pulses render; the logo edit control is reachable by keyboard and opens the picker; the star reflects and toggles per-user state; prev/next/all-components navigate.',
      ],
    },
    {
      label: 'Component timeline',
      selector: '[data-tl-id="cmp-tl"]',
      intent:
        'The same 30/60/90-day near-term timeline as the project dashboard, scoped to this component\'s actions and its milestone dates. It answers "what lands on me soon" without the rest of the project\'s noise.',
      decisions: [
        'The component reuses the project timeline component outright, parameterized — it is not a second timeline. Defaults preserve the project dashboard\'s rendering exactly.',
        'A milestone\'s effective date here is the COMPONENT\'S override when one exists, otherwise the project estimate, because the timeline answers "when does this land for me". An overridden mark is labelled as a component date so it is never mistaken for the project schedule.',
        'Seasons stay project-level and are shown unchanged — a component does not get its own nesting season.',
      ],
      gotchas: [
        'TODAY now travels in the serialized JSON payload. It used to be hardcoded a SECOND time inside the client script, mirrored from the fixture; that duplicate is gone and must not come back.',
        'The popover is appended to document.body because esa-card sets overflow:hidden. That is a workaround, not an accident — do not "fix" it.',
        'DOM ids are namespaced by idPrefix so the component and project timelines could coexist on one page. The default reproduces the project dashboard\'s original ids.',
      ],
      acceptance: [
        'Only this component\'s actions plot; overridden milestones show the component date and say so; the 30/60/90 toggle re-lays the marks; the project dashboard\'s timeline is byte-for-byte unchanged.',
      ],
    },
    {
      label: 'Modules (Tracking / Monitoring / Reporting)',
      selector: '#modules',
      intent:
        'The three work areas as equal cards, each rolling up this component\'s actions of that type into overdue and due-soon counts plus its most urgent actions as links. Criticality lives inside the module that owns the work — there is no separate "most critical" section, here or on the project dashboard.',
      decisions: [
        'Rollups are computed by rollupOver(), the SAME function the project dashboard uses, bound to this component\'s action set. Two implementations of "overdue" would eventually disagree, and urgency has to mean exactly one thing across both dashboards.',
        'Sub-surface links are component-scoped. Sending a user who is deep in one component out to a project-wide list undoes the scoping the page exists to provide.',
        'Urgency stays derived from due date over incomplete actions, never stored.',
      ],
      gotchas: [
        'Same slice caveat as the project dashboard: the Monitoring rollup needs an observation-to-action relationship that does not exist yet, and Reporting needs report-to-action. Those are data dependencies, not sequencing preferences.',
        'Section ids are opt-in via idPrefix. This page passes an empty prefix to get bare #tracking / #monitoring / #reporting anchors, because the header pulse rows link to them. Omitting the prop emits no ids at all, preserving the project dashboard markup.',
      ],
      acceptance: [
        'Each module shows counts derived only from this component\'s actions; the header pulse rows scroll to their module; no action from another component appears.',
      ],
    },
    {
      label: 'Work areas',
      selector: '[data-work-area-board]',
      intent:
        'The work-areas grid, moved onto the dashboard from the tab this effort retires, with its bulk actions intact — create, bulk import (CSV or zipped shapefile), multi-select delete, select-all.',
      decisions: [
        'The work-areas TAB goes away and the grid lives here. There is still a work-area detail page (level four); there does not need to be a work-area index page.',
        'The columns are the fields that were always there. Production\'s grid shows Identifier plus an edit and a delete button, while the endpoint it calls already returns geometry, measure, county, method, depth and custom fields — all discarded. Showing them is most of the improvement.',
        'Status renders as a quiet chip with a dot, never as a row tint or a colored edge.',
        'The bulk group sits BESIDE the search + clear-filters chrome, not over it. An earlier pass overlaid the two in one cell to stop the grid shifting on selection; it worked, but it removed the search field at exactly the moment someone who has filtered to a set wants to narrow it further. Selecting rows and searching are not alternatives.',
        'REUSE PROD\'S TWO DIALOGS AS-IS. Create opens `work-area-upsert-dialog` (Identifier, required, plus the tenant\'s WorkArea custom fields via entity-custom-fields) and Bulk Import opens `work-area-bulk-import-dialog`. Neither is being redesigned, so neither is prototyped: the buttons on the prototype emit an event and open nothing ON PURPOSE. A prototype approximation was built and then deliberately cut, because it could not match their styling and a nearly-right dialog reads as a redesign proposal — a more expensive kind of wrong than an empty click. Do not treat their absence from the prototype as license to invent them.',
      ],
      gotchas: [
        'A row click must NOT open the work area when the click originated on a selection checkbox. Guard on .ag-selection-checkbox / .ag-checkbox — the same guard permit-tracking already carries.',
        'The grid kit\'s makeStatusRenderer requires a literal hex per status, which collides with token discipline. Use the tone-key renderer so color stays in CSS.',
        'Bulk import is two-stage in production — upload a CSV or zipped shapefile, then map each source column to Ignore / Identifier / a CustomFieldDefinitionID, with an optional single-column filter and a preview of what will land. Exactly one column must be the Identifier. Do not reduce it to a single file drop, and do not lose the mapping step: a geotech export\'s headers never already match Beacon\'s field names.',
        'The bulk-import dialog also carries prod\'s limits (10 MB, 5,000 rows, 50 preview rows) and routes shapefiles through POST /work-areas/parse-shapefile before committing via /work-areas/bulk-create.',
      ],
      acceptance: [
        'All of the component\'s work areas list with their real columns; select-all and per-row selection drive the bulk bar while the search field stays visible and usable; delete confirms and removes; the grid height does not change when filtering or selecting; a checkbox click never navigates; Create and Bulk Import open the existing dialogs unchanged.',
      ],
    },
    {
      label: 'Component setup card',
      selector: '.bcn-csc',
      intent:
        'How much of this component\'s commitment applicability is settled, and the door into the surface that settles it. It occupies the slot the project dashboard gives its Setup Wizard card, for the same reason: setup is a pipeline with a state, not a fourth work area.',
      decisions: [
        'The figures replace prod\'s tab percentage, which is derived from a cross product of every component against every commitment in the project — so it measures the project, drifts whenever a source document gains a commitment, and never reaches 100.',
        'Three figures, each scoped to this component and each naming a list the user can open: how many need a decision, how many arrived since the last review, and how many are decided out of the total.',
        '"N actions waiting" states the consequence up front — applying commitments materializes actions onto this component, and that is what fills the tracker.',
      ],
      gotchas: [
        'The card carried two doors while a decision workspace and a triage queue were compared in context. The workspace was chosen on 2026-08-14 and the queue was deleted; one door is the shipping shape. The comparison is kept in docs/component-setup-model-comparison.md.',
      ],
      acceptance: [
        'Every figure is scoped to this component and matches the list it opens; the progress bar agrees with the decided figure; the new-since badge appears only when something arrived after the last decision.',
      ],
    },
    {
      label: 'Component data rail',
      selector: '.bcn-lrc',
      intent:
        'The quiet utility rail: four links that open component-data side panels via the ?data=<key> URL contract, the same contract the project dashboard established.',
      decisions: [
        'FOUR keys, not six: component info, milestones, source documents, footprint layers. Species, seasons and construction activities are project-level. Offering component copies would imply an override the data model does not have — this asymmetry is deliberate and a future reader should not "fix" it.',
        'Milestones is the only genuinely editable one, matching production, where it is a component\'s single edit tab.',
        'Source documents and footprint layers are read-only here. Sources reach a component through commitments, not by assignment; layers are managed in the Spatial Library zone.',
      ],
      gotchas: [
        'Panel state must ride the URL so panels are bookmarkable and the browser Back button closes them — honored on first load AND on popstate, not just on click.',
      ],
      acceptance: [
        'Each row opens its panel; ?data=<key> deep-links to an open panel; Back closes it; no species / seasons / construction-activity row exists.',
      ],
    },
    {
      label: 'Component data panels',
      selector: '.bcn-cdp',
      intent:
        'The four side panels themselves. Component info opens straight into its editable form and ends in a delete danger zone; milestones is the date-override surface; sources and layers are read-only lists.',
      decisions: [
        'A milestone row shows BOTH the project\'s estimated date and this component\'s override, because an override only means anything against what it overrides.',
        'Milestones edit IN THE ROW rather than in a stacked child drawer. Every key here resolves to an inline form or a read-only list, so there is no per-row Edit to open a drawer with — and a second drawer holding one date field is ceremony. The project panel\'s stacked-drawer pattern still applies if a future key needs it.',
        'A row with no override reads as "Inherited" — a quiet word, not a colored border and not an ornamental micro-label.',
        'No key has an Add: a component cannot create a project milestone, assign itself a source, or author a layer.',
      ],
      gotchas: [
        'esa-select takes its selection only as a property, so an SSR\'d select cannot carry its initial value in markup — every consumer needs a JS pass.',
        'esa-switch-toggle has no accessible-name hook other than a visible label, so a per-row visibility switch either repeats "Visible" on every row or ships unnamed. Worked around by clipping the exposed label part; the name stays in the a11y tree.',
        'Footer actions are right-aligned with Save LEFT of Cancel — Windows order, house rule.',
      ],
      acceptance: [
        'Milestone rows show both dates; setting an override updates the header count; clearing it restores "Inherited"; component info saves and its danger zone confirms before deleting; sources and layers offer no Add.',
      ],
    },
    {
      label: 'Component footprint map',
      selector: '#cmp-footprint-root',
      intent:
        'Where this component actually is: an inset map of its work areas, colored by clearance status, expanding to an interactive modal with a legend.',
      decisions: [
        'The map draws WORK AREAS, not a component boundary, because Component has no geometry column and the boundary epic (BCN-1582) has not started. Work-area coordinates are real, already returned by the work-areas endpoint, and currently discarded by every surface — Site Clearance collapses them to a centroid dot. Drawing them is exactly what BCN-1583 slice 1 proposes, with no schema change.',
        'The boundary source renders as a FIELD, not a caption, so it can name an uploaded file once BCN-1584 lands.',
        'Basemap is grayscale — containers stay neutral, color lives in the data.',
        'Every DOM id is namespaced by an idPrefix, so the same component serves the rail inset here and the full map on the component index.',
      ],
      gotchas: [
        'Leaflet: call setView() BEFORE adding layers, and create the modal map lazily on first open, then invalidateSize() on every reopen — otherwise it renders as a grey box. Both gotchas are inherited from the project map.',
        'The predecessor component (bcn-project-map) hardcodes singleton DOM ids and cannot be instantiated twice. Do not reproduce that.',
      ],
      acceptance: [
        'Work areas plot at their real coordinates colored by status; the inset expands to an interactive modal with a legend; reopening the modal renders the map, not a grey box.',
      ],
    },
    {
      label: 'Component details',
      selector: '.bcn-facts',
      intent:
        'The quiet rail card of the Component record\'s own fields: start date, expected end date, and the tenant-defined custom field values, under the stored description.',
      decisions: [
        'Every line maps to a field on ComponentDto. Nothing derived, nothing decorative.',
        'NO FILES. ComponentDto has no Files field — a `files` array was invented in the first prototype pass and cut at review (2026-08-13). Component files in prod are `EvidenceOfComplianceFile` rows reached through evidence records, a different entity, which is why prod\'s Summary tab surfaces them in an evidence-of-compliance grid rather than as component fields. Do not add a file list to this card.',
        'NO STATUS. The header renders it as a chip; one fact does not need two homes on one screen. (Prod\'s Summary tab does show it, because prod has no identity header to carry it.)',
        'NO PROJECT LINK. The breadcrumb trail carries the hierarchy, as it does in prod.',
        'NO SOURCE DOCUMENTS and no footprint layers. Both are real Component data and both are on the page — as their own rail rows, each opening a panel — so restating them inside this card would be a second home for the same fact.',
        'It reuses the project dashboard\'s facts card unchanged, with a title override. The two records differ; the treatment should not.',
      ],
      gotchas: [
        'Resist re-adding derived or decorative facts. On the project card four were deleted for having no DB source; on this one an invented file list was. That rule is why the card is short.',
        'THE COMPONENT DASHBOARD CARRIES NO EVIDENCE SURFACE. Decided 2026-08-13, and deliberate rather than an oversight — the Summary tab being retired had one, so its absence will otherwise read as something lost in the move. Two separate reasons. (1) The thing being dropped is dead UI: prod\'s `<evidence-of-compliance-summary-grid [componentID]>` renders "Highlighted Evidence of Compliance", whose rows come from `dbo.ComponentSummaryEvidenceOfCompliance`, an opt-in join that NOTHING in develop writes — no UI references it and `EvidenceOfComplianceUpsertDto` has no field for it — so rows arrive only by seed or direct insert, and the template short-circuits on `rowData.length > 0`, rendering nothing at all when empty. That is why it is invisible in QA. (2) Evidence already has homes: the app-wide evidence drawer attaches it to actions, and the Data Catalog lists the records. Re-confirm (1) at slicing in case an admin or import path exists that this survey missed. If a component-scoped evidence VIEW is later wanted, it is a new surface designed on its own terms — not this grid resurrected.',
      ],
      acceptance: [
        'Every fact maps to a ComponentDto field or a custom field value; no file list appears; status and the project link are not duplicated from the header and breadcrumb.',
      ],
    },
  ],
};
