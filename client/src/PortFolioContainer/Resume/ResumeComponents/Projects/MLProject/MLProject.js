import React, { useState } from 'react';
import './MLProject.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';

export default function PiggyBank() {
  const [title, setTitle] = useState(["M", "L", "P", "R","O","J"]);
  const [role, setRole] = useState("[Founder]");

  const titleComponent = () => {
    return (
      <div className='header-title-projects-2'>
        {title.map((alphabet, index) => (
          <span key={index} className="letter-projects-2">{alphabet}</span>
        ))}
      </div>
    );
  };

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

      {/* GIF Component */}
      <div className='gif-component-projects-2'>
        <img src="https://cdn.pixabay.com/animation/2023/01/22/07/18/07-18-28-799_512.gif" alt="Running GIF" className=''/>
      </div>

     

      {/* LinkedIn Link */}
      <div className='linkedin-link-projects-2'>
        <u>Github Link:</u> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://linkedin.com</a>
      </div>

      {/* Introduction */}
      <div className='introduction-projects-2'>
        <h3><u>Introduction</u></h3>
        <ul>
          <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='mlproj-bullet'/>We are a startup focused on innovation.</li>
          <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='mlproj-bullet'/>Building solutions that matter.</li>
        </ul>
      </div>

      {/* What we are trying to achieve */}
      <div className='features-projects-2'>
        <h3><u>Features</u></h3>
        <ul>
          <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='mlproj-bullet'/>Creating meaningful impact.</li>
          <li><LabelImportantRoundedIcon style={{marginRight: '5px',color:'black'}} className='mlproj-bullet'/>Building long-term relationships with clients.</li>
        </ul>
      </div>

     
    </div>
  );
}
