import React, { useState } from 'react';
import './PiggyBank.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import { interval } from 'rxjs';
import {piggyBankImageLinks} from '../../../../../utilities/ImageLinks'

export default function PiggyBank() {

  // image links from ImageLinks for css
  document.documentElement.style.setProperty('--piggbank-logo',`url(${piggyBankImageLinks.logo})`);

  const [title, setTitle] = useState(["P", "I", "G", "G", "Y", "B", "A", "N", "K"]);

  const titleComponent = () => {
    return (
      <div className='header-title-projects-1'>
        {title.map((alphabet, index) => (
          <span key={index} className="letter-projects-1">{alphabet}</span>
        ))}
      </div>
    );
  };

  // PiggyBank Static Data
  const piggyBankData = [
    {
      key:"introduction",
      className:"introduction-projects-1",
      heading:"Introduction",
      points:[
        "We are a startup focused on innovation.",
        "Building solutions that matter."
      ]
    },
    {
      key:"features",
      className:"features-projects-1",
      heading:"Features",
      points:[
        "Creating meaningful impact.",
        "Building long-term relationships with clients."
      ]
    }
  ]

  const bulletComponents = () => {
    return(
      <>
      {
        piggyBankData.map((item)=>(
          <div className={item.className}>
            <h3><u>{item.heading}</u></h3>
            <ul>
              {
                item.points.map((point)=>(
                  <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='piggybank-bullet' />{point}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
      </>
    )
  }

  return (
    <div className='container-projects-1'>
      <div className='header-projects-1'>
        <div className='header-img-projects-1'></div>
        {titleComponent()}
        <Link to="/mlproject" className='next-button-project-1'>
          <div className="circle-button-1">
          <ArrowForwardIosRoundedIcon>Next &gt;</ArrowForwardIosRoundedIcon>
          </div>
        </Link>
      </div>
      <div className='gif-component-projects-1'>
        <video autoPlay loop muted>
          <source src={piggyBankImageLinks.gif} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='website-link-projects-1'>
        <u>Playstore Link:</u> <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://example.com</a>
      </div>
      <div className='linkedin-link-projects-1'>
        <u>Github Link:</u> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://linkedin.com</a>
      </div>
      {bulletComponents()}
    </div>
  );
}
