# Rationales

Every applicability decision carries one rationale, shown the same way on the drawer row (Applied and Dismissed views), in its preview, and in the setup review, so anyone can later see why a commitment was marked (product meeting 2026-10-20; one-to-one, an applicability and its rationale).

## Key decisions
- Setup dismissals: setup's reasons ("Not in Giant Garter Snake habitat", "Outside the nesting bird season", "No In-Water Work").
- Commitments from an unselected source document: "Source document not applicable".
- Setup applies: the tags that speak for the commitment ("In Valley Elderberry Longhorn Beetle habitat · Ground Disturbance, Equipment Staging"), or "Recommended by setup" when its matching requirement has no tags.
- Hand decisions: "Set by Hand · <decision date>", then the person's own rationale if they gave one.

## Gotchas
- Store the rationale with the decision, and store setup's reasons as data alongside it (the prototype keeps reasons[]), because the re-run needs the reasons to decide what reopens.

## Done when
- No decided row is without a rationale line; the row, the preview and the setup review show the same text.

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
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
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
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-secondary`: #525252 _(component)_
- `--form-label-color`: #525252 _(component)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-font-weight`: 500 _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
