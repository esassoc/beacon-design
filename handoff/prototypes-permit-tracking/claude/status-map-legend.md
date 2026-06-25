# Status map & legend

The Leaflet map of the four real Phase-1 paths (geometry from src/data/aws-routes.json via the client KMZ), each segment colored by its DERIVED permitting status on a readiness ramp — red far from buildable through green "Cleared to Construct". The legend (captured here) is the key; the map answers the one field question: which reaches are ready to build? Clicking a segment opens the read-only segment dossier.

## Key decisions
- Segment color = derived status, never a stored field. Status is the LEAST-ADVANCED covering ("gating") permit's status; a segment with no gating permit is "cleared". The map, legend, and every figure read the same derived value.
- Colors come from a cartographic palette (COLOR_SCHEMES scheme 0) exposed as CSS --st-* vars, so the legend swatches, the map lines, the timeline bars, and the KMZ overlay are one source of truth.
- The legend lists STATUS_ORDER (the readiness ramp order), so it reads as a progression, not an arbitrary set.
- The map div is third-party Leaflet (zoomSnap 0.25, real attribution); only the legend is design-system DOM, which is why this section captures the legend and documents the map in prose.

## Gotchas
- Do NOT persist segment status. Re-deriving it from gating permits is the whole architecture — a stored status would drift the moment a permit changes.
- Leaflet needs invalidateSize() when its tab/container first becomes visible (the map builds at boot only because Map is the default tab); on a tab framework that hides panels, call invalidateSize on reveal or the map renders at 0×0.
- Shared Leaflet chrome lives in src/styles/beacon-map.css (the .leaflet-tooltip restyle) — reuse it, don't re-skin per page.

## Done when
- Each path segment is colored by derived status on the red→green readiness ramp; the legend matches those colors in ramp order; clicking a segment opens its dossier.

## Markup
```html
<div class="map-legend" aria-label="Segment status legend">
  <span class="map-legend__title">Segment status</span>
  <span class="map-legend__row">
    <span class="map-legend__line" style="background: var(--st-not-started)"></span> Not
    Started </span
  ><span class="map-legend__row">
    <span class="map-legend__line" style="background: var(--st-in-preparation)"></span> In
    Preparation </span
  ><span class="map-legend__row">
    <span class="map-legend__line" style="background: var(--st-submitted)"></span>
    Submitted </span
  ><span class="map-legend__row">
    <span class="map-legend__line" style="background: var(--st-under-review)"></span>
    Under Review </span
  ><span class="map-legend__row">
    <span class="map-legend__line" style="background: var(--st-cleared)"></span> Cleared
    to Construct
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
.map-legend__line {
  width: 22px;
  height: 5px;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-400`: 0 8px 32px -8px rgba(0, 0, 0, .08) _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
