// Handoff spec for step 1 of the three-step Setup Wizard (/prototypes/setup-wizard-3-step):
// the toolbar, the documents, the page being read, and the conversation with Aldo that
// scopes, checks and steers each document's scan. Consumed only by scripts/gen-handoff.mjs.
// Brief: docs/setup-wizard-3-step-brief.md. Each document's scan is a replayed event stream
// (src/data/sw3-docs.ts) over boxes anchored by scripts/anchor-itp.mjs and
// scripts/anchor-mmrp.mjs; steering is src/components/bcn/sw3-steer.ts.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Toolbar',
      selector: '[data-sw3-toolbar]',
      intent: 'Every control over the scan of the document in view, in one bar: what the run is doing now, in one line of narration ("Found MM AES-1b, Apply Aesthetic Design Treatments, on p. 18.", "Parsed MM AES-1a: 4 requirements. Timing and party from the table\'s columns."); Mark missed; the pace (One at a time, Watch, Full speed); Pause, Resume or Let it run; and the Aldo panel\'s open and close. Below, the page in view with previous and next, and the scrubber.',
      decisions: [
        'Pace is how fast the job dispatches page windows: a real control in prod, not a replay speed. Watch is the default while the run is learning; One at a time stops after each commitment parses; Full speed raises only what needs a person.',
        'Pause, Resume and every pace change are steers: pressed here or typed to Aldo, they land in the record with the page they came on.',
        'Pause lets the page in flight finish: its extraction call is already out.',
        'Restart is a prototype control over the replay; prod has none.',
      ],
      acceptance: [
        'At the check after the first commitments, the button reads Let it run; pressing it goes on at the pace selected.',
        'Hide Aldo gives the page the full width; Aldo opens again on its own when a document stops for a check.',
      ],
    },
    {
      label: 'Scrubber',
      selector: '[data-page-scrubber]',
      intent: 'Every page of the document, fifty at a time, with chevrons to page the window and a range label ("pp. 51–100 of 170"). Pages outside the scope are drawn but muted; read pages fill in; a pip marks each find; a read page with nothing found is a hatched gap; the scan head runs ahead of the page in view. The window follows the page in view unless the person pages it.',
      decisions: [
        'All pages, not only the ones holding commitments: the person sees where the scope sits in the whole document.',
        'Fifty cells per window keeps each cell a usable target on a 247-page permit and a 170-page MMRP alike.',
      ],
      acceptance: ['On the ITP, page the window to pp. 201–247: the pages past Condition 11 are muted and the label reads "pp. 201–247 of 247".'],
    },
    {
      label: 'Documents',
      selector: '[data-sw3-docs]',
      intent: 'The project\'s source documents, one slim card each with where its run is (Not started, Reading p. 147, Waiting on your check, Paused, 157 commitments, No commitments). The document in view opens to its commitments, one slim card per commitment in page order, growing as the scan finds them: the code chip and the title only. A card is dashed while its commitment is being read and solid once parsed, the same grammar as the boxes on the page.',
      decisions: [
        'Each document is its own run (a background job per document) with its own conversation and record; every run keeps going while another is in view.',
        'No page numbers or requirement counts on the cards: state is the border, detail is on the page and in step 2.',
        'Dismiss (×) is recorded in the steering record like a typed steer.',
      ],
      acceptance: ['Start the ITP at Full speed, switch to the MMRP: the ITP card keeps counting and reads "157 commitments" when done.'],
    },
    {
      label: 'Page and boxes',
      selector: '[data-page-view]',
      intent: 'The page in view, rendered from the uploaded PDF by pdf.js, with a box per commitment drawn as it is found (dashed) and turned solid when it parses, its requirement spans filling in alternating shades. On the MMRP\'s landscape tables a box is the table row, across page breaks. While following the scan, the view is the page being read; picking any page stops following, and Follow the scan resumes. Mark missed turns the page into a drag target.',
      decisions: [
        'pdf.js in the browser, as prod\'s source-pdf-viewer (ng2-pdfjs-viewer). No pre-rendered images.',
        'Boxes are PdfBoundingBoxDto (page, x, y, width, height as page fractions): they arrive in events and sit over the render at any zoom.',
        'Boxes come from anchoring against the text layer (PdfPig words), not from model citations. A table\'s rows and columns come from the header row\'s word positions on each page.',
      ],
      gotchas: [
        'Assign table words to rows by y with a few points of slack: a cell\'s first line can sit a hundredth of a point above the row\'s code.',
        'A flattened form (the NOD) has drawn labels and image text; the text layer misses them, so the page needs OCR or a vision pass.',
      ],
      acceptance: ['On ITP p. 151, Mark missed, drag over the "11.35 Fish Salvage Plan" heading: a card appears, then COA 11.35 parses into 7 requirements.'],
    },
    {
      label: 'Aldo',
      selector: '[data-sw3-aldo]',
      intent: 'The conversation that scopes, checks and steers the scan of the document in view. Aldo opens with the scope pass and a button for the scope it proposes (Scan Condition 11, Scan Chapter 3) or, for a document with no commitments, Nothing to scan. The run stops after its first three commitments, and Aldo lays each out: the code and title (click to show it on the page), its requirements by name, and for a table its column fields (Timing, Implementation party, Reporting schedule, Participating organizations), each with Looks right. The person corrects in their own words or lets it run at a chosen pace. Afterwards, the person steers in their own words, and Aldo raises what needs a person as the scan reaches it. Instructions lists what every extraction call carries: the scope, the pace, and each rule with the page it took effect from.',
      decisions: [
        'The check is the training step: corrections typed there become rules for the rest of the document, so the person trusts the run before letting it go.',
        'One structured-output call per message returns actions (scope, rule, pause, resume, pace, check, go, skip, reread, dismiss, merge) and a one-line reply; sw3-steer.ts is the schema, with a pattern matcher standing in for the model.',
        'A rule governs the pages not yet read; for pages already read, Aldo offers a re-read and reports what changed.',
        'Each document keeps its own conversation; switching documents switches the thread.',
      ],
      acceptance: [
        'Scan Condition 11: the run stops with COA 11.1 to 11.3 laid out and the toolbar reads "Check the first 3 commitments with Aldo."',
        'Type "They look right", then Let it run: the pace is Full speed in Instructions and the run goes on.',
        'On the MMRP, type "Skip Table 3": scope becomes pp. 16–150.',
        'On the NOD, Nothing to scan: the card reads No commitments.',
        'Reload: every document\'s conversation and run are where they were.',
      ],
    },
  ],
};
