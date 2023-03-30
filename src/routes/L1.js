import "./L1.css";

import React, {useState} from  'react'

import HomeImg from "../assets/HomeImg.png";
import { Link } from "react-router-dom";

const L1 = () => {
  const [hoveredText, setHoveredText] = useState("");
  return (
    <div className="hero1">
        <div className="mask1">
            <img className="intro-img1"
            src={HomeImg} alt="IntroImg1" />
        </div>
        <div className="content1">
            <p>Hello, Ahmad! You have recieved a personal
              letter from the Caliph!
            </p>
            <div className="learnText">
            <h1>letter</h1>
            <div className="learnCol">
            <h6 style={hoveredText === "translate" ? {opacity: 1} : {opacity: 0}}>This (is a)</h6>
            <h1 id="arabic" onMouseEnter={() => setHoveredText("translate")} 
            onMouseLeave={() => setHoveredText("")}
                >هَذِه</h1>
            </div>
          </div>
        </div>
            <div className="choices">
                <Link to="/Zero" className="btn btn-light" id="L1choice">Open the letter</Link>
                <Link to="/GameOver" className="btn btn-light" id="L1choice">Ignore it</Link>
            </div>
    </div>
  );
};

export default L1