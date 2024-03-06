import React from 'react'
import "./AboutUs.scss"
import AboutUsHeader from './AboutUs-Parts/AboutUsHeader'
import AboutUsAbout from './AboutUs-Parts/AboutUsAbout';

export default function AboutUs() {
  return (
    <div className='AboutUs'>
      <AboutUsHeader/>
      <AboutUsAbout/>
    </div>
  )
}
