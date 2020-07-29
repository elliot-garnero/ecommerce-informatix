import React from 'react';

localStorage.clear();
// localStorage.setItem(
//   'products',
//   JSON.stringify([
//     { id: 3, name: 'CPU Ryzen 3700x', price: 200, weight: 200, amount: 5 },
//     { id: 1, name: 'RAM Corsair 16go', price: 100, weight: 500, amount: 3 },
//     { id: 2, name: 'NVIDIA GTX 1660', price: 500, weight: 700, amount: 1 },
//   ])
// );

class MainModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products')) || [],
      total: 0,
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.itemNumberChange = this.itemNumberChange.bind(this);
  }

  componentDidMount() {
    this.calculateTotal();
  }

  calculateTotal() {
    let totalArr = [];
    for (let i = 0; i < this.state.products.length; i++) {
      totalArr[i] =
        this.state.products[i].price * this.state.products[i].amount;
    }

    let total = totalArr.reduce((a, b) => a + b, 0);

    this.setState({
      total,
    });
  }

  deleteItem(id) {
    this.setState(
      (state) => {
        const products = state.products.filter((item) => item.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        return {
          products,
        };
      },
      () => this.calculateTotal()
    );
  }

  itemNumberChange(e, id) {
    e.persist();
    this.setState(
      (state) => {
        const products = state.products.map((item, key) => {
          if (key === id) {
            item.amount = e.target.value;
            return item;
          } else {
            return item;
          }
        });
        localStorage.setItem('products', JSON.stringify(products));
        return {
          products,
        };
      },
      () => this.calculateTotal()
    );
  }

  render() {
    const selectNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (this.state.products.length > 0) {
      return (
        <div className="container d-flex justify-content-center mt-100">
          <button
            type="button"
            className="btn btn-outline-info btn-rounded waves-effect"
            data-toggle="modal"
            data-target="#modal1"
          >
            Panier
          </button>
          <div className="modal fade" id="modal1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Votre panier</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <a href="/order">
                    <button className="btn mb-3 btn-outline-info btn-rounded waves-effect">
                      Commander
                    </button>
                  </a>
                  <h6>Détails de la commande</h6>
                  <p className="text-center">Total : {this.state.total} €</p>
                  <div className="container">
                    {this.state.products.map((product, num) => (
                      <div key={product.id}>
                        <div className="row">
                          <div className="col">
                            <img
                              className="img-fluid"
                              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
                            />
                          </div>
                          <div className="col pt-5">
                            <ul type="none">
                              <li>
                                <h6>{product.name}</h6>
                              </li>
                              <li>{product.price} €</li>
                              <select
                                className="form-control"
                                value={this.state.products[num].amount}
                                onChange={(e) => this.itemNumberChange(e, num)}
                              >
                                {selectNumber.map((number) => (
                                  <option key={number} value={number}>
                                    {number}
                                  </option>
                                ))}
                              </select>
                            </ul>
                          </div>
                          <button
                            type="button"
                            onClick={() => this.deleteItem(product.id)}
                            className="close"
                          >
                            &times;
                          </button>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container d-flex justify-content-center mt-100">
          <button
            type="button"
            className="btn btn-outline-info btn-rounded waves-effect"
            data-toggle="modal"
            data-target="#modal1"
          >
            Panier
          </button>
          <div className="modal fade" id="modal1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Votre panier</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <h6>Aucun objet pour le moment</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MainModal;
