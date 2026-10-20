// The Word export of a list: the SAME document as its PDF, as a .doc Word opens (Andy,
// 2026-10-20: "Let's have the prototype show word"). The brief already said Word comes "in
// the same layout", so this file renders no document of its own. It loads the PDF's print
// page (BcnDocSheet and its children) in a hidden frame, copies each element's computed
// style inline, and rewrites the three structures Word's HTML import cannot lay out:
//
//   - the fact lists (BcnDocFacts, a flex <dl>) become one paragraph of label + value pairs
//   - an entry's head (title left, commitment codes right, a flex row) becomes a two-cell
//     borderless table
//   - an action's occurrences (BcnDocOccurrences, a <dl>) become one paragraph per scope
//
// and starts the detail on a new page, as the PDF does. Token values arrive resolved,
// because computed style is the resolved value: Word cannot read a CSS variable.
//
// The .doc is HTML with Word's MIME type, the Comment Tracker's export precedent
// (BcnCommentExport), packed as a web archive (MHTML) so the tenant logo travels inside
// the file: Word will not fetch an image from a URL or read a data: URI. Prod writes a real .docx with a library (BCN-1764, open), from the
// same document model the PDF renders.

const PROPS = [
  'font-family', 'font-size', 'font-weight', 'font-style', 'color', 'line-height',
  'text-align', 'vertical-align', 'background-color',
  'margin-top', 'margin-bottom', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
  'border-top', 'border-bottom',
];

/** A px length as points, which is what Word measures type in. */
const pt = (v: string) => v.replace(/(-?[\d.]+)px/g, (_, n) => `${Math.round(Number(n) * 0.75 * 10) / 10}pt`);

const styleOf = (el: Element, win: Window): string => {
  const cs = win.getComputedStyle(el);
  return PROPS.map((p) => {
    const v = cs.getPropertyValue(p);
    if (!v || v === 'none' || v.startsWith('0px none') || v === 'rgba(0, 0, 0, 0)') return '';
    // Word reads physical alignment only; the page is left to right.
    if (p === 'text-align') return `${p}:${v === 'end' || v === 'right' ? 'right' : v === 'center' ? 'center' : 'left'}`;
    return `${p}:${pt(v)}`;
  })
    .filter(Boolean)
    .join(';');
};

/** A flex or grid gap, which Word ignores, as a top margin on every item after the first. */
const gapOf = (el: Element, win: Window): string => {
  const parent = el.parentElement;
  if (!parent || !el.previousElementSibling) return '';
  const cs = win.getComputedStyle(parent);
  if (!/flex|grid/.test(cs.display) || (cs.display.includes('flex') && !cs.flexDirection.startsWith('column'))) return '';
  const gap = parseFloat(cs.rowGap);
  const own = parseFloat(win.getComputedStyle(el).marginTop) || 0;
  return gap > 0 ? `;margin-top:${pt(`${gap + own}px`)}` : '';
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const GAP = '&nbsp;&nbsp;&nbsp;&nbsp;';

/** Load the print page same-origin and wait for its fonts and images. */
const loadFrame = (href: string) =>
  new Promise<HTMLIFrameElement>((resolve, reject) => {
    const frame = document.createElement('iframe');
    frame.setAttribute('aria-hidden', 'true');
    frame.tabIndex = -1;
    // Letter width, so the summary table's column widths compute as they print.
    frame.style.cssText = 'position:fixed;left:-10000px;top:0;width:900px;height:1200px;border:0;';
    frame.onload = () => resolve(frame);
    frame.onerror = () => reject(new Error(`Could not load ${href}`));
    frame.src = href;
    document.body.append(frame);
  });

/** The document as Word HTML: inline styles, Word-safe structures, one Letter section. */
function wordHtml(article: HTMLElement, win: Window, origin: string): { html: string; title: string; images: { name: string; href: string }[] } {
  const copy = article.cloneNode(true) as HTMLElement;
  // Inline the computed style of every element onto its twin in the copy.
  const live = [article, ...article.querySelectorAll<HTMLElement>('*')];
  const twins = [copy, ...copy.querySelectorAll<HTMLElement>('*')];
  live.forEach((el, i) => twins[i].setAttribute('style', styleOf(el, win) + gapOf(el, win)));

  // The paper itself: Word draws its own page, so no width, border, shadow or padding.
  copy.setAttribute('style', styleOf(article, win).replace(/(padding|border|background-color)[^;]*;?/g, ''));

  // Images point at their part in the archive, at the size they print.
  const images: { name: string; href: string }[] = [];
  // By tag, not instanceof: these nodes belong to the frame's window, not this one.
  const liveImages = live.filter((e) => e.tagName === 'IMG');
  copy.querySelectorAll<HTMLImageElement>('img').forEach((img, i) => {
    const src = liveImages[i];
    const href = new URL(img.getAttribute('src') ?? '', origin).href;
    const name = `image${i + 1}${href.match(/\.\w+$/)?.[0] ?? '.png'}`;
    images.push({ name, href });
    img.setAttribute('src', name);
    if (src) {
      const { width, height } = src.getBoundingClientRect();
      img.width = Math.round(width);
      img.height = Math.round(height);
      img.setAttribute('style', `width:${pt(`${width}px`)};height:${pt(`${height}px`)}`);
    }
  });

  // Fact lists: one paragraph, label then value, pairs set apart.
  copy.querySelectorAll<HTMLElement>('.bcn-doc-facts').forEach((dl) => {
    const p = document.createElement('p');
    p.setAttribute('style', dl.getAttribute('style') ?? '');
    p.innerHTML = [...dl.querySelectorAll('.bcn-doc-facts__pair')]
      .map((pair) => {
        const dt = pair.querySelector('dt')!;
        const dd = pair.querySelector('dd')!;
        return `<span style="${dt.getAttribute('style')}">${esc(dt.textContent ?? '')}</span>&nbsp;&nbsp;<span style="${dd.getAttribute('style')}">${esc(dd.textContent ?? '')}</span>`;
      })
      .join(GAP);
    dl.replaceWith(p);
  });

  // An entry's head: title left, codes right.
  copy.querySelectorAll<HTMLElement>('.bcn-doc-entry__head').forEach((head) => {
    const title = head.querySelector<HTMLElement>('.bcn-doc-entry__title');
    const codes = head.querySelector<HTMLElement>('.bcn-doc-entry__codes');
    const table = document.createElement('table');
    table.setAttribute('width', '100%');
    table.setAttribute('style', 'border-collapse:collapse;border:none');
    table.innerHTML = `<tr><td style="padding:0;border:none;vertical-align:baseline">${title?.outerHTML ?? ''}</td><td style="padding:0;border:none;vertical-align:baseline;text-align:right;white-space:nowrap">${codes?.outerHTML ?? ''}</td></tr>`;
    head.replaceWith(table);
  });

  // Occurrences: one paragraph per scope.
  copy.querySelectorAll<HTMLElement>('.bcn-doc-occ').forEach((dl) => {
    const lines = [...dl.querySelectorAll('.bcn-doc-occ__line')].map((line) => {
      const dt = line.querySelector('dt')!;
      const dd = line.querySelector('dd')!;
      const parts = [...dd.childNodes].map((n) => (n.textContent ?? '').trim()).filter(Boolean);
      return `<p style="${dl.getAttribute('style')};margin:0"><span style="${dt.getAttribute('style')}">${esc(dt.textContent ?? '')}</span>${GAP}<span style="${dd.getAttribute('style')}">${parts.map(esc).join(GAP)}</span></p>`;
    });
    const wrap = document.createElement('div');
    wrap.innerHTML = lines.join('');
    dl.replaceWith(wrap);
  });

  // Word knows no sectioning elements and puts no space in a <div>'s padding: each becomes a
  // <div>, and a box with no border or fill takes its vertical padding as margin.
  copy.querySelectorAll<HTMLElement>('article, section, header, footer, main').forEach((el) => {
    const div = document.createElement('div');
    [...el.attributes].forEach((a) => div.setAttribute(a.name, a.value));
    div.append(...el.childNodes);
    el.replaceWith(div);
  });
  // A box with a rule keeps its margin outside the rule, and its padding goes to the first
  // and last thing inside it, so the space stays on the same side of the rule.
  const len = (style: string, prop: string) =>
    parseFloat(style.match(new RegExp(`(?:^|;)${prop}:(-?[\\d.]+)pt`))?.[1] ?? '0');
  const setEdges = (el: Element, top: number, bottom: number, add: boolean) => {
    const style = el.getAttribute('style') ?? '';
    const t = top + (add ? len(style, 'margin-top') : 0);
    const b = bottom + (add ? len(style, 'margin-bottom') : 0);
    el.setAttribute('style', `${style.replace(/(?:^|;)margin-(top|bottom):[^;]*/g, '')};margin-top:${t}pt;margin-bottom:${b}pt`.replace(/^;/, ''));
  };
  copy.querySelectorAll<HTMLElement>('div').forEach((div) => {
    const style = div.getAttribute('style') ?? '';
    const padTop = len(style, 'padding-top');
    const padBottom = len(style, 'padding-bottom');
    const stripped = style.replace(/(?:^|;)padding-(top|bottom):[^;]*/g, '').replace(/^;/, '');
    if (/border-(top|bottom)|background-color/.test(style)) {
      div.setAttribute('style', stripped);
      const first = div.firstElementChild;
      const last = div.lastElementChild;
      if (first) setEdges(first, padTop, 0, true);
      if (last) setEdges(last, 0, padBottom, true);
      return;
    }
    div.setAttribute('style', stripped);
    setEdges(div, padTop, padBottom, true);
  });

  // The detail starts on a new page, as it does in the PDF.
  copy.querySelector('.bcn-doc-groups')?.insertAdjacentHTML('beforebegin', '<br clear="all" style="page-break-before:always">');

  // Word repeats a table's header row on every page when the row says so.
  copy.querySelectorAll('thead tr').forEach((tr) => tr.setAttribute('style', `${tr.getAttribute('style') ?? ''};mso-header:yes`));

  copy.querySelectorAll('script, template').forEach((n) => n.remove());
  const title = article.querySelector('.bcn-doc__title')?.textContent?.trim() ?? 'List';
  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>${esc(title)}</title>
<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]-->
<style>@page Letter { size: 8.5in 11in; margin: 20mm; } div.Letter { page: Letter; } table { border-collapse: collapse; } p { margin: 0; }</style>
</head><body><div class="Letter">${copy.outerHTML}</div></body></html>`;
  return { html, title, images };
}

const BOUNDARY = '----=_NextPart_Beacon_List';

/** base64 of a fetched file, in 76-column lines as MIME wants. */
const base64Of = async (href: string) => {
  const bytes = new Uint8Array(await (await fetch(href)).arrayBuffer());
  let bin = '';
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/.{76}/g, '$&\r\n');
};

/** One MHTML file: the page, then each image it names. */
async function archive(html: string, images: { name: string; href: string }[]): Promise<string> {
  const page = btoa(unescape(encodeURIComponent(html))).replace(/.{76}/g, '$&\r\n');
  const parts = [
    `Content-Location: file:///C:/list.htm\r\nContent-Transfer-Encoding: base64\r\nContent-Type: text/html; charset="utf-8"\r\n\r\n${page}`,
    ...(await Promise.all(
      images.map(async ({ name, href }) => {
        const type = name.endsWith('.jpg') || name.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';
        return `Content-Location: file:///C:/${name}\r\nContent-Transfer-Encoding: base64\r\nContent-Type: ${type}\r\n\r\n${await base64Of(href)}`;
      }),
    )),
  ];
  return `MIME-Version: 1.0\r\nContent-Type: multipart/related; boundary="${BOUNDARY}"; type="text/html"\r\n\r\n${parts
    .map((part) => `--${BOUNDARY}\r\n${part}\r\n`)
    .join('')}--${BOUNDARY}--\r\n`;
}

/** Build the list's Word document from its print page and hand it to the browser. */
export async function downloadWord(href: string): Promise<void> {
  const frame = await loadFrame(href);
  try {
    const win = frame.contentWindow!;
    await win.document.fonts?.ready;
    // The logo is measured for its printed size, so it has to have loaded.
    await Promise.all([...win.document.images].map((img) => img.decode().catch(() => undefined)));
    const article = win.document.querySelector<HTMLElement>('[data-doc]');
    if (!article) return;
    const { html, title, images } = wordHtml(article, win, win.location.href);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([await archive(html, images)], { type: 'application/msword' }));
    a.download = `${title}.doc`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  } finally {
    frame.remove();
  }
}
