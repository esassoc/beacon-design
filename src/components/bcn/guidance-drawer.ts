// guidance-drawer.client — behavior for <BcnGuidanceDrawer>, a CHAT-FIRST drawer. The body
// is one scroll stream: Aldo's intro message (the route's guidance) leads, and Q&A appends
// below it. A second esa-side-dialog (the child reader) opens over the drawer for a full
// article.
//
// The .astro pre-renders every article twice — as a compact ROW (moved into the intro's
// sections) and as a full BODY (hidden in the reader, toggled one at a time). Those bodies
// double as the chat's text corpus (read via textContent), so article prose never enters
// this bundle. Imports stay to the small route map + chat copy.
import { HELP_ROUTE_CONTEXTS, HELP_GENERAL_CONTEXT, ALDO_CHAT, routePurpose } from '../../data/help-center';
import { CUSTOM_RICH_TEXT } from '../../data/custom-rich-text';
import { mountComposer } from './aldo/aldo-composer';
import { aldoParts } from './aldo/aldo-parts';

/** Parent inset while the child reader is stacked on top — a subtle step back. */
const STACK_INSET = '30px';
/** A beat before Aldo answers — feel, not fake typing. Content is fully deterministic. */
const REPLY_DELAY = 300;
/** Dropped from question tokens so ranking keys on meaningful words. */
const STOPWORDS = new Set([
  'the', 'and', 'for', 'are', 'how', 'what', 'why', 'does', 'did', 'can', 'with', 'from',
  'that', 'this', 'you', 'your', 'was', 'were', 'has', 'have', 'about', 'when', 'where',
  'which', 'who', 'into', 'out', 'get', 'got', 'use', 'used', 'there', 'their', 'they',
]);

export function initGuidanceDrawer(): void {
  const root = document.querySelector<HTMLElement>('[data-gd]');
  const child = document.querySelector<HTMLElement>('[data-gd-article]');
  if (!root || !child) return;

  const pageEl = root.querySelector<HTMLElement>('[data-gd-page]')!;
  const purposeEl = root.querySelector<HTMLElement>('[data-gd-purpose]')!;
  const howtosEl = root.querySelector<HTMLElement>('[data-gd-howtos]')!;
  const termsEl = root.querySelector<HTMLElement>('[data-gd-terms]')!;
  const howtosSection = root.querySelector<HTMLElement>('[data-gd-section="howtos"]')!;
  const termsSection = root.querySelector<HTMLElement>('[data-gd-section="terms"]')!;
  const poolEl = root.querySelector<HTMLElement>('[data-gd-pool]')!;
  const chatEl = root.querySelector<HTMLElement>('[data-gd-chat]')!;
  const browseHref = root.querySelector<HTMLAnchorElement>('[data-gd-browse]')?.getAttribute('href') ?? '#';

  const articleTitleEl = child.querySelector<HTMLElement>('[data-gd-article-title]')!;
  const articleKindEl = child.querySelector<HTMLElement>('[data-gd-article-kind]')!;
  const backBtn = child.querySelector<HTMLElement>('[data-gd-article-back]');

  // ── article index. Rows carry the display strings; bodies carry the searchable prose.
  //    Both are pre-rendered in HELP_ARTICLES order, so the maps preserve it. ──
  interface Meta { title: string; kind: string; summary: string }
  const rowMap = new Map<string, HTMLElement>();
  const meta = new Map<string, Meta>();
  for (const row of poolEl.querySelectorAll<HTMLElement>('[data-article-id]')) {
    const id = row.dataset.articleId!;
    rowMap.set(id, row);
    meta.set(id, { title: row.dataset.title ?? '', kind: row.dataset.kind ?? 'howto', summary: row.dataset.summary ?? '' });
  }
  const bodyMap = new Map<string, HTMLElement>();
  const corpus = new Map<string, string>();
  for (const body of child.querySelectorAll<HTMLElement>('[data-article-body]')) {
    const id = body.dataset.articleBody!;
    bodyMap.set(id, body);
    const m = meta.get(id);
    corpus.set(id, `${m?.title ?? ''} ${m?.summary ?? ''} ${body.textContent ?? ''}`.toLowerCase());
  }

  // ── route context: orient the intro's "You are here" + lead the two sections ──
  const path = location.pathname;
  const ctx = HELP_ROUTE_CONTEXTS.find((c) => path.includes(c.pattern)) ?? HELP_GENERAL_CONTEXT;
  pageEl.textContent = ctx.page;
  purposeEl.textContent = routePurpose(ctx);

  // ── the tenant's intro text: an admin edits it in a side panel (round 13) ──
  // Everything that shows a key's text carries `data-rich-text="<key>"`, so a save repaints
  // the card and, on Lists, the empty state together. In memory only, like the dots.
  const richKey = ctx.richText;
  const admin = new URLSearchParams(location.search).get('as') === 'admin';
  const textForm = document.querySelector<HTMLElement & { show(): void; close(): void }>('[data-htf]');
  if (richKey) purposeEl.dataset.richText = richKey;
  if (richKey && admin && textForm) {
    const editWrap = root.querySelector<HTMLElement>('[data-gd-here-edit]');
    const note = root.querySelector<HTMLElement>('[data-gd-here-note]');
    const field = textForm.querySelector<HTMLElement & { value: string }>('[data-htf-text]');
    if (editWrap) editWrap.hidden = false;
    if (note) note.hidden = false;
    editWrap?.addEventListener('click', () => {
      textForm.querySelector('[data-htf-page]')!.textContent = ctx.page;
      if (field) field.value = CUSTOM_RICH_TEXT[richKey];
      textForm.show();
    });
    textForm.querySelector('[data-htf-cancel]')?.addEventListener('click', () => textForm.close());
    textForm.querySelector('[data-htf-save]')?.addEventListener('click', () => {
      const text = field?.value.trim() ?? '';
      if (!text) return;
      CUSTOM_RICH_TEXT[richKey] = text;
      document.querySelectorAll<HTMLElement>(`[data-rich-text="${richKey}"]`).forEach((el) => {
        el.textContent = text;
      });
      textForm.close();
    });
  }
  for (const id of ctx.howtos) { const r = rowMap.get(id); if (r) howtosEl.appendChild(r); }
  for (const id of ctx.terms) { const r = rowMap.get(id); if (r) termsEl.appendChild(r); }
  howtosSection.hidden = howtosEl.childElementCount === 0;
  termsSection.hidden = termsEl.childElementCount === 0;

  // ── the stacked article reader ──
  function openArticle(id: string): void {
    const m = meta.get(id);
    const body = bodyMap.get(id);
    if (!m || !body) return;
    articleTitleEl.textContent = m.title;
    articleKindEl.textContent = m.kind === 'glossary' ? 'Term' : 'How-to';
    articleKindEl.dataset.kind = m.kind;
    for (const b of bodyMap.values()) b.hidden = true;
    body.hidden = false;
    (child as unknown as { show?: () => void }).show?.();
    requestAnimationFrame(() => {
      (child!.shadowRoot?.querySelector('.body') as HTMLElement | null)?.scrollTo({ top: 0 });
    });
    root!.style.setProperty('--side-dialog-inset', STACK_INSET);
  }

  // Close (X / back / Esc / backdrop) all funnel through the lego's 'close' → restore parent.
  child.addEventListener('close', () => root!.style.removeProperty('--side-dialog-inset'));
  backBtn?.addEventListener('click', () => (child as unknown as { close?: () => void }).close?.());

  // Any row or reply link (both carry data-article-id) opens the reader. Pool rows are
  // hidden, so only placed rows + reply links are clickable.
  root.addEventListener('click', (e) => {
    const opener = (e.target as HTMLElement).closest<HTMLElement>('[data-article-id]');
    if (opener && root!.contains(opener)) openArticle(opener.dataset.articleId!);
  });

  // ── composer: the Aldo kit's (Enter sends, Shift+Enter is a new line) ──
  const composer = mountComposer(root, aldoParts(root), (text) => {
    appendMsg('you').textContent = text; // textContent: what the person typed never becomes markup
    composer.setBusy(true);
    window.setTimeout(() => {
      appendAldo(text);
      composer.setBusy(false);
    }, REPLY_DELAY);
  });

  /** One message in the kit's grammar: Aldo's a soft gray on the left, the person's white
   *  with a hairline on the right. Returns the bubble's text box to fill. */
  function appendMsg(from: 'aldo' | 'you'): HTMLElement {
    const msg = el('div', 'bcn-aldo-msg');
    msg.dataset.from = from;
    const bubble = el('div', 'bcn-aldo-msg__bubble');
    const text = el('div', 'bcn-aldo-msg__text');
    bubble.appendChild(text);
    msg.appendChild(bubble);
    chatEl.appendChild(msg);
    scrollToLatest();
    return text;
  }

  function appendAldo(question: string): void {
    const box = appendMsg('aldo');
    const hits = rank(question);
    if (hits.length) {
      const intro = el('p', 'bcn-gd-msg__text');
      intro.textContent = ALDO_CHAT.found;
      box.appendChild(intro);
      const links = el('div', 'bcn-gd-msg__links');
      for (const id of hits) {
        const link = el('button', 'bcn-gd-msg__link') as HTMLButtonElement;
        link.type = 'button';
        link.dataset.articleId = id; // reuses the openArticle delegation above
        link.textContent = meta.get(id)?.title ?? '';
        links.appendChild(link);
      }
      box.appendChild(links);
    } else {
      const p = el('p', 'bcn-gd-msg__text');
      p.textContent = ALDO_CHAT.fallback;
      box.appendChild(p);
      const browse = el('a', 'bcn-gd-msg__browse') as HTMLAnchorElement;
      browse.href = browseHref;
      browse.textContent = 'Browse all Help & Guidance';
      box.appendChild(browse);
    }
    scrollToLatest();
  }

  /** Rank articles by meaningful question-words, weighted by WHERE they hit: a word in
   *  the title far outranks one buried in body prose ("what is a component" must surface
   *  "What is a Component?", not whichever body text mentions components first). */
  function rank(question: string): string[] {
    const tokens = [...new Set(question.toLowerCase().match(/[a-z0-9]+/g) ?? [])]
      .filter((t) => t.length >= 3 && !STOPWORDS.has(t));
    if (!tokens.length) return [];
    const scored: { id: string; score: number }[] = [];
    for (const [id, text] of corpus) {
      const m = meta.get(id);
      const title = (m?.title ?? '').toLowerCase();
      const summary = (m?.summary ?? '').toLowerCase();
      let score = 0;
      for (const t of tokens) {
        if (title.includes(t)) score += 4;
        else if (summary.includes(t)) score += 2;
        else if (text.includes(t)) score += 1;
      }
      if (score > 0) scored.push({ id, score });
    }
    scored.sort((a, b) => b.score - a.score); // stable sort → ties keep HELP_ARTICLES order
    return scored.slice(0, 3).map((s) => s.id);
  }

  // ── open / reset ──
  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest('[data-help-trigger]');
    // A page with help dots claims the trigger: there Guidance turns the dots on and the
    // dots layer opens this drawer from its own button.
    if (!trigger || trigger.hasAttribute('data-help-dots-claimed')) return;
    e.preventDefault();
    (root as unknown as { show?: () => void }).show?.();
    // Reopen shows the intro at the top of the stream.
    requestAnimationFrame(() => {
      (root!.shadowRoot?.querySelector('.body') as HTMLElement | null)?.scrollTo({ top: 0 });
    });
  });
  // Closing the drawer dismisses the reader and resets the (in-memory) Q&A — the intro stays.
  root.addEventListener('close', () => {
    (child as unknown as { close?: () => void }).close?.();
    chatEl.replaceChildren();
  });

  function el(tag: string, className: string): HTMLElement {
    const node = document.createElement(tag);
    node.className = className;
    return node;
  }
  /** Scroll the lego's shadow body to the newest message. */
  function scrollToLatest(): void {
    const scroller = root!.shadowRoot?.querySelector('.body') as HTMLElement | null;
    if (scroller) scroller.scrollTop = scroller.scrollHeight;
  }
}
