import React from 'react'
import logo3 from "../../Assets/Login page/logo4.svg"
import login from "../../Assets/Login page/signup.png"
import logo from "../../Assets/Login page/thinking.svg"
import email from "../../Assets/Login page/material-symbols_mail-outline.png"
import key from "../../Assets/Login page/carbon_password.png"
import eye from "../../Assets/Login page/el_eye-close (1).png"
import eye_open from "../../Assets/Login page/eye-open2.svg"
import "./login.css"
import { Link } from 'react-router-dom';

export const Sign = () => {

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = eye_open; // Change the image source to an open eye icon
    } else {
      passwordInput.type = "password";
      eyeIcon.src = eye; // Change the image source to a closed eye icon
    }
  }
  return (
    <div className="login">
      <div className="login__left">
        <div className="nav-bar login_br">
          <Link to="/"><img className="nav_logo" src={logo3} alt="logo" /></Link>
          <span className="lingo">Lingo</span>
          <span className="pedia">Pedia</span>
        </div>
        <div className="login__image resize">
          <img src={login} alt="login" />
        </div>
        <div className="login__image-text">
          <p>"Begin a rich journey through diverse <br /> languages and explore the world."</p>
        </div>
      </div>
      <div className="login__form">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "5rem", }}>
          <div className="login__form-title">
            <h2>Welcome User</h2>
            <img src={logo} alt="logo" />
          </div>
          <div className="login__form-details">
            <form>
              <div className="login__form-input">
                <img src={email} alt="email" />
                <input type="email" placeholder="Enter Email" />
              </div>
              <div className="login__form-input">
                <img src={key} alt="key" />
                <input type="password" id="password" placeholder="Enter Password" />
                <img class="eye" src={eye} alt="eye" id="eyeIcon" onClick={togglePasswordVisibility} />
              </div>
              <Link to="/language"><button className="login__form-button">
                <span class="text ">Explore</span>
              </button></Link>
            </form>
            <Link to="/login" className="login_change">------- <span>Already an Account</span>   -------</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
