import React from 'react'
import './Footer.css'
import { SiHackthebox } from 'react-icons/si'
import logo from '../../assets/logo.png'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container footer'>
        <div className='footer-box'>
          <h4>Useful Links</h4>
          <div className='footer-links'>
            <a href='#'>&bull; Support</a>
            <a href='#'>&bull; About</a>
            <a href='#'>&bull; Learn</a>
            <a href='#'>&bull; Hosting</a>
            <a href='#'>&bull; Messenger</a>
          </div>
        </div>
        <div className='footer-box'>
          <h4>Support</h4>
          <div className='footer-links'>
            <a href='#'>&bull; Support</a>
            <a href='#'>&bull; About</a>
            <a href='#'>&bull; Learn</a>
            <a href='#'>&bull; Hosting</a>
            <a href='#'>&bull; Messenger</a>
          </div>
        </div>
        <div className='footer-box'>
          <h4>Contact Us</h4>
          <div className='footer-contact u-text-small'>
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Nairobi County.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +2540 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@incmovers.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.incmovers.com
            </p>
          </div>
        </div>
        <div className='footer-box'>
          {/* <img src={logo} alt='logo' /> */}
          <div className='logo'>
            <SiHackthebox color='#fff' size={33} />
            <p className='logo-text'>
              Inc<span>Movers</span>
            </p>
          </div>
          <p className='u-text-small'>&copy; Copyright 2023. incmovers.com</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
