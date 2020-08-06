import React, { Component } from 'react';
import AsideFilter from "./AsideFilter";
import AsideCatalog from "./AsideCatalog";
import SearchBar from './SearchBar';
class MainCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: [],
        searchBar:''
      } 
      this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        this.setState({updatedatas:value.update})
        this.setState({searchBar:value})
    }
    
    render(){
        const updatedatas = this.state;
        
        return(
            <>
        
            <div className="container-md">
                <div className="row">
                <div className="col-12">
                    <SearchBar dataToParent={this.updateState} />
                    </div>
                    <div className="col-3">
                    <AsideFilter dataToParent={this.updateState} />
                    </div>
                    <div className="col-9">
                    <AsideCatalog dataFromParent={updatedatas}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default MainCatalog;