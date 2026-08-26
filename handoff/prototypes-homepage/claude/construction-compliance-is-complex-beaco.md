# Construction compliance is complex.Beacon makes it clear.

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
        Construction compliance is complex.<br />Beacon makes it clear.
      </h1>
      <p class="bcn-mkt-hero__sub">
        Dozens of permits. Hundreds of commitments. Thousands of actions across years, phases,
        species, and locations. Beacon brings structure to the compliance work that keeps
        infrastructure projects on track.
      </p>
      <div class="bcn-mkt-hero__ctas">
        <a href="#contact" class="bcn-mkt-hero__btn bcn-mkt-hero__btn--white"> Schedule a Demo </a>
        <a href="#solution" class="bcn-mkt-hero__btn bcn-mkt-hero__btn--ghost">
          See How It Works
        </a>
      </div>
    </div>
    <div class="bcn-mkt-hero__badge is-visible" data-reveal="" data-reveal-bound="">
      <span class="esa-icon esa-icon--sm" aria-hidden="true">
        <svg
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
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      </span>
      Built by ESA — 50+ years of environmental science
    </div>
  </div>
</section>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.bcn-mkt-hero {
  position: relative;
  overflow: hidden;
  padding: 120px 0 96px;
  background-image:
    linear-gradient(180deg, #002832d9, #003c46b3 40%, #005862d9), var(--_hero-image);
  background-size: cover;
  background-position: center 30%;
}
.bcn-mkt-hero__inner {
  max-inline-size: 1600px;
  margin-inline: auto;
  padding-inline: var(--spacing-500);
  text-align: center;
  position: relative;
  z-index: 1;
}
.bcn-mkt-hero__headline {
  margin: 0 0 var(--spacing-500);
  font-family: var(--font-decorative, var(--font-sans));
  font-size: var(--type-size-1000);
  font-weight: var(--font-weight-bold);
  line-height: 1.15;
  color: #fff;
}
.bcn-mkt-hero__sub {
  margin: 0 auto var(--spacing-600);
  max-inline-size: 840px;
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-medium);
  color: #ffffffd9;
  line-height: var(--line-height-relaxed, 1.75);
  text-wrap: pretty;
}
.bcn-mkt-hero__ctas {
  display: flex;
  gap: var(--spacing-300);
  justify-content: center;
  flex-wrap: wrap;
}
.bcn-mkt-hero__btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-400) var(--spacing-600);
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-200);
  border: 1px solid transparent;
  text-decoration: none;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}
.bcn-mkt-hero__btn--white {
  background: #fff;
  color: var(--color-primary);
  border-color: #fff;
}
.bcn-mkt-hero__btn--ghost {
  background: transparent;
  color: #fff;
  border-color: #fff6;
}
.bcn-mkt-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  margin-block-start: var(--spacing-700);
  font-size: var(--type-size-150);
  color: #fff9;
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
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
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--color-primary` | `#005862` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-sans` | `"DM Sans", sans-serif` | component |
| `--font-weight-bold` | `650` | component |
| `--font-weight-medium` | `500` | component |
| `--font-weight-semibold` | `550` | component |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xl` | `28px` | primitive |
| `--line-height-relaxed` | `1.8` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--type-size-1000` | `clamp(3rem, 2.6rem + 2vw, 4rem)` | component |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | component |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | component |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | component |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
