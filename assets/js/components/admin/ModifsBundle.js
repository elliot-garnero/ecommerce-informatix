import React, { Component } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

class ModifsBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idBundle: this.props.match.params.id,
      bundle: '',
    };
  }

  componentDidMount() {
    this.getBundle();
  }

  getBundle() {
    axios
      .get(`http://localhost:8000/api/bundles/` + this.state.idBundle)
      .then((res) => {
        this.setState({
          bundle: res.data,
        });
      });
  }

  render() {
    const bundle = this.state.bundle;
    console.log(bundle);
    return (
      <>
        <NavbarAdmin />
        <div className="container-mb card">
          <form method="POST" action="/api/modifBundle">
            <h2 className="mt-3 mb-3 text-center txt-orange">
              <strong>Administrateur / Modification du lot : </strong>
            </h2>
            <h3 className="mb-3 text-center txt-color">
              <strong>{bundle.bundName}</strong>
            </h3>
            <input
              name="idBundle"
              type="hidden"
              defaultValue={bundle.idBundle}
            ></input>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="name">Nom du lot</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                name="name"
                defaultValue={bundle.bundName}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="description">Description</label>
              <textarea
                rows="3"
                className="form-control"
                id="description"
                name="description"
                defaultValue={bundle.bundDescription}
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
                defaultValue={bundle.bundStock}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture1">Image 1</label>
              <input
                type="text"
                className="form-control"
                id="picture1"
                name="picture1"
                defaultValue={bundle.bundPicture1}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture2">Image 2</label>
              <input
                type="text"
                className="form-control"
                id="picture2"
                name="picture2"
                defaultValue={bundle.bundPicture2}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture3">Image 3</label>
              <input
                type="text"
                className="form-control"
                id="picture3"
                name="picture3"
                defaultValue={bundle.bundPicture3}
              />
            </div>
            <div className="card-header info-color white-text text-center py-4">
              <label htmlFor="picture4">Image 4</label>
              <input
                type="text"
                className="form-control"
                id="picture4"
                name="picture4"
                defaultValue={bundle.bundPicture4}
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
                defaultValue={bundle.bundPrice}
              />
            </div>
            <input
              type="submit"
              className="bg-orange txt-white btn btn-block mt-4"
              value="Modifier le produit"
            />
            <br />
          </form>
          <form method="POST" action="/api/deleteBundle">
            <input
              name="idBundle"
              type="hidden"
              defaultValue={bundle.idBundle}
            ></input>
            <input
              type="submit"
              className="bg-danger txt-white btn btn-block mb-5"
              value="Supprimer ce lot"
            />
          </form>
        </div>
      </>
    );
  }
}

export default ModifsBundle;
