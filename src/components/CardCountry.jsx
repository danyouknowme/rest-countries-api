import React from 'react';
import './cardcountry.scss';

const CardCountry = (props) => {
    return (
        <div className="card-country">
            <div className={`card-wrapper ${props.theme === "dark" ? "dark": ""}`}>
                <div className="flag">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png" alt="" />
                </div>
                <div className="desc">
                    <h2>Germany</h2>
                    <div className="another-data">
                        <span><strong>Population:</strong> 81,770,900</span>
                        <span><strong>Region:</strong> Europe</span>
                        <span><strong>Capital:</strong> Berlin</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCountry;
