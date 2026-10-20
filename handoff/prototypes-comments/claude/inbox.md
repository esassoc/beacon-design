# Inbox

Every submission as a mail-style inbox grouped by month: unread mark, number, submitter, the opening of the text, its topics as overlapping dots, and the date. Tabs (esa-tab-layout with icons): Inbox and Topic index (the Lists view-tab pattern; ?view=topic keeps the choice).

## Key decisions
- Dots overlap by half, each ringed in the row surface: the two most commented topics, then a small "+N" chip in the same stack. Hovering or focusing the stack opens a legend (esa-popover) of EVERY topic in the submission with its comment count.
- The list does not clip overflow, so the legend can hang out of the first row; the end rows round their own corners.
- Read state works like mail: a submission not yet reviewed carries a brand dot in the gutter; reviewed rows go quiet in secondary ink. No per-row comment counts.
- The opening of the submission is the row's content, set a step heavier (medium) than body text.
- Topic color = hue family, subtopic = shade, from --bcn-topic-* in theme-beacon.css via the shared bcn-comment-topics.css.

## Done when
- After accepting a response, its submissions lose the unread dot and go quiet.

## Markup
```html
<div
  class="bcn-si stack"
  data-gap="md"
  data-inbox=""
  data-base="/beacon-design/prototypes/comments"
>
  <esa-tab-layout
    appearance="underline"
    size="sm"
    data-inbox-tabs="true"
    variant="underline"
  ></esa-tab-layout>
  <div data-inbox-body="">
    <div class="bcn-si__months">
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">September 2026</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-29"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-029</span
              ><span class="bcn-si__who typography-body-md">Anton Kowalczyk</span
              ><span class="bcn-si__text typography-body-md"
                >I have reached out to Sea-Tac, the Port's noise office and port officials
                many times, and left messages and emails that never got an answer, about
                the growing late night noise over central Seattle. Most of the time it's
                hard to bear all day, and worse when it runs all night, as it did the past
                two nights at 2:30 and 1:30 in the morning. We have never dealt with this
                much intrusion or this many loud, low planes as in recent months. Late
                night noise limits plainly aren't working, and how could they when they're
                voluntary? Where is the concern for the people of this city, for our
                health, our rest and the basic quiet everyone is owed, now taken from us
                by four busy flight paths overhead? This cannot continue, grow or become
                permanent while thousands of people suffer mentally and physically and
                lose sleep night after night. Planes overnight, then nonstop before 5
                a.m.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Process and outreach, Nighttime operations, Flight paths, Health"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="slate"></span
                    ><span class="bcn-topic-dot" data-family="violet"></span
                    ><span class="bcn-si__more">+2</span></span
                  >
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Sep 19</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-28"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-028</span
              ><span class="bcn-si__who typography-body-md">Gwen Halvorsen</span
              ><span class="bcn-si__text typography-body-md"
                >I've lived in central Seattle for more than twenty years, and I'm
                dismayed by how things have changed, aircraft noise in particular. We
                chose our neighborhood because it was quiet and calm, until Sea-Tac made
                it unbearable with new flight paths and loud, frequent, low planes all
                night, and then expected residents to just live with it. The voluntary
                late night noise program is clearly a joke and clearly not working, or we
                wouldn't be woken several times a night: after midnight, at 1, 2 and 3,
                and usually nonstop from 4. So where is the voluntary limit on overnight
                traffic? Isn't it time it was enforced and monitored, instead of letting
                airlines decide whether to bother? Twice this week I watched planes come
                over from three directions during the day, one after another. I urge your
                noise assessment to take all of this in, end overnight flights over dense
                neighborhoods, cut the frequent loud flights day and night, and for once
                put this community's wellbeing first. We need capable people who listen,
                respond and act, not the complacency of an airport that offers nothing but
                excuses, when it responds at all. Callous, arrogant and out of
                touch.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Nighttime operations, Aircraft noise, Process and outreach"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="violet"></span
                    ><span class="bcn-topic-dot" data-family="amber"></span
                    ><span class="bcn-si__more">+1</span></span
                  >
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Sep 13</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-27"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-027</span
              ><span class="bcn-si__who typography-body-md">Yvette Garrow</span
              ><span class="bcn-si__text typography-body-md"
                >If repeated complaints have told you that the flights around 1:45 to 2
                a.m. wake everyone here, on top of the other overnight planes that now
                come every single night, why is it so hard to accept that your late night
                noise program, whatever it is, isn't adequate and isn't working? A
                voluntary program is absurd, and it needs enforcement. Shifting flight
                paths so that we absorb the overnight noise and the constant broken sleep,
                and then the daytime traffic on top, is inhumane. Planes run all night and
                are going full tilt by 4:45. Things must change, and this community's
                rights and needs deserve respect, not more of the same.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Nighttime operations, Health"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="violet"></span
                    ><span class="bcn-topic-dot" data-family="crimson"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Sep 4</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">August 2026</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-26"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-026</span
              ><span class="bcn-si__who typography-body-md">Dorian Wexley</span
              ><span class="bcn-si__text typography-body-md"
                >Overnight flights keep increasing. I can't remember the last time any of
                us living in the neighborhoods on the hill east of downtown got a full
                night's sleep without being jolted awake by loud planes. Last night it was
                midnight, 1:30, 3:15 and then steadily from 4:45. That's now normal, on
                top of daytime noise from four directions with only seconds between
                planes, plus helicopters and seaplanes. Thanks to Sea-Tac's careless
                flight path changes, our community has become miserable.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Health"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="crimson"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">3</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Aug 28</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-25"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-025</span
              ><span class="bcn-si__who typography-body-md">Ingrid Solheim</span
              ><span class="bcn-si__text typography-body-md"
                >I have lived in Seattle, and in this neighborhood, for a very long time,
                and I'm dismayed by how much noise has grown over the past year,
                especially late at night. Sea-Tac promotes its Late Night Noise program,
                which looks like lip service meant to show it is doing something about
                noise. Meanwhile we are now woken several times every night by loud
                planes, around 12:30, 1:30, 2, 3:30 and 4, and then continuously after 4.
                It isn't hard to see that nobody here is sleeping. It keeps getting worse.
                No one at Sea-Tac takes responsibility; they pass it to another person,
                another agency or another excuse. First it was that the paths get more use
                in summer. Before that I was told summer is usually quieter because of the
                wind. Who runs this airport, who is directing planes that seem to fly
                wherever and whenever they like, and who is reading the many complaints
                you get from the public? This cannot go on, loud around the clock,
                frequently from three sides at the same time. You are causing serious
                health problems, and it's time this was dealt with properly.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Nighttime operations, Process and outreach, Health"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="violet"></span
                    ><span class="bcn-topic-dot" data-family="slate"></span
                    ><span class="bcn-si__more">+1</span></span
                  >
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Aug 22</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-24"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-024</span
              ><span class="bcn-si__who typography-body-md">Marcus Delacroix</span
              ><span class="bcn-si__text typography-body-md"
                >I am disgusted and furious that overnight flights over our neighborhood
                keep increasing and getting worse! I work 65 hours a week and hardly sleep
                because of the loud planes all night. In the daytime they're constant and
                come from four directions, often several at once. Nobody should have to
                live like this. Whatever has drifted away from the late night noise
                program (which, absurdly, is voluntary) has to be reversed now. Chronic
                loud noise causes serious mental and physical harm: lost sleep, anxiety,
                irritability, raised blood pressure and heart disease, and Sea-Tac's
                terrible planning and traffic management are behind it. Change these
                flight paths, stop the overnight flights and widen the gaps between
                daytime arrivals too. The way this has been handled and ignored is
                shameful. Does anyone think about those of us living under it? Are we
                meant to just take it? I don't think so.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Health, Nighttime operations"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="crimson"></span
                    ><span class="bcn-topic-dot" data-family="violet"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Aug 15</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-23"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-023</span
              ><span class="bcn-si__who typography-body-md">Rosalind Pike</span
              ><span class="bcn-si__text typography-body-md"
                >I've lived in this part of central Seattle for years, drawn by its
                history and its calm. I've watched flight paths multiply until planes
                cross directly overhead from every direction. The loop from south to north
                and back again is absurd and only piles onto the noise we already get from
                jets, seaplanes and helicopters. It used to be daytime only; for the past
                few months it has been all night too. Sea-Tac tells us there's a late
                night noise limitation program. Where is it, and who enforces it? It's
                voluntary! What kind of management lets airlines choose where they fly?
                Last night, for example, we barely slept: loud planes with landing gear
                down at midnight, 1, 2, three in a row at 3:20, then 4 a.m. and nonstop
                since. Where does sleep fit into that? We have kids and jobs, we need rest
                and quiet like anyone in this city, and instead we are at the mercy of an
                airport that is inefficient, badly run and indifferent to the people who
                live under it. If you are doing a noise study, start paying attention and
                fix this.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Nighttime operations, Noise measurement"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="violet"></span
                    ><span class="bcn-topic-dot" data-family="grass"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="grass"></span
                      ><span>Noise measurement</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Aug 8</span></a
            >
          </li>
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-22"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-022</span
              ><span class="bcn-si__who typography-body-md">Benjamin Achterberg</span
              ><span class="bcn-si__text typography-body-md"
                >Subject: Request to study noise-abatement options for north-flow
                departures over central Seattle</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Flight paths, Nighttime operations"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="blue"></span
                    ><span class="bcn-topic-dot" data-family="violet"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Aug 5</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-21"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-021</span
              ><span class="bcn-si__who typography-body-md">Celeste Marquardt</span
              ><span class="bcn-si__text typography-body-md"
                >As your noise work continues, I have to ask why noise over central
                Seattle keeps getting worse. Is that the plan? Complaint after complaint
                to Sea-Tac and the FAA goes nowhere. More flight paths, especially
                overnight, have caused severe distress, broken sleep, and physical and
                mental health problems from round-the-clock noise, and sleep is
                fundamental to staying healthy. That has been taken from us by loud planes
                all night long. There is reliably a flight at 2 a.m., and at 3 and at 1,
                and from 4 a.m. on it never stops.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Nighttime operations, Process and outreach, Aircraft noise"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="violet"></span
                    ><span class="bcn-topic-dot" data-family="slate"></span
                    ><span class="bcn-si__more">+1</span></span
                  >
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Aug 1</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">July 2026</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-20"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-020</span
              ><span class="bcn-si__who typography-body-md">Hollis Greer</span
              ><span class="bcn-si__text typography-body-md"
                >Loud, steady traffic from four flight paths over our neighborhood and the
                surrounding area has grown to an unbearable level. Planes flying all night
                are now routine, which means little or no sleep and real damage to our
                health and ability to function. For a full week we have not had a single
                night or day without loud planes, one after another, seconds apart. We
                have never seen air traffic like this, and it is not reasonable to expect
                one part of the city to carry it all and simply accept it. Your noise
                assessment has to be genuine, and you have to hear people when they say
                this cannot go on. I will not let the airport push me out of my home
                through careless planning and poor management.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Health, Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="crimson"></span
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jul 27</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-19"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-019</span
              ><span class="bcn-si__who typography-body-md">Frances Ilyin</span
              ><span class="bcn-si__text typography-body-md"
                >The number of planes over our part of central Seattle has become
                unbearable. When I moved here more than 20 years ago, I barely noticed
                aircraft and could sleep with the windows open. Not anymore. Planes
                through the night have brought me worsening migraines, constant anxiety
                and a short temper. I can't function properly, and neither can my family
                or neighbors, because our sleep is broken again and again, which is
                honestly a kind of torture. Loud planes reach us around the clock, often
                from several directions at once. Whatever Sea-Tac has under review, our
                neighborhood cannot take more noise or more flights, and overnight flights
                in particular have to come down sharply. This is harming people's lives
                and it is not acceptable. It would also help if someone picked up the
                phone, so we could talk to a person instead of leaving messages and emails
                that go nowhere.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Health, Nighttime operations, Process and outreach"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="crimson"></span
                    ><span class="bcn-topic-dot" data-family="violet"></span
                    ><span class="bcn-si__more">+1</span></span
                  >
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jul 23</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-18"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-018</span
              ><span class="bcn-si__who typography-body-md">Simone Dubrow</span
              ><span class="bcn-si__text typography-body-md"
                >I've lived in central Seattle for many years and have watched the number
                of planes overhead climb, with roughly four flight paths now in use. There
                is a new pattern of planes all night, at about 1:30, 2 and 4 a.m. and then
                steadily after that, sometimes only seconds apart. My sleep has been
                broken for months, and I've had illness, anxiety, stress, headaches and
                trouble getting through the day, plus the long-term health risks of loud
                noise and lost sleep, all because of Sea-Tac and the growing number of
                flights at every hour.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Nighttime operations, Health, Flight paths, Process and outreach"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="violet"></span
                    ><span class="bcn-topic-dot" data-family="crimson"></span
                    ><span class="bcn-si__more">+2</span></span
                  >
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="violet"></span
                      ><span>Nighttime operations</span
                      ><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jul 18</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">June 2026</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-17"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-017</span
              ><span class="bcn-si__who typography-body-md">Kelsey Arnaud</span
              ><span class="bcn-si__text typography-body-md"
                >Noise measurement needs to extend into the communities north of the
                Seattle city line, on both sides of the I-5 corridor.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Flight paths, Noise measurement, Aircraft noise, Process and outreach"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="blue"></span
                    ><span class="bcn-topic-dot" data-family="grass"></span
                    ><span class="bcn-si__more">+2</span></span
                  >
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="grass"></span
                      ><span>Noise measurement</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jun 26</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">March 2026</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-16"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-016</span
              ><span class="bcn-si__who typography-body-md">Minh Vo</span
              ><span class="bcn-si__text typography-body-md"
                >I am formally asking the SEA Part 150 Study to revisit the DNL 65 contour
                line along the southern corridor.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Sound insulation, Noise measurement"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="orange"></span
                    ><span class="bcn-topic-dot" data-family="grass"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="orange"></span
                      ><span>Sound insulation</span
                      ><span class="bcn-si__legend-n">3</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="grass"></span
                      ><span>Noise measurement</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Mar 22</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">February 2026</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-15"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-015</span
              ><span class="bcn-si__who typography-body-md">Nora Kessling</span
              ><span class="bcn-si__text typography-body-md"
                >Northeast Seattle deserves relief from the deafening arrival stream that
                passes right over our house, sometimes every few minutes as planes line up
                to land. Outside, we have to stop talking because we can't hear each
                other. Please think about moving the path out over the water, where it
                would affect fewer people.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Feb 10</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">January 2026</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-14"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-014</span
              ><span class="bcn-si__who typography-body-md">Grant Holloway</span
              ><span class="bcn-si__text typography-body-md"
                >Most arrivals into Sea-Tac follow the region's north-south spine,
                starting north of the city line and running south over a long string of
                Seattle neighborhoods. Everyone underneath gets an almost unbroken wash of
                noise. Plenty of mitigation options deserve a look to ease that
                concentrated, constant burden, including:</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">3</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jan 17</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-13"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-013</span
              ><span class="bcn-si__who typography-body-md">Priya Ramaswamy</span
              ><span class="bcn-si__text typography-body-md"
                >To the Part 150 Study team,</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Noise measurement, Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="grass"></span
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="grass"></span
                      ><span>Noise measurement</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jan 16</span></a
            >
          </li>
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-12"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-012</span
              ><span class="bcn-si__who typography-body-md">Evelyn Marchetti</span
              ><span class="bcn-si__text typography-body-md">Hello Port staff,</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Process and outreach, Aircraft noise, Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="slate"></span
                    ><span class="bcn-topic-dot" data-family="amber"></span
                    ><span class="bcn-si__more">+1</span></span
                  >
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jan 14</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">September 2025</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-11"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-011</span
              ><span class="bcn-si__who typography-body-md">Margaret Tolliver</span
              ><span class="bcn-si__text typography-body-md">Hello,</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">2</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Sep 30</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-10"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-010</span
              ><span class="bcn-si__who typography-body-md">Leonard Fairweather</span
              ><span class="bcn-si__text typography-body-md"
                >Hello. My home is in north Seattle. In the 40 years I've lived here, the
                number of low aircraft on final approach to Sea-Tac has grown enormously,
                and so has the noise, which has worn on my family and many of our
                neighbors. We would be grateful if the FAA would consider shifting some of
                these arrivals over Elliott Bay so our neighborhood, and our health, get
                some relief. I accept that everyone has to absorb some share of arriving
                traffic, but what passes right over us is a lot. Thank you for considering
                this.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Flight paths, Aircraft noise"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="blue"></span
                    ><span class="bcn-topic-dot" data-family="amber"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Sep 30</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-09"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-009</span
              ><span class="bcn-si__who typography-body-md"
                >Owen Castellano<span class="bcn-si__org"
                  >, Hillcrest Trail Runners</span
                ></span
              ><span class="bcn-si__text typography-body-md"
                >Our club meets for a group run from a large park on the hill every
                Wednesday evening, and planes passing directly overhead regularly drown
                out whoever is trying to talk, which by then means shouting. Other events
                in the park, an open-air theater among them, get interrupted the same way.
                Flight paths should not run over our hill.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Aircraft noise, Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="amber"></span
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Sep 17</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">August 2025</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-08"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-008</span
              ><span class="bcn-si__who typography-body-md">Evelyn Marchetti</span
              ><span class="bcn-si__text typography-body-md"
                >Hello to the study team,</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Process and outreach, Aircraft noise"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="slate"></span
                    ><span class="bcn-topic-dot" data-family="amber"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="slate"></span
                      ><span>Process and outreach</span
                      ><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Aug 12</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">July 2025</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-07"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-007</span
              ><span class="bcn-si__who typography-body-md">Walt Brandvold</span
              ><span class="bcn-si__text typography-body-md"
                >An enormous jet just passed over our neighborhood at 6:58 this morning
                and it was INCREDIBLY LOUD. This happens most mornings when departures
                head south and bank west. Why can't they gain more altitude before the
                turn?</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Aircraft noise, Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="amber"></span
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jul 25</span></a
            >
          </li>
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-06"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-006</span
              ><span class="bcn-si__who typography-body-md">Walt Brandvold</span
              ><span class="bcn-si__text typography-body-md"
                >When planes leave Sea-Tac to the south and then swing west, I have to
                stop talking whenever I'm outside in our neighborhood until they pass.
                747s and the big twin-engine jets are the worst. Couldn't southbound
                departures continue farther south and climb much higher before turning
                west? Then hardly anyone would be affected.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Aircraft noise, Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="amber"></span
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">1</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jul 24</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">December 2024</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-05"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-005</span
              ><span class="bcn-si__who typography-body-md">Darlene Vukovich</span
              ><span class="bcn-si__text typography-body-md"
                >Our home was part of the original window and insulation program for noise
                reduction, but after nearly 40 years all of it has worn out. How do we get
                on the list to have the windows and insulation replaced?</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Sound insulation"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="orange"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="orange"></span
                      ><span>Sound insulation</span
                      ><span class="bcn-si__legend-n">2</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Dec 2</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">October 2024</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-04"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-004</span
              ><span class="bcn-si__who typography-body-md">Harriet Okafor</span
              ><span class="bcn-si__text typography-body-md"
                >On some days I have clocked LOUD, LOW JETS passing over our home once a
                minute, and they come from more than one direction.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Aircraft noise, Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="amber"></span
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Oct 23</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">September 2024</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-03"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-003</span
              ><span class="bcn-si__who typography-body-md">Theo Lindqvist</span
              ><span class="bcn-si__text typography-body-md"
                >Low-flying aircraft over our part of central Seattle are close to nonstop
                and very loud. We live a couple of blocks from a large park on the hill,
                and the noise there is just as bad. Flights come so often that the next
                one is audible before the last has faded. Weekdays, weekends, daytime and
                night, it feels like living at the end of a runway, or beside a
                freeway.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Aircraft noise, Flight paths"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="amber"></span
                    ><span class="bcn-topic-dot" data-family="blue"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="amber"></span
                      ><span>Aircraft noise</span><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="blue"></span
                      ><span>Flight paths</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Sep 8</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">July 2024</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a class="bcn-si__row" href="/beacon-design/prototypes/comments/sub-02"
              ><span class="bcn-si__mark"></span
              ><span class="bcn-si__key typography-body-sm">S-002</span
              ><span class="bcn-si__who typography-body-md"
                >Gordon Ashby<span class="bcn-si__org"
                  >, South Sound Clean Skies Alliance</span
                ></span
              ><span class="bcn-si__text typography-body-md"
                >Moving ahead with DNL 65 makes no sense when the FAA's own national
                survey work has concluded it does not adequately capture annoyance, and
                the agency is still evaluating alternative metrics.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Noise measurement, Health"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="grass"></span
                    ><span class="bcn-topic-dot" data-family="crimson"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="grass"></span
                      ><span>Noise measurement</span
                      ><span class="bcn-si__legend-n">2</span>
                    </li>
                    <li>
                      <span class="bcn-topic-dot" data-family="crimson"></span
                      ><span>Health</span><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jul 28</span></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-si__month">
        <h3 class="bcn-si__group typography-label-sm-strong">June 2024</h3>
        <ul class="bcn-si__list" role="list">
          <li>
            <a
              class="bcn-si__row"
              href="/beacon-design/prototypes/comments/sub-01"
              data-unread=""
              ><span class="bcn-si__mark"
                ><span class="bcn-si__unread"></span
                ><span class="visually-hidden">Not Reviewed</span></span
              ><span class="bcn-si__key typography-body-sm">S-001</span
              ><span class="bcn-si__who typography-body-md">Lorraine Whitcomb</span
              ><span class="bcn-si__text typography-body-md"
                >Please make sure the modeling covers every flight path in use, including
                the routes aircraft take when traffic is diverted.</span
              ><span class="bcn-si__topics"
                ><esa-popover
                  trigger="hover"
                  position="bottom"
                  class="bcn-si__stack"
                  appearance="default"
                  ><span
                    class="bcn-si__dots"
                    tabindex="0"
                    aria-label="Noise measurement"
                    aria-expanded="false"
                    ><span class="bcn-topic-dot" data-family="grass"></span
                  ></span>
                  <ul
                    slot="content"
                    class="bcn-si__legend typography-body-sm"
                    role="list"
                  >
                    <li>
                      <span class="bcn-topic-dot" data-family="grass"></span
                      ><span>Noise measurement</span
                      ><span class="bcn-si__legend-n">1</span>
                    </li>
                  </ul></esa-popover
                ></span
              ><span class="bcn-si__date typography-body-sm">Jun 6</span></a
            >
          </li>
        </ul>
      </section>
    </div>
  </div>
  <div data-inbox-topic="" hidden="">
    <section
      class="bcn-cbt stack"
      data-gap="xs"
      data-by-topic=""
      data-base="/beacon-design/prototypes/comments"
    >
      <div class="bcn-ap" data-aldo-prompt="">
        <div class="bcn-ap__bar">
          <button
            type="button"
            class="bcn-ap__open"
            aria-expanded="false"
            data-ap-open=""
          >
            <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
              ><span class="bcn-aldo-mark__glyph"
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path
                      d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                    ></path>
                    <circle cx="12" cy="12" r="10"></circle></svg></span></span></span
            ><span class="bcn-ap__prompt typography-label-md-strong"
              >Give Aldo guidance on your topic index</span
            ></button
          ><span class="bcn-ap__result typography-body-sm" data-ap-result="" hidden=""
            ><span data-ap-result-text=""></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-ap-undo="true"
              >
                <span class="esa-button__label">Undo</span>
              </button></span
            ></span
          >
        </div>
        <div
          class="bcn-ap__card"
          role="dialog"
          aria-label="Guide the Topic Index"
          data-ap-card=""
          hidden=""
        >
          <div class="bcn-ap__shimmer" aria-hidden="true"></div>
          <div class="bcn-ap__head">
            <span data-ap-mark=""
              ><span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
                ><span class="bcn-aldo-mark__glyph"
                  ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                    ><svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path
                        d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                      ></circle></svg></span></span></span></span
            ><span class="typography-label-md-strong">Guide the Topic Index</span
            ><span class="bcn-ap__close"
              ><span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Close"
                  title="Close"
                  data-ap-close="true"
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
                      focusable="false"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path></svg
                  ></span></button></span
            ></span>
          </div>
          <esa-textarea
            class="bcn-ap__input"
            size="lg"
            rows="2"
            max-rows="10"
            auto-resize=""
            aria-label="Guidance for the Topic Index"
            placeholder="e.g. Split nighttime operations by hour, and file vibration under health"
            data-ap-input="true"
          ></esa-textarea>
          <div class="bcn-ap__foot">
            <span class="bcn-ap__context typography-body-sm" data-ap-context=""></span
            ><span class="bcn-ap__keys typography-body-sm" aria-hidden="true"
              >⌘ Enter</span
            ><span class="bcn-ap__send"
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--icon-only esa-button--disabled"
                ><button
                  class="esa-button__native typography-microcopy-md"
                  type="button"
                  aria-label="Send guidance"
                  title="Send guidance"
                  data-ap-send="true"
                  disabled=""
                >
                  <span class="esa-icon esa-icon--md" aria-hidden="true"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path></svg
                  ></span></button></span
            ></span>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="/beacon-design/_astro/BcnAldoPrompt.astro_astro_type_script_index_0_lang.lURGRDHI.js"
      ></script>
      <div class="bcn-cbt__tools">
        <span class="bcn-cbt__status typography-body-sm" data-cbt-status="" hidden=""
          ><span data-cbt-status-text=""></span
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-cbt-undo="true"
            >
              <span class="esa-button__label">Undo</span>
            </button></span
          ></span
        ><span class="bcn-cbt__verbs"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              data-cbt-expand="true"
            >
              <span class="esa-button__label">Expand All</span>
            </button></span
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              data-cbt-collapse="true"
            >
              <span class="esa-button__label">Collapse All</span>
            </button></span
          ></span
        >
      </div>
      <div class="bcn-cbt__list" data-cbt-list="">
        <section class="bcn-cbt__cat" data-cbt-topic="noise">
          <div class="bcn-cbt__row bcn-cbt__row--cat">
            <span class="bcn-topic-dot" data-family="amber"></span
            ><span class="bcn-cbt__name" data-cbt-name="noise">Aircraft noise</span
            ><span class="bcn-cbt__verbs"
              ><esa-tooltip text="Rename" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Rename"
                  data-cbt-rename="noise"
                >
                  <svg
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Delete" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                  aria-label="Delete"
                  data-cbt-delete="noise"
                >
                  <svg
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Lock" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Lock"
                  data-cbt-lock="noise"
                  aria-pressed="false"
                >
                  <svg
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
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Add Subtopic" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb"
                  aria-label="Add Subtopic"
                  data-cbt-add="noise"
                >
                  <svg
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg></button></esa-tooltip
            ></span>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="noise-frequency">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="noise-frequency">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Frequency of overflights"
                data-cbt-toggle="noise-frequency"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="amber" data-shade="1"></span
              ><span class="bcn-cbt__name" data-cbt-name="noise/noise-frequency"
                >Frequency of overflights</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="noise/noise-frequency"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="noise/noise-frequency"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="noise/noise-frequency"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="noise-altitude">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="noise-altitude">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Low-altitude flights"
                data-cbt-toggle="noise-altitude"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="amber" data-shade="2"></span
              ><span class="bcn-cbt__name" data-cbt-name="noise/noise-altitude"
                >Low-altitude flights</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="noise/noise-altitude"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="noise/noise-altitude"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="noise/noise-altitude"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="noise-outdoor">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="noise-outdoor">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Disruption outdoors"
                data-cbt-toggle="noise-outdoor"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="amber" data-shade="3"></span
              ><span class="bcn-cbt__name" data-cbt-name="noise/noise-outdoor"
                >Disruption outdoors</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="noise/noise-outdoor"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="noise/noise-outdoor"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="noise/noise-outdoor"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="noise-increase">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="noise-increase">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Increase over time"
                data-cbt-toggle="noise-increase"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="amber" data-shade="4"></span
              ><span class="bcn-cbt__name" data-cbt-name="noise/noise-increase"
                >Increase over time</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="noise/noise-increase"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="noise/noise-increase"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="noise/noise-increase"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
        </section>
        <section class="bcn-cbt__cat" data-cbt-topic="paths">
          <div class="bcn-cbt__row bcn-cbt__row--cat">
            <span class="bcn-topic-dot" data-family="blue"></span
            ><span class="bcn-cbt__name" data-cbt-name="paths">Flight paths</span
            ><span class="bcn-cbt__verbs"
              ><esa-tooltip text="Rename" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Rename"
                  data-cbt-rename="paths"
                >
                  <svg
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Delete" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                  aria-label="Delete"
                  data-cbt-delete="paths"
                >
                  <svg
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Lock" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Lock"
                  data-cbt-lock="paths"
                  aria-pressed="false"
                >
                  <svg
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
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Add Subtopic" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb"
                  aria-label="Add Subtopic"
                  data-cbt-add="paths"
                >
                  <svg
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg></button></esa-tooltip
            ></span>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="paths-elliott">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="paths-elliott">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Elliott Bay route"
                data-cbt-toggle="paths-elliott"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="blue" data-shade="1"></span
              ><span class="bcn-cbt__name" data-cbt-name="paths/paths-elliott"
                >Elliott Bay route</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="paths/paths-elliott"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="paths/paths-elliott"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="paths/paths-elliott"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="paths-distribute">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="paths-distribute">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Distribute flights"
                data-cbt-toggle="paths-distribute"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="blue" data-shade="2"></span
              ><span class="bcn-cbt__name" data-cbt-name="paths/paths-distribute"
                >Distribute flights</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="paths/paths-distribute"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="paths/paths-distribute"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="paths/paths-distribute"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="paths-approach">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="paths-approach">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Steeper, higher approaches"
                data-cbt-toggle="paths-approach"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="blue" data-shade="3"></span
              ><span class="bcn-cbt__name" data-cbt-name="paths/paths-approach"
                >Steeper, higher approaches</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="paths/paths-approach"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="paths/paths-approach"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="paths/paths-approach"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="paths-departure">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="paths-departure">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Departure procedures"
                data-cbt-toggle="paths-departure"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="blue" data-shade="4"></span
              ><span class="bcn-cbt__name" data-cbt-name="paths/paths-departure"
                >Departure procedures</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="paths/paths-departure"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="paths/paths-departure"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="paths/paths-departure"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
        </section>
        <section class="bcn-cbt__cat" data-cbt-topic="night">
          <div class="bcn-cbt__row bcn-cbt__row--cat">
            <span class="bcn-topic-dot" data-family="violet"></span
            ><span class="bcn-cbt__name" data-cbt-name="night">Nighttime operations</span
            ><span class="bcn-cbt__verbs"
              ><esa-tooltip text="Rename" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Rename"
                  data-cbt-rename="night"
                >
                  <svg
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Delete" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                  aria-label="Delete"
                  data-cbt-delete="night"
                >
                  <svg
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Lock" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Lock"
                  data-cbt-lock="night"
                  aria-pressed="false"
                >
                  <svg
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
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Add Subtopic" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb"
                  aria-label="Add Subtopic"
                  data-cbt-add="night"
                >
                  <svg
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg></button></esa-tooltip
            ></span>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="night-program">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="night-program">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Late Night Noise Limitation Program"
                data-cbt-toggle="night-program"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="violet" data-shade="1"></span
              ><span class="bcn-cbt__name" data-cbt-name="night/night-program"
                >Late Night Noise Limitation Program</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="night/night-program"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="night/night-program"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="night/night-program"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="night-volume">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="night-volume">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Overnight flights"
                data-cbt-toggle="night-volume"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="violet" data-shade="2"></span
              ><span class="bcn-cbt__name" data-cbt-name="night/night-volume"
                >Overnight flights</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="night/night-volume"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="night/night-volume"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="night/night-volume"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
        </section>
        <section class="bcn-cbt__cat" data-cbt-topic="measure">
          <div class="bcn-cbt__row bcn-cbt__row--cat">
            <span class="bcn-topic-dot" data-family="grass"></span
            ><span class="bcn-cbt__name" data-cbt-name="measure">Noise measurement</span
            ><span class="bcn-cbt__verbs"
              ><esa-tooltip text="Rename" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Rename"
                  data-cbt-rename="measure"
                >
                  <svg
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Delete" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                  aria-label="Delete"
                  data-cbt-delete="measure"
                >
                  <svg
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Lock" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Lock"
                  data-cbt-lock="measure"
                  aria-pressed="false"
                >
                  <svg
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
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Add Subtopic" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb"
                  aria-label="Add Subtopic"
                  data-cbt-add="measure"
                >
                  <svg
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg></button></esa-tooltip
            ></span>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="measure-dnl">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="measure-dnl">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show DNL 65 metric"
                data-cbt-toggle="measure-dnl"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="grass" data-shade="1"></span
              ><span class="bcn-cbt__name" data-cbt-name="measure/measure-dnl"
                >DNL 65 metric</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="measure/measure-dnl"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="measure/measure-dnl"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="measure/measure-dnl"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="measure-contour">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="measure-contour">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Contour and monitoring locations"
                data-cbt-toggle="measure-contour"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="grass" data-shade="2"></span
              ><span class="bcn-cbt__name" data-cbt-name="measure/measure-contour"
                >Contour and monitoring locations</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="measure/measure-contour"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="measure/measure-contour"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="measure/measure-contour"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="measure-tracks">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="measure-tracks">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Modeled flight tracks"
                data-cbt-toggle="measure-tracks"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="grass" data-shade="3"></span
              ><span class="bcn-cbt__name" data-cbt-name="measure/measure-tracks"
                >Modeled flight tracks</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="measure/measure-tracks"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="measure/measure-tracks"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="measure/measure-tracks"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
        </section>
        <section class="bcn-cbt__cat" data-cbt-topic="insulation">
          <div class="bcn-cbt__row bcn-cbt__row--cat">
            <span class="bcn-topic-dot" data-family="orange"></span
            ><span class="bcn-cbt__name" data-cbt-name="insulation">Sound insulation</span
            ><span class="bcn-cbt__verbs"
              ><esa-tooltip text="Rename" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Rename"
                  data-cbt-rename="insulation"
                >
                  <svg
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Delete" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                  aria-label="Delete"
                  data-cbt-delete="insulation"
                >
                  <svg
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Lock" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Lock"
                  data-cbt-lock="insulation"
                  aria-pressed="false"
                >
                  <svg
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
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Add Subtopic" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb"
                  aria-label="Add Subtopic"
                  data-cbt-add="insulation"
                >
                  <svg
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg></button></esa-tooltip
            ></span>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="insulation-repair">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="insulation-repair">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Failed insulation"
                data-cbt-toggle="insulation-repair"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="orange" data-shade="1"></span
              ><span class="bcn-cbt__name" data-cbt-name="insulation/insulation-repair"
                >Failed insulation</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="insulation/insulation-repair"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="insulation/insulation-repair"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="insulation/insulation-repair"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="insulation-eligibility">
            <div
              class="bcn-cbt__row bcn-cbt__row--sub"
              data-cbt-fold="insulation-eligibility"
            >
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Program eligibility"
                data-cbt-toggle="insulation-eligibility"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="orange" data-shade="2"></span
              ><span
                class="bcn-cbt__name"
                data-cbt-name="insulation/insulation-eligibility"
                >Program eligibility</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="insulation/insulation-eligibility"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="insulation/insulation-eligibility"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="insulation/insulation-eligibility"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="insulation-vibration">
            <div
              class="bcn-cbt__row bcn-cbt__row--sub"
              data-cbt-fold="insulation-vibration"
            >
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Structural vibration"
                data-cbt-toggle="insulation-vibration"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="orange" data-shade="3"></span
              ><span class="bcn-cbt__name" data-cbt-name="insulation/insulation-vibration"
                >Structural vibration</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="insulation/insulation-vibration"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="insulation/insulation-vibration"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="insulation/insulation-vibration"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
        </section>
        <section class="bcn-cbt__cat" data-cbt-topic="health">
          <div class="bcn-cbt__row bcn-cbt__row--cat">
            <span class="bcn-topic-dot" data-family="crimson"></span
            ><span class="bcn-cbt__name" data-cbt-name="health">Health</span
            ><span class="bcn-cbt__verbs"
              ><esa-tooltip text="Rename" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Rename"
                  data-cbt-rename="health"
                >
                  <svg
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Delete" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                  aria-label="Delete"
                  data-cbt-delete="health"
                >
                  <svg
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Lock" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Lock"
                  data-cbt-lock="health"
                  aria-pressed="false"
                >
                  <svg
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
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Add Subtopic" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb"
                  aria-label="Add Subtopic"
                  data-cbt-add="health"
                >
                  <svg
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg></button></esa-tooltip
            ></span>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="health-sleep">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="health-sleep">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Sleep disruption"
                data-cbt-toggle="health-sleep"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="crimson" data-shade="1"></span
              ><span class="bcn-cbt__name" data-cbt-name="health/health-sleep"
                >Sleep disruption</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="health/health-sleep"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="health/health-sleep"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="health/health-sleep"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="health-stress">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="health-stress">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Stress and cardiovascular"
                data-cbt-toggle="health-stress"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="crimson" data-shade="2"></span
              ><span class="bcn-cbt__name" data-cbt-name="health/health-stress"
                >Stress and cardiovascular</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="health/health-stress"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="health/health-stress"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="health/health-stress"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="health-air">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="health-air">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Air pollution"
                data-cbt-toggle="health-air"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="crimson" data-shade="3"></span
              ><span class="bcn-cbt__name" data-cbt-name="health/health-air"
                >Air pollution</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="health/health-air"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="health/health-air"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="health/health-air"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
        </section>
        <section class="bcn-cbt__cat" data-cbt-topic="process">
          <div class="bcn-cbt__row bcn-cbt__row--cat">
            <span class="bcn-topic-dot" data-family="slate"></span
            ><span class="bcn-cbt__name" data-cbt-name="process"
              >Process and outreach</span
            ><span class="bcn-cbt__verbs"
              ><esa-tooltip text="Rename" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Rename"
                  data-cbt-rename="process"
                >
                  <svg
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Delete" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                  aria-label="Delete"
                  data-cbt-delete="process"
                >
                  <svg
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Lock" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb bcn-cbt__verb--quiet"
                  aria-label="Lock"
                  data-cbt-lock="process"
                  aria-pressed="false"
                >
                  <svg
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
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg></button></esa-tooltip
              ><esa-tooltip text="Add Subtopic" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-cbt__verb"
                  aria-label="Add Subtopic"
                  data-cbt-add="process"
                >
                  <svg
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg></button></esa-tooltip
            ></span>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="process-responsiveness">
            <div
              class="bcn-cbt__row bcn-cbt__row--sub"
              data-cbt-fold="process-responsiveness"
            >
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Unanswered complaints"
                data-cbt-toggle="process-responsiveness"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="slate" data-shade="1"></span
              ><span class="bcn-cbt__name" data-cbt-name="process/process-responsiveness"
                >Unanswered complaints</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="process/process-responsiveness"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="process/process-responsiveness"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="process/process-responsiveness"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="process-participation">
            <div
              class="bcn-cbt__row bcn-cbt__row--sub"
              data-cbt-fold="process-participation"
            >
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Meeting participation"
                data-cbt-toggle="process-participation"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="slate" data-shade="2"></span
              ><span class="bcn-cbt__name" data-cbt-name="process/process-participation"
                >Meeting participation</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="process/process-participation"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="process/process-participation"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="process/process-participation"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
          <div class="bcn-cbt__sub" data-cbt-sub="process-petition">
            <div class="bcn-cbt__row bcn-cbt__row--sub" data-cbt-fold="process-petition">
              <button
                type="button"
                class="bcn-cbt__chev"
                aria-expanded="false"
                aria-label="Show Petitions"
                data-cbt-toggle="process-petition"
              >
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg></button
              ><span class="bcn-topic-dot" data-family="slate" data-shade="3"></span
              ><span class="bcn-cbt__name" data-cbt-name="process/process-petition"
                >Petitions</span
              ><span class="bcn-cbt__verbs"
                ><esa-tooltip text="Rename" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Rename"
                    data-cbt-rename="process/process-petition"
                  >
                    <svg
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Delete" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet bcn-cbt__verb--danger"
                    aria-label="Delete"
                    data-cbt-delete="process/process-petition"
                  >
                    <svg
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
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg></button></esa-tooltip
                ><esa-tooltip text="Lock" align="end" position="above"
                  ><button
                    type="button"
                    class="bcn-cbt__verb bcn-cbt__verb--quiet"
                    aria-label="Lock"
                    data-cbt-lock="process/process-petition"
                    aria-pressed="false"
                  >
                    <svg
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
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg></button></esa-tooltip
              ></span>
            </div>
          </div>
        </section>
        <section class="bcn-cbt__cat" data-cbt-topic="unfiled">
          <div
            class="bcn-cbt__row bcn-cbt__row--cat bcn-cbt__row--sub"
            data-cbt-fold="unfiled"
          >
            <button
              type="button"
              class="bcn-cbt__chev"
              aria-expanded="false"
              aria-label="Show Unfiled"
              data-cbt-toggle="unfiled"
              disabled=""
            >
              <svg
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
                <path d="m9 18 6-6-6-6"></path>
              </svg></button
            ><span class="bcn-topic-dot" data-family="none"></span
            ><span class="bcn-cbt__name">Unfiled</span
            ><span class="bcn-cbt__verbs"></span>
          </div>
        </section>
      </div>
      <div
        class="bcn-cbt__picker"
        role="dialog"
        aria-label="Move To"
        data-cbt-picker=""
        hidden=""
      >
        <esa-combobox
          size="sm"
          mode="autocomplete"
          label="Move To"
          placeholder="e.g. Elliott Bay"
          data-cbt-picker-field="true"
        ></esa-combobox>
      </div>
    </section>
    <script
      type="module"
      src="/beacon-design/_astro/BcnCommentsByTopic.astro_astro_type_script_index_0_lang.Dd3Wsv8e.js"
    ></script>
  </div>
  <div data-inbox-responses="" hidden="">
    <div
      class="bcn-ri"
      data-response-index=""
      data-base="/beacon-design/prototypes/comments"
    >
      <section class="bcn-ri__group">
        <h3 class="bcn-ri__label typography-label-sm-strong">Drafts</h3>
        <ul class="bcn-ri__list" role="list">
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-04"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-004</span
              ><span class="bcn-ri__title typography-body-md"
                >Late Night Noise Limitation Program and Overnight Flights</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="violet"></span>Nighttime
                operations</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-12"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-012</span
              ><span class="bcn-ri__title typography-body-md"
                >Growth in Operations and Overflight Frequency</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="amber"></span>Aircraft
                noise</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-06"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-006</span
              ><span class="bcn-ri__title typography-body-md"
                >Distributing Arrivals and Approach Altitude</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="blue"></span>Flight paths</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-05"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-005</span
              ><span class="bcn-ri__title typography-body-md"
                >Elliott Bay Arrival Route</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="blue"></span>Flight paths</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-11"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-011</span
              ><span class="bcn-ri__title typography-body-md"
                >Complaints and the Port's Noise Office</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="slate"></span>Process and
                outreach</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-07"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-007</span
              ><span class="bcn-ri__title typography-body-md"
                >Departure Procedures and Turn Points</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="blue"></span>Flight paths</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-09"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-009</span
              ><span class="bcn-ri__title typography-body-md"
                >Health Effects of Noise and Air Quality</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="crimson"></span>Health</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-08"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-008</span
              ><span class="bcn-ri__title typography-body-md"
                >Monitoring and Contours Beyond the Airport</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="grass"></span>Noise
                measurement</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-10"
              ><span
                class="bcn-ri__state"
                data-state="draft"
                role="img"
                aria-label="Draft"
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
                  <path
                    d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
                  ></path>
                  <path
                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                  <path d="M8 18h1"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-010</span
              ><span class="bcn-ri__title typography-body-md"
                >Insulation Eligibility and Structural Vibration</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="orange"></span>Sound
                insulation</span
              ></a
            >
          </li>
        </ul>
      </section>
      <section class="bcn-ri__group">
        <h3 class="bcn-ri__label typography-label-sm-strong">Accepted</h3>
        <ul class="bcn-ri__list" role="list">
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-01"
              ><span
                class="bcn-ri__state"
                data-state="accepted"
                role="img"
                aria-label="Accepted"
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
                  <path
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="m9 15 2 2 4-4"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-001</span
              ><span class="bcn-ri__title typography-body-md"
                >Joining Workshops and Submitting Petitions</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="slate"></span>Process and
                outreach</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-02"
              ><span
                class="bcn-ri__state"
                data-state="accepted"
                role="img"
                aria-label="Accepted"
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
                  <path
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="m9 15 2 2 4-4"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-002</span
              ><span class="bcn-ri__title typography-body-md"
                >Repair of Earlier Sound Insulation</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="orange"></span>Sound
                insulation</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-ri__row"
              href="/beacon-design/prototypes/comments/response?id=r-03"
              ><span
                class="bcn-ri__state"
                data-state="accepted"
                role="img"
                aria-label="Accepted"
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
                  <path
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="m9 15 2 2 4-4"></path></svg></span
              ><span class="bcn-ri__no typography-body-sm">R-003</span
              ><span class="bcn-ri__title typography-body-md"
                >Why the Study Uses DNL 65</span
              ><span class="bcn-ri__topic typography-body-sm"
                ><span class="bcn-topic-dot" data-family="grass"></span>Noise
                measurement</span
              ></a
            >
          </li>
        </ul>
      </section>
    </div>
    <script
      type="module"
      src="/beacon-design/_astro/BcnResponseIndex.astro_astro_type_script_index_0_lang.CmkcOEPE.js"
    ></script>
  </div>
</div>
```

## Styles
```css
/* Type comes from .typography-body-sm on the element.

       Both nodes are always in the DOM (the live region has to pre-exist its content),
       so the gap is opt-IN via .is-shown rather than collapsed with :empty — Lit's
       template whitespace defeats :empty in engines that follow Selectors L3. */
.help,
.error {
  margin: 0;
}
/* Both message nodes ALWAYS render — a live region created at the same moment as
       its text is routinely not announced, so it has to already exist. When empty they
       carry .visually-hidden, which takes them out of flow: .field is a flex column
       with a gap, so an in-flow empty node would spend 4px of dead space each.
       Deliberately NOT display:none, which drops them from the accessibility tree. */

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100, 4px);
}
/* Both message nodes are ALWAYS rendered — a live region created at the same moment
       as its text is routinely not announced, so it has to already exist. When there is
       nothing to say they carry .visually-hidden, which takes them out of flow: .field
       is a flex column with a gap, so an in-flow empty node would spend 4px of dead
       space per message. Deliberately NOT display:none, which would drop them from the
       accessibility tree and defeat the arrangement entirely. */

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100, 4px);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  white-space: normal;
  clip: auto;
  clip-path: none;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  --icon-size-xs: 12px;
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 8s linear infinite bcn-aldo-spin;
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
.bcn-cbt {
  position: relative;
}
.bcn-cbt__picker {
  z-index: 30;
  width: 22rem;
  padding: var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  box-shadow: var(--elevation-4);
  position: absolute;
}
.bcn-cbt__picker[hidden] {
  display: none;
}
.bcn-cbt__tools {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  min-height: 2rem;
  display: flex;
}
.bcn-cbt__status {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default);
  display: inline-flex;
}
.bcn-cbt__status[hidden] {
  display: none;
}
.bcn-cbt__verbs {
  gap: var(--spacing-100);
  margin-left: auto;
  display: inline-flex;
}
.bcn-cbt__list {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-cbt .bcn-cbt__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-cbt .bcn-cbt__cat:last-child {
  border-radius: 0 0 var(--radius-200) var(--radius-200);
  border-bottom: none;
}
.bcn-cbt .bcn-cbt__cat:nth-child(2n of .bcn-cbt__cat) {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken) 50%,
    var(--color-background-elevation-raised)
  );
}
.bcn-cbt .bcn-cbt__sub + .bcn-cbt__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cbt .bcn-cbt__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-400);
  line-height: 1.4;
  display: flex;
}
.bcn-cbt .bcn-cbt__row--cat {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-cbt .bcn-cbt__row--sub {
  padding-left: calc(var(--spacing-400) + 4px);
  cursor: pointer;
}
.bcn-cbt .bcn-cbt__row--sub:hover {
  background: var(--color-background-default);
}
.bcn-cbt .bcn-cbt__chev {
  all: unset;
  cursor: pointer;
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__chev[aria-expanded="true"] {
  transform: rotate(90deg);
}
.bcn-cbt .bcn-cbt__chev:disabled {
  visibility: hidden;
}
.bcn-cbt .bcn-cbt__chev:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-cbt .bcn-cbt__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  min-width: 0;
  padding: 0 2px;
  overflow: hidden;
}
.bcn-cbt .bcn-cbt__name[contenteditable="true"] {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  background: var(--color-background-elevation-raised);
  cursor: text;
  text-overflow: clip;
}
.bcn-cbt .bcn-cbt__verbs {
  flex-shrink: 0;
  justify-content: flex-end;
  gap: 2px;
  min-width: 56px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__verbs esa-tooltip {
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__verb {
  border-radius: var(--radius-100);
  width: 24px;
  height: 24px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__verb--quiet {
  opacity: 0;
  transition: opacity 0.12s;
}
.bcn-cbt
  :is(.bcn-cbt__row, .bcn-cbt__item):is(:hover, :focus-within)
  .bcn-cbt__verb--quiet {
  opacity: 1;
}
.bcn-cbt .bcn-cbt__verb:hover {
  background: var(--color-background-default);
  color: var(--color-content-default);
}
.bcn-cbt .bcn-cbt__verb:focus-visible {
  opacity: 1;
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 1px;
}
.bcn-cbt .bcn-cbt__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-cbt .bcn-cbt__verb[aria-pressed="true"] {
  color: var(--color-content-default);
}
.bcn-cbt .bcn-cbt__items {
  padding: 0 0 var(--spacing-200);
  margin: 0;
  list-style: none;
}
.bcn-cbt .bcn-cbt__item {
  align-items: center;
  gap: var(--spacing-300);
  min-height: 30px;
  padding: 0 var(--spacing-400) 0 calc(var(--spacing-400) + 44px);
  grid-template-columns: 3.5rem 10rem minmax(0, 1fr) minmax(0, 17rem) 56px;
  display: grid;
}
.bcn-cbt .bcn-cbt__item + .bcn-cbt__item {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cbt .bcn-cbt__item:hover {
  background: var(--color-background-default);
}
.bcn-cbt .bcn-cbt__key {
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
}
.bcn-cbt .bcn-cbt__who {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  overflow: hidden;
}
.bcn-cbt .bcn-cbt__who:hover {
  text-decoration: underline;
}
.bcn-cbt .bcn-cbt__who:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 1px;
  border-radius: 2px;
}
.bcn-cbt :is(.bcn-cbt__excerpt, .bcn-cbt__resp) {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-cbt .bcn-cbt__excerpt {
  color: var(--color-content-secondary);
}
.bcn-cbt .bcn-cbt__resp {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default);
  text-decoration: none;
  display: inline-flex;
}
.bcn-cbt a.bcn-cbt__resp:hover .bcn-cbt__title {
  text-decoration: underline;
}
.bcn-cbt .bcn-cbt__resp svg {
  flex-shrink: 0;
}
.bcn-cbt .bcn-cbt__resp > span:last-child {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-cbt .bcn-cbt__resp[data-state="draft"] svg {
  color: var(--color-content-secondary);
}
.bcn-cbt .bcn-cbt__resp[data-state="planned"] svg {
  color: var(--color-content-success, var(--color-content-default));
}
.bcn-cbt .bcn-cbt__resp[data-state="none"] {
  color: var(--color-content-default-tertiary);
}
.bcn-cbt .bcn-cbt__resp esa-tooltip,
.bcn-cbt .bcn-cbt__glyph {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__resp {
  min-width: 0;
}
.bcn-cbt .bcn-cbt__item[data-moved] {
  animation: 1.2s ease-out bcn-cbt-moved;
}
.bcn-ri {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-ri .bcn-ri__label {
  margin: 0 0 var(--spacing-200);
  color: var(--color-content-secondary);
}
.bcn-ri .bcn-ri__list {
  background: var(--color-background-elevation-raised);
  border: var(--border-width-default, 1px) solid var(--color-border-default);
  border-radius: var(--radius-md);
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.bcn-ri .bcn-ri__list > li + li {
  border-top: var(--border-width-default, 1px) solid
    var(--color-border-subtle, var(--color-border-default));
}
.bcn-ri .bcn-ri__row {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-400);
  color: var(--color-content-default);
  grid-template-columns: 1rem 3.75rem minmax(0, 1fr) 13rem;
  text-decoration: none;
  display: grid;
}
.bcn-ri .bcn-ri__row:hover {
  background: var(
    --color-background-default-hover,
    var(--color-background-elevation-sunken)
  );
}
.bcn-ri .bcn-ri__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-ri .bcn-ri__state {
  color: var(--color-content-secondary);
  display: inline-flex;
}
.bcn-ri .bcn-ri__state[data-state="accepted"] {
  color: var(--color-content-success, var(--color-content-default));
}
.bcn-ri .bcn-ri__title {
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-ri .bcn-ri__topic {
  align-items: center;
  gap: var(--spacing-150, 0.375rem);
  min-width: 0;
  color: var(--color-content-secondary);
  white-space: nowrap;
  display: inline-flex;
}
.bcn-ri .bcn-ri__no {
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.bcn-si .bcn-si__months {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-si .bcn-si__group {
  margin: 0 0 var(--spacing-200);
  color: var(--color-content-secondary);
}
.bcn-si .bcn-si__list {
  background: var(--color-background-elevation-raised);
  border: var(--border-width-default, 1px) solid var(--color-border-default);
  border-radius: var(--radius-md);
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-si .bcn-si__list > li:first-child .bcn-si__row {
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}
.bcn-si .bcn-si__list > li:last-child .bcn-si__row {
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}
.bcn-si .bcn-si__list > li:only-child .bcn-si__row {
  border-radius: var(--radius-md);
}
.bcn-si .bcn-si__list > li + li {
  border-top: var(--border-width-default, 1px) solid
    var(--color-border-subtle, var(--color-border-default));
}
.bcn-si .bcn-si__row {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-200) var(--spacing-300);
  color: var(--color-content-default);
  grid-template-columns: 0.5rem 3.75rem 13rem minmax(0, 1fr) 3.5rem 4.5rem;
  text-decoration: none;
  display: grid;
}
.bcn-si .bcn-si__row:hover {
  background: var(
    --color-background-default-hover,
    var(--color-background-elevation-sunken)
  );
}
.bcn-si .bcn-si__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-si .bcn-si__unread {
  background: var(--color-background-brand);
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  display: block;
}
.bcn-si .bcn-si__who,
.bcn-si .bcn-si__text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-si .bcn-si__who {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-si .bcn-si__text {
  font-weight: var(--typography-font-weight-medium);
}
.bcn-si .bcn-si__date {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.bcn-si .bcn-si__key,
.bcn-si .bcn-si__org,
.bcn-si .bcn-si__date {
  color: var(--color-content-secondary);
  font-weight: var(--typography-font-weight-regular);
}
.bcn-si .bcn-si__row:not([data-unread]) :is(.bcn-si__who, .bcn-si__text) {
  color: var(--color-content-secondary);
}
.bcn-si .bcn-si__row:not([data-unread]) .bcn-si__who {
  font-weight: var(--typography-font-weight-medium);
}
.bcn-si .bcn-si__dots {
  align-items: center;
  display: inline-flex;
}
.bcn-si .bcn-si__dots > * {
  margin-left: -0.4375rem;
}
.bcn-si .bcn-si__dots > :first-child {
  margin-left: 0;
}
.bcn-si .bcn-si__dots .bcn-topic-dot,
.bcn-si .bcn-si__more {
  width: 0.875rem;
  height: 0.875rem;
  box-shadow: 0 0 0 2px var(--color-background-elevation-raised);
}
.bcn-si .bcn-si__topics {
  display: inline-flex;
}
.bcn-si .bcn-si__dots:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 3px;
  border-radius: 999px;
}
.bcn-si .bcn-si__legend {
  padding: var(--spacing-100) 0;
  column-gap: var(--spacing-200);
  row-gap: var(--spacing-150, 0.375rem);
  min-width: 12rem;
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-regular);
  grid-template-columns: auto 1fr auto;
  margin: 0;
  list-style: none;
  display: grid;
}
.bcn-si .bcn-si__legend li {
  display: contents;
}
.bcn-si .bcn-si__legend .bcn-topic-dot {
  align-self: center;
}
.bcn-si .bcn-si__legend-n {
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.bcn-si .bcn-si__more {
  box-sizing: border-box;
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  width: auto;
  min-width: 0.875rem;
  color: var(--color-content-default);
  font-size: 0.625rem;
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  padding: 0 0.25rem;
  line-height: 1;
  display: inline-flex;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
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
.visually-hidden {
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  white-space: normal;
  clip: auto;
  clip-path: none;
  width: auto;
  height: auto;
  margin: 0;
  position: static;
  overflow: visible;
}
.bcn-ap {
  min-width: 0;
  position: relative;
}
.bcn-ap__bar {
  align-items: center;
  gap: var(--spacing-300);
  min-height: 44px;
  padding-right: var(--spacing-300);
  background: var(--bcn-aldo-prompt-wash);
  border: 1px solid var(--bcn-aldo-100);
  border-radius: 999px;
  display: flex;
}
.bcn-ap__open {
  all: unset;
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-width: 0;
  padding: 0 var(--spacing-300) 0 var(--spacing-250, 0.625rem);
  cursor: pointer;
  color: var(--bcn-aldo-600);
  border-radius: 999px;
  flex: 1;
  align-self: stretch;
  display: flex;
}
.bcn-ap__open:hover .bcn-ap__prompt {
  color: var(--color-content-default);
}
.bcn-ap__open:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 2px;
}
.bcn-ap__prompt {
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.15s;
  overflow: hidden;
}
.bcn-ap__result {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-ap__result[hidden] {
  display: none;
}
.bcn-ap__card {
  z-index: 40;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--bcn-aldo-100);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  transform-origin: top;
  --form-border-width: 0;
  --color-background-field: transparent;
  border-radius: 20px;
  flex-direction: column;
  animation: 0.22s cubic-bezier(0.2, 0.8, 0.2, 1) bcn-ap-in;
  display: flex;
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  overflow: hidden;
}
.bcn-ap__card[hidden] {
  display: none;
}
.bcn-ap__card:focus-within {
  outline: 2px solid var(--bcn-aldo-prompt-ring);
  outline-offset: 0;
}
.bcn-ap__head {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default);
  display: flex;
}
.bcn-ap__close {
  margin-left: auto;
}
.bcn-ap__rich {
  display: block;
}
.bcn-ap__input {
  margin: 0 calc(-1 * var(--spacing-200));
  --focus-ring-color: var(--color-background-elevation-raised);
  display: block;
}
.bcn-ap__foot {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-ap__context {
  min-width: 0;
  color: var(--color-content-secondary);
  flex: 1;
}
.bcn-ap__keys {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-ap__send {
  --button-radius-md: 999px;
  --color-background-brand: var(--bcn-aldo);
  --color-background-brand-hover: var(--bcn-aldo-600);
  display: inline-flex;
}
.bcn-ap__shimmer {
  background: var(--bcn-aldo-prompt-shimmer);
  opacity: 0;
  background-repeat: no-repeat;
  background-size: 40% 100%;
  height: 2px;
  position: absolute;
  inset: 0 0 auto;
}
.bcn-ap[data-working] .bcn-ap__shimmer {
  opacity: 1;
  animation: 0.9s linear infinite bcn-ap-shimmer;
}
.bcn-ap[data-working] .bcn-ap__input {
  opacity: 0.6;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-aldo-100`: #cfeceb _(component)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-aldo-prompt-ring`: #08908b8c _(component)_
- `--bcn-aldo-prompt-shadow`: 0 1px 2px #1018200f, 0 10px 24px -6px #10182024, 0 28px 60px -18px #08908b61 _(component)_
- `--bcn-aldo-prompt-shimmer`: linear-gradient(90deg, transparent 0%, #08908be6 50%, transparent 100%) _(component)_
- `--bcn-aldo-prompt-wash`: linear-gradient(100deg, #e8f6f5 0%, #f3fbfa 55%, #fff 100%) _(component)_
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
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
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
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-subtle`: #efefef _(component)_
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
- `--elevation-4`: 0 6px 24px -6px #00000012 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--gap`: 1rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 350 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-subtle-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-weight`: 500 _(semantic)_
- `--typography-microcopy-md-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-subtle-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
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
