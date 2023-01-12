import React from "react";
import './AppHeader.css';   
import {Link} from 'react-router-dom';

export const AppHeader = ({ onChangeService }) => {
    
    return (
        <div className="row row-cols-12 justify-content-start">
            <div className="col-3 green">
                <h2>
                    <Link to="/">Star DB</Link>
                </h2>
            </div>
            <div className="col-1 mr-3 p-3 w-100 green">
                <Link to="/people">People</Link>
            </div>
            <div className="col-1 mx-3 p-3 w-100 green">
                <Link to="/planets">Planets</Link>
            </div>
            <div className="col-1 mx-3 p-3 w-100 green">
                <Link to="/starships/">Starships</Link>
            </div>
            <div className="col-1 mx-3 p-3 w-100">
                <button className="switch-btn" onClick={ onChangeService }>
                    Switch service
                </button>
            </div>
        </div>
    )
}
