import React, { Component } from 'react';

class ProfilePay extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: [],
        isLoaded:false,
        cb:null,
        user:null
      } 
      this.updateState = this.updateState.bind(this);
      

    }

    updateState(value) {
        this.setState({updatedatas:value.update})
    
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/user/1')
          .then(res => res.json())
          .then(json => {
              this.setState({
                user: json,
              })
          });

          fetch('http://localhost:8000/api/pay/1')
          .then(res => res.json())
          .then(json => {
              this.setState({
                cb: json,
                isLoaded:true
              })
          });
    }


    render(){
        const {updatedatas, user, cb, isLoaded} = this.state;
        if (!isLoaded){
            return <div>Chargement...</div>
        }
        else{
            return(
                
                <div className="mt-5">
                    <div className="title-1 text-center">Mes CB enregistrées</div>
                        {cb == null && <p className="text-center">
                        Retrouvez ici les cartes bancaires enregistrées lors de vos précédents achats sur notre site.<br/>
                        <strong>Vous pouvez sélectionner votre carte préférée pour gagner du temps lors de vos prochaines commandes.</strong>
                                                </p>}
                    <div className="bloc-cards">
                        {cb !== null && <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Carte n° {cb.payCb}</li>
                            <li className="list-group-item">Nom : {cb.payLastname} {cb.payFirstname}</li>
                            <li className="list-group-item">Date d'expiration : {cb.payExpiration}</li>
                        </ul>
                    </div>}
                </div>
            </div>
            )
        }
    }
}
export default ProfilePay;