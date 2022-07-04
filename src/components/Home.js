import React,{useState, useEffect} from 'react'
import { Navbar } from "./Navbar";
import { LoginModal } from './LoginModal';
import { Hero } from "./Hero";
import { storage } from '../config/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { ResumeModal } from './ResumeModal';
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { ImgModal } from './ImgModal';

export const Home = () => {

  const [loginModal, setLoginModal]=useState(false);

  const [imgModal, setImgModal]=useState(false);
  const [projectImg, setProjectImg]=useState(null);

  const [resumeModal, setResumeModal]=useState(false);
  const [resume, setResume]=useState(null);

  useEffect(()=>{
    getDownloadURL(ref(storage,'Resume.pdf')).then((url)=>{
      setResume(url);
    },[])
  })

  // to hide body scroll for login modal
  useEffect(()=>{
    if(loginModal===true){
      document.body.style.overflow="hidden";
    }
    else if(loginModal===false){
      document.body.style.overflow="auto";
    }
  },[loginModal])

  // to hide body scroll for resume modal
  useEffect(()=>{
    if(resumeModal===true){
      document.body.style.overflow="hidden";
    }
    else if(resumeModal===false){
      document.body.style.overflow="auto";
    }
  },[resumeModal])

  // to hide body scroll for project img modal
  useEffect(()=>{
    if(imgModal===true){
      document.body.style.overflow="hidden";
    }
    else if(imgModal===false){
      document.body.style.overflow="auto";
    }
  },[imgModal])

  return (
    <div className="wrapper">
      <div className="background">
        <Navbar setLoginModal={setLoginModal}/>
        {loginModal===true&&(
          <LoginModal setLoginModal={setLoginModal}/>
        )}
        <Hero setResumeModal={setResumeModal}/>
        {resumeModal===true&&(
          <ResumeModal setResumeModal={setResumeModal} resume={resume}/>
        )}
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
