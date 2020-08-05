import React from 'react';

class MainDeliveryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-primary btn-sm dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Détails tarifs
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item">
            Si la livraison est express, un surplus de 15% est appliqué
          </p>
          <p className="dropdown-item">
            Si la livraison est en Europe, un surplus de 15% est appliqué
          </p>
          <p className="dropdown-item">
            Si la livraison est en Monde, un surplus de 30% est appliqué
          </p>
          <p className="dropdown-item">
            Si le poids est supérieur à 4KG, il y a 10€ de surcoût
          </p>
        </div>
      </div>
    );
  }
}

export default MainDeliveryModal;
