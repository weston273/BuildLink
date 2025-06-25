import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom';
import Logo from './../assets/logo.png';
import Avatar from './../assets/avatar.png'
import searchIcon from './../assets/searchBar.png'

export default function NavBar() {
    return (
        <nav className ="navBar">
            <div className="logo">
                <img src={Logo} alt="BuildLine Logo"  />
            </div>

            <div className="navBarLinksContainer">
                < a href="#" className="navBarLinks active" >Home</a>
                < a href="#" className="navBarLinks" >Handyman</a>
                < a href="#" className="navBarLinks" >Companies</a>
                < a href="#" className="navBarLinks" >About Us</a>
            </div>

            <div className="searchContainer" > 
                <img src={searchIcon} alt="search Icon" className="searchIcon" />
                <input type="text" placeholder="search" />
            </div>

            <div className="avatarContainer">
                <img src={Avatar} alt="avatar picture" />
            </div>

        </nav>
    )
}

