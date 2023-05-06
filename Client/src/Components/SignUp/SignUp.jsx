import React, {useState} from 'react';
import logoBlack from '../../Assets/Images/amazon-logo-black.png';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [newUserData, setNewUserData] = useState({
    fullName:"",
    mobileNum:"",
    email:"",
    setPassword:"",
    confirmPassword:""
  });
  const [error, setError] = useState({
    passwordShort: false,
    passwordDontMatch: false
  });

  const checkformValidation = (e)=>{

    if(newUserData.setPassword === "" && newUserData.confirmPassword === ""){
      setError({
        passwordShort: false,
        passwordDontMatch: false
      });
    }

    if(e.target.name === "setPassword" && e.target.value.length < 6){
      setError({
        passwordShort: true,
        passwordDontMatch: false
      });
    }

    if(e.target.name === "setPassword" && e.target.value.length === 6){
      setError({
        passwordShort: false,
        passwordDontMatch: false
      });
    }

    if(e.target.name === "confirmPassword" && newUserData.setPassword !== newUserData.confirmPassword){
      setError({
        passwordShort: false,
        passwordDontMatch: true
      });
    }

    if(e.target.name === "confirmPassword" && newUserData.setPassword === newUserData.confirmPassword){
      setError({
        passwordShort: false,
        passwordDontMatch: false
      });
    }
  }

  const storeNewUserData = (e)=>{
    const {name, value} = e.target;
    setNewUserData(()=>{
      return{
        ...newUserData,
        [name]:value
      }
    })
  }

  const registerUser = async(e)=>{
    e.preventDefault();
    if (!error.passwordShort && !error.passwordDontMatch){
      const response = await fetch("http://localhost:8000/signup", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newUserData)
      });
      console.log(response);
    }
    else{
      console.log("Validation failed");
    }
    
  }

  return (
    <div className="sign-up__container">
        <img src={logoBlack} alt="website-logo" />
        <div className="sign-up__form-control">
          <h1>Create Account</h1>
          <form action="/signup" method="POST" onSubmit={registerUser}>
            <div className="user-name__section">
              <label htmlFor="user-name">Your Name</label>
              <input id="user-name" name="fullName" type="text" placeholder="First and last name" value={newUserData.fullName} onChange={storeNewUserData} required/>
            </div>
            <div className="mobile-number__section">
              <label htmlFor="mobile-number">Mobile Number</label>
              <input id="mobile-number" name="mobileNum" type="number" placeholder="Mobile Number" value={newUserData.mobileNum} onChange={storeNewUserData} required/>
            </div>
            <div className="user-email__section">
                <label htmlFor="user-email">Your Email</label>
                <input id="user-email" name="email" type="email" value={newUserData.email} onChange={storeNewUserData} required/>
            </div>
            <div className="set-password__section">
              <label htmlFor="set-password">Set Password</label> <span className="tooltip" style={error.passwordShort ? {display: "block"} : {display: "none"}}><i className="fa-solid fa-lightbulb"></i>Password must contain at least six characters</span>
              <input className= {error.passwordShort ? "error-class" : ""} id="set-password" name="setPassword" type="password" placeholder="At least 6 characters" value={newUserData.setPassword} onChange={storeNewUserData} onBlur={checkformValidation} required/>
            </div>
            <div className="confirm-password__section">
              <label htmlFor="confirm-password">Confirm Password</label> <span className="tooltip" style={error.passwordDontMatch ? {display: "block"} : {display: "none"}}><i className="fa-solid fa-lightbulb"></i>Passwords do not match</span>
              <input className= {error.passwordDontMatch ? "error-class" : ""} id="confirm-password" name="confirmPassword" type="password" placeholder="At least 6 characters" value={newUserData.confirmPassword} onChange={storeNewUserData} onBlur={checkformValidation} required/>
            </div>
              <button>Continue</button>
          </form>
        </div>
        <div className="old-user__section">
            <span>Already have an account?</span> <Link to="/signin">Sign In</Link>
        </div>
    </div>
  )
}

export default SignUp
