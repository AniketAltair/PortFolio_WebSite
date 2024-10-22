import React, { useState } from 'react';
import './MLProject.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import {mLProjImageLinks} from '../../../../../utilities/ImageLinks'

export default function PiggyBank() {
  const [title, setTitle] = useState(["M", "L", "P", "R","O","J"]);

  const titleComponent = () => {
    return (
      <div className='header-title-projects-2'>
        {title.map((alphabet, index) => (
          <span key={index} className="letter-projects-2">{alphabet}</span>
        ))}
      </div>
    );
  };

  // MLproject Static Data
  const mlProjData = [
    {
      key:"introduction",
      className:"introduction-projects-2",
      heading:"Introduction",
      points:[
        "We are a startup focused on innovation.",
        "Building solutions that matter."
      ]
    },
    {
      key:"features",
      className:"features-projects-2",
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
        mlProjData.map((item)=>(
          <div className={item.className}>
            <h3><u>{item.heading}</u></h3>
            <ul>
              {
                item.points.map((point)=>(
                  <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='mlproj-bullet'/>{point}</li>
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
    <div className='container-projects-2'>
      <div className='header-projects-2'>
        <Link to="/piggybank" className='prev-button-project-2'>
          <div className="circle-button-2-prev">
          <ArrowBackIosRoundedIcon>Next &gt;</ArrowBackIosRoundedIcon>
          </div>
        </Link>
        {titleComponent()}
        <Link to="/webscrapper" className='next-button-project-2'>
          <div className="circle-button-2-next">
          <ArrowForwardIosRoundedIcon>Prev &gt;</ArrowForwardIosRoundedIcon>
          </div>
        </Link>
      </div>
      <div className='gif-component-projects-2'>
        <video autoPlay loop muted>
          <source src={mLProjImageLinks.gif} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='linkedin-link-projects-2'>
        <u>Github Link:</u> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://linkedin.com</a>
      </div>
      {bulletComponents()}
    </div>
  );
}
