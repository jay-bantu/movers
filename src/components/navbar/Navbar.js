import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri'
import { SiHackthebox } from 'react-icons/si'
import Button from '../UI/Button/Button'
import '../UI/Button/Button.css'

import './Navbar.css'
import Holborn from '../../assets/holborn-logo.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <nav className='navbar container'>
      <div className='logo'>
        {' '}
        <img src={Holborn} alt='Holborn-logo' className='holbornLogo' />
        <p className='logo-text'>
          <span>Holborn</span>
          <span>Movers</span>
        </p>
      </div>
      <menu>
        <ul
          className='nav-links'
          id={showMenu ? 'nav-links-mobile' : 'nav-links-mobile-hide'}
        >
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#features'>About us</a>
          </li>
          <li>
            <a href='#download'>Services</a>
          </li>
          <li>
            {/* <a href='#subscribe'>Contact Us</a> */}
            <Button
              text={'Contact Us'}
              btnClass={'btn-dark'}
              href={'#subscribe'}
            />
          </li>
          {/* <li>
            <a href='#' className='btn btn-dark'>
              Get Started
            </a>
          </li> */}
          {/* <li className='nav-btn'>
            <Button text={'Blog'} btnClass={'btn-dark'} href={'#faq'} />
          </li> */}
        </ul>
      </menu>
      <div className='menu-icons' onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color='#fff' size={30} />
        ) : (
          <AiOutlineBars color='#fff' size={27} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
