import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class ProfileUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        updatedatas: [],
        country: '',
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
        const { updatedatas,country } = this.state;
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
        <form>
          <div className="form-group row">
            <label htmlFor="name" className="col-4 col-form-label">Prénom</label> 
            <div className="col-6">
              <input id="name" name="name" placeholder="Prénom" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button name="submit" type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form>
          <div className="form-group row">
            <label htmlFor="lastname" className="col-4 col-form-label">Nom</label> 
            <div className="col-6">
              <input id="lastname" name="lastname" placeholder="Nom" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button name="submit" type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form>
          <div className="form-group row">
            <label htmlFor="email" className="col-4 col-form-label">Email</label> 
            <div className="col-6">
              <input id="email" name="email" placeholder="Email" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button name="submit" type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form>
          <div className="form-group row">
            <label htmlFor="adress" className="col-4 col-form-label">Adresse</label> 
            <div className="col-6">
              <input id="adress" name="adress" placeholder="Adresse" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button name="submit" type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form>
          <div className="form-group row">
            <label htmlFor="cp" className="col-4 col-form-label">Code postal</label> 
            <div className="col-6">
              <input id="cp" name="cp" placeholder="Code Postal" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button name="submit" type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form>
          <div className="form-group row">
            <label htmlFor="city" className="col-4 col-form-label">Ville</label> 
            <div className="col-6">
              <input id="city" name="city" placeholder="Ville"  className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button name="submit" type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form>
          <div className="form-group row">
            <label htmlFor="city" className="col-4 col-form-label">Pays</label> 
            <div className="col-6">
            <CountryDropdown
              value={country}
              onChange={(val) => this.selectCountry(val)}
            />
            </div>
            <div className="col-2">
              <button name="submit" type="submit" className="btn btn-primary">Enregistrer</button>
            </div>
          </div>
          </form>
          <form>
          <div className="form-group row">
            <label htmlFor="newpass" className="col-4 col-form-label">Nouveau mot de passe</label> 
            <div className="col-6">
              <input id="newpass" name="newpass" placeholder="Nouveau mot de passe" className="form-control here" type="text" />
            </div>
            <div className="col-2">
              <button name="submit" type="submit" className="btn btn-primary">Enregistrer</button>
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