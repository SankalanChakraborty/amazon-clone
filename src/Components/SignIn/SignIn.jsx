import React from 'react';
import './SignIn.css';
import logoBlack from '../../Assets/Images/amazon-logo-black.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="sign-in__container">
        <img src={logoBlack} alt="website-logo" />
        <div className="sign-in__form-control">
          <h1>Sign-In</h1>
          <form>
            <div className="email">
              <label htmlFor="user-email">Email</label>
              <input id="user-email" type="email" />
            </div>
            <div className="password">
              <label htmlFor="user-password">Password</label>
              <input id="user-password" type="password"/>
            </div>
              <button>Continue</button>
          </form>
        </div>
        <div className="new-user__section">
            <p>New to Amazon?</p>
            <Link to="/signup"><button>Create Your Amazon Account</button></Link>
        </div>
    </div>
  )
}

export default SignIn;
