// Controller for <BcnDraftChooser> (2026-10-29, several drafts per person): one pre-rendered shell per page, asked one of
// three ways. `choose`: which of your drafts (or a new one) Edit in a Draft opens; `new`: a new draft's name; `rename`:
// a draft's new name. Resolves the answer, or null on Cancel, Esc or the close button. The opener acts on it.

import '@esa/ecology/esa-dialog';
import '@esa/ecology/esa-radio-group';
import '@esa/ecology/esa-text-field';
import { draftTouchedAt, timeAgo, type PlanRepoDraft } from '../../lib/planning/plan-repo';
import { setButtonDisabled } from './plan-people';

/** The "new draft" choice among a person's drafts. */
export const NEW_DRAFT = 'new';

export type DraftChooserAsk =
  | { kind: 'choose'; drafts: PlanRepoDraft[]; current: string | null; nextName: string }
  | { kind: 'new'; nextName: string }
  | { kind: 'rename'; draft: PlanRepoDraft };

/** The answer: a draft's id (or NEW_DRAFT) and the name typed for a new or renamed one. */
export interface DraftChooserAnswer {
  choice: string;
  name: string;
}

type DialogEl = HTMLElement & { open: boolean; heading: string; close(): void };
type RadioEl = HTMLElement & { options: { label: string; value: string }[]; value: string | null };
type FieldEl = HTMLElement & { value: string; errorText: string; helpText: string; focus(): void };

/** A draft as one choice: its name, then how many edits and when it was last touched. */
export const draftChoiceLabel = (d: PlanRepoDraft) => `${d.name} (${d.revisions.length} ${d.revisions.length === 1 ? 'Edit' : 'Edits'}, ${timeAgo(draftTouchedAt(d))})`;

let shell: { open(ask: DraftChooserAsk): Promise<DraftChooserAnswer | null> } | null = null;

function setup(root: HTMLElement) {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('esa-dialog');
  const choice = q<RadioEl>('[data-bdc-choice]');
  const name = q<FieldEl>('[data-bdc-name]');
  const go = () => q<HTMLButtonElement>('[data-bdc-go] button');
  let ask: DraftChooserAsk | null = null;
  let result: DraftChooserAnswer | null = null;
  let settle: ((a: DraftChooserAnswer | null) => void) | null = null;

  const picked = () => (ask?.kind === 'choose' ? (choice.value ?? NEW_DRAFT) : ask?.kind === 'rename' ? ask.draft.id : NEW_DRAFT);
  const naming = () => ask?.kind !== 'choose' || picked() === NEW_DRAFT;
  function draw(): void {
    name.hidden = !naming();
    const label = ask?.kind === 'rename' ? 'Rename' : picked() === NEW_DRAFT ? 'Start Draft' : 'Open Draft';
    q('[data-bdc-go-label]').textContent = label;
    setButtonDisabled(go(), naming() && !String(name.value ?? '').trim());
  }
  choice.addEventListener('change', () => {
    draw();
    if (naming()) requestAnimationFrame(() => name.focus());
  });
  name.addEventListener('input', () => draw());
  name.addEventListener('change', () => draw());
  const submit = () => {
    if (!ask || (naming() && !String(name.value ?? '').trim())) return;
    result = { choice: picked(), name: String(name.value ?? '').trim() };
    dialog.close();
  };
  q('[data-bdc-go]').addEventListener('click', submit);
  name.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter') {
      e.preventDefault();
      submit();
    }
  });
  q('[data-bdc-cancel]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', (e) => {
    if (e.target !== dialog || !settle) return;
    const done = settle;
    settle = null;
    done(result);
  });

  return {
    open(next: DraftChooserAsk): Promise<DraftChooserAnswer | null> {
      settle?.(null);
      ask = next;
      result = null;
      choice.hidden = next.kind !== 'choose';
      if (next.kind === 'choose') {
        dialog.heading = 'Edit in a Draft';
        q('[data-bdc-lead]').textContent = 'Your edits go into the draft you pick. Each draft is reviewed and published on its own.';
        choice.options = [...next.drafts.map((d) => ({ label: draftChoiceLabel(d), value: d.id })), { label: 'A New Draft', value: NEW_DRAFT }];
        choice.value = next.current ?? NEW_DRAFT;
        name.value = next.nextName;
      } else if (next.kind === 'new') {
        dialog.heading = 'Start a New Draft';
        q('[data-bdc-lead]').textContent = 'A draft of its own, from Live as it is now. Your other drafts are kept as they are.';
        name.value = next.nextName;
      } else {
        dialog.heading = 'Rename Draft';
        q('[data-bdc-lead]').textContent = '';
        name.value = next.draft.name;
      }
      name.errorText = '';
      draw();
      dialog.open = true;
      if (naming()) setTimeout(() => name.focus(), 60);
      return new Promise((resolve) => (settle = resolve));
    },
  };
}

/** Asks; null when the page has no chooser shell. */
export function openDraftChooser(ask: DraftChooserAsk): Promise<DraftChooserAnswer | null> {
  const root = document.querySelector<HTMLElement>('[data-bcn-draft-chooser]');
  if (!root) return Promise.resolve(null);
  shell ??= setup(root);
  return shell.open(ask);
}
