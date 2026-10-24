import React from 'react';
import { characters } from '../data/characters';

export function DossierModal({ selectedDigit, onClose }) {
  if (selectedDigit === null || selectedDigit === undefined) return null;

  const charData = characters[selectedDigit] || characters['0'];

  return (
    <div className="dossier-modal-overlay open" onClick={onClose}>
      <div className="dossier-card" onClick={(e) => e.stopPropagation()}>
        <div className="dossier-header">
          <div>
            <h2 className="dossier-title">{charData.name}</h2>
            <div className="dossier-subtitle">
              GCPD EVIDENCE RECORD #{selectedDigit} // {charData.alias}
            </div>
          </div>
          <button className="dossier-close" onClick={onClose}>&times;</button>
        </div>

        <div className="dossier-body">
          <img
            className="dossier-mugshot"
            src={charData.localImg}
            alt={charData.name}
            onError={(e) => { e.currentTarget.src = charData.fallbackImg; }}
          />

          <div className="dossier-details">
            <div className="dossier-row">
              <span className="dossier-label">IDENTIDADE:</span>
              <span className="dossier-value">{charData.identity}</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">STATUS GCPD:</span>
              <span className="dossier-value">{charData.status}</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">NÍVEL AMEAÇA:</span>
              <span className={`dossier-value threat-${charData.threatLevel}`}>
                {charData.threat}
              </span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">BASE OPERAÇÃO:</span>
              <span className="dossier-value">{charData.base}</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">FICHA TÉCNICA:</span>
              <span className="dossier-value">{charData.bio}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
