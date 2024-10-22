import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import "./WebScrapper.css"
import {webScrapperImageLinks} from '../../../../../utilities/ImageLinks'


export default function WebScrapper() {
  const [title, setTitle] = useState(["W", "E", "B", "S","C", "R", "A", "P", "P", "E","R"]);

  const titleComponent = () => {
    return (
      <div className='header-title-projects-3'>
        {title.map((alphabet, index) => (
          <span key={index} className="letter-projects-3">{alphabet}</span>
        ))}
      </div>
    );
  };

  // WebScrapper Static Data
  const webScrapperData = [
    {
      key:"introduction",
      className:"introduction-projects-3",
      heading:"Introduction",
      points:[
        "We are a startup focused on innovation.",
        "Building solutions that matter."
      ]
    },
    {
      key:"features",
      className:"features-projects-3",
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
        webScrapperData.map((item)=>(
          <div className={item.className}>
            <h3><u>{item.heading}</u></h3>
            <ul>
              {
                item.points.map((point)=>(
                  <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='webscrapper-bullet'/>{point}</li>
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
    <div className='container-projects-3'>
      <div className='header-projects-3'>
        <Link to="/mlproject" className='next-button-project-3'>
          <div className='circle-button-3'>
            <ArrowBackIosRoundedIcon>&lt; Back</ArrowBackIosRoundedIcon>
          </div>
        </Link>
        {titleComponent()}
      </div>
      <div className='gif-component-projects-3'>
        <video autoPlay loop muted>
          <source src={webScrapperImageLinks.gif} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='linkedin-link-projects-3'>
        <u>Github Link:</u> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://linkedin.com</a>
      </div>
      {bulletComponents()}
    </div>
  );
}

