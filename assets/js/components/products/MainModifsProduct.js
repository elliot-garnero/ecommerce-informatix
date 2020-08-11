import React, { Component } from 'react';
import axios from 'axios';
import NavbarAdmin from '../admin/NavbarAdmin';

class ModifProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idProduct: this.props.match.params.id,
      categories: [],
      dataProduct: '',
      weight: false,
    };
  }

  //DID_MOUNT
  componentDidMount() {
    this.getCategories();
    this.getProduct();
  }

  //FUNCTIONS
  getCategories() {
    axios.get(`http://localhost:8000/api/getcategories`).then((res) => {
      const categories = res.data;
      this.setState({
        categories,
      });
    });
  }
  getProduct() {
    axios
      .get(`http://localhost:8000/api/products/` + this.state.idProduct)
      .then((res) => {
        this.setState({
          dataProduct: res.data,
        });
        this.weightPrice(this.state.dataProduct.weight);
      });
  }
  weightPrice(value) {
    if (value < 1000) {
      this.setState({
        weight: '5€',
      });
    } else if (value >= 1000 && value < 5000) {
      this.setState({
        weight: '8€',
      });
    } else if (value >= 5000 && value < 10000) {
      this.setState({
        weight: '12€',
      });
    } else {
      this.setState({
        weight: '18€',
      });
    }
  }

  render() {
    const categories = this.state.categories;
    const idProduct = this.state.idProduct;
    const dataProduct = this.state.dataProduct;
    const priceWeight = this.state.weight;
    return (
      <>
        <NavbarAdmin />
        <div className="container card">
          <form method="POST" action="/api/modifproduct">
            <h2 className="mt-3 mb-3 text-center txt-orange">
              <strong>Administrateur / Modification du produit : </strong>
            </h2>
            <h3 className="mb-3 text-center txt-color">
              <strong>{dataProduct.name}</strong>
            </h3>
            <input
              name="idProduct"
              type="hidden"
              defaultValue={idProduct}
            ></input>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="categorie">Categorie</label>
              <select className="form-control" name="categorie">
                {categories.map((categorie) => (
                  <option key={categorie.idCat} value={categorie.idCat}>
                    {categorie.catName}
                  </option>
                ))}
              </select>
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                name="name"
                defaultValue={dataProduct.name}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="description">Description</label>
              <textarea
                rows="3"
                className="form-control"
                id="description"
                required
                name="description"
                defaultValue={dataProduct.description}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="brand">Marque</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                required
                name="brand"
                defaultValue={dataProduct.brand}
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
                defaultValue={dataProduct.stock}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="new"
                name="new"
              />
              <label htmlFor="new" className="form-check-label">
                Nouveauté
              </label>
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="promo"
                name="promo"
              />
              <label htmlFor="promo" className="form-check-label">
                Promotion
              </label>
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture1">Image 1</label>
              <input
                type="text"
                className="form-control"
                id="picture1"
                name="picture1"
                defaultValue={dataProduct.picture1}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture2">Image 2</label>
              <input
                type="text"
                className="form-control"
                id="picture2"
                name="picture2"
                defaultValue={dataProduct.picture2}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture3">Image 3</label>
              <input
                type="text"
                className="form-control"
                id="picture3"
                name="picture3"
                defaultValue={dataProduct.picture3}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="characteristics">
                Caractéristiques <h6>(séparés par des tirets)</h6>
              </label>
              <input
                type="text"
                className="form-control"
                id="characteristics"
                required
                name="characteristics"
                defaultValue={dataProduct.characteristics}
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
                defaultValue={dataProduct.price}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="weight">
                Poids <h6>(en grammes)</h6>
              </label>
              <input
                type="number"
                className="form-control"
                id="weight"
                required
                name="weight"
                min="1"
                defaultValue={dataProduct.weight}
                onChange={(e) => this.weightPrice(e.target.value)}
              />
              <div className="mt-1 txt-blue">
                Frais de port estimés : {priceWeight}
              </div>
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="color">Couleur</label>
              <input
                type="text"
                className="form-control"
                id="color"
                required
                name="color"
                defaultValue={dataProduct.color}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="size">
                Taille <h6>(longueur*largeur*profondeur, en cm)</h6>
              </label>
              <input
                type="text"
                className="form-control"
                id="size"
                required
                name="size"
                defaultValue={dataProduct.size}
              />
            </div>
            <input
              type="submit"
              className="bg-orange txt-white btn btn-block mt-4"
              value="Modifier le produit"
            />
            <br />
          </form>
          <form method="POST" action="/api/deleteproduct">
            <input
              name="idProduct"
              type="hidden"
              defaultValue={idProduct}
            ></input>
            <input
              type="submit"
              className="bg-danger txt-white btn btn-block mb-5"
              value="Supprimer ce produit"
            />
          </form>
        </div>
      </>
    );
  }
}

export default ModifProduct;
