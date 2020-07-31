import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import axios from 'axios';

class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: '',
      id: 1,
      username:'',
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      cp: '',
      countries: '',
      refresh: null
    }
    this.updateState = this.updateState.bind(this);
    this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.sendToParent = this.sendToParent.bind(this);
    this.selectCountry = this.selectCountry.bind(this)
  }

  updateState(value) {
    this.setState({ updatedatas: value.update })
  }

  selectCountry(val) {
    this.setState({ countries: val });
  }

  onTextChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onSubmitUpdate(e) {
    e.preventDefault();    
      const data = this.state;
      axios
        .post(`http://localhost:8000/api/update/1`, data)
        .then((res) => {
          console.log(res)
          this.setState({
            refresh: 'refresh',
            username:'',
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            cp: '',
            countries: ''
           });
        })
        .then((res) => {
          this.sendToParent(); console.log(this.state.refresh)
        })
        .catch(err => console.log(err));   
  }

  sendToParent() {
    const update = this.state;
    this.props.dataToParent(update);
  }

  render() {
    const { updatedatas, countries } = this.state;
    return (

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
              <form onSubmit={this.onSubmitUpdate}>
              <div className="form-group row">
                  <label htmlFor="name" className="col-4 col-form-label">Pseudo</label>
                  <div className="col-6">
                    <input id="username" name="username" placeholder="Pseudo" className="form-control here" type="text" onChange={(e) => this.onTextChange(e)} />
                  </div>
                  </div>
                <div className="form-group row">
                  <label htmlFor="name" className="col-4 col-form-label">Prénom</label>
                  <div className="col-6">
                    <input id="firstname" name="firstname" placeholder="Prénom" className="form-control here" type="text" onChange={(e) => this.onTextChange(e)} />
                  </div>

                </div>

                <div className="form-group row">
                  <label htmlFor="lastname" className="col-4 col-form-label">Nom</label>
                  <div className="col-6">
                    <input id="lastname" name="lastname" placeholder="Nom" className="form-control here" type="text" onChange={(e) => this.onTextChange(e)} />
                  </div>

                </div>


                <div className="form-group row">
                  <label htmlFor="email" className="col-4 col-form-label">Email</label>
                  <div className="col-6">
                    <input id="email" name="email" placeholder="Email" className="form-control here" type="text" onChange={(e) => this.onTextChange(e)} />
                  </div>

                </div>

                <div className="form-group row">
                  <label htmlFor="address" className="col-4 col-form-label">Adresse</label>
                  <div className="col-6">
                    <input id="address" name="address" placeholder="Adresse" className="form-control here" type="text" onChange={(e) => this.onTextChange(e)} />
                  </div>

                </div>

                <div className="form-group row">
                  <label htmlFor="cp" className="col-4 col-form-label">Code postal</label>
                  <div className="col-6">
                    <input id="cp" name="cp" placeholder="Code Postal" className="form-control here" type="text" onChange={(e) => this.onTextChange(e)} />
                  </div>

                </div>


                <div className="form-group row">
                  <label htmlFor="city" className="col-4 col-form-label">Ville</label>
                  <div className="col-6">
                    <input id="city" name="city" placeholder="Ville" className="form-control here" type="text" onChange={(e) => this.onTextChange(e)} />
                  </div>

                </div>


                <div className="form-group row">
                  <label htmlFor="countries" className="col-4 col-form-label">Pays</label>
                  <div className="col-6">
                    <CountryDropdown
                      value={countries}
                      onChange={(val) => this.selectCountry(val)}
                      name="countries"
                    />
                  </div>

                </div>


                <div className="form-group row">
                  <label htmlFor="password" className="col-4 col-form-label">Nouveau mot de passe</label>
                  <div className="col-6">
                    <input id="password" name="password" placeholder="Nouveau mot de passe" className="form-control here" type="text" onChange={(e) => this.onTextChange(e)} />
                  </div>

                </div>
                <div className="form-group row">
                <div className="col-4"></div>
                  <div className="col-6">
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
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