// component-data-panel — the behavior half of <BcnComponentDataPanel>.
//
// Same contract as the project panel's inline script (BcnProjectDataPanel), lifted
// into a module because this panel is smaller and the URL plumbing is the only part
// worth reading twice:
//
//   · ?data=<key> IS the open state. pushState on open, stripped on close, honored
//     on first load AND on popstate — so every panel is bookmarkable and the browser
//     Back button closes it. Rail links ship real href="?data=<key>" and are
//     intercepted here, but ONLY for keys this panel actually renders.
//   · The footer is re-slotted to 'void' for keys with no footer actions (sources,
//     layers are read-only), which collapses esa-side-dialog's footer bar entirely
//     (.footer:not(:has(*)) { display: none } in the lego).
//   · Milestones carry live override state: an empty component date reads INHERITED,
//     a filled one offers "Use project date" to revert, and the header count is
//     recomputed from the rows rather than trusting the render-time number.
//
// Everything is queried inside the passed root, so two panels could coexist on one
// page. Vanilla module (no Lit): the markup is authored in Astro, so it is light DOM
// and the controller only flips attributes on it — same shape as status-select.ts.

/** The four keys a component owns. Deliberately not the project's six — see the .astro header. */
export type ComponentDataKey = 'component-info' | 'milestones' | 'sources' | 'layers';

export const COMPONENT_DATA_KEYS: ComponentDataKey[] = ['component-info', 'milestones', 'sources', 'layers'];

type PanelEl = HTMLElement & { show(): void; close(): void; open: boolean; heading: string };
type ConfirmEl = HTMLElement & { open: boolean };
type ValueEl = HTMLElement & { value: string };

export interface ComponentDataPanelController {
  readonly root: HTMLElement;
  /** Keys this instance actually renders a body for. */
  readonly keys: string[];
  open(key: string): void;
  close(): void;
  /** Live count of milestones carrying a component-specific date. */
  overrideCount(): number;
}

/** Wire one rendered <BcnComponentDataPanel> root (the <esa-side-dialog data-cdp-root>). */
export function setupComponentDataPanel(root: HTMLElement): ComponentDataPanelController {
  const panel = root as PanelEl;
  const bodies = Array.from(root.querySelectorAll<HTMLElement>('[data-cdp-body]'));
  const keys = bodies.map((b) => b.dataset.cdpBody!);

  const foot = root.querySelector<HTMLElement>('[data-cdp-foot]');
  const footGroups = Array.from(root.querySelectorAll<HTMLElement>('[data-cdp-foot-for]'));
  // Which keys get a footer is DERIVED from the markup — add a group, get a footer.
  const FOOTED = new Set(footGroups.map((g) => g.dataset.cdpFootFor!));

  // ── ?data= contract ────────────────────────────────────────────────────────
  let syncingHistory = false;

  function open(key: string, push = true): void {
    const body = bodies.find((b) => b.dataset.cdpBody === key);
    if (!body) return;
    bodies.forEach((b) => {
      b.hidden = b !== body;
    });
    panel.heading = body.dataset.cdpHeading || '';
    if (foot) foot.slot = FOOTED.has(key) ? 'footer' : 'void';
    footGroups.forEach((g) => {
      g.hidden = g.dataset.cdpFootFor !== key;
    });
    panel.show();
    if (push) history.pushState({ cdata: key }, '', `?data=${key}`);
  }

  // Esc / backdrop / × all funnel through the lego's close event — strip the param.
  panel.addEventListener('close', () => {
    if (!syncingHistory && new URLSearchParams(location.search).has('data')) {
      history.pushState({}, '', location.pathname);
    }
  });

  window.addEventListener('popstate', () => {
    const key = new URLSearchParams(location.search).get('data');
    syncingHistory = true;
    if (key && keys.includes(key)) open(key, false);
    else panel.close();
    syncingHistory = false;
  });

  // Rail links carry href="?data=<key>" — real, shareable hrefs, intercepted here.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="?data="]').forEach((a) => {
    const key = new URLSearchParams(a.search).get('data');
    if (!key || !keys.includes(key)) return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      open(key);
    });
  });

  // ── Milestones: live override state + header count ─────────────────────────
  const countEl = root.querySelector<HTMLElement>('[data-cdp-override-count]');
  const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-cdp-ms]'));

  const pickerOf = (row: HTMLElement) => row.querySelector<ValueEl>('[data-cdp-ms-date]');

  function paintRow(row: HTMLElement): void {
    const picker = pickerOf(row);
    const has = !!picker?.value;
    row.dataset.cdpOverride = has ? 'true' : 'false';
    const state = row.querySelector<HTMLElement>('[data-cdp-ms-state]');
    const clear = row.querySelector<HTMLElement>('[data-cdp-ms-clear]');
    if (state) state.hidden = has;
    if (clear) clear.hidden = !has;
  }

  const overrideCount = (): number => rows.filter((r) => r.dataset.cdpOverride === 'true').length;

  function repaint(): void {
    rows.forEach(paintRow);
    if (countEl) countEl.textContent = String(overrideCount());
  }

  // esa-date-picker's change is composed, so one delegated listener covers every row.
  root.addEventListener('change', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target?.matches?.('[data-cdp-ms-date]')) return;
    repaint();
  });

  rows.forEach((row) => {
    row.querySelector<HTMLElement>('[data-cdp-ms-clear]')?.addEventListener('click', () => {
      const picker = pickerOf(row);
      if (picker) picker.value = '';
      repaint();
    });
  });

  repaint();

  // ── esa-select takes its selection as a PROPERTY (no `value` attribute) ─────
  root.querySelectorAll<HTMLElement>('[data-cdp-select-value]').forEach((el) => {
    (el as unknown as { value: string }).value = el.dataset.cdpSelectValue || '';
  });

  // ── Footer Save / Cancel + the danger-zone delete ──────────────────────────
  root.querySelectorAll<HTMLElement>('[data-cdp-cancel], [data-cdp-save]').forEach((el) =>
    el.addEventListener('click', () => panel.close())
  );

  const confirmId = root.dataset.cdpConfirm;
  const confirmEl = confirmId ? (document.getElementById(confirmId) as ConfirmEl | null) : null;
  if (confirmEl) {
    root.querySelector<HTMLElement>('[data-cdp-delete]')?.addEventListener('click', () => {
      confirmEl.open = true;
    });
    confirmEl.addEventListener('confirm', () => panel.close());
  }

  // Deep link / refresh: honor ?data= without pushing a duplicate entry.
  const initial = new URLSearchParams(location.search).get('data');
  if (initial && keys.includes(initial)) open(initial, false);

  return {
    root,
    keys,
    open: (key: string) => open(key),
    close: () => panel.close(),
    overrideCount,
  };
}

/** Wire every <BcnComponentDataPanel> on the page. */
export function initComponentDataPanels(): ComponentDataPanelController[] {
  return Array.from(document.querySelectorAll<HTMLElement>('[data-cdp-root]')).map(setupComponentDataPanel);
}
