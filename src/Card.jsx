import React, { useState } from 'react';

// klasa koloru plakietki dla kategorii
const KLASY_KATEGORII = {
  Manga: 'g-manga',
  Komiks: 'g-komiks',
};

export default function Card({ tytul, opis, ciekawostka, kategoria, rok, szczegoly, ocena }) {

  // czy karta jest rozwinięta (przycisk Więcej / Mniej)
  const [czyRozwiniete, setCzyRozwiniete] = useState(false);

  return (
    <div className="card h-100 pv-card">
      <div className="card-body">

        {/* kategoria i ocena */}
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <span className={`badge pv-badge ${KLASY_KATEGORII[kategoria] || ''}`}>{kategoria}</span>
          <span className="fw-bold small text-nowrap">Moja ocena: {ocena}/10</span>
        </div>

        {/* tytuł i krótki opis */}
        <h2 className="card-title h4 pv-display">{tytul}</h2>
        <p className="card-text mb-0">{opis}</p>

        {/* dłuższy opis i ciekawostka, widać po kliknięciu Więcej */}
        {czyRozwiniete && (
          <div className="mt-3 pt-3 pv-more">
            <p className="small mb-2">{szczegoly}</p>
            <p className="small mb-0">
              <strong>Ciekawostka:</strong> {ciekawostka}
            </p>
          </div>
        )}

      </div>

      {/* rok i przycisk rozwijania */}
      <div className="card-footer d-flex justify-content-between align-items-center">
        <span className="small">Wydanie: {rok}</span>
        <button
          className="btn btn-sm btn-pop"
          onClick={() => setCzyRozwiniete(!czyRozwiniete)}
          aria-expanded={czyRozwiniete}
        >
          {czyRozwiniete ? 'Mniej' : 'Więcej'}
        </button>
      </div>
    </div>
  );
}