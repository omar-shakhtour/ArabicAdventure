import "./Level.css";

import React from 'react'

import HomeImg from "../assets/HomeImg.png";
import { Link } from "react-router-dom";

const Level = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={HomeImg} alt="IntroImg" />
        </div>
        <div className="contentLevel">
            <h1 id="title">Select Your Chapter</h1>
            <div className="linkdiv">
                <Link to="/L1" className="btn btn-light col1 row1" id="level1">Chapter One</Link>
                <Link to="/L2" className="btn btn-light col2 row1" id="level2">Chapter Two</Link>
                <Link to="/L3" className="btn btn-light col3 row1" id="level3">Chapter Three</Link>
            </div>
        </div>
    </div>
  );
};

export default Level