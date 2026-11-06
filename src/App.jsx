import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';
import ButtonMsg from './ButtonMsg';
import './App.css';

// Tablica gier z unikalnymi ciekawostkami do każdej gry (Wymagania B i E)
const GAMES_DATA = [
  [
    "Valorant", 
    "Taktyczny shooter 5v5 od Riot Games z unikalnymi umiejętnościami postaci.", 
    "Ciekawostka: Gra początkowo miała nosić kodową nazwę 'Project A'."
  ],
  [
    "Pony Island", 
    "Nietypowa, mroczna i metafikcyjna gra niezależna kryjąca sekrety wewnątrz zepsutego automatu.", 
    "Ciekawostka: Gra wcale nie jest o uroczych kucykach – to psychologiczny horror."
  ],
  [
    "Fortnite", 
    "Popularna gra battle royale z unikalną mechaniką budowania.", 
    "Ciekawostka: Wirtualny koncert Travisa Scott'a w grze obejrzało ponad 12 mln graczy."
  ],
  [
    "Minecraft", 
    "Gra survivalowa w otwartym świecie, gdzie ograniczeniem jest tylko wyobraźnia.", 
    "Ciekawostka: Kultowy Creeper powstał przez przypadek podczas próby stworzenia świni."
  ],
  [
    "Cyberpunk 2077", 
    "Gra action-RPG w otwartym świecie osadzona w futurystycznym Night City.", 
    "Ciekawostka: Miasto zaprojektowano z uwzględnieniem realistycznego ruchu ulicznego."
  ],
  [
    "Wiedźmin 3: Dziki Gon", 
    "Niezapomniana przygoda Geralta z Rivi.", 
    "Ciekawostka: Scenariusz do gry zawierał ponad 450 000 słów."
  ]
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  // Filtrowanie na żywo po tytule (Wymaganie C)
  const filteredGames = GAMES_DATA.filter(([title]) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-vh-100 py-4 px-2 ${darkMode ? 'outer-background-dark' : 'outer-background-light'}`}>
      <div className={`main-portal-wrapper p-4 p-md-5 ${darkMode ? 'glass-panel-dark' : 'glass-panel-light'}`}>
        
        {/* Komponent Header (Wymaganie A - przełącznik motywu) */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="row g-4 mt-2">
          
          {/* Baner boczny lewy */}
          <div className="d-none d-lg-block col-lg-2">
            <div className="side-banner-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80')` }}>
              <div className="banner-overlay">
                <span className="badge bg-danger mb-2">HOT LEAGUE</span>
                <h6 className="banner-title text-uppercase">VALORANT 5v5</h6>
                <button className="btn btn-danger btn-sm fw-bold w-100 rounded-pill shadow mt-2">Zapisz się</button>
              </div>
            </div>
          </div>

          {/* Główna zawartość */}
          <div className="col-12 col-lg-8">
            
            {/* Komponent ButtonMsg (Wymaganie D - localStorage i powitanie) */}
            <div className="mb-4">
              <ButtonMsg darkMode={darkMode} />
            </div>

            {/* Wyszukiwarka na żywo (Wymaganie C) */}
            <div className="mb-4">
              <input
                type="text"
                className={`form-control search-input ${darkMode ? 'bg-dark text-white border-secondary' : 'bg-white text-dark border-light-subtle'}`}
                placeholder="🔍 Szukaj gry (np. Valorant, Fortnite)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Lista kart gier (Wymaganie B) */}
            <div className="row g-3">
              {filteredGames.length > 0 ? (
                filteredGames.map(([title, description, funFact], index) => (
                  <div key={index} className="col-12 col-md-6">
                    <Card title={title} description={description} funFact={funFact} darkMode={darkMode} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="fs-5 opacity-75">Brak wyników dla: "{searchTerm}"</p>
                </div>
              )}
            </div>

          </div>

          {/* Baner boczny prawy */}
          <div className="d-none d-lg-block col-lg-2">
            <div className="side-banner-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80')` }}>
              <div className="banner-overlay">
                <span className="badge bg-primary mb-2">NEW SETUP</span>
                <h6 className="banner-title text-uppercase">GAMING GEAR</h6>
                <button className="btn btn-primary btn-sm fw-bold w-100 rounded-pill shadow mt-2">Zobacz</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;