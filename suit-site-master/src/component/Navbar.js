import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
    return (
     
        <nav>
            <a href='#' className="logo">
                <img src={logo} alt="logo" />
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='#' className='active'>New</a></li>
                <li><a href="AboutPage.js">Suits</a></li>
                <li><a href='#'>Shirt</a></li>
                <li><a href='#'>Pants</a></li>
                <li><a href='#'>Blazers</a></li> 
                <li><a href='#'>Casual</a></li>
                <li><a href='#'>Casual</a></li>
            </ul>
            
           
            <a href='#' className='property'>About Us</a>
        </nav>
       
    )
}

export default Navbar;
