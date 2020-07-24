import React, { Component } from 'react';

class AsideCommands extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: []
      } 
      this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        this.setState({updatedatas:value.update})
    
    }
    
    render(){
        const updatedatas = this.state;
        
        return(
            <div className="card-body">
                mes commandes
            </div>       
        )
    }
}

export default AsideCommands;