import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Modal } from "../../context/Modal";
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    if (showModal) return;
    setShowModal(true);
  };
  
  useEffect(() => {
    if (!showModal) return;

    const closeModal = () => {
      setShowModal(false);
    };

    document.addEventListener('click', closeModal);
  
    return () => document.removeEventListener("click", closeModal);
  }, [showModal]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button 
        onMouseEnter={openModal}
        onMouseOut={() => setShowModal(false)}>
          <div className="profile-image-container">
            <img id="pro-pic" src={`https://hippark-photos.s3.amazonaws.com/hippark-logos/user-profile-logo.png`} alt=""></img>
          </div>
      </button>
      {showModal ? (
        <Modal className="profile-menu-modal">
          <div className="profile-menu-container">
            <button onClick={logout}>logout</button>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default ProfileButton;

