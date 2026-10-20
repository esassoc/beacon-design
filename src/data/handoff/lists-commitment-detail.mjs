// Handoff spec for /prototypes/lists/[id] as a COMMITMENT list (captured on
// quarterly-agency-briefing). The authored counterpart to the auto-derived capture.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Context: same route and shell as lists-obligation-detail; BcnListMemberTree in flat
// mode. Commitment lists are ITP groupings, resolved from the fixture by predicate.

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
      label: 'Filter row',
      selector: '.bcn-swfr',
      intent: 'Search plus a Source picker ("All source documents"). No view tabs: commitment lists are flat, per Andy.',
      decisions: [
        'Source filters cards by data-source (ListMemberRow.source). The fixture has one source document (the ITP); the picker stays so the shape holds when a project has several.',
      ],
      acceptance: ['Picking the ITP keeps every card; clearing restores the same set.'],
    },
    {
      label: 'Commitment tree',
      selector: '.bcn-lmt',
      intent: 'One flat list of commitments in code order. Each card keeps its REQUIREMENT rows — commitments have no implementations.',
      decisions: [
        'Card title links to the commitment page (data-list-goto); requirement rows open the requirement panel.',
        'Remove from list is a non-danger confirm.',
      ],
    },
    {
      label: 'Requirement panel',
      selector: '#lrq-panel .bcn-lrq',
      apply: [{ click: '[data-list-expand]' }, { click: '[data-list-req]:visible' }],
      intent: 'Read-only side panel for one requirement: source commitment, type, scope, frequency, responsible party, phases, timing, deliverable, and species/activities when present.',
      decisions: ['Optional fields (species, construction activities) hide when empty rather than showing a dash.'],
    },
    {
      label: 'Add commitments drawer',
      selector: '#bcn-lam .bcn-lao',
      apply: [{ click: '[data-list-add-obligations]' }],
      intent: 'ONE flat checkbox list in code order, with search and a Source Document facet.',
      decisions: [
        'Andy rejected section folders and a nested parent/child checkbox group; keep it flat.',
        'The Source Document facet is kept with a single value, despite buildFacets\' >1 rule.',
      ],
    },
    {
      label: 'Export — PDF, CSV, Excel',
      selector: '.bcn-lxp',
      intent: 'PDF, then prod\'s CSV and Excel downloads in the rail, then Word, the same document as the PDF.',
      decisions: [
        'PDF downloads the commitment list document (see the list-export-commitment-pdf spec): `GET commitment-lists/{commitmentListID}/generate-pdf`. Every list has one, an empty list included (Andy, 2026-10-19).',
        'Word downloads the SAME document as the PDF, as a .docx: `GET commitment-lists/{commitmentListID}/generate-docx`, new, beside generate-pdf (BCN-1764). Same title block, summary, detail and order; Word\'s own pagination, with the summary table\'s header row repeating on each page. The prototype builds a .doc from the print route (list-word.ts), so its content cannot drift from the PDF (Andy, 2026-10-20: "show as active").',
        'No JSON/API section; that is obligation-only.',
      ],
    },
    {
      label: 'Danger Zone',
      selector: '.bcn-danger-zone',
      intent: 'Delete this Commitment List behind a danger confirm; the commitments stay in the project.',
    },
  ],
};
