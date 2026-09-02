# Environmental compliance can be a knot.Beacon untangles it.

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<section>`
- **Components:** esa-icon (hub)

## Markup (de-scoped, framework-free)
```html
<section
  class="bcn-mkt-hero"
  style="--_hero-image: url(/beacon-design/images/marketing/hero-aerial.jpg)"
>
  <div class="bcn-mkt-hero__inner">
    <div data-reveal="" data-reveal-bound="" class="is-visible">
      <h1 class="bcn-mkt-hero__headline">
        Environmental compliance can be a knot.<br />Beacon untangles it.
      </h1>
      <p class="bcn-mkt-hero__sub">
        Nobody should need a day and three spreadsheets to answer what's due next month. Beacon
        keeps every requirement, the work behind it, and the evidence together — for as long as the
        project runs.
      </p>
      <div class="bcn-mkt-hero__ctas">
        <button
          type="button"
          data-bcn-demo-open=""
          class="bcn-mkt-hero__btn bcn-mkt-hero__btn--white"
        >
          Schedule a Demo
        </button>
      </div>
    </div>
    <div class="bcn-mkt-hero__badge is-visible" data-reveal="" data-reveal-bound="">
      <span class="esa-icon esa-icon--sm" aria-hidden="true"
        ><svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <path
            d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          ></path>
          <path d="m9 12 2 2 4-4"></path></svg></span
      >Built by ESA — 50+ years of environmental science
    </div>
  </div>
</section>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.bcn-mkt-hero {
  background-image:
    linear-gradient(180deg, #002832d9 0%, #003c46b3 40%, #005862d9 100%), var(--_hero-image);
  background-position: 50% 30%;
  background-size: cover;
  padding: 120px 0 96px;
  position: relative;
  overflow: hidden;
}
.bcn-mkt-hero__inner {
  max-inline-size: 1600px;
  padding-inline: var(--spacing-500);
  text-align: center;
  z-index: 1;
  margin-inline: auto;
  position: relative;
}
.bcn-mkt-hero__headline {
  margin: 0 0 var(--spacing-500);
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--font-size-800);
  font-weight: var(--typography-font-weight-bold);
  color: #fff;
  line-height: 1.15;
}
.bcn-mkt-hero__sub {
  margin: 0 auto var(--spacing-600);
  max-inline-size: 840px;
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-medium);
  color: #ffffffd9;
  text-wrap: pretty;
  line-height: normal;
}
.bcn-mkt-hero__ctas {
  gap: var(--spacing-300);
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
}
.bcn-mkt-hero__btn {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-400) var(--spacing-600);
  font-family: inherit;
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  border-radius: var(--radius-200);
  cursor: pointer;
  border: 1px solid #0000;
  text-decoration: none;
  transition:
    background 0.15s,
    border-color 0.15s;
  display: inline-flex;
}
.bcn-mkt-hero__btn--white {
  color: var(--color-background-brand);
  background: #fff;
  border-color: #fff;
}
.bcn-mkt-hero__badge {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-150);
  color: #fff9;
  margin-block-start: var(--spacing-700);
  display: inline-flex;
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--font-size-800` | `clamp(2rem, 1.73rem + 1.35vw, 2.75rem)` | primitive |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xl` | `28px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
