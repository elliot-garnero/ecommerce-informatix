import React, { Component } from 'react';
import MainModal from '../delivery/MainModal';

class AsideCatalog extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          products: JSON.parse(localStorage.getItem('products')) || [],
          isLoaded: false,
          items: this.props.dataFromParent.updatedatas,
          bundles:[],
          search: false
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
            this.setState({
            isLoaded: true,
            bundles: json,
            })
        });
    }

    //    Add 1 if already in cart
    addProduct(item) {
        this.setState((state) => {
            let products = state.products;
            if (products.includes(item)) {
                item.amount++;
            } else {
                item.amount = 1;
                products.push(item);
            }
            localStorage.setItem('products', JSON.stringify(products));
            return {
                products
            };
        });
    }


    render(){
     
      if(this.props.dataFromParent.searchBar.results !== this.state.items && this.props.dataFromParent.searchBar.results !== undefined && !this.props.dataFromParent.updatedatas.data)
        {  
            this.setState({items: this.props.dataFromParent.searchBar.results});
            this.setState({search: this.props.dataFromParent.searchBar.query});
        }
        if(this.props.dataFromParent.updatedatas.data !== this.state.items && this.props.dataFromParent.updatedatas.data !== undefined)
        {  
            this.setState({items: this.props.dataFromParent.updatedatas.data});
            this.setState({search: false});
        }
        const{ isLoaded, items } = this.state;
        var count = Object.keys(items).length;
        var countBundles= Object.keys(this.state.bundles).length
        
          
        if (!isLoaded){
            return <div>Chargement...</div>
        }
        else{
            return(
                
                <div id="div_catalog">
                  {this.state.search && <div className="title_lign">
            <h1>Résultats pour votre recherche "<b>{this.state.search}"</b> :</h1></div>}
            {!this.state.search && <div className="title_lign">
                        <h1>CATALOGUE</h1>
                        <a href="/">
                            <p>{count} produits</p>
                        </a>
                        <a href="catalogBundles">
                            <p>{countBundles} lots</p>
                        </a>
                    </div>}
                    {items.map((item, i) => (
                        <div className="w-100 border border-secondary p-3 mb-2 rounded" key={i} id={item.idProduct}>
                            <div className="row">
                                <div className="col-md-3 p-0">
                                    <img className="img-fluid" src={item.picture1} alt={item.name}/>
                                </div>
                                <div className="col-md-6 product_info">
                                    <a href={`/detailsProduct${item.idProduct}`}>
                                        <h2>{item.name}</h2>
                                        {item.new == true && <h4><span className="badge badge-warning"><em>New !!!</em></span></h4>}
                                        {item.new == false && <p></p>}
                                        <p>{item.description}</p>
                                        <p>{item.characteristics}</p>
                                    </a>
                                </div>

                                <div className="col-md-3 text-center pr-0 pl-0">
                                    <h2 className="txt-orange">{item.price} €</h2>
                                    {item.promo == true && <h5><span className="p-2 mt-2 badge badge-danger">EN PROMO</span></h5>}
                                    {item.promo == false && <p></p>}
                                   
                                    {item.stock == 0 &&
                                        <p>
                                            <h6 className="text-danger"><em>Indisponible</em></h6><br></br><br></br>
                                            <button type="button" className="btn btn-secondary" disabled><i className="fa fa-shopping-cart"></i> AJOUTER AU PANIER</button>
                                            <a href={`/modifProduct${item.idProduct}`}>
                                                <button type="button" className="mt-2 btn btn-secondary"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Modifier le produit</button>
                                            </a>
                                        </p>
                                    }
                                    {item.stock >= 1 && 
                                        <p>
                                            <h6 className="text-success">{item.stock} en stock</h6><br></br><br></br>
                                            <button type="button" className="btn btn-success" onClick={() => this.addProduct(item) }><i className="fa fa-shopping-cart"></i> AJOUTER AU PANIER</button>
                                            <a href={`/modifProduct${item.idProduct}`}>
                                                <button type="button" className="mt-2 btn btn-secondary"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Modifier le produit</button>
                                            </a>
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>                      
                    ))}
                </div> 
            )
        }
    }
}

export default AsideCatalog;
