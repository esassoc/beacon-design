# Files (files-as-viewer)

The Files list (esa-file-list lego) is the document's entry point: each file NAME is a link to the source PDF, and clicking it opens the in-page viewer drawer instead of navigating. Because a document can have several files, viewing is per-file here — which is exactly why there is no single "View Document" header action.

## Key decisions
- esa-file-list is populated client-side from a files array; each row name is an <a> whose href is the source PDF (the no-JS fallback). A click handler intercepts the anchor, preventDefaults, and opens the side-dialog viewer.
- The lego's per-row download button (downloadable defaults true) is kept and wired separately: name-link OPENS the viewer, download-button DOWNLOADS. Two distinct affordances per row.
- Row density is bumped via the lego's --file-list-row-padding-y knob (its default is a tight 2px block padding).
- The "Files (N)" count is a neutral esa-badge beside the heading — a label, not a status.

## Gotchas
- The file rows render in the lego's SHADOW DOM — outerHTML will not show them and a light-DOM selector cannot reach them. Intercept the click with composedPath() to find the anchor, not event.target.
- Only the name-link opens the viewer; the download <button> is not an anchor, so it must fall through to the download handler — do not open the viewer on every row click.
- In the prototype every file resolves to the same sample PDF; wire real per-file hrefs in the app.

## Done when
- Clicking a file name opens the PDF viewer drawer; the per-row download button downloads; the "Files (N)" count matches the list length.

## Markup
```html
<esa-file-list
  id="doc-files"
  data-src="/beacon-design/source-docs/feir-sample.pdf"
  downloadable=""
></esa-file-list>
```
