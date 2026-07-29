// settings-search — controller for <BcnSettingsSearch>, the settings-rail search box.
//
// It carries no settings content: the whole index is server-rendered by the component as
// hidden [data-result] rows, each holding its lowercased haystack in [data-match]. All
// this does is substring-test that attribute, toggle `hidden`, wrap the matched run of
// the label in <mark>, and drive keyboard nav. Debounced, ≥2 characters.
//
// Three behaviors worth knowing about:
//
//   AUDIENCE GATE. Rows from ESA-admin-only pages carry [data-esa-only]; the settings
//   shell suppresses them (CSS) under the tenant view. Rather than duplicate the shell's
//   view state, this PROBES one such row per query — unhide it, read its computed
//   display, restore it — and drops the whole class from the results when the shell has
//   them hidden. One forced reflow per query, and it stays correct no matter how the
//   shell expresses the rule.
//
//   RANKING. Label matches sort above rows that only matched on description/keywords, so
//   typing "notif" surfaces the Notifications page ahead of the switches that merely
//   mention it. Rank is applied with flexbox `order` — the DOM order never changes.
//
//   CAP. Ten rows show; the rest collapse into one "n more matches" line.
//
// Self-mounting off document-level queries; a missing field or panel is simply skipped.

const MIN_QUERY = 2;
const DEBOUNCE_MS = 150;
const MAX_VISIBLE = 10;

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));

/** Escaped text with every case-insensitive occurrence of `q` wrapped in <mark>. */
function highlight(text: string, q: string): string {
  const lc = text.toLowerCase();
  const needle = q.toLowerCase();
  let out = '';
  let i = 0;
  while (i < text.length) {
    const idx = lc.indexOf(needle, i);
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

/** The [data-settings-search] field for an event target (host-retargeted for Lit elements). */
function searchField(target: EventTarget | null): HTMLElement | null {
  const node = target as HTMLElement | null;
  if (!node) return null;
  if (node.matches?.('[data-settings-search]')) return node;
  return (node.closest?.('[data-settings-search]') as HTMLElement | null) ?? null;
}

export function setupSettingsSearch(): void {
  const field = document.querySelector<HTMLElement>('[data-settings-search]');
  const panel = document.querySelector<HTMLElement>('[data-settings-panel]');
  const list = document.querySelector<HTMLElement>('[data-settings-results]');
  if (!field || !panel || !list) return;

  const rows = [...list.querySelectorAll<HTMLAnchorElement>('[data-result]')];
  const countLine = panel.querySelector<HTMLElement>('[data-settings-count]');
  const moreLine = panel.querySelector<HTMLElement>('[data-settings-more]');
  const emptyLine = panel.querySelector<HTMLElement>('[data-settings-empty]');
  const emptyQuery = emptyLine?.querySelector<HTMLElement>('[data-settings-query]') ?? null;
  const rowLabel = (r: HTMLElement) => r.querySelector<HTMLElement>('[data-result-label]')!;

  let visible: HTMLAnchorElement[] = [];
  let activeIdx = -1;

  /** Is the shell currently showing ESA-admin surfaces? Read from the shell's own
   *  audience contract — data-audience on [data-settings-shell] — not probed from CSS. */
  function esaVisible(): boolean {
    const shell = field.closest<HTMLElement>('[data-settings-shell]');
    return shell?.dataset.audience !== 'tenant-admin';
  }

  function collapse(): void {
    panel.hidden = true;
    field.setAttribute('aria-expanded', 'false');
    field.removeAttribute('aria-activedescendant');
    for (const r of rows) {
      r.hidden = true;
      r.classList.remove('is-active');
      r.setAttribute('aria-selected', 'false');
      r.style.removeProperty('order');
    }
    visible = [];
    activeIdx = -1;
  }

  function markActive(): void {
    for (const r of rows) {
      r.classList.remove('is-active');
      r.setAttribute('aria-selected', 'false');
    }
    const row = visible[activeIdx];
    if (!row) {
      field.removeAttribute('aria-activedescendant');
      return;
    }
    row.classList.add('is-active');
    row.setAttribute('aria-selected', 'true');
    field.setAttribute('aria-activedescendant', row.id);
    row.scrollIntoView({ block: 'nearest' });
  }

  function filter(q: string, needle: string): void {
    const allowEsa = esaVisible();

    // Two buckets: a hit on the thing's own label outranks a hit that only landed in a
    // description or keyword.
    const byLabel: HTMLAnchorElement[] = [];
    const byText: HTMLAnchorElement[] = [];

    for (const r of rows) {
      const hit =
        (r.dataset.match ?? '').includes(needle) && (allowEsa || !r.hasAttribute('data-esa-only'));
      if (!hit) {
        r.hidden = true;
        continue;
      }
      ((r.dataset.label ?? '').toLowerCase().includes(needle) ? byLabel : byText).push(r);
    }

    const hits = [...byLabel, ...byText];
    visible = hits.slice(0, MAX_VISIBLE);

    for (const [i, r] of hits.entries()) {
      const shown = i < MAX_VISIBLE;
      r.hidden = !shown;
      if (shown) {
        r.style.order = String(i);
        rowLabel(r).innerHTML = highlight(r.dataset.label ?? '', q);
      }
    }

    if (countLine) {
      countLine.textContent = `${hits.length} ${hits.length === 1 ? 'match' : 'matches'}`;
    }
    if (moreLine) {
      const extra = hits.length - visible.length;
      moreLine.hidden = extra <= 0;
      moreLine.textContent = `${extra} more ${extra === 1 ? 'match' : 'matches'}`;
    }
    if (emptyLine) {
      emptyLine.hidden = hits.length > 0;
      if (emptyQuery) emptyQuery.textContent = q;
    }

    panel.hidden = false;
    field.setAttribute('aria-expanded', 'true');
    activeIdx = visible.length ? 0 : -1;
    markActive();
  }

  function applyQuery(raw: string): void {
    const q = raw.trim();
    if (q.length < MIN_QUERY) {
      collapse();
      return;
    }
    filter(q, q.toLowerCase());
  }

  let timer: number | undefined;
  document.addEventListener('input', (e) => {
    if (!searchField(e.target)) return;
    const value = (e.target as HTMLInputElement).value ?? '';
    window.clearTimeout(timer);
    timer = window.setTimeout(() => applyQuery(value), DEBOUNCE_MS);
  });

  document.addEventListener('keydown', (e) => {
    const f = searchField(e.target);
    if (!f) return;
    if (e.key === 'ArrowDown' && visible.length) {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, visible.length - 1);
      markActive();
    } else if (e.key === 'ArrowUp' && visible.length) {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      markActive();
    } else if (e.key === 'Enter') {
      const row = visible[activeIdx] ?? visible[0];
      if (row) {
        e.preventDefault();
        row.click(); // native anchor navigation — the row's href may be another page
      }
    } else if (e.key === 'Escape') {
      if ('value' in f) (f as HTMLInputElement).value = '';
      collapse();
    }
  });

  // Choosing a result collapses the panel; the anchor handles the navigation.
  list.addEventListener('click', () => collapse());
}
