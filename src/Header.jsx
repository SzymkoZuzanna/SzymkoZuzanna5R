import React from 'react';

export default function Header({ isDarkMode, onToggleTheme }) {
  return (
    <nav className="navbar pv-nav py-3">
      <a className="navbar-brand pv-brand mb-0" href="#">
        hamasuke<span className="pv-sticker">.pl</span>
      </a>
      <span className="navbar-text d-none d-md-inline me-auto ms-3 small">
        portal o grach komputerowych
      </span>

      {/* Przełącznik jasny/ciemny: form-switch z Bootstrapa */}
      <div className="form-check form-switch mb-0">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="themeSwitch"
          checked={isDarkMode}
          onChange={onToggleTheme}
        />
        <label className="form-check-label fw-bold" htmlFor="themeSwitch">
          {isDarkMode ? 'Ciemny' : 'Jasny'}
        </label>
      </div>
    </nav>
  );
}