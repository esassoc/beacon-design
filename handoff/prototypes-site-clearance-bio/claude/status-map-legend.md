# Status map & legend

The Leaflet map of the 231 real work areas (geometry from the client KMZ), each marker colored by its DERIVED biological-clearance status, plus observation buffer rings. The legend (captured here) is the key; the map answers the field question: which sites are cleared to work, and which are blocked by a nesting buffer? Clicking a marker opens the work-area drawer; clicking an observation ring/dot opens the observation drawer.

## Key decisions
- Marker color = derived status, never a stored field. Status is the latest COMPLETED biological review's outcome, escalated to "provisional-block" when a live observation buffer overlaps the site. The map, legend, timeline, and readiness strip all read the same derived value.
- Provisional-block is the HOLLOW swatch — white fill, colored (red) stroke: "blocked, but not solidified" — the exact grammar the map markers use, so a hollow marker and a hollow legend dot tell the same story. A solid segment would read as a confirmed Blocked.
- The legend also documents the two observation glyphs: a buffer RING (an active nesting buffer that can block) and a HOLLOW sighting (tracking-only, buffer 0 — informational, never blocks).
- The map div is third-party Leaflet; only the legend is design-system DOM, which is why this section captures the legend and documents the map in prose.

## Gotchas
- Do NOT persist work-area status. Re-deriving it from the review history + live buffers is the whole architecture — a stored status would drift the moment a review is added or an observation is logged.
- Leaflet needs invalidateSize() when its tab/container first becomes visible (the map builds at boot only because Map is the default tab); on a framework that hides panels, call invalidateSize on reveal or the map renders at 0×0.
- "Tracking-only" sightings (bufferFt 0) must render as the hollow glyph and must NEVER escalate a work area — only a positive buffer that overlaps a site produces a provisional-block.

## Done when
- Each work-area marker is colored by derived status; provisional-block renders hollow (white fill, colored stroke) on both marker and legend; observation buffers render as rings, tracking-only sightings as hollow dots; clicking a marker opens its drawer.

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
    <span class="map-legend__dot" style="background: var(--st-survey-scheduled)"></span>
    Survey Scheduled </span
  ><span class="map-legend__row">
    <span
      class="map-legend__dot"
      style="background: var(--st-cleared-stipulations)"
    ></span>
    Cleared w/ Stipulations </span
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
- `--color-surface`: #ffffff _(semantic)_
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
