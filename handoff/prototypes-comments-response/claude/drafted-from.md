# Drafted from

Response · source prototype: https://esassoc.github.io/beacon-design/prototypes/comments/response/

![Drafted from, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/drafted-from.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/drafted-from.phone.png

The two or three past ESA responses the draft drew on, anonymized to the kind of study and region, each opening in place to its full text.

## Key decisions

- Read only. The Response Library is a separate admin feature, outside this module.
- Native <details>: esa-collapsible has no room for the source and date under its title.

## Components

- `bcn-df` (spoke) · `src/components/bcn/BcnDraftedFrom.astro`
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`

## Markup

```html
<div class="bcn-df" data-drafted-from="">
  <div class="esa-card">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Drafted From</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="stack" data-gap="sm" data-df-body="">
        <details class="bcn-df__item">
          <summary>
            <span class="typography-label-md-strong">Voluntary Nighttime Noise Abatement</span
            ><span class="typography-body-sm bcn-df__src"
              >Noise Compatibility Program update, Mountain West airport</span
            ><span class="typography-body-sm bcn-df__src">August 2019</span>
          </summary>
          <div class="typography-body-sm bcn-df__text stack" data-gap="xs">
            <p>
              The airport's nighttime program is voluntary. Mandatory restrictions would require a
              separate federal study and FAA approval, which few airports have obtained.
            </p>
            <p>
              The program recommends extending the preferred nighttime runway use hours and
              publishing quarterly compliance reports by airline.
            </p>
          </div>
        </details>
        <details class="bcn-df__item">
          <summary>
            <span class="typography-label-md-strong">Arrival Procedures and FAA Authority</span
            ><span class="typography-body-sm bcn-df__src"
              >Airspace EA for metroplex procedures, West Coast metro area</span
            ><span class="typography-body-sm bcn-df__src">June 2018</span>
          </summary>
          <div class="typography-body-sm bcn-df__text stack" data-gap="xs">
            <p>
              The FAA is responsible for designing and approving flight procedures. Airport sponsors
              can request changes but cannot implement them.
            </p>
            <p>
              Several community-proposed procedures were evaluated for safety, efficiency and noise.
              Two were carried forward for further design.
            </p>
          </div>
        </details>
        <details class="bcn-df__item">
          <summary>
            <span class="typography-label-md-strong">Health Effects of Aircraft Noise</span
            ><span class="typography-body-sm bcn-df__src">Part 150 Study, Mid-Atlantic airport</span
            ><span class="typography-body-sm bcn-df__src">September 2023</span>
          </summary>
          <div class="typography-body-sm bcn-df__text stack" data-gap="xs">
            <p>
              Research links aircraft noise to sleep disturbance and annoyance, and some studies
              associate long-term exposure with cardiovascular effects.
            </p>
            <p>
              The study summarized this research and reported nighttime events above 60 dBA to
              describe sleep-related exposure.
            </p>
          </div>
        </details>
      </div>
    </div>
  </div>
</div>
```

## Styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.bcn-rn .bcn-rn__item .esa-card {
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.bcn-rn .bcn-rn__item:hover .esa-card {
  border-color: var(--color-border-default-strong, var(--color-border-default));
}
.bcn-rn .bcn-rn__item[data-flash] .esa-card {
  border-color: var(--color-content-default-tertiary);
  box-shadow: var(--elevation-2);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-rn .bcn-rn__item .esa-card,
  .bcn-rn .bcn-rn__fold svg,
  .bcn-rn .bcn-rn__hl,
  .bcn-rn__resolved [data-rn-toggle] svg {
    transition: none;
  }
}
.bcn-df .bcn-df__item + .bcn-df__item {
  border-top: var(--border-width-default, 1px) solid
    var(--color-border-subtle, var(--color-border-default));
  padding-top: var(--spacing-200);
}
.bcn-df summary {
  cursor: pointer;
  flex-direction: column;
  gap: 2px;
  list-style: none;
  display: flex;
}
.bcn-df summary::-webkit-details-marker {
  display: none;
}
.bcn-df summary:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 2px;
}
.bcn-df .bcn-df__src {
  color: var(--color-content-secondary);
}
.bcn-df .bcn-df__text {
  margin-top: var(--spacing-200);
  color: var(--color-content-default);
}
.bcn-df .bcn-df__text p {
  margin: 0;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-subtle` | `#efefef` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--elevation-2` | `0 2px 12px 0 #0000000a` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-width` | `2px` | component |
| `--gap` | `1rem` | component |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
