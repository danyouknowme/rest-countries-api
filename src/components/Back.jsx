import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './back.scss';

const Back = (props) => {
    return (
        <div className="back">
            <div className={`wrapper ${props.theme === "dark" ? "dark" : ""}`}>
                <Link to="/" className="button">
                    <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} />
                    <span>Back</span>
                </Link>
            </div>
        </div>
    )
}

export default Back;
