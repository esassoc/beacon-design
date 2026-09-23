// Handoff spec for /prototypes/lists/[id] as an ACTION list (captured on annual-reporting).
// The authored counterpart to the auto-derived capture: which regions are inspectable
// sections (by selector), and the intent, decisions, gotchas and acceptance a dev/Claude
// needs to re-implement each one in Angular Beacon.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Context: same route and page shell as lists-obligation-detail; the tree is
// BcnListMemberTree. Action lists are PREDICATES over the ITP fixture (lists.ts), so the
// member count is derived, never stored. Prod's separate Edit Actions page is dropped on
// purpose: the checkbox drawer replaces it.

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
      label: 'Header verbs',
      selector: '.bcn-list-actions',
      intent: 'Edit details, Add actions (the checkbox drawer), Add evidence (the bottom evidence drawer in list mode).',
      decisions: [
        'Each verb announces a document CustomEvent (list:edit-details, list:add-members, list:add-evidence); the surfaces listen. None navigates.',
      ],
    },
    {
      label: 'Views + filter row',
      selector: '.bcn-swfr',
      intent:
        'Search plus three row pickers — Component, Status, Evidence — under the view tabs (By Compliance Index · By type · By commitment · A–Z). Expand all / Collapse all sit below the gray panel, right-aligned.',
      decisions: [
        'NO Type picker (removed 2026-09-23): "By type" is a view, and the picker duplicated it.',
        'All three are ROW filters ANDed in one pass (passImpls({component, status, evidence})): failing implementation rows hide, cards with none left drop, empty branches drop.',
        'Component matches the implementation id\'s suffix — an implementation id is `${actionId}|${componentId}`.',
        'Status options run in lifecycle order (Not Started, In Progress, Overdue, On Hold, Completed), not alphabetical.',
        'The master tree is By Compliance Index. The other views are clones marked data-list-mirror, rebuilt after every filter pass; verbs on a clone resolve to the master card (cardOf).',
      ],
      gotchas: [
        'Count badges report what the list holds, not what the filter shows.',
        'Tree queries must exclude [data-list-mirror] or every card counts twice.',
      ],
      acceptance: ['Component = one DCP component → every visible row is on that component; add Evidence = none → fewer; reset → all cards back.'],
    },
    {
      label: 'Action tree',
      selector: '.bcn-lmt',
      intent:
        'Members filed by Compliance Index. Actions carry no category of their own, so an action files wherever ITS REQUIREMENTS are placed in the index (Aldo\'s dcp-index run, compliance-index-memberships.json) — one action can appear under several branches.',
      decisions: [
        'Label is "By Compliance Index", never "By category".',
        'Remove from list is a non-danger confirm; the action stays in the project.',
      ],
      gotchas: ['The Aldo index (92 minors) and the registry\'s obligation tree (69) drift; do not assume one taxonomy.'],
    },
    {
      label: 'Action card + implementations',
      selector: '.bcn-loc',
      apply: [{ click: '[data-list-expand]' }],
      intent:
        'One action: type chip, title (opens the action panel), implementation count. Children are its IMPLEMENTATIONS, one per component: status pill, component name, comment count, evidence count.',
      decisions: [
        'Actions DO get status pills; obligations do not. Evidence is shown on both.',
        'An implementation row fires list:edit-implementation (its upsert dialog, not built here).',
        'Requirement codes ride on the card as data-codes / data-index so the mirrors can file it; requirements are not rendered as rows.',
      ],
      acceptance: ['Card badge = number of implementation rows; each row has one status.'],
    },
    {
      label: 'Action panel',
      selector: '#lac-panel .bcn-lac',
      apply: [{ clickText: ['.bcn-lmt__folds', 'Expand all'] }, { click: '[data-list-open]:visible' }],
      intent:
        'Read-only side panel: type, action text, frequency, deliverable, species, timing, expected evidence, and the requirements it satisfies, with a link to the full action in the data catalog.',
      decisions: ['A list never edits the action; the footer offers Remove from list and Open action.'],
      acceptance: ['Opening from a mirror view shows the same action as the master card.'],
    },
    {
      label: 'Add actions drawer',
      selector: '#bcn-lam .bcn-lao',
      apply: [{ click: '[data-list-add-obligations]' }],
      intent:
        'Checkbox drawer of every action not on the list, in Action Type folders, with search and facets Phase / Species / Type / Frequency.',
      decisions: ['Replaces prod\'s separate Edit Actions page.', 'No Commitment facet.'],
      gotchas: ['The trigger attribute is shared with the obligation page (data-list-add-obligations); data-list-add-event names the event.'],
    },
    {
      label: 'Bulk evidence — bottom drawer, list mode',
      selector: '#bcn-evidence-drawer',
      apply: [{ click: '[data-list-add-evidence]' }],
      intent: 'Same list-mode bottom evidence drawer as obligation lists: pick a component, stage evidence, every member targeted by default.',
      acceptance: ['Save bumps the matching implementation rows\' evidence counts live.'],
    },
    {
      label: 'Export — Word, CSV',
      selector: '.bcn-lxp',
      intent: 'Word and CSV downloads in the rail.',
      decisions: ['NO JSON/API section on action lists (Andy: "but not the API option"); that endpoint exists for obligation lists only.'],
    },
    {
      label: 'Danger Zone',
      selector: '.bcn-danger-zone',
      intent: 'Delete this Action List behind a danger confirm; the actions stay in the project.',
    },
  ],
};
