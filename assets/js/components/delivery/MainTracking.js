import React from 'react';
import axios from 'axios';

class MainTracking extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingNumber: null,
      orderData: null,
    };
    this.getOrder = this.getOrder.bind(this);
  }

  numberChange(e) {
    this.setState({
      trackingNumber: e.target.value,
    });
  }

  getOrder(event) {
    event.preventDefault();
    axios
      .get(`http://localhost:8000/api/tracking/${this.state.trackingNumber}`)
      .then((res) => {
        const data = res.data;
        this.setState({ orderData: data });
      });
  }

  render() {
    if (this.state.orderData == null) {
      return (
        <form
          method="GET"
          action="/api/tracking"
          className="container"
          onSubmit={this.getOrder}
        >
          <div className="card">
            <h2 className="card-header info-color white-text text-center py-4 txt-color">
              <strong>Suivi de commande</strong>
            </h2>
          </div>
          <div className="card-header info-color white-text text-center py-4">
            <label htmlFor="number">Numero de commande</label>
            <input
              type="text"
              className="form-control"
              id="number"
              required
              name="number"
              onChange={(e) => this.numberChange(e)}
            />
            <button className="btn mt-4 txt-white btn-lg bg-blue" type="submit">
              Suivre
            </button>
          </div>
        </form>
      );
    } else {
      const {
        idOrder,
        ordAddress,
        ordDate,
        ordEmail,
        ordFirstname,
        ordLastname,
        ordMode,
        ordStatus,
        ordTotal,
        packaging,
      } = this.state.orderData;

      return (
        <div className="container">
          <div className="card">
            <h2 className="card-header info-color white-text text-center py-4 txt-color">
              <strong>Votre commande n° {idOrder}</strong>
            </h2>
          </div>
          <div className="card-header info-color white-text text-center py-4">
            <p>
              Bonjour {ordFirstname} {ordLastname}.
            </p>
            <p>
              Cette commande, d'un total de <strong>{ordTotal}</strong> € sera
              livré à {ordAddress} avec la livraison {ordMode}.
            </p>
            <p>
              Vous avez reçu les détails de cette commande sur l'adresse :
              <strong> {ordEmail}</strong>
            </p>
            <p>L'état actuel de votre colis est :</p>
            <h2 className="info-color white-text text-center py-4 txt-color">
              <strong>{ordStatus}</strong>
            </h2>
          </div>
        </div>
      );
    }
  }
}

export default MainTracking;
