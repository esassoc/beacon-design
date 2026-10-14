// Controller for <BcnSw3SourceEditor>. setupX shape: the host passes the source to show
// and each file's scan line; this reports saves, uploads, opens, downloads and deletes.

type Field = HTMLElement & { value: string; errorText?: string };
type Upload = HTMLElement & { _files: File[]; requestUpdate: () => void };

export interface EditorFile {
  id: string;
  name: string;
  pages: number;
  /** One sentence: where its scan is. */
  scan: string;
}
export interface EditorSource {
  id: string;
  name: string;
  ref: string;
  files: EditorFile[];
}

interface Handlers {
  onSave: (id: string, name: string, ref: string) => void;
  onUpload: (id: string, files: File[]) => void;
  onOpenFile: (fileId: string) => void;
  onDownload: (fileId: string) => void;
  onDeleteFile: (sourceId: string, fileId: string) => void;
  onDeleteSource: (id: string) => void;
}

export function setupSw3SourceEditor(root: HTMLElement, h: Handlers) {
  const $ = <T extends HTMLElement = HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const title = $('[data-ed-title]');
  const name = $<Field>('[data-ed-name]');
  const ref = $<Field>('[data-ed-ref]');
  const list = $('[data-ed-files]');
  const none = $('[data-ed-none]');
  const upload = $<Upload>('[data-ed-upload]');
  const tpl = $<HTMLTemplateElement>('[data-ed-file-tpl]');
  let current: EditorSource | null = null;
  let shownId = '';

  $('[data-ed-form]').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!current) return;
    if (!name.value.trim()) {
      name.errorText = 'Give the source document a name.';
      return;
    }
    name.errorText = '';
    h.onSave(current.id, name.value, ref.value);
  });
  let clearing = false;
  upload.addEventListener('change', (e) => {
    if (clearing || !current) return;
    const files = (e as CustomEvent<{ files: File[] }>).detail?.files ?? [];
    if (!files.length) return;
    h.onUpload(current.id, files);
    // The files move into the list above; the dropzone empties for the next ones.
    clearing = true;
    upload._files = [];
    upload.requestUpdate();
    queueMicrotask(() => (clearing = false));
  });
  $('[data-ed-delete]').addEventListener('click', () => current && h.onDeleteSource(current.id));

  const show = (s: EditorSource | null) => {
    current = s;
    root.hidden = !s;
    if (!s) return;
    title.textContent = s.name;
    // Fields take the stored values only when another source comes in, so typing is kept.
    if (shownId !== s.id) {
      shownId = s.id;
      root.closest('[data-sw3-main]')?.scrollTo(0, 0);
      name.value = s.name;
      ref.value = s.ref;
    }
    none.hidden = s.files.length > 0;
    // Rebuild the rows only when they change: the scan ticks, and a hovered button must hold.
    const sig = JSON.stringify(s.files);
    if (list.dataset.sig === sig) return;
    list.dataset.sig = sig;
    list.replaceChildren(
      ...s.files.map((f) => {
        const el = (tpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
        el.dataset.edFile = f.id;
        el.querySelector('[data-ed-fname]')!.textContent = f.name;
        el.querySelector('[data-ed-fname]')!.setAttribute('title', f.name);
        el.querySelector('[data-ed-fmeta]')!.textContent = `${f.pages} pages. ${f.scan}`;
        el.querySelector('[data-ed-fopen]')!.addEventListener('click', () => h.onOpenFile(f.id));
        el.querySelector('[data-ed-fdownload]')!.addEventListener('click', () => h.onDownload(f.id));
        el.querySelector('[data-ed-fdelete]')!.addEventListener('click', () => h.onDeleteFile(s.id, f.id));
        return el;
      }),
    );
  };

  /** Bring the upload's file browser up (the sidebar's Add files). */
  const browse = () => upload.shadowRoot?.querySelector<HTMLElement>('[role="button"], .dropzone, input[type="file"]')?.click();

  return { show, browse };
}
