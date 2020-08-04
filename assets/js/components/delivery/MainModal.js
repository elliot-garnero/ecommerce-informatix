import React from 'react';

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
        parseInt(this.state.products[i].price) * this.state.products[i].amount;
    }

    let total = totalArr.reduce((a, b) => a + b, 0);

    this.setState({
      total,
    });
  }

  deleteItem(id) {
    this.setState(
      (state) => {
        const products = state.products.filter((item) => item.idProduct !== id);
        // console.log(item);
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
            item.amount = parseInt(e.target.value);
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
        <div>
          <a className="text-decoration-none" data-toggle="modal" data-target="#modal1" >
            <span className="m-2 txt-white">Mon panier</span>
            <i className="fas fa-shopping-cart bg-warning p-3 rounded-circle"></i>
          </a>
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
                      <div key={num} id={product.idProduct}>
                        <div className="row">
                          <div className="col">
                            <img
                              className="img-fluid"
                              src={product.picture1}
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
                                {selectNumber.map((number, i) => (
                                  <option key={i} value={number}>
                                    {number}
                                  </option>
                                ))}
                              </select>
                            </ul>
                          </div>
                          <button
                            type="button"
                            onClick={() => this.deleteItem(product.idProduct)}
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
        <div>
          <a className="text-decoration-none" data-toggle="modal" data-target="#modal1" >
            <span className="m-2 txt-white">Mon panier</span>
            <i className="fas fa-shopping-cart bg-warning p-3 rounded-circle"></i>
          </a>
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
                  <h6>Votre panier est vide</h6>
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
