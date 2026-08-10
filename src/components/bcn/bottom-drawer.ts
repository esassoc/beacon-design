// <bcn-bottom-drawer> — the behavior half of Beacon's BOTTOM drawer pattern.
//
// WHY THIS EXISTS (the lego gap): esa-side-dialog is the hub's drawer lego, and it is the
// right one for every drawer Beacon has today — but it declares
// `position: 'left' | 'right'` only, and its panel hard-wires `top`/`bottom` to the inset
// with `--side-dialog-width` as the ONLY geometry hook. There is no height property, so a
// 90vw × 80vh bottom-anchored panel cannot be produced by configuring it. Filed as a lego
// request: `position="bottom"` + `--side-dialog-height` on esa-side-dialog. When that
// lands, this element is deleted and the markup becomes <esa-side-dialog position="bottom">.
//
// Until then this mirrors the lego's COMMITTED mechanics verbatim so the swap is a rename:
// own backdrop, focus trap, Esc-to-close, focus restore, and a keep-mounted 200ms slide-out
// so closing animates instead of vanishing.
//
// Vanilla custom element, not Lit, for two reasons: `lit` is a transitive dependency of
// @esa/ecology rather than a direct one here, and the drawer's content is authored in
// Astro (compile-time) — so it must be LIGHT DOM anyway. The element operates on the shell
// markup its sibling <BcnBottomDrawer> renders; geometry and skin live in that component's
// CSS, addressed through the data-* hooks below.
//
// LAYERING. The backdrop/panel z-indices are set by the host component, not here. Beacon's
// stack, for the record: topbar 1100, guidance drawer 1300–1303, this drawer 1400/1401 —
// deliberately above modals (esa-dialog sits at 400) because this drawer must be able to
// cover an open dialog. Toasts are the one surface that must out-rank it; the snackbar
// container needs a z-index above 1401 (not changed here).

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/** Matches the slide-out duration in BcnBottomDrawer's CSS. */
/** Must match the exit animation in BcnBottomDrawer.astro (bcn-bd-down). The element stays
 *  mounted for exactly this long so the slide-out can finish — set it SHORTER than the
 *  animation and the panel is torn out mid-travel, which reads as the drawer vanishing. */
const EXIT_MS = 220;

export class BcnBottomDrawer extends HTMLElement {
  static observedAttributes = ['open'];

  private previousFocus: HTMLElement | null = null;
  private closeTimer: ReturnType<typeof setTimeout> | undefined;

  get open(): boolean {
    return this.hasAttribute('open');
  }

  connectedCallback(): void {
    this.addEventListener('keydown', this.onKeydown);
    // The backdrop is a sibling of the panel inside this element's light DOM.
    this.querySelector('[data-drawer-backdrop]')?.addEventListener('click', () => this.close());
    for (const btn of this.querySelectorAll('[data-drawer-close]')) {
      btn.addEventListener('click', () => this.close());
    }
  }

  disconnectedCallback(): void {
    this.removeEventListener('keydown', this.onKeydown);
    clearTimeout(this.closeTimer);
  }

  show(): void {
    if (this.open) return;
    clearTimeout(this.closeTimer);
    this.removeAttribute('closing');
    this.previousFocus = document.activeElement as HTMLElement | null;
    this.setAttribute('open', '');
    // The page behind must not scroll while a full-bleed overlay is up.
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => this.focusFirst());
    this.dispatchEvent(new CustomEvent('drawer-open', { bubbles: true }));
  }

  close(): void {
    if (!this.open) return;
    this.removeAttribute('open');
    // Stay mounted through the slide-out, then drop the flag.
    this.setAttribute('closing', '');
    clearTimeout(this.closeTimer);
    this.closeTimer = setTimeout(() => this.removeAttribute('closing'), EXIT_MS);
    document.body.style.overflow = '';
    this.previousFocus?.focus?.();
    this.dispatchEvent(new CustomEvent('drawer-close', { bubbles: true }));
  }

  toggle(): void {
    this.open ? this.close() : this.show();
  }

  private onKeydown = (event: KeyboardEvent): void => {
    if (!this.open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
    } else if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  };

  /** Visible, focusable descendants of the panel, in document order. */
  private focusable(): HTMLElement[] {
    const panel = this.querySelector<HTMLElement>('[data-drawer-panel]');
    if (!panel) return [];
    return Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement
    );
  }

  private focusFirst(): void {
    const items = this.focusable();
    if (items.length) items[0].focus();
    else this.querySelector<HTMLElement>('[data-drawer-panel]')?.focus();
  }

  private trapFocus(event: KeyboardEvent): void {
    const items = this.focusable();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement as HTMLElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

/** Self-register guard — same convention as every esa-* Lit lego. */
export function registerBottomDrawer(): void {
  if (!customElements.get('bcn-bottom-drawer')) {
    customElements.define('bcn-bottom-drawer', BcnBottomDrawer);
  }
}
