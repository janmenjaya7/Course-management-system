import React from 'react'
// reusable component
const Input = ({type,label,placeholder,handleChange,value}) => {
  return (
    <>
    <div>
      <div className="mb-3 input-container">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label shadow-none"
        >
         {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="form-control shadow-none"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
         onChange={handleChange} value={value}/>
        
      </div>
    </div>
  </>
  )
}

export default Input