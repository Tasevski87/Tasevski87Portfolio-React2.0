import React from "react";
import "./style.css";
import profileImg from "./profile.jpg";
function Hero() {
    return (
        <div>
            <img src={profileImg} alt="toshe tasevski" id="hero-img" />
            <div id="main-text-container">
                <h1 className="main-text">Hello, I'm Toshe!</h1>
            </div>
        </div>
    );
}

export default Hero;