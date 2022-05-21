import React from "react";
import "../components/Card.css";
import Human from "../assets/human.png";
import Star from "../assets/star.svg";

const Card = () => {
    return (
        <div className="card __CONTAINER">
            <div className="img-container">
                <img className="img-container__img" src={Human} alt="Human" />
                <div className="img-container__text">Sold out</div>
            </div>
            <ul className="info">
                <li className="info__li">
                    <img className="info__li-img" src={Star} alt="Star" />
                    <span className="info__li-rating1">5.0</span>
                    <span className="info__li-rating2">(6) • USA</span>
                </li>
                <li className="info__li">
                    <span className="info__li-topic">
                        Life lessons with Katie Zaferes
                    </span>
                </li>
                <li className="info__li">
                    <span className="info__li-price1">From $136 /</span>
                    <span className="info__li-price2">person</span>
                </li>
            </ul>
        </div>
    );
};

export default Card;
