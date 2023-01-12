import React, { Component } from "react";
import './ErrorIndicator.css';

export class ErrorIndicator extends Component {

    render() {
        return (
            <div className="error-block">
                <img src="https://icon2.cleanpng.com/20180402/zie/kisspng-computer-icons-death-star-emoticon-clip-art-death-star-5ac1b4353a52c0.6416284515226440212389.jpg" alt="error-img" />
                <h2>BOOM!</h2>
                <p>Something went wrong, drons has already began fixing.</p>
            </div>
        )
    }
}