import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Row } from "../Row";
import { PlanetsList } from "../SwComponents/ItemLists";
import PlanetDetails from "../SwComponents/PlanetDetails";

export default class PlanetsPage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        return (
            <>
                <Row 
                    left = { <PlanetsList onItemSelected = {this.onItemSelected} />}
                    right = { <PlanetDetails itemId = {this.state.selectedItem} />}
                />
                <Outlet />
            </>
        )
    }
}