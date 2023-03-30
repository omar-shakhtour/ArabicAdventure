import "./One.css";

import React, {useState} from  'react'

import place from "../OneRoutes/L1assets/place.png";
import { Link } from "react-router-dom";

const One = () => {
  const [hoveredText, setHoveredText] = useState("");
  return (
    <div className="hero1">
        <div className="mask1">
            <img className="intro-img1"
            src={place} alt="IntroImg1" />
        </div>
        <div className="content1">
            <p>The Caliph: <span>"Welcome O Ahmad! I have be waiting for you. I have a 
                great task for you young man. My translator has gotten old. He is no longer
                able to perform his job well. I want you, O Ahmad, to take his place!" </span>
                 The Caliph hands you a scroll.
            </p>
            <div className="learnText1">
            <h1>Scroll</h1>
            <div className="learnCol1">
            <h6 style={hoveredText === "translate" ? {opacity: 1} : {opacity: 0}}>This (is a)</h6>
            <h1 id="arabic1" onMouseEnter={() => setHoveredText("translate")} 
            onMouseLeave={() => setHoveredText("")}
                >هَذَا</h1>
            </div>
            <p id="secondText1"><span>"Do you accept, O Ahmad?"</span></p>
          </div>
        </div>
            <div className="choices1">
                <Link to="/Two" className="btn btn-light" id="L1choice1">Accept the scroll</Link>
                <Link to="/GameOver" className="btn btn-light" id="L1choice1">Reject the scroll</Link>
            </div>
    </div>
  );
};

export default One