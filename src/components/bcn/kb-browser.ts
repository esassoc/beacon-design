// kb-browser — page controller for the Help & Guidance page (/prototypes/help).
// Three jobs, all driven off the server-rendered light DOM (no article bodies are
// imported here — they live in the DOM, so the JS bundle carries no content):
//
//   1. READING-PANE ROUTING. The pane (in <BcnKbBrowser>) shows ONE article at a
//      time; the category cards + glossary, the search results, and the Aldo guidance
//      drawer deep-link into it.
//        #article-<id>  → show that article and scroll the pane clear of the topbar.
//        #category-<id> → ON THE HOME, redirect to that category's comprehensive page
//                         (the home no longer holds a dense index to scroll to). On a
//                         category page it is a no-op (falls through to the default).
//        (no hash)      → the default article, WITHOUT scrolling (category pages); the
//                         HOME has no default, so the pane collapses until a deep-link.
//
//   2. LIVE SEARCH → RESULTS. The hero (sibling) owns the [data-kb-search] field and
//      a pre-rendered results listbox ([data-kb-results], one hidden row per article).
//      Typing (debounced, ≥2 chars) reveals matching rows with the matched substring
//      <mark>ed; Arrow keys move the active row, Enter opens it, Esc clears. Click or
//      Enter routes via the hash into the reading pane.
//
//   3. LIVE INDEX FILTER. While a query is active the index below narrows to the same
//      matches — non-matching entries hide, empty category groups and the glossary
//      collapse. Clearing the query restores everything.
//
// Self-mounting off document-level queries (the field, results, index, and pane each
// live in a different sibling component); missing pieces are simply skipped.

import { withBase } from '../../lib/base';

// True on the Help & Guidance home (…/prototypes/help), false on a category page
// (…/prototypes/help/<id>). Base-prefix-agnostic — matches as a suffix.
const onHome = /\/prototypes\/help\/?$/.test(location.pathname);

const MIN_QUERY = 2;
const DEBOUNCE_MS = 150;

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
    if (idx === -1) { out += escapeHtml(text.slice(i)); break; }
    out += escapeHtml(text.slice(i, idx));
    out += `<mark>${escapeHtml(text.slice(idx, idx + q.length))}</mark>`;
    i = idx + q.length;
  }
  return out;
}

/** The [data-kb-search] field for an event target (host-retargeted for Lit elements). */
function searchField(target: EventTarget | null): HTMLElement | null {
  const node = target as HTMLElement | null;
  if (!node) return null;
  if (node.matches?.('[data-kb-search]')) return node;
  return (node.closest?.('[data-kb-search]') as HTMLElement | null) ?? null;
}

export function setupKbBrowser(): void {
  // ── reading pane (in <BcnKbBrowser>) ──
  const pane = document.querySelector<HTMLElement>('[data-kb-pane]');
  const articles = pane ? [...pane.querySelectorAll<HTMLElement>('.bcn-kb__article')] : [];
  const defaultId = pane?.dataset.kbDefault ?? articles[0]?.dataset.articleId ?? '';

  function scrollPaneTop(): void {
    // The page scrolls inside the app-shell content area, not the window, so scroll
    // via scrollIntoView (it drives the nearest scrollable ancestor). scroll-margin-top
    // on the pane clears the app topbar. Two frames: the home pane expands from its
    // collapsed (:has) state as the article unhides — wait for that reflow to settle
    // before measuring, and win over the browser's own fragment scroll.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      pane?.scrollIntoView({ block: 'start', behavior: 'auto' });
    }));
  }

  function showArticle(id: string, scroll: boolean): boolean {
    const target = articles.find((a) => a.dataset.articleId === id);
    if (!target) return false;
    for (const a of articles) a.hidden = a !== target;
    if (scroll) scrollPaneTop();
    return true;
  }

  function showDefault(): void {
    if (defaultId) showArticle(defaultId, false);
  }

  // ── dense index (in <BcnKbCategories>) ──
  const index = document.querySelector<HTMLElement>('[data-kb-index]');
  const entries = index ? [...index.querySelectorAll<HTMLElement>('[data-kb-entry]')] : [];
  const catGroups = index ? [...index.querySelectorAll<HTMLElement>('[data-kb-cat]')] : [];
  const glossary = index?.querySelector<HTMLElement>('[data-kb-glossary]') ?? null;

  // ── live-search results (in <BcnKbHero>) ──
  const field = document.querySelector<HTMLElement>('[data-kb-search]');
  const results = document.querySelector<HTMLElement>('[data-kb-results]');
  const resultRows = results ? [...results.querySelectorAll<HTMLAnchorElement>('[data-result]')] : [];
  const noResults = results?.querySelector<HTMLElement>('[data-kb-no-results]') ?? null;
  const noResultsQuery = noResults?.querySelector<HTMLElement>('[data-kb-query]') ?? null;
  const rowTitle = (r: HTMLElement) => r.querySelector<HTMLElement>('[data-result-title]')!;

  let visible: HTMLAnchorElement[] = [];
  let activeIdx = -1;

  function closeResults(): void {
    if (!results) return;
    results.hidden = true;
    field?.setAttribute('aria-expanded', 'false');
    field?.removeAttribute('aria-activedescendant');
    for (const r of resultRows) { r.classList.remove('is-active'); r.setAttribute('aria-selected', 'false'); }
    activeIdx = -1;
  }

  function markActive(): void {
    for (const r of resultRows) { r.classList.remove('is-active'); r.setAttribute('aria-selected', 'false'); }
    const row = visible[activeIdx];
    if (row) {
      row.classList.add('is-active');
      row.setAttribute('aria-selected', 'true');
      field?.setAttribute('aria-activedescendant', row.id);
      row.scrollIntoView({ block: 'nearest' });
    } else {
      field?.removeAttribute('aria-activedescendant');
    }
  }

  function filterResults(q: string, needle: string): void {
    if (!results) return;
    for (const r of resultRows) {
      const hit = `${r.dataset.title ?? ''} ${r.dataset.summary ?? ''}`.toLowerCase().includes(needle);
      r.hidden = !hit;
      rowTitle(r).innerHTML = hit ? highlight(r.dataset.title ?? '', q) : escapeHtml(r.dataset.title ?? '');
    }
    visible = resultRows.filter((r) => !r.hidden);
    results.hidden = false;
    field?.setAttribute('aria-expanded', 'true');
    if (noResults) {
      const empty = visible.length === 0;
      noResults.hidden = !empty;
      if (empty && noResultsQuery) noResultsQuery.textContent = q;
    }
    activeIdx = visible.length ? 0 : -1;
    markActive();
  }

  function filterIndex(active: boolean, needle: string): void {
    if (!index) return;
    index.toggleAttribute('data-searching', active);
    if (!active) {
      for (const e of entries) e.hidden = false;
      for (const g of catGroups) g.hidden = false;
      if (glossary) glossary.hidden = false;
      return;
    }
    for (const e of entries) {
      e.hidden = !`${e.dataset.title ?? ''} ${e.dataset.summary ?? ''}`.toLowerCase().includes(needle);
    }
    const hasVisibleEntry = (scope: HTMLElement) =>
      [...scope.querySelectorAll<HTMLElement>('[data-kb-entry]')].some((e) => !e.hidden);
    for (const g of catGroups) g.hidden = !hasVisibleEntry(g);
    if (glossary) glossary.hidden = !hasVisibleEntry(glossary);
  }

  function applyQuery(raw: string): void {
    const q = raw.trim();
    if (q.length < MIN_QUERY) { closeResults(); filterIndex(false, ''); return; }
    const needle = q.toLowerCase();
    filterResults(q, needle);
    filterIndex(true, needle);
  }

  // ── hash routing ──
  function route(): void {
    const hash = location.hash;
    if (hash.startsWith('#article-')) {
      closeResults();
      if (!showArticle(hash.slice('#article-'.length), true)) showDefault();
      return;
    }
    if (hash.startsWith('#category-') && onHome) {
      // The home no longer holds a dense index to scroll to — a category deep-link goes
      // to that category's comprehensive page.
      location.replace(withBase(`/prototypes/help/${hash.slice('#category-'.length)}`));
      return;
    }
    // No hash (or #category- on a category page): reset the pane to its default. The
    // home has no default → the pane collapses; a category page lands on its first article.
    showDefault();
  }

  // ── events ──
  window.addEventListener('hashchange', route);

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
      if (row) { e.preventDefault(); location.hash = new URL(row.href).hash; }
    } else if (e.key === 'Escape') {
      if ('value' in f) (f as HTMLInputElement).value = '';
      applyQuery('');
    }
  });

  // Choosing a result closes the panel; hash routing shows the article.
  results?.addEventListener('click', () => closeResults());

  // Click outside the field + panel closes the panel.
  document.addEventListener('click', (e) => {
    if (!results || results.hidden) return;
    const t = e.target as Node;
    if (results.contains(t) || field?.contains(t)) return;
    closeResults();
  });

  route(); // honor an initial deep-link (or land on the default article)
}
