import React from 'react';
import { useState } from "react";
import Modal from '../FriendModal/FriendModal'
import './ChatNav.css';

export default function ChatNav() {

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

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
            <button onClick={toggle}>Add friend</button>
            {modal ? <Modal toggle={toggle} /> : null}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}