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
                                <label htmlFor="exampleInputEmail1">Nom d'utilisateur</label>
                                <input type="text" required className="form-control" id={"username"} placeholder="Nom d'utilisateur"/>
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Mot de passe</label>
                                <input type="password" required className="form-control" id={"password"} placeholder="Mot de passe"/>
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <button type={"submit"} className={"btn btn-primary"}>Connexion</button>
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <Link to={'/register'} className="no-registered">Inscription !</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}