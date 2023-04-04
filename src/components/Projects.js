/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../components/css/Projects.css'
import { uiDevelopment,reactDevelopment,firebaseDevelopment, allDevelopment } from '../redux/actions'

export const Projects = ({setImgModal, setProjectImg}) => {

  const handleImageModal=(img)=>{
    setImgModal(true);
    setProjectImg(img);
  }

  const state = useSelector((state)=>state.operationsReducer);
  const dispatch = useDispatch();

  return (
    <>
     {state.projects.length>0&&(
        <div className='section-box'>
          <h3 className='section-heading'>Projects</h3>
          <h2 className='tagline'>
            Checkout some of my best 
            <span className='color'> projects</span>
          </h2>

          <div className='categories-btns-div'>

              <button onClick={()=>dispatch(allDevelopment('All'))}
                className={state.active==='All'?'categories-btns active':'categories-btns'}>
                All
              </button>

              <button onClick={()=>dispatch(uiDevelopment('UI-Development'))}
                className={state.active==='UI-Development'?'categories-btns active':'categories-btns'}>
                UI-Development
              </button>

              <button onClick={()=>dispatch(reactDevelopment('React-JS'))}
                className={state.active==='React-JS'?'categories-btns active':'categories-btns'}>
                React-JS
              </button>

              <button onClick={()=>dispatch(firebaseDevelopment('Firebase'))}
                className={state.active==='Firebase'?'categories-btns active':'categories-btns'}>
                Firebase
              </button>

          </div>

          {state.projects.length>0&&(
            <div className='projects-info'>
              <h4>{state.active}</h4>
              <span>Total Videos: {state.projects.length}</span>
            </div>
          )}
          <div className='projects-wrapper'>
            {state.projects.map((project)=>(
                <div className='project-card' key={project.id}>
                    <div className='project-content'>
                      <h4 className='title'>{project.title}</h4>
                      <p className='description'>{project.description}</p>
                      <div className='tech'>{project.tech}</div>
                      <div className='project-btns-group'>
                        {project.github !==''?(
                          <>
                            {project.github==='Confidential'?(
                               <a className='github-btn'
                               target={'_blank'} rel='noreferrer'>
                                 Confidential
                               </a>
                            ):(
                              <a className='github-btn' href={project.github}
                              target={'_blank'} rel='noreferrer'>
                                GitHub
                              </a>
                            )}
                          </>
                          
                        ):(
                          <a className='github-btn not-available'>
                            GitHub Unavailable
                          </a>
                        )}
                         {project.link !==''?(
                          <>
                            {project.link==='Confidential'?(
                               <a className='live-link-btn'
                               target={'_blank'} rel='noreferrer'>
                                 Confidential
                               </a>
                            ):(
                              <a className='live-link-btn' href={project.link}
                              target={'_blank'} rel='noreferrer'>
                                Live Link
                              </a>
                            )}
                          </>
                          
                        ):(
                          <a className='live-link-btn not-available'>
                            Live Link Unavailable
                          </a>
                        )}
                      </div>
                    </div>
                    <div className='project-img'>
                        <img src={project.img} alt="project-img"/>
                        <span onClick={()=>handleImageModal(project.fullSnap)}>Click to enlarge image</span>
                    </div>
                </div>
            ))}
          </div>
        </div>
     )}
    </>
  )
}
