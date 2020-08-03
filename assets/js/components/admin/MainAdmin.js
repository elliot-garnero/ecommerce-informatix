import React, {useState} from 'react';
import LoginAdminAPI from "../../paths/api/Admin/LoginAdminAPI";
import MainAdminForm from "./MainAdminForm";

export default function MainAdmin() {

    const [ submited, setSubmit ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ sending, setSending ] = useState(false);
    const [ error, setError ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setSending(true);
        setSubmit(true);

        // Get form data
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const requestOptions = { username: username, password: password };

        LoginAdminAPI(requestOptions)
            .then(res => {
                if (res.data.success)
                    setSuccess(true);
                else
                    setError('Erreur de connexion/ Veullez vérifiée vos identifiants de connexion');
            })
            .catch(e => setError('Erreur de connexion/ Veullez vérifiée vos identifiants de connexion'));

        sessionStorage.setItem('auth', true)
        setSending(false);
    }

    return (
        <MainAdminForm submited={submited} error={error} success={success} sending={sending} handleSubmit={handleSubmit}/>
    )
}