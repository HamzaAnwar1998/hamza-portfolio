import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

export const ResumeModal = ({setResumeModal, resume}) => {
  return (
    <div className='modal-background'>
        <div className='resume-modal-container'>
            <div className='delete-icon' onClick={()=>setResumeModal(false)}>x</div>
            {resume!==null&&(
              // <embed src={resume} type="application/pdf" width={100+'%'} height={100+'%'}></embed>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                <Viewer fileUrl={resume} />
              </Worker>
            )}
        </div>
    </div>
  )
}
