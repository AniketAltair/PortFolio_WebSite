import React, { useState } from 'react';
import './PiggyBank.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';


export default function PiggyBank() {
  const [title, setTitle] = useState(["P", "I", "G", "G", "Y", "B", "A", "N", "K"]);
  const [role, setRole] = useState("[Founder]");

  const titleComponent = () => {
    return (
      <div className='header-title-projects-1'>
        {title.map((alphabet, index) => (
          <span key={index} className="letter-projects-1">{alphabet}</span>
        ))}
      </div>
    );
  };

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

      {/* GIF Component */}
      <div className='gif-component-projects-1'>
        <img src="https://cdn.dribbble.com/users/9421/screenshots/7370903/media/7af22331c7f9b3d2f5d990df5e6c9a56.gif" alt="Running GIF" style={{height:200,width:400,borderRadius:5}}/>
      </div>

      {/* Website Link */}
      <div className='website-link-projects-1'>
        <u>Playstore Link:</u> <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://example.com</a>
      </div>

      {/* LinkedIn Link */}
      <div className='linkedin-link-projects-1'>
        <u>Github Link:</u> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://linkedin.com</a>
      </div>

      {/* Introduction */}
      <div className='introduction-projects-1'>
        <h3><u>Introduction</u></h3>
        <ul>
          <li><LabelImportantRoundedIcon fontSize="small" style={{marginRight: '5px',color:'black'}} />We are a startup focused on innovation.</li>
          <li><LabelImportantRoundedIcon fontSize="small" style={{marginRight: '5px',color:'black'}} />Building solutions that matter.</li>
        </ul>
      </div>

      {/* What we are trying to achieve */}
      <div className='features-projects-1'>
        <h3><u>Features</u></h3>
        <ul>
          <li><LabelImportantRoundedIcon fontSize="small" style={{marginRight: '5px',color:'black'}} />Creating meaningful impact.</li>
          <li><LabelImportantRoundedIcon fontSize="small" style={{marginRight: '5px',color:'black'}} />Building long-term relationships with clients.</li>
        </ul>
      </div>

     
    </div>
  );
}
