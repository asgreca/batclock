import React from 'react';

export function Header() {
  return (
    <header className="bat-header">
      <div className="brand-section">
        {/* Authentic Bat-Insignia Silhouette SVG */}
        <svg className="bat-insignia" viewBox="0 0 64 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 6.5C31 3.5 28 0.5 26 0C26.5 4 25.5 6 22 7C17 2 7 6 0 12C3 18 8 20 14 18C16 26 24 33 32 36C40 33 48 26 50 18C56 20 61 18 64 12C57 6 47 2 42 7C38.5 6 37.5 4 38 0C36 0.5 33 3.5 32 6.5Z"/>
        </svg>
        <div className="title-group">
          <h1 className="main-title">BatClock</h1>
          <div className="sub-title">
            <span>GCPD SURVEILLANCE TERMINAL</span>
            <span>//</span>
            <span className="live-indicator">
              <span className="live-dot"></span>LIVE FEED
            </span>
          </div>
        </div>
      </div>

      <div className="telemetry-bar">
        <div className="telemetry-item">LOC: <span>GOTHAM SECTOR 4</span></div>
        <div className="telemetry-item">FEED: <span>ARKHAM LINEUP</span></div>
        <div className="telemetry-item">CORE: <span>REACT 19 // VITE</span></div>
      </div>
    </header>
  );
}
