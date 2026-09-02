---
name: no-wireframe-schematics
description: Andy rejects schematic/wireframe stand-ins for UI; show the real rendered component, cloned and scaled if needed
metadata:
  type: feedback
---

Never represent a real component with a schematic, skeleton, or dashed
placeholder when the real thing can be rendered. If space is the problem, clone
the real DOM and scale it, do not draw an abstraction of it.

**Why:** Reviewing the Monitoring Portal composer (2026-08-24) he killed the whole
page with "the scaffold/skeleton outline is not working." The composer canvas drew
each widget as a dashed box with a gray schematic of its viz (ring, bar lines,
column strip). It was legible as a map and useless as a design decision, because
you cannot judge a widget you cannot read. His replacement ask was explicitly the
macOS/iOS widget gallery: the same widget shown at each size, rendered for real.

**How to apply:** For any "arrange / configure / pick a size" surface, budget for a
live preview from the start. The mechanic that makes it affordable is
`cloneNode(true)` on the live node, `inert`, laid out at its true target width, then
`transform: scale()` to fit a fixed well. Scale on the axis being chosen and let the
other axis scroll, so the container height stays stable. See [[bcn-preview-stage]]
and the spec at
`/private/tmp/claude-501/-Users-andrewlovseth-Dev-beacon-design/26e18f3c-3942-4760-ba44-0c007a58c29d/scratchpad/specimens/spec.md` § 10.3.
