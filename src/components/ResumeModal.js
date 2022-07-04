import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const ResumeModal = ({setResumeModal, resume}) => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  return (
    <div className='modal-background'>
        <div className='resume-modal-container'>
            <div className='delete-icon' onClick={()=>setResumeModal(false)}>x</div>
            {resume!==null&&(
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={resume} />
              </Worker>
            )}
        </div>
    </div>
  )
}
