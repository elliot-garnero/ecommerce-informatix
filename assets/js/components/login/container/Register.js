import React, {useState} from 'react';
import {Link} from "react-router-dom";
import RegisterForm from "../front/Register";
import login from '../../../paths/api/User/login';
import register from '../../../paths/api/User/register';
import LoginForm from "../front/Login";

export default function Register() {

    const [ submited, setSubmit ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmit(true);

        // Get form data
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const lastname = document.getElementById("lastname").value;
        const firstname = document.getElementById("firstname").value;
        const countries = document.getElementById("countries").value;
        const city = document.getElementById("city").value;
        const address = document.getElementById("address").value;
        const cp = document.getElementById("cp").value;

        const requestOptions = { username: username, password: password, email: email, lastname: lastname, firstname: firstname, countries: countries, city: city, address: address, cp: cp };

        register(requestOptions)
            .then(res => {
                if (res.data.success)
                    setSuccess(true);
                else
                    setError('Certain informations sont incorrectes. Réessayez');
            })
            .catch(e => setError('Certain informations sont incorrectes. Réessayez'));

        sessionStorage.setItem('auth', true)
    }


    return (
        <RegisterForm submited={submited} error={error} success={success} handleSubmit={handleSubmit}/>
    )
}