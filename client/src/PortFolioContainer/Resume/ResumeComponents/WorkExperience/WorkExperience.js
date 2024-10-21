import React, { useState, useEffect, useRef } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Box } from '@mui/material';
import './WorkExperience.css'; // Import the CSS for custom styles

const WorkExperience = () => {
  // State to manage visibility of boxes
  const [visibleBoxes, setVisibleBoxes] = useState([true, true, true]);
  const [isBold, setIsBold] = useState(true);

  // State to control the dialog box
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // To know which "Responsibilities" was clicked
  const dialogRef = useRef(null); // Reference to the dialog box

  // Function to toggle the visibility of a box
  const toggleBox = (index) => {
    setVisibleBoxes((prev) => {
      const newVisibility = [...prev];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  const staticData = [
    {
      index: 0,
      companyName: "WiseTech Global",
      position: "Associate Software Engineer",
      location: "Bangalore",
      from: "April 2024",
      to: "September 2024",
      responsibilities:[
        "Worked on Writting Component test cases using Mockhito and Junit",
      ],
      logoImg:"https://media.licdn.com/dms/image/v2/D560BAQE1-h_PeyRIYw/company-logo_200_200/company-logo_200_200/0/1685679708968/wisetech_global_logo?e=2147483647&v=beta&t=zTf3iCaKP4W5fyukyGUmRHeOLMNVnn0pvX13tiYrCKk",
      companyLink:"https://www.wisetechglobal.com/"
    },
    {
      index: 1,
      companyName: "Blume Global",
      position: "Associate Software Engineer",
      location: "Bangalore",
      from: "July 2023",
      to: "March 2024",
      responsibilities:[
        "Worked with Isomorphic Javascript for frontend and <strong>Spring</strong> for backend",
        "Fixed bugs on production environment",
        "Participated in daily scrum meetings"
      ],
      logoImg:"https://play-lh.googleusercontent.com/3Te50YzAdUfSsdnfmW5qrItF8yLZrvZc8qwDdQl0SjfudJbOiKLgs6S8kn9ANcjDUQ=w240-h480-rw",
      companyLink:"https://www.blumeglobal.com/"
    },
    {
      index: 2,
      companyName: "Mealful",
      position: "Software Engineer Intern",
      location: "(Remote) Halifax, Nova Scotia, Canada",
      from: "February 2022",
      to: "July 2022",
      responsibilities:[
        ""
      ],
      logoImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvd9U7fZfK_xINM7ZAgjHubJ6J8lfYKVfHg&s",
      companyLink:"https://www.linkedin.com/company/mealful/"
    }
  ];

 
  const onLinkClick = (index) => {
    setActiveIndex(index); 
    setDialogOpen(true);   
  };

  
  useEffect(() => {

    const intervalId = setInterval(() => {
      setIsBold((prev) => !prev);
    }, 1000);

    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setDialogOpen(false);
      }
    };

    if (dialogOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [dialogOpen]);

  const TimeLineComponent = () => {
    return staticData.map((item) => (
      <TimelineItem key={item.index}>
        <TimelineSeparator>
          <TimelineDot color='warning' onClick={() => toggleBox(item.index)} />
          {item.index !== 2 && <TimelineConnector className="timeline-connector-custom" />}
        </TimelineSeparator>
        <TimelineContent>
          {visibleBoxes[item.index] && (
            <Box className="box">
              <a href={item.companyLink} style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'>
                <span><img src={item.logoImg} style={{width:25,height:25,marginRight:5}}/></span><u className='company'><strong>{item.companyName}</strong></u>
              </a>
              <div className='position'>{item.position}</div>
              <div className='duration'>{item.from + " - " + item.to}</div>
              <div onClick={() => onLinkClick(item.index)} className={isBold?"responsibilities-bold":"responsibilities"}>Responsibilities</div>
            </Box>
          )}
        </TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <div className="parent-container">
      <Timeline position="alternate">
        {TimeLineComponent()}
      </Timeline>

      {/* Dialog Box */}
      {dialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box" ref={dialogRef}>
            <span>
              <img className="dialog-box-img" src={staticData[activeIndex].logoImg}/>
            </span>
            <span className='dialog-box-title'>&nbsp;&nbsp;&nbsp;<strong>{staticData[activeIndex].companyName}</strong></span>
            <span className='duration'>{staticData[activeIndex].from + " - " + staticData[activeIndex].to}</span>
            <div className='dialog-box-position'>{staticData[activeIndex].position+"  ("+staticData[activeIndex].location+")"}</div>
            <div className='dialog-box-position'><u>Responsibilities: </u></div>
            {staticData[activeIndex].responsibilities.map((item,index)=>(
              <div className='highlights'>
                <div className='highlight-blob'></div>
                <span key={index}dangerouslySetInnerHTML={{ __html: item }}></span>
              </div>
              
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
