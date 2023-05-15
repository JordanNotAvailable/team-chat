import React, { useState } from "react";
import socketIO from "socket.io-client";
import ChatPopup from "../../componets/ChatPopUp/ChatPopup";
import ChatNav from "../../componets/ChatNav/ChatNav.js";
import Gamebar from "../../componets/Gamebar/Gamebar.js";
import ChatContainer from "../../componets/ChatContainer/ChatContainer.js";
import './home.css';

const socket = socketIO.connect("http://localhost:4000");

const Home = () => {

  const [open, setOpen] = useState(false);
  const [groupchat, setGroupChat] = useState(false);
  const [chatActive, setChatActive] = useState(false);
  const [userName, setUsername] = useState("");

  const handleOpen = () => {
    setGroupChat(true);
    setOpen(true);
  };

  const handleSubmit = () => {
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    setOpen(false);
    setChatActive(true);
  };

  return (
    <div className="home-container">
      <div className="chatPopUp">
        <ChatPopup
            open={open}
            groupchat={groupchat}
            setOpen={setOpen}
            setUsername={setUsername}
            userName={userName}
            onClose={handleSubmit}
          />
      </div>
      <div className="content-container">
        <div className="gamebar-container">
          <Gamebar />
        </div>
        <div className="chat-nav-container" style={{marginLeft :'250px'}}>
          <ChatNav 
            setOpen={setOpen}
            groupchat={groupchat}
            onOpen={handleOpen}
            open={open}
            socket={socket}
            chatActive={chatActive}
            />

            <div className="w-full d-flex justify-center">
                <ChatContainer />
            </div>
            <div className="w-full d-flex justify-center">
                <ChatContainer />
            </div>
            <div className="w-full d-flex justify-center">
                <ChatContainer />
            </div>

        </div>
    
      </div>
    </div>
  );
};

export default Home;
