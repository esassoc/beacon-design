# Location and species (habitat map)

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

The component's footprint drawn over the project's species habitat layers, and the species list beside it, pre-ticked from the intersection. In the first build (Andy, 2026-10-20).

## Key decisions

- THE FOOTPRINT, in order: the stored boundary (Component.Boundary), else the union of the component's work areas, else one drawn here (polygon or rectangle; marker drawing is off). Point and line layers, like an elderberry survey, count as touched within the component's buffer (ComponentBuffer, BCN-1454).
- A SPECIES STARTS CHECKED unless its layer was queried and the footprint does not touch it. No layer, a failed query, or no footprint yet reads "No habitat data" and stays checked: missing data never recommends anything out.
- A species with a field record on this component stays checked whatever the map says, and reads "Seen on this component". Dismissing its commitments would unlink the record (ADR 0074).
- Each species reads "In habitat", "Not in habitat", "Seen on this component" or "No habitat data". A species the person ticks or unticks keeps their answer; the map no longer overrides it.
- The map fits to the footprint plus the habitat polygons it touches.

## Gotchas

- OPEN: where a footprint drawn in setup is saved. The prototype keeps it in setup state only (ComponentSetup.drawn). The existing set-boundary endpoint can save it, and clears the source link.
- The intersect is a NEW server-side dependency: an ArcGIS geometry query per habitat layer (one layer can serve several species), with its own latency and failure mode. A failed query is No habitat data, not Not in habitat.
- Habitat only changes the reason's wording ("Not in Giant Garter Snake habitat" vs "Giant Garter Snake not selected"). The rule reads the species selection, not the map.

## Done when

- The fixture footprint intersects only Swainson's Hawk and Valley Elderberry Longhorn Beetle habitat; California Tiger Salamander is outside its habitat but has a field record, so it reads Seen on this component and stays checked; Western Pond Turtle has no layer and is checked; the rest are unchecked and read Not in habitat. Switching to Draw Footprint with nothing drawn turns every species to No habitat data, all checked.

## Components

- `bcn-hmap` (spoke) · `src/components/bcn/BcnHabitatMap.astro`
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`

## Markup

```html
<div class="bcn-hmap" data-bcn-hmap="" data-prefix="bcn-component-setup-hmap">
  <div class="bcn-hmap__bar">
    <esa-button-toggle data-hmap-method="true" size="sm" label="Footprint"></esa-button-toggle>
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
      ><span class="bcn-hmap__swatch bcn-hmap__swatch--foot"></span>Component footprint</span
    ><span class="bcn-hmap__key"
      ><span class="bcn-hmap__swatch bcn-hmap__swatch--hab"></span>Habitat layer</span
    ><span class="bcn-hmap__key"
      ><span class="bcn-hmap__swatch bcn-hmap__swatch--sel"></span>Selected species' habitat</span
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

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
