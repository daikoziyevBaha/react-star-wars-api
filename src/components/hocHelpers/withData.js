import React, { Component } from "react";
import { ErrorIndicator } from "../ErrorIndicator";
import { Spinner } from "../Spinner";

export const WithData = (View) => {
    
    return class extends Component {
        
        state = {
            data: null,
            loading: true,
            error: false
        }
    
        componentDidMount() {
            this.update()
        }

        componentDidUpdate(prevProps) {
            if (prevProps.getData !== this.props.getData) {
                this.update()
            }
        }

        update() {
            this.setState({
                loading: true
            })
            this.props.getData()
                .then( data => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch( e => {
                    this.setState({
                        error: true
                    })
                })  
            }
        
        render () {

            const { loading, error, data } = this.state;
        
            if (loading) {
                return <Spinner />
            }

            if (error) {
                return <ErrorIndicator />
            }

            return <View {...this.props} data = {data}/>
        }
    }
}
