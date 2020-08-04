import React, { Component } from 'react';
import logoSmall from '../../images/logoSmall.png';
import MainModal from './delivery/MainModal';

class NavbarUser extends Component {
  render() {
    return (
      <div className="container">
        <nav className="bg-blue  text-center navbar navbar-expand-lg">
          <div className="col 6">
            <a className="navbar-brand" href="/catalog">
              <img
                className="img-thumbnail w-50"
                src={logoSmall}
                alt="logoInformatix"
              />
            </a>
          </div>
          <div className="col 4">
            <input type="text" placeholder="Rechercher un produit..."></input>
            <i className="fab fa-sistrix bg-warning m-1 p-2 rounded"></i>
          </div>
          <div className="col 4 d-flex justify-content-around ">
            <a className="text-decoration-none" href="/api/user/logout">
              <span className="m-2 txt-white">Se donnecter</span>
              <i className="fas fa-user bg-warning p-3 rounded-circle"></i>
            </a>
            <a className="text-decoration-none" href="/user">
              <span className="m-2 txt-white">Mon Compte</span>
              <i className="fas fa-user bg-warning p-3 rounded-circle"></i>
            </a>
            <MainModal />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarUser;