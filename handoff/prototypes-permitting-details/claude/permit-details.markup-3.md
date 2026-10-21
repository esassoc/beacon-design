# Permit Details: markup, part 3 of 3

```html
                        role="presentation"
                        tabindex="0"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="esa-card__footer typography-meta">
              <div class="repel bcn-gfoot" data-gap="md">
                <span data-pt-download="true" class="astro-lujwycoi"
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line></svg></span
                      ><span class="esa-button__label">Download as CSV</span>
                    </button></span
                  ></span
                >
                <div class="cluster bcn-gfoot__count" data-gap="md">
                  <span
                    >Total Records:
                    <span data-pt-total="true" class="astro-lujwycoi">11</span></span
                  ><span class="bcn-gfoot__filtered" data-pt-filtered="true" hidden=""></span>
                </div>
              </div>
            </div>
          </div>
          <!-- script type="application/json" removed (3 KB) -->
        </section>
      </div>
    </div>
    <esa-side-dialog id="pt-drawer" size="md" style="--_width: 560px" position="right"
      ><div slot="header" class="stack" data-gap="xs">
        <span class="typography-body-sm pt-d-label">Permit</span
        ><span class="typography-title" id="pt-d-name">—</span>
      </div>
      <div class="stack" data-gap="lg">
        <div class="stack" data-gap="md">
          <esa-text-field id="pt-d-name-field" label="Permit / Approval" size="md"></esa-text-field
          ><esa-select id="pt-d-level" label="Level" size="md"></esa-select
          ><esa-text-field id="pt-d-agency" label="Agency" size="md"></esa-text-field
          ><esa-date-picker id="pt-d-target" label="Target date" size="md"></esa-date-picker
          ><esa-text-field id="pt-d-ref" label="Reference No." size="md"></esa-text-field
          ><esa-textarea id="pt-d-notes" label="Notes" rows="3" size="md"></esa-textarea
          ><esa-select id="pt-d-status" label="Tracking status" size="md"></esa-select>
        </div>
        <div class="stack" data-gap="xs">
          <span class="typography-body-sm pt-d-label">Permit Files</span
          ><esa-file-upload
            label="Drag &amp; drop files, or browse"
            multiple="true"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            name="files"
          ></esa-file-upload>
        </div>
        <!-- …and 2 more like this (<div class="stack">) -->
      </div>
      <div slot="footer" class="cluster" data-justify="end">
        <span id="pt-d-save"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Save</span>
            </button></span
          ></span
        ><span id="pt-d-cancel"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        >
      </div></esa-side-dialog
    >
  </div>
</div>
```
