// prototype-index.client — behavior for <BcnPrototypeIndex>: a two-level table of efforts
// and their pages, with expand/collapse, two multi-select facets (tenant / status) ANDed
// together, and a keyword query ORed across effort titles, page titles, and page
// descriptions.
//
// Every row is server-rendered EXPANDED; this collapses them on init and thereafter only
// toggles `hidden`. The catalog never enters the bundle, and with JS off the page is a
// complete, fully-expanded index rather than eight rows that will not open.
//
// Descriptions are searched but never shown, so a description-only match surfaces its
// effort and page without a visible highlight — the row is the answer, not the snippet.
//
// Facet options arrive as JSON on data-options because `options` is a Lit ARRAY property:
// arrays cannot cross an HTML attribute, so Astro can't hand it over at build time.

const FACETS = ['tenant', 'status'] as const;
type Facet = (typeof FACETS)[number];

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Escaped text with every case-insensitive occurrence of `q` wrapped in <mark>.
 *
 * SAFE-innerHTML CONTRACT: this escapes EVERY segment it emits — both the registry text
 * and the user's query — and the <mark> wrappers are the only markup it injects. Its
 * result is the ONLY thing assigned to innerHTML below. Preserve that if you touch this;
 * never interpolate a raw query.
 */
function highlight(text: string, q: string): string {
  if (!q) return escapeHtml(text);
  const hay = text.toLowerCase();
  const needle = q.toLowerCase();
  let out = '';
  let i = 0;
  for (;;) {
    const idx = hay.indexOf(needle, i);
    if (idx === -1) {
      out += escapeHtml(text.slice(i));
      break;
    }
    out += escapeHtml(text.slice(i, idx));
    out += `<mark>${escapeHtml(text.slice(idx, idx + q.length))}</mark>`;
    i = idx + q.length;
  }
  return out;
}

export function setupPrototypeIndex(): void {
  const root = document.querySelector<HTMLElement>('[data-prototype-index]');
  if (!root) return;

  const effortRows = [...root.querySelectorAll<HTMLElement>('[data-pi-effort]')];
  const pageRows = [...root.querySelectorAll<HTMLElement>('[data-pi-page]')];
  if (!effortRows.length) return;

  const search = root.querySelector<HTMLElement>('[data-pi-search]');
  const searchClear = root.querySelector<HTMLElement>('[data-pi-search-clear]');
  const countEl = root.querySelector<HTMLElement>('[data-pi-count]');
  const emptyEl = root.querySelector<HTMLElement>('[data-pi-empty]');
  const table = root.querySelector<HTMLElement>('.bcn-pi__table');
  const clearAll = root.querySelector<HTMLElement>('[data-pi-clear]');

  // Pages grouped by their effort slug, so a row only ever walks its own children.
  const pagesOf = new Map<string, HTMLElement[]>();
  for (const row of pageRows) {
    const slug = row.dataset.piPage!;
    const list = pagesOf.get(slug);
    if (list) list.push(row);
    else pagesOf.set(slug, [row]);
  }

  // ── state ──
  const active = new Map<Facet, Set<string>>(FACETS.map((f) => [f, new Set<string>()]));
  const expanded = new Set<string>(); // efforts the USER opened; search opens on top of it
  let query = '';

  // ── expand / collapse ──
  for (const btn of root.querySelectorAll<HTMLElement>('[data-pi-toggle]')) {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.piToggle!;
      if (expanded.has(slug)) expanded.delete(slug);
      else expanded.add(slug);
      apply();
    });
  }

  // ── hand each dropdown its options, then listen for selection ──
  const dropdowns = new Map<Facet, HTMLElement>();
  for (const el of root.querySelectorAll<HTMLElement>('[data-pi-filter]')) {
    const facet = el.dataset.piFilter as Facet;
    if (!FACETS.includes(facet)) continue;
    dropdowns.set(facet, el);

    const raw = el.dataset.options;
    if (raw) {
      try {
        (el as unknown as { options: unknown }).options = JSON.parse(raw);
      } catch {
        /* malformed options → the dropdown renders empty rather than throwing */
      }
    }

    el.addEventListener('selection-change', (e) => {
      const value = (e as CustomEvent<{ value?: string[] | string }>).detail?.value;
      const values = Array.isArray(value) ? value : value ? [value] : [];
      active.set(facet, new Set(values));
      apply();
    });
  }

  // ── search: esa-text-field's `input` is composed, so it retargets to the host ──
  search?.addEventListener('input', (e) => {
    query = ((e.target as HTMLInputElement).value ?? '').trim();
    if (searchClear) searchClear.hidden = query === '';
    apply();
  });

  searchClear?.addEventListener('click', () => {
    query = '';
    setFieldValue(search, '');
    searchClear.hidden = true;
    apply();
  });

  const resetAll = (): void => {
    query = '';
    setFieldValue(search, '');
    if (searchClear) searchClear.hidden = true;
    for (const f of FACETS) active.get(f)!.clear();
    for (const el of dropdowns.values()) clearDropdown(el);
    expanded.clear();
    apply();
  };
  clearAll?.addEventListener('click', resetAll);
  root.addEventListener('esa-filter-clear', resetAll);

  apply();

  // ────────────────────────────────────────────────────────────────────────────
  function apply(): void {
    const q = query.toLowerCase();
    let shownEfforts = 0;

    for (const effortRow of effortRows) {
      const slug = effortRow.dataset.piEffort!;
      const pages = pagesOf.get(slug) ?? [];
      const effortTitle = effortRow.dataset.title ?? '';

      // The tenant facet is an EFFORT fact; status is a PAGE fact. So tenant gates the
      // whole effort, while status gates which pages inside it survive.
      const tenantSet = active.get('tenant')!;
      const tenantHit = tenantSet.size === 0 || tenantSet.has(effortRow.dataset.tenant ?? '');

      const statusSet = active.get('status')!;
      const effortTitleHit = q !== '' && effortTitle.toLowerCase().includes(q);

      let matchingPages = 0;
      for (const pageRow of pages) {
        const statusHit = statusSet.size === 0 || statusSet.has(pageRow.dataset.status ?? '');
        const title = pageRow.dataset.title ?? '';
        const desc = pageRow.dataset.desc ?? '';
        // An effort-title match carries its pages: searching "fish" should show the
        // effort's pages, not an effort that opens onto nothing.
        const queryHit =
          q === '' ||
          effortTitleHit ||
          title.toLowerCase().includes(q) ||
          desc.toLowerCase().includes(q);

        const keep = tenantHit && statusHit && queryHit;
        pageRow.dataset.piMatch = keep ? '1' : '';
        if (keep) matchingPages++;

        const titleEl = pageRow.querySelector<HTMLElement>('[data-pi-title]');
        if (titleEl) titleEl.innerHTML = highlight(title, query);
      }

      // An effort survives if any page did — or if its own title matched and the tenant
      // facet allows it, so a title hit never yields an effort with zero rows.
      const effortVisible = tenantHit && (matchingPages > 0 || (effortTitleHit && pages.length === 0));
      effortRow.hidden = !effortVisible;
      if (effortVisible) shownEfforts++;

      // A query force-opens every surviving effort — a collapsed hit is a hidden answer.
      const open = effortVisible && (query !== '' || expanded.has(slug));
      for (const pageRow of pages) {
        pageRow.hidden = !(open && pageRow.dataset.piMatch === '1');
      }

      const toggle = effortRow.querySelector<HTMLElement>('[data-pi-toggle]');
      toggle?.setAttribute('aria-expanded', String(open));

      // The count follows the filter: an effort narrowed to 2 of 7 pages says so.
      const countLabel = effortRow.querySelector<HTMLElement>('[data-pi-pagecount]');
      if (countLabel) {
        const total = pages.length;
        const noun = total === 1 ? 'page' : 'pages';
        countLabel.textContent =
          matchingPages === total ? `${total} ${noun}` : `${matchingPages} of ${total} ${noun}`;
      }

      const effortTitleEl = effortRow.querySelector<HTMLElement>('[data-pi-title]');
      if (effortTitleEl) effortTitleEl.innerHTML = highlight(effortTitle, query);
    }

    if (countEl) countEl.textContent = String(shownEfforts);
    if (emptyEl) emptyEl.hidden = shownEfforts > 0;
    if (table) table.hidden = shownEfforts === 0;
  }
}

/** Write a value into esa-text-field (a Lit host, not a native input). */
function setFieldValue(field: HTMLElement | null, value: string): void {
  if (!field) return;
  (field as unknown as { value: string }).value = value;
  const inner = field.shadowRoot?.querySelector('input');
  if (inner) inner.value = value;
}

/**
 * Reset one esa-filter-dropdown's selection.
 *
 * HUB GAP: the lego keeps its selection in `_selected`, a private Lit state property, and
 * exposes no public `clear()` or settable `value` — so a host that owns a clear-all button
 * has no sanctioned way to reset it. Assigning the reactive property works and re-renders,
 * but it reaches past the component's public surface and will break if the field is
 * renamed. Worth promoting a public clear() to @esa/ecology; until then this is the seam.
 */
function clearDropdown(el: HTMLElement): void {
  (el as unknown as { _selected: string[] })._selected = [];
}
