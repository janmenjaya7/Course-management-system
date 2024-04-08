// import React from "react";
// import "./register.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import passwordicon from "../../assets/passwordicon/eye.svg";
// import Input from "../inpute/Input";
// import { useNavigate } from "react-router-dom";

// const Register = ({ heding, title }) => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="outersection">
//         <div className="container container-box">
//           <form onSubmit="#">
//             <h1 className="heading">{heding}</h1>
//             <h4 className="Register-Now">{title}</h4>
//             <Input
//               type={"text"}
//               label={"Full name"}
//               placeholder={"Full name"}
//             />
//             <Input type={"email"} label={"Email id"} placeholder={"Email"} />
//             <div className="password-input">
//               <Input
//                 type={"password"}
//                 label={"Password"}
//                 placeholder={"Password"}
//               />
//               {<img className="img-section" src={passwordicon} alt="icon" />}
//             </div>
//             <button
//               onClick={() => navigate("/student/login")}
//               type="submit"
//               className="btn custom-button"
//               style={{
//                 backgroundColor: "#1D366F",
//                 background: "#1D366F 0% 0% no-repeat padding-box",
//                 color: "#FFFFFF",
//               }}
//             >
//               Register
//             </button>
//             <p className="paragraph">
//               By continuing, you agree to our <span>Terms of Use</span> and{" "}
// //               <span>Privacy policies</span>
//             </p>
//           </form>
//         </div>
//       </div>
//       <h5 className="login-link">
//         Already have an account? <span>Login</span>
//       </h5>
//     </div>
//   );
// };

// export default Register;
//


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import passwordicon from '../../assets/passwordicon/eye.svg';
import Input from '../inpute/Input';
import { useNavigate } from 'react-router-dom';

const Register = ({ heading, title }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const watchedFields = watch();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data)); // Store data in local storage
    navigate('/student/login');
    reset();
  };

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div id="register-main-section">
      <div className="outersection">
        <div className="container-box">
          <form onSubmit="#">
            <h1 className="heading">{heding}</h1>
            <h4 className="Register-Now">{title}</h4>
            <Input
              type={'text'}
              label={'Full name'}
              placeholder={'Full name'}
              {...register('fullName', { required: 'Full name is required' })}
            />
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
            <Input
              type={'email'}
              label={'Email id'}
              placeholder={'Email'}
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            <div className="password-input">
              <Input
                type={passwordVisible ? 'text' : 'password'}
                label={'Password'}
                placeholder={'Password'}
                {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
              />
              <img className="img-section" src={passwordicon} alt="icon" style={{ position: 'absolute', bottom: '25px', cursor: 'pointer' }} onClick={togglePasswordVisible} />
            </div>
            {watchedFields.password && <p className="error-message">{errors.password && errors.password.message}</p>}
            <button
              type="submit"
              className="btn custom-button"
              style={{
                backgroundColor: '#1D366F',
                color: '#FFF',
              }}
            >
              Register
            </button>
            <p className="paragraph">
              By continuing, you agree to our <span>Terms of Use</span> and{' '}
              <span>Privacy policies</span>
            </p>
          </form>
        </div>
      </div>
      <div className="login-link">
        Already have an account? <span>Login</span>
      </div>
    </div>
  );
};

export default Register;




