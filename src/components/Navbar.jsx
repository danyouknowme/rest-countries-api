import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.scss';

const Navbar = (props) => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="title">
					<Link to='/' className="home">
						<span>Where in the world?</span>
					</Link>
				</div>
				<div className="theme-switcher">
					<FontAwesomeIcon icon={['far', 'moon']} />
					<span>Dark Mode</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
