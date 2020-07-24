import React, { Component } from 'react';

class ProfilePay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedatas: [],
            isLoaded: false,
            payment: null,
            user: null
        }
        this.updateState = this.updateState.bind(this);


    }

    updateState(value) {
        this.setState({ updatedatas: value.update })

    }

    async componentDidMount() {
        // fetch('http://localhost:8000/api/user/1')
        //   .then(res => res.json())
        //   .then(json => {
        //       this.setState({
        //         user: json,
        //       })
        //   });

        fetch('http://localhost:8000/api/pay/1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    payment: json,
                    isLoaded: true
                })
            });
    }


    render() {
        const { updatedatas, payment, isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Chargement...</div>
        }
        else {
            return (

                <div className=" mt-5">
                    <div className="h2 text-center">Mes CB enregistrées</div><br/>
                    {payment == null && <p className="text-center">
                        Retrouvez ici les cartes bancaires enregistrées lors de vos précédents achats sur notre site.<br />
                        <strong>Vous pouvez sélectionner votre carte préférée pour gagner du temps lors de vos prochaines commandes.</strong>
                    </p>}
                    <div className="bloc-cards">
                        {payment !== null && <div className="container-fluid" >
                            <div className="row">
                                {payment.map((cb, i) => (
                                    <div className="list" key={i}  >
                                        <ul className="list-group list-group-flush" >
                                            <li className="list-group-item">Carte n° {cb.payCb}</li>
                                            <li className="list-group-item">Nom : {cb.payLastname} {cb.payFirstname}</li>
                                            <li className="list-group-item">Date d'expiration : {cb.payExpiration}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>}
                    </div>
                </div>
            )
        }
    }
}
export default ProfilePay;