import React from 'react'
import logo from '../images/channel-logo.png';
import '../components/css/Youtube.css';
import { useSelector } from 'react-redux';

// react icons kit
import { Icon } from 'react-icons-kit'
import {play} from 'react-icons-kit/fa/play'

// framer motion
import { motion } from 'framer-motion';

export const Youtube = ({setYoutubeModal, setYoutubeLink}) => {

  const videos = useSelector((state)=>state.youtubeReducer);

  const handleYoutubeModal=(link)=>{
      setYoutubeModal(true);
      setYoutubeLink(link);
  }

  return (
    <div className='section-box'>
        <h3 className='section-heading'>YouTube Videos</h3>
        <h2 className='tagline'>
            I love to create coding 
            <span className='color'> tutorials</span>
        </h2>

        <div className='subscription-section'>
            <div className='channel-logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='channel-info'>
                <div className='channel-name'>JS SOLUTIONS</div>
                <div className='subscribe-button'>
                    <a className='red-area' href="https://www.youtube.com/c/jsSolutions?sub_confirmation=1"
                    target={"_blank"} rel='noreferrer'>SUBSCRIBE</a>
                    <div className='white-area'>2.4K</div>
                </div>
                <div className='channel-views'>400K Channel Views</div>
            </div>
        </div>

        {videos.length > 0&&(
            <div className='youtube-videos-section'>

                {/* most viewed */}
                <div className='youtube-info'>
                    <h4>Most Viewed</h4>
                </div>
                <div className='videos-wrapper'>
                     {videos.map((video)=>(
                        <div key={video.id} >
                            {video.category==='most-viewed'&&(
                                <motion.div className='youtube-card'
                                whileHover={{ scale: 1.1 }}
                                onClick={()=>handleYoutubeModal(video.link)}>
                                    <div className='thumbnail'>
                                        <img src={video.thumbnail} alt="thumbnail"/>
                                        <span className='play-icon'>
                                            <Icon icon={play} size={42}/>
                                        </span>
                                    </div>
                                    <h4 className='video-title'>{video.title}</h4>
                                    <div className='video-views'>{video.views} views, {video.date} </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
                <br></br>
                {/* latest */}
                <div className='youtube-info'>
                    <h4>Latest</h4>
                </div>
                <div className='videos-wrapper'>
                    {videos.map((video)=>(
                        <div key={video.id} >
                            {video.category==='latest'&&(
                                <motion.div className='youtube-card'
                                whileHover={{ scale: 1.1 }}
                                onClick={()=>handleYoutubeModal(video.link)}>
                                    <div className='thumbnail'>
                                        <img src={video.thumbnail} alt="thumbnail"/>
                                        <span className='play-icon'>
                                            <Icon icon={play} size={48}/>
                                        </span>
                                    </div>
                                    <h4 className='video-title'>{video.title}</h4>
                                    <div className='video-views'>{video.views} views, {video.date} </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        )}

    </div>
  )
}
