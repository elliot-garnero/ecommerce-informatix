import React from 'react';
import {Link, Redirect} from "react-router-dom";

export default function LoginForm(props) {
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

                    <form className="container" onSubmit={props.handleSubmit}>
                        <div className="card">
                            <h3 className="card-header info-color white-text text-center py-4 txt-color">
                                <strong>Connexion</strong>
                            </h3>
                            <div className="card-header info-color white-text text-center py-4">
                                <input type="text" className="form-control" id={"username"} placeholder="Nom d'utilisateur"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <input type="password" className="form-control" id={"password"} placeholder="Mot de passe"/>
                            </div>
                            <div className="form-group text-center">
                                <button type={"submit"} className={"btn btn-primary"}>Connexion</button>
                            </div>
                            <div className="form-group text-center">
                                <Link to={'/register'} className="no-registered">Pas encore inscrit ? Inscription !</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}