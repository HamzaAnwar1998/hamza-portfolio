import React from 'react'
import '../components/css/YoutubeModal.css'
import ReactPlayer from 'react-player/youtube'

export const YoutubeModal = ({youtubeLink, setYoutubeModal}) => {
  return (
    <div className='modal-background'>
        <div className='youtube-modal'>
            <div className='delete-icon' onClick={()=>setYoutubeModal(false)}>x</div>
            <div className='youtube-player'>
                <ReactPlayer url={youtubeLink} controls playing />
            </div>
        </div>
    </div>
  )
}
