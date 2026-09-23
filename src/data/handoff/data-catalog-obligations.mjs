// Handoff spec for /prototypes/data-catalog-obligations — the Obligations list in the
// Data Catalog. Declares which regions are inspectable sections (by selector) plus the
// design intent, decisions, gotchas and acceptance a dev/Claude needs to re-implement
// each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// SCOPE: the flat catalog of the Obligation entity — the second tracking record type
// alongside Action. This is the "filing cabinet" half of the pair; the browsable,
// hierarchical registry is a DIFFERENT surface that lives inside the setup wizard, and
// the two are deliberately not the same view.
//
// DATA IS REAL, NOT INVENTED: all 402 rows are extracted verbatim from the
// Actions-and-Obligations specimen by scripts/extract-obligations.mjs, which verifies
// the counts the brief asserts and fails on a mismatch. See src/data/obligations.ts.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Obligations grid',
      selector: '.bcn-og',
      intent:
        'One row per obligation across all 402, using the shared Beacon grid kit (src/lib/beacon-grid.ts) already carried by the component index, the work-area board and the other catalog lists. Columns are the obligation title, its class, and the three category axes it is filed under (subject major/minor, activities, species), plus the commitments that state the duty. Row click and the title link both open the obligation detail page.',
      decisions: [
        'NO STATUS COLUMN, for two independent reasons. The team dropped the obligation status model on 2026-09-03, so there is no compliance verdict to render at all; and the sibling Actions catalog already omits status on principle, because status is tracking data that belongs to the Tracking area rather than to a configuration surface.',
        'Class renders as a NEUTRAL chip, never a colored one. Class (Adhere / Monitor / Notify / Roster) is a categorical facet that drives the evidence shape — it is not a status, and giving it status color would say otherwise. Coloring it would also mean inventing a four-value palette with no design token behind it.',
        'The catalog is FLAT on purpose. An obligation belongs to every category that fits on three independent axes, so its categories are a set rather than a path. The hierarchy is real but it belongs to the registry, which is a different surface; a tree here would imply this record sits at one place in it.',
        'Multi-valued axis cells join their values with commas and ellipsize with a tooltip rather than wrapping, so row height stays uniform and the grid stays scannable at 402 rows.',
        'Chrome, counts, CSV export and theme all come from the shared kit (BcnGridChrome, BcnGridFooter, mountBeaconGrid) rather than being rebuilt — the older Actions list predates that extraction and still carries the markup by hand; do not copy that page.',
      ],
      gotchas: [
        'The grid prefix ("og") must match between BcnGridChrome, BcnGridFooter and mountBeaconGrid. Two grids on one page sharing a prefix would drive each other\'s filters, which is why the prop is required rather than defaulted.',
        'The grid host has a FIXED height (40rem) so the page below it does not jump as filters narrow the set. Do not make it auto-height.',
        'Row order is alphabetical by title, set once in the data module — not a grid sort model. AG Grid preserves rowData order until the user sorts, which is what lets the grid open on the registry\'s own ordering rule without fighting the first column-header click.',
      ],
      acceptance: [
        'The grid lists all 402 obligations, alphabetical by title, with the total shown in the footer and the card heading.',
        'Typing in Search narrows across every column; Clear Filters restores all 402 and empties the search box.',
        'Filtering the Activities column to a single activity yields every obligation that work carries — the contractor-checklist read.',
        'Clicking a row, or its title link, opens that obligation\'s detail page. The title link must also work with a middle click or a new-tab modifier.',
        'Download as CSV exports the currently filtered rows, and the footer count matches what is on screen.',
      ],
    },
    {
      label: 'Grid footer (download + counts)',
      selector: '.bcn-gfoot',
      intent:
        'The strip welded under the grid: CSV download on the left, record count on the right. Shared with every other carded grid in the spoke via BcnGridFooter.',
      decisions: [
        'The filtered count is a SECOND figure shown only once a filter actually hides rows — never a replacement for the total. "Total Records: 402 · Filtered Records: 14" says both things a person needs; overwriting the total with 14 would leave them unable to tell a filtered set from a small one.',
      ],
      gotchas: [
        'The total is SSR-seeded so the strip is correct before the grid mounts; mountBeaconGrid then takes over updating it. A hard-coded total in the markup would drift the moment the registry grows.',
      ],
      acceptance: [
        'At rest the strip reads "Total Records: 402" with no filtered figure beside it.',
        'Applying any filter reveals the filtered count; clearing it hides that figure again rather than showing "402 of 402".',
      ],
    },
  ],
};
