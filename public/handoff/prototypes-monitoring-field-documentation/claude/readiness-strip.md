# Readiness strip

Four campaign-wide counts: drill holes with a missing document, missing documents, documents received late, and documents due in the next 5 working days.

## Key decisions
- Only the two missing counts turn red, and only when above zero.
- "Next 5 working days" uses the same working-day calendar as the due dates (weekends plus the client holiday list).

## Done when
- Counts equal the sums of the matrix below with no filters applied.

## Markup
```html
<div class="switcher bcn-fd-readiness" style="--switcher-threshold: 40rem">
  <div class="bcn-fd-readiness__stat is-alert">
    <div class="esa-stat">
      <div class="esa-stat__value typography-display-sm">30</div>
      <div class="esa-stat__label typography-label-md">Drill holes missing documents</div>
      <div class="esa-stat__sub typography-body-sm">of 59 scheduled</div>
    </div>
  </div>
  <div class="bcn-fd-readiness__stat is-alert">
    <div class="esa-stat">
      <div class="esa-stat__value typography-display-sm">45</div>
      <div class="esa-stat__label typography-label-md">Missing documents</div>
    </div>
  </div>
  <div class="bcn-fd-readiness__stat">
    <div class="esa-stat">
      <div class="esa-stat__value typography-display-sm">18</div>
      <div class="esa-stat__label typography-label-md">Documents received late</div>
    </div>
  </div>
  <div class="bcn-fd-readiness__stat">
    <div class="esa-stat">
      <div class="esa-stat__value typography-display-sm">28</div>
      <div class="esa-stat__label typography-label-md">
        Documents due in the next 5 working days
      </div>
      <div class="esa-stat__sub typography-body-sm">through Oct 2</div>
    </div>
  </div>
</div>
```

## Styles
```css
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
}
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.bcn-fd-readiness__stat {
  padding-inline: var(--spacing-200);
}
.bcn-fd-readiness__stat.is-alert {
  --stat-value-color: var(--color-content-utility-danger);
}
.bcn-fd-readiness__stat + .bcn-fd-readiness__stat {
  border-left: 1px solid var(--color-border-default);
  padding-left: var(--spacing-500);
}
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-content-default, #202020));
  --_stat-value-font: var(
    --typography-font-family-display,
    var(
      --typography-display-sm-font-family,
      var(--typography-font-family-display, "DM Sans", sans-serif)
    )
  );
  --_stat-value-size: var(
    --stat-value-size,
    var(--typography-display-sm-font-size, var(--font-size-700, 2.25rem))
  );
  --_stat-value-weight: var(
    --typography-font-weight-bold,
    var(--typography-display-sm-font-weight, var(--typography-font-weight-bold, 650))
  );
  --_stat-label-color: var(--color-content-default-secondary, #646464);
  --_stat-label-size: var(
    --font-size-200,
    var(--typography-label-md-font-size, var(--font-size-200, 0.9375rem))
  );
  --_stat-label-weight: var(
    --typography-font-weight-medium,
    var(--typography-label-md-font-weight, var(--typography-font-weight-medium, 500))
  );
  --_stat-sub-color: var(--color-content-default-secondary, #646464);
  --_stat-sub-size: var(
    --font-size-150,
    var(--typography-body-sm-font-size, var(--font-size-150, 0.875rem))
  );
  --_stat-accent-color: var(--stat-accent-color, var(--color-content-brand, #2a7e3b));
  --_stat-gap: var(--spacing-050, 0.125rem);
  gap: var(--_stat-gap);
  background: 0 0;
  flex-direction: column;
  display: flex;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  color: var(--_stat-value-color);
}
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  color: var(--_stat-sub-color);
}
.switcher {
  --gap: var(--spacing-400, 1rem);
  --switcher-threshold: 32rem;
  flex-wrap: wrap;
  display: flex;
}
.switcher > * {
  flex-grow: 1;
  flex-basis: calc((var(--switcher-threshold) - 100%) * 999);
}
.switcher {
  gap: var(--gap);
}
```

## Tokens
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
- `--gap`: 1rem _(component)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--stat-accent-color`: #005862 _(component)_
- `--stat-value-color`: #3d3d3d _(component)_
- `--stat-value-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(component)_
- `--switcher-threshold`: 40rem _(component)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-display-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-display-sm-font-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(semantic)_
- `--typography-display-sm-font-weight`: 650 _(semantic)_
- `--typography-display-sm-letter-spacing`: -.01em _(semantic)_
- `--typography-display-sm-line-height`: 1.3 _(semantic)_
- `--typography-font-family-display`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
