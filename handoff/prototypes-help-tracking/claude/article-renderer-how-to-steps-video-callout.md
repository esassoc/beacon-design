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
    <span
      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
    >
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
          ><span
            class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
          >
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
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
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border);
  --badge-text-color: var(--color-text-secondary);
  min-width: 19px;
  height: 19px;
  padding: 0 4px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  box-shadow: 0 0 0 1.5px var(--color-surface);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--font-weight-medium);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.type-card-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.type-body-large {
  font-family: var(--typography-body-lg-font-family);
  font-size: var(--typography-body-lg-font-size);
  font-weight: var(--typography-body-lg-font-weight);
  line-height: var(--typography-body-lg-line-height);
  letter-spacing: var(--typography-body-lg-letter-spacing);
}
.type-body {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.type-body-small {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.type-caption {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
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
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  padding: 0;
  border-radius: var(--radius-pill, 9999px);
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  border: 0;
  outline: 1px solid CanvasText;
  background: CanvasText;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border`: #dcdcdc _(component)_
- `--color-border-light`: #efefef _(component)_
- `--color-border-strong`: #bdbdbd _(component)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-info`: #228be6 _(component)_
- `--color-info-subtle`: #fbfdff _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-surface`: #fcfcfc _(component)_
- `--color-surface-sunken`: #efefef _(component)_
- `--color-text-link`: #005862 _(component)_
- `--color-text-link-hover`: #00474f _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--typography-body-lg-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-lg-font-size`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(semantic)_
- `--typography-body-lg-font-weight`: 350 _(semantic)_
- `--typography-body-lg-letter-spacing`: .01em _(semantic)_
- `--typography-body-lg-line-height`: 1.8 _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-meta-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-meta-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-weight`: 350 _(semantic)_
- `--typography-meta-letter-spacing`: .01em _(semantic)_
- `--typography-meta-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-title-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-font-weight`: 500 _(semantic)_
- `--typography-title-letter-spacing`: .01em _(semantic)_
- `--typography-title-line-height`: 1.6 _(semantic)_
