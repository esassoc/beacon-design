// Handoff spec for /prototypes/lists/new-obligation-list: where "Create list" lands. A new,
// empty list of the type chosen, named as typed, with Aldo already open beside it (Andy,
// 2026-10-19: "I should be able to start a list and then explain what I want and have that
// populate"). One per type: new-commitment-list, new-action-list, new-obligation-list,
// new-compliance-index-list (a copy of the canonical index's outline).
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.

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
      label: 'Aldo, open on a new list',
      selector: '[data-list-aldo] [data-aldo-panel]',
      intent:
        'Starting a list and saying what it is for are one motion: the new list opens with Aldo\'s conversation already open and the cursor in it. Aldo asks what the list should hold; the suggestions above the field are a couple of examples and, when the create dialog was given a description, "Use the description", which sends it as the first message.',
      decisions: [
        'The page is the list\'s detail page in every other respect: the empty tree, Edit details, the Add drawer, Export and the Danger Zone. Aldo is a faster way in, never the only one.',
        'The opening names how much there is to draw from ("the project\'s 333 obligations"), so the person knows Aldo is choosing from the registry, not writing records.',
        'On a list that already holds something, Aldo starts folded into its launcher.',
      ],
      gotchas: [
        'Prototype only: the name and description arrive in the URL (`?name=&description=`) and a page script writes them into the title, the crumb, Details and Edit details. In the app the record exists, and the page renders it.',
      ],
      acceptance: [
        'Create list on the Lists page lands here, named as typed, with Aldo open and the field focused.',
        'Pressing "Use the description", then Add, fills the list and moves the title badge.',
      ],
    },
  ],
};
