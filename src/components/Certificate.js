import React from 'react'
import certificate from '../images/certficate.png'

export const Certificate = () => {
  return (
    <div className='section-box'>
        <h3 className='section-heading'>Certificate</h3>
        <h2 className='tagline'>
          I am Microverse Certified React Redux 
          <span className='color'> Developer</span>
        </h2>
        <div className='certificate'>
            <img src={certificate} alt="certificate"/>
        </div>
    </div>
  )
}
