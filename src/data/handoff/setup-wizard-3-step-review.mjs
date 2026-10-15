// Handoff spec for step 2 of the three-step Setup Wizard
// (/prototypes/setup-wizard-3-step/review): a QA/QC pass over each commitment, carved into
// structured data, before the Compliance Index makes actions and obligations of it.
// Consumed only by scripts/gen-handoff.mjs. Brief: docs/setup-wizard-3-step-brief.md.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Page actions',
      selector: '[data-sw3-review-actions]',
      intent: 'Confirm all for every commitment nothing is flagged on, More with one item (Export for offline review), and Compliance Index to continue. Project entities is not a panel any more: entity merges are decided in the rail, where the entities are used.',
      decisions: [
        'Confirm all confirms only clean, parsed commitments, and says how many; the toast carries a one-step Undo.',
        'Export is one menu item and produces no real file in the prototype.',
      ],
    },
    {
      label: 'Commitment scrubber',
      selector: '[data-rev-nav]',
      intent: 'The foot of the step\'s panel, as step 1 carries its scan toolbar: header and scrubber are one panel. Every commitment of every source file in one run, file after file, one cell each: gray while parsing, darker gray when ready to confirm, amber with something to settle, green once confirmed. A rule through the strip marks where one file ends and the next begins, and the file\'s short name (ITP, MMRP) sits under the strip where its run starts. The strip shows 40 at a time; the double chevrons page the window, which otherwise follows the commitment in view. The thumb is the one in view. Click or drag to land on one; the arrow keys step one at a time; Next to settle jumps to the next amber one, across files. Above the strip: the file, where you are in it, and what is left across all of them ("ITP: 45 of 156. 0 confirmed, 20 to settle.").',
      decisions: [
        'One commitment at a time. The continuous scroll and the All / Needs a person filter are gone: Next to settle is the exceptions-first path.',
        'A window of 40, as the source step shows 50 pages: a commitment\'s tick label ("MM AES-1a") is wider than a page number, and 40 keeps a label every tenth cell legible at the 1280 layout.',
        'Landing on a commitment in another file makes that file the active one: the text, the rail, Aldo and the side panels all read it.',
      ],
      acceptance: ['Next to settle from 11.1 lands on 11.2 (one type to check); pressing it again walks the amber cells in order and wraps.'],
    },
    {
      label: 'Commitment',
      selector: '[data-c]',
      intent: 'The commitment as a marked-up page in Beacon\'s document voice. Each requirement is a highlighter stroke over the words that are its basis, drawn by hand: every line of it its own stroke, ragged at the ends. Requirements take six bright inks in turn, in text order (yellow, pink, green, orange, blue, aqua). What the parse pulled out of those words (a species, a milestone, a season) is underlined inside the stroke. Plain text is what nothing will be tracked from: the gap a spot check reads. Plain text the review thinks binds has a wavy warning underline: the prompt keeps each passage contiguous, so a duty stated elsewhere in the text can fall outside every requirement, and this is where a person catches it. The header: the code, the page (opens the PDF beside it), Edit (the ID, name and text), Confirm.',
      decisions: [
        'No borders on the highlighter, and no list numbers ("R1"). Selected is a heavier pass of the same ink; with one selected or hovered from the rail, the others\' ink fades and their words stay black.',
        'The text is read only. Its words change by telling Aldo (split, merge, you missed this); a requirement\'s record changes in its side panel.',
        'Confirm is disabled while a blocking item is open (a type to check and a hand-marked commitment do not block).',
      ],
      gotchas: [
        'The painter cuts a mark wherever a value\'s words start or end; the controller joins touching pieces of one requirement back into one mark so the stroke is not broken.',
        'The stroke is an SVG in a theme token (--bcn-marker-1 to -6, and -faint-1 to -6), stretched to each line with box-decoration-break: clone. The painter numbers each mark\'s turn in data-ink.',
      ],
      acceptance: ['Requirements are Beacon\'s own: its ExtractRequirementsFromCommitment v6 prompt over each commitment, split by who does the work, one contiguous passage each (scripts/extract-requirements.mjs). COA 11.3 is two: the biologist\'s capture and handling, and the capture records.', 'COA 11.7: the sentence about the U.S. Naval Observatory times is plain, between two strokes: the spot check sees what is not tracked.'],
    },
    {
      label: 'Parsed from the commitment',
      selector: '[data-sw3-attrs]',
      intent: 'Everything parsed out of the commitment, read only: its requirements in text order, each with the ink it is highlighted in, its ID, its name, its type and an Edit key; then a roll-up of what they link to, by kind: species, milestones, phases, construction activities, seasons. An empty kind is one quiet line ("None"). Hover a row and the text lights the words it came from; click a requirement to select it.',
      decisions: [
        'A requirement\'s ID is its commitment\'s, a colon, and its place in the text (Beacon\'s DisplayIndex): 11.3:2, CMP-14:2. A colon because a dot is ITP sub-numbering (11.42.1 is a commitment) and a dash is in MMRP codes. A split or an added requirement renumbers those after it. Aldo reads and says IDs ("remove 11.2:2").',
        'The kinds are Beacon\'s Requirement links (RequirementSpecies, RequirementMilestone, RequirementPhase, RequirementConstructionActivity, RequirementSeason). Timing, party and deliverable are not here: they belong to the actions the Compliance Index makes.',
        'An entity phrasing Beacon would fold into another carries Merge and Keep separate on its row: the project\'s entities are reviewed where they are used.',
      ],
    },
    {
      label: 'Aldo',
      selector: '[data-sw3-review-aldo]',
      intent: 'A conversation per commitment. The person says what to change in their own words: you missed this (with words selected, or quoted), split this, merge two (@ each), this is not a requirement, this is Reporting, add Delta smelt, why this, or a rule for every commitment ("always split numbered items like (1) and (2)"). Aldo answers with what it would change; nothing applies until the proposal is pressed. Selecting words in the text attaches them, with Add as a requirement, Not binding and Split here as suggestions. What the review flags is Open items, each with its answers. Rules are Instructions in effect.',
      decisions: [
        'Words already inside a requirement are not added twice: Aldo offers to split that requirement there.',
        'A split part takes the type its own words say, else the whole\'s, and keeps the species and milestones its words name.',
        'Folds to a rail; starts folded below 1440px wide so the text has room, and remembers what the person chose.',
      ],
      gotchas: ['In prod one structured-output call reads the message with the commitment, its requirements and the project\'s entities; the prototype reads it deterministically (sw3-review-talk.ts), so every demo run answers the same.'],
      acceptance: [
        'COA 11.2: select "Notifications shall include the name of the facility…", Add as a requirement; Aldo offers to split "Notify CDFW of Injury…" there; Split it there makes a third, Reporting.',
        'COA 11.3: "Rule: always split numbered items like (1) and (2) into their own requirements"; Split makes one requirement per numbered item.',
      ],
    },
    {
      label: 'Side panels',
      selector: '[data-sw3-req-edit]',
      apply: [{ click: '[data-at-reqs] li .esa-button' }],
      intent: 'Edit requirement: Beacon\'s Requirement record (name, type, notes) and its links (phases, species, milestones, construction activities, seasons), with Delete at the foot. The page key opens the source panel: each page the commitment is on, whole, with every requirement boxed in the same ink, scrolled to where it starts. Edit on the commitment opens its ID, name and text.',
      decisions: ['Save confirms the requirement. The words it covers are not a field.'],
    },
  ],
};
