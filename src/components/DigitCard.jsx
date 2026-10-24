import React from 'react';
import { characters } from '../data/characters';

export function DigitCard({ slotKey, digit, onSelect }) {
  const charData = characters[digit] || characters['0'];

  return (
    <div
      className="digit-card"
      data-slot={slotKey}
      onClick={() => onSelect(digit)}
      title={`Abrir análise detalhada do Batcomputador: ${charData.name} (#${digit})`}
    >
      {/* Batcomputer Target HUD Ribbon */}
      <div className="card-ribbon">
        <div className="ribbon-left">
          <span className="badge-gcpd">BATSCAN</span>
          <span className="badge-slot">#{digit}</span>
        </div>
        <div className="ribbon-right">
          <span className="hud-match">RECOG {charData.matchScore}</span>
        </div>
      </div>

      {/* Solid Character Mugshot */}
      <div className="card-images-wrapper">
        <img
          className="digit-img"
          src={charData.localImg}
          alt={charData.name}
          onError={(e) => { e.currentTarget.src = charData.fallbackImg; }}
        />
      </div>

      {/* Target Reticle Accents */}
      <div className="card-reticles">
        <span className="reticle-tl"></span>
        <span className="reticle-tr"></span>
        <span className="reticle-bl"></span>
        <span className="reticle-br"></span>
      </div>

      {/* Glass Sheen */}
      <div className="card-glass"></div>

      {/* Batcomputer Analysis Footer */}
      <div className="card-footer">
        <span className="char-name">{charData.comicTitle}</span>
        <div className="char-threat-tag">{charData.threatBadge}</div>
        <span className="char-biometric">{charData.biometric}</span>
      </div>
    </div>
  );
}
