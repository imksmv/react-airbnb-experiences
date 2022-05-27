import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Hero />
            <Card
                img="human.png"
                star="star.svg"
                tag="Sold out"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
    );
};

export default App;
