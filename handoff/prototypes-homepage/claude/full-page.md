# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<page>`
- **Components:** esa-button (hub), esa-icon (hub)

## Markup (de-scoped, framework-free)
```html
<nav class="bcn-mkt-nav">
  <a href="/beacon-design/prototypes/homepage/" class="bcn-mkt-nav__logo" aria-label="Beacon home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 96" fill="none" aria-hidden="true">
      <path
        d="M59.3 68.3V79.2L65.1 81.5V68.3C65.1 60.2 62.7 52.4 58.1 45.7C53.5 39 47.1 33.9 39.6 31L24.1 24.9V31.2L37.5 36.4C50.7 41.6 59.3 54.1 59.3 68.3Z"
        fill="rgba(255,255,255,0.6)"
      ></path>
      <path
        d="M58 86.8L26.6 74.5H25.9C25.9 74.3 25.9 74.2 25.9 74.2C20.5 71.8 17 66.5 17 60.5V0C13.8 0 11.2 2.6 11.2 5.8V60.4C11.2 69.1 16.4 76.7 24.5 79.8L58.1 92.9C60.9 94 63.9 91.9 63.9 88.9L58.1 86.6L58 86.8Z"
        fill="#ffffff"
      ></path>
      <path
        d="M40.1 92C38.9 95 35.5 96.5 32.5 95.3L20.2 90.5C7.9 85.7 0 74.1 0 60.9V16.6C0 13.4 2.6 10.8 5.8 10.8V61C5.8 71.7 12.3 81.2 22.3 85.2L40.1 92.2V92Z"
        fill="#ffffff"
      ></path>
      <path
        d="M48.1 69.6V74.7L53.9 77V69.6C53.9 56.5 46 44.9 33.8 40L24.1 36.2V42.5L31.7 45.5C41.7 49.4 48.1 58.9 48.1 69.6Z"
        fill="rgba(255,255,255,0.6)"
      ></path>
      <path
        d="M36.9 70.4L42.8 72.7V71.3C42.8 61.4 36.8 52.6 27.6 49L24.1 47.6V53.9L25.4 54.4C32.1 57 36.5 63.3 36.9 70.4Z"
        fill="rgba(255,255,255,0.6)"
      ></path>
    </svg>
    <span class="bcn-mkt-nav__wordmark">Beacon</span>
  </a>
  <a href="#" class="bcn-mkt-nav__login">Log In</a>
</nav>
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
<section class="bcn-mkt-section bcn-mkt-section--white" id="scale">
  <div class="bcn-mkt-section__inner">
    <div data-reveal="" data-reveal-bound="">
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
              <span class="bcn-scale__icon">
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
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </span>
              </span>
              <div>
                <div class="bcn-scale__value">98+</div>
                <div class="bcn-scale__label">Permits on a single reservoir project</div>
              </div>
            </div>
            <div class="bcn-scale__stat">
              <span class="bcn-scale__icon">
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
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path
                      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    ></path>
                    <path d="M12 11h4"></path>
                    <path d="M12 16h4"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                </span>
              </span>
              <div>
                <div class="bcn-scale__value">1,000s</div>
                <div class="bcn-scale__label">Tracked actions across a major tunnel project</div>
              </div>
            </div>
            <div class="bcn-scale__stat">
              <span class="bcn-scale__icon">
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
                    <line x1="3" x2="21" y1="22" y2="22"></line>
                    <line x1="6" x2="6" y1="18" y2="11"></line>
                    <line x1="10" x2="10" y1="18" y2="11"></line>
                    <line x1="14" x2="14" y1="18" y2="11"></line>
                    <line x1="18" x2="18" y1="18" y2="11"></line>
                    <polygon points="12 2 20 7 4 7"></polygon>
                  </svg>
                </span>
              </span>
              <div>
                <div class="bcn-scale__value">12+</div>
                <div class="bcn-scale__label">Agencies with overlapping jurisdiction</div>
              </div>
            </div>
            <div class="bcn-scale__stat">
              <span class="bcn-scale__icon">
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
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                  </svg>
                </span>
              </span>
              <div>
                <div class="bcn-scale__value">10+ yrs</div>
                <div class="bcn-scale__label">Of ongoing monitoring obligations</div>
              </div>
            </div>
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
          <span class="bcn-challenges__icon">
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
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </span>
          </span>
          <div>
            <h3 class="bcn-challenges__q">“Where are we on that CDFW deadline?”</h3>
            <p class="bcn-challenges__desc">
              Permit deadlines are scattered across different documents and calendars. Nobody has a
              single view of what's due, when, and whether it's on track.
            </p>
          </div>
        </div>
        <div class="bcn-challenges__card">
          <span class="bcn-challenges__icon">
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
                  d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
                ></path>
                <path d="M15 5.764v15"></path>
                <path d="M9 3.236v15"></path>
              </svg>
            </span>
          </span>
          <div>
            <h3 class="bcn-challenges__q">“Which parcels still need pre-construction surveys?”</h3>
            <p class="bcn-challenges__desc">
              The same action repeats across dozens of locations and phases. Tracking which have
              been done — and which haven't — means cross-referencing multiple spreadsheets.
            </p>
          </div>
        </div>
        <div class="bcn-challenges__card">
          <span class="bcn-challenges__icon">
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
                  d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                ></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </span>
          </span>
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
          <span class="bcn-challenges__icon">
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
                <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"></path>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                <path
                  d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
                ></path>
                <path d="M20 22v.01"></path>
              </svg>
            </span>
          </span>
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
          <span class="bcn-challenges__icon">
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
                <path d="M8 3 4 7l4 4"></path>
                <path d="M4 7h16"></path>
                <path d="m16 21 4-4-4-4"></path>
                <path d="M20 17H4"></path>
              </svg>
            </span>
          </span>
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
          <span class="bcn-challenges__icon">
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
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M12 7v5l4 2"></path>
              </svg>
            </span>
          </span>
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
            data-projects='[{"name":"Delta Conveyance","lng":-121.61,"lat":37.78,"color":"#4ade80","label":{"dx":16,"dy":1,"anchor":"start"}},{"name":"Sites Reservoir","lng":-122.15,"lat":39.25,"color":"#4ade80","label":{"dx":16,"dy":1,"anchor":"start"}},{"name":"SFO","lng":-122.38,"lat":37.62,"color":"#4ade80","label":{"dx":-16,"dy":1,"anchor":"end"}},{"name":"Lake Tahoe","lng":-120.04,"lat":39.09,"color":"#4ade80","label":{"dx":16,"dy":1,"anchor":"start"}}]'
            viewBox="0 0 440 560"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Dot map of California showing active Beacon projects"
            data-map-bound=""
          >
            <defs>
              <clipPath id="ca-clip">
                <polygon
                  points="31.4,20.0 30.7,33.7 27.6,74.7 25.7,104.8 37.1,129.5 46.7,162.3 54.3,186.9 73.3,217.1 77.1,236.2 79.0,241.7 96.2,248.8 95.4,263.6 101.9,277.3 111.4,290.9 117.1,312.8 122.9,340.2 134.3,356.6 149.5,373.1 159.0,381.3 166.7,405.9 173.5,433.3 191.4,436.0 210.5,438.7 231.4,455.2 248.6,460.6 261.9,469.9 273.3,479.8 284.8,490.7 294.3,509.9 298.9,529.1 300.0,537.3 324.8,537.3 362.9,531.8 392.6,528.0 396.4,512.6 400.2,485.3 399.0,457.9 397.1,441.5 396.4,414.1 396.4,403.2 389.5,389.5 374.3,373.1 355.2,356.6 332.4,337.5 305.7,321.1 286.7,293.7 267.6,266.3 252.4,238.9 237.1,222.5 218.1,203.4 191.4,184.2 191.4,156.8 191.4,129.5 191.4,102.1 191.4,74.7 191.4,47.4 191.4,20.0 153.3,20.0 115.2,20.0 77.1,20.0 31.4,20.0"
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
              <rect
                x="25.5"
                y="89.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="25.5"
                y="97.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="25.5"
                y="105.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="89.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="97.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="105.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="33.5"
                y="113.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="33.5" y="121.5" width="5" height="5" fill="rgb(51,103,69)" rx="0.5"></rect>
              <rect
                x="41.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="89.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="97.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="41.5"
                y="105.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="41.5" y="113.5" width="5" height="5" fill="rgb(49,105,68)" rx="0.5"></rect>
              <rect x="41.5" y="121.5" width="5" height="5" fill="rgb(42,111,67)" rx="0.5"></rect>
              <rect x="41.5" y="129.5" width="5" height="5" fill="rgb(36,116,65)" rx="0.5"></rect>
              <rect x="41.5" y="137.5" width="5" height="5" fill="rgb(31,120,64)" rx="0.5"></rect>
              <rect x="41.5" y="145.5" width="5" height="5" fill="rgb(27,123,63)" rx="0.5"></rect>
              <rect
                x="49.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="89.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="49.5"
                y="97.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="49.5" y="105.5" width="5" height="5" fill="rgb(48,106,68)" rx="0.5"></rect>
              <rect x="49.5" y="113.5" width="5" height="5" fill="rgb(40,112,66)" rx="0.5"></rect>
              <rect x="49.5" y="121.5" width="5" height="5" fill="rgb(33,118,64)" rx="0.5"></rect>
              <rect x="49.5" y="129.5" width="5" height="5" fill="rgb(27,123,63)" rx="0.5"></rect>
              <rect x="49.5" y="137.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="49.5" y="145.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="49.5" y="153.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="49.5" y="161.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="49.5" y="169.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect
                x="57.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="57.5"
                y="89.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="57.5" y="97.5" width="5" height="5" fill="rgb(50,104,69)" rx="0.5"></rect>
              <rect x="57.5" y="105.5" width="5" height="5" fill="rgb(41,111,66)" rx="0.5"></rect>
              <rect x="57.5" y="113.5" width="5" height="5" fill="rgb(33,118,64)" rx="0.5"></rect>
              <rect x="57.5" y="121.5" width="5" height="5" fill="rgb(25,125,62)" rx="0.5"></rect>
              <rect x="57.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="57.5" y="137.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="57.5" y="145.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="57.5" y="153.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="57.5" y="161.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="57.5" y="169.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="57.5" y="177.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="57.5" y="185.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect
                x="65.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="65.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="65.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="65.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="65.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="65.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="65.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="65.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="65.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="65.5" y="89.5" width="5" height="5" fill="rgb(53,101,70)" rx="0.5"></rect>
              <rect x="65.5" y="97.5" width="5" height="5" fill="rgb(44,109,67)" rx="0.5"></rect>
              <rect x="65.5" y="105.5" width="5" height="5" fill="rgb(35,117,65)" rx="0.5"></rect>
              <rect x="65.5" y="113.5" width="5" height="5" fill="rgb(26,124,62)" rx="0.5"></rect>
              <rect x="65.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="65.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="65.5" y="137.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="65.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="65.5" y="153.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="65.5" y="161.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="65.5" y="169.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="65.5" y="177.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="65.5" y="185.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="65.5" y="193.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="65.5" y="201.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect
                x="73.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="73.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="73.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="73.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="73.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="73.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="73.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="73.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="73.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="73.5" y="89.5" width="5" height="5" fill="rgb(49,105,68)" rx="0.5"></rect>
              <rect x="73.5" y="97.5" width="5" height="5" fill="rgb(39,113,66)" rx="0.5"></rect>
              <rect x="73.5" y="105.5" width="5" height="5" fill="rgb(29,121,63)" rx="0.5"></rect>
              <rect x="73.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="73.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="73.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="73.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="153.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="161.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="169.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="177.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="185.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="193.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="209.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="73.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="73.5" y="225.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect
                x="81.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="81.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="81.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="81.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="81.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="81.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="81.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="81.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="81.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="81.5" y="89.5" width="5" height="5" fill="rgb(45,108,67)" rx="0.5"></rect>
              <rect x="81.5" y="97.5" width="5" height="5" fill="rgb(35,117,65)" rx="0.5"></rect>
              <rect x="81.5" y="105.5" width="5" height="5" fill="rgb(24,125,62)" rx="0.5"></rect>
              <rect x="81.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="81.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="81.5" y="129.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="81.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="81.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="81.5" y="153.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="81.5" y="161.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="81.5" y="169.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="81.5" y="177.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="81.5" y="185.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="81.5" y="193.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="81.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="81.5" y="209.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="81.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="81.5" y="225.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="81.5" y="233.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect
                x="89.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="89.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="89.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="89.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="89.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="89.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="89.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="89.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="89.5" y="81.5" width="5" height="5" fill="rgb(53,102,69)" rx="0.5"></rect>
              <rect x="89.5" y="89.5" width="5" height="5" fill="rgb(42,111,67)" rx="0.5"></rect>
              <rect x="89.5" y="97.5" width="5" height="5" fill="rgb(31,119,64)" rx="0.5"></rect>
              <rect x="89.5" y="105.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="89.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="89.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="89.5" y="129.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="89.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="89.5" y="145.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="89.5" y="153.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="89.5" y="161.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="89.5" y="169.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="89.5" y="177.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="89.5" y="185.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="89.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="89.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="89.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="89.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="89.5" y="225.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="89.5" y="233.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="89.5" y="241.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect
                x="97.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="97.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="97.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="97.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="97.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="97.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="97.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="97.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="97.5" y="81.5" width="5" height="5" fill="rgb(51,103,69)" rx="0.5"></rect>
              <rect x="97.5" y="89.5" width="5" height="5" fill="rgb(40,112,66)" rx="0.5"></rect>
              <rect x="97.5" y="97.5" width="5" height="5" fill="rgb(29,121,63)" rx="0.5"></rect>
              <rect x="97.5" y="105.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="97.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="97.5" y="121.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="97.5" y="129.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="97.5" y="137.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="97.5" y="145.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="97.5" y="153.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="97.5" y="161.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="97.5" y="169.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="97.5" y="177.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="97.5" y="185.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="97.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="97.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="97.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="97.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="97.5" y="225.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="97.5" y="233.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="97.5" y="241.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="97.5" y="249.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="97.5" y="257.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="97.5" y="265.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect
                x="105.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="105.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="105.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="105.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="105.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="105.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="105.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="105.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="105.5" y="81.5" width="5" height="5" fill="rgb(50,104,69)" rx="0.5"></rect>
              <rect x="105.5" y="89.5" width="5" height="5" fill="rgb(39,113,66)" rx="0.5"></rect>
              <rect x="105.5" y="97.5" width="5" height="5" fill="rgb(29,122,63)" rx="0.5"></rect>
              <rect x="105.5" y="105.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="105.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="105.5" y="121.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="105.5" y="129.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="105.5" y="137.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="105.5" y="145.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="105.5" y="153.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="161.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="169.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="177.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="185.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="105.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="105.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="105.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="105.5" y="225.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="105.5" y="233.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="105.5" y="241.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="249.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="257.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="265.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="273.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="105.5" y="281.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect
                x="113.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="113.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="113.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="113.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="113.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="113.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="113.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="113.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="113.5" y="81.5" width="5" height="5" fill="rgb(51,104,69)" rx="0.5"></rect>
              <rect x="113.5" y="89.5" width="5" height="5" fill="rgb(40,113,66)" rx="0.5"></rect>
              <rect x="113.5" y="97.5" width="5" height="5" fill="rgb(29,121,63)" rx="0.5"></rect>
              <rect x="113.5" y="105.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="113.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="113.5" y="121.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="113.5" y="129.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="113.5" y="137.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="113.5" y="145.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="113.5" y="153.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="113.5" y="161.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="113.5" y="169.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="113.5" y="177.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="113.5" y="185.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="113.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="113.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="113.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="113.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="113.5" y="225.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="113.5" y="233.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="113.5" y="241.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="113.5" y="249.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="113.5" y="257.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="113.5" y="265.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="113.5" y="273.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="113.5" y="281.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="113.5" y="289.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="113.5" y="297.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="113.5" y="305.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect
                x="121.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="121.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="121.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="121.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="121.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="121.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="121.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="121.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="121.5" y="81.5" width="5" height="5" fill="rgb(52,103,69)" rx="0.5"></rect>
              <rect x="121.5" y="89.5" width="5" height="5" fill="rgb(41,111,66)" rx="0.5"></rect>
              <rect x="121.5" y="97.5" width="5" height="5" fill="rgb(31,120,64)" rx="0.5"></rect>
              <rect x="121.5" y="105.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="121.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="121.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="121.5" y="129.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="121.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="121.5" y="145.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="121.5" y="153.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="121.5" y="161.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="121.5" y="169.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="121.5" y="177.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="121.5" y="185.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="121.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="121.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="121.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="121.5" y="217.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="121.5" y="225.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="121.5" y="233.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="121.5" y="241.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="121.5" y="249.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="121.5" y="257.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="121.5" y="265.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="121.5" y="273.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="121.5" y="281.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="121.5" y="289.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="121.5" y="297.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="121.5" y="305.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="121.5" y="313.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="121.5" y="321.5" width="5" height="5" fill="rgb(26,124,62)" rx="0.5"></rect>
              <rect x="121.5" y="329.5" width="5" height="5" fill="rgb(36,116,65)" rx="0.5"></rect>
              <rect x="121.5" y="337.5" width="5" height="5" fill="rgb(46,107,68)" rx="0.5"></rect>
              <rect
                x="129.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="129.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="129.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="129.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="129.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="129.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="129.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="129.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="129.5" y="81.5" width="5" height="5" fill="rgb(54,101,70)" rx="0.5"></rect>
              <rect x="129.5" y="89.5" width="5" height="5" fill="rgb(44,109,67)" rx="0.5"></rect>
              <rect x="129.5" y="97.5" width="5" height="5" fill="rgb(33,118,64)" rx="0.5"></rect>
              <rect x="129.5" y="105.5" width="5" height="5" fill="rgb(23,126,62)" rx="0.5"></rect>
              <rect x="129.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="129.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="129.5" y="129.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="129.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="129.5" y="145.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="153.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="161.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="169.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="177.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="185.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="193.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="129.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="129.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="129.5" y="217.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="225.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="233.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="129.5" y="241.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="129.5" y="249.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="129.5" y="257.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="129.5" y="265.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="129.5" y="273.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="129.5" y="281.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="129.5" y="289.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="129.5" y="297.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="129.5" y="305.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="129.5" y="313.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="129.5" y="321.5" width="5" height="5" fill="rgb(30,121,63)" rx="0.5"></rect>
              <rect x="129.5" y="329.5" width="5" height="5" fill="rgb(40,113,66)" rx="0.5"></rect>
              <rect x="129.5" y="337.5" width="5" height="5" fill="rgb(50,104,69)" rx="0.5"></rect>
              <rect
                x="129.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="137.5" y="89.5" width="5" height="5" fill="rgb(47,106,68)" rx="0.5"></rect>
              <rect x="137.5" y="97.5" width="5" height="5" fill="rgb(37,115,65)" rx="0.5"></rect>
              <rect x="137.5" y="105.5" width="5" height="5" fill="rgb(27,123,63)" rx="0.5"></rect>
              <rect x="137.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="137.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="137.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="137.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="153.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="161.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="137.5" y="169.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="137.5" y="177.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="137.5" y="185.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="193.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="225.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="137.5" y="233.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="137.5" y="241.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="137.5" y="249.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="137.5" y="257.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="137.5" y="265.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="137.5" y="273.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="137.5" y="281.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="289.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="137.5" y="297.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="137.5" y="305.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="137.5" y="313.5" width="5" height="5" fill="rgb(22,127,61)" rx="0.5"></rect>
              <rect x="137.5" y="321.5" width="5" height="5" fill="rgb(33,118,64)" rx="0.5"></rect>
              <rect x="137.5" y="329.5" width="5" height="5" fill="rgb(44,109,67)" rx="0.5"></rect>
              <rect x="137.5" y="337.5" width="5" height="5" fill="rgb(54,101,70)" rx="0.5"></rect>
              <rect
                x="137.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="137.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="145.5" y="89.5" width="5" height="5" fill="rgb(52,103,69)" rx="0.5"></rect>
              <rect x="145.5" y="97.5" width="5" height="5" fill="rgb(42,111,67)" rx="0.5"></rect>
              <rect x="145.5" y="105.5" width="5" height="5" fill="rgb(32,119,64)" rx="0.5"></rect>
              <rect x="145.5" y="113.5" width="5" height="5" fill="rgb(23,126,62)" rx="0.5"></rect>
              <rect x="145.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="145.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="145.5" y="137.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="145.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="153.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="161.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="169.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="177.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="185.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="193.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="201.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="145.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="225.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="145.5" y="233.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="145.5" y="241.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="145.5" y="249.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="145.5" y="257.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="145.5" y="265.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="145.5" y="273.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="145.5" y="281.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="289.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="145.5" y="297.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="145.5" y="305.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="145.5" y="313.5" width="5" height="5" fill="rgb(24,125,62)" rx="0.5"></rect>
              <rect x="145.5" y="321.5" width="5" height="5" fill="rgb(35,117,65)" rx="0.5"></rect>
              <rect x="145.5" y="329.5" width="5" height="5" fill="rgb(45,108,67)" rx="0.5"></rect>
              <rect
                x="145.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="145.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="89.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="153.5" y="97.5" width="5" height="5" fill="rgb(47,106,68)" rx="0.5"></rect>
              <rect x="153.5" y="105.5" width="5" height="5" fill="rgb(39,114,66)" rx="0.5"></rect>
              <rect x="153.5" y="113.5" width="5" height="5" fill="rgb(30,121,63)" rx="0.5"></rect>
              <rect x="153.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="153.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="153.5" y="137.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="153.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="153.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="161.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="169.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="177.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="185.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="193.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="225.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="233.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="153.5" y="241.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="153.5" y="249.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="153.5" y="257.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="153.5" y="265.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="153.5" y="273.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="281.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="153.5" y="289.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="153.5" y="297.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="153.5" y="305.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="153.5" y="313.5" width="5" height="5" fill="rgb(28,122,63)" rx="0.5"></rect>
              <rect x="153.5" y="321.5" width="5" height="5" fill="rgb(38,114,65)" rx="0.5"></rect>
              <rect x="153.5" y="329.5" width="5" height="5" fill="rgb(48,106,68)" rx="0.5"></rect>
              <rect
                x="153.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="153.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="89.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="161.5" y="97.5" width="5" height="5" fill="rgb(46,107,68)" rx="0.5"></rect>
              <rect x="161.5" y="105.5" width="5" height="5" fill="rgb(36,116,65)" rx="0.5"></rect>
              <rect x="161.5" y="113.5" width="5" height="5" fill="rgb(26,124,62)" rx="0.5"></rect>
              <rect x="161.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="161.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="161.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="153.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="161.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="161.5" y="169.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="161.5" y="177.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="161.5" y="185.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="161.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="161.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="225.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="233.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="241.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="249.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="257.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="265.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="273.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="281.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="161.5" y="289.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="161.5" y="297.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="161.5" y="305.5" width="5" height="5" fill="rgb(23,127,61)" rx="0.5"></rect>
              <rect x="161.5" y="313.5" width="5" height="5" fill="rgb(32,119,64)" rx="0.5"></rect>
              <rect x="161.5" y="321.5" width="5" height="5" fill="rgb(42,111,67)" rx="0.5"></rect>
              <rect x="161.5" y="329.5" width="5" height="5" fill="rgb(52,102,69)" rx="0.5"></rect>
              <rect
                x="161.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="161.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="169.5" y="89.5" width="5" height="5" fill="rgb(54,101,70)" rx="0.5"></rect>
              <rect x="169.5" y="97.5" width="5" height="5" fill="rgb(43,110,67)" rx="0.5"></rect>
              <rect x="169.5" y="105.5" width="5" height="5" fill="rgb(33,118,64)" rx="0.5"></rect>
              <rect x="169.5" y="113.5" width="5" height="5" fill="rgb(22,127,61)" rx="0.5"></rect>
              <rect x="169.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="169.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="169.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="153.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="169.5" y="161.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="169.5" y="169.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="169.5" y="177.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="169.5" y="185.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="169.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="169.5" y="201.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="169.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="225.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="233.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="241.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="249.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="257.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="265.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="169.5" y="273.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="169.5" y="281.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="169.5" y="289.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="169.5" y="297.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="169.5" y="305.5" width="5" height="5" fill="rgb(29,122,63)" rx="0.5"></rect>
              <rect x="169.5" y="313.5" width="5" height="5" fill="rgb(38,114,65)" rx="0.5"></rect>
              <rect x="169.5" y="321.5" width="5" height="5" fill="rgb(47,107,68)" rx="0.5"></rect>
              <rect
                x="169.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="169.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="177.5" y="89.5" width="5" height="5" fill="rgb(52,102,69)" rx="0.5"></rect>
              <rect x="177.5" y="97.5" width="5" height="5" fill="rgb(41,111,66)" rx="0.5"></rect>
              <rect x="177.5" y="105.5" width="5" height="5" fill="rgb(30,120,64)" rx="0.5"></rect>
              <rect x="177.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="129.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="177.5" y="145.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="177.5" y="153.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="177.5" y="161.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="177.5" y="169.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="177.5" y="177.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="177.5" y="185.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="177.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="177.5" y="201.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="177.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="177.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="177.5" y="225.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="233.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="241.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="249.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="257.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="265.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="273.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="281.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="289.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="177.5" y="297.5" width="5" height="5" fill="rgb(28,122,63)" rx="0.5"></rect>
              <rect x="177.5" y="305.5" width="5" height="5" fill="rgb(36,116,65)" rx="0.5"></rect>
              <rect x="177.5" y="313.5" width="5" height="5" fill="rgb(44,109,67)" rx="0.5"></rect>
              <rect x="177.5" y="321.5" width="5" height="5" fill="rgb(53,102,69)" rx="0.5"></rect>
              <rect
                x="177.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="177.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="17.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="25.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="33.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="41.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="49.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="57.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="65.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="73.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="81.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="185.5" y="89.5" width="5" height="5" fill="rgb(51,103,69)" rx="0.5"></rect>
              <rect x="185.5" y="97.5" width="5" height="5" fill="rgb(40,112,66)" rx="0.5"></rect>
              <rect x="185.5" y="105.5" width="5" height="5" fill="rgb(30,121,63)" rx="0.5"></rect>
              <rect x="185.5" y="113.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="121.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="129.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="185.5" y="137.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="185.5" y="145.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="185.5" y="153.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="185.5" y="161.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="185.5" y="169.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="185.5" y="177.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="185.5" y="185.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="185.5" y="193.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="185.5" y="201.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="185.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="185.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="185.5" y="225.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="233.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="241.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="249.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="257.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="265.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="273.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="185.5" y="281.5" width="5" height="5" fill="rgb(23,126,62)" rx="0.5"></rect>
              <rect x="185.5" y="289.5" width="5" height="5" fill="rgb(29,121,63)" rx="0.5"></rect>
              <rect x="185.5" y="297.5" width="5" height="5" fill="rgb(36,116,65)" rx="0.5"></rect>
              <rect x="185.5" y="305.5" width="5" height="5" fill="rgb(43,110,67)" rx="0.5"></rect>
              <rect x="185.5" y="313.5" width="5" height="5" fill="rgb(51,103,69)" rx="0.5"></rect>
              <rect
                x="185.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="185.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="193.5" y="185.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="193.5" y="193.5" width="5" height="5" fill="rgb(74,222,128)" rx="0.5"></rect>
              <rect x="193.5" y="201.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="193.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="193.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="193.5" y="225.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="193.5" y="233.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="193.5" y="241.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="193.5" y="249.5" width="5" height="5" fill="rgb(22,127,61)" rx="0.5"></rect>
              <rect x="193.5" y="257.5" width="5" height="5" fill="rgb(23,126,62)" rx="0.5"></rect>
              <rect x="193.5" y="265.5" width="5" height="5" fill="rgb(25,125,62)" rx="0.5"></rect>
              <rect x="193.5" y="273.5" width="5" height="5" fill="rgb(28,122,63)" rx="0.5"></rect>
              <rect x="193.5" y="281.5" width="5" height="5" fill="rgb(33,118,64)" rx="0.5"></rect>
              <rect x="193.5" y="289.5" width="5" height="5" fill="rgb(38,114,66)" rx="0.5"></rect>
              <rect x="193.5" y="297.5" width="5" height="5" fill="rgb(44,109,67)" rx="0.5"></rect>
              <rect x="193.5" y="305.5" width="5" height="5" fill="rgb(51,103,69)" rx="0.5"></rect>
              <rect
                x="193.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="193.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="201.5" y="193.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="201.5" y="201.5" width="5" height="5" fill="rgb(34,197,94)" rx="0.5"></rect>
              <rect x="201.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="201.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="201.5" y="225.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="201.5" y="233.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="201.5" y="241.5" width="5" height="5" fill="rgb(23,127,61)" rx="0.5"></rect>
              <rect x="201.5" y="249.5" width="5" height="5" fill="rgb(33,118,64)" rx="0.5"></rect>
              <rect x="201.5" y="257.5" width="5" height="5" fill="rgb(34,117,64)" rx="0.5"></rect>
              <rect x="201.5" y="265.5" width="5" height="5" fill="rgb(36,116,65)" rx="0.5"></rect>
              <rect x="201.5" y="273.5" width="5" height="5" fill="rgb(39,113,66)" rx="0.5"></rect>
              <rect x="201.5" y="281.5" width="5" height="5" fill="rgb(43,110,67)" rx="0.5"></rect>
              <rect x="201.5" y="289.5" width="5" height="5" fill="rgb(48,106,68)" rx="0.5"></rect>
              <rect x="201.5" y="297.5" width="5" height="5" fill="rgb(53,101,70)" rx="0.5"></rect>
              <rect
                x="201.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="201.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="209.5" y="201.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="209.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="209.5" y="217.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="209.5" y="225.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="209.5" y="233.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="209.5" y="241.5" width="5" height="5" fill="rgb(26,124,62)" rx="0.5"></rect>
              <rect x="209.5" y="249.5" width="5" height="5" fill="rgb(36,116,65)" rx="0.5"></rect>
              <rect x="209.5" y="257.5" width="5" height="5" fill="rgb(45,109,67)" rx="0.5"></rect>
              <rect x="209.5" y="265.5" width="5" height="5" fill="rgb(46,107,68)" rx="0.5"></rect>
              <rect x="209.5" y="273.5" width="5" height="5" fill="rgb(49,105,68)" rx="0.5"></rect>
              <rect x="209.5" y="281.5" width="5" height="5" fill="rgb(53,102,69)" rx="0.5"></rect>
              <rect
                x="209.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="209.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="217.5" y="209.5" width="5" height="5" fill="rgb(22,163,74)" rx="0.5"></rect>
              <rect x="217.5" y="217.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="217.5" y="225.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="217.5" y="233.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="217.5" y="241.5" width="5" height="5" fill="rgb(30,121,63)" rx="0.5"></rect>
              <rect x="217.5" y="249.5" width="5" height="5" fill="rgb(40,113,66)" rx="0.5"></rect>
              <rect x="217.5" y="257.5" width="5" height="5" fill="rgb(50,104,69)" rx="0.5"></rect>
              <rect
                x="217.5"
                y="265.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="273.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="281.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="217.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="225.5" y="217.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="225.5" y="225.5" width="5" height="5" fill="rgb(21,128,61)" rx="0.5"></rect>
              <rect x="225.5" y="233.5" width="5" height="5" fill="rgb(26,124,62)" rx="0.5"></rect>
              <rect x="225.5" y="241.5" width="5" height="5" fill="rgb(35,117,65)" rx="0.5"></rect>
              <rect x="225.5" y="249.5" width="5" height="5" fill="rgb(44,109,67)" rx="0.5"></rect>
              <rect x="225.5" y="257.5" width="5" height="5" fill="rgb(54,101,70)" rx="0.5"></rect>
              <rect
                x="225.5"
                y="265.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="273.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="281.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="225.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="233.5" y="225.5" width="5" height="5" fill="rgb(24,126,62)" rx="0.5"></rect>
              <rect x="233.5" y="233.5" width="5" height="5" fill="rgb(32,119,64)" rx="0.5"></rect>
              <rect x="233.5" y="241.5" width="5" height="5" fill="rgb(41,112,66)" rx="0.5"></rect>
              <rect x="233.5" y="249.5" width="5" height="5" fill="rgb(50,104,69)" rx="0.5"></rect>
              <rect
                x="233.5"
                y="257.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="265.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="273.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="281.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="233.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="241.5" y="233.5" width="5" height="5" fill="rgb(39,113,66)" rx="0.5"></rect>
              <rect x="241.5" y="241.5" width="5" height="5" fill="rgb(47,106,68)" rx="0.5"></rect>
              <rect
                x="241.5"
                y="249.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="257.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="265.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="273.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="281.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="241.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect x="249.5" y="241.5" width="5" height="5" fill="rgb(55,100,70)" rx="0.5"></rect>
              <rect
                x="249.5"
                y="249.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="257.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="265.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="273.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="281.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="249.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="257.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="265.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="273.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="281.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="257.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="265.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="273.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="281.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="265.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="281.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="273.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="289.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="297.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="281.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="305.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="289.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="313.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="297.5"
                y="529.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="321.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="305.5"
                y="529.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="329.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="313.5"
                y="529.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="321.5"
                y="529.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="337.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="329.5"
                y="529.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="345.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="337.5"
                y="529.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="353.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="345.5"
                y="529.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="361.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="353.5"
                y="529.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="361.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="369.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="369.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="377.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="377.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="385.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="393.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="513.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="385.5"
                y="521.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="401.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="409.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="417.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="425.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="433.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="441.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="449.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="457.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="465.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="473.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="481.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="489.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="497.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
              <rect
                x="393.5"
                y="505.5"
                width="5"
                height="5"
                fill="rgba(255,255,255,0.18)"
                rx="0.5"
              ></rect>
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
              <circle
                cx="109.5"
                cy="170.5"
                r="8"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                stroke-width="1.5"
              ></circle>
              <circle cx="109.5" cy="170.5" r="4" fill="#ffffff"></circle>
              <circle
                cx="100.8"
                cy="259.7"
                r="8"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                stroke-width="1.5"
              ></circle>
              <circle cx="100.8" cy="259.7" r="4" fill="#ffffff"></circle>
              <circle
                cx="189.9"
                cy="179.3"
                r="8"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                stroke-width="1.5"
              ></circle>
              <circle cx="189.9" cy="179.3" r="4" fill="#ffffff"></circle>
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
              <g opacity="0" style="transition: opacity 0.2s ease">
                <rect
                  x="50.2"
                  y="250.7"
                  width="34.6"
                  height="20"
                  rx="4"
                  fill="rgba(0,0,0,0.65)"
                  stroke="rgba(255,255,255,0.15)"
                  stroke-width="1"
                ></rect>
                <circle cx="57.2" cy="260.7" r="3" fill="#4ade80"></circle>
                <text
                  x="76.8"
                  y="264.7"
                  fill="#ffffff"
                  font-size="11"
                  font-weight="600"
                  font-family="DM Sans, sans-serif"
                  text-anchor="end"
                >
                  SFO
                </text>
              </g>
              <g opacity="0" style="transition: opacity 0.2s ease">
                <rect
                  x="205.9"
                  y="170.3"
                  width="78.0"
                  height="20"
                  rx="4"
                  fill="rgba(0,0,0,0.65)"
                  stroke="rgba(255,255,255,0.15)"
                  stroke-width="1"
                ></rect>
                <circle cx="212.9" cy="180.3" r="3" fill="#4ade80"></circle>
                <text
                  x="220.9"
                  y="184.3"
                  fill="#ffffff"
                  font-size="11"
                  font-weight="600"
                  font-family="DM Sans, sans-serif"
                  text-anchor="start"
                >
                  Lake Tahoe
                </text>
              </g>
            </g>
          </svg>
        </div>
        <div class="bcn-dot-map__cards">
          <div class="bcn-dot-map__card">
            <div class="bcn-dot-map__card-header">
              <span class="bcn-dot-map__dot" style="background: #4ade80; color: #4ade80"></span>
              <span class="bcn-dot-map__name">Delta Conveyance</span>
            </div>
            <div class="bcn-dot-map__tagline">
              Tunnel boring and intake construction for 27M Californians' water supply — tracking
              fish screen compliance for delta smelt, longfin smelt, and winter-run Chinook.
            </div>
          </div>
          <div class="bcn-dot-map__card">
            <div class="bcn-dot-map__card-header">
              <span class="bcn-dot-map__dot" style="background: #4ade80; color: #4ade80"></span>
              <span class="bcn-dot-map__name">Sites Reservoir</span>
            </div>
            <div class="bcn-dot-map__tagline">
              Off-stream dam and canal construction — monitoring giant garter snake avoidance,
              Swainson's hawk nesting buffers, and bald eagle setbacks across eight agencies.
            </div>
          </div>
          <div class="bcn-dot-map__card">
            <div class="bcn-dot-map__card-header">
              <span class="bcn-dot-map__dot" style="background: #4ade80; color: #4ade80"></span>
              <span class="bcn-dot-map__name">SFO Shoreline Protection</span>
            </div>
            <div class="bcn-dot-map__tagline">
              Levee construction and tidal marsh restoration defending airport infrastructure from
              sea-level rise — salt marsh harvest mouse and Ridgway's rail mitigation.
            </div>
          </div>
          <div class="bcn-dot-map__card">
            <div class="bcn-dot-map__card-header">
              <span class="bcn-dot-map__dot" style="background: #4ade80; color: #4ade80"></span>
              <span class="bcn-dot-map__name">Lake Tahoe Basin Restoration</span>
            </div>
            <div class="bcn-dot-map__tagline">
              Watershed erosion control and stream restoration to preserve lake clarity — Lahontan
              cutthroat trout reintroduction.
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="/beacon-design/_astro/BcnCaDotMap.astro_astro_type_script_index_0_lang.DecQEEMA.js"
      ></script>
    </div>
  </div>
</section>
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
            class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
          >
            <a class="esa-button__native" href="#" role="button">
              <span class="esa-button__label"> Go to Beacon </span>
            </a>
          </span>
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
            class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
          >
            <a class="esa-button__native" href="#" role="button">
              <span class="esa-button__label"> Request a Demo </span>
            </a>
          </span>
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
            class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
          >
            <a class="esa-button__native" href="#" role="button">
              <span class="esa-button__label"> Why Beacon? </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
<footer class="bcn-mkt-footer">
  <div>© 2026 ESA — Beacon Environmental Compliance Platform</div>
  <div><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Security</a></div>
</footer>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
:root,
[data-theme="beacon"] {
  --color-border: #dcdcdc;
  --color-danger: #e5484d;
  --color-danger-border: #fdbdbe;
  --color-danger-strong: #ce2c31;
  --color-danger-subtle: #fff7f7;
  --color-gray-2: #f9f9f9;
  --color-primary: #005862;
  --color-primary-hover: #00474f;
  --color-primary-strong: #2a7e3b;
  --color-primary-subtle: #effefb;
  --color-success: #2e7571;
  --color-success-border: #c2da91;
  --color-success-strong: #5c7c2f;
  --color-success-subtle: #f8faf3;
  --color-surface: #fcfcfc;
  --color-surface-sunken: #efefef;
  --color-text-inverse: #fcfcfc;
  --color-text-link: #005862;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --font-decorative: "Besley", serif;
  --font-sans: "DM Sans", sans-serif;
  --font-weight-bold: 650;
  --font-weight-medium: 500;
  --font-weight-regular: 350;
  --font-weight-semibold: 550;
  --form-font-size-md: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --form-height-md: 36px;
  --form-padding-x-md: 0.75rem;
  --form-radius-md: 0.25rem;
  --icon-size-large: 24px;
  --icon-size-lg: 24px;
  --icon-size-md: 20px;
  --icon-size-medium: 20px;
  --icon-size-sm: 16px;
  --icon-size-small: 16px;
  --icon-size-xl: 28px;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.8;
  --line-height-tight: 1.3;
  --radius-100: 0.25rem;
  --radius-200: 0.5rem;
  --radius-full: 9999px;
  --spacing-100: 0.25rem;
  --spacing-150: 0.375rem;
  --spacing-200: 0.5rem;
  --spacing-250: 0.625rem;
  --spacing-300: 0.75rem;
  --spacing-400: 1rem;
  --spacing-500: 1.5rem;
  --spacing-600: 2rem;
  --spacing-700: 3rem;
  --transition-fast: 0.15s ease;
  --type-size-1000: clamp(3rem, 2.6rem + 2vw, 4rem);
  --type-size-150: clamp(0.6875rem, 0.61rem + 0.38vw, 0.875rem);
  --type-size-200: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --type-size-300: clamp(0.875rem, 0.77rem + 0.52vw, 1.125rem);
  --type-size-400: clamp(1rem, 0.88rem + 0.6vw, 1.25rem);
  --type-size-500: clamp(1.125rem, 0.98rem + 0.72vw, 1.5rem);
  --type-size-700: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem);
}

.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
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
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
html,
.modern-layout__content {
  scroll-behavior: smooth;
}
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
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
  border-color: transparent;
}
.esa-button__label {
  white-space: nowrap;
}
:host {
  all: initial;
}
.host-root {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2147483000;
  font-family: system-ui, sans-serif;
}
.host-root > * {
  pointer-events: auto;
}
.launch {
  position: fixed;
  bottom: 22px;
  left: 22px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 19px;
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: 1px solid #3d6fd6;
  background: linear-gradient(180deg, #1f6feb, #1551c4);
  box-shadow:
    0 10px 28px -8px rgba(31, 111, 235, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    filter 0.15s ease;
}
.launch svg {
  flex: none;
}
.panel {
  position: fixed;
  top: 18px;
  right: 18px;
  bottom: 18px;
  width: min(720px, 94vw);
  display: flex;
  flex-direction: column;
  color: #ffffff;
  border-radius: 16px;
  background: linear-gradient(155deg, rgba(26, 31, 40, 0.74), rgba(11, 15, 21, 0.86));
  backdrop-filter: blur(26px) saturate(150%);
  -webkit-backdrop-filter: blur(26px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 28px 70px -18px rgba(0, 0, 0, 0.62),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  font-size: 12.5px;
  overflow: hidden;
  /* slide in from the right */
  transform: translateX(calc(100% + 32px));
  opacity: 0;
  visibility: hidden;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.22s ease,
    visibility 0s linear 0.3s;
}
.head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}
.head strong {
  font-size: 14px;
}
.head .sub {
  flex: 1;
  color: #ccd5e0;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.x {
  border: 0;
  background: none;
  color: #c4cdd8;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.picker {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: #eef2f6;
  font: inherit;
  font-size: 12.5px;
  cursor: pointer;
  white-space: nowrap;
  transition:
    border-color 0.12s ease,
    background 0.12s ease,
    color 0.12s ease;
}
.chip.on {
  background: rgba(31, 111, 235, 0.28);
  border-color: #4493f8;
  color: #fff;
  font-weight: 600;
}
.tabs {
  display: flex;
  gap: 4px;
  padding: 9px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}
.tabs button {
  padding: 5px 12px;
  border: 0;
  border-radius: 6px;
  background: none;
  color: #ccd5e0;
  font: inherit;
  font-size: 12.5px;
  cursor: pointer;
}
.tabs button.on {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.body {
  overflow: auto;
  padding: 13px 16px;
  flex: 1;
}
.hint {
  margin: 0;
  color: #c4cdd8;
  line-height: 1.6;
}
.footer {
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 11px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.18);
}
[hidden] {
  display: none !important;
}
.cpreview {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: calc(100% + 8px);
  background: rgba(13, 17, 23, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  box-shadow: 0 18px 50px -14px rgba(0, 0, 0, 0.7);
  padding: 12px 14px;
  max-height: 50vh;
  overflow: auto;
}
.copy {
  color: #eef2f6;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.05);
}
.footer button {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 8px;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}
.claude {
  color: #fff;
  border: 1px solid #d97757;
  background: linear-gradient(180deg, #e0805f, #c25e3c);
  box-shadow:
    0 6px 18px -6px rgba(217, 119, 87, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.claude svg {
  flex: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-regular, 350);
  color: var(--color-text-primary, #3d3d3d);
  background: var(--color-surface, #fff);
  -webkit-font-smoothing: antialiased;
}
a {
  color: var(--color-text-link, #005862);
  text-decoration: none;
}
:where(h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd, ul, ol, pre) {
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
}
.bcn-mkt-nav {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 100;
  block-size: 56px;
  padding-inline: var(--spacing-500);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff0d;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-200);
}
.bcn-mkt-nav__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  text-decoration: none;
}
.bcn-mkt-nav__logo svg {
  inline-size: 22px;
  block-size: 32px;
}
.bcn-mkt-nav__wordmark {
  font-size: 1.1rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.02em;
  color: #fff;
}
.bcn-mkt-nav__login {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-150) var(--spacing-400);
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-medium);
  color: #fff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: var(--radius-100);
  text-decoration: none;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}
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
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
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
.bcn-scale {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-700);
  align-items: center;
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
.bcn-scale__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-500);
}
.bcn-scale__stat {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-400);
}
.bcn-scale__icon {
  display: inline-flex;
  color: var(--color-primary);
  margin-block-start: 2px;
  flex-shrink: 0;
}
.bcn-scale__value {
  font-family: var(--font-decorative, var(--font-sans));
  font-size: var(--type-size-500);
  font-weight: var(--font-weight-bold);
  line-height: 1;
  margin-block-end: var(--spacing-100);
  color: var(--color-text-primary);
}
.bcn-scale__label {
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  line-height: var(--line-height-normal, 1.5);
}
.bcn-scale__image {
  border-radius: var(--radius-200);
  overflow: hidden;
}
.bcn-scale__image img {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  min-block-size: 400px;
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
.bcn-challenges {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-400);
}
.bcn-challenges__card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  transition: box-shadow 0.2s ease;
}
.bcn-challenges__icon {
  display: inline-flex;
  color: var(--color-primary);
  flex-shrink: 0;
  margin-block-start: 2px;
}
.bcn-challenges__q {
  margin: 0 0 var(--spacing-200);
  font-family: var(--font-decorative, var(--font-sans));
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight, 1.25);
  color: var(--color-text-primary);
}
.bcn-challenges__desc {
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed, 1.75);
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
.bcn-solution {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-500);
}
[data-reveal-delay="1"] {
  transition-delay: 0.1s;
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
[data-reveal-delay="2"] {
  transition-delay: 0.2s;
}
[data-reveal-delay="3"] {
  transition-delay: 0.3s;
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
.bcn-dot-map {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-700);
  align-items: center;
}
.bcn-dot-map__canvas {
  position: relative;
  display: flex;
  justify-content: center;
}
.bcn-dot-map__canvas svg {
  display: block;
  inline-size: 100%;
  max-inline-size: 550px;
  block-size: auto;
  cursor: crosshair;
  transform: scale(1.2);
  transform-origin: center center;
}
.bcn-dot-map__cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-dot-map__card {
  background: #ffffff0f;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-200);
  padding: var(--spacing-400) var(--spacing-500);
  transition: background 0.15s ease;
}
.bcn-dot-map__card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin-block-end: var(--spacing-100);
}
.bcn-dot-map__dot {
  inline-size: 10px;
  block-size: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 6px currentColor;
}
.bcn-dot-map__name {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: #fff;
}
.bcn-dot-map__tagline {
  font-size: var(--type-size-150);
  font-weight: 300;
  color: #fff9;
  line-height: var(--line-height-normal, 1.5);
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
.bcn-mkt-footer {
  background: #292929;
  color: #989898;
  padding: var(--spacing-600) var(--spacing-500);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--type-size-150);
}
.bcn-mkt-footer a {
  color: #989898;
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--color-border` | `#dcdcdc` | semantic |
| `--color-danger` | `#e5484d` | semantic |
| `--color-danger-border` | `#fdbdbe` | semantic |
| `--color-danger-strong` | `#ce2c31` | semantic |
| `--color-danger-subtle` | `#fff7f7` | semantic |
| `--color-gray-2` | `#f9f9f9` | primitive |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-primary-strong` | `#2a7e3b` | semantic |
| `--color-primary-subtle` | `#effefb` | semantic |
| `--color-success` | `#2e7571` | semantic |
| `--color-success-border` | `#c2da91` | semantic |
| `--color-success-strong` | `#5c7c2f` | semantic |
| `--color-success-subtle` | `#f8faf3` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-link` | `#005862` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `500` | primitive |
| `--font-weight-regular` | `350` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--form-height-md` | `36px` | component |
| `--form-padding-x-md` | `.75rem` | component |
| `--form-radius-md` | `.25rem` | component |
| `--icon-size-large` | `24px` | component |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-medium` | `20px` | component |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-small` | `16px` | component |
| `--icon-size-xl` | `28px` | primitive |
| `--line-height-normal` | `1.6` | primitive |
| `--line-height-relaxed` | `1.8` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--transition-fast` | `.15s ease` | primitive |
| `--type-size-1000` | `clamp(3rem, 2.6rem + 2vw, 4rem)` | primitive |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--type-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
