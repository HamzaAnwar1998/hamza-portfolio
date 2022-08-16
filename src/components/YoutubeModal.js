import React from 'react'
import '../components/css/YoutubeModal.css'
import ReactPlayer from 'react-player'

// framer-motion
import { motion } from 'framer-motion'

// backshadow
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
    x:'100vw'
  },
  visible:{
    x:0,
    transition:{
      duration: 0.5
    }
  }
}

export const YoutubeModal = ({youtubeLink, setYoutubeModal}) => {
  return (
    <motion.div className='modal-background'
    variants={backVariants} initial="hidden" animate="visible">

        <motion.div className='youtube-modal'
        variants={modalVariants} initial="hidden" animate="visible">
              
            <ReactPlayer url={youtubeLink} controls playing
            className='youtube-player'
            width={100+'%'}
            height={100+'%'}/>

        </motion.div>

        <div className='delete-icon' onClick={()=>setYoutubeModal(false)}>
          X
        </div>

    </motion.div>
  )
}
