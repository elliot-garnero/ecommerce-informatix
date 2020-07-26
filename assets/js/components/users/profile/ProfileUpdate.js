import React, { Component } from 'react';
import { CountryDropdown} from 'react-country-region-selector';


class ProfileUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: [],
        country: '',
        idUser:1
      } 
      this.updateState = this.updateState.bind(this);
      
    }

    updateState(value) {
        this.setState({updatedatas:value.update})
    }
    
    selectCountry (val) {
      this.setState({ country: val });
    }
  
   

    render(){
        const { updatedatas,country, idUser } = this.state;console.log(country)
        return(

<div className="card">
              
  <div className="card-body">
    <div className="row">
      <div className="col-md-12">
        <h4>Mon Compte</h4>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <form action="api/update/firstname/1" method="POST">
          <div className="form-group row">
            <label htmlFor="name" className="col-4 col-form-label">Prénom</label> 
            <div className="col-6">
              <input id="name" name="firstname" placeholder="Prénom" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button  type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form action="api/update/lastname/1" method="POST">
          <div className="form-group row">
            <label htmlFor="lastname" className="col-4 col-form-label">Nom</label> 
            <div className="col-6">
              <input id="lastname" name="lastname" placeholder="Nom" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button  type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form action="api/update/email/1" method="POST">
          <div className="form-group row">
            <label htmlFor="email" className="col-4 col-form-label">Email</label> 
            <div className="col-6">
              <input id="email" name="email" placeholder="Email" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button  type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form action="api/update/address/1" method="POST">
          <div className="form-group row">
            <label htmlFor="address" className="col-4 col-form-label">Adresse</label> 
            <div className="col-6">
              <input id="address" name="address" placeholder="Adresse" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button  type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form action="api/update/cp/1" method="POST">
          <div className="form-group row">
            <label htmlFor="cp" className="col-4 col-form-label">Code postal</label> 
            <div className="col-6">
              <input id="cp" name="cp" placeholder="Code Postal" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button  type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form action="api/update/city/1" method="POST">
          <div className="form-group row">
            <label htmlFor="city" className="col-4 col-form-label">Ville</label> 
            <div className="col-6">
              <input id="city" name="city" placeholder="Ville"  className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button  type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form action="api/update/countries/1" method="POST">
          <div className="form-group row">
            <label htmlFor="countries" className="col-4 col-form-label">Pays</label> 
            <div className="col-6">
            <CountryDropdown
              value={country}
              onChange={(val) => this.selectCountry(val)}
              name="countries"
            />
            </div>
            <div className="col-2">
              <button  type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form action="api/update/password/1" method="POST">
          <div className="form-group row">
            <label htmlFor="password" className="col-4 col-form-label">Nouveau mot de passe</label> 
            <div className="col-6">
              <input id="password" name="password" placeholder="Nouveau mot de passe" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button  type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
      </div>
    </div>
  </div>
</div>
        )
    }
}
export default ProfileUpdate;