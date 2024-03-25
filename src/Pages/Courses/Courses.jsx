import React from 'react'
import "./Courses.scss"
import CoursesMain from './Courses-Parts/CoursesMain'
import CoursesDisciplines from './Courses-Parts/CoursesDisciplines'
import CoursesTrainers from './Courses-Parts/CoursesTrainers'

export default function Courses() {
  return (
    <div className='Courses'>
      <CoursesMain/>
      <CoursesDisciplines/>
      <CoursesTrainers/>
    </div>
  )
}
