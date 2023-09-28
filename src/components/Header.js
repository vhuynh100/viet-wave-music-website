import React from 'react';
import logo from '../images/VIET WAVE MUSIC_Logo_Transparent_Cropped.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <header>
            <div class = "logo-container">
                <img src={logo} className="header-logo" alt="logo" />
                <h1>Viet Wave Music</h1>
                <nav class = "navbar">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Upcoming Events</a></li>
                        <li><a href="#concert">15th Anniversary Concert</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    </div>
  );
}

export default Header;