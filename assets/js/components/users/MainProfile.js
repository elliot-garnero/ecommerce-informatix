import React, { Component } from 'react';
import AsideProfile from "./AsideProfile";
import AsideNav from "./AsideNav";


class MainProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: []
      } 
      this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        this.setState({updatedatas:value})
        
    }
    
    render(){
        const updatedatas = this.state;
        
        return(
        
            <div className="container">
    
                <div className="row mt-3">
                    
                    <div className="col-3">
                   
                        <AsideNav dataToParent={this.updateState}/>
                    </div>
                    <div className="col-9">
                    
                        <AsideProfile dataFromParent={updatedatas}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainProfile;