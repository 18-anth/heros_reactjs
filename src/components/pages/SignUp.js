import React from 'react';
import './SignUp.css';
import AuthForm from '../AuthForm';

function SignUp() {
    return (
        <>
            <div className="container_galery">
                <AuthForm onAuth={(user) => console.log('Autenticado', user)} />
            </div>
        </>
    );
}

export default SignUp;
