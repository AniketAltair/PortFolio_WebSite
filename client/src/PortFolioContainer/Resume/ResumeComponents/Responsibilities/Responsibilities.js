import React from 'react';
import './Responsibilities.css'; 
import AssignmentIcon from '@mui/icons-material/Assignment'; 
import {responsibilitiesImageLinks} from '../../../../utilities/ImageLinks';

export default function Responsibilities () {
    
    // Responsibilities static Data
    const responsibilities = [
        {
            title: 'Qkres',
            logo: responsibilitiesImageLinks.qkres, 
            points: [
                'Made an MVP of Contactless QR System application in Flutter.',
                'Led a team of 4 people to achieve the MVP.',
                'Showcased the application at a Tech Fest exhibition.'
            ],
            videoLink: responsibilitiesImageLinks.qrscanner_gif
        },
        {
            title: 'Cϕ - Product Team Member',
            logo: responsibilitiesImageLinks.cphi,
            points: [
                'Developed a Notes folder organization application for professors and students.',
                'Allowed professors and students to upload notes in a common sharing space.'
            ],
            imageLink: responsibilitiesImageLinks.noteshare
        },
        {
            title: 'Shaastra - Coordinator',
            logo: responsibilitiesImageLinks.shaastra,
            points: [
                'Part of the Tech creation team.',
                'Ideated and organized games for Shaastra Tech Fest.'
            ]
        },
        {
            title: 'Brainly',
            logo: responsibilitiesImageLinks.brainly,
            points: [
                'Helped primary section students with problems in physics, chemistry, and maths.'
            ]
        },
        {
            title: 'Dexter British Council',
            logo: responsibilitiesImageLinks.dexter,
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
                        <img src={item.logo} alt={`${item.title} logo`} className="logo" />
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
                    {item.title === 'Qkres' && (
                      <div className="video-container">
                          <iframe
                              src={item.videoLink}
                              allow="autoplay"
                              title="Qkres Demo Video"
                          ></iframe>
                      </div>
                    )}
                    {item.title === 'Cϕ - Product Team Member' && (
                        <div className="image-container">
                            <img src={item.imageLink} alt='product img' style={{width:200,height:200}}/>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
