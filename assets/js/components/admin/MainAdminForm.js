import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

export default class MainAdminForm extends Component {
    
    render(){
        return (
            <div>
                <div className="container login-container">
                    <div className="login-form-1">
                        <form className="container" method="POST" action="/api/admin/login">
                                <div className="card">
                                    <h3 className="card-header info-color white-text text-center py-4 txt-color">
                                        <strong>Connexion administrateur</strong>
                                    </h3>
                                <div className="card-header info-color white-text text-center py-4">
                                    <label htmlFor="exampleInputEmail1">Nom d'utilisateur admin</label>
                                    <input type="text" className="form-control" name="username" placeholder="Nom d'utilisateur"/>
                                </div>
                                <div className="card-header info-color white-text text-center py-4">
                                    <label htmlFor="exampleInputEmail1">Mot de passe admin</label>
                                    <input type="password" className="form-control" name="password" placeholder="Mot de passe" />
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary">Connexion</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}