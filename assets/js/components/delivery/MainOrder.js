import React from 'react';
import MainDeliveryModal from './MainDeliveryModal';

class MainOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products')),
      productsString: '',
      total: 0,
      delivery: 'classic',
      packaging: false,
      location: 'FR',
      deliveryPrice: 0,
      december: new Date().getMonth(),
      discount: null,
      paiement: '',
      poids: null,
      address: '',
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.discount();
  }

  async discount() {
    let userID;
    await this.calculateTotal();
    await fetch('http://localhost:8000/api/getUserID')
      .then((res) => res.json())
      .then((json) => {
        userID = json;
      });
    await fetch('http://localhost:8000/api/getAddress/' + userID)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          address: json[0],
        });
      });
    await fetch('http://localhost:8000/api/getPaiement/' + userID)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          paiement: json[0],
        });
      });
    await fetch('http://localhost:8000/api/getDiscount/' + userID)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          discount: json,
        });
      });
    await this.calculateTotal();
  }

  deleteItem(id) {
    this.setState(
      (state) => {
        const products = state.products.filter((item) => item.idProduct !== id);
        localStorage.setItem('products', JSON.stringify(products));
        return {
          products,
        };
      },
      () => this.calculateTotal()
    );
    window.location.reload(false);
  }

  // Get total price products
  calculateTotal() {
    // Add products prices
    let totalArr = [];
    for (let i = 0; i < this.state.products.length; i++) {
      totalArr[i] =
        this.state.products[i].price * this.state.products[i].amount;
    }

    let weightArr = [];
    for (let i = 0; i < this.state.products.length; i++) {
      weightArr[i] =
        this.state.products[i].weight * this.state.products[i].amount;
    }

    let weight = weightArr.reduce((a, b) => a + b, 0);
    this.setState({ poids: weight });
    let total = totalArr.reduce((a, b) => a + b, 0);
    let totalProducts = total;
    let deliveryPrice = 0;

    // Add the delivery price
    if (this.state.delivery == 'classic') {
      deliveryPrice = total * 0.05;
    } else {
      deliveryPrice = total * 0.2;
    }

    // Add the destination price
    switch (this.state.location) {
      case 'FR':
        deliveryPrice += deliveryPrice * 0.1;
        break;
      case 'EU':
        deliveryPrice += deliveryPrice * 0.15;
        break;
      case 'MO':
        deliveryPrice += deliveryPrice * 0.3;
        break;
    }

    if (
      this.state.delivery == 'classic' &&
      this.state.location == 'FR' &&
      totalProducts >= 400
    ) {
      deliveryPrice = 0;
    }

    // If the weight exceeds 4 kilos there is a fee
    if (weight > 4000) {
      deliveryPrice += 10;
    }

    if (this.state.discount != (null || 0)) {
      total -= this.state.discount;
    }

    total += deliveryPrice;

    // Get a string of all products
    let productsString = '';

    this.state.products.forEach((element) => {
      let amountString = '';

      if (element.amount > 1) {
        for (let index = 0; index < element.amount; index++) {
          amountString = amountString.concat(element.idProduct + ';');
        }
        productsString = productsString.concat(amountString);
      } else {
        productsString = productsString.concat(element.idProduct + ';');
      }
    });

    this.setState({
      total: parseInt(total.toFixed(2)),
      deliveryPrice: deliveryPrice.toFixed(2),
      productsString,
    });
  }

  changeDelivery(event) {
    this.setState(
      {
        delivery: event.target.value,
      },
      () => this.calculateTotal()
    );
  }

  changeLocation(event) {
    this.setState(
      {
        location: event.target.value,
      },
      () => this.calculateTotal()
    );
  }

  changePackaging() {
    this.setState(
      {
        packaging: !this.state.packaging,
      },
      () => this.calculateTotal()
    );
  }

  render() {
    const { address } = this.state;
    const { paiement } = this.state;
    let { products, poids } = this.state;
    return (
      <div className="container-mb mt-3 mb-3">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="txt-color">Votre panier</span>
              <span className="badge bg-blue txt-white badge-pill">
                {products.length} éléments
              </span>
            </h4>
            <ul className="list-group mb-3">
              {products.map((product) => (
                <li
                  key={product.idProduct}
                  className="list-group-item d-flex justify-content-between lh-condensed"
                >
                  <button
                    type="button"
                    onClick={() => this.deleteItem(product.idProduct)}
                    className="close text-danger"
                  >
                    &times;
                  </button>
                  <p className="pt-2 text-secondary">{product.amount}</p>
                  <div>
                    <h6 className="my-0">{product.name}</h6>
                    <small>
                      <a
                        href={`/detailsProduct${product.idProduct}`}
                        target="_blanck"
                      >
                        Fiche produit
                      </a>
                    </small>
                  </div>
                  <span className="text-muted">{product.price} €</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div>
                  <h6 className="my-0">Livraison</h6>
                  <select
                    className="form-control"
                    id="delivery"
                    onChange={this.changeDelivery.bind(this)}
                  >
                    <option value="classic">Classique</option>
                    <option value="express">Express</option>
                  </select>
                </div>
                <span>{this.state.deliveryPrice} €</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Poids</span>
                <strong> {poids} g</strong>
              </li>
              {this.state.discount != null && (
                <li className="list-group-item d-flex justify-content-between">
                  <span>Rabais</span>
                  <strong>- {this.state.discount} €</strong>
                </li>
              )}
              <li className="list-group-item d-flex justify-content-between">
                <span>
                  Total (EUR) <MainDeliveryModal />
                </span>
                <strong>{this.state.total} €</strong>
              </li>
              {this.state.december == 12 ||
                (this.state.total > 400 && (
                  <li className="list-group-item d-flex justify-content-between">
                    <div className=" form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="packaging"
                        name="packaging"
                        onChange={this.changePackaging.bind(this)}
                      />
                      <label htmlFor="packaging" className="form-check-label">
                        Emballage des produits
                      </label>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3 txt-color">Adresse personnelle</h4>
            <form method="POST" action="/api/order">
              <input type="hidden" name="total" value={this.state.total} />
              <input
                type="hidden"
                name="delivery"
                value={this.state.delivery}
              />
              <input
                type="hidden"
                name="packaging"
                value={this.state.packaging}
              />
              <input
                type="hidden"
                name="products"
                value={this.state.productsString}
              />
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    required
                    defaultValue={address.delFirstname}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    required
                    defaultValue={address.delLastname}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  required
                  defaultValue={address.delAddress}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address2">Complément d'addresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  name="address2"
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="country">Region</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    name="country"
                    onChange={this.changeLocation.bind(this)}
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
                    name="zip"
                    required
                    defaultValue={address.delCp}
                  />
                </div>
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
                    name="cc-name"
                    defaultValue={paiement.payLastname}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Numero de carte</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cc-number"
                    name="cc-number"
                    defaultValue={paiement.payCb}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Date d'expiration</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cc-expiration"
                    name="cc-expiration"
                    defaultValue={paiement.payExpiration}
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">CVV</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cc-cvv"
                    name="cc-cvv"
                    defaultValue={paiement.payCvv}
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
