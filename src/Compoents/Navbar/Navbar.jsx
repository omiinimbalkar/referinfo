import React, { useEffect, useState } from 'react'
import './Navbar.css'

import logo from '../../assets/Logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Navbar =() => {

  const [sticky,setsticky] = useState(false);

  useEffect (()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50? setsticky(true) : setsticky(false);
    })
  },[]);
  
  const[mobileMenu , setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }
  return (
   <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <img src={logo}alt="xx" className='R'/>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration ={500}>Home</Link> </li>
        <li><Link to='info' smooth={true} offset={-260} duration ={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-160} duration ={500}>About us</Link></li>
        {/* <li><Link to='chimiwale' smooth={true} offset={-260} duration ={500}>Campus</Link></li> */}
        <li><Link to='contact' smooth={true} offset={-260} duration ={500} className='btn'>Contact us </Link></li>
    </ul>
    <img src="https://th.bing.com/th/id/OIP.IYDO-ppKemCdTmuXDFlwOAHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="menuicon" className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar