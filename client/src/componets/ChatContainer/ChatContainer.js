import React from 'react';
import './ChatContainer.css';

export default function ChatContainer() {
  return (
    <>
      <div className="container-chats mt-4 ml-2 mr-2">
        <div className="header-chats">
          <h1>Chat name</h1>
          </div>
            <p>Recent message</p>
            <button>Delete</button>
      </div>
    </>
  )
}