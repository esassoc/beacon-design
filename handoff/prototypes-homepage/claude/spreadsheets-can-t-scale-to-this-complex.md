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
            <span class="esa-icon esa-icon--lg" aria-hidden="true">
              <svg
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
                <path d="m6 6 12 12"></path>
              </svg>
            </span>
            Without Beacon
          </div>
          <ul class="bcn-contrast__list">
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph">
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
              </span>
              <span>Permit conditions scattered across spreadsheets, PDFs, and email</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph">
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
              </span>
              <span>No traceability from an action back to its source permit language</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph">
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
              </span>
              <span>Deadline tracking relies on individual calendars and memory</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph">
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
              </span>
              <span>Audit preparation takes weeks of gathering scattered documentation</span>
            </li>
          </ul>
        </div>
        <div class="bcn-contrast__card bcn-contrast__card--after">
          <div class="bcn-contrast__bleed">
            <div class="bcn-contrast__mock" aria-hidden="true">
              <div class="bcn-contrast__mock-bar">
                <span class="bcn-contrast__mock-dot"></span>
                <span>Beacon — Compliance Tracker</span>
              </div>
              <div class="bcn-contrast__mock-row">
                <span class="bcn-contrast__mock-status is-done"></span>
                <span>Pre-construction bird survey — Parcel 7</span>
                <span class="bcn-contrast__mock-badge is-done">Complete</span>
              </div>
              <div class="bcn-contrast__mock-row">
                <span class="bcn-contrast__mock-status is-done"></span>
                <span>Giant garter snake clearance — Parcel 3</span>
                <span class="bcn-contrast__mock-badge is-done">Complete</span>
              </div>
              <div class="bcn-contrast__mock-row">
                <span class="bcn-contrast__mock-status is-active"></span>
                <span>Nesting bird check — Dam Site</span>
                <span class="bcn-contrast__mock-badge is-active">In Progress</span>
              </div>
              <div class="bcn-contrast__mock-row">
                <span class="bcn-contrast__mock-status is-pending"></span>
                <span>SWPPP annual report</span>
                <span class="bcn-contrast__mock-badge is-pending">Upcoming</span>
              </div>
            </div>
          </div>
          <div class="bcn-contrast__title">
            <span class="esa-icon esa-icon--lg" aria-hidden="true">
              <svg
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
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            With Beacon
          </div>
          <ul class="bcn-contrast__list">
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph">
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
              </span>
              <span>All commitments centralized with complete chain of evidence</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph">
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
              </span>
              <span>Every action links back to its source document and commitment text</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph">
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
              </span>
              <span>Automated scheduling across phases, components, and seasons</span>
            </li>
            <li class="bcn-contrast__item">
              <span class="bcn-contrast__glyph">
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
              </span>
              <span>Audit-ready reports generated in minutes, not weeks</span>
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
.bcn-contrast {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-600);
}
.bcn-contrast__card {
  border-radius: var(--radius-200);
  padding: var(--spacing-600);
  border: 1px solid var(--color-border);
  overflow: hidden;
}
.bcn-contrast__card--before {
  background: var(--color-danger-subtle);
  border-color: var(--color-danger-border);
}
.bcn-contrast__bleed {
  margin: calc(-1 * var(--spacing-600)) calc(-1 * var(--spacing-600)) var(--spacing-500);
}
.bcn-contrast__bleed img {
  inline-size: 100%;
  block-size: 200px;
  object-fit: cover;
  display: block;
}
.bcn-contrast__title {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin-block-end: var(--spacing-400);
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
}
.bcn-contrast__card--before .bcn-contrast__title {
  color: var(--color-danger-strong);
}
.bcn-contrast__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-contrast__item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-300);
  font-size: var(--type-size-200);
  line-height: var(--line-height-normal, 1.5);
}
.bcn-contrast__glyph {
  display: inline-flex;
  flex-shrink: 0;
  margin-block-start: 2px;
}
.bcn-contrast__card--before .bcn-contrast__glyph {
  color: var(--color-danger);
}
.bcn-contrast__card--after {
  background: var(--color-success-subtle);
  border-color: var(--color-success-border);
}
.bcn-contrast__mock {
  background: #292929;
  padding: var(--spacing-300);
  font-size: 12px;
  color: #bdbdbd;
  min-block-size: 200px;
  display: flex;
  flex-direction: column;
}
.bcn-contrast__mock-bar {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  background: #ffffff0f;
  border-radius: var(--radius-100);
  margin-block-end: var(--spacing-300);
  font-weight: var(--font-weight-medium);
  font-size: 11px;
  color: #989898;
}
.bcn-contrast__mock-dot {
  inline-size: 8px;
  block-size: 8px;
  border-radius: 50%;
  background: var(--color-primary);
}
.bcn-contrast__mock-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-300);
  border-block-end: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 11px;
}
.bcn-contrast__mock-status {
  inline-size: 8px;
  block-size: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.bcn-contrast__mock-status.is-done {
  background: #4ade80;
}
.bcn-contrast__mock-row span:nth-child(2) {
  flex: 1;
  color: #fff;
}
.bcn-contrast__mock-badge {
  font-size: 10px;
  font-weight: var(--font-weight-semibold);
  padding: 2px 8px;
  border-radius: var(--radius-full, 9999px);
  white-space: nowrap;
}
.bcn-contrast__mock-badge.is-done {
  background: #4ade8026;
  color: #4ade80;
}
.bcn-contrast__mock-status.is-active {
  background: #f9a134;
}
.bcn-contrast__mock-badge.is-active {
  background: #f9a13426;
  color: #f9a134;
}
.bcn-contrast__mock-status.is-pending {
  background: #7c7c7c;
}
.bcn-contrast__mock-badge.is-pending {
  background: #ffffff0f;
  color: #989898;
}
.bcn-contrast__card--after .bcn-contrast__title {
  color: var(--color-success-strong);
}
.bcn-contrast__card--after .bcn-contrast__glyph {
  color: var(--color-success);
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
| `--color-danger` | `#ce2c31` | component |
| `--color-danger-border` | `#fdbdbe` | component |
| `--color-danger-strong` | `#ce2c31` | component |
| `--color-danger-subtle` | `#fffcfc` | component |
| `--color-gray-2` | `#f9f9f9` | primitive |
| `--color-primary` | `#005862` | component |
| `--color-success` | `#2e7571` | component |
| `--color-success-border` | `#adddc0` | component |
| `--color-success-strong` | `#218358` | component |
| `--color-success-subtle` | `#fbfefc` | component |
| `--color-surface` | `#fcfcfc` | component |
| `--color-surface-sunken` | `#efefef` | component |
| `--color-text-primary` | `#3d3d3d` | component |
| `--color-text-secondary` | `#525252` | component |
| `--color-text-tertiary` | `#656565` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-sans` | `"DM Sans", sans-serif` | component |
| `--font-weight-bold` | `650` | component |
| `--font-weight-medium` | `500` | component |
| `--font-weight-semibold` | `550` | component |
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
| `--type-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | component |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | component |
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
