// Handoff spec for the /prototypes/lists index — the authored counterpart to the
// auto-derived capture. It declares which regions are inspectable sections (by
// selector), plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; interactive states are
// reached with an `apply` recipe.
//
// Context: prod's Lists page is an AG Grid plus an info callout. This replaces it with
// one index of every list on the project, grouped by the registry each list draws from
// (Commitments, Actions, Obligations). Every row opens /prototypes/lists/<id>, one
// detail route for all three types. Fixture: PROJECT_LISTS in src/data/lists.ts.

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
      label: 'Lists search',
      selector: '.bcn-swfr',
      intent:
        'One keyword search across every list on the project, in the page-level filter panel. It narrows the groups below live and marks every hit.',
      decisions: [
        'It searches exactly what a row shows, the list NAME and DESCRIPTION, so nothing is matched on text the reader cannot see.',
        'Same control and behaviour as the setup wizard\'s obligations search (bcn-sw-filter-row in its `panel` presentation): type → rows narrow on every keystroke, hits wrapped in a yellow <mark>.',
        'There is deliberately NO type picker, owner, or date facet: the type is the grouping axis itself (see the next section).',
      ],
      gotchas: [
        'Highlighting injects <mark> at runtime into sibling rows, so its CSS must be global (or component-level in Angular) — a scoped rule renders the browser-default yellow.',
        'HTML-escape the row text before re-inserting it with marks; the <mark> wrappers are the only injected markup.',
      ],
      acceptance: [
        'Typing narrows rows in all three groups at once, marks the matches in name and description, and clearing restores every row with no stale marks.',
      ],
    },
    {
      label: 'Grouped list index',
      selector: '[data-list-index]',
      intent:
        'Every list, filed under the registry it draws from, in setup order: Commitments, Actions, Obligations. Each row (bcn-list-card) carries the list\'s name, description, member count and last change, and opens the list\'s detail page.',
      decisions: [
        'The type is STRUCTURAL: each group heading carries its own "Add <type> list" button, so the new list\'s type is chosen by which button was pressed.',
        'Within a group, rows sort newest change first; the board never re-sorts.',
        'A heading\'s badge counts LISTS in the group (and counts HITS while searching); a row\'s badge counts that list\'s MEMBERS. Accessible names tell them apart ("4 commitment lists" vs "64 commitments").',
        'A group with no hits keeps its heading and its add button and shows a dashed "No lists match" box. Hiding the whole group would hide the add verb at the exact moment the reader learned the list they want does not exist.',
        'A group that holds no lists at all reads "No commitment lists" (settled at build time), not "No lists match".',
        'All three types open the same detail route: /lists/<id>.',
      ],
      gotchas: [
        'The dashed empty box sets display:grid, which outranks [hidden]; re-assert display:none on the hidden state or the box never goes away.',
        'Counts are derived from the data (group length / member predicates), never hard-coded, so a new seed list moves the heading without edits.',
      ],
      acceptance: [
        'Three groups in order Commitments → Actions → Obligations; each heading has a count and an add button; searching "report" leaves the headings in place, updates each count to its hits, and shows "No lists match" in any group with none.',
      ],
    },
    {
      label: 'Add list dialog',
      selector: '[data-list-create-dialog]',
      apply: [{ clickText: ['[data-list-group]', 'Add Action List'] }],
      intent:
        'The "Add list" modal, in the order the decision is made: which registry the list draws from, what it is called, what it is for.',
      decisions: [
        'The type comes first and all three options stay on screen as a segmented control (esa-button-toggle), because the type is the one irreversible choice: a list is a subset of ONE registry forever.',
        'The trigger presets it: data-list-create="<type>" on the heading\'s button opens the dialog already on that type, with a matching heading ("Add Action List"). The toggle stays changeable.',
        'A cue line under the toggle names what the selected type holds; it swaps on change.',
        'Name is required; description is optional.',
      ],
      gotchas: [
        'esa-radio-group has no per-option description field, which is why this is a toggle plus one cue line rather than described radios.',
        'Prototype honesty: "Create list" validates Name and closes; it writes no row and navigates nowhere. In the app it creates the list and lands on its detail page.',
      ],
      acceptance: [
        'Each heading\'s add button opens the dialog preset to that type; changing the toggle updates heading and cue; Create is refused with an empty Name.',
      ],
    },
  ],
};
