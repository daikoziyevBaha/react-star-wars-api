import React from "react";
import { WithData } from "../hocHelpers";
import { ItemList } from "../ItemList";
import withSwapiService from "../hocHelpers/withSwapiService";

const wrapperWithChildren = (fn) => (Wrapper) => {
    return (props) => {
        return (
            <Wrapper {...props} >
                {fn}
            </Wrapper>
        )
    }
}
const renderName = ({name}) => <span>{name}</span>

const mapPersonMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPeople
    }
}
const mapStarshipsMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllStarships
    }
}
const mapPlanetsMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPlanets
    }
}

const PeopleList =  withSwapiService(mapPersonMethodsToProps)(
                        WithData(
                            wrapperWithChildren(renderName)(ItemList)))
const StarshipsList = withSwapiService(mapStarshipsMethodsToProps)(
                        WithData(
                            wrapperWithChildren(renderName)(ItemList)))
const PlanetsList = withSwapiService(mapPlanetsMethodsToProps)(
                        WithData(
                            wrapperWithChildren(renderName)(ItemList) ))

export {
    PeopleList,
    StarshipsList,
    PlanetsList
}