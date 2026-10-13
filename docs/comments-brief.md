---
title: Comments (Planning module)
date: 2026-10-05 (pass 2: 2026-10-12)
status: shaped; data model settled; pass 2 adds visible AI proposals, assignment and review, New Response, Export
audience: Autumn Ward (ESA airports group), review 2026-10-13 noon
first attempt: branch feat/comments (4833391c), built from an andy-work session; superseded, keep only its mock data
---

# Comments

A Beacon module under **Planning** for managing public comments on an environmental document (EIS, EIR, Part 150 study). The public submits through a web form; submissions stream into Beacon; the team sorts each submission into topic-tagged comments and plans a response for every comment.

The goal for 2026-10-13: Autumn sees her own project (Seattle Part 150), anonymized, moving through a workflow that feels effortless, and leaves thinking "I can get this funded."

**The data model is settled. The UX is the project.** The prototype must be intuitive and forward-leaning: easy to assign comments to responses, easy to create new responses, easy to re-highlight. Arriving data is already parsed and suggested; people review it, they never watch a model run.

**Pass 2 (2026-10-12) overrides two calls below.** Mike Leech reviewed the prototype on 2026-10-09: the data model is right, the workflows aren't there yet.

1. **The AI's work is visible and leads the demo** (was: "AI works in the background … never the centerpiece"). Every comment's highlight and topic, and every response's assignee, is a *proposal* until a person confirms it. That is a state on the data (`suggested` / `confirmed`), drawn one way everywhere: **dashed = Aldo proposed, solid = a person confirmed.** Any edit a person makes confirms it. Still no spinners and no chat: legible, not theatrical.
2. **Assignment and review are in scope** (was: out of scope). Each topic has an expert; Aldo routes a new response to its topic's expert; the expert drafts, then hands it to the next person for final review; that person accepts.

## The flow to nail

From the **submissions inbox** into **one submission**, and how the reviewer responds to each highlighted element of it. Everything else is secondary.

## Entities (Comment Tracker's terms, kept on purpose)

| Entity | Meaning |
|---|---|
| Comment period | Container: name, open/close dates, response format. Owns all submissions and responses. One in the prototype; a switcher implies others. |
| Submitter | The person or organization. |
| Submission | What a submitter sent: form text plus attachments. |
| Comment | One passage within a submission, tagged with a topic and subtopic. Shown as a **highlight**. |
| Topic / Subtopic | Taxonomy. AI proposes it, matched against an industry-standard seed list. |
| Response | Answers many comments. Links are comment → response. **The unit of assigned work** (pass 2): an assignee, a stage (Draft → Final Review → Accepted), and who drafted it once it is handed on. |
| Person | Someone on the study team. The period maps each topic to an expert, and names a lead who finalizes by default. |
| Response Library | ESA's past responses across projects. Background data for the drafting agent; a separate admin feature, out of this module. One link out from the responses index at most. |

## Settled decisions

- **Highlight is the visual metaphor,** not brackets. Comments read as highlighter-colored passages in the submission text.
- **Color = topic (hue family), shade = subtopic.** Subtopic name on hover and in the margin. Families must stay clearly distinguishable (the first attempt's two flight-path blues and cyan were too close).
- **Response format belongs to the comment period.** Mock **summary mode** only: many comments roll up to one response.
- **Progress is a burn-down to zero:** "N comments without a planned response · M submissions untouched." A comment is planned once a person accepts its linked response, even provisionally. Accepting a response with 21 comments clears 21 at once; that's the demo's big moment.
- **Submission detail uses manual tools, no re-prompting:** reclassify topic/subtopic, drag a highlight's ends to resize, remove, select text to add, reassign to another response, create a new response from a comment.
- **Response redraft follows Stuart's compliance-index pattern** (see `src/pages/prototypes/setup-wizard-ci/` on main): a guidance textarea plus Redraft gives one new best-effort draft. No chat, no version history, one-step undo. The topics view, if built, uses the same pattern (lock / rename / delete, Unfiled bucket, guidance + Re-run).
- **Response detail:** response text, the comments it answers grouped by submission, "Drafted from" with 2–3 anonymized past ESA responses, guidance + Redraft, Accept.
- **Assign the response, not the comment** (pass 2). The response is what an expert drafts, and it holds up against summary mode: one expert owns R-004, and accepting it plans all 21 of its comments. A comment with no open response is owned, by derivation, by its topic's expert, so "Mine" covers unplanned comments too. Assigning comments instead would scatter one response's 21 comments across owners, and the rollup would have no single owner.
- **Accept happens at Final Review** (pass 2). In Draft, the response's primary action is Send to Final Review; in Final Review it is Accept Response. R-004 is seeded at Final Review, held by Dana Whitcomb (the person at the keyboard), so the 21-at-once moment still works.
- **Re-run refiles only what is still suggested.** A person's call stands.
- **Open question:** accepting a single comment's link without accepting the whole response. The first attempt allowed it. Andy hasn't decided.

## What a person can do to each record

**Response:** one stage at a time, one main action per stage. The stage's main action is the primary button in the response rail's footer. Backward moves and reassigning sit beside the person they affect.

| Stage | Who holds it | Main action | Also |
|---|---|---|---|
| Draft | the drafter (Aldo routes a response made from a comment to the topic's expert, dashed until confirmed; a response written from scratch is held by its writer) | Send to Final Review (pick the reviewer; the lead by default) | Confirm Aldo's routing, Reassign |
| Final Review | the reviewer; Drafted By shows who wrote it | Accept Response (plans every linked comment; one-step Undo) | Return to Drafter (back to Draft, with the drafter), Reassign |
| Accepted | nobody; the work is done | Reopen (back to Final Review; its comments are no longer planned) | none |

- **Create:** from a comment (submission page, + Response) or from scratch (Responses tab, New Response).
- **Edit:** the letter (editor, Save, Aldo rewrite); title and topic (page header, More, Edit Details). A new topic re-routes a response whose holder is still Aldo's suggestion.
- **Comments:** linked from the submission page; unlinked there or from the response page (comment panel, Unlink).
- **Delete:** page header, More, Delete Response, behind a confirm that says what happens to its comments: they keep their topics and go back to No Response. Not offered once accepted (Reopen first). Numbers never shift (R-012 stays R-012).
- **Assignment rules:** reassigning is a person's decision and confirms the holder. Changing a topic's expert (Topic Index) moves only responses whose holder is still Aldo's suggestion. Mine is the responses you hold that are not accepted.

**Comment:** create (select text), edit (refile, resize), confirm Aldo's filing, link and unlink responses, delete (Remove, guarded). Complete.

**Submission:** read-only in this pass. Recommended, not built:
- **Add Submission** for letters, emails and hearing testimony that don't arrive through the web form. You would enter the text and submitter details, and it would arrive with Aldo's suggested highlights, like any other.
- **Edit details:** submitter, organization, city and channel. The text stays as received, since highlights are anchored in it.
- **Exclude, not delete,** for duplicates, spam and withdrawn submissions. A public comment is part of the record, so an excluded submission stays on file with its reason and drops out of the burn-down.

## Pages, in priority order

1. **Submissions index:** period header with dates, response format and burn-down. Tabs *By date* (inbox) and *By topic* (topic → subtopic groups), following the Lists prototype's tab pattern.
2. **Submission detail:** the core screen.
3. **Response detail.**
4. Optional: Topics (Stuart's pattern), responses index.

Pass 2 adds: All / Mine on the Inbox and Responses tabs; the topic → expert map on the Topic Index; New Response on the Responses tab (title and topic, held by its writer, then link comments from a submission as with any response); Export on the period (Word and Excel, built from the current state).

Out of scope: the side-by-side comment/response PDF, export previews, letter-by-letter mode, Response Library browsing. Nothing here couples the module to other Beacon modules.

## Mock data, reusable

The first attempt's anonymized data is sound. Pull it onto your branch rather than redoing it:

```sh
git checkout feat/comments -- src/data/comments.ts src/data/comments-types.ts
```

It had 29 submissions with real dates (2024-06 → 2026-09), fake submitters, reworded text, 84 comments, 12 responses and 8 past responses. 12 comments are planned at the start, and r-04 holds 21. The source is `~/Downloads/esa-cms-project-export_20260921.csv`. Pass 2 added S-030 (a short letter that is one comment on one topic, the whole-submission case; S-018 is the split case, five comments across five topics), a six-person study team, and proposal state: submissions S-001 to S-012 arrive confirmed, later ones as Aldo's proposals. Real names, emails or verbatim text must never enter the repo; this may publish to GitHub Pages.

Everything else on `feat/comments` (the `BcnComments*`, `BcnSubmissionReader` and `BcnResponseDetail` components, the pages and the store) is a reference for what was tried, not a base to build on.

## Why the first attempt missed

It ran from an andy-work session, so the spoke-kit plugin's skills and PreToolUse hooks never loaded. It also:

- hand-built a popover and margin panel instead of walking Ecology → Beacon → `bcn-` for each piece;
- hard-coded body text to `1rem` to override the type ramp instead of using the typography composites;
- shipped lego selects at their small default size;
- made one quick visual direction with no comparison;
- wrote no handoff spec (`src/data/handoff/comments-*.mjs`), so `npm run deploy` fails `handoff:check`.

Run this from a beacon-design session so the plugin, hooks and `/design-qa` apply, and follow this repo's CLAUDE.md lookup order for every piece of UI.
