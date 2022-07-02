import React from 'react'
import hero5 from '../images/hero-5.png'

export const Hero = ({setResumeModal}) => {

  const handleResumeModal=()=>{
    setResumeModal(true);
  }

  return (
    <div className='hero-box'>
        <div className='content'>
            <h3 className='hero-heading'>Hello, I'm <span className='name'>Hamza Anwar</span></h3>
            <h3 className='hero-heading'>I am front-end web developer</h3>
            <button className='view-resume-btn'
            onClick={handleResumeModal}>View my Resume</button>
        </div>
        <div className='hero-img'>
            <img src={hero5} alt='hero-5'/>
        </div>
    </div>
  )
}
