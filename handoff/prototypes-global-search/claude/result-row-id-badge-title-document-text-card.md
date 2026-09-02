# Result row — ID badge, title & document-text card

One result row: a head line of a purple commitment-ID badge + a semibold title, and — for a body-only hit — the FULL matching document text in a bordered serif card beneath it, with the search term highlighted. This is the unit that makes the results read like Beacon's commitment-text-card.

## Key decisions
- The commitment ID is a structured `code` field rendered as a purple badge (--color-commitment text on a 12% tint, 4px radius) — faithful to Beacon's commitment-id identity badge — NOT parsed from the title.
- Document text (a commitment/requirement body) is typeset in the serif --font-decorative (Besley); the text card is bordered, multi-line, and shows the WHOLE matched body.
- No leading scope icon; no subtitle line — the badge + title carry identity, the text card carries the match.

## Gotchas
- Show the text card ONLY for body-ONLY matches (term hit the body, not the title/code) — otherwise the row is a plain title match and the card would be noise.
- Beacon's commitment-search hides only NON-matching paragraphs behind a "show N more" expander; our fixture bodies are single paragraphs, so the whole body shows. If real bodies are multi-paragraph, port the block-level collapse.
- The <mark> highlight is JS-injected, so its rule is authored :global (un-scoped); the highlight color is the same #fde047 as the palette.

## Done when
- Commitments/requirements show the purple ID badge + semibold title; a body match renders the full serif text card with the term highlighted; title-only matches show no card.

## Markup
```html
<a
  class="bcn-sr__row"
  href="/beacon-design/prototypes/data-catalog-source-document"
  data-id="sd-feir-3600"
  data-scope="source-documents"
  data-entity="3600 alameda avenue project feir final environmental impact report · 130 requirements"
  hidden=""
  ><span class="bcn-sr__row-head"
    ><span class="bcn-sr__row-titlerow"
      ><span class="bcn-sr__row-title">3600 Alameda Avenue Project FEIR</span></span
    ></span
  >
  <div class="bcn-sr__row-snippet" hidden=""></div
></a>
```

## Styles
```css
.bcn-sr__rows {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-sr__row {
  gap: var(--spacing-150);
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  background: 0 0;
  flex-direction: column;
  text-decoration: none;
  transition: background 0.12s;
  display: flex;
}
.bcn-sr__row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-sr__row[hidden] {
  display: none;
}
.bcn-sr__row-head {
  align-items: center;
  min-width: 0;
  display: flex;
}
.bcn-sr__row-titlerow {
  align-items: center;
  gap: var(--spacing-200);
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-sr__row-code {
  border-radius: var(--radius-100);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  flex: none;
  padding: 1px 6px;
  line-height: 1.4;
}
.bcn-sr__row-title {
  min-width: 0;
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 0 auto;
  overflow: hidden;
}
.bcn-sr__row-snippet {
  margin-top: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-350, 1.25rem);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  font-family: var(--font-decorative);
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  text-align: left;
  line-height: 1.7;
}
.bcn-sr__row-snippet p {
  margin: 0;
}
.bcn-sr__row-snippet p + p {
  margin-top: 0.85em;
}
.bcn-sr__row-snippet .bcn-sr__row-more {
  border-top: 1px solid var(--color-border-default);
  font-family: var(--typography-font-family-sans, system-ui, sans-serif);
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  margin-top: 1em;
  padding-top: 0.7em;
  font-style: normal;
}
.bcn-sr__row-snippet[hidden] {
  display: none;
}
.bcn-sr__row-title mark,
.bcn-sr__row-snippet mark {
  color: var(--color-content-default);
  background: #fde047;
  border-radius: 2px;
  padding: 0 1px;
}
```

## Tokens
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
