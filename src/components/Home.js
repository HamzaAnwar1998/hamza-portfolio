import React,{useState} from 'react'
import { About } from "./About";
import { Hero } from "./Hero";
import { LoginModal } from './LoginModal';
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import Skills from "./Skills";

export const Home = () => {

  const [loginModal, setLoginModal]=useState(false);

  return (
    <div className="wrapper">
      <div className="background">
        <Navbar setLoginModal={setLoginModal}/>
        {loginModal===true&&(
          <LoginModal setLoginModal={setLoginModal}/>
        )}
        <Hero/>
      </div>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}
