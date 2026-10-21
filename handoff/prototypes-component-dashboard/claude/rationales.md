# Rationales

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

Every applicability decision carries one rationale, shown the same way on the drawer row (Applied and Dismissed views), in its preview, and in the setup review, so anyone can later see why a commitment was marked (product meeting 2026-10-20; one-to-one, an applicability and its rationale).

## Key decisions

- Setup dismissals: setup's reasons ("Not in Giant Garter Snake habitat", "Outside the nesting bird season", "No In-Water Work").
- Commitments from an unselected source document: "Source document not applicable".
- Setup applies: the tags that speak for the commitment ("In Valley Elderberry Longhorn Beetle habitat · Ground Disturbance, Equipment Staging"), or "Recommended by setup" when its matching requirement has no tags.
- Rows moved by hand in the review: "Moved by Hand · <person> · <date>", then the optional note.
- Hand decisions outside setup: "Set by Hand · <decision date>", then the person's own rationale if they gave one.
- Whenever a reason changes, its decision date changes with it.

## Gotchas

- Store the rationale with the decision, and store setup's reasons as data alongside it (the prototype keeps reasons[]), because the re-run needs the reasons to decide what reopens.

## Done when

- No decided row is without a rationale line; the row, the preview and the setup review show the same text.

## Components

- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-sw-prev` (spoke) · `src/components/bcn/BcnSetupWorkspace.astro`

## Markup

```html
<section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
  <div class="bcn-key-value" data-size="md" data-layout="stack">
    <span class="bcn-key-value__key">Decision</span
    ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
  </div>
  <span data-sw-prev-ratwrap=""
    ><div class="bcn-key-value" data-size="md" data-layout="stack">
      <span class="bcn-key-value__key">Rationale</span
      ><span class="bcn-sw-prev__decval" data-sw-prev-rationale=""></span></div
  ></span>
</section>
```

## Styles

```css
.bcn-sw-prev__effect,
.bcn-sw-prev__rec,
.bcn-sw-prev__decision {
  gap: var(--spacing-250, 0.625rem);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-sw-prev__decision {
  gap: var(--spacing-300) var(--spacing-500);
  flex-flow: wrap;
}
.bcn-sw-prev__effect[hidden],
.bcn-sw-prev__rec[hidden],
.bcn-sw-prev__decision[hidden],
[data-sw-prev-ratwrap][hidden] {
  display: none;
}
.bcn-sw-prev__decval {
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value[data-layout="row"] {
  align-items: baseline;
  column-gap: var(--spacing-300);
  grid-template-columns: 6.5rem minmax(0, 1fr);
  display: grid;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__key {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__key {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  color: var(--color-content-secondary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--form-label-color` | `#525252` | component |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
