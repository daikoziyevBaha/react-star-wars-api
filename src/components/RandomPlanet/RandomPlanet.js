import React, { Component } from "react";
import './RandomPlanet.css';
import SwapApi from "../../services/fetchers";
import { Spinner } from "../Spinner";
import { ErrorIndicator } from "../ErrorIndicator";
import PropTypes from 'prop-types';

export class RandomPlanet extends Component {
    
    state = {
        planet: {},
        loading: true,
        error: false
    }

    setPlanetToState = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    componentDidMount() {
        const { updateInterval } = this.props;

        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    handleError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2)
        const swapi = new SwapApi()
        swapi.getPlanet(id)
                    .then( (planet) => this.setPlanetToState(planet))
                    .catch( (error) => this.handleError(error) )
    }

    render() {
        const { planet, loading, error } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <PlanetView planet={planet}/> : null;
        const errorContent = error ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet mt-2">
                { spinner }
                { content }
                { errorContent }                
            </div>
        )
    }
}

RandomPlanet.defaultProps = {
    updateInterval: 10000,
    onItemSelected: () => {}
}

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number.isRequired
}


const PlanetView = ({ planet }) => {

        const { id, name, population, diameter, rotationPeriod } = planet; 

        return (
            <React.Fragment>
                <div className="planet-img">
                    <img    
                        className="img" 
                        src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt = 'img'/>
                </div>
                <div className="planet-characteristics">
                    <h2>{name}</h2>
                    <ul className="list-group list-group-flush list">
                        <li className="list-group-item">
                            <span className="term">Population:</span>
                            <span>{ population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation period:</span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter:</span>
                            <span>{ diameter }</span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
}