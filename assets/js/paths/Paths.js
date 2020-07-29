import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import MainCatalog from '../components/products/MainCatalog';
import MainAdd from '../components/products/MainAdd';
import MainOrder from '../components/delivery/MainOrder';
import MainTracking from '../components/delivery/MainTracking';

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
          <Route path="/order" component={MainOrder} />
          <Route path="/tracking" component={MainTracking} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Paths;
