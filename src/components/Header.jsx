import React from 'react';

export function Header() {
  return (
    <header className="bat-header">
      <div className="brand-section">
        {/* OpenAI Generated 3D Batman Emblem */}
        <div className="bat-emblem-wrapper" title="Wayne Enterprises / Batman Surveillance System">
          <img
            src="assets/bat_emblem.jpg"
            alt="Batman Bat Emblem"
            className="bat-emblem-img"
            onError={(e) => {
              // Fallback to vector if image fails
              e.currentTarget.style.display = 'none';
              const svgEl = e.currentTarget.parentElement.querySelector('svg');
              if (svgEl) svgEl.style.display = 'block';
            }}
          />
          {/* Authentic Razor-Sharp Vector Batman Bat Symbol Fallback */}
          <svg className="bat-insignia-vector" viewBox="0 0 1000 370" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <path d="M500,45 C490,15 470,0 455,0 C462,35 450,55 405,65 C310,15 155,50 0,135 C70,185 160,195 215,180 C235,260 345,345 500,370 C655,345 765,260 785,180 C840,195 930,185 1000,135 C845,50 690,15 595,65 C550,55 538,35 545,0 C530,0 510,15 500,45 Z" fill="#FFE500" />
          </svg>
        </div>

        <div className="title-group">
          <h1 className="main-title">BatClock</h1>
          <div className="sub-title">
            <span>GCPD SURVEILLANCE TERMINAL</span>
            <span className="divider-slash">//</span>
            <span className="live-indicator">
              <span className="live-dot"></span>LIVE MONITOR
            </span>
          </div>
        </div>
      </div>

      <div className="telemetry-bar">
        <div className="telemetry-item">LOC: <span>GOTHAM SECTOR 4</span></div>
        <div className="telemetry-item">FEED: <span>ARKHAM LINEUP</span></div>
        <div className="telemetry-item">STATUS: <span>MONITORING 10 SUSPECTS</span></div>
      </div>
    </header>
  );
}
