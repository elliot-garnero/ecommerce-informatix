import { Redirect } from "react-router-dom";
import React, { Component } from 'react';

class AsideCatalog extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          isLoaded: false,
          items: this.props.dataFromParent.updatedatas,
        }
        this.productClick = this.productClick.bind(this);
    }
   
    
    
    componentDidMount() {
        fetch('http://localhost:8000/api/products')
          .then(res => res.json())
          .then(json => {
              this.setState({
                isLoaded: true,
                items: json,
               
              })
          });
    }

    productClick(event, $id) {
        event.preventDefault();
        console.log($id);
        //this.props.history.push('/login');
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
                                    <a href="#" onClick={(event) => this.productClick(event, item.idProduct)}>
                                        <h2>{item.name}</h2>
                                        <p>{item.description}</p>
                                        <p>{item.characteristics}</p>
                                    </a>
                                    <div>
                                        <p>N avis</p>
                                    </div>
                                </div>
                                <div className="product_price">
                                    <h2>{item.price} €</h2>
                                    <h4>{item.stock} en stock</h4>
                                    <button type="button" className="btn btn-success">AJOUTER AU PANIER</button>
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