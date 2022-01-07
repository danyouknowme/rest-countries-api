import React, { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';

const Home = () => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        const initialValue = JSON.parse(saved);
		localStorage.setItem("theme", JSON.stringify(initialValue || "light"));
        return initialValue || "light";
    });

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Search theme={theme} />
        </>
    )
}

export default Home;
