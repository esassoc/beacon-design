# Beacon Brings Structure to Compliance

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<section>`
- **Components:** esa-icon (hub)

## Markup (de-scoped, framework-free)
```html
<section class="bcn-mkt-section bcn-mkt-section--white" id="solution">
  <div class="bcn-mkt-section__inner">
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-section-intro bcn-section-intro--center">
        <span class="bcn-section-intro__eyebrow">The Solution</span>
        <h2 class="bcn-section-intro__headline">Beacon Brings Structure to Compliance</h2>
        <div class="bcn-section-intro__accent" aria-hidden="true"></div>
        <p class="bcn-section-intro__subtext">
          Three phases. One platform. Complete traceability from permit language to evidence of
          completion.
        </p>
      </div>
    </div>
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-solution">
        <div class="bcn-solution__card" data-reveal="" data-reveal-delay="1" data-reveal-bound="">
          <div class="bcn-solution__medallion" style="background: #003f5c">
            <span class="esa-icon esa-icon--xl" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path
                  d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                ></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
            </span>
          </div>
          <div class="bcn-solution__title">Catalog</div>
          <div class="bcn-solution__desc">
            Upload source documents. Beacon's AI guide, Aldo, extracts commitments and identifies
            requirements — turning dense permit language into structured, trackable data.
          </div>
        </div>
        <div class="bcn-solution__card" data-reveal="" data-reveal-delay="2" data-reveal-bound="">
          <div class="bcn-solution__medallion" style="background: #a05195">
            <span class="esa-icon esa-icon--xl" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                <path d="M12 12V8"></path>
              </svg>
            </span>
          </div>
          <div class="bcn-solution__title">Plan</div>
          <div class="bcn-solution__desc">
            Decompose requirements into actions. Assign to teams. Map to components, phases, and
            seasons. Set milestones and define what "done" looks like.
          </div>
        </div>
        <div class="bcn-solution__card" data-reveal="" data-reveal-delay="3" data-reveal-bound="">
          <div class="bcn-solution__medallion" style="background: #ffa600">
            <span class="esa-icon esa-icon--xl" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </span>
          </div>
          <div class="bcn-solution__title">Execute</div>
          <div class="bcn-solution__desc">
            Track field work and desk work. Collect evidence — photos, reports, signed forms. Prove
            completion. Generate compliance reports for agencies.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.bcn-mkt-section {
  --_section-pad: clamp(48px, 8vw, 96px);
  padding-block: var(--_section-pad);
}
.bcn-mkt-section--white {
  background: var(--color-surface);
}
.bcn-mkt-section__inner {
  max-inline-size: 1100px;
  margin-inline: auto;
  padding-inline: var(--spacing-500);
}
.bcn-section-intro {
  margin-block-end: var(--spacing-700);
}
.bcn-section-intro__eyebrow {
  display: block;
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-tertiary);
  margin-block-end: var(--spacing-300);
}
.bcn-section-intro__headline {
  margin: 0 0 var(--spacing-400);
  font-family: var(--font-decorative, var(--font-sans));
  font-size: var(--type-size-700);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight, 1.25);
  color: var(--color-text-primary);
  text-wrap: balance;
}
.bcn-section-intro__accent {
  inline-size: 48px;
  block-size: 4px;
  background: var(--color-primary);
  border-radius: var(--radius-full, 9999px);
  margin-block-end: var(--spacing-400);
}
.bcn-section-intro__subtext {
  margin: 0;
  font-size: var(--type-size-300);
  color: var(--color-text-secondary);
  max-inline-size: 820px;
  line-height: var(--line-height-relaxed, 1.75);
  text-wrap: balance;
}
.bcn-mkt-section--light {
  background: var(--color-surface-sunken, var(--color-gray-2));
}
.bcn-section-intro--center {
  text-align: center;
}
.bcn-section-intro--center .bcn-section-intro__accent {
  margin-inline: auto;
}
.bcn-section-intro--center .bcn-section-intro__subtext {
  margin-inline: auto;
}
.bcn-solution {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-500);
}
.bcn-solution__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  padding: var(--spacing-600) var(--spacing-500);
  text-align: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.bcn-solution__medallion {
  inline-size: 64px;
  block-size: 64px;
  border-radius: var(--radius-full, 9999px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-400);
  color: #fff;
  --icon-size-xl: 32px;
}
.bcn-solution__title {
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  margin-block-end: var(--spacing-300);
}
.bcn-solution__desc {
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed, 1.75);
}
.bcn-mkt-section--forest {
  color: #fff;
  background:
    linear-gradient(160deg, #02140af0, #052312eb 40%, #08321ce6),
    var(--_forest-image) center / cover no-repeat;
}
.bcn-section-intro--on-dark .bcn-section-intro__eyebrow {
  color: #fff9;
}
.bcn-section-intro--on-dark .bcn-section-intro__headline {
  color: #fff;
}
.bcn-section-intro--on-dark .bcn-section-intro__accent {
  background: #fff;
}
.bcn-section-intro--on-dark .bcn-section-intro__subtext {
  color: #fffc;
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
| `--color-border` | `#dcdcdc` | component |
| `--color-gray-2` | `#f9f9f9` | primitive |
| `--color-primary` | `#005862` | component |
| `--color-surface` | `#fcfcfc` | component |
| `--color-surface-sunken` | `#efefef` | component |
| `--color-text-primary` | `#3d3d3d` | component |
| `--color-text-secondary` | `#525252` | component |
| `--color-text-tertiary` | `#656565` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-sans` | `"DM Sans", sans-serif` | component |
| `--font-weight-bold` | `650` | component |
| `--font-weight-semibold` | `550` | component |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xl` | `28px` | primitive |
| `--line-height-relaxed` | `1.8` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | component |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | component |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | component |
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
