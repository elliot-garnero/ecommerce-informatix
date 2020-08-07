import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

export default class MainAdminForm extends Component {

 constructor(props){
        super(props);
        this.state = {
          admin:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const data = this.state;
        axios.post('http://localhost:8000/api/admin/login', data)
        .then((res) => {
            this.setState ({
                admin : res.data
            });
            
        });
    }


    onTextChange(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
      };
    
    render(){
        const admin= this.state.admin;
    return (
        <div>
            <div className="container login-container">
                <div className="login-form-1">
                    {admin}

                    <form className="container" onSubmit={this.handleSubmit}>
                            <div className="card">
                                <h3 className="card-header info-color white-text text-center py-4 txt-color">
                                    <strong>Connexion administrateur</strong>
                                </h3>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Nom d'utilisateur admin</label>
                                <input type="text" className="form-control" id={"username"} name="username" placeholder="Nom d'utilisateur" onChange={(e) => this.onTextChange(e)} />
                            </div>
                            <div className="card-header info-color white-text text-center py-4">
                                <label htmlFor="exampleInputEmail1">Mot de passe admin</label>
                                <input type="password" className="form-control" id={"password"} name="password" placeholder="Mot de passe" onChange={(e) => this.onTextChange(e)} />
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <button type={"submit"} className={"btn btn-primary"}>Connexion</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
}