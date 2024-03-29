import React from 'react'

const Input = ({type,label}) => {
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
          className="form-control shadow-none"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    </div>
  </>
  )
}

export default Input