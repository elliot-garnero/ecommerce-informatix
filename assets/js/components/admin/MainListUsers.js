import React, { Component } from 'react';
import ListUsers from "./ListUsers";

class MainListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedatas: [],
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        this.setState({ updatedatas: value.update })
    }

    render() {
        const updatedatas = this.state;
        return (

            <div className="container">

                
                    <ListUsers /> 
                
                </div>
        )
    }
}

export default MainListUsers;