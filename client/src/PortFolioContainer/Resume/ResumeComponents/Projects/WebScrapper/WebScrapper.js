import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import "./WebScrapper.css"

export default function WebScrapper() {
  const [title, setTitle] = useState(["W", "E", "B", "S","C", "R", "A", "P", "P", "E","R"]);
  const [role, setRole] = useState("[Founder]");

  const titleComponent = () => {
    return (
      <div className='header-title-projects-3'>
        {title.map((alphabet, index) => (
          <span key={index} className="letter-projects-3">{alphabet}</span>
        ))}
      </div>
    );
  };

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

      {/* GIF Component */}
      <div className='gif-component-projects-3'>
        <img src="https://miro.medium.com/v2/resize:fit:1024/1*nHfayfdmxAApbg84iMrJqQ.gif" alt="Running GIF" />
      </div>

      {/* LinkedIn Link */}
      <div className='linkedin-link-projects-3'>
        <u>Github Link:</u> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://linkedin.com</a>
      </div>

      {/* Introduction */}
      <div className='introduction-projects-3'>
        <h3><u>Introduction</u></h3>
        <ul>
          <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='webscrapper-bullet'/>We are a startup focused on innovation.</li>
          <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='webscrapper-bullet'/>Building solutions that matter.</li>
        </ul>
      </div>

      {/* What we are trying to achieve */}
      <div className='features-projects-3'>
        <h3><u>Features</u></h3>
        <ul>
          <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='webscrapper-bullet'/>Creating meaningful impact.</li>
          <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='webscrapper-bullet'/>Building long-term relationships with clients.</li>
        </ul>
      </div>

      {/* Back button to go to MLProject */}
      
    </div>
  );
}

