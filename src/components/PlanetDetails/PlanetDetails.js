import React, { Component } from "react";
import './PlanetDetails.css';

class PlanetDetails extends Component {
    
    render() {
        return (
            <div className="random-planet">
                <div className="planet-img">
                    Mustafar
                </div>
                <div className="planet-characteristics">
                    <h2>Mustafar</h2>
                    <ul className="list-group list-group-flush list">
                        <li className="list-group-item">Population</li>
                        <li className="list-group-item">Population</li>
                        <li className="list-group-item">Population</li>
                    </ul>
                </div>
            </div>
        )
    }
}