import "./Three.css";

import React, {useState} from  'react'

import desert from "../OneRoutes/L1assets/desert.png";
import { Link } from "react-router-dom";

const Three = () => {
  const [hoveredText, setHoveredText] = useState("");
  return (
    <div className="hero1">
        <div className="mask1">
            <img className="intro-img1"
            src={desert} alt="IntroImg1" />
        </div>
        <div className="content3">
            <p id="describe3">As you begin your journey, you wonder how you
            will survive in the desert terrain. Looking into the distance you see some people.
            Then, you happily shout out:
            </p>
            <div className="learnText3">
            <h1>"Travelers!</h1>
            <div className="learnCol3">
            <h6 style={hoveredText === "translate" ? {opacity: 1} : {opacity: 0}}>Those (are)</h6>
            <h1 id="arabic3" onMouseEnter={() => setHoveredText("translate")} 
            onMouseLeave={() => setHoveredText("")}
                >أُولَئِكَ"</h1>
            </div>
            <p id="secondText3"> </p>
          </div>
        </div>
            <div className="choices3">
                <Link to="/Three" className="btn btn-light" id="L1choice3">Catch up to them</Link>
                <Link to="/Four" className="btn btn-light" id="L1choice3b">Travel alone</Link>
            </div>
    </div>
  );
};

export default Three