import React, { Component } from 'react';
//import './../../../css/app.css';

class AsideCatalog extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          isLoaded: false,
          items: this.props.dataFromParent.updatedatas,
           
        };
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
                        {items.map(item => (
                            <div className="product_lign" key={item.id_product}>
                                <img src="https://media.materiel.net/r550/products/MN0005048928_1.jpg" alt="product" width="250px"></img>
                                <div className="product_info">
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <p>{item.characteristics}</p>

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