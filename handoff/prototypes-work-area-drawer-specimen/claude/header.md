# Header

Work Area drawer — 3 structure options (specimen) · source prototype: https://esassoc.github.io/beacon-design/prototypes/work-area-drawer-specimen/

![Header, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-work-area-drawer-specimen/claude/header.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-work-area-drawer-specimen/claude/header.phone.png

## Markup

```html
<header class="spec__head">
  <h1 class="spec__title">Work Area drawer — Decision-first v2</h1>
  <p class="spec__intro">
    Round 1 compared three drawer structures; <strong>Decision-first</strong> was selected (<em
      >"Decision-first seems right"</em
    >). This page now leads with the v2 deep dive — dates promoted to an always-visible band, a
    confirm that reads in two seconds, discipline cells that open a stacked child drawer, and a
    per-discipline review history that survives the June → September re-survey reality. The round-1
    exploration is kept at the bottom for reference. All data is real fixture data; the only static
    mock is the September re-survey (flagged in the data-model note).
  </p>
</header>
```

## Styles

```css
.spec__head {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.spec__title {
  font-family: var(--font-decorative);
  font-size: 2rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.spec__intro {
  max-width: 86ch;
  font-size: var(--font-size-200, 1rem);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.6;
}
.spec__intro strong {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--typography-font-weight-semibold` | `550` | semantic |
