import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row } from "../Row";
import { PeopleList } from "../SwComponents/ItemLists";
import PersonDetails from "../SwComponents/PersonDetails";

const PeoplePage = () => {
    const navigate = useNavigate();
    const params = useParams();
    return (
        <Row 
            left = { <PeopleList onItemSelected = {(id) => navigate(id)} />}
            right = { <PersonDetails itemId = {params.id} />}
        />
    )
}

export default PeoplePage;