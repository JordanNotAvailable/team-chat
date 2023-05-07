import React from 'react';
import './ChatContainer.css';

export default function ChatContainer() {
  return (
    <>
      <div className="container-chats">
        <div className="header-chats">
          <h1>Chat name</h1>
          </div>
            <p>Recent message</p>
            <button>Delete</button>
      </div>
    </>
  )
}