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
            <Card />
        </div>
    );
};

export default App;
