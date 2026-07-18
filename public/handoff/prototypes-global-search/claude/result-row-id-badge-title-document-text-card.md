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
>
  <span class="bcn-sr__row-head">
    <span class="bcn-sr__row-titlerow">
      <span class="bcn-sr__row-title">3600 Alameda Avenue Project FEIR</span>
    </span>
  </span>
  <div class="bcn-sr__row-snippet" hidden=""></div>
</a>
```

## Styles
```css
.bcn-sr__rows {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-sr__row {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  background: transparent;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: background 0.12s ease;
}
.bcn-sr__row-head {
  display: flex;
  align-items: center;
  min-width: 0;
}
.bcn-sr__row-titlerow {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-sr__row-title {
  flex: 0 1 auto;
  min-width: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-sr__row-snippet {
  margin-top: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-350, 1.25rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
  font-family: var(--font-decorative);
  font-size: var(--type-size-150);
  line-height: 1.7;
  color: var(--color-text-primary);
  text-align: left;
}
.bcn-sr__row-snippet[hidden] {
  display: none;
}
.bcn-sr__row-code {
  flex: none;
  padding: 1px 6px;
  border-radius: var(--radius-100);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  white-space: nowrap;
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
}
.bcn-sr__row-snippet p {
  margin: 0;
}
.bcn-sr__row-title mark,
.bcn-sr__row-snippet mark {
  background: #fde047;
  color: var(--color-text-primary);
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-sr__row[hidden] {
  display: none;
}
.bcn-sr__row-snippet p + p {
  margin-top: 0.85em;
}
.bcn-sr__row-snippet .bcn-sr__row-more {
  margin-top: 1em;
  padding-top: 0.7em;
  border-top: 1px solid var(--color-border);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--type-size-100);
  font-style: normal;
  color: var(--color-text-tertiary);
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
