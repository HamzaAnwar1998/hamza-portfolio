import React from 'react'
import '../components/css/ImgModal.css'

export const ImgModal = ({projectImg, setProjectImg, setImgModal}) => {
 
  const handleClose=()=>{
      setImgModal(false);
      setProjectImg(null);
  }

  return (
    <div className='modal-background'>
        <div className='img-modal'>
            <div className='delete-icon' onClick={handleClose}>x</div>
            <img src={projectImg} alt="project"/>
        </div>
    </div>
  )
}
