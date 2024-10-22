import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import './AboutMe.css';
import {aboutMeImageLinks} from '../../utilities/ImageLinks'

export default function AboutMe(props) {

    // setting image links for css
    document.documentElement.style.setProperty('--about-me-profile-pic',`url(${aboutMeImageLinks.MyPic})`)

    const SCREEN_CONSTANTS = {
        description : "Full Stack Developer with Background in Java Stack Development. Profficient in Both Frontend and Backend Technologies. Always Craving to learn more. Strong Professional willing to be an asset for organization.",
        highlights:{
            bullets:[
                "Backend Development with Spring and Springboot",
                "Interactive Frontend With ReactJS",
                "Android Mobile Development",
                "Machine Learning Model Training and Deployment in Python",
                "Cloud Deployment with AWS"
            ],
            heading: "Here are Few HighLights"
        }
    }

    const renderHighlights = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"}/>
            <div className='about-me-card'>
                <div className='about-me-profile'></div>
                <div className='about-me-details'>
                    <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        <div>
                            {renderHighlights()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
