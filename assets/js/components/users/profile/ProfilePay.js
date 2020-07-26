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
     cc_format(value) {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
        for (i=0, len=match.length; i<len; i+=4) {
          parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
          return parts.join(' ')
        } else {
          return value
        }
      }

    render() {
        const { updatedatas, payment, isLoaded } = this.state;
        const payStyle = { 'width': '40%' };
        const options = {  year: 'numeric', month: 'numeric' };
        
        
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
                    <div className="bloc-cards pb-5 ">
                        {payment !== null && <div className="container-fluid" >
                            <div className="row">
                                {payment.map((cb, i) => (
                                    
                                    <div className="card mr-5" key={i} style={payStyle}>
                                    <img className="card-img-top" src="https://image.freepik.com/photos-gratuite/main-tenant-carte-puce-vierge-fond-bleu_9555-670.jpg" alt="Card image"/>
                                    <div className="card-img-overlay">
                                      <h5 className="card-title d-flex flex-row-reverse mb-5">Carte n° {cb.payCb.toString().replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}</h5>
                                      <p className="card-text d-flex flex-row-reverse pt-5">Mr {cb.payLastname} {cb.payFirstname}</p>
                                      <p className="card-text d-flex flex-row-reverse">Expire à fin : {new Date(cb.payExpiration.substr(0,10)).toLocaleDateString('fr-FR', options)}</p>
                                    </div>
                                  </div>
                                ))}
                            </div>
                        </div>}
                    </div>
                    <div className="text-center">
                        <button className="btn btn-info mb-5 mr-3 w-50">Ajouter une carte</button>
                        </div>
                </div>
            )
        }
    }
}
export default ProfilePay;