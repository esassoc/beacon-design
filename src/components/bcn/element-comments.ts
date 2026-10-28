// The Comments module's runtime (2026-10-28): the element's discussion, newest first, kept on Live.
// See ./BcnElementComments.astro; ./element-module.ts for the contract.

import '@esa/ecology/esa-textarea';
import type { ElementContext } from '../../lib/planning/element-context';
import { addComment, commentsFor, deleteComment, editComment } from '../../lib/planning/plan-records';
import { planAvatar } from './plan-people';
import { setModuleCount, type ElementModuleSetup } from './element-module';

type Area = HTMLElement & { value: string };
const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = '') => Object.assign(document.createElement(tag), { className, textContent: text });
/** Beacon's comment time: "Oct 22, 2026 at 4:40 PM". */
const when = (iso: string) => {
  const d = new Date(iso);
  return `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at ${d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
};

export const setupCommentsModule: ElementModuleSetup = (root, host) => {
  const q = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const tpl = (name: string) => q<HTMLTemplateElement>(`[data-ecom-tpl="${name}"]`).content.firstElementChild!.cloneNode(true) as HTMLElement;
  const text = q<Area>('[data-ecom-text]');
  let editingId: string | null = null;

  function draw(ctx: ElementContext): void {
    const id = ctx.element.PlanElementID ?? '';
    const comments = commentsFor(ctx.records, id).slice().reverse();
    setModuleCount(root, comments.length || null);
    q('[data-ecom-compose]').hidden = !ctx.canRecord;
    q('[data-ecom-as]').textContent = `Posting as ${ctx.me}`;
    const empty = q('[data-ecom-empty]');
    empty.hidden = comments.length > 0;
    empty.textContent = ctx.canRecord ? 'No comments yet. Start the discussion.' : ctx.draft ? 'No comments yet. Comments are kept on Live.' : 'No comments yet.';
    q('[data-ecom-list]').replaceChildren(
      ...comments.map((c) => {
        const li = el('li');
        const body = el('div', 'bcn-ecom__body');
        const who = el('div', 'bcn-ecom__who');
        const time = el('time', '', when(c.at));
        time.dateTime = c.at;
        who.append(el('b', '', c.author), time);
        if (c.edited) who.append(el('span', 'bcn-ecom__edited', '(edited)'));
        const own = c.author === ctx.me && ctx.canRecord;
        if (own && editingId !== c.id) {
          const tools = el('span', 'bcn-ecom__tools');
          const edit = tpl('edit');
          edit.addEventListener('click', () => {
            editingId = c.id;
            draw(host.ctx());
          });
          const del = tpl('delete');
          del.addEventListener('click', async () => {
            if (await host.confirm({ heading: 'Delete This Comment?', message: 'It will be removed for everyone.', confirmLabel: 'Delete', danger: true })) deleteComment(ctx.planID, c.id);
          });
          tools.append(edit, del);
          who.append(tools);
        }
        body.append(who);
        if (editingId === c.id) {
          const area = document.createElement('esa-textarea') as Area;
          area.setAttribute('size', 'sm');
          area.setAttribute('rows', '2');
          area.setAttribute('auto-resize', '');
          area.setAttribute('aria-label', 'Edit comment');
          void customElements.whenDefined('esa-textarea').then(() => (area.value = c.text));
          const foot = el('div', 'bcn-ecom__edit-foot');
          const cancel = tpl('cancel');
          cancel.addEventListener('click', () => {
            editingId = null;
            draw(host.ctx());
          });
          const save = tpl('save');
          save.addEventListener('click', () => {
            const next = (area.value ?? '').trim();
            editingId = null;
            if (next && next !== c.text) editComment(ctx.planID, c.id, next);
            else draw(host.ctx());
          });
          foot.append(cancel, save);
          body.append(area, foot);
        } else body.append(el('p', 'bcn-ecom__text', c.text));
        li.append(planAvatar(c.author, 'sm'), body);
        return li;
      })
    );
  }

  const post = () => {
    const ctx = host.ctx();
    const value = (text.value ?? '').trim();
    if (!value || !ctx.canRecord) return;
    addComment(ctx.planID, ctx.element.PlanElementID ?? '', value);
    text.value = '';
  };
  q('[data-ecom-post]').addEventListener('click', post);
  q('[data-ecom-compose]').addEventListener('submit', (e) => {
    e.preventDefault();
    post();
  });
  text.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter' && ((e as KeyboardEvent).metaKey || (e as KeyboardEvent).ctrlKey)) post();
  });

  return { draw };
};
