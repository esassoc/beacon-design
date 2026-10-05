---
title: Comments (Planning module)
date: 2026-10-05
status: shaped; data model settled, UX open
audience: Autumn Ward (ESA airports group), review 2026-10-13 noon
first attempt: branch feat/comments (4833391c), built from an andy-work session; superseded, keep only its mock data
---

# Comments

A Beacon module under **Planning** for managing public comments on an environmental document (EIS, EIR, Part 150 study). The public submits through a web form; submissions stream into Beacon; the team sorts each submission into topic-tagged comments and plans a response for every comment.

The goal for 2026-10-13: Autumn sees her own project (Seattle Part 150), anonymized, moving through a workflow that feels effortless, and leaves thinking "I can get this funded."

**The data model is settled. The UX is the project.** The prototype must be intuitive and forward-leaning: easy to assign comments to responses, easy to create new responses, easy to re-highlight. AI works in the background as a helpful tool and is never the centerpiece. Arriving data is already parsed and suggested; people review it, they never watch a model run.

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
| Response | Answers many comments. Links are comment → response. |
| Response Library | ESA's past responses across projects. Background data for the drafting agent; a separate admin feature, out of this module. One link out from the responses index at most. |

## Settled decisions

- **Highlight is the visual metaphor,** not brackets. Comments read as highlighter-colored passages in the submission text.
- **Color = topic (hue family), shade = subtopic.** Subtopic name on hover and in the margin. Families must stay clearly distinguishable (the first attempt's two flight-path blues and cyan were too close).
- **Response format belongs to the comment period.** Mock **summary mode** only: many comments roll up to one response.
- **Progress is a burn-down to zero:** "N comments without a planned response · M submissions untouched." A comment is planned once a person accepts its linked response, even provisionally. Accepting a response with 21 comments clears 21 at once; that's the demo's big moment.
- **Submission detail uses manual tools, no re-prompting:** reclassify topic/subtopic, drag a highlight's ends to resize, remove, select text to add, reassign to another response, create a new response from a comment.
- **Response redraft follows Stuart's compliance-index pattern** (see `src/pages/prototypes/setup-wizard-ci/` on main): a guidance textarea plus Redraft gives one new best-effort draft. No chat, no version history, one-step undo. The topics view, if built, uses the same pattern (lock / rename / delete, Unfiled bucket, guidance + Re-run).
- **Response detail:** response text, the comments it answers grouped by submission, "Drafted from" with 2–3 anonymized past ESA responses, guidance + Redraft, Accept.
- **Open question:** accepting a single comment's link without accepting the whole response. The first attempt allowed it. Andy hasn't decided.

## Pages, in priority order

1. **Submissions index:** period header with dates, response format and burn-down. Tabs *By date* (inbox) and *By topic* (topic → subtopic groups), following the Lists prototype's tab pattern.
2. **Submission detail:** the core screen.
3. **Response detail.**
4. Optional: Topics (Stuart's pattern), responses index.

Out of scope: the final response-to-comments appendix export, letter-by-letter mode, Response Library browsing, assignments.

## Mock data, reusable

The first attempt's anonymized data is sound. Pull it onto your branch rather than redoing it:

```sh
git checkout feat/comments -- src/data/comments.ts src/data/comments-types.ts
```

It has 29 submissions with real dates (2024-06 → 2026-09), fake submitters, reworded text, 84 comments, 12 responses and 8 past responses. 12 comments are planned at the start, and r-04 holds 21. The source is `~/Downloads/esa-cms-project-export_20260921.csv`. Real names, emails or verbatim text must never enter the repo; this may publish to GitHub Pages.

Everything else on `feat/comments` (the `BcnComments*`, `BcnSubmissionReader` and `BcnResponseDetail` components, the pages and the store) is a reference for what was tried, not a base to build on.

## Why the first attempt missed

It ran from an andy-work session, so the spoke-kit plugin's skills and PreToolUse hooks never loaded. It also:

- hand-built a popover and margin panel instead of walking Ecology → Beacon → `bcn-` for each piece;
- hard-coded body text to `1rem` to override the type ramp instead of using the typography composites;
- shipped lego selects at their small default size;
- made one quick visual direction with no comparison;
- wrote no handoff spec (`src/data/handoff/comments-*.mjs`), so `npm run deploy` fails `handoff:check`.

Run this from a beacon-design session so the plugin, hooks and `/design-qa` apply, and follow this repo's CLAUDE.md lookup order for every piece of UI.
