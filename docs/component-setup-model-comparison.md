# Applicable Commitments — the model comparison (retired 2026-08-14)

Two models of the same job were prototyped side by side at
`/prototypes/component-setup-models`. **Model A, the decision workspace, was
chosen.** The page and Model B's components were deleted on 2026-08-14 so the
prototype app shows one answer rather than a choice already made; this document
is what they said.

Recoverable from git at `ee26ab9` if the argument needs re-opening:
`BcnSetupQueue.astro`, `setup-queue.ts`, `BcnSetupModelCard.astro`,
`BcnSetupTeardown.astro`, `BcnSetupNotes.astro`,
`src/pages/prototypes/component-setup-models.astro`.

---

## The diagnosis (not up for a vote — it survives the choice)

The redesign is not a restyle. The production Component Setup screen is broken
in the **data model**, not in the CSS, and a reader who does not know that will
read the two models as taste and pick the prettier one.

### Why the count is wrong

1. **The table.** `ComponentCommitment` stores one row per decision, with
   `IsApplicable` as a `NOT NULL` bit. There are **two** states in storage, not
   three.
2. **The view.** `vComponentCommitmentDecisions` LEFT JOINs every Component in
   the project against every Commitment in the project, and calls the misses
   "Pending".
3. **The consequence.** Pending is therefore a **cross product, not a queue**.
   It counts the project rather than the component, and it re-inflates every
   time any source document gains a commitment.

For the fixture component the honest figures are 26 undecided, of which 8
arrived after the last review, against 11 already decided.

### What a user runs into

| What is seen | What produces it | |
|---|---|---|
| The count and the list disagree | The view toggle counts the unfiltered set; the pane below renders one source document. "52 Pending" over a list of three is the normal case. | Misleads |
| The number never reaches zero | Every commitment added to any source document becomes pending again for every component in the project. The progress badge measures a treadmill. | Misleads |
| Bulk overwrites rationales silently | One PATCH carries one rationale string for every selected commitment. A commitment that already had its own reasoning loses it with no warning. | Data loss |
| The screen never says what a decision does | Applying reconciles action implementations onto the component — it is what fills the tracker. Dismissing deletes the deletable ones back out. Neither is stated on the surface. | Hidden effect |
| The selection resets while you work | The source-document options stream auto-selects the first document alphabetically as a side effect, and re-fires on every decision and every view switch. | Fights the user |
| The Construction Activity filter cannot be used | Rendered, populated with real options, and hard-disabled — commitments are not associated to construction activities in the data model. | Dead control |
| Applied and Dismissed spin forever | The loading branch is inverted, and the flag never clears on those streams because `finalize()` is attached to a `combineLatest` that does not complete. | Broken state |

### The shared contract

Whatever the interaction, the replacement must:

1. Lead with a figure **scoped to this component**, and make every count agree
   with the list it labels.
2. Separate **new since the last review** from the standing backlog, so the
   treadmill is legible instead of hidden inside one number.
3. **State what a decision will do** — name the actions applying creates,
   before it is made.
4. Capture **rationale per commitment**, and warn before a batch write
   overwrites one that already exists.
5. **Render no control that cannot act.**

---

## The choice

The question that decided it: *is applying commitments to a component a backlog
you work down, or a stream you keep up with?* Model A assumes the first.

| | Model A — decision workspace (**chosen**) | Model B — triage queue |
|---|---|---|
| **The bet** | Deciding is slow because the list is unusable. Give facets that work and the power to act on many at once. | Deciding is slow because nobody starts. Show one question at a time and make the batch end. |
| **Best when** | A large backlog arrives at once — a source document lands and 40 commitments need sorting by species and type. | A steady trickle — six commitments since Tuesday and ten minutes to spend. |
| **Reading the commitment** | Preview pane beside the list. Fast to skim, easy to decide without fully reading. | Full width, given room. Harder to skim past, slower per item. |
| **Rationale** | Per item, or one for a batch — with a warning naming how many existing rationales it would overwrite. | Always per item. A batch rationale is structurally impossible. |
| **Risk** | Bulk makes a wrong decision cheap to make at scale. | A user who skips everything ends where they started, with a queue that felt like progress. |

Model A's risk is the one accepted. The mitigation is in the shipped workspace:
decisions stage rather than commit, Save is explicit, and a batch rationale
warns before it overwrites.

---

## Still open (carried into BCN-1412)

- **Should "new since last review" be per user or per component?** Per
  component is one stored date and matches how the decision record already
  works. Per user means two people reviewing the same component each see their
  own delta — friendlier, and a new table.
- **What resets the treadmill?** A commitment added to a source document
  becomes undecided for every component in the project. Whether that is right
  depends on whether components are expected to be exhaustive. Nobody has said.
- **Can a decision be undone?** There is no unset path today — once a row
  exists it is applied or dismissed forever. The workspace assumes undo is
  possible; it does not show what happens to the actions dismissal already
  deleted.

**Resolved since:** *"Does Suggested earn its place?"* — no. Suggested matched
on shared species or requirement type with commitments already applied to the
component, which is a weak signal on a decision with real consequences, and the
prototype was authoring it by hand rather than deriving it. The field was
removed from the data model on 2026-08-13, not just from the markup.
