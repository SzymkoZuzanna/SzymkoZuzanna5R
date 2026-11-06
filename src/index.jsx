import React, { useState, useEffect, useRef } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import ButtonMsg from './ButtonMsg.jsx';

// Tablica gier: [tytuł, krótki opis, ciekawostka, gatunek, rok premiery, dłuższy opis, ocena]
const GAMES_DATA = [
  [
    'Minecraft',
    'Gra survivalowa w otwartym świecie, w której jedynym ograniczeniem jest wyobraźnia.',
    'Creeper powstał przez pomyłkę: twórca zamienił wymiary w modelu świni.',
    'Sandbox',
    '2011',
    'Zaczynasz w losowo wygenerowanym świecie z kostek. Zbierasz surowce, budujesz schronienie i bronisz się przed potworami po zmroku. W trybie kreatywnym możesz budować bez żadnych ograniczeń.',
    7,
  ],
  [
    'Cyberpunk 2077',
    'Futurystyczne action-RPG osadzone w Night City, mieście korporacji i gangów.',
    'Gra opiera się na papierowym systemie RPG autorstwa Mike’a Pondsmitha.',
    'RPG',
    '2020',
    'Wcielasz się w V, najemnika, który przyjmuje ryzykowne zlecenie i trafia na chip zmieniający jego życie. To od Ciebie zależy, czy problemy rozwiązujesz siłą, hakowaniem czy rozmową.',
    8,
  ],
  [
    'Wiedźmin 3: Dziki Gon',
    'Przygoda Geralta z Rivii w ogromnym, żywym świecie pełnym trudnych wyborów.',
    'Zdobyła tytuł Gry Roku na gali The Game Awards w 2015 roku.',
    'RPG',
    '2015',
    'Geralt szuka Ciri, swojej przybranej córki, a po drodze podejmuje się zleceń na potwory. Świat jest pełen pobocznych historii, w których decyzje mają prawdziwe skutki. Gra bazuje na książkach Andrzeja Sapkowskiego.',
    10,
  ],
  [
    'Valorant',
    'Taktyczny shooter 5v5 od Riot Games, w którym każdy agent ma własne umiejętności.',
    'Podczas produkcji gra nosiła kodową nazwę Project A.',
    'Strzelanka',
    '2020',
    'Dwie drużyny po pięciu graczy walczą o podłożenie lub rozbrojenie ładunku. Oprócz celności liczy się współpraca, bo agenci świetnie się uzupełniają. Gra jest darmowa.',
    9,
  ],
  [
    'Counter-Strike 2',
    'Taktyczny shooter oparty na precyzji, kontroli odrzutu i współpracy drużyny.',
    'Seria wywodzi się z modyfikacji do Half-Life’a z 1999 roku.',
    'Strzelanka',
    '2023',
    'Terroryści i antyterroryści grają krótkie rundy. W każdej kupujesz broń za zarobione pieniądze, więc ważne jest też planowanie wydatków. To jedna z najpopularniejszych gier esportowych na świecie.',
    7,
  ],
  [
    'Fortnite',
    'Arena na 100 graczy, w której strzelanie łączy się z budowaniem konstrukcji.',
    'Koncert Travisa Scotta w grze obejrzało jednocześnie ponad 12 milionów osób.',
    'Sieciowa',
    '2017',
    'Stu graczy ląduje na wyspie i walczy do momentu, aż zostanie ostatni. Zbierasz broń i materiały, z których w locie budujesz ściany i rampy. Gra jest darmowa i regularnie zmienia mapę oraz wydarzenia.',
    7,
  ],
  [
    'League of Legends',
    'Arena bitewna typu MOBA, w której drużyny walczą o zniszczenie cudzej bazy.',
    'Gatunek MOBA zainspirowała mapa Defense of the Ancients z Warcrafta III.',
    'Sieciowa',
    '2009',
    'Dwie pięcioosobowe drużyny bronią swojej bazy i atakują cudzą. Każdy steruje jednym bohaterem, a pojedynczy mecz trwa zwykle od 20 do 40 minut. Gra jest darmowa i ma ogromną scenę esportową.',
    9,
  ],
  [
    'GTA V',
    'Otwarty świat San Andreas i trzech bohaterów, między którymi przełączasz się w trakcie gry.',
    'Sprzedała się w ponad 200 milionach egzemplarzy.',
    'Sandbox',
    '2013',
    'Historia Michaela, Franklina i Trevora, których łączą zuchwałe napady. Możesz swobodnie jeździć po mieście i okolicach albo wejść w tryb online. Miasto Los Santos jest wzorowane na Los Angeles.',
    9,
  ],
  [
    'Pony Island',
    'Mroczna gra metafikcyjna udająca zwykły automat z kucykami.',
    'Cała gra jest dziełem jednej osoby: Daniela Mullinsa.',
    'Przygoda',
    '2016',
    'Zaczyna się jak niewinna gra na starym automacie, ale bardzo szybko okazuje się, że coś w niej jest nie tak. Rozwiązujesz łamigłówki i próbujesz dojść, kto psuje program. To krótka gra na kilka godzin.',
    8,
  ],
  [
    'Batman: The Telltale Series',
    'Interaktywny dramat, w którym Twoje decyzje zmieniają losy Bruce’a Wayne’a i Gotham.',
    'Grasz zarówno jako Bruce Wayne, jak i jako Batman, a wybory zmieniają przebieg historii.',
    'Przygoda',
    '2016',
    'Sezon podzielony na odcinki, w którym wybierasz odpowiedzi i reakcje w kluczowych scenach. Poznajesz mroczniejszą wersję rodziny Wayne’ów. To bardziej interaktywny film niż klasyczna gra akcji.',
    10,
  ],
];

// Tablica ciekawostek, jedna losowana przy każdym odświeżeniu strony
const RANDOM_FACTS = [
  'Minecraft został po raz pierwszy opublikowany w 2009 roku przez Markusa Perssona.',
  'Riot Games, twórcy League of Legends i Valoranta, powstało w 2006 roku.',
  'Fortnite zaczynało jako płatna gra kooperacyjna, a tryb battle royale dodano w 2017 roku.',
  'Wiedźmina 3 stworzyło polskie studio CD Projekt RED.',
  'GTA V trafiło na komputery osobiste dopiero w 2015 roku, ponad rok po konsolach.',
  'Autor Pony Island, Daniel Mullins, stworzył później grę Inscryption.',
  'Creeper w Minecrafcie powstał przez przypadek, a został symbolem całej gry.',
  'Pierwszy odcinek Batmana od Telltale ukazał się w 2016 roku.',
];

const GENRES = ['Wszystkie', 'RPG', 'Strzelanka', 'Sieciowa', 'Sandbox', 'Przygoda'];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGenre, setActiveGenre] = useState('Wszystkie');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem('hamasuke_theme') !== 'light';
    } catch {
      return true;
    }
  });
  const resultsRef = useRef(null);
  const [randomFact] = useState(
    () => RANDOM_FACTS[Math.floor(Math.random() * RANDOM_FACTS.length)]
  );

  // Bootstrap 5.3 przełącza motyw atrybutem data-bs-theme
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('hamasuke_theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Przycisk "Szukaj" (lub Enter) przewija stronę do wyników
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Filtrowanie na żywo po tytule oraz wybranym gatunku
  const filteredGames = GAMES_DATA.filter(([title, , , genre]) => {
    const matchesTitle = title.toLowerCase().includes(searchTerm.toLowerCase().trim());
    const matchesGenre = activeGenre === 'Wszystkie' || genre === activeGenre;
    return matchesTitle && matchesGenre;
  });

  return (
    <>
      {/* Boczne banery wypełniają puste miejsce po bokach na szerokich ekranach */}
      <div className="pv-banner pv-banner-left d-none d-xxl-block">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.PWWh9wg65qehBBvuKbVf3QHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Baner Valorant"
        />
      </div>
      <div className="pv-banner pv-banner-right d-none d-xxl-block">
        <img
          src="https://th.bing.com/th/id/R.f3702e0357c3321a59c6e4838b315a09?rik=D6rI7UtT1OUEog&pid=ImgRaw&r=0"
          alt="Baner Cyberpunk"
        />
      </div>

      <div className="container pv-container">
        <Header isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode(!isDarkMode)} />

        <main>
          <section className="row align-items-center g-4 py-5">
            <div className="col-lg-8">
              <h1 className="pv-display pv-title mb-3">
                Portal o <span className="pv-mark">grach</span> komputerowych
              </h1>
              <p className="fs-5 mb-0">
                Moje ulubione gry w jednym miejscu: z ocenami, opisami i ciekawostkami.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <ButtonMsg />
            </div>
          </section>

          <div className="pv-fact mb-5" role="note">
            <strong>Ciekawostka:</strong> {randomFact}
          </div>

          <section className="mb-4">
            <form className="input-group input-group-lg mb-3 pv-search" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Wpisz tytuł gry"
                aria-label="Szukaj gry"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button type="button" className="btn pv-clear" onClick={() => setSearchTerm('')}>
                  Wyczyść
                </button>
              )}
              <button type="submit" className="btn pv-search-btn">
                Szukaj
              </button>
            </form>

            <div className="d-flex flex-wrap align-items-center gap-2">
              {GENRES.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  className={`btn btn-sm pv-chip ${activeGenre === genre ? 'active' : ''}`}
                >
                  {genre}
                </button>
              ))}
              <span className="ms-auto small fw-bold">
                Znaleziono: {filteredGames.length}
              </span>
            </div>
          </section>

          <section ref={resultsRef} className="pv-results">
            {filteredGames.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {filteredGames.map(
                  ([title, description, funFact, genre, year, details, rating]) => (
                    <div className="col" key={title}>
                      <Card
                        title={title}
                        description={description}
                        funFact={funFact}
                        genre={genre}
                        year={year}
                        details={details}
                        rating={rating}
                      />
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="pv-empty text-center py-5" role="alert">
                <p className="h4 pv-display mb-1">Pusto.</p>
                <span>Nie ma takiej gry. Spróbuj innej frazy albo gatunku.</span>
              </div>
            )}
          </section>
        </main>

        <footer className="pv-footer mt-5 py-4 small">
          hamasuke.pl, projekt szkolny w React i Bootstrap, {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}