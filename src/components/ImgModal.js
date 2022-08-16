import React from 'react'
import '../components/css/ImgModal.css'

// framer motion
import { motion } from 'framer-motion'

// backshadow variants
const backVariants={
  hidden:{
    opacity: 0
  },
  visible:{
    opacity: 1,
    transition:{
      duration: 0.5
    }
  }
}

// modal variants
const modalVariants={
  hidden:{
    y:'-100vh'
  },
  visible:{
    y:0,
    transition:{
      duration: 0.5
    }
  }
}

export const ImgModal = ({projectImg, setProjectImg, setImgModal}) => {
 
  const handleClose=()=>{
      setImgModal(false);
      setProjectImg(null);
  }

  return (
    <motion.div className='modal-background'
    variants={backVariants} initial="hidden" animate="visible">
        <motion.div className='img-modal'
        variants={modalVariants} initial="hidden" animate="visible">
            <img src={projectImg} alt="project"/>
        </motion.div>
        <div className='delete-icon' onClick={handleClose}>X</div>
    </motion.div>
  )
}
