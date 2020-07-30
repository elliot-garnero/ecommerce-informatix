import React, { Component } from 'react';
import axios from 'axios';

class MainDetailsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            data: '',
            reviews: [],
            idUserReview: '',
            idUserOne:'',
            users: [],
        }
    }

    componentDidMount() {
        const id = this.state.id
        axios.get('http://localhost:8000/api/products/'+id)
        .then((res) => {
            this.setState ({
                data : res.data
            });
        });

        axios.post('http://localhost:8000/product/reviews/'+id)
        .then((res) => {
            this.setState ({
                reviews : res.data,
            });
            //console.log(this.state.reviews)

            const { reviews } = this.state;
            reviews.length > 0
            && reviews.map((review, i) => {
                this.setState({ idUserReview : review.idUser})
                axios.post('http://localhost:8000/product/reviews/name/'+this.state.idUserReview)
                .then((res) => {
                    this.setState ({
                        idUserOne: res.data,
                    });
                    this.state.idUserOne.map((user) =>{
                        this.setState(state =>{
                           const users = state.users.push({name: user.username, id : user.id})
                        })
                    })
                    
                    //console.log(this.state.reviews)
                    //console.log(this.state.users)
                   
                });
            });
        });
    }
    
    render(){
        const data = this.state.data;
        const { reviews } = this.state;
        var count = Object.keys(reviews).length;

        const { users } = this.state;
        //console.log(this.state.users);

        return(
            <div className="container">
                <div>
                    <div className="row mt-5 mb-5 mr-5">
                        <div className="col-md-6 text-center">
                            <div className="pro-img-details">
                                <img src={data.picture1} alt="" width="400"/>
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
                                {data.color !== null && <span className="tagged_as"><strong>Couleur :</strong> {data.color}<br></br></span>}
                                {data.color == null && <span className="tagged_as"></span>}
                                {data.size !== null && <span className="tagged_as"><strong>Taille :</strong> {data.size} cm<br></br></span>}
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
                                <div className="form-group">
                                    <label>Quantité</label>
                                    <input type="quantiy" placeholder="1" className="form-control quantity"/>
                                </div>
                                <p>
                                    <button className="btn btn-round btn-success" type="button"><i className="fa fa-shopping-cart"></i> Ajouter au panier</button>
                                </p>
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
                </div>
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
                                    "{review.content}"<br></br>
                                    <em>écrit par {review.idUser}</em>
                                    
                                </div>
                            </div>
                            ))}
                            {users.map((user, i) => (
                                <div key={i} >
                                   <em>écrit par {user.name}</em>
                                </div>  
                            ))}
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default MainDetailsProduct;
