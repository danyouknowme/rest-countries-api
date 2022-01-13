import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './search.scss';

const Search = ({ theme, region, setRegion, country, setCountry }) => {

    const handleChange = (e) => {
        setRegion(e.target.value);
    }

    const countryOnChange = (e) => {
        console.log(e.target.value);
    }

    const options = [
        { value: 'Africa' },
        { value: 'Americas' },
        { value: 'Asia' },
        { value: 'Europe' },
        { value: 'Oceania' },
    ]

    return (
        <div className="search">
            <div className={`wrapper ${theme === "dark" && "dark"}`}>
                <div className="searchbox">
                    <FontAwesomeIcon icon={['fas', 'search']} />
                    <input type="text" placeholder="Search for a country..." onChange={countryOnChange}/>
                </div>
                <div className="filter">
                    <select value={region} onChange={handleChange}>
                        <option value="" disabled>Filter by Region</option>
                        {options.map((option) => (
                            <option value={option.value} key={option.value}>{option.value}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Search
