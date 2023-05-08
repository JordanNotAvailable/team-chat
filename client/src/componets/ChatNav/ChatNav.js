import React, { useState, useEffect, useRef } from 'react';
import Modal from '../FriendModal/FriendModal'
import ChatContent from '../ChatContent/ChatContent';
import './ChatNav.css';

export default function ChatNav({ setOpen, chatActive, socket, onOpen, groupchat }) {

  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
            <button onClick={() => onOpen()}>Create group chat</button>
            <button>Create chat</button>
            <button onClick={toggle}>Add friend</button>
            {modal ? <Modal toggle={toggle} /> : null}
          </div>
        </div>
        {chatActive ?
          <ChatContent socket={socket} groupchat={groupchat} />
          :
          <div className="flex-grow flex flex-col">
            <div className="flex justify-center items-center h-10">
              <input
                type="text"
                placeholder="Search group name"
              />
            </div>
            <div className="flex-grow flex-col flex justify-center items-center">
              <p>Create Chat by using Create Chat Button</p>
              <p>Add Friend by using Add user as friend</p>
            </div>
          </div>
        }       
      </div>
    </div>
    </>
  )
}