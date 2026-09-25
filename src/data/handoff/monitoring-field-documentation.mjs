// Handoff spec for /prototypes/monitoring/field-documentation — Notifications & Daily
// Logs, the expected-document tracker DCA asked for (George Valenzuela, 2026-09-25).
// The authored counterpart to the auto-derived capture.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Model: src/data/field-notifications-fixture.ts. Expected documents are generated
// from each hole's drill dates; received records are mock; status is derived.

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
      label: 'Readiness strip',
      selector: '.bcn-fd-readiness',
      intent: 'Four campaign-wide counts: drill holes with a missing document, missing documents, documents received late, and documents due in the next 5 working days.',
      decisions: [
        'Only the two missing counts turn red, and only when above zero.',
        '"Next 5 working days" uses the same working-day calendar as the due dates (weekends plus the client holiday list).',
      ],
      acceptance: ['Counts equal the sums of the matrix below with no filters applied.'],
    },
    {
      label: 'Document matrix',
      selector: '.bcn-fd-matrix',
      intent: 'Rows are exploration locations grouped by agreement batch; columns are the expected document types in three groups. Received is green, received late amber, missing red, not yet due a grey outline.',
      decisions: [
        'A once-per-hole document is one mark. A daily log is received / expected drill days, red when any past drill day has no log.',
        'Unscheduled holes (TBD, Bio Stop) carry no expectations; their field note spans the document columns.',
        'Status is derived, never stored: record on or before the due date is Received, after it Received late, none and past due Missing, otherwise Upcoming.',
        'A semantic table rather than AG Grid: community AG Grid has no row grouping.',
      ],
      gotchas: [
        'Due dates are N calendar days before drill start, rolled back to a working day (the client WORKDAY formula). They are not N working days.',
        'The tribal notification is one campaign-wide notice; every hole points at the same record.',
        'The USA ticket is due by the 72-hr site clearance date; the 14-day date opens its window.',
      ],
      acceptance: [
        'Status filter "Missing documents" shows only rows with a red cell.',
        'Sort "Most missing" reorders inside each batch; batches keep their order.',
      ],
    },
    {
      label: 'Hole checklist drawer',
      selector: '#fd-record',
      apply: [{ click: 'tr[data-hole="DCTR4-DH-004"] .bcn-fd-table__rig' }],
      intent: 'One hole: location facts, every pre-drilling document in due-date order with its source system, received date and file, then the daily logs one drill day at a time.',
      decisions: [
        'Drill days with a missing log open by default; the rest are collapsed.',
        'The drawer is addressable: ?hole=<exploration id> opens it on load, and Back closes it.',
      ],
      acceptance: ['Opening DCTR4-DH-004 shows its missing field coordinator logs as open drill days.'],
    },
  ],
};
