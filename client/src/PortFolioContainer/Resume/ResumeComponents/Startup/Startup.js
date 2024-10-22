import React, { useState } from 'react';
import './Startup.css';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import {startUpImageLinks} from '../../../../utilities/ImageLinks'

export default function Startup() {

  // image links from ImageLinks for css
  document.documentElement.style.setProperty('--startup-logo',`url(${startUpImageLinks.logo})`)

  const [title, setTitle] = useState(["M", "A", "C", "R", "O", "M", "I", "N", "D", "E", "R"]);
  const [role, setRole] = useState("[Founder]");

  const titleComponent = () => {
    return (
      <div className='header-title'>
        {title.map((alphabet, index) => (
          <span key={index} className="letter">{alphabet}</span>
        ))}
      </div>
    );
  };

  // StartUp static Data
  const startupData = [
    {
      key:"introduction",
      className:"introduction",
      heading:"Introduction",
      points:[
        "We are a startup focused on innovation.",
        "Building solutions that matter."
      ]
    },
    {
      key:"goals",
      className:"goals",
      heading:"What we are trying to achieve",
      points:[
        "Creating meaningful impact.",
        "Building long-term relationships with clients."
      ]
    },
    {
      key:"achievements",
      className:"achievements",
      heading:"Achievements",
      points:[
        "Awarded best startup in 2023.",
        "Partnered with key industry players."
      ]
    },
    {
      key:"customers",
      className:"customers",
      heading:"Customers",
      imgLinks:startUpImageLinks.customers
    }
  ]

  const bulletComponents = () => {
    return(
      <>
      {
        startupData.map((item)=>(
          (item.key!=="customers")?
            <div className={item.className}>
              <h3><u>{item.heading}</u></h3>
              <ul>
                {
                  item.points.map((point)=>(
                    <li><FitnessCenterRoundedIcon style={{marginRight: '5px',color:'black'}} className='startup-fitness-icon'/>{point}</li>
                  ))
                }
              </ul>
            </div>
          :
            <div className={item.className}>
              <h3><u>{item.heading}</u></h3>
              <div className='customer-images'>
                {
                  item.imgLinks.map((imgLink)=>(
                    <img src={imgLink} alt="Partner logos" />
                  ))
                }
                <div className='customers-dot'>   .......</div>
              </div>
            </div>
        ))
      }
      </>
    )
  }
  
  return (
    <div className='container'>
      <div className='header'>
        <div className='header-img'></div>
        {titleComponent()}
        <div className='header-role'>{role}</div>
      </div>
      <div className='gif-component'>
        <video autoPlay loop muted>
          <source src={startUpImageLinks.gif} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='website-link'>
        <u>Website Link:</u> <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://example.com</a>
      </div>
      <div className='linkedin-link'>
        <u>LinkedIn Link:</u> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://linkedin.com</a>
      </div>
      {bulletComponents()}
    </div>
  );
}
