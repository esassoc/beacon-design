---
name: monitoring-widget-config
description: 2026-08-24 Monitoring Portal iteration - customize page killed, replaced by a per-widget xl config dialog plus on-grid drag
metadata:
  type: project
---

The Monitoring Portal composer page (`/monitoring/customize`, specimen
`mp-customize.html`) is withdrawn. Configuration moved onto the dashboard: an
extra-large `esa-dialog` raised from each widget (live preview left, options
right), drag-to-reorder on the live grid with insertion carets, and an Add widget
tile at the bottom.

**Why:** Andy called the first dashboard pass "really strong" but the composer
"not working." The per-widget decision was the one that mattered and the map view
was not paying for itself. See [[no-wireframe-schematics]] for the general rule
this came from.

**How to apply:** Treat this as a reusable kit, not one page. The named primitives
are `BcnWidgetShell`, `BcnWidgetGrid`, `BcnSizePicker`, `BcnPreviewStage`,
`BcnConfigDialog`, `BcnWidgetMenu`, `BcnColorField`. Two invariants hold it
together: one `--_accent` per widget that every viz primitive inherits, and DOM
order is grid order so a reorder is an array move. Widget header glyphs are
NEUTRAL as of this pass; the accent lives only in the viz.

Two hub gaps this surfaced, both open decisions for Andy:
`esa-popover` has no end-aligned position (a 256px panel centered on a `⋯` button
overflows the rightmost grid column), and `esa-color-picker` always renders a free
`<input type="color">` beside its swatches, which breaks the constrained
`--bcn-mark-*` ramp. Both are good candidates for the spoke-to-hub promotion loop.
