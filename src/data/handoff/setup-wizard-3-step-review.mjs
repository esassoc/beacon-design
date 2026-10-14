// Handoff spec for step 2 of the three-step Setup Wizard
// (/prototypes/setup-wizard-3-step/review): every commitment reviewed against its source,
// requirements as highlights. Consumed only by scripts/gen-handoff.mjs.
// Brief: docs/setup-wizard-3-step-brief.md.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Page actions',
      selector: '[data-sw3-review-actions]',
      intent: 'Project entities (with the count of merges waiting), Confirm all for every commitment nothing is flagged on, More with one item (Export for offline review), and Compliance Index to continue.',
      decisions: [
        'Confirm all confirms only clean, parsed commitments, and says how many; the toast carries a one-step Undo.',
        'Export is one menu item and produces no real file in the prototype (Jacky asked to review offline).',
      ],
      acceptance: ['After the demo fixes, Confirm all (80) confirms 80 and Undo returns them to unconfirmed.'],
    },
    {
      label: 'Navigator',
      selector: '.bcn-sw3rev__nav',
      intent: 'Step 1\'s queue as the navigator: each commitment with its state (Parsing, N to review, N requirements, Confirmed). It grows while the scan is still running. Click to go to a commitment; in One at a time it pages.',
      decisions: [
        'All / Needs a person filters the navigator and the document together. Needs a person is the exceptions-first order the brief asks for.',
        'Recommendation: Continuous scroll with Needs a person as the default working view; One at a time stays as an option. The brief has the comparison.',
      ],
    },
    {
      label: 'Commitment',
      selector: '[data-c="COA 11.18"]',
      intent: 'One commitment in Beacon\'s document voice with each requirement as a highlight over its exact span. Spans partition the binding text; neighbours alternate two shades of the requirement family; a suggested span has a dashed rule under it, a confirmed one is a plain fill. Binding text no requirement covers has a wavy warning underline. Flags head the commitment as buttons that take you to the fix. Text / Page swaps in the PDF crop with the spans boxed.',
      decisions: [
        'Flags are code, not model judgment: a quote that will not anchor (Not in the source), two spans on the same words (Likely duplicate), binding sentences under half covered (Uncovered text), types under 0.6 confidence (Type unclear), entity phrasings a merge would change (Merge proposed), a split find (Found as two), and a person\'s mark (Marked by a person).',
        'There is no approve per requirement. Any edit confirms; Confirm commitment confirms the rest and is disabled while a blocking flag remains (type and marked are not blocking).',
        'A quote that did not anchor is listed under the text in a dashed box, since it has no span to highlight.',
      ],
      gotchas: ['The text is painted at build time and repainted in the browser by the same function (anchored-text-paint.ts), so the two never disagree.', 'Coverage counts the union of spans: a sentence split between two neighbours is covered.'],
      acceptance: [
        'COA 11.14: Remove the "Submit Weekly Trench Inspection Photos" requirement; the flag goes.',
        'COA 11.25: Merge the duplicate into "Submit SWPPP to CDFW…"; the flag goes.',
        'COA 11.18: click the uncovered mowing sentence, New requirement; it becomes a confirmed highlight and the flag goes.',
      ],
    },
    {
      label: 'Requirement panel',
      selector: '[data-sw3-req-panel]',
      apply: [{ click: 'article:not([hidden]) mark[data-sid]' }],
      intent: 'The selected requirement\'s data: name, type, phases, timing (frequency, milestone, direction, offset, recurrence, and the words as stated), species, construction activities, seasons, responsible party, deliverable. A value that came from the text lights its words when its field is hovered. Its flag, if any, sits on top with the one-click fix. With nothing selected it lists the commitment\'s requirements; on uncovered text it offers New requirement or Not a requirement.',
      decisions: ['Suggested by Aldo (dashed chip) until any edit, then Confirmed (solid).', 'Milestone, species and seasons pick from the project registry, so a merge changes their options.'],
    },
    {
      label: 'Project entities',
      selector: '[data-sw3-entities]',
      apply: [{ click: 'button[data-ra-entities]' }],
      intent: 'Entities are reviewed once per project. Proposed merges first: the phrasings Beacon clusters as one concept, how many commitments use them and how many a merge changes, Merge or Keep separate. Below, milestones, seasons, construction activities and species with the commitments that use each.',
      decisions: [
        'Case and punctuation fold by code before any proposal ("initiation of Covered Activities" is the same entity); merges are meaning-level.',
        'The four merges are the extraction\'s own: four phrasings of Initiation of Covered Activities, the in-water variant, and three phrasings each of the GGS active season and the dry season.',
      ],
      acceptance: ['Merge "Initiation of Covered Activities": the toast reports 4 commitments updated and their Merge proposed flags clear.'],
    },
  ],
};
