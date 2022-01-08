import React from 'react';
import CardCountry from './CardCountry';
import './countrycontainer.scss';

const CountryContainer = (props) => {
    return (
        <div className="country-container">
            <div className={`wrapper ${props.theme === "dark" ? "dark" : ""}`}>
                <CardCountry theme={props.theme} />
                <CardCountry theme={props.theme} />
                <CardCountry theme={props.theme} />
                <CardCountry theme={props.theme} />
                <CardCountry theme={props.theme} />
            </div>
        </div>
    )
}

export default CountryContainer;
