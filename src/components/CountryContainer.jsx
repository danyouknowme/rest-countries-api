import React, { useState, useEffect } from 'react';
import CardCountry from './CardCountry';
import axios from 'axios';
import './countrycontainer.scss';

const CountryContainer = (props) => {
    const [data, setData] = useState();
    
    useEffect(() => {
        const fetchingData = async () => {
            let url;
            if (!props.region) {
                url = 'https://restcountries.com/v2/all'
            } else {
                url = `https://restcountries.com/v3.1/region/${props.region.toLowerCase()}`
            }
            await axios.get(url)
                .then(response => setData(response.data))
                .catch(error => console.log(error));
        }
        fetchingData();
    }, [props.region])

    return (
        <div className="country-container">
            <div className={`wrapper ${props.theme === "dark" ? "dark" : ""}`}>
                {data.map((country) => (
                    <CardCountry theme={props.theme} name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital} key={country.name}/>
                ))}
            </div>
        </div>
    )
}

export default CountryContainer;
