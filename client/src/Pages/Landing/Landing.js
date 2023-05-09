import React from "react";
import InfoContainer from "../../componets/Info/InfoContainer";
import "./Landing.css";
import Animations from  "./Animations";


const Landing = () => {
  return (
    <div className="home">
      <div className="animation-background"></div>
      <div className="content row">
          <div className="games-container col-md-6">
            <InfoContainer />
          </div>
          <div className="col-md-5">
             <Animations />
          </div>
      </div>
    </div>
  );
};

export default Landing;


