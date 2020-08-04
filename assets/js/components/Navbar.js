import React, { Component } from 'react';
import logoSmall from '../../images/logoSmall.png';
import MainModal from './delivery/MainModal';
import axios from 'axios';

class Navbar extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      admin: "",
      user: "",
    }
}

  componentDidMount() {
    this.getAdmin();
    this.getUser();
  }

  getAdmin() {
    axios.get(`http://127.0.0.1:8000/api/admin/authenticated`)
    .then((res) => {
      this.setState({ admin: res.data.is_admin});
    });
  }

  getUser() {
    axios.get(`http://127.0.0.1:8000/api/user/authenticated`)
    .then((res) => {
      this.setState({ user: res.data.success});
    });
  }

  render() {
    const admin = this.state.admin;
    const user = this.state.user;
    if(user == true)
    {
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
                <span className="m-2 txt-white">Se déconnecter</span>
                <i className="fa fa-sign-out bg-warning p-3 rounded-circle"></i>
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
    if(admin == true)
    {
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
              <a className="text-decoration-none" href="/api/admin/logout">
                <span className="m-2 txt-white">Se déconnecter</span>
                <i className="fa fa-sign-out bg-warning p-3 rounded-circle"></i>
              </a>
              {/* <a className="text-decoration-none" href="/cart">
                <span className="m-2 txt-white">Mon panier</span>
                <i className="fas fa-shopping-cart bg-warning p-3 rounded-circle"></i>
              </a> */}
              <MainModal />
            </div>
          </nav>
  
          <nav className="bg-grey navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/catalog">
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
                  <a className="nav-link" href="/add">Ajouter un produit <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/bundles">Gestionnaire de lots<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/listUsers">Liste des clients<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/deliveryList">Liste des commandes <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
    else
    {
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
              <a className="text-decoration-none" href="/login">
                <span className="m-2 txt-white">Se connecter</span>
                <i className="fas fa-user bg-warning p-3 rounded-circle"></i>
              </a>
              {/* <a className="text-decoration-none" href="/cart">
                <span className="m-2 txt-white">Mon panier</span>
                <i className="fas fa-shopping-cart bg-warning p-3 rounded-circle"></i>
              </a> */}
              <MainModal />
            </div>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
