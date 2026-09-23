# Obligation tree

The list's obligations filed Category › Subcategory › Obligation, with counts on every branch. Each obligation opens to its IMPLEMENTATIONS: one row per component showing the component name, comment count and evidence count ("3 evidence" / "No evidence").

## Key decisions
- Child rows are implementations, not requirements (Andy reversed this 2026-09-23). Requirement codes and index ride on the card as data, for the mirror views to file by.
- Obligation rows carry NO status pill: evidence count is the only honest progress signal for an obligation.
- Categories and subcategories can be renamed for this list alone (pencil on the branch row).
- A dot beside an obligation title means the list has its own wording for it (title or description differs from the registry), tooltip "Has its own list wording". No text label.
- Card title and pencil both open the obligation panel; pencil tooltip "Move or retitle for this list".
- Clicking an implementation row emits list:edit-implementation. Prod opens the implementation upsert dialog there; the prototype builds no dialog.

## Gotchas
- The evidence count updates live after a bulk evidence save (list:evidence-added); a component row that did not exist is added.
- A branch emptied by a move or a remove drops out of the tree, and its parent counts recompute.

## Done when
- Branch counts equal the visible obligations under them; each obligation shows 1–3 implementation rows with comments + evidence and no status.

## Markup
```html
<section
  class="bcn-lot"
  aria-label="Construction Kickoff Summary"
  data-list-label="Construction Kickoff Summary"
  data-list-class-labels='{"adhere":"Adhere","monitor":"Monitor","notify":"Notify","roster":"Roster"}'
  data-list-titles='{"COA 4":"ESA Consultation and ITP Precedence","COA 6":"Construction Phase Authorization Required Before Construction","COA 6.1":"Pre-implementation Phase Authorization Package","COA 6.2":"Construction Phase Authorization Package Contents","COA 7":"Phase 2 Authorization Required Before Phase 2 Operations","COA 7.1":"Phase 2 Authorization Package Contents","COA 7.5":"Phase 2 Project Operations Report","COA 8":"Consultation and Notification Regarding Amendment","COA 9.1":"Designated Representative","COA 9.2":"Designated Biologists, Fisheries Biologists, and Biological Monitors","COA 9.2.1":"Designated Biologist and Fisheries Biologist Qualifications","COA 9.2.2":"Biological Monitor Qualifications and Duties","COA 9.3":"Biologist and Monitor Stop-Work Authority","COA 9.4":"Worker Education Program","COA 9.5":"Construction Monitoring Documentation","COA 9.6":"Trash Abatement Program","COA 9.7":"Erosion and Sediment Control","COA 9.8":"Delineation of Property Boundaries","COA 9.9":"Delineation of Covered Species Habitat","COA 9.10":"Project Access Routes","COA 9.11":"Staging Areas","COA 9.12":"Vehicle and Equipment Inspection for Invasive Species","COA 9.13":"Refueling and Maintenance Controls","COA 9.14":"Hazardous Waste Spill Response","COA 9.15":"CDFW Access to Project and Mitigation Lands","COA 9.16":"No Disturbance of CDFW Conserved and Managed Lands","COA 9.16.1":"Conservation Easement 50-Foot Buffer","COA 9.17":"Refuse Removal on Completion","COA 9.18":"Wildfire Prevention at Bethany Complex","COA 10.1":"Notification Before Commencement","COA 10.2":"Notification of Non-compliance","COA 10.3":"Tracking Habitat Feature Disturbances and GIS Reporting","COA 10.4":"Suitable Habitat Monitoring Features by Species","COA 10.5":"Reporting Approved Habitat Maps","COA 10.6":"Photo Monitoring Stations","COA 10.7":"Species Observations Outside of Mapped Habitat","COA 10.8":"Habitat Evaluation Field Survey for Covered Species","COA 10.9":"Tracking Temporary and Permanent Impacts","COA 10.10":"Daily Compliance Monitoring and Inspection Records","COA 10.11":"Environmental Compliance Monitoring Plan","COA 10.12":"Monthly Compliance Report","COA 10.13":"Annual Status Report","COA 10.14":"CNDDB Observation Submittals","COA 10.15":"Final Mitigation Report","COA 10.15.1":"Mitigation Status Report Before ITP Expiration","COA 10.16":"Notification of Take or Injury/Damage","COA 10.17":"Subsurface Vibratory Testing and Monitoring Study","COA 10.18":"Covered Fish Species Monitoring and Science Plan","COA 10.18.1":"Monitoring Plan and Report Review and Finalization Process","COA 10.18.2":"Long-term Purpose of Fish Monitoring and Studies","COA 10.18.3":"Alternative Operating Criteria for Hydrograph Limbs","COA 10.19":"Fisheries Evaluation Studies","COA 10.19.1":"Migration and Survival Study","COA 10.19.2":"Predation Study","COA 10.19.3":"Abundance and Distribution Study","COA 10.20":"Water Quality Evaluation Studies","COA 10.20.1":"Installation of New Real-time Monitoring Station","COA 10.20.2":"Sediment and Turbidity Monitoring Study","COA 10.20.3":"Harmful Algal Blooms Monitoring Plan","COA 10.20.4":"Selenium Bioaccumulation Study Plan","COA 10.20.5":"Mercury Monitoring Study Plan","COA 10.21":"Ecological Response Evaluation Studies","COA 10.21.1":"Hydrodynamics at Georgiana Slough Monitoring","COA 10.21.2":"Covered Fish Species Life Cycle Models","COA 10.21.3":"Food Web and Larval Fishes Entrainment Study","COA 10.21.4":"Tidal Wetland Restoration Efficacy Study","COA 10.21.5":"Delta Smelt and Longfin Smelt Spawning Habitat Study","COA 10.21.6":"Refugia Design and Field Study","COA 10.21.7":"Sacramento River Flow Reversal and Routing Minimization","COA 10.21.8":"Joint Operations Optimization Study","COA 10.21.9":"Modeling Needed to Implement Real-time Operations","COA 10.21.10":"Ascending and Descending Hydrograph Limb Studies","COA 10.22":"Personnel Conducting Studies and Monitoring","COA 10.23":"Sacramento River Bathymetric Surveys","COA 10.24":"Mathematical Model Development Deliverables","COA 10.24.1":"Sacramento River Hydraulic Model","COA 10.24.2":"Sediment Transport Model","COA 10.25":"North Delta Intake Hydraulic Modeling Deliverables","COA 10.25.1":"Intake Structure Hydraulic Model, Mathematical","COA 10.25.2":"Intake Structure Hydraulic Modeling, Physical","COA 10.25.3":"Intake Tee Screen Hydraulic Model, Mathematical","COA 10.25.4":"Intake Tee Screen Hydraulic Model, Physical","COA 10.26":"Fish Guidance System Working Group and Study Plan","COA 10.27":"Hydraulic Testing for Velocity Requirements","COA 10.27.1":"Hydraulic Testing Procedures and Plan Contents","COA 10.27.2":"Approach Velocity Testing Compliance","COA 10.27.3":"Hydraulic Testing Reports","COA 10.28":"Fish Screen Visual Inspections","COA 10.29":"Sediment Management Inspections at Intakes","COA 10.30":"Screen Impingement Study","COA 11.1":"Covered Species Observations and Work Stoppage","COA 11.2":"Covered Species Injury Response","COA 11.3":"Covered Species Capture, Handling, and Reporting","COA 11.4":"Pesticide, Fungicide, and Herbicide Use Restrictions","COA 11.5":"Prohibition of Rodenticide and Poison Use","COA 11.6":"Fertilizer Use Restrictions","COA 11.7":"Daily Work Restrictions","COA 11.8":"Artificial Lighting at Night","COA 11.9":"Lighting on Intake Structure","COA 11.10":"Visual Barriers Along Access Routes for Nighttime Activities","COA 11.11":"Project Vehicle Speed Limits","COA 11.12":"Wildlife Road-crossing Structures","COA 11.13":"Precipitation Work Limit","COA 11.14":"Daily Entrapment Inspections","COA 11.15":"Pipes, Culverts, and Other Materials Inspections","COA 11.16":"Disposal of Spoils, RTM, and Dredged Material","COA 11.17":"Electrical Power Line Support Placement","COA 11.17.1":"Transmission Line Bird Strike Diverters","COA 11.18":"Vegetation Management","COA 11.19":"Prevention of Spread of Invasive Species","COA 11.19.1":"Invasive Plant Species Monitoring, Management, and Control Plan","COA 11.19.2":"Invasive Plant Species Management","COA 11.20":"Hazards to Covered Species","COA 11.21":"Hazardous Materials Management Plans","COA 11.22":"Spill Prevention, Control, and Countermeasure Plans","COA 11.23":"Groundwater Testing and Monitoring Plan","COA 11.24":"Detection of Underground and Natural Gas Wells","COA 11.25":"Stormwater Pollution Prevention Plans","COA 11.26":"Erosion and Sediment Control Plans","COA 11.27":"Erosion Control Stabilization Prohibitions","COA 11.28":"Monofilament Netting Prohibition","COA 11.29":"Fugitive Dust Control","COA 11.30":"Construction Mercury Management and Monitoring Plan","COA 11.31.1":"Preconstruction Geotechnical Exploration Work Windows","COA 11.31.2":"Construction In-Water Work Windows and Pile Driving Limits","COA 11.32":"Daily In-Water Work Restriction","COA 11.33":"Underwater Sound Abatement Plan","COA 11.34":"Pile Driving Plan","COA 11.35":"Fish Salvage Plan","COA 11.36":"Barge Operations Plan","COA 11.37":"Dewatering Plan","COA 11.38":"Preconstruction Survey Protocols for Covered Species","COA 11.39":"CTS Habitat Avoidance and Encounter Response","COA 11.39.1":"Vehicle Speed Limits in CTS Habitat","COA 11.40":"CTS Breeding Habitat Avoidance Near Conserved Lands","COA 11.41":"CTS Measures for Preconstruction, SCADA, Transmission and Access Road Work","COA 11.42":"CTS Preconstruction and Construction-Phase Surveys","COA 11.42.1":"CTS Preconstruction Watering Protocol","COA 11.42.2":"CTS Mowing Restrictions","COA 11.43":"CTS Exclusion Barrier Installation and Maintenance","COA 11.44":"CTS Seasonal Work Window","COA 11.45":"Rain Forecast Work Stoppage Near CTS Breeding Sites","COA 11.46":"CTS Time of Day Work Restriction","COA 11.47":"Night Work Lighting Near CTS Habitat","COA 11.48":"Initial Site Clearing and CTS Monitoring","COA 11.49":"CTS Burrow Avoidance or Treatment","COA 11.49.1":"Flagging CTS Burrows and No-Activity Buffers","COA 11.49.2":"CTS Burrow Excavation by Designated Biologist","COA 11.50":"CTS Capture and Handling Protocols","COA 11.51":"CTS Mortality Reduction and Relocation Plan","COA 11.51.1":"CTS Relocation From Construction Site Buffer","COA 11.51.2":"Capture, Handling and Release of CTS Into Burrows","COA 11.51.3":"CDFW Notification of CTS Relocation","COA 11.52":"Notification of CTS Take or Injury","COA 11.52.1":"Release of CTS With Minor Injury","COA 11.52.2":"Treatment of Seriously Injured CTS","COA 11.52.3":"Handling of Recently Deceased CTS","COA 11.52.4":"Written Incident Report for CTS Take or Injury","COA 11.53":"Invasive Species Prohibition Near CTS Habitat","COA 11.54":"Environmentally Sensitive Areas for GGS Habitat","COA 11.55":"GGS Habitat Avoidance and Encounter Response","COA 11.55.1":"Vehicle Access and Speed in GGS Habitat","COA 11.56":"GGS Preconstruction and Clearance Surveys","COA 11.57":"Mowing Restrictions in GGS Habitat","COA 11.58":"GGS Seasonal Work Window","COA 11.58.1":"Low Rainfall and Dry Weather Work Period in GGS Habitat","COA 11.59":"GGS Seasonal Work Restriction Exception","COA 11.60":"In-Channel Work and GGS Seasonal Restriction","COA 11.61":"Dewatering of GGS Aquatic Habitat","COA 11.62":"GGS Exclusion Barrier Installation and Maintenance","COA 11.62.1":"GGS Refugia Flagging and No-Activity Buffers","COA 11.62.2":"GGS Burrow Excavation by Designated Biologist","COA 11.63":"Initial Site Clearing and GGS Monitoring","COA 11.64":"Disposal of Natural Debris in GGS Habitat","COA 11.65":"GGS Measures for Preconstruction, SCADA, Transmission and Access Road Work","COA 11.66":"Restoration of Temporary Impacts to GGS Habitat","COA 11.67":"GGS Mortality Reduction and Relocation Plan","COA 11.67.1":"GGS Handling, Relocation and Notification","COA 11.68":"Notification of GGS Take or Injury","COA 11.68.1":"Release of GGS With Minor Injury","COA 11.68.2":"Treatment of Seriously Injured GGS","COA 11.68.3":"Handling of Recently Deceased GGS","COA 11.68.4":"Written Incident Report for GGS Take or Injury","COA 11.69":"SWHA Habitat Avoidance and Access Restrictions","COA 11.70":"SWHA Nesting Season Work Restriction","COA 11.71":"SWHA Nest Tree Surveys and Survey Schedule","COA 11.72":"SWHA Occupied Nest No-Disturbance Buffer","COA 11.73":"SWHA Nest Monitoring During Covered Activities","COA 11.74":"Disturbance of Occupied SWHA Nest Tree","COA 11.75":"Designated Biologist Authority for Distressed Nesting SWHA","COA 11.76":"SWHA Nest Tree Avoidance and Removal Approval","COA 11.77":"Woody Vegetation Removal Outside SWHA Nesting Season","COA 11.78":"SWHA Nesting Habitat Delineation for Preconstruction Activities","COA 11.79":"SWHA Measures for SCADA and Transmission Line Work","COA 11.80":"SWHA Mortality Reduction and Relocation Plan","COA 11.81":"Notification of SWHA Take or Injury","COA 11.82":"TRBL Avoidance and Daily Activity Window","COA 11.83":"TRBL Preconstruction Habitat Assessment","COA 11.84":"TRBL Nesting and Roosting Habitat Surveys","COA 11.84.1":"TRBL Nesting Habitat Preconstruction Surveys","COA 11.84.2":"TRBL Roosting Habitat Preconstruction Surveys","COA 11.85":"TRBL Nest Buffer Zone","COA 11.86":"TRBL Nest Buffer Monitoring","COA 11.87":"TRBL Roosting Site Buffer Zone","COA 11.88":"TRBL Roosting Site Buffer Monitoring","COA 11.89":"Disturbance of TRBL Breeding Colonies and Roost Sites","COA 11.90":"Delineation of TRBL Nesting and Roosting Habitat","COA 11.91":"Helicopter Restrictions Near TRBL Colonies and Roosts","COA 11.92":"TRBL Mortality Reduction and Relocation Plan","COA 11.93":"Notification of TRBL Take or Injury","COA 11.94":"CBB Habitat Avoidance and Nest Encounter Response","COA 11.95":"CBB Seasonal Restriction on Vegetation and Ground Disturbance","COA 11.96":"CBB Preconstruction Habitat Assessment","COA 11.97":"CBB Surveys During Construction and Maintenance","COA 11.98":"CBB Nest No-Activity Buffer Zone","COA 11.99":"CBB Daily Monitoring","COA 11.100":"Avoidance or Treatment of CBB Underground Refugia","COA 11.101":"Vegetation Management in CBB Habitat","COA 11.102":"CBB Nest Relocation Plan","COA 11.103":"Notification of CBB Take or Injury","COA 11.104":"MALI Initial Site Clearing and Monitoring","COA 11.105":"MALI Preconstruction Surveys","COA 11.106":"MALI No-Activity Buffer Zone","COA 11.107":"MALI Measures for SCADA and Transmission Line Maintenance","COA 11.108":"MALI Translocation Plan","COA 11.109":"Velocity Requirements at North Delta Intakes","COA 11.109.1":"No Diversions Without North Delta Intake Screens","COA 11.110":"Phase 1 and Phase 2 Authorized Operations","COA 11.111":"Diversion Criteria for North Delta Intakes","COA 11.111.1":"June Operations Diversion Criteria","COA 11.111.2":"Seasonal Operations of the North Delta Intakes","COA 11.111.3":"North Delta Diversion Monitoring Team and Risk Assessments","COA 11.111.4":"Chartering the North Delta Diversion Monitoring Team","COA 11.111.5":"Collaborative Approach to Real-time Decision Making","COA 11.111.6":"Salmon Presence Off-ramp","COA 11.112":"Reservoir Storage","COA 11.113":"Shifting Exports During Balanced Conditions","COA 11.114":"Additional Diversions from North Delta Intakes Daily Cap","COA 11.115":"Delta Smelt and Longfin Smelt Biological Criteria Model Approval","COA 11.115.1":"Smelt Biological Criterion 1","COA 11.115.2":"Smelt Biological Criterion 2","COA 11.116":"Winter- and Spring-run Chinook Salmon Biological Criteria Model Approval","COA 11.116.1":"Salmonid Biological Criterion 1","COA 11.116.2":"Salmonid Biological Criterion 2","COA 11.117":"White Sturgeon Biological Criteria Model Approval","COA 11.117.1":"White Sturgeon Biological Criterion 1","COA 11.117.2":"White Sturgeon Biological Criterion 2","COA 12":"Habitat Management Land Acquisition and Restoration","COA 12.1":"Project Footprint Features with Impact Multiplier Percentages","COA 12.2":"Restoration from Temporary Preconstruction Impacts","COA 12.3":"Temporary Impacts and On-Site Restoration","COA 12.3.1":"Temporary Impact Criteria","COA 12.3.2":"Temporary Impact Restoration Schedule","COA 12.3.3":"Restoration and Revegetation Plan","COA 12.3.4":"Restoration Monitoring and Maintenance","COA 12.4":"Bird Strike Diverters on Transmission Lines","COA 12.5.1":"SWHA Compensation for Lost Occupied Nest Sites","COA 12.5.2":"SWHA Compensation for Lost Suitable Nest Trees","COA 12.5.3":"SWHA Replacement Nest Tree Monitoring and Success Criteria","COA 12.6.1":"Construction Mitigation for Delta Smelt and Longfin Smelt","COA 12.6.2":"Operations Mitigation for Delta Smelt","COA 12.6.3":"Delta Smelt Summer–Fall Habitat Action","COA 12.6.4":"Operations Mitigation for Longfin Smelt","COA 12.6.5":"Spring Longfin Smelt Distribution","COA 12.6.6":"Longfin Smelt Refugial Population Establishment and Management","COA 12.7.1":"Construction Mitigation for CHNWR and CHNSR","COA 12.7.2":"Operations Mitigation for CHNWR and CHNSR","COA 12.8.1":"Construction Mitigation for White Sturgeon","COA 12.8.2":"Operations Mitigation for White Sturgeon","COA 12.9":"Cost Estimates for Security","COA 12.9.1":"Land Acquisition Cost Estimates","COA 12.9.3":"Management Funding Estimates","COA 12.10":"Covered Species Credits","COA 12.11.1":"HM Lands Fee Title","COA 12.11.2":"HM Lands Conservation Easement","COA 12.11.3":"HM Lands Approval","COA 12.11.4":"HM Lands Documentation","COA 12.11.5":"HM Lands Land Manager","COA 12.11.6":"HM Lands Start-up Activities","COA 12.11.7":"HM Lands Interim Management","COA 12.12":"In-Perpetuity Management Funding","COA 12.12.1":"Identify an Endowment Manager","COA 12.12.2":"Calculate the Endowment Funds Deposit","COA 12.12.2.1":"Endowment Capitalization Rate and Fees","COA 12.12.2.2":"Endowment Buffers and Assumptions","COA 12.12.2.2.1":"Endowment 10 Percent Contingency","COA 12.12.2.2.2":"Endowment Three Years Delayed Spending","COA 12.12.2.2.3":"Endowment Non-annualized Expenses","COA 12.12.3":"Transfer Long-term Endowment Funds","COA 12.12.4":"Management of the Endowment","COA 12.13":"Reimburse CDFW","COA 13.1":"Security Amount","COA 13.2":"Security Form and CESA Mitigation Funding Strategy","COA 13.3":"Demonstration of Performance"}'
  data-list-view="category"
>
  <p class="bcn-lot__nomatch" data-list-nomatch="" hidden="">No obligations match.</p>
  <div class="bcn-lot__body" data-list-cats="">
    <details class="bcn-lot__cat" data-list-cat="hazards" open="">
      <summary class="bcn-lot__row bcn-lot__row--cat">
        <span class="bcn-lot__chevron" aria-hidden="true"
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span
          class="bcn-lot__name"
          data-list-name=""
          data-list-text="Hazards"
          data-registry-name="Hazards"
          >Hazards</span
        ><span data-list-count="cat"
          ><span class="bcn-swcb" aria-label="23 obligations">23</span></span
        ><span class="bcn-lot__verbs"
          ><esa-tooltip text="Rename for this list" position="above"
            ><button
              type="button"
              class="bcn-lot__verb bcn-lot__verb--quiet"
              aria-label="Rename this category for this list"
              data-list-rename=""
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
                  <path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  ></path>
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  ></path></svg
              ></span></button></esa-tooltip
        ></span>
      </summary>
      <div class="bcn-lot__subs" data-list-subs="">
        <details class="bcn-lot__sub" data-list-sub="fire" open="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Fire prevention"
              data-registry-name="Fire prevention"
              >Fire prevention</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="3 obligations">3</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J34-m1"
              data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J34"
              data-class="adhere"
              data-list-description="An extinguisher and a shovel ride with every crew working in dry vegetation."
              data-registry-desc="Permittee shall keep basic fire suppression supplies on site at all times during construction of the Bethany Complex or while undertaking maintenance activities within the Bethany Complex."
              data-codes="COA 9.18"
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Fire Suppression Supplies On Site"
                    data-registry-title="Fire Suppression Supplies On Site"
                  >
                    <mark class="bcn-lot__hit">Fire Suppression</mark> Supplies On Site</button
                  ><span class="bcn-loc__edited" data-list-edited=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J34|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments">3 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6Y3766PDKM5BW1NBAQNYD-m1"
              data-id="obl_01M2G6Y3766PDKM5BW1NBAQNYD"
              data-class="adhere"
              data-list-description="Hand removal of vegetation and/or weed whacking are the authorized methods for vegetation removal along access roads, staging areas, and work areas within the Bethany Complex prior to allowing heavy equipment and vehicles to access these project sites after Covered Species preconstruction surveys and installment of wildlife exclusion barriers."
              data-registry-desc="Hand removal of vegetation and/or weed whacking are the authorized methods for vegetation removal along access roads, staging areas, and work areas within the Bethany Complex prior to allowing heavy equipment and vehicles to access these project sites after Covered Species preconstruction surveys and installment of wildlife exclusion barriers."
              data-codes="COA 9.18"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Vegetation clearing method for fire prevention"
                    data-registry-title="Vegetation clearing method for fire prevention"
                  >
                    Vegetation clearing method for fire prevention</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y3766PDKM5BW1NBAQNYD|byron-tract-forebay"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y3766PDKM5BW1NBAQNYD|intake-b-north-delta"
                    data-evidence="1"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >1 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J33-m1"
              data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J33"
              data-class="adhere"
              data-list-description="Non-living vegetative debris shall be cleared from around the immediate work footprint."
              data-registry-desc="Non-living vegetative debris shall be cleared from around the immediate work footprint."
              data-codes="COA 9.18"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Vegetation Clearing Method for Fire Prevention"
                    data-registry-title="Vegetation Clearing Method for Fire Prevention"
                  >
                    Vegetation Clearing Method for Fire Prevention</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J33|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J33|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details class="bcn-lot__sub" data-list-sub="hazmat" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Chemicals and fuels on site"
              data-registry-name="Hazardous materials"
              >Chemicals and fuels on site</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="8 obligations">8</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7D-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7D"
              data-class="adhere"
              data-list-description="storage of concrete, wash water, and other contaminants in watertight containment structures"
              data-registry-desc="storage of concrete, wash water, and other contaminants in watertight containment structures"
              data-codes="COA 11.22|COA 11.26"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Concrete Washwater Containment"
                    data-registry-title="Concrete Washwater Containment"
                  >
                    Concrete Washwater Containment</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7D|intake-b-north-delta"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7D|intake-c-north-delta"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7A-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7A"
              data-class="adhere"
              data-list-description="segregation, containment, and removal of contaminated soils to the approved disposal site"
              data-registry-desc="segregation, containment, and removal of contaminated soils to the approved disposal site"
              data-codes="COA 11.21"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Contaminated Soil Segregation and Removal"
                    data-registry-title="Contaminated Soil Segregation and Removal"
                  >
                    Contaminated Soil Segregation and Removal</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7A|intake-b-north-delta"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7A|intake-c-north-delta"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9Q-m1"
              data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9Q"
              data-class="monitor"
              data-list-description="A database on known historic instances of contamination and results of any field inspections regarding the presence of hazardous materials shall be maintained."
              data-registry-desc="A database on known historic instances of contamination and results of any field inspections regarding the presence of hazardous materials shall be maintained."
              data-codes="COA 11.21"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Monitor</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Database of historic contamination and hazardous materials inspections"
                    data-registry-title="Database of historic contamination and hazardous materials inspections"
                  >
                    Database of historic contamination and hazardous materials inspections</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y3GTRYAK61ZHAYGX6G9Q|byron-tract-forebay"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR78-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR78"
              data-class="adhere"
              data-list-description="clear labeling, handling, and safety instructions, and emergency contact information on hazardous material containers"
              data-registry-desc="clear labeling, handling, and safety instructions, and emergency contact information on hazardous material containers"
              data-codes="COA 11.21"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Hazardous Materials Container Labeling"
                    data-registry-title="Hazardous Materials Container Labeling"
                  >
                    Hazardous Materials Container Labeling</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR78|intake-b-north-delta"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR78|intake-c-north-delta"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR77-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR77"
              data-class="adhere"
              data-list-description="storage of fuel, oil, and other petroleum products at designated sites for hazardous materials"
              data-registry-desc="storage of fuel, oil, and other petroleum products at designated sites for hazardous materials"
              data-codes="COA 11.21"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Hazardous Materials in Designated Storage"
                    data-registry-title="Hazardous Materials in Designated Storage"
                  >
                    Hazardous Materials in Designated Storage</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR77|bouldin-island-launch-shaft"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bouldin Island Launch Shaft"
                    >
                      Bouldin Island Launch Shaft</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR79-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR79"
              data-class="adhere"
              data-list-description="prohibition of the accumulation and temporary storage of hazardous materials exceeding 90 days"
              data-registry-desc="prohibition of the accumulation and temporary storage of hazardous materials exceeding 90 days"
              data-codes="COA 11.21"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Hazardous Materials Storage Duration Limit"
                    data-registry-title="Hazardous Materials Storage Duration Limit"
                  >
                    Hazardous Materials Storage Duration Limit</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR79|byron-tract-forebay"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments">3 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR79|intake-b-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR79|intake-c-north-delta"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6Y40FW7TYCC8DP1VT56RD-m1"
              data-id="obl_01M2G6Y40FW7TYCC8DP1VT56RD"
              data-class="adhere"
              data-list-description="Material Safety Data Sheets provided to all Project site personnel"
              data-registry-desc="Material Safety Data Sheets provided to all Project site personnel"
              data-codes="COA 11.21"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Material Safety Data Sheets provided to site personnel"
                    data-registry-title="Material Safety Data Sheets provided to site personnel"
                  >
                    Material Safety Data Sheets provided to site personnel</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y40FW7TYCC8DP1VT56RD|byron-tract-forebay"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y40FW7TYCC8DP1VT56RD|intake-b-north-delta"
                    data-evidence="1"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >1 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y40FW7TYCC8DP1VT56RD|intake-c-north-delta"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7G-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7G"
              data-class="adhere"
              data-list-description="storage of petroleum products in non-leaking containers at impervious storage sites from which an accidental spills cannot escape"
              data-registry-desc="storage of petroleum products in non-leaking containers at impervious storage sites from which an accidental spills cannot escape"
              data-codes="COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Petroleum Storage Containment"
                    data-registry-title="Petroleum Storage Containment"
                  >
                    Petroleum Storage Containment</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7G|intake-b-north-delta"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7G|intake-c-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details class="bcn-lot__sub" data-list-sub="refueling" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Refueling and equipment servicing"
              data-registry-name="Refueling and equipment servicing"
              >Refueling and equipment servicing</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="5 obligations">5</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6Y3GVB9GY756CNBCP3THB-m1"
              data-id="obl_01M2G6Y3GVB9GY756CNBCP3THB"
              data-class="monitor"
              data-list-description="Any equipment or vehicles driven and/or operated in or adjacent to Project construction sites shall be checked daily and maintained in good working order to prevent the release of contaminants that, if introduced to water, could be deleterious to aquatic life, wildlife, or riparian habitat."
              data-registry-desc="Any equipment or vehicles driven and/or operated in or adjacent to Project construction sites shall be checked daily and maintained in good working order to prevent the release of contaminants that, if introduced to water, could be deleterious to aquatic life, wildlife, or riparian habitat."
              data-codes="COA 9.13"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Monitor</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Daily contaminant leak check and maintenance of vehicles and equipment"
                    data-registry-title="Daily contaminant leak check and maintenance of vehicles and equipment"
                  >
                    Daily contaminant leak check and maintenance of vehicles and equipment</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y3GVB9GY756CNBCP3THB|southern-forebay-pumping-plant"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y3GVB9GY756CNBCP3THB|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9R-m1"
              data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9R"
              data-class="monitor"
              data-list-description="daily inspection of equipment for oil, grease, and other petroleum products if equipment is in contact with water"
              data-registry-desc="daily inspection of equipment for oil, grease, and other petroleum products if equipment is in contact with water"
              data-codes="COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Monitor</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Daily inspection of equipment in contact with water for petroleum leaks"
                    data-registry-title="Daily inspection of equipment in contact with water for petroleum leaks"
                  >
                    Daily inspection of equipment in contact with water for petroleum
                    leaks</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y3GTRYAK61ZHAYGX6G9R|byron-tract-forebay"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7J-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7J"
              data-class="adhere"
              data-list-description="using spills containment materials under transfer areas when transferring oil or other hazardous materials from trucks to storage containers"
              data-registry-desc="using spills containment materials under transfer areas when transferring oil or other hazardous materials from trucks to storage containers"
              data-codes="COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Fuel Transfer Containment"
                    data-registry-title="Fuel Transfer Containment"
                  >
                    Fuel Transfer Containment</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7J|southern-forebay-pumping-plant"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7J|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2Y-m1"
              data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2Y"
              data-class="adhere"
              data-list-description="Refuel at least 100 feet from any water body, over secondary containment, with an attendant present."
              data-registry-desc="Vehicles shall be kept away from all sensitive areas and positioned over drip pans or other suitable secondary containment prior to refueling."
              data-codes="COA 9.13"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Refueling Practices"
                    data-registry-title="Refueling Practices"
                  >
                    Refueling Practices</button
                  ><span class="bcn-loc__edited" data-list-edited=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J2Y|bethany-reservoir-aqueduct"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J2Y|southern-forebay-pumping-plant"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments">1 comment</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J2Y|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2Z-m1"
              data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2Z"
              data-class="adhere"
              data-list-description="All reserve fuel supplies shall be stored only within the confines of the designated staging areas, a minimum of 200 feet from surface waters and other sensitive habitats, such as wetlands."
              data-registry-desc="All reserve fuel supplies shall be stored only within the confines of the designated staging areas, a minimum of 200 feet from surface waters and other sensitive habitats, such as wetlands."
              data-codes="COA 9.13"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Refueling Setback from Water"
                    data-registry-title="Refueling Setback from Water"
                  >
                    Refueling Setback from Water</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J2Z|intake-c-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details class="bcn-lot__sub" data-list-sub="spills" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Spill prevention and response"
              data-registry-name="Spill prevention and response"
              >Spill prevention and response</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="7 obligations">7</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7C-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7C"
              data-class="adhere"
              data-list-description="cleaning of external petroleum products off of equipment prior to its contact to water"
              data-registry-desc="cleaning of external petroleum products off of equipment prior to its contact to water"
              data-codes="COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Equipment Cleaning Before Water Contact"
                    data-registry-title="Equipment Cleaning Before Water Contact"
                  >
                    Equipment Cleaning Before Water Contact</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7C|intake-c-north-delta"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7H-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7H"
              data-class="adhere"
              data-list-description="use of oil- absorbent booms for equipment used in or adjacent to water"
              data-registry-desc="use of oil- absorbent booms for equipment used in or adjacent to water"
              data-codes="COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Oil Absorbent Booms in Place"
                    data-registry-title="Oil Absorbent Booms in Place"
                  >
                    Oil Absorbent Booms in Place</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7H|bethany-reservoir-aqueduct"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7H|southern-forebay-pumping-plant"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7H|twin-cities-complex"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7E-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7E"
              data-class="adhere"
              data-list-description="In the event of an accidental spill, personnel shall identify and secure the source of the discharge and contain the discharge with sorbents, sandbags, or other material from spill kits"
              data-registry-desc="In the event of an accidental spill, personnel shall identify and secure the source of the discharge and contain the discharge with sorbents, sandbags, or other material from spill kits"
              data-codes="COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Spill Containment and Response"
                    data-registry-title="Spill Containment and Response"
                  >
                    Spill Containment and Response</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7E|bethany-reservoir-aqueduct"
                    data-evidence="1"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >1 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7E|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7E|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7B-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7B"
              data-class="adhere"
              data-list-description="Keep a stocked spill kit within reach of every fuel transfer and every piece of equipment working over water."
              data-registry-desc="site-specific emergency spill containment and spill kits at every work site"
              data-codes="COA 11.21|COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Spill Kits On Site"
                    data-registry-title="Spill Kits On Site"
                  >
                    Spill Kits On Site</button
                  ><span class="bcn-loc__edited" data-list-edited=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7B|bethany-reservoir-aqueduct"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7B|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7B|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7B-m2"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7B"
              data-class="adhere"
              data-list-description="At shift end, confirm every kit drawn from today was restocked before the crew leaves."
              data-registry-desc="site-specific emergency spill containment and spill kits at every work site"
              data-codes="COA 11.21|COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Spill Kits On Site"
                    data-registry-title="Spill Kits On Site"
                  >
                    Spill Kits On Site</button
                  ><span class="bcn-loc__edited" data-list-edited=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7B|bethany-reservoir-aqueduct"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7B|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7B|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J30-m1"
              data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J30"
              data-class="adhere"
              data-list-description="Permittee shall immediately stop and, pursuant to pertinent state and federal statutes and regulations, arrange for repair and clean up by qualified individuals of any fuel or hazardous waste leaks or spills at the time of occurrence, or as soon as it is safe to do so."
              data-registry-desc="Permittee shall immediately stop and, pursuant to pertinent state and federal statutes and regulations, arrange for repair and clean up by qualified individuals of any fuel or hazardous waste leaks or spills at the time of occurrence, or as soon as it is safe to do so."
              data-codes="COA 9.14"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Spill Response"
                    data-registry-title="Spill Response"
                  >
                    Spill Response</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J30|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments">1 comment</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J30|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7F-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7F"
              data-class="adhere"
              data-list-description="containment of contaminants in staging areas designed so that should an accidental spill occur, contaminants do not drain toward receiving waters or storm drain inlets; and staging of all stationary equipment in appropriate staging areas and positioned over drip pans."
              data-registry-desc="containment of contaminants in staging areas designed so that should an accidental spill occur, contaminants do not drain toward receiving waters or storm drain inlets; and staging of all stationary equipment in appropriate staging areas and positioned over drip pans."
              data-codes="COA 11.22"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Staging Area Spill Containment"
                    data-registry-title="Staging Area Spill Containment"
                  >
                    Staging Area Spill Containment</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR7F|intake-c-north-delta"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments">1 comment</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </div>
    </details>
    <details class="bcn-lot__cat" data-list-cat="lighting" open="" hidden="">
      <summary class="bcn-lot__row bcn-lot__row--cat">
        <span class="bcn-lot__chevron" aria-hidden="true"
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span
          class="bcn-lot__name"
          data-list-name=""
          data-list-text="Lighting"
          data-registry-name="Lighting"
          >Lighting</span
        ><span data-list-count="cat"
          ><span class="bcn-swcb" aria-label="4 obligations">4</span></span
        ><span class="bcn-lot__verbs"
          ><esa-tooltip text="Rename for this list" position="above"
            ><button
              type="button"
              class="bcn-lot__verb bcn-lot__verb--quiet"
              aria-label="Rename this category for this list"
              data-list-rename=""
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
                  <path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  ></path>
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  ></path></svg
              ></span></button></esa-tooltip
        ></span>
      </summary>
      <div class="bcn-lot__subs" data-list-subs="">
        <details class="bcn-lot__sub" data-list-sub="lighting-habitat" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Lighting near habitat and waters"
              data-registry-name="Lighting near habitat and waters"
              >Lighting near habitat and waters</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="4 obligations">4</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6Y3XH28NAN3AB46Q787QJ-m1"
              data-id="obl_01M2G6Y3XH28NAN3AB46Q787QJ"
              data-class="monitor"
              data-list-description="The Designated Biologist(s) and/or Biological Monitor(s) shall assess the locations of the identified access roads prior to the installation of any visual barriers."
              data-registry-desc="The Designated Biologist(s) and/or Biological Monitor(s) shall assess the locations of the identified access roads prior to the installation of any visual barriers."
              data-codes="COA 11.10"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Monitor</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Access road location assessment before visual barrier installation"
                    data-registry-title="Access road location assessment before visual barrier installation"
                  >
                    Access road location assessment before visual barrier installation</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y3XH28NAN3AB46Q787QJ|bouldin-island-launch-shaft"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bouldin Island Launch Shaft"
                    >
                      Bouldin Island Launch Shaft</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGA-m1"
              data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGA"
              data-class="adhere"
              data-list-description="Temporary lighting on the north Delta intake structure or buildings associated with the north Delta intakes may be utilized for CDFW approved construction phase nighttime Covered Activities."
              data-registry-desc="Temporary lighting on the north Delta intake structure or buildings associated with the north Delta intakes may be utilized for CDFW approved construction phase nighttime Covered Activities."
              data-codes="COA 11.9"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Intake Lighting Restricted from the River Channel"
                    data-registry-title="Intake Lighting Restricted from the River Channel"
                  >
                    Intake Lighting Restricted from the River Channel</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYGA|southern-forebay-pumping-plant"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYGA|twin-cities-complex"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYGA|bouldin-island-launch-shaft"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bouldin Island Launch Shaft"
                    >
                      Bouldin Island Launch Shaft</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG8-m1"
              data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG8"
              data-class="adhere"
              data-list-description="All construction lighting used within 500 feet of Covered Species suitable habitat shall be yellow or orange lighting."
              data-registry-desc="All construction lighting used within 500 feet of Covered Species suitable habitat shall be yellow or orange lighting."
              data-codes="COA 11.8"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Lighting Color Near Habitat"
                    data-registry-title="Lighting Color Near Habitat"
                  >
                    Lighting Color Near Habitat</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYG8|bouldin-island-launch-shaft"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bouldin Island Launch Shaft"
                    >
                      Bouldin Island Launch Shaft</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYG8|byron-tract-forebay"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYG8|intake-b-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY6-m1"
              data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY6"
              data-class="adhere"
              data-list-description="Shield and aim every night fixture down and inward. No light crosses the work-area boundary."
              data-registry-desc="If night work is required within a Project construction site after exclusion barriers have been installed, Permittee shall not use artificial lighting unless it is needed for worker safety. 8."
              data-codes="COA 11.47|COA 11.8"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Night Lighting Spill Control"
                    data-registry-title="Night Lighting Spill Control"
                  >
                    Night Lighting Spill Control</button
                  ><span class="bcn-loc__edited" data-list-edited=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKYBZ9A7EECEZB6FGY6|intake-b-north-delta"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKYBZ9A7EECEZB6FGY6|intake-c-north-delta"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKYBZ9A7EECEZB6FGY6|bethany-reservoir-aqueduct"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </div>
    </details>
    <details class="bcn-lot__cat" data-list-cat="site" open="" hidden="">
      <summary class="bcn-lot__row bcn-lot__row--cat">
        <span class="bcn-lot__chevron" aria-hidden="true"
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span
          class="bcn-lot__name"
          data-list-name=""
          data-list-text="Site conduct"
          data-registry-name="Site conduct"
          >Site conduct</span
        ><span data-list-count="cat"
          ><span class="bcn-swcb" aria-label="18 obligations">18</span></span
        ><span class="bcn-lot__verbs"
          ><esa-tooltip text="Rename for this list" position="above"
            ><button
              type="button"
              class="bcn-lot__verb bcn-lot__verb--quiet"
              aria-label="Rename this category for this list"
              data-list-rename=""
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
                  <path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  ></path>
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  ></path></svg
              ></span></button></esa-tooltip
        ></span>
      </summary>
      <div class="bcn-lot__subs" data-list-subs="">
        <details class="bcn-lot__sub" data-list-sub="access-routes" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Access routes and parking"
              data-registry-name="Access routes and parking"
              >Access routes and parking</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="5 obligations">5</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFQ-m1"
              data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFQ"
              data-class="adhere"
              data-list-description="Project-related vehicles shall access the Project construction site(s) during Covered Activities using existing routes and shall not cross GGS habitat outside of the Project construction site(s) unless otherwise authorized by CDFW."
              data-registry-desc="Project-related vehicles shall access the Project construction site(s) during Covered Activities using existing routes and shall not cross GGS habitat outside of the Project construction site(s) unless otherwise authorized by CDFW."
              data-codes="COA 11.55.1|COA 11.69"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Equipment Confined to Access Routes"
                    data-registry-title="Equipment Confined to Access Routes"
                  >
                    Equipment Confined to Access Routes</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYFQ|intake-c-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6Y374X4RKETDHB3S1M1N3-m1"
              data-id="obl_01M2G6Y374X4RKETDHB3S1M1N3"
              data-class="adhere"
              data-list-description="Permittee shall confine movement of heavy equipment to existing or CDFW-approved access roads or to locations at least 75 feet from flagged burrows. 11."
              data-registry-desc="Permittee shall confine movement of heavy equipment to existing or CDFW-approved access roads or to locations at least 75 feet from flagged burrows. 11."
              data-codes="COA 11.41|COA 11.65"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Equipment confined to designated access routes"
                    data-registry-title="Equipment confined to designated access routes"
                  >
                    Equipment confined to designated access routes</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y374X4RKETDHB3S1M1N3|intake-c-north-delta"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments">1 comment</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y374X4RKETDHB3S1M1N3|bethany-reservoir-aqueduct"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments">1 comment</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6Y374X4RKETDHB3S1M1N3|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2X-m1"
              data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2X"
              data-class="adhere"
              data-list-description="Permittee shall store equipment, supplies, and vehicles, and conduct vehicle and equipment services within the Project construction site at least 200 feet from suitable Covered Species aquatic habitat and/or other designated staging/storage areas."
              data-registry-desc="Permittee shall store equipment, supplies, and vehicles, and conduct vehicle and equipment services within the Project construction site at least 200 feet from suitable Covered Species aquatic habitat and/or other designated staging/storage areas."
              data-codes="COA 9.11"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Equipment Storage Setback from Aquatic Habitat"
                    data-registry-title="Equipment Storage Setback from Aquatic Habitat"
                  >
                    Equipment Storage Setback from Aquatic Habitat</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J2X|intake-b-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J2X|intake-c-north-delta"
                    data-evidence="1"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >1 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2W-m1"
              data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2W"
              data-class="adhere"
              data-list-description="Permittee shall confine all Project-related parking, storage areas, laydown sites, equipment storage, and any other surface-disturbing activities to the Project construction site using, to the extent possible, previously disturbed areas such as paved or previously cleared areas."
              data-registry-desc="Permittee shall confine all Project-related parking, storage areas, laydown sites, equipment storage, and any other surface-disturbing activities to the Project construction site using, to the extent possible, previously disturbed areas such as paved or previously cleared areas."
              data-codes="COA 9.11"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Staging Area Confinement"
                    data-registry-title="Staging Area Confinement"
                  >
                    Staging Area Confinement</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J2W|intake-b-north-delta"
                    data-evidence="4"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >4 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J2W|intake-c-north-delta"
                    data-evidence="1"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >1 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGK-m1"
              data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGK"
              data-class="adhere"
              data-list-description="All Project personnel shall access the Project construction site and any Project maintenance area using existing and established routes identified in the Project Description and shall not cross Covered Species’ habitat outside of or enroute to the Project construction site or maintenance area unless authorized by CDFW through Conditions of Approval in this ITP."
              data-registry-desc="All Project personnel shall access the Project construction site and any Project maintenance area using existing and established routes identified in the Project Description and shall not cross Covered Species’ habitat outside of or enroute to the Project construction site or maintenance area unless authorized by CDFW through Conditions of Approval in this ITP."
              data-codes="COA 9.10|COA 9.11"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Use of Established Access Routes"
                    data-registry-title="Use of Established Access Routes"
                  >
                    Use of Established Access Routes</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYGK|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYGK|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYGK|bouldin-island-launch-shaft"
                    data-evidence="1"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bouldin Island Launch Shaft"
                    >
                      Bouldin Island Launch Shaft</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >1 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details class="bcn-lot__sub" data-list-sub="pets-firearms" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Personal items and conduct"
              data-registry-name="Pets, firearms and campfires"
              >Personal items and conduct</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="1 obligations">1</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR74-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR74"
              data-class="adhere"
              data-list-description="Permittee shall not permit pets, campfires, or firearms in Project construction sites and site access routes, except firearms carried by authorized security personnel or local, state, or federal law enforcement officials."
              data-registry-desc="Permittee shall not permit pets, campfires, or firearms in Project construction sites and site access routes, except firearms carried by authorized security personnel or local, state, or federal law enforcement officials."
              data-codes="COA 11.20"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="No Pets, Campfires or Firearms On Site"
                    data-registry-title="No Pets, Campfires or Firearms On Site"
                  >
                    No Pets, Campfires or Firearms On Site</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR74|bouldin-island-launch-shaft"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bouldin Island Launch Shaft"
                    >
                      Bouldin Island Launch Shaft</button
                    ><span class="bcn-loc__comments">1 comment</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details class="bcn-lot__sub" data-list-sub="speed-limits" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Speed limits"
              data-registry-name="Speed limits"
              >Speed limits</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="6 obligations">6</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKJFSBZ7MC77J15GFVF-m1"
              data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVF"
              data-class="adhere"
              data-list-description="After dark, 15 mph on every unpaved surface inside the work area, including haul roads."
              data-registry-desc=", outside the “dry season” defined as July 15-Oct 15) to avoid potential vehicle strikes of CTS."
              data-codes="COA 11.11"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Nighttime Speed Limit"
                    data-registry-title="Nighttime Speed Limit"
                  >
                    Nighttime Speed Limit</button
                  ><span class="bcn-loc__edited" data-list-edited=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKJFSBZ7MC77J15GFVF|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments">3 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKJFSBZ7MC77J15GFVH-m1"
              data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVH"
              data-class="adhere"
              data-list-description="Project vehicles shall observe a maximum speed limit of 10 miles per hour on unpaved non-public Project access roads and in construction and maintenance sites."
              data-registry-desc="Project vehicles shall observe a maximum speed limit of 10 miles per hour on unpaved non-public Project access roads and in construction and maintenance sites."
              data-codes="COA 11.11"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Paved Road Speed Limit"
                    data-registry-title="Paved Road Speed Limit"
                  >
                    Paved Road Speed Limit</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKJFSBZ7MC77J15GFVH|bethany-reservoir-aqueduct"
                    data-evidence="4"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >4 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKJFSBZ7MC77J15GFVH|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKJFSBZ7MC77J15GFVH|twin-cities-complex"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKVAVAZP863Q0VNAW3E-m1"
              data-id="obl_01M2G6YKKVAVAZP863Q0VNAW3E"
              data-class="adhere"
              data-list-description="Project vehicles shall observe a 10 mile per hour speed limit on paved, non-public access roads where they occur within 200 feet of GGS habitat during the active season (May 1 – October 1) except where exclusion fencing has been installed, in which case Project vehicles may observe a speed limit of up to 30 miles per hour."
              data-registry-desc="Project vehicles shall observe a 10 mile per hour speed limit on paved, non-public access roads where they occur within 200 feet of GGS habitat during the active season (May 1 – October 1) except where exclusion fencing has been installed, in which case Project vehicles may observe a speed limit of up to 30 miles per hour."
              data-codes="COA 11.11|COA 11.39.1|COA 11.55.1"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Speed Limit Near Habitat"
                    data-registry-title="Speed Limit Near Habitat"
                  >
                    Speed Limit Near Habitat</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKVAVAZP863Q0VNAW3E|intake-b-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKVAVAZP863Q0VNAW3E|intake-c-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKW469S9XKYKCE1V6XV-m1"
              data-id="obl_01M2G6YKKW469S9XKYKCE1V6XV"
              data-class="adhere"
              data-list-description="Speeds limits shall be enforced and posted in both directions."
              data-registry-desc="Speeds limits shall be enforced and posted in both directions."
              data-codes="COA 11.11"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Speed Limit Posting"
                    data-registry-title="Speed Limit Posting"
                  >
                    Speed Limit Posting</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKW469S9XKYKCE1V6XV|southern-forebay-pumping-plant"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKW469S9XKYKCE1V6XV|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments">3 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKW469S9XKYKCE1V6XV|bouldin-island-launch-shaft"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bouldin Island Launch Shaft"
                    >
                      Bouldin Island Launch Shaft</button
                    ><span class="bcn-loc__comments">2 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKJFSBZ7MC77J15GFVG-m1"
              data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVG"
              data-class="adhere"
              data-list-description="20 mph on unpaved roads in daylight. Posted at each gate."
              data-registry-desc="Project vehicles shall observe a maximum speed limit of 10 miles per hour on unpaved non-public Project access roads and in construction and maintenance sites."
              data-codes="COA 11.11|COA 11.29"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Unpaved Road Speed Limit"
                    data-registry-title="Unpaved Road Speed Limit"
                  >
                    Unpaved Road Speed Limit</button
                  ><span class="bcn-loc__edited" data-list-edited=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKJFSBZ7MC77J15GFVG|bethany-reservoir-aqueduct"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments">3 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKJFSBZ7MC77J15GFVG|southern-forebay-pumping-plant"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKJFSBZ7MC77J15GFVG|twin-cities-complex"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Twin Cities Complex"
                    >
                      Twin Cities Complex</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKW469S9XKYKCE1V6XW-m1"
              data-id="obl_01M2G6YKKW469S9XKYKCE1V6XW"
              data-class="adhere"
              data-list-description="Speeds limits shall be enforced and posted in both directions."
              data-registry-desc="Speeds limits shall be enforced and posted in both directions."
              data-codes="COA 11.11"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Wildlife Crossing Signage"
                    data-registry-title="Wildlife Crossing Signage"
                  >
                    Wildlife Crossing Signage</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKW469S9XKYKCE1V6XW|bethany-reservoir-aqueduct"
                    data-evidence="1"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >1 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details class="bcn-lot__sub" data-list-sub="trash" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Trash and food waste"
              data-registry-name="Trash and food waste"
              >Trash and food waste</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="4 obligations">4</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR76-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR76"
              data-class="adhere"
              data-list-description="To avoid attracting predators, Permittee shall ensure Project personnel dispose of all food-related trash items such as packaging, cans, bottles, and food scraps in enclosed containers."
              data-registry-desc="To avoid attracting predators, Permittee shall ensure Project personnel dispose of all food-related trash items such as packaging, cans, bottles, and food scraps in enclosed containers."
              data-codes="COA 11.20"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Covered Food Waste Containers"
                    data-registry-title="Covered Food Waste Containers"
                  >
                    Covered Food Waste Containers</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR76|byron-tract-forebay"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR76|intake-b-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR76|intake-c-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J35-m1"
              data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J35"
              data-class="adhere"
              data-list-description="Permittee shall initiate a trash abatement program before starting Covered Activities and shall continue the program for the duration of the Project."
              data-registry-desc="Permittee shall initiate a trash abatement program before starting Covered Activities and shall continue the program for the duration of the Project."
              data-codes="COA 9.6"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Trash Abatement"
                    data-registry-title="Trash Abatement"
                  >
                    Trash Abatement</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J35|bouldin-island-launch-shaft"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bouldin Island Launch Shaft"
                    >
                      Bouldin Island Launch Shaft</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J35|byron-tract-forebay"
                    data-evidence="6"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >6 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKM0HYHZPHBXBXTP9J35|intake-b-north-delta"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR73-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR73"
              data-class="adhere"
              data-list-description="Vehicles carrying trash shall have loads covered and secured to prevent trash and debris from falling onto roads and adjacent properties."
              data-registry-desc="Vehicles carrying trash shall have loads covered and secured to prevent trash and debris from falling onto roads and adjacent properties."
              data-codes="COA 11.20"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Trash Load Covering"
                    data-registry-title="Trash Load Covering"
                  >
                    Trash Load Covering</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR73|byron-tract-forebay"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Byron Tract Forebay"
                    >
                      Byron Tract Forebay</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR73|intake-b-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR73|intake-c-north-delta"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKXGW0MHG5S1F0JJR75-m1"
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR75"
              data-class="adhere"
              data-list-description="Haul all trash off site at the end of every shift. Nothing stays overnight."
              data-registry-desc="6)."
              data-codes="COA 11.20"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Trash Removal Cadence"
                    data-registry-title="Trash Removal Cadence"
                  >
                    Trash Removal Cadence</button
                  ><span class="bcn-loc__edited" data-list-edited=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR75|intake-b-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments">3 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKXGW0MHG5S1F0JJR75|intake-c-north-delta"
                    data-evidence="3"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >3 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details class="bcn-lot__sub" data-list-sub="work-hours" hidden="">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span
              class="bcn-lot__name"
              data-list-name=""
              data-list-text="Work hours"
              data-registry-name="Work hours"
              >Work hours</span
            ><span data-list-count="sub"
              ><span class="bcn-swcb" aria-label="2 obligations">2</span></span
            ><span class="bcn-lot__verbs"
              ><esa-tooltip text="Rename for this list" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Rename this subcategory for this list"
                  data-list-rename=""
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
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Expand to implementations" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Expand this subcategory to implementations"
                  data-list-branch-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-lot__verb bcn-lot__verb--quiet"
                  aria-label="Collapse this subcategory"
                  data-list-branch-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY5-m1"
              data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY5"
              data-class="adhere"
              data-list-description="During the CTS active season or within 300 feet of suitable CTS aquatic habitat, Permittee shall terminate all Covered Activities not encircled by an exclusion barrier, including use and/or construction of access roads for preconstruction activities, SCADA and transmission line construction and maintenance, and facility maintenance no less than 30 minutes before sunset and shall not resume Covered Activities until 30 minutes after sunrise."
              data-registry-desc="During the CTS active season or within 300 feet of suitable CTS aquatic habitat, Permittee shall terminate all Covered Activities not encircled by an exclusion barrier, including use and/or construction of access roads for preconstruction activities, SCADA and transmission line construction and maintenance, and facility maintenance no less than 30 minutes before sunset and shall not resume Covered Activities until 30 minutes after sunrise."
              data-codes="COA 11.46|COA 11.7"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Daytime Work Hour Limit"
                    data-registry-title="Daytime Work Hour Limit"
                  >
                    Daytime Work Hour Limit</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKYBZ9A7EECEZB6FGY5|intake-b-north-delta"
                    data-evidence="1"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake B — North Delta"
                    >
                      Intake B — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >1 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKYBZ9A7EECEZB6FGY5|intake-c-north-delta"
                    data-evidence="2"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >2 evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKYBZ9A7EECEZB6FGY5|bethany-reservoir-aqueduct"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG4-m1"
              data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG4"
              data-class="adhere"
              data-list-description="Any vehicle traffic necessary during nighttime hours associated with emergency response, security, or operations and maintenance activities subsequent to construction shall be conducted with extra caution to minimize impacts to nocturnal Covered Species."
              data-registry-desc="Any vehicle traffic necessary during nighttime hours associated with emergency response, security, or operations and maintenance activities subsequent to construction shall be conducted with extra caution to minimize impacts to nocturnal Covered Species."
              data-codes="COA 11.7"
              hidden=""
            >
              <details class="bcn-loc__node" data-list-reqs-branch="">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-edit=""
                    data-list-title=""
                    data-list-text="Night Vehicle Travel Caution"
                    data-registry-title="Night Vehicle Travel Caution"
                  >
                    Night Vehicle Travel Caution</button
                  ><span class="bcn-loc__edited" data-list-edited="" hidden=""
                    ><esa-tooltip text="Has its own list wording" position="above"
                      ><span
                        class="bcn-loc__dot"
                        role="img"
                        aria-label="Has its own list wording"
                      ></span></esa-tooltip></span
                  ><span data-list-count="obligation"
                    ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
                  ><esa-tooltip text="Move or retitle for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Move or retitle this obligation for this list"
                      data-list-edit=""
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
                          <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                          ></path>
                          <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Duplicate for this list" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb"
                      aria-label="Hold this obligation again with its own wording"
                      data-list-duplicate=""
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYG4|intake-c-north-delta"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYG4|bethany-reservoir-aqueduct"
                    data-evidence="0"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Bethany Reservoir Aqueduct"
                    >
                      Bethany Reservoir Aqueduct</button
                    ><span class="bcn-loc__comments">3 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="obl_01M2G6YKKZS8T1WDX0E4QXHYG4|southern-forebay-pumping-plant"
                    data-evidence="5"
                  >
                    <button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Southern Forebay &amp; Pumping Plant"
                    >
                      Southern Forebay &amp; Pumping Plant</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence=""
                      >5 evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </div>
    </details>
  </div>
  <!-- The By commitment and A–Z views, rebuilt from the master above (list-views.ts). -->
  <div class="bcn-lot__body" data-list-mirror-body=""></div>
  <!-- The mirror's two group rows: a permit section, and a commitment inside it. --><template
    data-list-tpl="section"
    ><details class="bcn-lot__cat" data-list-group="" data-astro-cid-s4gldfhz="">
      <summary class="bcn-lot__row bcn-lot__row--cat" data-astro-cid-s4gldfhz="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-s4gldfhz=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-wcwfib5m=""
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
              data-astro-cid-wcwfib5m=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3="">COA</span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-s4gldfhz=""></span
        ><span data-list-count="group" data-astro-cid-s4gldfhz=""
          ><span
            class="bcn-swcb"
            data-astro-cid-s4gldfhz="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        >
      </summary>
      <div
        class="bcn-lot__subs"
        data-list-subs=""
        data-astro-cid-s4gldfhz=""
      ></div></details></template
  ><template data-list-tpl="commitment"
    ><details class="bcn-lot__sub" data-list-group="" data-astro-cid-s4gldfhz="">
      <summary class="bcn-lot__row bcn-lot__row--sub" data-astro-cid-s4gldfhz="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-s4gldfhz=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-wcwfib5m=""
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
              data-astro-cid-wcwfib5m=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3="">COA</span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-s4gldfhz=""></span
        ><span data-list-count="group" data-astro-cid-s4gldfhz=""
          ><span
            class="bcn-swcb"
            data-astro-cid-s4gldfhz="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        >
      </summary>
      <ul
        class="bcn-lot__cards"
        data-list-cards=""
        data-astro-cid-s4gldfhz=""
      ></ul></details></template
  ><!-- Stamps for a member added from the picker: its category row, its subcategory
         row, and its card. The card stamp carries implementation rows; the first is the
         prototype for the member's own. --><template data-list-tpl="cat"
    ><details class="bcn-lot__cat" open="" data-astro-cid-s4gldfhz="">
      <summary class="bcn-lot__row bcn-lot__row--cat" data-astro-cid-s4gldfhz="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-s4gldfhz=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-wcwfib5m=""
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
              data-astro-cid-wcwfib5m=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-s4gldfhz=""></span
        ><span data-list-count="cat" data-astro-cid-s4gldfhz=""
          ><span
            class="bcn-swcb"
            data-astro-cid-s4gldfhz="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        ><span class="bcn-lot__verbs" data-astro-cid-s4gldfhz=""
          ><esa-tooltip text="Rename for this list" data-astro-cid-s4gldfhz="true"
            ><button
              type="button"
              class="bcn-lot__verb bcn-lot__verb--quiet"
              aria-label="Rename this category for this list"
              data-list-rename=""
              data-astro-cid-s4gldfhz=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-wcwfib5m=""
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
                  data-astro-cid-wcwfib5m=""
                >
                  <path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  ></path>
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  ></path></svg
              ></span></button></esa-tooltip
        ></span>
      </summary>
      <div
        class="bcn-lot__subs"
        data-list-subs=""
        data-astro-cid-s4gldfhz=""
      ></div></details></template
  ><template data-list-tpl="sub"
    ><details class="bcn-lot__sub" open="" data-astro-cid-s4gldfhz="">
      <summary class="bcn-lot__row bcn-lot__row--sub" data-astro-cid-s4gldfhz="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-s4gldfhz=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-wcwfib5m=""
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
              data-astro-cid-wcwfib5m=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-s4gldfhz=""></span
        ><span data-list-count="sub" data-astro-cid-s4gldfhz=""
          ><span
            class="bcn-swcb"
            data-astro-cid-s4gldfhz="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        ><span class="bcn-lot__verbs" data-astro-cid-s4gldfhz=""
          ><esa-tooltip text="Rename for this list" data-astro-cid-s4gldfhz="true"
            ><button
              type="button"
              class="bcn-lot__verb bcn-lot__verb--quiet"
              aria-label="Rename this subcategory for this list"
              data-list-rename=""
              data-astro-cid-s4gldfhz=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-wcwfib5m=""
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
                  data-astro-cid-wcwfib5m=""
                >
                  <path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  ></path>
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  ></path></svg
              ></span></button></esa-tooltip
          ><esa-tooltip text="Expand to implementations" data-astro-cid-s4gldfhz="true"
            ><button
              type="button"
              class="bcn-lot__verb bcn-lot__verb--quiet"
              aria-label="Expand this subcategory to implementations"
              data-list-branch-expand=""
              data-astro-cid-s4gldfhz=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-wcwfib5m=""
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
                  data-astro-cid-wcwfib5m=""
                >
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path></svg
              ></span></button></esa-tooltip
          ><esa-tooltip text="Collapse" align="end" data-astro-cid-s4gldfhz="true"
            ><button
              type="button"
              class="bcn-lot__verb bcn-lot__verb--quiet"
              aria-label="Collapse this subcategory"
              data-list-branch-collapse=""
              data-astro-cid-s4gldfhz=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-wcwfib5m=""
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
                  data-astro-cid-wcwfib5m=""
                >
                  <path d="m7 20 5-5 5 5"></path>
                  <path d="m7 4 5 5 5-5"></path></svg
              ></span></button></esa-tooltip
        ></span>
      </summary>
      <ul
        class="bcn-lot__cards"
        data-list-cards=""
        data-astro-cid-s4gldfhz=""
      ></ul></details></template
  ><template data-list-tpl="obl"
    ><li
      class="bcn-loc"
      data-list-card=""
      data-member-id=""
      data-id=""
      data-class="adhere"
      data-list-description=""
      data-registry-desc=""
      data-codes=""
      data-astro-cid-qmhiihvj=""
    >
      <details class="bcn-loc__node" data-list-reqs-branch="" data-astro-cid-qmhiihvj="">
        <summary class="bcn-loc__main" data-astro-cid-qmhiihvj="">
          <span class="bcn-loc__chevron" aria-hidden="true" data-astro-cid-qmhiihvj=""
            ><span
              class="esa-icon esa-icon--sm"
              aria-hidden="true"
              data-astro-cid-wcwfib5m=""
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
                data-astro-cid-wcwfib5m=""
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-loc__class" data-list-class-tag="" data-astro-cid-qmhiihvj=""
            >Adhere</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-edit=""
            data-list-title=""
            data-list-text=""
            data-registry-title=""
            data-astro-cid-qmhiihvj=""
          ></button
          ><span
            class="bcn-loc__edited"
            data-list-edited=""
            hidden=""
            data-astro-cid-qmhiihvj=""
            ><esa-tooltip text="Has its own list wording" data-astro-cid-qmhiihvj="true"
              ><span
                class="bcn-loc__dot"
                role="img"
                aria-label="Has its own list wording"
                data-astro-cid-qmhiihvj=""
              ></span></esa-tooltip></span
          ><span data-list-count="obligation" data-astro-cid-qmhiihvj=""
            ><span
              class="bcn-swcb"
              aria-label="2 implementations"
              data-astro-cid-qmhiihvj="true"
              data-astro-cid-pmjgmd6u=""
              >2</span
            ></span
          ><esa-tooltip
            text="Move or retitle for this list"
            data-astro-cid-qmhiihvj="true"
            ><button
              type="button"
              class="bcn-loc__verb"
              aria-label="Move or retitle this obligation for this list"
              data-list-edit=""
              data-astro-cid-qmhiihvj=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-wcwfib5m=""
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
                  data-astro-cid-wcwfib5m=""
                >
                  <path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  ></path>
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  ></path></svg
              ></span></button></esa-tooltip
          ><esa-tooltip text="Duplicate for this list" data-astro-cid-qmhiihvj="true"
            ><button
              type="button"
              class="bcn-loc__verb"
              aria-label="Hold this obligation again with its own wording"
              data-list-duplicate=""
              data-astro-cid-qmhiihvj=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-wcwfib5m=""
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
                  data-astro-cid-wcwfib5m=""
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path
                    d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                  ></path></svg
              ></span></button></esa-tooltip
          ><esa-tooltip
            text="Remove from this list"
            align="end"
            data-astro-cid-qmhiihvj="true"
            ><button
              type="button"
              class="bcn-loc__verb bcn-loc__verb--danger"
              aria-label="Remove from this list"
              data-list-remove=""
              data-astro-cid-qmhiihvj=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-wcwfib5m=""
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
                  data-astro-cid-wcwfib5m=""
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path></svg
              ></span></button
          ></esa-tooltip>
        </summary>
        <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="obligation">
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="|bouldin-island-launch-shaft"
            data-evidence="0"
          >
            <button
              type="button"
              class="bcn-loc__req-name"
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
              >No evidence</span
            >
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="|byron-tract-forebay"
            data-evidence="6"
          >
            <button
              type="button"
              class="bcn-loc__req-name"
              data-list-text="Byron Tract Forebay"
            >
              Byron Tract Forebay</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
          </li>
        </ul>
      </details>
    </li></template
  ><esa-confirm-dialog
    data-list-confirm="true"
    heading="Remove from this list?"
    confirm-label="Remove"
    cancel-label="Cancel"
    show-close-button="true"
    style="--z-modal: 1500; --z-modal-backdrop: 1450"
    variant="default"
  ></esa-confirm-dialog>
</section>
```

## Styles
```css
.bcn-loc__edited {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-loc__edited[hidden] {
  display: none;
}
.bcn-loc__dot {
  place-items: center;
  block-size: 1rem;
  inline-size: 1rem;
  display: inline-grid;
}
.bcn-loc__dot:before {
  content: "";
  background: var(--color-content-brand);
  border-radius: 50%;
  block-size: 6px;
  inline-size: 6px;
}
.bcn-lot__folds {
  justify-content: flex-end;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-lot__verb-label {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-lot__cat[data-list-empty],
.bcn-lot__sub[data-list-empty] {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lot__cat[data-list-empty],
.bcn-lmt [data-list-cats] [data-list-class-tag] {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: -2px;
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
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets__listmode .bcn-loc__main {
  cursor: default;
}
.bcn-ev-targets__listmode .bcn-loc__title {
  cursor: inherit;
  text-decoration: none;
}
.bcn-ev-targets__listmode .bcn-loc__main > :last-child {
  margin-left: auto;
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
.bcn-swoc,
.bcn-loc {
  --_req-indent: 22px;
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  list-style: none;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-swoc:hover,
.bcn-loc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden],
.bcn-loc[hidden] {
  display: none;
}
.bcn-swoc.is-new,
.bcn-loc.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.bcn-swoc__node,
.bcn-loc__node {
  min-width: 0;
}
.bcn-swoc__main,
.bcn-loc__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  border-radius: 6px;
  min-width: 0;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swoc__main::-webkit-details-marker,
.bcn-loc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover,
.bcn-loc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main:focus-visible,
.bcn-loc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main,
details[open] > .bcn-loc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__chevron,
.bcn-loc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron,
details[open] > summary .bcn-loc__chevron {
  transform: rotate(90deg);
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title,
.bcn-loc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  min-width: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  border: none;
  flex: 1;
  padding: 0;
  font-weight: 500;
  overflow: hidden;
}
.bcn-swoc__title:hover,
.bcn-loc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible,
.bcn-loc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip,
.bcn-loc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__verb,
.bcn-loc__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0;
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.12s,
    color 0.12s,
    background-color 0.12s;
  display: inline-flex;
}
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible,
.bcn-loc__main:hover .bcn-loc__verb,
.bcn-loc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__verb:hover,
.bcn-loc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swoc__verb:focus-visible,
.bcn-loc__verb:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swoc__verb--danger:hover,
.bcn-loc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swoc__reqs,
.bcn-loc__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150)
    calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req:hover,
.bcn-loc__req:hover {
  background: var(--color-background-default);
}
.bcn-swoc__req-name,
.bcn-loc__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swoc__also,
.bcn-loc__also {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 0.6875rem;
}
.bcn-loc__title {
  flex: 0 auto;
}
.bcn-loc [data-list-count] {
  margin-inline-start: auto;
}
.bcn-loc__req {
  color: var(--color-content-default-secondary);
  cursor: pointer;
}
.bcn-loc__req-name {
  font: inherit;
  color: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-loc__req:hover .bcn-loc__req-name {
  color: var(--color-content-default);
}
.bcn-loc__req-name:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
  border-radius: 2px;
}
.bcn-loc__impl[hidden] {
  display: none;
}
.bcn-loc__impl .bcn-status-chip {
  flex-shrink: 0;
}
.bcn-loc__comments {
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence {
  text-align: end;
  min-width: 5.5rem;
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence[data-none] {
  color: var(--color-content-default-tertiary);
  font-weight: 400;
}
.bcn-swot,
.bcn-lot {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swot__nomatch,
.bcn-lot__nomatch {
  padding: var(--spacing-300) var(--spacing-400);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-swot__body,
.bcn-lot__body {
  flex-direction: column;
  display: flex;
}
.bcn-swot__cat,
.bcn-lot__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-swot__cat:nth-of-type(2n),
.bcn-lot__cat:nth-of-type(2n) {
  background: color-mix(in srgb, var(--bcn-gray-100) 50%, white);
}
.bcn-swot__cat:nth-of-type(2n) .bcn-swot__row:hover,
.bcn-lot__cat:nth-of-type(2n) .bcn-lot__row:hover {
  background: var(--bcn-gray-100);
}
.bcn-swot__sub + .bcn-swot__sub,
.bcn-lot__sub + .bcn-lot__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-swot__cat:last-of-type,
.bcn-lot__cat:last-of-type {
  border-bottom: none;
}
.bcn-swot__cat[hidden],
.bcn-swot__sub[hidden],
.bcn-lot__cat[hidden],
.bcn-lot__sub[hidden] {
  display: none;
}
.bcn-swot__row,
.bcn-lot__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-400);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swot__row::-webkit-details-marker,
.bcn-lot__row::-webkit-details-marker {
  display: none;
}
.bcn-swot__row:hover,
.bcn-lot__row:hover {
  background: var(--color-background-default);
}
.bcn-swot__row--cat,
.bcn-lot__row--cat {
  font-weight: 600;
}
.bcn-swot__row--sub,
.bcn-lot__row--sub {
  padding-left: calc(var(--spacing-400) + 22px);
}
.bcn-swot__chevron,
.bcn-lot__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-swot__row .bcn-swot__chevron,
details[open] > .bcn-lot__row .bcn-lot__chevron {
  transform: rotate(90deg);
}
.bcn-swot__name,
.bcn-lot__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  min-width: 0;
  padding: 0 2px;
  overflow: hidden;
}
.bcn-swot__name.is-editing,
.bcn-lot__name.is-editing {
  outline: 2px solid var(--color-obligation);
  outline-offset: 0;
  background: var(--color-background-elevation-raised);
  cursor: text;
  user-select: text;
  font-weight: 500;
}
.bcn-swot__verbs,
.bcn-lot__verbs {
  gap: 2px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-swot__verbs esa-tooltip,
.bcn-lot__verbs esa-tooltip {
  display: inline-flex;
}
.bcn-swot__verb,
.bcn-lot__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-swot__verb--quiet,
.bcn-lot__verb--quiet {
  opacity: 0;
  transition: opacity 0.12s;
}
.bcn-swot__row:hover .bcn-swot__verb--quiet,
.bcn-swot__row:focus-within .bcn-swot__verb--quiet,
.bcn-lot__row:hover .bcn-lot__verb--quiet,
.bcn-lot__row:focus-within .bcn-lot__verb--quiet {
  opacity: 1;
}
.bcn-swot__verb:hover,
.bcn-lot__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swot__verb:focus-visible,
.bcn-lot__verb:focus-visible {
  opacity: 1;
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swot__verb--danger:hover,
.bcn-lot__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swot__subs,
.bcn-lot__subs {
  flex-direction: column;
  display: flex;
}
.bcn-swot__cards,
.bcn-lot__cards {
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-300)
    calc(var(--spacing-400) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swot__hit,
.bcn-lot__hit {
  color: inherit;
  background: #fff176;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-swot__hit-chip,
.bcn-lot__hit-chip {
  box-shadow: 0 0 0 2px #fff176;
}
.bcn-lot[data-list-view="index"] [data-list-cats],
.bcn-lot[data-list-view="commitment"] [data-list-cats],
.bcn-lot[data-list-view="az"] [data-list-cats],
.bcn-lot:not([data-list-view="index"]):not([data-list-view="commitment"]):not(
    [data-list-view="az"]
  )
  [data-list-mirror-body] {
  display: none;
}
.bcn-lot [data-list-flat] > .bcn-lot__cards {
  padding: var(--spacing-300) var(--spacing-400);
}
.bcn-lot__row .bcn-lot__name[hidden] {
  display: none;
}
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
}
.bcn-swcb--sm {
  min-width: 18px;
  padding: 2px var(--spacing-100);
  font-size: var(--font-size-050);
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
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-action`: #d45087 _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-obligation`: #f95d6a _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
