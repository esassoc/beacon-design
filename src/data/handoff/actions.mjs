// Handoff spec for Actions (/prototypes/actions), the authored counterpart to the
// auto-derived capture. It declares which regions are inspectable sections (by
// selector), plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; interactive states are
// reached with an `apply` recipe (the picker, the dialogs and the other views opened).
//
// Context: the redesign of prod's Compliance Tracking (Kanban / Timeline / Grid) as
// Actions (Andy, 2026-10-06). The board holds ACTION IMPLEMENTATIONS only, never an
// action over its children. Each project defines board columns per action type, every
// column mapped to prod's status backbone (ActionImplementationStatusDtoEnum NotStarted /
// InProgress / Completed). Fixture: src/data/action-tracking.ts; client store:
// src/lib/action-board.ts.

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
      label: 'Title + component switcher',
      selector: '.page-layout__title',
      intent:
        'The H1 "Actions" (radar glyph in brand green) with the component switcher beside it, and Configure board, a small outline button, at the right of the title row.',
      decisions: [
        'The switcher shows each component\'s identity seal: a coloured circle, white glyph and white ring, Kim\'s component-identity-mark from prod (seal variant, fill weight). Marks come from the same assignment the Component Dashboard grid uses, so a component looks the same on both pages.',
        'The trigger seal is 20px beside a 14px / 550 name. The open list is a listbox of rows: 24px seal, name, and a check on the selected row.',
        'The choice is one session-wide value (localStorage beacon.activeComponent), shared with Obligations, Monitoring and Reporting.',
        'Configure board sits in the title row, not above the board, so the filter bar can own the pivots.',
      ],
      gotchas: [
        'esa-popover centres its bottom position and has no start alignment yet; the prototype shims the panel to left-align under the trigger. Use a start-aligned overlay in prod.',
        'esa-popover\'s anchor wraps its own panel, so a click on an option bubbles back as a trigger click and reopens the list. Stop the option click at the panel.',
      ],
      acceptance: [
        'Picking a component closes the list, swaps the trigger seal and name, and re-scopes the board, table and timeline.',
        'Arrow keys, Home and End walk the list; a keyboard open focuses the selected row, a pointer open does not.',
      ],
    },
    {
      label: 'Component list',
      selector: '.bcn-component-picker__panel',
      apply: [{ click: '.bcn-component-picker__trigger--mark' }],
      intent: 'The open switcher: every component on the project, each with its seal, the current one tinted and checked.',
      acceptance: ['The list opens left-aligned under the trigger and scrolls past about 520px.'],
    },
    {
      label: 'Filter bar',
      selector: '[data-act-filters]',
      intent:
        'One control strip over all three views. Top row: View (Board / Table / Timeline) and Type (All actions plus one tab per workflow). Bottom row: search, then the Type, Phase and List facets, the N/A switch, and Clear all.',
      decisions: [
        'Sort, Frequency, Assignee and Due were cut (Andy, 2026-10-07). Every view sorts by due date; undated work sinks to the bottom.',
        'The Type tabs are workflows, not single types (Plans covers Plan and Design). They scope every view, not only the board.',
        'Every control on both rows is 32px with 14px text. N/A sits on the row\'s centre line.',
        'N/A is prod\'s IsNotApplicable toggle: off hides not-applicable implementations.',
        'The view rides ?view=; Clear all resets search, facets and N/A but leaves the view and Type tabs alone.',
      ],
      gotchas: [
        'The Type tabs are user data: a workflow saved, renamed or deleted in Configure board must re-sync them.',
        'The facets hardcode 32px while the toggle, text field and select size by padding, so heights drift unless each is solved for 32px. Match them on one control-height scale.',
      ],
      acceptance: [
        'All controls on both rows measure the same height.',
        'On Plans, the board and the table show the same implementations.',
      ],
    },
    {
      label: 'Board',
      selector: '.bcn-aboard',
      intent:
        'The Kanban. All actions is the merged board: one column per backbone category (Not Started, In Progress, Completed). A workflow tab shows that workflow\'s own columns (Plans: Not Started, Drafting, Internal Review, Submitted to Agency, Agency Comments, Approved) and only the types it covers.',
      decisions: [
        'One card per action implementation. Prod\'s action card with nested "#1 Not Started" implementation rows is gone (Andy, 2026-10-06).',
        'Columns are equal and full height to the viewport floor, each scrolling its own cards, so an empty column is as big a drop target as a full one.',
        'Columns are a lighter grey than the sunken surface with an edge a step darker than the fill.',
        'Drag is pointer-based: lift past 4px, the card follows the pointer, the column under it lights up, release commits, Escape flies it home. A drop changes the column only; order inside a column is the sort.',
        'On the merged board a drop lands in the first column of that category in the card\'s own workflow.',
      ],
      gotchas: [
        'A drop must write both the workflow column and its backbone status, so rollups and the API keep one meaning of done.',
        'Keyboard users move a card from the dialog\'s Status field; the drag has no keyboard path.',
      ],
      acceptance: [
        'Dragging a Plan card from Drafting to Approved marks it Completed everywhere.',
        'Each column header shows its count, and the counts follow filters and drops.',
      ],
    },
    {
      label: 'Action card',
      selector: '.bcn-acard',
      intent:
        'One implementation: commitment ids (BcnCommitmentBadge, plus a +N for more) and a flag; the action name on up to two lines; type, phase and occurrence; the workflow status chip on the merged board only; then due date, evidence count, comment count and the assignee avatar.',
      decisions: [
        'Type ramp on DM Sans\'s variable weights: name 15px / 600, meta 13px / 500, due 13px / 550 rising to 650 when overdue or due soon, counts 13px / 500 with tabular figures (Andy, 2026-10-07: "a little thicker, a little smaller").',
        'The sizes are fixed, not the viewport-clamped size tokens, so a card lands the same on every monitor.',
        'The status chip shows only on the merged board, where the column is the category and the workflow column would otherwise be invisible.',
        'The comment count hides at zero. The whole card opens the record; keyboard focus lands on the name.',
        'Every line is a field of ActionImplementationTrackerDto. Lines switch off from Configure board\'s Cards switches.',
      ],
      gotchas: [
        'A reset (all: unset) on the name button out-ranks a typography class and hands it the inherited 16px / 350. Set the name\'s type on the button itself.',
      ],
      acceptance: ['Overdue dates read in danger red at 650; completed cards show "Completed <date>" instead of a due date.'],
    },
    {
      label: 'Configure board',
      selector: '.bcn-bcfg',
      apply: [{ click: '[data-aboard-configure] button' }],
      intent:
        'The column editor, on the geometry of Jamie\'s monitoring configure dialog: a live board preview on the left, options on the right. Pick or create a workflow, name it, choose the action types it covers, then edit its columns grouped under Not Started, In Progress and Completed.',
      decisions: [
        'Custom columns map to the fixed backbone. A project can add Drafting or Agency Comments, never a fourth kind of done.',
        'Workflows are project-wide and per action type; each type belongs to exactly one workflow.',
        'Columns reorder by grip (pointer or arrow keys), rename inline, and add per category. Deleting a column that holds work asks where to move it.',
        'Restore default workflows resets to the four shipped ones.',
      ],
      gotchas: [
        'An implementation whose column is deleted falls back to the first column of the same category; never orphan it.',
        'Every category needs at least one column, or work in it has nowhere to land.',
      ],
      acceptance: ['Saving updates the Type tabs, the board columns and the dialog\'s Status options at once.'],
    },
    {
      label: 'Implementation dialog',
      selector: '.bcn-aid',
      apply: [{ click: '[data-acard-open]' }],
      intent:
        'Prod\'s action-implementation upsert dialog, ported as-is: summary, referenced requirements, reference files and evidence of compliance on the left; Details (status, scope, work activities, responsible party, assignee, Not Applicable) and Lists on the right; Overview and Discussion tabs.',
      decisions: [
        'The header leads with the component: a 24px seal clustered with the component name, above the action title and its type badge (Andy, 2026-10-07).',
        'Status options are the workflow\'s columns grouped by backbone category, so choosing one moves the card on the board.',
        'Prod\'s layers glyph stands in for the seal when a component has no mark.',
      ],
      acceptance: ['Saving a new status moves the card to that column and updates every view.'],
    },
    {
      label: 'Table',
      selector: '.bcn-at',
      apply: [{ clickText: ['[data-act-view]', 'Table', 'radio'] }],
      intent: 'The same filtered implementations as an AG Grid: one row per implementation with its action, type, commitment, status, phase, assignee, frequency, due date and evidence count.',
      decisions: ['Status shows the workflow column as a chip in its category tone. Rows open the same dialog as the cards.'],
      acceptance: ['Row count matches the board\'s total for the same filters and Type tab.'],
    },
    {
      label: 'Timeline',
      selector: '.bcn-atl',
      apply: [{ clickText: ['[data-act-view]', 'Timeline', 'radio'] }],
      intent: 'Due dates on a month axis, grouped by status, for the same filtered set.',
      acceptance: ['Undated implementations are listed in a No due date group, not dropped.'],
    },
  ],
};
