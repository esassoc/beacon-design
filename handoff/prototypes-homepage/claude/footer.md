# Footer

Homepage · source prototype: https://esassoc.github.io/beacon-design/prototypes/homepage/

![Footer, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-homepage/claude/footer.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-homepage/claude/footer.phone.png

## Components

- `bcn-mkt-footer` (spoke) · `src/components/bcn/BcnMarketingFooter.astro`

## Markup

```html
<footer class="bcn-mkt-footer">
  <div>© 2026 ESA — Beacon Environmental Compliance Platform</div>
  <div><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Security</a></div>
</footer>
```

## Styles

```css
.bcn-mkt-footer {
  color: #989898;
  padding: var(--spacing-600) var(--spacing-500);
  font-size: var(--font-size-150);
  background: #292929;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.bcn-mkt-footer a {
  color: #989898;
}
.bcn-mkt-footer a:hover {
  color: #dcdcdc;
}
@media (width<=768px) {
  .bcn-mkt-footer {
    gap: var(--spacing-300);
    text-align: center;
    flex-direction: column;
  }
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
