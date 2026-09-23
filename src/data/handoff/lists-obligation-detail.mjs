// Handoff spec for one OBLIGATION list (/prototypes/lists/construction-kickoff-summary),
// the authored counterpart to the auto-derived capture. It declares which regions are
// inspectable sections (by selector), plus the design intent, decisions, gotchas, and
// acceptance a dev/Claude needs to re-implement each one in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build; interactive states are
// reached with an `apply` recipe (the drawers are opened, the tree is searched).
//
// Context: /prototypes/lists/[id] is ONE route for obligation, action and commitment
// lists (see lists-action-detail / lists-commitment-detail). An obligation list is the
// obligation registry's category tree scoped to the list's members. A list POINTS at
// registry obligations. It may move, retitle and re-describe them for itself, and it
// never edits the obligation (Andy, 2026-09-23). Fixtures: src/data/lists.ts,
// src/data/list-implementations.ts.

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

const SEARCH = 'esa-text-field[name="list-search"] input';

/** @type {{ sections: HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Title-row verbs',
      selector: '.bcn-list-actions',
      intent:
        'The page\'s verbs, on the title row beside the list name and its member count: Edit details, Add obligations, Add evidence.',
      decisions: [
        'Each verb has one home. Edit details lives here, never in the rail.',
        'Add obligations opens the checkbox drawer; Add evidence opens the app-wide bottom evidence drawer in list mode (both captured below).',
        'Export is NOT a title-row menu any more. It moved to the rail (see Export).',
      ],
      acceptance: ['All three verbs are present and each opens its surface.'],
    },
    {
      label: 'View tabs',
      selector: '.bcn-lvt',
      intent:
        'Three ways to read the same list: By Compliance Index (the category tree), By commitment, A–Z. The selected view rides ?view= in the URL.',
      decisions: [
        'There is ONE master tree, filed by category. The other views are clones of it, rebuilt after every filter pass.',
        'Every action taken on a clone (edit, remove, evidence) resolves to the master card.',
        'Bare esa-tab-layout used purely as a switcher; the panels are the tree bodies.',
      ],
      gotchas: [
        'Never build a second editable tree per view — counts, moves and filters would drift. One source, derived views.',
        'Tree queries must exclude the mirrors ([data-list-mirror]) or every card counts twice.',
      ],
      acceptance: ['Switching tabs keeps the active filters; a change made in one view shows in the others.'],
    },
    {
      label: 'Filter row',
      selector: '.bcn-swfr',
      intent:
        'Search plus three pickers above the tree: Category, Component, Evidence (Has Evidence / Has No Evidence). Expand all / Collapse all sit OUTSIDE the gray panel, right-aligned under it.',
      decisions: [
        'NO Status filter on obligations: obligations are conditional, as-needed and recurring, so "not started / completed" means nothing for them (Andy, 2026-09-23).',
        'Component matches an implementation\'s component (the 7 DCP components the evidence drawer scopes to). Component and Evidence are ROW filters: they are ANDed per implementation row, and a card left with no matching rows hides.',
        'Search matches the obligation title (as renamed for this list) and marks hits; matching cards open their branches.',
        'Expand all stops at the subcategory row. Cards stay closed so the reader sees the shape first.',
      ],
      gotchas: [
        'Hidden-by-filter is not the same as collapsed: count visibility with closest("[hidden]"), not offsetParent (closed <details> also has no offsetParent).',
      ],
      acceptance: [
        'Picking a component leaves only cards implemented on it; adding "Has No Evidence" narrows further; Reset restores the whole tree and its counts.',
      ],
    },
    {
      label: 'Obligation tree',
      selector: '.bcn-lot',
      apply: [{ fill: [SEARCH, 'Fire Suppression'] }],
      intent:
        'The list\'s obligations filed Category › Subcategory › Obligation, with counts on every branch. Each obligation opens to its IMPLEMENTATIONS: one row per component showing the component name, comment count and evidence count ("3 evidence" / "No evidence").',
      decisions: [
        'Child rows are implementations, not requirements (Andy reversed this 2026-09-23). Requirement codes and index ride on the card as data, for the mirror views to file by.',
        'Obligation rows carry NO status pill: evidence count is the only honest progress signal for an obligation.',
        'Categories and subcategories can be renamed for this list alone (pencil on the branch row).',
        'A dot beside an obligation title means the list has its own wording for it (title or description differs from the registry), tooltip "Has its own list wording". No text label.',
        'Card title and pencil both open the obligation panel; pencil tooltip "Move or retitle for this list".',
        'Clicking an implementation row emits list:edit-implementation. Prod opens the implementation upsert dialog there; the prototype builds no dialog.',
      ],
      gotchas: [
        'The evidence count updates live after a bulk evidence save (list:evidence-added); a component row that did not exist is added.',
        'A branch emptied by a move or a remove drops out of the tree, and its parent counts recompute.',
      ],
      acceptance: [
        'Branch counts equal the visible obligations under them; each obligation shows 1–3 implementation rows with comments + evidence and no status.',
      ],
    },
    {
      label: 'Obligation panel (move / retitle)',
      selector: '.bcn-lob',
      apply: [{ fill: [SEARCH, 'Fire Suppression'] }, { clickText: ['.bcn-lot', 'Fire Suppression Supplies On Site'] }],
      intent:
        'The side panel for one obligation ON THIS LIST. It offers exactly three things: a List title, a new home (Category + Subcategory), and a List description. It never edits the registry obligation.',
      decisions: [
        'Andy, 2026-09-23: "we don\'t want them to edit them, but that they can simply move them to other cat/sub-cats AND/OR add a list title or a list description."',
        'List title is an esa-text-field; leaving it empty falls back to the registry title.',
        'Category / Subcategory are esa-selects over the WHOLE registry taxonomy (so an obligation can move to a branch the list does not hold yet). Labels use this list\'s renames. Changing Category refills Subcategory.',
        'When the chosen home differs from the registry home, a hint reads "Registry: <Cat> › <Sub>".',
        'Save emits list:obligation-saved {memberId, listTitle, listDescription, catId/Name, subId/Name}. The tree creates any missing branch, re-files the card in title order, opens the path to it and flashes it.',
      ],
      gotchas: [
        'Reopening a moved obligation must show its CURRENT list home in the pickers, not the registry home.',
        'The dot is recomputed on save; clearing both overrides removes it.',
      ],
      acceptance: [
        'Moving "Fire Suppression Supplies On Site" into a subcategory the list does not hold yet creates that branch, re-files the card there, drops the emptied source branch, and on reopen shows "Registry: Hazards › Fire prevention".',
      ],
    },
    {
      label: 'Add obligations drawer',
      selector: '.bcn-lao',
      apply: [{ clickText: ['.bcn-list-actions', 'Add obligations'] }],
      intent:
        'A right-hand side panel with a searchable checkbox tree of every registry obligation the list does not already hold, with facet filters (Phase, Species, Category, Class).',
      decisions: [
        'Replaces prod\'s separate edit page: selection happens in a drawer over the list it changes.',
        'Facet values that differ only by case (the permit spells species both ways) are keyed lowercased.',
        'Search marks hits in a light-DOM label beside each esa-checkbox; clicking the label toggles the box.',
      ],
      gotchas: [
        'esa-checkbox renders its label in shadow DOM with no slot, so a <mark> cannot reach it; the label must live beside the box.',
        'Escape inside an open filter dropdown closes the whole side dialog. Known lego behaviour.',
      ],
      acceptance: ['Ticking obligations and saving adds them to the tree under their registry branches, with counts updated.'],
    },
    {
      label: 'Bulk evidence (bottom drawer, list mode)',
      selector: '#bcn-evidence-drawer .bcn-bottom-drawer__panel',
      apply: [{ clickText: ['.bcn-list-actions', 'Add evidence'] }],
      intent:
        'Attach one set of evidence to many list members at once, in the SAME app-wide bottom evidence drawer used everywhere else, opened in "list mode" with this list\'s members as the targets.',
      decisions: [
        'Andy rejected a separate side panel: "I thought we were going to use the bottom drawer." One drawer serves action AND obligation lists.',
        'List mode hides Phase, Type, search and the fixture rows. The component starts EMPTY and wears a brand ring until one is picked.',
        'Every member is a target by default; an × leaves one out and Restore brings them all back.',
        'Save requires a component, staged evidence and at least one target. A footer status line names whatever is missing.',
        'Save emits list:evidence-added {componentId, evidenceIds, memberIds} and closes; the tree bumps evidence counts in place.',
      ],
      gotchas: [
        'Opening the drawer from the app bar or any non-list trigger must EXIT list mode, or the next user sees a list\'s targets.',
        'Use --color-background-brand for the ring: theme-beacon redefines --color-background-brand-muted to a pale teal that disappears.',
      ],
      acceptance: [
        'Opens with all members as targets and an empty ringed component; Save stays disabled with a reason until component + evidence are set; after save each target\'s implementation on that component shows the higher evidence count.',
      ],
    },
    {
      label: 'Details rail',
      selector: '.bcn-ldr',
      intent:
        'The list\'s identity card: name, description, type, created, last updated, member count. It holds six labelled read-only fields.',
      decisions: [
        'No owner, files, activity feed or status chip: a list has no lifecycle to report.',
        'No verbs: Edit details lives on the title row.',
        'An absent description renders as an en dash, matching prod\'s Details panel.',
      ],
      acceptance: ['Six fields; editing details on the title row updates name and description here.'],
    },
    {
      label: 'Export',
      selector: '.bcn-lxp',
      intent:
        'The ways the list leaves Beacon, in the rail: Word and CSV file pulls, then the JSON endpoint that feeds a Fulcrum form, with its key, URL and a payload preview.',
      decisions: [
        'The formats are not peers. Word and CSV are one-line rows with a format mark and a verb. JSON is an integration: it has no file mark and nothing downloads, and it carries the key, the endpoint and the payload.',
        'The JSON endpoint exists ONLY on obligation lists. The form spec it serves is built from obligations; action and commitment lists get Word + CSV only (Andy: "but not the API option").',
        'Replaces a title-row Export menu, which hid that one format is a configured integration and had nowhere to show a key.',
      ],
      gotchas: [
        'Never render a real key or list GUID from a running environment into the fixture or the page.',
        'The JSON form spec carries Beacon ids so a form answer can be written back to the right obligation.',
      ],
      acceptance: ['Word + CSV rows plus the JSON section with key, endpoint and payload, on obligation lists only.'],
    },
    {
      label: 'Danger zone',
      selector: '.bcn-danger-zone',
      intent:
        'Delete the list, at the bottom of the page, behind a confirm dialog. It deletes the list only; the registry records it points at are untouched.',
      decisions: [
        'The button is a soft danger esa-button; the confirmation is esa-confirm-dialog.',
        'The same zone appears on every list type.',
      ],
      acceptance: ['Delete asks for confirmation and states that only the list is removed.'],
    },
  ],
};
