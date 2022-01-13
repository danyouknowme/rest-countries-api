import React, { useState } from 'react';
import CountryByRegionContainer from './CountryByRegionContainer';
import CountryContainer from './CountryContainer';
import Navbar from './Navbar';
import Search from './Search';

const Home = () => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        const initialValue = JSON.parse(saved);
		localStorage.setItem("theme", JSON.stringify(initialValue || "light"));
        return initialValue || "light";
    });
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    console.log(region);

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Search theme={theme} region={region} setRegion={setRegion} />
            {!region ? (
                <CountryContainer theme={theme} />
            ) :
                <CountryByRegionContainer theme={theme} region={region} />
            }
        </>
    )
}

export default Home;
