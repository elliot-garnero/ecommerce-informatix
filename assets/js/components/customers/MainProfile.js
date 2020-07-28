import React, { Component } from 'react';
import AsideProfile from "./AsideProfile";
import AsideUser from "./AsideUser";


class MainProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: this.props.dataFromParent,
        
      } 
      this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        this.setState({
            updatedatas:value.updatedatas.refresh,
            
        })
        
    }
    
    render(){
        const updatedatas = this.state;
        console.log(updatedatas.updatedatas)
        return(
        
            <div className="container">
    
                <div className="row mt-3">
                    
                    <div className="col-3">
                   
                        <AsideUser dataToParent={this.updateState} dataFromParent={updatedatas}/>
                    </div>
                    <div className="col-9">
                    
                        <AsideProfile dataToParent={this.updateState} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainProfile;