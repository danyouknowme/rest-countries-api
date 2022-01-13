import React from 'react';
import { Link } from 'react-router-dom';
import CardCountry from './CardCountry';
import { useGetAllCountriesQuery } from '../services/countryApi';
import './countrycontainer.scss';

const CountryContainer = (props) => {
    const { data, isFetching } = useGetAllCountriesQuery();

    if (isFetching) return "Loading...";

    return (
        <div className="country-container">
            <div className={`wrapper ${props.theme === "dark" ? "dark" : ""}`}>
                {data.map((country, index) => (
                    <Link to={`/1`}>
                        <CardCountry theme={props.theme} name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital} key={country.name} id={index}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CountryContainer;
