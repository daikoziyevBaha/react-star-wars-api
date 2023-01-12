import React from "react"
import withSwapiService from "../hocHelpers/withSwapiService"
import { ItemDetails } from "../ItemDetails"
import { Record } from "./Details"

const StarshipDetails = (props) => {
    return (
            <ItemDetails 
                {...props} >
                <Record field = {'model'} label = {'Model'} />
                <Record field = {'length'} label = {'Length'} />
                <Record field = {'costInCredits'} label = {'Cost'} />
            </ItemDetails>
        )
           
    
}

const mapMethodsToProps = ({getStarship, getStarshipImage}) => {
    return {
        getData: getStarship,
        getImageUrl: getStarshipImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)