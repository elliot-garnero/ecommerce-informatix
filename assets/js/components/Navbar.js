import React, { Component } from 'react';
import logoSmall from '../../images/logoSmall.png';
import { Redirect } from 'react-router-dom';


class Navbar extends Component {
  
  render() {
    return (
      <div className="container">
        <nav className="bg-blue  text-center navbar navbar-expand-lg">
          <div className="col 6">
            <a className="navbar-brand" href="/catalog">
              <img className="img-thumbnail w-50" src={logoSmall} alt="logoInformatix"/>
            </a>
          </div>
          <div className="col 4">
            <input type="text" placeholder="Rechercher un produit..."></input>
            <i className="fab fa-sistrix bg-warning m-1 p-2 rounded"></i>
          </div>
          <div className="col 2 d-flex justify-content-around ">
            <a className="text-decoration-none" href="/login"> 
              <span className="m-2 txt-white">Se connecter</span>
              <i className="fas fa-user bg-warning p-3 rounded-circle"></i>
            </a>
            <a className="text-decoration-none" href="/panier">
              <span className="m-2 txt-white">Mon panier</span>
              <i className="fas fa-shopping-cart bg-warning p-3 rounded-circle"></i>
            </a>
          </div>
        </nav>

        <nav className="bg-grey navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/catalog">Espace Admin : </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/add">ajouter un produit <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
