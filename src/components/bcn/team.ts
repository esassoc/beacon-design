// team — the Comments module's people at runtime: an esa-avatar cloned from the
// <BcnTeamAvatars> bank, ringed dashed while Aldo's routing waits on a person.
import { personOf } from './comments-store';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/** An avatar as HTML. `suggested` rings it dashed: Aldo routed it, nobody confirmed. */
export const avatar = (personId: string | null | undefined, suggested = false) => {
  const p = personOf(personId);
  if (!p) return '';
  const tpl = document.querySelector<HTMLTemplateElement>(`template[data-team-avatar="${personId}"]`);
  return `<span class="bcn-proposal-ring"${suggested ? ' data-suggested' : ''} title="${esc(p.name)}${suggested ? ' (suggested by Aldo)' : ''}">${tpl?.innerHTML ?? ''}</span>`;
};

/** An avatar and the person's name. */
export const person = (personId: string | null | undefined, suggested = false) => {
  const p = personOf(personId);
  return p ? `<span class="bcn-person">${avatar(personId, suggested)}<span class="bcn-person__name">${esc(p.name)}</span></span>` : '';
};
