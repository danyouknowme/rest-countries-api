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
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Search theme={theme} region={region} setRegion={setRegion} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {!region ? (
                <CountryContainer theme={theme} searchTerm={searchTerm} />
            ) :
                <CountryByRegionContainer theme={theme} region={region} searchTerm={searchTerm} />
            }
        </>
    )
}

export default Home;
