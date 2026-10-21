# Data tab — Permits / Segments grids

Permit Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracking/

![Data tab — Permits / Segments grids, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/data-tab-permits-segments-grids.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/data-tab-permits-segments-grids.phone.png

The data workspace: Permits × Segments as AG Grids built on the shared beacon-grid kit (the same theme + status-cell renderer as requirement-tracker), so the prototype reads as the real Beacon app. Permit rows open the EDITABLE drawer; segment rows open the read-only dossier.

## Key decisions

- beaconTheme + makeStatusRenderer from src/lib/beacon-grid — the single grid kit shared across Tracking pages; columns mirror the live Beacon views.
- Two grids behind one pivot (panes #pane-permits / #pane-segments); the inactive pane is hidden, not destroyed.
- Row click is the open affordance: onRowClicked → openPermit (permits) / openSegment (segments). Permits are the write surface; segments are read-only (status derived).
- Permits grid rows are checkbox-selectable to feed the bulk status bar.

## Gotchas

- Grids are LAZY (ensureGrids on first Data activation) — the recipe switches tabs before the grid exists; in Angular, instantiate on tab init and call sizeColumnsToFit on reveal.
- Editing here re-derives the whole store — a permit status change in the grid must repaint the map, mileage, timeline, insights, and exec rollup, not just the cell.
- Keep the two grids on the shared beacon-grid kit; do not hand-roll a second table style.

## Done when

- Permits and Segments render as themed AG Grids matching the Beacon grid kit; clicking a permit row opens the editor, a segment row opens the dossier; the pivot swaps panes.

## Markup and styles

_71 repeated elements are collapsed in the markup below; the comments say where._

- [data-tab-permits-segments-grids.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/data-tab-permits-segments-grids.markup-1.md) (47 KB)
- [data-tab-permits-segments-grids.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/data-tab-permits-segments-grids.markup-2.md) (47 KB)
- [data-tab-permits-segments-grids.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/data-tab-permits-segments-grids.markup-3.md) (5.6 KB)
- [data-tab-permits-segments-grids.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/data-tab-permits-segments-grids.styles.md) (807 B)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--radius-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--typography-font-weight-semibold` | `550` | semantic |
