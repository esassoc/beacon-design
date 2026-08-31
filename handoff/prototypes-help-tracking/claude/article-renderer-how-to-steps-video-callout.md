# Article renderer (how-to: steps, video, callout)

The shared renderer for ONE article, captured on the dataset's richest body so every block type is visible at once: the title with its kind badge, numbered steps, a placeholder video frame, a callout, and the trailing "Related" row. Both the knowledge base and the Aldo drawer render articles through this component, so help content looks identical everywhere.

## Key decisions
- ONE renderer, three chrome flags: headingLevel (h2 on the page, h3 in the drawer), hideTitle (when the host owns the title), and compact (tighter rhythm for the drawer). Two consumers sharing one look is what justifies the component.
- The body is a BLOCK UNION rendered in order — p | steps | callout | figure | video — driven entirely by article.blocks. Same block model the release-notes stream uses.
- Steps are an ordered list with quiet round NUMBERED MARKERS drawn by a CSS counter (counter-increment + ::before), on a neutral gray fill. Never a colored left border.
- Callouts carry a tone (note | tip) that changes only the glyph and the label — "Note" with an info glyph, "Tip" with a lightbulb. Both use the neutral sunken treatment: gray fill, neutral ink.
- Figures and videos are calm PLACEHOLDER frames — a glyph, a label, and a caption. No real assets ship; the frame states what would go there. The video frame carries its duration as an esa-badge.
- Off-registry glyphs (lightbulb, image, play) go through esa-icon's documented `paths` fallback rather than forking the shared icon registry.
- The "Related" row is suppressed for glossary articles — a term definition ends at the definition; only how-tos carry onward links.
- Related ids resolve through getArticle and unresolvable ids are silently dropped, so a stale id degrades to one fewer link rather than a broken href.
- The article root carries id="article-<id>", which is what makes every #article-<id> deep link in the feature resolve.

## Gotchas
- The light Aldo tint is BANNED as a surface or accent here — callouts and step markers are neutral sunken gray. The saturated Aldo mark glyph is the only place the accent color survives in this feature.
- Read the semantic token layer only (--color-*, --spacing-*), never the raw --bcn-gray-* ramp.
- No esa-* lego renders a rich article body; esa-icon and esa-badge are composed INSIDE it. esa-card is a bare container and esa-empty-state is a placeholder — neither models article content.
- Every article is pre-rendered for both the pane and the drawer, so this renderer runs 29 times per page in the home's case. Keep it presentational and client-JS-free or that cost compounds.
- Paragraph text is primary ink, never grayed — graying body prose to look calm makes long articles harder to read.

## Done when
- The how-to shows its title with a "How-to" badge, numbered steps with round neutral markers, a placeholder video frame with a duration badge, a labeled callout, and a "Related" row; the same article rendered in the drawer looks identical apart from heading level and spacing; a glossary article shows a "Glossary" badge and no "Related" row.

## Markup
```html
<article id="article-reading-permit-tracking" class="bcn-help-article">
  <header class="bcn-help-article__head">
    <h2 class="bcn-help-article__title type-card-title">
      Reading the Permit Tracking board
    </h2>
    <span class="esa-badge esa-badge--primary esa-badge--sm">
      <span class="esa-badge__text">How-to</span>
    </span>
  </header>
  <div class="bcn-help-article__body">
    <p class="bcn-help-article__p type-body">
      Permit Tracking lists every permit and approval a project needs, each with its
      current status in the acquisition pipeline — from not yet applied, through agency
      review, to issued.
    </p>
    <ol class="bcn-help-article__steps">
      <li class="bcn-help-article__step type-body">
        Each row is one permit; the status lozenge shows where it sits in the pipeline.
      </li>
      <li class="bcn-help-article__step type-body">
        The date column shows the next deadline — a submittal window, an agency response
        due, or an expiration to renew.
      </li>
      <li class="bcn-help-article__step type-body">
        Open a permit to see its conditions, responsible contacts, and the source document
        it will become once issued.
      </li>
    </ol>
    <figure class="bcn-help-article__video">
      <div class="bcn-help-article__video-frame">
        <span class="bcn-help-article__video-play"
          ><span class="esa-icon esa-icon--md" aria-hidden="true">
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
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
          </span>
        </span>
        <span class="bcn-help-article__video-duration"
          ><span class="esa-badge esa-badge--primary esa-badge--sm">
            <span class="esa-badge__text">2:47</span>
          </span>
        </span>
      </div>
      <figcaption class="bcn-help-article__caption type-caption">
        Watch: a permit’s life in Beacon
      </figcaption>
    </figure>
    <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
      <span class="bcn-help-article__callout-icon">
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
              d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
            ></path>
            <path d="M9 18h6"></path>
            <path d="M10 22h4"></path>
          </svg>
        </span>
      </span>
      <div class="bcn-help-article__callout-body">
        <span class="bcn-help-article__callout-label">Tip</span>
        <p class="bcn-help-article__callout-text type-body">
          An issued permit becomes a source document: its conditions are extracted as
          commitments and join the catalog like any other obligation.
        </p>
      </div>
    </aside>
  </div>
  <nav class="bcn-help-article__related" aria-label="Related articles">
    <span class="bcn-help-article__related-label">Related</span>
    <ul class="bcn-help-article__related-list">
      <li>
        <a
          class="bcn-help-article__related-link"
          href="/beacon-design/prototypes/help#article-permit"
          >Permit</a
        >
      </li>
      <li>
        <a
          class="bcn-help-article__related-link"
          href="/beacon-design/prototypes/help#article-what-is-a-source"
          >Source Document</a
        >
      </li>
      <li>
        <a
          class="bcn-help-article__related-link"
          href="/beacon-design/prototypes/help#article-what-is-a-commitment"
          >Commitment</a
        >
      </li>
    </ul>
  </nav>
</article>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-help-article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-help-article--compact {
  gap: var(--spacing-400);
}
.bcn-help-article__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.bcn-help-article__title {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-help-article__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-help-article--compact .bcn-help-article__body {
  gap: var(--spacing-300);
}
.bcn-help-article__p {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-help-article__steps {
  list-style: none;
  counter-reset: bcn-step;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-help-article__step {
  counter-increment: bcn-step;
  display: grid;
  grid-template-columns: 1.625rem 1fr;
  align-items: start;
  gap: var(--spacing-300);
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-help-article__step:before {
  content: counter(bcn-step);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.625rem;
  height: 1.625rem;
  border-radius: var(--radius-full);
  background: var(--color-surface-sunken);
  color: var(--color-text-primary);
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}
.bcn-help-article__callout {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-light);
  background: var(--color-surface-sunken);
}
.bcn-help-article--compact .bcn-help-article__callout {
  padding: var(--spacing-300);
}
.bcn-help-article__callout-icon {
  display: inline-flex;
  margin-top: 1px;
  color: var(--color-text-secondary);
}
.bcn-help-article__callout-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.bcn-help-article__callout-label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}
.bcn-help-article__callout-text {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-help-article__figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-help-article__figure-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200);
  min-height: 8.5rem;
  padding: var(--spacing-500);
  border: 1px dashed var(--color-border-strong);
  border-radius: var(--radius-200);
  background: var(--color-surface-sunken);
  text-align: center;
}
.bcn-help-article__figure-icon {
  color: var(--color-text-tertiary);
}
.bcn-help-article__figure-label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.bcn-help-article__video {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-help-article__video-frame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-200);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: color-mix(
    in srgb,
    var(--color-text-primary) 8%,
    var(--color-surface-sunken)
  );
}
.bcn-help-article__video-play {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  color: var(--color-text-primary);
  box-shadow: 0 1px 4px #0000002e;
  padding-left: 3px;
}
.bcn-help-article__video-duration {
  position: absolute;
  right: var(--spacing-200);
  bottom: var(--spacing-200);
}
.bcn-help-article__video-label,
.bcn-help-article__caption {
  font-size: max(0.8125rem, var(--type-size-100));
  color: var(--color-text-secondary);
  margin: 0;
}
.bcn-help-article__related {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-150) var(--spacing-300);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
}
.bcn-help-article__related-label {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}
.bcn-help-article__related-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-100) var(--spacing-300);
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-help-article__related-link {
  font-size: 0.9375rem;
  color: var(--color-text-link);
  text-decoration: none;
}
.bcn-help-article__related-link:hover {
  color: var(--color-text-link-hover);
  text-decoration: underline;
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.type-card-title {
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.type-body-large {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
}
.type-body {
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
}
.type-body-small {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.type-caption {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
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
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-primary, #43608a));
  --_badge-text: var(--badge-text-color, var(--color-text-inverse, #fff));
  --_badge-height: var(--badge-height-md, 28px);
  --_badge-font-size: 13px;
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  --_badge-min-width: var(--badge-height-md, 28px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--_badge-height);
  min-width: var(--_badge-min-width);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--badge-radius, var(--radius-100, 4px));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--xs {
  --_badge-height: var(--badge-height-xs, 18px);
  --_badge-font-size: 10px;
  --_badge-padding-x: var(--spacing-100, 0.25rem);
  --_badge-min-width: var(--badge-height-xs, 18px);
}
.esa-badge--sm {
  --_badge-height: var(--badge-height-sm, 22px);
  --_badge-font-size: 11px;
  --_badge-padding-x: var(--spacing-150, 0.375rem);
  --_badge-min-width: var(--badge-height-sm, 22px);
}
.esa-badge--lg {
  --_badge-height: var(--badge-height-lg, 34px);
  --_badge-font-size: 14px;
  --_badge-padding-x: var(--spacing-300, 0.75rem);
  --_badge-min-width: var(--badge-height-lg, 34px);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-secondary, #65ba74);
  --_badge-text: var(--color-secondary-on-fill, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-success, #bdee63);
  --_badge-text: var(--color-success-on-fill, #37401c);
}
.esa-badge--warning {
  --_badge-bg: var(--color-warning, #ffc53d);
  --_badge-text: var(--color-warning-on-fill, #4f3422);
}
.esa-badge--danger {
  --_badge-bg: var(--color-danger, #e5484d);
}
.esa-badge--info {
  --_badge-bg: var(--color-info, #0090ff);
}
.esa-badge--dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  padding: 0;
  border-radius: var(--radius-full, 9999px);
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-primary-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-secondary-hover, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-success-hover, #b0e64c);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-info-hover, #0588f0);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--badge-bg`: #005862 _(component)_
- `--badge-height-lg`: 34px _(component)_
- `--badge-height-md`: 28px _(component)_
- `--badge-height-sm`: 22px _(component)_
- `--badge-height-xs`: 18px _(component)_
- `--badge-radius`: .25rem _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-danger-hover`: #dc3e42 _(semantic)_
- `--color-info`: #228be6 _(semantic)_
- `--color-info-hover`: #0588f0 _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-secondary-hover`: #0a6562 _(semantic)_
- `--color-secondary-on-fill`: #203c25 _(semantic)_
- `--color-success`: #2e7571 _(semantic)_
- `--color-success-hover`: #b0e64c _(semantic)_
- `--color-success-on-fill`: #37401c _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-link`: #005862 _(semantic)_
- `--color-text-link-hover`: #00474f _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--color-warning-hover`: #ffba18 _(semantic)_
- `--color-warning-on-fill`: #4f3422 _(semantic)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--letter-spacing-normal`: .01em _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--line-height-relaxed`: 1.8 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
