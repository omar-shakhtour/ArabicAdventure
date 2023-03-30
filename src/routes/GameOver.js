import "./GameOver.css";

import React from  'react'

import HomeImg from "../assets/HomeImg.png";
import { Link } from "react-router-dom";

const GameOver = () => {
  return (
    <div className="hero1">
        <div className="mask1">
            <img className="intro-img1"
            src={HomeImg} alt="IntroImg1" />
        </div>
        <div className="content1">
            <div className="learnText">
            <h1>GAME OVER</h1>
            <div className="learnCol">
            </div>
          </div>
        </div>
            <div className="choices">
                <Link to="/" className="btn btn-light" id="L1choice">Restart</Link>
            </div>
    </div>
  );
};

export default GameOver