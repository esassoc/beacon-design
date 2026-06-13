# Beacon — Needs Analysis

Gap analysis between **Beacon's live Angular app** (`../Beacon`, source of truth for
the *look*) and the **`@esa/ecology`** hub (the base). Drives what the `beacon-design`
spoke inherits, re-points, and builds new.

> Source of truth for the look: `../Beacon/Beacon.Web/src` (latest `develop`).
> Base: `@esa/ecology` — Astro component library + framework-agnostic Lit web
> components, re-skinned by `src/styles/theme-beacon.css`.

## Architecture decision

**Ecology is the base; Beacon git is the visual source of truth.** We do NOT port
Beacon's raw SCSS or re-implement its `ui-*` primitives. We reuse the hub's `esa-*`
components and express Beacon's look as a `[data-theme="beacon"]` re-point of the
hub's semantic layer — the cb-fish model. This works because **the ecology hub was
itself ported from Beacon's Angular design system** (`component-tokens.css`:
"Faithful port of the Angular lib… aligned with Beacon's UiSize"), so the structures
already match. "Verbatim" = the visual result, achieved through ecology's vocabulary.

---

## 1. Token delta

Beacon shares ecology's structure and most values. Only these diverge (all handled
in `theme-beacon.css`):

| Token group | Beacon | Ecology default | Action |
|---|---|---|---|
| Color ramps (green/blue/orange/yellow/red) | — | identical | **Inherit as-is** |
| `--color-primary` (teal-900 `#005862`) | identical | identical | **Inherit** |
| `--color-secondary` | teal-500 `#00918b` | teal-600 `#0d9488` | **Re-point** |
| Neutral grays | warm (`900 = #3d3d3d`) | cool (`900 = #171717`) | **Re-point chain** via `--bcn-gray-*` |
| Form heights | 24 / 28 / 36 / 44 | 28 / 32 / 40 / 48 | **Re-point** `--form-height-*` |
| Mono face | Roboto Mono | DM Mono | **Re-point** `--font-mono` |
| Body/heading face | DM Sans | DM Sans | **Inherit** |
| Entity step accents (source/commitment/requirement/action) | yes | — | **New** spoke tokens |
| Flag-on / status / progress-report palettes | yes | — | **New** spoke tokens (`--bcn-*`) |

The brand layer is tiny because Beacon ≈ the hub. If a `--bcn-*` value turns out to
be a genuine gap in an ecology scale, **promote it to the hub** (don't let it ossify
in the spoke).

---

## 2. Component delta (for the AWS prototypes)

### Reuse from ecology (re-skinned automatically by the theme)
| Beacon need | Ecology component |
|---|---|
| Status chips (permit + derived segment) | `esa-badge` / `esa-pill` |
| Filter row (status / line / agency) | `esa-filter-pills` + `esa-filter-container` + `esa-filter-clear-button` |
| Buttons / icon buttons | `esa-button` / `esa-icon-button` |
| Cards, detail panel shells | `esa-card` |
| Form fields in the permit drawer | `esa-form-field` / `esa-field-error` |
| Footage-by-status bar | `esa-progress-bar` (stacked) |
| App chrome, breadcrumbs | `esa-app-bar` / `esa-breadcrumbs` |
| Empty / loading | `esa-empty-state` / `esa-loading-overlay` |

### Build new (no hub equivalent)
| Need | Notes |
|---|---|
| **The map** | Status-colored line segments + click. Esri ArcGIS JS (client's in Esri) or MapLibre. |
| **Slide-in drawer shell** | Beacon has `ui-side-dialog-*`; the hub has no drawer yet. Build the shell, compose `esa-*` inside. **Candidate to promote to the hub.** |
| **Footage donut** + **clear-to-build timeline** | Beacon-specific visualizations. |
| **App shell** (`header-nav-modern` + `side-nav-modern`) | Recreate Beacon's frame using `esa-app-bar` + sidebar tokens. |

---

## 3. Hub gaps discovered (file upstream)

| Gap | Where it bit | Proposed fix |
|---|---|---|
| **`esa-icon-button` can't forward custom Lucide `paths`.** The lego renders `<EsaIcon name={icon} size={size} />` with no `paths` prop, so any glyph outside esa-icon's built-in registry renders blank. | `AppShell.astro` top bar — the **ESA-Config** control uses `sliders-horizontal` (not in the registry), so it can't be swapped to `<EsaIconButton>` and stays hand-rolled (`.icon-button`). Search + Admin (registry glyphs) swapped fine. | Add a `paths?: string` prop to `esa-icon-button` that forwards to its inner `EsaIcon` — OR add `sliders-horizontal` to esa-icon's registry. Either closes it. |

---

## 4. Status

- [x] Spoke scaffolded (config, base, BaseLayout, theme, prototypes registry).
- [x] `theme-beacon.css` re-points the token deltas above.
- [x] `/foundations` specimen renders Beacon tokens through the ecology base.
- [ ] App shell (header + side nav).
- [ ] Epic B money shot — map + segment drawer on a fixture (BCN-1267).
- [ ] Epic A — permit table + reusable drawer (BCN-1266).
