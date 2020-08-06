import React, { Component } from 'react';
import axios from 'axios';

export default class AddressModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: '',
      firstname: '',
      lastname: '',
      address: '',
      cp: '',
      city: '',
      countries: '',
      active: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.checkChange = this.checkChange.bind(this);
  }

  checkChange(event) {
    const target = event.target;
    const value = target.name === 'checked' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value === 'on' ? 1 : 0
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.state;
    console.log(data)
    axios
      .post(`http://localhost:8000/api/addAddress`, data)
      .then((res) => {
        if (res) {
          console.log(res)
          document.getElementById('pop_form').style.display = "none";
          this.setState({ update: 'refresh' });
          this.sendToParent()
        }
      })
      .catch(err => console.log(err));
  }
  onTextChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  sendToParent() {
    const update = this.state;
    this.props.dataToParent(update);
  }


  render() {
    if (!this.props.show) {
      return null;
    }
    return (

      <form onSubmit={this.onSubmit} id="pop_form" >
        <div className="form-group">
          <label htmlFor="firstname">Prénom</label>
          <input type="text" className="form-control" id="firstname" name="firstname" onChange={(e) => this.onTextChange(e)} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Nom</label>
          <input type="text" className="form-control" id="lastname" name="lastname" onChange={(e) => this.onTextChange(e)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse</label>
          <input type="text" className="form-control" id="address" name="address" onChange={(e) => this.onTextChange(e)} required />
        </div>

        <div className="form-group">
          <label htmlFor="cp">Code Postal</label>
          <input type="text" className="form-control" id="cp" name="cp" onChange={(e) => this.onTextChange(e)} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ville</label>
          <input type="text" className="form-control" id="city" name="city" onChange={(e) => this.onTextChange(e)} required />
        </div>
        <div className="form-group">
          <label htmlFor="countries">Pays</label>
          <input type="text" className="form-control" id="countries" name="countries" onChange={(e) => this.onTextChange(e)} required />
        </div>
        <input
          name="active" type="checkbox"
          checked={this.state.active}
          onChange={this.checkChange} />&nbsp;
        <label htmlFor="active">Enregistrer en tant qu'adresse préférée</label><br />
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Enregistrer
        </button>
        </div>
      </form>

    );

  }
}
