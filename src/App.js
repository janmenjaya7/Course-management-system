
import './App.css'
import React from 'react'
import CustomizedAccordions from './components/courses/Faq'
import CourseCardDetails from './components/courses/CoursesCardDetails'
import Syllabus from './components/courses/Syllabus'

function App() {
  return (
    <>
      <CourseCardDetails />
      <Syllabus />
      <CustomizedAccordions />
      <CustomizedAccordions />
      <CustomizedAccordions />
      <CustomizedAccordions />
    </>
  )
}
export default App
