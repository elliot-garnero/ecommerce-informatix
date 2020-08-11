import React, { Component } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

class AddBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectionned: '',
    };
  }

  //DID_MOUNT
  componentDidMount() {
    this.getProducts();
  }

  //FUNCTIONS
  getProducts() {
    axios.get(`http://localhost:8000/api/products/`).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  handleChange(event) {
    let value = event.target.value;
    this.setState({
      selectionned: value,
    });
  }

  render() {
    const products = this.state.products;
    const selectionned = this.state.selectionned;
    return (
      <>
        <NavbarAdmin />
        <div className="container-mb card">
          <form method="POST" action="/api/createBundle">
            <h2 className="m-4 text-center txt-orange">
              <strong>Administrateur / Création de lot : </strong>
            </h2>
            <div className="card bg-blue txt-white p-2 m-4">
              <label htmlFor="products">Recherche de produits</label>
              <select
                className="form-control"
                name="products"
                size="5"
                onChange={(e) => this.handleChange(e)}
              >
                {products.map((product, i) => (
                  <option
                    key={i}
                    value={
                      product.name +
                      ' (réf= ' +
                      product.idProduct +
                      ',couleur= ' +
                      product.color +
                      ')'
                    }
                  >
                    {product.name} (réf: {product.idProduct}, couleur:{' '}
                    {product.color})
                  </option>
                ))}
              </select>
              <p className="m-2">Sélectionné : {selectionned}</p>
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="refs">Produits</label>
              <textarea
                rows="3"
                className="form-control"
                id="refs"
                name="refs"
                required
                placeholder="Exemple : Produit (réf.= number, couleur= couleur), etc"
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="name">Nom du lot</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                name="name"
                placeholder="Nom du lot"
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="description">Description</label>
              <textarea
                rows="3"
                className="form-control"
                id="description"
                name="description"
                placeholder="Description du lot"
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                className="form-control"
                id="stock"
                required
                name="stock"
                placeholder="Stocks de départ"
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture1">Image 1</label>
              <input
                type="text"
                className="form-control"
                id="picture1"
                name="picture1"
                placeholder="Photo1"
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture2">Image 2</label>
              <input
                type="text"
                className="form-control"
                id="picture2"
                name="picture2"
                placeholder="Photo2"
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture3">Image 3</label>
              <input
                type="text"
                className="form-control"
                id="picture3"
                name="picture3"
                placeholder="Photo3"
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture4">Image 4</label>
              <input
                type="text"
                className="form-control"
                id="picture4"
                name="picture4"
                placeholder="Photo4"
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="price">Prix</label>
              <input
                type="number"
                className="form-control"
                id="price"
                required
                name="price"
                min="1"
                step="0.01"
                placeholder="Prix"
              />
            </div>
            <input
              type="submit"
              className="bg-orange txt-white btn btn-block mt-4"
              value="Créer ce lot"
            />
            <br />
          </form>
        </div>
      </>
    );
  }
}

export default AddBundle;
