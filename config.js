/* ════════════════════════════════════════════════════════════
   JAReferee · Gameday Command Center
   config.js  —  2026.08.06-a

   Lives beside hub.html in whichever repo serves the tournament, and is
   loaded relatively. Nothing here names another repo, so viewing source
   on a public page reveals no internal path. It used to carry only
   BACKEND. It now carries a block per event, resolved from the URL path,
   so /steamboat/, /dic/ and everything after share the same pages and
   differ only by what is in here.

   Adding a tournament = adding one block below. No page is edited.

   The path segment is the key:
     jareferee.com/steamboat/...  -> EVENTS.steamboat
     jareferee.com/dic/...        -> EVENTS.dic
   Works whether /dic/ is its own repo or a folder, because Pages serves
   both at the same origin and this file is referenced absolutely.

   ES5 only, on purpose. These pages run on referee phones on bad rural
   wifi; nothing here should need a transpiler or a polyfill.
   ════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var BACKEND = 'https://script.google.com/macros/s/AKfycbxQXvVq-gtGfUvgXF3NJXkFU_4aVlqFclU0bF0B0dQWbpjb42tstU7UnbKLf5DFP3PY/exec';

  // Relative on purpose. Whatever repo this file sits in serves the
  // assets beside it, so no other repo's name ever appears in page source.
  var ASSETS = 'assets/brand/';

  // Shown on every page of every event: this is the continuity thread.
  var HOUSE = {
    jareferee: { name: 'JAReferee', url: 'https://jareferee.com',
                 mark: ASSETS + 'jareferee-mark-light.png' },
    csa:       { name: 'Colorado Soccer Association', url: 'https://www.coloradosoccer.org',
                 mark: ASSETS + 'csa-mark-light.png' }
  };

  var EVENTS = {

    // ── Steamboat Mountain Soccer Tournament ────────────────
    steamboat: {
      id:       'steamboat',          // must match TOURNAMENTS.ID
      path:     'steamboat',
      shield:   'SMST',
      name:     'Steamboat Mountain',
      full:     'Steamboat Mountain Soccer Tournament',
      subtitle: 'Soccer Tournament · Steamboat Springs, Colorado',
      cardBrand:'Steamboat Mountain Soccer Tournament',
      cardSub:  '42ND ANNUAL · REFEREE GAME CARD',
      accent:   '#7FB8DE',
      hub:      'jareferee.com/steamboat',
      rapUrl:   'jareferee.com/steamboat/rap',
      weatherPlace: 'Steamboat Springs',
      dates:    ['2026-07-31', '2026-08-01', '2026-08-02'],
      daylbl:   { '2026-07-31': ['Fri', 'Jul 31'],
                  '2026-08-01': ['Sat', 'Aug 1'],
                  '2026-08-02': ['Sun', 'Aug 2'] },
      venues:   ['Emerald Park', 'Memorial Park - Steamboat',
                 'Steamboat Springs High School', 'Steamboat Springs Middle School',
                 'STARS'],
      // Referee HQ / non-playing sites. Never offered as a card or score venue.
      hqVenues: ['STARS'],
      // Applied in order to shorten a venue for a narrow phone header.
      trim:     [' - Steamboat', 'Steamboat Springs '],
      // Landing-page venue cards. `map` is a Google Maps destination
      // query -- a street address where one is known, otherwise the
      // venue name, which Maps resolves fine for a named park.
      venueInfo: [
        { name: 'Emerald Soccer Fields', fields: 'Dudley · North1 · North2 · South',
          addr: '500 Pamela Ln', map: '500+Pamela+Ln,+Steamboat+Springs,+CO+80487', games: 47 },
        { name: 'Memorial Soccer Fields', fields: 'Field 01 · Field 02',
          addr: '325 2nd Street', map: '325+2nd+Street,+Steamboat+Springs,+CO+80487', games: 28 },
        { name: 'Steamboat Springs High School', fields: 'Gardner Field',
          addr: '45 Maple St', map: '45+Maple+St,+Steamboat+Springs,+CO+80487', games: 14 },
        { name: 'Steamboat Springs Middle School', fields: 'Turf Field',
          addr: '39610 Amethyst Dr', map: '39610+Amethyst+Dr,+Steamboat+Springs,+CO+80487', games: 13 }
      ],
      logos:    [],
      alertWho: 'Joe, Bowen, Joey and Deanna',
      refInfo:  [
        { h: 'Where you are staying',
          p: 'Referee housing is the dorms at the STARS campus. Check in from 4 PM on Friday. Welcome packets have your room assignment, local coupons and Honey Stingers.' },
        { h: 'Food',
          p: 'Continental breakfast and lunch are provided both days. Dinner is on your own.' },
        { h: 'Game cards',
          p: 'Bowen Taylor has the game cards. Fill them out completely. Then post your score here, and complete your game report in Assignr so you get paid.' },
        { h: 'Something wrong',
          p: 'Joe Saskowski and Bowen Taylor are your site coordinators. If it is urgent, use the red Help button in the corner.' }
      ],
      host:     { name: 'Steamboat Soccer Club', url: 'https://www.steamboat-soccer.com/tournament-a' }
    },

    // ── Denver International Cup ────────────────────────────
    // 203 games, 24 divisions. Fri is Broomfield only (18); Sat and Sun
    // run both venues. Verified against the Assignr export.
    dic: {
      id:       'denverintl',         // must match TOURNAMENTS.ID
      path:     'dic',
      shield:   'DIC',
      name:     'Denver International Cup',
      full:     '2026 Denver International Cup',
      subtitle: 'Hosted by Colorado Rush · Broomfield and Aurora, Colorado',
      cardBrand:'Denver International Cup 2026',
      cardSub:  'HOSTED BY COLORADO RUSH · REFEREE GAME CARD',
      accent:   '#1B6CB5',
      hub:      'jareferee.com/dic',
      rapUrl:   'jareferee.com/dic/rap',
      weatherPlace: 'Broomfield',
      dates:    ['2026-08-07', '2026-08-08', '2026-08-09'],
      daylbl:   { '2026-08-07': ['Fri', 'Aug 7'],
                  '2026-08-08': ['Sat', 'Aug 8'],
                  '2026-08-09': ['Sun', 'Aug 9'] },
      venues:   ['Broomfield County Commons Park', 'Aurora Sports Park'],
      hqVenues: [],
      // Assignr carries the two referee HQs as sub-venues, not venues, so
      // they are filtered at the field level instead.
      hqFields: ['Yellow Pod - Referee HQ', 'West - Ref HQ'],
      trim:     [' County Commons Park', ' Sports Park'],
      // Field lists and game counts read off the Assignr export, not
      // typed from memory. Broomfield's address is from the Assignr
      // venue record; Aurora has none on file, so Maps resolves by name.
      venueInfo: [
        { name: 'Broomfield County Commons Park',
          fields: 'Championship Turf · Yellow Pod 01, 02, 04, 05, 06 · Blue Pod 02, 03',
          addr: '13200 Sheridan Blvd, Broomfield',
          map: '13200+Sheridan+Blvd,+Broomfield,+CO+80020', games: 129 },
        { name: 'Aurora Sports Park',
          fields: 'North 01A, 01B, 02A, 02B, 03, 04',
          addr: 'Aurora',
          map: 'Aurora+Sports+Park,+Aurora,+CO', games: 74 }
      ],
      logos:    [{ name: 'Colorado Rush', url: 'https://www.coloradorush.com/denver-international-cup',
                   src: ASSETS + 'colorado-rush.webp', alt: 'Colorado Rush' },
                 { name: 'Denver International Cup',
                   src: ASSETS + 'denver-international-cup.webp',
                   alt: '2026 Denver International Cup · August 7-9, 2026' }],
      alertWho: 'site staff and Deanna',
      // Straight from the Assignr game note. Replace the placeholders
      // below once Deanna confirms the DIC site coordinators by name.
      refInfo:  [
        { h: 'Game cards',
          p: 'Game cards are at each field in a box, with score entry instructions. Post-game, leave the filled card in the box. Post your score here as well, and complete your game report in Assignr so you get paid.' },
        { h: 'Something wrong',
          p: 'Use the red Help button in the corner. It reaches site staff and Deanna at once.' }
      ],
      host:     { name: 'Colorado Rush', url: 'https://www.coloradorush.com/denver-international-cup' }
    }
  };

  // The first path segment. Falls back to steamboat so a page opened from
  // a bare URL still renders rather than throwing.
  function resolve() {
    var seg = '';
    try {
      // ?e=dic wins, so one shared copy can serve any event even when
      // the path segment does not match an event key.
      var q = String(location.search || '').match(/[?&]e=([A-Za-z0-9_-]+)/);
      seg = q ? q[1] : (String(location.pathname || '').split('/').filter(Boolean)[0] || '');
    } catch (e) { /* non-browser context */ }
    seg = seg.toLowerCase();
    var keys = Object.keys(EVENTS);
    for (var i = 0; i < keys.length; i++) {
      if (EVENTS[keys[i]].path === seg) return EVENTS[keys[i]];
    }
    return EVENTS.steamboat;
  }

  var EVENT = resolve();

  window.JAR = {
    VERSION: '2026.08.06-a',
    BACKEND: BACKEND,
    ASSETS:  ASSETS,
    HOUSE:   HOUSE,
    EVENTS:  EVENTS,
    EVENT:   EVENT,

    // Event id as the backend knows it. Matches TOURNAMENTS.ID and the
    // EVENT column in ROSTERS. This is the string to send in any request
    // that needs to name the tournament.
    id: EVENT.id,

    // Shorten a venue name for a phone header.
    short: function (v) {
      var s = String(v == null ? '' : v);
      (EVENT.trim || []).forEach(function (t) { s = s.split(t).join(''); });
      return s.trim() || String(v || '');
    },

    // True if this venue or field is a referee HQ rather than a pitch.
    isHq: function (venue, field) {
      var v = String(venue || ''), f = String(field || '');
      if ((EVENT.hqVenues || []).indexOf(v) >= 0) return true;
      return (EVENT.hqFields || []).indexOf(f) >= 0;
    },

    // Playing venues only, for a card or score picker.
    playVenues: function () {
      var hq = EVENT.hqVenues || [];
      return (EVENT.venues || []).filter(function (v) { return hq.indexOf(v) < 0; });
    },

    // "Fri Aug 7" for a one-line label, or ['Fri','Aug 7'] via .daylbl.
    dayLabel: function (d) {
      var p = (EVENT.daylbl || {})[d];
      return p ? (p[0] + ' ' + p[1]) : String(d || '');
    },

    // Paint the title, shield and accent without every page repeating it.
    applyBrand: function () {
      try {
        document.title = EVENT.full;
        var r = document.documentElement;
        if (r && r.style && EVENT.accent) r.style.setProperty('--accent', EVENT.accent);
        var nodes = document.querySelectorAll('[data-jar]');
        Array.prototype.forEach.call(nodes, function (el) {
          var key = el.getAttribute('data-jar');
          if (key && EVENT[key] != null) el.textContent = EVENT[key];
        });
      } catch (e) { /* never let branding break a page */ }
    }
  };

  // Exported for node-based checks. Harmless in a browser.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EVENTS: EVENTS, resolve: resolve };
  }
})();
