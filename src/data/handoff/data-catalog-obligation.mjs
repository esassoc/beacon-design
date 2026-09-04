// Handoff spec for /prototypes/data-catalog-obligation/<id> — the Obligation detail page.
// Declares which regions are inspectable sections (by selector) plus the design intent,
// decisions, gotchas and acceptance a dev/Claude needs to re-implement each one
// faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// SCOPE: one static route per obligation (402 of them). The captured exemplar is the
// speed-limit record (1-087), chosen because it carries a live SOURCE CONFLICT in its
// parameters — 10 mph in the ITP against 15 in the BiOp and EIR — and the fourteen
// commitments that collapse into it, which is the normalization payoff in one screen.
//
// KNOWN FIELD GAP — the most important thing on this page for the epic. The brief's
// obligation field list names eleven fields; the extracted registry carries ten, and
// FOUR of the brief's are absent from the data entirely:
//   - In-effect conditions (phase, season, activity, location, weather, event)
//   - Responsibility
//   - Evidence source
//   - Scope
// They are omitted here rather than invented. In-effect conditions matter most: they are
// the predicate that decides whether an obligation is live, which is the mechanism the
// whole concept rests on. Any real implementation needs them modelled; this prototype
// cannot show them because no data exists yet.
//
// DATA IS REAL, NOT INVENTED — see src/data/obligations.ts for provenance.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Identity header',
      selector: '.bcn-ohead',
      intent:
        'The record identity band: class chip, registry id, structural flags, and the title. Sits above the reading column and carries no actions — this page is read-only.',
      decisions: [
        'The TITLE IS A NOUN PHRASE naming the thing governed, never the value — "Speed limits on non-public roads and sites", not "10 mph". That is a rule from the brief and it is why the title alone is the identity: the value lives in Parameters, where sources are allowed to disagree with each other.',
        'Class is a neutral chip carrying the class definition as its title attribute, matching the class cell in the catalog grid so one obligation reads the same in both places.',
        'The two flags render only when true. `gate` means the duty waits on an approved action before it takes effect (17 of 402); `installed control` means it is satisfied by a physical thing — fencing, signage, screens, kits (46 of 402). An absent flag says nothing, so it shows nothing rather than rendering a "No".',
        'No status, anywhere on the page. The obligation status model was dropped on 2026-09-03; this band renders no verdict because there is no verdict to render.',
      ],
      gotchas: [
        'Do not add an edit control here. Whether obligations are editable at project scope — and whether they have scope rows at all — is an open data-model question that the prototype deliberately does not pre-answer.',
      ],
      acceptance: [
        'The band shows the class chip, the registry id, and the title as a noun phrase.',
        'On the exemplar (1-087) no flag pills appear; on a gated record such as 1-100 the "Waits on an approved action" pill does.',
      ],
    },
    {
      label: 'Record text (standard, condition, parameters)',
      selector: '.bcn-orecord',
      intent:
        'The reading column: what the duty says (Standard), what a monitor would observe if it were breached (Condition), and the values themselves (Parameters). Three esa-card sections in a stack.',
      decisions: [
        'CONDITION IS ITS OWN SECTION, not a footnote to Standard. It is the observable non-compliance, phrased as something a person in the field can see — "Vehicles exceed the posted speed limit" — and the brief notes it is what a monitoring form\'s dropdown offers. That makes it the field most likely to generate the instrument this obligation is observed through, which is worth exploring and worth keeping prominent.',
        'PARAMETERS RENDERS ONLY WHEN PRESENT (232 of 402 carry one). It is where sources disagree, and both values are kept with their provenance rather than one being picked — the brief\'s rule is that the stricter governs, but the record keeps both.',
        'Read-only. The Actions detail page pairs a read view with a large upsert modal; that pattern is deliberately not copied yet, because the editable field set depends on the four absent fields above.',
      ],
      gotchas: [
        'Parameters is free prose in the source data, not a structured value table. Any implementation that wants "10 mph governs, 15 mph superseded, per these documents" must parse or re-model it — the registry does not carry it structured, and the prototype does not pretend otherwise.',
      ],
      acceptance: [
        'Standard and Condition render for every obligation; Parameters is absent on records that carry none, with no empty card left behind.',
        'On the exemplar (1-087) Parameters shows both the 10 mph and the 15 mph values with the documents that state them.',
      ],
    },
    {
      label: 'Facets rail (class, axes, commitments)',
      selector: '.bcn-ofacets',
      intent:
        'The rail: the class and its definition, the three category axes this obligation is filed under, and the commitments that state the duty — each an esa-collapsible section of pills.',
      decisions: [
        'CATEGORIES ARE A SET, NOT A PATH. An obligation belongs to every category that fits on three independent axes, so pills are the honest treatment. A tree here would imply the record sits at one place in the registry, which is exactly what the registry\'s "enter from any axis" rule denies.',
        'COMMITMENTS ARE A FLAT SET TOO, and this is where a lineage rail was tried and rejected. bcn-detail-lineage draws a strictly linear ol (Program → Study → Sub-study → Task), but an obligation\'s ancestry FANS OUT at both levels — the exemplar carries fourteen commitments. Fourteen siblings pushed through a linear rail would read as fourteen tiers, which is a lie about the shape of the data.',
        'Commitments are NOT grouped by source document, because the registry carries no source mapping for a commitment id. Grouping them would mean inferring the source from the id prefix, which is invention.',
        'An axis the obligation does not sit on renders nothing at all rather than an empty section — 178 of 402 carry no species, and a blank "Species" heading would read as missing data rather than as inapplicable.',
      ],
      gotchas: [
        'The category pills show display NAMES, but the underlying record stores category IDS. The name lookup is built once from the axes in src/data/obligations.ts; do not denormalize names onto the row, or the registry and the record can drift.',
        'Grouping commitments by source document is the obvious next request. It needs a commitment→source mapping that does not exist in this data — treat it as a data dependency, not a UI change.',
      ],
      acceptance: [
        'Class shows the label and the brief\'s own one-line definition; the notice window appears only for Notify-class records (exactly the 50 that carry one).',
        'Each axis section lists that obligation\'s categories as pills, alphabetically, and absent axes render no section.',
        'On the exemplar (1-087) "Stated by" shows a count of 14 and lists all fourteen commitment references.',
      ],
    },
  ],
};
