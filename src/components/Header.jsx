import React from 'react';

export function Header() {
  return (
    <header className="bat-header">
      <div className="brand-section">
        {/* Transparent Bat Emblem */}
        <div className="bat-emblem-wrapper" title="Wayne Enterprises / Batcomputer Mk-IX">
          <img
            src="assets/bat_emblem_transparent.png"
            alt="Batman Emblem"
            className="bat-emblem-img"
          />
        </div>

        <div className="title-group">
          <h1 className="main-title">BATCLOCK</h1>
          <div className="sub-title">
            <span className="brand-terminal">BATCOMPUTER MK-VII</span>
            <span className="divider-slash">//</span>
            <span>GOTHAM THREAT MATRIX</span>
            <span className="divider-slash">//</span>
            <span className="live-indicator">
              <span className="live-dot"></span>BIOMETRICS ONLINE
            </span>
          </div>
        </div>
      </div>

      <div className="telemetry-bar">
        <div className="telemetry-item">NODE: <span>BATCAVE ALPHA</span></div>
        <div className="telemetry-item">AI CORE: <span>THREAT ANALYSIS</span></div>
        <div className="telemetry-item">DATABASE: <span>WAYNE-SAT-4</span></div>
      </div>
    </header>
  );
}
