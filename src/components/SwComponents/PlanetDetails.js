import withSwapiService from "../hocHelpers/withSwapiService"
import React from "react"
import { Record } from "./Details"
import { ItemDetails } from "../ItemDetails"

const PlanetDetails = (props) => {
    return (            
            <ItemDetails 
                {...props} >
                <Record field = {'population'} label = {'Population'} />
                <Record field = {'diameter'} label = {'Diameter'} />
                <Record field = {'rotationPeriod'} label = {'Rotation period'} />
            </ItemDetails>
        )
}

const mapPlanetMethodsToProps = ({getPlanet, getPlanetImage}) => {
    return {
        getData: getPlanet,
        getImageUrl: getPlanetImage
    }
}

export default withSwapiService(mapPlanetMethodsToProps)(PlanetDetails)