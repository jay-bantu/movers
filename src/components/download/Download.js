import React, { useEffect } from 'react'
import './Download.css'
import {
  FaApple,
  FaWindows,
  FaHome,
  FaRegBuilding,
  FaTruckMoving,
  FaBoxOpen
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <section id='download'>
      <div className='container download' data-aos='fade-up'>
        <h2>One-Stop Moving Solutions</h2>
        <p className='u-text-small'>
          Discover the Wide Range of Moving Services We Offer at Inc Company.
        </p>
        <IconContext.Provider value={{ size: '45' }}>
          <div className='download-icons'>
            {/* <div className='download-icon'>
              <FaHome /> <p>Residential Moving</p>
            </div>
            <div className='download-icon'>
              <FaRegBuilding /> <p>Commercial Moving</p>
            </div>
            <div className='download-icon'>
              <FaTruckMoving /> <p>Long-Distance Moving</p>
            </div>
            <div className='download-icon'>
              <FaBoxOpen /> <p>Packing & Unpacking</p>
            </div> */}
            <div className='card'>
              <div className='lines'></div>
              <div className='imgBx'>
                <FaHome className='Img' />
              </div>
              <div className='content'>
                <div className='details'>
                  <h2>Residential Moving</h2>
                  <p>
                    Lorem ipsum dolor,Lorem ipsum dolor,Lorem ipsum dolor,Lorem
                    ipsum dolor,Lorem ipsum dolor,
                  </p>
                  <a href='#faq'>Read More</a>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='lines'></div>
              <div className='imgBx'>
                <FaRegBuilding className='Img' />
              </div>
              <div className='content'>
                <div className='details'>
                  <h2>Commercial Moving</h2>
                  <p>
                    Lorem ipsum dolor,Lorem ipsum dolor,Lorem ipsum dolor,Lorem
                    ipsum dolor,Lorem ipsum dolor,
                  </p>
                  <a href='#faq'>Read More</a>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='lines'></div>
              <div className='imgBx'>
                <FaTruckMoving className='Img' />
              </div>
              <div className='content'>
                <div className='details'>
                  <h2>Long-Distance Moving</h2>
                  <p>
                    Lorem ipsum dolor,Lorem ipsum dolor,Lorem ipsum dolor,Lorem
                    ipsum dolor,Lorem ipsum dolor,
                  </p>
                  <a href='#faq'>Read More</a>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='lines'></div>
              <div className='imgBx'>
                <FaBoxOpen className='Img' />
              </div>
              <div className='content'>
                <div className='details'>
                  <h2>Packing & Unpacking</h2>
                  <p>
                    Lorem ipsum dolor,Lorem ipsum dolor,Lorem ipsum dolor,Lorem
                    ipsum dolor,Lorem ipsum dolor,
                  </p>
                  <a href='#faq'>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  )
}

export default Download
