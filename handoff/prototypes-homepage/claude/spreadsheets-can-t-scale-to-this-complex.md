# Spreadsheets Can't Scale to This Complexity

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<section>`
- **Components:** esa-icon (hub)

## Markup (de-scoped, framework-free)
```html
<section class="bcn-mkt-section bcn-mkt-section--white">
  <div class="bcn-mkt-section__inner">
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-section-intro bcn-section-intro--center">
        <span class="bcn-section-intro__eyebrow">The Status Quo</span>
        <h2 class="bcn-section-intro__headline">Spreadsheets Can't Scale to This Complexity</h2>
        <div class="bcn-section-intro__accent" aria-hidden="true"></div>
        <p class="bcn-section-intro__subtext">
          Compliance isn't a flat to-do list. It's hierarchical, multi-dimensional, and relational.
          Purpose-built tools make the difference.
        </p>
      </div>
    </div>
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-contrast">
        <div class="bcn-contrast__card bcn-contrast__card--before">
          <div class="bcn-contrast__bleed">
            <img
              src="/beacon-design/images/marketing/spreadsheet-chaos.jpg"
              alt="Laptop showing chaotic color-coded compliance spreadsheet on a cluttered desk"
              loading="lazy"
            />
          </div>
          <div class="bcn-contrast__title">
            <span class="esa-icon esa-icon--lg" aria-hidden="true"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path></svg></span
            >Without Beacon
          </div>
          <ul class="bcn-contrast__list">
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph"
                ><span class="esa-icon esa-icon--md" aria-hidden="true"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span></span
              ><span>Permit conditions scattered across spreadsheets, PDFs, and email</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph"
                ><span class="esa-icon esa-icon--md" aria-hidden="true"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span></span
              ><span>No traceability from an action back to its source permit language</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph"
                ><span class="esa-icon esa-icon--md" aria-hidden="true"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span></span
              ><span>Deadline tracking relies on individual calendars and memory</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph"
                ><span class="esa-icon esa-icon--md" aria-hidden="true"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span></span
              ><span>Audit preparation takes weeks of gathering scattered documentation</span>
            </li>
          </ul>
        </div>
        <div class="bcn-contrast__card bcn-contrast__card--after">
          <div class="bcn-contrast__bleed">
            <div class="bcn-contrast__mock" aria-hidden="true">
              <div class="bcn-contrast__mock-bar">
                <span class="bcn-contrast__mock-dot"></span><span>Beacon — Compliance Tracker</span>
              </div>
              <div class="bcn-contrast__mock-row">
                <span class="bcn-contrast__mock-status is-done"></span
                ><span>Pre-construction bird survey — Parcel 7</span
                ><span class="bcn-contrast__mock-badge is-done">Complete</span>
              </div>
              <div class="bcn-contrast__mock-row">
                <span class="bcn-contrast__mock-status is-done"></span
                ><span>Giant garter snake clearance — Parcel 3</span
                ><span class="bcn-contrast__mock-badge is-done">Complete</span>
              </div>
              <div class="bcn-contrast__mock-row">
                <span class="bcn-contrast__mock-status is-active"></span
                ><span>Nesting bird check — Dam Site</span
                ><span class="bcn-contrast__mock-badge is-active">In Progress</span>
              </div>
              <div class="bcn-contrast__mock-row">
                <span class="bcn-contrast__mock-status is-pending"></span
                ><span>SWPPP annual report</span
                ><span class="bcn-contrast__mock-badge is-pending">Upcoming</span>
              </div>
            </div>
          </div>
          <div class="bcn-contrast__title">
            <span class="esa-icon esa-icon--lg" aria-hidden="true"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path></svg></span
            >With Beacon
          </div>
          <ul class="bcn-contrast__list">
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph"
                ><span class="esa-icon esa-icon--md" aria-hidden="true"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span>All commitments centralized with complete chain of evidence</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph"
                ><span class="esa-icon esa-icon--md" aria-hidden="true"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span>Every action links back to its source document and commitment text</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph"
                ><span class="esa-icon esa-icon--md" aria-hidden="true"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span>Automated scheduling across phases, components, and seasons</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph"
                ><span class="esa-icon esa-icon--md" aria-hidden="true"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span>Audit-ready reports generated in minutes, not weeks</span>
            </li>
          </ul>
        </div>
      </div>
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
.bcn-mkt-section {
  --_section-pad: clamp(48px, 8vw, 96px);
  padding-block: var(--_section-pad);
}
.bcn-mkt-section--white {
  background: var(--color-background-elevation-raised);
}
.bcn-mkt-section__inner {
  max-inline-size: 1100px;
  padding-inline: var(--spacing-500);
  margin-inline: auto;
}
.bcn-section-intro {
  margin-block-end: var(--spacing-700);
}
.bcn-section-intro__eyebrow {
  font-size: 12px;
  font-weight: var(--typography-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-content-default-tertiary);
  margin-block-end: var(--spacing-300);
  display: block;
}
.bcn-section-intro__headline {
  margin: 0 0 var(--spacing-400);
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--font-size-700);
  font-weight: var(--typography-font-weight-bold);
  line-height: var(--line-height-tight, 1.25);
  color: var(--color-content-default);
  text-wrap: balance;
}
.bcn-section-intro__accent {
  background: var(--color-background-brand);
  border-radius: var(--radius-full, 9999px);
  block-size: 4px;
  inline-size: 48px;
  margin-block-end: var(--spacing-400);
}
.bcn-section-intro__subtext {
  font-size: var(--font-size-300);
  color: var(--color-content-default-secondary);
  max-inline-size: 820px;
  line-height: var(--line-height-relaxed, 1.75);
  text-wrap: balance;
  margin: 0;
}
.bcn-mkt-section--light {
  background: var(--color-background-elevation-sunken, var(--color-gray-2));
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
.bcn-contrast {
  gap: var(--spacing-600);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.bcn-contrast__card {
  border-radius: var(--radius-200);
  padding: var(--spacing-600);
  border: 1px solid var(--color-border-default);
  overflow: hidden;
}
.bcn-contrast__card--before {
  background: var(--color-background-utility-danger-subtle);
  border-color: var(--color-border-utility-danger);
}
.bcn-contrast__bleed {
  margin: calc(-1 * var(--spacing-600)) calc(-1 * var(--spacing-600)) var(--spacing-500);
}
.bcn-contrast__bleed img {
  object-fit: cover;
  block-size: 200px;
  inline-size: 100%;
  display: block;
}
.bcn-contrast__title {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  margin-block-end: var(--spacing-400);
  display: flex;
}
.bcn-contrast__card--before .bcn-contrast__title {
  color: var(--color-content-utility-danger);
}
.bcn-contrast__list {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-contrast__item {
  align-items: flex-start;
  gap: var(--spacing-300);
  font-size: var(--font-size-200);
  line-height: var(--line-height-normal, 1.5);
  display: flex;
}
.bcn-contrast__glyph {
  flex-shrink: 0;
  margin-block-start: 2px;
  display: inline-flex;
}
.bcn-contrast__card--before .bcn-contrast__glyph {
  color: var(--color-background-utility-danger);
}
.bcn-contrast__card--after {
  background: var(--color-background-utility-success-subtle);
  border-color: var(--color-border-utility-success);
}
.bcn-contrast__mock {
  padding: var(--spacing-300);
  color: #bdbdbd;
  background: #292929;
  flex-direction: column;
  min-block-size: 200px;
  font-size: 12px;
  display: flex;
}
.bcn-contrast__mock-bar {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-100);
  font-weight: var(--typography-font-weight-medium);
  color: #989898;
  background: #ffffff0f;
  margin-block-end: var(--spacing-300);
  font-size: 11px;
  display: flex;
}
.bcn-contrast__mock-dot {
  background: var(--color-background-brand);
  border-radius: 50%;
  block-size: 8px;
  inline-size: 8px;
}
.bcn-contrast__mock-row {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-300);
  border-block-end: 1px solid #ffffff0f;
  font-size: 11px;
  display: flex;
}
.bcn-contrast__mock-status {
  border-radius: 50%;
  flex-shrink: 0;
  block-size: 8px;
  inline-size: 8px;
}
.bcn-contrast__mock-status.is-done {
  background: #4ade80;
}
.bcn-contrast__mock-row span:nth-child(2) {
  color: #fff;
  flex: 1;
}
.bcn-contrast__mock-badge {
  font-size: 10px;
  font-weight: var(--typography-font-weight-semibold);
  border-radius: var(--radius-full, 9999px);
  white-space: nowrap;
  padding: 2px 8px;
}
.bcn-contrast__mock-badge.is-done {
  color: #4ade80;
  background: #4ade8026;
}
.bcn-contrast__mock-status.is-active {
  background: #f9a134;
}
.bcn-contrast__mock-badge.is-active {
  color: #f9a134;
  background: #f9a13426;
}
.bcn-contrast__mock-status.is-pending {
  background: #7c7c7c;
}
.bcn-contrast__mock-badge.is-pending {
  color: #989898;
  background: #ffffff0f;
}
.bcn-contrast__card--after .bcn-contrast__title {
  color: var(--color-content-utility-success);
}
.bcn-contrast__card--after .bcn-contrast__glyph {
  color: var(--color-background-utility-success);
}
.bcn-mkt-section--forest {
  color: #fff;
  background:
    linear-gradient(160deg, #02140af0 0%, #052312eb 40%, #08321ce6 100%),
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
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-subtle` | `#fffcfc` | semantic |
| `--color-background-utility-success` | `#2e7571` | semantic |
| `--color-background-utility-success-subtle` | `#fbfefc` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-utility-danger` | `#fdbdbe` | semantic |
| `--color-border-utility-success` | `#adddc0` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--color-gray-2` | `#f9f9f9` | primitive |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xl` | `28px` | primitive |
| `--line-height-normal` | `1.6` | primitive |
| `--line-height-relaxed` | `1.8` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
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
