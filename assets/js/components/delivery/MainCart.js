import React from 'react';

let productList = [
  { id: 1, name: 'CPU Ryzen 3700x', price: 449.99 },
  { id: 2, name: 'RAM Corsair 16go', price: 154 },
  { id: 3, name: 'NVIDIA GTX 1660', price: 350 },
];

/* Product */
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState({
      qty: this.state.qty + 1,
    });
    this.props.handleTotal(this.props.price);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1,
    });
    this.props.handleTotal(-this.props.price);
  }

  showInfo() {
    //put link to fiche produit
  }

  render() {
    return (
      <div className="mt-3">
        <div className="row form-group">
          <div className="col-sm-10">
            <h4>
              {this.props.name} : {this.props.price} €
            </h4>
          </div>
          <div className="col-sm-2 text-right">Quantité : {this.state.qty}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-6">
            <button className="btn btn-outline-primary" onClick={this.showInfo}>
              Fiche produit
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-outline-primary" onClick={this.add}>
              +1
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={this.subtract}
              disabled={this.state.qty < 1}
            >
              -1
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

/* Total */
class Total extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let total = this.props.total.toFixed(2);
    let port = (this.props.total * 0.15).toFixed(2);
    let totalWithPort = (+total + +port).toFixed(2);
    let mystyle = {
      borderTop: '1px solid #ddd',
      marginTop: '10px',
      paddingTop: '10px',
    };
    return (
      <div>
        <div
          style={{
            marginTop: '30px',
            backgroundColor: '#F6F6F6',
            padding: '10px',
          }}
        >
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">Prix panier :</span>
            <span className="col-6 text-right">{total} €</span>
          </h3>
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">Frais de port :</span>
            <span className="col-6 text-right">{port} €</span>
          </h3>
          <h3 className="row" style={mystyle}>
            <span className="col-6">Prix total :</span>
            <span className="col-6 text-right">{totalWithPort} €</span>
          </h3>
        </div>
      </div>
    );
  }
}

/* Cart */
class MainCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: '',
    };

    this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product),
    });
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price,
    });
    console.log(this.state.total);
  }

  render() {
    if (!this.state.productList) return <p>Chargement..</p>;

    var component = this;
    var products = this.state.productList.map(function (product) {
      return (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div className="container">
        {products}
        <Total total={this.state.total} />
        <div className="text-right">
          <a
            href="/order"
            className="btn btn-outline-dark bg-primary text-light mt-3 mb-3 text-center"
          >
            Commander
          </a>
        </div>
      </div>
    );
  }
}

export default MainCart;
