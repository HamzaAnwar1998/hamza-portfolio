import React from 'react'
import hero5 from '../images/hero-5.png'

export const Hero = () => {
  return (
    <div className='hero-box'>
        <div className='content'>
            <h3>Hello, I'm <span className='name'>Hamza Anwar</span></h3>
            <h3>I am front-end web developer</h3>
            <button>View my Resume</button>
        </div>
        <div className='img'>
            <img src={hero5} alt='hero-5'/>
        </div>
    </div>
  )
}
