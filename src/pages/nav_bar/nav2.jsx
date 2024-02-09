import React, { useState } from 'react';
import {Link,useLocation } from 'react-router-dom';

import './navBarStyles.css';
// import   logo3  from "../../Assets/logo3.svg";


export const Navbar = () => {
    const location = useLocation();
    const[active,setActive]=useState("navmenu");
    const [toggleIcon,setToggleIcon]=useState("navtoggle");
    const navtoggle=()=>{
        active==="navmenu"
        ? setActive("navmenu navactive")
        : setActive("navmenu");
        toggleIcon==='navtoggle'
        ? setToggleIcon("navtoggle toggleicon")
        : setToggleIcon("navtoggle");
    };
  return (

    <nav className='nav'>
             <div class="id">
             {/* <Link to="/"><img className="nav_logo" src={logo3} alt="logo"></img></Link> */}
             <span className='lingo'>Lingo</span><span className='pedia'>Pedia</span>
            </div>
            
            <ul className={active}>
                <div className='item'>
                <li className='navitem'>
                <Link to='/language' className={location.pathname === '/language' ? 'navlink on' : 'navlink'}>Language</Link>
                </li>
                </div>
                <div className='item'>
                <li className='navitem'>
                <Link to='/course' className={location.pathname === '/course' ? 'navlink on' : 'navlink'}>Courses</Link>
                </li>
                </div>
                <div className='item'>
                <li className='navitem'>
                <Link to='/test' className={location.pathname === '/test' ? 'navlink on' : 'navlink'}>Test</Link>
                </li>
                </div>
                <div className='item'>
                <li className='navitem'>
                <Link to='/upload' className={location.pathname === '/upload' ? 'navlink on' : 'navlink'}>Upload</Link>
                </li>
                </div>
            </ul>
            
            <div onClick={navtoggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>   
        </nav>
  )
}
