// omni-search.client — behavior for <BcnOmniSearch>. The bespoke Beacon global-search
// palette: a fixed, centered overlay that filters the shared index (src/data/global-search)
// across all scopes, FULL-TEXT (title + subtitle + commitment/requirement body), groups
// results by scope with per-scope counts, highlights matches, and shows a body snippet
// for full-text-only hits. The null state shows a centered landing prompt; the scope rail
// is present but DISABLED (no counts) until a query is typed. Keyboard: ↑/↓ navigate, ↵ select,
// ⌘/Ctrl+↵ see-all, Tab accept ghost completion, Esc close. Opens via [data-omni-trigger] or "/".
//
// The static shell lives in BcnOmniSearch.astro; the rail facets + result rows are built
// here and injected, so their CSS lives in that file's `<style is:global>` block.
import {
  SCOPES,
  ENTITIES,
  matchEntities,
  groupByScope,
  highlightHtml,
  bodySnippet,
  isBodyOnlyMatch,
  predictCompletion,
  type SearchEntity,
  type ScopeGroup,
} from '../../data/global-search';
import { withBase } from '../../lib/base';

const RESULTS_ROUTE = '/prototypes/global-search';

export function initOmniSearch(): void {
  const root = document.querySelector<HTMLElement>('[data-omni]');
  if (!root) return;
  const input = root.querySelector<HTMLInputElement>('[data-omni-input]')!;
  const scopesEl = root.querySelector<HTMLElement>('[data-omni-scopes]')!;
  const bodyEl = root.querySelector<HTMLElement>('[data-omni-body]')!;
  const clearBtn = root.querySelector<HTMLButtonElement>('[data-omni-clear]')!;
  const showAllBtn = root.querySelector<HTMLButtonElement>('[data-omni-showall]')!;
  const showAllLabel = root.querySelector<HTMLElement>('[data-omni-showall-label]')!;
  const ghost = root.querySelector<HTMLElement>('[data-omni-ghost]')!;

  let query = '';
  let activeScope = ''; // '' = All
  let activeId: string | null = null;
  let flatItems: SearchEntity[] = [];

  const scopeLabel = (id: string) => SCOPES.find((s) => s.id === id)?.label ?? '';
  const isOpen = () => !root.hasAttribute('hidden');

  // ---- open / close ----
  function open(): void {
    if (isOpen()) return;
    root.removeAttribute('hidden');
    query = '';
    activeScope = '';
    activeId = null;
    input.value = '';
    document.body.style.overflow = 'hidden';
    render();
    updateGhost();
    requestAnimationFrame(() => input.focus());
  }
  function close(): void {
    root.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  // ---- data ----
  const queryMatches = (): SearchEntity[] => matchEntities(query);
  const scopeCount = (id: string): number => queryMatches().filter((e) => e.scope === id).length;

  /** Grouped matches for the current query (optionally narrowed to the active scope). */
  function visibleGroups(): ScopeGroup[] {
    let matched = queryMatches();
    if (activeScope) matched = matched.filter((e) => e.scope === activeScope);
    return groupByScope(matched);
  }

  // ---- render ----
  function renderScopes(): void {
    // Vertical facet rail. In the null state the rail is present but DISABLED with no
    // counts; once a query is typed the items enable, show counts, and the active scope
    // highlights.
    const searching = query.trim().length > 0;
    const total = queryMatches().length;
    const item = (id: string, label: string, count: number) => {
      const active = searching && activeScope === id;
      const countEl = searching ? `<span class="bcn-omni-rail__c">${count}</span>` : '';
      return `<button type="button" role="tab" class="bcn-omni-rail__item ${active ? 'is-active' : ''}" data-scope="${id}"${searching ? '' : ' disabled'}><span class="bcn-omni-rail__label">${label}</span>${countEl}</button>`;
    };
    scopesEl.innerHTML = item('', 'All', total) + SCOPES.map((s) => item(s.id, s.label, scopeCount(s.id))).join('');
  }

  function rowHtml(e: SearchEntity): string {
    const code = e.code ? `<span class="bcn-omni-row__code">${escapeText(e.code)}</span>` : '';
    const title = highlightHtml(e.title, query);
    const snip = isBodyOnlyMatch(e, query) ? bodySnippet(e.body, query) : null;
    const snippet = snip ? `<span class="bcn-omni-row__snippet">${snip}</span>` : '';
    return `<button type="button" class="bcn-omni-row ${e.id === activeId ? 'is-active' : ''}" role="option" data-id="${e.id}">
      <span class="bcn-omni-row__text">
        <span class="bcn-omni-row__titlerow">${code}<span class="bcn-omni-row__title">${title}</span></span>
        ${snippet}
      </span>
    </button>`;
  }

  function groupHtml(g: ScopeGroup): string {
    const head = `<div class="bcn-omni-group__head"><span class="bcn-omni-group__label">${g.scope.label}</span><span class="bcn-omni-group__count">${g.items.length}</span></div>`;
    return `<section class="bcn-omni-group">${head}${g.items.map(rowHtml).join('')}</section>`;
  }

  /** Null-state prompt — the whole body before any query is typed (no rail, no recents). */
  function landingHtml(): string {
    return `<div class="bcn-omni-landing">
      <svg class="bcn-omni-landing__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
      <p class="bcn-omni-landing__title">Search Beacon</p>
      <p class="bcn-omni-landing__hint">Source documents, commitments, requirements, actions, components, evidence, work areas &amp; observations — titles and full document text.</p>
    </div>`;
  }

  function render(): void {
    const q = query.trim();
    const searching = q.length > 0;
    if (!searching) activeScope = ''; // null state never carries a scope filter
    renderScopes();

    if (!searching) {
      // null state: a centered landing prompt only (rail collapsed, no recents)
      flatItems = [];
      activeId = null;
      bodyEl.classList.add('is-landing');
      bodyEl.innerHTML = landingHtml();
    } else {
      bodyEl.classList.remove('is-landing');
      const groups = visibleGroups();
      flatItems = groups.flatMap((g) => g.items);
      if (activeId === null && flatItems.length) activeId = flatItems[0].id;
      bodyEl.innerHTML =
        flatItems.length === 0
          ? `<div class="bcn-omni-empty">No results for “${escapeText(q)}”.</div>`
          : groups.map(groupHtml).join('');
    }

    clearBtn.hidden = q === '';
    const total = queryMatches().length;
    if (q && total > 0) {
      showAllBtn.hidden = false;
      showAllLabel.textContent = `See all ${total} result${total === 1 ? '' : 's'}${
        activeScope ? ` in ${scopeLabel(activeScope)}` : ''
      } for “${q}”`;
    } else {
      showAllBtn.hidden = true;
    }
  }

  const escapeText = (s: string): string =>
    s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));

  // ---- inline autocomplete (ghost text after the caret) ----
  const caretAtEnd = (): boolean =>
    input.selectionStart === input.value.length && input.selectionEnd === input.value.length;

  function updateGhost(): void {
    const val = input.value;
    const suffix = val && caretAtEnd() ? predictCompletion(val) : '';
    ghost.dataset.suffix = suffix;
    // Transparent pad spans the typed text so the grey suffix lands right after the caret.
    ghost.innerHTML = suffix ? `<span class="bcn-omni__ghost-pad">${escapeText(val)}</span>${escapeText(suffix)}` : '';
  }
  function acceptGhost(): boolean {
    const suffix = ghost.dataset.suffix || '';
    if (!suffix) return false;
    input.value += suffix;
    query = input.value;
    activeId = null;
    render();
    updateGhost();
    return true;
  }

  // ---- active-row movement (no full re-render) ----
  function setActive(id: string | null): void {
    activeId = id;
    for (const row of root.querySelectorAll<HTMLElement>('.bcn-omni-row')) {
      const on = row.dataset.id === id;
      row.classList.toggle('is-active', on);
      if (on) row.scrollIntoView({ block: 'nearest' });
    }
  }
  function move(dir: 1 | -1): void {
    if (!flatItems.length) return;
    const i = flatItems.findIndex((e) => e.id === activeId);
    const next = i === -1 ? 0 : (i + dir + flatItems.length) % flatItems.length;
    setActive(flatItems[next].id);
  }

  // ---- actions ----
  function selectEntity(e: SearchEntity | undefined): void {
    if (!e) return;
    if (e.url) {
      location.href = withBase(e.url);
    }
    close();
  }
  function showAll(): void {
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (activeScope) params.set('scope', activeScope);
    const qs = params.toString();
    location.href = withBase(RESULTS_ROUTE) + (qs ? `?${qs}` : '');
  }
  function setScope(id: string): void {
    activeScope = id;
    activeId = null;
    render();
  }

  // ---- events ----
  input.addEventListener('input', () => {
    query = input.value;
    activeId = null;
    render();
    updateGhost();
  });
  input.addEventListener('keyup', updateGhost); // a moved caret clears/restores the ghost

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    // Tab / → (at end of text) accept the ghost completion.
    if (e.key === 'Tab') { e.preventDefault(); acceptGhost(); return; }
    if (e.key === 'ArrowRight' && caretAtEnd() && ghost.dataset.suffix) { e.preventDefault(); acceptGhost(); return; }
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); showAll(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); return; }
    if (e.key === 'Enter') { e.preventDefault(); selectEntity(flatItems.find((x) => x.id === activeId)); return; }
  });

  // Row click + hover (event delegation on the results body).
  bodyEl.addEventListener('click', (e) => {
    const row = (e.target as HTMLElement).closest<HTMLElement>('.bcn-omni-row');
    if (row) selectEntity(ENTITIES.find((x) => x.id === row.dataset.id));
  });
  bodyEl.addEventListener('mouseover', (e) => {
    const row = (e.target as HTMLElement).closest<HTMLElement>('.bcn-omni-row');
    if (row && row.dataset.id && row.dataset.id !== activeId) setActive(row.dataset.id);
  });

  // Scope pill click (delegation).
  scopesEl.addEventListener('click', (e) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('[data-scope]');
    if (item) setScope(item.dataset.scope ?? '');
  });

  clearBtn.addEventListener('click', () => { query = ''; input.value = ''; activeId = null; render(); updateGhost(); input.focus(); });
  showAllBtn.addEventListener('click', showAll);

  // Scrim + any [data-omni-close] closes.
  for (const closer of root.querySelectorAll('[data-omni-close]')) {
    closer.addEventListener('click', close);
  }

  // Global open triggers.
  for (const trigger of document.querySelectorAll('[data-omni-trigger]')) {
    trigger.addEventListener('click', (e) => { e.preventDefault(); open(); });
  }
  // "/" opens the palette from anywhere (when not typing in another field).
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !isOpen() && !isEditable(e.target)) {
      e.preventDefault();
      open();
    }
  });
}

function isEditable(el: EventTarget | null): boolean {
  const node = el as HTMLElement | null;
  if (!node) return false;
  return ['INPUT', 'TEXTAREA', 'SELECT'].includes(node.tagName) || node.isContentEditable;
}
