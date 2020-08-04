import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import MainCatalog from '../components/products/MainCatalog';
import MainDetailsProduct from '../components/products/MainDetailsProduct';
import MainAdd from '../components/products/MainAdd';
import MainOrder from '../components/delivery/MainOrder';
import MainTracking from '../components/delivery/MainTracking';
import MainDeliveryList from '../components/delivery/MainDeliveryList';
import MainProfile from '../components/users/MainProfile';
import Footer from '../components/Footer';
import Login from '../components/login/container/Login';
import Register from '../components/login/container/Register';
import ModifProduct from '../components/products/MainModifsProduct';
import MainAdmin from '../components/admin/MainAdmin';
import MainListUsers from "../components/admin/MainListUsers";
import MainBundles from '../components/admin/MainBundles';
import ModifsBundle from '../components/admin/ModifsBundle';
import AddBundle from '../components/admin/AddBundle';
import MainCatalogBundles from '../components/products/MainCatalogBundle';




class Paths extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/catalog" />
          <Route path="/listUsers" component={MainListUsers} />
          <Route exact path="/catalog" component={MainCatalog} />
          <Route path="/detailsProduct:id" component={MainDetailsProduct} />
          <Route exact path="/add" component={MainAdd} />
          <Route exact path="/user" component={MainProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/modifProduct:id" component={ModifProduct} />
          <Route path="/order" component={MainOrder} />
          <Route path="/tracking" component={MainTracking} />
          <Route exact path="/deliveryList" component={MainDeliveryList} />
          <Route exact path="/admin" component={MainAdmin} />
          <Route path="/bundles" component={MainBundles} />
          <Route path="/modifsBundle:id" component={ModifsBundle} />
          <Route path="/addBundle" component={AddBundle} />
          <Route path="/catalogBundles" component={MainCatalogBundles} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Paths;
