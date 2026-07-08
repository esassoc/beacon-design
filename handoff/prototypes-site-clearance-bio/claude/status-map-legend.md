# Status map & legend

The Leaflet map of the component's work areas (geometry from the client KMZ shapefile import), each marker colored by its DERIVED biological status, plus observation buffer rings and a Map/Satellite base-layer control. The legend (captured here) is the key; the map answers the field question: which sites are cleared to work, and which sit inside an active nesting buffer? Clicking a marker opens the work-area drawer; clicking an observation ring/dot opens the observation drawer.

## Key decisions
- Marker color = derived status, never a stored field. The LATEST review's outcome is the status; no reviews = Not Surveyed (grey). A work area with NO recorded review that an active observation buffer covers renders PROVISIONAL BLOCK — hollow red. Any recorded review status overrules the provisional display: a reviewed-Cleared site inside a buffer stays green.
- Provisional-block is the HOLLOW swatch — white fill, red stroke: "blocked, but not solidified" — the exact grammar the map markers use, so a hollow marker and a hollow legend dot tell the same story.
- The legend also documents the two observation glyphs: a buffer RING (an active observation's own BufferDistanceFt) and a HOLLOW sighting (tracking-only, buffer 0 — informational, never blocks).
- A Leaflet layers control offers Map / Satellite base tiles — the Component Buffer overlay is a satellite-mode analysis tool, so the imagery base ships with it.

## Gotchas
- Do NOT persist work-area status. Re-deriving it from the review history + live buffers is the whole architecture — a stored status would drift the moment a review is added or an observation is logged.
- The provisional check is review-PRESENCE, not review-outcome: one recorded review of ANY outcome removes the site from provisional-block eligibility forever after (until reviews are deleted).
- Leaflet needs invalidateSize() when its container first becomes visible; "tracking-only" sightings (bufferFt 0) must never escalate a work area.

## Done when
- Each work-area marker is colored by derived status; a no-review site inside an active buffer renders hollow red and the legend counts it; a reviewed site inside the same buffer keeps its review color; observation buffers render as rings; the base-layer control swaps Map/Satellite.

## Markup
```html
<div class="map-legend" aria-label="Clearance status legend">
  <span class="map-legend__title">Work area status</span>
  <span class="map-legend__row">
    <span class="map-legend__dot" style="background: var(--st-blocked)"></span>
    Blocked </span
  ><span class="map-legend__row">
    <span
      class="map-legend__dot"
      style="
        background: var(--color-surface);
        border: 2px solid var(--st-provisional-block);
        box-sizing: border-box;
      "
    ></span>
    Provisional Block </span
  ><span class="map-legend__row">
    <span class="map-legend__dot" style="background: var(--st-inaccessible)"></span>
    Inaccessible </span
  ><span class="map-legend__row">
    <span class="map-legend__dot" style="background: var(--st-not-surveyed)"></span> Not
    Surveyed </span
  ><span class="map-legend__row">
    <span class="map-legend__dot" style="background: var(--st-cleared)"></span> Cleared
  </span>
  <span class="map-legend__row">
    <span class="map-legend__ring"></span>
    Observation buffer
  </span>
  <span class="map-legend__row">
    <span class="map-legend__hollow"></span>
    Tracking-only sighting
  </span>
</div>
```

## Styles
```css
.map-legend {
  position: absolute;
  bottom: var(--spacing-400);
  left: var(--spacing-400);
  z-index: 500;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-400);
  background: color-mix(in srgb, var(--color-surface) 94%, transparent);
  backdrop-filter: blur(4px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  box-shadow: var(--shadow-400);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.map-legend__title {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.map-legend__row {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
.map-legend__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--color-surface);
  flex-shrink: 0;
}
.map-legend__ring {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px dashed var(--obs-color);
  background: color-mix(in srgb, var(--obs-color) 12%, transparent);
  box-sizing: border-box;
  flex-shrink: 0;
}
.map-legend__hollow {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid var(--obs-color);
  background: var(--color-surface);
  box-sizing: border-box;
  flex-shrink: 0;
  margin-inline: 2px;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--obs-color`: #7b5ea7 _(component)_
- `--radius-300`: .5rem _(primitive)_
- `--shadow-400`: 0 8px 32px -8px rgba(0, 0, 0, .08) _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
