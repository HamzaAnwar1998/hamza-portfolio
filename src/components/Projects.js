/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector } from 'react-redux'
import '../components/css/Projects.css'

export const Projects = ({setImgModal, setProjectImg}) => {

  const handleImageModal=(img)=>{
    setImgModal(true);
    setProjectImg(img);
  }

  const projects = useSelector((state)=>state.operationsReducer);

  return (
    <>
     {projects.length>0&&(
        <div className='projects-div'>
          <h3 className='section-heading'>Projects</h3>
          <h2 className='tagline'>
            Checkout some of my best 
            <span className='ui-ux'> projects</span>
          </h2>
          <div className='categories-btns-div'>
              <button>All</button>
              <button>UI-Development</button>
              <button>React-JS</button>
              <button>Firebase</button>
          </div>
          <div className='projects-wrapper'>
            {projects.map((project)=>(
                <div className='project-card' key={project.id}>
                    <div className='project-content'>
                      <h3 className='title'>{project.title}</h3>
                      <p className='description'>{project.description}</p>
                      <div className='tech'>{project.tech}</div>
                      <div className='project-btns-group'>
                        {project.github !==''?(
                          <a className='github-btn' href={project.github}
                          target={'_blank'} rel='noreferrer'>
                            GitHub
                          </a>
                        ):(
                          <a className='github-btn not-available'>
                            GitHub Not Available
                          </a>
                        )}
                        {project.link !=='' ?(
                          <a className='live-link-btn' href={project.link}
                          target={'_blank'} rel='noreferrer'>
                            Live Link
                          </a>
                        ):(
                          <a className='live-link-btn not-available'>
                            Link Not Available
                          </a>
                        )}
                      </div>
                    </div>
                    <div className='project-img'>
                        <img src={project.img} alt="project-img"/>
                        <span onClick={()=>handleImageModal(project.img)}>Click to enlarge image</span>
                    </div>
                </div>
            ))}
          </div>
        </div>
     )}
    </>
  )
}
