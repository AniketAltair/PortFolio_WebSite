import React from 'react';
import './InterestsAndHobbies.css'; // Importing CSS
import AssignmentIcon from '@mui/icons-material/Assignment'; // Importing AssignmentIcon

export default function InterestsAndHobbies () {
    const responsibilities = [
        {
            title: 'Qkres',
            points: [
                'Made an MVP of Contactless QR System application in Flutter.',
                'Led a team of 4 people to achieve the MVP.',
                'Showcased the application at a Tech Fest exhibition.'
            ],
            videoLink: 'https://drive.google.com/file/d/1ABy39JVBUcCYbk_fyER6Ww1UTzSaIVfk/preview'
        },
        {
            title: 'Cϕ - Product Team Member',
            points: [
                'Developed a Notes folder organization application for professors and students.',
                'Allowed professors and students to upload notes in a common sharing space.'
            ]
        },
        {
            title: 'Shaastra - Coordinator',
            points: [
                'Part of the Tech creation team.',
                'Ideated and organized games for Shaastra Tech Fest.'
            ]
        },
        {
            title: 'Brainly',
            points: [
                'Helped primary section students with problems in physics, chemistry, and maths.'
            ]
        },
        {
            title: 'Dexter British Council',
            points: [
                'Assisted in writing board exam papers for disabled students.'
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
                                {point}
                            </li>
                        ))}
                    </ul>

                    
                    
                     
                                    </div>
                                ))}
        </div>
    );
};
