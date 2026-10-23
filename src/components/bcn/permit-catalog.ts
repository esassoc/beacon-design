// permit-catalog.ts — the controller behind <BcnPermitCatalog>. Every jurisdiction's
// pane is server-rendered; this only decides which one shows. The URL hash is the
// single source of truth (`#<jurisdictionId>`): the rail rows are plain hash links,
// the phone picker writes the hash, and load + hashchange read it. An unknown hash
// (or none) falls back to the root's `data-default`.

interface PickerOption {
  label: string;
  value: string;
}

/** esa-select's public surface, as far as this controller touches it. */
type EsaSelectEl = HTMLElement & { options: PickerOption[]; value: string };

function init(root: HTMLElement): void {
  const panes = [...root.querySelectorAll<HTMLElement>('[data-jurisdiction-pane]')];
  const rows = [...root.querySelectorAll<HTMLAnchorElement>('[data-jurisdiction-row]')];
  const ids = panes.map((p) => p.dataset.jurisdictionPane ?? '');
  const fallback = root.dataset.default && ids.includes(root.dataset.default) ? root.dataset.default : ids[0];
  const picker = root.querySelector<EsaSelectEl>('[data-permit-catalog-picker]');
  let current = '';

  const fromHash = (): string => {
    const id = decodeURIComponent(location.hash.replace(/^#/, ''));
    return ids.includes(id) ? id : fallback;
  };

  const show = (id: string): void => {
    current = id;
    for (const pane of panes) pane.hidden = pane.dataset.jurisdictionPane !== id;
    for (const row of rows) {
      if (row.dataset.jurisdictionRow === id) row.setAttribute('aria-current', 'true');
      else row.removeAttribute('aria-current');
    }
    if (picker && picker.value !== id) picker.value = id;
  };

  show(fromHash());
  window.addEventListener('hashchange', () => show(fromHash()));

  if (picker) {
    let options: PickerOption[] = [];
    try {
      options = JSON.parse(root.dataset.options ?? '[]') as PickerOption[];
    } catch {
      options = [];
    }
    customElements.whenDefined('esa-select').then(() => {
      picker.options = options;
      picker.value = current;
    });
    picker.addEventListener('change', (e) => {
      const value = (e as CustomEvent<{ value?: string }>).detail?.value ?? picker.value;
      if (value && value !== current && ids.includes(value)) location.hash = value;
    });
  }
}

export function setupPermitCatalog(): void {
  document.querySelectorAll<HTMLElement>('[data-permit-catalog]').forEach((root) => {
    if (root.dataset.permitCatalogReady) return;
    root.dataset.permitCatalogReady = 'true';
    init(root);
  });
}
