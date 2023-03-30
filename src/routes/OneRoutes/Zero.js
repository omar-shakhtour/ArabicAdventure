import "./Zero.css";

import React, {useState} from  'react'

import place2 from "../OneRoutes/L1assets/place2.png";
import { Link } from "react-router-dom";

const Zero = () => {
  const [hoveredText, setHoveredText] = useState("");
  return (
    <div className="hero1">
        <div className="mask1">
            <img className="intro-img1"
            src={place2} alt="IntroImg1" />
        </div>
        <div className="content0">
            <p>You enter the Mosque and pray two Rakaat of sunnah. Then, you look around, trying to find the Caliph.
                An elderly man notices and points towards the end of the hallway, saying:
            </p>
            <div className="learnText0">
              <h1>The Caliph</h1>
              <div className="learnCol0">
              <h6 style={hoveredText === "translate" ? {opacity: 1} : {opacity: 0}}>That (is)</h6>
              <h1 id="arabic0" onMouseEnter={() => setHoveredText("translate")} 
              onMouseLeave={() => setHoveredText("")}
                  >ذَلِكَ</h1>
              </div>
          </div>
        </div>
            <div className="choices0">
                <Link to="/One" className="btn btn-light" id="L1choice0">Speak to the Caliph</Link>
                <Link to="/GameOver" className="btn btn-light" id="L1choice0">Return to your home</Link>
            </div>
    </div>
  );
};

export default Zero