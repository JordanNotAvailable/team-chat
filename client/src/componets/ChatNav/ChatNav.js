import React from 'react';
import './ChatNav.css';

export default function ChatNav() {
  return (
    <>
      <div className="ChatNav">
      <div className="container">
        <div className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search chat name" />
          </div>
          <div className="button-group">
            <button>Create chat</button>
            <button>Add friend</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}