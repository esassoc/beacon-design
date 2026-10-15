# Step 3: the Compliance Index

Step 1 is the source document. Step 2 is the commitment. Step 3 is the index built from them, in develop's two phases: figure out the categories and subcategories, then make the actions and obligations, file them, and review them a subcategory at a time.

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

Pipeline (`docs/backlog/compliance-index.md`, Threads 2, 3, 9, 10, 11): Build index (prompt `ProposeComplianceIndex_v1.md`) proposes categories and subcategories; a person renames, reorders, deletes, adds and locks; Re-run takes free-text guidance for that run only (never stored) and keeps locked bins and bins that hold drafts. Then one Draft run in four project-wide stages: Read requirements (`ExtractActionsAndObligations_v3.md`), File into bins (`FileItems_v1.md`), Merge duties (`MergeObligations_v1.md`, `MergeActions_v1.md`), Complete drafts (`CompleteActions_v1.md`). Draft again is incremental. There is no gate before Draft beyond an index existing, and no merge is proposed to a person: Merge applies its merges as drafts.

UI: `Beacon.Web/src/app/pages/project-setup/compliance-index-step/`. A sidebar of bins with draft and approved counts; a main pane that is empty (Build index), built (Re-run, Draft), or drafted (`subcategory-review`: actions, then obligations by audience, the selected draft's fields, and its commitment text with the passage highlighted). Verbs: Approve, Discard, Restore, Edit, Merge (ticked drafts, one kind, one audience), Approve all (confirmed), Discard all (no confirm), Approve category (no confirm), Approve Compliance Index (confirmed). A draft action with no scope cannot be approved. Cited requirements show each requirement's whole text; rationale is never stored or shown. Marks: a dot for a bin with drafts never opened, the count to review, a green check when every draft is decided, muted when all were discarded. Suggest subcategories answers what fit no bin in three parts.

`docs/backlog/obligation-registry-as-an-index.md` already names the artifact: "The registry is the index of a book, not its table of contents ... Categories are the major entries, subcategories the sub-entries, obligations the locators." Nobody reads it cover to cover. A thick index is a good index.

### PR #1520 (Kim, BCN-1807, open)

- Obligation detail page (`pages/obligation-detail/`): source requirements with excerpts and monitor signs; a rail of Details, Compliance Index ("Filed in", "Also filed in"), Scope, Lists.
- Start over replaces Re-run once drafting begins: a hard delete, refused when evidence is attached or a run is live (`ComplianceIndexStartOver.cs`).
- Restore all for a subcategory's discarded drafts. Merge moves above the tick boxes.
- `ObligationSourceDto` gains requirement text, commitment ID, source document name and start page. That is the full locator chain from an obligation to a PDF page.

MCSpelman's stack (#1474 to #1517) OCRs scanned PDFs and places commitments in them. It confirms steps 1 and 2 and changes neither.

## 2. The artifact: a book's index

Step 3 is the back-of-book index: the reference apparatus compiled from every commitment, so a reader enters at a topic and is sent to the passage. Category is the heading, subcategory the subheading, each action and obligation an entry, each `ObligationRequirement` a locator, shown as the step 2 requirement ID (11.29:3). An entry opens to its full record in place. Overlap is native: an obligation filed in two bins reads as "Also filed in" on the obligation. There is no See also line; it was a derived relation with no field behind it.

## 3. Step 3, as built

**Phase 1: the index.**
- No index yet: an empty state with Build index and + Category. A hand-made category or subcategory is locked from the start.
- Built: the Index pane is develop's sidebar. Rename in place (the row locks; names unique among siblings), lock and unlock (a category's lock cascades down; its unlock does not), delete (the confirm names what goes with it), drag within the parent, + Subcategory, + Category, Lock all, Expand all. A bin holding drafts is kept on Re-run and its lock shows that.
- The center shows the subcategory's Cited requirements (up to three: requirement ID, name, the requirement's text), each opening its commitment.
- Re-run: guidance is typed to Aldo, who answers with develop's note ("N locked subcategories stay as is; unlocked ones it doesn't propose again are removed.") and the Re-run key. The status line then lists Added, Removed and Kept because locked, or "The re-run changed nothing." One guided Re-run was run ahead through Beacon's prompt ("give each listed species its own subcategory under an Endangered Species category": 18 categories, 98 subcategories); other guidance gets a plain answer that offers it.

**Phase 2: the drafts.**
- Draft actions & obligations runs the four stages with their counts and a bar; View progress opens "Drafting obligations" with the stages and the log. Each proposal has its own pre-run drafts (first build: 2,231; Re-run: 2,222), filed by the bin each row came from, so hand edits and renames carry through.
- The status line: drafts to review (or "Compliance Index approved"), what is outstanding for Draft again, what fit no subcategory with Suggest subcategories, View log.
- Review by home bin: actions first, then obligations by audience, then Discarded (N). Tick boxes for Merge; Approve all, Discard all, Restore all; Approve category in the tree; Approve Compliance Index in the step's actions. The no-scope block holds. Approve, discard and restore pause while a run is live.
- Scrubber: amber for a bin with drafts never opened, gray for opened with drafts to review, green when decided. Opened is not reviewed.
- Aldo, drafted: approve all, discard, merge two (@ each), a monitor's duty, why (from the draft's sources). Open items: a draft action with nobody named to do it, or no scope.
- Start over (PR #1520) replaces Re-run once a run exists: back to No index yet.

**Moving between steps.** A locator or cited requirement opens the commitment in a side panel, as step 2 marked it up, read only; its page key opens the PDF; Open in Commitments lands step 2 on it.

## 4. Cohesion

| | Step 1: Source Documents | Step 2: Commitments | Step 3: Compliance Index |
|---|---|---|---|
| Artifact | The PDF | The marked-up commitment | The index |
| Unit in view | A page of a file | One commitment | One subcategory |
| Left pane | Library | (none) | Index, edited by hand |
| Scrubber | Pages, 50 per window | Commitments, 40, file boundaries | Subcategories, 40, category boundaries |
| Aldo | Per file | Per commitment | Per subcategory: Re-run guidance, then review |
| Open items | Check, cross-references, gaps | Unanchored, uncovered, duplicates | Needs input, no scope |
| IDs | Commitment code | Requirement ID 11.3:2 | Same requirement IDs, as locators |

## 5. Open questions

1. **Re-run guidance beyond the one pre-run.** The prototype has one guided proposal. A live demo of other guidance needs the prompt called at view time.
2. **Is the Draft run watched?** It runs about fifteen seconds here, stage by stage, with the log one key away. Prod runs it server-side for minutes.
