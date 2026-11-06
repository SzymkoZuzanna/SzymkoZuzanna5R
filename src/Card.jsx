import React, { useState } from 'react';

// Każdy gatunek ma własny kolor plakietki
const GENRE_CLASS = {
  RPG: 'g-rpg',
  Strzelanka: 'g-shooter',
  Sieciowa: 'g-online',
  Sandbox: 'g-sandbox',
  Przygoda: 'g-adventure',
};

export default function Card({ title, description, funFact, genre, year, details, rating }) {
  // Czy rozwinięto dodatkowy opis gry (przycisk "Więcej")
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card h-100 pv-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <span className={`badge pv-badge ${GENRE_CLASS[genre] || ''}`}>{genre}</span>
          <span className="fw-bold small text-nowrap">Moja ocena: {rating}/10</span>
        </div>

        <h2 className="card-title h4 pv-display">{title}</h2>
        <p className="card-text mb-0">{description}</p>

        {isExpanded && (
          <div className="mt-3 pt-3 pv-more">
            <p className="small mb-2">{details}</p>
            <p className="small mb-0">
              <strong>Ciekawostka:</strong> {funFact}
            </p>
          </div>
        )}
      </div>

      <div className="card-footer d-flex justify-content-between align-items-center">
        <span className="small">Premiera: {year}</span>
        <button
          className="btn btn-sm btn-pop"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Mniej' : 'Więcej'}
        </button>
      </div>
    </div>
  );
}