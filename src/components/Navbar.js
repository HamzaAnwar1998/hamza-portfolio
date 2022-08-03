import React from 'react'
import { Icon } from 'react-icons-kit'
import {ic_code} from 'react-icons-kit/md/ic_code'
import {youtube} from 'react-icons-kit/feather/youtube'
import {mail} from 'react-icons-kit/feather/mail'
import {linkedin} from 'react-icons-kit/feather/linkedin'
import {github} from 'react-icons-kit/feather/github'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

export const Navbar = ({setLoginModal}) => {

  return (
    <nav className='navbar'>
        <div className='logo'>
            <span className='logo-icon'><Icon icon={ic_code} size={72}/></span>
            <h6 className='logo-text'>HAMZA</h6>
        </div>
        <div className='social-links'>

          <Tippy content="LinkedIn">
            <a className='social-icon' target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/hamza-anwar75/"><Icon icon={linkedin} size={22}/></a>
          </Tippy>

          <Tippy content="GitHub">
            <a className='social-icon' target={'_blank'} rel='noreferrer' href="https://github.com/HamzaAnwar1998/"><Icon icon={github} size={22}/></a>
          </Tippy>

          <Tippy content="YouTube">
            <a className='social-icon' target={'_blank'} rel='noreferrer' href="https://www.youtube.com/c/jsSolutions/"><Icon icon={youtube} size={22}/></a>
          </Tippy>

          <Tippy content="Mail">
            <a className='social-icon' target={'_blank'} rel='noreferrer' href="mailto:anwarhamza919@gmail.com"><Icon icon={mail} size={22}/></a>
          </Tippy>

          <button className='admin-login' onClick={()=>setLoginModal(true)}>Admin-Login</button>

        </div>
    </nav>
  )
}
