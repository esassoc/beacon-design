// The project's source documents and their files: prod's Source / SourceFile, editable.
//
// A source (name, reference number) holds files; each file is scanned on its own (one
// sw3-store slot per file). The seeded sources are the real DCP ones; a person can add a
// source, rename it, delete it, upload files to it (a real PDF, rendered by pdf.js from a
// blob URL), download a file, and remove a file. Uploads persist in IndexedDB so they
// survive a reload; everything else in localStorage.
//
// Prod endpoints this stands in for: PUT source-documents (create / update with files),
// DELETE sources/{id} (after GET deletion-impact), POST/DELETE sources/{id}/files,
// GET sources/{id}/files/{fileId}/download.
//
//   out  sw3:sources   on document, after any change

import { addDoc, removeDoc, type Sw3Payload } from './sw3-store';

export interface SourceFile {
  id: string;
  /** The file's name as uploaded. */
  name: string;
  /** Where the PDF is: a public path, or a blob URL for an upload. */
  url: string;
  pages: number;
  /** A person's upload this session (no replay fixture behind it). */
  uploaded?: boolean;
}
export interface Source {
  id: string;
  name: string;
  ref: string;
  files: SourceFile[];
}

interface Seed {
  id: string;
  name: string;
  ref: string;
  files: string[];
}
interface SeedFile {
  id: string;
  file: string;
  pdf: string;
  total: number;
}
interface Saved {
  sources: { id: string; name: string; ref: string; files: string[] }[];
  uploads: { id: string; name: string; pages: number }[];
}

const KEY = 'sw3:v3:sources';
const DB = 'sw3-uploads';

let sources: Source[] = [];
let seededFiles = new Map<string, SeedFile>();
let base = '';

const emit = () => document.dispatchEvent(new CustomEvent('sw3:sources'));

// ── IndexedDB: the uploaded PDFs themselves ─────────────────────────────────

const db = (): Promise<IDBDatabase | null> =>
  new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB, 1);
      req.onupgradeneeded = () => req.result.createObjectStore('files');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
const putBlob = async (id: string, blob: Blob) => {
  const d = await db();
  if (!d) return;
  d.transaction('files', 'readwrite').objectStore('files').put(blob, id);
};
const getBlob = async (id: string): Promise<Blob | null> => {
  const d = await db();
  if (!d) return null;
  return new Promise((resolve) => {
    const req = d.transaction('files').objectStore('files').get(id);
    req.onsuccess = () => resolve((req.result as Blob) ?? null);
    req.onerror = () => resolve(null);
  });
};
const delBlob = async (id: string) => {
  const d = await db();
  if (!d) return;
  d.transaction('files', 'readwrite').objectStore('files').delete(id);
};

// ── Persist ─────────────────────────────────────────────────────────────────

const save = () => {
  const out: Saved = {
    sources: sources.map((s) => ({ id: s.id, name: s.name, ref: s.ref, files: s.files.map((f) => f.id) })),
    uploads: sources.flatMap((s) => s.files.filter((f) => f.uploaded).map((f) => ({ id: f.id, name: f.name, pages: f.pages }))),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(out));
  } catch {
    /* private window */
  }
  emit();
};

/** A payload for an upload: its pages are real, its scan is not (no fixture behind it). */
const uploadPayload = (f: SourceFile): Sw3Payload => ({
  id: f.id,
  short: f.name.replace(/\.pdf$/i, ''),
  name: f.name,
  pdf: f.url,
  total: f.pages,
  scope: { first: 1, last: f.pages },
  pageSeconds: 1.2,
  finds: [],
  missed: null,
  events: [],
  seconds: 0,
  merges: [],
  commitments: [],
  requirements: [],
  spans: [],
  calibrate: [],
  sections: [],
  headings: {},
  proposal: {
    text: `I can read all ${f.pages} pages of ${f.name}. This prototype replays its scans from the three DCP files, so there is nothing to show for this one yet.`,
    go: null,
    suggest: [],
  },
});

/** Read the seeds from the page, then a person's changes and uploads from storage. */
export const initSources = async (seed: { sources: Seed[]; files: SeedFile[]; base: string }) => {
  base = seed.base.replace(/\/$/, '');
  seededFiles = new Map(seed.files.map((f) => [f.id, f]));
  const fileOf = (id: string): SourceFile | null => {
    const f = seededFiles.get(id);
    return f ? { id, name: f.file, url: `${base}${f.pdf}`, pages: f.total } : null;
  };
  let saved: Saved | null = null;
  try {
    saved = JSON.parse(localStorage.getItem(KEY) ?? 'null');
  } catch {
    saved = null;
  }
  if (!saved) {
    sources = seed.sources.map((s) => ({ id: s.id, name: s.name, ref: s.ref, files: s.files.map(fileOf).filter((f): f is SourceFile => !!f) }));
    emit();
    return;
  }
  const uploads = new Map<string, SourceFile>();
  for (const u of saved.uploads) {
    const blob = await getBlob(u.id);
    if (!blob) continue;
    const f: SourceFile = { id: u.id, name: u.name, pages: u.pages, url: URL.createObjectURL(blob), uploaded: true };
    uploads.set(u.id, f);
    addDoc(uploadPayload(f));
  }
  sources = saved.sources.map((s) => ({
    id: s.id,
    name: s.name,
    ref: s.ref,
    files: s.files.map((id) => uploads.get(id) ?? fileOf(id)).filter((f): f is SourceFile => !!f),
  }));
  emit();
};

export const allSources = () => sources;
export const sourceOf = (fileId: string) => sources.find((s) => s.files.some((f) => f.id === fileId));
export const fileOf = (fileId: string) => sources.flatMap((s) => s.files).find((f) => f.id === fileId);

// ── Edits ───────────────────────────────────────────────────────────────────

let n = 0;
const newId = (p: string) => `${p}-${Date.now().toString(36)}${(n++).toString(36)}`;

export const createSource = (name: string, ref: string): string => {
  const id = newId('src');
  sources.push({ id, name: name.trim() || 'Untitled source document', ref: ref.trim(), files: [] });
  save();
  return id;
};

export const updateSource = (id: string, patch: { name?: string; ref?: string }) => {
  const s = sources.find((x) => x.id === id);
  if (!s) return;
  if (patch.name !== undefined) s.name = patch.name.trim() || s.name;
  if (patch.ref !== undefined) s.ref = patch.ref.trim();
  save();
};

/** What deleting a source takes with it (prod's deletion-impact). */
export const deletionImpact = (id: string, commitmentsOf: (fileId: string) => number) => {
  const s = sources.find((x) => x.id === id);
  const files = s?.files.length ?? 0;
  const commitments = s?.files.reduce((t, f) => t + commitmentsOf(f.id), 0) ?? 0;
  return { files, commitments };
};

export const deleteSource = (id: string) => {
  const s = sources.find((x) => x.id === id);
  if (!s) return;
  for (const f of s.files) dropFile(f);
  sources = sources.filter((x) => x !== s);
  save();
};

const dropFile = (f: SourceFile) => {
  removeDoc(f.id);
  if (f.uploaded) {
    void delBlob(f.id);
    URL.revokeObjectURL(f.url);
  }
};

export const removeFile = (sourceId: string, fileId: string) => {
  const s = sources.find((x) => x.id === sourceId);
  const f = s?.files.find((x) => x.id === fileId);
  if (!s || !f) return;
  dropFile(f);
  s.files = s.files.filter((x) => x !== f);
  save();
};

/** Upload PDFs to a source: real files, page-counted by pdf.js, kept for reload. */
export const uploadFiles = async (sourceId: string, list: File[], countPages: (url: string) => Promise<number>) => {
  const s = sources.find((x) => x.id === sourceId);
  if (!s) return [];
  const added: string[] = [];
  for (const file of list) {
    if (!/\.pdf$/i.test(file.name) && file.type !== 'application/pdf') continue;
    const id = newId('file');
    const url = URL.createObjectURL(file);
    let pages = 0;
    try {
      pages = await countPages(url);
    } catch {
      URL.revokeObjectURL(url);
      continue;
    }
    const f: SourceFile = { id, name: file.name, url, pages, uploaded: true };
    await putBlob(id, file);
    s.files.push(f);
    addDoc(uploadPayload(f));
    added.push(id);
  }
  save();
  return added;
};

/** Download a file as it was uploaded. */
export const downloadFile = (fileId: string) => {
  const f = fileOf(fileId);
  if (!f) return;
  const a = document.createElement('a');
  a.href = f.url;
  a.download = f.name;
  document.body.append(a);
  a.click();
  a.remove();
};

/** Back to the seeded sources (the prototype's Restart). */
export const resetSources = async (seed: { sources: Seed[]; files: SeedFile[]; base: string }) => {
  for (const s of sources) for (const f of s.files) if (f.uploaded) dropFile(f);
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* no storage */
  }
  await initSources(seed);
};
