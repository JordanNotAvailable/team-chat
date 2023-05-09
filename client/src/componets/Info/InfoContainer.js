import React from "react";
import InfoCard from "./InfoCard";
import './InfoContainer.css';
const InfoContainer = () => {
  return (
    <div className="InfoContainer">
      {" "}
      <h1 className="mb-3 text-center font-bold text-lg "> Welcome to the site! </h1>
      <InfoCard />
    </div>
  );
};

export default InfoContainer;