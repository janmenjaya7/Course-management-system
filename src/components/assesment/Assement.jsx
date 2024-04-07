import React from 'react'
import  "./assesment.css"
import BootstrapDrop from './BootstrapDrop'



const Assement = () => {
  return (
    <div>
        <div className='assesment-outersection'>
        <div className="assentment-icon">
        <p>Assessment 1</p>
        <i className="fa-solid fa-x"></i>
      </div>
      <div className='assesment-innerBorder'>

      </div>
      <div className='assesment-inputBox'>
        <label htmlFor="">Title</label>
        <input type="text"  placeholder='Enter assessment 1 title'/>
      </div>
      <div className='MultipleSelect'>
      <p>Time Duration (in days)</p>
     <BootstrapDrop/>
      </div>
        </div>
    </div>
  )
}

export default Assement



