import React from 'react';
import { characters } from '../data/characters';

export function DigitCard({ slotKey, digit, onSelect }) {
  const charData = characters[digit] || characters['0'];

  return (
    <div
      className="digit-card"
      data-slot={slotKey}
      onClick={() => onSelect(digit)}
      title={`Ver ficha criminal de ${charData.name} (#${digit})`}
    >
      {/* Tactical Top Ribbon */}
      <div className="card-ribbon">
        <span className="badge-gcpd">GCPD</span>
        <span className="badge-slot">{slotKey.toUpperCase()}</span>
      </div>

      {/* Single Solid Opaque Image (Zero Ghosting, Zero Flicker) */}
      <div className="card-images-wrapper">
        <img
          className="digit-img"
          src={charData.localImg}
          alt={charData.name}
          onError={(e) => { e.currentTarget.src = charData.fallbackImg; }}
        />
      </div>

      {/* Clean Glass Overlay */}
      <div className="card-glass"></div>

      {/* Tactical Bottom Footer */}
      <div className="card-footer">
        <span className="char-name">{charData.name}</span>
        <span className="char-code">DOSSIER #{digit}</span>
      </div>
    </div>
  );
}
