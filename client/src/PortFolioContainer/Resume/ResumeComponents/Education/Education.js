import React from 'react';
import './Education.css'; // Importing CSS
import SchoolIcon from '@mui/icons-material/School';

export default function Education () {
    const responsibilities = [
        {
            title: 'Bachelors in Technology - Mechanical Engineering',
            points: [
                'From: Indian Institute of Technology Madras (IITM)',
                'Year of Completion : 2023',
                '7.88 / 10'
            ],
            videoLink: 'https://drive.google.com/file/d/1ABy39JVBUcCYbk_fyER6Ww1UTzSaIVfk/preview'
        },
        {
            title: 'XII (HSC) - Secondary Education',
            points: [
                'From: RatanbaiWalbai Junior College of Science',
                'Year of Completion : 2019',
                '88.9 %'
            ]
        },
        {
            title: 'X (ICSE) - Primary Education',
            points: [
                'From: Smt. Sulochanadevi Singhania School',
                'Year of Completion : 2017',
                '96.67 %'
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
                                <SchoolIcon style={{ color: '#ff5823', marginRight: '10px' }} />
                                {((item.title==="Bachelors in Technology - Mechanical Engineering" && i===0) || (i===2))?
                                (i!==2)?
                                <span>
                                  From: <strong className='education-bold'>Indian Institute of Technology Madras (IITM)</strong>
                                </span>:
                                <span>CGPA: <strong className='education-bold'>{point}</strong></span>
                                :point}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
