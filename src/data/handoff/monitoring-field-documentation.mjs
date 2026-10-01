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
      label: 'View + filters',
      selector: '[data-fd-filters]',
      intent: 'One control strip for both views: the Matrix | Timeline pivot, search, Status / Agreement / Rig / County facets, and sort.',
      decisions: [
        'Filters, search and sort are shared state; switching view keeps them. The pivot is the in-bar esa-button-toggle, not page tabs, because both views read the same filtered set.',
        '?view=timeline deep-links the pivot; switching replaces the URL rather than pushing history.',
        'Unscheduled holes always sort last inside their batch, in both views and under every sort.',
      ],
      acceptance: ['Pick Rig 8, switch to Timeline: the same 12 holes show.'],
    },
    {
      label: 'Document matrix',
      selector: '.bcn-fd-matrix',
      intent: 'Answers what is missing on which hole. Rows are exploration locations grouped by agreement batch; columns are the expected document types in three groups. Received is green, received late amber, missing red, not yet due a grey outline.',
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
      label: 'Timeline',
      selector: '[data-fd-timeline]',
      intent: 'George’s calendar: working days across, drill holes down, grouped by agreement batch. Answers what goes out when and what is drilling when.',
      decisions: [
        'Weekends are collapsed out; client holidays stay as shaded, struck-through columns. The axis runs May 1 to Oct 2.',
        'Each notice is a 12px dot on its due date in the matrix’s four states; Missing is a square so red never relies on hue alone. The type is in the tooltip, not a text label.',
        'The USA ticket draws its window (14-day to 72-hr clearance) with the dot at the received date, or at the window end until one arrives.',
        'Drill days are a segmented bar, one segment per day coloured by the worst of that day’s three logs, the rig on the first segment.',
        'The tribal notification is one campaign-wide row above the batches, not a dot repeated on every hole.',
        'On first show the scroller puts TODAY about three-quarters across so the recent past is visible.',
      ],
      gotchas: [
        'The scroll box owns both axes so the date header and id column can stick; the page never scrolls sideways.',
        'The panel is hidden until the view opens, so initial placement waits on a ResizeObserver, not the view event.',
      ],
      acceptance: [
        'Clicking a dot opens the drawer scrolled to that document, tinted; clicking a drill day opens that day expanded.',
        'DCTR4-DH-004’s bar reads red on the days rig 8’s coordinator log is missing.',
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
