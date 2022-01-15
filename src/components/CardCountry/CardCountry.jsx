import React from 'react';
import './cardcountry.scss';

const CardCountry = (props) => {
    return (
        <div className="card-country">
            <div className={`card-wrapper ${props.theme === "dark" ? "dark": ""}`}>
                <div className="flag">
                    <img src={props.flag} alt="flag" />
                </div>
                <div className="desc">
                    <h2>{props.name}</h2>
                    <div className="another-data">
                        <span><strong>Population:</strong> {props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        <span><strong>Region:</strong> {props.region}</span>
                        <span><strong>Capital:</strong> {props.capital}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCountry;
