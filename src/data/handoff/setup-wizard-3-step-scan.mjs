// Handoff spec for step 1 of the three-step Setup Wizard (/prototypes/setup-wizard-3-step):
// the step header and its controls, the source documents and their files, the page being
// read with its editable boxes (or a source's details), and the conversation with Aldo that
// scopes, checks and steers each file's scan. Consumed only by scripts/gen-handoff.mjs.
// Brief: docs/setup-wizard-3-step-brief.md. Each file's scan is a replayed event stream
// (src/data/sw3-docs.ts) over boxes anchored by scripts/anchor-itp.mjs and
// scripts/anchor-mmrp.mjs; steering is src/components/bcn/sw3-steer.ts.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Step header and controls',
      selector: '[data-sw3-toolbar]',
      intent: 'One panel: the step\'s numeral and title with a status line (the only place the page appears: "Reading ITP_2081-2024-018-00_Signed.pdf, p. 133 of 247", "Stopped at 3 commitments to check", "Paused at p. 40 of 170", "Done: 157 commitments in 04_DCP_MMRP_ADA.pdf") and the Aldo panel toggle; under a gray rule, the controls of the file in view. Left, Mark missed. Center, the pace with icons (One at a time, Watch, Full speed). Right, one primary that is the next thing to do (Start scan, Pause, Resume, Continue after the check) and a menu for the rare ones (Restart this scan, Download file, Delete file). Below, every page of the file in one strip.',
      decisions: [
        'Pace is how fast the job dispatches page windows: a real control in prod, not a replay speed. Every pace change, pause and resume is recorded as a steer.',
        'Pause lets the page in flight finish: its extraction call is already out.',
        'With a source (not a file) selected, the controls are dimmed and inert: there is no file to control.',
        'Restart this scan re-queues the file\'s job; prod has no endpoint for it yet (only delete and re-upload).',
      ],
      acceptance: [
        'At the check after the first three commitments, the primary reads Continue; with all three checked, the status reads "Checked 3 commitments. Continue when ready".',
        'Press M or Mark missed: the button is pressed and the page becomes a drawing surface.',
        'Hide Aldo gives the page the full width; Aldo opens again on its own when a file stops for a check.',
      ],
    },
    {
      label: 'Scrubber',
      selector: '[data-page-scrubber]',
      intent: 'Every page of the file, fifty at a time, with chevrons to page the window. Unread pages are white cells; pages outside the scope are a sunken fill; read pages fill in; a pip marks each find; the scan head is Aldo green. Hovering a cell shows its page. Clicking the head cell takes up following the scan again.',
      decisions: [
        'All pages, not only those holding commitments: the person sees where the scope sits in the whole document.',
        'No page or range label here: the header\'s status line carries it once.',
      ],
      acceptance: ['On the ITP, page the window forward: the pages past Condition 11 read as out of scope.'],
    },
    {
      label: 'Source documents',
      selector: '[data-sw3-sources]',
      intent: 'Prod\'s model: a source document (name, reference number) holds files, and each file is scanned on its own. Each source is its name over its reference number, with a menu (Edit details, Add files, Delete source document); its files sit under it, one row each with the name (middle-truncated so the version and date stay) and one state: Not scanned, Reading p. 16 of 170 with a progress bar, a warning badge "3 to check", Paused at p. 40, 157 commitments, No commitments. A file\'s menu downloads it, restarts its scan or deletes it. New source document is pinned at the foot.',
      decisions: [
        'SetupWizardSourceDto and SetupWizardSourceFileDto as they are: source fields plus files with PageCount and CommitmentCount. The per-file scan state is new.',
        'Every run keeps going while another file is in view.',
        'Deletes ask first through a confirm dialog that states the impact (DeletionImpactGet): how many files and commitments go with it.',
      ],
      acceptance: [
        'New source document: name "Biological Opinion", reference "WCRO-2025-00123", add a PDF: the source is created and selected, and its file reads Not scanned.',
        'Delete it from its details: the confirm reads "This deletes 1 file." and the source is gone after Delete source document.',
      ],
    },
    {
      label: 'Source details',
      selector: '[data-sw3-editor]',
      intent: 'Selecting a source (not one of its files) shows prod\'s source view in the main pane: Name and Reference number with Save, the files with page count and scan state (Open scan, Download, Delete), the upload dropzone for more PDFs, and Delete source document in a danger zone.',
      decisions: [
        'Feature parity with prod\'s source step: upload, name, delete and download (sourceDocumentsPut, source file Post, Delete, DownloadGet).',
        'Uploads in the prototype are kept in the browser (IndexedDB) and render for real; they have no scan, and Aldo says so.',
      ],
      acceptance: ['Select Final Environmental Impact Report: its two files list with "170 pages. Not scanned." and "4 pages. Not scanned."'],
    },
    {
      label: 'Page and boxes',
      selector: '[data-page-view]',
      intent: 'The page in view, rendered from the PDF by pdf.js, with a box per commitment: dashed where Aldo drew it, solid where a person did. Click a box to select it: eight handles to resize, drag to move, and a small toolbar (Redraw, Delete, Open in Aldo). Arrow keys nudge, Shift for a bigger step, Delete or Backspace removes, Escape lets go. Mark missed draws a new box. Every edit is recorded as a steer with its page. Requirement spans are not drawn in step 1: they are step 2\'s.',
      decisions: [
        'Boxes are PdfBoundingBoxDto (page, x, y, width, height as page fractions); an edit sends the new rect for that commitment and page.',
        'Boxes come from anchoring against the text layer (PdfPig words), not from model citations.',
        'Drawing or selecting a box holds the page still: the scan goes on, the view stops following it.',
        'Redraw keeps the commitment and replaces its box on that page; Mark missed asks for a targeted re-read of the region.',
      ],
      gotchas: [
        'Assign table words to rows by y with a few points of slack: a cell\'s first line can sit a hundredth of a point above the row\'s code.',
        'A flattened form (the NOD) has drawn labels and image text; the text layer misses them, so the page needs OCR or a vision pass.',
      ],
      acceptance: [
        'Mark missed and drag over a passage: a solid box appears selected with its tools; Delete removes it, and both edits are in the conversation.',
        'Drag a box\'s corner handle: the box resizes and Aldo records "Adjusted".',
      ],
    },
    {
      label: 'Aldo',
      selector: '[data-sw3-aldo]',
      intent: 'The conversation that scopes, checks and steers the scan of the file in view, with the composer always in view. The run stops after its first three commitments, and Aldo lays out only what step 1 decides: each commitment\'s ID and name and its text, quoted (clamped, with Show all), with a page link, Looks right and Fix. Fix opens the ID, name and text as fields, with Save and Redraw the box. Requirements, timing and parties are reviewed in step 2. Instructions lists what every extraction call carries: the scope, the pace, and each rule with the page it took effect from.',
      decisions: [
        'The check is the training step: what the person fixes there becomes an instruction for the rest of the file.',
        'A name fixed at the check is the commitment\'s name in step 2.',
        'One structured-output call per message returns actions and a one-line reply; sw3-steer.ts is the schema, with a pattern matcher standing in for the model.',
        'Each file keeps its own conversation; switching files switches the thread.',
      ],
      acceptance: [
        'Fix COA 11.1, change its name, Save: the card reads Fixed, and step 2 shows the new name.',
        'Looks right on the other two, then Continue: the run goes on.',
        'Reload: every file\'s conversation and run are where they were.',
      ],
    },
  ],
};
