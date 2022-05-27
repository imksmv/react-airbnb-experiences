import React from "react";
import "../components/Card.css";

const Card = (props) => {
    console.log(props);
    return (
        <div className="card __CONTAINER">
            <div className="img-container">
                <img
                    className="img-container__img"
                    src={props.img}
                    alt="Human"
                />
                <div className="img-container__text">{props.tag}</div>
            </div>
            <ul className="info">
                <li className="info__li">
                    <img className="info__li-img" src={props.star} alt="Star" />
                    <span className="info__li-rating1">{props.rating}</span>
                    <span className="info__li-rating2">
                        ({props.reviewCount})
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
