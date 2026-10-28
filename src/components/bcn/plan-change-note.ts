// <BcnChangeNote>'s runtime: a PlanChangeNote drawn as its parts, each its own element (action tag, subject, the other
// end of a link, the shift, how many followed). With no note (an older record), its plain line instead.

import { noteText, type PlanChangeNote } from '../../lib/planning/plan-repo';

const span = (className: string, text: string) => Object.assign(document.createElement('span'), { className, textContent: text });

/** The action tag: the bank's esa-badge, or a plain span when the page has no bank. */
function actionTag(action: string): HTMLElement {
  const tpl = document.querySelector<HTMLTemplateElement>('[data-bcn-change-note] template[data-change-tpl="action"]');
  const badge = tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
  if (!badge) return span('bcn-change__action', action);
  const text = badge.querySelector('.esa-badge__text');
  if (text) text.textContent = action;
  else badge.textContent = action;
  return badge;
}

export function changeNote(note: PlanChangeNote | undefined, fallback = ''): HTMLElement {
  const el = span('bcn-change', '');
  if (!note) {
    el.append(span('bcn-change__plain', fallback));
    return el;
  }
  el.title = noteText(note);
  el.append(actionTag(note.action));
  if (note.subject) el.append(span('bcn-change__subject', note.subject));
  if (note.object) el.append(span('bcn-change__arrow', '→'), span('bcn-change__subject', note.object));
  if (note.shift) el.append(span('bcn-change__shift', note.shift));
  if (note.others) el.append(span('bcn-change__others', `+${note.others} Followed`));
  return el;
}
