// Handoff spec for step 3 of the three-step Setup Wizard
// (/prototypes/setup-wizard-3-step/compliance-index): the Compliance Index in develop's two
// phases. Build the index (categories and subcategories, edited by hand, locked, re-run with
// guidance), then one Draft run makes the actions and obligations, files them, and a person
// reviews them a subcategory at a time. Consumed only by scripts/gen-handoff.mjs.
// Brief: docs/setup-wizard-3-step-ci-brief.md.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'No index yet',
      selector: '[data-ix-empty]',
      intent: 'Where step 3 starts: "No index yet", with Build index and + Category. Build index runs ProposeComplianceIndex over every approved requirement; + Category starts the index by hand.',
      decisions: ['A hand-made category or subcategory is locked from the start, as prod makes it, so a later Re-run leaves it alone.'],
      acceptance: ['Build index shows the proposal: 17 categories and 75 subcategories.'],
    },
    {
      label: 'Page actions',
      selector: '[data-sw3-index-actions]',
      intent: 'By phase. Before drafting: Re-run and Draft actions & obligations. During a run: the run\'s key, disabled. After it: Start over, Draft again (primary while something is outstanding) and Approve Compliance Index.',
      decisions: [
        'Start over is PR #1520\'s: once a Draft run exists it replaces Re-run, and it deletes the index and every draft back to "No index yet". Prod refuses it while a run is live or an approved record has evidence.',
        'Approve Compliance Index approves every pending draft after a confirm that counts the subcategories never opened. Draft actions with no scope stay drafts.',
      ],
    },
    {
      label: 'Status line',
      selector: '[data-sw3-index-run] > .bcn-sw3ir__line',
      intent: 'Under the step header. Built: the index in numbers. Drafted: drafts to review (or "Compliance Index approved."), what is outstanding for Draft again, what fit no subcategory with Suggest subcategories, and View log, which opens the run\'s record in the console lightbox. During a run the console\'s peek sits under it.',
      decisions: ['The four stages are project-wide, as draft-stages.ts runs them: Read requirements, File into bins, Merge duties, Complete drafts. Draft again takes only what is outstanding.'],
      acceptance: ['A Draft run over the Re-run index ends at 2,222 drafts to review, with 3 items that fit no subcategory.'],
    },
    {
      label: 'Run console',
      selector: '[data-ir-peek]',
      intent: 'The Draft run as a session. In the step panel it is a peek no taller than 100px: the newest lines of the stage running and the spinner, fading out at the top. Pressing it (or Open log) opens the console by itself in a lightbox over the page, its close key in the corner; Esc and a click outside also close it. When the run ends the peek goes and View log reopens the same lightbox. The key pressed is the prompt line. Each stage is a tool call: a dot (blinking while it runs, green when done), its name and what it works over ("910 requirements"). Under it, behind an elbow, what the run is doing to this project streams: the commitments read with their requirements and items, the subcategories filed into with their item counts and each item that fits none, each draft merged from more than one item with its requirement IDs, each action completed with its type, scope and responsible party. A done stage folds to its sentence ("2,463 of 2,473 items filed, 10 fit no subcategory") with Show N to unfold every line. Below the stages, a spinner names the stage in progress with elapsed seconds and its count, and the four stages tick off under it. The run ends on "Done in 13s." with the drafts filed and what needs attention. After a Re-run (built phase), the same console shows the guidance as the prompt and Propose index as a diff: + added, − removed, and bins kept because they are locked.',
      decisions: [
        'No percentage bar and no form dialog: the lightbox is the console alone, a thin border on a dimmed page. The count that moves is always a real noun (requirements, items, actions), and the lines are the drafts file\'s own: commitment codes, subcategory names, requirement IDs.',
        'The console is the one dark surface on the page, in the --bcn-console-* tokens; every text tone clears 4.5:1 on its ground.',
        'Warnings are amber lines in the stage that found them (an item that fits no subcategory, an action with no responsible party); requirements that bind nothing are a quiet line under Read requirements.',
        'bcn-console is reusable: prompt, tool, row, spinner, todo and message are its whole grammar (console.ts).',
      ],
      acceptance: [
        'Pressing Draft actions & obligations opens the console with the prompt line and Read requirements streaming commitment codes; the spinner reads "Reading requirements…" with seconds and "N of 910 requirements".',
        'The peek is at most 100px tall during a run; pressing it opens the full console in the lightbox, which keeps streaming until the run ends.',
        'When the run ends the peek goes; View log opens the same record in the lightbox.',
        'After a Re-run with guidance, added bins read as green + lines and removed bins as red − lines.',
      ],
    },
    {
      label: 'Index',
      selector: '[data-sw3-index-tree]',
      intent: 'The sidebar, as develop keeps it. Category and subcategory rows with tools on hover: rename in place, lock or unlock, delete, drag within the parent; + Subcategory on a category; Expand all, Lock all and + Category over the tree. Once drafted, each subcategory lists its drafts under it and carries develop\'s marks: a dot when it has drafts and was never opened, the count to review, a check when every draft is decided (muted when all were discarded). A category gets Approve category.',
      decisions: [
        'Renaming locks the row. Names are unique among siblings.',
        'Locking a category locks its subcategories; unlocking it does not unlock them.',
        'A bin that holds drafts is kept on Re-run; its lock is shown disabled with the reason.',
        'Delete names what goes: items from N requirements go back to be filed on the next Draft run, and the drafts filed there are deleted. A bin holding approved actions cannot be deleted.',
      ],
    },
    {
      label: 'Subcategory scrubber',
      selector: '.bcn-sw3ix__nav',
      intent: 'Every subcategory in index order, step 2\'s scrubber, a rule and the category\'s name where each category starts. Drafted: amber for drafts never opened, gray for opened with drafts to review, green when every draft is decided. Next to review walks the unopened first.',
      decisions: ['Opened is not reviewed. Prod sets FirstOpenedDate the first time a bin with drafts is opened.'],
    },
    {
      label: 'Subcategory page',
      selector: '[data-sw3-index-page]',
      intent: 'Before drafting: Cited requirements, up to three, each its requirement ID, name and the requirement\'s text; pressing one opens the commitment. Drafted: actions first, then obligations by who reads them, then Discarded (N), folded, with Restore and Restore all. Each draft is one line with a box to tick for Merge; its title opens the record in place. Approve all (N) asks first; Discard all does not.',
      decisions: [
        'Review is by home subcategory only. Also filed in shows on the obligation, read only.',
        'A draft action with no scope cannot be approved: "This draft has no scope. Set one in Edit before approving it."',
        'Merge takes two or more drafts of one kind and, for obligations, one audience. The merged draft keeps every source.',
        'Rationale is never stored or shown, as in prod.',
      ],
      acceptance: ['Ticking two Compliance staff drafts in Take and injury reporting and merging them leaves 20 drafts where there were 21.'],
    },
    {
      label: 'Commitment panel',
      selector: '[data-sw3-commitment-panel]',
      intent: 'Where a locator or a cited requirement leads: the commitment as step 2 marked it up, read only, the requirement in focus and the draft\'s excerpt a heavier pass inside it. The page key opens the PDF; Open in Commitments lands step 2 on that commitment.',
    },
    {
      label: 'Aldo',
      selector: '[data-sw3-index-aldo]',
      intent: 'One conversation per subcategory. Before drafting it takes Re-run guidance in plain words and answers with the Re-run key and what a re-run keeps; Re-run in the step\'s actions opens the same exchange. Drafted, it approves all, discards, merges two drafts (@ each), makes an obligation a monitor\'s duty, and says why a draft is here from its sources. Open items: a draft action with nobody named to do it, or no scope.',
      decisions: [
        'Guidance holds for one run and is not kept, as prod\'s.',
        'One Re-run with guidance was run ahead through Beacon\'s prompt ("give each listed species its own subcategory under an Endangered Species category"). Other guidance gets a plain answer that offers it.',
      ],
    },
    {
      label: 'Merge',
      selector: '[data-sw3-index-merge]',
      intent: 'Two columns. Left, the ticked drafts as they read, numbered: class, who reads it, title, Applies when (or an action\'s scope, party, frequency and deadline), and each requirement with its excerpt. Right, the merged draft as it will be made: the title, the first draft\'s fields, and every requirement and monitor sign of every draft, each marked with the numbers of the drafts it came from. Pressing a draft\'s title makes it the merged title; the title stays editable. Merge, then Cancel.',
      decisions: [
        'The preview is what merge() keeps: the union of requirements (one row per requirement and excerpt) and of monitor signs. That a merge loses no source is shown by the numbers on each row, not said.',
        'The merged draft takes the first ticked draft\'s class, audience and Applies when, whichever title is picked; the preview shows it.',
      ],
      acceptance: ['Merging two Compliance staff drafts in Take and injury reporting shows Requirements (2) marked 1 and 2, and Monitor signs (4) on the merged draft.'],
    },
    {
      label: 'Suggest subcategories',
      selector: '[data-sw3-index-suggest]',
      intent: 'Homes for what fit no subcategory, in develop\'s three parts: fits a bin you already have, new bins (named and placed), and better left without a bin of their own (Unfiled › Needs a home). Apply files them; Draft again makes drafts of them.',
    },
  ],
};
