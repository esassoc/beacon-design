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

Majors (open): an item edit lands in an existing what-if draft and an old publish request stays live; deleting an item
or plan orphans transmittals and documents silently; Ask to Publish has no loop (no toast, no return-with-note, not on
item pages); the Edit form drops typed text on Esc or Back; Publish Now isn't re-checked at click; the Guest sees the
whole internal app and a broken Plans breadcrumb; Guests can open `/deliverables/` and `/documents/`; the PM's status
check (cut-off columns at 1280, no Waiting on Agency filter, no cross-plan late view, no budget export).

Andy's call: whether Contributors may change records on Live (send transmittals, unlink obligations, record completion).
