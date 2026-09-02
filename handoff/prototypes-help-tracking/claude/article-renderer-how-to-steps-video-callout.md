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
    <h2 class="bcn-help-article__title typography-title">
      Reading the Permit Tracking board
    </h2>
    <span
      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
      ><span class="esa-badge__text">How-to</span></span
    >
  </header>
  <div class="bcn-help-article__body">
    <p class="bcn-help-article__p typography-body-md">
      Permit Tracking lists every permit and approval a project needs, each with its
      current status in the acquisition pipeline — from not yet applied, through agency
      review, to issued.
    </p>
    <ol class="bcn-help-article__steps">
      <li class="bcn-help-article__step typography-body-md">
        Each row is one permit; the status lozenge shows where it sits in the pipeline.
      </li>
      <li class="bcn-help-article__step typography-body-md">
        The date column shows the next deadline — a submittal window, an agency response
        due, or an expiration to renew.
      </li>
      <li class="bcn-help-article__step typography-body-md">
        Open a permit to see its conditions, responsible contacts, and the source document
        it will become once issued.
      </li>
    </ol>
    <figure class="bcn-help-article__video">
      <div class="bcn-help-article__video-frame">
        <span class="bcn-help-article__video-play"
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
              <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span></span
        ><span class="bcn-help-article__video-duration"
          ><span
            class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
            ><span class="esa-badge__text">2:47</span></span
          ></span
        >
      </div>
      <figcaption class="bcn-help-article__caption typography-meta">
        Watch: a permit’s life in Beacon
      </figcaption>
    </figure>
    <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
      <span class="bcn-help-article__callout-icon"
        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
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
            <path d="M10 22h4"></path></svg></span
      ></span>
      <div class="bcn-help-article__callout-body">
        <span class="bcn-help-article__callout-label">Tip</span>
        <p class="bcn-help-article__callout-text typography-body-md">
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
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-help-article--compact {
  gap: var(--spacing-400);
}
.bcn-help-article__head {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-help-article__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-article__body {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-help-article--compact .bcn-help-article__body {
  gap: var(--spacing-300);
}
.bcn-help-article__p {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-article__steps {
  counter-reset: bcn-step;
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-article__step {
  counter-increment: bcn-step;
  align-items: start;
  gap: var(--spacing-300);
  color: var(--color-content-default);
  grid-template-columns: 1.625rem 1fr;
  margin: 0;
  display: grid;
}
.bcn-help-article__step:before {
  content: counter(bcn-step);
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  width: 1.625rem;
  height: 1.625rem;
  color: var(--color-content-default);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  justify-content: center;
  align-items: center;
  line-height: 1;
  display: inline-flex;
}
.bcn-help-article__callout {
  align-items: start;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-sunken);
  grid-template-columns: auto 1fr;
  display: grid;
}
.bcn-help-article--compact .bcn-help-article__callout {
  padding: var(--spacing-300);
}
.bcn-help-article__callout-icon {
  color: var(--color-content-default-secondary);
  margin-top: 1px;
  display: inline-flex;
}
.bcn-help-article__callout-body {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-help-article__callout-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__callout-text {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-article__figure {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-help-article__figure-frame {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  min-height: 8.5rem;
  padding: var(--spacing-500);
  border: 1px dashed var(--color-border-default-strong);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
  text-align: center;
  flex-direction: column;
  display: flex;
}
.bcn-help-article__figure-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-help-article__figure-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__video {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-help-article__video-frame {
  aspect-ratio: 16/9;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default);
  background: color-mix(
    in srgb,
    var(--color-content-default) 8%,
    var(--color-background-elevation-sunken)
  );
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  overflow: hidden;
}
.bcn-help-article__video-play {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-raised);
  width: 3rem;
  height: 3rem;
  color: var(--color-content-default);
  justify-content: center;
  align-items: center;
  padding-left: 3px;
  display: inline-flex;
  box-shadow: 0 1px 4px #0000002e;
}
.bcn-help-article__video-duration {
  right: var(--spacing-200);
  bottom: var(--spacing-200);
  position: absolute;
}
.bcn-help-article__video-label,
.bcn-help-article__caption {
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-help-article__related {
  align-items: baseline;
  gap: var(--spacing-150) var(--spacing-300);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-wrap: wrap;
  display: flex;
}
.bcn-help-article__related-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__related-list {
  gap: var(--spacing-100) var(--spacing-300);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-article__related-link {
  color: var(--color-content-link);
  font-size: 0.9375rem;
  text-decoration: none;
}
.bcn-help-article__related-link:hover {
  color: var(--color-content-link-hover);
  text-decoration: underline;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
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
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
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
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
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
- `--badge-bg`: #43608a _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
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
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
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
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-title-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-strong-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-strong-font-weight`: 550 _(semantic)_
- `--typography-title-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-strong-line-height`: 1.6 _(semantic)_
