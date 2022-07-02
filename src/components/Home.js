import React,{useState} from 'react'
import { Navbar } from "./Navbar";
import { LoginModal } from './LoginModal';
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { ImgModal } from './ImgModal';

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
