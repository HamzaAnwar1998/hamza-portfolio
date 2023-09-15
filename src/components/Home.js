import React,{useState, useEffect} from 'react'

// components
import { Navbar } from "./Navbar";
import { LoginModal } from './LoginModal';
import { Hero } from "./Hero";
import { ResumeModal } from './ResumeModal';
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { ImgModal } from './ImgModal';
import { Youtube } from './Youtube';
import { YoutubeModal } from './YoutubeModal';
import { Certificate } from './Certificate';
import { Footer } from './Footer';

// firebase
import { storage } from '../config/firebase';
import { getDownloadURL, ref } from 'firebase/storage';

export const Home = () => {

  // login modal
  const [loginModal, setLoginModal]=useState(false);

  // image modal and project image
  const [imgModal, setImgModal]=useState(false);
  const [projectImg, setProjectImg]=useState(null);

  // resume modal and resume link
  const [resumeModal, setResumeModal]=useState(false);
  const [resume, setResume]=useState(null);

  // youtube modal and youtube link
  const [youtubeModal, setYoutubeModal]=useState(false);
  const [youtubeLink, setYoutubeLink]=useState(null);

  // getting resume link
  useEffect(()=>{
    getDownloadURL(ref(storage,'Hamza-React-Dev-Resume.pdf')).then((url)=>{
      setResume(url);
    },[]).catch(err=>console.log(err.message));
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

  // to hide body scroll for youtube modal
  useEffect(()=>{
    if(youtubeModal===true){
      document.body.style.overflow="hidden";
    }
    else if(youtubeModal===false){
      document.body.style.overflow="auto";
    }
  },[youtubeModal])

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
      <Youtube setYoutubeModal={setYoutubeModal} setYoutubeLink={setYoutubeLink}/>
      {youtubeModal===true&&(
        <YoutubeModal setYoutubeModal={setYoutubeModal}
        youtubeLink={youtubeLink}/>
      )}
      <Certificate/>
      <Footer/>
    </div>
  )
}
