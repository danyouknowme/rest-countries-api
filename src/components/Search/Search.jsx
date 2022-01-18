import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './search.scss';

const Search = ({ theme, region, setRegion, searchTerm, setSearchTerm }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (region) => {
        setRegion(region);
        setOpenMenu(false)
    }

    const countryOnChange = (e) => {
        setSearchTerm(e.target.value);
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
            <div className={`wrapper ${theme === "dark" ? "dark" : ""}`}>
                <div className="searchbox">
                    <FontAwesomeIcon icon={['fas', 'search']} />
                    <input type="text" placeholder="Search for a country..." onChange={countryOnChange} value={searchTerm}/>
                </div>
                <div className="filter" onClick={() => setOpenMenu(!openMenu)}>
                    <div className="select">
                        <span>{!region ? "Filter by Region" : region}</span>
                        <FontAwesomeIcon icon={['fas', 'chevron-down']} />
                    </div>
                    <div className={`options ${openMenu ? 'active' : ''}`}>
                        {options.map((region) => (
                            <span onClick={() => handleChange(region.value)} key={region.value}>{region.value}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
