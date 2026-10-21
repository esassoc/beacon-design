# Reference Files

Requirement detail — streamlined (Data Catalog) · source prototype: https://esassoc.github.io/beacon-design/prototypes/data-catalog-requirement-streamlined/

![Reference Files, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-requirement-streamlined/claude/reference-files.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-requirement-streamlined/claude/reference-files.phone.png

A read list (esa-file-list lego) of the requirement's reference files — protocols and guidance PDFs attached to the requirement config (e.g. the nesting-bird survey protocol, the no-disturbance-buffer guidance).

## Key decisions

- esa-file-list populated client-side from a files array; this is a reference-config list, distinct from evidence-of-compliance (which is tracking data and does not appear on this page).
- Files are managed in the edit modal's Evidence tab (esa-file-upload); the detail page shows them read-only.

## Gotchas

- The rows render in the lego's SHADOW DOM — a light-DOM selector cannot reach them; set the `.files` property, do not inject row markup.
- Do not conflate these reference files with tracked evidence uploads — different lifecycle, different area.

## Done when

- A read-only file list showing the requirement's reference PDFs.

## Components

- `esa-file-list` (hub) · `packages/ecology/src/components/esa-file-list.ts`

## Markup

```html
<esa-file-list id="ref-files" downloadable=""></esa-file-list>
```
