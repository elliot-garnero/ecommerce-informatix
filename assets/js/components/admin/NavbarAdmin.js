import React, { Component } from 'react';

class NavbarAdmin extends Component {
  render() {
    return (
      <div className="container-md">
        <nav className="bg-grey navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/catalogAdmin">
            Espace Admin :{' '}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/add">
                  Ajouter un produit <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/bundles">
                  Gestionnaire de lots<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/deliveryList">
                  Liste des commandes<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/listUsers">
                  Liste des clients<span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarAdmin;
