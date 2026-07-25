// prototype-index.client — behavior for <BcnPrototypeIndex>: three multi-select facets
// (tenant / effort / status) ANDed together, plus a keyword query ORed across each row's
// title and description, with matches highlighted in place.
//
// Every row is server-rendered; this only toggles `hidden` and rewrites the two text
// cells. The catalog never enters the bundle — the same progressive strategy the
// help-centre search uses. With JS off the page is a complete, unfiltered index.
//
// Facet options arrive as JSON on data-options because `options` is a Lit ARRAY property:
// arrays cannot cross an HTML attribute, so Astro can't hand it over at build time and the
// property has to be assigned here.

/** A facet key → the row data-attribute it filters on. Both are the same string today,
    but naming the mapping keeps the row contract explicit. */
const FACETS = ['tenant', 'effort', 'status'] as const;
type Facet = (typeof FACETS)[number];

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * A window of `text` centred on the first occurrence of `q`, so the hit is inside the
 * two-line clamp instead of buried in paragraph six. Registry descriptions run long —
 * un-clamping them instead turns three results into a full screen of prose.
 *
 * Snaps the start back to a word boundary and marks either end with an ellipsis when
 * text was dropped. Returns the head of the string unchanged when the hit is already
 * near it (or when there is no hit).
 */
function snippet(text: string, q: string, radius = 80): string {
  if (!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx <= radius) return text;

  let start = idx - radius;
  const space = text.indexOf(' ', start);
  if (space !== -1 && space < idx) start = space + 1;
  const end = Math.min(text.length, idx + q.length + radius);
  return `…${text.slice(start, end)}${end < text.length ? '…' : ''}`;
}

/** Escaped text with every case-insensitive occurrence of `q` wrapped in <mark>. */
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

  const rows = [...root.querySelectorAll<HTMLElement>('[data-pi-row]')];
  if (!rows.length) return;

  const search = root.querySelector<HTMLElement>('[data-pi-search]');
  const searchClear = root.querySelector<HTMLElement>('[data-pi-search-clear]');
  const countEl = root.querySelector<HTMLElement>('[data-pi-count]');
  const emptyEl = root.querySelector<HTMLElement>('[data-pi-empty]');
  const table = root.querySelector<HTMLElement>('.bcn-pi__table');
  const clearAll = root.querySelector<HTMLElement>('[data-pi-clear]');

  // ── facet state ──
  const active = new Map<Facet, Set<string>>(FACETS.map((f) => [f, new Set<string>()]));
  let query = '';

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
        /* malformed options → the dropdown simply renders empty rather than throwing */
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

  // The clear-all button bubbles `esa-filter-clear`; catch the click too, since the lego
  // is presentational and a host may not re-emit.
  const resetAll = (): void => {
    query = '';
    setFieldValue(search, '');
    if (searchClear) searchClear.hidden = true;
    for (const f of FACETS) active.get(f)!.clear();
    for (const el of dropdowns.values()) clearDropdown(el);
    apply();
  };
  clearAll?.addEventListener('click', resetAll);
  root.addEventListener('esa-filter-clear', resetAll);

  apply();

  // ────────────────────────────────────────────────────────────────────────────
  function apply(): void {
    let shown = 0;

    for (const row of rows) {
      const facetHit = FACETS.every((f) => {
        const set = active.get(f)!;
        return set.size === 0 || set.has(row.dataset[f] ?? '');
      });

      const title = row.dataset.title ?? '';
      const desc = row.dataset.desc ?? '';
      const queryHit =
        query === '' ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        desc.toLowerCase().includes(query.toLowerCase());

      const visible = facetHit && queryHit;
      row.hidden = !visible;
      if (!visible) continue;
      shown++;

      // SAFE-innerHTML CONTRACT: highlight() escapes EVERY segment it emits — both the
      // registry text and the user's query — and the <mark> wrappers are the only markup
      // it injects. Preserve that if you touch this; never interpolate a raw query.
      const titleEl = row.querySelector<HTMLElement>('[data-pi-title]');
      const descEl = row.querySelector<HTMLElement>('[data-pi-desc]');
      if (titleEl) titleEl.innerHTML = highlight(title, query);
      if (descEl) descEl.innerHTML = highlight(snippet(desc, query), query);
    }

    if (countEl) countEl.textContent = String(shown);
    if (emptyEl) emptyEl.hidden = shown > 0;
    if (table) table.hidden = shown === 0;
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
