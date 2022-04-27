import React from "react";
import "./style.css";

function PortfolioCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <a href={props.github}>GitHub repository</a> <span> | </span>
                <a href={props.deployed}>Deployed Link</a>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;