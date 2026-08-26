# Footer

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<footer>`
- **Components:** —

## Markup (de-scoped, framework-free)
```html
<footer class="bcn-mkt-footer">
  <div>© 2026 ESA — Beacon Environmental Compliance Platform</div>
  <div><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Security</a></div>
</footer>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.bcn-mkt-footer {
  background: #292929;
  color: #989898;
  padding: var(--spacing-600) var(--spacing-500);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--type-size-150);
}
.bcn-mkt-footer a {
  color: #989898;
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | component |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
