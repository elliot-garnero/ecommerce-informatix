import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import MainCatalog from '../components/products/MainCatalog';
import MainDetailsProduct from '../components/products/MainDetailsProduct';
import MainAdd from '../components/products/MainAdd';
import Footer from '../components/Footer';

class Paths extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/catalog" />
          <Route exact path="/catalog" component={MainCatalog} />
          <Route path="/add" component={MainAdd} />
          <Route path="/detailsProduct:id" component={MainDetailsProduct} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Paths;
