# Setup Wizard in three steps

Prototype: `/prototypes/setup-wizard-3-step` (step 1) and `/prototypes/setup-wizard-3-step/review` (step 2). Step 3 is the shipped Compliance Index at `/prototypes/setup-wizard-ci`.

## The flow

1. **Source Documents.** Upload. Beacon proposes a scope, the person confirms or narrows it, and the scan runs with the document itself on screen.
2. **Commitments.** Every commitment reviewed against its source text, with its requirements as highlights inside it.
3. **Compliance Index.** Unchanged.

Requirements are no longer a step. They still exist and the compliance chain still needs them, but they appear as child highlights inside a commitment. The job of step 2 is to make a gap in the parse obvious without making anyone drill into what was parsed.

The goal is fewer clicks per commitment. A clean commitment costs zero clicks (Confirm all takes it). A flagged one costs one click to reach the problem and one to fix it.

## Settled decisions

- **Scope before the run.** Beacon reads the table of contents and headings and proposes a range: "VIII. Conditions of Approval, pp. 80–244, 293 commitments likely". The person edits the range or writes a short instruction ("Only the general species measures, Condition 11"). It is a card with fields, not a chat. The same fields steer the run once it starts, without a restart.
- **The scan is watched.** This is the one place the wizard breaks the "never watch a model run" rule, because watching is the point: the person sees their own document being read. The page in view shows a box around each commitment as it is found (dashed) and as it parses (solid, with requirement spans filled in).
- **Scrubber.** Every page in scope sits in one strip:
  - read pages fill in;
  - a pip marks each find, hollow while found and solid once parsed;
  - a read page with nothing found is drawn as a gap, which is where a missed commitment hides;
  - the scan head runs ahead of the page in view.
- **Light corrections in step 1:** dismiss a false find, merge a find split across a page break, and mark a missed commitment by dragging over it on the page.
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
5. **Stream events to the UI:** `page_scanned`, `commitment_found`, `commitment_parsed`, `entity_proposed`, `merge_proposed`. The front end renders state from the events, which is what makes working ahead and walking away free.
6. **Per-commitment parse in the background.** Requirement spans come first, under the partition rule. Entity extraction then runs against a project entity registry. A final pass clusters near-duplicate entities by meaning and proposes merges. Case and punctuation variants fold by code before that pass; they are never a proposal.
7. **Coverage checks run as code**, not model judgment:
   - pages in scope with no finds;
   - binding sentences less than half covered by the union of requirement spans;
   - two requirements on near-identical spans (overlap over union above 0.8).

### Working proof of step 4

`scripts/anchor-itp.mjs` runs steps 1 and 4 over the real ITP, using poppler's text layer in place of OCR (the native PDF yields the same shape: pages, lines, words, boxes).

- It drops running headers and footnotes by type size, and reads one page of overlap past the end of scope.
- It finds each commitment's heading in document order. Each commitment is the run of words from its heading to the next one.
- It anchors each requirement quote by token alignment.

Result on pp. 131–180 (Condition 11, the giant garter snake and California tiger salamander measures):

| Measure | Result |
|---|---|
| Commitment headings found | 85 of 85 real headings. The one miss, COA 11.32, is a cross-reference, not a heading. |
| Requirement quotes anchored | 348 of 348. Before footnotes were dropped, 3 failed: footnote text had been read into the commitment body. |
| Binding sentences covered by the current extraction's quotes | 415 of 609 (68%) |

The 68% is Jacky's "requirements that didn't highlight distinct parts" in numbers. The partition rule closes it at extraction time, and the coverage check catches what is left.

Runtime is about 2 seconds for 50 pages.

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

The prototype's scan covers pp. 131–180 whatever range is entered.

## Open technical questions

- **Cost of page-by-page vs whole-document extraction** on a 300-page ITP: windows bound each call, but the document prefix repeats.
- **Shared cached document prefix:** whether the scope pass and the extraction calls can share one, and whether a cache survives across a run that pauses for steering.
- **Where the merge pass runs:** after every commitment (merges appear early, and they shift as more phrasings arrive) or once at the end (stable, but late).

## Demo path

1. **Scope.** Open step 1. Type "Condition 11" in the instruction and start the scan. The range becomes pp. 131–180.
2. **Scan.** Pages fill in and boxes appear. Open Review commitments while the scan is still around p. 160.
3. **Missed commitment.** Back in step 1, drag the scrubber to the hatched gap at p. 152. Step to p. 151, choose Mark missed commitment, and drag over "11.35 Fish Salvage Plan". It parses into 7 requirements.
4. **Exceptions.** In step 2, choose Needs a person, then:
   - COA 11.14: remove the requirement whose quote is not in the source;
   - COA 11.25: merge the duplicate;
   - COA 11.18: turn the uncovered sentence into a new requirement.
5. **Entities.** Open Project entities and merge the four phrasings into "Initiation of Covered Activities". Four commitments update.
6. **Confirm.** Confirm all on the clean remainder, then continue to the Compliance Index.

## Jacky's notes

-
