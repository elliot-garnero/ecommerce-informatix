import React, { Component } from 'react';

class AsideAdress extends Component {
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
                mes adresses
            </div>       
        )
    }
}

export default AsideAdress;