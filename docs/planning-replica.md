# Planning replica: map for the Monday pairing

A replica of Jamie Quishenberry's Planning work on Beacon `origin/develop` (epic BCN-1652; stories 1788, 1819, 1820, 1805, 1822, 1866, 1867). Branch `proto/planning-replica` in the worktree `~/Dev/beacon-design--planning`. Committed locally and not pushed.

## Run it

```bash
cd ~/Dev/beacon-design--planning && npm run dev
```

Then open http://localhost:4321/prototypes/plans/ and click **Load sample plan**. To see live refresh, open the same plan in a second tab with `&user=Jamie%20Quishenberry` appended to the URL.

## Her screens and flows

1. **Plans list** (side nav, Planning > Plans). It shows loading, failed, empty and rows states. The empty state offers New plan and Load sample plan.
2. **New plan dialog.** Fields are name, description and levels (the hierarchy depth, e.g. Program / Study / Sub-study / Task).
3. **Plan page.** The description sits at the top, Edit mode sits top right, and the Gantt follows: an outline column, then bars, parent windows, milestones, dependency links, landmarks (30% / 60% design), a Today line and red overrun. The empty plan shows a dashed box with Add.
   - **Row actions:** + Add child, and a ⋮ menu with Move up, Move down, Move…, and Delete.
   - **Element drawer** (open a row, or Add): create or edit an element and its dependencies. An Add level panel stacks over it.
   - **Plan settings drawer:** details, levels, landmarks and delete.
   - **Move plan:** shift the plan by days or to a new start date. The schedule preview ("This change moves N items") comes before Confirm.
   - **Move… (element):** re-parent a row under another parent.
4. **Edit mode** (replaced by drafts on the `experiment/fish-gantt-updates` branch — see [plan-drafts-experiment.md](plan-drafts-experiment.md)). Four dismissible instructions appear. Drag a bar's middle to move it, or its ends to resize it. Drag a parent's dashed window. Shift+click multi-selects, Shift+click on a parent selects its children, and Esc clears. A drop with consequences holds a popup (new dates, "Shifts N dependents") with Apply or Revert.
5. **Live refresh.** The page polls every 10 seconds. Someone else's save shows "X updated <plan>" as a toast and the chart redraws. A stale write gets "This plan has changed … Your change wasn't saved." with Reload. A plan deleted elsewhere warns, then returns to the list.

## Where the replica approximates

- **Backend:** a mock plan API over localStorage (`src/lib/planning/plan-server.ts`). Her scheduler and plan rules are ported as-is. The other user is simulated with `?user=`.
- **Rights:** every permission is granted. Her rights-gated variants were not exercised.
- **Load order:** her resolver loads the plan before the page draws. Here the page flashes the title "Plan" briefly first.
- **Alerts:** her page alerts appear as toasts. Confirms are plain text.
- **Busy buttons:** her loadingButton becomes disabled buttons and disabled menu items. Row actions run one at a time per element.
- **Menu items:** the ⋮ menu has no item icons (the lego renders them as dots).
- **Close guard:** a backdrop click on a dirty drawer asks the guard confirm. There is no close-guard lego, so this is wired by hand.
- **Search-select:** her search-select became esa-combobox with a one-line label (no rich option rows).
- **Colors:** her accent-surface is a color-mix. Other tokens map 1:1 to the spoke's semantic layer.
- **Tooltips:** some tooltips are native `title` attributes.
- **Inline editors:** her inline-edit fields are kept as she built them. They conflict with our "edit in a side panel" rule, so that is a pairing topic.
- **Dark mode:** not checked. This spoke renders light under a dark OS preference.

## Lego gaps found (candidates for /request-lego)

- No runtime loading or disabled state API on esa-button.
- No close guard on esa-side-dialog or esa-dialog.
- No rich option templates in esa-combobox.
- No aria-label pass-through on some legos.
- No meta (13px) type composite.
- No danger-zone row variant for the drawer.
- esa-icon lacks `undo-2` and `ellipsis-vertical` (filled locally).
