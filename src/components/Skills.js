import React from 'react';
import './css/Skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills=()=>{
    return(
        <div className='skills-box'>
            <h3 className='section-heading'>My Skills</h3>
            <h2 className='tagline'>
                Stuff I do 
                <span className='ui-ux'> best</span>
            </h2>
            <div className='circular-progress-box'>
                <div className='progress-box'>
                    <h3>CSS</h3>
                    <CircularProgressbar value={90} text={`${90}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00',
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3>Bootstrap</h3>
                    <CircularProgressbar value={80} text={`${80}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3>Transitions</h3>
                    <CircularProgressbar value={75} text={`${75}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3>JavaScript</h3>
                    <CircularProgressbar value={75} text={`${75}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3>React</h3>
                    <CircularProgressbar value={75} text={`${75}%`}
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>; />;
                </div>
                <div className='progress-box'>
                    <h3>Redux</h3>
                    <CircularProgressbar value={70} text={`${70}%`}
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>; />;
                </div>
                <div className='progress-box'>
                    <h3>Firebase</h3>
                    <CircularProgressbar value={75} text={`${75}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3>GitHub</h3>
                    <CircularProgressbar value={80} text={`${80}%`}
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>; />;
                </div>
            </div>
        </div>
    )
}

export default Skills