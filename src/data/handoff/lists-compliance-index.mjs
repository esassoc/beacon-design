// Handoff spec for /prototypes/lists/compliance-index: the project's CANONICAL Compliance
// Index, the first of the Compliance Index lists on Lists (Andy, 2026-10-19). Versions
// people make from it are lists-compliance-index-custom. The authored counterpart to the
// capture.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Context: the same route and page chrome as every list's detail page
// (lists-obligation-detail), so the index's PDF is exported where every list's is. The
// tree and the PDF both read indexListTree(list) in src/data/lists.ts.

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
      label: 'Index tree',
      selector: '.bcn-lit .bcn-lot__sub',
      apply: [{ click: '[data-index-sub] summary' }],
      intent:
        'Every action and obligation on the project, category › subcategory, Unfiled › Needs a home last. Categories load open, subcategories folded; inside a subcategory, actions first, then obligations, each A–Z.',
      decisions: [
        'Same rows and cards as the list pages: the action card (type chip, title, implementation count) and the obligation card (class chip, title, implementation count), each opening to its implementations.',
        'The cards\' list verbs (remove, duplicate, move or retitle for this list) are hidden: nothing on this page edits the index. Filing is the setup wizard\'s Compliance Index step.',
        'No filter row, add drawer, title-row verbs or Danger Zone: the canonical index is the project\'s own, and every version starts from it. It cannot be renamed or deleted here.',
        'Prod data: the same export-data read the index PDF uses (see list-export-compliance-index-pdf), so the page and the PDF hold the same items.',
      ],
      gotchas: [
        'In prod an action\'s subcategory is Action.ComplianceIndexSubcategoryID; unfiled means null. The prototype\'s placement rule is a fixture stand-in; do not port it.',
      ],
      acceptance: ['Category counts sum to the title badge (every action plus every obligation); Unfiled is the last category.'],
    },
    {
      label: 'Details rail',
      selector: '.bcn-ldr',
      intent: 'The index as a record: name, description, type (Compliance index list), created, last updated, item count. The same card every list carries.',
    },
    {
      label: 'Export — PDF, CSV, Excel',
      selector: '.bcn-lxp',
      intent: 'The index\'s ways out: PDF (the Compliance Index document), CSV and Excel, then Word (the same document). No JSON endpoint.',
      decisions: [
        'PDF calls `GET projects/{projectID}/compliance-index/generate-pdf` (list-export-compliance-index-pdf). The prototype opens the print route in a new tab.',
        'Word downloads the SAME document as the PDF, as a .docx: `GET projects/{projectID}/compliance-index/generate-docx`, new, beside generate-pdf (BCN-1764). Same title block, summary, detail and order; Word\'s own pagination, with the summary table\'s header row repeating on each page. The prototype builds a .doc from the print route (list-word.ts), so its content cannot drift from the PDF (Andy, 2026-10-20: "show as active").',
      ],
      gotchas: [
        'Open: prod has no CSV or Excel of the index yet. The rows are shown so the card matches every list\'s; their columns are undecided (the PDF\'s summary columns plus Category and Subcategory is the obvious start).',
      ],
      acceptance: ['PDF, CSV, Excel and Word rows in that order; PDF returns the index document.'],
    },
  ],
};
