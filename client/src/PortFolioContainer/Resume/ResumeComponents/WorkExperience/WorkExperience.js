import React, { useState, useEffect, useRef } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Box } from '@mui/material';
import './WorkExperience.css'; 
import {workExperienceImageLinks} from '../../../../utilities/ImageLinks'

const WorkExperience = () => {

  const [visibleBoxes, setVisibleBoxes] = useState([true, true, true]);
  const [isBold, setIsBold] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); 
  const dialogRef = useRef(null); 

  const toggleBox = (index) => {
    setVisibleBoxes((prev) => {
      const newVisibility = [...prev];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  // Work Experience Static Data
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
      logoImg:workExperienceImageLinks.wisetech,
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
      logoImg:workExperienceImageLinks.blume,
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
      logoImg:workExperienceImageLinks.mealful,
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
              <a href={item.companyLink} style={{ textDecoration: 'none', color: 'inherit' }} target='_blank' rel="noreferrer">
                <span><img src={item.logoImg} style={{width:25,height:25,marginRight:5}} alt="no img"/></span><u className='company'><strong>{item.companyName}</strong></u>
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

      {dialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box" ref={dialogRef}>
            <span>
              <img className="dialog-box-img" src={staticData[activeIndex].logoImg} alt="no img"/>
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
