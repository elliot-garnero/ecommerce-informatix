import React, { Component } from 'react';

class ProfileCommands extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: [],
        commands:null,
        isLoaded:false
      } 
      this.updateState = this.updateState.bind(this);
    }

    updateState(value) {
        this.setState({updatedatas:value.update})
    
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/command/1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    commands: json
                })
            });
    }

    render(){
        const {updatedatas, commands, isLoaded} = this.state;
        const commandStyle = { 'width': '100%' };
        const options = {  year: 'numeric', month: 'short', day: 'numeric' };
        if (!isLoaded) {
            return <div>Chargement...</div>
        }
        else {
            return(
                <div className=" mt-5">
                <div className="h2 text-center">Mes Commandes</div><br/>
                {commands == null && <p className="text-center">
                    Retrouvez ici toutes les commandes passées lors de vos précédents achats sur notre site.<br />
                </p>}   
                {commands !== null && <div className="container-fluid">
            <div className="row">
            {commands.map((command, i) =>
            <div className="card" style={commandStyle} key={i} id={command.idOrder}>
                <div className="row no-gutters">
                <div className="card-body">
                    <div className=" card-title">
                        Commande n° WEB00{command.idOrder}/{command.idUser}
                        <p className="card-text">Expédié à : {command.ordLastname} {command.ordFirstname}</p>
                        <p className="card-text">{command.ordAddress}</p>
                    </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card-body">
                            <h5 className="card-title">Statut de la commande : {command.ordStatus}</h5>
                            <p className="card-text">Passée le : {new Date(command.ordDate.substr(0,10)).toLocaleDateString('fr-FR', options)}</p>
                            <p className="card-text">Mode d'expédition : {command.ordMode}</p>
                            <p className="card-text">Prix total : {command.ordTotal}€</p>
                        </div>
                        <div className="d-flex flex-row-reverse">
                        <button className="btn btn-info mb-2 mr-3 w-25">Détails</button>
                        </div>
                    </div>
                </div>
            </div>
            )} 
            </div>
            </div> }
            </div>    
            )
        }
    }
}

export default ProfileCommands;