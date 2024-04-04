import React from 'react'
import logo2 from '../../assets/logo/asignmentlogo.png'
import clockLogo from '../../assets/logo/clock.svg'
import './Syllabus.css'
import ControlledAccordions from '../Accordions/ControlledAccordions'
import Overview from './Overview'
function Syllabus() {
  return (
    <>
      <div className="syllabusContainer1">
        <ul>
          <li>
            <img src={logo2} alt="Logo 1" />
            12 Topics
          </li>
          <li>
            <img src={logo2} alt="Logo 2" />
            12 Assignments
          </li>
          <li className='logoPara'>
            <img className='clockLogo' src={clockLogo} alt="Clock Logo" />
            12 days
          </li>
        </ul>
      </div>
      <div className="syllabusContainer2">
        <div style={{ margin: '10px 100px' }}>
          <ControlledAccordions />
        </div>
        <div style={{ margin: '10px 100px' }}>
          <ControlledAccordions />
        </div>
        <div style={{ margin: '10px 100px' }}>
          <ControlledAccordions />
        </div>
        <div style={{ margin: '10px 100px' }}>
          <ControlledAccordions />
        </div>
      </div>
      <Overview/>
    </>
  )
}

export default Syllabus
