import React from 'react';
import logoBlack from '../../Assets/Images/amazon-logo-black.png';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="sign-up__container">
        <img src={logoBlack} alt="website-logo" />
        <div className="sign-up__form-control">
          <h1>Create Account</h1>
          <form>
            <div className="user-name__section">
              <label htmlFor="user-name">Your Name</label>
              <input id="user-name" type="text" placeholder="First and last name"/>
            </div>
            <div className="mobile-number__section">
              <label htmlFor="mobile-number">Mobile Number</label>
              <input id="mobile-number" type="number" placeholder="Mobile Number"/>
            </div>
            <div className="user-email__section">
                <label htmlFor="user-email">Your Email</label>
                <input id="user-email" type="email"/>
            </div>
            <div className="set-password__section">
              <label htmlFor="set-password">Set Password</label>
              <input id="set-password" type="password" placeholder="At least 6 characters"/>
            </div>
            <div className="confirm-password__section">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input id="confirm-password" type="password" placeholder="At least 6 characters"/>
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
