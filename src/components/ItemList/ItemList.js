import React from "react";
import './ItemList.css';

export const ItemList = (props) => {

    const { data, children: renderLabel, onItemSelected } = props;
    const items = data.map((item) => {
        const { id } = item
        const label = renderLabel(item)

        return (
            <li
                key={id}
                className = "list-group-item"
                onClick={() => onItemSelected(id)} 
            >
                <span className="custom-list">{label}</span>
            </li>
        )
    })

    return (
        <div className="item-list-group">
            <ul className="list-group">
                { items }
            </ul>
        </div>
    )
    }

ItemList.defaultProps = {
    onItemSelected: () => {}
}