import React, { Component } from 'react';

class AsidePay extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: [],
        cb:null,
        user:null
      } 
      this.updateState = this.updateState.bind(this);
      

    }

    updateState(value) {
        this.setState({updatedatas:value.update})
    
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/user')
          .then(res => res.json())
          .then(json => {
              this.setState({
                cb: json.cb,
                user: json,
              })
          });
    }


    render(){
        const updatedatas = this.state;
        
        return(
            
<div className="card mt-5">
<div class="title-1 text-center">Mes CB enregistrées</div>
{this.state.cb == null && <p class="text-center">
        Retrouvez ici les cartes bancaires enregistrées lors de vos précédents achats sur notre site.<br/>
        <strong>Vous pouvez sélectionner votre carte préférée pour gagner du temps lors de vos prochaines commandes.</strong>
    </p>}
    <div class="bloc-cards">
    {this.state.cb !== null && <div>bloc de cb</div>}
    </div>

</div>
        )
    }
}
export default AsidePay;