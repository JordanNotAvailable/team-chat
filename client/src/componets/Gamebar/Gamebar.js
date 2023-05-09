import React from 'react';

import './Gamebar.css';

export default function Gamebar() {
  return (
    <>
      <aside className="game-container">
        <div className="solo-container">
          <h1 className="solo-panel  bg-[#1e1b4b] ">Solo</h1>
            <a className='text-center w-full d-flex justify-center mt-2 mb-2' href='./SPR'>Game 1</a>
        </div>
        <div className="multiplayer-container">
          <h2 className="multiplayer-panel  bg-[#1e1b4b] ">Multiplayer</h2>
            <a href='#' className='w-full d-flex justify-center mt-2 mb-2'>Game 1</a>
        </div>
      </aside>
    </>
  )
}