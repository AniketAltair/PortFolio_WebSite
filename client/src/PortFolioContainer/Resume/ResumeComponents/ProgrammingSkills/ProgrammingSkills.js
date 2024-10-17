import React, { useState, useEffect } from 'react';
import './ProgrammingSkills.css';

export default function ProgrammingSkills() {

  const [isSelected,setIsSelected] = useState(false);

  const [programmingSkills, setProgrammingSkills] = useState([
    {
      name:"Java",
      imageLink: "https://i.pinimg.com/736x/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.jpg",
      percentProgress: "80%"
    },
    {
      name:"React",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
      percentProgress: "80%"
    },
    {
      name:"Android",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHvnyoyWI-FlgTfOWRoJjazD3ke1Q6hOgfQ&s",
      percentProgress: "80%"
    },
    {
      name:"Spring",
      imageLink: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
      percentProgress: "20%"
    },
    {
      name:"Nodejs",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s",
      percentProgress: "20%"
    },
    {
      name:"Javascript",
      imageLink: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      percentProgress: "20%"
    },
    {
      name:"HTML",
      imageLink: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
      percentProgress: "20%"
    },
    {
      name:"CSS",
      imageLink: "https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-programming-langugae-language-pack-logos-icons-1175237.png?f=webp&w=256",
      percentProgress: "20%"
    },
    {
      name:"Python",
      imageLink: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--programming-language-logos-icons-1720083.png?f=webp",
      percentProgress: "20%"
    },
    {
      name:"Tensorflow",
      imageLink: "https://user-images.githubusercontent.com/40668801/42043955-fbb838a2-7af7-11e8-9795-7f890e871d13.png",
      percentProgress: "50%"
    },
    {
      name:"AWS_EC2",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqX9ilNtkRJvMeancrBjulZLftBdDkc3rImQ&s",
      percentProgress: "20%"
    },
    {
      name:"AWS_S3",
      imageLink: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg",
      percentProgress: "100%"
    },
    {
      name:"Jenkins",
      imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
      percentProgress: "20%"
    },
    {
      name:"Docker",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQKd_MRed_mZQlgrzQuUXVA3P39ssOVX8_g&s",
      percentProgress: "80%"
    },
    {
      name:"Kubernetes",
      imageLink: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      percentProgress: "20%"
    },
    {
      name:"Redis",
      imageLink: "https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg",
      percentProgress: "60%"
    },
    {
      name: "Kafka",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOKEVxLEPXLVAhlOcrfBnIOTzoCU23BwUMA&s",
      percentProgress: "65%"
    },
    {
      name:"Elastic",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WpSN5QJweI6GSxp0ayjednCTsaFtivLm7Q&s",
      percentProgress: "20%"
    },
    {
      name:"NginX",
      imageLink: "https://cdn.iconscout.com/icon/free/png-256/free-nginx-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945048.png",
      percentProgress: "100%"
    },
    {
      name:"Git",
      imageLink: "https://sites.duke.edu/memscapstone/files/2021/11/git_logo.png",
      percentProgress: "90%"
    }

  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const bars = document.querySelectorAll('.progress-bar');
    
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
    setIsSelected(true);
    setHoveredIndex(index);
    const bar = document.querySelectorAll('.progress-bar')[index];
    if (bar) {
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = programmingSkills[index].percentProgress; 
      }, 300);
    }
  };

  const handleMouseOut = (index) => {
    setIsSelected(false);
    setHoveredIndex(null);
    const bar = document.querySelectorAll('.progress-bar')[index];
    if (bar) {
      bar.style.width = programmingSkills[index].percentProgress; // Reset to original percentage on mouse out
    }
  };

  return (
    <div className='main-container'>
      {programmingSkills.map((item, index) => (
        <div key={index}>
          <div 
            className='img-container' 
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
                  
          >
            <img 
              src={item.imageLink} 
              alt={`${item.imageLink} Logo`} 
              style={{ width: '100%', height: '100%' }} 
            />
          </div>
          
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{
                width: '0%', // Start with 0% width
                transition: 'width 0.5s ease-in-out' // Add smooth transition
              }}
            ></div>
            <div className="progress-text">
              {item.percentProgress}
            </div>
          </div>
          <div className='skillName'>{item.name}</div>
        </div>
      ))}
    </div>
  );
}
