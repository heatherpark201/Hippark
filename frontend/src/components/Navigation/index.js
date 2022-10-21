import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import './Navigation.css';


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation()

    let active = false;
    if ((location.pathname === "/") || (location.pathname !== "/spots")) {
        active = true;
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/signin" className="log-in-button-home" >Log In</NavLink>
                <NavLink to="/signup" className="sign-up-button">Sign Up</NavLink>
            </>
        );
    }
    
    return (
        <div className='nav-bar-container'>
            <header className={active? "main-header" : "other-header"}>
                <div className='nav-logo-wrapper'>
                    <NavLink exact to="/" className="green-logo">
                        <a href="" className="green-logo"><img className="green-logo" src={`https://hippark-photos.s3.amazonaws.com/hippark-logos/hippark-logo-green.png`} alt=""/></a>
                    </NavLink>
                </div>
                <div className='session-links-wrapper'>
                    <div className="session-links">{sessionLinks}</div>
                </div>
            </header>
        </div>
    )
}

export default Navigation;