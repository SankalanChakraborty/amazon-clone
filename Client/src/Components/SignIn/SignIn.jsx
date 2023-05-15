import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import logoBlack from "../../Assets/Images/amazon-logo-black.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const Navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  const setLoginData = (e) => {
    const { name, value } = e.target;

    // Clearing out validation errors if any
    if (name === "email" && emailError) {
      setEmailError("");
    }
    if (name === "password" && passwordError) {
      setpasswordError("");
    }

    // Set login data
    setLogData(() => {
      return {
        ...logData,
        [name]: value,
      };
    });
  };

  const userLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logData),
    });
    const data = await response.json();

    // Login Validation
    if (!data.includes("Login successful")) {
      if (data.includes("Incorrect password")) {
        setpasswordError(data);
      }
      if (data.includes("Incorrect email")) {
        setEmailError(data);
      }
    } else {
      console.log("Login Successfull");
      Navigate("/", { state: "" });
    }
  };

  return (
    <div className="sign-in__container">
      <img src={logoBlack} alt="website-logo" />
      <div className="sign-in__form-control">
        <h1>Sign-In</h1>
        <form method="POST" onSubmit={userLogin}>
          <div className="email">
            <label htmlFor="user-email">Email</label>
            {emailError ? <span className="error-text">{emailError}</span> : ""}
            <input
              id="user-email"
              name="email"
              type="email"
              value={logData.email}
              onChange={setLoginData}
              required
            />
          </div>
          <div className="password">
            <label htmlFor="user-password">Password</label>{" "}
            {passwordError ? (
              <span className="error-text">{passwordError}</span>
            ) : (
              ""
            )}
            <input
              id="user-password"
              name="password"
              type="password"
              value={logData.password}
              onChange={setLoginData}
              required
            />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
      <div className="new-user__section">
        <p>New to Amazon?</p>
        <Link to="/signup">
          <button>Create Your Amazon Account</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
