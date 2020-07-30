import React, { Component, useEffect } from 'react';

class AsideCatalog extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          products: JSON.parse(localStorage.getItem('products')) || [],
          isLoaded: false,
          items: this.props.dataFromParent.updatedatas,
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
            products,
        };
        });
    }


    render(){
        
        if(this.props.dataFromParent.updatedatas.data !== this.state.items && this.props.dataFromParent.updatedatas.data !== undefined)
        {  
            this.setState({items: this.props.dataFromParent.updatedatas.data});
        }
        var{ isLoaded, items } = this.state;
        var count = Object.keys(items).length;

        if (!isLoaded){
            return <div>Chargement...</div>
        }
        else{
            return(
                <div id="div_catalog">
                    <div className="title_lign">
                        <h1>CATALOGUE</h1>
                        <p>{count} produits</p>
                    </div>
                    
                    <div className="div_all_product">
                        {items.map((item, i) => (
                            <div className="product_lign" key={i} id={item.idProduct}>
                                <img src={item.picture1} alt="product" width="250px"></img>
                                <div className="product_info">
                                    <a href={`/detailsProduct${item.idProduct}`}>
                                        <h2>{item.name}</h2>
                                        {item.new == true && <h4><span className="badge badge-warning"><em>New !!!</em></span></h4>}
                                        {item.new == false && <p></p>}
                                        <p>{item.description}</p>
                                        <p>{item.characteristics}</p>
                                    </a>
                                </div>
                                <div className="product_price m-2">
                                    <div className="row">
                                        <h2 className="m-2">{item.price} €</h2>
                                        {item.promo == true && <h5><span className="badge badge-danger">EN PROMO</span></h5>}
                                        {item.promo == false && <p></p>}
                                    </div>
                                    <br></br>
                                    {item.stock == 0 &&
                                        <div>
                                            <h5 className="text-danger"><em>Indisponible</em></h5><br></br><br></br>
                                            <button type="button" className="btn btn-success" disabled><i className="fa fa-shopping-cart"></i> AJOUTER AU PANIER</button>
                                        </div>
                                    }
                                    {item.stock >= 1 && 
                                        <div>
                                            <h5 className="text-success">{item.stock} en stock</h5><br></br><br></br>
                                            <button type="button" className="btn btn-success" onClick={() => this.addProduct(item)}><i className="fa fa-shopping-cart"></i> AJOUTER AU PANIER</button>
                                            <a href={`/modifProduct${item.idProduct}`}>
                                                <button type="button" className="mt-2 btn btn-secondary">Modifier le produit</button>
                                            </a>
                                        </div>
                                    }
                                </div>
                                <hr></hr>
                            </div>                         
                        ))}
                    </div>
                </div> 
            )
        }
    }
}

export default AsideCatalog;
