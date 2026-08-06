# Denver International Cup

Referee operations and public scoreboard for the **2026 Denver International
Cup**, August 7–9, 2026, Broomfield and Aurora, Colorado.

Hosted by [Colorado Rush](https://www.coloradorush.com/denver-international-cup).
Officiated under the [Colorado Soccer Referee Program](https://www.coloradoreferee.com).
Built and operated by [JAReferee](https://jareferee.com).

## Live

| Page | URL | Who it is for |
|---|---|---|
| Referee hub | https://jareferee.com/dic/ | Referees — check in, game cards, scores, incidents |
| Public scoreboard | https://jareferee.com/dic/scoreboard.html | Everyone |
| Game cards | https://jareferee.com/dic/cards.html | Site coordinators — print, staff PIN |
| Game card / roster | https://jareferee.com/dic/roster.html | Opened from the hub, needs `?gameId=` |
| Incident report | https://jareferee.com/dic/incident.html | Opened from the hub, needs `?gameId=` |

## The event

| | |
|---|---|
| Dates | 7–9 August 2026 |
| Venues | Broomfield County Commons Park · Aurora Sports Park |
| Games | 203 across 24 divisions |
| Assignr site | CSA / Colorado Referees, site `20901` |
| Assignr league | `Colorado Rush - Denver International Cup` |
| Assignr event | `2026 DIC` |
| Tournament id | `denverintl` |

Friday is Broomfield only — 18 games. Saturday runs both venues, 102 games.
Sunday, 83.

**Site coordinators.** Broomfield: Deanna Duncan-Allen, Bowen Taylor,
George Lewis, Sonja Dawson Urano. Aurora: Tim Auth.

## How it fits together

Every page is event-agnostic. Nothing about the Denver International Cup is
hardcoded in any `.html` file — dates, venues, branding, division order and
referee instructions all come from `config.js`, which resolves the event from
the first segment of the URL path.

```
config.js          per-event configuration; the only file that knows about DIC
index.html         referee hub
scoreboard.html    public scoreboard
cards.html         printable game cards
roster.html        digital game card, player check-in
incident.html      incident and misconduct reporting
assets/brand/      logos
```

The same files serve any tournament. To stand up the next one, add a block to
`config.js` and set `DEFAULT_EVENT`.

> `DEFAULT_EVENT` at the top of `config.js` is what the page falls back to when
> the URL path matches no event — opened locally, from a preview, or from an
> unexpected address. In this repo it must stay `dic`. Set it wrong and another
> tournament's branding and division list render under this one's URL.

## Backend

Google Apps Script, deployed as a web app. Not in this repo. Pages call it
through `JAR.BACKEND`.

The backend resolves which tournament owns a date from the `TOURNAMENTS`
sheet, so the same endpoints serve every event. Actions are named `eventBoard`,
`eventScores`, `eventRefs`, `eventMyGames`.

Backend version for this event: `2026.08.06-a`.

## Public data

The scoreboard shows game times, venues, fields, teams, divisions and scores.
It shows a flag when an incident has been filed, and never the detail.

**No player or referee names are published by the scoreboard.** Rosters and
incident detail sit behind a staff PIN.

There is no sample data anywhere in this repo. If the backend cannot be
reached the scoreboard says `offline` and shows nothing — a fabricated score
presented as real is worse than an empty board.

## Licence and ownership

Operated by JAReferee for the Colorado Soccer Referee Program and Colorado
Rush. See `License.txt` in the GamedayCommandCenter repository.
