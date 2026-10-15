// Handoff spec for step 3 of the three-step Setup Wizard
// (/prototypes/setup-wizard-3-step/compliance-index): the Compliance Index as a book's back
// index, reviewed one subcategory at a time. Consumed only by scripts/gen-handoff.mjs.
// Brief: docs/setup-wizard-3-step-ci-brief.md.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Page actions',
      selector: '[data-sw3-index-actions]',
      intent: 'Start over and Approve Compliance Index. Start over is PR #1520\'s: once drafting has begun it replaces Re-run and clears every decision on the index. Approve Compliance Index is the wizard\'s end. Both ask first.',
      decisions: [
        'Approve says how many subcategories are not reviewed; their drafts stay drafts and stay out of the project\'s obligations.',
        'Start over in prod is a hard delete, refused while evidence is attached or a run is live (ComplianceIndexStartOver.cs). The prototype resets decisions only.',
      ],
    },
    {
      label: 'Subcategory scrubber',
      selector: '.bcn-sw3ix__nav',
      intent: 'Every subcategory in index order, one cell each, step 2\'s scrubber: darker gray when drafted, amber with something to settle, green when reviewed. A rule and the category\'s name under the strip where each category starts. 40 at a time. Next to settle walks the amber cells. Above the strip: the subcategory, where it is in the index, and what is left ("Capture and relocation: 3 of 7. 1 reviewed, 3 to settle.").',
      decisions: ['A subcategory is reviewed when every entry in it is approved or discarded.'],
      acceptance: ['Approve all on a subcategory turns its cell green and its index mark to a check.'],
    },
    {
      label: 'Index',
      selector: '[data-sw3-index-tree]',
      intent: 'The Compliance Index as a book\'s back index reads, all three levels open: category the heading, subcategory the subheading, each action and obligation a line under it. Pressing a subcategory brings its page into view; pressing an entry brings its page into view with the entry open. A check marks a reviewed subcategory (muted when everything in it was discarded); an alert mark, one with something to settle. Folds to a rail, as step 1\'s Library does.',
      decisions: ['Prod\'s sidebar is a flat list of bins with draft and approved counts. Entries are listed under their subcategory because an index is read for its entries, and the count is the list.'],
    },
    {
      label: 'Subcategory page',
      selector: '[data-sw3-index-page]',
      intent: 'One subcategory as an index page, in Beacon\'s document voice: its category, its name, then actions, then obligations grouped by who reads them (Crews, Monitors, Compliance staff). Each entry is one line: class (Action, Adhere, Monitor, Notify, Roster), title, locators. Draft is dashed, approved solid with a check, discarded struck. Pressing the title opens the record in place: audience, Applies when (or Always), monitor signs, responsible party for an action (Needs input when none), Also filed in, and each passage the entry rests on quoted under its locator, with Approve, Discard or Restore, and Edit. See also closes the page: the subcategories that share entries with this one. Approve all and Restore all act on the subcategory.',
      decisions: [
        'A locator is the step 2 requirement ID (11.3:1, CMP-14:2), alone: the page is one hop away in the commitment panel.',
        'Grouped by audience, as prod does, because a merge stays within one audience. Class stays on each line.',
        'Decisions are on the entry, never the placement: an entry filed in two subcategories is approved in both.',
        'Save in the edit panel approves the entry, as an edit confirms a requirement in step 2.',
      ],
    },
    {
      label: 'Commitment panel',
      selector: '[data-sw3-commitment-panel]',
      intent: 'Where a locator leads: the commitment as step 2 marked it up, read only, in a side panel headed by the requirement\'s ID and name. The locator\'s requirement is the stroke in focus and the others fade; the entry\'s excerpt is a heavier pass inside it. The page key opens the PDF over it; Open in Commitments lands step 2 on that commitment.',
      decisions: ['The excerpt is prod\'s ObligationRequirement.Excerpt; PR #1520\'s ObligationSourceDto carries the commitment, the source document and the start page that make the chain to the PDF.'],
      acceptance: ['From Nighttime lighting, 11.8:2 opens COA 11.8 with its second requirement (yellow or orange lighting within 500 feet) in focus.'],
    },
    {
      label: 'Aldo',
      selector: '[data-sw3-index-aldo]',
      intent: 'One conversation per subcategory. The person says what to change in their own words: approve all, merge two entries (@ each), move this to another subcategory, also file it under another, this is a monitor\'s duty, discard this, why is this here (answered from its locators, not obeyed). Nothing applies until a proposal is pressed. Open items: an action with nobody named to do it (Edit, Discard), a proposed merge (Merge, Keep separate), and what File put in no subcategory (File here, Not an obligation), which shows on every page because it is the whole index\'s.',
      decisions: [
        'A merge across audiences is refused with the reason, as prod\'s Merge never groups different audiences; an action and an obligation never merge.',
        'Subcategory names in Aldo\'s replies open them.',
      ],
    },
  ],
};
