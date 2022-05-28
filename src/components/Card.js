import React from "react";
import "../components/Card.css";
import Star from "../assets/star.svg";

const Card = (props) => {
    console.log(props.openSpots);
    return (
        <div className="card __CONTAINER">
            <div className="img-container">
                <img
                    className="img-container__img"
                    src={props.img}
                    alt="Human"
                />
                {props.openSpots === 0 && (
                    <div className="img-container__text">Sold Out</div>
                )}
            </div>
            <ul className="info">
                <li className="info__li">
                    <img className="info__li-img" src={Star} alt="Star" />
                    <span className="info__li-rating1">{props.rating}</span>
                    <span className="info__li-rating2">
                        ({props.reviewCount})
                    </span>
                    <span className="info__li-rating2">{props.country}</span>
                    <span className="info__li-location">{props.location}</span>
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
