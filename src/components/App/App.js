import React, { Component } from "react";
import SwapApi from "../../services/fetchers";
import { AppHeader } from "../AppHeader";
import { ErrorIndicator } from "../ErrorIndicator";
import { RandomPlanet } from "../RandomPlanet";
import './App.css';
import { ErrorBoundary } from "../ErrorBoundary";
import { SwapiServiceProvider } from "../SwapiContext";
import DummySwapiService from "../../services/DummySwapApi";
import PeoplePage from "../pages/PeoplePage";
import PlanetsPage from "../pages/PlanetsPage";
import StarshipsPage from "../pages/StarshipsPage";
import { BrowserRouter as Router, Link, Route, Routes, useParams, NavLink, useNavigate } from 'react-router-dom';
import StarshipDetails from "../SwComponents/StarshipDetails";

export class App extends Component {

    state = {
        renderPlanet: true,
        hasError: false,
        swapi: new DummySwapiService()
    }

    toggleRandomPlanet = () => {
        this.setState(({renderPlanet}) => {
            return {
                renderPlanet: !renderPlanet
            }
        })
    }

    onChangeService = () => {
        this.setState(({swapi}) => {
            const newSwapi = swapi instanceof SwapApi ? DummySwapiService : SwapApi
            return {
                swapi: new newSwapi()
            }
        })
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render () {

        const randomPlanet = this.state.renderPlanet ? <RandomPlanet /> : null

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="container">
                <ErrorBoundary>
                    <SwapiServiceProvider value = {this.state.swapi}>
                        <Router>
                            <AppHeader onChangeService = {this.onChangeService} />

                            { randomPlanet }
                            <Link to="/planets">Planets</Link>
                            <Routes>
                                <Route path="/" element={<TestElem />} />
                                <Route path="/people" element={<PeoplePage/>}>
                                    <Route path=":id" element={<PeoplePage/>}/>
                                </Route>
                                <Route path="/planets" element={<PlanetsPage/>} />
                                <Route path="/starships" element={<StarshipsPage/>} />
                                <Route path="/starships/:id" element={<DeepComponentDetailsPage />} />
                                <Route path="*" element={<ErrorIndicator />} />
                            </Routes>
                        
                        </Router>
                    </SwapiServiceProvider>
                    
                </ErrorBoundary>

            </div>
        )
    }
}

const DeepComponentDetailsPage = () => {
    let params = useParams();
    return <StarshipDetails  itemId={params.id}/>
}

const TestElem = () => {
    const params = useParams();
    console.log(params);
    return (
        <h1>Test</h1>
    )
}