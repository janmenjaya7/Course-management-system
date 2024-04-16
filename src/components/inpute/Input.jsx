// import React from "react";
// // reusable component
// import "./input.css";
// const Input = ({ type, label, placeholder,handleChange }) => {
//   return (
//     <>
//       <div>
//         <div className="mb-3 input-container">
//           <label
//             htmlFor="exampleInputEmail1"
//             className="form-label shadow-none"
//             id="input-lable"
//           >
//             {label}
//           </label>
//           <input
//             type={type}
//             placeholder={placeholder}
//             className="form-control shadow-none"
//         onChange={handleChange}  />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Input;
// Input.js

import React from "react";
import "./input.css";

const Input = ({ type, label, placeholder, handleChange, value, error }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        style={{ boxShadow: "none" }}
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
