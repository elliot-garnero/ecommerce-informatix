import React, { Component } from 'react';
import axios from 'axios';
import NavbarAdmin from '../admin/NavbarAdmin';

class MainAdd extends Component {
  constructor() {
    super();
    this.state = { categories: [], loading: true };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    axios.get(`http://localhost:8000/api/getcategories`).then((res) => {
      const categories = res.data;
      this.setState({ categories, loading: false });
    });
  }

  render() {
    const loading = this.state.loading;
    const categories = this.state.categories;
    return (
      <>
        <NavbarAdmin />
        <form
          method="POST"
          action="/api/createproduct"
          className="container-mb"
        >
          <div className="card">
            <h2 className="card-header info-color white-text text-center py-4 txt-color">
              <strong>Administrateur /Ajouter un produit</strong>
            </h2>
            <div className="card-header info-color white-text text-center py-4">
              <a href="/manageCategories">
                <button type="button" className="btn btn-secondary">
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  Gérer les catégories
                </button>
              </a>
            </div>
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
              />
            </div>

            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture2">Image 2</label>
              <input
                type="text"
                className="form-control"
                id="picture2"
                name="picture2"
              />
            </div>

            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture3">Image 3</label>
              <input
                type="text"
                className="form-control"
                id="picture3"
                name="picture3"
              />
            </div>

            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="characteristics">Caractéristiques</label>
              <input
                type="text"
                className="form-control"
                id="characteristics"
                required
                name="characteristics"
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
              />
            </div>

            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="weight">Poids (grammes)</label>
              <input
                type="number"
                className="form-control"
                id="weight"
                required
                name="weight"
                min="1"
              />
            </div>

            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="color">Couleur</label>
              <input
                type="text"
                className="form-control"
                id="color"
                required
                name="color"
              />
            </div>

            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="size">Taille (longueur x largeur cm)</label>
              <input
                type="text"
                className="form-control"
                id="size"
                required
                name="size"
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Ajouter ce produit"
            />
            <br />
          </div>
        </form>
      </>
    );
  }
}

export default MainAdd;
