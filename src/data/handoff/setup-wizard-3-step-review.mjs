// Handoff spec for step 2 of the three-step Setup Wizard
// (/prototypes/setup-wizard-3-step/review): a QA/QC pass over each commitment, carved into
// structured data, before the Compliance Index makes actions and obligations of it.
// Consumed only by scripts/gen-handoff.mjs. Brief: docs/setup-wizard-3-step-brief.md.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Console',
      selector: '[data-rev-nav]',
      intent: 'The foot of the step\'s panel, as step 1 carries its scan console: header and console are one panel, and the header carries no keys. A sunken tray across the panel under the header rule, every key neutral: Prev at its left end, Next at its right, Confirm all and Export centered between. Under it, every commitment of every source file in one run, file after file, one cell each: gray while parsing, darker gray until confirmed, a light tint of the step\'s purple once confirmed. A rule through the strip marks where one file ends and the next begins, and the file\'s short name (ITP, MMRP) sits under the strip where its run starts. The strip shows 40 at a time; the double chevrons page the window, which otherwise follows the commitment in view. The thumb is the one in view. Click or drag to land on one; Previous and Next, or the arrow keys, step one at a time across files.',
      decisions: [
        'Reset the prototype, under the workspace as on step 1, starts step 2 over after a confirm: every commitment as the parse left it, no edits, confirmations or talk with Aldo. The scans are kept.',
        'Scrubber cells are 32px tall, as step 1\'s page tiles are.',
        'No position line and no Next to settle: where you are is the thumb, and what is left to settle is in each cell\'s tooltip and in Aldo.',
        'No amber: a commitment with something to settle reads as any other unconfirmed one. Only confirmed has a color.',
        'No link on to the Compliance Index here: the wizard\'s step bar is the way on.',
        'Confirm all confirms only clean, parsed commitments, and says how many; the toast carries a one-step Undo.',
        'Export produces no real file in the prototype.',
        'A window of 40, as the source step shows 50 pages: a commitment\'s tick label ("MM AES-1a") is wider than a page number, and 40 keeps a label every tenth cell legible at the 1280 layout.',
        'Landing on a commitment in another file makes that file the active one: the text, the rail, Aldo and the side panels all read it.',
      ],
      acceptance: ['Prev is off on the first commitment and Next on the last; Next from the last ITP commitment lands on the first MMRP one.', 'Confirm all paints every clean cell light purple.'],
    },
    {
      label: 'Commitment',
      selector: '[data-c]',
      intent: 'The commitment as a marked-up page in Beacon\'s document voice. Each requirement is a highlighter stroke over the words that are its basis, drawn by hand: every line of it its own stroke, ragged at the ends. Requirements take six bright inks in turn, in text order (yellow, pink, green, orange, blue, aqua). What the parse pulled out of those words (a species, a milestone, a season) is underlined inside the stroke. Plain text is what nothing will be tracked from: the gap a spot check reads. Plain text the review thinks binds has a wavy underline in Aldo\'s green (his question, not an error; its title says "Reads as binding, and no requirement covers it"): the prompt keeps each passage contiguous, so a duty stated elsewhere in the text can fall outside every requirement, and this is where a person catches it. Above it, one bar pinned across the top of the pane, as the PDF\'s page tools are on step 1: Select (V) and Highlight (H), Delete (the selected requirement), Undo and Redo; then the page (opens the PDF beside it), Edit (the ID, name and text) and Confirm. Under the bar, the code and the name.',
      decisions: [
        'No borders on the highlighter, and no list numbers ("R1"). Selected is a heavier pass of the same ink; with one selected or hovered from the rail, the others\' ink fades and their words stay black.',
        'The highlights are edited by hand, as on the comments prototype. The selected requirement grows a grip at each end; dragging one moves that end to the word under the pointer, live, and release saves it. Ends snap to whole words and stop at a paragraph break or the next requirement.',
        'Highlight mode: one drag over free words makes them a new requirement ("New requirement"), selected, its record opened in the side panel to name it; then the mode returns to Select. A drag over words another requirement holds is clipped to the free words. Esc cancels.',
        'Clicking a wavy-underlined sentence selects it (lit in a green wash, its rail row marked) and opens a small card under its last line: Make a requirement (its record opens to edit) and Not binding. Highlight or H also makes it one. Esc or a click elsewhere closes the card; the pane scrolls to show it.',
        'Aldo\'s green marks what Aldo is asking about: the wavy rule, a duplicate\'s wavy rule, and "(unsure)" on a requirement\'s type in the rail.',
        'Undo and Redo (Cmd+Z, Shift+Cmd+Z) step through every change to the step\'s record: highlights, records, not binding, merges, confirmations, Aldo\'s proposals accepted (a proposal and its edits are one step, and its keys come back). Each step lands on the commitment it was made on. The conversation itself is not undone. History lives for the page load, per file.',
        'In a narrow pane the mode labels fold away, then the page key\'s; titles carry them.',
        'Delete removes the selected requirement, highlight and record. Words can still change by telling Aldo (split, merge, you missed this).',
        'The header stacks the commitment ID over its title. In a pane 46rem or wider the text steps in under the header, 4rem growing to 8rem, its measure unchanged.',
        'Highlights and underlines each switch off from the tool bar (the key struck when off), remembered across commitments and visits. With highlights off the selected requirement keeps its stroke; with underlines off a selected sentence nothing tracks keeps its rule.',
        'Clicking a highlight selects it and opens a card under its last line: its ID, Edit, Merge with previous, Merge with next, Ask Aldo and Delete. Shift-click adds neighbors to the selection; the card then reads N selected with Merge N and Ask Aldo, and the Merge tool (M) does the same. Only neighbors in the text merge, so no other requirement\'s words are taken; the first keeps its name and takes the union of species, seasons, activities, milestones and phases. Esc clears the selection.',
        'Ask Aldo with several selected says "Merge these" for them, and Aldo answers with a Merge proposal to accept. With one, the composer takes it as a chip. Aldo also reads "merge this with the next one" (or the previous).',
        'Confirm is disabled while a blocking item is open (a type to check and a hand-marked commitment do not block).',
      ],
      gotchas: [
        'Text offsets come from src/lib/text-offsets.ts, shared with the comments prototype: each paragraph is <p data-off>, and a point converts by walking its text nodes. The grips sit in the page pane and are re-placed on scroll and resize.',
        'The painter cuts a mark wherever a value\'s words start or end; the controller joins touching pieces of one requirement back into one mark so the stroke is not broken.',
        'The stroke is an SVG in a theme token (--bcn-marker-1 to -6, and -faint-1 to -6), stretched to each line with box-decoration-break: clone. The painter numbers each mark\'s turn in data-ink.',
      ],
      acceptance: ['On 11.1, selecting the first requirement and dragging its start grip left takes in "maintenance,"; Highlight over "During all phases of" makes 11.1:1 and opens its record.', 'Requirements are Beacon\'s own: its ExtractRequirementsFromCommitment v6 prompt over each commitment, split by who does the work, one contiguous passage each (scripts/extract-requirements.mjs). COA 11.3 is two: the biologist\'s capture and handling, and the capture records.', 'COA 11.7: the sentence about the U.S. Naval Observatory times is plain, between two strokes: the spot check sees what is not tracked.'],
    },
    {
      label: 'Parsed from the commitment',
      selector: '[data-sw3-attrs]',
      intent: 'Everything parsed out of the commitment: its requirements in text order, each with the ink it is highlighted in, its ID, its name, its type and an Edit key; Not tracked (N), shown only when there are any: each sentence under the wavy rule, quoted and cut to three lines, with Make a requirement (its record opens to edit) and Not binding, both small ghost keys; hovering one lights its words in the text; then a roll-up of what they link to, by kind: species, milestones, phases, construction activities, seasons. An empty kind is one quiet line ("None"). Hover a row and the text lights the words it came from; click a requirement to select it.',
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
