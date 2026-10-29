# Study Planning: audits of 2026-10-29

Three audits ran overnight against `/prototypes/plans-repo/` (read-only agents driving the dev server with Playwright).
This file keeps their findings and what became of each, so the work survives the session. "Done" names the commit
subject's area; "Open" items are still to do, roughly in priority order.

## 1. SOW coverage (Task 4 memo, top to bottom)

Published report: https://claude.ai/artifact/Psi8P8D56A3t9hmmFrhh8h (13 Met, 5 Partial, 1 Not Shown, 1 Backend). Every
gap is now addressed:

| SOW requirement | Was | Now |
|---|---|---|
| Ownership: individuals and organizations | Partial | Done: organizations in the owner picker, square avatars, full names (`PLAN_ORGANIZATIONS`) |
| % complete, on-track color coding, overdue view | Partial | Done: bars colored by health, chart key, Schedule Health filter over every item, late and due-soon seeded from today |
| Reminders to owners as due dates approach | Not Shown | Done: Plan Settings, Reminders (prod's Coming Up / Due / Past Due), Due for You, last and next on Details, automatic receipt reminders |
| Deliverables and obligations reference each other | Partial | Done: the obligation page lists the plan items serving it |
| WS4 bulk import and table editing | Partial | Done: Schedule Show As Table (AG Grid, paste blocks), Import Items (CSV or pasted rows, column matching, preview, into your draft) |
| WS4 role-based budget visibility | Partial | Done: Who Sees It holds on the Budget tab, drawer, index, review, and the chart's tooltips and rows |

## 2. Consistency with Beacon and within the prototype (top 10)

1. Status colors and words: Done (Completed, In Progress in the warning tone). Open: leaves on BcnStatusSelect.
2. Health overlaps Status: Done in part (Upcoming folded into On Track; "On plan" reads On Track; no "Done" beside
   Completed). Open: whether Blocked stays a health value.
3. Live is orange (prod's Draft color): **Andy's call** (his 2026-10-28 decision was orange Live); not changed.
4. Dialog footers: Done (Cancel first, ghost outline; drawer, move dialog, edit form).
5. Guest index "0 Plans, No Plans Match": Done.
6. Plan Settings with About folded: Done (gear in the panel header for Owners).
7. Formatters: Done in part (About's draft line uses the stamp). Open: one range and shift formatter.
8. Draft-first copy: Done (`plan-copy.ts` constants; the note wraps).
9. "Element" vs "item": Done in the drawer's visible strings. Open: server error messages.
10. Transmittal cards' chrome: Open.

Also open: one receipt badge; transmittal state "Not Sent" not "Draft"; one confirm dialog path; tooltip on every icon
button; Title Case misses ("Select level…", "No predecessors", "Unsaved changes", "Move under", "Show changes", "Write a
comment"); em dashes and middots (drawer, move dialog, Gantt tooltip); empty-value words (None, Not Set, Not Scheduled);
people shown one way; literal white in the draft header fill; Move Plan from prod missing; "2 Drafts" not clickable;
`/revisions/`, `/documents/`, `/deliverables/` routes to retire.

## 3. UX traps by role and use case

Blockers (all Done; check `access.mjs`):
1. Restore: only Owners and Editors, after a confirm naming what it undoes and the drafts that fall behind. The old
   `/revisions/` page now opens the plan with the modal.
2. Not on a plan's People: a "Not Shared With You" stop on plan and item pages; the index lists only your plans;
   New Plan and Start Sample Over for ESA and DWR staff; sending a transmittal adds its recipients as Guests.
3. Name or Notes only drafts publish (Review lists Name, Notes, Milestone).
4. A restricted budget stays out of the chart's tooltips and rows.
Found on the way: New Plan could name the sample's seeding user (Jamie) its Owner when opened mid-seed; fixed (the
dialog reads who you are when it opens; seeding reads storage after the API answers).

Majors:
- Ask to Publish loop: Done. A reviewer can Send Back with a note (the review modal); the owner sees it on their draft
  and on the index; the index's Needs You filter and link find requests waiting on you (`askloop.mjs`). A new owner
  edit withdraws a request.
- Deleting: an item or plan with a send still out is held (open it from the confirm); otherwise the confirm counts what
  goes, whose drafts are lost, and the plan's records go with it (`plandelete.mjs`).
- Edit form keeps typed text on Esc or Cancel (asks first). Done.
- Publish Now re-checks other drafts at click. Done.
- Guests: the transmittal page and inbox crumbs start at Sent to You; plan and item pages stop them with Shared With
  You for Review. Open, **Andy's call**: the agency user still sees the whole internal shell (Project, Tracking...).
- PM's check: Waiting on Agency filter, sticky deliverables head; Download the budget as CSV (prod's grid wording;
  records views renamed Export to Download); each index row counts its late items and links to the plan filtered to
  Late, Has Late Items filter (`download.mjs`, `late.mjs`). Done.
- People: Plan Settings asks before you lower your own role or remove someone with a draft; Remove names its person
  (`people.mjs`). Done.

Minors done: a link to a closed draft says so; a range or FY in a new plan's name fills its window; transmittal cards
take the muted header; "Not Scheduled" for no dates; server messages say item; item status is BcnStatusSelect (with
Blocked); draft header text on the knockout token (`minors.mjs`).
Still open: one compact shift formatter (chart and draft bar each have one); Move Plan from prod.

Andy's call: whether Contributors may change records on Live (send transmittals, unlink obligations, record completion).

## 4. Second trap audit (role journeys, keyboard, 1024)

An evaluator walked Sam (Contributor), Priya (Editor), Rowan (agency), Andy (new plan from scratch), Alex (two lines of
work), and keyboard and 1024px passes. What became of its twelve (`traps2.mjs` checks most):

1. Review published more than it showed (From on a later edit): Done, Publish starts from Live only.
   **Andy's call:** one draft per person per plan, so a what-if and real edits can't be kept apart.
2. A publish interrupted by leaving the page left Live half-built: Done, all or nothing (stores kept and put back on
   failure or on the next load); leaving mid-publish asks first.
3. Blocked status hidden by an old health override: Done, Blocked or Completed clears it.
4. Status saved to Live under a "goes to your draft" banner, item pages only: Done, it says Saves to Live; Status
   (Live) column in the schedule table; Owner filter with Mine (chart and table; `?owner=mine`).
5. Ask to Publish sent unseen edits: Done, it lists them first. (Edit landing in an older draft is the one-draft model.)
6. Requests and overdue receipts never reached Priya: Done, Needs You counts overdue receipts on your sends; the seeded
   request is now Sam's (a Contributor), not an Editor's what-if.
7. A new plan looked lost on return (empty Live): Done, it opens on its owner's draft.
8. Agency people joined as Contributors: Done, they join as Guests; the picker shows organizations.
9. Item names showed to outsiders; blank index: Done.
10. Keyboard: status select is a listbox (arrows, Enter, Escape); the drawer hands focus back to its row. Done.
11. Agency reviewer had no way to respond: Done, the sender's address as text (or reply to the email); a To recipient
    after a response no longer reads "You're copied".
12. Minors: 1024 status line wraps; Budget hides Chart/Table and Health; empty Budget heading gone; Clear Filters
    clears what emptied the list; row menu no longer sits mid-name. Done.
