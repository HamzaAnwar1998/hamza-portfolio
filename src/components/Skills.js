import React from 'react';
import './css/Skills.css';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';


export const Skills=()=>{
    return(
        <div className='section-box'>
            <h3 className='section-heading'>My Skills</h3>
            <h2 className='tagline'>
                Stuff I do 
                <span className='color'> best</span>
            </h2>

            <div className='circular-progress-box'>

                <div className='diamond'>
                    <p className='diamond-text'>CSS</p>
                </div>

                <div className='diamond'>
                    <p className='diamond-text'>Bootstrap</p>
                </div>

               
                <div className='diamond'>
                    <p className='diamond-text'>Transitions</p>
                </div>
             
                <div className='diamond'>
                    <p className='diamond-text'>JavaScript</p>
                </div>

                <div className='diamond'>
                    <p className='diamond-text'>React</p>
                </div>

                <div className='diamond'>
                    <p className='diamond-text'>Redux</p>
                </div>

                <div className='diamond'>
                    <p className='diamond-text'>Firebase</p>
                </div>

                <div className='diamond'>
                    <p className='diamond-text'>Git</p>
                </div>

                {/* <div className='progress-box'>
                    <h3 className='progress-heading'>Git</h3>
                    <CircularProgressbar value={80} text={`${80}%`}
                    styles={buildStyles({
                        textColor: '#f0ab00',
                    })}/>
                </div> */}

            </div>
            
        </div>
    )
}
