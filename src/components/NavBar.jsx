import React from 'react'
import './Style.css'
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
  <>
 <header>
<div className="logo1">Easy and healthy recipes</div>
<div className="logo"><img src={logo} alt="" /></div>
<div className="logo2">For the food your crave</div>
</header>
<nav>
  
  <ul>
    <li>Home</li>
    <li>About</li>
    <li className='red'>Recipes</li>
    <li>Workouts</li>
    <li>Videos</li>
    <li>Shops</li>
    <li>Blog</li>
    <li>Contact</li>
    <li>Membership</li>

  </ul>
  <div className="icon"><FontAwesomeIcon icon={faBars} /></div>
</nav>
</>  
  )
}

export default NavBar
