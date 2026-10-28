// HTML for the permit-type rule sections (How review works, Wetland buffers, Stream
// buffers) and the governing law list. ONE renderer for both sides: the build renders the
// seed with it (set:html) and the browser re-renders saved edits with it (innerHTML), so
// the markup can't drift. Styled by the host components' :global rules under their roots
// (BcnCaoSection → .bcn-cs, BcnGoverningLaw → .bcn-gl).
//
// Every value is escaped; links open in a new tab and say so to screen readers.

import type {
  Authority,
  Cell,
  JurisdictionRules,
  ReviewRules,
  RuleSection,
  RuleSectionId,
  RuleTable,
  StreamRules,
  WetlandRules,
} from '../../data/permit-rules';
import { fmtDate } from '../../data/permit-tracker';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const NEW_TAB = '<span class="visually-hidden"> (opens in a new tab)</span>';
const out = (url: string, text: string, cls: string) =>
  url ? `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener">${esc(text)}${NEW_TAB}</a>` : `<span>${esc(text)}</span>`;

interface Fact {
  label: string;
  text: string;
  cite: string;
  url: string;
}

const facts = (list: Fact[]) =>
  `<dl class="bcn-cf">${list
    .map(
      (f) =>
        `<div class="bcn-cf__row"><dt class="typography-label-md-strong">${esc(f.label)}</dt><dd class="stack" data-gap="2xs"><span class="typography-body-md">${esc(f.text)}</span>${
          f.cite ? out(f.url, f.cite, 'bcn-cf__cite typography-body-sm') : ''
        }</dd></div>`,
    )
    .join('')}</dl>`;

const cellText = (c: Cell) => (typeof c === 'string' ? c : 'span' in c ? c.span : c.span2);

/** A code table: grouped (wetland: category rowspan + characteristic) or flat (stream). */
export function ruleTable(t: RuleTable, url: string): string {
  const grouped = !!t.groups;
  const values = grouped ? t.cols.slice(2) : t.cols.slice(1);
  const span = (c: Cell) => (typeof c === 'string' ? 1 : 'span' in c ? values.length : 2);
  const head = `<tr><th scope="col"${grouped ? ' colspan="2"' : ''}>${esc(t.cols[0])}</th>${values.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr>`;
  const tds = (cells: Cell[]) => cells.map((c) => `<td colspan="${span(c)}">${esc(cellText(c))}</td>`).join('');
  const body = grouped
    ? t.groups!.map((g) =>
          g.rows
            .map(
              (row, i) =>
                `<tr>${i === 0 ? `<th scope="rowgroup" rowspan="${g.rows.length}" class="bcn-rt__group">${esc(g.label)}</th>` : ''}<th scope="row">${esc(cellText(row[0]))}</th>${tds(row.slice(1))}</tr>`,
            )
            .join(''),
        )
        .join('')
    : t.rows!.map((row) => `<tr><th scope="row">${esc(cellText(row[0]))}</th>${tds(row.slice(1))}</tr>`).join('');
  return `<figure class="bcn-rt stack" data-gap="xs"><figcaption class="cluster" data-gap="sm"><span class="typography-label-md-strong">${esc(t.title)}</span>${out(url, t.ref, 'bcn-cf__cite typography-body-sm')}</figcaption><div class="bcn-rt__scroll"><table class="bcn-rt__table typography-body-sm"><thead>${head}</thead><tbody>${body}</tbody></table></div>${
    t.notes.length ? `<ul class="bcn-rt__notes typography-body-sm" role="list">${t.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>` : ''
  }</figure>`;
}

const review = (r: ReviewRules, sources: [string, string][]) =>
  facts([
    { label: 'Process', text: r.process, cite: r.processRef, url: r.url },
    { label: 'When review applies', text: r.triggers, cite: r.triggersRef, url: r.url },
    { label: 'Exemptions', text: r.exemptions, cite: r.exemptionsRef, url: r.url },
    { label: 'Relief', text: r.relief, cite: r.reliefRef, url: r.url },
  ]) +
  `<div class="stack" data-gap="xs"><h4 class="bcn-cs__subhead typography-label-md-strong">Code sections</h4><ul class="bcn-cs__sources typography-body-sm" role="list">${sources
    .map(([title, url]) => `<li>${out(url, title, 'bcn-cf__cite')}</li>`)
    .join('')}</ul></div>`;

const wetland = (w: WetlandRules) =>
  facts([
    { label: 'Rating system', text: w.rating, cite: w.ratingRef, url: w.url },
    { label: 'Buffer widths', text: w.range, cite: w.rangeRef, url: w.url },
  ]) + w.tables.map((t) => ruleTable(t, w.url)).join('');

const stream = (s: StreamRules) =>
  facts([
    { label: 'Water typing', text: s.typing, cite: s.typingRef, url: s.url },
    { label: 'Buffer widths', text: s.range, cite: s.rangeRef, url: s.url },
  ]) + s.tables.map((t) => ruleTable(t, s.url)).join('');

/** One section's body: its history line, then its content. */
export function sectionBody(rules: JurisdictionRules, key: RuleSectionId): string {
  const s = rules[key];
  const content =
    key === 'review'
      ? review((s as RuleSection<ReviewRules>).current, rules.sources)
      : key === 'wetland'
        ? wetland((s as RuleSection<WetlandRules>).current)
        : stream((s as RuleSection<StreamRules>).current);
  return `<p class="bcn-cs__history typography-body-sm">${esc(history(s))}</p>${content}`;
}

/** "Suggested by AI Oct 23, 2026; edited by Maya Okafor Oct 28, 2026; validated by …". */
export function history(s: RuleSection<unknown>): string {
  return [
    `Suggested by AI ${fmtDate(s.suggestedAt)}`,
    s.editedAt && `edited by ${s.editedBy} ${fmtDate(s.editedAt)}`,
    s.validatedAt && `validated by ${s.validatedBy} ${fmtDate(s.validatedAt)}`,
  ]
    .filter(Boolean)
    .join('; ');
}

/** The governing law list (BcnGoverningLaw). */
export function lawList(items: Authority[]): string {
  return `<ul class="bcn-gl" role="list">${items
    .map(
      (a) =>
        `<li class="bcn-gl__item stack" data-gap="3xs">${a.url ? out(a.url, a.cite, 'bcn-gl__cite typography-body-md') : `<span class="typography-body-md">${esc(a.cite)}</span>`}<span class="bcn-gl__title typography-body-sm">${esc(a.title)}</span></li>`,
    )
    .join('')}</ul>`;
}
