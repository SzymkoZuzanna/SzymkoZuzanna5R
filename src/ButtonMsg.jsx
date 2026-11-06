import React, { useState } from 'react';

const STORAGE_KEY = 'hamasuke_user_name';

export default function ButtonMsg() {
  // Imię wczytywane z localStorage przy starcie, więc zostaje po odświeżeniu
  const [userName, setUserName] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });

  const handleIntroduce = () => {
    const typedName = window.prompt('Jak masz na imię?');
    if (typedName && typedName.trim() !== '') {
      const cleanName = typedName.trim();
      localStorage.setItem(STORAGE_KEY, cleanName);
      setUserName(cleanName);
    }
  };

  const handleForget = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUserName('');
  };

  if (userName) {
    return (
      <div>
        <p className="h4 pv-display mb-2">
          <span className="pv-mark">Witaj ponownie, {userName}!</span>
        </p>
        <button className="btn btn-link btn-sm p-0 text-body" onClick={handleForget}>
          zmień imię
        </button>
      </div>
    );
  }

  return (
    <button className="btn btn-pop btn-lg px-4" onClick={handleIntroduce}>
      Przedstaw się
    </button>
  );
}