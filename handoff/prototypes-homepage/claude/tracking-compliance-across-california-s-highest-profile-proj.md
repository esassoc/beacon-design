# Tracking Compliance Across California's Highest-Profile Proj

Homepage · source prototype: https://esassoc.github.io/beacon-design/prototypes/homepage/

![Tracking Compliance Across California's Highest-Profile Proj, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-homepage/claude/tracking-compliance-across-california-s-highest-profile-proj.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-homepage/claude/tracking-compliance-across-california-s-highest-profile-proj.phone.png

## Components

- `bcn-dot-map` (spoke) · `src/components/bcn/BcnCaDotMap.astro`
- `bcn-mkt-section` (spoke) · `src/components/bcn/BcnMarketingSection.astro`
- `bcn-section-intro` (spoke) · `src/components/bcn/BcnSectionIntro.astro`

## Markup

_1372 repeated elements are collapsed in the markup below; the comments say where._

```html
<section
  class="bcn-mkt-section bcn-mkt-section--forest"
  id="projects"
  style="--_forest-image: url(/beacon-design/images/marketing/hero-aerial.jpg)"
>
  <div class="bcn-mkt-section__inner">
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-section-intro bcn-section-intro--center bcn-section-intro--on-dark">
        <span class="bcn-section-intro__eyebrow">Active Projects</span>
        <h2 class="bcn-section-intro__headline">
          Tracking Compliance Across California's Highest-Profile Projects
        </h2>
        <div class="bcn-section-intro__accent" aria-hidden="true"></div>
        <p class="bcn-section-intro__subtext">
          Delta smelt, steelhead, Ridgway's rail — California's most complex infrastructure projects
          live or die on species mitigation tracking. Beacon maps every condition of approval to the
          responsible party and flags overdue deliverables before agencies do.
        </p>
      </div>
    </div>
    <div data-reveal="" data-reveal-bound="">
      <div class="bcn-dot-map">
        <div class="bcn-dot-map__canvas">
          <svg
            data-ca-dot-map=""
            data-projects='[{"name":"Delta Conveyance","lng":-121.61,"lat":37.78,"color":"#4ade80","label":{"dx":16,"dy":1,"anchor":"start"}},{"nam… [436 characters]'
            viewBox="0 0 440 560"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Dot map of California showing active Beacon projects"
            data-map-bound=""
          >
            <defs>
              <clipPath id="ca-clip">
                <polygon
                  points="31.4,20.0 30.7,33.7 27.6,74.7 25.7,104.8 37.1,129.5 46.7,162.3 54.3,186.9 73.3,217.1 77.1,236.2 79.0,241.7 96.2,248.8 95… [707 characters]"
                ></polygon>
              </clipPath>
            </defs>
            <g clip-path="url(#ca-clip)">
              <rect
                x="25.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="25.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <!-- …and 1362 more like this (<rect>) -->
            </g>
            <g>
              <circle
                cx="130.1"
                cy="251.0"
                r="8"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                stroke-width="1.5"
              ></circle>
              <circle cx="130.1" cy="251.0" r="4" fill="#ffffff"></circle>
              <!-- …and 6 more like this (<circle>) -->
            </g>
            <g>
              <g opacity="0" style="transition: opacity 0.2s ease">
                <rect
                  x="146.1"
                  y="242.0"
                  width="115.2"
                  height="20"
                  rx="4"
                  fill="rgba(0,0,0,0.65)"
                  stroke="rgba(255,255,255,0.15)"
                  stroke-width="1"
                ></rect>
                <circle cx="153.1" cy="252.0" r="3" fill="#4ade80"></circle>
                <text
                  x="161.1"
                  y="256.0"
                  fill="#ffffff"
                  font-size="11"
                  font-weight="600"
                  font-family="DM Sans, sans-serif"
                  text-anchor="start"
                >
                  Delta Conveyance
                </text>
              </g>
              <g opacity="0" style="transition: opacity 0.2s ease">
                <rect
                  x="125.5"
                  y="161.5"
                  width="109.0"
                  height="20"
                  rx="4"
                  fill="rgba(0,0,0,0.65)"
                  stroke="rgba(255,255,255,0.15)"
                  stroke-width="1"
                ></rect>
                <circle cx="132.5" cy="171.5" r="3" fill="#4ade80"></circle>
                <text
                  x="140.5"
                  y="175.5"
                  fill="#ffffff"
                  font-size="11"
                  font-weight="600"
                  font-family="DM Sans, sans-serif"
                  text-anchor="start"
                >
                  Sites Reservoir
                </text>
              </g>
              <!-- …and 2 more like this (<g>) -->
            </g>
          </svg>
        </div>
        <div class="bcn-dot-map__cards">
          <div class="bcn-dot-map__card">
            <div class="bcn-dot-map__card-header">
              <span class="bcn-dot-map__dot" style="background: #4ade80; color: #4ade80"></span
              ><span class="bcn-dot-map__name">Delta Conveyance</span>
            </div>
            <div class="bcn-dot-map__tagline">
              Tunnel boring and intake construction for 27M Californians' water supply — tracking
              fish screen compliance for delta smelt, longfin smelt, and winter-run Chinook.
            </div>
          </div>
          <div class="bcn-dot-map__card">
            <div class="bcn-dot-map__card-header">
              <span class="bcn-dot-map__dot" style="background: #4ade80; color: #4ade80"></span
              ><span class="bcn-dot-map__name">Sites Reservoir</span>
            </div>
            <div class="bcn-dot-map__tagline">
              Off-stream dam and canal construction — monitoring giant garter snake avoidance,
              Swainson's hawk nesting buffers, and bald eagle setbacks across eight agencies.
            </div>
          </div>
          <!-- …and 2 more like this (<div class="bcn-dot-map__card">) -->
        </div>
      </div>
      <!-- script type="module" removed (0 bytes) -->
    </div>
  </div>
</section>
```

## Styles

```css
.bcn-section-intro {
  margin-block-end: var(--spacing-700);
}
.bcn-section-intro--center {
  text-align: center;
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
.bcn-mkt-section--forest {
  color: #fff;
  background:
    linear-gradient(160deg, #02140af0 0%, #052312eb 40%, #08321ce6 100%),
    var(--_forest-image) center / cover no-repeat;
}
.bcn-mkt-section__inner {
  max-inline-size: 1100px;
  padding-inline: var(--spacing-500);
  margin-inline: auto;
}
.bcn-dot-map {
  gap: var(--spacing-700);
  grid-template-columns: 1fr 1fr;
  align-items: center;
  display: grid;
}
.bcn-dot-map__canvas {
  justify-content: center;
  display: flex;
  position: relative;
}
.bcn-dot-map__canvas svg {
  cursor: crosshair;
  transform-origin: 50%;
  block-size: auto;
  inline-size: 100%;
  max-inline-size: 550px;
  display: block;
  transform: scale(1.2);
}
.bcn-dot-map__cards {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-dot-map__card {
  border-radius: var(--radius-200);
  padding: var(--spacing-400) var(--spacing-500);
  background: #ffffff0f;
  border: 1px solid #ffffff1f;
  transition: background 0.15s;
}
.bcn-dot-map__card:hover {
  background: #ffffff1a;
}
.bcn-dot-map__card-header {
  align-items: center;
  gap: var(--spacing-200);
  margin-block-end: var(--spacing-100);
  display: flex;
}
.bcn-dot-map__dot {
  border-radius: 50%;
  flex-shrink: 0;
  block-size: 10px;
  inline-size: 10px;
  box-shadow: 0 0 6px;
}
.bcn-dot-map__name {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: #fff;
}
.bcn-dot-map__tagline {
  font-size: var(--font-size-150);
  color: #fff9;
  font-weight: 300;
  line-height: var(--line-height-normal, 1.5);
}
@media (width<=768px) {
  .bcn-dot-map {
    grid-template-columns: 1fr;
  }
}
@media (width<=768px) {
  .bcn-dot-map__canvas svg {
    max-inline-size: 360px;
  }
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--line-height-normal` | `1.6` | primitive |
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
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
