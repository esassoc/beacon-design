// Handoff spec for step 1 of the three-step Setup Wizard (/prototypes/setup-wizard-3-step):
// the documents, the page being read, and the conversation with Aldo that scopes and steers
// the scan. Consumed only by scripts/gen-handoff.mjs. Brief: docs/setup-wizard-3-step-brief.md.
// The scan is a replayed event stream (src/data/setup-wizard-3-step.ts SCAN_EVENTS) over
// boxes anchored by scripts/anchor-itp.mjs; steering is src/components/bcn/sw3-steer.ts.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Documents',
      selector: '[data-sw3-docs]',
      intent: 'The project\'s source documents, one slim card each with where its run is (not started, reading p. 147, paused, or how many commitments it found). The document in view opens to its commitments, one slim card per commitment in page order, growing as the scan finds them: the code chip and the title only. A card is dashed while its commitment is being read and solid once parsed, the same grammar as the boxes on the page. Click a card to go to it on the page; × dismisses it.',
      decisions: [
        'Each document is its own run (a background job per document); the cards are its event stream rendered.',
        'No page numbers or requirement counts on the cards: state is the border, detail is on the page and in step 2.',
        'Dismiss is recorded in the steering record like a typed steer.',
      ],
      acceptance: ['While the scan runs, new cards appear dashed and turn solid as they parse.', 'Clicking a card moves the page to it and outlines its box.'],
    },
    {
      label: 'Run bar and scrubber',
      selector: '.bcn-sw3scan__bar',
      intent: 'The run\'s state in one line ("Reading p. 147. 37 commitments so far.", "Pausing after p. 149.", "Paused after p. 149.", "Re-reading p. 137.") with Pause / Resume. Below it every page in scope in one strip: read pages fill in, a pip marks each find, a read page with nothing on it is a hatched gap, and the scan head runs ahead of the page in view. Drag or click to jump.',
      decisions: [
        'Pause lets the page in flight finish: its extraction call is already out, so prod stops dispatching new windows and the ones sent complete.',
        'Pause and Resume are steers: pressed here or typed to Aldo, they land in the record.',
        'Speed, Skip to end and Restart are prototype controls over the replay; prod has none of them.',
        'A page being re-read reads as unread again until the re-read reaches it.',
      ],
      acceptance: ['Pause mid-run: the status reads "Pausing after p. N" until that page is done, then "Paused after p. N".'],
    },
    {
      label: 'Page and boxes',
      selector: '[data-page-view]',
      intent: 'The page in view, rendered from the uploaded PDF by pdf.js, with a box per commitment drawn as it is found (dashed) and turned solid when it parses, its requirement spans filling in alternating shades. While following the scan, the view is the page being read; picking any page stops following, and Follow the scan resumes. Mark missed commitment turns the page into a drag target: drag over the commitment and Beacon parses it.',
      decisions: [
        'pdf.js in the browser, as prod\'s source-pdf-viewer (ng2-pdfjs-viewer). No pre-rendered images.',
        'Boxes are PdfBoundingBoxDto (page, x, y, width, height as page fractions): they arrive in events and sit over the render at any zoom.',
        'Boxes come from anchoring each quote against the text layer (PdfPig words for native PDFs, OCR words for scanned ones), not from model citations.',
      ],
      gotchas: ['Render each page at the sheet width times devicePixelRatio, off-screen, then swap, so the old page holds until the new one is ready.'],
      acceptance: ['On p. 151, Mark missed commitment, drag over the "11.35 Fish Salvage Plan" heading: a card appears, then COA 11.35 parses into 7 requirements and pp. 152–154 stop being gaps.'],
    },
    {
      label: 'Aldo',
      selector: '[data-sw3-aldo]',
      intent: 'The conversation that scopes and steers the scan. Aldo opens with the scope pass ("The commitments are in VIII. Conditions of Approval, pp. 80–244: about 293."). The person answers in their own words: narrow the scope, pause, resume, give a rule, re-read. Aldo replies with what it did. As the scan reaches something that needs a person, Aldo raises it with the answer attached. Instructions, at the top, lists what every extraction call now carries: the scope, and each rule with the page it took effect from.',
      decisions: [
        'One structured-output call per message returns actions (scope, rule, pause, resume, reread, dismiss, merge) and a one-line reply; sw3-steer.ts is the schema, with a pattern matcher standing in for the model.',
        'A rule governs the pages not yet read. When pages were read without it, Aldo names them and offers a re-read; the re-read reports what changed.',
        'Every steer is kept with the page the scan was on: the record of how this document was read.',
        'Enter sends; Shift+Enter is a new line.',
      ],
      acceptance: [
        'Type "Only Condition 11": Aldo answers pp. 131–223 and Instructions shows the scope.',
        'Mid-run, type a cross-reference rule: Aldo adds it from the current page and offers "Re-read pp. 131–N"; taking it removes COA 11.32 and Aldo says so.',
        'Reload: the conversation and the run are where they were.',
      ],
    },
  ],
};
