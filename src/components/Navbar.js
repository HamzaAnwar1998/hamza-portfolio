import React from 'react'
import { Icon } from 'react-icons-kit'
import {ic_code} from 'react-icons-kit/md/ic_code'
import {youtube} from 'react-icons-kit/feather/youtube'
import {mail} from 'react-icons-kit/feather/mail'
import {linkedin} from 'react-icons-kit/feather/linkedin'
import {github} from 'react-icons-kit/feather/github'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <span className='logo-icon'><Icon icon={ic_code} size={72}/></span>
            <h6>HAMZA</h6>
        </div>
        <div className='social-links'>
            <span className='social-icon'><Icon icon={linkedin} size={22}/></span>
            <span className='social-icon'><Icon icon={github} size={22}/></span>
            <span className='social-icon'><Icon icon={youtube} size={22}/></span>
            <span className='social-icon'><Icon icon={mail} size={22}/></span>
            <button className='admin-login'>Admin-Login</button>
        </div>
    </nav>
  )
}
