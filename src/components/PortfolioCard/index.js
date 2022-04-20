import React from "react";
import "./style.css";

function PortfolioCard(props) {
    return (
        <div class="card">
            <img class="card-img-top" src={props.img} alt="Card img cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <a href={props.github}>GitHub repository</a> <span> | </span>
                <a href={props.deployed}>Deployed Link:</a>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;