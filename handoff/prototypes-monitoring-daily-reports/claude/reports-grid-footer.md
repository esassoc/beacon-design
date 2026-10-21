# Reports grid + footer

Daily Reports · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/daily-reports/

![Reports grid + footer, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-reports/claude/reports-grid-footer.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-reports/claude/reports-grid-footer.phone.png

One row per site visit — the shared AG Grid kit (beacon-grid.ts) already used by Observations, Surveys, and Permits & Studies, over a footer carrying a CSV download and the record count. Columns: Date (sortable link, opens the detail dialog), Monitor, Status (report-workflow chip), Work Areas, and a per-row Report download button.

## Key decisions

- Date is a link-styled cell (linkRenderer) sorted descending by default, so the newest report leads — matching the reference prod tab exactly.
- Status here is the REPORT DOCUMENT's own paperwork lifecycle (draft / in review / in progress / final) — a separate concept from the compliance severity used elsewhere on the dashboard. It answers "has Fieldstone's office finished writing this up," not "is there a finding."
- The Report column is a small icon-only download button, not a link — it fires a real generated text file (the same DAILY MONITORING REPORT content the detail dialog's own download button produces), not a dead affordance.
- linkRenderer was extended to prefer a column's formatted value (valueFormatted) over the raw value, so Date can render a compact "8/4/26" while the underlying field stays the raw ISO string for correct chronological sort.

## Gotchas

- The Report button's click handler MUST call stopPropagation() — the row itself is also click-wired to open the detail dialog (onRowClicked), so without it every download also pops the dialog open behind the browser's download prompt.
- The footer's "Filtered Records" count only appears once a filter narrows the set below the total — it should stay hidden at the unfiltered 47, not show "47 of 47."

## Done when

- The grid lists all 47 site visits, newest date first, with a working status chip per row.
- Clicking a row's Report icon downloads a text file for that row only, without opening the detail dialog.
- Download as CSV exports every currently-filtered row; the footer count matches what is on screen.

## Components

- `bcn-grid-name` (spoke) · `src/components/bcn/BcnWorkAreaBoard.astro`

## Markup and styles

_30 repeated elements are collapsed in the markup below; the comments say where._

- [reports-grid-footer.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-reports/claude/reports-grid-footer.markup-1.md) (47 KB)
- [reports-grid-footer.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-reports/claude/reports-grid-footer.markup-2.md) (47 KB)
- [reports-grid-footer.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-reports/claude/reports-grid-footer.markup-3.md) (13 KB)
- [reports-grid-footer.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-reports/claude/reports-grid-footer.styles.md) (1.4 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
