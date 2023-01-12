

import React from "react";
import { useNavigate } from "react-router-dom";
import { StarshipsList } from "../SwComponents/ItemLists";

const StarshipsPage = () => {
    let navigate = useNavigate();
    return (
        <StarshipsList onItemSelected = {(selectedItem) => {
            const navigateLink = selectedItem
            navigate(navigateLink)
        }} />
    )
}
export default StarshipsPage;