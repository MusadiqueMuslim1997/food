// src/components/NavBar.js
import React from 'react';
import './Style.css';
import logo from '../images/logo.png'; // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <>
      <header>
        <div className="logo1">Easy and Healthy Recipes</div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="logo2">For the food you crave</div>
      </header>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <div className="icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </label>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li className="red">Recipes</li>
          <li>Workouts</li>
          <li>Videos</li>
          <li>Shops</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Membership</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
