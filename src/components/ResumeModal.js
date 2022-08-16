import React from 'react'

// react pdf viewer
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// framer-motion
import {motion} from 'framer-motion'

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
    x:'100vw'
  },
  visible:{
    x:0,
    transition:{
      duration: 0.5
    }
  }
}

export const ResumeModal = ({setResumeModal, resume}) => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  return (
    <motion.div className='modal-background'
    variants={backVariants} initial="hidden" animate="visible">
        <motion.div className='resume-modal-container'
        variants={modalVariants} initial="hidden" animate="visible">
            {resume!==null&&(
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={resume} />
              </Worker>
            )}
        </motion.div>
        <div className='delete-icon' onClick={()=>setResumeModal(false)}>
          X
        </div>
    </motion.div>
  )
}
