# Step 3: the Compliance Index

Step 1 is the source document. Step 2 is the commitment. Step 3 is the index built from them, reviewed one subcategory at a time.

## 1. What prod has

### develop (esassoc/Beacon, 2026-10-14)

The index is two tables and two filed record types.

| Table | Holds |
|---|---|
| `ComplianceIndexCategory` | Project-scoped, emergent from the permit set. Name, SortOrder, LockedDate. |
| `ComplianceIndexSubcategory` | Name, SortOrder, LockedDate, EvidencedByCount (requirements the generator judged to belong), FirstOpenedDate (set on first open; gates nothing). |
| `ComplianceIndexSubcategoryRequirement` | The few requirements cited as the reason a bin exists. |
| `Obligation` | ComplianceIndexSubcategoryID (home bin), ObligationClass (Adhere, Monitor, Notify, Roster), ObligationStatus (Draft, Approved, Discarded), ObligationAudience (Crews, Monitors, Compliance staff), Title, TriggerText ("Applies when"), MonitorSigns (JSON array), IsAIProposed. Scope (phases, species, activities) is derived from its requirements, never stored. |
| `ObligationRequirement` | Genuine many-to-many, with `Excerpt`: the permit words the link rests on. This is the record. |
| `Action` | Nullable ComplianceIndexSubcategoryID. One bin only. |
| `ActionObligationExtraction`, `ExtractedItem`, `ExtractedItemFiling` | Suggestions, not the record. Items carry Statement, Excerpt, NoBinReason; filings carry IsHomeBin and the suggested record. |

Pipeline (`docs/backlog/compliance-index.md`, Threads 2, 3, 10, 11): Build index (prompt `ProposeComplianceIndex_v1.md`) proposes categories and subcategories; a person edits and locks; Re-run takes free-text guidance and keeps locked rows. Then one Draft run: Extract per requirement (`ExtractActionsAndObligations_v3.md`), File each item into its home bin and every bin a reader would look in, Merge per bin within one audience (`MergeObligations_v1.md`). Only accepting a suggestion writes `ObligationRequirement` or `ActionRequirement`. Coverage is requirement-level: linked, or "binds nothing" confirmed.

UI: `Beacon.Web/src/app/pages/project-setup/compliance-index-step/`. A sidebar of bins with draft and approved counts; a main pane that is empty (Build index), built (Re-run, Draft), or drafted (`subcategory-review`: actions, then obligations by audience, the selected draft's fields, and its commitment text with the passage highlighted). Verbs: Approve, Discard, Edit, Merge (same audience only), Approve all, Discard all, Restore, Approve Compliance Index.

`docs/backlog/obligation-registry-as-an-index.md` already names the artifact: "The registry is the index of a book, not its table of contents ... Categories are the major entries, subcategories the sub-entries, obligations the locators." Nobody reads it cover to cover. A thick index is a good index.

### PR #1520 (Kim, BCN-1807, open)

- Obligation detail page (`pages/obligation-detail/`): source requirements with excerpts and monitor signs; a rail of Details, Compliance Index ("Filed in", "Also filed in"), Scope, Lists.
- Start over replaces Re-run once drafting begins: a hard delete, refused when evidence is attached or a run is live (`ComplianceIndexStartOver.cs`).
- Restore all for a subcategory's discarded drafts. Merge moves above the tick boxes.
- `ObligationSourceDto` gains requirement text, commitment ID, source document name and start page. That is the full locator chain from an obligation to a PDF page.

MCSpelman's stack (#1474 to #1517) OCRs scanned PDFs and places commitments in them. It confirms steps 1 and 2 and changes neither.

## 2. The artifact: a book's index

Step 1 is a document a person can hold. Step 2 is a commitment as a marked-up page. Step 3 is the back-of-book index: the reference apparatus compiled from every commitment, so a reader enters at a topic and is sent to the passage.

| Metaphor | Fits | Breaks |
|---|---|---|
| Book index | Three-level heading structure (category, subcategory, entry). Locators point into text. "See also" is native. Overlap is normal ("speed limits, 88" and "dust control, 88"). Prod's own doctrine uses it. | Nothing structural. |
| Atlas gazetteer | Locators into a source. | Implies a map and a grid; the index has no spatial key. |
| Card catalog | A card is a full record with several access points. | A drawer of cards is a browse device, not a page to review. |
| Compliance matrix or MMRP | Familiar to consultants. | One row per commitment: step 2's shape, and it hides the many-to-many. |

The pick is the book index, borrowing one thing from the card catalog: an entry opens to its full record. Each concept maps to a stored field:

| Index part | Prod field |
|---|---|
| Heading | `ComplianceIndexCategory.Name` |
| Subheading | `ComplianceIndexSubcategory.Name` |
| Entry | `Obligation.Title` or `Action.Name`, with class chip |
| Locator | Each `ObligationRequirement` row, shown as the step 2 requirement ID (11.29:3) |
| Locator target | `Excerpt` inside the commitment text; the PDF page from `ObligationSourceDto` start page |
| See also | Subcategories that share entries with this one (home bin plus "Also filed in") |

## 3. Proposed step 3

**Parti.** Job: settle the index a subcategory at a time, with every entry one click from the words it rests on. Winner: completeness. An index is judged by the entry that is missing, so every entry is on the page. Sacrifice: per-entry first glance. Entries are dense index lines, not cards, and their fields appear only on selection.

**Layout.** The step 1 and 2 shell: step panel with title and console, the scrubber, then three panes.

- **Index** (left, folds to a rail like the Library): `BcnRegistryTree` showing Category › Subcategory › entries, all three levels open on load. A circle-check marks a reviewed subcategory (green when something was approved, muted when all were discarded, as BCN-1742 plans).
- **The subcategory page** (center): the unit of review, set in Beacon's document voice like step 2's commitment. Subheading with its category; actions first, then obligations grouped by audience (prod's grouping, because merges stay within an audience). Each entry is one line: class chip, title, locators. Draft entries take the suggested treatment from step 2 (dashed); approved are solid with a circle-check. A "See also" line closes the page. Selecting an entry opens it in place: Applies when, Monitor signs, and each passage quoted under its locator.
- **Aldo** (right): one conversation per subcategory, as step 2 has one per commitment.

**Scrubber.** `BcnCommitmentScrubber`'s grammar over subcategories: every bin in index order, category boundaries ruled with the category's name under the strip (as files are in step 2). Gray before drafting, darker gray ready, amber with something to settle, green reviewed. Window of 40. Next to settle walks amber bins. Above the strip: "Fugitive dust: 12 of 50. 9 reviewed, 6 to settle."

**Console.** Build index, then Draft, then Start over (PR #1520), as neutral keys with icons and names. The Draft run is watched lightly: cells fill as each bin's merge lands, with the remaining counts prod already computes (requirements to extract, items to file, bins to merge). The run renders from events, so a person can review a finished bin while others draft.

**Building the index is a conversation.** Aldo proposes the structure; the person answers in words ("give each listed species its own subcategory"). That is prod's Re-run guidance, kept in Instructions in effect.

**Aldo in review.** Plain words with proposals that apply on press: merge two entries, also file this under Speed limits, this is a monitor's duty, move to Nesting birds, why is this here (answered, not obeyed). Open items, each grounded in prod data:
- an item File put in no bin (`NoBinReason`: the index is missing a subcategory);
- an action with no responsible party ("Needs input");
- a merge proposed across permits;
- an obligation left with nothing behind it after a requirement edit;
- an excerpt that no longer matches the requirement text;
- requirements read as binding nothing, to confirm (the coverage gate).

**Moving between steps.** A locator opens the commitment in a side panel: step 2's marked-up text, read only, with the requirement's stroke in its own ink and the excerpt as the heavier pass. Its page key opens the PDF panel (`BcnSw3SourcePeek`). "Open in Commitments" lands step 2 on that commitment. In step 2, the requirement panel gains a read-only "In the index" list of the entries that cite it.

**Read only and edited.**

| Read only | Edited, and where |
|---|---|
| Locators, excerpts, commitment text, PDF | Obligation fields: side panel (prod's obligation edit dialog) |
| Derived scope (phases, species, activities) | Action fields: side panel (prod's action editor, Details and Timing) |
| See also (derived) | Filing, merge, class, audience: Aldo or the side panel |
| | Approve, Discard, Restore all: on the entry and the subcategory |
| | Subcategory name, order, lock: the Index pane |

**Reuse.** `BcnRegistryTree`, `BcnCommitmentScrubber`, the `bcn-aldo-*` kit (Panel, Thread, Composer, Needs, Instructions, Status), `BcnSw3Commitment` (read-only mode), `BcnSw3SourcePeek`, `BcnCommitmentBadge`, `esa-side-dialog`, `esa-collapsible`, `esa-button`, `esa-icon-button`, `esa-badge`, `esa-confirm-dialog` (Start over, Approve Compliance Index), `esa-empty-state`.

**Where this diverges from `/prototypes/setup-wizard-ci`.**
- The large dialog becomes the in-page workspace. Steps 1 and 2 never put the unit of review in a modal.
- The tabs (Details, Review Commitment, Review Source Document) become an in-place record and two side panels. That is step 2's panel grammar.
- Grouping moves from class to audience, matching prod and the merge rule.
- Kept as precedent: three levels on load, neutral buttons, Reviewed with circle-check, no count pills, codes as `BcnCommitmentBadge`, no row says where it came from.

## 4. Cohesion

| | Step 1: Source Documents | Step 2: Commitments | Step 3: Compliance Index |
|---|---|---|---|
| Artifact | The PDF | The marked-up commitment | The index |
| Unit in view | A page of a file | One commitment | One subcategory |
| Left pane | Library | (none) | Index, three levels |
| Scrubber | Pages, 50 per window | Commitments, 40, file boundaries | Subcategories, 40, category boundaries |
| Aldo | Per file | Per commitment | Per subcategory |
| Open items | Check, cross-references, gaps | Unanchored, uncovered, duplicates | No bin, needs input, orphaned, broken excerpt, binds nothing |
| Side panels | Edit ID and name | Edit requirement, PDF | Edit entry, commitment, PDF |
| Marks | Boxes: dashed Aldo, solid person | Highlighter inks per requirement | Dashed draft, solid approved; inks return in the commitment panel |
| IDs | Commitment code | Requirement ID 11.3:2 | Same requirement IDs, as locators |

Step 3 adds the locator, See also, and Approve Compliance Index as the wizard's end.

## 5. Open questions

1. **Does "See also" break the no-provenance precedent?** Rows stay silent about where they came from. See also is a relation between subcategories, derived from shared filings. Recommendation: keep it, one line at the foot of the page.
2. **Locator form.** Requirement ID alone (11.29:3) or with page (11.29:3, p. 141)? Recommendation: ID alone. The page is one hop away in the panel, and the index stays dense.
3. **Group by audience or class?** The earlier prototype grouped by class. Recommendation: audience, as prod does, because merges stay within an audience; class stays on each entry as a chip.
4. **Fixture.** The CI fixture is ITP only, with 267 actions from the old one-action-per-requirement rule. Prod's Thread 9 expects few actions (three against about fifty obligations on five DCP commitments). Recommendation: rebuild the fixture over ITP and MMRP with Thread 9's action definition, so locators cross files the way step 2's scrubber does.
5. **Is the Draft run watched?** Recommendation: lightly, through scrubber cells and remaining counts only. Step 1 is watched because the person sees their document read; here nothing on the page is being read.
