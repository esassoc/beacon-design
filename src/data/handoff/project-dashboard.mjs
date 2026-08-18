// Handoff spec for the /project-dashboard prototype — the authored counterpart to
// the auto-derived capture. It declares which regions are inspectable sections (by
// selector), plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// Context: the logged-in PROJECT HOMEPAGE — "the front door of Beacon when you log
// in" — reviewed by the team at the 2026-08-04 Beacon product meeting. Two decisions
// from that review govern the whole page and should govern the build:
//
//   1. ACTIONS ARE THE SPINE. Every urgency signal on this page is an ACTION with a
//      due date, carried by its TYPE (tracking / monitoring / reporting). A lapsed
//      survey is a monitoring action; an agency submittal is a reporting action.
//      Urgency is DERIVED from dueDate vs today (overdue / due within 14 days /
//      upcoming) and never stored. There is no separate "critical item" entity.
//   2. THE DASHBOARD IS A SCAFFOLDING. Each module improves independently over
//      time, so shipping a partial page is not a compromise. See "First slice"
//      below — Monitoring and Reporting modules, the criticality treatment, the
//      timeline, and the map were all explicitly deferred past slice 1.
//
// FIRST SLICE (product meeting): header (with inline cover/logo edit), project-data
// drawers, project details, components incl. the project-wide row, a star column on
// the all-components list, the Tracking module, and the Setup Wizard card. Every
// card links to pages that already exist — "a lot of this is roll-up, and a lot of
// this is just routing."
//
// PRECONDITION, flagged in the review and worth confirming before slicing: DCP's
// actions must actually be typed (planning / reporting / monitoring / tracking) or
// the modules and timeline have nothing to sort by.
//
// Field shapes: src/data/project-actions.ts (the action model + derivations),
// src/data/project-dashboard.ts (project, modules, wizard), src/data/project-data.ts
// (species / milestones / activities / seasons / layers).

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
      label: 'Project header',
      selector: '.bcn-phome',
      intent:
        'The full-bleed identity band that answers "where am I": a cover photo, the tenant/org seal overlapping it in the avatar idiom, the project name as the page\'s sole H1, the owning organization as an eyebrow, and the current phase worn lightly as a chip. It replaces the old project page, which the review described as showing only "status and description… and a map that shows nothing."',
      decisions: [
        'Cover image and logo are editable IN PLACE: hovering the header reveals "Change cover" and a logo edit chip. The review was explicit that this must not live in project configuration settings — "you can mouse over either area… just to keep people in one spot."',
        'The project name is the page H1 and PageLayout\'s own title row is suppressed — the H1 reads as the entity, not the page.',
        'Phase is a single chip, never a project-level filter. Detail belongs on the component dashboards.',
      ],
      gotchas: [
        'PHASE HAS NO DATA MODEL YET. The chip renders a fixture value; a general project-phase field has to be added before this ships as shown. Raised in the review as "we probably need to build something for that."',
        'The band is rendered into PageLayout\'s `bleed` slot so it spans edge-to-edge under the topbar — a sanctioned per-page anomaly, not a layout primitive to generalize.',
        'Hover-revealed controls need a keyboard path: the edit affordances are real buttons and also appear on :focus-visible. Do not implement them as hover-only CSS.',
      ],
      acceptance: [
        'Cover, seal, project name, org, and phase chip render; hovering the cover or the logo reveals an edit control that is also reachable by keyboard; no image editing is required in settings to change either.',
      ],
    },
    {
      label: 'Timeline',
      selector: '.bcn-tl',
      intent:
        'A slim, full-width band plotting the next 30 / 60 / 90 days on one date axis, in three lanes: action due dates (dots colored by derived urgency), season windows (bars), and milestones (azure diamonds). Users asked for a calendar; the review\'s judgment was to keep the dashboard view "slim… high level" rather than defaulting to a month grid.',
      decisions: [
        'The window opens 7 days BEFORE today, so work that is already overdue stays visible instead of falling off the left edge. The today line marks the boundary.',
        'Marks open a CLICK-PINNED popover, not a hover tooltip. An action\'s popover is an action-implementation card: commitment badge, type, component, due date with the overdue callout, status, and a link to the action. A season\'s adds source document and related species.',
        'Milestones use --color-info (azure) because they mark SCHEDULE, not severity — they must not borrow the red/amber urgency palette or an entity color.',
        'Seasons scale: a project can carry 10–15. The lane shows the ones whose start or end falls inside the window (the ones changing) and hides the rest behind a show-all toggle. Bars carry their own date range.',
        'A separate month-grid calendar page was built and then CUT — the timeline covers the need. Do not rebuild one without asking.',
      ],
      gotchas: [
        'DEFERRED PAST SLICE 1. The timeline needs observation→action and report→action relationships to be real before its lanes mean anything.',
        'esa-card sets `overflow: hidden`, so the popover MUST be rendered outside the card (the prototype appends it to document.body and positions it fixed, flipping above the mark when there is no room below, and repositioning on scroll/resize). Rendering it inside the card clips it.',
        'Seasons recur annually: resolve start and end AS A PAIR per candidate year, or a wrap-year season (Nov 1 – Mar 31) matches the wrong occurrence and renders in the wrong place.',
        'All positions derive from a fixed TODAY in the fixture so the demo renders identically on every run; the real implementation obviously uses the current date, but keep the derivation server-side and deterministic.',
      ],
      acceptance: [
        'A 30-day window shows overdue actions to the left of the today line; the 60 and 90 toggles change which actions, seasons, and milestones appear; clicking a dot pins an action card that survives mouse-out and closes on Esc or outside click; the popover is never clipped by the card.',
      ],
    },
    {
      label: 'Modules — Tracking, Monitoring, Reporting',
      selector: '.bcn-mod',
      intent:
        'The three work areas as a row of equal cards ABOVE the components, each owning its own urgent work. This replaced a standalone "Most critical now" section: the review proposed "integrating critical status indicators directly into those modules rather than a separate section," and noted the figures "deserve being above components."',
      decisions: [
        'Every figure and row is an ACTION of that module\'s type. Each card shows its overdue count and its due-in-14-days count, then lists the most urgent actions (overdue first, then soonest due), capped at 2 with an overflow link.',
        'Action rows ARE the "red and yellow circles that navigate" the review asked for — each row is a link to the action, dot colored by derived urgency.',
        'Commitment codes render with the shared commitment badge (bcn-commitment-badge — mono, commitment purple, 12% tint), the same chip used in the tracker and the timeline popover.',
        'Cards are stretched-portal divs: a full-card link sits behind the content because action rows and sub-links cannot nest inside a card-wide anchor.',
        'Each card also lists its named sub-surfaces (Tracking Summary / Project Tracking / Permit Tracking / Action Lists, etc.) — these are routes that already exist.',
      ],
      gotchas: [
        'ONLY TRACKING SHIPS IN SLICE 1. The review cut Monitoring and Reporting — "we just leave monitoring and reporting out of there" — along with the red/amber criticality treatment, because the underlying relationships (observation→action, report→action) do not exist yet.',
        'Do not reintroduce a separate criticality section. If criticality needs its own surface later, it goes back as a deliberate decision, not by default.',
        'The overflow link text states what it counts ("2 more overdue or due soon") — do not soften it to "needs attention," which names no derivation.',
      ],
      acceptance: [
        'Each module shows overdue and due-in-14-days counts derived from actions of its type; the listed actions carry a commitment badge, component, and timing; clicking a row opens that action; clicking the card body opens the area.',
      ],
    },
    {
      label: 'Components',
      selector: '.bcn-stc',
      intent:
        'The components the user works in, as portal cards into their component dashboards, each carrying a Tracking / Monitoring / Reporting pulse so a component\'s health reads across all three at a glance. A PROJECT-WIDE row leads the list, answering the review\'s question of whether "the project view is inclusive of components or not."',
      decisions: [
        'The project-wide row uses the same card anatomy with a folder glyph and no star — it is always present and cannot be unstarred. Its pulses count actions with no component.',
        'Stars are PER-USER — a personal lens, not a team designation (a user-preference keyed user × component).',
        'For slice 1 the only star affordance is A STAR COLUMN ON THE ALL-COMPONENTS LIST: "I think we could add a star column here for now." The full starring UX belongs to the Component Dashboard epic (BCN-1412).',
        'A user with no stars should see the most active components rather than an empty section — the homepage centre is never blank.',
        'No headline row: the three pulses carry the story (an editorial one-liner per component was tried and removed).',
      ],
      gotchas: [
        'The two prototypes must agree on the starring model — Component Dashboard (BCN-1412) is queued directly behind this epic and owns the richer starring UX.',
        'Card text maps to real DTO fields: name → Component.Name, the classifier line → Component.Description, and the trailing status → ComponentStatus.Name shown only when it is not "Active". Do not synthesize prose here.',
      ],
      acceptance: [
        'A project-wide row leads the list, followed by the user\'s starred components; each card shows three pulses and opens that component\'s dashboard; stars are visible per-user and can be set from the all-components list.',
      ],
    },
    {
      label: 'Setup Wizard',
      selector: '.bcn-swc',
      intent:
        'The project\'s SETUP PIPELINE as its own slim card — Source Documents → Commitments → Requirements → Actions — with a per-entity rollup at each step. It sits apart from the module row because it is not a work area; it is how a project gets configured in the first place.',
      decisions: [
        'Steps are numbered in Beacon\'s setup ramp: --color-source, --color-commitment, --color-requirement, --color-action. These are already global tokens and the same colors the wizard homepage uses, so the two surfaces are one system rather than a match by eye.',
        'Each step carries its own counts: documents created; commitments created/approved; requirements created/approved; and for Actions the un-triaged figure that matters most — requirements not yet in an action — plus actions created/approved.',
        'The card wears the prod wizard identity: the teal circular compass mark and the serif title voice.',
        'Step cards are NEUTRAL (surface-sunken fill, standard border). The colored numeral alone carries the step\'s color coding.',
      ],
      gotchas: [
        'NEVER use a colored border as the category indicator — a colored top rule on these step cards was rejected outright. Category color belongs in a badge, icon, dot, or background tint. This is a standing house rule, not a preference for this card.',
        'Do not report "actions to create": how many actions a set of requirements becomes is unknowable until triage. Count existing records only.',
        'esa-button supports a LEFT `icon` prop only; a trailing arrow slotted into the label renders misaligned. A trailing-icon option is a hub gap worth ledgering before designs assume one.',
      ],
      acceptance: [
        'Four steps numbered in their entity colors with per-entity counts; the Actions step surfaces requirements-not-in-an-action with an amber marker; no colored borders anywhere; the CTA resumes setup.',
      ],
    },
    {
      label: 'Project data rail',
      selector: '.sidebar .esa-card:has(.bcn-lrc)',
      intent:
        'A quiet list of the project\'s own data — Project Info, Species, Milestones, Construction Activities, Seasons, Spatial Data — each opening a SIDE PANEL. These panels REPLACE the prod project-details-layout tab pages outright; the review confirmed these entities stay project-scoped rather than moving to the Data Catalog.',
      decisions: [
        'Panel open-state lives in the URL as ?data=<key> (pushState, popstate, honored on load), so the deep links the tab routes provided survive the page-to-panel move.',
        'Panel lists are READ-ONLY slim cards, each bespoke to its data, dense enough to show 6–8 at once, with a search field on every panel. Sort is alphabetical everywhere except Milestones, which sort by date.',
        'Add is a primary button in the panel footer; per-row Edit opens a STACKED CHILD DRAWER carrying that entity\'s form (the prod inline-create-panels, ported). The standard edit footer is Delete left, Cancel/Save right, medium.',
        'Project Info opens straight into the editable form and ends in the danger zone that gives delete-project its new home.',
        'Seasons render as the ported prod season-card (year timeline, teal active span, today marker, wrap-year aware).',
      ],
      gotchas: [
        'A live pain point the review raised: project data cannot currently be edited from the tracker — "if I\'m on the tracker and I don\'t have a date on my milestone, I cannot easily add it from there." This drawer pattern is the canonical home, but it should be invocable from the tracker and action dialogs too.',
        'Deleting the replaced tab routes may need redirects to the ?data= URLs for bookmarked links.',
        'Checkboxes in these forms render as switches; there is no esa month-day picker lego yet, so season start/end use text fields in the prototype (another hub gap).',
      ],
      acceptance: [
        'Each rail link opens its panel and updates the URL; the browser back button closes it; lists are searchable and read-only with per-row Edit opening a child drawer; Project Info ends in a delete danger zone.',
      ],
    },
    {
      label: 'Project area map',
      selector: '.bcn-fmap',
      intent:
        'The project\'s footprint as an inset map in the rail, expandable to a modal. The review named the current map "not very useful yet, but I think it can be," and diagnosed it as a DATA problem: "we don\'t even have a footprint geometry."',
      decisions: [
        'The map shows the boundary polygon and the alignment only. Component markers were tried and cut — they read as noise at this size.',
        'The boundary\'s SOURCE renders as a field on the card, not a caption. Today it names the derivation; once projects can upload geometry it names the uploaded file in the same slot.',
        'The inset is deliberately non-interactive (it reads as a picture of the project); the modal is fully interactive and carries the legend plus an Upload-boundary affordance.',
        'ONE map component serves all three surfaces — the project boundary, the component index footprints, and a single component’s work areas — and it is bcn-footprint-map. The boundary is an `area`, the tunnel alignment a `line`, and legend keys carry a `shape` so a filled area and a dashed line read as themselves rather than as two identical dots. Do not build a project-specific map: bcn-project-map existed, became a strict subset of this one, and was deleted 2026-08-17.',
      ],
      gotchas: [
        'DEFERRED PAST SLICE 1 — this is blocked on geometry, not design. Real boundaries arrive with the spatial-data epic (KMZ / shapefile / GDB upload, feature-server connections), agreed 2026-08-03. The prototype derives a stand-in boundary from the 231 real DCP geotech coordinates already in the repo.',
        'Leaflet needs setView() BEFORE any layer is added, or _clipPoints throws on a map with no view.',
        'The modal map must be created lazily on first open (and invalidateSize() on reopen) so it measures a visible container. The same class of bug bites any map built inside a hidden panel, which is why the component watches its own box and re-fits on first real size.',
        'Geometry crosses the boundary as [lat, lon], NOT GeoJSON [lon, lat]. dcp-geo.json is GeoJSON, so the flip happens once in src/data/project-dashboard.ts (PROJECT_BOUNDARY_RING / PROJECT_ALIGNMENT_PATH). Getting it backwards puts the Delta in the Indian Ocean, silently.',
        'The review\'s appetite here was explicit and worth carrying into the spatial epic: "you should be able to upload a boundary just directly… let people draw on the maps or upload shape files."',
      ],
      acceptance: [
        'The rail shows the project footprint with its boundary source named as a field; expanding opens an interactive map with a legend and an upload affordance; no component markers.',
      ],
    },
    {
      label: 'Project details',
      selector: '.sidebar .esa-card:has(.bcn-pf)',
      intent:
        'The project record\'s own fields — description, start and end dates, and attached files — as a quiet rail card below the map.',
      decisions: [
        'Every line is a Project-record field. Lead agency, Region, Components, and Tracking-since were all removed because none had a source in the data model.',
        'The description is the project\'s real public description, edited through the Project Info panel rather than here.',
      ],
      gotchas: [
        'Resist re-adding derived or decorative facts to this card. If a fact has no field behind it, it does not belong on the surface — that rule is why the card is short.',
      ],
      acceptance: [
        'Description, start date, end date, and file rows render, and every one of them traces to a Project field.',
      ],
    },
  ],
};
