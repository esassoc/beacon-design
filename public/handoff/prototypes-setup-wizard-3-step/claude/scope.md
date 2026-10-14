# Scope

Before the run, Beacon reads the document's table of contents and headings and proposes where the commitments are: "VIII. Conditions of Approval, pp. 80–244, 293 commitments likely". The person confirms it, edits the page range, or narrows it with a short instruction ("Only the general species measures, Condition 11" sets pp. 131–180). Once the run starts the card shrinks to the steering row: a new range applies without a restart.

## Key decisions
- A scope card with a free-text instruction, not a chatbot. The instruction rides along into every extraction call.
- The likely count updates as the range changes (it is the scope pass's heading count for that range).
- Prototype: the run covers pp. 131–180 whatever range is entered; the brief says so.

## Done when
- Typing "Condition 11" in the instruction and leaving the field sets the range to 131–180 and the count to 86.
- Start scan hides the file row and proposal line; Update scope replaces Start.

## Markup
```html
<section class="bcn-sw3scope" data-sw3-scope="" data-state="proposed">
  <div class="bcn-file-row">
    <span class="bcn-file-row__icon"
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
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path></svg></span></span
    ><span class="bcn-file-row__name" title="itp.pdf">itp.pdf</span
    ><span class="bcn-file-row__size">247 pages</span
    ><span class="bcn-file-row__actions"
      ><span class="bcn-file-row__act"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Download itp.pdf"
            title="Download itp.pdf"
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
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line></svg
            ></span></button></span></span
    ></span>
  </div>
  <div class="bcn-sw3scope__proposal">
    <p class="bcn-sw3scope__section typography-title-strong">
      VIII. Conditions of Approval
    </p>
    <p class="bcn-sw3scope__line typography-body-md" aria-live="polite">
      <span data-scope-pages="">Pages 80–244</span
      ><span data-scope-likely="">293 commitments likely</span>
    </p>
  </div>
  <div class="bcn-sw3scope__fields">
    <esa-text-field
      data-scope-first="true"
      label="From page"
      type="number"
      size="md"
      value="80"
    ></esa-text-field
    ><esa-text-field
      data-scope-last="true"
      label="To page"
      type="number"
      size="md"
      value="244"
    ></esa-text-field
    ><esa-textarea
      class="bcn-sw3scope__instruction"
      data-scope-instruction="true"
      label="Instruction"
      size="md"
      rows="1"
      auto-resize=""
      placeholder="Only the general species measures, Condition 11"
    ></esa-textarea>
    <div class="bcn-sw3scope__go">
      <span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          data-scope-start="true"
        >
          <span class="esa-button__label">Start scan</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          data-scope-update="true"
        >
          <span class="esa-button__label">Update scope</span>
        </button></span
      >
    </div>
  </div>
  <script type="application/json" data-scope-counts="">
    {
      "counts": {
        "COA 4": 80,
        "COA 6": 80,
        "COA 6.1": 80,
        "COA 6.2": 81,
        "COA 7": 84,
        "COA 7.1": 84,
        "COA 7.5": 87,
        "COA 8": 87,
        "COA 9.1": 88,
        "COA 9.2": 89,
        "COA 9.2.1": 89,
        "COA 9.2.2": 90,
        "COA 9.3": 90,
        "COA 9.4": 91,
        "COA 9.5": 92,
        "COA 9.6": 92,
        "COA 9.7": 92,
        "COA 9.8": 92,
        "COA 9.9": 93,
        "COA 9.10": 93,
        "COA 9.11": 93,
        "COA 9.12": 94,
        "COA 9.13": 94,
        "COA 9.14": 94,
        "COA 9.15": 95,
        "COA 9.16": 95,
        "COA 9.16.1": 95,
        "COA 9.17": 95,
        "COA 9.18": 95,
        "COA 10.1": 96,
        "COA 10.2": 96,
        "COA 10.3": 96,
        "COA 10.4": 97,
        "COA 10.5": 100,
        "COA 10.6": 100,
        "COA 10.7": 101,
        "COA 10.8": 101,
        "COA 10.9": 101,
        "COA 10.10": 102,
        "COA 10.11": 103,
        "COA 10.12": 103,
        "COA 10.13": 104,
        "COA 10.14": 104,
        "COA 10.15": 104,
        "COA 10.15.1": 105,
        "COA 10.16": 105,
        "COA 10.17": 106,
        "COA 10.18": 106,
        "COA 10.18.1": 108,
        "COA 10.18.2": 109,
        "COA 10.18.3": 110,
        "COA 10.19": 110,
        "COA 10.19.1": 110,
        "COA 10.19.2": 112,
        "COA 10.19.3": 114,
        "COA 10.20": 116,
        "COA 10.20.1": 116,
        "COA 10.20.2": 117,
        "COA 10.20.3": 118,
        "COA 10.20.4": 118,
        "COA 10.20.5": 119,
        "COA 10.21": 119,
        "COA 10.21.1": 120,
        "COA 10.21.2": 120,
        "COA 10.21.3": 120,
        "COA 10.21.4": 121,
        "COA 10.21.5": 122,
        "COA 10.21.6": 122,
        "COA 10.21.7": 122,
        "COA 10.21.8": 123,
        "COA 10.21.9": 124,
        "COA 10.21.10": 124,
        "COA 10.22": 125,
        "COA 10.23": 125,
        "COA 10.24": 125,
        "COA 10.24.1": 125,
        "COA 10.24.2": 125,
        "COA 10.25": 126,
        "COA 10.25.1": 126,
        "COA 10.25.2": 126,
        "COA 10.25.3": 126,
        "COA 10.25.4": 126,
        "COA 10.26": 126,
        "COA 10.27": 127,
        "COA 10.27.1": 128,
        "COA 10.27.2": 129,
        "COA 10.27.3": 129,
        "COA 10.28": 130,
        "COA 10.29": 130,
        "COA 10.30": 130,
        "COA 11.1": 131,
        "COA 11.2": 131,
        "COA 11.3": 131,
        "COA 11.4": 132,
        "COA 11.5": 133,
        "COA 11.6": 133,
        "COA 11.7": 133,
        "COA 11.8": 133,
        "COA 11.9": 134,
        "COA 11.10": 134,
        "COA 11.11": 134,
        "COA 11.12": 135,
        "COA 11.13": 135,
        "COA 11.14": 136,
        "COA 11.15": 136,
        "COA 11.16": 137,
        "COA 11.17": 138,
        "COA 11.17.1": 138,
        "COA 11.18": 138,
        "COA 11.19": 139,
        "COA 11.19.1": 139,
        "COA 11.19.2": 140,
        "COA 11.20": 140,
        "COA 11.21": 140,
        "COA 11.22": 141,
        "COA 11.23": 142,
        "COA 11.24": 142,
        "COA 11.25": 143,
        "COA 11.26": 143,
        "COA 11.27": 144,
        "COA 11.28": 145,
        "COA 11.29": 145,
        "COA 11.30": 146,
        "COA 11.31.1": 146,
        "COA 11.31.2": 147,
        "COA 11.32": 146,
        "COA 11.33": 149,
        "COA 11.34": 151,
        "COA 11.35": 151,
        "COA 11.36": 155,
        "COA 11.37": 157,
        "COA 11.38": 158,
        "COA 11.39": 159,
        "COA 11.39.1": 159,
        "COA 11.40": 159,
        "COA 11.41": 160,
        "COA 11.42": 161,
        "COA 11.42.1": 161,
        "COA 11.42.2": 162,
        "COA 11.43": 162,
        "COA 11.44": 164,
        "COA 11.45": 164,
        "COA 11.46": 165,
        "COA 11.47": 165,
        "COA 11.48": 165,
        "COA 11.49": 166,
        "COA 11.49.1": 166,
        "COA 11.49.2": 166,
        "COA 11.50": 167,
        "COA 11.51": 168,
        "COA 11.51.1": 168,
        "COA 11.51.2": 168,
        "COA 11.51.3": 169,
        "COA 11.52": 169,
        "COA 11.52.1": 169,
        "COA 11.52.2": 169,
        "COA 11.52.3": 169,
        "COA 11.52.4": 170,
        "COA 11.53": 170,
        "COA 11.54": 170,
        "COA 11.55": 171,
        "COA 11.55.1": 171,
        "COA 11.56": 172,
        "COA 11.57": 173,
        "COA 11.58": 174,
        "COA 11.58.1": 174,
        "COA 11.59": 174,
        "COA 11.60": 175,
        "COA 11.61": 175,
        "COA 11.62": 176,
        "COA 11.62.1": 177,
        "COA 11.62.2": 178,
        "COA 11.63": 178,
        "COA 11.64": 179,
        "COA 11.65": 179,
        "COA 11.66": 180,
        "COA 11.67": 181,
        "COA 11.67.1": 181,
        "COA 11.68": 182,
        "COA 11.68.1": 182,
        "COA 11.68.2": 182,
        "COA 11.68.3": 182,
        "COA 11.68.4": 183,
        "COA 11.69": 183,
        "COA 11.70": 183,
        "COA 11.71": 183,
        "COA 11.72": 185,
        "COA 11.73": 185,
        "COA 11.74": 186,
        "COA 11.75": 186,
        "COA 11.76": 187,
        "COA 11.77": 187,
        "COA 11.78": 187,
        "COA 11.79": 188,
        "COA 11.80": 188,
        "COA 11.81": 189,
        "COA 11.82": 189,
        "COA 11.83": 190,
        "COA 11.84": 190,
        "COA 11.84.1": 191,
        "COA 11.84.2": 191,
        "COA 11.85": 192,
        "COA 11.86": 192,
        "COA 11.87": 193,
        "COA 11.88": 193,
        "COA 11.89": 194,
        "COA 11.90": 194,
        "COA 11.91": 194,
        "COA 11.92": 194,
        "COA 11.93": 195,
        "COA 11.94": 196,
        "COA 11.95": 196,
        "COA 11.96": 197,
        "COA 11.97": 197,
        "COA 11.98": 198,
        "COA 11.99": 198,
        "COA 11.100": 199,
        "COA 11.101": 199,
        "COA 11.102": 199,
        "COA 11.103": 200,
        "COA 11.104": 201,
        "COA 11.105": 201,
        "COA 11.106": 202,
        "COA 11.107": 202,
        "COA 11.108": 203,
        "COA 11.109": 203,
        "COA 11.109.1": 204,
        "COA 11.110": 204,
        "COA 11.111": 205,
        "COA 11.111.1": 207,
        "COA 11.111.2": 208,
        "COA 11.111.3": 209,
        "COA 11.111.4": 212,
        "COA 11.111.5": 212,
        "COA 11.111.6": 213,
        "COA 11.112": 213,
        "COA 11.113": 214,
        "COA 11.114": 215,
        "COA 11.115": 216,
        "COA 11.115.1": 216,
        "COA 11.115.2": 216,
        "COA 11.116": 216,
        "COA 11.116.1": 216,
        "COA 11.116.2": 216,
        "COA 11.117": 217,
        "COA 11.117.1": 217,
        "COA 11.117.2": 217,
        "COA 12": 217,
        "COA 12.1": 224,
        "COA 12.2": 224,
        "COA 12.3": 225,
        "COA 12.3.1": 225,
        "COA 12.3.2": 225,
        "COA 12.3.3": 225,
        "COA 12.3.4": 229,
        "COA 12.4": 229,
        "COA 12.5.1": 229,
        "COA 12.5.2": 230,
        "COA 12.5.3": 230,
        "COA 12.6.1": 231,
        "COA 12.6.2": 231,
        "COA 12.6.3": 232,
        "COA 12.6.4": 232,
        "COA 12.6.5": 233,
        "COA 12.6.6": 234,
        "COA 12.7.1": 234,
        "COA 12.7.2": 234,
        "COA 12.8.1": 235,
        "COA 12.8.2": 236,
        "COA 12.9": 236,
        "COA 12.9.1": 237,
        "COA 12.9.3": 237,
        "COA 12.10": 237,
        "COA 12.11.1": 237,
        "COA 12.11.2": 238,
        "COA 12.11.3": 238,
        "COA 12.11.4": 238,
        "COA 12.11.5": 238,
        "COA 12.11.6": 238,
        "COA 12.11.7": 239,
        "COA 12.12": 239,
        "COA 12.12.1": 240,
        "COA 12.12.2": 241,
        "COA 12.12.2.1": 241,
        "COA 12.12.2.2": 241,
        "COA 12.12.2.2.2": 241,
        "COA 12.12.2.2.3": 241,
        "COA 12.12.3": 241,
        "COA 12.12.4": 242,
        "COA 12.13": 242,
        "COA 13.1": 243,
        "COA 13.2": 243,
        "COA 13.3": 244
      },
      "scan": { "first": 131, "last": 180 }
    }
  </script>
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
.bcn-sw3scope {
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3scope__proposal {
  align-items: baseline;
  gap: var(--spacing-200) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3scope__section,
.bcn-sw3scope__line {
  margin: 0;
}
.bcn-sw3scope__line {
  gap: var(--spacing-400);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  display: flex;
}
.bcn-sw3scope__fields {
  align-items: end;
  gap: var(--spacing-300);
  grid-template-columns: 8rem 8rem minmax(16rem, 1fr) auto;
  display: grid;
}
.bcn-sw3scope__go {
  gap: var(--spacing-200);
  display: flex;
}
.bcn-sw3scope[data-state="proposed"] [data-scope-update],
.bcn-sw3scope[data-state="running"] [data-scope-start] {
  display: none;
}
.bcn-sw3scope[data-state="running"] {
  padding: var(--spacing-300) var(--spacing-500) var(--spacing-400);
}
.bcn-sw3scope[data-state="running"] > .bcn-file-row,
.bcn-sw3scope[data-state="running"] .bcn-sw3scope__proposal {
  display: none;
}
.bcn-sw3scope__instruction,
.bcn-sw3scope__go {
  grid-column: 1/-1;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.bcn-file-row {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-300);
  border: var(--form-border-width, 1px) solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  grid-template-columns: auto 1fr auto auto;
  font-size: 0.875rem;
  display: grid;
}
.bcn-file-row__icon {
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-file-row__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: var(--color-content-default);
  overflow: hidden;
}
.bcn-file-row__size {
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  font-size: 0.8125rem;
}
.bcn-file-row__actions {
  align-items: center;
  gap: var(--spacing-050);
  display: inline-flex;
}
.bcn-file-row__act {
  display: inline-flex;
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
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--form-border-width`: 1px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
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
