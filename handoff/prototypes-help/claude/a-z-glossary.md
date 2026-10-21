# A–Z glossary

Help & Guidance · source prototype: https://esassoc.github.io/beacon-design/prototypes/help/

![A–Z glossary, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-help/claude/a-z-glossary.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-help/claude/a-z-glossary.phone.png

Every glossary-kind article as a bare term link, sorted A–Z and flowing into narrow text columns. It answers "what does Beacon mean by this word" without the ceremony of a card or a summary.

## Key decisions

- Deliberately spare: no cards, no summaries, no icons, no counts — just terms. The restraint is the design.
- CSS multi-column layout (columns: 12rem) rather than a grid, so the term list reflows naturally to the viewport with break-inside:avoid on each item.
- Each term deep-links the reading pane on the same page via #article-<id> — the same contract every other entry point uses.
- Terms come from glossaryArticles() (articles whose kind is glossary); glossary terms live in the functional category their term belongs to, so this section is the only place they appear alphabetically.

## Gotchas

- No esa-* lego fits: esa-link-column is a titled card of links with card chrome, esa-pillbox is tag chips, esa-badge is a status token. A bare A–Z term index is bcn-kb-glossary.
- The interactive accent here is the house link color. An earlier revision used a light Aldo-green tint — light green is BANNED as an interactive accent across this feature; Aldo green is the mark's color, not a hover state.

## Done when

- Terms render A–Z in flowing columns with no chrome beyond a hairline above; hovering underlines a term in the house link color; clicking one opens it in the reading pane.

## Components

- `bcn-kbg` (spoke) · `src/components/bcn/BcnKbGlossary.astro`

## Markup

_15 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-kbg" aria-labelledby="bcn-kbg-title">
  <h2 id="bcn-kbg-title" class="bcn-kbg__title typography-heading-md">Glossary</h2>
  <ul class="bcn-kbg__terms" role="list">
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-an-action">Action</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-a-commitment">Commitment</a>
    </li>
    <!-- …and 15 more like this (<li class="bcn-kbg__term">) -->
  </ul>
</section>
```

## Styles

```css
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.bcn-kbg {
  gap: var(--spacing-400);
  border-top: 1px solid var(--color-border-default);
  flex-direction: column;
  padding-block-start: var(--spacing-500);
  display: flex;
}
.bcn-kbg__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-kbg__terms {
  columns: 12rem;
  column-gap: var(--spacing-600);
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-kbg__term {
  break-inside: avoid;
  margin-block-end: var(--spacing-150);
}
.bcn-kbg__link {
  color: var(--color-content-default);
  font-size: 0.9375rem;
  line-height: 1.4;
  text-decoration: none;
  transition: color 0.12s;
}
.bcn-kbg__link:hover {
  color: var(--color-content-link);
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-kbg__link:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-heading-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-heading-md-font-weight` | `550` | semantic |
| `--typography-heading-md-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-md-line-height` | `1.3` | semantic |
