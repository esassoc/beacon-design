# Questions That Keep Compliance Teams Up at Night

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<section>`
- **Components:** esa-icon (hub)

## Markup (de-scoped, framework-free)
```html
<section class="bcn-mkt-section bcn-mkt-section--light" id="challenge">
  <div class="bcn-mkt-section__inner">
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-section-intro bcn-section-intro--center">
        <span class="bcn-section-intro__eyebrow">The Challenge</span>
        <h2 class="bcn-section-intro__headline">
          Questions That Keep Compliance Teams Up at Night
        </h2>
        <div class="bcn-section-intro__accent" aria-hidden="true"></div>
        <p class="bcn-section-intro__subtext">
          When dozens of permits generate hundreds of obligations across multiple agencies, phases,
          and locations — the same questions come up on every project.
        </p>
      </div>
    </div>
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-challenges">
        <div class="bcn-challenges__card">
          <span class="bcn-challenges__icon"
            ><span class="esa-icon esa-icon--xl" aria-hidden="true"
              ><svg
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
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline></svg></span
          ></span>
          <div>
            <h3 class="bcn-challenges__q">“Where are we on that CDFW deadline?”</h3>
            <p class="bcn-challenges__desc">
              Permit deadlines are scattered across different documents and calendars. Nobody has a
              single view of what's due, when, and whether it's on track.
            </p>
          </div>
        </div>
        <div class="bcn-challenges__card">
          <span class="bcn-challenges__icon"
            ><span class="esa-icon esa-icon--xl" aria-hidden="true"
              ><svg
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
                  d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
                ></path>
                <path d="M15 5.764v15"></path>
                <path d="M9 3.236v15"></path></svg></span
          ></span>
          <div>
            <h3 class="bcn-challenges__q">“Which parcels still need pre-construction surveys?”</h3>
            <p class="bcn-challenges__desc">
              The same action repeats across dozens of locations and phases. Tracking which have
              been done — and which haven't — means cross-referencing multiple spreadsheets.
            </p>
          </div>
        </div>
        <div class="bcn-challenges__card">
          <span class="bcn-challenges__icon"
            ><span class="esa-icon esa-icon--xl" aria-hidden="true"
              ><svg
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
                  d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                ></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg></span
          ></span>
          <div>
            <h3 class="bcn-challenges__q">
              “Can we start grading on Parcel 12 or is the nesting bird window still open?”
            </h3>
            <p class="bcn-challenges__desc">
              Seasonal restrictions vary by species, location, and permit. Knowing whether
              construction can proceed on a given parcel on a given date requires checking multiple
              sources.
            </p>
          </div>
        </div>
        <div class="bcn-challenges__card">
          <span class="bcn-challenges__icon"
            ><span class="esa-icon esa-icon--xl" aria-hidden="true"
              ><svg
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
                <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"></path>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                <path
                  d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
                ></path>
                <path d="M20 22v.01"></path></svg></span
          ></span>
          <div>
            <h3 class="bcn-challenges__q">
              “Did USACE sign off on the revised mitigation plan or are we still waiting?”
            </h3>
            <p class="bcn-challenges__desc">
              Agency approvals live in email threads and shared drives. Tracking which submittals
              have been sent, reviewed, and approved across multiple agencies is a full-time job.
            </p>
          </div>
        </div>
        <div class="bcn-challenges__card">
          <span class="bcn-challenges__icon"
            ><span class="esa-icon esa-icon--xl" aria-hidden="true"
              ><svg
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
                <path d="M8 3 4 7l4 4"></path>
                <path d="M4 7h16"></path>
                <path d="m16 21 4-4-4-4"></path>
                <path d="M20 17H4"></path></svg></span
          ></span>
          <div>
            <h3 class="bcn-challenges__q">
              “Does the 404 permit have the same setback as the ITP, or are they different?”
            </h3>
            <p class="bcn-challenges__desc">
              Different permits from different agencies impose overlapping but inconsistent
              requirements. Reconciling them requires reading the original permit language every
              time.
            </p>
          </div>
        </div>
        <div class="bcn-challenges__card">
          <span class="bcn-challenges__icon"
            ><span class="esa-icon esa-icon--xl" aria-hidden="true"
              ><svg
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
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M12 7v5l4 2"></path></svg></span
          ></span>
          <div>
            <h3 class="bcn-challenges__q">
              “We finished construction two years ago — what monitoring reports are still due?”
            </h3>
            <p class="bcn-challenges__desc">
              Post-construction monitoring obligations can run for a decade. Without a system of
              record, teams lose track of what's still owed long after the hard hats come off.
            </p>
          </div>
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
.bcn-challenges {
  gap: var(--spacing-400);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.bcn-challenges__card {
  align-items: flex-start;
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  transition: box-shadow 0.2s;
  display: flex;
}
.bcn-challenges__icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
  margin-block-start: 2px;
  display: inline-flex;
}
.bcn-challenges__q {
  margin: 0 0 var(--spacing-200);
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--line-height-tight, 1.25);
  color: var(--color-content-default);
}
.bcn-challenges__desc {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  line-height: var(--line-height-relaxed, 1.75);
  margin: 0;
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
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-gray-2` | `#f9f9f9` | primitive |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xl` | `28px` | primitive |
| `--line-height-relaxed` | `1.8` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
