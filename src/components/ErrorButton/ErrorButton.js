import React, { Component } from "react";

export class ErrorButton extends Component {
    
    state = {
        renderError: false
    }

    onCreateError = () => {
        this.setState({
            renderError: true
        })
    }

    render() {

        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <div>
                <button 
                    className="btn btn-danger" 
                    onClick={ this.onCreateError }
                >
                    Throw error
                </button>
            </div>
        )
    }
}