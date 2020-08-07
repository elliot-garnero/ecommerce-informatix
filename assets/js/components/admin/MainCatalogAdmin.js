import React, { Component } from 'react';
import AsideFilter from "../products/AsideFilter";
import AsideCatalog from "../products/AsideCatalog";
import SearchBar from '../products/SearchBar';
import NavbarAdmin from './NavbarAdmin';

class MainCatalogAdmin extends Component {
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
                    <div className="col">
                        <NavbarAdmin/>
                    </div>
                </div>
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

export default MainCatalogAdmin;
