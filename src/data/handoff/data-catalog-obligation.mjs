// Handoff spec for /prototypes/data-catalog-obligation/<id> — the Obligation detail page.
// Declares which regions are inspectable sections (by selector) plus the design intent,
// decisions, gotchas and acceptance a dev/Claude needs to re-implement each one faithfully
// in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// SCOPE: one static route per obligation (402 of them). The captured exemplar is the
// speed-limit record (1-087), chosen because it carries a live SOURCE CONFLICT in its
// parameters — 10 mph in the ITP against 15 in the BiOp and EIR — and fourteen commitments
// spanning four source documents, which is the normalization payoff in one screen.
//
// REBUILT 2026-09-06 as the SIBLING of data-catalog-action.astro, replacing a badge-heavy
// first pass. Four changes came out of that review: subjects nested major→minors instead of
// a pill row, activities as a bulleted "Construction activities" list, commitments carrying
// their real titles grouped by source document, and a full-width scope table.
//
// KNOWN FIELD GAP — still the most important thing on this page for the epic. The brief's
// obligation field list names eleven fields; the registry carries ten, and FOUR of the
// brief's are absent from the data entirely:
//   - In-effect conditions (phase, season, activity, location, weather, event)
//   - Responsibility
//   - Evidence source
//   - Scope
// They are omitted rather than invented. In-effect conditions matter most: they are the
// predicate that decides whether an obligation is live, which is the mechanism the whole
// concept rests on.
//
// FIELD COVERAGE, measured — the page renders conditionally because the data is uneven:
// standard 402/402, condition 402/402, subjects 402/402, activities 402/402, commitments
// 402/402, parameters 232 (58%), species 224 (56%), notice window 50 (12%, exactly the
// Notify class), installed control 46 (11%), gate 17 (4%).

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Identity header',
      selector: '.bcn-ohead',
      intent:
        'The record identity band: class chip and registry id on a meta line, then the title with the Edit control holding the far edge. Sibling of the Action page header, which carries a commitment badge, the name as an H1 and a type badge.',
      decisions: [
        'The TITLE IS A NOUN PHRASE naming the thing governed, never the value — "Speed limits on non-public roads and sites", not "10 mph". That is a rule from the brief, and it is why the title alone is the identity: the value lives in Parameters, where sources are allowed to disagree.',
        'Class is a neutral chip carrying the class definition as its title attribute. It is a categorical facet driving the evidence shape, not a status, so it borrows no status colour.',
        'The two flags render only when true — gate (17 of 402) and installed control (46 of 402). An absent flag says nothing, so it shows nothing rather than rendering a "No".',
        'No status anywhere on the page. The obligation status model was dropped on 2026-09-03.',
        'The title row is the `repel` primitive so the Edit control holds the right edge without a bespoke flex rule.',
      ],
      gotchas: [
        'Edit is present but inert. The editable field set depends on the four absent fields above, so shipping a form here would mean inventing them.',
      ],
      acceptance: [
        'The band shows the class chip, the registry id, the title as a noun phrase, and Edit obligation.',
        'On the exemplar (1-087) no flag pills appear; on a gated record such as 1-100 the "Waits on an approved action" pill does.',
      ],
    },
    {
      label: 'Record text and evidence',
      selector: '.stack > .sidebar > .stack:last-child',
      intent:
        'The main reading column: what the duty says (Standard), what a monitor would observe if it were breached (Condition), the values themselves (Parameters), and the Evidence of Compliance box. Four esa-card sections in a stack.',
      decisions: [
        'CONDITION IS ITS OWN SECTION, not a footnote to Standard. It is the observable non-compliance phrased as something a person in the field can see — "Vehicles exceed the posted speed limit on non-public roads or sites" — and the brief notes it is what a monitoring form\'s dropdown offers. Every one of the 402 rows carries one, which makes it the most under-used field in the registry.',
        'PARAMETERS RENDERS ONLY WHEN PRESENT (232 of 402). It is where sources disagree, and both values are kept with their provenance rather than one being picked — the brief\'s rule is that the stricter governs, but the record keeps both.',
        'Evidence reuses bcn-evidence-list, the same component the tracker dialog and the evidence drawer use, so an evidence record looks identical wherever it appears.',
        'Read-only. The Action page pairs a read view with a large upsert modal; that pattern is deliberately not copied yet.',
      ],
      gotchas: [
        'The two evidence records are EXAMPLE data defined in the page, and the only content on this page the registry did not supply — obligations produce evidence from the field and none of that data exists. Do not treat them as fixtures to port.',
        'Parameters is free prose, not a structured value table. An implementation that wants "10 mph governs, 15 mph superseded, per these documents" must model value, unit and comparator — the registry does not carry it structured.',
      ],
      acceptance: [
        'Standard and Condition render for every obligation; Parameters is absent on records that carry none, with no empty card left behind.',
        'On the exemplar, Parameters shows both the 10 mph and the 15 mph values with the documents that state them.',
      ],
    },
    {
      label: 'Facets rail',
      selector: '.bcn-ofacets',
      intent:
        'The rail: Details, nested Subjects, Construction activities, Species, and Related commitments — a stack of esa-collapsible sections, all open, each a small list rather than a wall of badges.',
      decisions: [
        'SUBJECTS ARE NESTED major→minors, using the data-catalog lineage treatment rather than a flat pill row. An obligation belongs to every category that fits, so this is a small forest (several majors, each with its minors), not a path.',
        'ACTIVITIES ARE A BULLETED LIST and named "Construction activities" to match what the Action side calls them — prod models this as ActionProjectConstructionActivity.',
        'COMMITMENTS CARRY THEIR TITLES and group under the SOURCE DOCUMENT that states them. src/data/dcp-commitments.json resolves 1138 of 1270 references (90%) to a title, a category and a real source document. This is where normalization becomes legible: the speed-limit record is stated four times in the USFWS BiOp, four in the EIR, four in the ITP and once in the Amendment.',
        'An id that does not resolve keeps its code and sits under "Source not recorded", with the title replaced by an explicit line. It is NEVER guessed from the id prefix.',
        'The commitment row puts the code ABOVE the title, not beside it: titles run past 60 characters and a two-column row would either clip them or leave the code column mostly empty.',
        'A section whose field is absent renders nothing at all — 44% carry no species, and only the Notify class has a window. An empty heading reads as missing data rather than as inapplicable.',
      ],
      gotchas: [
        'THE RAIL IS NOW TALLER THAN THE MAIN COLUMN on records with many commitments — fourteen titled commitments run roughly ten times the height of fourteen badges. That is the direct cost of showing titles, and it leaves a visible gap above the full-width scope table. If it needs fixing, cap the commitment list with a disclosure rather than reverting to codes.',
        'Category PILLS show display names but the record stores category IDS; the lookup is built once in src/data/obligations.ts. Do not denormalize names onto the row or the registry and the record can drift.',
      ],
      acceptance: [
        'Subjects render as majors with their minors indented beneath a hairline, with no list markers.',
        'On the exemplar, Subjects shows Air quality → Fugitive dust, Birds → Burrowing owl, Site conduct → Speed limits.',
        'Related commitments shows five groups including "Source not recorded" for the one unresolved id (11.29), and COA 11.11 resolves to "Speed Limits".',
        'The Species section is absent on the exemplar, which carries none.',
      ],
    },
    {
      label: 'In force at (scope table)',
      selector: '.bcn-oscope',
      intent:
        'The full-width table of components the obligation applies at — the positional sibling of the Action page\'s "Tracked Actions" section. Four columns: component, type, the activity that carries it, and an evidence count.',
      decisions: [
        'DELIBERATELY NOT CALLED IMPLEMENTATIONS. An Action\'s implementation is a trackable instance with status, owner, due date and completion — that is ActionImplementation in prod. An obligation\'s instances are not enumerable (the world generates them: per rain, per encounter, per day of work), so there is nothing to instantiate. A row here is an applicability assertion plus an evidence anchor, and carries none of those four columns.',
        'A mini-table, not a second AG Grid. The Action page justifies a grid because its rows carry status and are sortable; four read-only columns inside a detail page do not.',
        'Component names come from the project\'s real fixture (src/data/component-dashboard.ts POPULATED), reused so this table names the same components as every other surface in the spoke.',
      ],
      gotchas: [
        'THE ROWS ARE EXAMPLE SCOPE. The registry carries no scope, and whether obligations get scope rows AT ALL is an open model question. They are derived deterministically from the obligation id (no Math.random, no Date.now) purely so the table\'s shape can be reviewed — reload twice and diff nothing.',
        'The first version of this used a stride of 7 to pick components from a 7-entry fixture, so every row picked the SAME component. Any derivation like this needs a stride of 1, or an explicit distinct check.',
      ],
      acceptance: [
        'The table lists 2 to 4 distinct components — never the same component twice — each with the activity that carries the obligation.',
        'An obligation whose activities resolve to no components renders the esa-empty-state instead of an empty table.',
      ],
    },
  ],
};
