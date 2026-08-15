// ENTITY MARKS — the icon × color identity a Component (and later a Project) wears.
//
// The argument, from the 2026-08-13 design call: a mark is a LANDMARK, not
// decoration. Theme parks label their lots "Goofy" and "Donald"; garages label
// floors orange and red. Those aren't ornaments — they're anchors that tell you
// where you are and, just as usefully, when you're somewhere you didn't mean to
// be. A project carrying two dozen components needs its components to be
// TELLABLE APART at a glance, in a header, in a card, in a grid row, on a map.
//
// A PHOTO IS THE FIRST-CHOICE MARK; the glyph pair is what guarantees an answer
// (order settled at review, 2026-08-13). A real picture of the shaft is the
// strongest landmark there is, and Andy's point on the call stands beside that
// rather than against it: what must never happen is a user stuck on "what's a
// good picture for the Bouldin Island Launch Shaft?", leaving the field empty so
// every component looks identical. So the upload leads, and the glyph × swatch
// pair is the always-works alternative — two clicks, always legible, impossible
// to get wrong. `image` below wins over the pair whenever it is set, and the pair
// is KEPT rather than cleared, so removing a photo restores the old mark.
//
// Two axes, both closed sets:
//   · GLYPH — 20 Lucide icons, landmark-ish things a person would use to
//     describe a place out loud. They were drawn from the categories named on
//     the call (nature, animals, buildings, navigation & places), but the picker
//     shows them as ONE flat group — twenty tiles do not need section headings,
//     and the categories were a sourcing aid, not a user-facing taxonomy.
//   · SWATCH — 20 identity colors from the --bcn-mark-* ramp. These carry NO
//     semantic weight: a red component is not a component in trouble. Status
//     lives in BcnStatusChip and the T·M·R pulses, and must stay legible beside
//     a mark of any color, which is exactly why the two palettes are separate.
//
// STYLE is the third, smallest axis: `fill` (neutral glyph on the color) reads
// as a bold landmark; `outline` (color glyph on the neutral tile) recedes into a
// dense surface. Same mark, two weights — a grid row wants outline where a
// full-bleed header wants fill.
//
// Colors are token references, never literals, so the ramp is themeable and
// dark-mode-safe; the raw values live in the theme's primitive layer
// (src/styles/theme-beacon.css, --bcn-mark-*).

// ── Swatches ────────────────────────────────────────────────────────────────
export interface MarkColor {
  /** Stable stored key — this is what a ComponentMark persists, never the hex. */
  key: string;
  /** Human name shown in the picker's tooltip and as the swatch's a11y label. */
  label: string;
  /** Token reference read into an inline custom property. */
  token: string;
}

// One even hue wheel at a single lightness so no swatch shouts louder than its
// neighbours — the set has to read as a palette, not a ranking.
export const MARK_COLORS: MarkColor[] = [
  { key: 'red', label: 'Red', token: 'var(--bcn-mark-red)' },
  { key: 'rust', label: 'Rust', token: 'var(--bcn-mark-rust)' },
  { key: 'orange', label: 'Orange', token: 'var(--bcn-mark-orange)' },
  { key: 'amber', label: 'Amber', token: 'var(--bcn-mark-amber)' },
  { key: 'olive', label: 'Olive', token: 'var(--bcn-mark-olive)' },
  { key: 'moss', label: 'Moss', token: 'var(--bcn-mark-moss)' },
  { key: 'green', label: 'Green', token: 'var(--bcn-mark-green)' },
  { key: 'emerald', label: 'Emerald', token: 'var(--bcn-mark-emerald)' },
  { key: 'teal', label: 'Teal', token: 'var(--bcn-mark-teal)' },
  { key: 'cyan', label: 'Cyan', token: 'var(--bcn-mark-cyan)' },
  { key: 'sky', label: 'Sky', token: 'var(--bcn-mark-sky)' },
  { key: 'blue', label: 'Blue', token: 'var(--bcn-mark-blue)' },
  { key: 'indigo', label: 'Indigo', token: 'var(--bcn-mark-indigo)' },
  { key: 'violet', label: 'Violet', token: 'var(--bcn-mark-violet)' },
  { key: 'purple', label: 'Purple', token: 'var(--bcn-mark-purple)' },
  { key: 'fuchsia', label: 'Fuchsia', token: 'var(--bcn-mark-fuchsia)' },
  { key: 'magenta', label: 'Magenta', token: 'var(--bcn-mark-magenta)' },
  { key: 'rose', label: 'Rose', token: 'var(--bcn-mark-rose)' },
  { key: 'brown', label: 'Brown', token: 'var(--bcn-mark-brown)' },
  { key: 'slate', label: 'Slate', token: 'var(--bcn-mark-slate)' },
];

export const MARK_COLOR_BY_KEY: Record<string, MarkColor> = Object.fromEntries(
  MARK_COLORS.map((c) => [c.key, c]),
);

/** The ramp as bare token references — feeds esa-color-picker's `swatches`. */
export const MARK_SWATCH_TOKENS: string[] = MARK_COLORS.map((c) => c.token);

// ── Glyphs ──────────────────────────────────────────────────────────────────
export interface MarkGlyph {
  /** Stable stored key — the Lucide icon name. */
  key: string;
  label: string;
  /**
   * Inner SVG markup (no <svg> wrapper), passed to esa-icon's `paths` escape
   * hatch. Lucide 24×24, stroke-based, stroke-width 2, round caps/joins — the
   * same drawing conventions esa-icon's own registry uses, so a mark glyph sits
   * beside a UI glyph without looking like a different icon set.
   *
   * Note esa-icon prefers its BUILT-IN registry when a name collides (home,
   * map-pin, trees), which is correct — the registry copy is the same glyph.
   */
  paths: string;
}

export const MARK_GLYPHS: MarkGlyph[] = [
  {
    key: 'trees',
    label: 'Trees',
    paths:
      '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/>',
  },
  {
    key: 'mountain',
    label: 'Mountain',
    paths: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
  },
  {
    key: 'waves',
    label: 'Waves',
    // Each line runs the FULL 2→22 span, like every other glyph here. The first
    // transcription stopped at x=17, which left the whole mark sitting 2.5 units
    // left of centre inside its tile — visible as soon as it sat in a circle. Four
    // half-waves (+2.5, +5, +5, +5, +2.5 = 20) with dy summing to zero, so each line
    // ends level with where it started.
    paths:
      '<path d="M2 6c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  },
  {
    key: 'droplet',
    label: 'Droplet',
    paths:
      '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  },
  {
    key: 'leaf',
    label: 'Leaf',
    paths:
      '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  },
  {
    key: 'sun',
    label: 'Sun',
    paths:
      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M2 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="M12 20v2"/><path d="m17.66 17.66 1.41 1.41"/><path d="M20 12h2"/><path d="m17.66 6.34 1.41-1.41"/>',
  },

  {
    key: 'bird',
    label: 'Bird',
    paths:
      '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>',
  },
  {
    // Lucide's `fish-symbol` was here and was removed at review (2026-08-13): it
    // draws the ichthys, which carries religious meaning this palette has no
    // business assigning to a component. If a fish is ever wanted, Lucide's
    // literal `fish` outline is the one to use.
    key: 'paw-print',
    label: 'Wildlife',
    paths:
      '<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',
  },

  {
    key: 'building-2',
    label: 'Building',
    paths:
      '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  },
  {
    key: 'factory',
    label: 'Factory',
    paths:
      '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
  },
  {
    key: 'warehouse',
    label: 'Warehouse',
    paths:
      '<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><path d="M6 22V10h12v12"/>',
  },
  {
    key: 'home',
    label: 'House',
    paths:
      '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  },
  {
    key: 'tent',
    label: 'Camp',
    paths:
      '<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>',
  },
  {
    key: 'landmark',
    label: 'Landmark',
    paths:
      '<path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/>',
  },

  {
    key: 'map-pin',
    label: 'Pin',
    paths:
      '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  },
  {
    key: 'compass',
    label: 'Compass',
    paths:
      '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>',
  },
  {
    key: 'flag',
    label: 'Flag',
    paths: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  },
  {
    key: 'anchor',
    label: 'Anchor',
    paths:
      '<path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/>',
  },
  {
    key: 'route',
    label: 'Route',
    paths:
      '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  },
  {
    key: 'signpost',
    label: 'Signpost',
    paths:
      '<path d="M12 13v8"/><path d="M12 3v3"/><path d="M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"/>',
  },
];

export const MARK_GLYPH_BY_KEY: Record<string, MarkGlyph> = Object.fromEntries(
  MARK_GLYPHS.map((g) => [g.key, g]),
);

// ── The mark itself ─────────────────────────────────────────────────────────
export type MarkStyle = 'fill' | 'outline';

/**
 * What a Component (or Project) stores. Three small columns — glyph key, color
 * key, style — or an uploaded `image` that supersedes all three. Nothing here
 * is derived, so the mark renders identically on every surface without a lookup.
 */
export interface EntityMark {
  glyph: string;
  color: string;
  style: MarkStyle;
  /**
   * Uploaded image (base-less public path). When present it WINS over the
   * glyph/color pair — the field photo beats the generated mark. The pair is
   * kept rather than cleared so removing the image restores the old mark.
   */
  image?: string;
}

export const DEFAULT_MARK: EntityMark = { glyph: 'map-pin', color: 'slate', style: 'fill' };

/** Resolved rendering inputs — one call, so every surface draws the mark alike. */
export interface ResolvedMark {
  glyph: MarkGlyph;
  color: MarkColor;
  style: MarkStyle;
  image?: string;
}

/**
 * The mark a NEW component is born with (design call follow-up, 2026-08-13): never
 * blank, and never one already worn by a sibling in the same project.
 *
 * Differentiation is the entire point of the mark — a landmark that tells two dozen
 * components apart. A default that collides defeats it on the very first collision,
 * and "pick your own" defeats it by being skipped. So creation assigns one, and
 * assigns it from what is still free.
 *
 * The walk is DIAGONAL — a Latin square over the two axes — so consecutive
 * assignments differ in BOTH glyph and colour. Walking one axis at a time would
 * exhaust all twenty glyphs on red before touching rust, and a project whose first
 * twenty components are all red has a mark that differentiates nothing. Stepping
 * both still yields all 20 x 20 = 400 pairs before anything repeats, which is well
 * past any real project.
 *
 * Deterministic and order-dependent by design — the same set of existing marks
 * always yields the same next one, so a seeded project looks identical every run.
 * `style` follows the house default rather than varying, since two components that
 * differ only in fill weight do not read as different.
 */
export const nextUnusedMark = (used: Iterable<Pick<EntityMark, 'glyph' | 'color'>>): EntityMark => {
  const taken = new Set<string>();
  for (const m of used) taken.add(`${m.glyph}|${m.color}`);

  const G = MARK_GLYPHS.length;
  const C = MARK_COLORS.length;
  for (let i = 0; i < G * C; i += 1) {
    const glyph = MARK_GLYPHS[i % G];
    // The row offset is what turns a repeating diagonal into a full Latin square:
    // without it the walk would revisit the same 20 pairs forever.
    const color = MARK_COLORS[(i + Math.floor(i / C)) % C];
    const key = `${glyph.key}|${color.key}`;
    if (!taken.has(key)) return { glyph: glyph.key, color: color.key, style: DEFAULT_MARK.style };
  }
  // Every pair is spoken for (400 components in one project). Repeat rather than
  // hand back nothing — a duplicate mark is worse than a blank one only in theory.
  return { ...DEFAULT_MARK };
};

export const resolveMark = (mark?: EntityMark): ResolvedMark => {
  const m = mark ?? DEFAULT_MARK;
  return {
    glyph: MARK_GLYPH_BY_KEY[m.glyph] ?? MARK_GLYPH_BY_KEY[DEFAULT_MARK.glyph],
    color: MARK_COLOR_BY_KEY[m.color] ?? MARK_COLOR_BY_KEY[DEFAULT_MARK.color],
    style: m.style ?? DEFAULT_MARK.style,
    image: m.image,
  };
};
