import React, { useState } from 'react';

const KLUCZ_IMIENIA = 'hamasuke_user_name';

export default function ButtonMsg() {

  // Imię wczytywane z localStorage przy starcie, więc zostaje po odświeżeniu
  const [imie, setImie] = useState(() => {
    try {
      return localStorage.getItem(KLUCZ_IMIENIA) || '';
    } catch {
      return '';
    }
  });

  const przedstawSie = () => {
    const wpisaneImie = window.prompt('Jak masz na imię?');
    if (wpisaneImie && wpisaneImie.trim() !== '') {
      const czysteImie = wpisaneImie.trim();
      try {
        localStorage.setItem(KLUCZ_IMIENIA, czysteImie);
      } catch {
        /* bez localStorage imię zostanie tylko do odświeżenia strony */
      }
      setImie(czysteImie);
    }
  };

  const zmienImie = () => {
    try {
      localStorage.removeItem(KLUCZ_IMIENIA);
    } catch {
      /* nic nie robimy, imię i tak znika ze strony */
    }
    setImie('');
  };

  if (imie) {
    return (
      <div>
        <p className="h4 pv-display mb-2">
          <span className="pv-mark">Witaj ponownie, {imie}!</span>
        </p>
        <button className="btn btn-link btn-sm p-0 text-body" onClick={zmienImie}>
          zmień imię
        </button>
      </div>
    );
  }

  return (
    <button className="btn btn-pop btn-lg px-4" onClick={przedstawSie}>
      Przedstaw się
    </button>
  );
}