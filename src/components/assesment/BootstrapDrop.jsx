import React from 'react'
import "./BootstrapDrop.css"
const BootstrapDrop = () => {
  return (
    <div>
       
     <div className="dropdown">
   
    <button className="btn  dropdown-toggle drop-btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </div>
  )
}

export default BootstrapDrop