import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Navbar from '../components/Navbar';
import MainCatalog from '../components/products/MainCatalog';
import MainAdd from '../components/products/MainAdd';
import Footer from '../components/Footer';
import Login from "../components/login/container/Login";
import Register from "../components/login/container/Register";
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
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route path="/modifProduct:id" component={ModifProduct} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Paths;
