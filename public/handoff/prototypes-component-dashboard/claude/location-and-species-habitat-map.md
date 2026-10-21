# Location and species (habitat map)

The component's footprint drawn over the project's species habitat layers, and the species list beside it, pre-ticked from the intersection. In the first build (Andy, 2026-10-20).

## Key decisions
- The intersection runs on the component footprint (Component.Boundary), never on work areas.
- A component with a stored footprint uses it ("Stored Footprint") and may draw another ("Draw Footprint"). A component with none draws one (polygon or rectangle). Marker drawing is off.
- Each species reads "In habitat", "Not in habitat" or "No habitat layer". Species in habitat, or with no layer to say otherwise, are pre-ticked. A species the person ticks or unticks keeps their answer; the map no longer overrides it.
- The map fits to the footprint plus the habitat polygons it touches.

## Gotchas
- OPEN: where a footprint drawn in setup is saved. The prototype keeps it in setup state only (ComponentSetup.drawn) and never writes Component.Boundary. Decide whether drawing here writes the boundary.
- Habitat only changes the reason's wording ("Not in Giant Garter Snake habitat" vs "Giant Garter Snake not selected"). The rule reads the species selection, not the map.

## Done when
- The fixture footprint intersects only Swainson's Hawk and Valley Elderberry Longhorn Beetle habitat; Western Pond Turtle has no layer and is pre-ticked; the rest are unticked and read Not in habitat.

## Markup
```html
<div class="bcn-hmap" data-bcn-hmap="" data-prefix="bcn-component-setup-hmap">
  <div class="bcn-hmap__bar">
    <esa-button-toggle
      data-hmap-method="true"
      size="sm"
      label="Footprint"
    ></esa-button-toggle>
  </div>
  <div
    class="bcn-hmap__surface"
    data-hmap-surface=""
    style="height: 100%"
    role="region"
    aria-label="Component location against habitat layers"
  ></div>
  <div class="bcn-hmap__legend" aria-hidden="true">
    <span class="bcn-hmap__key"
      ><span class="bcn-hmap__swatch bcn-hmap__swatch--foot"></span>Component
      footprint</span
    ><span class="bcn-hmap__key"
      ><span class="bcn-hmap__swatch bcn-hmap__swatch--hab"></span>Habitat layer</span
    ><span class="bcn-hmap__key"
      ><span class="bcn-hmap__swatch bcn-hmap__swatch--sel"></span>Selected species'
      habitat</span
    >
  </div>
</div>
```

## Styles
```css
.bcn-hmap {
  gap: var(--spacing-300);
  flex-direction: column;
  height: 100%;
  min-height: 0;
  display: flex;
}
.bcn-hmap__bar {
  flex: none;
}
.bcn-hmap__surface {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
  flex: 1;
  min-height: 320px;
  overflow: hidden;
}
.bcn-hmap__surface .leaflet-container {
  height: 100%;
  font-family: inherit;
}
.bcn-hmap__legend {
  gap: var(--spacing-200) var(--spacing-500);
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  flex: none;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-hmap__key {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.bcn-hmap__swatch {
  border-radius: 2px;
  width: 12px;
  height: 12px;
}
.bcn-hmap__swatch--foot {
  border: 2px solid var(--color-content-default);
  background: color-mix(in srgb, var(--color-content-default) 6%, transparent);
}
.bcn-hmap__swatch--hab {
  background: color-mix(in srgb, var(--color-background-utility-info) 18%, transparent);
  border: 1px solid var(--color-background-utility-info);
}
.bcn-hmap__swatch--sel {
  background: color-mix(in srgb, var(--color-background-brand) 25%, transparent);
  border: 2px solid var(--color-background-brand);
}
```

## Tokens
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
