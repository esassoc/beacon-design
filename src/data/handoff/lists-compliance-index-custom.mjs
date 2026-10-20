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
        'Items follow their canonical filing. Refile an action in the setup wizard and it moves in every version that draws from either subcategory, with no edit to the version.',
        'Prod model: a ComplianceIndexList (Name, Description, ProjectID, IsCanonical) with its own ComplianceIndexListCategory and ComplianceIndexListSubcategory rows (Name, SortOrder), and a join from each list subcategory to the canonical ComplianceIndexSubcategoryIDs it draws from. The canonical index is the list with IsCanonical, whose subcategories map one to one.',
        'Creating one copies the canonical outline: every category and subcategory with its name and order, each subcategory drawing from its one canonical twin. The person then regroups, renames and trims.',
        'Rows and cards are the canonical page\'s: same card per item, actions then obligations inside a subcategory, each A–Z by the title the list shows; an item merged in from two subcategories appears once.',
        'What a version may do to an item is what an obligation list may, and nothing more (Andy, 2026-10-19: "remove it, give it a list title/description, or rename its cat/sub-cat... but that\'s it"). Three verbs: Remove from this list on a card, Retitle on a card (its title or pen), Rename for this list on a category or subcategory row. No move, no duplicate, no add; type, class, requirements and canonical filing stay the index\'s.',
        'Prod model: ComplianceIndexListItemExclusion (ComplianceIndexListID, ActionID or ObligationID) for a removed item, and ComplianceIndexListItemWording (ComplianceIndexListID, ActionID or ObligationID, ListTitle, ListDescription, both nullable) for its own wording. Null means the index\'s. Renaming a branch writes the list\'s own category or subcategory Name.',
      ],
      gotchas: [
        'A subcategory added to the canonical index later is in no version until someone places it. Open: whether a version should show unplaced canonical subcategories in a bin of its own.',
        'Open: merging, reordering and adding or removing whole categories and subcategories (the outline editor) is not built, so in this epic a whole subcategory comes off only item by item (Aldo\'s Keep and Take Out, which do it at once, are the separate Aldo epic). Rename is built, in a side panel.',
        'An item removed from a version is excluded by id, so refiling it in the canonical index does not bring it back into that version.',
        'Removing the last item of a subcategory drops the subcategory from the page and the PDF; the list keeps its row, so re-including an item later restores it under the same name.',
      ],
      acceptance: [
        'Each category\'s count is the sum of its subcategories\' and the title badge is the sum of the categories\'.',
        'A subcategory that merges two canonical subcategories lists the union of their items, once each.',
        'Remove asks first ("It stays in the project\'s Compliance Index"), then drops the card and every count by one.',
        'A retitled item shows its list title and a dot, files A–Z by that title, and prints that title and list description in the PDF.',
        'The canonical index shows none of the three verbs.',
      ],
    },
    {
      label: 'Item panel',
      selector: '#lip-editor',
      apply: [{ click: '[data-index-sub] summary' }, { click: '.bcn-lit [data-list-card] [data-list-title]' }],
      intent: 'One action or obligation on this version: List title and List description are the only live fields; the type or class chip, the index description and the requirements read as text. Footer: Remove from this list left; Save, Cancel right.',
      decisions: [
        'The obligation list\'s panel less its Category / Subcategory pickers (a version files by its outline, not per item) and less Duplicate (a version holds each item once). It takes actions as well as obligations.',
        'An empty field means the index\'s wording, so the fields hold only what the list says differently. The index description turns tertiary once the list has its own.',
        'Remove from the panel goes through the tree\'s confirm, the same as the card\'s x.',
      ],
      acceptance: ['Clearing both fields and saving restores the index title and drops the dot.'],
    },
    {
      label: 'Rename panel',
      selector: '#lib-editor',
      apply: [{ click: '.bcn-lit [data-index-rename="sub"]' }],
      intent: 'Rename a category or subcategory for this list: one Name field, and beneath it, read only, where the branch comes from in the Compliance Index ("People and qualifications › Designated biologists and monitors"; a merged subcategory lists each).',
      decisions: [
        'In a side panel, never inline on the row.',
        'An emptied name falls back to the first source\'s canonical name. The canonical index and every other version keep their names.',
      ],
      acceptance: ['Saving a new name changes the row and the PDF heading for this list only.'],
    },
    {
      label: 'Title row — Edit details',
      selector: '[data-list-actions]',
      intent: 'Edit details (name, description) in the side panel every list uses. No Add button: a version arranges the index\'s items and adds none.',
      decisions: [
        'The canonical index has no title-row verbs at all; a version has Edit details only.',
      ],
      acceptance: ['Edit details opens the side panel with the list\'s name and description.'],
    },
    {
      label: 'Details rail',
      selector: '.bcn-ldr',
      intent: 'The list as a record: name, description, type (Compliance index list), created, last updated, item count.',
    },
    {
      label: 'Export — PDF, CSV, Excel',
      selector: '.bcn-lxp',
      intent: 'PDF prints this list\'s outline (list-export-compliance-index-pdf, over the version), then CSV, Excel and Word as Coming Later. No JSON endpoint.',
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
