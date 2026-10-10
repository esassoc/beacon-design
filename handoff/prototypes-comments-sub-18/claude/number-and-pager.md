# Number and pager

The H1 names the submitter with the submission's number (S-018) trailing as a neutral badge. Upper right, the record pager: Previous, Contents, Next, through submissions in the inbox's own order (newest first), so a reviewer works the queue without going back to the list.

## Key decisions
- Numbers: submissions S-018, comments C-018.001 (submission.passage, in reading order), responses R-004. Display numbers for the prototype; the build decides how they are stored.
- The pager walks the inbox order (newest first). Between Previous and Next, a contents button opens a side panel (esa-side-dialog) of every submission: status mark, number, name, then its status in words and its first topic (+N, named on hover). A status filter (esa-button-toggle: All / Not Reviewed / Reviewed, each with its count) heads the list; the current submission is marked; [ and ] step from the keyboard.

## Done when
- The first and last submissions disable the button that has nowhere to go.
- Filtering the contents panel to Reviewed lists only reviewed submissions; the counts on the filter add up to All.

## Markup
```html
<div class="page-layout__utilities">
  <div
    class="bcn-rp"
    data-record-pager=""
    data-kind="submission"
    data-current="sub-18"
    data-base="/beacon-design/prototypes/comments"
  >
    <span
      class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm esa-button--icon-only"
      ><a
        class="esa-button__native typography-microcopy-xs"
        href="/beacon-design/prototypes/comments/sub-19"
        role="button"
        aria-label="Previous submission"
        title="S-019 Frances Ilyin"
        data-rp-prev="true"
        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m15 18-6-6 6-6"></path></svg></span></a></span
    ><span
      class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm esa-button--icon-only"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        aria-label="All submissions"
        title="All submissions"
        data-rp-open="true"
        data-glyph="list"
      >
        <span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3 12h.01"></path>
            <path d="M3 18h.01"></path>
            <path d="M3 6h.01"></path>
            <path d="M8 12h13"></path>
            <path d="M8 18h13"></path>
            <path d="M8 6h13"></path></svg
        ></span></button></span
    ><span
      class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm esa-button--icon-only"
      ><a
        class="esa-button__native typography-microcopy-xs"
        href="/beacon-design/prototypes/comments/sub-17"
        role="button"
        aria-label="Next submission"
        title="S-017 Kelsey Arnaud"
        data-rp-next="true"
        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path></svg></span></a></span
    ><esa-side-dialog
      heading="Submissions"
      position="right"
      show-close-button="true"
      data-rp-panel="true"
      size="md"
      ><div class="bcn-rp__body">
        <esa-button-toggle
          size="sm"
          label="Status"
          data-rp-filter="true"
        ></esa-button-toggle>
        <ul class="bcn-rp__list" role="list" data-rp-list="">
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-29"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-029</span
              ><span class="bcn-rp__name">Anton Kowalczyk</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="slate"></span>Process and
                  outreach</span
                ><span
                  class="bcn-rp__more"
                  title="Nighttime operations, Flight paths, Health"
                  >+3</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-28"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-028</span
              ><span class="bcn-rp__name">Gwen Halvorsen</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime
                  operations</span
                ><span class="bcn-rp__more" title="Aircraft noise, Process and outreach"
                  >+2</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-27"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-027</span
              ><span class="bcn-rp__name">Yvette Garrow</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime
                  operations</span
                ><span class="bcn-rp__more" title="Health">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-26"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-026</span
              ><span class="bcn-rp__name">Dorian Wexley</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="crimson"></span>Health</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-25"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-025</span
              ><span class="bcn-rp__name">Ingrid Solheim</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime
                  operations</span
                ><span class="bcn-rp__more" title="Process and outreach, Health"
                  >+2</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-24"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-024</span
              ><span class="bcn-rp__name">Marcus Delacroix</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="crimson"></span>Health</span
                ><span class="bcn-rp__more" title="Nighttime operations">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-23"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-023</span
              ><span class="bcn-rp__name">Rosalind Pike</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="grass"></span>Noise
                  measurement</span
                ><span class="bcn-rp__more" title="Nighttime operations">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-22"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-022</span
              ><span class="bcn-rp__name">Benjamin Achterberg</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="blue"></span>Flight
                  paths</span
                ><span class="bcn-rp__more" title="Nighttime operations">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-21"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-021</span
              ><span class="bcn-rp__name">Celeste Marquardt</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="slate"></span>Process and
                  outreach</span
                ><span class="bcn-rp__more" title="Nighttime operations, Aircraft noise"
                  >+2</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-20"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-020</span
              ><span class="bcn-rp__name">Hollis Greer</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="crimson"></span>Health</span
                ><span class="bcn-rp__more" title="Flight paths">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-19"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-019</span
              ><span class="bcn-rp__name">Frances Ilyin</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="crimson"></span>Health</span
                ><span
                  class="bcn-rp__more"
                  title="Nighttime operations, Process and outreach"
                  >+2</span
                ></span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-rp__row"
              href="/beacon-design/prototypes/comments/sub-18"
              aria-current="page"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-018</span
              ><span class="bcn-rp__name">Simone Dubrow</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime
                  operations</span
                ><span
                  class="bcn-rp__more"
                  title="Health, Flight paths, Process and outreach"
                  >+3</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-17"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-017</span
              ><span class="bcn-rp__name">Kelsey Arnaud</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="grass"></span>Noise
                  measurement</span
                ><span
                  class="bcn-rp__more"
                  title="Aircraft noise, Flight paths, Process and outreach"
                  >+3</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-16"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-016</span
              ><span class="bcn-rp__name">Minh Vo</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="grass"></span>Noise
                  measurement</span
                ><span class="bcn-rp__more" title="Sound insulation">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-15"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-015</span
              ><span class="bcn-rp__name">Nora Kessling</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="blue"></span>Flight
                  paths</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-14"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-014</span
              ><span class="bcn-rp__name">Grant Holloway</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="blue"></span>Flight
                  paths</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-13"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-013</span
              ><span class="bcn-rp__name">Priya Ramaswamy</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="grass"></span>Noise
                  measurement</span
                ><span class="bcn-rp__more" title="Flight paths">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-12"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-012</span
              ><span class="bcn-rp__name">Evelyn Marchetti</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="slate"></span>Process and
                  outreach</span
                ><span class="bcn-rp__more" title="Aircraft noise, Flight paths"
                  >+2</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-11"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-011</span
              ><span class="bcn-rp__name">Margaret Tolliver</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="blue"></span>Flight
                  paths</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-10"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-010</span
              ><span class="bcn-rp__name">Leonard Fairweather</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="amber"></span>Aircraft
                  noise</span
                ><span class="bcn-rp__more" title="Flight paths">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-09"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-009</span
              ><span class="bcn-rp__name">Owen Castellano, Hillcrest Trail Runners</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="amber"></span>Aircraft
                  noise</span
                ><span class="bcn-rp__more" title="Flight paths">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-08"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-008</span
              ><span class="bcn-rp__name">Evelyn Marchetti</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="slate"></span>Process and
                  outreach</span
                ><span class="bcn-rp__more" title="Aircraft noise">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-07"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-007</span
              ><span class="bcn-rp__name">Walt Brandvold</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="amber"></span>Aircraft
                  noise</span
                ><span class="bcn-rp__more" title="Flight paths">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-06"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-006</span
              ><span class="bcn-rp__name">Walt Brandvold</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="amber"></span>Aircraft
                  noise</span
                ><span class="bcn-rp__more" title="Flight paths">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-05"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-005</span
              ><span class="bcn-rp__name">Darlene Vukovich</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="orange"></span>Sound
                  insulation</span
                ></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-04"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-004</span
              ><span class="bcn-rp__name">Harriet Okafor</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="amber"></span>Aircraft
                  noise</span
                ><span class="bcn-rp__more" title="Flight paths">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-03"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-003</span
              ><span class="bcn-rp__name">Theo Lindqvist</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="amber"></span>Aircraft
                  noise</span
                ><span class="bcn-rp__more" title="Flight paths">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-02"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__glyph" data-state="done" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span></span
              ><span class="bcn-rp__no">S-002</span
              ><span class="bcn-rp__name"
                >Gordon Ashby, South Sound Clean Skies Alliance</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="done">Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="grass"></span>Noise
                  measurement</span
                ><span class="bcn-rp__more" title="Health">+1</span></span
              ></a
            >
          </li>
          <li>
            <a class="bcn-rp__row" href="/beacon-design/prototypes/comments/sub-01"
              ><span class="bcn-rp__mark"
                ><span class="bcn-rp__unread" aria-hidden="true"></span></span
              ><span class="bcn-rp__no">S-001</span
              ><span class="bcn-rp__name">Lorraine Whitcomb</span
              ><span class="bcn-rp__meta"
                ><span class="bcn-rp__status" data-state="open">Not Reviewed</span
                ><span class="bcn-rp__topic"
                  ><span class="bcn-topic-dot" data-family="grass"></span>Noise
                  measurement</span
                ></span
              ></a
            >
          </li>
        </ul>
      </div></esa-side-dialog
    >
  </div>
  <script
    type="module"
    src="/beacon-design/_astro/BcnRecordPager.astro_astro_type_script_index_0_lang.DsejG3QA.js"
  ></script>
</div>
```

## Styles
```css
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.bcn-topic-dot {
  background: var(--_ink, var(--bcn-topic-slate-ink));
  border-radius: 50%;
  flex: none;
  width: 0.625rem;
  height: 0.625rem;
  display: inline-block;
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="amber"] {
  --_ink: var(--bcn-topic-amber-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="blue"] {
  --_ink: var(--bcn-topic-blue-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="violet"] {
  --_ink: var(--bcn-topic-violet-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="grass"] {
  --_ink: var(--bcn-topic-grass-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="orange"] {
  --_ink: var(--bcn-topic-orange-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="crimson"] {
  --_ink: var(--bcn-topic-crimson-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="slate"] {
  --_ink: var(--bcn-topic-slate-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="none"] {
  --_ink: var(--color-content-default-tertiary);
}
.bcn-topic-dot[data-shade] {
  background: var(--_hl);
  box-shadow: inset 0 0 0 1.5px var(--_ink);
}
.bcn-topic-dot[data-family="none"] {
  box-shadow: none;
  border: 1.5px dashed var(--_ink);
  background: 0 0;
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="1"] {
  --_hl: var(--bcn-topic-amber-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="2"] {
  --_hl: var(--bcn-topic-amber-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="3"] {
  --_hl: var(--bcn-topic-amber-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="4"] {
  --_hl: var(--bcn-topic-amber-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="1"] {
  --_hl: var(--bcn-topic-blue-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="2"] {
  --_hl: var(--bcn-topic-blue-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="3"] {
  --_hl: var(--bcn-topic-blue-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="4"] {
  --_hl: var(--bcn-topic-blue-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="1"] {
  --_hl: var(--bcn-topic-violet-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="2"] {
  --_hl: var(--bcn-topic-violet-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="3"] {
  --_hl: var(--bcn-topic-violet-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="4"] {
  --_hl: var(--bcn-topic-violet-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="1"] {
  --_hl: var(--bcn-topic-grass-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="2"] {
  --_hl: var(--bcn-topic-grass-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="3"] {
  --_hl: var(--bcn-topic-grass-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="4"] {
  --_hl: var(--bcn-topic-grass-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="1"] {
  --_hl: var(--bcn-topic-orange-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="2"] {
  --_hl: var(--bcn-topic-orange-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="3"] {
  --_hl: var(--bcn-topic-orange-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="4"] {
  --_hl: var(--bcn-topic-orange-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="1"] {
  --_hl: var(--bcn-topic-crimson-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="2"] {
  --_hl: var(--bcn-topic-crimson-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="3"] {
  --_hl: var(--bcn-topic-crimson-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="4"] {
  --_hl: var(--bcn-topic-crimson-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="1"] {
  --_hl: var(--bcn-topic-slate-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="2"] {
  --_hl: var(--bcn-topic-slate-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="3"] {
  --_hl: var(--bcn-topic-slate-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="4"] {
  --_hl: var(--bcn-topic-slate-4);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.bcn-rp {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-rp__body {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-rp__list {
  margin: 0 calc(-1 * var(--spacing-200));
  padding: 0;
  list-style: none;
}
.bcn-rp .bcn-rp__row {
  column-gap: var(--spacing-200);
  padding: var(--spacing-200);
  border-radius: var(--radius-md);
  color: var(--color-content-default);
  grid-template-columns: 1rem 3.75rem minmax(0, 1fr);
  align-items: baseline;
  row-gap: 2px;
  text-decoration: none;
  display: grid;
}
.bcn-rp .bcn-rp__row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-rp .bcn-rp__row[aria-current] {
  background: var(--color-background-elevation-sunken);
  box-shadow: inset 0 0 0 1px var(--color-border-default);
}
.bcn-rp .bcn-rp__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-rp .bcn-rp__mark {
  justify-content: center;
  align-self: center;
  display: inline-flex;
}
.bcn-rp .bcn-rp__unread {
  background: var(--color-background-brand);
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
}
.bcn-rp .bcn-rp__glyph {
  color: var(--color-content-secondary);
  display: inline-flex;
}
.bcn-rp .bcn-rp__glyph[data-state="done"] {
  color: var(--color-content-success, var(--color-content-default));
}
.bcn-rp .bcn-rp__no {
  font-size: var(--typography-label-sm-font-size);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-secondary);
}
.bcn-rp .bcn-rp__name {
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-font-weight-medium, 500);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-rp .bcn-rp__row[aria-current] .bcn-rp__name {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-rp .bcn-rp__meta {
  align-items: center;
  gap: var(--spacing-100) var(--spacing-300);
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-content-secondary);
  flex-wrap: wrap;
  grid-column: 3;
  display: flex;
}
.bcn-rp .bcn-rp__status[data-state="open"] {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-rp .bcn-rp__topic {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.page-layout__utilities {
  gap: var(--spacing-200);
  display: flex;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--bcn-topic-amber-1`: #ffee9c _(component)_
- `--bcn-topic-amber-2`: #f3d673 _(component)_
- `--bcn-topic-amber-3`: #e9c162 _(component)_
- `--bcn-topic-amber-4`: #e2a336 _(component)_
- `--bcn-topic-amber-ink`: #ab6400 _(component)_
- `--bcn-topic-blue-1`: #d5efff _(component)_
- `--bcn-topic-blue-2`: #acd8fc _(component)_
- `--bcn-topic-blue-3`: #8ec8f6 _(component)_
- `--bcn-topic-blue-4`: #5eb1ef _(component)_
- `--bcn-topic-blue-ink`: #0d74ce _(component)_
- `--bcn-topic-crimson-1`: #fedce7 _(component)_
- `--bcn-topic-crimson-2`: #f3bed1 _(component)_
- `--bcn-topic-crimson-3`: #eaacc3 _(component)_
- `--bcn-topic-crimson-4`: #e093b2 _(component)_
- `--bcn-topic-crimson-ink`: #cb1d63 _(component)_
- `--bcn-topic-grass-1`: #daf1db _(component)_
- `--bcn-topic-grass-2`: #b2ddb5 _(component)_
- `--bcn-topic-grass-3`: #94ce9a _(component)_
- `--bcn-topic-grass-4`: #65ba74 _(component)_
- `--bcn-topic-grass-ink`: #2a7e3b _(component)_
- `--bcn-topic-orange-1`: #ffdfb5 _(component)_
- `--bcn-topic-orange-2`: #ffc182 _(component)_
- `--bcn-topic-orange-3`: #f5ae73 _(component)_
- `--bcn-topic-orange-4`: #ec9455 _(component)_
- `--bcn-topic-orange-ink`: #cc4e00 _(component)_
- `--bcn-topic-slate-1`: #e0e1e6 _(component)_
- `--bcn-topic-slate-2`: #d9d9e0 _(component)_
- `--bcn-topic-slate-3`: #cdced6 _(component)_
- `--bcn-topic-slate-4`: #b9bbc6 _(component)_
- `--bcn-topic-slate-ink`: #60646c _(component)_
- `--bcn-topic-violet-1`: #ebe4ff _(component)_
- `--bcn-topic-violet-2`: #d4cafe _(component)_
- `--bcn-topic-violet-3`: #c2b5f5 _(component)_
- `--bcn-topic-violet-4`: #aa99ec _(component)_
- `--bcn-topic-violet-ink`: #6550b9 _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-secondary`: #525252 _(component)_
- `--color-content-success`: #218358 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
