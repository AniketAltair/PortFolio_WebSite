import React, { useState} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Resume.css";
import Education from "./ResumeComponents/Education/Education";
import WorkExperience from "./ResumeComponents/WorkExperience/WorkExperience";
import Startup from "./ResumeComponents/Startup/Startup";
import Projects from "./ResumeComponents/Projects/Projects";
import ProgrammingSkills from "./ResumeComponents/ProgrammingSkills/ProgrammingSkills";
import InterestsAndHobbies from "./ResumeComponents/InterestsAndHobbies/InterestsAndHobbies";
import Responsibilities from "./ResumeComponents/Responsibilities/Responsibilities";

export default function Resume (props){

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [showComponents,setShowComponents] = useState({
        showEducation:true,
        showWorkExperience:false,
        showStartUp:false,
        showProjects:false,
        showProgrammingSkills:false,
        showResponsibilities:false,
        showInterestsAndHobbies:false
    });
    const [componentIndex,setComponentIndex] = useState({
        showEducation:0,
        showWorkExperience:1,
        showStartUp:2,
        showProjects:3,
        showProgrammingSkills:4,
        showResponsibilities:5,
        showInterestsAndHobbies:6
    });
  
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "StartUp", logoSrc: "startup.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Responsibilites", logoSrc: "responsibilities.svg" },
    { label: "Interests & Hobbies", logoSrc: "interests.svg" }
  ];

  // Function responsible when we select resume component on left
  const handleCarousal = (index) => {
    const scrollableDiv = document.querySelector('.resume-card-info');
      if (scrollableDiv) {
        scrollableDiv.scrollTop = 0;
      }
    for(let key in showComponents){
        showComponents[key]=false;
        if(index===componentIndex[key]){
            showComponents[key]=true;
        }
    }
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
      onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}>
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-main-card">
            <div className="resume-card">
                <div className="resume-bullets">
                    <div className="bullet-container">
                        <div className="bullet-icons"></div>
                        <div className="bullets">{getBullets()}</div>
                    </div>
                </div>
            </div>
            <div className="resume-card-info">
                <div className="scrollable-div">
                    {showComponents.showEducation && <Education/>}
                    {showComponents.showWorkExperience && <WorkExperience/>}
                    {showComponents.showStartUp && <Startup/>}
                    {showComponents.showProjects && <Projects/>}
                    {showComponents.showProgrammingSkills && <ProgrammingSkills/>}
                    {showComponents.showResponsibilities && <Responsibilities/>}
                    {showComponents.showInterestsAndHobbies && <InterestsAndHobbies/>}
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};