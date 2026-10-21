# Every Large Project Is a Compliance Operation

Homepage · source prototype: https://esassoc.github.io/beacon-design/prototypes/homepage/

![Every Large Project Is a Compliance Operation, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-homepage/claude/every-large-project-is-a-compliance-operation.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-homepage/claude/every-large-project-is-a-compliance-operation.phone.png

## Components

- `bcn-mkt-section` (spoke) · `src/components/bcn/BcnMarketingSection.astro`
- `bcn-scale` (spoke) · `src/components/bcn/BcnScaleStats.astro`
- `bcn-section-intro` (spoke) · `src/components/bcn/BcnSectionIntro.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_8 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-mkt-section bcn-mkt-section--white" id="scale">
  <div class="bcn-mkt-section__inner">
    <div data-reveal="" data-reveal-bound="" class="is-visible">
      <div class="bcn-scale">
        <div>
          <div class="bcn-section-intro">
            <span class="bcn-section-intro__eyebrow">The Scale of Compliance</span>
            <h2 class="bcn-section-intro__headline">
              Every Large Project Is a Compliance Operation
            </h2>
            <div class="bcn-section-intro__accent" aria-hidden="true"></div>
            <p class="bcn-section-intro__subtext">
              Infrastructure projects don't just manage construction — they manage a web of
              environmental obligations that span agencies, species, phases, and years.
            </p>
          </div>
          <div class="bcn-scale__stats">
            <div class="bcn-scale__stat">
              <span class="bcn-scale__icon"
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
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <!-- …and 3 more like this (<path>) -->
                  </svg></span
                ></span
              >
              <div>
                <div class="bcn-scale__value">98+</div>
                <div class="bcn-scale__label">Permits on a single reservoir project</div>
              </div>
            </div>
            <div class="bcn-scale__stat">
              <span class="bcn-scale__icon"
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
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path
                      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    ></path>
                    <path d="M12 11h4"></path>
                    <!-- …and 3 more like this (<path>) -->
                  </svg></span
                ></span
              >
              <div>
                <div class="bcn-scale__value">1,000s</div>
                <div class="bcn-scale__label">Tracked actions across a major tunnel project</div>
              </div>
            </div>
            <!-- …and 2 more like this (<div class="bcn-scale__stat">) -->
          </div>
        </div>
        <div class="bcn-scale__image">
          <img
            src="/beacon-design/images/marketing/scale-dam-construction.jpg"
            alt="Aerial view of dam construction in a mountain river canyon"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>
```

## Styles

```css
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
.bcn-section-intro--center .bcn-section-intro__accent {
  margin-inline: auto;
}
.bcn-section-intro__subtext {
  font-size: var(--font-size-300);
  color: var(--color-content-default-secondary);
  max-inline-size: 820px;
  line-height: var(--line-height-relaxed, 1.75);
  text-wrap: balance;
  margin: 0;
}
.bcn-section-intro--center .bcn-section-intro__subtext {
  margin-inline: auto;
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
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
.bcn-scale {
  gap: var(--spacing-700);
  grid-template-columns: 1fr 1fr;
  align-items: center;
  display: grid;
}
.bcn-scale__stats {
  gap: var(--spacing-500);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.bcn-scale__stat {
  align-items: flex-start;
  gap: var(--spacing-400);
  display: flex;
}
.bcn-scale__icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
  margin-block-start: 2px;
  display: inline-flex;
}
.bcn-scale__value {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--font-size-500);
  font-weight: var(--typography-font-weight-bold);
  color: var(--color-content-default);
  margin-block-end: var(--spacing-100);
  line-height: 1;
}
.bcn-scale__label {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  line-height: var(--line-height-normal, 1.5);
}
.bcn-scale__image {
  border-radius: var(--radius-200);
  overflow: hidden;
}
.bcn-scale__image img {
  object-fit: cover;
  block-size: 100%;
  min-block-size: 400px;
  inline-size: 100%;
}
@media (width<=768px) {
  .bcn-scale {
    grid-template-columns: 1fr;
  }
}
@media (width<=768px) {
  .bcn-scale__image {
    display: none;
  }
}
@media (width<=768px) {
  .bcn-scale__stats {
    grid-template-columns: 1fr;
  }
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--font-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xl` | `28px` | primitive |
| `--line-height-normal` | `1.6` | primitive |
| `--line-height-relaxed` | `1.8` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
