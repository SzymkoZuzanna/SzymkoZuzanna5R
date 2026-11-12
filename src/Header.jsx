import React from 'react';

export default function Header({ ciemnyMotyw, przelaczMotyw }) {
  return (
    <header className="py-3 mb-4 pv-nav d-flex justify-content-between align-items-center">
      <a href="#" className="text-decoration-none pv-brand text-body">
        hamasuke<span className="pv-sticker">.pl</span>
      </a>

      <div className="form-check form-switch m-0 d-flex align-items-center gap-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="themeSwitch"
          checked={!ciemnyMotyw}
          onChange={przelaczMotyw}
          aria-label="Przełącz tryb jasny/ciemny"
        />
        <label className="form-check-label small fw-bold" htmlFor="themeSwitch">
          {ciemnyMotyw ? 'Ciemny' : 'Jasny'}
        </label>
      </div>
    </header>
  );
}