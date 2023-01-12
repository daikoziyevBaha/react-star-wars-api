import React from "react"
import withSwapiService from "../hocHelpers/withSwapiService"
import { ItemDetails } from "../ItemDetails"
import { Record } from "./Details"


const PersonDetails = (props) => {
    return (
            <ItemDetails {...props} >
                <Record field = {'gender'} label = {'Gender'} />
                <Record field = {'eyeColor'} label = {'Eye color'} />
            </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);