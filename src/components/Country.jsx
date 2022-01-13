import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCountryByNameQuery } from '../services/countryApi';
import Navbar from './Navbar';
import Back from './Back';

const Country = () => {
    const { country } = useParams();
    const { data: countryData, isFetching } = useGetCountryByNameQuery(country);
    console.log(countryData);

    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        const initialValue = JSON.parse(saved);
		localStorage.setItem("theme", JSON.stringify(initialValue || "light"));
        return initialValue || "light";
    });

    if (isFetching) return "Loading...";    

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Back theme={theme} />
        </>
    )
}

export default Country
