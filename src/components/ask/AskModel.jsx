
import React, { useState } from 'react';
import ComboBox from './ComboBox';
import './askmodel.css';

function AskModel({ handleClose }) {
  const [close, setClose] = useState(true);

  const handleCloseModal = () => {
    setClose(false);
    handleClose(); 
  };

  return (
    <>
      <div className='Askmodel-outersection'>
        <div className='icon-section'>
          <p>Ask a question</p>
          <i className="fa-solid fa-x" onClick={handleCloseModal}></i>
        </div>
        <div className='ask-border'></div>
        <div>
          <p className='Your-Question'>Your Question</p>
          <div className='inner-box'></div>
        </div>
        <div className='ComboBox'>
          <div>
            <span>Select Course</span>
            <ComboBox label="Select Course" />
          </div>
          <div>
            <span>Select Topic</span>
            <ComboBox label="Select Topic" />
          </div>
        </div>
        <div className='border-bottom'></div>
        <div className='bottom-border'>
          <button className='Submit-Question'>Submit Question</button>
        </div>
      </div>
    </>
  );
}

export default AskModel;
