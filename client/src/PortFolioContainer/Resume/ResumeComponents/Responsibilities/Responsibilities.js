import React from 'react';
import './Responsibilities.css'; // Importing CSS
import AssignmentIcon from '@mui/icons-material/Assignment'; // Importing AssignmentIcon

export default function Responsibilities () {
    const responsibilities = [
        {
            title: 'Qkres',
            logo: 'qkres.png', // Assuming logo images are in the same folder
            points: [
                'Made an MVP of Contactless QR System application in Flutter.',
                'Led a team of 4 people to achieve the MVP.',
                'Showcased the application at a Tech Fest exhibition.'
            ],
            videoLink: 'https://drive.google.com/file/d/1ABy39JVBUcCYbk_fyER6Ww1UTzSaIVfk/preview'
        },
        {
            title: 'Cϕ - Product Team Member',
            logo: 'cphi.jpg',
            points: [
                'Developed a Notes folder organization application for professors and students.',
                'Allowed professors and students to upload notes in a common sharing space.'
            ]
        },
        {
            title: 'Shaastra - Coordinator',
            logo: 'shaastra.png',
            points: [
                'Part of the Tech creation team.',
                'Ideated and organized games for Shaastra Tech Fest.'
            ]
        },
        {
            title: 'Brainly',
            logo: 'brainly.png',
            points: [
                'Helped primary section students with problems in physics, chemistry, and maths.'
            ]
        },
        {
            title: 'Dexter British Council',
            logo: 'Dexter.png',
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
                        <img src={require(`./${item.logo}`)} alt={`${item.title} logo`} className="logo" />
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

                    {/* Check if the current responsibility is 'Qkres' and add the video */}
                    {item.title === 'Qkres' && (
                      <div className="video-container">
                          <iframe
                              src="https://drive.google.com/file/d/1ABy39JVBUcCYbk_fyER6Ww1UTzSaIVfk/preview"
                              width="400"
                              height="400"
                              allow="autoplay"
                              title="Qkres Demo Video"
                          ></iframe>
                      </div>
                    )}

                      {item.title === 'Cϕ - Product Team Member' && (
                                          <div className="image-container">
                                              <img src={require(`./NoteShare.png`)} alt='product image' style={{width:200,height:200}}/>
                                          </div>
                                        )}
                                    </div>
                                ))}
        </div>
    );
};
