import React from "react";
import { useSelector } from "react-redux";
import { useInput, useSubmit } from "../../hooks";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { FormErrors, Input } from "../Forms";
import "./Signup.css"


function SignupForm({ onSuccess }) {
    const sessionUser = useSelector(state => state.session.user);
    const [email, onEmailChange] = useInput("");
    const [firstName, onFirstNameChange] = useInput("");
    const [lastName, onLastNameChange] = useInput("");
    const [dateOfBirth, onDateOfBirthChange] =  useInput("");
    const [password, onPasswordChange] = useInput("");
    const [confirmPassword, onConfirmPasswordChange] = useInput("");
    const [errors, onSubmit] = useSubmit({ 
      onSuccess,
      action: sessionActions.signup({ email, firstName, lastName, dateOfBirth, password }),
      validate: () => {
        if (password !== confirmPassword) {
          return ['Confirm Password field must be the same as the Password field'];
        }
      }
  });


  if (sessionUser) return <Redirect to="/" />

    return (
        <form onSubmit={onSubmit} className="sign-up-form">
            <FormErrors errors={errors}/>

          
          <div className="form-content-name">
            <Input 
              id="name"
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={onFirstNameChange}
              required
              />

            <Input 
              id="name"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={onLastNameChange}
              required
              />
          </div>

          <div className="form-content">
            <Input
              id="info"
              placeholder="Email"
              type="text"
              value={email}
              onChange={onEmailChange}
              required
              />

            <Input             
              id="info"
              placeholder="DOB"
              type="text"
              value={dateOfBirth}
              onChange={onDateOfBirthChange}
              required
              />

            <Input             
              id="info"
              placeholder="Create a Password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              required
              />

            <Input              
              id="info"
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              required
              />
          </div>

          <button type="submit" className="sign-up-form-button">Join Hippark</button>
        </form>
    );
};

export default SignupForm;    