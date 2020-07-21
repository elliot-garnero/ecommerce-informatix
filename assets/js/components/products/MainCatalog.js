import React, { Component } from 'react';
import AsideFilter from "./AsideFilter";
import AsideCatalog from "./AsideCatalog";

class MainCatalog extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <AsideFilter />
                    </div>
                    <div className="col-9">
                        <AsideCatalog />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainCatalog;