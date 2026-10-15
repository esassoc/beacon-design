# Index

The Compliance Index as a book's back index reads, all three levels open: category the heading, subcategory the subheading, each action and obligation a line under it. Pressing a subcategory brings its page into view; pressing an entry brings its page into view with the entry open. A check marks a reviewed subcategory (muted when everything in it was discarded); an alert mark, one with something to settle. Folds to a rail, as step 1's Library does.

## Key decisions
- Prod's sidebar is a flat list of bins with draft and approved counts. Entries are listed under their subcategory because an index is read for its entries, and the count is the list.

## Markup
```html
<nav class="bcn-sw3it" aria-label="Compliance Index" data-sw3-index-tree="">
  <div class="bcn-sw3it__head">
    <h2 class="bcn-sw3it__title">Index</h2>
    <span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        aria-label="Fold the index"
        title="Fold the index"
        data-it-fold="true"
      >
        <span class="esa-icon esa-icon--xs" aria-hidden="true"
          ><svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m11 17-5-5 5-5"></path>
            <path d="m18 17-5-5 5-5"></path></svg
        ></span></button
    ></span>
  </div>
  <span class="bcn-sw3it__unfold"
    ><span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        aria-label="Open the index"
        title="Open the index"
        data-it-unfold="true"
      >
        <span class="esa-icon esa-icon--xs" aria-hidden="true"
          ><svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m6 17 5-5-5-5"></path>
            <path d="m13 17 5-5-5-5"></path></svg
        ></span></button></span
  ></span>
  <div class="bcn-sw3it__body">
    <details class="esa-collapsible esa-collapsible--flush" open="">
      <summary class="esa-collapsible__summary typography-label-sm-strong">
        <span class="esa-collapsible__title">Light and noise</span>
      </summary>
      <div class="esa-collapsible__body typography-body-md">
        <ul class="bcn-sw3it__subs">
          <li
            class="bcn-sw3it__sub"
            data-it-sub="s-night-light"
            data-current=""
            data-state="flagged"
          >
            <a class="bcn-sw3it__subname" href="#s-night-light" data-it-go="s-night-light"
              ><span>Nighttime lighting</span
              ><span class="bcn-sw3it__mark" data-it-mark="reviewed"
                ><span class="esa-icon esa-icon--xs" role="img" aria-label="Reviewed"
                  ><svg
                    width="14"
                    height="14"
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
              ><span class="bcn-sw3it__mark" data-it-mark="flagged"
                ><span
                  class="esa-icon esa-icon--xs"
                  role="img"
                  aria-label="Something to settle"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ></a>
            <ol class="bcn-sw3it__entries" data-it-entries="">
              <li>
                <a
                  href="#o1"
                  data-it-entry="o1"
                  data-sub="s-night-light"
                  data-status="draft"
                  title="Shield and aim construction lighting down and away from habitat"
                  >Shield and aim construction lighting down and away from habitat</a
                >
              </li>
              <li>
                <a
                  href="#o2"
                  data-it-entry="o2"
                  data-sub="s-night-light"
                  data-status="draft"
                  title="Use yellow or orange lights within 500 feet of habitat"
                  >Use yellow or orange lights within 500 feet of habitat</a
                >
              </li>
              <li>
                <a
                  href="#o3"
                  data-it-entry="o3"
                  data-sub="s-night-light"
                  data-status="draft"
                  title="Point intake lighting away from the river"
                  >Point intake lighting away from the river</a
                >
              </li>
              <li>
                <a
                  href="#a1"
                  data-it-entry="a1"
                  data-sub="s-night-light"
                  data-status="draft"
                  title="Justify nighttime work in the Construction Phase Authorization Package"
                  >Justify nighttime work in the Construction Phase Authorization
                  Package</a
                >
              </li>
            </ol>
          </li>
          <li class="bcn-sw3it__sub" data-it-sub="s-night-work" data-state="draft">
            <a class="bcn-sw3it__subname" href="#s-night-work" data-it-go="s-night-work"
              ><span>Night work</span
              ><span class="bcn-sw3it__mark" data-it-mark="reviewed"
                ><span class="esa-icon esa-icon--xs" role="img" aria-label="Reviewed"
                  ><svg
                    width="14"
                    height="14"
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
              ><span class="bcn-sw3it__mark" data-it-mark="flagged"
                ><span
                  class="esa-icon esa-icon--xs"
                  role="img"
                  aria-label="Something to settle"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ></a>
            <ol class="bcn-sw3it__entries" data-it-entries="">
              <li>
                <a
                  href="#o4"
                  data-it-entry="o4"
                  data-sub="s-night-work"
                  data-status="draft"
                  title="Limit post-construction nighttime traffic and work"
                  >Limit post-construction nighttime traffic and work</a
                >
              </li>
              <li>
                <a
                  href="#o5"
                  data-it-entry="o5"
                  data-sub="s-night-work"
                  data-status="draft"
                  title="Stop in-water work at night; pile drive 7 a.m. to 7 p.m. only"
                  >Stop in-water work at night; pile drive 7 a.m. to 7 p.m. only</a
                >
              </li>
              <li>
                <a
                  href="#o1"
                  data-it-entry="o1"
                  data-sub="s-night-work"
                  data-status="draft"
                  title="Shield and aim construction lighting down and away from habitat"
                  >Shield and aim construction lighting down and away from habitat</a
                >
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </details>
    <details class="esa-collapsible esa-collapsible--flush" open="">
      <summary class="esa-collapsible__summary typography-label-sm-strong">
        <span class="esa-collapsible__title">Wildlife handling and reporting</span>
      </summary>
      <div class="esa-collapsible__body typography-body-md">
        <ul class="bcn-sw3it__subs">
          <li class="bcn-sw3it__sub" data-it-sub="s-capture" data-state="draft">
            <a class="bcn-sw3it__subname" href="#s-capture" data-it-go="s-capture"
              ><span>Capture and relocation</span
              ><span class="bcn-sw3it__mark" data-it-mark="reviewed"
                ><span class="esa-icon esa-icon--xs" role="img" aria-label="Reviewed"
                  ><svg
                    width="14"
                    height="14"
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
              ><span class="bcn-sw3it__mark" data-it-mark="flagged"
                ><span
                  class="esa-icon esa-icon--xs"
                  role="img"
                  aria-label="Something to settle"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ></a>
            <ol class="bcn-sw3it__entries" data-it-entries="">
              <li>
                <a
                  href="#o6"
                  data-it-entry="o6"
                  data-sub="s-capture"
                  data-status="draft"
                  title="Capture and handle Covered Species only per the approved protocols"
                  >Capture and handle Covered Species only per the approved protocols</a
                >
              </li>
              <li>
                <a
                  href="#o7"
                  data-it-entry="o7"
                  data-sub="s-capture"
                  data-status="draft"
                  title="Keep capture and relocation records for each individual"
                  >Keep capture and relocation records for each individual</a
                >
              </li>
              <li>
                <a
                  href="#o8"
                  data-it-entry="o8"
                  data-sub="s-capture"
                  data-status="draft"
                  title="Excavate and relocate CTS from refuges"
                  >Excavate and relocate CTS from refuges</a
                >
              </li>
              <li>
                <a
                  href="#o9"
                  data-it-entry="o9"
                  data-sub="s-capture"
                  data-status="draft"
                  title="Relocate discovered CTS per the relocation plan"
                  >Relocate discovered CTS per the relocation plan</a
                >
              </li>
            </ol>
          </li>
          <li class="bcn-sw3it__sub" data-it-sub="s-injury" data-state="draft">
            <a class="bcn-sw3it__subname" href="#s-injury" data-it-go="s-injury"
              ><span>Injury and mortality</span
              ><span class="bcn-sw3it__mark" data-it-mark="reviewed"
                ><span class="esa-icon esa-icon--xs" role="img" aria-label="Reviewed"
                  ><svg
                    width="14"
                    height="14"
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
              ><span class="bcn-sw3it__mark" data-it-mark="flagged"
                ><span
                  class="esa-icon esa-icon--xs"
                  role="img"
                  aria-label="Something to settle"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ></a>
            <ol class="bcn-sw3it__entries" data-it-entries="">
              <li>
                <a
                  href="#o10"
                  data-it-entry="o10"
                  data-sub="s-injury"
                  data-status="draft"
                  title="Take injured Covered Species to an approved rehabilitation facility"
                  >Take injured Covered Species to an approved rehabilitation facility</a
                >
              </li>
              <li>
                <a
                  href="#o11"
                  data-it-entry="o11"
                  data-sub="s-injury"
                  data-status="draft"
                  title="Notify CDFW of any Covered Species injury"
                  >Notify CDFW of any Covered Species injury</a
                >
              </li>
              <li>
                <a
                  href="#o12"
                  data-it-entry="o12"
                  data-sub="s-injury"
                  data-status="draft"
                  title="Preserve dead Covered fish and deliver them to CDFW"
                  >Preserve dead Covered fish and deliver them to CDFW</a
                >
              </li>
              <li>
                <a
                  href="#a2"
                  data-it-entry="a2"
                  data-sub="s-injury"
                  data-status="draft"
                  title="Pay the cost of care for injured Covered Species"
                  >Pay the cost of care for injured Covered Species</a
                >
              </li>
            </ol>
          </li>
          <li class="bcn-sw3it__sub" data-it-sub="s-notices" data-state="draft">
            <a class="bcn-sw3it__subname" href="#s-notices" data-it-go="s-notices"
              ><span>Notices to CDFW</span
              ><span class="bcn-sw3it__mark" data-it-mark="reviewed"
                ><span class="esa-icon esa-icon--xs" role="img" aria-label="Reviewed"
                  ><svg
                    width="14"
                    height="14"
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
              ><span class="bcn-sw3it__mark" data-it-mark="flagged"
                ><span
                  class="esa-icon esa-icon--xs"
                  role="img"
                  aria-label="Something to settle"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ></a>
            <ol class="bcn-sw3it__entries" data-it-entries="">
              <li>
                <a
                  href="#o13"
                  data-it-entry="o13"
                  data-sub="s-notices"
                  data-status="draft"
                  title="Notify CDFW 7 days before dewatering that needs fish salvage"
                  >Notify CDFW 7 days before dewatering that needs fish salvage</a
                >
              </li>
              <li>
                <a
                  href="#o14"
                  data-it-entry="o14"
                  data-sub="s-notices"
                  data-status="draft"
                  title="Notify CDFW when salvage is complete"
                  >Notify CDFW when salvage is complete</a
                >
              </li>
              <li>
                <a
                  href="#o15"
                  data-it-entry="o15"
                  data-sub="s-notices"
                  data-status="draft"
                  title="Notify CDFW 60 days before in-water maintenance"
                  >Notify CDFW 60 days before in-water maintenance</a
                >
              </li>
              <li>
                <a
                  href="#o11"
                  data-it-entry="o11"
                  data-sub="s-notices"
                  data-status="draft"
                  title="Notify CDFW of any Covered Species injury"
                  >Notify CDFW of any Covered Species injury</a
                >
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </details>
    <details class="esa-collapsible esa-collapsible--flush" open="">
      <summary class="esa-collapsible__summary typography-label-sm-strong">
        <span class="esa-collapsible__title">California tiger salamander</span>
      </summary>
      <div class="esa-collapsible__body typography-body-md">
        <ul class="bcn-sw3it__subs">
          <li class="bcn-sw3it__sub" data-it-sub="s-cts-surveys" data-state="flagged">
            <a class="bcn-sw3it__subname" href="#s-cts-surveys" data-it-go="s-cts-surveys"
              ><span>Surveys</span
              ><span class="bcn-sw3it__mark" data-it-mark="reviewed"
                ><span class="esa-icon esa-icon--xs" role="img" aria-label="Reviewed"
                  ><svg
                    width="14"
                    height="14"
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
              ><span class="bcn-sw3it__mark" data-it-mark="flagged"
                ><span
                  class="esa-icon esa-icon--xs"
                  role="img"
                  aria-label="Something to settle"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ></a>
            <ol class="bcn-sw3it__entries" data-it-entries="">
              <li>
                <a
                  href="#a3"
                  data-it-entry="a3"
                  data-sub="s-cts-surveys"
                  data-status="draft"
                  title="Conduct preconstruction CTS protocol surveys at each site"
                  >Conduct preconstruction CTS protocol surveys at each site</a
                >
              </li>
              <li>
                <a
                  href="#o16"
                  data-it-entry="o16"
                  data-sub="s-cts-surveys"
                  data-status="draft"
                  title="Repeat CTS surveys every year of construction"
                  >Repeat CTS surveys every year of construction</a
                >
              </li>
              <li>
                <a
                  href="#o17"
                  data-it-entry="o17"
                  data-sub="s-cts-surveys"
                  data-status="draft"
                  title="Walk sites for CTS before clearing and during grading"
                  >Walk sites for CTS before clearing and during grading</a
                >
              </li>
              <li>
                <a
                  href="#a4"
                  data-it-entry="a4"
                  data-sub="s-cts-surveys"
                  data-status="draft"
                  title="Submit CTS survey results in the Construction Phase Authorization Package"
                  >Submit CTS survey results in the Construction Phase Authorization
                  Package</a
                >
              </li>
              <li>
                <a
                  href="#o9"
                  data-it-entry="o9"
                  data-sub="s-cts-surveys"
                  data-status="draft"
                  title="Relocate discovered CTS per the relocation plan"
                  >Relocate discovered CTS per the relocation plan</a
                >
              </li>
            </ol>
          </li>
          <li class="bcn-sw3it__sub" data-it-sub="s-cts-buffers" data-state="flagged">
            <a class="bcn-sw3it__subname" href="#s-cts-buffers" data-it-go="s-cts-buffers"
              ><span>Habitat buffers and speed</span
              ><span class="bcn-sw3it__mark" data-it-mark="reviewed"
                ><span class="esa-icon esa-icon--xs" role="img" aria-label="Reviewed"
                  ><svg
                    width="14"
                    height="14"
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
              ><span class="bcn-sw3it__mark" data-it-mark="flagged"
                ><span
                  class="esa-icon esa-icon--xs"
                  role="img"
                  aria-label="Something to settle"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ></a>
            <ol class="bcn-sw3it__entries" data-it-entries="">
              <li>
                <a
                  href="#o18"
                  data-it-entry="o18"
                  data-sub="s-cts-buffers"
                  data-status="draft"
                  title="Keep a 300-foot buffer around CTS breeding habitat"
                  >Keep a 300-foot buffer around CTS breeding habitat</a
                >
              </li>
              <li>
                <a
                  href="#o19"
                  data-it-entry="o19"
                  data-sub="s-cts-buffers"
                  data-status="draft"
                  title="Flag CTS breeding habitat and its 300-foot buffer"
                  >Flag CTS breeding habitat and its 300-foot buffer</a
                >
              </li>
              <li>
                <a
                  href="#o20"
                  data-it-entry="o20"
                  data-sub="s-cts-buffers"
                  data-status="draft"
                  title="Observe and post a 10 mph limit in CTS habitat"
                  >Observe and post a 10 mph limit in CTS habitat</a
                >
              </li>
              <li>
                <a
                  href="#o21"
                  data-it-entry="o21"
                  data-sub="s-cts-buffers"
                  data-status="draft"
                  title="Observe seasonal 10 mph limits for CTS and GGS"
                  >Observe seasonal 10 mph limits for CTS and GGS</a
                >
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </details>
  </div>
</nav>
```

## Styles
```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-sw3it {
  flex-direction: column;
  height: 100%;
  min-height: 0;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-sw3it__head {
  padding: var(--spacing-200) var(--spacing-200) var(--spacing-100) var(--spacing-400);
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.bcn-sw3it__title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
}
.bcn-sw3it__unfold {
  padding: var(--spacing-200);
  display: none;
}
.bcn-sw3it__body {
  min-height: 0;
  padding: 0 var(--spacing-400) var(--spacing-400);
  flex: 1;
  overflow-y: auto;
}
.bcn-sw3it__body .esa-collapsible__summary {
  font-size: 0.8125rem;
  font-weight: 600;
}
.bcn-sw3it__body .esa-collapsible__body {
  padding-top: 0;
  font-size: 0.8125rem;
}
.bcn-sw3it__subs,
.bcn-sw3it__entries {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-sw3it__subs {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
}
.bcn-sw3it__subname {
  align-items: center;
  gap: var(--spacing-100);
  padding: 3px var(--spacing-150);
  margin-inline: calc(-1 * var(--spacing-150));
  border-radius: var(--radius-100);
  color: var(--color-content-default);
  font-weight: 500;
  text-decoration: none;
  display: flex;
}
.bcn-sw3it__subname:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-sw3it__sub[data-current] > .bcn-sw3it__subname {
  background: var(--color-background-elevation-sunken);
  font-weight: 600;
}
.bcn-sw3it__mark {
  margin-left: auto;
  line-height: 0;
  display: none;
}
.bcn-sw3it__sub[data-state="reviewed"] [data-it-mark="reviewed"] {
  color: var(--color-content-success);
  display: inline-flex;
}
.bcn-sw3it__sub[data-state="reviewed"][data-none] [data-it-mark="reviewed"] {
  color: var(--color-content-default-tertiary);
}
.bcn-sw3it__sub[data-state="flagged"] [data-it-mark="flagged"] {
  color: var(--color-content-warning);
  display: inline-flex;
}
.bcn-sw3it__entries {
  padding-left: var(--spacing-300);
}
.bcn-sw3it__entries a {
  color: var(--color-content-default-secondary);
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1px 0;
  text-decoration: none;
  display: block;
  overflow: hidden;
}
.bcn-sw3it__entries a:hover {
  color: var(--color-content-default);
  text-decoration: underline;
}
.bcn-sw3it__entries a[data-status="discarded"] {
  color: var(--color-content-default-tertiary);
  text-decoration: line-through;
}
.bcn-sw3it__entries a[data-current] {
  color: var(--color-content-default);
  font-weight: 600;
}
[data-index="closed"] .bcn-sw3it__head,
[data-index="closed"] .bcn-sw3it__body {
  display: none;
}
[data-index="closed"] .bcn-sw3it__unfold {
  display: block;
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: var(--_aldo-gap);
}
.bcn-aldo-panel__side .bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: 0 var(--spacing-200);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-success`: #218358 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-content-warning`: #ab6400 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-subtle-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
