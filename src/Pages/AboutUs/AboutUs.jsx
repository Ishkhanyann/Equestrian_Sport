import React from 'react'
import "./AboutUs.scss"
import AboutUsHeader from './AboutUs-Parts/AboutUsHeader'
import AboutUsAbout from './AboutUs-Parts/AboutUsAbout';
import AboutUsIcons from './AboutUs-Parts/AboutUsIcons';
import AboutUsCompetitions from './AboutUs-Parts/AboutUsCompetitions';
import AboutUsStables from './AboutUs-Parts/AboutUsStables';
import AboutUsHorses from './AboutUs-Parts/AboutUsHorses';

export default function AboutUs() {
  return (
    <div className='AboutUs'>
      <AboutUsHeader/>
      <AboutUsAbout/>
      <AboutUsStables/>
      <AboutUsHorses/>
      <AboutUsIcons/>
      <AboutUsCompetitions/>
    </div>
  )
}
