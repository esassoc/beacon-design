# Nav

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<nav>`
- **Components:** —

## Markup (de-scoped, framework-free)
```html
<nav class="bcn-mkt-nav">
  <a href="/beacon-design/prototypes/homepage/" class="bcn-mkt-nav__logo" aria-label="Beacon home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 96" fill="none" aria-hidden="true">
      <path
        d="M59.3 68.3V79.2L65.1 81.5V68.3C65.1 60.2 62.7 52.4 58.1 45.7C53.5 39 47.1 33.9 39.6 31L24.1 24.9V31.2L37.5 36.4C50.7 41.6 59.3 54.1 59.3 68.3Z"
        fill="rgba(255,255,255,0.6)"
      ></path>
      <path
        d="M58 86.8L26.6 74.5H25.9C25.9 74.3 25.9 74.2 25.9 74.2C20.5 71.8 17 66.5 17 60.5V0C13.8 0 11.2 2.6 11.2 5.8V60.4C11.2 69.1 16.4 76.7 24.5 79.8L58.1 92.9C60.9 94 63.9 91.9 63.9 88.9L58.1 86.6L58 86.8Z"
        fill="#ffffff"
      ></path>
      <path
        d="M40.1 92C38.9 95 35.5 96.5 32.5 95.3L20.2 90.5C7.9 85.7 0 74.1 0 60.9V16.6C0 13.4 2.6 10.8 5.8 10.8V61C5.8 71.7 12.3 81.2 22.3 85.2L40.1 92.2V92Z"
        fill="#ffffff"
      ></path>
      <path
        d="M48.1 69.6V74.7L53.9 77V69.6C53.9 56.5 46 44.9 33.8 40L24.1 36.2V42.5L31.7 45.5C41.7 49.4 48.1 58.9 48.1 69.6Z"
        fill="rgba(255,255,255,0.6)"
      ></path>
      <path
        d="M36.9 70.4L42.8 72.7V71.3C42.8 61.4 36.8 52.6 27.6 49L24.1 47.6V53.9L25.4 54.4C32.1 57 36.5 63.3 36.9 70.4Z"
        fill="rgba(255,255,255,0.6)"
      ></path>
    </svg>
    <span class="bcn-mkt-nav__wordmark">Beacon</span>
  </a>
  <a href="#" class="bcn-mkt-nav__login">Log In</a>
</nav>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.bcn-mkt-nav {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 100;
  block-size: 56px;
  padding-inline: var(--spacing-500);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff0d;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-200);
}
.bcn-mkt-nav__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  text-decoration: none;
}
.bcn-mkt-nav__logo svg {
  inline-size: 22px;
  block-size: 32px;
}
.bcn-mkt-nav__wordmark {
  font-size: 1.1rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.02em;
  color: #fff;
}
.bcn-mkt-nav__login {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-150) var(--spacing-400);
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-medium);
  color: #fff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: var(--radius-100);
  text-decoration: none;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `500` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--type-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
