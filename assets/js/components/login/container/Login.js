import React, { useState } from 'react';
import login from '../../../paths/api/User/login';
import LoginForm from '../front/Login';

export default function Login() {
  const [submited, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);
    setSubmit(true);

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(password);

    const requestOptions = { username: username, password: password };

    login(requestOptions)
      .then((res) => {
        if (res.data.success) setSuccess(true);
        else
          setError(
            'Certain informations sont incorrectes. Réessayez'
          );
      })
      .catch((e) =>
        setError(
          'Certain informations sont incorrectes. Réessayez'
        )
      );

    sessionStorage.setItem('auth', true);
    setSending(false);
  };

  return (
    <LoginForm
      submited={submited}
      error={error}
      success={success}
      sending={sending}
      handleSubmit={handleSubmit}
    />
  );
}
