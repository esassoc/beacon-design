# Details

Permit · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracker/permits/cc1-cao/

![Details, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permits-cc1-cao/claude/details.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permits-cc1-cao/claude/details.phone.png

The permit's facts: trigger, applies to, level, agency, reference no., assigned to, conditions. Edit opens the details drawer.

## Key decisions

- Saved edits change the permit itself: the page header (name, agency, reference no., breadcrumb), this panel, the project's list and board, and the permit type section all follow.

## Done when

- Renaming the permit updates the page title and its row on the project page.

## Components

- `bcn-pdet` (spoke) · `src\components\bcn\BcnPermitDetails.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

```html
<dl class="bcn-pdet stack" data-gap="md" data-pdet="" data-permit-id="cc1-cao">
  <div class="stack" data-gap="3xs">
    <dt class="bcn-pdet__term typography-label-sm">Trigger</dt>
    <dd class="bcn-pdet__value typography-label-md-strong" data-pdet-term="Trigger">
      Work within the Coal Creek stream buffer (Type F) and a Category III wetland buffer
    </dd>
  </div>
  <div class="stack" data-gap="3xs">
    <dt class="bcn-pdet__term typography-label-sm">Applies to</dt>
    <dd class="bcn-pdet__value typography-label-md-strong" data-pdet-term="Applies to">
      SE 60th St culvert
    </dd>
  </div>
  <!-- …and 5 more like this (<div class="stack">) -->
</dl>
```

## Styles

```css
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.bcn-pdet,
.bcn-pdet dd {
  margin: 0;
}
.bcn-pdet__term {
  color: var(--color-content-default-secondary);
}
.bcn-pdet__value {
  color: var(--color-content-default);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--gap` | `1rem` | component |
| `--spacing-400` | `1rem` | primitive |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
