// Handoff spec for /prototypes/list-export-documents/[id] as an OBLIGATION LIST PDF
// (captured on construction-kickoff-summary). Written for Beacon's prototype-implement
// and pdf-template skills: the document is an Angular print route under Beacon.Web's
// src/app/print, captured to a PDF by PdfService.GeneratePdfFromAngularRoute.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Round 1 decisions (2026-10-19): Summary + Detail, the tenant's logo, 9pt body and 8pt
// meta, Letter paper, no evidence counts. The same three components print the action
// list and the compliance index (list-export-action-pdf, list-export-compliance-index-pdf);
// only the columns and the entry's facts differ.

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
      selector: '.bcn-doc',
      intent:
        'An obligation list as the PDF its Export card downloads: a title block, a summary table with one line per obligation, then every obligation in full from a new page. It is the printed twin of the CSV: same list, same wording, same order.',
      decisions: [
        'Print route: `obligation-list/:obligationListID` in print.routes.ts, a child of PrintLayoutComponent beside `report/:reportID`, guarded by printAuthGuard like the rest.',
        'Data: the print component reads the same endpoint the list tree and the CSV read, `obligationListsObligationListIDTreeGet` (its Members, ObligationListTreeMemberDto), plus the list detail for its Name and Description. No new DTO.',
        'Per obligation it prints ListTitle (fallback ObligationTitle), ListDescription, ObligationClass, ObligationAudienceDisplayName, TriggerText (labelled "Applies When") and the Commitments\' codes. These are the list\'s own wording, not the obligation registry\'s.',
        'Grouping is category › subcategory by ComplianceIndexCategoryName / ComplianceIndexSubcategoryName, in the order the list tree shows them; obligations A–Z inside a subcategory.',
        'Download: a new `GET obligation-lists/{obligationListID}/generate-pdf` modelled on ReportController.GenerateReportPdf, calling GeneratePdfFromAngularRoute($"obligation-list/{id}", tenant) and returning File(bytes, "application/pdf", $"{list.Name}.pdf").',
        'Build one grouping helper (the prototype\'s docOutline) that both the summary table and the detail render, so their order cannot drift.',
      ],
      gotchas: [
        'Paper is LETTER, not A4. PdfService hard-codes Format = "A4" and an A4 viewport (794 × 1123). Add a paper option to GeneratePdfFromAngularRoute and pass Letter (816 × 1056 CSS px) for the three list-export routes, leaving the other routes on A4. The pdf-template skill says "design for A4"; these routes are the exception.',
        'Type is 9pt body and 8pt meta. That is under the 13px floor for screens on purpose: the floor does not apply to printed PDFs. Set it on the template, not on PrintLayoutComponent\'s 14px base, so other print routes are unchanged.',
        'PrintLayoutComponent renders into Shadow DOM with `all: revert`. The template\'s SCSS must declare its own table and heading styles; global app classes do not reach in.',
        'Prod\'s footer prints the document title and "Page N". The prototype prints "Page N of M". Adding the totalPages span changes every Angular-route PDF, so decide it once in PdfService.',
        'No evidence counts and no status on obligations: an obligation has no lifecycle.',
      ],
      acceptance: [
        'Downloading from the Export card returns a Letter PDF named after the list, opening on the title block and summary table, with the detail starting on a new page.',
        'Every member of the list appears once in the summary and once in the detail, in the same order.',
      ],
    },
    {
      label: 'Title block',
      selector: '.bcn-doc__head',
      intent: 'The tenant\'s logo, the list\'s name and description, then one line of facts: Type, Project, Exported, and the obligation count.',
      decisions: [
        'Brand is the TENANT\'s logo only (round 1: "Tenant"). No Beacon or ESA mark. The tenant arrives on the print URL (PdfService passes it as ?tenant=), so the logo needs no extra call.',
        'Exported is the generation date, YYYY-MM-DD.',
        'The count is the number of members printed, derived from the data, never stored.',
        'Facts are label + value pairs on one line (the prototype\'s BcnDocFacts). The same pairs component prints the facts under each obligation.',
      ],
      acceptance: ['The logo is the tenant\'s; the count equals the rows in the summary table.'],
    },
    {
      label: 'Summary table',
      selector: '.bcn-doc-summary',
      intent:
        'One line per obligation, ahead of the detail: Obligation, Class, Audience, Commitments. It scans like a table of contents for a crew lead who needs to find one duty fast.',
      decisions: [
        'ONE <table> for the whole document, with the category and subcategory as full-width rows (`th colspan`), so the column header repeats at the top of every printed page and a group never restarts the columns.',
        'No descriptions and no Applies When in the summary. With prose columns the index\'s summary ran 53 pages; without them, 28.',
        'Column widths: Obligation 56%, Commitments 20%, the rest share what is left (table-layout: fixed).',
      ],
      gotchas: [
        'Chromium repeats a <thead> on each page only while the table stays display: table. Do not make it a grid or flex for layout.',
        'Keep `break-inside: avoid` on each row and `break-after: avoid` on the group rows, or a heading prints alone at the foot of a page.',
      ],
      acceptance: ['On a list that runs past one page, page 2 starts with the column header.'],
    },
    {
      label: 'Detail',
      selector: '.bcn-doc-groups',
      intent:
        'Every obligation in full, from a new page: category heading with a rule, subcategory heading, then each obligation\'s title with its commitment codes at the right margin, its description, and one row of facts (Class, Audience, Applies When).',
      decisions: [
        'The detail starts with `break-before: page` (the pdf-template skill\'s `.page-break-before`).',
        'The list draws the divider between obligations, not the obligation: a rule on every entry after the first. The first entry under a heading needs no exception.',
        'Commitment codes sit at the right of the title, the way a citation sits at a margin, so there is no commitments column in the detail.',
        'Each obligation keeps together (`break-inside: avoid`, the skill\'s `.avoid-break`); headings never end a page (`break-after: avoid`).',
      ],
      acceptance: ['No obligation splits across two pages; no heading prints at the foot of a page without its first entry.'],
    },
  ],
};
