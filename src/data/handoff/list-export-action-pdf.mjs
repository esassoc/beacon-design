// Handoff spec for /prototypes/list-export-documents/[id] as an ACTION LIST PDF (captured
// on annual-reporting). Written for Beacon's prototype-implement and pdf-template skills:
// an Angular print route under Beacon.Web's src/app/print, captured by
// PdfService.GeneratePdfFromAngularRoute.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Same document as the obligation list PDF (see list-export-obligation-pdf for the shared
// print plumbing: Letter, 9pt, Shadow DOM, the footer); this spec covers what an action
// list prints differently: grouped by type, and one line per component for where each
// action stands.

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
        'An action list as the PDF its Export card downloads: title block, a summary table with one line per action, then every action in full from a new page, grouped by action type.',
      decisions: [
        'Print route: `action-list/:actionListID` in print.routes.ts, a child of PrintLayoutComponent beside `report/:reportID`, guarded by printAuthGuard.',
        'Data: the endpoint the list\'s tracking tree and the CSV already read, `actionListsActionListIDTrackingGet` (ActionListTrackingActionDto[]), plus the list detail for its Name and Description.',
        'Per action: Name, RequirementType (the group), FrequencyName, Commitments\' codes, and ActionImplementations for the status lines.',
        'Download: `GET action-lists/{actionListID}/generate-pdf`, the same shape as the obligation list\'s, file named `{list.Name}.pdf`. Letter paper via the PdfService paper option.',
        'Groups are action types, A–Z, actions A–Z inside each. One level only, so entry titles sit one heading level below the type.',
      ],
      gotchas: [
        'ActionListTrackingActionDto has no description and no timing. Extend it with the action\'s Text (printed as the description) rather than fetching each action.',
        'Timing in the prototype is the permit\'s stated timing sentence. Prod stores the schedule as structured fields (ActionScheduleDto: deadline milestone and offset, recurrence). If no stated-timing text exists, print the schedule as one sentence or leave Timing off; do not invent a field.',
        'The CSV keeps one row per occurrence. The PDF does not: see the next section.',
      ],
      acceptance: [
        'Every action on the list appears once in the summary and once in the detail, under its type, in the same order in both.',
      ],
    },
    {
      label: 'Summary table',
      selector: '.bcn-doc-summary',
      intent: 'One line per action: Action, Frequency, Commitments, under full-width type rows.',
      decisions: [
        'Same single-table build as the obligation list: one <thead> that repeats on every page, groups as `th colspan` rows.',
        'No Type column: the type is the group row.',
        'Column widths: Action 62%, Commitments 22%.',
      ],
      acceptance: ['Page 2 of a long list starts with the column header.'],
    },
    {
      label: 'Action entry + status lines',
      selector: '.bcn-doc-entry[data-doc-entry="action"]',
      intent:
        'One action in the detail: title with commitment codes at the right margin, description, a facts row (Frequency, Timing), then one line per component saying where the action stands there.',
      decisions: [
        'One line per scope, not per occurrence (round 1). Scope is ComponentName, or ProjectName when the action is done once for the project.',
        'Each line names the occurrence that is open now: the first implementation by SequenceNumber that is not Completed, or the last one when all are. It prints that occurrence\'s status (occurrenceStatusLabel, the same label the tree uses), its due date (EditedDueDate, else DueDate, YYYY-MM-DD), and "N of M done" when the scope has more than one occurrence.',
        'Status is a plain word, not a pill: a printed page cannot rely on color, and a tinted chip prints as a gray box.',
        'No due date on a Completed line, and none when the occurrence has none (as-needed actions).',
      ],
      gotchas: [
        'An implementation marked IsNotApplicable prints "Not Applicable" (NOT_APPLICABLE_LABEL), as the CSV does, and does not count toward "N of M done".',
        'Keep the whole entry together on a page (`break-inside: avoid`); a status list split from its action is unreadable.',
      ],
      acceptance: [
        'A recurring action on three components prints three lines, each with the open occurrence\'s status, its due date, and "k of n done".',
      ],
    },
  ],
};
