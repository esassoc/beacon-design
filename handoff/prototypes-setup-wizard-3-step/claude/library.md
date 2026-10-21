# Library

Step 1 — Source Documents · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/

![Library, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/library.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/library.phone.png

The Library (the page is already Source Documents), dense at 13px with 12px states, folding into a rail from its header. Prod's model: a source document (name, reference number) holds files, and each file is scanned on its own. Each source folds open or shut by its chevron, and is its name, with a menu (Edit details, Add files, Delete source document); its files sit under it, one row each with the name (middle-truncated so the version and date stay) and one state: Not scanned, Reading p. 16 of 170 with a progress bar, a warning badge "3 to check", Paused at p. 40, 157 commitments, No commitments. A file's menu downloads it, restarts its scan or deletes it. New source document is pinned at the foot.

## Key decisions

- SetupWizardSourceDto and SetupWizardSourceFileDto as they are: source fields plus files with PageCount and CommitmentCount. The per-file scan state is new.
- Every run keeps going while another file is in view.
- Each file's state is a badge under its name: Not scanned (gray), Scanning (blue, with a progress bar), Paused at p. N (gray), 157 commitments (green), No commitments (gray). Beside it, one badge for what waits on that file: "3 to check" at the check, otherwise "N to settle" (its Open items list). A scanned file reads "Reading page images, p. N of M" with a progress bar while OCR runs.
- Deletes ask first through a confirm dialog that states the impact (DeletionImpactGet): how many files and commitments go with it.

## Done when

- New source document: name "Biological Opinion", reference "WCRO-2025-00123", add a PDF: the source is created and selected, and its file reads Not scanned.
- Delete it from its details: the confirm reads "This deletes 1 file." and the source is gone after Delete source document.

## Components

- `bcn-sw3src` (spoke) · `src/components/bcn/BcnSw3Scan.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-dropdown-menu` (hub) · `packages/ecology/src/components/esa-dropdown-menu.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-progress-bar` (hub) · `packages/ecology/src/components/esa-progress-bar.astro`

## Markup and styles

_11 repeated elements are collapsed in the markup below; the comments say where._

- [library.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/library.markup.md) (26 KB)
- [library.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/library.styles.md) (18 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--animation-indeterminate` | `1.5s ease-in-out infinite` | semantic |
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#fcfcfc` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-warning-hover` | `#ffba18` | semantic |
| `--color-background-utility-warning-muted` | `#fff7c2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-warning` | `#f3d673` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#3d3d3d` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--elevation-3` | `0 4px 20px -4px #0000000f` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--progress-bar-height-md` | `8px` | component |
| `--progress-bar-height-xs` | `2px` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-pill` | `9999px` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
| `--typography-microcopy-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-strong-line-height` | `1` | semantic |
