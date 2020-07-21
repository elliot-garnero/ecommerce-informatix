import React, { Component } from 'react';
import AsideFilter from "./AsideFilter";
import AsideCatalog from "./AsideCatalog";

class MainCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: []
      } 
      this.doSomething = this.doSomething.bind(this);
    }

    
    doSomething(value) {
        this.setState({updatedatas:value.update})
    
    }
    
    render(){
        const updatedatas = this.state;
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <AsideFilter valueHandler={this.doSomething} />
                    </div>
                    <div className="col-9">
                        <AsideCatalog dataFromParent={updatedatas}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainCatalog;