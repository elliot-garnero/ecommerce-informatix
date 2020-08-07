import React, { Component } from 'react';
import logoSmall from '../../images/logoSmall.png';
import MainModal from './delivery/MainModal';

//lol

class Navbar extends Component {
  render() {
    return (
      <div className="container-md">
        <nav className="bg-blue  text-center navbar navbar-expand-lg">
          <div className="col 6">
            <a className="navbar-brand" href="/catalog">
              <img
                className="img-thumbnail img-fluid logo-img"
                src={logoSmall}
                alt="logoInformatix"
                min-width="200"
                max-width="200"
              />
            </a>
          </div>
          <div className="col 4"></div>
          <div className="col 4 d-flex justify-content-around ">
            <a className="text-decoration-none" href="/login">
              <span className="m-2 txt-white">Se connecter</span>
              <i className="fas fa-user bg-warning p-3 rounded-circle"></i>
            </a>
            <MainModal />
          </div>
        </nav>
        
      </div>
    );
  }
}

export default Navbar;
