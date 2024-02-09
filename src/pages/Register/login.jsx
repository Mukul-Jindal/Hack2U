import React, { useContext, useState } from "react";
import logo3 from "../../Assets/Login page/logo4.svg";
import login from "../../Assets/Login page/login.png";
import logo from "../../Assets/Login page/thinking.svg";
import email from "../../Assets/Login page/material-symbols_mail-outline.png";
import key from "../../Assets/Login page/carbon_password.png";
import eye from "../../Assets/Login page/el_eye-close (1).png";
import eye_open from "../../Assets/Login page/eye-open2.svg"
import "./login.css";
import { Link } from "react-router-dom";
import { userContext } from "../../firebase/userState";
import signIn from "../../firebase/userAuth";

export const Login = () => {
  const [emailEntered, setEmail] = useState('');
  const [passwordEntered, setPassword] = useState('');
  const { user, setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(emailEntered, passwordEntered)
      .then((userFetched) => {
        setUser(userFetched);
        console.log(user)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = eye_open;
    } else {
      passwordInput.type = "password";
      eyeIcon.src = eye;
    }
  }

  return (
    <div className="login">
      <div className="login__left">
        <div className="login__image">
          <img src={login} alt="login" />
        </div>
        <div className="login__image-text">
          <p>
            "Dive right into the rich tapestry of styles and <br />
            continue your fashion adventure."
          </p>
        </div>
      </div>
      <div className="login__form">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5rem",
          }}>
          <div className="login__form-title">
            <h2>Welcome Back</h2>
            <img src={logo} alt="logo" />
          </div>
          <div className="login__form-details">
            <form onSubmit={handleSubmit}>
              <div className="login__form-input">
                <img src={email} alt="email" />
                <input type="email" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="login__form-input">
                <img src={key} alt="key" />
                <input type="password" id="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} />
                <img className="eye" src={eye} alt="eye" id="eyeIcon" onClick={togglePasswordVisibility} />
              </div>

              {/* <Link to="/"> */}
              <button className="login__form-button">
                <span className="text ">Continue</span>
              </button>
              {/* </Link> */}

            </form>
            <Link to="/register" className="login_change">
              ------- <span>Need an Account ?</span> -------
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
