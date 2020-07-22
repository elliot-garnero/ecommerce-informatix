import React from 'react';

class MainOrder extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // products: {...localStorage},
      products: [
        { id: 1, name: 'CPU Ryzen 3700x', price: 449.99 },
        { id: 2, name: 'RAM Corsair 16go', price: 154 },
        { id: 3, name: 'NVIDIA GTX 1660', price: 350 },
      ],
    };
  }

  //   Besoin de la data des produits pour le total (poids, prix, frais de livraison)

  render() {
    let { products } = this.state;
    return (
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="txt-color">Votre panier</span>
              <span className="badge bg-blue txt-white badge-pill">
                {products.length} éléments
              </span>
            </h4>
            <ul className="list-group mb-3">
              {products.map((product, id) => (
                <li
                  key={id}
                  className="list-group-item d-flex justify-content-between lh-condensed"
                >
                  <div>
                    <h6 className="my-0">{product.name}</h6>
                    <small className="text-muted">Petite description</small>
                  </div>
                  <span className="text-muted">{product.price} €</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div>
                  <h6 className="my-0">Frais de port</h6>
                  <small>Description tarif</small>
                </div>
                <span>5 €</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (EUR)</span>
                <strong>20 €</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Code promo"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn bg-blue txt-white">
                    Valider
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3 txt-color">Adresse personnelle</h4>
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address2">Complément d'addresse</label>
                <input type="text" className="form-control" id="address2" />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="FR">France</option>
                    <option value="EU">Europe</option>
                    <option value="MO">Monde</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="zip">Code postal</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    required
                  />
                </div>
              </div>
              <hr className="mb-4" />
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label className="custom-control-label" htmlFor="same-address">
                  L'adresse de livraison est la même que l'adresse de
                  facturation
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Garder ces informations pour plus tard
                </label>
              </div>
              <hr className="mb-4" />

              <h4 className="mb-3 txt-color">Paiement</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Nom du porteur de la carte</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Numero de carte</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Date d'expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    required
                  />
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn txt-white btn-lg btn-block bg-blue"
                type="submit"
              >
                Continuer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MainOrder;
