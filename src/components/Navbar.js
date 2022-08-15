import React,{useState} from 'react'

// react icons kit
import { Icon } from 'react-icons-kit'
import {ic_code} from 'react-icons-kit/md/ic_code'
import {youtube} from 'react-icons-kit/feather/youtube'
import {mail} from 'react-icons-kit/feather/mail'
import {linkedin} from 'react-icons-kit/feather/linkedin'
import {github} from 'react-icons-kit/feather/github'
import {x} from 'react-icons-kit/feather/x'
import {menu} from 'react-icons-kit/feather/menu'

// tippy js
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// framer-motion
import {motion} from 'framer-motion'

export const Navbar = ({setLoginModal}) => {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
    <nav className={!toggle?'navbar':'navbar expanded'}>

        <div className='logo'>
            <span className='logo-icon'><Icon icon={ic_code} size={72}/></span>
            <h6 className='logo-text'>
              HAMZA
            </h6>
        </div>

        <div className={!toggle?'social-links':'social-links expanded'}>

          <Tippy content="LinkedIn">
            <a className='social-icon' target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/hamza-anwar75/">
              <Icon icon={linkedin} size={22}/>
              {toggle&&(
                <span className='social-icon-text'>LinkedIn</span>
              )}
            </a>
          </Tippy>

          <Tippy content="GitHub">
            <a className='social-icon' target={'_blank'} rel='noreferrer' href="https://github.com/HamzaAnwar1998/">
              <Icon icon={github} size={22}/>
              {toggle&&(
                <span className='social-icon-text'>GitHub</span>
              )}
            </a>
          </Tippy>

          <Tippy content="YouTube">
            <a className='social-icon' target={'_blank'} rel='noreferrer' href="https://www.youtube.com/c/jsSolutions/">
              <Icon icon={youtube} size={22}/>
              {toggle&&(
                <span className='social-icon-text'>YouTube</span>
              )}
            </a>
          </Tippy>

          <Tippy content="Mail">
            <a className='social-icon' target={'_blank'} rel='noreferrer' href="mailto:anwarhamza919@gmail.com">
              <Icon icon={mail} size={22}/>
              {toggle&&(
                <span className='social-icon-text'>Mail</span>
              )}
            </a>
          </Tippy>

          <motion.button className='admin-login' onClick={()=>setLoginModal(true)}
          whileTap={{ scale: 0.9 }}>
            Admin-Login
          </motion.button>

        </div>

        <div className='toggler' onClick={handleToggle}>
          {!toggle?(
            <Icon icon={menu} size={28}/>
          ):(
            <Icon icon={x} size={28}/>
          )}
        </div>

    </nav>
  )
}
