import React from "react";
import "../components/Hero.css";
import Grid from "../assets/grid.png";

const Hero = () => {
    return (
        <div className="hero">
            <img className="hero__img" src={Grid} alt="Grid" />
            <h1 className="hero__title">Online Experiences</h1>
            <p className="hero__text">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    );
};

export default Hero;
