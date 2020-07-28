import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import MainCatalog from '../components/products/MainCatalog';
import MainAdd from '../components/products/MainAdd';
import MainProfile from '../components/users/MainProfile';
import Footer from '../components/Footer';
import ModifProduct from '../components/products/MainModifsProduct';

class Paths extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/catalog" />
          <Route exact path="/catalog" component={MainCatalog} />
          <Route exact path="/add" component={MainAdd} />
          <Route path="/modifProduct:id" component={ModifProduct} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Paths;
