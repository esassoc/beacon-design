# Obligations list (Data Catalog)

Source prototype: https://esassoc.github.io/beacon-design/prototypes/data-catalog-obligations/

The flat catalog of all 402 obligations — the filing cabinet, deliberately not the registry tree. Sortable and filterable on class and the three category axes (subject, activity, species) plus the commitments that state each duty, with CSV export. No status column: the status model was dropped, and catalog surfaces carry configuration rather than tracking data.

| Section | What it is | Spec | Screenshots |
|---|---|---|---|
| Obligations grid | One row per obligation across all 402, using the shared Beacon grid kit (src/lib/beacon-grid.ts) already carried by the component index, the work-area board an… | [obligations-grid.md](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/obligations-grid.md) 107 KB in 4 files | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/obligations-grid.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/obligations-grid.phone.png) |
| Grid footer (download + counts) | The strip welded under the grid: CSV download on the left, record count on the right. | [grid-footer-download-counts.md](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/grid-footer-download-counts.md) 13 KB | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/grid-footer-download-counts.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/grid-footer-download-counts.phone.png) |
