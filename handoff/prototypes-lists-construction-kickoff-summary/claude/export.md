# Export

The ways the list leaves Beacon, in the rail: Word and CSV file pulls, then the JSON endpoint that feeds a Fulcrum form, with its key, URL and a payload preview.

## Key decisions
- The formats are not peers. Word and CSV are one-line rows with a format mark and a verb. JSON is an integration: it has no file mark and nothing downloads, and it carries the key, the endpoint and the payload.
- The JSON endpoint exists ONLY on obligation lists. The form spec it serves is built from obligations; action and commitment lists get Word + CSV only (Andy: "but not the API option").
- Replaces a title-row Export menu, which hid that one format is a configured integration and had nowhere to show a key.

## Gotchas
- Never render a real key or list GUID from a running environment into the fixture or the page.
- The JSON form spec carries Beacon ids so a form answer can be written back to the right obligation.

## Done when
- Word + CSV rows plus the JSON section with key, endpoint and payload, on obligation lists only.

## Markup
```html
<section class="bcn-lxp" data-list-export-panel="">
  <div class="esa-card esa-card--outlined">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Export</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="stack" data-gap="md">
        <div class="repel" data-gap="sm" data-list-export="word">
          <h4 class="cluster bcn-lxp__format typography-label-md-strong" data-gap="xs">
            <svg
              class="bcn-lxp__mark"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linejoin="round"
              >
                <path
                  d="M14 2.8H6.5A1.7 1.7 0 0 0 4.8 4.5v15a1.7 1.7 0 0 0 1.7 1.7h11a1.7 1.7 0 0 0 1.7-1.7V8Z"
                ></path>
                <path d="M13.8 2.8V8h5.4"></path>
              </g>
              <text x="12" y="18" text-anchor="middle" font-size="7.5">W</text></svg
            >Microsoft Word
          </h4>
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-list-export-download="true"
            >
              <span class="esa-button__label">Download</span>
            </button></span
          >
        </div>
        <hr class="bcn-lxp__rule" />
        <div class="repel" data-gap="sm" data-list-export="csv">
          <h4 class="cluster bcn-lxp__format typography-label-md-strong" data-gap="xs">
            <svg
              class="bcn-lxp__mark"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linejoin="round"
              >
                <path
                  d="M14 2.8H6.5A1.7 1.7 0 0 0 4.8 4.5v15a1.7 1.7 0 0 0 1.7 1.7h11a1.7 1.7 0 0 0 1.7-1.7V8Z"
                ></path>
                <path d="M13.8 2.8V8h5.4"></path>
              </g>
              <text
                x="12"
                y="18"
                text-anchor="middle"
                font-size="6"
                letter-spacing="-0.3"
              >
                CSV
              </text></svg
            >CSV
          </h4>
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-list-export-download="true"
            >
              <span class="esa-button__label">Download</span>
            </button></span
          >
        </div>
        <hr class="bcn-lxp__rule" />
        <div class="stack" data-gap="md">
          <h4 class="bcn-lxp__format typography-label-md-strong">JSON</h4>
          <div class="stack" data-gap="sm">
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">API Key</span>
              <div
                class="cluster bcn-lxp__field-row"
                data-gap="2xs"
                data-list-export-field=""
              >
                <code class="bcn-lxp__field">0f0f0f0f-0f0f-4f0f-8f0f-0f0f0f0f0f0f</code
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    aria-label="Copy API key"
                    title="Copy API key"
                    data-list-export-copy="true"
                  >
                    <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path
                          d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                        ></path></svg
                    ></span></button></span
                ><span
                  class="bcn-lxp__status"
                  role="status"
                  data-list-export-status=""
                ></span>
              </div>
              <span class="bcn-key-value__hint">Generated Aug 19, 2026 at 4:26 PM</span>
            </div>
            <div class="cluster" data-gap="xs">
              <span
                class="esa-button esa-button--variant-danger esa-button--appearance-outline esa-button--sm"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  data-list-key-roll="true"
                >
                  <span class="esa-button__label">Roll Key</span>
                </button></span
              ><span
                class="esa-button esa-button--variant-danger esa-button--appearance-outline esa-button--sm"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  data-list-key-revoke="true"
                >
                  <span class="esa-button__label">Revoke</span>
                </button></span
              >
            </div>
          </div>
          <div class="bcn-key-value">
            <span class="bcn-key-value__key">Endpoint URL</span>
            <div
              class="cluster bcn-lxp__field-row"
              data-gap="2xs"
              data-list-export-field=""
            >
              <code class="bcn-lxp__field"
                >https://beacon-api-v1.qa.esassoc.dev/api/public/obligation-lists/11111111-1111-4111-8111-111111111111.json</code
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Copy endpoint URL"
                  title="Copy endpoint URL"
                  data-list-export-copy="true"
                >
                  <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path
                        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                      ></path></svg
                  ></span></button></span
              ><span
                class="bcn-lxp__status"
                role="status"
                data-list-export-status=""
              ></span>
            </div>
          </div>
          <div class="bcn-key-value">
            <span class="bcn-key-value__key">JSON Preview</span>
            <pre class="bcn-lxp__preview" tabindex="0">
{
  "listId": "11111111-1111-4111-8111-111111111111",
  "name": "Construction Kickoff Summary",
  "description": "Issued to each prime contractor at kickoff, and re-issued when a permit amendment changes a duty.",
  "elements": [
    {
      "type": "Section",
      "key": "hazards",
      "label": "Hazards",
      "elements": [
        {
          "type": "Section",
          "key": "fire",
          "label": "Fire prevention",
          "elements": [
            {
              "type": "YesNoField",
              "key": "bxtp9j34",
              "label": "Fire Suppression Supplies On Site",
              "description": "An extinguisher and a shovel ride with every crew working in dry vegetation.",
              "required": false,
              "obligationId": "obl_01M2G6YKM0HYHZPHBXBXTP9J34",
              "memberId": "obl_01M2G6YKM0HYHZPHBXBXTP9J34-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMEB3JEW0AY0NARFBHQMP",
                  "code": "COA 9.18"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1nbaqnyd",
              "label": "Vegetation clearing method for fire prevention",
              "description": "Hand removal of vegetation and/or weed whacking are the authorized methods for vegetation removal along access roads, staging areas, and work areas within the Bethany Complex prior to allowing heavy equipment and vehicles to access these project sites after Covered Species preconstruction surveys and installment of wildlife exclusion barriers.",
              "required": false,
              "obligationId": "obl_01M2G6Y3766PDKM5BW1NBAQNYD",
              "memberId": "obl_01M2G6Y3766PDKM5BW1NBAQNYD-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMEB3JEW0AY0NARFBHQMQ",
                  "code": "COA 9.18"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "bxtp9j33",
              "label": "Vegetation Clearing Method for Fire Prevention",
              "description": "Non-living vegetative debris shall be cleared from around the immediate work footprint.",
              "required": false,
              "obligationId": "obl_01M2G6YKM0HYHZPHBXBXTP9J33",
              "memberId": "obl_01M2G6YKM0HYHZPHBXBXTP9J33-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMEB3JEW0AY0NARFBHQMS",
                  "code": "COA 9.18"
                }
              ]
            }
          ]
        },
        {
          "type": "Section",
          "key": "hazmat",
          "label": "Chemicals and fuels on site",
          "elements": [
            {
              "type": "YesNoField",
              "key": "1f0jjr7d",
              "label": "Concrete Washwater Containment",
              "description": "storage of concrete, wash water, and other contaminants in watertight containment structures",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7D",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7D-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VF",
                  "code": "COA 11.22"
                },
                {
                  "id": "req_01M2ESMKB95CSAHR95M0TPRXZX",
                  "code": "COA 11.26"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr7a",
              "label": "Contaminated Soil Segregation and Removal",
              "description": "segregation, containment, and removal of contaminated soils to the approved disposal site",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7A",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7A-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK27YFM5RYJ58JMWJ8RD",
                  "code": "COA 11.21"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "aygx6g9q",
              "label": "Database of historic contamination and hazardous materials inspections",
              "description": "A database on known historic instances of contamination and results of any field inspections regarding the presence of hazardous materials shall be maintained.",
              "required": false,
              "obligationId": "obl_01M2G6Y3GTRYAK61ZHAYGX6G9Q",
              "memberId": "obl_01M2G6Y3GTRYAK61ZHAYGX6G9Q-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK264B6YJSTX7W90NN3N",
                  "code": "COA 11.21"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr78",
              "label": "Hazardous Materials Container Labeling",
              "description": "clear labeling, handling, and safety instructions, and emergency contact information on hazardous material containers",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR78",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR78-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK27YFM5RYJ58JMWJ8R9",
                  "code": "COA 11.21"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr77",
              "label": "Hazardous Materials in Designated Storage",
              "description": "storage of fuel, oil, and other petroleum products at designated sites for hazardous materials",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR77",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR77-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK264B6YJSTX7W90NN3P",
                  "code": "COA 11.21"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr79",
              "label": "Hazardous Materials Storage Duration Limit",
              "description": "prohibition of the accumulation and temporary storage of hazardous materials exceeding 90 days",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR79",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR79-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK27YFM5RYJ58JMWJ8RC",
                  "code": "COA 11.21"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "p1vt56rd",
              "label": "Material Safety Data Sheets provided to site personnel",
              "description": "Material Safety Data Sheets provided to all Project site personnel",
              "required": false,
              "obligationId": "obl_01M2G6Y40FW7TYCC8DP1VT56RD",
              "memberId": "obl_01M2G6Y40FW7TYCC8DP1VT56RD-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK27YFM5RYJ58JMWJ8RB",
                  "code": "COA 11.21"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr7g",
              "label": "Petroleum Storage Containment",
              "description": "storage of petroleum products in non-leaking containers at impervious storage sites from which an accidental spills cannot escape",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7G",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7G-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VE",
                  "code": "COA 11.22"
                }
              ]
            }
          ]
        },
        {
          "type": "Section",
          "key": "refueling",
          "label": "Refueling and equipment servicing",
          "elements": [
            {
              "type": "YesNoField",
              "key": "nbcp3thb",
              "label": "Daily contaminant leak check and maintenance of vehicles and equipment",
              "description": "Any equipment or vehicles driven and/or operated in or adjacent to Project construction sites shall be checked daily and maintained in good working order to prevent the release of contaminants that, if introduced to water, could be deleterious to aquatic life, wildlife, or riparian habitat.",
              "required": false,
              "obligationId": "obl_01M2G6Y3GVB9GY756CNBCP3THB",
              "memberId": "obl_01M2G6Y3GVB9GY756CNBCP3THB-m1",
              "requirements": [
                {
                  "id": "req_01M2ESME0G47Q8BCWPAWVMG2J8",
                  "code": "COA 9.13"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "aygx6g9r",
              "label": "Daily inspection of equipment in contact with water for petroleum leaks",
              "description": "daily inspection of equipment for oil, grease, and other petroleum products if equipment is in contact with water",
              "required": false,
              "obligationId": "obl_01M2G6Y3GTRYAK61ZHAYGX6G9R",
              "memberId": "obl_01M2G6Y3GTRYAK61ZHAYGX6G9R-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VJ",
                  "code": "COA 11.22"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr7j",
              "label": "Fuel Transfer Containment",
              "description": "using spills containment materials under transfer areas when transferring oil or other hazardous materials from trucks to storage containers",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7J",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7J-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VH",
                  "code": "COA 11.22"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "bxtp9j2y",
              "label": "Refueling Practices",
              "description": "Refuel at least 100 feet from any water body, over secondary containment, with an attendant present.",
              "required": false,
              "obligationId": "obl_01M2G6YKM0HYHZPHBXBXTP9J2Y",
              "memberId": "obl_01M2G6YKM0HYHZPHBXBXTP9J2Y-m1",
              "requirements": [
                {
                  "id": "req_01M2ESME0G47Q8BCWPAWVMG2J9",
                  "code": "COA 9.13"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "bxtp9j2z",
              "label": "Refueling Setback from Water",
              "description": "All reserve fuel supplies shall be stored only within the confines of the designated staging areas, a minimum of 200 feet from surface waters and other sensitive habitats, such as wetlands.",
              "required": false,
              "obligationId": "obl_01M2G6YKM0HYHZPHBXBXTP9J2Z",
              "memberId": "obl_01M2G6YKM0HYHZPHBXBXTP9J2Z-m1",
              "requirements": [
                {
                  "id": "req_01M2ESME0HFZBS8WNTW5P7481F",
                  "code": "COA 9.13"
                }
              ]
            }
          ]
        },
        {
          "type": "Section",
          "key": "spills",
          "label": "Spill prevention and response",
          "elements": [
            {
              "type": "YesNoField",
              "key": "1f0jjr7c",
              "label": "Equipment Cleaning Before Water Contact",
              "description": "cleaning of external petroleum products off of equipment prior to its contact to water",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7C",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7C-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VK",
                  "code": "COA 11.22"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr7h",
              "label": "Oil Absorbent Booms in Place",
              "description": "use of oil- absorbent booms for equipment used in or adjacent to water",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7H",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7H-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VM",
                  "code": "COA 11.22"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr7e",
              "label": "Spill Containment and Response",
              "description": "In the event of an accidental spill, personnel shall identify and secure the source of the discharge and contain the discharge with sorbents, sandbags, or other material from spill kits",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7E",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7E-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK406ECZG1RS62GFJ59Y",
                  "code": "COA 11.22"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr7b",
              "label": "Spill Kits On Site",
              "description": "Keep a stocked spill kit within reach of every fuel transfer and every piece of equipment working over water.",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7B",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7B-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK27YFM5RYJ58JMWJ8RE",
                  "code": "COA 11.21"
                },
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VG",
                  "code": "COA 11.22"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr7b-2",
              "label": "Spill Kits On Site",
              "description": "At shift end, confirm every kit drawn from today was restocked before the crew leaves.",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7B",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7B-m2",
              "requirements": [
                {
                  "id": "req_01M2ESMK27YFM5RYJ58JMWJ8RE",
                  "code": "COA 11.21"
                },
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VG",
                  "code": "COA 11.22"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "bxtp9j30",
              "label": "Spill Response",
              "description": "Permittee shall immediately stop and, pursuant to pertinent state and federal statutes and regulations, arrange for repair and clean up by qualified individuals of any fuel or hazardous waste leaks or spills at the time of occurrence, or as soon as it is safe to do so.",
              "required": false,
              "obligationId": "obl_01M2G6YKM0HYHZPHBXBXTP9J30",
              "memberId": "obl_01M2G6YKM0HYHZPHBXBXTP9J30-m1",
              "requirements": [
                {
                  "id": "req_01M2ESME28WH6M351CX8A8P93D",
                  "code": "COA 9.14"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr7f",
              "label": "Staging Area Spill Containment",
              "description": "containment of contaminants in staging areas designed so that should an accidental spill occur, contaminants do not drain toward receiving waters or storm drain inlets; and staging of all stationary equipment in appropriate staging areas and positioned over drip pans.",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7F",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR7F-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK3ZJQ9BHNEKAKFQY2VN",
                  "code": "COA 11.22"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "Section",
      "key": "lighting",
      "label": "Lighting",
      "elements": [
        {
          "type": "Section",
          "key": "lighting-habitat",
          "label": "Lighting near habitat and waters",
          "elements": [
            {
              "type": "YesNoField",
              "key": "46q787qj",
              "label": "Access road location assessment before visual barrier installation",
              "description": "The Designated Biologist(s) and/or Biological Monitor(s) shall assess the locations of the identified access roads prior to the installation of any visual barriers.",
              "required": false,
              "obligationId": "obl_01M2G6Y3XH28NAN3AB46Q787QJ",
              "memberId": "obl_01M2G6Y3XH28NAN3AB46Q787QJ-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJ9BGHZMB473YX12MFME",
                  "code": "COA 11.10"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "e4qxhyga",
              "label": "Intake Lighting Restricted from the River Channel",
              "description": "Temporary lighting on the north Delta intake structure or buildings associated with the north Delta intakes may be utilized for CDFW approved construction phase nighttime Covered Activities.",
              "required": false,
              "obligationId": "obl_01M2G6YKKZS8T1WDX0E4QXHYGA",
              "memberId": "obl_01M2G6YKKZS8T1WDX0E4QXHYGA-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJ7J7YMKT4NMKG844FM6",
                  "code": "COA 11.9"
                },
                {
                  "id": "req_01M2ESMJ7J7YMKT4NMKG844FM5",
                  "code": "COA 11.9"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "e4qxhyg8",
              "label": "Lighting Color Near Habitat",
              "description": "All construction lighting used within 500 feet of Covered Species suitable habitat shall be yellow or orange lighting.",
              "required": false,
              "obligationId": "obl_01M2G6YKKZS8T1WDX0E4QXHYG8",
              "memberId": "obl_01M2G6YKKZS8T1WDX0E4QXHYG8-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJ5VAA2348XZ4ZFCRAC9",
                  "code": "COA 11.8"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "ezb6fgy6",
              "label": "Night Lighting Spill Control",
              "description": "Shield and aim every night fixture down and inward. No light crosses the work-area boundary.",
              "required": false,
              "obligationId": "obl_01M2G6YKKYBZ9A7EECEZB6FGY6",
              "memberId": "obl_01M2G6YKKYBZ9A7EECEZB6FGY6-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMMRAVC9JDF9WNS47SGKG",
                  "code": "COA 11.47"
                },
                {
                  "id": "req_01M2ESMJ5TQR3PPTWS4JN8K985",
                  "code": "COA 11.8"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "Section",
      "key": "site",
      "label": "Site conduct",
      "elements": [
        {
          "type": "Section",
          "key": "access-routes",
          "label": "Access routes and parking",
          "elements": [
            {
              "type": "YesNoField",
              "key": "e4qxhyfq",
              "label": "Equipment Confined to Access Routes",
              "description": "Project-related vehicles shall access the Project construction site(s) during Covered Activities using existing routes and shall not cross GGS habitat outside of the Project construction site(s) unless otherwise authorized by CDFW.",
              "required": false,
              "obligationId": "obl_01M2G6YKKZS8T1WDX0E4QXHYFQ",
              "memberId": "obl_01M2G6YKKZS8T1WDX0E4QXHYFQ-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMNR4G0SVH144QWV0HBM2",
                  "code": "COA 11.55.1"
                },
                {
                  "id": "req_01M2ESMPZQ9NN9E3861M5F8KYS",
                  "code": "COA 11.69"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "b3s1m1n3",
              "label": "Equipment confined to designated access routes",
              "description": "Permittee shall confine movement of heavy equipment to existing or CDFW-approved access roads or to locations at least 75 feet from flagged burrows. 11.",
              "required": false,
              "obligationId": "obl_01M2G6Y374X4RKETDHB3S1M1N3",
              "memberId": "obl_01M2G6Y374X4RKETDHB3S1M1N3-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMM95JM93STV0ZS9872BQ",
                  "code": "COA 11.41"
                },
                {
                  "id": "req_01M2ESMPFQNWZW6VVJM7QKG2P4",
                  "code": "COA 11.65"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "bxtp9j2x",
              "label": "Equipment Storage Setback from Aquatic Habitat",
              "description": "Permittee shall store equipment, supplies, and vehicles, and conduct vehicle and equipment services within the Project construction site at least 200 feet from suitable Covered Species aquatic habitat and/or other designated staging/storage areas.",
              "required": false,
              "obligationId": "obl_01M2G6YKM0HYHZPHBXBXTP9J2X",
              "memberId": "obl_01M2G6YKM0HYHZPHBXBXTP9J2X-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMDWYWKYNTP6J9K2FJE2J",
                  "code": "COA 9.11"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "bxtp9j2w",
              "label": "Staging Area Confinement",
              "description": "Permittee shall confine all Project-related parking, storage areas, laydown sites, equipment storage, and any other surface-disturbing activities to the Project construction site using, to the extent possible, previously disturbed areas such as paved or previously cleared areas.",
              "required": false,
              "obligationId": "obl_01M2G6YKM0HYHZPHBXBXTP9J2W",
              "memberId": "obl_01M2G6YKM0HYHZPHBXBXTP9J2W-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMDWX0TGCJRKPXWPA79HX",
                  "code": "COA 9.11"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "e4qxhygk",
              "label": "Use of Established Access Routes",
              "description": "All Project personnel shall access the Project construction site and any Project maintenance area using existing and established routes identified in the Project Description and shall not cross Covered Species’ habitat outside of or enroute to the Project construction site or maintenance area unless authorized by CDFW through Conditions of Approval in this ITP.",
              "required": false,
              "obligationId": "obl_01M2G6YKKZS8T1WDX0E4QXHYGK",
              "memberId": "obl_01M2G6YKKZS8T1WDX0E4QXHYGK-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMDV1RTA9PERE8C8MBS0S",
                  "code": "COA 9.10"
                },
                {
                  "id": "req_01M2ESMDWYWKYNTP6J9K2FJE2K",
                  "code": "COA 9.11"
                }
              ]
            }
          ]
        },
        {
          "type": "Section",
          "key": "pets-firearms",
          "label": "Personal items and conduct",
          "elements": [
            {
              "type": "YesNoField",
              "key": "1f0jjr74",
              "label": "No Pets, Campfires or Firearms On Site",
              "description": "Permittee shall not permit pets, campfires, or firearms in Project construction sites and site access routes, except firearms carried by authorized security personnel or local, state, or federal law enforcement officials.",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR74",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR74-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK0DDG4ZFNJAKCEHPAGJ",
                  "code": "COA 11.20"
                }
              ]
            }
          ]
        },
        {
          "type": "Section",
          "key": "speed-limits",
          "label": "Speed limits",
          "elements": [
            {
              "type": "YesNoField",
              "key": "7j15gfvf",
              "label": "Nighttime Speed Limit",
              "description": "After dark, 15 mph on every unpaved surface inside the work area, including haul roads.",
              "required": false,
              "obligationId": "obl_01M2G6YKKJFSBZ7MC77J15GFVF",
              "memberId": "obl_01M2G6YKKJFSBZ7MC77J15GFVF-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJB4W12EQY1N5B9E03H1",
                  "code": "COA 11.11"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "7j15gfvh",
              "label": "Paved Road Speed Limit",
              "description": "Project vehicles shall observe a maximum speed limit of 10 miles per hour on unpaved non-public Project access roads and in construction and maintenance sites.",
              "required": false,
              "obligationId": "obl_01M2G6YKKJFSBZ7MC77J15GFVH",
              "memberId": "obl_01M2G6YKKJFSBZ7MC77J15GFVH-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJB3K0AEXATZED9H08N1",
                  "code": "COA 11.11"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "q0vnaw3e",
              "label": "Speed Limit Near Habitat",
              "description": "Project vehicles shall observe a 10 mile per hour speed limit on paved, non-public access roads where they occur within 200 feet of GGS habitat during the active season (May 1 – October 1) except where exclusion fencing has been installed, in which case Project vehicles may observe a speed limit of up to 30 miles per hour.",
              "required": false,
              "obligationId": "obl_01M2G6YKKVAVAZP863Q0VNAW3E",
              "memberId": "obl_01M2G6YKKVAVAZP863Q0VNAW3E-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJB4W12EQY1N5B9E03H2",
                  "code": "COA 11.11"
                },
                {
                  "id": "req_01M2ESMM5NN7ECM6KBA3FW2T7C",
                  "code": "COA 11.39.1"
                },
                {
                  "id": "req_01M2ESMNR53ZMKFRBNXWPVN05H",
                  "code": "COA 11.55.1"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "kce1v6xv",
              "label": "Speed Limit Posting",
              "description": "Speeds limits shall be enforced and posted in both directions.",
              "required": false,
              "obligationId": "obl_01M2G6YKKW469S9XKYKCE1V6XV",
              "memberId": "obl_01M2G6YKKW469S9XKYKCE1V6XV-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJB4W12EQY1N5B9E03H0",
                  "code": "COA 11.11"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "7j15gfvg",
              "label": "Unpaved Road Speed Limit",
              "description": "20 mph on unpaved roads in daylight. Posted at each gate.",
              "required": false,
              "obligationId": "obl_01M2G6YKKJFSBZ7MC77J15GFVG",
              "memberId": "obl_01M2G6YKKJFSBZ7MC77J15GFVG-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJB3K0AEXATZED9H08N1",
                  "code": "COA 11.11"
                },
                {
                  "id": "req_01M2ESMKGJBCK65KGGWNK6WZXA",
                  "code": "COA 11.29"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "kce1v6xw",
              "label": "Wildlife Crossing Signage",
              "description": "Speeds limits shall be enforced and posted in both directions.",
              "required": false,
              "obligationId": "obl_01M2G6YKKW469S9XKYKCE1V6XW",
              "memberId": "obl_01M2G6YKKW469S9XKYKCE1V6XW-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJB4W12EQY1N5B9E03H0",
                  "code": "COA 11.11"
                }
              ]
            }
          ]
        },
        {
          "type": "Section",
          "key": "trash",
          "label": "Trash and food waste",
          "elements": [
            {
              "type": "YesNoField",
              "key": "1f0jjr76",
              "label": "Covered Food Waste Containers",
              "description": "To avoid attracting predators, Permittee shall ensure Project personnel dispose of all food-related trash items such as packaging, cans, bottles, and food scraps in enclosed containers.",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR76",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR76-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK0E6ZRR9CKPYAD4WQJF",
                  "code": "COA 11.20"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "bxtp9j35",
              "label": "Trash Abatement",
              "description": "Permittee shall initiate a trash abatement program before starting Covered Activities and shall continue the program for the duration of the Project.",
              "required": false,
              "obligationId": "obl_01M2G6YKM0HYHZPHBXBXTP9J35",
              "memberId": "obl_01M2G6YKM0HYHZPHBXBXTP9J35-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMDKPBV0KRRJY304RM6H9",
                  "code": "COA 9.6"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr73",
              "label": "Trash Load Covering",
              "description": "Vehicles carrying trash shall have loads covered and secured to prevent trash and debris from falling onto roads and adjacent properties.",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR73",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR73-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK0E6ZRR9CKPYAD4WQJJ",
                  "code": "COA 11.20"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "1f0jjr75",
              "label": "Trash Removal Cadence",
              "description": "Haul all trash off site at the end of every shift. Nothing stays overnight.",
              "required": false,
              "obligationId": "obl_01M2G6YKKXGW0MHG5S1F0JJR75",
              "memberId": "obl_01M2G6YKKXGW0MHG5S1F0JJR75-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMK0E6ZRR9CKPYAD4WQJG",
                  "code": "COA 11.20"
                }
              ]
            }
          ]
        },
        {
          "type": "Section",
          "key": "work-hours",
          "label": "Work hours",
          "elements": [
            {
              "type": "YesNoField",
              "key": "ezb6fgy5",
              "label": "Daytime Work Hour Limit",
              "description": "During the CTS active season or within 300 feet of suitable CTS aquatic habitat, Permittee shall terminate all Covered Activities not encircled by an exclusion barrier, including use and/or construction of access roads for preconstruction activities, SCADA and transmission line construction and maintenance, and facility maintenance no less than 30 minutes before sunset and shall not resume Covered Activities until 30 minutes after sunrise.",
              "required": false,
              "obligationId": "obl_01M2G6YKKYBZ9A7EECEZB6FGY5",
              "memberId": "obl_01M2G6YKKYBZ9A7EECEZB6FGY5-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMMPK3754MVG37HGJJK0Y",
                  "code": "COA 11.46"
                },
                {
                  "id": "req_01M2ESMJ42JSX41WJGE87W85HT",
                  "code": "COA 11.7"
                }
              ]
            },
            {
              "type": "YesNoField",
              "key": "e4qxhyg4",
              "label": "Night Vehicle Travel Caution",
              "description": "Any vehicle traffic necessary during nighttime hours associated with emergency response, security, or operations and maintenance activities subsequent to construction shall be conducted with extra caution to minimize impacts to nocturnal Covered Species.",
              "required": false,
              "obligationId": "obl_01M2G6YKKZS8T1WDX0E4QXHYG4",
              "memberId": "obl_01M2G6YKKZS8T1WDX0E4QXHYG4-m1",
              "requirements": [
                {
                  "id": "req_01M2ESMJ42JSX41WJGE87W85HW",
                  "code": "COA 11.7"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}</pre
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <template data-list-export-copied=""
    ><span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
        <path d="M20 6 9 17l-5-5"></path></svg></span
  ></template>
</section>
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
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-ldr .bcn-key-value__key,
.bcn-ldr .bcn-key-value__val {
  font-size: 0.875rem;
  line-height: 1.45;
}
.bcn-ldr .bcn-key-value__val {
  overflow-wrap: anywhere;
}
.bcn-lxp__format,
.bcn-lxp .bcn-key-value__key,
.bcn-lxp .bcn-key-value__val {
  font-size: 0.875rem;
  line-height: 1.45;
}
.bcn-lxp__format {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-lxp .bcn-key-value {
  gap: var(--spacing-100);
}
.bcn-lxp__mark {
  block-size: 1.5em;
  inline-size: 1.5em;
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-lxp__mark text {
  fill: currentColor;
  font-family: var(--typography-font-family-sans);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-lxp__rule {
  border: 0;
  border-block-start: 1px solid var(--color-border-default-subtle);
  margin: 0;
}
.bcn-lxp__field-row {
  flex-wrap: nowrap;
}
.bcn-lxp__field {
  min-inline-size: 0;
  padding: var(--spacing-100) var(--spacing-200);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-sm);
  color: var(--color-content-default);
  font-family: var(--typography-font-family-mono);
  font-size: 0.75rem;
  line-height: var(--line-height-normal);
  overflow-wrap: anywhere;
  flex: auto;
}
.bcn-lxp [data-list-export-copy][data-copied] {
  color: var(--color-content-utility-success);
}
.bcn-lxp__preview {
  padding: var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  color: var(--color-content-default);
  font-family: var(--typography-font-family-mono);
  font-size: 0.75rem;
  line-height: var(--line-height-normal);
  white-space: pre-wrap;
  tab-size: 2;
  max-block-size: 18rem;
  margin: 0;
  overflow: auto;
}
.bcn-lxp__preview:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.bcn-lxp__status {
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  block-size: 1px;
  inline-size: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
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
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--elevation-2, 0 2px 12px 0 #0000000a);
}
.esa-card--filled {
  --_card-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card--padding-none {
  --_card-padding: 0;
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__subtitle {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: var(--color-content-on-brand, #fffc);
}
.esa-card__meta {
  gap: var(--spacing-100, 0.25rem) var(--spacing-500, 1.5rem);
  margin: var(--spacing-050, 0.125rem) 0 0;
  flex-wrap: wrap;
  display: flex;
}
.esa-card__meta-pair {
  align-items: baseline;
  gap: var(--spacing-100, 0.25rem);
  min-width: 0;
  display: flex;
}
.esa-card__meta dt {
  font-size: var(--_card-meta-label-size);
  font-weight: var(--font-weight-medium, 500);
  color: var(--_card-meta-label-color);
}
.esa-card__meta dd {
  font-size: var(--_card-meta-value-size);
  color: inherit;
  margin: 0;
}
.esa-card--header-primary .esa-card__meta dt {
  color: #fffc;
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  display: flex;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
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
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
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
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
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
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
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
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--form-label-color`: #525252 _(component)_
- `--gap`: 1rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
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
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
