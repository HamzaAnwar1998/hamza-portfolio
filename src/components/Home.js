import React,{useState} from 'react'
import { About } from "./About";
import { Hero } from "./Hero";
import { ImgModal } from './ImgModal';
import { LoginModal } from './LoginModal';
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import Skills from "./Skills";

export const Home = () => {

  const [loginModal, setLoginModal]=useState(false);

  const [imgModal, setImgModal]=useState(false);
  const [projectImg, setProjectImg]=useState(null);

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
      <Projects setImgModal={setImgModal} setProjectImg={setProjectImg}/>
      {imgModal===true&&(
          <ImgModal setImgModal={setImgModal} setProjectImg={setProjectImg}
          projectImg={projectImg}/>
      )}
    </div>
  )
}
