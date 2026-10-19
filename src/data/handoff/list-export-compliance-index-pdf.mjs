// Handoff spec for /prototypes/list-export-documents/compliance-index: every action and
// obligation on the project in one PDF, from the Export card on the Compliance Index's
// page on Lists (lists-compliance-index).
// Written for Beacon's prototype-implement and pdf-template skills: an Angular print
// route under Beacon.Web's src/app/print, captured by PdfService.GeneratePdfFromAngularRoute.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Shares its print plumbing (Letter, 9pt, Shadow DOM, the footer) and its three
// components with the list PDFs; see list-export-obligation-pdf. What is new here: two
// kinds of item in one outline, a new read endpoint, and the Unfiled group.

/**
 * @typedef {Object} HandoffSection
 * @property {string} label     Chip label in the inspector.
 * @property {string} selector  What to slice out as this section (first match).
 * @property {object[]} [apply]  Op recipe (click / fill / clear / clickText / key) to drive a live state.
 * @property {string} [intent]  What this is and why it exists.
 * @property {string[]} [decisions] Key design/implementation decisions.
 * @property {string[]} [gotchas]   Traps to avoid when re-implementing.
 * @property {string[]} [acceptance] "Done when…" checks.
 */

/** @type {{ sections: HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Print route + data',
      selector: '.bcn-doc__head',
      intent:
        'The project\'s whole Compliance Index as one document: every category › subcategory, and inside each subcategory its actions, then its obligations. Items with no subcategory print last under Unfiled.',
      decisions: [
        'Print route: `compliance-index/:projectID` in print.routes.ts, a child of PrintLayoutComponent, guarded by printAuthGuard.',
        'Data: a NEW read, `GET /projects/{projectID}/compliance-index/export-data`, on ComplianceIndexController. The existing `GET /projects/{projectID}/compliance-index` returns the categories and subcategories without the obligations, so it cannot feed this document.',
        'The new DTO: categories in their SortOrder, each with subcategories in theirs, each with Actions (by Action.ComplianceIndexSubcategoryID: Name, Text, RequirementType, FrequencyName, commitment codes, implementations) and Obligations (by their subcategory: title, description, ObligationClass, audience, TriggerText, commitment codes). Plus the project name and the two totals.',
        'Inside a subcategory: actions first, then obligations, each run under a small label ("Actions", "Obligations" in the tenant\'s terms), each A–Z.',
        'Download: `GET projects/{projectID}/compliance-index/generate-pdf`, file named `Compliance Index.pdf` (or with the project name), Letter via the PdfService paper option.',
        'Summary columns: Item 56%, Type 24% (an action\'s RequirementType, an obligation\'s class), Commitments.',
      ],
      gotchas: [
        'It is long. About 600 items print as roughly 137 Letter pages (28 of them the summary). GeneratePdfFromAngularRoute waits for NetworkIdle with a fixed navigation timeout; measure on a full project, and if it runs close, move the export to the event consumer path ReportPackageZipConsumer uses rather than raising the timeout.',
        'Action entries in the index show their Type in the facts row (the group is a subcategory, not a type); obligation entries show Class, Audience, Applies When.',
        'Entry titles here sit under three headings (category, subcategory, the kind label), so they are one level deeper than in the list PDFs.',
      ],
      acceptance: [
        'Every action and every obligation on the project appears exactly once in the summary and once in the detail.',
        'The title block\'s Actions and Obligations counts equal the rows printed of each kind.',
      ],
    },
    {
      label: 'Unfiled group',
      selector: '.bcn-doc-groups__group:last-of-type',
      intent:
        'Items the index has not placed yet, as the LAST group: category "Unfiled", subcategory "Needs a home", the same bin the Compliance Index page shows.',
      decisions: [
        'In prod an action is unfiled when Action.ComplianceIndexSubcategoryID is null; an obligation, when it has no subcategory. Nothing is computed.',
        'Unfiled prints last in both the summary and the detail, whatever the categories\' sort order.',
        'An empty Unfiled group does not print.',
      ],
      gotchas: [
        'The prototype decides "unfiled" itself: an action files under the subcategory holding more than half of its requirements, else Unfiled (7 actions in the fixture). That rule exists only because the fixture has no subcategory field. Do not port it.',
      ],
      acceptance: ['A project with one action whose subcategory is cleared prints that action under Unfiled › Needs a home, after every other category.'],
    },
    {
      label: 'Summary table',
      selector: '.bcn-doc-summary',
      intent: 'One line per item across the whole index, with category, subcategory and kind as full-width rows over one repeating header.',
      decisions: ['Same single-table build as the list PDFs; the kind label is a third full-width row inside each subcategory.'],
      acceptance: ['Every printed page of the summary starts with the Item / Type / Commitments header.'],
    },
  ],
};
