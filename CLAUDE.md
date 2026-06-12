# Beacon Design — project instructions

## What this repo IS

An **Astro spoke of `@esa/ecology`**. It re-skins and composes the hub's `esa-*` web components for the Beacon environmental-compliance platform. Its job is to **assemble existing legos**, not to hand-roll bespoke CSS/HTML primitives.

Reinventing a control that an `esa-*` lego already provides is a **bug**: it drifts from the design system, duplicates tested behavior, and rots. We have violated this badly (see the table below) — don't.

## The non-negotiable lookup order

When ANY UI is needed, walk these tiers **in order**. Stop at the first hit.

1. **Ecology first — the `esa-*` legos.** Live at `node_modules/@esa/ecology/src/components/` (a `file:` symlink to the sibling `ecology` checkout — always the live source).
   - List the catalog (source of truth — it grows): `ls node_modules/@esa/ecology/src/components/`
   - `.astro` lego → `import EsaCard from '@esa/ecology/esa-card.astro';` (frontmatter)
   - `.ts` lego → `import '@esa/ecology/esa-dialog';` in a client `<script>`, then use `<esa-dialog>` in markup.
2. **Beacon next — the prod app.** `~/Dev/Beacon/Beacon.Web/src/app/shared/ui/components/` (Angular `ui-*`) and `~/Dev/Beacon/Beacon.Web/src/scss/`. Port the pattern faithfully (tokens, structure).
3. **Only then a `bcn-` component.** If nothing exists, build a *real, reusable, documented* component prefixed `bcn-` — never a one-off `.rd-`/`.tt-` page blob. Token-driven, reusable in isolation.

## Reinvented → use the lego (the lookup that was missed the first time)

Each of these bespoke primitives was hand-rolled before the lego was found. When you
catch yourself about to write one, stop and reach for the lego instead:

| Reinvented (don't) | Use instead |
|--------------------|-------------|
| `.rd-sidedrawer` slide-in editor | esa-side-dialog |
| `.rd-dropzone` + `.rd-file` rows | esa-file-upload |
| `.rd-icon-btn` | esa-icon-button |
| `.rd-eoc` card | esa-card |
| `.rd-tag` chips | esa-pill / esa-chip-group |
| `.rd-count` badge | esa-badge |
| `.tt-empty` empty states | esa-empty-state |
| `.rd-field` wrappers | esa-form-field + esa-field-error |
| raw `<input>`/`<select>`/styled `<button>` | esa-text-field / esa-select / esa-button |

`requirement-tracker.astro` was the cautionary blob the rows above came from. It has
since been refactored into a **component manifest**: it assembles esa-* legos +
documented `bcn-*` components (`BcnStatusSelect`, `BcnFieldSection`, `BcnKeyValue`,
`BcnChangeLog`, `BcnNotifications`, `BcnEvidenceList`, `BcnRequirementReference`,
`BcnDiscussion`), and the only CSS left in the page is composition glue (grid chrome +
dialog shell geometry). Treat it now as the **reference for how a page SHOULD look**,
not what to avoid. Token rule it also enforces: components read the **semantic** layer
(`--color-*`, `--form-*`, `--bcn-status-*`), never the raw `--bcn-gray-*` ramp.

## Escape hatch — `bcn-lego-checked:`

A **PreToolUse hook** (`check-component-first`, shipped by the **spoke-kit plugin** from the ecology marketplace) **blocks** Write/Edit/MultiEdit that introduces bespoke UI in `.astro`/`.css`/`.scss`. To legitimately proceed (you walked Ecology → Beacon and nothing fits), assert it in the content:

```html
<!-- bcn-lego-checked: no esa- X fits because Y; checked Beacon (Z); bcn-foo is the reusable home -->
```

CSS file: `/* bcn-lego-checked: ... */`. The token is a *claim that you did the lookup* — write a real reason.

## Where the intelligence lives

The component-first skill, the hook, /spoke-init, and the pre-commit review all
ship from the **spoke-kit plugin** (`ecology` marketplace, hosted in the hub repo
`esassoc/ecology`). Nothing is copied into this repo: `.claude/settings.json`
declares the marketplace and enables the plugin, and a SessionStart check warns
if it's missing. To update: `claude plugin marketplace update ecology`.

- Skill: `component-first` (→ `lego-lookup.md`, `bcn-authoring.md`)
- Hook: `check-component-first` (PreToolUse, from the plugin)
- Spoke-local extras stay in `.claude/workflows/` (e.g. `tracker-extract.mjs`)
