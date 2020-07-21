import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import MainCatalog from '../components/products/MainCatalog';
import MainAdd from '../components/products/MainAdd';
import MainCart from '../components/delivery/MainCart';
import MainOrder from '../components/delivery/MainOrder';

import Footer from '../components/Footer';

class Paths extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/catalog" />
          <Route path="/catalog" component={MainCatalog} />
          <Route path="/add" component={MainAdd} />
          <Route path="/cart" component={MainCart} />
          <Route path="/order" component={MainOrder} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Paths;
