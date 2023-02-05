import React, { useEffect } from 'react'
import './Header.css'
import Button from '../UI/Button/Button'
import '../UI/Button/Button.css'
import phoneHeader from '../../assets/phone-header-bg.svg'
import { BsMouse } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <section id='header'>
      <div className='container header'>
        <div className='header-left' data-aos='fade-right'>
          <h1>
            <span className='headerSpan'>
              Experience a Stress-Free
              <br /> Move with Inc Company
            </span>
            <div className='typewriter'>
              <Typewriter
                options={{
                  strings: ['Professional', 'Reliable', 'and', 'Affordable'],
                  autoStart: true,
                  loop: true
                }}
              />
              &nbsp;Moving Services
            </div>
          </h1>
          <p className='u-text-small'>
            Inc Company is your professional and reliable moving partner. We
            offer a range of services to make your move easy and stress-free.
          </p>
          <div className='header-cta'>
            <Button text={'Get Started'} btnClass={'btn-dark'} href={'#'} />
            <Button
              text={'Get My Estimate'}
              btnClass={'btn-light'}
              href={'#'}
            />
          </div>
        </div>
        <div className='header-right' data-aos='fade-left'>
          <img src={phoneHeader} alt='phone' />
        </div>
      </div>
      <div className='floating-icon'>
        <a href='#features'>
          <BsMouse color='#fff' size={25} className='mouse' />
        </a>
      </div>
    </section>
  )
}

export default Header
