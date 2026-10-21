# Area entry (with feature-flag note)

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![Area entry (with feature-flag note), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/area-entry-with-feature-flag-note.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/area-entry-with-feature-flag-note.phone.png

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

## Components

- `bcn-release` (spoke) · `src/components/bcn/BcnReleaseStream.astro`

## Markup

```html
<div class="bcn-release__entry" id="v1-33-0-doc-review-gap-triage">
  <div class="bcn-release__entry-head">
    <h4 class="bcn-release__entry-title">Triage gap commitments inline on the Gaps tab</h4>
    <span class="bcn-release__flag">flag<code>DocumentReview</code></span>
  </div>
  <div class="bcn-release__blocks">
    <p class="bcn-release__p">
      Each un-mapped (gap) commitment row carries a cycling status chip —
      <strong>Unscreened / Relevant / Not Relevant</strong> — that you click to set its screening
      relevance; the gap list groups by status. The Show-filter chips now live inside the filter
      toolbar, with a new <strong>All</strong> option.
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
  align-items: baseline;
  gap: var(--spacing-150) var(--spacing-300);
  flex-wrap: wrap;
  max-inline-size: 42rem;
  margin-block-end: var(--spacing-300);
  display: flex;
}
.bcn-release__entry-title {
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.4;
}
.bcn-release__flag {
  align-items: baseline;
  gap: var(--spacing-100);
  padding: 2px var(--spacing-200);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
  display: inline-flex;
}
.bcn-release__flag code {
  font-family: var(--typography-font-family-mono);
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-release__blocks {
  gap: var(--spacing-400);
  flex-direction: column;
  max-inline-size: 42rem;
  display: flex;
}
.bcn-release__p {
  font-size: 1rem;
  line-height: var(--line-height-normal);
  color: var(--color-content-default);
  margin: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--line-height-normal` | `1.6` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
