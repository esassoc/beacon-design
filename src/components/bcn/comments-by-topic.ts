// Controller for <BcnCommentsByTopic>: draws the topic › subtopic › comment tree from
// comments-store and wires its verbs. setupX shape.
//
//   chevron / row      fold a subtopic (Unfiled folds as one branch); open set survives redraws
//   rename             the name turns editable in place; Enter or blur saves, Esc cancels
//   lock               a locked topic or subtopic keeps its comments through Aldo's
//                      refiling, and cannot be renamed or deleted until unlocked
//   delete             topic or subtopic; its comments go to Unfiled. Undo, not a confirm
//   + subtopic         adds one under the topic and opens its name for editing
//   move / duplicate   ONE shared picker (esa-combobox, typeahead over every filing),
//                      anchored under the verb that opened it; duplicate files a copy
//   Aldo guidance      <BcnAldoPrompt> submit refiles everything not locked
//                      (comments-store rerun); its Undo is the store's one-step undo
//
// Comment rows render only inside open branches.
//
// bcn-lego-checked: the row verbs are bcn-tree's icon verbs (bcn-tree.css, the registry
// tree's rename / remove / add set) built at runtime; esa-button and esa-icon-button are
// .astro (compile-time) and cannot be created from script, and the Lit legos carry no
// icon-only button. Labels ride esa-tooltip; the filing picker is esa-combobox.

import { SUBMISSIONS, SUBMITTERS } from '../../data/comments';
import {
  submissionNo,
  UNFILED, addFilings, addSubtopic, canUndo, deleteSubtopic, deleteTopic, filings, getState,
  isPlanned, reclassify, renameSubtopic, renameTopic, rerun, responseOf, shadeOf, toggleLock, toggleLockSubtopic,
  topicOf, topics, undo, type ChangeDetail, type LiveComment,
} from './comments-store';
import { glyph as icon } from './comment-glyphs';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

const verb = (tip: string, attrs: string, glyph: string, quiet = true, extra = '') =>
  `<esa-tooltip text="${esc(tip)}" align="end"><button type="button" class="bcn-cbt__verb${quiet ? ' bcn-cbt__verb--quiet' : ''}${extra}" aria-label="${esc(tip)}" ${attrs}>${icon(glyph)}</button></esa-tooltip>`;


export function setupCommentsByTopic(root: HTMLElement): void {
  const base = root.dataset.base!.replace(/\/$/, '');
  const list = root.querySelector<HTMLElement>('[data-cbt-list]')!;
  const aldo = root.querySelector<HTMLElement>('[data-aldo-prompt]');
  const status = root.querySelector<HTMLElement>('[data-cbt-status]')!;
  const statusText = root.querySelector<HTMLElement>('[data-cbt-status-text]')!;

  const open = new Set<string>();
  let moved = new Set<string>();
  let editing = false;

  const say = (text: string) => {
    statusText.textContent = text;
    status.hidden = !text;
  };

  const who = (c: LiveComment) => {
    const s = SUBMISSIONS.find((x) => x.id === c.submissionId)!;
    return { s, p: SUBMITTERS.find((x) => x.id === s.submitterId)! };
  };

  const item = (c: LiveComment) => {
    const { s, p } = who(c);
    const r = responseOf(c.responseId);
    const planned = isPlanned(c);
    // One cell carries the response and its state: draft (pen), accepted (check), none.
    const tip = planned ? 'Accepted response: this comment is planned' : 'Draft response: planned once it is accepted';
    const resp = !r
      ? `<span class="bcn-cbt__resp" data-state="none">${icon('file-minus')}<span>No Response</span></span>`
      : `<a class="bcn-cbt__resp" data-state="${planned ? 'planned' : 'draft'}" href="${base}/response?id=${r.id}">` +
        `<esa-tooltip text="${tip}"><span class="bcn-cbt__glyph" role="img" aria-label="${tip}">${icon(planned ? 'file-check' : 'file-pen-line')}</span></esa-tooltip>` +
        `<span class="bcn-cbt__title">${esc(r.title)}</span></a>`;
    return (
      `<li class="bcn-cbt__item" data-cbt-item="${c.id}"${moved.has(c.id) ? ' data-moved' : ''}>` +
      `<span class="bcn-cbt__key">${submissionNo(s.id)}</span>` +
      `<a class="bcn-cbt__who" href="${base}/${s.id}?c=${c.id}">${esc(p.name)}</a>` +
      `<span class="bcn-cbt__excerpt" title="${esc(c.quote)}">${esc(c.quote)}</span>` +
      resp +
      `<span class="bcn-cbt__verbs">${verb('Move To', `data-cbt-pick="move" data-cbt-comment="${c.id}" aria-haspopup="dialog"`, 'folder-input')}${verb('Duplicate To', `data-cbt-pick="dup" data-cbt-comment="${c.id}" aria-haspopup="dialog"`, 'copy')}</span>` +
      `</li>`
    );
  };

  const items = (cs: LiveComment[]) =>
    `<ul class="bcn-cbt__items" role="list">${cs
      .sort((a, b) => who(b).s.received.localeCompare(who(a).s.received))
      .map(item)
      .join('')}</ul>`;

  const chev = (key: string, label: string, any: boolean) =>
    `<button type="button" class="bcn-cbt__chev" aria-expanded="${open.has(key) && any}" aria-label="${esc(label)}" data-cbt-toggle="${key}"${any ? '' : ' disabled'}>${icon('chevron-right')}</button>`;

  /** A subtopic's verbs. Under a locked topic it is held with the topic: no verbs. */
  const subVerbs = (tid: string, st: { id: string; locked?: boolean }, topicLocked: boolean) => {
    if (topicLocked) return '';
    const ref = `${tid}/${st.id}`;
    const lockV = verb(st.locked ? 'Unlock' : 'Lock', `data-cbt-lock="${ref}" aria-pressed="${!!st.locked}"`, st.locked ? 'lock' : 'lock-open', !st.locked);
    if (st.locked) return lockV;
    return `${verb('Rename', `data-cbt-rename="${ref}"`, 'pencil')}${verb('Delete', `data-cbt-delete="${ref}"`, 'trash-2', true, ' bcn-cbt__verb--danger')}${lockV}`;
  };

  const render = () => {
    const all = getState().comments;
    let html = '';

    for (const t of topics()) {
      const inTopic = all.filter((c) => c.topicId === t.id);
      const lockV = verb(t.locked ? 'Unlock' : 'Lock', `data-cbt-lock="${t.id}" aria-pressed="${!!t.locked}"`, t.locked ? 'lock' : 'lock-open', !t.locked);
      const topicVerbs = t.locked
        ? `<span class="bcn-cbt__verbs">${lockV}</span>`
        : `<span class="bcn-cbt__verbs">${verb('Rename', `data-cbt-rename="${t.id}"`, 'pencil')}${verb('Delete', `data-cbt-delete="${t.id}"`, 'trash-2', true, ' bcn-cbt__verb--danger')}${lockV}${verb('Add Subtopic', `data-cbt-add="${t.id}"`, 'plus', false)}</span>`;
      html +=
        `<section class="bcn-cbt__cat" data-cbt-topic="${t.id}">` +
        `<div class="bcn-cbt__row bcn-cbt__row--cat">` +
        `<span class="bcn-topic-dot" data-family="${t.family}"></span>` +
        `<span class="bcn-cbt__name" data-cbt-name="${t.id}">${esc(t.name)}</span>` +
        topicVerbs +
        `</div>`;
      for (const st of t.subtopics) {
        const cs = inTopic.filter((c) => c.subtopicId === st.id);
        const isOpen = open.has(st.id) && cs.length > 0;
        html +=
          `<div class="bcn-cbt__sub" data-cbt-sub="${st.id}">` +
          `<div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="${st.id}">` +
          chev(st.id, `Show ${st.name}`, cs.length > 0) +
          `<span class="bcn-topic-dot" data-family="${t.family}" data-shade="${shadeOf(t.id, st.id)}"></span>` +
          `<span class="bcn-cbt__name" data-cbt-name="${t.id}/${st.id}">${esc(st.name)}</span>` +
          `<span class="bcn-cbt__verbs">${subVerbs(t.id, st, !!t.locked)}</span>` +
          `</div>` +
          (isOpen ? items(cs) : '') +
          `</div>`;
      }
      html += `</section>`;
    }

    const unfiled = all.filter((c) => c.topicId === UNFILED);
    const uOpen = open.has(UNFILED) && unfiled.length > 0;
    html +=
      `<section class="bcn-cbt__cat" data-cbt-topic="${UNFILED}">` +
      `<div class="bcn-cbt__row bcn-cbt__row--cat bcn-cbt__row--sub" data-cbt-fold="${UNFILED}">` +
      chev(UNFILED, 'Show Unfiled', unfiled.length > 0) +
      `<span class="bcn-topic-dot" data-family="none"></span>` +
      `<span class="bcn-cbt__name">Unfiled</span>` +
      `<span class="bcn-cbt__verbs"></span>` +
      `</div>` +
      (uOpen ? items(unfiled) : '') +
      `</section>`;

    list.innerHTML = html;
  };

  /** Rows a verb just moved flash once; the mark clears after the animation. */
  const flash = (ids: Iterable<string>) => {
    for (const id of ids) moved.add(id);
    setTimeout(() => (moved = new Set()), 1300);
  };

  const setOpen = (key: string, on: boolean) => {
    if (on) open.add(key);
    else open.delete(key);
  };

  /** Turn a name editable; save on Enter or blur, restore on Esc. */
  const rename = (ref: string) => {
    const el = list.querySelector<HTMLElement>(`[data-cbt-name="${ref}"]`);
    if (!el) return;
    const before = el.textContent ?? '';
    editing = true;
    el.contentEditable = 'true';
    el.focus();
    getSelection()?.selectAllChildren(el);
    const done = (save: boolean) => {
      el.removeEventListener('keydown', onKey);
      el.removeEventListener('blur', onBlur);
      el.contentEditable = 'false';
      editing = false;
      const name = (el.textContent ?? '').trim();
      if (!save || !name || name === before) {
        el.textContent = before;
        return;
      }
      const [tid, sid] = ref.split('/');
      if (sid) renameSubtopic(tid, sid, name);
      else renameTopic(tid, name);
      say(`Renamed to ${name}`);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        done(true);
      } else if (e.key === 'Escape') done(false);
    };
    const onBlur = () => done(true);
    el.addEventListener('keydown', onKey);
    el.addEventListener('blur', onBlur);
  };

  list.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (editing) return;
    const lock = t.closest<HTMLElement>('[data-cbt-lock]');
    if (lock) {
      const [tid, sid] = lock.dataset.cbtLock!.split('/');
      if (sid) toggleLockSubtopic(tid, sid);
      else toggleLock(tid);
      const node = sid ? topicOf(tid).subtopics.find((x) => x.id === sid) : topicOf(tid);
      say(`${node?.name} ${node?.locked ? 'locked' : 'unlocked'}`);
      return;
    }
    const pickV = t.closest<HTMLElement>('[data-cbt-pick]');
    if (pickV) return openPicker(pickV);
    const ren = t.closest<HTMLElement>('[data-cbt-rename]');
    if (ren) return rename(ren.dataset.cbtRename!);
    const del = t.closest<HTMLElement>('[data-cbt-delete]');
    if (del) {
      const [tid, sid] = del.dataset.cbtDelete!.split('/');
      const n = getState().comments.filter((c) => (sid ? c.subtopicId === sid : c.topicId === tid)).length;
      const name = sid ? topicOf(tid).subtopics.find((x) => x.id === sid)?.name : topicOf(tid).name;
      if (sid) deleteSubtopic(tid, sid);
      else deleteTopic(tid);
      say(`${name} deleted${n ? `, ${plural(n, 'comment', 'comments')} to Unfiled` : ''}`);
      return;
    }
    const add = t.closest<HTMLElement>('[data-cbt-add]');
    if (add) {
      const sid = addSubtopic(add.dataset.cbtAdd!);
      say('');
      return rename(`${add.dataset.cbtAdd}/${sid}`);
    }
    if (t.closest('a')) return;
    const fold = t.closest<HTMLElement>('[data-cbt-fold]');
    if (fold) {
      const key = fold.dataset.cbtFold!;
      if (fold.querySelector('[data-cbt-toggle]:disabled')) return;
      setOpen(key, !open.has(key));
      render();
      list.querySelector<HTMLElement>(`[data-cbt-toggle="${key}"]`)?.focus();
    }
  });

  // ---- the filing picker: one esa-combobox, anchored under whichever verb opened it ----
  type Combo = HTMLElement & { options: { value: string; label: string }[]; value: string; label: string };
  const picker = root.querySelector<HTMLElement>('[data-cbt-picker]')!;
  const field = picker.querySelector<Combo>('[data-cbt-picker-field]')!;
  let picking: { mode: 'move' | 'dup'; commentId: string; opener: HTMLElement } | null = null;

  const closePicker = (refocus = true) => {
    if (!picking) return;
    picker.hidden = true;
    const opener = picking.opener;
    picking = null;
    if (refocus) list.querySelector<HTMLElement>(`[data-cbt-pick="${opener.dataset.cbtPick}"][data-cbt-comment="${opener.dataset.cbtComment}"]`)?.focus();
  };

  const openPicker = (opener: HTMLElement) => {
    const commentId = opener.dataset.cbtComment!;
    const mode = opener.dataset.cbtPick as 'move' | 'dup';
    const c = getState().comments.find((x) => x.id === commentId);
    if (!c) return;
    picking = { mode, commentId, opener };
    field.label = mode === 'move' ? 'Move To' : 'Duplicate To';
    picker.setAttribute('aria-label', field.label);
    field.options = filings().filter((f) => f.value !== c.subtopicId).map(({ label, value }) => ({ label, value }));
    field.value = '';
    const r = opener.getBoundingClientRect();
    const box = root.getBoundingClientRect();
    picker.style.top = `${r.bottom - box.top + 6}px`;
    picker.style.right = `${box.right - r.right}px`;
    picker.hidden = false;
    requestAnimationFrame(() => field.focus());
  };

  field.addEventListener('change', (e) => {
    const to = (e as CustomEvent<{ value: string }>).detail.value;
    const f = filings().find((x) => x.value === to);
    if (!picking || !f) return;
    const { mode, commentId } = picking;
    closePicker(false);
    setOpen(f.value, true);
    if (mode === 'move') {
      flash([commentId]);
      say(`Moved to ${f.label}`);
      reclassify(commentId, f.topicId, f.value);
    } else {
      flash([`c-n${getState().seq + 1}`]);
      say(`Duplicated to ${f.label}`);
      addFilings(commentId, [{ topicId: f.topicId, subtopicId: f.value }]);
    }
  });
  picker.addEventListener('keydown', (e) => {
    // The picker is transient: one Esc closes its list and the picker together.
    if (e.key === 'Escape') closePicker();
  });
  document.addEventListener('pointerdown', (e) => {
    if (picking && !picker.contains(e.target as Node) && !(e.target as HTMLElement).closest?.('[data-cbt-pick]')) closePicker(false);
  });

  // Aldo: the context line names what guidance will not touch.
  aldo?.addEventListener('aldo-prompt:open', () => {
    const ctx = aldo.querySelector<HTMLElement>('[data-ap-context]');
    const locked = topics().flatMap((t) => (t.locked ? [t.name] : t.subtopics.filter((st) => st.locked).map((st) => st.name)));
    if (ctx) ctx.textContent = locked.length ? `Keeps locked: ${locked.join(', ')}` : '';
  });
  aldo?.addEventListener('aldo-prompt:submit', (e) => {
    const before = new Map(getState().comments.map((c) => [c.id, c.subtopicId]));
    const n = rerun((e as CustomEvent<{ text: string }>).detail.text);
    const changed = getState().comments.filter((c) => before.get(c.id) !== c.subtopicId);
    changed.forEach((c) => open.add(c.subtopicId));
    flash(changed.map((c) => c.id));
    say('');
    render();
    aldo.dispatchEvent(new CustomEvent('aldo-prompt:result', {
      detail: { text: n ? `Aldo refiled ${plural(n, 'comment', 'comments')}` : 'Aldo left the filing as it was' },
    }));
  });
  aldo?.addEventListener('aldo-prompt:undo', () => undo());

  root.querySelector('[data-cbt-undo]')?.addEventListener('click', () => {
    undo();
    say('');
  });

  root.querySelector('[data-cbt-expand]')?.addEventListener('click', () => {
    for (const t of topics()) t.subtopics.forEach((st) => open.add(st.id));
    open.add(UNFILED);
    render();
  });
  root.querySelector('[data-cbt-collapse]')?.addEventListener('click', () => {
    open.clear();
    render();
  });

  document.addEventListener('comments:change', (e) => {
    const d = (e as CustomEvent<ChangeDetail>).detail;
    if (d.kind === 'undo' || !canUndo()) say('');
    if (!editing) render();
  });

  render();
}
