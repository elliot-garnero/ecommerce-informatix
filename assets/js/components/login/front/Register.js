import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import login from '../../../paths/api/User/login';
import register from '../../../paths/api/User/register';


export default function RegisterForm(props) {

    return (  
        <div>
            <div className="container login-container">
                <div className="login-form-1">
                    {
                        props.submited && props.success ?
                            <Redirect to={'/'}/>
                            :
                            <h5 className={"text-center text-danger"}>{props.error}</h5>
                    }

                    <form  className="container" onSubmit={props.handleSubmit}>
                        <h3 className="card-header info-color white-text text-center py-4 txt-color">
                            <strong>Inscription</strong>
                        </h3>
                        <div className="card">
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Nom de famille</label>
                                <input type="text" required className="form-control" id={"lastname"} placeholder="Nom de famille"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Prénom</label>
                                <input type="text" required className="form-control" id={"firstname"} placeholder="Prénom"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Pays</label>
                                <input type="text" required className="form-control" id={"countries"} placeholder="Pays"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Ville</label>
                                <input type="text" required className="form-control" id={"city"} placeholder="Ville"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Adresse</label>
                                <input type="text" required className="form-control" id={"address"} placeholder="Adresse"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Code postal</label>
                                <input type="number" required className="form-control" id={"cp"} placeholder="Code postal"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Nom d'utilisateur</label>
                                <input type="text" required className="form-control" id={"username"} placeholder="Nom d'utilisateur"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" required className="form-control" id={"email"} placeholder="Email"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Mot de passe</label>
                                <input type="password" required className="form-control" id={"password"} placeholder="Mot de passe"/>
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <button type={"submit"} className={"btn btn-primary"}>Envoyer</button>
                            </div>
                            <div className="form-group text-center">
                                <Link to={'/login'} className="no-registered">Connectez vous!</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}