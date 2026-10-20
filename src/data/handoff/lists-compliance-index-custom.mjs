// Handoff spec for /prototypes/lists/contractor-field-index: a Compliance Index list
// someone made from the canonical index (Andy, 2026-10-19: "You should be able to make
// your own version of a compliance index. Like obviously, there's the canonical one that
// you start from, but you should be able to make your own."). The canonical index's own
// page is lists-compliance-index.
//
// Consumed only by scripts/gen-handoff.mjs, never by the browser.
//
// Context: the same route, chrome and rail as every list's detail page. The model is
// ComplianceIndexList and indexListTree(list) in src/data/lists.ts; the three versions
// in COMPLIANCE_INDEX_LISTS show the three uses (regroup for a reader, mirror a report's
// outline, trim to a team's categories).

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
        'The list\'s own outline over the index\'s items: its categories and subcategories, named and ordered for its reader ("Before ground disturbance", "Every day on site"), each subcategory holding the actions and obligations of the canonical subcategories it draws from.',
      decisions: [
        'A version arranges SUBCATEGORIES, never single items. Each of its subcategories names one or more canonical subcategories; two names merge them ("Speed, access and parking" is Speed limits plus Access routes and parking). Trimming is leaving canonical subcategories out.',
        'Items follow their canonical filing until the version moves them. Refile an action in the setup wizard and it moves in every version that draws from either subcategory, except where that version has moved its member.',
        'Prod model: a ComplianceIndexList (Name, Description, ProjectID, IsCanonical) with its own ComplianceIndexListCategory and ComplianceIndexListSubcategory rows (Name, SortOrder), and a join from each list subcategory to the canonical ComplianceIndexSubcategoryIDs it draws from. The canonical index is the list with IsCanonical, whose subcategories map one to one.',
        'Creating one copies the canonical outline: every category and subcategory with its name and order, each subcategory drawing from its one canonical twin. The person then regroups, renames and trims.',
        'Rows and cards are the canonical page\'s: same card per item, actions then obligations inside a subcategory, each A–Z by the title the list shows; an item merged in from two subcategories appears once.',
        'Parity with an obligation list (Andy, 2026-10-20: "there should be parity between the ci and obligations lists"). On actions and obligations alike: Remove from this list (the x), Move or retitle (the title or pen, into the item panel), Duplicate (the copy verb: a second membership filed beside the first, with its own wording), and Rename for this list on a category or subcategory row (the branch panel obligation lists rename in too). Never: the item\'s type, class, requirements, or where the canonical index files it (2026-10-19: "You shouldn\'t be able to edit the nature of an obligation itself").',
        'Add items (the title row) puts the index\'s items back, as an obligation list\'s Add puts the registry\'s on (Andy, 2026-10-20). See Add drawer.',
        'Members are keyed by member id, as on an obligation list: the item id on load, `<item id>-m<n>` for a copy.',
        'Prod model: ComplianceIndexListMember (ComplianceIndexListMemberID, ComplianceIndexListID, ActionID or ObligationID, ComplianceIndexListSubcategoryID when moved, ListTitle, ListDescription; the last three nullable, null meaning the index\'s) for a member that differs from the outline\'s default: moved, reworded or copied. ComplianceIndexListItemExclusion (ComplianceIndexListID, ActionID or ObligationID) for one taken off. Renaming a branch writes the list\'s own category or subcategory Name.',
      ],
      gotchas: [
        'A subcategory added to the canonical index later is in no version until someone places it. Open: whether a version should show unplaced canonical subcategories in a bin of its own.',
        'Open: merging, reordering and adding or removing whole categories and subcategories (the outline editor) is not built, so in this epic a whole subcategory comes off only item by item (Aldo\'s Keep and Take Out, which do it at once, are the separate Aldo epic). Rename is built, in a side panel.',
        'An item removed from a version is excluded by id, so refiling it in the canonical index does not bring it back into that version.',
        'Removing or moving the last member of a subcategory drops the subcategory from the page and the PDF; the list keeps its row, so moving a member back restores it under the same name, and the Move picker still offers it.',
      ],
      acceptance: [
        'Each category\'s count is the sum of its subcategories\' and the title badge is the sum of the categories\'.',
        'A subcategory that merges two canonical subcategories lists the union of their items, once each.',
        'Remove asks first ("It stays in the project\'s Compliance Index"), then drops the card and every count by one.',
        'A retitled item shows its list title and a dot, files A–Z by that title, and prints that title and list description in the PDF.',
        'Duplicate puts a copy beside the member with the same wording and moves every count by one; the copy opens in the panel on its own.',
        'Moving a member files it A–Z in the chosen subcategory and re-tallies both subcategories.',
        'Add items lands each ticked item in the version subcategory that draws on its canonical subcategory, moves every count, and offers the subcategory in the Move picker.',
        'The canonical index shows none of these verbs.',
      ],
    },
    {
      label: 'Item panel',
      selector: '#lip-editor',
      apply: [{ click: '[data-index-sub] summary' }, { click: '.bcn-lit [data-list-card] [data-list-title]' }],
      intent: 'One member of this version, an action or an obligation: the obligation list\'s panel for a version. Live: List title, Category and Subcategory (where this version files it), List description. Read only: the type or class chip, where the Compliance Index files it, the index description and the requirements. Footer: Remove from this list and Duplicate left; Save, Cancel right.',
      decisions: [
        'The pickers offer the VERSION\'s outline under this list\'s names, not the canonical taxonomy: a version files by its own categories. Changing Category refills Subcategory.',
        'An empty title or description means the index\'s wording, so the fields hold only what the list says differently. The index description turns tertiary once the list has its own.',
        'Remove goes through the tree\'s confirm, the same as the card\'s x; Duplicate files the copy the way the card\'s copy verb does.',
      ],
      acceptance: [
        'Clearing both wording fields and saving restores the index title and drops the dot.',
        'Saving with another Subcategory moves the member there.',
      ],
    },
    {
      label: 'Rename panel',
      selector: '#lbr-editor',
      apply: [{ click: '.bcn-lit [data-index-rename="sub"]' }],
      intent: 'Rename a category or subcategory for this list: one Name field, and beneath it, read only, where the branch comes from in the Compliance Index ("People and qualifications › Designated biologists and monitors"; a merged subcategory lists each).',
      decisions: [
        'One panel for both list types (bcn-list-branch-panel): an obligation list renames in it too, showing the registry\'s name. Never inline on the row.',
        'An emptied name falls back to the first source\'s canonical name. The canonical index and every other version keep their names.',
      ],
      acceptance: ['Saving a new name changes the row and the PDF heading for this list only.'],
    },
    {
      label: 'Title row — Edit details, Add items',
      selector: '[data-list-actions]',
      intent: 'Edit details (name, description) in the side panel every list uses, and Add items, the drawer an obligation list adds from.',
      decisions: [
        'The canonical index has no title-row verbs at all; a version has Edit details and Add items.',
      ],
      acceptance: ['Edit details opens the side panel with the list\'s name and description; Add items opens the Add drawer.'],
    },
    {
      label: 'Add drawer',
      selector: '#bcn-lai',
      apply: [{ click: '[data-list-add-obligations]' }],
      intent: 'Put the Compliance Index\'s items back on this version: every action and obligation the version does not hold, filed where the canonical index files them (category, subcategory, then actions before obligations, A–Z). The obligation list\'s Add drawer (bcn-list-add-obligations), over the index instead of the registry.',
      decisions: [
        'Candidates are the items this version removed plus everything in the canonical subcategories it draws on nowhere. Never an item the index does not hold: a version only arranges the index.',
        'Search by title, Phase and Species filters, every category closed on open, a Selected count, Add to list disabled until something is ticked. Save-left order: Add to list, then Cancel.',
        'Where an added item lands: the version subcategory that draws on its canonical subcategory. Where none does, the version gains that canonical subcategory under its canonical name (inside the version\'s category of the same name, else a new category of the canonical name, at the end). The person can then move or rename it.',
        'The added card is the item\'s card on the canonical index, in the index\'s wording; the version can retitle it after.',
        'Prod: adding a removed item deletes its ComplianceIndexListItemExclusion. Adding from a subcategory the version left out adds that ComplianceIndexListSubcategory (drawing on the canonical one) and its category if needed.',
      ],
      gotchas: [
        'An item taken off during the session is not offered again until the page reloads, the same as the obligation drawer.',
      ],
      acceptance: [
        'The drawer never lists an item the version already holds.',
        'Adding an item the version removed puts it back in its old subcategory and moves every count by one.',
        'Adding an item from a canonical subcategory the version left out brings in that subcategory under its canonical name, with the item.',
      ],
    },
    {
      label: 'Details rail',
      selector: '.bcn-ldr',
      intent: 'The list as a record: name, description, type (Compliance index list), created, last updated, item count.',
    },
    {
      label: 'Export — PDF, CSV, Excel',
      selector: '.bcn-lxp',
      intent: 'PDF prints this list\'s outline (list-export-compliance-index-pdf, over the version), then CSV and Excel, then Word (a later slice, BCN-1764). No JSON endpoint.',
      acceptance: ['The PDF\'s groups are this list\'s categories and subcategories, in its order.'],
    },
    {
      label: 'Danger Zone',
      selector: '.bcn-danger-zone',
      intent: 'Delete this Compliance Index List, behind the danger confirm every list uses. The items stay in the project and in the canonical index.',
      decisions: ['The canonical index has no Danger Zone: every version starts from it.'],
      acceptance: ['Deleting a version leaves the canonical index and every other version unchanged.'],
    },
  ],
};
