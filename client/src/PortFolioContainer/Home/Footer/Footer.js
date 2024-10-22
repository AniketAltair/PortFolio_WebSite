import React from 'react'
import './Footer.css'
import {homeImageLinks} from '../../../utilities/ImageLinks'

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={homeImageLinks.shape_bg} alt="No internet Connection"/>
        </div>
    </div>
  )
}
