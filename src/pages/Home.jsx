import React, { useState } from 'react';
import CountryByRegionContainer from '../components/CountryContainer/CountryByRegionContainer';
import CountryContainer from '../components/CountryContainer/CountryContainer';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';

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
