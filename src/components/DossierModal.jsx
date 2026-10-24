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
            <div className="dossier-eyebrow">BATCOMPUTER MK-VII // CRIMINAL DOSSIER</div>
            <h2 className="dossier-title">{charData.comicTitle}</h2>
            <div className="dossier-subtitle">
              SUJEITO #{selectedDigit} // {charData.alias}
            </div>
          </div>
          <button className="dossier-close" onClick={onClose}>&times;</button>
        </div>

        <div className="dossier-body">
          <div className="dossier-mugshot-wrap">
            <img
              className="dossier-mugshot"
              src={charData.localImg}
              alt={charData.name}
              onError={(e) => { e.currentTarget.src = charData.fallbackImg; }}
            />
            <div className="mugshot-scan-badge">MATCH {charData.matchScore}</div>
          </div>

          <div className="dossier-details">
            <div className="dossier-row">
              <span className="dossier-label">IDENTIDADE:</span>
              <span className="dossier-value">{charData.identity}</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">STATUS ATUAL:</span>
              <span className="dossier-value">{charData.status}</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">CLASSIFICAÇÃO:</span>
              <span className={`dossier-value threat-${charData.threatLevel}`}>
                {charData.threat}
              </span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">LOCALIZAÇÃO:</span>
              <span className="dossier-value">{charData.cellBlock}</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">BIOMETRIA:</span>
              <span className="dossier-value">{charData.biometric}</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">BASE OPERACIONAL:</span>
              <span className="dossier-value">{charData.base}</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">PERFIL TÁTICO:</span>
              <span className="dossier-value dossier-bio">{charData.bio}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
