import React, { Component } from 'react';
import axios from 'axios';

export default class PayModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update:'',
      firstname: '',
      lastname: '',
      payCb: '',
      payCvv: '',
      payExpiration: '',
      checked: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.checkChange = this.checkChange.bind(this);
    this.onPayChange = this.onPayChange.bind(this);
  }

  checkChange(event) {
    const target = event.target;
    const value = target.name === 'checked' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }); 
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.state;
    axios
      .post(`http://localhost:8000/api/addCb`, data)
      .then((res) => {
        if (res) {
          console.log(res)
          document.getElementById('pop_form').style.display = "none";
          this.setState({update:'refresh'});
            this.sendToParent()
        }
      })
      .catch(err => console.log(err));
  }
  onTextChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onPayChange(e) {

    let date = e.target.value;
    date = date.split('-');
    date = date[1]+'-'+date[0]+'-30';
    this.setState({ payExpiration: date });
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

      <form onSubmit={this.onSubmit} method="POST" id="pop_form" >
        <div className="form-group">
          <label htmlFor="firstname">Prénom</label>
          <input type="text" className="form-control" id="firstname" name="firstname" onChange={(e) => this.onTextChange(e)} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Nom</label>
          <input type="text" className="form-control" id="lastname" name="lastname" onChange={(e) => this.onTextChange(e)} required />
        </div>
        <div className="form-group">
          <label htmlFor="payCb">N° carte (16 chiffres)</label>
          <input type="text" className="form-control" id="payCb" name="payCb" onChange={(e) => this.onTextChange(e)} required />
        </div>

        <div className="form-group">
          <label htmlFor="payCvv">CVV (3 chiffres)</label>
          <input type="text" className="form-control" id="payCvv" name="payCvv" onChange={(e) => this.onTextChange(e)} required />
        </div>
        <div className="form-group">
          <label htmlFor="payEpiration">Date d'expiration (MM-YYYY)</label>
          <input type="text" className="form-control" id="payExpiration" name="payExpiration" onChange={(e) => this.onPayChange(e)} required />
        </div>
        <input
          name="checked" type="checkbox"
          checked={this.state.checked}
          onChange={this.checkChange} />&nbsp;
        <label htmlFor="checked">Enregistrer en tant que carte de paiement préférée</label><br/>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Enregistrer
        </button>
        </div>
      </form>

    );

  }
}
