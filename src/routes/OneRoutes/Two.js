import "./Two.css";

import React, {useState} from  'react'

import place from "../OneRoutes/L1assets/place.png";
import { Link } from "react-router-dom";

const Two = () => {
  const [hoveredText, setHoveredText] = useState("");
  return (
    <div className="hero1">
        <div className="mask1">
            <img className="intro-img1"
            src={place} alt="IntroImg1" />
        </div>
        <div className="content2">
            <p id="describe2">You open the scroll and find in it a detailed map.
                The Caliph: <span>"The journey is long and dangerous, O Ahmad. But, it is 
                    well worth it. My translator sent me the map. So, I can't help you much
                    in regards to where he resides. You will have to evalute the map yourself." </span>
            </p>
            <div className="learnText2">
            <h1>Paths</h1>
            <div className="learnCol2">
            <h6 style={hoveredText === "translate" ? {opacity: 1} : {opacity: 0}}>These (are)</h6>
            <h1 id="arabic2" onMouseEnter={() => setHoveredText("translate")} 
            onMouseLeave={() => setHoveredText("")}
                >هَـؤُلآءِ</h1>
            </div>
            <p id="secondText2"><span>Which one do you want to take?</span></p>
          </div>
        </div>
            <div className="choices2">
                <Link to="/Three" className="btn btn-light" id="L1choice2">The Desert Route</Link>
                <Link to="/Four" className="btn btn-light" id="L1choice2">The Snowy Trail</Link>
            </div>
    </div>
  );
};

export default Two