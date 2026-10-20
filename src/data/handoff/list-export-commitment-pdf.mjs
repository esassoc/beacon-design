// Handoff spec for /prototypes/list-export-documents/[id] as a COMMITMENT LIST PDF
// (captured on quarterly-agency-briefing). Written for Beacon's prototype-implement and
// pdf-template skills: an Angular print route under Beacon.Web's src/app/print, captured
// by PdfService.GeneratePdfFromAngularRoute.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Same document as the other list PDFs (see list-export-obligation-pdf for the shared
// print plumbing: Letter, 9pt, Shadow DOM, the footer). Added 2026-10-19 when Andy asked
// that every list's Export card carry a PDF.

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
        'A commitment list as the PDF its Export card downloads: title block, a summary table with one line per commitment, then each commitment with its requirements in the permit\'s words, from a new page.',
      decisions: [
        'Print route: `commitment-list/:commitmentListID` in print.routes.ts, beside the other list routes, guarded by printAuthGuard.',
        'Data: the endpoint the list tree and the CSV read, `commitmentListsCommitmentListIDTreeGet` (its Commitments), plus the list detail for Name and Description.',
        'Groups are permit sections ("COA 10"), commitments in code order inside each (the CSV\'s compareByCode).',
        'Download: `GET commitment-lists/{commitmentListID}/generate-pdf`, file named `{list.Name}.pdf`, Letter via the PdfService paper option.',
        'An empty list still exports: the title block with a count of 0 and no body.',
      ],
      gotchas: [
        'The prototype\'s requirement text is cut short in its fixture (it ends in an ellipsis). Prod prints the full requirement text.',
        'A long commitment can run past a page. `break-inside: avoid` keeps short ones whole; Chromium lets a taller one break, which is right.',
      ],
      acceptance: ['Every commitment on the list appears once in the summary and once in the detail, in code order.'],
    },
    {
      label: 'Summary table',
      selector: '.bcn-doc-summary',
      intent: 'One line per commitment: Commitment (its code), Title, and how many requirements it holds, under full-width permit-section rows.',
      decisions: ['Same single-table build as the other list PDFs: one <thead> that repeats on every page.'],
      acceptance: ['The requirement count on each line equals the requirements printed under that commitment in the detail.'],
    },
    {
      label: 'Commitment entry',
      selector: '.bcn-doc-entry[data-doc-entry="commitment"]',
      intent: 'One commitment in the detail: its title with the code at the right margin, then each requirement: its name, then its text.',
      decisions: ['No facts row: a commitment has no class, audience, status or schedule of its own.'],
    },
  ],
};
