# Plan drafts: the prototype of "Plan Editing: Proposed Direction"

Branch `experiment/fish-gantt-updates`. The Plans replica (`/prototypes/plans/`) now edits the way the proposal (2026-10-19) recommends. Edit mode is gone. Dates are tried freely in drafts on the Gantt; everything else is still changed carefully through the drawers. This prototype answers open question 9: do Undo and ghost bars make dragging feel safe, and are warnings drawn on the chart understood without a popup?

## Try it

1. Run `npm run dev`, open `/prototypes/plans/` and click **Load sample plan**.
2. Click **New draft**. Drag *Acoustic tag & receiver procurement* to the right. The bar lands at once. Its five dependents pulse for a moment, then show hatched (moved with it), with dashed ghosts of the live plan behind them.
3. Press Ctrl+Z or Undo, then Ctrl+Shift+Z or Redo.
4. Turn off **Drags push dependents**, then drag *Regional receiver network build-out*. The dependency to *Multi-year tag release & tracking* turns into a red dashed line, and the bar shows **1 broken dependency · Push dependents**.
5. **Save as draft** names the draft and shares it. To act as another editor, open the same URL with `&user=Alex%20Rivera` and open the draft from **Drafts**: it is view-only, with **Copy to my drafts**.
6. **Publish** shows one summary. If the live plan changed since your edits, it asks whether to keep those changes. It names anyone editing in a drawer, lists warnings and what moves, and offers a snapshot.

## What the proposal asked for, and where it lives

| Recommendation | Built as | Code |
| --- | --- | --- |
| Two editing routes | The Gantt opens on the live plan, read-only. Drafts change dates and Estimated/Scheduled; drawers change everything else. Inside a draft, an element's drawer opens in draft mode, where only the dates and date type are editable. | `plan-workspace.ts`, `plan-element-drawer.ts` (`PlanElementDrawerDraft`) |
| Drags keep today's cascade, made safe by Undo and ghost bars | Every drop applies at once. Undo/Redo keeps 100 steps. The cascade runs on the "server" (the mock), so the dragged bar lands first and the bars it pushes follow, marked pending. | `plan-draft.ts`, `plan-server.ts` (`replayDraft`) |
| Move-only drags as a variant (Q6) | The **Drags push dependents** switch is remembered per browser. **Push dependents** is a one-click, non-blocking fix that can be undone. | `plan-draft-bar.ts`, `planDraftPushDependents` |
| Store a draft as date overrides | A draft holds only the planner's own edits: the dates each element loaded and the dates it has now. Every read replays them on the live plan, so the cascade is never stored and the draft follows the live plan. | `plan-draft-model.ts`, `replayDraft` |
| Scratch copy plus named drafts shared with editors (Q7) | One unnamed scratch copy per planner per plan, saved on every change but never listed. On return, a banner offers *Continue · Discard*. **Save as draft** names a draft and shares it, view-only, with other editors (the button reads "Save and share"). | `BcnPlanDraftBar`, `BcnPlanDraftsDrawer`, `BcnPlanDraftNameDialog` |
| Publish applies the draft, deletes it, and offers a snapshot (Q10) | One summary, then one approval. Elements whose live dates changed since the draft touched them come first, set to keep the live dates. The summary is recomputed whenever a choice changes, and it is refused if the plan moved since it was read. | `BcnPlanPublishDialog`, `publishDraft` |
| Conflicts on the chart (BCN-1906) | A check of the plan as it stands: broken finish-to-start links are drawn red and dashed, the successor gets a red outline, and the tooltip and screen-reader summary say "Starts N days before X allows". This applies on the live plan too. | `plan-conflicts.ts` |
| Presence instead of edit locks (Q8) | Drawers check in on the status poll and lapse in hidden tabs. A drawer shows who else is editing that program, and the toolbar shows who is in. Nothing is locked. | `plan-presence.ts` |
| A refused save keeps the editor's values | The drawer stays open on what you typed. Fields someone else changed are flagged, and Save applies your changes to the current plan. Closing keeps them as **Unsaved changes** (a marker on the row, kept for 30 days, with Resume editing or Discard my changes on reopen). | `plan-unsaved.ts`, `plan-element-drawer.ts` |

## What's not built yet, or differs from the proposal

- **Move plan inside a draft** (Q3) isn't built. Move plan, Add and the row actions are hidden while a draft is open; they still work on the live plan.
- **Plan settings, levels and landmarks** don't keep refused values or check in for presence yet. Only the element drawer does, including create.
- **Snapshots** are stored by the mock server when Publish asks for one, but nothing lists or restores them yet; BCN-1869 owns that.
- **The scratch/named split is still a guess.** The variant where every draft is listed under Yours with an automatic name and a separate Share control isn't built.
- **No save points** inside a named draft (for example, "the version I showed Andy"); every change autosaves.
- **The cascade is the mock's.** Here `replayDraft` replays overrides with the ported scheduler; production would do the same on the API.
- **Unsaved changes live in this browser's localStorage**, standing in for the server.
- **The sample plan already breaks one dependency.** *Draft study plan submitted to CDFW* has a −14 day lead on *Detailed baseline study plan* and lands one day early, so the conflict marker shows on the live plan from the start. The publish summary notes it as "Already so on the live plan".
