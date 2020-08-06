import React, { Component } from 'react';
import axios from 'axios';
import SliderSuggestion from './SliderSuggestion';
import  { Redirect } from 'react-router-dom';


class MainDetailsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            data: '',
            reviews: [],
            idUserReview: '',
            idUserOne: '',
            users: [],
            products: JSON.parse(localStorage.getItem('products')) || [],
            name: '',
            productName: [],
            idProd: '',
            redirection : false,
        }
        this.selectChange = this.selectChange.bind(this);
    }

    componentDidMount() {
        const id = this.state.id
        axios.get('http://localhost:8000/api/products/'+id)
        .then((res) => {
            this.setState ({
                data : res.data,
                name: res.data.name
            });
            // search same products by name
            axios.get('http://localhost:8000/api/productsName/'+this.state.name)
            .then((res) => {
                this.setState ({
                    productName: res.data
                });
                axios.post('http://localhost:8000/product/reviews/'+id)
                .then((res) => {
                    this.setState ({
                        reviews : res.data,
                    });
                    const { reviews } = this.state;
                    reviews.length > 0
                    && reviews.map((review) => {
                        this.setState({ idUserReview : review.idUser})
                        axios.post('http://localhost:8000/product/reviewsName/'+this.state.idUserReview)
                        .then((res) => {
                            this.setState ({
                                idUserOne: res.data,
                            });
                            this.state.idUserOne.map((user) =>{
                                this.setState(state =>{
                                    const users = state.users.push({name: user.username, id: user.id})
                                })
                            })
                            console.log(this.state.users)
                        });
                    });
                });
            });
        });
    }


    // Add 1 if already in cart
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

    // nouvelle requete si change couleur ou taille
    async selectChange(event) {
        await this.setState({ idProd: event.target.value });
        
        await axios.get('http://localhost:8000/api/products/'+this.state.idProd)
        .then((res) => {
            this.setState ({
                data : res.data,
                name: res.data.name,
                redirection: true,
            });
        })
    }
    
    render(){
        const data = this.state.data;
        const { reviews } = this.state;
        var count = Object.keys(reviews).length;
        const { users } = this.state;
        
        // const { redirection, idProd } = this.state;
        // if (redirection) {
        //     return <Redirect to={`/detailsProduct${this.state.idProd}`}/>
        // } 

        const { productName } = this.state;
        let selectColor = productName.length > 0 && productName.map((item, i) => {
            return (
                <option key={i} value={item.idProduct}>{item.color}</option>
            );
        }, this);
        let selectSize = productName.length > 0 && productName.map((item, i) => {
            return (
                <option key={i} value={item.idProduct}>{item.size}</option>
            );
        }, this);

        return(
            <div className="container">
                <div className="row mt-5 mb-5 mr-5">
                    <div className="col-md-6 text-center">
                        <div className="pro-img-details">
                            <img className="img-fluid" src={data.picture1} alt="picture1" width="400"/>
                        </div>
                        <div className="pro-img-list">
                            <a href={data.picture1}>
                                <img src={data.picture1} alt="" width="100"/>
                            </a>
                            <a href={data.picture2}>
                                <img src={data.picture2} alt="" width="100"/>
                            </a>
                            <a href={data.picture3}>
                                <img src={data.picture3} alt="" width="100"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>{data.name}<br></br>
                            {data.new == true && <span className="badge badge-warning">New !!!</span>}
                            {data.new == false && <p></p>}
                        </h4>
                        <p>{data.description}</p><br></br>
                        <div>
                            <h5>Caractéristique :</h5>{data.characteristics}<br></br><br></br>
                            {data.color !== null && 
                                <span className="tagged_as"><strong>Couleur :</strong> {data.color} &nbsp;
                                    <select value={this.state.idProd}
                                        onChange={this.selectChange}
                                        name="color"
                                        id="color">
                                        <option value={data.idProduct}>couleur</option>
                                        {selectColor}
                                    </select><br></br>
                                </span>
                            }
                            {data.color == null && <span className="tagged_as"></span>}         

                            {data.size !== null && 
                                <span className="tagged_as"><strong>Taille :</strong> {data.size} cm &nbsp;
                                    <select value={this.state.idProd}
                                        onChange={this.selectChange}
                                        name="size"
                                        id="size">
                                        <option value={data.idProduct}>taille</option>
                                        {selectSize}
                                    </select>
                                
                                </span>}
                            {data.size == null && <span className="tagged_as"></span>}
                            <p><strong>Poids :</strong> {data.weight} g<br></br></p>
                        </div>

                        {data.stock > 0 &&
                        <div>
                            <p className="text-success"><strong>En stock :</strong> {data.stock}</p>
                            <div className="m-bot15">
                                {data.promo == true && <div className="alert alert-success" role="alert">EN PROMO !!!</div>}
                                {data.promo == false && <p></p>}
                                <strong><h3 className="text-warning">Prix : {data.price} €</h3></strong><br></br>
                            </div>
                            <button className="btn btn-round btn-success btn-lg" type="button" onClick={() => this.addProduct(data)}><i className="fa fa-shopping-cart"></i> Ajouter au panier</button>
                        </div>}
                        {data.stock == 0 &&
                        <div>
                            <div className="m-bot15">
                                <br></br>
                                {data.promo == true && <div className="alert alert-success" role="alert">EN PROMO !!!</div>}
                                {data.promo == false && <p></p>}
                                <br></br>
                                <h5 className="text-danger"><strong><em>Produit indisponible pour le moment</em></strong></h5><br></br>
                                <strong><h3 className="text-warning">Prix : {data.price} €</h3></strong>
                            </div>
                        </div>}
                    </div>
                </div>
                <hr></hr>
                
                <div className="container">
                    <h4>{count} Avis</h4>
                    {reviews.length == 0 && <div className="pb-5">Aucun avis n'a été laissé sur ce produit</div>}
                    {reviews.length > 0 && 
                        <div  className="pb-5">
                            {reviews.map((review, i) => (
                            <div key={i} id={review.id} className="border p-3">
                                {review.rating == 5 &&
                                    <div className="mb-2">
                                        <span className="heading">Excellent </span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>}
                                {review.rating == 4 &&
                                    <div className="mb-2">
                                        <span className="heading">Satisfait </span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>}
                                {review.rating == 3 &&
                                    <div className="mb-2">
                                        <span className="heading">Moyen </span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>}
                                {review.rating == 2 &&
                                    <div className="mb-2">
                                        <span className="heading">Peu satisfait </span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-stard"></span>
                                        <span className="fa fa-star"></span>
                                    </div>}
                                {review.rating == 1 &&
                                    <div className="mb-2">
                                        <span className="heading">Pas satisfait </span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-stard"></span>
                                        <span className="fa fa-star"></span>
                                    </div>}
                                <div >
                                    <p>"{review.content}"</p>
                                    <p><em>écrit par {review.username}</em></p>
                                </div>
                            </div>
                            ))}
                        </div>
                    }
                </div>
                <div className="row">
                    <SliderSuggestion />
                </div>
            </div>
        )
    }
}
export default MainDetailsProduct;

// {users.map((user, i) => (
//     <div key={i} >
//         <em>écrit par {user.name}</em>
//     </div>  
// ))}

// {users.map((user, i) => (
//     <div key={i} >
//         {review.idUser == i && <em>user : {user.name}</em>}
//     </div>  
// ))}
