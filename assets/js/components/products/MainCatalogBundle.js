import React, { Component } from 'react';
import AsideFilter from "./AsideFilter";
import AsideCatalog from "./AsideCatalog";

class MainCatalogBundles extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bundles: JSON.parse(localStorage.getItem('bundles')) || [],
          items: [],
          bundles:[]
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/products/')
        .then(res => res.json())
        .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
        });
        fetch('http://localhost:8000/api/getBundles/')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
            isLoaded: true,
            bundles: json,
            })
        });
    }

    //    Add 1 if already in cart
    addBundle(item) {
        console.log(item);
        this.setState((state) => {
            let bundles = state.bundles;
            if (bundles.includes(item)) {
                item.amount++;
            } else {
                item.amount = 1;
                bundles.push(item);
            }
            localStorage.setItem('products', JSON.stringify(bundles));
            return {
                bundles
            };
        });
    }

    
    render(){
        const items = this.state.items
        const count = Object.keys(items).length;
        const bundles = this.state.bundles
        const countBundles= Object.keys(bundles).length
        return(       
            <div className="container">
                <div className="col">
                    <div className="row">
                        <div className="col-3 bg-blue"></div>
                        <div className="col-9">
                            <div id="div_catalog">
                                <div className="row m-3 mt-4">
                                    <h1>CATALOGUE</h1>
                                    <a className="m-3" href="/">
                                        <p>{count} produits</p>
                                    </a>
                                    <a className="m-3" href="catalogBundles">
                                        <p>{countBundles} lots</p>
                                    </a>
                                </div>
                                {bundles.map((item, i) => (
                                <div className="w-100 border border-secondary p-3 mb-2 rounded" key={i} id={item.idBundle}>
                                    <div className="col">
                                        <div className="row m-2">
                                            <h2>{item.bundName}</h2>
                                        </div>
                                        <div className="row mt-2 p-2 text-center">
                                            <img className="col-md-3 p-0" src={item.bundPicture1} alt=" " width="250px"></img>
                                            <img className="col-md-3 p-0" src={item.bundPicture2} alt=" " width="250px"></img>
                                            <img className="col-md-3 p-0" src={item.bundPicture3} alt=" " width="250px"></img>
                                            <img className="col-md-3 p-0" src={item.bundPicture4} alt=" " width="250px"></img>
                                        </div>
                                        <div className="row m-2">
                                            <h5>{item.bundDescription}</h5>
                                        </div>
                                        <div className="row m-5 text-center">
                                            <div className="col-6">
                                                <div>
                                                    <h2>{item.bundPrice} €</h2>
                                                </div>
                                                {item.bundStock == 0 &&
                                                <div>
                                                    <h4 className="text-danger"><em>stocks épuisés</em></h4>
                                                </div>
                                                }
                                                {item.bundStock >= 1 && 
                                                <div>
                                                    <h4 className="txt-orange">quantités limitées !</h4>
                                                </div>
                                                }
                                            </div>
                                            <div className="col-6">
                                                {item.bundStock == 0 &&
                                                <div>
                                                    <button type="button" className="btn btn-secondary desactived" disabled><i className="fa fa-shopping-cart"></i> AJOUTER AU PANIER</button>
                                                </div>
                                                }
                                                {item.bundStock >= 1 && 
                                                <div>
                                                    <strong><h5 className="txt-blue">A découvrir en magasin !</h5></strong>
                                                </div>
                                                }
                                                <div className="mt-3">
                                                    <p>Magasin Informatix</p>
                                                    <p>35 rue du Bigorneaux</p>
                                                    <p>13005 Marseille</p>
                                                    <p><strong>Tél: 04.98.57.60.43</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                      
                                ))}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainCatalogBundles;