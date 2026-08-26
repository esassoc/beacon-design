# Area entry (with feature-flag note)

One change inside an area group: the entry title, optional deployment notes (a feature-flag name, or an "applies to all tenants" note), and a body of blocks — paragraphs, bullet lists, and callouts. This is where the operational detail lives, below the headline tier.

## Key decisions
- The flag note renders the label "flag" followed by the flag name in a code span — it is a real deployment fact (the change is gated behind that feature flag), not decoration, so it reads as data next to the title.
- "applies to all tenants" is the complementary note for ungated changes. Both are optional per entry and both derive from fields on the entry record.
- Entry bodies are a BLOCK UNION — { kind: p } | { kind: bullets } | { kind: callout } — pattern-matched by the renderer. This is deliberately the same block model BcnHelpArticle uses, so help articles and release notes share one content shape.
- The callout is an aside with a leading esa-icon "info" glyph and its text; it stays monochrome like everything else on the page.
- Each entry carries id="<release-anchor>-<entryId>" so a headline story can link down to the full detail of the change it is announcing.

## Gotchas
- The block renderer must return null for an unknown kind rather than falling through — the union is open to new block types.
- The flag name is content, not markup: it goes through the same escape-then-format path as the rest of the copy.
- Do not add color to the flag or applies notes to make them stand out. The page's monochrome rule is deliberate — these read as quiet meta beside the title.

## Done when
- A gated entry shows "flag" + the flag name beside its title; an ungated one shows the applies note or neither; paragraphs, bullets, and callouts all render from the same entry's block list; the entry id resolves as a hash target from its headline link.

## Markup
```html
<div class="bcn-release__entry" id="v1-33-0-doc-review-gap-triage">
  <div class="bcn-release__entry-head">
    <h4 class="bcn-release__entry-title">
      Triage gap commitments inline on the Gaps tab
    </h4>
    <span class="bcn-release__flag">flag<code>DocumentReview</code></span>
  </div>
  <div class="bcn-release__blocks">
    <p class="bcn-release__p">
      Each un-mapped (gap) commitment row carries a cycling status chip —
      <strong>Unscreened / Relevant / Not Relevant</strong> — that you click to set its
      screening relevance; the gap list groups by status. The Show-filter chips now live
      inside the filter toolbar, with a new <strong>All</strong> option.
    </p>
  </div>
</div>
```

## Styles
```css
.bcn-release__entry {
  scroll-margin-top: var(--spacing-500);
}
.bcn-release__entry-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-150) var(--spacing-300);
  margin-block-end: var(--spacing-300);
  max-inline-size: 42rem;
}
.bcn-release__entry-title {
  margin: 0;
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  color: var(--color-text-primary);
}
.bcn-release__flag {
  display: inline-flex;
  align-items: baseline;
  gap: var(--spacing-100);
  padding: 2px var(--spacing-200);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  background: var(--color-surface);
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.bcn-release__flag code {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}
.bcn-release__blocks {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  max-inline-size: 42rem;
}
.bcn-release__p {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
