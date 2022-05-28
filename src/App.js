import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

const App = () => {
    const cards = data.map((item) => <Card key={item.id} {...item} />);
    return (
        <div className="wrapper">
            <Navbar />
            <Hero />
            <section className="card__list">{cards}</section>
        </div>
    );
};

export default App;
