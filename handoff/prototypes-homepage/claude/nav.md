# Nav

Homepage · source prototype: https://esassoc.github.io/beacon-design/prototypes/homepage/

![Nav, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-homepage/claude/nav.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-homepage/claude/nav.phone.png

## Components

- `bcn-mkt-nav` (spoke) · `src/components/bcn/BcnMarketingNav.astro`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

```html
<nav class="bcn-mkt-nav">
  <a href="/beacon-design/prototypes/homepage/" class="bcn-mkt-nav__logo" aria-label="Beacon home"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 96" fill="none" aria-hidden="true">
      <path
        d="M59.3 68.3V79.2L65.1 81.5V68.3C65.1 60.2 62.7 52.4 58.1 45.7C53.5 39 47.1 33.9 39.6 31L24.1 24.9V31.2L37.5 36.4C50.7 41.6 59.3 54.1 59.3 68.3Z"
        fill="rgba(255,255,255,0.6)"
      ></path>
      <path
        d="M58 86.8L26.6 74.5H25.9C25.9 74.3 25.9 74.2 25.9 74.2C20.5 71.8 17 66.5 17 60.5V0C13.8 0 11.2 2.6 11.2 5.8V60.4C11.2 69.1 16.4 76.7 24.5 79.8L58.1 92.9C60.9 94 63.9 91.9 63.9 88.9L58.1 86.6L58 86.8Z"
        fill="#ffffff"
      ></path>
      <!-- …and 3 more like this (<path>) --></svg
    ><span class="bcn-mkt-nav__wordmark">Beacon</span></a
  ><a href="#" class="bcn-mkt-nav__login">Log In</a>
</nav>
```

## Styles

```css
.bcn-mkt-nav {
  z-index: 100;
  block-size: 56px;
  padding-inline: var(--spacing-500);
  border-radius: var(--radius-200);
  background: #ffffff0d;
  border: 1px solid #ffffff1a;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
}
.bcn-mkt-nav__logo {
  align-items: center;
  gap: var(--spacing-250);
  text-decoration: none;
  display: flex;
}
.bcn-mkt-nav__logo svg {
  block-size: 32px;
  inline-size: 22px;
}
.bcn-mkt-nav__wordmark {
  font-size: 1.1rem;
  font-weight: var(--typography-font-weight-bold);
  letter-spacing: -0.02em;
  color: #fff;
}
.bcn-mkt-nav__login {
  padding: var(--spacing-150) var(--spacing-400);
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-medium);
  color: #fff;
  border-radius: var(--radius-100);
  background: 0 0;
  border: 1px solid #fff6;
  align-items: center;
  text-decoration: none;
  transition:
    background 0.15s,
    border-color 0.15s;
  display: inline-flex;
}
.bcn-mkt-nav__login:hover {
  background: #ffffff1a;
  border-color: #fff;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
