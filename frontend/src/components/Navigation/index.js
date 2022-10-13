import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import tempLogo from '../../assets/tempLogo.png'
import './Navigation.css';


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation()

    let active = false;
    if (location.pathname === "/") {
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
        <header className={active ? "main-header" : "other-header"}>
            <NavLink exact to="/" className="nav-logo">
                <a href="" className="logo"><img className="logo" src={tempLogo} alt=""/></a>
            </NavLink>
            <div className="session-links">{sessionLinks}</div>
        </header>
    )
}

export default Navigation;