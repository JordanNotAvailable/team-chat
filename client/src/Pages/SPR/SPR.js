import React, { useState } from "react";
import Score from "../../componets/SPRcomps/Score";
import Play from "../../componets/SPRcomps/Play";
import Game from "../../componets/SPRcomps/Game";
import Footer from "../../componets/SPRcomps/Footer";
import '../../styles.scss'
import { Routes, Route } from "react-router-dom";

function SPR() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
    <div className="container">
      <Score score={score} />
      <Routes>
        <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
        <Route
          path="/game"
          element={
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          }
        />
      </Routes>
    </div>
    <Footer />
  </>
);
}

export default SPR;