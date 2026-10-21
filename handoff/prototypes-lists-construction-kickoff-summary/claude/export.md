# Export

Obligation list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/construction-kickoff-summary/

![Export, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/export.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/export.phone.png

The ways the list leaves Beacon, in the rail: PDF, CSV and Excel file pulls, Word (a later slice, BCN-1764), then the JSON endpoint that feeds a Fulcrum form, with its key, URL and a payload preview.

## Key decisions

- Order is prod's card (CSV, then Excel, under those names) with PDF added first. PDF downloads the obligation list document (see the list-export-obligation-pdf spec): `GET obligation-lists/{obligationListID}/generate-pdf`. The prototype opens the print route in a new tab instead.
- LATER SLICE, not this epic: Word is BCN-1764, under epic BCN-1922. The design is settled and the prototype's download works: the SAME document as the PDF, as a .docx from `GET obligation-lists/{obligationListID}/generate-docx`, beside generate-pdf. Same title block, summary, detail and order; Word's own pagination, with the summary table's header row repeating on each page. The prototype builds a .doc from the print route (list-word.ts), so its content cannot drift from the PDF (Andy, 2026-10-20: "show as active").
- The formats are not peers. The file rows are one line each, a format mark and a verb. JSON is an integration: it has no file mark and nothing downloads, and it carries the key, the endpoint and the payload.
- The JSON endpoint exists ONLY on obligation lists. The form spec it serves is built from obligations; action and commitment lists get the file rows only (Andy: "but not the API option").
- Replaces a title-row Export menu, which hid that one format is a configured integration and had nowhere to show a key.

## Gotchas

- Never render a real key or list GUID from a running environment into the fixture or the page.
- The JSON form spec carries Beacon ids so a form answer can be written back to the right obligation.

## Done when

- PDF, CSV, Excel and Word rows in that order, then the JSON section with key, endpoint and payload, on obligation lists only.

## Components

- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-lxp` (spoke) · `src/components/bcn/BcnListExportPanel.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup and styles

- [export.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/export.markup.md) (45 KB)
- [export.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/export.styles.md) (16 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--form-label-color` | `#525252` | component |
| `--gap` | `1rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--line-height-normal` | `1.6` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
