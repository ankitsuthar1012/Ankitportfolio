import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link , NavLink } from 'react-router-dom'
import { useState } from 'react'
const NavigationBar = () => {
  const [click, setClick]= useState(false);

  const handleClick =()=>setClick(!click);
  const closeMobileMenu =()=>setClick(false);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container container'>
         <Link  to={"/"} className='navbar-logo' onClick={closeMobileMenu}>
          Ankit
         </Link> 
         <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}
         </div>
         <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
              <NavLink to ="/" className={( {isActive})=>"nav-links"+ (isActive ? " activated": " ")} onClick={closeMobileMenu}>
               Home
              </NavLink>
          </li>
          <li className='nav-item'>
              <NavLink to ="/about" className={( {isActive})=>"nav-links"+ (isActive ? " activated": " ")} onClick={closeMobileMenu}>
               About
              </NavLink>
          </li>
         
         
          <li className='nav-item'>
              <NavLink to ="/projects" className={( {isActive})=>"nav-links"+ (isActive ? " activated": " ")} onClick={closeMobileMenu}>
               Projects
              </NavLink>
          </li>
          <li className='nav-item'>
              <NavLink to ="/contactMe" className={( {isActive})=>"nav-links"+ (isActive ? " activated": " ")} onClick={closeMobileMenu}>
               Contact
              </NavLink>
          </li>
          
        
         </ul>
         
         
        </div>
      </nav>

    </>
  )
}

export default NavigationBar
