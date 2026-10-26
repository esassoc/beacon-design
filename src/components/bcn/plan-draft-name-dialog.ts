// Controller for <BcnPlanDraftNameDialog>: asks for a draft's name and resolves it (trimmed), or null on Cancel / close.

import '@esa/ecology/esa-dialog';
import '@esa/ecology/esa-text-field';

type DialogEl = HTMLElement & { heading: string; show(): void; close(): void };
type FieldEl = HTMLElement & { value: string; errorText: string; focus(): void };

export interface OpenPlanDraftNameDialogArgs {
  heading: string;
  value: string;
  hint: string;
  saveLabel: string;
}

export function openPlanDraftNameDialog(args: OpenPlanDraftNameDialogArgs): Promise<string | null> {
  const root = document.querySelector<HTMLElement>('[data-bcn-plan-draft-name-dialog]');
  if (!root) throw new Error('<BcnPlanDraftNameDialog /> is not on this page.');
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('esa-dialog');
  const field = q<FieldEl>('[data-dn-name]');
  const saveButton = q<HTMLButtonElement>('[data-dn-save]');
  saveButton.querySelector('.esa-button__label')!.textContent = args.saveLabel;
  dialog.heading = args.heading;
  q('[data-dn-hint]').textContent = args.hint;
  field.value = args.value;
  field.errorText = '';

  return new Promise((resolve) => {
    let result: string | null = null;
    const ac = new AbortController();
    const submit = (e?: Event) => {
      e?.preventDefault();
      const name = String(field.value ?? '').trim();
      if (!name) {
        field.errorText = 'Give the draft a name.';
        return;
      }
      result = name;
      dialog.close();
    };
    field.addEventListener('change', (e) => (field.value = String((e as CustomEvent<{ value: string }>).detail?.value ?? field.value)), { signal: ac.signal });
    field.addEventListener('input', () => (field.errorText = ''), { signal: ac.signal });
    q('[data-dn-form]').addEventListener('submit', submit, { signal: ac.signal });
    field.addEventListener(
      'keydown',
      (e) => {
        if ((e as KeyboardEvent).key === 'Enter') submit(e);
      },
      { signal: ac.signal }
    );
    saveButton.addEventListener('click', () => submit(), { signal: ac.signal });
    q('[data-dn-cancel]').addEventListener('click', () => dialog.close(), { signal: ac.signal });
    dialog.addEventListener(
      'close',
      (e) => {
        if (e.target !== dialog) return;
        ac.abort();
        resolve(result);
      },
      { signal: ac.signal }
    );
    dialog.show();
    requestAnimationFrame(() => field.focus());
  });
}
