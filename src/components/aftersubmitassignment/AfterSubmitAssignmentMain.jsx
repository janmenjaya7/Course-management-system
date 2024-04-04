import React from 'react'
import './AfterSubmitAssignmentMain.css'
import BasicBreadcrumbs from '../courses/BasicBreadcrumbs'
import BasicChips from './chipAfterSubmitAssess'
import TablePaginationDemo from './TablePaginationDemo'

function AfterSubmitAssignmentMain() {
  return (
    <div className="mainDiv">
      <div className="breadMainAfter">
        <BasicBreadcrumbs />
      </div>
      <div className="statusDivAssess" >
        <div className='statusDivAssess1'>
<p>Topic 1 of 5, Assignment 1 of 4</p>
        </div>
        <div className='statusDivAssess2'>
<BasicChips/>
        </div>
        <div className='statusDivAssess3'>
<TablePaginationDemo/>
        </div>
      </div>
    </div>
  )
}

export default AfterSubmitAssignmentMain
