import React from 'react';

export function Header() {
  return (
    <header className="bat-header">
      <div className="brand-section">
        {/* Transparent Official Batman Bat Emblem (No black square) */}
        <div className="bat-emblem-wrapper" title="Wayne Enterprises / Batman Surveillance System">
          <img
            src="assets/bat_emblem_transparent.png"
            alt="Batman Bat Emblem"
            className="bat-emblem-img"
            onError={(e) => {
              // Vector fallback if image fails
              e.currentTarget.style.display = 'none';
              const svgEl = e.currentTarget.parentElement.querySelector('svg');
              if (svgEl) svgEl.style.display = 'block';
            }}
          />
          {/* Razor-Sharp Vector Fallback */}
          <svg className="bat-insignia-vector" viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <path
              d="M 250,28 C 246,9 238,0 230,0 C 234,16 228,28 202,32 C 152,9 76,23 0,65 C 40,88 85,92 115,83 C 125,124 180,165 250,179 C 320,165 375,124 385,83 C 415,92 460,88 500,65 C 424,23 348,9 298,32 C 272,28 266,16 270,0 C 262,0 254,9 250,28 Z"
              fill="#FFE500"
            />
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
