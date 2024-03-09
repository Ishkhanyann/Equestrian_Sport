import React from 'react'
import "./AboutUs.scss"
import AboutUsHeader from './AboutUs-Parts/AboutUsHeader'
import AboutUsAbout from './AboutUs-Parts/AboutUsAbout';
import AboutUsIcons from './AboutUs-Parts/AboutUsIcons';

export default function AboutUs() {
  return (
    <div className='AboutUs'>
      <AboutUsHeader/>
      <AboutUsAbout/>
      {/* <AboutUsIcons/> */}
    </div>
  )
}
