import React from "react";
import InfoContainer from "../../componets/Info/InfoContainer";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="home">
      <div className="animation-background"></div>
      <div className="content">
          <div className="games-container">
            <InfoContainer />
          </div>
      </div>
    </div>
  );
};

export default Landing;


