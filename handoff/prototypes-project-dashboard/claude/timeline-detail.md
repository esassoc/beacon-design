# Timeline detail

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-project-dashboard** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/project-dashboard/
- **Section element:** `<div>`
- **Components:** —

## Markup (de-scoped, framework-free)
```html
<div class="bcn-tl__pop" data-tl-pop="" hidden="" role="dialog" aria-label="Timeline detail"></div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.bcn-tl__pop {
  position: fixed;
  z-index: 5;
  width: 19rem;
  max-width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
  padding: var(--spacing-350, var(--spacing-300)) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  box-shadow: var(--shadow-300, 0 8px 24px -6px rgba(0, 0, 0, 0.18));
}
.bcn-tl__pop[hidden] {
  display: none;
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--color-border` | `#dcdcdc` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--radius-200` | `.5rem` | primitive |
| `--shadow-300` | `0 6px 24px -6px rgba(0, 0, 0, .07)` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
