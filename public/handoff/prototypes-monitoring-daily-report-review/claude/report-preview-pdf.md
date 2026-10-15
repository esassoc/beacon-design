# Report preview → PDF

Generate Report opens a preview of the regulator document (letterhead, General Information, Compliance Monitoring Details per location, captioned photos, End of Report) built from the same model as the PDF, so the preview is what gets issued. Generate PDF downloads it and moves the DMR to Report Generated.

## Key decisions
- PDF, not Word (product decision), generated client-side here with jsPDF + autotable from the shared report model.
- "Highlight Beacon edits" tints every passage whose text differs from the inspector's Fulcrum original — the reviewer sees exactly what the regulator reads that is not in the field record. The PDF never carries the tints.
- If corrections are still unpushed, the preview warns and offers "Push to Fulcrum first".

## Gotchas
- The current prod Word generator prints "[object Object]" for Contractor(s); the model joins the contractor list explicitly.
- The PDF uses Times (built in) rather than the theme's Besley; embedding the brand font is a production task.

## Done when
- The preview reflects every edit made on the page; Generate PDF downloads a multi-page PDF with the invented letterhead on every page and "Page X of Y" footers.
- After generating, the status chip reads Report Generated and the change log records the file name.

## Markup
```html
<esa-dialog
  heading="Report preview"
  size="lg"
  data-bcn-report-preview="true"
  class="bcn-report-preview"
  open=""
  ><div class="bcn-report-preview__body stack" data-gap="md">
    <div class="bcn-report-preview__toolbar cluster" data-gap="md">
      <esa-switch-toggle
        label="Highlight Beacon edits"
        checked=""
        data-rp-highlight="true"
        size="md"
        label-position="after"
      ></esa-switch-toggle
      ><span class="bcn-report-preview__legend typography-body-sm"
        ><span
          class="bcn-report-preview__swatch"
          aria-hidden="true"
          data-rp-swatch=""
        ></span
        ><span data-rp-count="">2 passages edited in Beacon</span></span
      >
    </div>
    <div data-rp-pending="">
      <div class="esa-alert-box esa-alert-box--warning typography-body-sm">
        <div class="esa-alert-box__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
            ></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </div>
        <div class="esa-alert-box__body">
          <div class="esa-alert-box__message">
            <div class="stack" data-gap="sm">
              <span data-rp-pending-text=""
                >2 corrections haven't been pushed to Fulcrum. The report will include
                them, but Fulcrum won't match until you push.</span
              >
              <div class="cluster" data-gap="xs">
                <span
                  class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-rp-push="true"
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line></svg></span
                    ><span class="esa-button__label">Push to Fulcrum first</span>
                  </button></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bcn-report-preview__desk">
      <article
        class="bcn-report-doc"
        tabindex="0"
        aria-label="Report document"
        data-rp-doc=""
        data-highlight=""
      >
        <header class="bcn-report-doc__letterhead">
          <div class="bcn-report-doc__org">
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%20120%22%3E%0A%20%20%3Cpath%20d%3D%22M60%204%20L112%2022%20L104%2082%20Q86%20108%2060%20116%20Q34%20108%2016%2082%20L8%2022Z%22%20fill%3D%22%232f4f4f%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M60%2012%20L104%2027%20L97%2079%20Q81%20101%2060%20108%20Q39%20101%2023%2079%20L16%2027Z%22%20fill%3D%22%23e9e2cf%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2070%20L38%2048%20L50%2060%20L66%2038%20L82%2058%20L92%2050%20L102%2066%20L98%2080%20Q82%20100%2060%20106%20Q38%20100%2022%2080Z%22%20fill%3D%22%237a6a4f%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M24%2084%20Q60%2072%2096%2084%20Q82%20100%2060%20106%20Q38%20100%2024%2084Z%22%20fill%3D%22%23b08d57%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2284%22%20cy%3D%2236%22%20r%3D%227%22%20fill%3D%22%23d9822b%22%2F%3E%0A%3C%2Fsvg%3E"
              alt=""
              width="56"
              height="56"
            />
            <span class="bcn-report-doc__agency">Basin &amp; Range Lands Office</span>
          </div>
          <div class="bcn-report-doc__org bcn-report-doc__org--end">
            <span>Fieldstone Environmental Monitoring</span>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%20120%22%3E%0A%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2292%22%20rx%3D%2244%22%20ry%3D%2216%22%20fill%3D%22%234d5b3a%22%2F%3E%0A%20%20%3Cellipse%20cx%3D%2258%22%20cy%3D%2264%22%20rx%3D%2232%22%20ry%3D%2213%22%20fill%3D%22%237d8a5a%22%2F%3E%0A%20%20%3Cellipse%20cx%3D%2262%22%20cy%3D%2240%22%20rx%3D%2220%22%20ry%3D%2210%22%20fill%3D%22%23a9b07c%22%2F%3E%0A%3C%2Fsvg%3E"
              alt=""
              width="56"
              height="56"
            />
          </div>
          <p class="bcn-report-doc__title">Daily Monitoring Report</p>
          <p class="bcn-report-doc__project">Coyote Wash Substation</p>
        </header>
        <h3 class="bcn-report-doc__heading">Dana Whitcomb – Compliance Inspector</h3>
        <h4 class="bcn-report-doc__section">General Information</h4>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">Compliance Inspector</th>
              <td>Dana Whitcomb</td>
            </tr>
            <tr>
              <th scope="row">Date</th>
              <td>09/11/2026</td>
            </tr>
            <tr>
              <th scope="row">Time In</th>
              <td>07:00</td>
            </tr>
            <tr>
              <th scope="row">Weather</th>
              <td>
                Clear, 74°F (high 98°F, low 61°F); wind 6 mph SW; precipitation 0 inches
              </td>
            </tr>
            <tr>
              <th scope="row">Tailboard(s) Attended and Location(s)</th>
              <td>ridgeline tailboard 0630 at laydown yard</td>
            </tr>
            <tr>
              <th scope="row">Contractor(s)</th>
              <td>Ridgeline Electric, Mesa Civil Constructors, Arroyo Pole Delivery</td>
            </tr>
            <tr>
              <th scope="row">Variance Request(s) Reviewed</th>
              <td>None</td>
            </tr>
            <tr>
              <th scope="row">Report Compliance Summary</th>
              <td>2 In Compliance, 1 Minor Deviation</td>
            </tr>
          </tbody>
        </table>
        <h4 class="bcn-report-doc__section">Compliance Monitoring Details</h4>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">Monitoring Location</th>
              <td>CW-TS14</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              <td>09:05</td>
            </tr>
            <tr>
              <th scope="row">Compliance Level</th>
              <td>Level 1 – In Compliance</td>
            </tr>
            <tr>
              <th scope="row">Site/Construction Activities Observed</th>
              <td>
                <p>
                  09:14: Cactus salvage tag removal.
                  <mark class="bcn-report-doc__edit"
                    >Fieldstone observed the Ridgeline Electric crew removing salvage tags
                    from cacti that were not selected for salvage at CW-TS14, marking the
                    pad as salvage-complete. No live plants were disturbed.</mark
                  >
                </p>
                <p>
                  10:38: Clear and grub. Mesa Civil crew clearing and grubbing the TS14
                  pad with a skid steer. Vegetation piled at the pad edge. Biological
                  monitor present.
                </p>
                <p>
                  10:44: Dust-2347-09112026 (Resolved). Visible dust leaving the TS14 pad
                  while the skid steer cleared vegetation; wind picked up around 10:30.
                  Asked the operator to stop until the water truck arrived. Truck on site
                  at 10:58, dust controlled and work resumed.
                </p>
                <p>
                  10:52: Desert tortoise burrow (inactive). Inactive burrow found 30 ft
                  north of the pad edge, outside the work limits. Scoped by the biological
                  monitor — no sign of use. Flagged for avoidance.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">Notes</th>
              <td>
                Biological monitor on site for all ground disturbance. No wildlife in work
                area during clearing.
              </td>
            </tr>
            <tr>
              <th scope="row">Wildlife Observed</th>
              <td>Common raven, Side-blotched lizard, Black-tailed jackrabbit</td>
            </tr>
          </tbody>
        </table>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">Monitoring Location</th>
              <td>CW-TS22</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              <td>11:20</td>
            </tr>
            <tr>
              <th scope="row">Compliance Level</th>
              <td>Level 2 – Minor Deviation</td>
            </tr>
            <tr>
              <th scope="row">Site/Construction Activities Observed</th>
              <td>
                <p>
                  11:20: Pad grading. Mesa Civil grading the TS22 pad to finish elevation.
                  Water truck running for dust control.
                </p>
                <p>
                  11:34: Erosion-2331-09092026 (Open). Mesa Civil re-staked part of the
                  fence this morning but about 15 ft is still down at the wash crossing.
                  No sediment past the fence line yet. Foreman says it will be finished
                  today.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">Notes</th>
              <td>
                Told Mesa Civil foreman about the silt fence. They said they would fix it
                today.
              </td>
            </tr>
            <tr>
              <th scope="row">Wildlife Observed</th>
              <td>Say’s phoebe</td>
            </tr>
          </tbody>
        </table>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">Monitoring Location</th>
              <td>CW-TS31</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              <td>13:04</td>
            </tr>
            <tr>
              <th scope="row">Compliance Level</th>
              <td>Level 1 – In Compliance</td>
            </tr>
            <tr>
              <th scope="row">Site/Construction Activities Observed</th>
              <td>
                <p>
                  13:04: Pole delivery. Arroyo Pole Delivery crew delivering steel poles
                  to TS31 and staging them on cribbing inside the work limits.
                </p>
                <p>
                  13:40: Verdin nest (active). Active verdin nest with two nestlings in a
                  creosote bush at the NW corner of the pad. 50 ft buffer staked and
                  flagged.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">Notes</th>
              <td>
                <mark class="bcn-report-doc__edit"
                  >An active verdin nest was found in a creosote bush at the northwest
                  corner of the CW-TS31 pad. A 50-foot no-work buffer was staked and
                  flagged, and no work took place inside it.</mark
                >
              </td>
            </tr>
            <tr>
              <th scope="row">Wildlife Observed</th>
              <td>Verdin, Common raven</td>
            </tr>
          </tbody>
        </table>
        <h4 class="bcn-report-doc__section">Photos of Coyote Wash Substation</h4>
        <ul class="bcn-report-doc__photos" role="list">
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cellipse%20cx%3D%2230%22%20cy%3D%22110%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2233.6%22%20cy%3D%22108%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%22170%22%20cy%3D%22100%22%20rx%3D%227%22%20ry%3D%224.8999999999999995%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22172.8%22%20cy%3D%2298%22%20rx%3D%224.2%22%20ry%3D%223.15%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2292%22%20y%3D%2286%22%20width%3D%2216%22%20height%3D%2240%22%20rx%3D%228%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2278%22%20y%3D%2296%22%20width%3D%2210%22%20height%3D%2220%22%20rx%3D%225%22%20fill%3D%22%235f6b41%22%2F%3E%3Crect%20x%3D%2282%22%20y%3D%22110%22%20width%3D%2214%22%20height%3D%226%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22112%22%20y%3D%2292%22%20width%3D%2210%22%20height%3D%2218%22%20rx%3D%225%22%20fill%3D%22%235f6b41%22%2F%3E%3Crect%20x%3D%22104%22%20y%3D%22104%22%20width%3D%2212%22%20height%3D%226%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22108%22%20y%3D%2298%22%20width%3D%229%22%20height%3D%226%22%20fill%3D%22%23d9822b%22%2F%3E%3C%2Fsvg%3E"
                alt="Salvage tags being removed from a barrel cactus on the CW-TS14 pad"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 09:16<br /><span class="bcn-report-doc__muted"
                  >CW-TS14</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cellipse%20cx%3D%2230%22%20cy%3D%22110%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2233.6%22%20cy%3D%22108%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%22170%22%20cy%3D%22100%22%20rx%3D%227%22%20ry%3D%224.8999999999999995%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22172.8%22%20cy%3D%2298%22%20rx%3D%224.2%22%20ry%3D%223.15%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2292%22%20y%3D%2286%22%20width%3D%2216%22%20height%3D%2240%22%20rx%3D%228%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2278%22%20y%3D%2296%22%20width%3D%2210%22%20height%3D%2220%22%20rx%3D%225%22%20fill%3D%22%235f6b41%22%2F%3E%3Crect%20x%3D%2282%22%20y%3D%22110%22%20width%3D%2214%22%20height%3D%226%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22112%22%20y%3D%2292%22%20width%3D%2210%22%20height%3D%2218%22%20rx%3D%225%22%20fill%3D%22%235f6b41%22%2F%3E%3Crect%20x%3D%22104%22%20y%3D%22104%22%20width%3D%2212%22%20height%3D%226%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22108%22%20y%3D%2298%22%20width%3D%229%22%20height%3D%226%22%20fill%3D%22%23d9822b%22%2F%3E%3C%2Fsvg%3E"
                alt="Cleared cactus with tag removed, pad marked as salvaged"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 09:18<br /><span class="bcn-report-doc__muted"
                  >CW-TS14</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cpath%20d%3D%22M0%20150%20L70%20100%20L200%20100%20L200%20150Z%22%20fill%3D%22%23bfa77c%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2296%22%20y%3D%2296%22%20width%3D%2244%22%20height%3D%2222%22%20rx%3D%223%22%20fill%3D%22%23e0a526%22%2F%3E%3Crect%20x%3D%22104%22%20y%3D%2286%22%20width%3D%2222%22%20height%3D%2214%22%20rx%3D%222%22%20fill%3D%22%23e0a526%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22112%22%20width%3D%2220%22%20height%3D%226%22%20fill%3D%22%236b6b6b%22%2F%3E%3Ccircle%20cx%3D%22104%22%20cy%3D%22122%22%20r%3D%227%22%20fill%3D%22%233d3d3d%22%2F%3E%3Ccircle%20cx%3D%22132%22%20cy%3D%22122%22%20r%3D%227%22%20fill%3D%22%233d3d3d%22%2F%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2240%22%20cy%3D%22104%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2243.6%22%20cy%3D%22102%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%2228%22%20cy%3D%22112%22%20rx%3D%227%22%20ry%3D%224.8999999999999995%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2230.8%22%20cy%3D%22110%22%20rx%3D%224.2%22%20ry%3D%223.15%22%20fill%3D%22%235f6b41%22%2F%3E%3C%2Fsvg%3E"
                alt="Skid steer clearing vegetation on the CW-TS14 pad"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 10:41<br /><span class="bcn-report-doc__muted"
                  >CW-TS14</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cpath%20d%3D%22M0%20150%20L70%20100%20L200%20100%20L200%20150Z%22%20fill%3D%22%23bfa77c%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2296%22%20y%3D%2296%22%20width%3D%2244%22%20height%3D%2222%22%20rx%3D%223%22%20fill%3D%22%23e0a526%22%2F%3E%3Crect%20x%3D%22104%22%20y%3D%2286%22%20width%3D%2222%22%20height%3D%2214%22%20rx%3D%222%22%20fill%3D%22%23e0a526%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22112%22%20width%3D%2220%22%20height%3D%226%22%20fill%3D%22%236b6b6b%22%2F%3E%3Ccircle%20cx%3D%22104%22%20cy%3D%22122%22%20r%3D%227%22%20fill%3D%22%233d3d3d%22%2F%3E%3Ccircle%20cx%3D%22132%22%20cy%3D%22122%22%20r%3D%227%22%20fill%3D%22%233d3d3d%22%2F%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2240%22%20cy%3D%22104%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2243.6%22%20cy%3D%22102%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%2228%22%20cy%3D%22112%22%20rx%3D%227%22%20ry%3D%224.8999999999999995%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2230.8%22%20cy%3D%22110%22%20rx%3D%224.2%22%20ry%3D%223.15%22%20fill%3D%22%235f6b41%22%2F%3E%3C%2Fsvg%3E"
                alt="Dust rising behind the skid steer while clearing the CW-TS14 pad"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 10:45<br /><span class="bcn-report-doc__muted"
                  >CW-TS14</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cellipse%20cx%3D%22150%22%20cy%3D%2298%22%20rx%3D%2212%22%20ry%3D%228.399999999999999%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22154.8%22%20cy%3D%2296%22%20rx%3D%227.199999999999999%22%20ry%3D%225.4%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%2296%22%20cy%3D%22114%22%20rx%3D%2234%22%20ry%3D%2212%22%20fill%3D%22%23bfa77c%22%2F%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2296%22%20cy%3D%22112%22%20rx%3D%2216%22%20ry%3D%228%22%20fill%3D%22%234a3c28%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%22140%22%20y1%3D%22122%22%20x2%3D%22140%22%20y2%3D%22104%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%222%22%2F%3E%3Crect%20x%3D%22140%22%20y%3D%22104%22%20width%3D%228%22%20height%3D%225%22%20fill%3D%22%233f8fd9%22%2F%3E%3C%2Fsvg%3E"
                alt="Inactive burrow at the north edge of the CW-TS14 work area"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 10:53<br /><span class="bcn-report-doc__muted"
                  >CW-TS14</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cellipse%20cx%3D%22170%22%20cy%3D%2296%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22173.6%22%20cy%3D%2294%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%20110%20L60%20104%20L80%20112%22%20stroke%3D%22%232f2f2f%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M80%20112%20L120%20128%20L150%20124%22%20stroke%3D%22%232f2f2f%22%20stroke-width%3D%223%22%20fill%3D%22none%22%20stroke-dasharray%3D%226%205%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%2210%22%20y1%3D%2296%22%20x2%3D%2210%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3Cline%20x1%3D%2230%22%20y1%3D%2296%22%20x2%3D%2230%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3Cline%20x1%3D%2250%22%20y1%3D%2296%22%20x2%3D%2250%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%22118%22%20y1%3D%22112%22%20x2%3D%22126%22%20y2%3D%22132%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3C%2Fsvg%3E"
                alt="Section of silt fence down where the access road crosses the wash"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 11:35<br /><span class="bcn-report-doc__muted"
                  >CW-TS22</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cpath%20d%3D%22M60%20150%20C80%20120%20110%20110%20130%2078%20L150%2078%20C135%20112%20110%20130%20100%20150Z%22%20fill%3D%22%23bfa77c%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M80%20150%20C95%20125%20118%20110%20138%2080%22%20stroke%3D%22%23a89067%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3Cellipse%20cx%3D%2240%22%20cy%3D%22100%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2243.6%22%20cy%3D%2298%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%22170%22%20cy%3D%22110%22%20rx%3D%2210%22%20ry%3D%227%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22174%22%20cy%3D%22108%22%20rx%3D%226%22%20ry%3D%224.5%22%20fill%3D%22%235f6b41%22%2F%3E%3C%2Fsvg%3E"
                alt="Drainage crossing downslope of the CW-TS22 pad"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 11:37<br /><span class="bcn-report-doc__muted"
                  >CW-TS22</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cpath%20d%3D%22M20%20150%20L60%2092%20L150%2092%20L190%20150Z%22%20fill%3D%22%23bfa77c%22%2F%3E%3Cellipse%20cx%3D%2215%22%20cy%3D%2296%22%20rx%3D%227%22%20ry%3D%224.8999999999999995%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2217.8%22%20cy%3D%2294%22%20rx%3D%224.2%22%20ry%3D%223.15%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%22185%22%20cy%3D%2298%22%20rx%3D%228%22%20ry%3D%225.6%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22188.2%22%20cy%3D%2296%22%20rx%3D%224.8%22%20ry%3D%223.6%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2292%22%20x2%3D%2260%22%20y2%3D%2284%22%20stroke%3D%22%23d9822b%22%20stroke-width%3D%222%22%2F%3E%3Cline%20x1%3D%22150%22%20y1%3D%2292%22%20x2%3D%22150%22%20y2%3D%2284%22%20stroke%3D%22%23d9822b%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E"
                alt="Graded CW-TS22 pad, looking east"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 12:02<br /><span class="bcn-report-doc__muted"
                  >CW-TS22</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cellipse%20cx%3D%2225%22%20cy%3D%22100%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2228.6%22%20cy%3D%2298%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2240%22%20y%3D%22104%22%20width%3D%22130%22%20height%3D%228%22%20rx%3D%224%22%20fill%3D%22%238d949a%22%2F%3E%3Crect%20x%3D%2240%22%20y%3D%22113%22%20width%3D%22130%22%20height%3D%228%22%20rx%3D%224%22%20fill%3D%22%238d949a%22%2F%3E%3Crect%20x%3D%2240%22%20y%3D%22122%22%20width%3D%22130%22%20height%3D%228%22%20rx%3D%224%22%20fill%3D%22%238d949a%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2252%22%20y%3D%22128%22%20width%3D%2210%22%20height%3D%226%22%20fill%3D%22%236e5a3a%22%2F%3E%3Crect%20x%3D%22146%22%20y%3D%22128%22%20width%3D%2210%22%20height%3D%226%22%20fill%3D%22%236e5a3a%22%2F%3E%3C%2Fsvg%3E"
                alt="Steel poles staged on cribbing at CW-TS31"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 13:06<br /><span class="bcn-report-doc__muted"
                  >CW-TS31</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cellipse%20cx%3D%22100%22%20cy%3D%22104%22%20rx%3D%2226%22%20ry%3D%2218.2%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22110.4%22%20cy%3D%22102%22%20rx%3D%2215.6%22%20ry%3D%2211.700000000000001%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%2270%22%20cy%3D%22112%22%20rx%3D%2212%22%20ry%3D%228.399999999999999%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2274.8%22%20cy%3D%22110%22%20rx%3D%227.199999999999999%22%20ry%3D%225.4%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22104%22%20cy%3D%22100%22%20r%3D%226%22%20fill%3D%22%238a6d45%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2290%22%20x2%3D%2250%22%20y2%3D%2274%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%222%22%2F%3E%3Crect%20x%3D%2250%22%20y%3D%2274%22%20width%3D%228%22%20height%3D%225%22%20fill%3D%22%23d9822b%22%2F%3E%3Cline%20x1%3D%22150%22%20y1%3D%2290%22%20x2%3D%22150%22%20y2%3D%2274%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%222%22%2F%3E%3Crect%20x%3D%22150%22%20y%3D%2274%22%20width%3D%228%22%20height%3D%225%22%20fill%3D%22%23d9822b%22%2F%3E%3Cline%20x1%3D%2240%22%20y1%3D%22130%22%20x2%3D%2240%22%20y2%3D%22114%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%222%22%2F%3E%3Crect%20x%3D%2240%22%20y%3D%22114%22%20width%3D%228%22%20height%3D%225%22%20fill%3D%22%23d9822b%22%2F%3E%3Cline%20x1%3D%22160%22%20y1%3D%22130%22%20x2%3D%22160%22%20y2%3D%22114%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%222%22%2F%3E%3Crect%20x%3D%22160%22%20y%3D%22114%22%20width%3D%228%22%20height%3D%225%22%20fill%3D%22%23d9822b%22%2F%3E%3C%2Fsvg%3E"
                alt="Staked 50-foot buffer around an active verdin nest in a creosote bush"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 13:42<br /><span class="bcn-report-doc__muted"
                  >CW-TS31</span
                >
              </figcaption>
            </figure>
          </li>
        </ul>
        <h4 class="bcn-report-doc__section">End of Report</h4>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">End Time</th>
              <td>16:30</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </div>
  <div slot="footer" class="cluster" data-gap="xs">
    <span
      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-rp-generate="true"
      >
        <span class="esa-icon esa-icon--md" aria-hidden="true"
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line></svg></span
        ><span class="esa-button__label">Generate PDF</span>
      </button></span
    ><span
      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--md"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-rp-cancel="true"
      >
        <span class="esa-button__label">Cancel</span>
      </button></span
    >
  </div></esa-dialog
>
```

## Styles
```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
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
.bcn-dmr-wa__heading .esa-icon,
.bcn-dmr-wa__subhead .esa-icon {
  color: var(--color-content-default-secondary, #646464);
}
.bcn-report-preview {
  --dialog-width-lg: min(1040px, 96vw);
}
.bcn-report-preview__body {
  min-height: 70vh;
}
.bcn-report-preview__toolbar {
  justify-content: space-between;
}
.bcn-report-preview__legend {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  color: var(--color-content-default-secondary, #646464);
  display: inline-flex;
}
.bcn-report-preview__swatch {
  border-radius: var(--radius-sm, 4px);
  background: var(--color-background-utility-info-muted, #e6f1fd);
  border: var(--border-width-default, 1px) solid var(--color-border-utility-info, #8ec8f6);
  block-size: 1rem;
  inline-size: 1rem;
}
.bcn-report-preview__swatch[hidden] {
  display: none;
}
.bcn-report-preview__desk {
  background: var(--color-background-elevation-sunken, #f0f0f0);
  border-radius: var(--radius-md, 0.5rem);
  padding: var(--spacing-500, 1.5rem);
}
.bcn-report-preview .bcn-report-doc {
  background: var(--color-background-elevation-floating, #fcfcfc);
  max-inline-size: 816px;
  color: var(--color-content-default, #202020);
  box-shadow: var(--shadow-200, 0 2px 8px #0000001f);
  font-family: var(--font-decorative, "Besley", serif);
  border: 1px solid #0000;
  margin-inline: auto;
  padding: 48px 72px 72px;
  font-size: 14.5px;
  line-height: 1.45;
}
.bcn-report-preview .bcn-report-doc:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-report-preview .bcn-report-doc__letterhead {
  align-items: center;
  row-gap: var(--spacing-200, 0.5rem);
  border-block-end: 1px solid var(--color-border-default, #bbb);
  grid-template-columns: 1fr 1fr;
  margin-block-end: var(--spacing-500, 1.5rem);
  padding-block-end: var(--spacing-300, 0.75rem);
  display: grid;
}
.bcn-report-preview .bcn-report-doc__org {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  font-size: 13px;
  display: flex;
}
.bcn-report-preview .bcn-report-doc__org--end {
  text-align: end;
  justify-content: flex-end;
}
.bcn-report-preview .bcn-report-doc__agency {
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__title,
.bcn-report-preview .bcn-report-doc__project {
  text-align: center;
  grid-column: 1/-1;
  margin: 0;
}
.bcn-report-preview .bcn-report-doc__title {
  font-size: 20px;
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__heading {
  margin: 0 0 var(--spacing-400, 1rem);
  font-size: 19px;
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__section {
  margin: var(--spacing-500, 1.5rem) 0 var(--spacing-200, 0.5rem);
  font-size: 17px;
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__table {
  border-collapse: collapse;
  inline-size: 100%;
  margin-block-end: var(--spacing-400, 1rem);
}
.bcn-report-preview .bcn-report-doc__table th,
.bcn-report-preview .bcn-report-doc__table td {
  border: 1px solid var(--color-border-default, #bbb);
  text-align: start;
  vertical-align: top;
  padding: 6px 8px;
}
.bcn-report-preview .bcn-report-doc__table th {
  background: var(--color-background-elevation-sunken, #f0f0f0);
  inline-size: 30%;
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__table p {
  margin: 0 0 var(--spacing-200, 0.5rem);
}
.bcn-report-preview .bcn-report-doc__table p:last-child {
  margin-block-end: 0;
}
.bcn-report-preview .bcn-report-doc__photos {
  gap: var(--spacing-500, 1.5rem);
  margin: 0 0 var(--spacing-400, 1rem);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 0;
  list-style: none;
  display: grid;
}
.bcn-report-preview .bcn-report-doc__photos figure {
  margin: 0;
}
.bcn-report-preview .bcn-report-doc__photos img {
  aspect-ratio: 4/3;
  border: 1px solid var(--color-border-default, #bbb);
  block-size: auto;
  inline-size: 100%;
  display: block;
}
.bcn-report-preview .bcn-report-doc__photos figcaption {
  margin-block-start: var(--spacing-150, 0.375rem);
  font-size: 13.5px;
}
.bcn-report-preview .bcn-report-doc__muted {
  color: var(--color-content-default-secondary, #646464);
}
.bcn-report-preview .bcn-report-doc__edit {
  background: var(--color-background-utility-info-muted, #e6f1fd);
  color: inherit;
  border-radius: var(--radius-xs, 2px);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding-inline: 2px;
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-alert-box {
  --_alert-bg: var(--color-background-utility-info-subtle, #fbfdff);
  --_alert-border: var(--color-border-utility-info, #acd8fc);
  --_alert-accent: var(--color-content-utility-info, #0d74ce);
  --_alert-icon-color: var(--_alert-accent);
  --_alert-title-color: var(--_alert-accent);
  --_alert-text-color: var(
    --alert-box-text-color,
    var(--color-content-default-secondary, #646464)
  );
  align-items: flex-start;
  gap: var(--spacing-300, 0.75rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  border: var(--border-width-default, 1px) solid var(--_alert-border);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--_alert-bg);
  display: flex;
}
.esa-alert-box--success {
  --_alert-bg: var(--color-background-utility-success-subtle, #fbfefc);
  --_alert-border: var(--color-border-utility-success, #adddc0);
  --_alert-accent: var(--color-content-utility-success, #218358);
}
.esa-alert-box--warning {
  --_alert-bg: var(--color-background-utility-warning-subtle, #fefdfb);
  --_alert-border: var(--color-border-utility-warning, #f3d673);
  --_alert-accent: var(--color-content-utility-warning, #ab6400);
}
.esa-alert-box--danger {
  --_alert-bg: var(--color-background-utility-danger-subtle, #fffcfc);
  --_alert-border: var(--color-border-utility-danger, #fdbdbe);
  --_alert-accent: var(--color-content-utility-danger, #ce2c31);
}
.esa-alert-box__icon {
  color: var(--_alert-icon-color);
  flex-shrink: 0;
  padding-top: 1px;
}
.esa-alert-box__body {
  flex: 1;
  min-width: 0;
}
.esa-alert-box__title {
  color: var(--_alert-title-color);
  margin-bottom: var(--spacing-050, 0.125rem);
  display: block;
}
.esa-alert-box__message {
  color: var(--_alert-text-color);
}
.esa-alert-box__dismiss {
  border-radius: var(--radius-sm, 0.25rem);
  width: 24px;
  height: 24px;
  color: var(--color-content-default-secondary, #646464);
  cursor: pointer;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.esa-alert-box__dismiss:hover {
  color: var(--color-content-default, #202020);
  background: var(--color-background-overlay-strong-hover, #0000000f);
}
.esa-alert-box__dismiss:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
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
```

## Tokens
- `--alert-box-text-color`: #525252 _(component)_
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
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-floating`: #fcfcfc _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-strong-hover`: #0000000d _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--radius-xs`: .125rem _(semantic)_
- `--shadow-200`: 0 4px 20px -4px #0000000f _(component)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 400 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
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
- `--typography-microcopy-md-subtle-font-weight`: 400 _(semantic)_
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
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
