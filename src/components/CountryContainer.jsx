import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardCountry from './CardCountry';
import { useGetAllCountriesQuery } from '../services/countryApi';
import './countrycontainer.scss';

const CountryContainer = (props) => {
    const { data: countryList, isFetching } = useGetAllCountriesQuery();
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const filteredData = countryList?.filter((data) => data.name.toLowerCase().includes(props.searchTerm.toLowerCase()));
        setCountries(filteredData);
    }, [countryList, props.searchTerm]);

    if (isFetching) return "Loading...";

    return (
        <div className="country-container">
            <div className={`wrapper ${props.theme === "dark" ? "dark" : ""}`}>
                {(props.searchTerm ? countries : countryList).map((country, index) => (
                    <Link to={`/1`} key={index}>
                        <CardCountry theme={props.theme} name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CountryContainer;
