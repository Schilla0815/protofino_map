/**
 * Pickalbatros Villaggio & Vita Resort – Portofino Marsa Alam
 * Official Hotel Map (No. 1 to 51) Interactive Wayfinding & Live Concierge
 *
 * Map Canvas Dimensions: 810 x 1030 px (cropped from official 1600x1164 map at x=725, y=75)
 */

const CATEGORY_META = {
  restaurants: { label: 'Restaurant (Nr. 1–7)' },
  bars:        { label: 'Bar, Café & Eis (Nr. 8–22)' },
  pools:       { label: 'Aqua Park & Pools (Nr. 23–27)' },
  snacks:      { label: 'Snacks & Bakery (Nr. 28–31)' },
  kids:        { label: 'Kids, Spielplatz & VR (Nr. 38, 49, 50)' },
  sport:       { label: 'Sport, Riff-Steg & Wellness (Nr. 32–48)' },
  service:     { label: 'Rezeption, Klinik & Service (Nr. 42–51)' }
};

/**
 * Complete Official Pickalbatros Portofino Legend (Numbers 1 to 51)
 * Coordinates (x, y) are pixel-exact on the 810x1030 official map image.
 */
const OFFICIAL_POIS = [
  // =========================================================================
  // RESTAURANTS (OFFICIAL NUMBERS 1 – 7)
  // =========================================================================
  {
    id: '1',
    num: '1',
    name: 'Soprano Restaurant',
    category: 'restaurants',
    zone: 'south',
    resortPart: 'Villaggio Süd (Block 6000 / Bus A)',
    x: 668,
    y: 891,
    summary: 'Haupt-Buffetrestaurant im Villaggio Süd mit Frühaufsteher-Frühstück, Mittag, Dinner & Late Dinner.',
    description: 'Das große internationale Haupt-Buffetrestaurant am südlichen Ende des Resorts (nahe Zimmerblock 6000 und Shuttle-Haltestelle A). Ohne Reservierung für alle Gäste nutzbar.',
    hoursSummary: '05:00–10:00 · 12:30–14:30 · 19:00–00:00',
    schedule: [
      { label: 'Frühes Frühstück', time: '05:00 – 07:00' },
      { label: 'Frühstücksbuffet', time: '07:00 – 10:00' },
      { label: 'Mittagsbuffet', time: '12:30 – 14:30' },
      { label: 'Abendbuffet (Dinner)', time: '19:00 – 21:30' },
      { label: 'Spätes Abendessen (Late Dinner)', time: '22:30 – 00:00' }
    ],
    openIntervals: [[300, 600], [750, 870], [1140, 1290], [1350, 1440]],
    highlights: ['Internationale Küche', 'Portofino Nights: Di BBQ, Do Seafood', 'Kinderhochstühle', 'Keine Reservierung'],
    tip: 'Ideal bei frühen Ausflügen (Frühstück ab 05:00 Uhr). Direkt vor dem Restaurant hält der Shuttle-Bus an Station A.'
  },
  {
    id: '2',
    num: '2',
    name: 'Shellfish Restaurant (À la carte)',
    category: 'restaurants',
    zone: 'south',
    resortPart: 'Strandfront Mitte-Süd',
    x: 611,
    y: 634,
    summary: 'Exklusives Fisch- & Meeresfrüchte-Restaurant direkt am Strand (1× pro Aufenthalt inklusive).',
    description: 'Direkt an der Küste südlich des Beach Clubs gelegen. Serviert fangfrischen Fisch und Meeresfrüchte-Menüs am Abend.',
    hoursSummary: '19:00 – 21:30 (mit Reservierung)',
    schedule: [
      { label: 'À-la-carte Abendessen', time: '19:00 – 21:30' },
      { label: 'Reservierung bei Guest Relations', time: '11:30–12:30 & 17:30–18:30' }
    ],
    openIntervals: [[1140, 1290]],
    highlights: ['Seafood & Fisch', '1× pro Aufenthalt gratis', 'Meerblick', 'Reservierung erforderlich'],
    tip: '1× pro Aufenthalt im All-Inclusive enthalten – am besten 4–5 Tage im Voraus bei der Gästebetreuung reservieren.'
  },
  {
    id: '3',
    num: '3',
    name: 'El Khan Restaurant',
    category: 'restaurants',
    zone: 'south',
    resortPart: 'Villaggio Mitte (Bus-Stop B)',
    x: 488,
    y: 661,
    summary: 'Orientalisches Buffetrestaurant nahe Haltestelle B mit Frühstück, Spätfrühstück & arabischem Dinner.',
    description: 'Zentral im Villaggio-Garten bei Haltestelle B und dem beheizten El Khan Pool (Nr. 13) gelegen. Bietet orientalische Grillspezialitäten und Tajine-Abende.',
    hoursSummary: '07:00–11:00 · 19:00–22:00',
    schedule: [
      { label: 'Frühstücksbuffet', time: '07:00 – 10:00' },
      { label: 'Spätaufsteher-Frühstück', time: '10:00 – 11:00' },
      { label: 'Orientalisches Abendessen', time: '19:00 – 22:00' }
    ],
    openIntervals: [[420, 660], [1140, 1320]],
    highlights: ['Orientalische Küche', 'So: Oriental BBQ · Sa: Tajine Night', 'Nahe Kids Club (Nr. 38)'],
    tip: 'Direkt nebenan befinden sich der zweite Kids Club (Nr. 38) und der im Winter beheizte El Khan Pool (Nr. 13).'
  },
  {
    id: '4',
    num: '4',
    name: 'L’Asiatique Restaurant (East & West)',
    category: 'restaurants',
    zone: 'aquapark',
    resortPart: 'Aqua Park Zone West',
    x: 215,
    y: 445,
    summary: 'Asiatisch-orientalisches Buffetrestaurant (East & West) am Aqua Park mit Frühstück & Dinner.',
    description: 'Auf der offiziellen Karte als Nr. 4 L’Asiatique (vor Ort auch East & West) direkt bei den großen Pools und der VR-Zone (Nr. 49) gelegen.',
    hoursSummary: '07:00–11:00 · 19:00–21:30',
    schedule: [
      { label: 'Frühstücksbuffet', time: '07:00 – 10:00' },
      { label: 'Langschläfer-Frühstück', time: '10:00 – 11:00' },
      { label: 'Asiatisches Abendbuffet', time: '19:00 – 21:30' }
    ],
    openIntervals: [[420, 660], [1140, 1290]],
    highlights: ['Asiatische & Wok-Küche', 'Langschläfer-Frühstück bis 11:00', 'Mi: Asian Night'],
    tip: 'Ideal für alle Gäste in den Zimmerblöcken 2000 & 3000 für ein kurzes Frühstück direkt am Aqua Park.'
  },
  {
    id: '5',
    num: '5',
    name: 'Alfredo Restaurant',
    category: 'restaurants',
    zone: 'center',
    resortPart: 'Zentraler Piazza-Komplex',
    x: 519,
    y: 423,
    summary: 'Italienisches Buffetrestaurant im zentralen Restaurantkomplex mit Pizza, Pasta & Antipasti.',
    description: 'Im Herzen der Anlage neben dem Hauptpool (Nr. 10) und Mediterranean (Nr. 6) gelegen. Serviert abends authentische italienische Buffets im Dine-Around-Konzept.',
    hoursSummary: '19:00 – 21:30',
    schedule: [
      { label: 'Italienisches Abendbuffet', time: '19:00 – 21:30' }
    ],
    openIntervals: [[1140, 1290]],
    highlights: ['Italienische Küche', 'Frische Pizza & Pasta', 'Dine-Around ohne Reservierung'],
    tip: 'Unterhalb des Alfredo liegt direkt die zentrale Poolbar (Nr. 10 / 11), die abends bis 23:00 Uhr geöffnet bleibt.'
  },
  {
    id: '6',
    num: '6',
    name: 'Mediterranean Restaurant',
    category: 'restaurants',
    zone: 'center',
    resortPart: 'Zentraler Piazza-Komplex',
    x: 548,
    y: 384,
    summary: 'Zentrales Buffetrestaurant für Mittagessen, Abendessen & spätes Abendessen bis Mitternacht.',
    description: 'Direkt am zentralen Hauptkomplex nahe dem Marina Jetty (Nr. 41) gelegen. Für alle Gäste von Villaggio und Vita frei zum Mittag-, Abend- und Spätabendessen zugänglich.',
    hoursSummary: '12:30–14:30 · 19:00–21:30 · 22:30–00:00',
    schedule: [
      { label: 'Mittagsbuffet', time: '12:30 – 14:30' },
      { label: 'Abendbuffet', time: '19:00 – 21:30' },
      { label: 'Spätes Abendessen (Late Dinner)', time: '22:30 – 00:00' }
    ],
    openIntervals: [[750, 870], [1140, 1290], [1350, 1440]],
    highlights: ['Mediterranes Buffet', 'Mo: Seafood Night · Fr: Oriental BBQ', 'Late Dinner bis 00:00'],
    tip: 'Perfekt für das Mittagessen, wenn Sie sich tagsüber im zentralen Bereich oder am Steg (Nr. 41) aufhalten.'
  },
  {
    id: '7',
    num: '7',
    name: 'Tabliya Restaurant (À la carte)',
    category: 'restaurants',
    zone: 'center',
    resortPart: 'Zentraler Piazza-Komplex',
    x: 571,
    y: 438,
    summary: 'Ägyptisches À-la-carte-Restaurant mit festem Abendmenü (1× pro Aufenthalt inklusive).',
    description: 'Direkt im zentralen Restaurantkomplex neben Alfredo (Nr. 5) und der White Bar (Nr. 19) gelegen. Serviert ein traditionelles ägyptisches Abendmenü nach Voranmeldung.',
    hoursSummary: '19:00 – 21:30 (Reservierung)',
    schedule: [
      { label: 'À-la-carte Dinner (festes Menü)', time: '19:00 – 21:30' }
    ],
    openIntervals: [[1140, 1290]],
    highlights: ['Ägyptische Spezialitäten', '1× pro Aufenthalt inklusive', 'Reservierung an der Rezeption'],
    tip: 'Reservierung erfolgt über die Rezeption bzw. Gästebetreuung.'
  },

  // =========================================================================
  // BARS & CAFÉS (OFFICIAL NUMBERS 8 – 22)
  // =========================================================================
  {
    id: '8a',
    num: '8',
    name: 'Beach Bar Nord (Beim Diving Center)',
    category: 'bars',
    zone: 'north',
    resortPart: 'Nordspitze Küste (Block 1000)',
    x: 429,
    y: 106,
    summary: 'Nördlichste Strandbar auf der Karte (Nr. 8) nahe Diving Center (Nr. 48).',
    description: 'Versorgt den ruhigen nördlichen Strandabschnitt und die Liegen vor Block 1000 mit kühlen Erfrischungen, Wasser, Softdrinks und Bier.',
    hoursSummary: '10:00 – 18:00',
    schedule: [{ label: 'Strandgetränke & Erfrischungen', time: '10:00 – 18:00' }],
    openIntervals: [[600, 1080]],
    highlights: ['Direkt am Nordstrand', 'Nahe Tauchcenter (Nr. 48)', 'All-Inclusive Drinks'],
    tip: 'Auf der offiziellen Karte tragen alle 4 Strandbars entlang der 1 km Küste die Nummer 8.'
  },
  {
    id: '8b',
    num: '8',
    name: 'Beach Bar Vita-Küste (Nord-Ost)',
    category: 'bars',
    zone: 'north',
    resortPart: 'Obere Küste (Block 1000)',
    x: 514,
    y: 261,
    summary: 'Strandbar (Nr. 8) am oberen Strandabschnitt vor den 1000er Meerblick-Bungalows.',
    description: 'Direkt am Strand vor dem Vita-Bereich gelegen. Kurze Wege von den Sonnenliegen für Kaltgetränke und Bier.',
    hoursSummary: '10:00 – 18:00',
    schedule: [{ label: 'Strandgetränke & Bier', time: '10:00 – 18:00' }],
    openIntervals: [[600, 1080]],
    highlights: ['Strandservice', 'Kurze Wege zu Block 1000'],
    tip: 'Bequem erreichbar von den Strandliegen im nördlichen Lagunenbereich.'
  },
  {
    id: '8c',
    num: '8',
    name: 'Beach Bar Mitte (Am Beach Club)',
    category: 'bars',
    zone: 'center',
    resortPart: 'Mittlere Küste (beim Beach Club 28)',
    x: 601,
    y: 575,
    summary: 'Zentrale Strandbar (Nr. 8) direkt am Beach Club (Nr. 12 / 28).',
    description: 'Liegt direkt am Hauptstrand vor dem Beach Club Restaurant (Nr. 28). Hier gibt es tagsüber und an der Beach Club Bar teils bis in den Abend hinein Getränke.',
    hoursSummary: '10:00 – 18:00 (Beach Club Bar bis 23:00)',
    schedule: [
      { label: 'Beach Bar Tagesbetrieb', time: '10:00 – 18:00' },
      { label: 'Abendbetrieb am Beach Club', time: '19:00 – 23:00' }
    ],
    openIntervals: [[600, 1380]],
    highlights: ['Zentraler Strandabschnitt', 'Direkt am Beach Club (Nr. 28)'],
    tip: 'Direkt daneben gibt es an der Pool Bar Beach Club (Nr. 12) auch Eiscreme!'
  },
  {
    id: '8d',
    num: '8',
    name: 'Beach Bar Süd (Villaggio Strand)',
    category: 'bars',
    zone: 'south',
    resortPart: 'Untere Küste (Block 5000/6000)',
    x: 645,
    y: 765,
    summary: 'Südliche Strandbar (Nr. 8) zwischen Shellfish (Nr. 2) und Soprano (Nr. 1).',
    description: 'Versorgt den gesamten südlichen Villaggio-Strandabschnitt vor den grünen 5000er-Bungalows mit kühlen Getränken.',
    hoursSummary: '10:00 – 18:00',
    schedule: [{ label: 'Strandgetränke & Bier', time: '10:00 – 18:00' }],
    openIntervals: [[600, 1080]],
    highlights: ['Südstrand Villaggio', 'Kurze Wege von den Strandliegen'],
    tip: 'Ideal für Strandgäste, die im südlichen Teil (Block 5000 & 6000) wohnen.'
  },
  {
    id: '9',
    num: '9',
    name: 'Red Sky Bar (Villaggio) & Lobby Bar',
    category: 'bars',
    zone: 'center',
    resortPart: 'Bei Rezeption Villaggio (Nr. 42)',
    x: 418,
    y: 445,
    summary: 'Hauptbar-Bereich an der Villaggio-Rezeption (Lobby Bar 24h & Red Sky Abend-Lounge).',
    description: 'Direkt am Villaggio-Hauptgebäude (Nr. 42) neben der Bakery (Nr. 31) und Terrace Bar (Nr. 16). Die Lobby Bar bietet 24h Getränke, abends lädt die Red Sky Bar mit Shisha-Ecke zum Verweilen ein.',
    hoursSummary: 'Lobby 24h · Red Sky Bar 18:00–00:00',
    schedule: [
      { label: 'Lobby Bar (Softdrinks & Kaffee)', time: '24 Stunden' },
      { label: 'All-Inclusive Alkohol', time: '10:00 – 00:00' },
      { label: 'Red Sky Bar & Shisha (extra)', time: '18:00 – 00:00' }
    ],
    openIntervals: [[0, 1440]],
    highlights: ['24h Getränke in der Lobby', 'Open-Air Lounge', 'Direkt an Haltestelle D'],
    tip: 'Hier können Sie an der Rezeption bis 20:00 Uhr am Vortag auch kostenlose Frühstücksboxen für Ausflüge bestellen.'
  },
  {
    id: '10',
    num: '10',
    name: 'Main Pool’s Bar',
    category: 'bars',
    zone: 'center',
    resortPart: 'Zentraler Hauptpool',
    x: 496,
    y: 432,
    summary: 'Poolbar direkt am zentralen Hauptpool neben dem Alfredo Restaurant (Nr. 5).',
    description: 'Versorgt den großen, im Winter beheizbaren Hauptpool im Zentrum der Anlage mit kühlen Drinks, Bier und Cocktails.',
    hoursSummary: '10:00 – 18:00 (Abendbetrieb bis 23:00)',
    schedule: [
      { label: 'Poolbar Tagesbetrieb', time: '10:00 – 18:00' },
      { label: 'Poolbar unterhalb Alfredo', time: 'bis 23:00' }
    ],
    openIntervals: [[600, 1380]],
    highlights: ['Am beheizten Hauptpool', 'Abends bis 23:00 geöffnet'],
    tip: 'Der angrenzende Pool ist laut offizieller Winterkarte beheizt.'
  },
  {
    id: '11',
    num: '11',
    name: 'Amphitheatre Bar',
    category: 'bars',
    zone: 'center',
    resortPart: 'Beim Amphitheater (Nr. 40)',
    x: 539,
    y: 458,
    summary: 'Getränkebar direkt zwischen Hauptpool und dem Amphitheater (Nr. 40).',
    description: 'Perfekt gelegen, um sich tagsüber am Pool oder abends zur Mini-Disco und Abendshow im Amphitheater (Nr. 40) mit Getränken zu versorgen.',
    hoursSummary: '10:00 – 23:00',
    schedule: [
      { label: 'Pool- & Show-Getränke', time: '10:00 – 23:00' }
    ],
    openIntervals: [[600, 1380]],
    highlights: ['Direkt am Amphitheater (Nr. 40)', 'Ideal für Abendshows'],
    tip: 'Holen Sie sich hier Ihren Drink kurz vor Beginn der Mini-Disco (20:30 Uhr) und Abendshow (21:15 Uhr).'
  },
  {
    id: '12',
    num: '12',
    name: 'Pool Bar (Beach Club) & Eiscreme',
    category: 'bars',
    zone: 'center',
    resortPart: 'Am Beach Club (Nr. 28)',
    x: 553,
    y: 575,
    summary: 'Pool- & Loungebar am Beach Club mit Eiscreme-Ausgabe, Tagesdrinks & Shisha am Abend.',
    description: 'Direkt am Pool vor dem Beach Club (Nr. 28) gelegen. Neben kühlen Drinks gibt es hier zweimal täglich Eiscreme sowie abends gemütliche Lounge-Atmosphäre.',
    hoursSummary: '10:00 – 23:00 (🍦 Eis 10–12 & 19–22 Uhr)',
    schedule: [
      { label: '🍦 Eiscreme-Ausgabe', time: '10:00–12:00 & 19:00–22:00' },
      { label: 'Snacks & Getränke', time: '13:00 – 17:00' },
      { label: 'Abendgetränke & Shisha', time: '19:00 – 23:00' }
    ],
    openIntervals: [[600, 1380]],
    highlights: ['🍦 Eiscreme auch abends (19–22 Uhr)', 'Am beheizten Beach-Club-Pool'],
    tip: 'Der Pool direkt neben Nr. 12 ist im Winter beheizt!'
  },
  {
    id: '13',
    num: '13',
    name: 'Pool Bar (El Khan)',
    category: 'bars',
    zone: 'south',
    resortPart: 'Villaggio Mitte-Süd (Block 5000)',
    x: 498,
    y: 702,
    summary: 'Poolbar direkt am im Winter beheizten El Khan Pool nahe Restaurant Nr. 3.',
    description: 'Umgeben von den grünen 5000er-Bungalows am großen beheizten Pool südlich des El Khan Restaurants (Nr. 3).',
    hoursSummary: '10:00 – 18:00',
    schedule: [{ label: 'Poolgetränke & Erfrischungen', time: '10:00 – 18:00' }],
    openIntervals: [[600, 1080]],
    highlights: ['Am beheizten El Khan Pool', 'Ruhige Gartenlage'],
    tip: 'Laut offizieller Heizkarte sind sowohl dieser Pool als auch der Nachbarpool westlich davon im Winter beheizt.'
  },
  {
    id: '14',
    num: '14',
    name: 'Pool Bar (Villaggio Süd-Garten)',
    category: 'bars',
    zone: 'south',
    resortPart: 'Villaggio Süd (Block 5000/6000)',
    x: 476,
    y: 826,
    summary: 'Ruhige Garten-Poolbar zwischen den 5000er und 6000er Zimmerblöcken.',
    description: 'Versorgt die idyllischen Relax-Pools im südlichen Teil des Villaggio-Gartens mit kühlen Getränken.',
    hoursSummary: '10:00 – 18:00',
    schedule: [{ label: 'Poolgetränke & Cocktails', time: '10:00 – 18:00' }],
    openIntervals: [[600, 1080]],
    highlights: ['Entspannte Relax-Zone', 'Kurze Wege für Block 5000 & 6000'],
    tip: 'Perfekt für ruhige Sonnenstunden abseits des Trubels.'
  },
  {
    id: '15',
    num: '15',
    name: 'Pool Bar (Soprano)',
    category: 'bars',
    zone: 'south',
    resortPart: 'Beim Soprano Restaurant (Nr. 1 / Bus A)',
    x: 600,
    y: 880,
    summary: 'Poolbar direkt an der südlichen Poollandschaft vor dem Soprano Hauptrestaurant (Nr. 1).',
    description: 'Direkt an der Haltestelle A und dem Soprano Restaurant (Nr. 1) gelegen. Versorgt die südlichen Pools und Sonnenterrassen.',
    hoursSummary: '10:00 – 18:00',
    schedule: [{ label: 'Poolgetränke & Bier', time: '10:00 – 18:00' }],
    openIntervals: [[600, 1080]],
    highlights: ['Direkt am Soprano Pool', 'Haltestelle A direkt daneben'],
    tip: 'Ideal für einen Drink vor oder nach dem Mittagessen im Soprano Restaurant (Nr. 1).'
  },
  {
    id: '16',
    num: '16',
    name: 'Terrace Bar Villaggio',
    category: 'bars',
    zone: 'center',
    resortPart: 'Villaggio Hauptgebäude (Nr. 42)',
    x: 445,
    y: 453,
    summary: 'Beliebte Terrassenbar an der Villaggio-Lobby mit Drinks bis Mitternacht & Eiscreme.',
    description: 'Auf der Panoramaterrasse der Villaggio-Rezeption (Nr. 42) gelegen. Ein wunderbarer Treffpunkt von morgens 10:00 Uhr bis Mitternacht.',
    hoursSummary: '10:00 – 00:00 (🍦 Eis ab 11:00)',
    schedule: [
      { label: 'All-Inclusive Drinks & Cocktails', time: '10:00 – 00:00' },
      { label: 'Eiscreme-Angebot', time: '11:00 – 21:00' }
    ],
    openIntervals: [[600, 1440]],
    highlights: ['Geöffnet bis Mitternacht', 'Zentrale Lage bei Rezeption 42'],
    tip: 'Nach 00:00 Uhr sind alkoholische Getränke im Resort gegen Aufpreis erhältlich.'
  },
  {
    id: '17',
    num: '17',
    name: 'Smoothie Bar (Eis & Milchshakes)',
    category: 'bars',
    zone: 'center',
    resortPart: 'Neben Spielplatz (Nr. 50) & Kids Club (Nr. 38)',
    x: 396,
    y: 473,
    summary: '🍦 Frische Smoothies, cremige Milchshakes & Eiscreme direkt neben dem Kinderspielplatz.',
    description: 'Direkt neben dem großen Kinderspielplatz (Nr. 50), dem Kids Club (Nr. 38) und der Bakery (Nr. 31) gelegen. Der beliebteste Ort am Nachmittag für Milchshakes, Smoothies und Eis!',
    hoursSummary: '11:00 – 17:30',
    schedule: [
      { label: '🍦 Eiscreme, Smoothies & Milkshakes', time: '11:00 – 17:30' }
    ],
    openIntervals: [[660, 1050]],
    highlights: ['🍦 Ice Cream inklusive', 'Frische Milchshakes', 'Direkt am Spielplatz (Nr. 50)'],
    tip: 'Unbedingt die frisch gemixten Milchshakes und Frucht-Smoothies probieren!'
  },
  {
    id: '18',
    num: '18',
    name: 'Red Sky Bar (Vita) / Farsha Lounge',
    category: 'bars',
    zone: 'north',
    resortPart: 'Vita Nord-Küste (Block 1000)',
    x: 459,
    y: 233,
    summary: 'Stimmungsvolle Abend- & Shisha-Bar (Farsha / Red Sky Vita) im nördlichen Küstenbereich.',
    description: 'Hoch oben im nördlichen Bereich (Block 1000) nahe dem Strand gelegen. Genieße entspannte Abendstunden mit Meerblick, Drinks und optionaler Shisha.',
    hoursSummary: '17:00 – 00:00',
    schedule: [
      { label: 'Abendbar & Lounge', time: '17:00 – 00:00' },
      { label: 'Shisha (gegen Aufpreis)', time: '17:00 – 00:00' }
    ],
    openIntervals: [[1020, 1440]],
    highlights: ['Chill-out Atmosphäre', 'Meerblick im Nordbereich'],
    tip: 'Ideal für einen Sundowner-Cocktail ab 17:00 Uhr.'
  },
  {
    id: '19',
    num: '19',
    name: 'White Bar (Am Marina Jetty)',
    category: 'bars',
    zone: 'center',
    resortPart: 'Direkt am Schnorchel-Steg (Nr. 41)',
    x: 594,
    y: 417,
    summary: 'Elegante Open-Air-Bar direkt am Zugang zum 85m Marina Jetty (Nr. 41).',
    description: 'Liegt unmittelbar an der Küste beim Schnorchel-Steg (Nr. 41) und den Snacks Vita (Nr. 29). Abends eine wunderschöne Location direkt an der Meeresbrise.',
    hoursSummary: '19:00 – 00:00',
    schedule: [
      { label: 'Abend-Drinks am Steg', time: '19:00 – 00:00' }
    ],
    openIntervals: [[1140, 1440]],
    highlights: ['Direkt am Meer & Steg (Nr. 41)', 'Open-Air Abend-Lounge'],
    tip: 'Tagsüber erhalten Sie direkt daneben bei Nr. 29 Snacks Vita kühle Erfrischungen und Snacks.'
  },
  {
    id: '20',
    num: '20',
    name: 'Pool Bar (Vita / Block 2000)',
    category: 'bars',
    zone: 'aquapark',
    resortPart: 'Beheizter Pool Block 2000 (Bus F/G)',
    x: 282,
    y: 359,
    summary: 'Poolbar am im Winter beheizten Pool inmitten der lila 2000er-Zimmerblöcke.',
    description: 'Zwischen den Haltestellen F und G nördlich des Aqua Parks gelegen. Versorgt den großen, im Winter beheizten Pool der 2000er-Zimmer.',
    hoursSummary: '10:00 – 18:00',
    schedule: [{ label: 'Poolgetränke & Erfrischungen', time: '10:00 – 18:00' }],
    openIntervals: [[600, 1080]],
    highlights: ['Am beheizten Vita-Pool', 'Direkt bei Bus-Stop F & G'],
    tip: 'Dieser Pool ist laut offizieller Pickalbatros-Winterkarte („HEATED · VITA“) komplett beheizt.'
  },
  {
    id: '21',
    num: '21',
    name: 'English Pub & Columbus Bar (🍦 Eis)',
    category: 'bars',
    zone: 'north',
    resortPart: 'Bei Rezeption Vita (Nr. 51 / Bus E)',
    x: 471,
    y: 329,
    summary: 'Columbus Bar & English Pub an der Vita-Rezeption mit Kaffeespezialitäten, Drinks & Eiscreme.',
    description: 'Direkt unterhalb der Rezeption Vita (Nr. 51) gelegen. Beliebt für Kaffeespezialitäten, abendliche Drinks im English Pub Stil sowie zweimal tägliche Eiscreme-Ausgabe.',
    hoursSummary: '12:00 – 00:00 (🍦 Eis 10–12 & 19–22 Uhr)',
    schedule: [
      { label: '🍦 Eiscreme an der Columbus Bar', time: '10:00–12:00 & 19:00–22:00' },
      { label: 'Columbus Bar & English Pub', time: '12:00 – 00:00' }
    ],
    openIntervals: [[600, 1440]],
    highlights: ['🍦 Eiscreme vormittags & abends', 'Nahe Rezeption Vita (Nr. 51)'],
    tip: 'Auch abends von 19:00 bis 22:00 Uhr gibt es hier noch Eiscreme!'
  },
  {
    id: '22',
    num: '22',
    name: 'Oriental Café',
    category: 'bars',
    zone: 'center',
    resortPart: 'Zentraler Komplex neben Mediterranean (Nr. 6)',
    x: 525,
    y: 402,
    summary: 'Traditionelles orientalisches Abendcafé im zentralen Piazza-Komplex.',
    description: 'Direkt neben dem Mediterranean Restaurant (Nr. 6) und dem Hauptpool (Nr. 10) gelegen. Serviert am Abend arabischen Tee, Kaffee, Cocktails und orientalische Atmosphäre.',
    hoursSummary: '18:00 – 00:00',
    schedule: [{ label: 'Oriental Café Abendbetrieb', time: '18:00 – 00:00' }],
    openIntervals: [[1080, 1440]],
    highlights: ['Arabischer Tee & Mokka', 'Zentrale Piazza-Lage'],
    tip: 'Gleich nebenan (Nr. 39) befinden sich Billard und Tischtennis.'
  },

  // =========================================================================
  // AQUA PARK & POOLS (OFFICIAL NUMBERS 23 – 27)
  // =========================================================================
  {
    id: '23',
    num: '23',
    name: 'Aqua Park (Haupt-Rutschenbereich)',
    category: 'pools',
    zone: 'aquapark',
    resortPart: 'Aqua Park Zone (Block 3000 / Bus G)',
    x: 262,
    y: 402,
    summary: 'Großer Wasserpark mit insgesamt 32 Wasserrutschen (im Winter teilweise beheizt).',
    description: 'Das Action-Herzstück des Resorts unterhalb der Haltestelle G: Zusammen mit den Becken Nr. 24–27 bietet der Aqua Park 32 Wasserrutschen für Erwachsene und Kinder.',
    hoursSummary: '10:00 – 13:00 & 15:00 – 18:00',
    schedule: [
      { label: 'Vormittags-Rutschbetrieb', time: '10:00 – 13:00' },
      { label: 'Mittagspause der Rutschen', time: '13:00 – 15:00' },
      { label: 'Nachmittags-Rutschbetrieb', time: '15:00 – 18:00' }
    ],
    openIntervals: [[600, 780], [900, 1080]],
    highlights: ['32 Rutschen insgesamt', 'Im Winter beheizt (HEATED · AQUA PARK)', 'Freier Eintritt'],
    tip: 'Während der Rutschen-Mittagspause (13:00–15:00 Uhr) gibt es direkt bei Nr. 30 (Aqua Park Snacks) Pizza, Burger und Getränke.'
  },
  {
    id: '24',
    num: '24',
    name: 'Kids Pool (Kinder-Wasserspiele)',
    category: 'pools',
    zone: 'aquapark',
    resortPart: 'Aqua Park Ost (nahe Rezeption 42 & Kids Club 38)',
    x: 354,
    y: 421,
    summary: 'Flacher Kinder-Erlebnispool direkt zwischen Aqua Park, Kids Club (Nr. 38) und Rezeption (Nr. 42).',
    description: 'Sicherer, flacher Wasserspielbereich für jüngere Kinder direkt neben der Haltestelle D und dem Spielplatz (Nr. 50).',
    hoursSummary: '08:00 – 18:30 (Rutschen 10–13 & 15–18 Uhr)',
    schedule: [
      { label: 'Badebetrieb Kinderpool', time: '08:00 – 18:30' },
      { label: 'Wasserspiele & Mini-Rutschen', time: '10:00–13:00 & 15:00–18:00' }
    ],
    openIntervals: [[480, 1110]],
    highlights: ['Flaches Kinderbecken', 'Direkt bei Spielplatz (Nr. 50) & Smoothie Bar (Nr. 17)'],
    tip: 'Nur wenige Schritte entfernt gibt es an der Smoothie Bar (Nr. 17) Eiscreme und Milchshakes.'
  },
  {
    id: '25',
    num: '25',
    name: 'Boat Pool (Beheizter Piraten-/Bootspool)',
    category: 'pools',
    zone: 'aquapark',
    resortPart: 'Aqua Park Mitte (Bus-Stop G)',
    x: 300,
    y: 395,
    summary: 'Im Winter beheizter Erlebnispool mit Wasserspiel-Boot und Kinderrutschen.',
    description: 'Direkt unterhalb der Shuttle-Haltestelle G gelegen. Auf der offiziellen Karte mit dem Thermometer-Symbol als beheizter Winterpool markiert.',
    hoursSummary: '10:00 – 13:00 & 15:00 – 18:00 (Pool 08:00–18:30)',
    schedule: [
      { label: 'Rutschen & Wasserspiele', time: '10:00–13:00 & 15:00–18:00' },
      { label: 'Poolbereich', time: '08:00 – 18:30' }
    ],
    openIntervals: [[480, 1110]],
    highlights: ['🔥 Im Winter beheizt', 'Kinder-Attraktion im Aqua Park'],
    tip: 'Dank Winterheizung auch an kühleren Tagen ideal für Kinder.'
  },
  {
    id: '26',
    num: '26',
    name: 'Tsunami Pool (Wellen- & Rutschenpool)',
    category: 'pools',
    zone: 'aquapark',
    resortPart: 'Aqua Park Zentrum (vor Block 3000)',
    x: 301,
    y: 451,
    summary: 'Action-Becken im Zentrum des Aqua Parks direkt vor den hellblauen 3000er-Zimmern.',
    description: 'Zentrales Erlebnisbecken im Aqua Park neben dem Kids Club (Nr. 38).',
    hoursSummary: '10:00 – 13:00 & 15:00 – 18:00 (Pool 08:00–18:30)',
    schedule: [
      { label: 'Attraktionsbetrieb', time: '10:00–13:00 & 15:00–18:00' },
      { label: 'Sonnenliegen & Pool', time: '08:00 – 18:30' }
    ],
    openIntervals: [[480, 1110]],
    highlights: ['Zentral im Aqua Park', 'Direkt an Block 3000'],
    tip: 'Das runde Nachbarbecken direkt links daneben ist im Winter ebenfalls beheizt.'
  },
  {
    id: '27',
    num: '27',
    name: 'Aqua Tower Pool (Beheizter Rutschenturm)',
    category: 'pools',
    zone: 'aquapark',
    resortPart: 'Aqua Park West (nahe L’Asiatique Nr. 4)',
    x: 165,
    y: 428,
    summary: 'Großer, im Winter beheizter Rutschenturm-Pool im westlichen Teil des Aqua Parks.',
    description: 'Direkt neben der VR-Zone (Nr. 49) und dem L’Asiatique Restaurant (Nr. 4) gelegen. Auf dem offiziellen Heizplan als beheiztes Becken gekennzeichnet.',
    hoursSummary: '10:00 – 13:00 & 15:00 – 18:00',
    schedule: [
      { label: 'Rutschbetrieb Vormittag', time: '10:00 – 13:00' },
      { label: 'Rutschbetrieb Nachmittag', time: '15:00 – 18:00' }
    ],
    openIntervals: [[600, 780], [900, 1080]],
    highlights: ['🔥 Im Winter beheizt', 'Große Wasserrutschen', 'Nahe Aqua Park Snacks (Nr. 30)'],
    tip: 'Gleich südlich davon liegt Nr. 30 (Aqua Park Snacks & Pizzeria).'
  },

  // =========================================================================
  // SNACKS & BAKERY (OFFICIAL NUMBERS 28 – 31)
  // =========================================================================
  {
    id: '28',
    num: '28',
    name: 'Beach Club Restaurant & Snacks',
    category: 'snacks',
    zone: 'center',
    resortPart: 'Zentraler Strand (vor Block 4000)',
    x: 576,
    y: 595,
    summary: 'Strand-Restaurant mit Frühstück, Langschläfer-Frühstück & Nachmittags-Snacks direkt am Meer.',
    description: 'Direkt zwischen der Pool Bar (Nr. 12) und der Beach Bar (Nr. 8) gelegen. Hier können Sie mit Meerblick frühstücken oder den ganzen Nachmittag Snacks genießen.',
    hoursSummary: 'Frühstück 08:00–11:00 · Snacks 13:00–17:30',
    schedule: [
      { label: 'Frühstück am Strand', time: '08:00 – 10:00' },
      { label: 'Langschläfer-Frühstück', time: '10:00 – 11:00' },
      { label: 'Mittags-Snacks & Food Court', time: '13:00 – 17:30' }
    ],
    openIntervals: [[480, 660], [780, 1050]],
    highlights: ['Direkt am Strand', 'Spätfrühstück bis 11:00', 'Mittags-Snacks ohne Umziehen'],
    tip: 'An der angeschlossenen Beach Club Bar (Nr. 12) gibt es von 10:00–12:00 und 19:00–22:00 Uhr auch Eiscreme.'
  },
  {
    id: '29',
    num: '29',
    name: 'Snacks Vita (Jetty)',
    category: 'snacks',
    zone: 'center',
    resortPart: 'Beim Marina Jetty (Nr. 41)',
    x: 575,
    y: 400,
    summary: 'Snack-Station direkt am 85m Schnorchel-Steg (Nr. 41) und dem beheizten Lagunenpool.',
    description: 'Zwischen Mediterranean (Nr. 6) und Marina Jetty (Nr. 41) gelegen. Ideal für den Hunger nach dem Schnorcheln am Hausriff.',
    hoursSummary: '12:30 – 17:00',
    schedule: [{ label: 'Jetty Snacks & Erfrischungen', time: '12:30 – 17:00' }],
    openIntervals: [[750, 1020]],
    highlights: ['Direkt am Schnorchel-Steg (Nr. 41)', 'Am beheizten Meerblick-Pool'],
    tip: 'Der Pool direkt nördlich von Nr. 29 ist im Winter ebenfalls beheizt („HEATED · VITA“).'
  },
  {
    id: '30',
    num: '30',
    name: 'Aqua Park Snacks & Pizzeria',
    category: 'snacks',
    zone: 'aquapark',
    resortPart: 'Südwestlich des Aqua Parks (beim Pizza-Symbol)',
    x: 181,
    y: 488,
    summary: 'Pizzeria, Burger, Snacks & Getränke direkt am südwestlichen Ausgang des Aqua Parks.',
    description: 'Auf der offiziellen Karte mit dem Pizza- und Getränke-Symbol markiert. Versorgt alle Badegäste im Aqua Park den ganzen Nachmittag mit frischer Pizza und warmen Snacks.',
    hoursSummary: '13:00 – 17:30',
    schedule: [{ label: 'Aqua Park Snacks & Pizza', time: '13:00 – 17:30' }],
    openIntervals: [[780, 1050]],
    highlights: ['Frische Pizza & Snacks', 'Direkt am Aqua Park', 'All-Inclusive'],
    tip: 'Perfekt für das Mittagessen um 13:00 Uhr, wenn die Rutschen ihre zweistündige Mittagspause machen.'
  },
  {
    id: '31',
    num: '31',
    name: 'The Bakery (Hausbäckerei)',
    category: 'snacks',
    zone: 'center',
    resortPart: 'Bei Rezeption Villaggio (Nr. 42)',
    x: 398,
    y: 444,
    summary: 'Charmante Hausbäckerei mit frisch gebackenen Croissants, Gebäck & süßen Leckereien.',
    description: 'Direkt an der Villaggio-Rezeption (Nr. 42) neben der Smoothie Bar (Nr. 17) und Red Sky Bar (Nr. 9) gelegen.',
    hoursSummary: '10:00 – 18:00',
    schedule: [{ label: 'Frisches Gebäck & Backwaren', time: '10:00 – 18:00' }],
    openIntervals: [[600, 1080]],
    highlights: ['Frische Backwaren', 'Direkt an Haltestelle D'],
    tip: 'Lässt sich wunderbar mit einem Milchshake oder Kaffee an der benachbarten Smoothie Bar (Nr. 17) kombinieren.'
  },

  // =========================================================================
  // KIDS, PLAYGROUND & VR (OFFICIAL NUMBERS 38, 49, 50)
  // =========================================================================
  {
    id: '38a',
    num: '38',
    name: 'Alba Kids Club (Am Aqua Park & Spielplatz)',
    category: 'kids',
    zone: 'aquapark',
    resortPart: 'Neben Spielplatz (Nr. 50) & Tsunami Pool (Nr. 26)',
    x: 349,
    y: 458,
    summary: 'Haupt-Kinderclub (4–12 Jahre) direkt neben dem großen Kinderspielplatz (Nr. 50).',
    description: 'Liebevoll betreuter Kinderclub direkt zwischen dem Tsunami Pool (Nr. 26) und dem Spielplatz (Nr. 50). Basteln, Malen, Kinderspiele und Animation.',
    hoursSummary: '10:00 – 12:30 & 15:00 – 17:00',
    schedule: [
      { label: 'Vormittags-Betreuung', time: '10:00 – 12:30' },
      { label: 'Nachmittags-Betreuung', time: '15:00 – 17:00' }
    ],
    openIntervals: [[600, 750], [900, 1020]],
    highlights: ['Für Kinder 4–12 Jahre', 'Direkt neben Spielplatz (Nr. 50)', 'Kostenfrei'],
    tip: 'Direkt rechts daneben liegen der Spielplatz (Nr. 50) und die Smoothie- & Eisbar (Nr. 17).'
  },
  {
    id: '38b',
    num: '38',
    name: 'Kids Club & Tischtennis (Beim El Khan Restaurant)',
    category: 'kids',
    zone: 'south',
    resortPart: 'Neben El Khan Restaurant (Nr. 3 / Bus B)',
    x: 517,
    y: 656,
    summary: 'Zweiter Kids-Club-Standort (Nr. 38) mit Tischtennis direkt am El Khan Restaurant (Nr. 3).',
    description: 'Auf der offiziellen Karte der zweite Punkt mit der Nummer 38 direkt neben dem El Khan Restaurant (Nr. 3) im südlichen Villaggio-Bereich.',
    hoursSummary: '10:00 – 12:30 & 15:00 – 17:00',
    schedule: [
      { label: 'Kids Club Programm', time: '10:00–12:30 & 15:00–17:00' }
    ],
    openIntervals: [[600, 750], [900, 1020]],
    highlights: ['Kurze Wege für Block 4000 & 5000', 'Tischtennis nebenan'],
    tip: 'Ideal für Familien, die in den Zimmerblöcken 4000 oder 5000 wohnen.'
  },
  {
    id: '49',
    num: '49',
    name: 'VR-Games Lounge & Midway Fun',
    category: 'kids',
    zone: 'aquapark',
    resortPart: 'Aqua Park West (zwischen Nr. 4 & Nr. 27)',
    x: 207,
    y: 419,
    summary: 'Virtual-Reality-Gaming-Lounge (ab 6 J.) direkt beim L’Asiatique Restaurant (Nr. 4).',
    description: 'Moderne VR-Gaming-Attraktionen für Kinder (ab 6 Jahren), Teenager und Erwachsene. Die Nutzung ist im All-Inclusive-Konzept kostenfrei enthalten.',
    hoursSummary: '19:00 – 22:00',
    schedule: [
      { label: 'VR-Gaming am Abend', time: '19:00 – 22:00' }
    ],
    openIntervals: [[1140, 1320]],
    highlights: ['Kostenlose VR-Tickets an der Rezeption', 'Ab 6 Jahren', 'Direkt bei Restaurant Nr. 4'],
    tip: 'Kostenlose VR-Tickets erhalten Sie an der Rezeption (bis zu 5 Tickets pro Zimmer/Tag).'
  },
  {
    id: '50',
    num: '50',
    name: 'Kids Playground (Kinderspielplatz)',
    category: 'kids',
    zone: 'center',
    resortPart: 'Zwischen Kids Club (Nr. 38) & Smoothie Bar (Nr. 17)',
    x: 377,
    y: 459,
    summary: 'Großer, zentral gelegener Kinderspielplatz direkt neben Kids Club (Nr. 38) und Eisbar (Nr. 17).',
    description: 'Perfekt platziert zwischen der Villaggio-Rezeption (Nr. 42), dem Kids Pool (Nr. 24), dem Kids Club (Nr. 38) und der Smoothie Bar (Nr. 17).',
    hoursSummary: '08:00 – 21:00',
    schedule: [
      { label: 'Spielplatz frei zugänglich', time: '08:00 – 21:00' }
    ],
    openIntervals: [[480, 1260]],
    highlights: ['Zentrale Lage', 'Eis & Milchshakes direkt daneben (Nr. 17)', 'Kids Pool (Nr. 24) nebenan'],
    tip: 'Eltern können direkt nebenan an der Smoothie Bar (Nr. 17) oder Terrace Bar (Nr. 16) sitzen.'
  },

  // =========================================================================
  // SPORT, AMPHITHEATRE, MARINA JETTY & SPA (OFFICIAL NUMBERS 32 – 48)
  // =========================================================================
  {
    id: '32',
    num: '32',
    name: 'The Olympic Football Court (Mit Laufbahn)',
    category: 'sport',
    zone: 'sports',
    resortPart: 'Sportzentrum West (Bus-Stop C)',
    x: 160,
    y: 592,
    summary: 'Großes Fußballfeld in olympischen Maßen inklusive Laufbahn an der Shuttle-Haltestelle C.',
    description: 'Das beeindruckende Haupt-Fußballstadion des Resorts im westlichen Sportbereich, direkt erreichbar über die Shuttle-Bus-Station C.',
    hoursSummary: '09:00 – 18:00 (kostenfrei)',
    schedule: [{ label: 'Kostenfreie Nutzung (Reservierung)', time: '09:00 – 18:00' }],
    openIntervals: [[540, 1080]],
    highlights: ['Olympisches Maß', 'Integrierte Laufbahn', 'Haltestelle C direkt am Platz'],
    tip: 'Kostenfreie Nutzung zwischen 09:00 und 18:00 Uhr nach Reservierung an der Rezeption.'
  },
  {
    id: '33',
    num: '33',
    name: 'Training Football Court',
    category: 'sport',
    zone: 'sports',
    resortPart: 'Sportzentrum West (nördlich von Nr. 32)',
    x: 142,
    y: 528,
    summary: 'Zweiter Fußball-Trainingsplatz direkt zwischen Aqua Park Snacks (Nr. 30) und Stadion (Nr. 32).',
    description: 'Kleineres Trainings-Fußballfeld für Matches, Kinderfußball und Animations-Turniere.',
    hoursSummary: '09:00 – 18:00 (kostenfrei)',
    schedule: [{ label: 'Kostenfreie Nutzung', time: '09:00 – 18:00' }],
    openIntervals: [[540, 1080]],
    highlights: ['Kleinfeld-Fußball', 'Kostenfrei mit Reservierung'],
    tip: 'Bälle und Reservierung erhalten Sie über die Rezeption.'
  },
  {
    id: '34',
    num: '34',
    name: 'Tennis Courts (2 Tennisplätze)',
    category: 'sport',
    zone: 'sports',
    resortPart: 'Sportzentrum Mitte',
    x: 298,
    y: 561,
    summary: '2 professionelle Tennisplätze im grünen Sportpark östlich des Fußballstadions.',
    description: 'Zwei gepflegte Hartplatz-Tenniscourts. Tagsüber für Hotelgäste kostenfrei nutzbar (Flutlicht am Abend gegen Gebühr).',
    hoursSummary: '09:00 – 18:00 kostenfrei (Abend-Flutlicht extra)',
    schedule: [{ label: 'Kostenfreie Tagesnutzung', time: '09:00 – 18:00' }],
    openIntervals: [[540, 1080]],
    highlights: ['2 Tennisplätze', 'Tagsüber kostenfrei', 'Reservierung an der Rezeption'],
    tip: 'Vorab an der Rezeption reservieren.'
  },
  {
    id: '35',
    num: '35',
    name: 'Paddle Courts (2 Padel-Tennis-Courts)',
    category: 'sport',
    zone: 'sports',
    resortPart: 'Sportzentrum Mitte (unterhalb Tennis Nr. 34)',
    x: 295,
    y: 620,
    summary: '2 moderne blaue Padel-Tennis-Courts direkt südlich der Tennisplätze (Nr. 34).',
    description: 'Entdecken Sie die Trendsportart Padel-Tennis auf den beiden blauen Courts direkt neben den Tennisplätzen.',
    hoursSummary: '09:00 – 20:00 (gegen Gebühr)',
    schedule: [{ label: 'Padel-Court Buchung (Rezeption)', time: '09:00 – 20:00' }],
    openIntervals: [[540, 1200]],
    highlights: ['2 Padel-Courts', 'Reservierung an der Rezeption'],
    tip: 'Padel-Courts sind laut offiziellem Pickalbatros-Konzept gebührenpflichtig und an der Rezeption buchbar.'
  },
  {
    id: '36',
    num: '36',
    name: 'Multiple Court (Multifunktionsplatz)',
    category: 'sport',
    zone: 'sports',
    resortPart: 'Bei Kreuzung B / Block 5000 & 6000',
    x: 371,
    y: 692,
    summary: 'Mehrzweck-Sportplatz für Basketball, Volleyball & Handball nahe Haltestelle B.',
    description: 'Liegt am Übergang zu den Zimmerblöcken 5000 und 6000 unweit der Shuttle-Haltestelle B.',
    hoursSummary: '09:00 – 18:00 (kostenfrei)',
    schedule: [{ label: 'Kostenfreie Nutzung', time: '09:00 – 18:00' }],
    openIntervals: [[540, 1080]],
    highlights: ['Basketball & Handball', 'Kostenfrei mit Reservierung'],
    tip: 'Schnell erreichbar von den Zimmerblöcken 5000 und 6000.'
  },
  {
    id: '37',
    num: '37',
    name: 'Bike Park (Familienfahrräder)',
    category: 'sport',
    zone: 'center',
    resortPart: 'Neben Amphitheater (Nr. 40)',
    x: 556,
    y: 499,
    summary: 'Fahrradstation für die beliebten Familienfahrräder mit Sonnendach.',
    description: 'Direkt neben dem Amphitheater (Nr. 40) und dem Beachvolleyballfeld (Nr. 45) gelegen. Perfekt, um das weitläufige Resort bequem auf Rädern zu erkunden.',
    hoursSummary: '09:00 – 20:00',
    schedule: [{ label: 'Fahrradverleih (schließt 20:00 Uhr)', time: '09:00 – 20:00' }],
    openIntervals: [[540, 1200]],
    highlights: ['Familienräder mit Sonnendach', 'Ideal für große Wege im Resort'],
    tip: 'Hinweis: Kinder unter 12 Jahren dürfen die Fahrräder nur in Begleitung der Eltern nutzen.'
  },
  {
    id: '39',
    num: '39',
    name: 'Billiard & Table Tennis',
    category: 'sport',
    zone: 'center',
    resortPart: 'Zentraler Komplex (zwischen Nr. 5, 6 & 7)',
    x: 547,
    y: 430,
    summary: 'Tischtennis (kostenfrei) & Billard (gegen Gebühr) im zentralen Restaurant- und Barkomplex.',
    description: 'Direkt im zentralen Gebäudeensemble bei Alfredo (Nr. 5), Mediterranean (Nr. 6) und Tabliya (Nr. 7) gelegen.',
    hoursSummary: '10:00 – 00:00',
    schedule: [
      { label: 'Tischtennis (kostenfrei)', time: '10:00 – 22:00' },
      { label: 'Billard (gegen Aufpreis)', time: '12:00 – 00:00' }
    ],
    openIntervals: [[600, 1440]],
    highlights: ['Tischtennis gratis', 'Billard bis Mitternacht'],
    tip: 'Ideal für eine Partie vor oder nach dem Abendessen.'
  },
  {
    id: '40',
    num: '40',
    name: 'Amphitheatre (Mini-Disco & Abendshow)',
    category: 'sport',
    zone: 'center',
    resortPart: 'Zentral südlich des Hauptpools',
    x: 526,
    y: 499,
    summary: 'Große Freiluft-Showbühne für die tägliche Kinder-Minidisco und das Abendprogramm.',
    description: 'Zwischen Gym/Spa (Nr. 43) und dem Bike Park (Nr. 37) gelegen. Jeden Abend Treffpunkt für Familien zur Mini-Disco und den großen Bühnenshows.',
    hoursSummary: 'Mini-Disco 20:30 · Abendshow 21:15',
    schedule: [
      { label: 'Kinder Mini-Disco', time: 'ca. 20:30' },
      { label: 'Internationale Abendshow', time: 'ca. 21:15' }
    ],
    openIntervals: [[1200, 1365]],
    highlights: ['Tägliche Mini-Disco', 'Abendshows unter freiem Himmel', 'Amphitheatre Bar (Nr. 11) direkt daneben'],
    tip: 'Getränke erhalten Sie direkt an der angrenzenden Amphitheatre Bar (Nr. 11).'
  },
  {
    id: '41',
    num: '41',
    name: 'Marina Jetty (85m Schnorchel-Steg) & Open Air Disco',
    category: 'sport',
    zone: 'center',
    resortPart: 'Ostküste am Hausriff',
    x: 622,
    y: 416,
    summary: '85 Meter langer Holzsteg direkt ins Hausriff zum Schnorcheln & abendliche Open-Air-Disco.',
    description: 'Der wichtigste Einstiegspunkt für Schnorchler über das Korallenriffdach direkt ins tiefe Wasser des Roten Meeres. Unmittelbar neben der White Bar (Nr. 19) und Snacks Vita (Nr. 29).',
    hoursSummary: 'Strand & Steg 08:00 – 18:30',
    schedule: [
      { label: 'Schnorchel-Steg & Strandbereich', time: '08:00 – 18:30' }
    ],
    openIntervals: [[480, 1110]],
    highlights: ['85m Steg ans Hausriff', 'Top-Schnorchelspot', 'Rettungsschwimmer vor Ort'],
    tip: 'Bei starkem Wind/Wellengang auf die Flagge am Steg achten. Badeschuhe für die felsigeren Strandabschnitte empfohlen.'
  },
  {
    id: '43',
    num: '43',
    name: 'GYM, Beauty Salon & Spa',
    category: 'sport',
    zone: 'center',
    resortPart: 'Südöstlich der Villaggio-Rezeption',
    x: 481,
    y: 496,
    summary: 'Kostenloses Fitnessstudio (ab 16 J.) sowie Spa mit Sauna, Hamam, Jacuzzi, Massagen & Beauty-Salon.',
    description: 'Auf der offiziellen Karte mit dem Hantel-Symbol markiert. Das moderne Gym ist ab 16 Jahren kostenfrei, der Spa-Bereich (Adults Only) bietet Massagen und Wellness gegen Gebühr.',
    hoursSummary: 'Gym 09:00–19:00 · Spa 09:00–18:00',
    schedule: [
      { label: 'Fitnessstudio / Gym (kostenfrei, 16+)', time: '09:00 – 19:00' },
      { label: 'Spa & Beauty Salon (gegen Gebühr)', time: '09:00 – 18:00' }
    ],
    openIntervals: [[540, 1140]],
    highlights: ['Fitness Center gratis (16+)', 'Sauna, Hamam & Massagen', 'Beauty Salon'],
    tip: 'Klimatisiertes Training mit Blick auf die Gartenanlage.'
  },
  {
    id: '45a',
    num: '45',
    name: 'Beach Volleyball Court (Nord am Steg)',
    category: 'sport',
    zone: 'center',
    resortPart: 'Strand nördlich des Marina Jetty (Nr. 41)',
    x: 619,
    y: 346,
    summary: 'Oberes Beachvolleyballfeld direkt am Strand nördlich des Schnorchel-Stegs (Nr. 41).',
    description: 'Mit dem Volleyball-Symbol auf der offiziellen Karte markiert. Tägliche Animationsspiele und freie Nutzung.',
    hoursSummary: '09:00 – 18:00 (kostenfrei)',
    schedule: [{ label: 'Freie Nutzung & Animation', time: '09:00 – 18:00' }],
    openIntervals: [[540, 1080]],
    highlights: ['Direkt am Strand', 'Kostenfrei'],
    tip: 'Direkt daneben liegt ein im Winter beheizter Meerblick-Pool.'
  },
  {
    id: '45b',
    num: '45',
    name: 'Beach Volleyball Court (Mitte beim Bike Park)',
    category: 'sport',
    zone: 'center',
    resortPart: 'Strand nahe Bike Park (Nr. 37)',
    x: 585,
    y: 504,
    summary: 'Zweites Beachvolleyballfeld am mittleren Strandabschnitt beim Bike Park (Nr. 37).',
    description: 'Zentral zwischen Marina Jetty (Nr. 41) und Beach Club (Nr. 28) gelegen.',
    hoursSummary: '09:00 – 18:00 (kostenfrei)',
    schedule: [{ label: 'Freie Nutzung & Turniere', time: '09:00 – 18:00' }],
    openIntervals: [[540, 1080]],
    highlights: ['Zentraler Strandabschnitt', 'Kostenfrei'],
    tip: 'Treffpunkt für die täglichen Beachvolleyball-Matches des Animationsteams.'
  },
  {
    id: '48',
    num: '48',
    name: 'Diving Center (Tauchbasis Nordspitze)',
    category: 'sport',
    zone: 'north',
    resortPart: 'Ganz oben an der Nordspitze (Block 1000)',
    x: 412,
    y: 59,
    summary: 'Professionelles Tauch- & Wassersportzentrum an der nördlichsten Spitze des Resorts.',
    description: 'Ganz oben im Norden der Karte neben der Beach Bar (Nr. 8) gelegen. Hier starten Tauchkurse, Schnorchelausflüge per Boot sowie Wassersportaktivitäten.',
    hoursSummary: '08:30 – 17:30',
    schedule: [{ label: 'Diving & Water Sports Center', time: '08:30 – 17:30' }],
    openIntervals: [[510, 1050]],
    highlights: ['Tauchgänge & Schnorcheltouren', 'Ausrüstungsverleih', 'Direkt am Nordstrand'],
    tip: 'Direkt daneben befinden sich ein WC und die nördliche Beach Bar (Nr. 8).'
  },

  // =========================================================================
  // RECEPTION, CLINIC, SHOPS & SERVICE (OFFICIAL NUMBERS 42, 44, 46, 47, 51)
  // =========================================================================
  {
    id: '42',
    num: '42',
    name: 'Reception Villaggio (24h Hauptrezeption)',
    category: 'service',
    zone: 'center',
    resortPart: 'Zentrum · Shuttle-Haltestelle D',
    x: 400,
    y: 420,
    summary: '24-Stunden-Hauptrezeption des Pickalbatros Villaggio, Gästebetreuung, ATM & Shuttle-Stop D.',
    description: 'Das Herzstück der Anlage direkt an der Shuttle-Bus-Haltestelle D. Hier befinden sich Check-in/Check-out, Guest Relations (für À-la-carte-Reservierungen), Geldautomat (ATM), Lobby Bar, Red Sky Bar (Nr. 9), Terrace Bar (Nr. 16) und die Bakery (Nr. 31).',
    hoursSummary: '24 Stunden geöffnet',
    schedule: [
      { label: 'Rezeption & Concierge', time: '24 Stunden' },
      { label: 'À-la-carte Reservierung (Guest Relations)', time: '11:30–12:30 & 17:30–18:30' },
      { label: 'Check-in / Check-out', time: 'ab 14:00 / bis 12:00' }
    ],
    openIntervals: [[0, 1440]],
    highlights: ['24/7 Mehrsprachig (DE/EN)', 'Shuttle-Bus Haltestelle D', 'Geldautomat (ATM)', 'Kostenloses WLAN'],
    tip: 'Frühstücksboxen für frühe Ausflüge können hier bis 20:00 Uhr am Vorabend bestellt werden.'
  },
  {
    id: '44',
    num: '44',
    name: 'Hotel Parking (Parkplatz)',
    category: 'service',
    zone: 'center',
    resortPart: 'Südlich der Villaggio-Rezeption',
    x: 421,
    y: 548,
    summary: 'Kostenloser Hotelparkplatz südlich der Villaggio-Rezeption (Nr. 42).',
    description: 'Auf der Karte mit dem orangen Auto-Symbol markiert.',
    hoursSummary: '24 Stunden',
    schedule: [{ label: 'Parkplatz (kostenfrei)', time: '24 Stunden' }],
    openIntervals: [[0, 1440]],
    highlights: ['Bewachter Parkplatz', 'Kostenfrei für Gäste'],
    tip: 'Liegt direkt an der internen Shuttle-Bus-Route zwischen Haltestelle B und D.'
  },
  {
    id: '46',
    num: '46',
    name: 'Clinic (24h Arzt & Erste Hilfe)',
    category: 'service',
    zone: 'aquapark',
    resortPart: 'Westlicher Eingangsbereich (beim Erste-Hilfe-Symbol)',
    x: 98,
    y: 429,
    summary: '24-Stunden-Hotelklinik & ärztlicher Bereitschaftsdienst am westlichen Rand beim Aqua Park.',
    description: 'Mit dem roten Erste-Hilfe-Koffer auf der Karte markiert, direkt über der Shopping Area (Nr. 47).',
    hoursSummary: '24 Stunden / 7 Tage',
    schedule: [{ label: 'Klinik & Arzt auf Abruf', time: '24 Stunden' }],
    openIntervals: [[0, 1440]],
    highlights: ['24/7 Notfallbereitschaft', 'Direkt neben Shopping Area (Nr. 47)'],
    tip: 'Ärztliche Behandlungen sind gebührenpflichtig; im Bedarfsfall kann auch jederzeit die Rezeption kontaktiert werden.'
  },
  {
    id: '47',
    num: '47',
    name: 'Shopping Area (Shops, Minimarkt & Souvenirs)',
    category: 'service',
    zone: 'aquapark',
    resortPart: 'Westlicher Bereich unterhalb Clinic (Nr. 46)',
    x: 100,
    y: 470,
    summary: 'Einkaufspassage mit Souvenirshops, Badeartikeln, Badeschuhen, Sonnencreme & Minimarkt.',
    description: 'Auf der Karte mit dem Einkaufswagen-Symbol markiert, direkt westlich des Aqua Parks.',
    hoursSummary: '09:00 – 22:00',
    schedule: [{ label: 'Shops & Minimarkt', time: '09:00 – 22:00' }],
    openIntervals: [[540, 1320]],
    highlights: ['Badeschuhe & Schnorchelmasken', 'Sonnencreme & Souvenirs'],
    tip: 'Praktisch, falls Sie Badeschuhe für das Hausriff oder Schwimmhilfen für den Aqua Park benötigen.'
  },
  {
    id: '51',
    num: '51',
    name: 'Reception Vita (24h Rezeption Vita & Bus-Stop E)',
    category: 'service',
    zone: 'north',
    resortPart: 'Vita Nord-Zentrum (Shuttle-Haltestelle E)',
    x: 448,
    y: 303,
    summary: '24-Stunden-Rezeption des Schwesterhotels Pickalbatros Vita Resort an der Haltestelle E.',
    description: 'Direkt an der Shuttle-Bus-Haltestelle E und der Columbus Bar / English Pub (Nr. 21) gelegen. Betreut insbesondere die Zimmerblöcke 1000 und 2000.',
    hoursSummary: '24 Stunden geöffnet',
    schedule: [
      { label: 'Rezeption Vita & Lobby', time: '24 Stunden' },
      { label: 'Afternoon Tea (Vita Lobby)', time: '14:00 – 19:00' }
    ],
    openIntervals: [[0, 1440]],
    highlights: ['24/7 Rezeption', 'Shuttle-Haltestelle E', 'Direkt an Columbus Bar (Nr. 21)'],
    tip: 'Direkt daneben bei Nr. 21 (Columbus Bar) gibt es von 10–12 und 19–22 Uhr Eiscreme!'
  }
];

// Camera Presets for Zone Quick-Jumps (in 810 x 1030 official map coordinates)
const ZONE_CAMERAS = {
  overview: { x: 405, y: 515, zoom: 1.0  },
  aquapark: { x: 260, y: 440, zoom: 1.85 },
  center:   { x: 520, y: 455, zoom: 1.95 },
  south:    { x: 540, y: 760, zoom: 1.65 },
  north:    { x: 465, y: 240, zoom: 1.8  },
  sports:   { x: 250, y: 610, zoom: 1.8  }
};

const MAP_WIDTH = 810;
const MAP_HEIGHT = 1030;

const state = {
  activeCategory: 'all',
  searchQuery: '',
  onlyOpenNow: false,
  showHeatedMap: false,
  selectedPoiId: null,
  currentMinutes: 765,
  isSimulatedTime: false,
  mobileSheetState: 'collapsed',
  scale: 1,
  minScale: 0.35,
  maxScale: 3.5,
  tx: 0,
  ty: 0
};

const dom = {};

document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  initLiveClock();
  renderCategoryCounts();
  renderMapMarkers();
  renderDirectoryList();
  initMapPanZoom();
  initControlsAndEvents();
  setTimeout(() => fitMapToViewport(false), 40);
});

function cacheDom() {
  dom.viewport = document.getElementById('map-viewport');
  dom.stage = document.getElementById('map-stage');
  dom.mapImg = document.getElementById('official-map-img');
  dom.markersLayer = document.getElementById('map-markers-layer');
  dom.poiList = document.getElementById('poi-list-container');
  dom.directoryView = document.getElementById('directory-view');
  dom.detailView = document.getElementById('detail-view');
  dom.detailContent = document.getElementById('poi-detail-content');
  dom.directoryHeading = document.getElementById('directory-heading');
  dom.directorySubheading = document.getElementById('directory-subheading');
  dom.searchInput = document.getElementById('poi-search-input');
  dom.clearSearchBtn = document.getElementById('clear-search-btn');
  dom.openNowToggle = document.getElementById('open-now-toggle');
  dom.heatedMapToggle = document.getElementById('heated-map-toggle');
  dom.timeSimBtn = document.getElementById('time-sim-btn');
  dom.timeDisplay = document.getElementById('current-time-display');
  dom.timePopover = document.getElementById('time-sim-popover');
  dom.timeSlider = document.getElementById('time-slider');
  dom.timeSliderVal = document.getElementById('time-slider-value');
  dom.timeResetLiveBtn = document.getElementById('time-reset-live-btn');
  dom.inspectorPanel = document.getElementById('inspector-panel');
  dom.sheetHandleBar = document.getElementById('sheet-handle-bar');
  dom.sheetSummaryText = document.getElementById('sheet-summary-text');
  dom.sheetExpandHint = document.getElementById('sheet-expand-hint');
  dom.modalBackdrop = document.getElementById('info-modal-backdrop');
}

/* ==========================================================================
   TIME & LIVE OPENING STATUS ENGINE
   ========================================================================== */

function initLiveClock() {
  syncToRealTime();
  setInterval(() => {
    if (!state.isSimulatedTime) syncToRealTime();
  }, 60000);
}

function syncToRealTime() {
  const now = new Date();
  state.currentMinutes = now.getHours() * 60 + now.getMinutes();
  state.isSimulatedTime = false;
  updateTimeUI();
  refreshStatusDependentViews();
}

function setSimulatedMinutes(mins) {
  state.currentMinutes = Math.max(0, Math.min(1439, Number(mins)));
  state.isSimulatedTime = true;
  updateTimeUI();
  refreshStatusDependentViews();
}

function formatMinutes(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function updateTimeUI() {
  const formatted = formatMinutes(state.currentMinutes);
  dom.timeDisplay.textContent = formatted;
  dom.timeSlider.value = state.currentMinutes;
  dom.timeSliderVal.textContent = `${formatted} Uhr`;
  dom.timeSimBtn.classList.toggle('active', state.isSimulatedTime);
}

function isPoiOpenAt(poi, minutes) {
  return poi.openIntervals.some(([start, end]) => minutes >= start && minutes <= end);
}

/* ==========================================================================
   FILTERING, COUNTS & MARKER RENDERING
   ========================================================================== */

function getFilteredPois() {
  const q = state.searchQuery.trim().toLowerCase();
  return OFFICIAL_POIS.filter((poi) => {
    if (state.activeCategory !== 'all' && poi.category !== state.activeCategory) return false;
    if (state.onlyOpenNow && !isPoiOpenAt(poi, state.currentMinutes)) return false;
    if (q) {
      // Exact number match if query is digits
      if (/^\d+$/.test(q)) {
        return poi.num === q;
      }
      const haystack = `${poi.num} nr.${poi.num} #${poi.num} ${poi.name} ${poi.summary} ${poi.description} ${poi.highlights.join(' ')} ${poi.resortPart}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

function renderCategoryCounts() {
  const counts = {
    all: OFFICIAL_POIS.length,
    restaurants: 0,
    snacks: 0,
    bars: 0,
    pools: 0,
    kids: 0,
    sport: 0,
    service: 0
  };
  OFFICIAL_POIS.forEach((p) => {
    if (counts[p.category] !== undefined) counts[p.category]++;
  });
  Object.keys(counts).forEach((cat) => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = counts[cat];
  });
}

function renderMapMarkers() {
  dom.markersLayer.innerHTML = '';
  OFFICIAL_POIS.forEach((poi) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'map-pin';
    btn.id = `pin-${poi.id}`;
    btn.dataset.id = poi.id;
    btn.dataset.category = poi.category;
    btn.style.left = `${poi.x}px`;
    btn.style.top = `${poi.y}px`;
    btn.setAttribute('aria-label', `Nr. ${poi.num}: ${poi.name}`);

    const isOpen = isPoiOpenAt(poi, state.currentMinutes);

    btn.innerHTML = `
      <span class="pin-tooltip">Nr. ${poi.num} · ${poi.name}</span>
      <div class="pin-circle">
        <span>${poi.num}</span>
        <span class="pin-status-dot ${isOpen ? 'open' : 'closed'}"></span>
      </div>
    `;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectPoi(poi.id, true);
    });

    dom.markersLayer.appendChild(btn);
  });
  updateMarkersState();
}

function updateMarkersState() {
  const filteredIds = new Set(getFilteredPois().map((p) => p.id));
  OFFICIAL_POIS.forEach((poi) => {
    const pin = document.getElementById(`pin-${poi.id}`);
    if (!pin) return;
    const isVisible = filteredIds.has(poi.id);
    const isSelected = state.selectedPoiId === poi.id;
    const isOpen = isPoiOpenAt(poi, state.currentMinutes);

    pin.classList.toggle('is-filtered-out', !isVisible);
    pin.classList.toggle('is-selected', isSelected);

    const dot = pin.querySelector('.pin-status-dot');
    if (dot) dot.className = `pin-status-dot ${isOpen ? 'open' : 'closed'}`;
  });
}

/* ==========================================================================
   DIRECTORY LIST & DETAIL INSPECTOR RENDERING
   ========================================================================== */

function renderDirectoryList() {
  const filtered = getFilteredPois();
  dom.poiList.innerHTML = '';

  const categoryTitleMap = {
    all: 'Offizielle Legende (Nr. 1–51)',
    restaurants: 'Restaurants (Nr. 1–7)',
    snacks: 'Snacks & Bakery (Nr. 28–31)',
    bars: 'Bars, Cafés & Eis (Nr. 8–22)',
    pools: 'Aqua Park & Pools (Nr. 23–27)',
    kids: 'Kids Club, Spielplatz & VR (38, 49, 50)',
    sport: 'Sport, Riff-Steg & Spa (Nr. 32–48)',
    service: 'Rezeption, Klinik & Shops'
  };

  dom.directoryHeading.textContent = categoryTitleMap[state.activeCategory] || 'Offizielle Legende';
  dom.directorySubheading.textContent = `${filtered.length} ${filtered.length === 1 ? 'Punkt' : 'Punkte'} auf der Karte · ${formatMinutes(state.currentMinutes)} Uhr`;

  const selectedObj = OFFICIAL_POIS.find((p) => p.id === state.selectedPoiId);
  dom.sheetSummaryText.textContent = selectedObj
    ? `Nr. ${selectedObj.num} · ${selectedObj.name}`
    : `Offizielle Legende (${filtered.length} Orte)`;

  if (filtered.length === 0) {
    dom.poiList.innerHTML = `
      <div class="detail-section" style="text-align:center; padding: 24px 14px;">
        <p style="font-weight:700; margin-bottom:6px;">Kein Punkt auf der Karte gefunden</p>
        <p style="font-size:12.5px; color:var(--text-secondary); margin-bottom:12px;">
          Suche nach einer Nummer von 1 bis 51 oder setze die Filter zurück.
        </p>
        <button type="button" id="reset-all-filters-btn" class="back-btn">Alle Filter zurücksetzen</button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-all-filters-btn');
    if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
    return;
  }

  filtered.forEach((poi) => {
    const isOpen = isPoiOpenAt(poi, state.currentMinutes);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'poi-card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="poi-num-badge" data-category="${poi.category}">${poi.num}</div>
      <div class="poi-card-body">
        <div class="poi-card-top">
          <span class="poi-card-title">${poi.name}</span>
          <span class="status-badge ${isOpen ? 'open' : 'closed'}">${isOpen ? 'Geöffnet' : 'Geschlossen'}</span>
        </div>
        <p class="poi-card-sub">${poi.summary}</p>
        <div class="poi-card-meta">
          <span class="meta-pill">${poi.resortPart}</span>
          <span>🕒 ${poi.hoursSummary}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => selectPoi(poi.id, true));
    dom.poiList.appendChild(card);
  });
}

function selectPoi(poiId, panToMarker = true) {
  const poi = OFFICIAL_POIS.find((p) => p.id === poiId);
  if (!poi) return;

  state.selectedPoiId = poi.id;
  updateMarkersState();

  const isOpen = isPoiOpenAt(poi, state.currentMinutes);
  const catMeta = CATEGORY_META[poi.category];

  const scheduleRowsHtml = poi.schedule
    .map(
      (item) => `
      <div class="hours-item">
        <span class="hours-label">${item.label}</span>
        <span class="hours-time">${item.time}</span>
      </div>
    `
    )
    .join('');

  const highlightsHtml = poi.highlights
    .map((h) => `<span class="highlight-pill">${h}</span>`)
    .join('');

  dom.detailContent.innerHTML = `
    <div class="detail-hero-header">
      <div class="detail-num-lg poi-num-badge" data-category="${poi.category}">${poi.num}</div>
      <div class="detail-title-group">
        <span class="detail-category-tag">Kartenpunkt Nr. ${poi.num} · ${catMeta.label}</span>
        <h2 class="detail-title">${poi.name}</h2>
      </div>
    </div>

    <div class="detail-status-strip">
      <span class="status-badge ${isOpen ? 'open' : 'closed'}">
        ${isOpen ? '● Jetzt geöffnet' : '○ Derzeit geschlossen'} (${formatMinutes(state.currentMinutes)} Uhr)
      </span>
      <span class="meta-pill">${poi.resortPart}</span>
    </div>

    <p class="detail-description">${poi.description}</p>

    <div class="detail-section">
      <h3 class="detail-section-title">Öffnungszeiten &amp; Hinweise</h3>
      <div class="hours-list">
        ${scheduleRowsHtml}
      </div>
    </div>

    <div class="detail-section">
      <h3 class="detail-section-title">Highlights</h3>
      <div class="highlights-chips">
        ${highlightsHtml}
      </div>
    </div>

    <div class="detail-tip-box">
      <strong>Tipp zu Nr. ${poi.num}:</strong> ${poi.tip}
    </div>
  `;

  dom.directoryView.classList.add('hidden');
  dom.detailView.classList.remove('hidden');
  dom.sheetSummaryText.textContent = `Nr. ${poi.num} · ${poi.name}`;

  if (window.innerWidth <= 960 && state.mobileSheetState === 'collapsed') {
    setMobileSheetState('half');
  }

  if (panToMarker) {
    const rect = dom.viewport.getBoundingClientRect();
    const baseFit = Math.min(rect.width / MAP_WIDTH, rect.height / MAP_HEIGHT);
    focusMapOnPoint(poi.x, poi.y, Math.max(state.scale, baseFit * 1.85));
  }
}

function closeDetailView() {
  state.selectedPoiId = null;
  dom.detailView.classList.add('hidden');
  dom.directoryView.classList.remove('hidden');
  updateMarkersState();
  renderDirectoryList();
}

function navigateAdjacentPoi(direction) {
  const list = getFilteredPois();
  if (list.length === 0) return;
  const currentIndex = list.findIndex((p) => p.id === state.selectedPoiId);
  const nextIndex = currentIndex === -1
    ? 0
    : (currentIndex + direction + list.length) % list.length;
  selectPoi(list[nextIndex].id, true);
}

function refreshStatusDependentViews() {
  updateMarkersState();
  renderDirectoryList();
  if (state.selectedPoiId) selectPoi(state.selectedPoiId, false);
}

function resetAllFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.onlyOpenNow = false;
  dom.searchInput.value = '';
  dom.clearSearchBtn.classList.add('hidden');
  dom.openNowToggle.setAttribute('aria-pressed', 'false');
  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.category === 'all');
  });
  refreshStatusDependentViews();
}

/* ==========================================================================
   INTERACTIVE PAN, ZOOM & PINCH-TO-ZOOM ENGINE (810 x 1030 OFFICIAL MAP)
   ========================================================================== */

function applyMapTransform(animate = false) {
  dom.stage.style.transition = animate
    ? 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)'
    : 'none';
  dom.stage.style.transform = `translate3d(${state.tx}px, ${state.ty}px, 0) scale(${state.scale})`;
}

function clampTranslation() {
  const rect = dom.viewport.getBoundingClientRect();
  const scaledW = MAP_WIDTH * state.scale;
  const scaledH = MAP_HEIGHT * state.scale;

  const padX = Math.min(200, rect.width * 0.3);
  const padY = Math.min(220, rect.height * 0.3);

  const minTx = Math.min(padX, rect.width - scaledW - padX);
  const maxTx = Math.max(rect.width - scaledW - padX, padX);
  const minTy = Math.min(padY, rect.height - scaledH - padY);
  const maxTy = Math.max(rect.height - scaledH - padY, padY);

  state.tx = Math.max(minTx, Math.min(maxTx, state.tx));
  state.ty = Math.max(minTy, Math.min(maxTy, state.ty));
}

function fitMapToViewport(animate = true) {
  const rect = dom.viewport.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const isMobile = window.innerWidth <= 960;

  const topClearance = isMobile ? 105 : 110;
  const bottomClearance = isMobile ? 135 : 80;
  const availW = rect.width - (isMobile ? 16 : 48);
  const availH = Math.max(240, rect.height - topClearance - bottomClearance);

  const fitScale = Math.max(
    state.minScale,
    Math.min(1.5, Math.min(availW / MAP_WIDTH, availH / MAP_HEIGHT))
  );

  state.scale = fitScale;
  state.tx = (rect.width - MAP_WIDTH * fitScale) / 2;
  state.ty = topClearance + (availH - MAP_HEIGHT * fitScale) / 2;

  applyMapTransform(animate);
}

function focusMapOnPoint(mapX, mapY, targetScale = state.scale) {
  const rect = dom.viewport.getBoundingClientRect();
  const isMobile = window.innerWidth <= 960;

  state.scale = Math.max(state.minScale, Math.min(state.maxScale, targetScale));

  const centerX = rect.width / 2;
  const centerY = isMobile ? rect.height * 0.36 : rect.height * 0.52;

  state.tx = centerX - mapX * state.scale;
  state.ty = centerY - mapY * state.scale;

  clampTranslation();
  applyMapTransform(true);
}

function zoomAtScreenPoint(factor, screenX, screenY, animate = true) {
  const newScale = Math.max(
    state.minScale,
    Math.min(state.maxScale, state.scale * factor)
  );
  if (Math.abs(newScale - state.scale) < 0.001) return;

  const mapX = (screenX - state.tx) / state.scale;
  const mapY = (screenY - state.ty) / state.scale;

  state.scale = newScale;
  state.tx = screenX - mapX * state.scale;
  state.ty = screenY - mapY * state.scale;

  clampTranslation();
  applyMapTransform(animate);
}

function initMapPanZoom() {
  const activePointers = new Map();
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialTx = 0;
  let initialTy = 0;
  let movedDistance = 0;
  let initialPinchDist = null;
  let initialPinchScale = 1;
  let pinchMidX = 0;
  let pinchMidY = 0;

  dom.viewport.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.map-controls') || e.target.closest('.zone-jump-bar') || e.target.closest('.map-pin')) {
      return;
    }
    dom.viewport.setPointerCapture(e.pointerId);
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.size === 1) {
      isDragging = true;
      movedDistance = 0;
      startX = e.clientX;
      startY = e.clientY;
      initialTx = state.tx;
      initialTy = state.ty;
      dom.viewport.classList.add('is-dragging');
    } else if (activePointers.size === 2) {
      isDragging = false;
      const pts = Array.from(activePointers.values());
      initialPinchDist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      initialPinchScale = state.scale;
      const rect = dom.viewport.getBoundingClientRect();
      pinchMidX = (pts[0].x + pts[1].x) / 2 - rect.left;
      pinchMidY = (pts[0].y + pts[1].y) / 2 - rect.top;
    }
  });

  dom.viewport.addEventListener('pointermove', (e) => {
    if (!activePointers.has(e.pointerId)) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.size === 1 && isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      movedDistance = Math.hypot(dx, dy);
      state.tx = initialTx + dx;
      state.ty = initialTy + dy;
      clampTranslation();
      applyMapTransform(false);
    } else if (activePointers.size === 2 && initialPinchDist) {
      const pts = Array.from(activePointers.values());
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      if (dist > 10) {
        const factor = (dist / initialPinchDist) * (initialPinchScale / state.scale);
        zoomAtScreenPoint(factor, pinchMidX, pinchMidY, false);
      }
    }
  });

  const handlePointerUp = (e) => {
    activePointers.delete(e.pointerId);
    if (activePointers.size < 2) initialPinchDist = null;
    if (activePointers.size === 0) {
      dom.viewport.classList.remove('is-dragging');
      if (isDragging && movedDistance < 6 && window.innerWidth <= 960 && state.mobileSheetState === 'expanded') {
        setMobileSheetState('collapsed');
      }
      isDragging = false;
    }
  };

  dom.viewport.addEventListener('pointerup', handlePointerUp);
  dom.viewport.addEventListener('pointercancel', handlePointerUp);

  dom.viewport.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      const rect = dom.viewport.getBoundingClientRect();
      zoomAtScreenPoint(e.deltaY < 0 ? 1.15 : 0.87, e.clientX - rect.left, e.clientY - rect.top, false);
    },
    { passive: false }
  );

  window.addEventListener('resize', () => fitMapToViewport(false));
}

/* ==========================================================================
   CONTROLS, HEATED POOLS MAP LAYER & MOBILE SHEET
   ========================================================================== */

function setMobileSheetState(targetState) {
  state.mobileSheetState = targetState;
  dom.inspectorPanel.classList.remove('sheet-half', 'sheet-expanded');
  if (targetState === 'half') {
    dom.inspectorPanel.classList.add('sheet-half');
    dom.sheetExpandHint.textContent = 'Ganz öffnen ↑';
  } else if (targetState === 'expanded') {
    dom.inspectorPanel.classList.add('sheet-expanded');
    dom.sheetExpandHint.textContent = 'Minimieren ↓';
  } else {
    dom.sheetExpandHint.textContent = 'Legende öffnen ↑';
  }
}

function initControlsAndEvents() {
  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      state.activeCategory = chip.dataset.category;
      document.querySelectorAll('.filter-chip').forEach((c) => c.classList.toggle('active', c === chip));
      if (state.selectedPoiId) {
        const cur = OFFICIAL_POIS.find((p) => p.id === state.selectedPoiId);
        if (state.activeCategory !== 'all' && cur && cur.category !== state.activeCategory) {
          closeDetailView();
        }
      }
      refreshStatusDependentViews();
    });
  });

  dom.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    dom.clearSearchBtn.classList.toggle('hidden', !state.searchQuery);
    if (state.selectedPoiId) closeDetailView();
    else refreshStatusDependentViews();
  });

  dom.clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    dom.searchInput.value = '';
    dom.clearSearchBtn.classList.add('hidden');
    refreshStatusDependentViews();
  });

  dom.openNowToggle.addEventListener('click', () => {
    state.onlyOpenNow = !state.onlyOpenNow;
    dom.openNowToggle.setAttribute('aria-pressed', String(state.onlyOpenNow));
    refreshStatusDependentViews();
  });

  // Toggle between Official Standard Map and Official Heated Pools Map
  dom.heatedMapToggle.addEventListener('click', () => {
    state.showHeatedMap = !state.showHeatedMap;
    dom.heatedMapToggle.setAttribute('aria-pressed', String(state.showHeatedMap));
    const heatedSrc = dom.mapImg.dataset.heatedSrc || './official_heated_cropped.jpg';
    const normalSrc = dom.mapImg.dataset.normalSrc || './official_map_cropped.jpg';
    dom.mapImg.src = state.showHeatedMap ? heatedSrc : normalSrc;
  });

  dom.timeSimBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dom.timePopover.classList.toggle('hidden');
  });

  dom.timeSlider.addEventListener('input', (e) => setSimulatedMinutes(e.target.value));
  dom.timeResetLiveBtn.addEventListener('click', syncToRealTime);

  document.querySelectorAll('.time-preset-chip').forEach((chip) => {
    chip.addEventListener('click', () => setSimulatedMinutes(chip.dataset.minutes));
  });

  document.addEventListener('click', (e) => {
    if (!dom.timePopover.classList.contains('hidden')) {
      if (!dom.timePopover.contains(e.target) && !dom.timeSimBtn.contains(e.target)) {
        dom.timePopover.classList.add('hidden');
      }
    }
  });

  document.getElementById('zoom-in-btn').addEventListener('click', () => {
    const rect = dom.viewport.getBoundingClientRect();
    zoomAtScreenPoint(1.28, rect.width / 2, rect.height / 2, true);
  });

  document.getElementById('zoom-out-btn').addEventListener('click', () => {
    const rect = dom.viewport.getBoundingClientRect();
    zoomAtScreenPoint(0.78, rect.width / 2, rect.height / 2, true);
  });

  document.getElementById('zoom-reset-btn').addEventListener('click', () => fitMapToViewport(true));
  document.getElementById('brand-reset-btn').addEventListener('click', () => fitMapToViewport(true));

  document.querySelectorAll('.zone-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.zone-btn').forEach((b) => b.classList.toggle('active', b === btn));
      const zoneKey = btn.dataset.zone;
      if (zoneKey === 'overview') {
        fitMapToViewport(true);
      } else if (ZONE_CAMERAS[zoneKey]) {
        const cam = ZONE_CAMERAS[zoneKey];
        const rect = dom.viewport.getBoundingClientRect();
        const baseFit = Math.min(rect.width / MAP_WIDTH, rect.height / MAP_HEIGHT);
        focusMapOnPoint(cam.x, cam.y, Math.max(0.85, baseFit * cam.zoom));
      }
    });
  });

  document.getElementById('back-to-list-btn').addEventListener('click', closeDetailView);
  document.getElementById('prev-poi-btn').addEventListener('click', () => navigateAdjacentPoi(-1));
  document.getElementById('next-poi-btn').addEventListener('click', () => navigateAdjacentPoi(1));

  dom.sheetHandleBar.addEventListener('click', () => {
    if (state.mobileSheetState === 'collapsed') setMobileSheetState('half');
    else if (state.mobileSheetState === 'half') setMobileSheetState('expanded');
    else setMobileSheetState('collapsed');
  });

  const openModal = () => dom.modalBackdrop.classList.remove('hidden');
  const closeModal = () => dom.modalBackdrop.classList.add('hidden');
  document.getElementById('dine-around-info-btn').addEventListener('click', openModal);
  document.getElementById('meal-schedule-btn').addEventListener('click', openModal);
  document.getElementById('close-modal-btn').addEventListener('click', closeModal);
  dom.modalBackdrop.addEventListener('click', (e) => {
    if (e.target === dom.modalBackdrop) closeModal();
  });
}
