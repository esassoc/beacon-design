# Built for Complex Environmental Projects

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<section>`
- **Components:** —

## Markup (de-scoped, framework-free)
```html
<section class="bcn-mkt-section bcn-mkt-section--light">
  <div class="bcn-mkt-section__inner">
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-section-intro bcn-section-intro--center">
        <span class="bcn-section-intro__eyebrow">Markets</span>
        <h2 class="bcn-section-intro__headline">Built for Complex Environmental Projects</h2>
        <div class="bcn-section-intro__accent" aria-hidden="true"></div>
        <p class="bcn-section-intro__subtext">
          From reservoirs to airports to fiber corridors, Beacon handles the compliance complexity
          that generic tools cannot.
        </p>
      </div>
    </div>
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-markets">
        <div class="bcn-markets__card">
          <img
            class="bcn-markets__image"
            src="/beacon-design/images/marketing/market-airports.jpg"
            alt="SFO Shoreline Protection Program"
            loading="lazy"
          />
          <div class="bcn-markets__body">
            <h3 class="bcn-markets__title">Airports &amp; Aviation</h3>
            <p class="bcn-markets__desc">
              Noise management, wildlife mitigation, and environmental compliance across 200+
              airports nationwide.
            </p>
            <a class="bcn-markets__link" href="https://esassoc.com/market/airports-aviation/">
              Beacon for Airports <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="bcn-markets__card">
          <img
            class="bcn-markets__image"
            src="/beacon-design/images/marketing/market-community.jpg"
            alt="Innovation Park Sacramento"
            loading="lazy"
          />
          <div class="bcn-markets__body">
            <h3 class="bcn-markets__title">Community Development</h3>
            <p class="bcn-markets__desc">
              Climate adaptation, housing, infrastructure resilience, and environmental planning
              from vision to project delivery.
            </p>
            <a class="bcn-markets__link" href="https://esassoc.com/market/community-development/">
              Beacon for Communities <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="bcn-markets__card">
          <img
            class="bcn-markets__image"
            src="/beacon-design/images/marketing/market-energy.jpg"
            alt="Antelope Valley energy production"
            loading="lazy"
          />
          <div class="bcn-markets__body">
            <h3 class="bcn-markets__title">Energy</h3>
            <p class="bcn-markets__desc">
              Solar, wind, battery storage, transmission, and emerging technologies — licensing,
              permitting, and restoration.
            </p>
            <a class="bcn-markets__link" href="https://esassoc.com/market/energy/">
              Beacon for Energy <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="bcn-markets__card">
          <img
            class="bcn-markets__image"
            src="/beacon-design/images/marketing/market-natural-resources.jpg"
            alt="Spanish Creek forest restoration"
            loading="lazy"
          />
          <div class="bcn-markets__body">
            <h3 class="bcn-markets__title">Natural Resource Management</h3>
            <p class="bcn-markets__desc">
              Tidal wetland restoration, forest resiliency, species conservation — from headwaters
              to coast.
            </p>
            <a
              class="bcn-markets__link"
              href="https://esassoc.com/market/natural-resource-management/"
            >
              Beacon for Natural Resources <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="bcn-markets__card">
          <img
            class="bcn-markets__image"
            src="/beacon-design/images/marketing/market-transportation.jpg"
            alt="Brooks Bridge replacement construction"
            loading="lazy"
          />
          <div class="bcn-markets__body">
            <h3 class="bcn-markets__title">Transportation &amp; Ports</h3>
            <p class="bcn-markets__desc">
              Roads, transit, freight rail, and waterways — strategic permitting for multi-phased
              design-build projects.
            </p>
            <a
              class="bcn-markets__link"
              href="https://esassoc.com/market/surface-transportation-and-ports/"
            >
              Beacon for Transportation <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="bcn-markets__card">
          <img
            class="bcn-markets__image"
            src="/beacon-design/images/marketing/market-water.jpg"
            alt="Flood-managed aquifer recharge"
            loading="lazy"
          />
          <div class="bcn-markets__body">
            <h3 class="bcn-markets__title">Water</h3>
            <p class="bcn-markets__desc">
              Supply, conveyance, wastewater reuse, flood control, and fish passage — integrated
              solutions for water resilience.
            </p>
            <a class="bcn-markets__link" href="https://esassoc.com/market/water/">
              Beacon for Water <span aria-hidden="true">→</span>
            </a>
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
.bcn-markets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-400);
}
.bcn-markets__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  overflow: hidden;
  box-shadow: 0 1px 2px #0000000f;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.bcn-markets__image {
  inline-size: 100%;
  block-size: 140px;
  object-fit: cover;
  display: block;
}
.bcn-markets__body {
  padding: var(--spacing-400);
}
.bcn-markets__title {
  margin: 0 0 var(--spacing-100);
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
}
.bcn-markets__desc {
  margin: 0 0 var(--spacing-300);
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  line-height: var(--line-height-normal, 1.5);
}
.bcn-markets__link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
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
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | component |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | component |
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
