import React from "react";
import ChatNav from "../../componets/ChatNav/ChatNav.js";
import Gamebar from "../../componets/Gamebar/Gamebar.js";
import ChatContainer from "../../componets/ChatContainer/ChatContainer.js";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <ChatNav />
      </div>
      <div className="content-container">
        <div className="gamebar-container">
          <Gamebar />
        </div>
        <div className="chat-nav-container">
          <ChatNav />
        </div>
        <div className="chats-container">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
