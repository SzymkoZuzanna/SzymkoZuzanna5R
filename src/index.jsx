import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import ButtonMsg from './ButtonMsg.jsx';
import SearchBar from './SearchBar.jsx';
import Card from './Card.jsx';
import banerLewy from './baner1.jpg';
import banerPrawy from './baner2.jpg';

// pod tym kluczem zapisuję motyw w localStorage
const KLUCZ_MOTYWU = 'hamasuke_theme';

// zamienia ą, ę, ł itd. na zwykłe litery, żeby szukać bez polskich znaków
const bezOgonkow = (tekst) =>
  tekst
    .toLowerCase()
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export default function Index({ tytuly, ciekawostki }) {

  // to, co wpisane w wyszukiwarce
  const [fraza, setFraza] = useState('');

  // ciemny motyw, wczytany z localStorage (domyślnie ciemny)
  const [ciemnyMotyw, setCiemnyMotyw] = useState(() => {
    try {
      return localStorage.getItem(KLUCZ_MOTYWU) !== 'light';
    } catch {
      return true;
    }
  });

  // losuje jedną ciekawostkę ze wszystkich 12, tylko raz po wejściu na stronę
  const [ciekawostkaDnia] = useState(
    () => ciekawostki[Math.floor(Math.random() * ciekawostki.length)]
  );

  // ustawia motyw na całej stronie i zapisuje go
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', ciemnyMotyw ? 'dark' : 'light');
    try {
      localStorage.setItem(KLUCZ_MOTYWU, ciemnyMotyw ? 'dark' : 'light');
    } catch {
      // bez localStorage motyw zostanie tylko do odświeżenia
    }
  }, [ciemnyMotyw]);

  // zostawia tylko pozycje, które mają wpisaną frazę w tytule
  const szukanaFraza = bezOgonkow(fraza.trim());
  const znalezioneTytuly = tytuly.filter(([tytul]) =>
    bezOgonkow(tytul).includes(szukanaFraza)
  );

  // średnia ocena i ile tytułów ma 10/10 (ocena jest na miejscu 6)
  const sredniaOcena = (
    tytuly.reduce((suma, pozycja) => suma + pozycja[6], 0) / tytuly.length
  ).toFixed(1);
  const liczbaDziesiatek = tytuly.filter((pozycja) => pozycja[6] === 10).length;

  return (
    <>
      {/* banery po bokach, tylko na dużych ekranach */}
      <div className="pv-banner pv-banner-left d-none d-xxl-block">
      <img 
          src={banerLewy} alt="Baner lewy" 
      />
      </div>
      <div className="pv-banner pv-banner-right d-none d-xxl-block">
        <img
          src={banerPrawy} alt="Baner prawy" 
        />
      </div>

      <div className="container pv-container">

        {/* górny pasek z przełącznikiem motywu */}
        <Header
          ciemnyMotyw={ciemnyMotyw}
          przelaczMotyw={() => setCiemnyMotyw(!ciemnyMotyw)}
        />

        <main>

          {/* tytuł strony i przycisk "Przedstaw się" */}
          <section className="row align-items-center g-4 py-5">
            <div className="col-lg-8">
              <h1 className="pv-display pv-title mb-3">
                Mini portal z <span className="pv-underline">komiksami i mangą</span>
              </h1>
              <p className="fs-5 mb-0">
                Tytuły, które czytałam i polecam – z moimi ocenami oraz krótkimi ciekawostkami.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <ButtonMsg />
            </div>
          </section>

          {/* losowa ciekawostka */}
          <div className="pv-fact mb-5" role="note">
            <strong>Ciekawostka dnia:</strong> {ciekawostkaDnia}
          </div>

          {/* trzy kafelki ze statystykami */}
          <section className="mb-5">
            <h2 className="pv-display h3 mb-3">O portalu</h2>
            <div className="row g-3 text-center">
              <div className="col-4">
                <div className="pv-info p-3">
                  <div className="pv-display pv-info-number">{tytuly.length}</div>
                  <div className="small">tytułów na liście</div>
                </div>
              </div>
              <div className="col-4">
                <div className="pv-info p-3">
                  <div className="pv-display pv-info-number">{sredniaOcena}</div>
                  <div className="small">średnia ocena</div>
                </div>
              </div>
              <div className="col-4">
                <div className="pv-info p-3">
                  <div className="pv-display pv-info-number">{liczbaDziesiatek}</div>
                  <div className="small">ocenionych na 10/10</div>
                </div>
              </div>
            </div>
          </section>

          {/* wyszukiwarka */}
          <SearchBar
            fraza={fraza}
            naZmiane={setFraza}
            naWyczysc={() => setFraza('')}
            znaleziono={znalezioneTytuly.length}
            razem={tytuly.length}
          />

          {/* karty albo napis, że nic nie znaleziono */}
          <section>
            {znalezioneTytuly.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {znalezioneTytuly.map(
                  ([tytul, opis, ciekawostka, kategoria, rok, szczegoly, ocena]) => (
                    <div className="col" key={tytul}>
                      <Card
                        tytul={tytul}
                        opis={opis}
                        ciekawostka={ciekawostka}
                        kategoria={kategoria}
                        rok={rok}
                        szczegoly={szczegoly}
                        ocena={ocena}
                      />
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="pv-empty text-center py-5" role="alert">
                <p className="h4 pv-display mb-1">Pusto.</p>
                <span>Nie ma takiego tytułu. Spróbuj innej frazy.</span>
              </div>
            )}
          </section>

        </main>

        {/* stopka */}
        <footer className="pv-footer mt-5 py-4 small">
          hamasuke.pl, projekt szkolny - Zuzanna Szymko 5R, {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}