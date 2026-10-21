# Detail

Every obligation in full, from a new page: category heading with a rule, subcategory heading, then each obligation's title with its commitment codes at the right margin, its description, and one row of facts (Class, Audience, Applies When).

## Key decisions
- The detail starts with `break-before: page` (the pdf-template skill's `.page-break-before`).
- The list draws the divider between obligations, not the obligation: a rule on every entry after the first. The first entry under a heading needs no exception.
- Commitment codes sit at the right of the title, the way a citation sits at a margin, so there is no commitments column in the detail.
- Each obligation keeps together (`break-inside: avoid`, the skill's `.avoid-break`); headings never end a page (`break-after: avoid`).

## Done when
- No obligation splits across two pages; no heading prints at the foot of a page without its first entry.

## Markup
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
                    During construction of the Bethany Complex or while undertaking
                    maintenance activities within the Bethany Complex
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">
                Vegetation clearing method for fire prevention
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.18</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Hand removal of vegetation and/or weed whacking are the authorized methods
              for vegetation removal along access roads, staging areas, and work areas
              within the Bethany Complex prior to allowing heavy equipment and vehicles to
              access these project sites after Covered Species preconstruction surveys and
              installment of wildlife exclusion barriers.
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
                    Prior to allowing heavy equipment and vehicles to access these project
                    sites after Covered Species preconstruction surveys and installment of
                    wildlife exclusion barrier
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">
                Vegetation Clearing Method for Fire Prevention
              </h4>
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
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.22, COA 11.26
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              storage of concrete, wash water, and other contaminants in watertight
              containment structures
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
              <h4 class="bcn-doc-entry__title">
                Contaminated Soil Segregation and Removal
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.21</p>
            </div>
            <p class="bcn-doc-entry__desc">
              segregation, containment, and removal of contaminated soils to the approved
              disposal site
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
              <h4 class="bcn-doc-entry__title">
                Database of historic contamination and hazardous materials inspections
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.21</p>
            </div>
            <p class="bcn-doc-entry__desc">
              A database on known historic instances of contamination and results of any
              field inspections regarding the presence of hazardous materials shall be
              maintained.
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
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Hazardous Materials Container Labeling</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.21</p>
            </div>
            <p class="bcn-doc-entry__desc">
              clear labeling, handling, and safety instructions, and emergency contact
              information on hazardous material containers
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
              <h4 class="bcn-doc-entry__title">
                Hazardous Materials in Designated Storage
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.21</p>
            </div>
            <p class="bcn-doc-entry__desc">
              storage of fuel, oil, and other petroleum products at designated sites for
              hazardous materials
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
              <h4 class="bcn-doc-entry__title">
                Hazardous Materials Storage Duration Limit
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.21</p>
            </div>
            <p class="bcn-doc-entry__desc">
              prohibition of the accumulation and temporary storage of hazardous materials
              exceeding 90 days
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
              <h4 class="bcn-doc-entry__title">
                Material Safety Data Sheets provided to site personnel
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.21</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Material Safety Data Sheets provided to all Project site personnel
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
              <h4 class="bcn-doc-entry__title">Petroleum Storage Containment</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22</p>
            </div>
            <p class="bcn-doc-entry__desc">
              storage of petroleum products in non-leaking containers at impervious
              storage sites from which an accidental spills cannot escape
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
      <h3 class="bcn-doc-groups__h3">Refueling and equipment servicing</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">
                Daily contaminant leak check and maintenance of vehicles and equipment
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.13</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Any equipment or vehicles driven and/or operated in or adjacent to Project
              construction sites shall be checked daily and maintained in good working
              order to prevent the release of contaminants that, if introduced to water,
              could be deleterious to aquatic life, wildlife, or riparian habitat.
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
                  <dd>
                    If introduced to water, could be deleterious to aquatic life,
                    wildlife, or riparian habitat
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">
                Daily inspection of equipment in contact with water for petroleum leaks
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22</p>
            </div>
            <p class="bcn-doc-entry__desc">
              daily inspection of equipment for oil, grease, and other petroleum products
              if equipment is in contact with water
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
                  <dd>If equipment is in contact with water</dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Fuel Transfer Containment</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22</p>
            </div>
            <p class="bcn-doc-entry__desc">
              using spills containment materials under transfer areas when transferring
              oil or other hazardous materials from trucks to storage containers
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
                    When transferring oil or other hazardous materials from trucks to
                    storage containers
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Refueling Practices</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.13</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Refuel at least 100 feet from any water body, over secondary containment,
              with an attendant present.
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
              <h4 class="bcn-doc-entry__title">Refueling Setback from Water</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.13</p>
            </div>
            <p class="bcn-doc-entry__desc">
              All reserve fuel supplies shall be stored only within the confines of the
              designated staging areas, a minimum of 200 feet from surface waters and
              other sensitive habitats, such as wetlands.
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
      <h3 class="bcn-doc-groups__h3">Spill prevention and response</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">
                Equipment Cleaning Before Water Contact
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22</p>
            </div>
            <p class="bcn-doc-entry__desc">
              cleaning of external petroleum products off of equipment prior to its
              contact to water
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
                  <dd>Prior to its contact to water</dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Oil Absorbent Booms in Place</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22</p>
            </div>
            <p class="bcn-doc-entry__desc">
              use of oil- absorbent booms for equipment used in or adjacent to water
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
              <h4 class="bcn-doc-entry__title">Spill Containment and Response</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22</p>
            </div>
            <p class="bcn-doc-entry__desc">
              In the event of an accidental spill, personnel shall identify and secure the
              source of the discharge and contain the discharge with sorbents, sandbags,
              or other material from spill kits
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
                    In the event of an accidental spill, personnel shall identify and
                    secure the source of the discharge and contain the discharge with
                    sorbents, sandbags, or other material fr
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Spill Kits On Site</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.21, COA 11.22
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              Keep a stocked spill kit within reach of every fuel transfer and every piece
              of equipment working over water.
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
              <h4 class="bcn-doc-entry__title">Spill Kits On Site</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.21, COA 11.22
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              At shift end, confirm every kit drawn from today was restocked before the
              crew leaves.
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
              <h4 class="bcn-doc-entry__title">Spill Response</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.14</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Permittee shall immediately stop and, pursuant to pertinent state and
              federal statutes and regulations, arrange for repair and clean up by
              qualified individuals of any fuel or hazardous waste leaks or spills at the
              time of occurrence, or as soon as it is safe to do so.
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
              <h4 class="bcn-doc-entry__title">Staging Area Spill Containment</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22</p>
            </div>
            <p class="bcn-doc-entry__desc">
              containment of contaminants in staging areas designed so that should an
              accidental spill occur, contaminants do not drain toward receiving waters or
              storm drain inlets; and staging of all stationary equipment in appropriate
              staging areas and positioned over drip pans.
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
                    Should an accidental spill occur, contaminants do not drain toward
                    receiving waters or storm drain inlets
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
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
              The Designated Biologist(s) and/or Biological Monitor(s) shall assess the
              locations of the identified access roads prior to the installation of any
              visual barriers.
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
              Temporary lighting on the north Delta intake structure or buildings
              associated with the north Delta intakes may be utilized for CDFW approved
              construction phase nighttime Covered Activities.
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
                    During approved construction phase Covered Activities shall not be
                    positioned such that lux can intersect the river channel, to the
                    greatest extent possible
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Lighting Color Near Habitat</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.8</p>
            </div>
            <p class="bcn-doc-entry__desc">
              All construction lighting used within 500 feet of Covered Species suitable
              habitat shall be yellow or orange lighting.
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
              <h4 class="bcn-doc-entry__title">Night Lighting Spill Control</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.8, COA 11.47
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              Shield and aim every night fixture down and inward. No light crosses the
              work-area boundary.
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
                    If night work is required within a Project construction site after
                    exclusion barriers have been installed, Permittee shall not use
                    artificial lighting unless it i
                  </dd>
                </div>
              </dl>
            </div>
          </article>
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
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.55.1, COA 11.69
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              Project-related vehicles shall access the Project construction site(s)
              during Covered Activities using existing routes and shall not cross GGS
              habitat outside of the Project construction site(s) unless otherwise
              authorized by CDFW.
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
                    During Covered Activities using existing routes and shall not cross
                    GGS habitat outside of the Project construction site(s) unless
                    otherwise authorized by CDFW
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">
                Equipment confined to designated access routes
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.41, COA 11.65
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              Permittee shall confine movement of heavy equipment to existing or
              CDFW-approved access roads or to locations at least 75 feet from flagged
              burrows.
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
              <h4 class="bcn-doc-entry__title">
                Equipment Storage Setback from Aquatic Habitat
              </h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.11</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Permittee shall store equipment, supplies, and vehicles, and conduct vehicle
              and equipment services within the Project construction site at least 200
              feet from suitable Covered Species aquatic habitat and/or other designated
              staging/storage areas.
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
              <h4 class="bcn-doc-entry__title">Staging Area Confinement</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.11</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Permittee shall confine all Project-related parking, storage areas, laydown
              sites, equipment storage, and any other surface-disturbing activities to the
              Project construction site using, to the extent possible, previously
              disturbed areas such as paved or previously cleared areas.
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
              <h4 class="bcn-doc-entry__title">Use of Established Access Routes</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 9.10, COA 9.11
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              All Project personnel shall access the Project construction site and any
              Project maintenance area using existing and established routes identified in
              the Project Description and shall not cross Covered Species’ habitat outside
              of or enroute to the Project construction site or maintenance area unless
              authorized by CDFW through Conditions of Approval in this ITP.
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
      <h3 class="bcn-doc-groups__h3">Personal items and conduct</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">No Pets, Campfires or Firearms On Site</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.20</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Permittee shall not permit pets, campfires, or firearms in Project
              construction sites and site access routes, except firearms carried by
              authorized security personnel or local, state, or federal law enforcement
              officials.
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
      <h3 class="bcn-doc-groups__h3">Speed limits</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Nighttime Speed Limit</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.11</p>
            </div>
            <p class="bcn-doc-entry__desc">
              After dark, 15 mph on every unpaved surface inside the work area, including
              haul roads.
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
              <h4 class="bcn-doc-entry__title">Paved Road Speed Limit</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.11</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Project vehicles shall observe a maximum speed limit of 10 miles per hour on
              unpaved non-public Project access roads and in construction and maintenance
              sites.
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
              <h4 class="bcn-doc-entry__title">Speed Limit Near Habitat</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.11, COA 11.39.1, COA 11.55.1
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              Project vehicles shall observe a 10 mile per hour speed limit on paved,
              non-public access roads where they occur within 200 feet of GGS habitat
              during the active season (May 1 – October 1) except where exclusion fencing
              has been installed, in which case Project vehicles may observe a speed limit
              of up to 30 miles per hour.
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
                    During the active season (May 1 – October 1) except where exclusion
                    fencing has been installed, in which case Project vehicles may observe
                    a speed limit of up to 30 m
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Speed Limit Posting</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.11</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Speeds limits shall be enforced and posted in both directions.
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
                  <dd>During Project construction, operations, and maintenance</dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Unpaved Road Speed Limit</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.11, COA 11.29
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              20 mph on unpaved roads in daylight. Posted at each gate.
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
              <h4 class="bcn-doc-entry__title">Wildlife Crossing Signage</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.11</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Speeds limits shall be enforced and posted in both directions.
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
                  <dd>During Project construction, operations, and maintenance</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="bcn-doc-groups__section">
      <h3 class="bcn-doc-groups__h3">Trash and food waste</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Covered Food Waste Containers</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.20</p>
            </div>
            <p class="bcn-doc-entry__desc">
              To avoid attracting predators, Permittee shall ensure Project personnel
              dispose of all food-related trash items such as packaging, cans, bottles,
              and food scraps in enclosed containers.
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
              <h4 class="bcn-doc-entry__title">Trash Abatement</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.6</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Permittee shall initiate a trash abatement program before starting Covered
              Activities and shall continue the program for the duration of the Project.
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
                    Before starting Covered Activities and shall continue the program for
                    the duration of the Project
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Trash Load Covering</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.20</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Vehicles carrying trash shall have loads covered and secured to prevent
              trash and debris from falling onto roads and adjacent properties.
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
              <h4 class="bcn-doc-entry__title">Trash Removal Cadence</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.20</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Haul all trash off site at the end of every shift. Nothing stays overnight.
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
                    Once a week from the construction or Project site (see Condition of
                    Approval 9
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="bcn-doc-groups__section">
      <h3 class="bcn-doc-groups__h3">Work hours</h3>
      <div class="bcn-doc-groups__run">
        <div class="bcn-doc-groups__entries">
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Daytime Work Hour Limit</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">
                COA 11.7, COA 11.46
              </p>
            </div>
            <p class="bcn-doc-entry__desc">
              During the CTS active season or within 300 feet of suitable CTS aquatic
              habitat, Permittee shall terminate all Covered Activities not encircled by
              an exclusion barrier, including use and/or construction of access roads for
              preconstruction activities, SCADA and transmission line construction and
              maintenance, and facility maintenance no less than 30 minutes before sunset
              and shall not resume Covered Activities until 30 minutes after sunrise.
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
                    During the CTS active season or within 300 feet of suitable CTS
                    aquatic habitat, Permittee shall terminate all Covered Activities not
                    encircled by an exclusion barrie
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article class="bcn-doc-entry" data-doc-entry="obligation">
            <div class="bcn-doc-entry__head">
              <h4 class="bcn-doc-entry__title">Night Vehicle Travel Caution</h4>
              <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.7</p>
            </div>
            <p class="bcn-doc-entry__desc">
              Any vehicle traffic necessary during nighttime hours associated with
              emergency response, security, or operations and maintenance activities
              subsequent to construction shall be conducted with extra caution to minimize
              impacts to nocturnal Covered Species.
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
                    During nighttime hours associated with emergency response, security,
                    or operations and maintenance activities subsequent to construction
                    shall be conducted with extra
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
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
.bcn-doc-facts--title {
  gap: var(--spacing-100) var(--spacing-500);
  font-size: var(--bcn-print-font-size-body);
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
.bcn-doc-entry__reqs {
  margin: var(--spacing-150) 0 0;
  padding: 0;
  list-style: none;
}
.bcn-doc-entry__req + .bcn-doc-entry__req {
  margin-block-start: var(--spacing-150);
}
.bcn-doc-entry__req-name {
  font-weight: var(--typography-font-weight-medium);
  margin: 0;
}
.bcn-doc-entry__req-text {
  margin: var(--spacing-050) 0 0;
  max-inline-size: 46em;
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
.bcn-doc-groups__h4 {
  padding-block: var(--spacing-100);
  font-size: var(--bcn-print-font-size-meta);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  break-after: avoid;
  margin: 0;
}
.bcn-doc-groups__entries > * + * {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
```

## Tokens
- `--bcn-print-font-size-body`: 9pt _(component)_
- `--bcn-print-font-size-entry`: 9.5pt _(component)_
- `--bcn-print-font-size-group`: 13pt _(component)_
- `--bcn-print-font-size-meta`: 8pt _(component)_
- `--bcn-print-font-size-subgroup`: 10.5pt _(component)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
