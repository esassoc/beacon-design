# Ready to Bring Order to Compliance?

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<section>`
- **Components:** esa-button (hub), esa-icon (hub)

## Markup (de-scoped, framework-free)
```html
<section class="bcn-mkt-section bcn-mkt-section--light" id="contact">
  <div class="bcn-mkt-section__inner">
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-section-intro bcn-section-intro--center">
        <span class="bcn-section-intro__eyebrow">Get Started</span>
        <h2 class="bcn-section-intro__headline">Ready to Bring Order to Compliance?</h2>
        <div class="bcn-section-intro__accent" aria-hidden="true"></div>
      </div>
    </div>
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-cta-paths">
        <div class="bcn-cta-paths__card">
          <div class="bcn-cta-paths__medallion">
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
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" x2="3" y1="12" y2="12"></line>
              </svg>
            </span>
          </div>
          <div class="bcn-cta-paths__title">Existing Client?</div>
          <div class="bcn-cta-paths__desc">
            Log in to your Beacon project dashboard to manage commitments, track actions, and
            generate reports.
          </div>
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><a class="esa-button__native typography-microcopy-md" href="#" role="button"
              ><span class="esa-button__label">Go to Beacon</span></a
            ></span
          >
        </div>
        <div class="bcn-cta-paths__card bcn-cta-paths__card--featured">
          <div class="bcn-cta-paths__medallion">
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
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </span>
          </div>
          <div class="bcn-cta-paths__title">Schedule a Demo</div>
          <div class="bcn-cta-paths__desc">
            See Beacon in action with a walkthrough tailored to your project type and compliance
            needs.
          </div>
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><a class="esa-button__native typography-microcopy-md" href="#" role="button"
              ><span class="esa-button__label">Request a Demo</span></a
            ></span
          >
        </div>
        <div class="bcn-cta-paths__card">
          <div class="bcn-cta-paths__medallion">
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
                <path d="M12 7v14"></path>
                <path
                  d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
                ></path>
              </svg>
            </span>
          </div>
          <div class="bcn-cta-paths__title">Explore the Problem</div>
          <div class="bcn-cta-paths__desc">
            Learn why environmental compliance for infrastructure projects needs purpose-built
            software, not spreadsheets.
          </div>
          <span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><a class="esa-button__native typography-microcopy-md" href="#" role="button"
              ><span class="esa-button__label">Why Beacon?</span></a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</section>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button__label {
  white-space: nowrap;
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
.bcn-cta-paths {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-500);
}
.bcn-cta-paths__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-700) var(--spacing-500);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  box-shadow:
    0 1px 2px #0000000f,
    0 2px 4px #0000000a;
}
.bcn-cta-paths__medallion {
  inline-size: 56px;
  block-size: 56px;
  border-radius: var(--radius-full, 9999px);
  background: var(--color-primary-subtle, #effefb);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: var(--spacing-400);
  flex-shrink: 0;
}
.bcn-cta-paths__title {
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  margin-block-end: var(--spacing-300);
}
.bcn-cta-paths__desc {
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed, 1.75);
  margin-block-end: var(--spacing-500);
  flex: 1;
}
.bcn-cta-paths__card--featured {
  border-color: var(--color-primary);
  border-width: 2px;
  position: relative;
}
.bcn-cta-paths__card--featured:before {
  content: "RECOMMENDED";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 1px;
  color: #fff;
  background: var(--color-primary);
  padding: var(--spacing-100) var(--spacing-300);
  border-radius: var(--radius-full, 9999px);
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--button-radius-md` | `.5rem` | component |
| `--color-background-brand` | `#46a758` | semantic |
| `--color-background-brand-hover` | `#3e9b4f` | semantic |
| `--color-border` | `#dcdcdc` | component |
| `--color-content-brand` | `#2a7e3b` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-gray-2` | `#f9f9f9` | primitive |
| `--color-primary` | `#005862` | component |
| `--color-primary-subtle` | `#effefb` | component |
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
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | component |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | component |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | component |
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
