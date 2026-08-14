// Shared logic for <BcnLogoPicker> — the controller that turns the SSR'd dialog
// markup into a live glyph × color × style editor. Mirrors status-select.ts's
// contract on purpose: render once in Astro, then setupLogoPicker(root) hands you a
// small imperative handle (open / getValue) and the component announces user intent
// through ONE event.
//
// The whole reason this picker exists is the LIVE PREVIEW: the user is making a
// landmark, so they must see the landmark while they make it. Painting is therefore
// three cheap DOM writes on the previewed <BcnEntityLogo> — set --_c to the mark
// color's TOKEN (never a hex), swap the esa-icon <svg>'s inner paths, flip
// data-style — which is exactly why BcnEntityLogo drives everything off those three
// hooks instead of baking color into a class.
//
// Commit semantics: `baseline` is the mark as it was when the dialog opened. Save
// promotes `current` to baseline, emits 'bcn-mark-change', and closes. Cancel, Esc,
// the backdrop and the close button all funnel through esa-dialog's own 'close'
// event, which repaints `baseline` — so a discarded edit never lingers into the next
// open, and we never fight the lego for Esc/click-outside/close-button behavior.

import {
  DEFAULT_MARK,
  MARK_COLOR_BY_KEY,
  MARK_GLYPH_BY_KEY,
  type EntityMark,
  type MarkStyle,
} from '../../data/entity-marks';

/** esa-dialog's public surface (the bits this controller drives). */
type DialogElement = HTMLElement & { open: boolean; close(): void };
/** esa-button-toggle's public surface — `options` is a property, never an attribute. */
type ToggleElement = HTMLElement & {
  options: { label: string; value: string }[];
  value: string;
};

export interface LogoPickerController {
  /** Open the dialog with `mark` pre-selected; that mark becomes the cancel baseline. */
  open(mark: EntityMark): void;
  /** The mark as currently composed in the dialog (live, pre-Save). */
  getValue(): EntityMark;
  element: HTMLElement;
}

const STYLE_OPTIONS: { label: string; value: MarkStyle }[] = [
  { label: 'Filled', value: 'fill' },
  { label: 'Outline', value: 'outline' },
];

/** Wire one rendered <BcnLogoPicker> root (the <esa-dialog>) into a live editor. */
export function setupLogoPicker(root: HTMLElement): LogoPickerController {
  const dialog = root as DialogElement;
  const preview = root.querySelector<HTMLElement>('.bcn-logo-picker__preview .bcn-entity-logo')!;
  const previewSvg = preview.querySelector('svg');
  const styleToggle = root.querySelector<ToggleElement>('.bcn-logo-picker__style');
  const grids = [...root.querySelectorAll<HTMLElement>('.bcn-logo-picker__grid')];
  const glyphBtns = [...root.querySelectorAll<HTMLButtonElement>('[data-glyph-option]')];
  const colorBtns = [...root.querySelectorAll<HTMLButtonElement>('[data-color-option]')];
  const btn = (role: string) => root.querySelector<HTMLElement>(`[data-lp="${role}"]`);

  // ── The photo branch (the PRIMARY path) ──
  const fileInput = root.querySelector<HTMLElement>('[data-lp-file]');
  const dropzone = root.querySelector<HTMLElement>('[data-lp-dropzone]');
  const chosen = root.querySelector<HTMLElement>('[data-lp-chosen]');
  const filename = root.querySelector<HTMLElement>('[data-lp-filename]');
  const photoPreview = root.querySelector<HTMLImageElement>('[data-lp-preview-photo]');
  const markPreview = root.querySelector<HTMLElement>('[data-lp-preview-mark]');
  const alt = root.querySelector<HTMLElement>('[data-lp-alt]');
  const supplanted = root.querySelector<HTMLElement>('[data-lp-supplanted]');

  let current: EntityMark = readMarkFromDom();
  let baseline: EntityMark = { ...current };
  /** Object URL for the staged photo, revoked on replace so nothing leaks. */
  let objectUrl: string | null = null;

  /**
   * A photo WINS over the glyph pair, so setting one takes the symbol half out of
   * play rather than leaving two live controls fighting over one outcome. The pair
   * is never cleared — removing the photo restores whatever mark was there before.
   */
  function applyPhoto(image: string | undefined, name?: string): void {
    current = { ...current, image };
    const has = Boolean(image);

    if (photoPreview) {
      photoPreview.hidden = !has;
      if (has) photoPreview.src = image as string;
    }
    if (markPreview) markPreview.hidden = has;
    if (dropzone) dropzone.hidden = has;
    if (chosen) chosen.hidden = !has;
    if (filename && name) filename.textContent = name;
    if (supplanted) supplanted.hidden = !has;
    if (alt) alt.dataset.inert = String(has);
  }

  function releaseObjectUrl(): void {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      objectUrl = null;
    }
  }

  // The SSR'd preview already carries the starting mark on its data-* hooks, so the
  // controller starts from the DOM rather than needing the mark passed in twice.
  function readMarkFromDom(): EntityMark {
    return {
      glyph: preview.dataset.glyph ?? DEFAULT_MARK.glyph,
      color: preview.dataset.color ?? DEFAULT_MARK.color,
      style: (preview.dataset.style as MarkStyle) ?? DEFAULT_MARK.style,
    };
  }

  /** Repaint the preview + every selection state. Never emits — that's Save's job. */
  function paint(mark: EntityMark): void {
    const glyph = MARK_GLYPH_BY_KEY[mark.glyph] ?? MARK_GLYPH_BY_KEY[DEFAULT_MARK.glyph];
    const color = MARK_COLOR_BY_KEY[mark.color] ?? MARK_COLOR_BY_KEY[DEFAULT_MARK.color];
    const style: MarkStyle = mark.style ?? DEFAULT_MARK.style;
    // `image` rides through: paint() owns the glyph pair, not the photo branch, and
    // rebuilding `current` without it would silently drop a staged photo.
    current = { glyph: glyph.key, color: color.key, style, image: mark.image };

    // Value-driven color: the TOKEN reference goes onto --_c, so the preview follows
    // the theme (and dark mode) exactly like every other surface drawing this mark.
    preview.style.setProperty('--_c', color.token);
    preview.dataset.style = style;
    preview.dataset.glyph = glyph.key;
    preview.dataset.color = color.key;
    // innerHTML on an SVGElement parses in the SVG namespace, so the swapped Lucide
    // children render (the DOM equivalent of esa-icon's `paths` escape hatch).
    if (previewSvg) previewSvg.innerHTML = glyph.paths;

    glyphBtns.forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset.glyphOption === glyph.key)),
    );
    colorBtns.forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset.colorOption === color.key)),
    );
    if (styleToggle) styleToggle.value = style;
    grids.forEach(rove);
  }

  // ── Keyboard: each grid is one tab stop with a roving tabindex; arrows move
  //    focus, and the native <button> keeps Enter/Space activation for free. ──
  function rove(grid: HTMLElement): void {
    const items = [...grid.querySelectorAll<HTMLButtonElement>('button')];
    const active = items.findIndex((b) => b.getAttribute('aria-pressed') === 'true');
    items.forEach((b, i) => {
      b.tabIndex = i === (active >= 0 ? active : 0) ? 0 : -1;
    });
  }

  function wireGridKeys(grid: HTMLElement): void {
    grid.addEventListener('keydown', (event: KeyboardEvent) => {
      const items = [...grid.querySelectorAll<HTMLButtonElement>('button')];
      const from = items.indexOf(document.activeElement as HTMLButtonElement);
      if (from < 0) return;
      // Columns come from the resolved grid track list, so Up/Down follow what the
      // user actually sees after auto-fit wrapping.
      const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
      let to = from;
      switch (event.key) {
        case 'ArrowRight': to = Math.min(from + 1, items.length - 1); break;
        case 'ArrowLeft': to = Math.max(from - 1, 0); break;
        case 'ArrowDown': to = Math.min(from + cols, items.length - 1); break;
        case 'ArrowUp': to = Math.max(from - cols, 0); break;
        case 'Home': to = 0; break;
        case 'End': to = items.length - 1; break;
        default: return;
      }
      event.preventDefault();
      items[from].tabIndex = -1;
      items[to].tabIndex = 0;
      items[to].focus();
    });
  }

  grids.forEach(wireGridKeys);

  glyphBtns.forEach((b) =>
    b.addEventListener('click', () => paint({ ...current, glyph: b.dataset.glyphOption! })),
  );
  colorBtns.forEach((b) =>
    b.addEventListener('click', () => paint({ ...current, color: b.dataset.colorOption! })),
  );

  if (styleToggle) {
    // esa-button-toggle takes its options as a PROPERTY (an array, not an attribute).
    styleToggle.options = STYLE_OPTIONS;
    styleToggle.value = current.style;
    styleToggle.addEventListener('change', (event) => {
      const value = (event as CustomEvent<{ value: string }>).detail?.value as MarkStyle;
      if (value) paint({ ...current, style: value });
    });
  }

  // esa-file-upload collects Files and emits `change`; the staged preview is a real
  // object URL so the user sees their own photo, not a placeholder standing in for it.
  fileInput?.addEventListener('change', (event) => {
    const detail = (event as CustomEvent<{ files?: File[] }>).detail;
    const file = detail?.files?.[0] ?? (event.target as HTMLInputElement | null)?.files?.[0];
    if (!file) return;
    releaseObjectUrl();
    objectUrl = URL.createObjectURL(file);
    applyPhoto(objectUrl, file.name);
  });

  btn('remove-photo')?.addEventListener('click', () => {
    releaseObjectUrl();
    applyPhoto(undefined);
    // Repaint so the restored glyph pair is selected and the grids rove correctly.
    paint({ ...current, image: undefined });
  });

  btn('save')?.addEventListener('click', () => {
    baseline = { ...current };
    root.dispatchEvent(
      new CustomEvent('bcn-mark-change', {
        detail: { mark: { ...baseline } },
        bubbles: true,
        composed: true,
      }),
    );
    dialog.close();
  });

  btn('cancel')?.addEventListener('click', () => dialog.close());

  // Esc, the backdrop and the close button all land here — one revert path, so the
  // lego keeps owning dismissal and this controller only owns the VALUE. The photo
  // reverts with the pair, and a staged object URL is released rather than leaked.
  root.addEventListener('close', () => {
    if (baseline.image !== objectUrl) releaseObjectUrl();
    applyPhoto(baseline.image);
    paint(baseline);
  });

  applyPhoto(current.image);
  paint(current);

  return {
    open(mark: EntityMark) {
      baseline = { ...mark };
      applyPhoto(mark.image);
      paint(mark);
      dialog.open = true;
    },
    getValue() {
      return { ...current };
    },
    element: root,
  };
}
