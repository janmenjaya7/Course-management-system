<<<<<<< HEAD
import React from 'react';
import Button from '@mui/material/Button';
import './ButtonSection.css';

const ButtonSection = ({ id, variant, onClick, buttonText }) => {
  let buttonClass = 'custom-button';// DEFAULT CLASS FOR ALL VARIANTS.

  // CLASS BASED ON VARIANTS.
  if (variant === 'outlined') {
    buttonClass += ' outlined';
  } else if (variant === 'text') {
    buttonClass += ' text';
  }
  else if(variant==="contained"){
    buttonClass += 'contained'

  }

  return (
    <Button id={id} variant={variant} onClick={onClick} className={buttonClass}>
      {buttonText}
    </Button>
  );
};
=======
import React from "react";
import Button from "@mui/material/Button";
function ButtonSection({ variant, handleClick, btnTitle }) {
  return (
    <div>
      <Button variant={variant} onClick={handleClick}>
        {btnTitle}
      </Button>
    </div>
  );
}
>>>>>>> 9652158f408d67e2887cdf06e8c033263ac35d42

export default ButtonSection;
