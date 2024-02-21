import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <>  
            <h1>Sign Up</h1>
            <div className="container_galery">
                <div className="profile">

                </div>
                <input
                    className="input_name"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="input_name"
                    placeholder="Cellphone"
                    name="cellphone"
                />
                <input
                    className="input_name"
                    placeholder="Email Address"
                    name="email address"
                />
                <input
                    className="input_name"
                    placeholder="Password"
                    name="password"
                />
                <button
                    className="button_signup"
                >
                    Sign Up
                </button>
                <h4>Have you a count? <b> Sign In</b></h4>
            </div>
        </>
    )
}

export default SignUp;
