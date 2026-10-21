# Detail

Obligation list PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/construction-kickoff-summary/

![Detail, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-construction-kickoff-summary/claude/detail.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-construction-kickoff-summary/claude/detail.phone.png

Every obligation in full, from a new page: category heading with a rule, subcategory heading, then each obligation's title with its commitment codes at the right margin, its description, and one row of facts (Class, Audience, Applies When).

## Key decisions

- The detail starts with `break-before: page` (the pdf-template skill's `.page-break-before`).
- The list draws the divider between obligations, not the obligation: a rule on every entry after the first. The first entry under a heading needs no exception.
- Commitment codes sit at the right of the title, the way a citation sits at a margin, so there is no commitments column in the detail.
- Each obligation keeps together (`break-inside: avoid`, the skill's `.avoid-break`); headings never end a page (`break-after: avoid`).

## Done when

- No obligation splits across two pages; no heading prints at the foot of a page without its first entry.

## Components

- `bcn-doc-entry` (spoke) · `src/components/bcn/BcnDocEntry.astro`
- `bcn-doc-facts` (spoke) · `src/components/bcn/BcnDocFacts.astro`
- `bcn-doc-groups` (spoke) · `src/components/bcn/BcnDocGroups.astro`

## Markup

_16 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-doc-groups">
  <section class="bcn-doc-groups__group">
    <h2 class="bcn-doc-groups__h2">Hazards</h2>
    <section class="bcn-doc-groups__section">
      <h3 class="bcn-doc-groups__h3">Fire prevention</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Fire Suppression Supplies On Site</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.18</p>
            </div>
            <p class="bcn-doc-entry__desc">
              An extinguisher and a shovel ride with every crew working in dry vegetation.
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Applies When</dt>
                  <dd>
                    During construction of the Bethany Complex or while undertaking maintenance
                    activities within the Bethany Complex
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Vegetation clearing method for fire prevention</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.18</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Hand removal of vegetation and/or weed whacking are the authorized methods for
              vegetation removal along access roads, staging areas, and work areas within the
              Bethany Complex prior to allowing heavy equipment and vehicles to access these project
              sites after Covered Species preconstruction surveys and installment of wildlife
              exclusion barriers.
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Applies When</dt>
                  <dd>
                    Prior to allowing heavy equipment and vehicles to access these project sites
                    after Covered Species preconstruction surveys and installment of wildlife
                    exclusion barrier
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Vegetation Clearing Method for Fire Prevention</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.18</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Non-living vegetative debris shall be cleared from around the immediate work
              footprint.
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="bcn-doc-groups__section">
      <h3 class="bcn-doc-groups__h3">Chemicals and fuels on site</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Concrete Washwater Containment</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22, COA 11.26</p>
            </div>
            <p class="bcn-doc-entry__desc">
              storage of concrete, wash water, and other contaminants in watertight containment
              structures
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Contaminated Soil Segregation and Removal</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.21</p>
            </div>
            <p class="bcn-doc-entry__desc">
              segregation, containment, and removal of contaminated soils to the approved disposal
              site
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
              </dl>
            </div>
          </article>
          <!-- …and 6 more like this (<article class="bcn-doc-entry">) -->
        </div>
      </div>
    </section>
    <!-- …and 2 more like this (<section class="bcn-doc-groups__section">) -->
  </section>
  <section class="bcn-doc-groups__group">
    <h2 class="bcn-doc-groups__h2">Lighting</h2>
    <section class="bcn-doc-groups__section">
      <h3 class="bcn-doc-groups__h3">Lighting near habitat and waters</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">
                Access road location assessment before visual barrier installation
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.10</p>
            </div>
            <p class="bcn-doc-entry__desc">
              The Designated Biologist(s) and/or Biological Monitor(s) shall assess the locations of
              the identified access roads prior to the installation of any visual barriers.
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Monitor</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Monitors</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Applies When</dt>
                  <dd>Prior to the installation of any visual barriers</dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">
                Intake Lighting Restricted from the River Channel
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.9</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Temporary lighting on the north Delta intake structure or buildings associated with
              the north Delta intakes may be utilized for CDFW approved construction phase nighttime
              Covered Activities.
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Applies When</dt>
                  <dd>
                    During approved construction phase Covered Activities shall not be positioned
                    such that lux can intersect the river channel, to the greatest extent possible
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <!-- …and 2 more like this (<article class="bcn-doc-entry">) -->
        </div>
      </div>
    </section>
  </section>
  <section class="bcn-doc-groups__group">
    <h2 class="bcn-doc-groups__h2">Site conduct</h2>
    <section class="bcn-doc-groups__section">
      <h3 class="bcn-doc-groups__h3">Access routes and parking</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Equipment Confined to Access Routes</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.55.1, COA 11.69</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Project-related vehicles shall access the Project construction site(s) during Covered
              Activities using existing routes and shall not cross GGS habitat outside of the
              Project construction site(s) unless otherwise authorized by CDFW.
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Applies When</dt>
                  <dd>
                    During Covered Activities using existing routes and shall not cross GGS habitat
                    outside of the Project construction site(s) unless otherwise authorized by CDFW
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Equipment confined to designated access routes</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.41, COA 11.65</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Permittee shall confine movement of heavy equipment to existing or CDFW-approved
              access roads or to locations at least 75 feet from flagged burrows.
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
              </dl>
            </div>
          </article>
          <!-- …and 3 more like this (<article class="bcn-doc-entry">) -->
        </div>
      </div>
    </section>
    <section class="bcn-doc-groups__section">
      <h3 class="bcn-doc-groups__h3">Personal items and conduct</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">No Pets, Campfires or Firearms On Site</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.20</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Permittee shall not permit pets, campfires, or firearms in Project construction sites
              and site access routes, except firearms carried by authorized security personnel or
              local, state, or federal law enforcement officials.
            </p>
            <div class="bcn-doc-entry__facts">
              <dl class="bcn-doc-facts bcn-doc-facts--entry">
                <div class="bcn-doc-facts__pair">
                  <dt>Class</dt>
                  <dd>Adhere</dd>
                </div>
                <div class="bcn-doc-facts__pair">
                  <dt>Audience</dt>
                  <dd>Crews</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- …and 3 more like this (<section class="bcn-doc-groups__section">) -->
  </section>
</div>
```

## Styles

```css
.bcn-doc-facts {
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-doc-facts--entry {
  gap: var(--spacing-050) var(--spacing-500);
  font-size: var(--bcn-print-font-size-meta);
}
.bcn-doc-facts__pair {
  gap: var(--spacing-150);
  min-inline-size: 0;
  display: flex;
}
.bcn-doc-facts dt {
  white-space: nowrap;
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-doc-facts dd {
  min-inline-size: 0;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-doc-entry {
  padding-block: var(--spacing-250);
  break-inside: avoid;
}
.bcn-doc-entry__head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-500);
  display: flex;
}
.bcn-doc-entry__title {
  font-size: var(--bcn-print-font-size-entry);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-doc-entry__codes {
  text-align: end;
  max-inline-size: 40%;
  font-size: var(--bcn-print-font-size-meta);
  color: var(--color-content-default-secondary);
  flex: none;
  margin: 0;
}
.bcn-doc-entry__desc {
  margin: var(--spacing-100) 0 0;
  max-inline-size: 46em;
}
.bcn-doc-entry__facts {
  margin-block-start: var(--spacing-150);
}
.bcn-doc-groups {
  break-before: page;
}
.bcn-doc-groups__group + .bcn-doc-groups__group {
  margin-block-start: var(--spacing-600);
}
.bcn-doc-groups__h2 {
  border-block-end: 1px solid var(--color-content-default);
  font-size: var(--bcn-print-font-size-group);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-default);
  break-after: avoid;
  margin: 0;
  padding-block-end: var(--spacing-150);
}
.bcn-doc-groups__section {
  margin-block-start: var(--spacing-400);
}
.bcn-doc-groups__h3 {
  margin: 0 0 var(--spacing-100);
  font-size: var(--bcn-print-font-size-subgroup);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  break-after: avoid;
}
.bcn-doc-groups__run + .bcn-doc-groups__run {
  margin-block-start: var(--spacing-300);
}
.bcn-doc-groups__entries > * + * {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-print-font-size-entry` | `9.5pt` | component |
| `--bcn-print-font-size-group` | `13pt` | component |
| `--bcn-print-font-size-meta` | `8pt` | component |
| `--bcn-print-font-size-subgroup` | `10.5pt` | component |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--line-height-tight` | `1.3` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
