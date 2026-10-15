# Status line

Under the step header. Built: the index in numbers. Drafted: drafts to review (or "Compliance Index approved."), what is outstanding for Draft again, what fit no subcategory with Suggest subcategories, and View log (Hide log while the log is open). During a run the console takes its place.

## Key decisions
- The four stages are project-wide, as draft-stages.ts runs them: Read requirements, File into bins, Merge duties, Complete drafts. Draft again takes only what is outstanding.

## Done when
- A Draft run over the Re-run index ends at 2,222 drafts to review, with 3 items that fit no subcategory.

## Markup
```html
<div class="bcn-sw3ir__line" data-ir-built="" hidden="">
  <span data-ir-built-text=""></span>
</div>
```

## Styles
```css
.bcn-sw3ir__line {
  align-items: center;
  gap: var(--spacing-200) var(--spacing-300);
  flex-wrap: wrap;
  min-height: 28px;
  display: flex;
}
.bcn-sw3ir__line > span {
  font-variant-numeric: tabular-nums;
}
```

## Tokens
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
