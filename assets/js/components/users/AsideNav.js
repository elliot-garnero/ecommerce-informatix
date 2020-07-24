import React, { Component } from 'react';

class AsideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        update: '',
        
      } 
      this.updateState = this.updateState.bind(this);
     
    }

    updateState(value) {
        this.setState({updatedatas:value.update})
    
    }
    
    render(){
        const updatedatas = this.state;
        
        return(
            <div class="card-group mb-5">
                <div class="card">
                    <div class="card-header">Christophe Navarro</div>
                    <div class="card-body">
                        <h3 class="card-title">20 avenue roger Salengro</h3>
                        <p class="card-text">13400 Aubagne / France</p>
                        
                        <p class="card-text"><small class="text-muted">navarro.christophe@gmail.com</small></p>
                    </div>
                    <div class="card-footer">inscription le: 12 janv. 2020</div>
                </div>
                </div>
        )
    }
}

export default AsideNav;