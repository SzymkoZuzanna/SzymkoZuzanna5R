import React from 'react';

export default function SearchBar({ fraza, naZmiane, naWyczysc, znaleziono, razem }) {
  return (
    <section className="mb-4">

      {/* pole do wpisywania, filtruje od razu przy każdej literze */}
      <div className="input-group input-group-lg mb-3 pv-search">
        <input
          type="text"
          className="form-control"
          placeholder="Szukaj komiksu lub mangi po tytule"
          aria-label="Szukaj tytułu"
          value={fraza}
          onChange={(zdarzenie) => naZmiane(zdarzenie.target.value)}
        />

        {/* przycisk widać tylko, gdy coś wpisano */}
        {fraza && (
          <button type="button" className="btn pv-clear" onClick={naWyczysc}>
            Wyczyść
          </button>
        )}
      </div>

      {/* licznik wyników */}
      <div className="small fw-bold text-end">
        Znaleziono: {znaleziono} z {razem}
      </div>
    </section>
  );
}