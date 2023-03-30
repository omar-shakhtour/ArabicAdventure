import "./Home.css";

import React from 'react'

import HomeImg from "../assets/HomeImg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={HomeImg} alt="IntroImg" />
        </div>
        <div className="contentAA">
            <h1>Arabic Adventure</h1>
            <p>Learn the most common words in the Quran</p>
            <div>
                <Link to="/Level" className="btn">Start</Link>
                <Link to="/login" className="btn btn-light" id="login">Login</Link>
            </div>
        </div>
    </div>
  );
};
export default Home