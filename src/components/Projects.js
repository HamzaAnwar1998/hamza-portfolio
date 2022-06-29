import React from 'react'
import { useSelector } from 'react-redux'
import '../components/css/Projects.css'

export const Projects = () => {

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
                        <a className='github-btn' href={project.github}
                        target={'_blank'} rel='noreferrer'>
                          GitHub
                        </a>
                        <a className='live-link-btn' href={project.link}
                        target={'_blank'} rel='noreferrer'>
                          Live Link
                        </a>
                      </div>
                    </div>
                    <div className='project-img'>
                        <img src={project.img} alt="project-img"/>
                    </div>
                </div>
            ))}
          </div>
        </div>
     )}
    </>
  )
}
