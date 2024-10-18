import React from 'react';
import './InterestsAndHobbies.css'; // Importing CSS
import AssignmentIcon from '@mui/icons-material/Assignment'; // Importing AssignmentIcon

export default function InterestsAndHobbies () {
    const responsibilities = [
        {
            title: 'Fitness',
            points: [
                'I started going to the gym to improve my physical health, relieve stress, and build discipline. It has become a crucial part of my journey toward a healthier lifestyle.',
                'Wake up every day at 7:00 AM and hit the gym, dedicated to being better than I was yesterday.',
                'Diet Plan Link'
            ],
            ImagesLink: [
                'https://i.imgur.com/WQHOYYg.jpg',
                'https://i.imgur.com/g1Q5OxJ.jpg',
                'https://i.imgur.com/nkNVCiX.jpg',
                'https://i.imgur.com/rx3c5eh.jpg',
                'https://i.imgur.com/dW6j3VO.jpg'
            ]
        },
        {
            title: 'Travelling',
            points: [
                'I love traveling because it allows me to explore new cultures, experience diverse landscapes, and create unforgettable memories that enrich my perspective on life.',
                'I have been to Singapore, Hampi, Kerala and more...'
            ],
            ImagesLink: [
                'https://i.imgur.com/e5LXscl.jpg',
                'https://i.imgur.com/zkKzFFo.jpg',
                'https://i.imgur.com/mwjNymN.jpg',
                'https://i.imgur.com/lWDAROl.jpg',
                'https://i.imgur.com/7gjFEiM.jpg',
                'https://i.imgur.com/znBOokE.jpg',
                'https://i.imgur.com/xvkjjgY.jpg',
                'https://i.imgur.com/fcsJjZd.jpg',
                'https://i.imgur.com/6teqbp8.jpg'
            ]
        },
        {
            title: 'Drawing',
            points: [
                'I love drawing pencil sketches of cars and still life because it challenges my artistic skills while capturing the intricate details and beauty of objects in a realistic way.',
                'I’ve achieved an A grade in both elementary and intermediate drawing exams, reflecting my dedication and skill.'
            ],
            ImagesLink: [
                'https://i.imgur.com/ZayRZOr.png',
                'https://i.imgur.com/7DHv8qb.jpg',
                'https://i.imgur.com/ZH3Xu6I.png',
                'https://i.imgur.com/fRZycyr.jpg'
            ]
        },
        {
            title: 'Competitive Coding',
            points: [
                'I love competitive coding because it hones my problem-solving skills under pressure, pushes me to think critically, and allows me to connect with a community of like-minded enthusiasts.',
                'Leetcode',
                'Codechef'
            ]
        }
    ];

    return (
        <div className="responsibility-container">
            {responsibilities.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-header">
                        <h3>{item.title}</h3>
                    </div>
                    <ul>
                        {item.points.map((point, i) => (
                            <li key={i}>
                                <AssignmentIcon style={{ color: '#ff5823', marginRight: '10px' }} />
                                {(item.title==="Fitness" && i===2)?
                                    <a 
                                        href='https://drive.google.com/uc?id=1-PzQu8ymcxvmvvm2scKcC-_QH-vtTchf' 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        download
                                    >
                                        Click for Diet Link
                                    </a>
                                    :
                                    (item.title==="Competitive Coding" && (i===1 || i===2))?
                                    (i===1)?
                                    <a 
                                        href='https://leetcode.com/u/Aniket313/' 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        download
                                    >
                                        LeetCode Profile
                                    </a>
                                    :
                                    <a 
                                        href='https://www.codechef.com/users/aniket_31301' 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        download
                                    >
                                        CodeChef Profile
                                    </a>
                                    :
                                    point}
                            </li>
                        ))}
                    </ul>
                    {
                        (item.title === "Fitness" || item.title === "Travelling" || item.title === "Drawing") && 
                        <div className={(item.title==="Fitness")?("interests-images-fitness"):("interests-images-travel")}>
                            {item.ImagesLink.map((imgLink, idx) => (
                                <a href={imgLink} target="_blank" rel="noopener noreferrer" key={idx}>
                                    <img src={imgLink} alt="ImageLoading">
                                    </img>
                                </a>
                            ))}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
};
