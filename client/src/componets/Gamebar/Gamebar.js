import React from 'react';
import './Gamebar.css';

export default function Gamebar() {
  return (
    <>
      <aside className="game-container">
        <div className="solo-container">
          <h1 className="solo-panel">Solo</h1>
            <a href='#'>Game 1</a>
        </div>
        <div className="multiplayer-container">
          <h2 className="multiplayer-panel">Multiplayer</h2>
            <a href='#'>Game 1</a>
        </div>
      </aside>
    </>
  )
}