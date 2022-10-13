import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function DemoUserButton() {
  const dispatch = useDispatch();


  const demoUser = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({
        credential: 'demo@user.io',
        password: 'password'
    }));
  };


  return (
    <button onClick={demoUser} className="demo-user-button">Demo User</button>
  )
}

export default DemoUserButton;

     