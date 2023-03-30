import "./Four.css";

import React, {useState} from  'react'

import snow from "../OneRoutes/L1assets/SnowPath.png";
import { Link } from "react-router-dom";

const Four = () => {
  const [hoveredText, setHoveredText] = useState("");
  return (
    <div className="hero1">
        <div className="mask1">
            <img className="intro-img1"
            src={snow} alt="IntroImg1" />
        </div>
        <div className="content4">
            <p id="describe4">To begin your journey, you join a crew of experienced mountain travelers.
              Looking into the distance, you see beautiful:
            </p>
            <div className="learnText4">
            <h1> </h1>
            <div className="learnCol4">
            <h6 style={hoveredText === "translate" ? {opacity: 1} : {opacity: 0}}>Mountains</h6>
            <h1 id="arabic4" onMouseEnter={() => setHoveredText("translate")} 
            onMouseLeave={() => setHoveredText("")}
                >جِبَال</h1>
            </div>
            <p id="secondText4"> </p>
          </div>
        </div>
            <div className="choices4">
                <Link to="/Three" className="btn btn-light" id="L1choice4">Catch up to them</Link>
                <Link to="/Four" className="btn btn-light" id="L1choice4">Travel alone</Link>
            </div>
    </div>
  );
};

export default Four