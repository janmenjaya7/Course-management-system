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

export default ButtonSection;
