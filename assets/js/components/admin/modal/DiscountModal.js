import React, { Component } from 'react';
import axios from 'axios';

export default class DiscountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: '',
      id: '',
      nom: '',
      prenom: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.state;
    axios
      .post(`http://localhost:8000/api/addDiscount/` + this.props.id, data)
      .then((res) => {
        if (res) {
          document.getElementById('discount_form').style.display = 'none';
          this.setState({ update: 'refresh' });
          this.sendToParent();
        }
      })
      .catch((err) => console.log(err));
  }
  onTextChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  sendToParent() {
    const update = this.state;
    this.props.dataToParent(update);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="container w-50 justify-center" id="discount_form">
        <div className="alert alert-success">
          Remise actuelle accordé à{' '}
          <b className="h4">
            {this.props.prenom} {this.props.nom}
          </b>{' '}
          (id: {this.props.id}) : <br />
          <b>{this.props.discount ? this.props.discount : 0} €</b>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="discount">Montant:</label>
            <input
              type="text"
              className="form-control"
              id="discount"
              name="discount"
              onChange={(e) => this.onTextChange(e)}
              required
            />
          </div>
          <input
            type="hidden"
            className="form-control"
            id="id"
            name="id"
            value={this.props.id}
          />

          <div className="form-group">
            <button className="form-control btn btn-primary" type="submit">
              Accorder
            </button>
          </div>
        </form>
      </div>
    );
  }
}
