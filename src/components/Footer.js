import React from 'react'

// react icons kit
import { Icon } from 'react-icons-kit'
import {ic_code} from 'react-icons-kit/md/ic_code'

// channel logo
import logo from '../images/channel-logo.png'

export const Footer=()=>{
    return(
        <footer className='footer'>

            <div className='logo'>
                <span className='logo-icon'>
                    <Icon icon={ic_code} size={72}/>
                </span>
                <h6 className='logo-text'>HAMZA</h6>
            </div>

            <div className='footer-links'>
                <h3>Links</h3>
                <div className='imp-links'>
                    <span>
                        <a target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/hamza-anwar75/">
                            LinkedIn
                        </a>
                    </span>
                    <span>
                        <a className='social-icon' target={'_blank'} rel='noreferrer' href="https://github.com/HamzaAnwar1998/">
                            GitHub
                        </a>
                    </span>
                    <span>
                        <a className='social-icon' target={'_blank'} rel='noreferrer' href="https://www.youtube.com/c/jsSolutions/">
                            YouTube
                        </a>
                    </span>
                    <span>
                        <a
                        href="https://www.fiverr.com/hamzawebdev75?up_rollout=true"
                        target={'_blank'} rel='noreferrer'>Fiverr</a>
                    </span>
                    <span>
                        <a
                        href="https://www.upwork.com/freelancers/~01717a04c3fe860c54"
                        target={'_blank'} rel='noreferrer'>Upwork</a>
                    </span>
                </div>
            </div>

            <div className='footer-subscription-section'>
                <div className='footer-channel-logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='footer-channel-info'>
                    <div className='footer-channel-name'>JS SOLUTIONS</div>
                    <div className='footer-subscribe-button'>
                        <a className='footer-red-area'
                        href="https://www.youtube.com/c/jsSolutions?sub_confirmation=1"
                        target={"_blank"} rel='noreferrer'>SUBSCRIBE</a>
                        <div className='footer-white-area'>1.8K</div>
                    </div>
                    <div className='footer-channel-views'>300K Channel Views</div>
                </div>
            </div>

        </footer>
    )
}