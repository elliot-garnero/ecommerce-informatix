import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import MainCatalog from '../components/products/MainCatalog';
import MainAdd from '../components/products/MainAdd';

class Paths extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/catalog" />
          <Route path="/catalog" component={MainCatalog} />
          <Route path="/add" component={MainAdd} />
        </Switch>
      </div>
    );
  }
}

export default Paths;
