import React from 'react';
import './css/Skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills=()=>{
    return(
        <div className='skills-box'>
            <h3 className='skills-heading'>My Skills</h3>
            <h2 className='skills-tagline'>
                Stuff I do 
                <span className='skills-ui-ux'> best</span>
            </h2>
            <div className='circular-progress-box'>
                <div className='progress-box'>
                    <h3 className='progress-heading'>CSS</h3>
                    <CircularProgressbar value={90} text={`${90}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00',
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3 className='progress-heading'>Bootstrap</h3>
                    <CircularProgressbar value={80} text={`${80}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3 className='progress-heading'>Transitions</h3>
                    <CircularProgressbar value={75} text={`${75}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3 className='progress-heading'>JavaScript</h3>
                    <CircularProgressbar value={75} text={`${75}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3 className='progress-heading'>React</h3>
                    <CircularProgressbar value={75} text={`${75}%`}
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>; />;
                </div>
                <div className='progress-box'>
                    <h3 className='progress-heading'>Redux</h3>
                    <CircularProgressbar value={70} text={`${70}%`}
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>; />;
                </div>
                <div className='progress-box'>
                    <h3 className='progress-heading'>Firebase</h3>
                    <CircularProgressbar value={75} text={`${75}%`} 
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>;
                </div>
                <div className='progress-box'>
                    <h3 className='progress-heading'>GitHub</h3>
                    <CircularProgressbar value={80} text={`${80}%`}
                    styles={buildStyles({
                        textColor: '#f0ab00'
                    })}/>; />;
                </div>
            </div>
        </div>
    )
}
