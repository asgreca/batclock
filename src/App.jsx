import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { DigitCard } from './components/DigitCard';
import { Separator } from './components/Separators';
import { Controls } from './components/Controls';
import { DossierModal } from './components/DossierModal';
import { RainCanvas } from './components/RainCanvas';
import { playTacticalClick } from './utils/sound';
import './App.css';

export function App() {
  const [time, setTime] = useState(new Date());
  const [is24h, setIs24h] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedDigit, setSelectedDigit] = useState(null);

  // Themes
  const themes = ['default', 'noir', 'arkham'];
  const themeLabels = ['WAYNE TECH', 'GCPD NOIR', 'ARKHAM TOXIC'];
  const [themeIndex, setThemeIndex] = useState(0);

  // Update clock every second (updates minutes on the exact turn)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Audio click when minute changes (if sound enabled)
  useEffect(() => {
    if (soundEnabled) {
      playTacticalClick(true);
    }
  }, [time.getMinutes(), soundEnabled]);

  // Keyboard Shortcuts (F = Fullscreen, M = Mute, T = Theme, Esc = Close modal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      if (e.key === 'm' || e.key === 'M') setSoundEnabled((prev) => !prev);
      if (e.key === 't' || e.key === 'T') cycleTheme();
      if (e.key === 'Escape') setSelectedDigit(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  const cycleTheme = () => {
    setThemeIndex((prev) => {
      const next = (prev + 1) % themes.length;
      document.documentElement.setAttribute('data-theme', themes[next]);
      return next;
    });
  };

  // Compute Digits (Hours & Minutes only)
  let hours = time.getHours();
  if (!is24h) {
    hours = hours % 12 || 12;
  }
  const hStr = hours.toString().padStart(2, '0');
  const mStr = time.getMinutes().toString().padStart(2, '0');

  return (
    <>
      {/* Background Visuals */}
      <div className="viewport-bg" />
      <div className="vignette-overlay" />
      <div className="scanlines" />
      <RainCanvas />

      {/* Main Container */}
      <div className="app-container">
        <Header />

        {/* Center Clock Stage: Hours & Minutes (Peaceful, Steady, Hero-Sized) */}
        <main className="clock-stage">
          <div className="lineup-frame">
            {/* Hours */}
            <div className="digit-group">
              <DigitCard slotKey="h1" digit={hStr[0]} onSelect={setSelectedDigit} />
              <DigitCard slotKey="h2" digit={hStr[1]} onSelect={setSelectedDigit} />
            </div>

            {/* Central Steady Separator */}
            <Separator />

            {/* Minutes */}
            <div className="digit-group">
              <DigitCard slotKey="m1" digit={mStr[0]} onSelect={setSelectedDigit} />
              <DigitCard slotKey="m2" digit={mStr[1]} onSelect={setSelectedDigit} />
            </div>
          </div>
        </main>

        {/* Footer & Controls */}
        <Controls
          soundEnabled={soundEnabled}
          toggleSound={() => setSoundEnabled((prev) => !prev)}
          is24h={is24h}
          toggleFormat={() => setIs24h((prev) => !prev)}
          themeLabel={themeLabels[themeIndex]}
          cycleTheme={cycleTheme}
          toggleFullscreen={toggleFullscreen}
        />
      </div>

      {/* Dossier Modal */}
      <DossierModal
        selectedDigit={selectedDigit}
        onClose={() => setSelectedDigit(null)}
      />
    </>
  );
}
