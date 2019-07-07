import React, { Component } from "react";
import {Link, NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
    <NavLink  to='/home'>Home</NavLink>  
    <NavLink to='/about'>About</NavLink>  
     <NavLink to='/contact'> Contact</NavLink>
      <NavLink to='/Faq' >FAQ</NavLink>

      <Link to='/logout' className="logout" >  Logout</Link>
    </div>
  );
};
export default Header;
