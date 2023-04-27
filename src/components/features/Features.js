import React, { useEffect } from 'react'
import './Features.css'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import moversFeatures from '../../assets/phone-features.svg'
import Feature from './Feature'
import { FeatureList } from './data'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <section id='features'>
      <div className='container features'>
        <div className='title' data-aos='fade-up'>
          <BsFillBookmarkStarFill color='#f3558e' size={30} />
          <h2>Learn More About Our Team</h2>
          <p className='u-text-small'>
            {/* SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi labore, harum officiis error quia cupiditate? */}
            Professional, Experienced and Customer-Focused Movers
          </p>
        </div>
        <div className='features-content'>
          <div className='features-left' data-aos='fade-right'>
            <img src={moversFeatures} alt='movers' />
          </div>
          <div className='features-right' data-aos='fade-left'>
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                // heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
