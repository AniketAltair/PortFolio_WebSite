import React from 'react'
import './home.css'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function home() {
  return (
    <div className='home-container'>
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  )
}
