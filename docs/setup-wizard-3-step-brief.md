# Setup Wizard in three steps

Prototype: `/prototypes/setup-wizard-3-step` (step 1) and `/prototypes/setup-wizard-3-step/review` (step 2). Step 3 is the shipped Compliance Index at `/prototypes/setup-wizard-ci`.

## The flow

1. **Source Documents.** Upload the project's documents. For each one, Aldo proposes where the commitments are, the person confirms or narrows it in conversation, and the scan runs with the document itself on screen. The person steers the scan as it reads, and every steer is kept.
2. **Commitments.** Every commitment reviewed against its source text, with its requirements as highlights inside it.
3. **Compliance Index.** Unchanged.

Requirements are no longer a step. They still exist and the compliance chain still needs them, but they appear as child highlights inside a commitment. The job of step 2 is to make a gap in the parse obvious without making anyone drill into what was parsed.

The goal is fewer clicks per commitment. A clean commitment costs zero clicks (Confirm all takes it). A flagged one costs one click to reach the problem and one to fix it.

## Settled decisions

- **Source documents hold files, as in prod.** A source (name, reference number) holds one or more files, and each file is scanned on its own. The Library lists sources (each folds open or shut) with their files under them, dense at 13px, and hides from the header; each file shows one state: Not scanned, Reading p. 16 of 170 with a progress bar, "3 to check", Paused at p. 40, 157 commitments, or No commitments. Selecting a source shows its details in the main pane: Name and Reference number, its files (Open scan, Download, Delete), a dropzone for more PDFs, and Delete source document. New source document opens a side dialog. Every delete asks first and states what goes with it. Every run keeps going while another file is in view, and each file has its own conversation and record.
- **Each document is read for what it is.** The scope pass reads the document's shape before proposing anything:
  - the ITP's commitments are numbered headings in a section (Condition 11, pp. 131–223);
  - the MMRP's are the rows of three landscape tables in Chapter 3 (pp. 16–163). A row runs across page breaks, and its Timing, Implementation Party, Reporting Schedule and Participating Organizations come from the table's columns, not from the model;
  - the Notice of Determination has none. It records that the MMRP was adopted, so Aldo proposes Nothing to scan.
- **The run checks in before it runs.** After the first three commitments it stops, Aldo says what to check, then gives each commitment its own message: a lead (where it took the ID and name from, how far the text runs) and a card with the ID, name and quoted text, a p. N button, Looks right and Fix. Fix opens the three as fields, with Save and Redraw the box. Requirements, timing and parties wait for step 2. What the person fixes becomes an instruction for the rest of the file, and a fixed name is the commitment's name in step 2. Then Resume, at the speed chosen.
- **Pace is the person's.** One at a time stops after each commitment parses. Slow reads slowly, with a line of narration of what the model just did ("Parsed MM AES-1a: 4 requirements. Timing and party from the table's columns."). Fast raises only what needs a person. Every pace change is a steer.
- **One panel holds the step and its console.** The step's title and prod's description; under a gray rule, the console, centered: Scan (Resume once begun), Pause and Restart as neutral keys with icons and names, the page in view of the file's page count (type a page to go to it), and the speed in a menu. Each key is live only when it can act, and the run's state reads as a pressed key. Below, the scrubber. The Library and Aldo each fold into a narrow rail from their own headers, as the app's side nav does. Where the run is is said once, in Aldo's pinned status. The workspace is a fixed height: only the panes scroll, and Aldo's composer is always in view.
- **Scope and steering are a conversation with Aldo.** Aldo opens with the scope pass: "The commitments are in VIII. Conditions of Approval, pp. 80–244: about 293." The person answers in their own words ("Only Condition 11", "Skip Table 3"), and keeps talking to it while the scan runs:
  - narrow or widen the scope;
  - pause and resume, or change the pace;
  - give a rule ("anything that just says see Condition X is a cross-reference, not a commitment");
  - re-read pages already read.
- **Every steer is a record.** Each message is kept with the page the scan was on when it was given and what Beacon did with it. Every extraction call carries the scope and each rule in effect, with the page it took effect from. Button presses (dismiss, merge, mark) land in the same record.
- **A rule governs the pages ahead.** It is added to the instruction for every later extraction call, so it changes nothing already read. When pages were read without it, Aldo says which and offers to re-read them. A re-read reports what changed.
- **Pause lets the page in flight finish.** Its extraction call is already out, so the run stops after that page ("Pausing after p. 149").
- **Aldo raises what needs a person** as the scan reaches it, with the answer attached: a find with nothing in it ("COA 11.32 reads like a reference to another condition", Dismiss), a passage split across a page break (Merge), and pages with nothing found (Show p. 152).
- **The page is the PDF.** pdf.js renders the uploaded file in the browser, page by page, and the boxes are drawn over it. There are no pre-rendered images.
- **The scan is watched.** This is the one place the wizard breaks the "never watch a model run" rule, because watching is the point: the person sees their own document being read. The page in view shows a box around each commitment as it is found. Requirement spans are not drawn in step 1; they are step 2's.
- **Boxes are editable, from a page toolbar.** Aldo's boxes are dashed, a person's solid. A bar pinned across the top of the page pane holds the manual tools, and never changes shape: a tool that needs a selection is in place, off until there is one. Select (V) and Mark (M) are the modes; Edit ID and name (Enter) opens the commitment's fields in Aldo; Delete removes the selected boxes on the page. More tools holds Split (S: a guide follows the pointer inside the box, a click cuts it, and the lower part becomes a passage of its own), Merge (two or more selected with Shift become one commitment; the first keeps its ID), Continue on next page (the next page, ready to draw this commitment's box there) and Hide Aldo's boxes (B). Then Follow (F), zoom (fit width up to 300%) and Undo / Redo (Cmd+Z, Shift+Cmd+Z). A selected box wears its ID and name; eight handles resize it, a drag moves it, arrows nudge. Manual work never pauses the run: it holds the view still while the scan goes on. Every edit, and every undo, is recorded as a steer with its page.
- **Scrubber.** Every page of the file, fifty at a time, with chevrons to page the window and no range label (the status line carries the page):
  - unread pages are light gray; pages outside the scope are blank;
  - read pages take the Source Documents color, each find a white dot;
  - the scan head is Aldo green, and clicking it takes up following the scan again;
  - hovering a page shows a small dark popover with its number, whether it is read, and what was found on it.
- **Walk away.** The run renders from events, so it keeps going while the person is in step 2 or away entirely. A return lands where the run is.
- **One commitment is the unit of review.** Requirements are highlights over the exact words they came from, and the spans partition the commitment's binding text.
- **Suggested vs confirmed** follows the Comments module: Aldo's proposal until a person touches it, and any edit confirms. There is no approve button per requirement. "Confirm commitment" confirms the rest, and Confirm all confirms every commitment nothing is flagged on, with one-step undo.
- **Exceptions first.** "Needs a person" filters to:
  - quotes that did not anchor to the source;
  - uncovered binding text;
  - duplicate requirements;
  - entity merges Beacon proposes;
  - types it is unsure of.
- **Each value is tied to its words.** In the requirement panel, hovering a field lights the words it came from. The Text and Page toggle swaps in the PDF crop with the spans boxed.
- **Entities are reviewed once per project**, not per commitment. Merging four phrasings of "Initiation of Covered Activities" fixes every commitment that uses them in one action.
- **Export for offline review** is one menu item.

### Continuous scroll vs one at a time

Both are built, with a toggle above the review.

| | Continuous | One at a time |
|---|---|---|
| Seeing the whole document | Yes: scroll it like the source | No: one commitment per screen |
| Approve fatigue | Low: clean ones are confirmed in bulk, never visited | High: every commitment is a stop |
| Context across a page break or a cross-reference | Neighbours are on screen | Hidden |
| Focus on one hard commitment | Good with the navigator and the flag filter | Best |

**Recommendation: continuous scroll, with "Needs a person" as the default working filter.** Jacky asked to see everything at once and to stop clicking approve. The pager answers neither. It earns its place only for long commitments that need full attention, and the navigator already gives that.

## Technical approach

1. **OCR first.** Every page gets a text layer with word coordinates. Boxes are drawn from that layer, so scanned documents and native PDFs behave the same.
2. **Scope pass.** A cheap call reads the table of contents and headings and returns the page range, a likely count, and the commitment pattern (for the ITP, a numbered heading like `11.42.1 Title.`). The person's range and instruction go into every extraction call after it.
3. **Windowed extraction.** Pages are processed in order, each window being a page plus overlap into the next, so a commitment that crosses a page break is not cut. Each window returns commitments as structured output, and every field carries a verbatim quote.
4. **Anchor every quote.** The server fuzzy-matches each quote against the text layer to get the page, character offsets and boxes.
   - A quote that will not anchor is the made-up-text signal. It is flagged, never silently kept.
   - Boxes come from this anchoring and not from model citations, because the PDF citations are page-level only and cannot be combined with structured output.
5. **Stream events to the UI:** `page_scanned`, `commitment_found`, `commitment_parsed`, `entity_proposed`, `merge_proposed`. A commitment parses as soon as its end has been read (the next heading or row is found), so the run is never more than one commitment ahead of what it has shown; that is what lets it stop cleanly after the first three. The front end renders state from the events, which is what makes working ahead and walking away free.
   - The run is a background job per document. Events reach the browser as server-sent events, which Beacon already uses (`AIController.PostChatCompletions` streams `text/event-stream`).
   - The browser renders the PDF with pdf.js, as `source-pdf-viewer` already does (ng2-pdfjs-viewer). Each box is a `PdfBoundingBoxDto` (page, and x, y, width and height as fractions of the page), the shape Beacon already stores, so a box arriving in an event is drawn over the page at any zoom.
   - For native PDFs the text layer is Beacon's existing PdfPig word extraction (`PdfTextExtractionService`). Scanned PDFs need an OCR pass first, which also returns word boxes.
6. **Per-commitment parse in the background.** Requirement spans come first, under the partition rule. Entity extraction then runs against a project entity registry. A final pass clusters near-duplicate entities by meaning and proposes merges. Case and punctuation variants fold by code before that pass; they are never a proposal.
7. **Steering is one structured-output call per message.** The message and the run's state (scope, page reached, pages read, whether it is waiting on the check) go in, and a list of actions comes out: `scope`, `rule`, `pause`, `resume`, `pace`, `check`, `go`, `skip`, `reread`, `dismiss`, `merge`, plus a one-line reply. `src/components/bcn/sw3-steer.ts` is that schema, with a pattern matcher standing in for the model. Anything that is not a scope, pause, resume or re-read is a rule.
   - **Pause** stops the job from dispatching new page windows. Windows already sent finish.
   - **Rule** is appended to the instruction for later windows. The steer record keeps the page it took effect from.
   - **Re-read** dispatches the windows for those pages again with the current instructions, and diffs the finds.
   - **Pace** sets how fast the job dispatches windows; One at a time holds after each parse.
   - **Check** and **go** close the calibration stop: the checked commitments and the corrections become part of the instruction.
8. **Coverage checks run as code**, not model judgment:
   - pages in scope with no finds;
   - binding sentences less than half covered by the union of requirement spans;
   - two requirements on near-identical spans (overlap over union above 0.8).

### Working proof of step 4

`scripts/anchor-itp.mjs` runs steps 1 and 4 over the real ITP, using poppler's text layer in place of OCR (the native PDF yields the same shape: pages, lines, words, boxes).

- It drops running headers and footnotes by type size, and reads one page of overlap past the end of scope.
- It finds each commitment's heading in document order. Each commitment is the run of words from its heading to the next one.
- It anchors each requirement quote by token alignment.

Result on pp. 131–223 (Condition 11, Take Minimization Measures):

| Measure | Result |
|---|---|
| Commitment headings found | 157 of 157 real headings. The one miss, COA 11.32, is a cross-reference, not a heading. |
| Requirement quotes anchored | 588 of 588. Before footnotes were dropped, 3 failed: footnote text had been read into the commitment body. |
| Binding sentences covered by the current extraction's quotes | 704 of 1,038 (68%) |

The 68% is Jacky's "requirements that didn't highlight distinct parts" in numbers. The partition rule closes it at extraction time, and the coverage check catches what is left.

Runtime is under half a second for 93 pages.

`scripts/anchor-mmrp.mjs` does the same for the MMRP's tables, from the same word boxes:

- It reads each page's header row and takes the column edges from it, so the columns are found, not configured.
- A row starts wherever the first column holds a code, and runs to the next one, across pages. Words are assigned to rows by y with a few points of slack, because a cell's first line can sit a hundredth of a point above the row's code.
- Each structured column's text is kept as a field. The commitment text splits at its top-level enumerated items (1., a., i.), each a requirement candidate.

Result: Table 1, pp. 16–127, 71 rows; Table 2, pp. 128–150, 19 rows; Table 3, pp. 151–163, 33 rows. 123 commitments and 547 requirement candidates. One code is the source's own typo (MM Bio-22b).

The NOD shows the limit of a text layer: p. 1 is a flattened form whose labels and check boxes are drawn, and the five component bullets on p. 4 are images. A document like it needs OCR or a vision pass before the scope pass can read it.

### Data the prototype uses

- `src/data/sw3-anchors.json` holds the script output: commitment text, line boxes and quote offsets.
- `src/data/setup-wizard-itp.json` holds the current extraction: names, types, timing, species, activities and parties.
- `src/data/setup-wizard-3-step.ts` holds the types: events, `Anchor` (page, charStart, charEnd, boxes), filing state and the entity registry.
- Seasons have no extraction fixture. The registry is read from the ITP's own phrasing.
- To stand in for the partition rule, each requirement's span extends over the binding sentences that follow it, up to the next requirement.

Seeded problems, matching what Jacky reported:

| Commitment | Problem |
|---|---|
| COA 11.35 | Missed by the scan. Pages 152–154 show as gaps. |
| COA 11.32 | A false find: a cross-reference read as a heading. |
| COA 11.36 | Found twice, split across the page break. |
| COA 11.14 | One requirement quotes a sentence that is not in the ITP. |
| COA 11.25 | Two requirements on the same words, under different titles. |
| COA 11.18 | The parse missed its last duty, a mowing restriction, so that sentence is uncovered. |

The merges are not seeded. They are the extraction's own:
- **Milestones:** four phrasings of "Initiation of Covered Activities", plus one in-water variant.
- **Seasons:** three phrasings each of the GGS active season and the dry season.

The prototype's scan of the ITP covers pp. 131–223 whatever range is entered. The MMRP and the NOD are the project's real PDFs; their scans are replayed from `src/data/sw3-mmrp-anchors.json` and the NOD's page count. Requirement names on the MMRP are the item's first words, standing in for the model's naming. Step 2 reviews the ITP only.

## Open technical questions

- **Cost of page-by-page vs whole-document extraction** on a 300-page ITP: windows bound each call, but the document prefix repeats.
- **Shared cached document prefix:** whether the scope pass and the extraction calls can share one, and whether a cache survives across a run that pauses for steering.
- **Where the merge pass runs:** after every commitment (merges appear early, and they shift as more phrasings arrive) or once at the end (stable, but late).
- **Re-read after a rule:** offered (as built) or automatic. Automatic is fewer clicks but spends extraction calls on every rule, including ones that change nothing behind the scan.
- **How many commitments to check:** three is a guess. A table document may need one per table; a document whose first commitments are unusual may need the check moved.
- **Several documents at once:** one run per document in parallel (as built), or a queue. Parallel finishes sooner; a queue keeps rate limits and cost predictable, and lets a rule given on the first document carry to the next.

## Demo path

1. **Scope.** Open step 1. Aldo proposes pp. 80–244. Tell it "Only Condition 11" (pp. 131–223), then Scan.
2. **Check.** The run stops after COA 11.1 to 11.3, and Aldo lays out each one's ID, name and text. Fix 11.1's name and Save, choose Looks right on the other two, then Resume. Drag a corner of a box on the page to tighten it.
3. **Steer.** Around p. 149, tell Aldo "Pause". It pauses after the page in flight. Tell it "Anything that just says see Condition X is a cross-reference, not a commitment". It adds the rule from p. 150 and offers to re-read pp. 131–149. Resume, then take the re-read: COA 11.32 goes.
4. **Other files.** Under Final Environmental Impact Report, open the MMRP: Aldo proposes Chapter 3's tables. Tell it "Skip Table 3", then Scan Chapter 3. Check the first three measures and Resume. Open the NOD and choose Nothing to scan. The ITP's run has kept going.
5. **Sources.** Create a new source document with a reference number and a PDF, then delete it: the confirm states what goes with it.
6. **Missed commitment.** When the run is done, Aldo reports nothing found on pp. 152–154. Show p. 152, step back to p. 151, choose Mark (M), and drag over "11.35 Fish Salvage Plan". It parses into 7 requirements. Open Review commitments.
7. **Exceptions.** In step 2, choose Needs a person, then:
   - COA 11.14: remove the requirement whose quote is not in the source;
   - COA 11.25: merge the duplicate;
   - COA 11.18: turn the uncovered sentence into a new requirement.
8. **Entities.** Open Project entities and merge the four phrasings into "Initiation of Covered Activities". Four commitments update.
9. **Confirm.** Confirm all on the clean remainder, then continue to the Compliance Index.

## Jacky's notes

-
