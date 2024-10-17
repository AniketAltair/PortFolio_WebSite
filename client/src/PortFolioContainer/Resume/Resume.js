import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
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
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

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
  
  let fadeInScreenHandler = (screen) => {
    if(screen.fadeScreen !== props.id){
        return;
    }
    Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollService.currScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "StartUp", logoSrc: "startup.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Responsibilites", logoSrc: "responsibilities.svg" },
    { label: "Interests & Hobbies", logoSrc: "interests.svg" }
  ];

  const handleCarousal = (index) => {

    for(let key in showComponents){
        showComponents[key]=false;
        if(index===componentIndex[key]){
            showComponents[key]=true;
        }
    }
   

    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };


  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
      onClick={() => handleCarousal(index)}
        
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
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
            {/* <div className="resume-bullet-details">{getResumeScreens()}</div> */}
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