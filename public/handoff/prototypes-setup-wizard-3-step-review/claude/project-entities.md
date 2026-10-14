# Project entities

Entities are reviewed once per project. Proposed merges first: the phrasings Beacon clusters as one concept, how many commitments use them and how many a merge changes, Merge or Keep separate. Below, milestones, seasons, construction activities and species with the commitments that use each.

## Key decisions
- Case and punctuation fold by code before any proposal ("initiation of Covered Activities" is the same entity); merges are meaning-level.
- The four merges are the extraction's own: four phrasings of Initiation of Covered Activities, the in-water variant, and three phrasings each of the GGS active season and the dry season.

## Done when
- Merge "Initiation of Covered Activities": the toast reports 4 commitments updated and their Merge proposed flags clear.

## Markup
```html
<esa-side-dialog
  class="bcn-sw3ent"
  data-sw3-entities="true"
  heading="Project entities"
  size="lg"
  position="right"
  open=""
  ><div class="bcn-sw3ent__body">
    <section class="bcn-sw3ent__merges" data-ent-merges-wrap="">
      <h3 class="typography-title-strong">Proposed merges</h3>
      <ol class="bcn-sw3ent__list" data-ent-merges="">
        <li class="bcn-sw3ent__merge" data-merge="merge:initiation-of-covered-activities">
          <p class="bcn-sw3ent__into typography-label-md-strong" data-m-into="">
            Initiation of Covered Activities
          </p>
          <ul class="bcn-sw3ent__from" data-m-from="">
            <li class="typography-body-sm">start of Covered Activities</li>
            <li class="typography-body-sm">start of any Covered Activity</li>
            <li class="typography-body-sm">Initiation of Covered Activity</li>
            <li class="typography-body-sm">Start of the Covered Activity</li>
          </ul>
          <p class="bcn-sw3ent__uses typography-microcopy-md" data-m-uses="">
            Used by 24 commitments. Merging updates 4.
          </p>
          <div class="bcn-sw3ent__acts" data-m-acts="">
            <span data-action="accept"
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Merge</span>
                </button></span
              ></span
            ><span data-action="dismiss"
              ><span
                class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Keep separate</span>
                </button></span
              ></span
            ><span class="bcn-sw3ent__state typography-label-md" data-m-done="" hidden=""
              >Merged</span
            >
          </div>
        </li>
        <li
          class="bcn-sw3ent__merge"
          data-merge="merge:initiation-of-in-water-covered-activities"
        >
          <p class="bcn-sw3ent__into typography-label-md-strong" data-m-into="">
            Initiation of In-Water Covered Activities
          </p>
          <ul class="bcn-sw3ent__from" data-m-from="">
            <li class="typography-body-sm">Initiation of In-Water Covered Activity</li>
          </ul>
          <p class="bcn-sw3ent__uses typography-microcopy-md" data-m-uses="">
            Used by 3 commitments. Merging updates 2.
          </p>
          <div class="bcn-sw3ent__acts" data-m-acts="">
            <span data-action="accept"
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Merge</span>
                </button></span
              ></span
            ><span data-action="dismiss"
              ><span
                class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Keep separate</span>
                </button></span
              ></span
            ><span class="bcn-sw3ent__state typography-label-md" data-m-done="" hidden=""
              >Merged</span
            >
          </div>
        </li>
        <li
          class="bcn-sw3ent__merge"
          data-merge="merge:ggs-active-season-may-1-october-1"
        >
          <p class="bcn-sw3ent__into typography-label-md-strong" data-m-into="">
            GGS active season (May 1 – October 1)
          </p>
          <ul class="bcn-sw3ent__from" data-m-from="">
            <li class="typography-body-sm">Active season (May 1 to October 1)</li>
            <li class="typography-body-sm">GGS active period, May 1 – October 1</li>
          </ul>
          <p class="bcn-sw3ent__uses typography-microcopy-md" data-m-uses="">
            Used by 3 commitments. Merging updates 2.
          </p>
          <div class="bcn-sw3ent__acts" data-m-acts="">
            <span data-action="accept"
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Merge</span>
                </button></span
              ></span
            ><span data-action="dismiss"
              ><span
                class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Keep separate</span>
                </button></span
              ></span
            ><span class="bcn-sw3ent__state typography-label-md" data-m-done="" hidden=""
              >Merged</span
            >
          </div>
        </li>
        <li class="bcn-sw3ent__merge" data-merge="merge:dry-season-july-15-october-15">
          <p class="bcn-sw3ent__into typography-label-md-strong" data-m-into="">
            Dry season (July 15 – October 15)
          </p>
          <ul class="bcn-sw3ent__from" data-m-from="">
            <li class="typography-body-sm">July 15 – October 15 (dry season)</li>
            <li class="typography-body-sm">“Dry season,” July 15 – Oct 15</li>
          </ul>
          <p class="bcn-sw3ent__uses typography-microcopy-md" data-m-uses="">
            Used by 3 commitments. Merging updates 2.
          </p>
          <div class="bcn-sw3ent__acts" data-m-acts="">
            <span data-action="accept"
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Merge</span>
                </button></span
              ></span
            ><span data-action="dismiss"
              ><span
                class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Keep separate</span>
                </button></span
              ></span
            ><span class="bcn-sw3ent__state typography-label-md" data-m-done="" hidden=""
              >Merged</span
            >
          </div>
        </li>
      </ol>
    </section>
    <section class="bcn-sw3ent__kind">
      <h3 class="typography-title-strong">Milestones</h3>
      <ol class="bcn-sw3ent__list" data-ent-kind="milestone">
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Initiation of Covered Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">20 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Initiating Covered Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">3 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md"
            >Initiation of Ground Disturbing Covered Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">3 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Commencement of Covered Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Construction Phase Authorization Package</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Earthmoving activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Initiation of In-Water Covered Activity</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Phase 1 Operations</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Trenching activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Completion of Construction</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Completion of Covered Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Completion of dewatering</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Completion of Temporary Impact Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Construction Phase Authorization</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md"
            >Excavating or filling the dewatered habitat</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md"
            >Finalization of Project Engineering Design</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">finding the injured or killed CBB</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Habitat confirmed free of GGS</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">initial notification to CDFW</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Initiation of Covered Activity</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Initiation of Earthmoving Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Initiation of In-Water Covered Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Initiation of Preconstruction Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md"
            >initiation of preconstruction Covered Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Phase Authorization Package</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">start of any Covered Activity</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">start of Covered Activities</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Start of the Covered Activity</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Trenching for barrier installation</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
      </ol>
    </section>
    <section class="bcn-sw3ent__kind">
      <h3 class="typography-title-strong">Seasons</h3>
      <ol class="bcn-sw3ent__list" data-ent-kind="season">
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Dry season (July 15 – October 15)</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">GGS inactive season</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">“Dry season,” July 15 – Oct 15</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Active season (May 1 to October 1)</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">CTS active season</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">GGS active period, May 1 – October 1</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">GGS active season (May 1 – October 1)</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">July 15 – October 15 (dry season)</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
      </ol>
    </section>
    <section class="bcn-sw3ent__kind">
      <h3 class="typography-title-strong">Construction Activities</h3>
      <ol class="bcn-sw3ent__list" data-ent-kind="activity">
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Wildlife capture, handling and relocation</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">30 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Surveys and habitat assessments</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">26 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md"
            >Exclusion fencing and flagging installation</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">22 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Notifications and reporting</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">20 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Site clearing and vegetation removal</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">19 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Ground disturbance and grading</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">15 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Water diversions and intake operations</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">12 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Excavation and trenching</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">10 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Access road and route construction</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">8 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Restoration and planting</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">8 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Transmission and power line work</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">8 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Vehicle travel on site</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">8 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Compliance monitoring and inspections</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">7 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Burrow and roost exclusion</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">6 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Night work</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">6 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Staging and laydown</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">5 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Stockpiling and spoils handling</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">5 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Training and personnel qualification</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">5 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Facility operations and maintenance</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">4 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">In-water and in-channel work</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">4 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Geotechnical investigations and drilling</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">3 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Hazardous materials handling and storage</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">3 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Heavy equipment operation</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">3 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Pile driving</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">3 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Concrete work and batch plants</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Dewatering and fish isolation</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Hauling and deliveries</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Helicopter operations</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Waste and trash handling</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">2 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Barge and vessel operations</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Fertilizer application</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Pesticide and herbicide application</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Pipe and culvert installation</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Rodenticide and poison use</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
      </ol>
    </section>
    <section class="bcn-sw3ent__kind">
      <h3 class="typography-title-strong">Species</h3>
      <ol class="bcn-sw3ent__list" data-ent-kind="species">
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">California Tiger Salamander</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">28 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Giant Garter Snake</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">25 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Tricolored Blackbird</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">15 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Swainson’s Hawk</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">14 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Crotch Bumble Bee</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">11 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">spring-run Chinook salmon</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">7 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">winter-run Chinook salmon</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">7 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Delta smelt</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">6 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">longfin smelt</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">6 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">Mason’s lilaeopsis</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">6 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">white sturgeon</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">6 commitments</span>
        </li>
        <li class="bcn-sw3ent__row">
          <span class="typography-body-md">bullfrogs</span
          ><span class="bcn-sw3ent__count typography-microcopy-md">1 commitment</span>
        </li>
      </ol>
    </section>
  </div>
  <template data-ent-merge=""
    ><li class="bcn-sw3ent__merge" data-astro-cid-jewgz5lu="">
      <p
        class="bcn-sw3ent__into typography-label-md-strong"
        data-m-into=""
        data-astro-cid-jewgz5lu=""
      ></p>
      <ul class="bcn-sw3ent__from" data-m-from="" data-astro-cid-jewgz5lu=""></ul>
      <p
        class="bcn-sw3ent__uses typography-microcopy-md"
        data-m-uses=""
        data-astro-cid-jewgz5lu=""
      ></p>
      <div class="bcn-sw3ent__acts" data-m-acts="" data-astro-cid-jewgz5lu="">
        <span data-action="accept" data-astro-cid-jewgz5lu=""
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
            data-astro-cid-4xhmycw5=""
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-astro-cid-jewgz5lu="true"
              data-astro-cid-4xhmycw5=""
            >
              <span class="esa-button__label" data-astro-cid-4xhmycw5="">Merge</span>
            </button></span
          ></span
        ><span data-action="dismiss" data-astro-cid-jewgz5lu=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            data-astro-cid-4xhmycw5=""
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-astro-cid-jewgz5lu="true"
              data-astro-cid-4xhmycw5=""
            >
              <span class="esa-button__label" data-astro-cid-4xhmycw5=""
                >Keep separate</span
              >
            </button></span
          ></span
        ><span
          class="bcn-sw3ent__state typography-label-md"
          data-m-done=""
          hidden=""
          data-astro-cid-jewgz5lu=""
          >Merged</span
        >
      </div>
    </li></template
  ></esa-side-dialog
>
```

## Styles
```css
/* Type comes from .typography-body-sm on the element.

       Both nodes are always in the DOM (the live region has to pre-exist its content),
       so the gap is opt-IN via .is-shown rather than collapsed with :empty — Lit's
       template whitespace defeats :empty in engines that follow Selectors L3. */
.help,
.error {
  margin: 0;
}
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
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
.bcn-sw3ent__body {
  gap: var(--spacing-600);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ent__body h3 {
  margin: 0 0 var(--spacing-200);
}
.bcn-sw3ent__merges[hidden] {
  display: none;
}
.bcn-sw3ent__list {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3ent__list .bcn-sw3ent__merge {
  gap: var(--spacing-200);
  padding: var(--spacing-300) 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ent__list .bcn-sw3ent__merge[data-flash] {
  background: var(--color-background-warning-subtle);
}
.bcn-sw3ent__list .bcn-sw3ent__into,
.bcn-sw3ent__list .bcn-sw3ent__uses {
  margin: 0;
}
.bcn-sw3ent__list .bcn-sw3ent__uses {
  color: var(--color-content-default-secondary);
}
.bcn-sw3ent__list .bcn-sw3ent__from {
  padding: 0 0 0 var(--spacing-400);
  flex-direction: column;
  gap: 2px;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3ent__list .bcn-sw3ent__from li:before {
  content: "← ";
  color: var(--color-content-default-tertiary);
}
.bcn-sw3ent__list .bcn-sw3ent__acts {
  gap: var(--spacing-200);
  display: flex;
}
.bcn-sw3ent__list .bcn-sw3ent__state {
  color: var(--color-content-success);
}
.bcn-sw3ent__list [data-action][hidden],
.bcn-sw3ent__list .bcn-sw3ent__state[hidden] {
  display: none;
}
.bcn-sw3ent__list .bcn-sw3ent__row {
  gap: var(--spacing-300);
  padding: var(--spacing-150) 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
  align-items: baseline;
  display: flex;
}
.bcn-sw3ent__list .bcn-sw3ent__count {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  margin-left: auto;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
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
- `--color-background-warning-subtle`: #fefdfb _(component)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
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
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
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
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-weight`: 500 _(semantic)_
- `--typography-microcopy-md-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-subtle-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
- `--typography-title-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-strong-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-strong-font-weight`: 550 _(semantic)_
- `--typography-title-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-strong-line-height`: 1.6 _(semantic)_
