import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.scss';

const Navbar = ({ theme, setTheme }) => {
	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", JSON.stringify(theme === "light" ? "dark" : "light"));
	}

	return (
		<div className="navbar">
			<div className={`wrapper ${theme === "dark" ? 'dark' : ''}`}>
				<div className="title">
					<Link to='/' className="home">
						<span>Where in the world?</span>
					</Link>
				</div>
				<div className="theme-switcher" onClick={changeTheme}>
					{theme === "dark" ? (
						<FontAwesomeIcon icon={['fas', 'moon']} />
					) : <FontAwesomeIcon icon={['far', 'moon']} /> }
					<span>Dark Mode</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
