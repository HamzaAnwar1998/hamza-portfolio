import React from 'react'
import { Icon } from 'react-icons-kit'
import {ic_speed} from 'react-icons-kit/md/ic_speed'
import {ic_devices_other} from 'react-icons-kit/md/ic_devices_other'
import {ic_emoji_objects_outline} from 'react-icons-kit/md/ic_emoji_objects_outline'

export const About = () => {
  return (
    <div className='section-box'>
        <h3 className='section-heading'>About Me</h3>
        <h2 className='tagline'>
            I love to Code 
            <span className='ui-ux'> UI/UX</span>
        </h2>
        <p className='info'>
            I am a React Redux Developer. I have serious passion for
            UI effects, animations and creating dynamic user experiences.
            I can help you build a product, feature or website Look through
            some of my work! If you like what you see and have a project you
            need coded then feel free to contact me.
        </p>
        <div className='contact-btns-group'>
            <button className='upwork-btn'>Upwork</button>
            <button className='fiverr-btn'>Fiverr</button>
        </div>
        <div className='core-programming-section'>
            <h2 className='core-programming-heading'>Core Programming Principles</h2>
            <div className='principles-cards-box'>
                <div className='card'>
                    <span className='card-icon'>
                        <Icon icon={ic_speed} size={88}/>
                    </span>
                    <h5 className='card-heading'>Fast</h5>
                    <p className='card-text'>
                        Fast load times and lag free interaction, my highest priority.
                    </p>
                </div>
                <div className='card black'>
                    <span className='card-icon'>
                        <Icon icon={ic_devices_other} size={88}/>
                    </span>
                    <h5 className='card-heading'>Responsive</h5>
                    <p className='card-text'>
                        My layouts will work on any device, big or small.
                    </p>
                </div>
                <div className='card'>
                    <span className='card-icon'>
                        <Icon icon={ic_emoji_objects_outline} size={88}/>
                    </span>
                    <h5 className='card-heading'>Dynamic</h5>
                    <p className='card-text'>
                        Websites don't have to be static, I love making pages come to life.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
