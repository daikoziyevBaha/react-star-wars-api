import React, { Component } from "react";
import SwapApi from "../../services/fetchers";
import { ErrorButton } from "../ErrorButton";
import { Spinner } from "../Spinner";
import './ItemDetails.css';

export class ItemDetails extends Component {
    
    swapi = new SwapApi()

    state = {
        item: {},
        loading: true,
        imageUrl: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId ||
            prevProps.getData !== this.props.getData ||
            prevProps.getImageUrl !== this.props.getImageUrl
         ) {
            this.setState({
                loading: true
            })
            this.updateItem()
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    imageUrl: getImageUrl(item),
                    loading: false
                })
            })
    }

    render() {

        const { item, loading, imageUrl } = this.state;
        const { name } = item;

        if (!item) {
            return <h2>Choose person from list</h2>
        }

        if (loading) {
            return <Spinner />
        }

        return (
            <div className="item-details">
                <div className="item-img">
                    <img
                        className="img" 
                        src = {imageUrl}  alt = 'img'/>
                </div>
                <div className="item-characteristics">
                    <h3>{name}</h3>
                    <ul className="list-group list-group-flush list">
                        { React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item })
                        }) }                        
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }
}