import React, { useState } from 'react';
import { useInput, useSubmit } from "../../hooks";
import * as sessionActions from "../../store/session";
import { FormErrors, Input } from "../Forms";
import "./Login.css"



function LoginForm({ onSuccess }) {
    const [credential,  onCredentialChange] = useInput("");
    const [password, onPasswordChange] = useInput("")
    const [errors, onSubmit] = useSubmit({ 
        onSuccess,
        action: sessionActions.login({ credential, password })
    });

    return (
       <>

            <form onSubmit={onSubmit} className="login-form">

                <Input 
                    placeholder="Email address..."
                    value={credential}
                    onChange={onCredentialChange}
                    required
                    />

                <Input 
                    placeholder="Password..."
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                    required
                    />
                <button type="submit" className="login-button">Log In</button>
            </form>
        </>
    )
   };



  export default LoginForm;