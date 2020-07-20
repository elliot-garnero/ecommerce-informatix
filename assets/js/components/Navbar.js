import React, { Component } from 'react';
import logoSmall from '../../images/logoSmall.png';


class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="text-center background_blue navbar navbar-expand-lg">
          <div className="col 6">
            <a className="navbar-brand" href="/catalog">
              <img className="img-thumbnail w-50" src={logoSmall} alt="logoInformatix"/>
            </a>
          </div>
          <div className="col 4">
            <input type="text" placeholder="Rechercher"></input>
          </div>
          <div className="col 2 d-flex justify-content-around">
            <a className="text-decoration-none" href="/user"> 
              <i className="fas fa-user bg-warning p-3 rounded-circle"></i>
            </a>
            <a className="text-decoration-none" href="/panier">
              <i className="fas fa-shopping-cart bg-warning p-3 rounded-circle"></i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
