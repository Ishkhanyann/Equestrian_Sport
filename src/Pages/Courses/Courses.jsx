import React from 'react'
import "./Courses.scss"
import CoursesMain from './Courses-Parts/CoursesMain'
import CoursesDisciplines from './Courses-Parts/CoursesDisciplines'
import CoursesTrainers from './Courses-Parts/CoursesTrainers'
import CoursesTimeTable from './Courses-Parts/CoursesTimeTable'
import CoursesCourses from './Courses-Parts/CoursesCourses'
import CoursesVideo from './Courses-Parts/CoursesVideo'

export default function Courses() {
  return (
    <div className='Courses'>
      <CoursesMain/>
      <CoursesDisciplines/>
      <CoursesTrainers/>
      <CoursesVideo/>
      <CoursesCourses/>
      <CoursesTimeTable/>
    </div>
  )
}
