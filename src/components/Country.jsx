import React, { useState } from 'react';
import Navbar from './Navbar';

const Country = () => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        const initialValue = JSON.parse(saved);
		localStorage.setItem("theme", JSON.stringify(initialValue || "light"));
        return initialValue || "light";
    });

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
        </>
    )
}

export default Country
