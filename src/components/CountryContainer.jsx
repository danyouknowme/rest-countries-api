import React, { useState, useEffect } from 'react';
import CardCountry from './CardCountry';
import axios from 'axios';
import './countrycontainer.scss';

const CountryContainer = (props) => {
    const [data, setData] = useState();
    
    useEffect(() => {
        const fetchingData = async () => {
            await axios.get(`https://restcountries.com/v2/all`)
                .then(response => setData(response.data))
                .catch(error => console.log(error));
        }
        fetchingData();
    }, [])

    console.log(data);

    return (
        <div className="country-container">
            <div className={`wrapper ${props.theme === "dark" ? "dark" : ""}`}>
                {data.map((country) => (
                    <CardCountry theme={props.theme} name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital} />
                ))}
            </div>
        </div>
    )
}

export default CountryContainer;
