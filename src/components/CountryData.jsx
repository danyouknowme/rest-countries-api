import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './countrydata.scss';

const CountryData = ({ theme, countryData }) => {
    const [borderCountries, setBorderCountries] = useState([]);

    const getBoderCountries = () => {
        try {
            let endpoints = countryData.borders.map((alpha) => `https://restcountries.com/v2/alpha/${alpha}`);

            axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((response)=> {
                response.map((data) => {
                    return setBorderCountries(prevValue => [...prevValue, data.data.name]);
                });
            });
        } catch (error) {
            setBorderCountries(["Not Have"])
        }
    }
    
    useEffect(() => {
        getBoderCountries();
    }, []);

    return (
        <div className="country-data">
            <div className={`wrapper ${theme === "dark" ? "dark" : ""}`}>
                <div className="flag">
                    <div className="image-container">
                        <img src={countryData.flag} alt="flag" />
                    </div>
                </div>
                <div className="data">
                    <div className="top">
                        <h1>{countryData.name}</h1>
                    </div>
                    <div className="mid">
                        <span><strong>Native Name: </strong>{countryData.nativeName}</span>
                        <span><strong>Population: </strong>{countryData.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        <span><strong>Region: </strong>{countryData.region}</span>
                        <span><strong>Sub Region: </strong>{countryData.subregion}</span>
                        <span><strong>Capital: </strong>{countryData.capital}</span>
                        <span><strong>Top Level Domain: </strong>{countryData.topLevelDomain}</span>
                        <span><strong>Currencies: </strong>{countryData.currencies[0].name}</span>
                        <span><strong>Languages: </strong>{countryData.languages.map((lang) => lang.name).join(", ")}</span>
                    </div>
                    <div className="bottom">
                        <span>
                            <strong>Border Countries: </strong>
                            <div className="badge">
                                {!borderCountries ? (
                                    <span>{"-"}</span>
                                ) : borderCountries.map((country) => (
                                    <span key={country}>{country}</span>
                                ))}
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryData;
