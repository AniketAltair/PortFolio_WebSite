import React from 'react';
import {Typewriter} from 'react-simple-typewriter';
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://github.com/AniketAltair' target="_blank">
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/aniket-katakdhond-47b93b18b/' target="_blank">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://www.instagram.com/aniket_31301/' target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.facebook.com/aniket.katakdhond.12/' target="_blank">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://x.com/Aniket31301' target="_blank">
                            <i className='fa fa-twitter-square'></i>
                        </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>Aniket</span>
                    </span>
                </div>

                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typewriter
                                words={[
                                    "Full Stack Developer 🧑‍💻", 
                                    "Android Developer 📱", 
                                    "Machine Learning Engineer 🤖", 
                                    "Coding Enthusiast 👾"
                                ]}
                                loop={0}
                                deleteSpeed={0}
                                delaySpeed={1000}
                            />
                        </h1>
                        <span className='profile-name-tagline'>
                        Your digital architect: designing, developing, and deploying.
                        </span>
                    </span>
                </div>

                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='Old_resume_Aniket.pdf' download='Aniket_Resume.pdf'>
                        <button className='btn highlighted-btn'>
                            Get Resume
                        </button>
                    </a>
                </div>
            </div>

            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>

        </div>
    </div>
  )
}
