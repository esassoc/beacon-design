# Button

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-homepage** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/homepage/
- **Section element:** `<esa-dialog>`
- **Components:** esa-button (hub)

## Markup (de-scoped, framework-free)
```html
<esa-dialog id="bcn-demo-dialog" heading="Schedule a demo" size="md"
  ><form class="stack" data-gap="md" id="bcn-demo-form" novalidate="">
    <p class="typography-body-md bcn-demo__lede">
      Tell us about your project and we'll set up a walkthrough with the Beacon team.
    </p>
    <esa-text-field id="bcn-demo-name" label="Name" required="" size="md"></esa-text-field
    ><esa-text-field
      id="bcn-demo-email"
      label="Work email"
      type="email"
      required=""
      size="md"
    ></esa-text-field
    ><esa-text-field id="bcn-demo-org" label="Organization" required="" size="md"></esa-text-field
    ><esa-checkbox-group
      id="bcn-demo-interests"
      name="interests"
      label="What would you like to see?"
      options='[{"label":"Planning and commitment libraries","value":"plan"},{"label":"Tracking permits, tasks, and deadlines","value":"track"},{"label":"Monitoring and field data","value":"monitor"},{"label":"Agency reporting","value":"report"},{"label":"Not sure yet — show me everything","value":"unsure"}]'
      size="md"
      orientation="vertical"
    ></esa-checkbox-group
    ><esa-textarea
      id="bcn-demo-message"
      label="Anything we should know about your project?"
      rows="4"
      size="md"
    ></esa-textarea>
  </form>
  <div class="stack" data-gap="sm" id="bcn-demo-done" hidden="">
    <p class="typography-title">Thanks — we'll be in touch.</p>
    <p class="typography-body-md">
      Someone from the Beacon team will reach out within two business days to schedule your
      walkthrough.
    </p>
  </div>
  <span slot="footer" class="cluster" data-gap="sm"
    ><!-- Wrapper spans, not the buttons themselves: `hidden` on an <EsaButton> reaches
         only the native control, leaving the styled .esa-button wrapper on screen. --><span
      class="cluster"
      data-gap="sm"
      id="bcn-demo-actions"
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-soft esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          id="bcn-demo-cancel"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          id="bcn-demo-submit"
        >
          <span class="esa-button__label">Send request</span>
        </button></span
      ></span
    ><span id="bcn-demo-close-wrap" hidden=""
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          id="bcn-demo-close"
        >
          <span class="esa-button__label">Close</span>
        </button></span
      ></span
    ></span
  ></esa-dialog
>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
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
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button__label {
  white-space: nowrap;
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
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
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
.bcn-demo__lede {
  color: var(--color-content-default-secondary);
  margin: 0;
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--button-radius-md` | `.25rem` | component |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `350` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
