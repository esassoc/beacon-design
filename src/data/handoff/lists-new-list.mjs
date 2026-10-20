// Handoff spec for ALDO ON LISTS: its own epic, apart from list exports (Andy, 2026-10-20:
// "Aldo stuff should be separate epic, given it'll depend on [the] setup wizard"). It
// builds on the setup wizard's Aldo: the same kit (panel, thread, composer) and the same
// structured-output call, so it is scheduled after that work, and the list-export epic
// ships without it. Everything Aldo does on a list is specified here and nowhere else;
// the list pages' own specs (lists-obligation-detail, -action-detail, -commitment-detail,
// -compliance-index-custom, lists-index) leave it out.
//
// FLAGGED: the prototype renders Aldo only when the URL carries `?aldo` (Andy, 2026-10-20),
// so every list page without it is the list-export epic's page. Create list keeps the flag
// on the page it lands on.
//
// Shown on /prototypes/lists/new-obligation-list?aldo, where "Create list" lands: a new, empty
// list of the type chosen, named as typed, with Aldo already open beside it (Andy,
// 2026-10-19: "I should be able to start a list and then explain what I want and have that
// populate"). One per type: new-commitment-list, new-action-list, new-obligation-list,
// new-compliance-index-list (a copy of the canonical index's outline). On every other list
// Aldo starts folded into its launcher above Details.
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
      label: 'Aldo on a list',
      selector: '[data-list-aldo] [data-aldo-panel]',
      intent:
        'Aldo on the list, above Details: a launcher in Aldo\'s wash ("Ask Aldo to fill this list") that opens the same conversation the setup wizard has, in place. The person says what the list is for in their own words; Aldo names how many records fit and where they file, and offers one key. The list fills when the key is pressed. Andy, 2026-10-19: "I should be able to start a list and then explain what I want and have that populate."',
      decisions: [
        'Built from the Aldo kit (bcn-aldo-panel, -thread, -composer; docs/aldo-kit-spec.md), docked in the rail at a fixed 32rem height so Details stays put, expandable over the page like the setup wizard\'s. Collapsing folds it back into the launcher.',
        'What it reads a message as: add (the default), remove ("take out", "remove", "drop", "leave out"), or a question ("what\'s on here?", "is dust covered?"), which changes nothing.',
        'Nothing changes until the key is pressed: "Add 14" (success tone) or "Remove 4" (danger tone), with Dismiss beside it. Pressed, the change goes through the page\'s own paths: the Add drawer\'s rows (`list:add-ids`) and the tree\'s own remove (`list:drop-members`), so counts, filing and the drawer stay as a manual add leaves them. The press is said as one quiet event line ("Added 14 obligations").',
        'Records already on the list are not offered again; the reply says how many were.',
        'Prod: one structured-output call per message (AIController, the kit\'s { actions, reply } contract) given the list, its members and the registry of its type, returning `{ actions: [{ kind: "add" | "remove", ids }], reply }`. The ids must be checked against the registry server-side before the key is offered.',
        'Not on the canonical Compliance Index: it is the project\'s own and is not edited here.',
        'Candidates per list type: every obligation in the registry (reply grouped by category › subcategory), every action on the project (grouped by action type), every commitment (grouped by permit section).',
        'Depends on the setup wizard\'s Aldo: the kit and the AI call are that work\'s, so this epic follows it. The list-export epic\'s pages work without any of it.',
      ],
      gotchas: [
        'The prototype runs no model. It matches words per clause ("dust, spills or refueling" is three asks, "annual reports to CDFW" one), with the phrases records file under and a short synonym list (list-aldo-match.ts). Do not port it; it only stands in for the call.',
        'A remove from Aldo skips the per-card confirm: the key in the conversation is the confirmation.',
      ],
      acceptance: [
        'Typing "anything about dust, spills or refueling" and pressing Add puts those obligations in the tree under their subcategories, and the title badge moves by the number added.',
        'Dismiss leaves the list as it was and says so.',
      ],
    },
    {
      label: 'Aldo on a Compliance Index version',
      selector: '[data-list-aldo] [data-aldo-panel]',
      intent: 'On a Compliance Index version (e.g. /prototypes/lists/contractor-field-index), Aldo above Details ("Ask Aldo to shape this index"): say who the version is for or what it covers and Aldo keeps the subcategories that fit and takes out the rest; "take out fire prevention" takes those out. One key each: Keep N, Take Out N.',
      decisions: [
        'A version arranges subcategories, so Aldo proposes subcategories, never single items. It reads each one by its name, its category and the titles of what it holds.',
        'Kept and taken-out subcategories go through the tree (`list:index-keep`, `list:index-drop`); a category left empty goes too, and every count is read again.',
        'Open: merging and renaming through Aldo ("put dust under Every day on site") belongs with the outline editor, which is not built.',
      ],
      acceptance: ['"Take out fire prevention and dust control" then Take Out drops those two subcategories and the title badge by the items they held.'],
    },
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
