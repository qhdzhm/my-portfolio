import React, { useState } from 'react'
import './NaviBar.css'
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
const NaviBar = () => {
  const [toggler,setToggler] = useState(false)

  const showCollapse = ()=>{
    setToggler(true)
  }

  return (
    <div className='navi'>
      <div className='container'>
        <div className='navi-content'>
          <div className='brand-and-toggler flex flex-sb'>
            <Link to="/" className='navbar-brand text-uppercase fw-7 text-white ls-2'>Tom</Link>
            <button type='button' className='navi-open-btn text-white' onClick={showCollapse}><FaBars size={30} /></button>
            <div className={toggler? 'navi-collapse show-navi-collapse': 'navi-collapse'} >
              <button type='button' className='navi-close-btn text-white' onClick={()=>{setToggler(!toggler)}}><FaTimes size={30} /></button>
              <ul className='navi-nav'>
                <li className='nav-item'>
                  <Link to="/" smooth={true} className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>HOME</Link>
                </li>
                <li className='nav-item'>
                  <Link to="service" smooth={true} className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>SERVICES</Link>
                </li>
                <li className='nav-item'>
                  <Link to="works" smooth={true} className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>WORKS</Link>
                </li>
                <li className='nav-item'>
                  <Link to="about" smooth={true} className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>ABOUT ME</Link>
                </li>
                <li className='nav-item'>
                  <Link to="contact" smooth={true} className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NaviBar