import React from 'react';

export function Separator({ isTicking }) {
  return (
    <div className="separator-container">
      <div className={`bat-beacon-led ${isTicking ? '' : 'dim'}`}></div>
      <div className={`bat-beacon-led ${isTicking ? '' : 'dim'}`}></div>
    </div>
  );
}
