import React, { useEffect } from "react";
import "../styles/loginstyles.css";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // fetching userinfo can be done on the client or the server
        const userInfo = await axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          })
          .then((res) => res.data);

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        navigate("/dashboard");
      }
      catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      navigate('/dashboard');
      alert("You have already logged in , please logout first!");
    }
  }, []);

  // navigate("/dashboard");
  return (
    <div className="login">
      <div className="leftcontainer">
        <h2>LOGO</h2>
        <h1 className="companyName">Board.</h1>
        <div className="socials">
          <AiFillGithub />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <BiLogoDiscord />
        </div>
      </div>
      <div className="rightcontainer">
        <div className="formcontainer">
          <div>
            <h1> Sign In </h1>
            <p className="description">Sign in to your account</p>
          </div>
          <button id="google-btn" onClick={() => googleLogin()}>
            <FcGoogle /> Sign in with Google
          </button>

          <div className="detailscontainer">
            <p>Email Address</p>
            <input
              type="email"
              className="login-input"
              placeholder="Enter your Email"
            />

            <p>Password</p>
            <input
              type="email"
              className="login-input"
              placeholder="Enter your Password"
            />

            <p id="forget">Forgot password?</p>

            <button>Sign In</button>
          </div>
          <p className="login-footer">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
