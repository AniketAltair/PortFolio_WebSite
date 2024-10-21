import React, { useState } from 'react';
import './Startup.css';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';

export default function Startup() {
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

  return (
    <div className='container'>
      <div className='header'>
        <div className='header-img'></div>
        {titleComponent()}
        <div className='header-role'>{role}</div>
      </div>

      {/* GIF Component */}
      <div className='gif-component'>
        <img src="https://media.giphy.com/media/l4pTqyJ8XMDeJuDW8/giphy.gif" alt="Running GIF"/>
      </div>

      {/* Website Link */}
      <div className='website-link'>
        <u>Website Link:</u> <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://example.com</a>
      </div>

      {/* LinkedIn Link */}
      <div className='linkedin-link'>
        <u>LinkedIn Link:</u> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:"red"}}>https://linkedin.com</a>
      </div>

      {/* Introduction */}
      <div className='introduction'>
        <h3><u>Introduction</u></h3>
        <ul>
          <li><FitnessCenterRoundedIcon style={{marginRight: '5px',color:'black'}} className='startup-fitness-icon'/>We are a startup focused on innovation.</li>
          <li><FitnessCenterRoundedIcon style={{marginRight: '5px',color:'black'}} className='startup-fitness-icon'/>Building solutions that matter.</li>
        </ul>
      </div>

      {/* What we are trying to achieve */}
      <div className='goals'>
        <h3><u>What we are trying to achieve</u></h3>
        <ul>
          <li><FitnessCenterRoundedIcon style={{marginRight: '5px',color:'black'}} className='startup-fitness-icon'/>Creating meaningful impact.</li>
          <li><FitnessCenterRoundedIcon style={{marginRight: '5px',color:'black'}} className='startup-fitness-icon'/>Building long-term relationships with clients.</li>
        </ul>
      </div>

      {/* Achievements */}
      <div className='achievements'>
        <h3><u>Achievements</u></h3>
        <ul>
          <li><FitnessCenterRoundedIcon style={{marginRight: '5px',color:'black'}} className='startup-fitness-icon'/>Awarded best startup in 2023.</li>
          <li><FitnessCenterRoundedIcon style={{marginRight: '5px',color:'black'}} className='startup-fitness-icon'/>Partnered with key industry players.</li>
        </ul>
      </div>

      {/* Customers */}
      <div className='customers'>
        <h3><u>Customers</u></h3>
        <div className='customer-images'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsOP9d-Z7JO09PUhleT2izY5Uc1yUlAJ_CQ&s" alt="Partner logos" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6MbFomjV5kuTTH3GhQ_-IhD-CdIZTYBLng&s" alt="Partner logos" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCO65I4vnJKgqUOF4yUFJ2KivzYv-dekNwkg&s" alt="Partner logos" />
          <div className='customers-dot'>   .......</div>
        </div>
      </div>
    </div>
  );
}
