import React from "react";
import { SwapiServiceConsumer } from "../SwapiContext";

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

    return (props) => {
        return (<SwapiServiceConsumer>
            {
                (swapi) => {
                    const swapiService = mapMethodsToProps(swapi)
                    return <Wrapped {...props} {...swapiService} />
                }
            }
        </SwapiServiceConsumer>)
    }
}

export default withSwapiService;