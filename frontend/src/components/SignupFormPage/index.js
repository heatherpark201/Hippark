import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import { SignupForm } from "../SessionForms";
import { Modal } from "../../context/Modal";
import { NavLink } from 'react-router-dom';
import './SignupFormPage.css';
import tempLogo from '../../assets/tempLogo.png'
import bg from '../../assets/bg.jpg'
import signup from '../../assets/signup.jpeg'
import signup2 from '../../assets/signup2.jpeg'
import signup3 from '../../assets/signup3.jpeg'
import { Gallery } from "react-grid-gallery";




function SignupFormPage( { onClose, onSuccess }) {
  const [showModal, setShowModal] = useState(false);
  
 
 
 React.useEffect(() => {
   setTimeout(()=> setShowModal(true), 1000);
  }, []);
  
  return  (
      
      <div className='bg-box3' style={{
        backgroundImage: `url(${signup2}), url(${signup3})`,
        backgroundSize: 'contain',
        height: '100vh',
        width: '100vw'
      }}>

    {showModal ? (
      <Modal onClose={onClose}>
        <NavLink to="/signin" className="log-in-button">Log In</NavLink>
          <div className="modal">
              <NavLink exact to="/" className="logo">
                <a href="" className="logo"><img className="logo" src={tempLogo} alt=""/></a>
              </NavLink>
              <h3>Search, discover and book
                <br></br>
                Everywhere you want to camp.</h3>
                <SignupForm onSuccess={onSuccess}/>
          </div>
      </Modal>
    ) : null}

    
  </div>
  

  );
}


export default SignupFormPage;