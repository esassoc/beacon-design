// Cross-check data for the Compliance Index review dialog, served as one static JSON
// file and fetched the first time a requirement is opened, so the page itself stays
// light. Per requirement: its commitment code, name and text. Per commitment: its
// title, its text as it appears in the ITP, and the ITP page it starts on.
//
// Commitment text is dcp-commitments.json's ITP rows. A sub-condition the extraction
// did not split out (COA 9.2.1 under COA 9.2) falls back to its nearest parent.
import type { APIRoute } from 'astro';
import commitments from '../../../data/dcp-commitments.json';
import { ITP } from '../../../data/setup-wizard';
import { pageOf } from '../../../data/setup-wizard-ci';

interface Row { code: string; title: string; sourceDoc: string; blocks: string[] }
const itp = new Map(
  (commitments as Row[]).filter((c) => /Incidental Take Permit/.test(c.sourceDoc)).map((c) => [c.code, c]),
);
const resolve = (code: string): Row | undefined => {
  let c = code;
  while (c.includes('.')) {
    const hit = itp.get(c);
    if (hit) return hit;
    c = c.slice(0, c.lastIndexOf('.'));
  }
  return itp.get(c);
};

export const GET: APIRoute = () => {
  const req: Record<string, [string, string, string]> = {};
  const com: Record<string, { title: string; from: string; blocks: string[]; page: number | null }> = {};
  for (const r of ITP.requirements) {
    req[r.id] = [r.commitment, r.name, r.text];
    if (com[r.commitment]) continue;
    const row = resolve(r.commitment);
    com[r.commitment] = {
      title: row?.title ?? r.commitmentTitle,
      from: row?.code ?? '',
      blocks: row?.blocks ?? [],
      page: pageOf(r.commitment) ?? (row ? pageOf(row.code) ?? null : null),
    };
  }
  return new Response(JSON.stringify({ req, com }), { headers: { 'Content-Type': 'application/json' } });
};
