import React from "react";
import "../components/Card.css";
import Star from "../assets/star.svg";

const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "Sold Out";
    } else if (props.location === "Online") {
        badgeText = "Online";
    }
    return (
        <div className="card __CONTAINER">
            <div className="img-container">
                <img
                    className="img-container__img"
                    src={props.coverImg}
                    alt="Human"
                />
                {badgeText && (
                    <div className="img-container__text">{badgeText}</div>
                )}
            </div>
            <ul className="info">
                <li className="info__li">
                    <img className="info__li-img" src={Star} alt="Star" />
                    <span className="info__li-rating1">
                        {props.stats.rating}
                    </span>
                    <span className="info__li-rating2">
                        ({props.stats.reviewCount})
                    </span>
                    <span className="info__li-rating2">{props.country}</span>
                </li>
                <li className="info__li">
                    <span className="info__li-topic">{props.title}</span>
                </li>
                <li className="info__li">
                    <span className="info__li-price">{`${props.price}$ / person`}</span>
                </li>
            </ul>
        </div>
    );
};

export default Card;
