// kb-browser — behavior for <BcnKbBrowser>, the article browser of the Help &
// Guidance page (/prototypes/help). Three jobs, all driven off the server-rendered
// light DOM (no article bodies are imported here — they live in the DOM):
//
//   1. HASH ROUTING. The reading pane shows ONE article at a time (or the start
//      landing) so the guidance drawer (a sibling surface) can deep-link to an
//      exact article.
//        #article-<id>  → show that article, expand + mark its rail link active, scroll to top.
//        #category-<id> → expand that category in the rail + show its FIRST article.
//        (no hash)      → the populated START LANDING (pane) + the first category expanded.
//      Rail links (article links AND category headers) are real <a href="#…"> so
//      back/forward Just Works; we only listen to hashchange + the initial load.
//
//   2. CATEGORY ACCORDION. The rail shows one category's articles at a time: the
//      ACTIVE category is expanded (data-active), the rest collapse to header rows.
//      setActiveCategory() is the single writer of that state; routing calls it so the
//      rail always reflects where you are — contextual wayfinding, not a flat index.
//
//   3. LIVE SEARCH. The hero (sibling) renders a search field carrying [data-kb-search]
//      — it may be a Lit <esa-text-field>, so we listen at document level for the
//      COMPOSED 'input' event and read .value off the retargeted host. ≥2 chars puts
//      the rail into search mode ([data-searching], which reveals matched items across
//      ALL categories regardless of the accordion), filters against data-title/
//      data-summary, hides empty groups, and marks the matched substring. Enter opens
//      the first match. Clearing the box restores the accordion to the active category.
//
// Self-mounting (queries [data-kb-browser]) like initOmniSearch — the "own behavior"
// controller shape, matched to evidence-list.ts's export naming.

const MIN_QUERY = 2;
/** Nudges the scrolled pane top clear of the app topbar so it isn't tucked under it. */
const HEADER_OFFSET = 80;

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));

/** Escaped title HTML with every case-insensitive occurrence of `q` wrapped in <mark>. */
function highlight(title: string, q: string): string {
  const lc = title.toLowerCase();
  const needle = q.toLowerCase();
  let out = '';
  let i = 0;
  while (i < title.length) {
    const idx = lc.indexOf(needle, i);
    if (idx === -1) { out += escapeHtml(title.slice(i)); break; }
    out += escapeHtml(title.slice(i, idx));
    out += `<mark>${escapeHtml(title.slice(idx, idx + q.length))}</mark>`;
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
  const root = document.querySelector<HTMLElement>('[data-kb-browser]');
  if (!root) return;

  const rail = root.querySelector<HTMLElement>('.bcn-kb__rail')!;
  const pane = root.querySelector<HTMLElement>('[data-kb-pane]')!;
  const start = root.querySelector<HTMLElement>('[data-kb-start]')!;

  const articles = [...pane.querySelectorAll<HTMLElement>('.bcn-kb__article')];
  const links = [...rail.querySelectorAll<HTMLAnchorElement>('.bcn-kb__link')];
  const items = [...rail.querySelectorAll<HTMLElement>('.bcn-kb__item')];
  const groups = [...rail.querySelectorAll<HTMLElement>('.bcn-kb__group')];

  const DEFAULT_CATEGORY = groups[0]?.dataset.kbGroup ?? '';
  const linkTitle = (link: HTMLElement) => link.querySelector<HTMLElement>('.bcn-kb__link-title')!;

  // ---- reading-pane scroll ----
  function scrollToPaneTop(): void {
    const top = root!.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  }

  // ---- category accordion (single writer of the expanded group) ----
  function setActiveCategory(catId: string): void {
    for (const g of groups) g.toggleAttribute('data-active', g.dataset.kbGroup === catId);
  }

  // ---- pane states ----
  function showStart(): void {
    start.hidden = false;
    for (const a of articles) a.hidden = true;
    for (const l of links) l.classList.remove('is-active');
    setActiveCategory(DEFAULT_CATEGORY);
  }

  function showArticle(id: string): boolean {
    const target = articles.find((a) => a.dataset.articleId === id);
    if (!target) return false;
    start.hidden = true;
    for (const a of articles) a.hidden = a !== target;
    for (const l of links) l.classList.toggle('is-active', l.dataset.articleLink === id);
    // Expand the article's own category so its rail link is visible.
    if (target.dataset.category) setActiveCategory(target.dataset.category);
    links.find((l) => l.dataset.articleLink === id)?.scrollIntoView({ block: 'nearest' });
    scrollToPaneTop();
    return true;
  }

  function showCategory(catId: string): void {
    const group = rail.querySelector<HTMLElement>(`[data-kb-group="${catId}"]`);
    if (!group) { showStart(); return; }
    setActiveCategory(catId);
    group.scrollIntoView({ block: 'nearest' });
    const firstId = group.querySelector<HTMLElement>('.bcn-kb__link')?.dataset.articleLink;
    if (firstId) showArticle(firstId);
  }

  // ---- hash routing ----
  function route(): void {
    const hash = location.hash;
    if (hash.startsWith('#article-')) {
      if (!showArticle(hash.slice('#article-'.length))) showStart();
    } else if (hash.startsWith('#category-')) {
      showCategory(hash.slice('#category-'.length));
    } else {
      showStart();
    }
  }

  // ---- live search (rail filter) ----
  function clearSearch(): void {
    root!.removeAttribute('data-searching');
    for (const item of items) item.hidden = false;
    for (const group of groups) group.hidden = false;
    for (const link of links) linkTitle(link).textContent = link.dataset.title ?? '';
  }

  function applySearch(raw: string): void {
    const q = raw.trim();
    if (q.length < MIN_QUERY) { clearSearch(); return; }
    root!.setAttribute('data-searching', '');
    const needle = q.toLowerCase();
    for (const item of items) {
      const link = item.querySelector<HTMLAnchorElement>('.bcn-kb__link')!;
      const title = link.dataset.title ?? '';
      const hit = `${title} ${link.dataset.summary ?? ''}`.toLowerCase().includes(needle);
      item.hidden = !hit;
      linkTitle(link).innerHTML = hit ? highlight(title, q) : escapeHtml(title);
    }
    for (const group of groups) {
      group.hidden = ![...group.querySelectorAll<HTMLElement>('.bcn-kb__item')].some((i) => !i.hidden);
    }
  }

  function firstVisibleArticleId(): string | null {
    return items.find((i) => !i.hidden)?.querySelector<HTMLElement>('.bcn-kb__link')?.dataset.articleLink ?? null;
  }

  // ---- events ----
  window.addEventListener('hashchange', route);

  // The hero search field lives outside this component; listen at document level and
  // filter to [data-kb-search] (composed 'input' from a Lit <esa-text-field> retargets
  // to its host, which carries the attribute).
  document.addEventListener('input', (e) => {
    const field = searchField(e.target);
    if (field) applySearch((field as HTMLInputElement).value ?? '');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || !searchField(e.target)) return;
    e.preventDefault();
    const id = firstVisibleArticleId();
    if (id) location.hash = `#article-${id}`;
  });

  route(); // initial load (deep-link or start landing)
}
