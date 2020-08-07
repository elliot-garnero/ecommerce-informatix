import React, { Component } from 'react';
import AsideProfile from "./AsideProfile";
import AsideUser from "./AsideUser";
import axios from 'axios';

class MainProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: this.props.dataFromParent,
        address: false,
      
      } 
      this.updateState = this.updateState.bind(this);

    }

    updateState(value) {
        this.setState({
            updatedatas:value.updatedatas.refresh,
            address: value.address
        })
        
    }


    render(){
        const updatedatas = this.state;
        
        return(
        
            <div className="container-mb">
    
                <div className="row mt-3">
                    
                    <div className="col-3">
                   
                        <AsideUser dataToParent={this.updateState} dataFromParent={updatedatas}/>
                    </div>
                    <div className="col-9">
                    
                        <AsideProfile dataToParent={this.updateState}dataFromParent={updatedatas} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainProfile;