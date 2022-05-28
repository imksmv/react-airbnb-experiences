import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

const App = () => {
    const cards = data.map((card) => (
        <Card
            key={card.id}
            img={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
        />
    ));
    return (
        <div className="wrapper">
            <Navbar />
            <Hero />
            <section className="card__list">{cards}</section>
        </div>
    );
};

export default App;
