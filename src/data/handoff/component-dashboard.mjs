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
//   2. A COMPONENT OWNS LITTLE. Its record fields, its milestone date overrides,
//      its work areas, its commitment-applicability decisions, and its Component
//      Setup answers (selected source documents, species, construction
//      activities). The rail is four rows against the project's six because the
//      project still owns the species, season and activity LISTS; setup only
//      picks from them, and those picks live in setup, not in a rail copy.
//   3. THE MARK REPLACES THE COVER. No hero photo. The identity is a glyph and a
//      color from closed sets — a landmark that separates two dozen components
//      at a glance, and a question every user can answer.
//
// PRECONDITIONS worth confirming before slicing:
//   · Per-user starring (BCN-1576, PR #1279) is the parent surface's model and
//     is NOT yet merged. This page's star must use it, not a second mechanism.
//   · Component.Boundary (GEOGRAPHY, BCN-1587) is the footprint Component Setup
//     intersects with each ProjectSpecies habitat layer. The dashboard's inset
//     map still draws WORK AREAS, whose geometry the work-areas endpoint
//     already returns and every current surface discards.
//   · Component Setup needs three new link tables, none of which exist on
//     origin/develop: component to source document, ComponentSpecies, and
//     ComponentConstructionActivity. Start and expected end dates are already
//     on dbo.Component.
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
        'How much of this component\'s commitment applicability is settled, and the two doors into it: Start Setup (the first-time setup dialog) and Review Commitments (the Applicable Commitments drawer). It occupies the slot the project dashboard gives its Setup Wizard card, for the same reason: setup is a pipeline with a state, not a fourth work area.',
      decisions: [
        'The figures replace prod\'s tab percentage, which is derived from a cross product of every component against every commitment in the project, so it measures the project, drifts whenever a source document gains a commitment, and never reaches 100.',
        'Figures: Need a decision (with "N actions waiting", the consequence of applying), Decided N / M, and the progress bar. Each is scoped to this component and matches the drawer it opens.',
        'Before setup: Start Setup is primary and Review Commitments is the outline secondary. After setup: Review Commitments becomes primary, Edit Setup replaces Start Setup, and the card lists the setup\'s answers one fact per row (Source documents, Species, Construction Activities, Dates).',
      ],
      acceptance: [
        'Every figure is scoped to this component and equals the drawer\'s; after setup, the drawer\'s total is every commitment (42 of 42 in the fixture) because nothing is left outside the list.',
      ],
    },
    {
      label: 'Component Setup dialog',
      selector: '.bcn-cs',
      intent:
        'A first-time setup that trims the component\'s Applicable Commitments to what it actually needs. Five steps in a vertical rail: Source Documents, Location and Species, Construction Activities, Dates, Recommendations. Each step\'s answer shows under its name in the rail, and the tally under the rail says what saving would do. Setup only recommends; the person decides, and one Save writes it.',
      decisions: [
        'SOURCE DOCUMENTS ARE THE OUTER LIMIT. Only selected documents\' commitments can apply. Selecting none means every document applies, which is prod today, so a tenant that never runs setup sees no change. Each document row says which components it is already mapped to.',
        'THE RECOMMENDATION RULE (recommend() in src/data/component-commitments.ts). Tags live on requirements. A requirement misses on a kind only when it carries tags of that kind and none match: species not selected, activities not selected, or no season overlapping the component\'s start-to-end dates. A requirement with no tags of a kind never misses on it. A commitment is recommended Not Applicable only when EVERY requirement misses on something; the reasons are the distinct misses, species then activity then season.',
        'Construction Activities count only once the person has visited that step. Until then every activity is treated as selected, so skipping the step rules nothing out.',
        'A span of a year or more overlaps every season. No "Runs N months" line: the season chart simply shows every season overlapping.',
        'Season chart: a key above it (blue bar = Season, outlined box = Work dates) and a status per season, green circle-check "Overlaps" or gray circle-minus "No overlap". No summary sentence under it.',
        'Step circles follow the Setup Wizard step nav: 20px circle, 12px digit, current is the brand fill, done is a brand check.',
        'The header shows the component\'s mark and name (BcnEntityLogo), not a badge.',
        'Species and activity names are Title Case data. Species list A–Z (prod orders ProjectSpecies by CommonName); activities keep the project\'s SortOrder.',
      ],
      gotchas: [
        'Nothing is written until Save. The setup itself (sources, species, activities, dates) and every decision it makes are saved together; Cancel discards the draft.',
        'The rail\'s answer lines wrap one part per line rather than truncating ("27 not applicable", "10 will apply").',
      ],
      acceptance: [
        'In the fixture, with the four Geotech documents selected, the activities Ground Disturbance, Drilling and Boring, Vegetation Removal, Equipment Staging and Haul Truck Traffic, and Oct 5, 2026 – Jan 29, 2027: the review shows 27 Not Applicable (16 from unselected documents, 11 recommended) and 10 Will Apply, and Save reads "Dismiss 27 and Apply 10".',
      ],
    },
    {
      label: 'Location and species (habitat map)',
      selector: '[data-bcn-hmap]',
      intent:
        'The component\'s footprint drawn over the project\'s species habitat layers, and the species list beside it, pre-ticked from the intersection. In the first build (Andy, 2026-10-20).',
      decisions: [
        'The intersection runs on the component footprint (Component.Boundary), never on work areas.',
        'A component with a stored footprint uses it ("Stored Footprint") and may draw another ("Draw Footprint"). A component with none draws one (polygon or rectangle). Marker drawing is off.',
        'Each species reads "In habitat", "Not in habitat" or "No habitat layer". Species in habitat, or with no layer to say otherwise, are pre-ticked. A species the person ticks or unticks keeps their answer; the map no longer overrides it.',
        'The map fits to the footprint plus the habitat polygons it touches.',
      ],
      gotchas: [
        'OPEN: where a footprint drawn in setup is saved. The prototype keeps it in setup state only (ComponentSetup.drawn) and never writes Component.Boundary. Decide whether drawing here writes the boundary.',
        'Habitat only changes the reason\'s wording ("Not in Giant Garter Snake habitat" vs "Giant Garter Snake not selected"). The rule reads the species selection, not the map.',
      ],
      acceptance: [
        'The fixture footprint intersects only Swainson\'s Hawk and Valley Elderberry Longhorn Beetle habitat; Western Pond Turtle has no layer and is pre-ticked; the rest are unticked and read Not in habitat.',
      ],
    },
    {
      label: 'Recommendations: two-column review',
      selector: '[data-cs-transfer]',
      intent:
        'The last step: every commitment the setup touches lands in one of two columns, Not Applicable or Will Apply, and the person moves rows between them before the one Save.',
      decisions: [
        'TWO COLUMNS, ONE SAVE. Save dismisses the Not Applicable column and applies the Will Apply column, creating their actions (Andy, 2026-10-20: "Apply on save"). The label says both numbers, e.g. "Dismiss 27 and Apply 10". There is no third "leave undecided" place; the drawer still allows Undo afterwards.',
        'A move arrow on every row. A row moved against setup\'s placement keeps its reason and shows "Moved by Hand"; moving it back clears that. A hand move is recorded as the person\'s decision, not setup\'s.',
        'Not Applicable lists the recommendations first, then ONE COLLAPSED GROUP PER UNSELECTED SOURCE DOCUMENT ("Construction MMRP (7)"), so the recommendations stay easy to scan. Rows inside a group move like any other.',
        'Will Apply rows show what speaks for them, then the actions they create ("Ground Disturbance, Drilling and Boring · Creates 1 action").',
        'Below the columns, when setup is re-run: Back to Needs a Decision (setup dismissals whose reason no longer holds) and Kept as Decided by Hand.',
      ],
      gotchas: [
        'No transfer-list lego exists in the hub or in prod; logged in docs/system-improvement-ledger.md. Do not take the bcn- markup as a pattern to copy into Angular without checking for one first.',
      ],
      acceptance: [
        'The column counts, the save label and the rail summary agree; moving a row updates all three; after Save the drawer reads 0 need a decision, 13 applied, 29 dismissed (42) in the fixture.',
      ],
    },
    {
      label: 'Applicable Commitments drawer',
      selector: '.bcn-sw',
      intent:
        'The surface that settles applicability one commitment at a time, brought to prod\'s behavior: three views (Needs a decision / Applied / Dismissed), a preview beside the list, filters, and decisions written on click with one plain Close. Every decided row says why.',
      decisions: [
        'WRITES ON CLICK, as prod does (BCN-1636 overrode staging). Apply, Dismiss and Undo write immediately; there is no Save and no Cancel, just Close. Undo is the safety net.',
        'Figures and the View toggle share one header band: Need a decision, Decided N of M, progress. Each view chip carries its own count and matches its list.',
        'Filters on one unlabelled row: keyword search, Source Document, Requirement Type, Species, with Clear all shown only while a filter is on. Options read A–Z, as prod\'s drawer sorts them. Search hits are highlighted in the rows.',
        'Per-row Apply / Dismiss / Undo by state, each with the optional rationale prompt. Bulk Apply / Dismiss / Undo confirm first, and a bulk rationale warns "This overwrites N existing rationales."',
        'The preview shows the commitment text, its source, requirements and added date; "Creates N actions on this component" while the commitment is not applied (prod: IsApplicable !== true); and the Decision with its date and Rationale once decided.',
        'With a setup saved, an undecided commitment setup recommends out reads "Recommended not applicable: <reasons>" with "Dismiss with This Reason" in its preview.',
      ],
      gotchas: [
        'THE DIAGNOSIS THIS SURFACE EXISTS FOR: ComponentCommitment.IsApplicable is NOT NULL, so there is no stored "pending" state. vComponentCommitmentDecisions manufactures it by LEFT JOINing every component in the project against every commitment in the project and calling the misses Pending. The badge therefore counts the PROJECT, re-inflates whenever any source document gains a commitment, and can never reach zero. Do not port that figure. Full teardown in docs/component-setup-model-comparison.md.',
        'REQUIREMENT TYPE AND SPECIES ARE FILTERS ONLY (decided 2026-08-17). They are not shown on the commitment card or in the preview. Do not re-add them to the card.',
        'THERE IS NO UNSET PATH TODAY. Once a ComponentCommitment row exists it is applied or dismissed forever. Undo and the setup re-run both need one; resolve what happens to the action implementations a dismissal already deleted.',
        'The list and the preview scroll independently, and the bulk bar is static, not at the bottom of the list.',
      ],
      acceptance: [
        'Each view\'s count matches its list; filters narrow it; selecting a card opens its preview; Apply/Dismiss/Undo write at once and move the row between views; a bulk rationale warns before overwriting; Close is the only footer action.',
      ],
    },
    {
      label: 'Rationales',
      selector: '.bcn-sw-prev__decision',
      intent:
        'Every applicability decision carries one rationale, shown the same way on the drawer row (Applied and Dismissed views), in its preview, and in the setup review, so anyone can later see why a commitment was marked (product meeting 2026-10-20; one-to-one, an applicability and its rationale).',
      decisions: [
        'Setup dismissals: setup\'s reasons ("Not in Giant Garter Snake habitat", "Outside the nesting bird season", "No In-Water Work").',
        'Commitments from an unselected source document: "Source document not applicable".',
        'Setup applies: the tags that speak for the commitment ("In Valley Elderberry Longhorn Beetle habitat · Ground Disturbance, Equipment Staging"), or "Recommended by setup" when its matching requirement has no tags.',
        'Hand decisions: "Set by Hand · <decision date>", then the person\'s own rationale if they gave one.',
      ],
      gotchas: [
        'Store the rationale with the decision, and store setup\'s reasons as data alongside it (the prototype keeps reasons[]), because the re-run needs the reasons to decide what reopens.',
      ],
      acceptance: [
        'No decided row is without a rationale line; the row, the preview and the setup review show the same text.',
      ],
    },
    {
      label: 'Re-running setup',
      selector: '.bcn-sw-row__flag',
      intent:
        'What happens to earlier decisions when someone edits the setup (Edit Setup) and saves again.',
      decisions: [
        'SETUP DISMISSALS REOPEN when their reason no longer holds: they go back to Needs a decision with "Back from setup: was <reasons>". One whose reason still holds stays dismissed and takes the new reason.',
        'Selecting a source document again reopens its "Source document not applicable" commitments, so a person sees them fresh. Unselecting one records its open commitments Not Applicable on the next Save.',
        'SETUP APPLIES STAY APPLIED, with their actions, and are FLAGGED (Andy, 2026-10-20: "Flag for review"). In the Applied view the row carries a warning line "Setup now says not applicable: <reason>", and its preview offers "Dismiss with This Reason".',
        'Hand decisions, applied or dismissed, are never changed and never flagged. One the new setup disagrees with is listed in the review as Kept as Decided by Hand.',
      ],
      acceptance: [
        'Fixture: shifting the dates to Jan 4 – Apr 30, 2027 reopens 2 dismissals (2 / 13 / 27) and flags only LSAA-4 ("Outside the fall bird migration season"); dismissing it from the preview gives 2 / 12 / 28; selecting Construction MMRP again reopens its 7 (7 / 15 / 20). Totals stay 42.',
      ],
    },
    {
      label: 'Component data rail',
      selector: '.bcn-lrc',
      intent:
        'The quiet utility rail: four links that open component-data side panels via the ?data=<key> URL contract, the same contract the project dashboard established.',
      decisions: [
        'FOUR keys, not six: component info, milestones, source documents, footprint layers. The project owns the species, season and construction-activity lists; a component\'s picks from them are made in Component Setup, not in rail panels. This asymmetry is deliberate and a future reader should not "fix" it.',
        'Milestones is the only genuinely editable one, matching production, where it is a component\'s single edit tab.',
        'Source documents and footprint layers are read-only here. Which documents apply is chosen in Component Setup; layers are managed in the Spatial Library zone.',
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
        'This inset draws WORK AREAS, colored by clearance status. Component.Boundary now exists on origin/develop (BCN-1587) and is what Component Setup intersects with habitat; this map was designed before it and still reads the work areas, whose coordinates the work-areas endpoint already returns and every other surface discards (Site Clearance collapses them to a centroid dot). Whether the inset also outlines the boundary is a slicing question.',
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
      selector: '.bcn-pf',
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
