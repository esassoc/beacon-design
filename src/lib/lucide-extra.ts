// Lucide glyphs esa-icon's registry does not ship yet, as inner SVG markup (the `paths`
// convention esa-icon and esa-button-toggle take). Passed as `paths` where a lego takes
// it; elsewhere written into a lego's rendered <svg> by setIcon() below.
// Candidates for the hub registry (/request-lego).

export const LUCIDE_EXTRA = {
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
  'step-forward': '<line x1="6" x2="6" y1="4" y2="20"/><polygon points="10 4 20 12 10 20 10 4"/>',
  'fast-forward': '<polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/>',
  eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  ellipsis: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  'panel-right-open': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m10 15-3-3 3-3"/>',
  'panel-right-close': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/>',
  'square-dashed':
    '<path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h1"/><path d="M14 3h1"/><path d="M14 21h1"/><path d="M3 9v1"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M21 14v1"/>',
  'file-plus':
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M12 18v-6"/>',
  'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  square: '<rect width="18" height="18" x="3" y="3" rx="2"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  'panel-left-close': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',
  'panel-left-open': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>',
} as const;

export type ExtraIcon = keyof typeof LUCIDE_EXTRA;

/** Write a glyph into the <svg> a lego rendered (esa-button / esa-icon-button with a stand-in icon). */
export const setIcon = (host: Element | null, name: ExtraIcon) => {
  const svg = host?.querySelector('svg');
  if (!svg || svg.dataset.ico === name) return;
  svg.innerHTML = LUCIDE_EXTRA[name];
  svg.dataset.ico = name;
};

/** Every [data-ico] under root gets its glyph (the markup declares it, this paints it). */
export const paintIcons = (root: ParentNode) =>
  root.querySelectorAll<HTMLElement>('[data-ico]').forEach((el) => setIcon(el, el.dataset.ico as ExtraIcon));
