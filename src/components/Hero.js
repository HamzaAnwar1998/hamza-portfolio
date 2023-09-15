import React from "react";
import hero5 from "../images/hero-5.png";
import { motion } from "framer-motion";

export const Hero = ({ setResumeModal }) => {
  const handleResumeModal = () => {
    setResumeModal(true);
  };

  // content variants leftside
  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  // img variants rightside
  const imgVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 60,
      },
    },
  };

  return (
    <div className="hero-box">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="hero-heading">
          Hello, I'm <span className="name">Hamza Anwar</span>
        </h3>
        <h3 className="hero-heading">I am front-end web developer</h3>
        <button className="view-resume-btn" onClick={handleResumeModal}>
          Get My
          Resume
        </button>
      </motion.div>

      <motion.div
        className="hero-img"
        variants={imgVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={hero5} alt="hero-5" />
      </motion.div>
    </div>
  );
};
