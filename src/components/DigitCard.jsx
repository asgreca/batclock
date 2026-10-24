import React, { useState, useEffect } from 'react';
import { characters } from '../data/characters';

export function DigitCard({ slotKey, digit, onSelect }) {
  const [activeBuffer, setActiveBuffer] = useState('a');
  const [bufferA, setBufferA] = useState({ digit, src: '' });
  const [bufferB, setBufferB] = useState({ digit: '', src: '' });
  const [pulse, setPulse] = useState(false);

  const charData = characters[digit] || characters['0'];

  // Handle double-buffered image transition on digit change
  useEffect(() => {
    const nextSrc = charData.localImg;

    if (activeBuffer === 'a') {
      setBufferB({ digit, src: nextSrc });
      setActiveBuffer('b');
    } else {
      setBufferA({ digit, src: nextSrc });
      setActiveBuffer('a');
    }

    setPulse(true);
    const t = setTimeout(() => setPulse(false), 500);
    return () => clearTimeout(t);
  }, [digit]);

  return (
    <div
      className={`digit-card ${pulse ? 'digit-updated' : ''}`}
      data-slot={slotKey}
      onClick={() => onSelect(digit)}
      title={`Ver ficha criminal de ${charData.name} (#${digit})`}
    >
      {/* Tactical Top Header */}
      <div className="card-ribbon">
        <span className="badge-gcpd">GCPD</span>
        <span className="badge-slot">{slotKey.toUpperCase()}</span>
      </div>

      {/* Crossfading Images */}
      <div className="card-images-wrapper">
        <img
          className={`digit-img ${activeBuffer === 'a' ? 'active' : 'prev'}`}
          src={bufferA.src || charData.localImg}
          alt={charData.name}
          onError={(e) => { e.currentTarget.src = charData.fallbackImg; }}
        />
        <img
          className={`digit-img ${activeBuffer === 'b' ? 'active' : 'prev'}`}
          src={bufferB.src || charData.localImg}
          alt={charData.name}
          onError={(e) => { e.currentTarget.src = charData.fallbackImg; }}
        />
      </div>

      {/* Glass Sheen */}
      <div className="card-glass"></div>

      {/* Tactical Bottom Footer */}
      <div className="card-footer">
        <span className="char-name">{charData.name}</span>
        <span className="char-code">DOSSIER #{digit}</span>
      </div>
    </div>
  );
}
