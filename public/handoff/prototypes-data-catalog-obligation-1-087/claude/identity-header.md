# Identity header

The record identity band: class chip, registry id, structural flags, and the title. Sits above the reading column and carries no actions — this page is read-only.

## Key decisions
- The TITLE IS A NOUN PHRASE naming the thing governed, never the value — "Speed limits on non-public roads and sites", not "10 mph". That is a rule from the brief and it is why the title alone is the identity: the value lives in Parameters, where sources are allowed to disagree with each other.
- Class is a neutral chip carrying the class definition as its title attribute, matching the class cell in the catalog grid so one obligation reads the same in both places.
- The two flags render only when true. `gate` means the duty waits on an approved action before it takes effect (17 of 402); `installed control` means it is satisfied by a physical thing — fencing, signage, screens, kits (46 of 402). An absent flag says nothing, so it shows nothing rather than rendering a "No".
- No status, anywhere on the page. The obligation status model was dropped on 2026-09-03; this band renders no verdict because there is no verdict to render.

## Gotchas
- Do not add an edit control here. Whether obligations are editable at project scope — and whether they have scope rows at all — is an open data-model question that the prototype deliberately does not pre-answer.

## Done when
- The band shows the class chip, the registry id, and the title as a noun phrase.
- On the exemplar (1-087) no flag pills appear; on a gated record such as 1-100 the "Waits on an approved action" pill does.

## Markup
```html
<header class="stack bcn-ohead" data-gap="sm">
  <div class="cluster bcn-ohead__meta" data-gap="sm">
    <span
      class="bcn-ohead__cls"
      title="A rule the work follows while its conditions apply"
      >Adhere</span
    ><span class="bcn-ohead__id">1-087</span>
  </div>
  <h1 class="type-page-title bcn-ohead__title">
    Speed limits on non-public roads and sites
  </h1>
</header>
```

## Styles
```css
.type-page-title {
  font-family: var(--typography-heading-lg-font-family);
  font-size: var(--typography-heading-lg-font-size);
  font-weight: var(--typography-heading-lg-font-weight);
  line-height: var(--typography-heading-lg-line-height);
  letter-spacing: var(--typography-heading-lg-letter-spacing);
}
.bcn-ohead {
  border-block-end: 1px solid var(--color-border-default);
  padding-block-end: var(--spacing-400);
}
.bcn-ohead__title {
  margin: 0;
}
.bcn-ohead__cls {
  padding: 1px var(--spacing-200);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: var(--typography-font-weight-medium);
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
}
.bcn-ohead__id {
  color: var(--bcn-content-muted);
  font-variant-numeric: tabular-nums;
  font-size: 0.875rem;
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
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
```

## Tokens
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--gap`: .75rem _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-heading-lg-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-heading-lg-font-size`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(semantic)_
- `--typography-heading-lg-font-weight`: 550 _(semantic)_
- `--typography-heading-lg-letter-spacing`: -.01em _(semantic)_
- `--typography-heading-lg-line-height`: 1.3 _(semantic)_
