// Handoff spec for step 1 of the three-step Setup Wizard (/prototypes/setup-wizard-3-step):
// scope the source document, then watch the scan. Consumed only by scripts/gen-handoff.mjs.
// Brief: docs/setup-wizard-3-step-brief.md. The scan is a replayed event stream
// (src/data/setup-wizard-3-step.ts SCAN_EVENTS) over boxes anchored by
// scripts/anchor-itp.mjs.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Scope',
      selector: '[data-sw3-scope]',
      intent: 'Before the run, Beacon reads the document\'s table of contents and headings and proposes where the commitments are: "VIII. Conditions of Approval, pp. 80–244, 293 commitments likely". The person confirms it, edits the page range, or narrows it with a short instruction ("Only the general species measures, Condition 11" sets pp. 131–180). Once the run starts the card shrinks to the steering row: a new range applies without a restart.',
      decisions: [
        'A scope card with a free-text instruction, not a chatbot. The instruction rides along into every extraction call.',
        'The likely count updates as the range changes (it is the scope pass\'s heading count for that range).',
        'Prototype: the run covers pp. 131–180 whatever range is entered; the brief says so.',
      ],
      acceptance: ['Typing "Condition 11" in the instruction and leaving the field sets the range to 131–180 and the count to 86.', 'Start scan hides the file row and proposal line; Update scope replaces Start.'],
    },
    {
      label: 'Scrubber',
      selector: '[data-page-scrubber]',
      intent: 'Every page in scope in one strip. Read pages fill in; a pip marks each find on the page it starts (hollow while found, solid once parsed); a read page with nothing on it is a hatched gap, which is where a missed commitment hides. The scan head runs ahead of the thumb (the page in view). Drag or click to jump; click a pip to land on that commitment.',
      decisions: [
        'bcn-page-scrubber, reusable: esa-range-slider is a single native input with no per-step state or markers.',
        'Keyboard: it is a slider (arrows, Page Up/Down by five, Home/End). Pips are pointer shortcuts; the queue is the keyboard path to a find.',
      ],
      acceptance: ['After the run, pp. 152–154 show as gaps until COA 11.35 is marked; then none do.'],
    },
    {
      label: 'Page and boxes',
      selector: '[data-page-view]',
      intent: 'The page in view, large, with a box per commitment drawn as it is found (dashed) and turned solid when it parses, its requirement spans filling in alternating shades. While following the scan, the view is the page being read. Picking any page stops following; Follow the scan resumes. Mark missed commitment turns the page into a drag target: drag over the commitment and Beacon parses it.',
      decisions: [
        'Boxes come from our own anchoring of each quote against the text layer, not from model citations (page-level only, and not combinable with structured output).',
        'Coordinates are page fractions, so boxes ride the pre-rendered page image at any width. Pages are pre-rendered WebP (scripts/anchor-itp.mjs).',
      ],
      gotchas: ['Boxes are keyed per find and per span, so a repaint keeps existing elements and only new ones animate in.'],
      acceptance: ['On p. 151, Mark missed commitment, drag over the "11.35 Fish Salvage Plan" heading: a row appears as Parsing, then "pp. 151–154" with 7 requirements.'],
    },
    {
      label: 'Queue',
      selector: '.bcn-sw3scan__queue',
      intent: 'What the scan has found, in page order, growing as it goes: code, title, pages, and the parse state (Parsing, N requirements, No requirements found). Click a row to jump the page to it. Dismiss on every row; Merge with previous on a find the scan split off across a page break. Review commitments opens step 2 at any point, while the scan keeps working ahead.',
      decisions: [
        'Seeded corrections: COA 11.32 is a false find (a cross-reference read as a heading, parses to nothing); an Untitled find on p. 156 continues COA 11.36.',
        'The run persists (sw3-store, localStorage): leave and come back, and it is where the clock says it is.',
        'Pause, speed, skip and restart are prototype controls over the replay; prod\'s run is server-side and has none.',
      ],
      acceptance: ['Dismiss COA 11.32: its row and pip go. Merge the Untitled p. 156 row: COA 11.36 reads pp. 155–157.', 'Reload mid-run: the scan resumes at the page it had reached.'],
    },
  ],
};
