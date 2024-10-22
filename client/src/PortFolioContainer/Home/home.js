import React from 'react'
import './home.css'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import {homeImageLinks} from '../../utilities/ImageLinks'

export default function home() {

  // set images from imagelinks in css
  document.documentElement.style.setProperty('--header-bg-image',`url(${homeImageLinks.bg_jpg})`)

  return (
    <div className='home-container'>
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  )
}
