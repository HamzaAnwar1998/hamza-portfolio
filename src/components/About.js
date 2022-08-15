import React from 'react'

// react icons kit
import { Icon } from 'react-icons-kit'
import {ic_speed} from 'react-icons-kit/md/ic_speed'
import {ic_devices_other} from 'react-icons-kit/md/ic_devices_other'
import {ic_emoji_objects_outline} from 'react-icons-kit/md/ic_emoji_objects_outline'

// framer-motion
import { motion } from 'framer-motion'

// button variants
const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            yoyo: Infinity
        }
    }
}

export const About = () => {
  return (
    <div className='section-box'>
        <h3 className='section-heading'>About Me</h3>
        <h2 className='tagline'>
            I love to Code 
            <span className='color'> UI/UX</span>
        </h2>
        <p className='info'>
            I am a React Redux Developer. I have serious passion for
            UI effects, animations and creating dynamic user experiences.
            I can help you build a product, feature or website Look through
            some of my work! If you like what you see and have a project you
            need coded then feel free to contact me.
        </p>
        <div className='contact-btns-group'>

            <motion.a className='upwork-btn'
            href="https://www.upwork.com/freelancers/~01717a04c3fe860c54"
            target={'_blank'} rel='noreferrer'
            variants={buttonVariants}
            whileHover="hover">
                Upwork
            </motion.a>

            <motion.a className='fiverr-btn' 
            href="https://www.fiverr.com/hamzawebdev75?up_rollout=true"
            target={'_blank'} rel='noreferrer'
            variants={buttonVariants}
            whileHover="hover">
                Fiverr
            </motion.a>

        </div>

        <div className='core-programming-section'>

            <h2 className='core-programming-heading'>
                Core Programming Principles
            </h2>

            <div className='principles-cards-box'>

                <motion.div className='card'
                whileHover={{ scale: 1.2 }}>
                    <span className='card-icon'>
                        <Icon icon={ic_speed} size={88}/>
                    </span>
                    <h5 className='card-heading'>Fast</h5>
                    <p className='card-text'>
                        Fast load times and lag free interaction, my highest priority.
                    </p>
                </motion.div>

                <motion.div className='card black'
                whileHover={{ scale: 1.2 }}>
                    <span className='card-icon'>
                        <Icon icon={ic_devices_other} size={88}/>
                    </span>
                    <h5 className='card-heading'>Responsive</h5>
                    <p className='card-text'>
                        My layouts will work on any device, big or small.
                    </p>
                </motion.div>

                <motion.div className='card'
                whileHover={{ scale: 1.2 }}>
                    <span className='card-icon'>
                        <Icon icon={ic_emoji_objects_outline} size={88}/>
                    </span>
                    <h5 className='card-heading'>Dynamic</h5>
                    <p className='card-text'>
                        Websites don't have to be static, I love making pages come to life.
                    </p>
                </motion.div>

            </div>
            
        </div>
    </div>
  )
}
