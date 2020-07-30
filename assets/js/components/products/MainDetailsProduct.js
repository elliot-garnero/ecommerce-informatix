import React, { Component, useState, Button } from 'react';

class MainDetailsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            name: '',
            description: '',
            brand: '',
            stock: '',
            new: '',
            promo: '',
            picture1: '',
            picture2: '',
            picture3: '',
            characteristics: '',
            price: '',
            weight: '',
            color: '',
            size: '',
            addeddate: '',
            index: '',
            setIndex: '',
        }
    }

    componentDidMount() {
        const id = this.state.id;
        var myHeaders = new Headers();
        var myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
        fetch('http://localhost:8000/api/products/'+id, myInit)
          .then(res => res.json())
          .then(json => {
              this.setState({
                name: json.name,
                description: json.description,
                brand: json.brand,
                stock: json.stock,
                new: json.new,
                promo: json.promo,
                picture1: json.picture1,
                picture2: json.picture2,
                picture3: json.picture3,
                characteristics: json.characteristics,
                price: json.price,
                weight: json.weight,
                color: json.color,
                size: json.size,
                addeddate: json.addeddate,
              })
          });
    }
    
    render(){

        return(
            <div className="container">
                <div className="">
                    <div className="row m-5">
                        <div className="col-md-6 text-center">
                            <div className="pro-img-details">
                                <img src={this.state.picture1} alt="" width="400"/>
                            </div>
                            <div className="pro-img-list">
                                <a href={this.state.picture1}>
                                    <img src={this.state.picture1} alt="" width="100"/>
                                </a>
                                <a href={this.state.picture2}>
                                    <img src={this.state.picture2} alt="" width="100"/>
                                </a>
                                <a href={this.state.picture3}>
                                    <img src={this.state.picture3} alt="" width="100"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="pro-d-title">{this.state.name}</h4>
                            <p>{this.state.description}</p>
                            <div className="product_meta">
                                <span className="posted_in"><strong>Caractéristique :</strong><br></br>{this.state.characteristics}</span><br></br><br></br>
                                <span className="tagged_as"><strong>Color :</strong> {this.state.color}</span><br></br>
                                <span className="tagged_as"><strong>Taille :</strong> {this.state.size} cm</span><br></br>
                                <span className="tagged_as"><strong>Poids :</strong> {this.state.weight} g</span><br></br><br></br>
                            </div>
                            <span className="tagged_as"><strong>En stock :</strong> {this.state.stock}</span><br></br><br></br>
                            <div className="m-bot15">
                                <strong>Prix : </strong>
                                <span className="amount-old">{this.state.price} €</span>
                                <span className="pro-price">{this.state.promo}</span>
                            </div>
                            <div className="form-group">
                                <label>Quantité</label>
                                <input type="quantiy" placeholder="1" className="form-control quantity"/>
                            </div>
                            <p>
                                <button className="btn btn-round btn-success" type="button"><i className="fa fa-shopping-cart"></i> Ajouter au panier</button>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default MainDetailsProduct;