import React, { useState, useEffect } from 'react';
import './ProgrammingSkills.css';
import {programmingImageLinks} from '../../../../utilities/ImageLinks'

export default function ProgrammingSkills() {

  // ProgrammingSkills Static Data
  const [programmingSkills, setProgrammingSkills] = useState([
    {
      name:"Java",
      imageLink: programmingImageLinks.java,
      percentProgress: "8%"
    },
    {
      name:"React",
      imageLink: programmingImageLinks.react,
      percentProgress: "80%"
    },
    {
      name:"Android",
      imageLink: programmingImageLinks.android,
      percentProgress: "80%"
    },
    {
      name:"Spring",
      imageLink: programmingImageLinks.spring,
      percentProgress: "20%"
    },
    {
      name:"Nodejs",
      imageLink: programmingImageLinks.nodejs,
      percentProgress: "20%"
    },
    {
      name:"Javascript",
      imageLink:programmingImageLinks.javascript,
      percentProgress: "20%"
    },
    {
      name:"HTML",
      imageLink: programmingImageLinks.html,
      percentProgress: "20%"
    },
    {
      name:"CSS",
      imageLink: programmingImageLinks.css,
      percentProgress: "20%"
    },
    {
      name:"Python",
      imageLink: programmingImageLinks.python,
      percentProgress: "20%"
    },
    {
      name:"Tensorflow",
      imageLink: programmingImageLinks.tensorflow,
      percentProgress: "50%"
    },
    {
      name:"AWS_EC2",
      imageLink: programmingImageLinks.aws_ec2,
      percentProgress: "20%"
    },
    {
      name:"AWS_S3",
      imageLink: programmingImageLinks.aws_s3,
      percentProgress: "100%"
    },
    {
      name:"Jenkins",
      imageLink: programmingImageLinks.jenkins,
      percentProgress: "20%"
    },
    {
      name:"Docker",
      imageLink: programmingImageLinks.docker,
      percentProgress: "80%"
    },
    {
      name:"Kubernetes",
      imageLink: programmingImageLinks.kubernetes,
      percentProgress: "20%"
    },
    {
      name:"Redis",
      imageLink: programmingImageLinks.redis,
      percentProgress: "60%"
    },
    {
      name: "Kafka",
      imageLink: programmingImageLinks.kafka,
      percentProgress: "65%"
    },
    {
      name:"Elastic",
      imageLink: programmingImageLinks.elastic,
      percentProgress: "20%"
    },
    {
      name:"NginX",
      imageLink: programmingImageLinks.nginx,
      percentProgress: "100%"
    },
    {
      name:"Git",
      imageLink: programmingImageLinks.git,
      percentProgress: "90%"
    }

  ]);

  useEffect(() => {
    const bars = document.querySelectorAll('.prog-skills-progress-bar');
    bars.forEach(bar => {
      bar.style.width = '0%'; 
    });
    setTimeout(() => {
      programmingSkills.forEach((item, index) => {
        if (bars[index]) {
          bars[index].style.width = item.percentProgress; 
        }
      });
    }, 100); 
  }, [programmingSkills]);

  const handleMouseOver = (index) => {
    const bar = document.querySelectorAll('.prog-skills-progress-bar')[index];
    if (bar) {
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = programmingSkills[index].percentProgress; 
      }, 300);
    }
  };

  const handleMouseOut = (index) => {
    const bar = document.querySelectorAll('.prog-skills-progress-bar')[index];
    if (bar) {
      bar.style.width = programmingSkills[index].percentProgress;
    }
  };

  return (
    <div className='prog-skills-main-container'>
      {programmingSkills.map((item, index) => (
        <div key={index}>
          <div 
            className='prog-skills-img-container' 
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
          >
            <img 
              src={item.imageLink} 
              alt={`${item.imageLink} Logo`} 
              style={{ width: '100%', height: '100%' }} 
            />
          </div>
          
          <div className="prog-skills-progress-container">
            <div 
              className="prog-skills-progress-bar" 
              style={{
                width: '0%',
                transition: 'width 0.5s ease-in-out'
              }}
            ></div>
            <div className="prog-skills-progress-text">
              {item.percentProgress}
            </div>
          </div>
          <div className='prog-skills-skillName'>{item.name}</div>
        </div>
      ))}
    </div>
  );
}
