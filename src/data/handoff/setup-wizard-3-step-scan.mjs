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
      label: 'Step header and console',
      selector: '[data-sw3-toolbar]',
      intent: 'One panel: the step\'s numeral, title and prod\'s description; under a gray rule, the console for the file in view, centered: the transport (Scan or Resume, Pause, Restart), each a neutral key with its icon and name, the page in view of the file\'s page count as one field (type a page to go to it), and the speed (One at a time, Slow, Fast) in a menu. Below, every page of the file in one strip. Where the run is is said once, in Aldo\'s status.',
      decisions: [
        'Each key is live only when it can act, and the run\'s state reads as a pressed key: Scan before the run, Resume when it is paused or stopped for the check, Pause while it reads, Restart once it has begun. Restart asks first and clears the file\'s scan and steers.',
        'Speed is how fast the job dispatches page windows: a real control in prod. Every speed change, pause and resume is recorded as a steer.',
        'With a source (not a file) selected, the console is dimmed and inert.',
      ],
      acceptance: [
        'At the check after the first three commitments, Resume goes on past it at the speed chosen.',
        'Type 140 in the page field and press Enter: the page and the scrubber\'s thumb move to p. 140.',
        'Fold the Library and Aldo from their headers: each becomes a rail and the page takes the width; a rail opens it again.',
      ],
    },
    {
      label: 'Scrubber',
      selector: '[data-page-scrubber]',
      intent: 'Every page of the file, fifty at a time, with chevrons centered on the pages to page the window and small page guides under them. Unread pages are light gray; read pages take the Source Documents color, each find a white dot on them; pages outside the scope are blank. The scan head is Aldo green. Hovering a page shows a small dark popover: its number, whether it is read, and what was found on it. Clicking the head cell takes up following the scan again.',
      decisions: [
        'All pages, not only those holding commitments: the person sees where the scope sits in the whole document.',
        'No page or range label here: the header\'s status line carries it once.',
      ],
      acceptance: ['On the ITP, page the window forward: the pages past Condition 11 read as out of scope.'],
    },
    {
      label: 'Library',
      selector: '[data-sw3-sources]',
      intent: 'The Library (the page is already Source Documents), dense at 13px with 12px states, folding into a rail from its header. Prod\'s model: a source document (name, reference number) holds files, and each file is scanned on its own. Each source folds open or shut by its chevron, and is its name, with a menu (Edit details, Add files, Delete source document); its files sit under it, one row each with the name (middle-truncated so the version and date stay) and one state: Not scanned, Reading p. 16 of 170 with a progress bar, a warning badge "3 to check", Paused at p. 40, 157 commitments, No commitments. A file\'s menu downloads it, restarts its scan or deletes it. New source document is pinned at the foot.',
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
      intent: 'The page in view, rendered from the PDF by pdf.js, with a box per commitment: dashed where Aldo drew it, solid where a person did, under a toolbar pinned across the pane. Select (V) and Mark (M) are the modes; Edit ID and name (Enter) and Delete act on the selection; More tools holds Split (S), Merge, Continue on next page and Hide Aldo\'s boxes (B); then Follow (F), zoom and Undo / Redo. A selected box wears its ID and name; eight handles resize it, a drag moves it, arrows nudge (Shift for a bigger step), Shift+click adds another box to the selection, Escape lets go. Every edit and undo is recorded as a steer with its page. Requirement spans are not drawn in step 1: they are step 2\'s.',
      decisions: [
        'Boxes are PdfBoundingBoxDto (page, x, y, width, height as page fractions); an edit sends the new rect for that commitment and page.',
        'Boxes come from anchoring against the text layer (PdfPig words), not from model citations.',
        'Manual work never pauses the run; it stops the view following the scan, and Follow brings it back.',
        'The bar never changes shape: a tool that needs a selection sits in place, off until there is one. Nothing floats over the text the person is reading.',
        'Mark asks for a targeted re-read of the region. Split cuts a box at a height: the top keeps the commitment, the bottom becomes a passage of its own. Merge keeps the first ID in reading order and takes every box. Continue on next page adds a box on the next page to the same commitment (PdfBoundingBoxDto already allows many pages).',
        'Undo puts the record of finds back; the conversation stays append-only, so an undo is itself a steer ("Undid: ...").',
      ],
      gotchas: [
        'Assign table words to rows by y with a few points of slack: a cell\'s first line can sit a hundredth of a point above the row\'s code.',
        'A flattened form (the NOD) has drawn labels and image text; the text layer misses them, so the page needs OCR or a vision pass.',
      ],
      acceptance: [
        'Mark, then drag over a passage: a solid box appears selected, wearing No ID; Delete removes it, and both edits are in the conversation.',
        'Select 11.1 and 11.2 (Shift+click), More tools, Merge: one commitment, 11.1, with both boxes; Cmd+Z puts them back, and "Undid: Merged 11.2 into COA 11.1" is in the conversation.',
        'Select a box, Split (S), click across its middle: the box ends there and the lower part is a new passage.',
        'Drag a box\'s corner handle: the box resizes and Aldo records "Adjusted".',
      ],
    },
    {
      label: 'Aldo',
      selector: '[data-sw3-aldo]',
      intent: 'The conversation that scopes, checks and steers the scan of the file in view, dense at 13px, with the composer always in view and the run\'s status pinned above it: reading (blue), stopped for the check (yellow), done (green). The run stops after its first three commitments; Aldo says what to check, then gives each commitment its own message: a lead (where it took the ID and name from, how far the text runs) and a card with the ID, name and quoted text (clamped, with Show all), a p. N button, Looks right and Fix. Fix opens the ID, name and text as fields, with Save and Redraw the box. Edit ID and name on the page toolbar opens the same fields for any commitment. Requirements, timing and parties are reviewed in step 2.',
      decisions: [
        'Needs you: what waits on the person is listed under the log with its answers until answered (the check, a flagged reference with Dismiss / Keep it / Skip all cross-references, a headless passage with Merge / Keep separate, pages with nothing found with Mark on p. N / Nothing there, a drawn box with no ID). The log keeps the notice text; the buttons live only in the list.',
        'After the check: Read the rest (fast, the default), Watch it, One at a time. Before it, the status reads "Stopping after 3 commitments for your check", never a pause.',
        'A question is answered and changes nothing; a message too short to act on gets its readings as buttons. Prod\'s structured call needs answer and unclear kinds.',
        'Mark them myself (on the opening): the person draws each commitment; Aldo names what is inside each box. Status: "By hand. N marked."',
        'The check is the training step: what the person fixes there becomes an instruction for the rest of the file.',
        'Buttons carry meaning in their color: green to accept, red to remove (Dismiss), blue to change the record (Merge, Re-read), the primary for the next step, neutral otherwise. Only send is Aldo\'s green.',
        'A name fixed at the check is the commitment\'s name in step 2.',
        'One structured-output call per message returns actions and a one-line reply; sw3-steer.ts is the schema, with a pattern matcher standing in for the model.',
        'Each file keeps its own conversation; switching files switches the thread.',
      ],
      acceptance: [
        'At the check, Needs you reads "Check the first 3: 3 left." All look right, then Read the rest: the run goes on at Fast.',
        'When the run is done: Needs you lists COA 11.32, the top of p. 156 and pp. 152 to 154; Keep it on 11.32 and Merge on p. 156 leave one, and the status reads "1 to settle."',
        'Type "why did you flag 11.32?": Aldo explains and the instructions are unchanged.',
        'On the MMRP, Mark them myself, then drag over MM AES-1a: Aldo reads it as MM AES-1a and the status reads "By hand. 1 marked."',
        'Fix COA 11.1, change its name, Save: the card reads Fixed, and step 2 shows the new name.',
        'Looks right on the other two, then Resume: the run goes on.',
        'Reload: every file\'s conversation and run are where they were.',
      ],
    },
  ],
};
